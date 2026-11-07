/* =========================================================
   SPECTATOR ROOM — points.js
   Shared points balance, sound engine, header/footer,
   achievements, settings and small helper functions.

   Every game imports this file BEFORE its own game file.
   ========================================================= */

'use strict';

/* ---------------------------------------------------------
   1. SMALL HELPERS (also available to games as window.SR)
   --------------------------------------------------------- */

const SR = {
  /** Format a number with commas: 1234 -> "1,234" */
  fmt(number) {
    return Math.floor(Number(number) || 0).toLocaleString('en-US');
  },

  /** Keep a number inside a min/max range. */
  clamp(number, min, max) {
    return Math.min(max, Math.max(min, number));
  },

  /** Random number between 0 and 1. Uses crypto when available. */
  random() {
    if (window.crypto && window.crypto.getRandomValues) {
      const values = new Uint32Array(1);
      window.crypto.getRandomValues(values);
      return values[0] / 4294967296;
    }
    return Math.random();
  },

  /** Shuffle an array (Fisher-Yates). Returns a new array. */
  shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(SR.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  /** A promise that resolves after a number of milliseconds. */
  sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  },

  /** Animate a number inside an element (used by the slots). */
  countUp(element, from, to, duration = 700) {
    if (!element) return;
    const start = performance.now();
    const difference = to - from;

    function frame(now) {
      const progress = SR.clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = SR.fmt(from + difference * eased);
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
};

window.SR = SR;

/* ---------------------------------------------------------
   2. CONSTANTS AND ACHIEVEMENTS
   --------------------------------------------------------- */

const STORAGE_KEY = 'spectator-room-state-v1';
const START_BALANCE = 1000;
const FREE_POINTS = 500;
const MIN_BET = 10;
const JACKPOT_SEED = 1000;

/* Daily bonus: 150 base points, +25 per consecutive day, capped at 300. */
const DAILY_BASE = 150;
const DAILY_STEP = 25;
const DAILY_CAP = 300;

const GAME_LINKS = [
  { href: 'slots.html', name: 'Slot Machine' },
  { href: 'coinflip.html', name: 'Coin Flip' },
  { href: 'crash.html', name: 'Crash' },
  { href: 'blackjack.html', name: 'Blackjack' },
  { href: 'aim.html', name: 'Aim Trainer' },
  { href: 'reaction.html', name: 'Reaction Timer' },
  { href: 'memory.html', name: 'Memory Match' },
  { href: 'cps.html', name: 'Click Speed Test' },
  { href: 'dice.html', name: 'Dice Duel' },
  { href: 'mines.html', name: 'Mines' },
  { href: 'whack.html', name: 'Whack-a-Mole' },
  { href: 'simon.html', name: 'Simon Says' }
];

const ACHIEVEMENTS = {
  'first-win': { icon: '🏆', name: 'First Win', desc: 'Win your first round of anything.' },
  'ten-k': { icon: '💎', name: '10,000 Club', desc: 'Reach a balance of 10,000 points.' },
  'lost-it-all': { icon: '💀', name: 'Lost It All', desc: 'Hit zero points. It happens.' },
  'high-roller': { icon: '🎩', name: 'High Roller', desc: 'Place a bet of 250 points or more.' },
  'jackpot': { icon: '7️⃣', name: 'Jackpot!', desc: 'Hit triple 7s on the slot machine.' },
  'streak-5': { icon: '🔥', name: 'On Fire', desc: 'Win five coin flips in a row.' },
  'sharp-shooter': { icon: '🎯', name: 'Sharp Shooter', desc: 'Finish aim training with 90% accuracy or better.' },
  'lightning': { icon: '⚡', name: 'Lightning', desc: 'React in under 200 milliseconds.' },
  'memory-ace': { icon: '🧠', name: 'Memory Ace', desc: 'Clear Memory Match in 25 seconds or less.' },
  'speed-demon': { icon: '🖱️', name: 'Speed Demon', desc: 'Reach 8 clicks per second.' },
  'dice-seven': { icon: '🎲', name: 'Lucky Seven', desc: 'Win a Dice Duel bet on exactly seven.' },
  'mine-runner': { icon: '💣', name: 'Mine Runner', desc: 'Cash out a Mines round at 5× or better.' },
  'mole-smasher': { icon: '🔨', name: 'Mole Smasher', desc: 'Hit 25 moles in one Whack-a-Mole run.' },
  'simon-says': { icon: '🎛️', name: 'Simon Says', desc: 'Complete five Simon rounds in one run.' }
};

/* ---------------------------------------------------------
   3. STATE (saved to localStorage)
   --------------------------------------------------------- */

function defaultState() {
  return {
    balance: START_BALANCE,
    jackpot: JACKPOT_SEED,
    muted: false,
    theme: 'dark',
    achievements: [],
    dailyStreak: 0,
    lastDailyDate: null,
    stats: {
      gamesPlayed: 0,
      biggestWin: 0,
      totalWagered: 0,
      totalWon: 0,
      bestStreak: 0,
      jackpots: 0,
      bestReaction: null, // lower is better
      bestCps: 0,         // higher is better
      bestAim: 0,
      bestMemory: null,   // seconds, lower is better
      bestCrash: 1,
      bestMines: 1,       // best cash-out multiplier
      bestWhack: 0,       // most moles hit in one run
      bestSimon: 0        // most rounds completed in one run
    }
  };
}

let storageWorks = true;
let state = loadState();
let renderedBalance = null;
const listeners = [];

function loadState() {
  const fresh = defaultState();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fresh;

    const saved = JSON.parse(raw);
    return {
      ...fresh,
      ...saved,
      balance: Number.isFinite(saved.balance) ? Math.max(0, Math.floor(saved.balance)) : fresh.balance,
      jackpot: Number.isFinite(saved.jackpot) ? Math.max(0, Math.floor(saved.jackpot)) : fresh.jackpot,
      muted: Boolean(saved.muted),
      theme: saved.theme === 'light' ? 'light' : 'dark',
      achievements: Array.isArray(saved.achievements) ? saved.achievements : [],
      stats: { ...fresh.stats, ...(saved.stats || {}) }
    };
  } catch (error) {
    console.warn('Could not read saved progress:', error);
    return fresh;
  }
}

function saveState() {
  if (!storageWorks) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    storageWorks = false;
    console.warn('Could not save progress. Is localStorage available?', error);
  }
}

/** Save, repaint the page and tell games that something changed. */
function commit() {
  saveState();
  render();
  listeners.forEach((listener) => {
    try {
      listener(state);
    } catch (error) {
      console.error('Points listener failed:', error);
    }
  });
}

/* ---------------------------------------------------------
   4. SOUND ENGINE — all sounds are generated, no audio files
   --------------------------------------------------------- */

const Sound = (() => {
  let audioContext = null;
  let muted = false;

  function getContext() {
    if (muted) return null;
    try {
      if (!audioContext) {
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) return null;
        audioContext = new Context();
      }
      if (audioContext.state === 'suspended') audioContext.resume();
      return audioContext;
    } catch (error) {
      console.warn('Audio is not available:', error);
      return null;
    }
  }

  /** One simple synthesized note. */
  function tone(frequency, duration = 0.1, type = 'sine', volume = 0.04, delay = 0, slideTo = null) {
    const context = getContext();
    if (!context) return;

    const start = context.currentTime + delay;
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    if (slideTo) {
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), start + duration);
    }

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  }

  /** A short burst of filtered noise (whooshes, cards, crashes). */
  function noise(duration = 0.15, volume = 0.03, frequency = 1200, delay = 0) {
    const context = getContext();
    if (!context) return;

    const frames = Math.max(1, Math.floor(context.sampleRate * duration));
    const buffer = context.createBuffer(1, frames, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < frames; i += 1) data[i] = Math.random() * 2 - 1;

    const source = context.createBufferSource();
    source.buffer = buffer;

    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = frequency;
    filter.Q.value = 0.8;

    const gain = context.createGain();
    gain.gain.value = volume;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    source.start(context.currentTime + delay);
  }

  function play(name) {
    if (muted) return;
    try {
      switch (name) {
        case 'click':
          tone(520, 0.05, 'square', 0.025);
          break;
        case 'error':
          tone(170, 0.18, 'sawtooth', 0.04, 0, 90);
          break;
        case 'coin':
          tone(880, 0.09, 'sine', 0.05);
          tone(1320, 0.18, 'sine', 0.04, 0.07);
          break;
        case 'spin':
          noise(0.3, 0.03, 900);
          tone(120, 0.35, 'sawtooth', 0.02, 0, 240);
          break;
        case 'reel':
          tone(260, 0.045, 'square', 0.03);
          break;
        case 'win':
          [523, 659, 784, 1047].forEach((note, index) => {
            tone(note, 0.16, 'triangle', 0.05, index * 0.07);
          });
          break;
        case 'jackpot':
          [523, 659, 784, 1047, 1319, 1568, 2093].forEach((note, index) => {
            tone(note, 0.3, 'triangle', 0.06, index * 0.09);
          });
          noise(0.5, 0.02, 3000, 0.1);
          break;
        case 'lose':
          tone(220, 0.3, 'sawtooth', 0.035, 0, 80);
          break;
        case 'flip':
          noise(0.16, 0.03, 1800);
          tone(600, 0.12, 'triangle', 0.02, 0, 900);
          break;
        case 'deal':
          noise(0.06, 0.025, 2200);
          break;
        case 'hit':
          tone(920, 0.04, 'square', 0.025);
          break;
        case 'miss':
          tone(150, 0.09, 'square', 0.03);
          break;
        case 'match':
          tone(660, 0.1, 'triangle', 0.04);
          tone(990, 0.14, 'triangle', 0.04, 0.07);
          break;
        case 'mismatch':
          tone(330, 0.1, 'sine', 0.03);
          tone(220, 0.14, 'sine', 0.03, 0.08);
          break;
        case 'crash':
          noise(0.45, 0.04, 400);
          tone(300, 0.5, 'sawtooth', 0.04, 0, 60);
          break;
        case 'cashout':
          [660, 880, 1320].forEach((note, index) => {
            tone(note, 0.18, 'triangle', 0.05, index * 0.06);
          });
          break;
        case 'tick':
          tone(320, 0.025, 'square', 0.015);
          break;
        case 'go':
          tone(880, 0.14, 'square', 0.04);
          break;
        case 'countdown':
          tone(440, 0.07, 'square', 0.025);
          break;
        case 'achievement':
          [784, 1047, 1319].forEach((note, index) => {
            tone(note, 0.2, 'sine', 0.045, index * 0.08);
          });
          break;
        default:
          tone(440, 0.05, 'sine', 0.02);
      }
    } catch (error) {
      console.warn('Sound failed:', error);
    }
  }

  return {
    play,
    /** Play one note directly. Used by Simon Says and other tone games. */
    note(frequency, duration = 0.15, type = 'sine', volume = 0.04) {
      tone(frequency, duration, type, volume);
    },
    setMuted(value) {
      muted = Boolean(value);
    },
    isMuted() {
      return muted;
    }
  };
})();

/* ---------------------------------------------------------
   5. SMALL UI HELPERS (toasts, icons, header, footer)
   --------------------------------------------------------- */

function toast(message, tone = 'info', icon = '') {
  let host = document.getElementById('toast-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'toast-host';
    host.className = 'toast-host';
    host.setAttribute('aria-live', 'polite');
    document.body.appendChild(host);
  }

  const item = document.createElement('div');
  item.className = `toast toast--${tone}`;

  if (icon) {
    const iconElement = document.createElement('span');
    iconElement.className = 'toast-icon';
    iconElement.textContent = icon;
    item.appendChild(iconElement);
  }

  const text = document.createElement('span');
  text.textContent = message;
  item.appendChild(text);

  host.appendChild(item);
  requestAnimationFrame(() => item.classList.add('is-visible'));

  setTimeout(() => {
    item.classList.remove('is-visible');
    setTimeout(() => item.remove(), 300);
  }, 3200);
}

function soundIcon(isMuted) {
  if (isMuted) {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M4 9v6h4l5 4V5L8 9H4Z" />
        <path d="m17 9 5 6M22 9l-5 6" />
      </svg>`;
  }
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" />
    </svg>`;
}

function buildHeader() {
  const host = document.getElementById('site-header');
  if (!host) return;

  const page = document.body.dataset.page || 'home';
  host.classList.add('site-header');

  host.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="index.html" aria-label="Spectator Room home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M16 2 30 16 16 30 2 16Z" />
            <path d="M16 9v14M9 16h14" />
          </svg>
        </span>
        <span class="brand-name">SPECTATOR<em>ROOM</em></span>
      </a>

      <nav class="main-nav" aria-label="Primary">
        <a class="nav-link${page === 'home' ? ' is-active' : ''}" href="index.html">Arcade</a>
        <a class="nav-link" href="index.html#games">Games</a>
        <button class="nav-link nav-random" id="random-game" type="button">Random</button>
      </nav>

      <div class="header-actions">
        <div class="balance-pill" title="Your play-money balance">
          <span class="balance-dot" aria-hidden="true"></span>
          <span class="balance-value" data-balance>${SR.fmt(state.balance)}</span>
          <span class="balance-label">PTS</span>
        </div>
        <button class="daily-pill" id="daily-btn" type="button" title="Daily bonus" aria-label="Claim daily bonus">
          <span class="daily-pill-inner">
            <span class="daily-emoji" aria-hidden="true">📅</span>
            <span class="daily-text" data-daily-text>DAY 1</span>
          </span>
        </button>
        <button class="icon-btn" id="sound-toggle" type="button" aria-label="Mute sound" aria-pressed="false">
          ${soundIcon(state.muted)}
        </button>
        <button class="icon-btn" id="settings-btn" type="button" aria-label="Open settings">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="3.2" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.9 1.9-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.7v-.09a1.7 1.7 0 0 0-1.1-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.9-1.9.06-.06A1.7 1.7 0 0 0 7.7 15a1.7 1.7 0 0 0-1.56-1.03H6v-2.7h.14A1.7 1.7 0 0 0 7.7 10.2a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.9-1.9.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.17 5.2V5h2.7v.2a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.9 1.9-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03H21v2.7h-.1A1.7 1.7 0 0 0 19.4 15Z" />
          </svg>
        </button>
      </div>
    </div>
  `;

    const soundButton = host.querySelector('#sound-toggle');
  soundButton.addEventListener('click', () => {
    toggleMute(true);
  });

  const dailyButton = host.querySelector('#daily-btn');
  if (dailyButton) {
    dailyButton.addEventListener('click', () => {
      if (canClaimDaily()) {
        dailyReward();
      } else {
        toast(`Day ${state.dailyStreak} already claimed.`, 'info', '📅');
      }
    });
  }

  host.querySelector('#settings-btn').addEventListener('click', () => {
    Sound.play('click');
    openSettings();
  });

  host.querySelector('#random-game').addEventListener('click', () => {
    Sound.play('click');
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const options = GAME_LINKS.filter((game) => game.href !== currentFile);
    const choice = options[Math.floor(SR.random() * options.length)] || GAME_LINKS[0];
    window.location.href = choice.href;
  });
}

function buildFooter() {
  const host = document.getElementById('site-footer');
  if (!host) return;

  host.className = 'site-footer';
  host.innerHTML = `
    <div class="footer-inner">
      <p>Play money only. No real gambling.</p>
      <p class="footer-meta">Spectator Room · Built for the respawn timer.</p>
    </div>
  `;
}

function buildBrokeBanner() {
  if (document.getElementById('broke-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'broke-banner';
  banner.className = 'broke-banner';
  banner.hidden = true;
  banner.innerHTML = `
    <div class="broke-copy">
      <strong>Broke?</strong>
      <span>You are under the table. Take a lifeline.</span>
    </div>
    <button class="btn btn-primary btn-small" id="claim-free" type="button">
      Here's ${FREE_POINTS} free points
    </button>
  `;
  document.body.appendChild(banner);

  banner.querySelector('#claim-free').addEventListener('click', () => {
    claimFreePoints();
  });
}

function updateSoundButtons() {
  const headerButton = document.getElementById('sound-toggle');
  if (headerButton) {
    headerButton.innerHTML = soundIcon(state.muted);
    headerButton.classList.toggle('is-muted', state.muted);
    headerButton.setAttribute('aria-pressed', String(state.muted));
    headerButton.setAttribute('aria-label', state.muted ? 'Unmute sound' : 'Mute sound');
  }

  const settingsButton = document.getElementById('settings-mute');
  if (settingsButton) {
    settingsButton.textContent = state.muted ? 'UNMUTE' : 'MUTE';
  }
}

function toggleMute(announce) {
  state.muted = !state.muted;
  Sound.setMuted(state.muted);
  saveState();
  render();
  if (!state.muted) Sound.play('click');
  if (announce) toast(state.muted ? 'Sound muted.' : 'Sound on.', 'info', state.muted ? '🔇' : '🔊');
}

/* ---------------------------------------------------------
   6. THEME
   --------------------------------------------------------- */

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = state.theme === 'light' ? '#f5f2ea' : '#07080d';
}

function setTheme(theme, announce = true) {
  state.theme = theme === 'light' ? 'light' : 'dark';
  applyTheme();
  Sound.play('click');
  commit();
  if (announce) {
    toast(`${state.theme === 'light' ? 'Light' : 'Dark'} theme on.`, 'info', state.theme === 'light' ? '☀️' : '🌙');
  }
}

function toggleTheme() {
  setTheme(state.theme === 'light' ? 'dark' : 'light');
}

/* ---------------------------------------------------------
   6b. BROKE BANNER + FREE POINTS
   --------------------------------------------------------- */

function isBroke() {
  return state.balance < MIN_BET;
}

function claimFreePoints() {
  if (!isBroke()) {
    toast('You still have points. Go win something.', 'info', '👀');
    return false;
  }

  state.balance += FREE_POINTS;
  Sound.play('coin');
  toast(`+${FREE_POINTS} free points. Back in the fight.`, 'gold', '💸');
  commit();
  return true;
}

/* ---------------------------------------------------------
   6c. DAILY BONUS
   A small reward for coming back each day. The streak grows
   by one calendar day, resets on a missed day, and caps out
   so it never becomes a grind.
   --------------------------------------------------------- */

function todayString() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function daysBetween(dateA, dateB) {
  const a = new Date(dateA + 'T00:00:00');
  const b = new Date(dateB + 'T00:00:00');
  const diff = Math.round((b - a) / 86400000);
  return Number.isFinite(diff) ? diff : 0;
}

function updateDailyStreak() {
  if (!state.lastDailyDate) {
    state.dailyStreak = 1;
    state.lastDailyDate = todayString();
    return;
  }

  const gap = daysBetween(state.lastDailyDate, todayString());

  if (gap === 0) {
    // Same day — already counted.
    return;
  }
  if (gap === 1) {
    state.dailyStreak += 1;
  } else {
    state.dailyStreak = 1;
  }

  state.lastDailyDate = todayString();
}

function dailyReward() {
  updateDailyStreak();
  const reward = Math.min(DAILY_CAP, DAILY_BASE + (state.dailyStreak - 1) * DAILY_STEP);
  state.balance += reward;
  Sound.play('cashout');
  toast(`Daily bonus — day ${state.dailyStreak}: +${SR.fmt(reward)} points.`, 'gold', '📅');
  commit();
  return reward;
}

function canClaimDaily() {
  return state.lastDailyDate !== todayString();
}

/* ---------------------------------------------------------
   7. SETTINGS MODAL
   --------------------------------------------------------- */

let settingsDialog = null;

function buildSettings() {
  if (settingsDialog) return;

  const dialog = document.createElement('dialog');
  dialog.id = 'settings-modal';
  dialog.className = 'modal';
  dialog.innerHTML = `
    <div class="modal-card">
      <div class="modal-head">
        <div>
          <p class="eyebrow">PLAYER FILE</p>
          <h2>Settings &amp; stats</h2>
        </div>
        <button class="icon-btn modal-close" type="button" aria-label="Close settings">✕</button>
      </div>

      <div class="modal-body">
        <div class="stat-grid">
          <div class="stat-tile"><span data-balance>${SR.fmt(state.balance)}</span><small>BALANCE</small></div>
          <div class="stat-tile"><span data-stat="gamesPlayed">0</span><small>ROUNDS</small></div>
          <div class="stat-tile"><span data-stat="biggestWin">0</span><small>BIGGEST WIN</small></div>
          <div class="stat-tile"><span data-jackpot>${SR.fmt(state.jackpot)}</span><small>JACKPOT</small></div>
        </div>

        <section class="modal-section">
          <h3>Personal bests</h3>
          <ul class="best-list">
            <li><span>Reaction time</span><strong data-best="bestReaction">—</strong></li>
            <li><span>Click speed</span><strong data-best="bestCps">—</strong></li>
            <li><span>Aim score</span><strong data-best="bestAim">—</strong></li>
            <li><span>Memory time</span><strong data-best="bestMemory">—</strong></li>
            <li><span>Crash cashout</span><strong data-best="bestCrash">—</strong></li>
            <li><span>Mines cashout</span><strong data-best="bestMines">—</strong></li>
            <li><span>Whack-a-mole hits</span><strong data-best="bestWhack">—</strong></li>
            <li><span>Simon rounds</span><strong data-best="bestSimon">—</strong></li>
            <li><span>Coin streak</span><strong data-best="bestStreak">0</strong></li>
          </ul>
        </section>

        <section class="modal-section">
          <h3>Achievements <span class="muted" data-ach-count></span></h3>
          <ul class="achievement-list" id="achievement-list"></ul>
        </section>

        <section class="modal-section">
          <h3>Daily bonus</h3>
          <div class="setting-row">
            <div><strong>Day streak</strong><span data-daily-streak>0</span></div>
            <button class="btn btn-small" id="settings-daily" type="button">CLAIM</button>
          </div>
          <p class="muted" style="margin-top: 8px; font-size: 11px;">
            Come back every 24 hours to increase your streak and get larger rewards.
          </p>
        </section>

        <section class="modal-section">
          <h3>Settings</h3>
          <div class="setting-row">
            <div><strong>Theme</strong><span>Switch between dark and light modes.</span></div>
            <button class="btn btn-small" id="settings-theme" type="button">LIGHT MODE</button>
          </div>
          <div class="setting-row">
            <div><strong>Sound effects</strong><span>Toggle synthesized audio effects.</span></div>
            <button class="btn btn-small" id="settings-mute" type="button">MUTE</button>
          </div>
          <div class="setting-row">
            <div><strong>Lifeline</strong><span>Get ${FREE_POINTS} free points if your balance is too low.</span></div>
            <button class="btn btn-small" id="settings-free" type="button">+${FREE_POINTS}</button>
          </div>
        </section>

        <section class="modal-section danger-zone">
          <h3>Danger zone</h3>
          <div class="setting-row">
            <div><strong>Reset progress</strong><span>Wipes your balance, stats, achievements and the jackpot.</span></div>
            <button class="btn btn-small btn-danger" id="settings-reset" type="button">RESET</button>
          </div>
        </section>
      </div>
    </div>
  `;

  document.body.appendChild(dialog);
  settingsDialog = dialog;

  dialog.querySelector('.modal-close').addEventListener('click', closeSettings);
  dialog.querySelector('#settings-theme').addEventListener('click', () => {
    toggleTheme();
    renderSettings();
  });
  dialog.querySelector('#settings-mute').addEventListener('click', () => {
    toggleMute(true);
    renderSettings();
  });
  dialog.querySelector('#settings-free').addEventListener('click', () => {
    claimFreePoints();
    renderSettings();
  });
  dialog.querySelector('#settings-daily').addEventListener('click', () => {
    if (canClaimDaily()) dailyReward();
    renderSettings();
  });
  dialog.querySelector('#settings-reset').addEventListener('click', resetProgress);

  // Clicking the dark backdrop closes the dialog.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeSettings();
  });
}

function openSettings() {
  buildSettings();
  renderSettings();
  if (typeof settingsDialog.showModal === 'function') {
    settingsDialog.showModal();
  } else {
    settingsDialog.setAttribute('open', '');
  }
}

function closeSettings() {
  if (!settingsDialog) return;
  if (typeof settingsDialog.close === 'function') {
    settingsDialog.close();
  } else {
    settingsDialog.removeAttribute('open');
  }
}

function renderSettings() {
  if (!settingsDialog) return;

  const stats = state.stats;

  const dailyStreak = settingsDialog.querySelector('[data-daily-streak]');
  if (dailyStreak) {
    const reward = Math.min(DAILY_CAP, DAILY_BASE + (state.dailyStreak - 1) * DAILY_STEP);
    dailyStreak.textContent = `Day ${state.dailyStreak} · +${SR.fmt(reward)} pts`;
  }
  const dailyButton = settingsDialog.querySelector('#settings-daily');
  if (dailyButton) {
    dailyButton.textContent = canClaimDaily() ? 'CLAIM DAILY' : 'CLAIMED TODAY';
    dailyButton.disabled = !canClaimDaily();
  }

  const bestFormats = {
    bestReaction: (value) => (value == null ? '—' : `${Math.round(value)} ms`),
    bestCps: (value) => (!value ? '—' : `${Number(value).toFixed(1)} CPS`),
    bestAim: (value) => (!value ? '—' : `${SR.fmt(value)} pts`),
    bestMemory: (value) => (value == null ? '—' : `${Number(value).toFixed(1)} s`),
    bestCrash: (value) => (!value || value <= 1 ? '—' : `${Number(value).toFixed(2)}×`),
    bestMines: (value) => (!value || value <= 1 ? '—' : `${Number(value).toFixed(2)}×`),
    bestWhack: (value) => (!value ? '—' : `${value} hits`),
    bestSimon: (value) => (!value ? '—' : `${value} rounds`),
    bestStreak: (value) => (!value ? '0' : `${value} wins`)
  };

  settingsDialog.querySelectorAll('[data-best]').forEach((element) => {
    const key = element.dataset.best;
    element.textContent = bestFormats[key] ? bestFormats[key](stats[key]) : '—';
  });

  const list = settingsDialog.querySelector('#achievement-list');
  if (list) {
    list.innerHTML = '';
    Object.entries(ACHIEVEMENTS).forEach(([id, achievement]) => {
      const earned = state.achievements.includes(id);
      const item = document.createElement('li');
      item.className = `achievement${earned ? ' is-earned' : ''}`;
      item.innerHTML = `
        <span class="ach-icon">${achievement.icon}</span>
        <span class="ach-copy">
          <strong>${achievement.name}</strong>
          <small>${achievement.desc}</small>
        </span>
        <span class="ach-state">${earned ? 'UNLOCKED' : 'LOCKED'}</span>
      `;
      list.appendChild(item);
    });
  }

  const themeButton = settingsDialog.querySelector('#settings-theme');
  if (themeButton) {
    themeButton.textContent = state.theme === 'light' ? 'DARK MODE' : 'LIGHT MODE';
    themeButton.setAttribute('aria-pressed', String(state.theme === 'light'));
  }

  updateSoundButtons();
}

/* ---------------------------------------------------------
   8. ACHIEVEMENTS
   --------------------------------------------------------- */

function unlock(id) {
  const achievement = ACHIEVEMENTS[id];
  if (!achievement || state.achievements.includes(id)) return false;

  state.achievements.push(id);
  saveState();
  Sound.play('achievement');
  toast(`Achievement unlocked — ${achievement.name}`, 'gold', achievement.icon);
  render();
  return true;
}

/* ---------------------------------------------------------
   9. PUBLIC POINTS API (used by every game)
   --------------------------------------------------------- */

function startRound(bet) {
  const amount = Math.floor(Number(bet));

  if (!Number.isFinite(amount) || amount <= 0) {
    toast('Enter a valid bet.', 'red', '⚠️');
    Sound.play('error');
    return false;
  }

  if (amount > state.balance) {
    toast('Not enough points for that bet.', 'red', '⚠️');
    Sound.play('error');
    return false;
  }

  state.balance -= amount;
  state.stats.totalWagered += amount;

  if (amount >= 250) unlock('high-roller');

  commit();
  return true;
}

/**
 * Finish a round.
 * @param {number} bet     What the player risked.
 * @param {number} payout  What comes back to the balance (0 means a loss).
 * @returns {number} the payout that was added.
 */
function endRound(bet, payout) {
  const stake = Math.max(0, Math.floor(Number(bet) || 0));
  const winnings = Math.max(0, Math.floor(Number(payout) || 0));

  state.balance += winnings;
  state.stats.gamesPlayed += 1;
  state.stats.totalWon += winnings;

  const profit = winnings - stake;
  if (profit > state.stats.biggestWin) state.stats.biggestWin = profit;

  if (profit > 0) unlock('first-win');
  if (state.balance >= 10000) unlock('ten-k');
  if (state.balance <= 0) unlock('lost-it-all');

  commit();
  return winnings;
}

function recordBest(key, value, higherIsBetter = true) {
  if (!(key in state.stats)) return false;
  const current = state.stats[key];
  const isBetter = current == null || (higherIsBetter ? value > current : value < current);
  if (!isBetter) return false;

  state.stats[key] = value;
  commit();
  return true;
}

/** Add a number to a stat, for counters like jackpot hits. */
function addStat(key, amount = 1) {
  if (!(key in state.stats)) return;
  state.stats[key] = (Number(state.stats[key]) || 0) + Number(amount || 0);
  saveState();
  render();
}

function addToJackpot(amount) {
  const addition = Math.max(0, Math.floor(Number(amount) || 0));
  if (!addition) return;
  state.jackpot += addition;
  saveState();
  render();
}

function setJackpot(amount) {
  state.jackpot = Math.max(0, Math.floor(Number(amount) || 0));
  saveState();
  render();
}

function getJackpot() {
  return state.jackpot;
}

function resetProgress() {
  const confirmed = window.confirm(
    'Reset your balance, stats, achievements and the jackpot? This cannot be undone.'
  );
  if (!confirmed) return;

  const keepMuted = state.muted;
  const keepTheme = state.theme;
  state = defaultState();
  state.muted = keepMuted;
  state.theme = keepTheme;
  Sound.setMuted(keepMuted);
  applyTheme();
  commit();
  renderSettings();
  toast('Progress reset. Fresh start: 1,000 points.', 'info', '🔄');
}

function subscribe(listener) {
  if (typeof listener === 'function') listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index >= 0) listeners.splice(index, 1);
  };
}

function render() {
  // Balance (header, hero, settings)
  document.querySelectorAll('[data-balance]').forEach((element) => {
    element.textContent = SR.fmt(state.balance);
    if (renderedBalance !== null && renderedBalance !== state.balance) {
      element.classList.remove('bump');
      void element.offsetWidth;
      element.classList.add('bump');
    }
  });
  renderedBalance = state.balance;

  // Jackpot (header chips, slot machine, homepage)
  document.querySelectorAll('[data-jackpot]').forEach((element) => {
    element.textContent = SR.fmt(state.jackpot);
  });

  // Stats on the homepage and in the modal
  document.querySelectorAll('[data-stat]').forEach((element) => {
    const key = element.dataset.stat;
    if (key === 'achievements') {
      element.textContent = `${state.achievements.length}/${Object.keys(ACHIEVEMENTS).length}`;
    } else {
      element.textContent = SR.fmt(state.stats[key] ?? 0);
    }
  });

  document.querySelectorAll('[data-ach-count]').forEach((element) => {
    element.textContent = `${state.achievements.length}/${Object.keys(ACHIEVEMENTS).length}`;
  });

  // Broke banner
  const banner = document.getElementById('broke-banner');
  if (banner) {
    banner.hidden = !isBroke();
    document.body.classList.toggle('has-broke-banner', isBroke());
  }

  updateSoundButtons();
  if (settingsDialog && settingsDialog.open) renderSettings();

  // Daily pill in the header
  const dailyText = document.querySelector('[data-daily-text]');
  if (dailyText) {
    dailyText.textContent = `DAY ${state.dailyStreak}`;
  }
  const dailyButton = document.querySelector('#daily-btn');
  if (dailyButton) {
    dailyButton.classList.toggle('is-claimed', !canClaimDaily());
    dailyButton.title = canClaimDaily()
      ? `Daily bonus: +${SR.fmt(Math.min(DAILY_CAP, DAILY_BASE + (state.dailyStreak - 1) * DAILY_STEP))} points`
      : `Day ${state.dailyStreak} claimed`;
  }
}

/* ---------------------------------------------------------
   10. START EVERYTHING
   --------------------------------------------------------- */

function init() {
  buildHeader();
  buildFooter();
  buildBrokeBanner();
  updateDailyStreak();
  applyTheme();
  Sound.setMuted(state.muted);
  render();

  // Keep multiple open tabs in sync.
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return;
    state = loadState();
    applyTheme();
    Sound.setMuted(state.muted);
    render();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* The rest of the site talks to this object. */
window.Points = {
  getBalance: () => state.balance,
  getStats: () => ({ ...state.stats }),
  getAchievements: () => state.achievements.slice(),
  getJackpot,
  addToJackpot,
  setJackpot,
  startRound,
  endRound,
  recordBest,
  addStat,
  unlock,
  claimFreePoints,
  isBroke,
  resetProgress,
  openSettings,
  closeSettings,
  dailyReward,
  canClaimDaily,
  toggleTheme,
  setTheme,
  getTheme: () => state.theme,
  subscribe,
  notify: toast,
  random: SR.random,
  MIN_BET,
  FREE_POINTS,
  JACKPOT_SEED,
  ACHIEVEMENTS
};

window.Sound = Sound;
