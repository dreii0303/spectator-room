/* =========================================================
   SPECTATOR ROOM — js/slots.js
   The main event: a three-reel slot machine.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  /* -------------------------------------------------------
     Symbols and payouts
     weight  = how often the symbol appears (bigger = common)
     three   = payout multiplier for three of a kind
     two     = payout multiplier for exactly two of a kind
     ------------------------------------------------------- */
  const SYMBOLS = [
    { key: 'cherry', glyph: '🍒', name: 'cherries', weight: 28, three: 6, two: 1 },
    { key: 'lemon', glyph: '🍋', name: 'lemons', weight: 24, three: 8, two: 0.5 },
    { key: 'bell', glyph: '🔔', name: 'bells', weight: 18, three: 12, two: 1 },
    { key: 'star', glyph: '⭐', name: 'stars', weight: 14, three: 20, two: 1.5 },
    { key: 'diamond', glyph: '💎', name: 'diamonds', weight: 10, three: 40, two: 2 },
    { key: 'seven', glyph: '7️⃣', name: 'sevens', weight: 6, three: 'jackpot', two: 6 }
  ];

  const TOTAL_WEIGHT = SYMBOLS.reduce((sum, symbol) => sum + symbol.weight, 0);
  const MIN = 10;
  const MAX = Infinity;

  /* -------------------------------------------------------
     Elements
     ------------------------------------------------------- */
  const machine = document.getElementById('slot-machine');
  const reels = Array.from(document.querySelectorAll('.reel'));
  const reelSymbols = reels.map((reel) => reel.querySelector('.reel-symbol'));
  const resultBox = document.getElementById('slot-result');
  const spinButton = document.getElementById('slot-spin');
  const betInput = document.getElementById('slot-bet');
  const betChips = Array.from(document.querySelectorAll('[data-slot-bet]'));
  const paytableThree = document.getElementById('paytable-three');
  const paytableTwo = document.getElementById('paytable-two');

  if (!machine || reels.length !== 3 || !spinButton || !betInput) return;

  let spinning = false;
  let flashOverlay = null;

  /* -------------------------------------------------------
     Betting
     ------------------------------------------------------- */
  function getBalance() {
    return Points.getBalance();
  }

  function friendlyBet(value) {
    const number = Math.floor(Number(value) || MIN);
    const ceiling = Math.max(MIN, Math.min(MAX, getBalance() || MIN));
    return SR.clamp(number, MIN, Math.max(MIN, ceiling));
  }

  function setBet(value) {
    const bet = friendlyBet(value);
    betInput.value = bet;
    betChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.slotBet) === bet);
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
    if (bet > getBalance()) {
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
      const value = chip.dataset.slotBet === 'max' ? Math.min(MAX, getBalance()) : chip.dataset.slotBet;
      setBet(value);
    });
  });

  /* -------------------------------------------------------
     Paytable (generated from the same numbers above)
     ------------------------------------------------------- */
  function buildPaytable() {
    if (paytableThree) {
      paytableThree.innerHTML = SYMBOLS.slice().reverse().map((symbol) => {
        const payout = symbol.three === 'jackpot' ? 'JACKPOT' : `${symbol.three}×`;
        return `<li class="${symbol.three === 'jackpot' ? 'is-jackpot' : ''}">
          <span class="symbols">${symbol.glyph}${symbol.glyph}${symbol.glyph}</span>
          <strong>${payout}</strong>
        </li>`;
      }).join('');
    }

    if (paytableTwo) {
      paytableTwo.innerHTML = SYMBOLS.slice().reverse().map((symbol) => `
        <li>
          <span class="symbols">${symbol.glyph}${symbol.glyph}</span>
          <strong>${symbol.two}×</strong>
        </li>
      `).join('');
    }
  }

  /* -------------------------------------------------------
     Reel helpers
     ------------------------------------------------------- */
  function randomSymbol() {
    let ticket = Points.random() * TOTAL_WEIGHT;
    for (const symbol of SYMBOLS) {
      ticket -= symbol.weight;
      if (ticket < 0) return symbol;
    }
    return SYMBOLS[0];
  }

  function clearHighlights() {
    reels.forEach((reel) => {
      reel.classList.remove('is-win', 'is-spinning', 'is-settling');
    });
  }

  function evaluate(results) {
    const [a, b, c] = results;

    if (a.key === b.key && b.key === c.key) {
      if (a.key === 'seven') return { type: 'jackpot', symbol: a, indices: [0, 1, 2] };
      return { type: 'triple', symbol: a, multiplier: a.three, indices: [0, 1, 2] };
    }

    const counts = {};
    results.forEach((symbol) => {
      counts[symbol.key] = (counts[symbol.key] || 0) + 1;
    });

    const pairKey = Object.keys(counts).find((key) => counts[key] === 2);
    if (pairKey) {
      const symbol = SYMBOLS.find((item) => item.key === pairKey);
      const indices = results.map((item, index) => (item.key === pairKey ? index : -1)).filter((index) => index >= 0);
      return { type: 'pair', symbol, multiplier: symbol.two, indices };
    }

    return { type: 'loss', indices: [] };
  }

  function flashScreen(isJackpot) {
    if (!flashOverlay) {
      flashOverlay = document.createElement('div');
      flashOverlay.className = 'flash-overlay';
      document.body.appendChild(flashOverlay);
    }

    flashOverlay.className = 'flash-overlay';
    void flashOverlay.offsetWidth; // restart the CSS animation
    flashOverlay.classList.add('is-active');
    if (isJackpot) flashOverlay.classList.add('is-jackpot');
    setTimeout(() => flashOverlay.classList.remove('is-active', 'is-jackpot'), 750);
  }

  function showResult(outcome, payout, bet) {
    let label = 'NO LINE';
    let text = 'The reels move on. Spin again.';
    let cssClass = 'is-loss';

    if (outcome.type === 'jackpot') {
      label = 'JACKPOT';
      text = `TRIPLE 7s — the whole pool is yours. +<strong class="slot-win-amount">0</strong> pts`;
      cssClass = 'is-jackpot';
    } else if (outcome.type === 'triple') {
      label = 'WIN';
      text = `Three ${outcome.symbol.name} · ${outcome.multiplier}× · +<strong class="slot-win-amount">0</strong> pts`;
      cssClass = 'is-win';
    } else if (outcome.type === 'pair') {
      label = 'PAIR';
      text = `Two ${outcome.symbol.name} · ${outcome.multiplier}× · +<strong class="slot-win-amount">0</strong> pts`;
      cssClass = 'is-win';
    }

    resultBox.className = `slot-result ${cssClass}`;
    resultBox.innerHTML = `
      <span class="slot-result-label">${label}</span>
      <span class="slot-result-text">${text}</span>
    `;

    if (payout > 0) {
      const amount = resultBox.querySelector('.slot-win-amount');
      if (amount) SR.countUp(amount, 0, payout, outcome.type === 'jackpot' ? 1500 : 800);
    }

    // The balance itself also counts up, which makes wins feel bigger.
    if (payout > 0) {
      document.querySelectorAll('[data-balance]').forEach((element) => {
        // Points.endRound has already added the payout, so animate from the old value.
        SR.countUp(element, getBalance() - payout, getBalance(), 700);
      });
    }

    if (outcome.type === 'jackpot') {
      Sound.play('jackpot');
      flashScreen(true);
      machine.classList.add('is-shaking');
      setTimeout(() => machine.classList.remove('is-shaking'), 550);
    } else if (payout > 0) {
      Sound.play('win');
      flashScreen(false);
    } else {
      Sound.play('lose');
    }

    // Highlight the winning reels.
    outcome.indices.forEach((index) => reels[index].classList.add('is-win'));

    // Keep the screen-reader result short and readable.
    resultBox.setAttribute(
      'aria-label',
      outcome.type === 'loss'
        ? 'No winning line. Spin again.'
        : `${label}. You won ${payout} points.`
    );

    // Update the spin button text with the stake for clarity.
    spinButton.querySelector('span').textContent = 'SPIN';
    spinButton.classList.remove('is-spinning');
    void bet;
  }

  /* -------------------------------------------------------
     The spin
     ------------------------------------------------------- */
  async function spin() {
    if (spinning) return;

    const bet = readBet();
    if (bet === null) return;

    // Lock the bet UI before Points triggers any re-render.
    spinning = true;
    if (!Points.startRound(bet)) {
      spinning = false;
      return;
    }

    // 4% of every bet feeds the jackpot. The pool starts at 1,000.
    Points.addToJackpot(Math.max(1, Math.round(bet * 0.04)));

    spinButton.disabled = true;
    spinButton.classList.add('is-spinning');
    spinButton.querySelector('span').textContent = 'SPINNING';
    betInput.disabled = true;
    betChips.forEach((chip) => { chip.disabled = true; });
    clearHighlights();
    resultBox.className = 'slot-result';
    resultBox.innerHTML = `
      <span class="slot-result-label">SPINNING</span>
      <span class="slot-result-text">Good luck. The house is watching.</span>
    `;

    // Pick the final result first, then animate towards it.
    const results = [randomSymbol(), randomSymbol(), randomSymbol()];
    const intervals = [];

    Sound.play('spin');

    reels.forEach((reel, index) => {
      reel.classList.add('is-spinning');
      intervals[index] = setInterval(() => {
        reelSymbols[index].textContent = SYMBOLS[Math.floor(Points.random() * SYMBOLS.length)].glyph;
      }, 55 + index * 8);
    });

    // Stop the reels one at a time.
    for (let index = 0; index < 3; index += 1) {
      await SR.sleep(index === 0 ? 700 : 380);
      clearInterval(intervals[index]);
      reels[index].classList.remove('is-spinning');
      reelSymbols[index].textContent = results[index].glyph;
      reels[index].classList.add('is-settling');
      Sound.play('reel');
      setTimeout(() => reels[index].classList.remove('is-settling'), 360);
    }

    await SR.sleep(180);

    const outcome = evaluate(results);
    let payout = 0;

    if (outcome.type === 'jackpot') {
      const pool = Math.max(0, Points.getJackpot());
      payout = pool;
      Points.setJackpot(Points.JACKPOT_SEED);
      Points.addStat('jackpots', 1);
      Points.unlock('jackpot');
    } else if (outcome.type === 'triple') {
      payout = Math.round(bet * outcome.multiplier);
    } else if (outcome.type === 'pair') {
      payout = Math.round(bet * outcome.multiplier);
    }

    Points.endRound(bet, payout);
    showResult(outcome, payout, bet);

    // Unlock controls again.
    spinning = false;
    spinButton.disabled = false;
    spinButton.classList.remove('is-spinning');
    betInput.disabled = false;
    betChips.forEach((chip) => { chip.disabled = false; });
    setBet(betInput.value);
  }

  spinButton.addEventListener('click', spin);

  // Space bar spins when you are not typing or using another button.
  document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || event.repeat) return;
    if (document.querySelector('dialog[open]')) return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'SELECT') return;
    event.preventDefault();
    spin();
  });

  // If the balance changes, keep the "max" chip honest.
  Points.subscribe(() => {
    if (!spinning) setBet(betInput.value);
  });

  buildPaytable();
  setBet(25);
});
