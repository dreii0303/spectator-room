/* =========================================================
   SPECTATOR ROOM — js/simon.js
   Watch the four-pad pattern, repeat it, and keep going
   until your memory gives out.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const START_LENGTH = 3;
  const ROUND_POINTS = 25;
  const CLEAN_BONUS = 50;
  const CLEAN_ROUNDS = 5;
  const FLASH_TIME = 330;
  const STEP_GAP = 620;
  const TONES = [329.63, 261.63, 392.0, 196.0]; // E4, C4, G4, G3

  const board = document.getElementById('simon-board');
  const overlay = document.getElementById('simon-overlay');
  const startButton = document.getElementById('simon-start');
  const titleElement = document.getElementById('simon-title');
  const messageElement = document.getElementById('simon-message');
  const resultElement = document.getElementById('simon-result');
  const payoutElement = document.getElementById('simon-payout');
  const statusElement = document.getElementById('simon-status');
  const roundElement = document.getElementById('simon-round');
  const lengthElement = document.getElementById('simon-length');
  const bestElement = document.getElementById('simon-best');
  const stateElement = document.getElementById('simon-state');
  const resultRounds = document.getElementById('simon-r-rounds');
  const resultLength = document.getElementById('simon-r-length');
  const resultPoints = document.getElementById('simon-r-points');

  if (!board || !overlay || !startButton) return;

  const pads = Array.from(document.querySelectorAll('[data-pad]'));
  let playing = false;
  let accepting = false;
  let sequence = [];
  let inputIndex = 0;
  let completed = 0;
  let timers = [];

  /* -------------------------------------------------------
     Helpers
     ------------------------------------------------------- */
  function clearTimers() {
    timers.forEach((timer) => clearTimeout(timer));
    timers = [];
  }

  function setPadsEnabled(enabled) {
    pads.forEach((pad) => { pad.disabled = !enabled; });
  }

  function clearLitPads() {
    pads.forEach((pad) => pad.classList.remove('is-lit', 'is-wrong'));
  }

  function updateHud() {
    roundElement.textContent = playing ? completed + 1 : 0;
    lengthElement.textContent = sequence.length || START_LENGTH;
    bestElement.textContent = Number(Points.getStats().bestSimon) || 0;
    stateElement.textContent = accepting ? 'YOUR TURN' : playing ? 'WATCH' : 'IDLE';
  }

  function flashPad(index, duration = FLASH_TIME) {
    const pad = pads[index];
    if (!pad) return;

    pad.classList.add('is-lit');
    Sound.note(TONES[index], 0.22, 'sine', 0.06);
    timers.push(setTimeout(() => pad.classList.remove('is-lit'), duration));
  }

  function randomPad() {
    return Math.floor(Points.random() * pads.length);
  }

  /* -------------------------------------------------------
     Playback
     ------------------------------------------------------- */
  function playSequence() {
    if (!playing) return;

    accepting = false;
    clearLitPads();
    setPadsEnabled(false);
    statusElement.textContent = 'Watch the pattern…';
    updateHud();

    sequence.forEach((padIndex, step) => {
      timers.push(setTimeout(() => {
        if (playing) flashPad(padIndex);
      }, 380 + step * STEP_GAP));
    });

    timers.push(setTimeout(() => {
      if (!playing) return;
      accepting = true;
      inputIndex = 0;
      setPadsEnabled(true);
      statusElement.textContent = 'Your turn. Repeat the pattern.';
      updateHud();
      Sound.play('go');
    }, 380 + sequence.length * STEP_GAP));
  }

  /* -------------------------------------------------------
     Input
     ------------------------------------------------------- */
  function handlePad(index) {
    if (!playing || !accepting) return;

    flashPad(index, 240);

    if (index !== sequence[inputIndex]) {
      accepting = false;
      setPadsEnabled(false);
      pads[index].classList.add('is-wrong');
      statusElement.textContent = 'Wrong pad. Run over.';
      stateElement.textContent = 'MISS';
      Sound.play('mismatch');
      timers.push(setTimeout(finishRun, 700));
      return;
    }

    inputIndex += 1;

    if (inputIndex >= sequence.length) {
      accepting = false;
      setPadsEnabled(false);
      completed += 1;
      updateHud();
      Sound.play('match');
      statusElement.textContent = `Round ${completed} cleared. Next pattern…`;

      timers.push(setTimeout(() => {
        if (!playing) return;
        sequence.push(randomPad());
        updateHud();
        playSequence();
      }, 760));
    }
  }

  pads.forEach((pad) => {
    pad.addEventListener('click', () => handlePad(Number(pad.dataset.pad)));
  });

  /* -------------------------------------------------------
     Run control
     ------------------------------------------------------- */
  function startRun() {
    if (playing) return;

    clearTimers();
    clearLitPads();

    playing = true;
    accepting = false;
    completed = 0;
    inputIndex = 0;
    sequence = Array.from({ length: START_LENGTH }, randomPad);

    overlay.hidden = true;
    resultElement.hidden = true;
    payoutElement.hidden = true;
    startButton.textContent = 'START RUN';
    titleElement.textContent = 'Watch. Repeat. Survive.';
    statusElement.textContent = 'Get ready…';
    setPadsEnabled(false);
    updateHud();

    Sound.play('go');
    timers.push(setTimeout(playSequence, 500));
  }

  function finishRun() {
    if (!playing) return;

    playing = false;
    accepting = false;
    clearTimers();
    clearLitPads();
    setPadsEnabled(false);
    updateHud();

    const points = completed * ROUND_POINTS + (completed >= CLEAN_ROUNDS ? CLEAN_BONUS : 0);

    Points.endRound(0, points);
    Points.recordBest('bestSimon', completed);
    if (completed >= CLEAN_ROUNDS) Points.unlock('simon-says');

    resultRounds.textContent = completed;
    resultLength.textContent = sequence.length;
    resultPoints.textContent = SR.fmt(points);
    resultElement.hidden = false;
    payoutElement.hidden = false;
    payoutElement.innerHTML = `+<strong>${SR.fmt(points)}</strong> points earned`;

    titleElement.textContent = completed >= CLEAN_ROUNDS
      ? 'Steel trap.'
      : completed >= 2
        ? 'Not bad.'
        : 'The pattern wins.';
    messageElement.textContent = completed > 0
      ? `You cleared ${completed} round${completed === 1 ? '' : 's'} at 25 points each${completed >= CLEAN_ROUNDS ? `, plus the ${CLEAN_BONUS}-point clean-memory bonus` : ''}.`
      : 'The first pattern got you. Watch the pads, then repeat them in order.';

    startButton.textContent = 'RUN IT BACK';
    overlay.hidden = false;
    statusElement.textContent = 'Press start to try again.';
    Sound.play(completed > 0 ? 'win' : 'lose');
  }

  startButton.addEventListener('click', startRun);

  Points.subscribe(() => {
    if (!playing) bestElement.textContent = Number(Points.getStats().bestSimon) || 0;
  });

  updateHud();
});
