/* =========================================================
   SPECTATOR ROOM — js/dice.js
   Two dice, three calls: under 7, exactly 7, or over 7.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const MIN = 10;
  const MAX = Infinity;
  const PAYOUTS = { under: 2.3, seven: 5.8, over: 2.3 };
  const PIP_POSITIONS = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
  };

  const stage = document.getElementById('dice-stage');
  const dieA = document.getElementById('die-a');
  const dieB = document.getElementById('die-b');
  const totalElement = document.getElementById('dice-total');
  const rollButton = document.getElementById('dice-roll');
  const betInput = document.getElementById('dice-bet');
  const betChips = Array.from(document.querySelectorAll('[data-dice-bet]'));
  const choiceButtons = Array.from(document.querySelectorAll('[data-dice-choice]'));
  const resultElement = document.getElementById('dice-result');
  const lastElement = document.getElementById('dice-last');
  const streakElement = document.getElementById('dice-streak');
  const historyElement = document.getElementById('dice-history');

  if (!stage || !dieA || !dieB || !rollButton || !betInput) return;

  let choice = 'under';
  let rolling = false;
  let streak = 0;
  let history = [];

  /* -------------------------------------------------------
     Dice faces
     ------------------------------------------------------- */
  function renderDie(element, value) {
    const pips = PIP_POSITIONS[value] || PIP_POSITIONS[1];
    element.dataset.value = value;
    element.innerHTML = Array.from({ length: 9 }, (_, index) => (
      `<i class="${pips.includes(index) ? 'is-pip' : ''}"></i>`
    )).join('');
  }

  function rollFace() {
    return 1 + Math.floor(Points.random() * 6);
  }

  function updateHistory(sum) {
    history = [sum, ...history].slice(0, 6);
    historyElement.textContent = history.join(' · ');
  }

  /* -------------------------------------------------------
     Betting
     ------------------------------------------------------- */
  function setBet(value) {
    const balance = Points.getBalance();
    const ceiling = Math.max(MIN, Math.min(MAX, balance || MIN));
    const bet = SR.clamp(Math.floor(Number(value) || MIN), MIN, ceiling);
    betInput.value = bet;
    betChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.diceBet) === bet);
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

  function setControlsDisabled(disabled) {
    betInput.disabled = disabled;
    betChips.forEach((chip) => { chip.disabled = disabled; });
    choiceButtons.forEach((button) => { button.disabled = disabled; });
    rollButton.disabled = disabled;
  }

  /* -------------------------------------------------------
     Choice
     ------------------------------------------------------- */
  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (rolling) return;
      choice = button.dataset.diceChoice;
      Sound.play('click');
      choiceButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      resultElement.className = 'dice-result';
      resultElement.textContent = `Call set: ${button.querySelector('span').textContent}. Set a bet and roll.`;
    });
  });

  /* -------------------------------------------------------
     Roll
     ------------------------------------------------------- */
  function roll() {
    if (rolling) return;

    const bet = readBet();
    if (bet === null) return;

    rolling = true;
    if (!Points.startRound(bet)) {
      rolling = false;
      return;
    }

    setControlsDisabled(true);
    stage.classList.remove('is-win', 'is-loss', 'is-rolling');
    void stage.offsetWidth;
    stage.classList.add('is-rolling');
    resultElement.className = 'dice-result';
    resultElement.textContent = 'Dice are in the air…';
    Sound.play('flip');

    const tumble = setInterval(() => {
      renderDie(dieA, rollFace());
      renderDie(dieB, rollFace());
      totalElement.textContent = '?';
    }, 85);

    setTimeout(() => {
      clearInterval(tumble);

      const a = rollFace();
      const b = rollFace();
      const sum = a + b;
      const won = choice === 'seven' ? sum === 7 : choice === 'under' ? sum < 7 : sum > 7;
      const multiplier = PAYOUTS[choice];
      const payout = won ? Math.round(bet * multiplier) : 0;

      renderDie(dieA, a);
      renderDie(dieB, b);
      totalElement.textContent = sum;
      stage.classList.remove('is-rolling');
      stage.classList.add(won ? 'is-win' : 'is-loss');

      Points.endRound(bet, payout);

      if (won) {
        streak += 1;
        if (choice === 'seven') Points.unlock('dice-seven');
        Sound.play('win');
      } else {
        streak = 0;
        Sound.play('lose');
      }

      resultElement.className = `dice-result ${won ? 'is-win' : 'is-loss'}`;
      resultElement.innerHTML = won
        ? `Rolled <strong>${sum}</strong>. Your <strong>${choice.toUpperCase()}</strong> call wins <strong>+${SR.fmt(payout - bet)}</strong> points.`
        : `Rolled <strong>${sum}</strong>. Your <strong>${choice.toUpperCase()}</strong> call loses <strong>${SR.fmt(bet)}</strong> points.`;

      lastElement.textContent = sum;
      streakElement.textContent = streak;
      updateHistory(sum);

      rolling = false;
      setControlsDisabled(false);
      setBet(bet);
    }, 900);
  }

  rollButton.addEventListener('click', roll);

  document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || event.repeat) return;
    if (document.querySelector('dialog[open]')) return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'SELECT') return;
    event.preventDefault();
    roll();
  });

  betInput.addEventListener('change', () => setBet(betInput.value));
  betInput.addEventListener('blur', () => setBet(betInput.value));
  betInput.addEventListener('focus', () => betInput.select());

  betChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      Sound.play('click');
      const value = chip.dataset.diceBet === 'max'
        ? Math.min(MAX, Points.getBalance())
        : chip.dataset.diceBet;
      setBet(value);
    });
  });

  Points.subscribe(() => {
    if (rolling) return;
    setBet(betInput.value);
  });

  renderDie(dieA, 3);
  renderDie(dieB, 4);
  setBet(25);
});
