/* =========================================================
   SPECTATOR ROOM — js/cps.js
   Ten seconds of clicking. CPS converts to points.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const RUN_SECONDS = 10;

  const pad = document.getElementById('cps-pad');
  const label = document.getElementById('cps-pad-label');
  const sub = document.getElementById('cps-pad-sub');
  const result = document.getElementById('cps-result');
  const timerElement = document.getElementById('cps-timer');
  const countElement = document.getElementById('cps-count');
  const liveElement = document.getElementById('cps-live');
  const progress = document.getElementById('cps-progress');

  if (!pad) return;

  let running = false;
  let count = 0;
  let startAt = 0;
  let endAt = 0;
  let timer = 0;
  let pressTimer = 0;

  /* -------------------------------------------------------
     Helpers
     ------------------------------------------------------- */
  function pointsFor(cps) {
    const base = Math.round(cps * 30);
    const bonus = cps >= 8 ? 50 : 0;
    return Math.min(600, base + bonus);
  }

  function updateCounters() {
    countElement.textContent = count;
    const elapsed = Math.max(0.5, (performance.now() - startAt) / 1000);
    liveElement.textContent = (count / elapsed).toFixed(1);
  }

  function pressFeedback() {
    clearTimeout(pressTimer);
    pad.classList.add('is-pressed');
    pressTimer = setTimeout(() => pad.classList.remove('is-pressed'), 65);
  }

  /* -------------------------------------------------------
     Run
     ------------------------------------------------------- */
  function startRun() {
    running = true;
    count = 1; // the starting click counts
    startAt = performance.now();
    endAt = startAt + RUN_SECONDS * 1000;

    clearInterval(timer);
    pad.className = 'cps-pad is-live';
    label.textContent = 'CLICK!';
    sub.textContent = 'Do not stop. Ten seconds.';
    pad.setAttribute('aria-label', 'Click as fast as you can');

    result.className = 'cps-result';
    result.textContent = 'Ten seconds. Go.';
    timerElement.textContent = '10.00';
    progress.style.width = '100%';

    updateCounters();
    pressFeedback();
    Sound.play('go');

    timer = setInterval(() => {
      if (!running) return;

      const left = Math.max(0, (endAt - performance.now()) / 1000);
      timerElement.textContent = left.toFixed(2);
      progress.style.width = `${Math.max(0, (left / RUN_SECONDS) * 100)}%`;
      updateCounters();

      if (left <= 0) finishRun();
    }, 50);
  }

  function tap() {
    count += 1;
    updateCounters();
    pressFeedback();
    Sound.play('click');
  }

  function pressPad() {
    if (!running) {
      startRun();
      return;
    }
    tap();
  }

  function finishRun() {
    if (!running) return;

    running = false;
    clearInterval(timer);

    const cps = count / RUN_SECONDS;
    const points = pointsFor(cps);
    const isBest = Points.recordBest('bestCps', cps);

    Points.endRound(0, points);
    if (cps >= 8) Points.unlock('speed-demon');

    timerElement.textContent = '0.00';
    progress.style.width = '0%';
    liveElement.textContent = cps.toFixed(1);

    pad.className = 'cps-pad is-finished';
    label.textContent = 'RUN ENDED';
    sub.textContent = 'Click or press Space to run it back.';
    pad.setAttribute('aria-label', 'Run ended. Click or press Space to try again.');

    result.className = 'cps-result is-win';
    result.innerHTML =
      `<strong>${count}</strong> clicks · ` +
      `<strong>${cps.toFixed(2)}</strong> CPS · ` +
      `<strong>+${SR.fmt(points)}</strong> points` +
      (isBest ? ' · <strong>NEW BEST</strong>' : '');

    Sound.play('win');
  }

  /* -------------------------------------------------------
     Input
     ------------------------------------------------------- */
  pad.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();
    pressPad();
  });

  document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || event.repeat) return;
    if (document.querySelector('dialog[open]')) return;

    const active = document.activeElement;
    const tag = active ? active.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (tag === 'BUTTON' && active !== pad) return;

    event.preventDefault();
    pressPad();
  });

  // Start quietly, with zero clicks until the player begins.
  timerElement.textContent = '10.00';
  countElement.textContent = '0';
  liveElement.textContent = '0.0';
  progress.style.width = '100%';
});
