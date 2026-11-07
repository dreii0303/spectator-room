/* =========================================================
   SPECTATOR ROOM — js/aim.js
   30 seconds of targets. Hits, accuracy and reaction time
   all feed the final points payout.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const RUN_TIME = 30000; // milliseconds
  const TARGET_LIFETIME = 1400;

  const arena = document.getElementById('aim-arena');
  const overlay = document.getElementById('aim-overlay');
  const startButton = document.getElementById('aim-start');
  const titleElement = document.getElementById('aim-title');
  const messageElement = document.getElementById('aim-message');
  const resultElement = document.getElementById('aim-result');
  const payoutElement = document.getElementById('aim-payout');

  const timeElement = document.getElementById('aim-time');
  const hitsElement = document.getElementById('aim-hits');
  const accuracyElement = document.getElementById('aim-acc');
  const reactionElement = document.getElementById('aim-react');

  const resultHits = document.getElementById('aim-r-hits');
  const resultAccuracy = document.getElementById('aim-r-acc');
  const resultReaction = document.getElementById('aim-r-react');

  if (!arena || !overlay || !startButton) return;

  let playing = false;
  let hits = 0;
  let shots = 0;
  let totalReaction = 0;
  let spawnAt = 0;
  let endAt = 0;
  let timer = 0;
  let target = null;
  let expireTimer = 0;
  let respawnTimer = 0;
  let feedbackTimer = 0;

  /* -------------------------------------------------------
     HUD
     ------------------------------------------------------- */
  function accuracy() {
    return shots > 0 ? hits / shots : 0;
  }

  function averageReaction() {
    return hits > 0 ? totalReaction / hits : 0;
  }

  function updateHud() {
    const left = playing ? Math.max(0, (endAt - performance.now()) / 1000) : (endAt ? 0 : RUN_TIME / 1000);
    timeElement.textContent = left.toFixed(1);
    hitsElement.textContent = hits;
    accuracyElement.textContent = `${Math.round(accuracy() * 100)}%`;
    reactionElement.textContent = hits > 0 ? `${Math.round(averageReaction())} ms` : '—';
  }

  /* -------------------------------------------------------
     Targets
     ------------------------------------------------------- */
  function removeTarget() {
    clearTimeout(expireTimer);
    if (target) target.remove();
    target = null;
  }

  function spawnTarget() {
    if (!playing) return;
    removeTarget();

    const rect = arena.getBoundingClientRect();
    const size = 38 + Math.floor(Points.random() * 30); // 38–67px
    const padding = 12;
    const maxX = Math.max(0, rect.width - size - padding * 2);
    const maxY = Math.max(0, rect.height - size - padding * 2);
    const x = padding + Points.random() * maxX;
    const y = padding + Points.random() * maxY;

    const element = document.createElement('button');
    element.type = 'button';
    element.className = 'aim-target';
    element.setAttribute('aria-label', 'Target');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    arena.appendChild(element);
    target = element;
    spawnAt = performance.now();

    // If it is ignored, it disappears and a fresh one appears.
    expireTimer = setTimeout(() => {
      if (!playing || target !== element) return;
      removeTarget();
      spawnTarget();
    }, TARGET_LIFETIME);
  }

  function ripple(x, y, hit) {
    const element = document.createElement('span');
    element.className = `aim-ripple${hit ? '' : ' is-miss'}`;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    arena.appendChild(element);
    setTimeout(() => element.remove(), 450);
  }

  function flashArena(type) {
    clearTimeout(feedbackTimer);
    arena.classList.remove('is-hit', 'is-miss');
    arena.classList.add(type);
    feedbackTimer = setTimeout(() => {
      arena.classList.remove('is-hit', 'is-miss');
    }, 130);
  }

  /* -------------------------------------------------------
     Shooting
     ------------------------------------------------------- */
  arena.addEventListener('pointerdown', (event) => {
    if (!playing) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    const rect = arena.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const clickedTarget = event.target.closest ? event.target.closest('.aim-target') : null;

    shots += 1;

    if (clickedTarget) {
      const reaction = performance.now() - spawnAt;
      hits += 1;
      totalReaction += reaction;

      // Don't let this shot also register as a miss on the arena.
      event.preventDefault();
      removeTarget();
      ripple(x, y, true);
      flashArena('is-hit');
      Sound.play('hit');

      // Brief gap so the next target is a fresh movement.
      respawnTimer = setTimeout(spawnTarget, 65);
    } else {
      ripple(x, y, false);
      flashArena('is-miss');
      Sound.play('miss');
    }

    updateHud();
  });

  /* -------------------------------------------------------
     Run control
     ------------------------------------------------------- */
  function startRun() {
    if (playing) return;

    clearInterval(timer);
    clearTimeout(respawnTimer);
    clearTimeout(expireTimer);
    removeTarget();
    arena.querySelectorAll('.aim-ripple').forEach((element) => element.remove());

    hits = 0;
    shots = 0;
    totalReaction = 0;
    playing = true;
    startAt = performance.now();
    endAt = startAt + RUN_TIME;

    overlay.hidden = true;
    resultElement.hidden = true;
    payoutElement.hidden = true;
    startButton.textContent = 'START RUN';
    titleElement.textContent = 'Click the targets. Fast.';

    updateHud();
    spawnTarget();
    Sound.play('go');

    timer = setInterval(() => {
      if (!playing) return;
      updateHud();
      if (performance.now() >= endAt) finishRun();
    }, 100);
  }

  function finishRun() {
    if (!playing) return;

    playing = false;
    clearInterval(timer);
    clearTimeout(respawnTimer);
    removeTarget();
    updateHud();

    const acc = accuracy();
    const avg = averageReaction();
    const hitPoints = hits * 4;
    const accuracyBonus = Math.round(acc * 100);
    const speedBonus = hits > 0 ? Math.max(0, Math.round(150 - avg / 4)) : 0;
    const points = Math.max(0, hitPoints + accuracyBonus + speedBonus);

    Points.endRound(0, points);
    Points.recordBest('bestAim', points);

    if (acc >= 0.9 && hits >= 15) Points.unlock('sharp-shooter');

    resultHits.textContent = hits;
    resultAccuracy.textContent = `${Math.round(acc * 100)}%`;
    resultReaction.textContent = hits > 0 ? `${Math.round(avg)} ms` : '—';
    resultElement.hidden = false;
    payoutElement.hidden = false;
    payoutElement.innerHTML = `+<strong>${SR.fmt(points)}</strong> points earned`;

    titleElement.textContent = points >= 250 ? 'Clean run.' : points >= 100 ? 'Run complete.' : 'Run complete.';
    messageElement.textContent =
      `${hits} hit${hits === 1 ? '' : 's'} × 4 = ${hitPoints} · ` +
      `accuracy +${accuracyBonus} · speed +${speedBonus}.`;

    startButton.textContent = 'RUN IT BACK';
    overlay.hidden = false;

    Sound.play(points > 0 ? 'win' : 'lose');
  }

  startButton.addEventListener('click', startRun);

  updateHud();
});
