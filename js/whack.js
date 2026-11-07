/* =========================================================
   SPECTATOR ROOM — js/whack.js
   Thirty seconds of moles. Hits, accuracy and combo pay out.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const RUN_TIME = 30000;
  const MOLE_LIFE = 760;
  const SPAWN_GAP = 360;

  const arena = document.getElementById('whack-arena');
  const grid = document.getElementById('whack-grid');
  const overlay = document.getElementById('whack-overlay');
  const startButton = document.getElementById('whack-start');
  const titleElement = document.getElementById('whack-title');
  const messageElement = document.getElementById('whack-message');
  const resultElement = document.getElementById('whack-result');
  const payoutElement = document.getElementById('whack-payout');
  const timeElement = document.getElementById('whack-time');
  const hitsElement = document.getElementById('whack-hits');
  const accuracyElement = document.getElementById('whack-acc');
  const comboElement = document.getElementById('whack-combo');
  const resultHits = document.getElementById('whack-r-hits');
  const resultAccuracy = document.getElementById('whack-r-acc');
  const resultCombo = document.getElementById('whack-r-combo');

  if (!arena || !grid || !overlay || !startButton) return;

  const holes = [];
  let playing = false;
  let hits = 0;
  let clicks = 0;
  let combo = 0;
  let maxCombo = 0;
  let activeIndex = -1;
  let lastIndex = -1;
  let endAt = 0;
  let timer = 0;
  let hideTimer = 0;
  let spawnTimer = 0;

  /* -------------------------------------------------------
     Build the nine holes
     ------------------------------------------------------- */
  for (let index = 0; index < 9; index += 1) {
    const hole = document.createElement('button');
    hole.type = 'button';
    hole.className = 'whack-hole';
    hole.dataset.index = String(index);
    hole.setAttribute('aria-label', `Hole ${index + 1}`);
    hole.innerHTML = '<span class="mole" aria-hidden="true">🐹</span>';
    hole.addEventListener('click', () => whack(hole));
    grid.appendChild(hole);
    holes.push(hole);
  }

  function accuracy() {
    return clicks > 0 ? hits / clicks : 0;
  }

  function updateHud() {
    const left = playing ? Math.max(0, (endAt - performance.now()) / 1000) : (endAt ? 0 : RUN_TIME / 1000);
    timeElement.textContent = left.toFixed(1);
    hitsElement.textContent = hits;
    accuracyElement.textContent = `${Math.round(accuracy() * 100)}%`;
    comboElement.textContent = combo;
  }

  function hideMole() {
    clearTimeout(hideTimer);
    if (activeIndex >= 0) {
      holes[activeIndex].classList.remove('is-up');
      holes[activeIndex].setAttribute('aria-label', `Hole ${activeIndex + 1}`);
    }
    activeIndex = -1;
  }

  function scheduleSpawn(delay = SPAWN_GAP) {
    clearTimeout(spawnTimer);
    spawnTimer = setTimeout(spawnMole, delay);
  }

  function spawnMole() {
    if (!playing) return;
    hideMole();

    let index = Math.floor(Points.random() * holes.length);
    if (index === lastIndex) index = (index + 1) % holes.length;
    lastIndex = index;

    const hole = holes[index];
    activeIndex = index;
    hole.classList.add('is-up');
    hole.setAttribute('aria-label', 'Mole! Hit it');

    hideTimer = setTimeout(() => {
      if (!playing || activeIndex !== index) return;
      hole.classList.remove('is-up');
      hole.setAttribute('aria-label', `Hole ${index + 1}`);
      activeIndex = -1;
      combo = 0;
      updateHud();
      scheduleSpawn();
    }, MOLE_LIFE);
  }

  function whack(hole) {
    if (!playing) return;

    const index = Number(hole.dataset.index);
    clicks += 1;

    if (index === activeIndex && hole.classList.contains('is-up')) {
      hits += 1;
      combo += 1;
      maxCombo = Math.max(maxCombo, combo);
      Sound.play('hit');

      hole.classList.add('is-hit');
      setTimeout(() => hole.classList.remove('is-hit'), 180);

      hideMole();
      updateHud();
      scheduleSpawn(130);
      return;
    }

    combo = 0;
    Sound.play('miss');
    hole.classList.add('is-wrong');
    setTimeout(() => hole.classList.remove('is-wrong'), 220);
    updateHud();
  }

  /* -------------------------------------------------------
     Run control
     ------------------------------------------------------- */
  function startRun() {
    if (playing) return;

    clearInterval(timer);
    clearTimeout(hideTimer);
    clearTimeout(spawnTimer);
    hideMole();

    hits = 0;
    clicks = 0;
    combo = 0;
    maxCombo = 0;
    playing = true;
    endAt = performance.now() + RUN_TIME;

    holes.forEach((hole) => hole.classList.remove('is-up', 'is-hit', 'is-wrong'));
    overlay.hidden = true;
    resultElement.hidden = true;
    payoutElement.hidden = true;
    startButton.textContent = 'START RUN';
    titleElement.textContent = 'Whack the moles.';

    updateHud();
    Sound.play('go');
    spawnMole();

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
    clearTimeout(hideTimer);
    clearTimeout(spawnTimer);
    hideMole();
    updateHud();

    const acc = accuracy();
    const points = Math.max(0, hits * 6 + Math.round(acc * 100) + maxCombo * 2);

    Points.endRound(0, points);
    Points.recordBest('bestWhack', hits);
    if (hits >= 25) Points.unlock('mole-smasher');

    resultHits.textContent = hits;
    resultAccuracy.textContent = `${Math.round(acc * 100)}%`;
    resultCombo.textContent = maxCombo;
    resultElement.hidden = false;
    payoutElement.hidden = false;
    payoutElement.innerHTML = `+<strong>${SR.fmt(points)}</strong> points earned`;

    titleElement.textContent = points >= 250 ? 'Mole menace.' : points >= 120 ? 'Run complete.' : 'The moles won.';
    messageElement.textContent =
      `${hits} hit${hits === 1 ? '' : 's'} × 6 = ${hits * 6} · ` +
      `accuracy +${Math.round(acc * 100)} · combo +${maxCombo * 2}.`;

    startButton.textContent = 'RUN IT BACK';
    overlay.hidden = false;
    Sound.play(points > 0 ? 'win' : 'lose');
  }

  startButton.addEventListener('click', startRun);

  updateHud();
});
