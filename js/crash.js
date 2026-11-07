/* =========================================================
   SPECTATOR ROOM — js/crash.js
   A multiplier climbs in real time. Cash out before it dies.
   The crash curve has a 3% house edge.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const MIN = 10;
  const MAX = Infinity;
  const GROWTH = 0.55;   // higher = faster multiplier
  const HOUSE = 0.97;    // 3% house edge
  const MAX_CRASH = 1000;

  const stage = document.getElementById('crash-stage');
  const canvas = document.getElementById('crash-canvas');
  const multiplierElement = document.getElementById('crash-multiplier');
  const statusElement = document.getElementById('crash-status');
  const historyElement = document.getElementById('crash-history');
  const startButton = document.getElementById('crash-start');
  const cashoutButton = document.getElementById('crash-cashout');
  const betInput = document.getElementById('crash-bet');
  const betChips = Array.from(document.querySelectorAll('[data-crash-bet]'));

  if (!stage || !canvas || !startButton || !cashoutButton || !betInput) return;

  const context = canvas.getContext('2d');

  let running = false;
  let canCashOut = false;
  let multiplier = 1;
  let crashPoint = 1;
  let bet = 25;
  let startTime = 0;
  let animationFrame = 0;
  let tickTimer = 0;
  let lastDraw = { multiplier: 1, elapsed: 0, mode: 'idle' };

  /* -------------------------------------------------------
     Betting
     ------------------------------------------------------- */
  function setBet(value) {
    const balance = Points.getBalance();
    const ceiling = Math.max(MIN, Math.min(MAX, balance || MIN));
    const amount = SR.clamp(Math.floor(Number(value) || MIN), MIN, ceiling);
    betInput.value = amount;
    betChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.crashBet) === amount);
    });
  }

  function readBet() {
    const amount = Math.floor(Number(betInput.value));

    if (!Number.isFinite(amount) || amount < MIN) {
      Points.notify(`Minimum bet is ${MIN} points.`, 'red', '⚠️');
      Sound.play('error');
      return null;
    }
    if (amount > MAX) {
      Points.notify(`Maximum bet is ${MAX} points.`, 'red', '⚠️');
      Sound.play('error');
      return null;
    }
    if (amount > Points.getBalance()) {
      Points.notify('Not enough points for that bet.', 'red', '⚠️');
      Sound.play('error');
      return null;
    }
    return amount;
  }

  betInput.addEventListener('change', () => setBet(betInput.value));
  betInput.addEventListener('blur', () => setBet(betInput.value));
  betInput.addEventListener('focus', () => betInput.select());

  betChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      if (running) return;
      Sound.play('click');
      const value = chip.dataset.crashBet === 'max'
        ? Math.min(MAX, Points.getBalance())
        : chip.dataset.crashBet;
      setBet(value);
    });
  });

  function setBettingDisabled(disabled) {
    betInput.disabled = disabled;
    betChips.forEach((chip) => { chip.disabled = disabled; });
  }

  function setMultiplier(value) {
    multiplier = value;
    const text = value.toFixed(2);
    if (multiplierElement.firstChild && multiplierElement.firstChild.nodeType === Node.TEXT_NODE) {
      multiplierElement.firstChild.nodeValue = text;
    } else {
      multiplierElement.textContent = text;
      multiplierElement.appendChild(document.createElement('span')).textContent = '×';
    }
  }

  /* -------------------------------------------------------
     The crash curve
     P(crash >= x) = 0.97 / x, so cashing out at x has
     an expected return of 97% of the stake.
     ------------------------------------------------------- */
  function pickCrashPoint() {
    const roll = Points.random();
    const raw = roll === 0 ? MAX_CRASH : HOUSE / roll;
    return Math.min(MAX_CRASH, Math.max(1.01, raw));
  }

  /* -------------------------------------------------------
     Canvas graph
     ------------------------------------------------------- */
  function drawGraph(value, elapsed, mode) {
    if (!context) return;

    lastDraw = { multiplier: value, elapsed, mode };

    const rect = canvas.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;

    const dpr = window.devicePixelRatio || 1;
    const pixelWidth = Math.floor(rect.width * dpr);
    const pixelHeight = Math.floor(rect.height * dpr);

    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    const width = rect.width;
    const height = rect.height;
    const pad = { left: 48, right: 24, top: 102, bottom: 34 };

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, width, height);

    const maxTime = Math.max(5, elapsed * 1.1);
    const maxMultiplier = Math.max(2, value * 1.1);
    const chartWidth = width - pad.left - pad.right;
    const chartHeight = height - pad.top - pad.bottom;

    const lightTheme = document.documentElement.dataset.theme === 'light';
    const palette = lightTheme
      ? { idle: '#087f8c', running: '#087a4b', crashed: '#c51f36', cashed: '#9a6500' }
      : { idle: '#6ff7ff', running: '#5cffb1', crashed: '#ff3b4e', cashed: '#ffd166' };
    const color = palette[mode] || palette.running;
    const gridColor = lightTheme ? 'rgba(27, 28, 35, 0.1)' : 'rgba(255, 255, 255, 0.055)';
    const gridFaint = lightTheme ? 'rgba(27, 28, 35, 0.06)' : 'rgba(255, 255, 255, 0.035)';
    const labelColor = lightTheme ? 'rgba(91, 94, 108, 0.9)' : 'rgba(143, 149, 171, 0.75)';
    const labelFaint = lightTheme ? 'rgba(91, 94, 108, 0.7)' : 'rgba(143, 149, 171, 0.55)';
    const idleLine = lightTheme ? 'rgba(8, 127, 140, 0.35)' : 'rgba(111, 247, 255, 0.22)';

    const xAt = (time) => pad.left + (time / maxTime) * chartWidth;
    const yAt = (mult) => {
      const ratio = (mult - 1) / (maxMultiplier - 1);
      return height - pad.bottom - ratio * chartHeight;
    };

    // Grid
    context.lineWidth = 1;
    context.font = '10px "Cascadia Code", Consolas, monospace';
    context.textBaseline = 'middle';

    for (let i = 0; i <= 4; i += 1) {
      const valueAtLine = 1 + (maxMultiplier - 1) * (i / 4);
      const y = yAt(valueAtLine);
      context.strokeStyle = gridColor;
      context.beginPath();
      context.moveTo(pad.left, y);
      context.lineTo(width - pad.right, y);
      context.stroke();

      context.fillStyle = labelColor;
      context.textAlign = 'right';
      context.fillText(`${valueAtLine.toFixed(valueAtLine < 10 ? 2 : 1)}×`, pad.left - 8, y);
    }

    for (let i = 0; i <= 2; i += 1) {
      const t = (maxTime * i) / 2;
      const x = xAt(t);
      context.strokeStyle = gridFaint;
      context.beginPath();
      context.moveTo(x, pad.top);
      context.lineTo(x, height - pad.bottom);
      context.stroke();

      context.fillStyle = labelFaint;
      context.textAlign = i === 0 ? 'left' : i === 2 ? 'right' : 'center';
      context.fillText(`${t.toFixed(1)}s`, x, height - pad.bottom + 17);
    }

    if (mode === 'idle') {
      const y = yAt(1);
      context.strokeStyle = idleLine;
      context.setLineDash([5, 6]);
      context.beginPath();
      context.moveTo(pad.left, y);
      context.lineTo(width - pad.right, y);
      context.stroke();
      context.setLineDash([]);
      return;
    }

    // Curve + filled area
    const samples = 70;
    const points = [];

    for (let i = 0; i <= samples; i += 1) {
      const t = (elapsed * i) / samples;
      const m = Math.exp(GROWTH * t);
      points.push({ x: xAt(t), y: yAt(m) });
    }

    if (points.length < 2) return;

    const fill = context.createLinearGradient(0, pad.top, 0, height - pad.bottom);
    fill.addColorStop(0, `${color}24`);
    fill.addColorStop(1, `${color}02`);

    context.beginPath();
    context.moveTo(points[0].x, height - pad.bottom);
    points.forEach((point) => context.lineTo(point.x, point.y));
    context.lineTo(points[points.length - 1].x, height - pad.bottom);
    context.closePath();
    context.fillStyle = fill;
    context.fill();

    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.strokeStyle = color;
    context.lineWidth = 2.5;
    context.shadowColor = color;
    context.shadowBlur = mode === 'running' ? 14 : 8;
    context.stroke();
    context.shadowBlur = 0;

    const end = points[points.length - 1];
    context.beginPath();
    context.arc(end.x, end.y, 4, 0, Math.PI * 2);
    context.fillStyle = color;
    context.shadowColor = color;
    context.shadowBlur = 16;
    context.fill();
    context.shadowBlur = 0;

    if (mode === 'crashed') {
      context.fillStyle = 'rgba(255, 59, 78, 0.9)';
      context.font = 'bold 10px "Cascadia Code", Consolas, monospace';
      context.textAlign = 'right';
      context.fillText('CRASHED', width - pad.right, Math.max(pad.top + 16, end.y - 14));
    }
  }

  /* -------------------------------------------------------
     Round control
     ------------------------------------------------------- */
  function addHistory(value, won) {
    const chip = document.createElement('span');
    chip.className = `crash-history-chip ${won ? 'is-win' : 'is-crash'}`;
    chip.textContent = `${value.toFixed(2)}×`;
    historyElement.prepend(chip);
    while (historyElement.children.length > 7) {
      historyElement.lastElementChild.remove();
    }
  }

  function start() {
    if (running) return;

    const stake = readBet();
    if (stake === null) return;

    // Lock the bet controls before Points re-renders the page.
    running = true;
    if (!Points.startRound(stake)) {
      running = false;
      return;
    }

    bet = stake;
    canCashOut = false;
    crashPoint = pickCrashPoint();
    startTime = performance.now();
    setMultiplier(1);

    stage.className = 'crash-stage is-running';
    multiplierElement.className = 'crash-multiplier';
    statusElement.className = 'crash-status';
    statusElement.textContent = 'Climbing. Cash out before it crashes.';

    startButton.disabled = true;
    cashoutButton.disabled = true;
    setBettingDisabled(true);

    Sound.play('spin');
    drawGraph(1, 0, 'running');

    // A tiny grace period stops accidental instant cashouts.
    setTimeout(() => {
      if (!running) return;
      canCashOut = true;
      cashoutButton.disabled = false;
    }, 250);

    tickTimer = setInterval(() => {
      if (running) Sound.play('tick');
    }, 700);

    animationFrame = requestAnimationFrame(loop);
  }

  function loop(now) {
    if (!running) return;

    const elapsed = (now - startTime) / 1000;
    const value = Math.exp(GROWTH * elapsed);

    if (value >= crashPoint) {
      setMultiplier(crashPoint);
      drawGraph(crashPoint, Math.log(crashPoint) / GROWTH, 'crashed');
      crash();
      return;
    }

    setMultiplier(value);
    drawGraph(value, elapsed, 'running');

    if (value >= 10) {
      multiplierElement.classList.add('is-hot');
    }

    animationFrame = requestAnimationFrame(loop);
  }

  function crash() {
    running = false;
    canCashOut = false;
    cancelAnimationFrame(animationFrame);
    clearInterval(tickTimer);

    Points.endRound(bet, 0);

    stage.className = 'crash-stage is-crashed';
    multiplierElement.className = 'crash-multiplier is-crashed';
    statusElement.className = 'crash-status is-loss';
    statusElement.textContent = `Crashed at ${crashPoint.toFixed(2)}×. You lost ${SR.fmt(bet)} points.`;

    addHistory(crashPoint, false);
    Sound.play('crash');

    startButton.disabled = false;
    cashoutButton.disabled = true;
    setBettingDisabled(false);
    setBet(bet);
  }

  function cashOut() {
    if (!running || !canCashOut) return;

    running = false;
    canCashOut = false;
    cancelAnimationFrame(animationFrame);
    clearInterval(tickTimer);

    const elapsed = (performance.now() - startTime) / 1000;
    const finalMultiplier = Math.max(multiplier, Math.exp(GROWTH * elapsed));
    const payout = Math.floor(bet * finalMultiplier);

    Points.endRound(bet, payout);
    Points.recordBest('bestCrash', finalMultiplier);

    stage.className = 'crash-stage is-cashed';
    multiplierElement.className = 'crash-multiplier is-cashed';
    statusElement.className = 'crash-status is-win';
    statusElement.textContent = `Cashed out at ${finalMultiplier.toFixed(2)}×. Profit: +${SR.fmt(payout - bet)} points.`;

    setMultiplier(finalMultiplier);
    drawGraph(finalMultiplier, elapsed, 'cashed');
    addHistory(finalMultiplier, true);
    Sound.play('cashout');

    startButton.disabled = false;
    cashoutButton.disabled = true;
    setBettingDisabled(false);
    setBet(bet);
  }

  startButton.addEventListener('click', start);
  cashoutButton.addEventListener('click', cashOut);

  // Space = launch or cash out. Keep it fast.
  document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || event.repeat) return;
    if (document.querySelector('dialog[open]')) return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'SELECT') return;
    event.preventDefault();
    if (running) cashOut();
    else start();
  });

  // Redraw when the window or panel changes size.
  function redrawLast() {
    drawGraph(lastDraw.multiplier, lastDraw.elapsed, lastDraw.mode);
  }

  window.addEventListener('resize', redrawLast);
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(redrawLast);
    observer.observe(stage);
  }

  Points.subscribe(() => {
    if (!running) {
      setBet(betInput.value);
      redrawLast();
    }
  });

  setBet(25);
  drawGraph(1, 0, 'idle');
});
