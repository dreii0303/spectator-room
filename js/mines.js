/* =========================================================
   SPECTATOR ROOM — js/mines.js
   5×5 grid, five mines, cash out whenever you like.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const MIN = 10;
  const MAX = Infinity;
  const TILES = 25;
  const MINES = 5;
  const SAFE = TILES - MINES;
  const HOUSE_EDGE = 0.97;
  const MAX_MULTIPLIER = 250;

  const board = document.getElementById('mines-board');
  const startButton = document.getElementById('mines-start');
  const cashoutButton = document.getElementById('mines-cashout');
  const betInput = document.getElementById('mines-bet');
  const betChips = Array.from(document.querySelectorAll('[data-mines-bet]'));
  const resultElement = document.getElementById('mines-result');
  const gemsElement = document.getElementById('mines-gems');
  const multiplierElement = document.getElementById('mines-multiplier');
  const nextElement = document.getElementById('mines-next');
  const bestElement = document.getElementById('mines-best');
  const playedElement = document.getElementById('mines-played');
  const lastElement = document.getElementById('mines-last');

  if (!board || !startButton || !cashoutButton || !betInput) return;

  let active = false;
  let resolved = false;
  let picks = 0;
  let betPlaced = 0;
  let multiplier = 1;
  let mineSet = new Set();
  let rounds = 0;
  const tiles = [];

  /* -------------------------------------------------------
     Board setup
     ------------------------------------------------------- */
  for (let index = 0; index < TILES; index += 1) {
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'mines-tile';
    tile.dataset.index = String(index);
    tile.textContent = '·';
    tile.setAttribute('aria-label', `Hidden tile ${index + 1}`);
    tile.addEventListener('click', () => reveal(index));
    board.appendChild(tile);
    tiles.push(tile);
  }

  function setTilesEnabled(enabled) {
    tiles.forEach((tile) => { tile.disabled = !enabled; });
  }

  function resetBoard() {
    tiles.forEach((tile, index) => {
      tile.className = 'mines-tile';
      tile.textContent = '·';
      tile.setAttribute('aria-label', `Hidden tile ${index + 1}`);
    });
    setTilesEnabled(false);
  }

  function revealMines(hitIndex) {
    mineSet.forEach((index) => {
      const tile = tiles[index];
      tile.classList.add('is-mine');
      tile.textContent = '✹';
      tile.setAttribute('aria-label', 'Mine');
      if (index === hitIndex) tile.classList.add('is-hit');
    });
  }

  /* -------------------------------------------------------
     Odds and multiplier
     ------------------------------------------------------- */
  function multiplierFor(safePicks) {
    if (safePicks <= 0) return 1;

    let survive = 1;
    for (let index = 0; index < safePicks; index += 1) {
      survive *= (SAFE - index) / (TILES - index);
    }

    const fair = 1 / survive;
    const value = Math.floor(fair * HOUSE_EDGE * 100) / 100;
    return Math.min(MAX_MULTIPLIER, Math.max(1.01, value));
  }

  function updateHud() {
    gemsElement.textContent = picks;
    multiplierElement.textContent = `${multiplier.toFixed(2)}×`;
    nextElement.textContent = picks >= SAFE ? '—' : `${multiplierFor(picks + 1).toFixed(2)}×`;
    bestElement.textContent = (() => {
      const best = Number(Points.getStats().bestMines) || 0;
      return best > 1 ? `${best.toFixed(2)}×` : '—';
    })();
    playedElement.textContent = rounds;
    lastElement.textContent = lastResult;
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
      chip.classList.toggle('is-active', Number(chip.dataset.minesBet) === bet);
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

  /* -------------------------------------------------------
     Round flow
     ------------------------------------------------------- */
  let lastResult = '—';

  function startRound() {
    if (active) return;

    const bet = readBet();
    if (bet === null) return;

    // Lock the controls before Points.startRound triggers a re-render.
    active = true;
    setBetControls(true);
    if (!Points.startRound(bet)) {
      active = false;
      setBetControls(false);
      return;
    }

    betPlaced = bet;
    picks = 0;
    resolved = false;
    multiplier = 1;
    mineSet = new Set(SR.shuffle(Array.from({ length: TILES }, (_, index) => index)).slice(0, MINES));
    resetBoard();
    setTilesEnabled(true);
    cashoutButton.disabled = true;
    startButton.textContent = 'ROUND LIVE';
    resultElement.className = 'dice-result mines-result';
    resultElement.textContent = 'Pick a tile. Five squares are hiding mines.';
    updateHud();
    Sound.play('deal');
  }

  function finishRound(won, message) {
    active = false;
    resolved = true;
    rounds += 1;

    setTilesEnabled(false);
    cashoutButton.disabled = true;
    startButton.disabled = false;
    startButton.textContent = 'PLAY AGAIN';
    setBetControls(false);

    resultElement.className = `dice-result mines-result ${won ? 'is-win' : 'is-loss'}`;
    resultElement.innerHTML = message;
    lastResult = won ? 'CASHED OUT' : 'MINE';
    updateHud();
  }

  function reveal(index) {
    if (!active || resolved) return;

    const tile = tiles[index];

    if (mineSet.has(index)) {
      resolved = true;
      tile.classList.add('is-mine', 'is-hit');
      tile.textContent = '💥';
      tile.setAttribute('aria-label', 'Mine');
      revealMines(index);
      Points.endRound(betPlaced, 0);
      Sound.play('crash');
      finishRound(false, `Mine on tile ${index + 1}. You lose <strong>${SR.fmt(betPlaced)}</strong> points.`);
      return;
    }

    tile.classList.add('is-safe');
    tile.textContent = '◆';
    tile.setAttribute('aria-label', 'Gem');
    tile.disabled = true;
    picks += 1;
    multiplier = multiplierFor(picks);
    Sound.play('coin');
    cashoutButton.disabled = false;
    updateHud();

    if (picks >= SAFE) {
      resolveCashout(true);
      return;
    }

    resultElement.textContent = `Gem ${picks} found. You can cash out at ${multiplier.toFixed(2)}× or keep going.`;
  }

  function resolveCashout(auto = false) {
    if (!active || resolved || picks === 0) return;

    const payout = Math.max(1, Math.round(betPlaced * multiplier));
    resolved = true;
    Points.endRound(betPlaced, payout);
    Points.recordBest('bestMines', multiplier);
    if (multiplier >= 5) Points.unlock('mine-runner');
    Sound.play('cashout');

    finishRound(
      true,
      auto
        ? `Perfect board! All 20 gems found. You cash out <strong>${multiplier.toFixed(2)}×</strong> for <strong>+${SR.fmt(payout - betPlaced)}</strong> points.`
        : `Cashed out at <strong>${multiplier.toFixed(2)}×</strong>. You win <strong>+${SR.fmt(payout - betPlaced)}</strong> points.`
    );
  }

  function setBetControls(locked) {
    betInput.disabled = locked;
    betChips.forEach((chip) => { chip.disabled = locked; });
    startButton.disabled = locked;
  }

  /* -------------------------------------------------------
     Events
     ------------------------------------------------------- */
  startButton.addEventListener('click', startRound);
  cashoutButton.addEventListener('click', () => resolveCashout(false));

  betInput.addEventListener('change', () => setBet(betInput.value));
  betInput.addEventListener('blur', () => setBet(betInput.value));
  betInput.addEventListener('focus', () => betInput.select());

  betChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      Sound.play('click');
      const value = chip.dataset.minesBet === 'max'
        ? Math.min(MAX, Points.getBalance())
        : chip.dataset.minesBet;
      setBet(value);
    });
  });

  Points.subscribe(() => {
    if (!active) setBet(betInput.value);
    updateHud();
  });

  resetBoard();
  setBet(25);
  updateHud();
});
