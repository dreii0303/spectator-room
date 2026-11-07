/* =========================================================
   SPECTATOR ROOM — js/reaction.js
   Wait for green, click fast. False starts pay nothing.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('reaction-stage');
  const kicker = document.getElementById('reaction-kicker');
  const text = document.getElementById('reaction-text');
  const sub = document.getElementById('reaction-sub');
  const bestElement = document.getElementById('reaction-best');
  const lastElement = document.getElementById('reaction-last');
  const averageElement = document.getElementById('reaction-avg');
  const attemptsElement = document.getElementById('reaction-attempts');

  if (!stage) return;

  let mode = 'idle'; // idle | waiting | ready | tooSoon | result
  let waitTimer = 0;
  let readyAt = 0;
  let best = Points.getStats().bestReaction;
  const attempts = [];

  function setStage(nextMode, kickerText, title, subtitle) {
    mode = nextMode;
    stage.className = `reaction-stage${nextMode === 'idle' ? '' : ` is-${nextMode === 'tooSoon' ? 'too-soon' : nextMode}`}`;
    kicker.textContent = kickerText;
    text.textContent = title;
    sub.textContent = subtitle;
    stage.setAttribute('aria-label', `${title} ${subtitle}`);
  }

  function pointsFor(milliseconds) {
    if (milliseconds <= 150) return 200;
    if (milliseconds <= 200) return 160;
    if (milliseconds <= 250) return 120;
    if (milliseconds <= 300) return 90;
    if (milliseconds <= 400) return 60;
    if (milliseconds <= 600) return 30;
    return 10;
  }

  function updateReadouts() {
    bestElement.textContent = best == null ? '—' : `${Math.round(best)} ms`;
    lastElement.textContent = attempts.length ? `${attempts[0].ms} ms` : '—';

    if (attempts.length) {
      const total = attempts.reduce((sum, attempt) => sum + attempt.ms, 0);
      averageElement.textContent = `${Math.round(total / attempts.length)} ms`;
    } else {
      averageElement.textContent = '—';
    }

    attemptsElement.innerHTML = attempts
      .slice(0, 6)
      .map((attempt) => `<li><span>${attempt.ms} ms</span><em>+${attempt.points}</em></li>`)
      .join('');
  }

  function arm() {
    if (mode === 'waiting' || mode === 'ready') return;

    const delay = 1200 + Points.random() * 2800;

    setStage('waiting', 'HOLD', 'Wait for green…', 'Clicking now is a false start.');
    Sound.play('click');
    stage.focus({ preventScroll: true });

    clearTimeout(waitTimer);
    waitTimer = setTimeout(() => {
      if (mode !== 'waiting') return;
      readyAt = performance.now();
      setStage('ready', 'NOW', 'CLICK!', 'Go go go.');
      Sound.play('go');
    }, delay);
  }

  function award(milliseconds) {
    const points = pointsFor(milliseconds);

    Points.endRound(0, points);
    Points.recordBest('bestReaction', milliseconds, false);

    if (milliseconds < 200) Points.unlock('lightning');

    const stats = Points.getStats();
    best = stats.bestReaction;

    attempts.unshift({ ms: milliseconds, points });
    if (attempts.length > 6) attempts.pop();

    let message = 'Click to try again.';
    if (milliseconds <= 180) message = 'Elite reflexes. Click to go again.';
    else if (milliseconds <= 250) message = 'Quick. Your team approves.';
    else if (milliseconds <= 350) message = 'Average. Blame the ping.';
    else message = 'Slow. Blame the keyboard.';

    setStage('result', `+${points} POINTS`, `${milliseconds} ms`, message);
    Sound.play(points >= 90 ? 'win' : 'coin');
    updateReadouts();
  }

  function press() {
    if (mode === 'waiting') {
      clearTimeout(waitTimer);
      setStage('tooSoon', 'FALSE START', 'Too soon.', 'You flinched. Click to try again.');
      Sound.play('error');
      return;
    }

    if (mode === 'ready') {
      const milliseconds = Math.round(performance.now() - readyAt);
      award(milliseconds);
      return;
    }

    // idle, tooSoon or result: start the next test.
    arm();
  }

  stage.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    press();
  });

  // Enter activates the focused stage; Space is handled globally below.
  stage.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      press();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || event.repeat) return;
    if (document.querySelector('dialog[open]')) return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'SELECT') return;
    event.preventDefault();
    press();
  });

  Points.subscribe(() => {
    best = Points.getStats().bestReaction;
    updateReadouts();
  });

  updateReadouts();
  setStage('idle', 'REACTION TEST', 'Click to start', 'Wait for green. Click as fast as you can. Space bar works too.');
});
