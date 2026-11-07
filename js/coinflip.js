/* =========================================================
   SPECTATOR ROOM — js/coinflip.js
   Pick heads or tails. Win = double. Lose = nothing.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const MIN = 10;
  const MAX = Infinity;

  const stage = document.getElementById('coin-stage');
  const coin = document.getElementById('coin');
  const flipButton = document.getElementById('coin-flip');
  const betInput = document.getElementById('coin-bet');
  const betChips = Array.from(document.querySelectorAll('[data-coin-bet]'));
  const choiceButtons = Array.from(document.querySelectorAll('[data-choice]'));
  const resultElement = document.getElementById('coin-result');
  const streakElement = document.getElementById('coin-streak');
  const bestElement = document.getElementById('coin-best');
  const lastElement = document.getElementById('coin-last');

  if (!stage || !coin || !flipButton || !betInput) return;

  let choice = 'heads';
  let rotation = 0;
  let flipping = false;
  let streak = 0;
  let best = Number(Points.getStats().bestStreak) || 0;

  bestElement.textContent = best;

  /* -------------------------------------------------------
     Betting
     ------------------------------------------------------- */
  function setBet(value) {
    const balance = Points.getBalance();
    const ceiling = Math.max(MIN, Math.min(MAX, balance || MIN));
    const bet = SR.clamp(Math.floor(Number(value) || MIN), MIN, ceiling);
    betInput.value = bet;
    betChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.coinBet) === bet);
    });
  }

  function readBet() {
    const bet = Math.floor(Number(betInput.value));

    if (!Number.isFinite(bet) || bet < MIN) {
      Points.notify(`Minimum bet is ${MIN} points.`, 'red', '⚠️');
      Sound.play('error');
      return null;
    }
    if (bet > MAX) {
      Points.notify(`Maximum bet is ${MAX} points.`, 'red', '⚠️');
      Sound.play('error');
      return null;
    }
    if (bet > Points.getBalance()) {
      Points.notify('Not enough points for that bet.', 'red', '⚠️');
      Sound.play('error');
      return null;
    }
    return bet;
  }

  betInput.addEventListener('change', () => setBet(betInput.value));
  betInput.addEventListener('blur', () => setBet(betInput.value));
  betInput.addEventListener('focus', () => betInput.select());

  betChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      Sound.play('click');
      const value = chip.dataset.coinBet === 'max'
        ? Math.min(MAX, Points.getBalance())
        : chip.dataset.coinBet;
      setBet(value);
    });
  });

  /* -------------------------------------------------------
     Choice
     ------------------------------------------------------- */
  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (flipping) return;
      choice = button.dataset.choice;
      Sound.play('click');
      choiceButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      resultElement.className = 'coin-result';
      resultElement.textContent = `You called ${choice.toUpperCase()}. Now flip.`;
    });
  });

  /* -------------------------------------------------------
     Lock / unlock controls
     ------------------------------------------------------- */
  function setControlsDisabled(disabled) {
    betInput.disabled = disabled;
    betChips.forEach((chip) => { chip.disabled = disabled; });
    choiceButtons.forEach((button) => { button.disabled = disabled; });
    flipButton.disabled = disabled;
  }

  /* -------------------------------------------------------
     Flip
     ------------------------------------------------------- */
  function flip() {
    if (flipping) return;

    const bet = readBet();
    if (bet === null) return;

    // Lock the controls before Points triggers a re-render.
    flipping = true;
    if (!Points.startRound(bet)) {
      flipping = false;
      return;
    }

    setControlsDisabled(true);
    stage.classList.remove('is-win', 'is-loss');
    resultElement.className = 'coin-result';
    resultElement.textContent = 'Coin is in the air…';
    Sound.play('flip');

    // The result is decided honestly at 50/50.
    const result = Points.random() < 0.5 ? 'heads' : 'tails';

    // Add at least five full spins, then land on the correct face.
    const currentFace = ((rotation % 360) + 360) % 360; // 0 = heads, 180 = tails
    const wantedFace = result === 'heads' ? 0 : 180;
    const adjustment = ((wantedFace - currentFace) + 360) % 360;
    rotation += 1800 + adjustment;
    coin.style.transform = `rotateY(${rotation}deg)`;

    stage.classList.remove('is-flipping');
    void stage.offsetWidth;
    stage.classList.add('is-flipping');

    setTimeout(() => {
      const won = result === choice;
      const payout = won ? bet * 2 : 0;

      if (won) {
        streak += 1;
        if (streak > best) {
          best = streak;
          Points.recordBest('bestStreak', best);
        }
        if (streak >= 5) Points.unlock('streak-5');
      } else {
        streak = 0;
      }

      Points.endRound(bet, payout);

      stage.classList.remove('is-flipping');
      stage.classList.add(won ? 'is-win' : 'is-loss');
      resultElement.className = `coin-result ${won ? 'is-win' : 'is-loss'}`;

      if (won) {
        resultElement.innerHTML = `It's <strong>${result.toUpperCase()}</strong>. You win <strong>+${bet}</strong> points. Streak: <strong>${streak}</strong>.`;
        Sound.play('win');
      } else {
        resultElement.innerHTML = `It's <strong>${result.toUpperCase()}</strong>. You lose <strong>${bet}</strong> points. Streak reset.`;
        Sound.play('lose');
      }

      streakElement.textContent = streak;
      bestElement.textContent = best;
      lastElement.textContent = result.toUpperCase();

      flipping = false;
      setControlsDisabled(false);
      setBet(bet);
    }, 1200);
  }

  flipButton.addEventListener('click', flip);

  // Space is a shortcut for the flip button.
  document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || event.repeat) return;
    if (document.querySelector('dialog[open]')) return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'SELECT') return;
    event.preventDefault();
    flip();
  });

  Points.subscribe(() => {
    if (flipping) return;
    setBet(betInput.value);
    best = Number(Points.getStats().bestStreak) || 0;
    bestElement.textContent = best;
  });

  setBet(25);
});
