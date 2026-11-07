/* =========================================================
   SPECTATOR ROOM — js/memory.js
   Flip two cards, find the pairs, finish fast for bonuses.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const ICONS = ['⚡', '🔥', '💎', '🎯', '🚀', '🌙', '💀', '🎲'];

  const board = document.getElementById('memory-board');
  const movesElement = document.getElementById('memory-moves');
  const timeElement = document.getElementById('memory-time');
  const pairsElement = document.getElementById('memory-pairs');
  const completePanel = document.getElementById('memory-complete');
  const resultText = document.getElementById('memory-result-text');
  const pointsText = document.getElementById('memory-points');
  const againButton = document.getElementById('memory-again');
  const restartButton = document.getElementById('memory-restart');

  if (!board) return;

  let cards = [];
  let cardElements = [];
  let first = null;
  let second = null;
  let lock = false;
  let moves = 0;
  let matchedPairs = 0;
  let running = false;
  let gameOver = false;
  let startTime = 0;
  let timer = 0;

  /* -------------------------------------------------------
     HUD
     ------------------------------------------------------- */
  function updateHud() {
    movesElement.textContent = moves;
    pairsElement.textContent = `${matchedPairs}/${ICONS.length}`;
  }

  function startTimer() {
    running = true;
    startTime = performance.now();
    clearInterval(timer);
    timer = setInterval(() => {
      if (!running) return;
      const seconds = (performance.now() - startTime) / 1000;
      timeElement.textContent = seconds.toFixed(1);
    }, 100);
  }

  /* -------------------------------------------------------
     Build a new board
     ------------------------------------------------------- */
  function buildGame() {
    clearInterval(timer);
    running = false;
    gameOver = false;
    lock = false;
    first = null;
    second = null;
    moves = 0;
    matchedPairs = 0;
    startTime = 0;

    cards = SR.shuffle([...ICONS, ...ICONS]).map((icon) => ({
      icon,
      matched: false,
      flipped: false
    }));

    board.innerHTML = '';
    cardElements = [];

    cards.forEach((card, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'mem-card';
      button.dataset.index = index;
      button.setAttribute('aria-label', 'Hidden card');

      const inner = document.createElement('span');
      inner.className = 'mem-inner';

      const front = document.createElement('span');
      front.className = 'mem-face mem-front';
      front.textContent = '?';

      const back = document.createElement('span');
      back.className = 'mem-face mem-back';
      back.textContent = card.icon;

      inner.appendChild(front);
      inner.appendChild(back);
      button.appendChild(inner);
      button.addEventListener('click', () => flipCard(index));

      board.appendChild(button);
      cardElements.push(button);
    });

    timeElement.textContent = '0.0';
    completePanel.hidden = true;
    updateHud();
  }

  /* -------------------------------------------------------
     Flip a card
     ------------------------------------------------------- */
  function flipCard(index) {
    if (lock || gameOver) return;

    const card = cards[index];
    if (!card || card.matched || card.flipped) return;

    if (!running) startTimer();

    card.flipped = true;
    cardElements[index].classList.add('is-flipped');
    cardElements[index].setAttribute('aria-label', `Card showing ${card.icon}`);
    Sound.play('flip');

    if (first === null) {
      first = index;
      return;
    }

    second = index;
    moves += 1;
    updateHud();

    const firstIndex = first;
    const secondIndex = second;

    if (cards[firstIndex].icon === cards[secondIndex].icon) {
      // Match: leave both cards face up.
      cards[firstIndex].matched = true;
      cards[secondIndex].matched = true;

      [firstIndex, secondIndex].forEach((cardIndex) => {
        cardElements[cardIndex].classList.add('is-matched');
        cardElements[cardIndex].setAttribute('aria-label', `Matched ${cards[cardIndex].icon}`);
        cardElements[cardIndex].disabled = true;
      });

      matchedPairs += 1;
      first = null;
      second = null;
      Sound.play('match');
      updateHud();

      if (matchedPairs === ICONS.length) finishGame();
      return;
    }

    // No match: lock the board, then flip both back.
    lock = true;
    Sound.play('mismatch');

    setTimeout(() => {
      [firstIndex, secondIndex].forEach((cardIndex) => {
        cards[cardIndex].flipped = false;
        cardElements[cardIndex].classList.remove('is-flipped');
        cardElements[cardIndex].setAttribute('aria-label', 'Hidden card');
      });
      first = null;
      second = null;
      lock = false;
    }, 780);
  }

  /* -------------------------------------------------------
     Finish
     ------------------------------------------------------- */
  function finishGame() {
    running = false;
    gameOver = true;
    clearInterval(timer);

    const seconds = (performance.now() - startTime) / 1000;
    timeElement.textContent = seconds.toFixed(1);

    const timeBonus = Math.max(0, 200 - Math.floor(seconds) * 5);
    const moveBonus = Math.max(0, 100 - Math.max(0, moves - 8) * 6);
    const points = 50 + timeBonus + moveBonus;

    Points.endRound(0, points);
    Points.recordBest('bestMemory', seconds, false);
    if (seconds <= 25) Points.unlock('memory-ace');

    resultText.textContent =
      `Cleared in ${seconds.toFixed(1)} seconds with ${moves} moves. ` +
      `Time bonus +${timeBonus}, move bonus +${moveBonus}.`;
    pointsText.textContent = `+${SR.fmt(points)} points`;
    completePanel.hidden = false;

    Sound.play('win');
  }

  /* -------------------------------------------------------
     Buttons
     ------------------------------------------------------- */
  againButton.addEventListener('click', () => {
    Sound.play('click');
    buildGame();
  });

  restartButton.addEventListener('click', () => {
    Sound.play('click');
    buildGame();
  });

  buildGame();
});
