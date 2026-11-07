# Spectator Room — Complete Source Code

Every project file, grouped by path. The actual files also live in this folder, so you can open
`index.html` directly or deploy the folder as-is.

## `index.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Spectator Room — a play-money arcade for the respawn timer. Slots, crash, blackjack, and quick skill games.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Spectator Room — The Respawn-Timer Arcade</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="home">
  <header id="site-header"></header>

  <main>
    <!-- ================= HERO ================= -->
    <section class="hero wrap">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> THE RESPAWN-TIMER ARCADE</p>
        <h1 class="hero-title">DIE IN GAME.<br><span class="text-red">WIN</span> IN HERE.</h1>
        <p class="hero-lede">
          Twelve fast, dumb, beautiful distractions for the thirty seconds before the next round.
          One shared balance. No downloads. No real money. Just the sweet sound of a jackpot
          while your team flames you in voice chat.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="slots.html">
            SPIN THE SLOTS <span aria-hidden="true">→</span>
          </a>
          <a class="btn btn-ghost" href="#games">BROWSE ALL 12</a>
        </div>

        <div class="hero-stats" aria-label="Your play stats">
          <div class="hero-stat">
            <span class="hero-stat-value" data-balance>1,000</span>
            <span class="hero-stat-label">BALANCE</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value" data-stat="gamesPlayed">0</span>
            <span class="hero-stat-label">ROUNDS</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value" data-stat="biggestWin">0</span>
            <span class="hero-stat-label">BIGGEST WIN</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value" data-stat="achievements">0/14</span>
            <span class="hero-stat-label">BADGES</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="hero-halo"></div>
        <div class="mini-machine">
          <div class="mini-top">
            <span>SPECTATOR SLOTS</span>
            <span class="mini-lights"><i></i><i></i><i></i></span>
          </div>
          <div class="mini-reels">
            <div class="mini-reel">🍒</div>
            <div class="mini-reel">7️⃣</div>
            <div class="mini-reel">💎</div>
          </div>
          <div class="mini-jackpot">
            <span>JACKPOT</span>
            <strong data-jackpot>1,000</strong>
          </div>
          <div class="mini-footer">
            <span>PLAY MONEY</span>
            <span>100% STYLE</span>
          </div>
        </div>
        <div class="floating-chip floating-chip--red">+250</div>
        <div class="floating-chip floating-chip--cyan">7 × 7 × 7</div>
        <div class="floating-chip floating-chip--gold">JACKPOT</div>
      </div>
    </section>

    <!-- ================= TICKER ================= -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span>PLAY MONEY ONLY</span><span>NO REAL GAMBLING</span><span>ONE BALANCE</span>
        <span>TWELVE GAMES</span><span>ZERO DOWNLOADS</span><span>RESPAWN IN 3… 2… 1…</span>
        <span>PLAY MONEY ONLY</span><span>NO REAL GAMBLING</span><span>ONE BALANCE</span>
        <span>TWELVE GAMES</span><span>ZERO DOWNLOADS</span><span>RESPAWN IN 3… 2… 1…</span>
      </div>
    </div>

    <!-- ================= GAME GRID ================= -->
    <section class="game-section wrap" id="games">
      <div class="section-head">
        <div>
          <p class="eyebrow">CHOOSE YOUR DISTRACTION</p>
          <h2>The arcade</h2>
        </div>
        <p class="section-note">Every game feeds the same balance. Start with 1,000 points.</p>
      </div>

      <div class="game-grid">
        <a class="game-card game-card--featured" href="slots.html" style="--card-accent: #ffd166;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
                <path d="M7.5 3.5v17M16.5 3.5v17" />
                <path d="M4.8 8.5h1M9.8 8.5h1M18.8 8.5h1" />
                <path d="m11 13 1.5-1.5V16M13 16h-1.5" />
              </svg>
            </span>
            <span class="game-number">01</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">MAIN EVENT</span>
            <h3>Slot Machine</h3>
            <p>Three reels, weighted chaos, and a jackpot that grows with every spin.</p>
          </div>
          <span class="game-card-cta">PULL THE LEVER <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="coinflip.html" style="--card-accent: #6ff7ff;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M9.5 9.2c0-1.2 1.1-2.2 2.5-2.2s2.5 1 2.5 2.2c0 1.7-2.5 2-2.5 3.8M12 17.2h.01" />
              </svg>
            </span>
            <span class="game-number">02</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">QUICK DRAW</span>
            <h3>Coin Flip</h3>
            <p>Heads or tails. Double or nothing. Try not to build a streak you can't protect.</p>
          </div>
          <span class="game-card-cta">CALL IT <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="crash.html" style="--card-accent: #5cffb1;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <path d="M3 19 8 13l4 3 7-9" />
                <path d="M14 7h5v5" />
                <path d="M3 21h18" />
              </svg>
            </span>
            <span class="game-number">03</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">NERVE CHECK</span>
            <h3>Crash</h3>
            <p>Watch the multiplier climb. Cash out before the line goes red. Greed is a strategy.</p>
          </div>
          <span class="game-card-cta">LAUNCH <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="blackjack.html" style="--card-accent: #ff3b4e;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <rect x="3" y="5" width="11" height="15" rx="1.5" />
                <path d="M10 2.8h9.5A1.5 1.5 0 0 1 21 4.3v12.2a1.5 1.5 0 0 1-1.5 1.5H16" />
                <path d="M8.5 9.5v6M5.5 12.5h6" />
              </svg>
            </span>
            <span class="game-number">04</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">TABLE GAME</span>
            <h3>Blackjack</h3>
            <p>Hit, stand, or double. Blackjack pays 3:2. The dealer is not your friend.</p>
          </div>
          <span class="game-card-cta">TAKE A SEAT <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="aim.html" style="--card-accent: #a78bfa;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="7.5" />
                <circle cx="12" cy="12" r="2.5" />
                <path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
              </svg>
            </span>
            <span class="game-number">05</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">SKILL SHOT</span>
            <h3>Aim Trainer</h3>
            <p>30 seconds of targets. Score points for hits, accuracy, and reaction speed.</p>
          </div>
          <span class="game-card-cta">TAKE THE SHOT <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="reaction.html" style="--card-accent: #ffd166;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <path d="M13 2 4.5 13H11l-1 9 9-12h-6.5L13 2Z" />
              </svg>
            </span>
            <span class="game-number">06</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">REFLEX TEST</span>
            <h3>Reaction Timer</h3>
            <p>Wait for green. Click fast. Find out whether your reflexes are carrying the team.</p>
          </div>
          <span class="game-card-cta">TEST YOURSELF <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="memory.html" style="--card-accent: #6ff7ff;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <rect x="3" y="3" width="7.5" height="7.5" rx="1" />
                <rect x="13.5" y="3" width="7.5" height="7.5" rx="1" />
                <rect x="3" y="13.5" width="7.5" height="7.5" rx="1" />
                <path d="M17.2 13.5v7.5M13.5 17.2H21" />
              </svg>
            </span>
            <span class="game-number">07</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">BRAIN GAME</span>
            <h3>Memory Match</h3>
            <p>Eight pairs, sixteen cards. Finish fast and clean for the biggest point bonus.</p>
          </div>
          <span class="game-card-cta">FLIP CARDS <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="cps.html" style="--card-accent: #ff3b4e;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <rect x="7" y="2.5" width="10" height="19" rx="4" />
                <path d="M12 2.5v6" />
                <path d="M9.5 12h5" />
              </svg>
            </span>
            <span class="game-number">08</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">HANDS ON</span>
            <h3>Click Speed Test</h3>
            <p>Ten seconds. Maximum clicks. Convert your questionable wrist health into points.</p>
          </div>
          <span class="game-card-cta">START CLICKING <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="dice.html" style="--card-accent: #ffd166;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8" cy="8" r="1.2" fill="currentColor" />
                <circle cx="16" cy="8" r="1.2" fill="currentColor" />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" />
                <circle cx="8" cy="16" r="1.2" fill="currentColor" />
                <circle cx="16" cy="16" r="1.2" fill="currentColor" />
              </svg>
            </span>
            <span class="game-number">09</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">DICE TABLE</span>
            <h3>Dice Duel</h3>
            <p>Under, over, or exactly seven. Two dice and one very confident guess.</p>
          </div>
          <span class="game-card-cta">ROLL THEM <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="mines.html" style="--card-accent: #ff3b4e;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <circle cx="12" cy="13" r="6.5" />
                <path d="M12 6.5V3M9.5 3h5M18 8l2.5-2M6 8 3.5 6M18.5 13H22M2 13h2.5" />
                <path d="M9.5 11.5h.01M14.5 11.5h.01M10 15.5c1.2.8 2.8.8 4 0" />
              </svg>
            </span>
            <span class="game-number">10</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">RISK GRID</span>
            <h3>Mines</h3>
            <p>Find gems, dodge five mines, and decide when to cash out before the board turns.</p>
          </div>
          <span class="game-card-cta">SWEEP THE GRID <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="whack.html" style="--card-accent: #5cffb1;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <path d="M4 20c0-3 2.5-5 5-5h6c2.5 0 5 2 5 5" />
                <circle cx="12" cy="8" r="5" />
                <path d="M9.5 7h.01M14.5 7h.01M10 10c1.2.8 2.8.8 4 0" />
              </svg>
            </span>
            <span class="game-number">11</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">REFLEX GARDEN</span>
            <h3>Whack-a-Mole</h3>
            <p>Thirty seconds, nine holes, one rude mole. Build a combo and cash in your reflexes.</p>
          </div>
          <span class="game-card-cta">START WHACKING <span aria-hidden="true">→</span></span>
        </a>

        <a class="game-card" href="simon.html" style="--card-accent: #6ff7ff;">
          <div class="game-card-top">
            <span class="game-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <circle cx="8" cy="8" r="4.5" />
                <circle cx="16" cy="8" r="4.5" />
                <circle cx="8" cy="16" r="4.5" />
                <circle cx="16" cy="16" r="4.5" />
              </svg>
            </span>
            <span class="game-number">12</span>
          </div>
          <div class="game-card-body">
            <span class="game-tag">MEMORY CIRCUIT</span>
            <h3>Simon Says</h3>
            <p>Watch the pattern, repeat it back, and survive one more round. Easy. Until it isn't.</p>
          </div>
          <span class="game-card-cta">FOLLOW THE LIGHTS <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </section>

    <!-- ================= INFO STRIP ================= -->
    <section class="info-strip wrap">
      <div class="info-card">
        <span class="info-index">01</span>
        <h3>One balance</h3>
        <p>Win in slots, lose it in crash, rebuild it in the aim trainer. Everything shares one wallet.</p>
      </div>
      <div class="info-card">
        <span class="info-index">02</span>
        <h3>No installs</h3>
        <p>Plain HTML, CSS and JavaScript. It loads instantly and works with your progress saved locally.</p>
      </div>
      <div class="info-card">
        <span class="info-index">03</span>
        <h3>No real money</h3>
        <p>Every point is fictional. There is nothing to buy, nothing to cash out, and nothing to regret.</p>
      </div>
    </section>

    <!-- ================= CREDITS ================= -->
    <section class="credits wrap" aria-labelledby="credits-title">
      <div class="credits-head">
        <div>
          <p class="eyebrow">THE PEOPLE BEHIND THE RESPAWN</p>
          <h2 id="credits-title">Credits</h2>
        </div>
        <p>A tiny arcade built for the gap between rounds. No frameworks, no trackers, no real money.</p>
      </div>

      <div class="credits-grid">
        <div class="credit-card">
          <span class="credit-index">01</span>
          <h3>Design &amp; code</h3>
          <p>Gindreiy Adona</p>
        </div>
        <div class="credit-card">
          <span class="credit-index">02</span>
          <h3>Built with</h3>
          <p>Plain HTML, CSS and vanilla JavaScript. One shared balance, zero dependencies.</p>
        </div>
        <div class="credit-card">
          <span class="credit-index">03</span>
          <h3>Sound</h3>
          <p>Every effect is synthesized live with the Web Audio API. No audio files were harmed.</p>
        </div>
        <div class="credit-card">
          <span class="credit-index">04</span>
          <h3>Special thanks</h3>
          <p>Everyone who queues “one more round” while the respawn timer runs out.</p>
        </div>
      </div>

      <p class="credits-note">© 2026 Spectator Room · Play money only · No real gambling</p>
    </section>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
</body>
</html>
````

## `slots.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Spectator Room slots — three reels, weighted odds, and a growing play-money jackpot.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Slot Machine — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="slots">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 01 // THE MAIN EVENT</p>
        <h1>Slot Machine</h1>
        <p class="game-sub">Three reels, weighted chaos, and a jackpot pool fed by every spin. Triple 7s takes the whole thing.</p>
      </div>
      <div class="game-badges">
        <span class="badge">RTP ≈ 96%</span>
        <span class="badge">JACKPOT <strong data-jackpot>1,000</strong></span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel slots-panel">
        <div class="slot-header">
          <span class="slot-brand">SPECTATOR SLOTS</span>
          <span class="slot-jackpot">JACKPOT <strong data-jackpot>1,000</strong> PTS</span>
        </div>

        <div class="slot-machine" id="slot-machine">
          <div class="slot-reels">
            <div class="reel"><div class="reel-symbol">🍒</div></div>
            <div class="reel"><div class="reel-symbol">🔔</div></div>
            <div class="reel"><div class="reel-symbol">7️⃣</div></div>
            <div class="payline" aria-hidden="true"></div>
          </div>

          <div class="slot-result" id="slot-result" aria-live="polite">
            <span class="slot-result-label">READY</span>
            <span class="slot-result-text">Set your bet and pull the lever.</span>
          </div>
        </div>

        <div class="slot-controls">
          <div class="slot-bet-row">
            <div class="bet-field">
              <span>BET</span>
              <input id="slot-bet" type="number" min="10"  step="5" value="25" inputmode="numeric" aria-label="Bet amount">
              <span class="pts">PTS</span>
            </div>

            <div class="bet-chips">
              <button class="chip" type="button" data-slot-bet="10">10</button>
              <button class="chip" type="button" data-slot-bet="25">25</button>
              <button class="chip" type="button" data-slot-bet="50">50</button>
              <button class="chip" type="button" data-slot-bet="100">100</button>
              <button class="chip" type="button" data-slot-bet="max">MAX</button>
            </div>
          </div>

          <button class="btn btn-primary btn-wide spin-button" id="slot-spin" type="button">
            <span>SPIN</span>
            <kbd>SPACE</kbd>
          </button>

          <p class="microcopy slot-hint">Triple 7s wins the jackpot. Two of a kind pays too. 4% of every bet feeds the pool.</p>
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">Paytable</h2>

        <h3>Three of a kind</h3>
        <ul class="paytable" id="paytable-three"></ul>

        <h3>Two of a kind</h3>
        <ul class="paytable" id="paytable-two"></ul>

        <div class="divider"></div>

        <h3>How to play</h3>
        <p>Pick your bet (minimum 10 points), then spin. Three matching symbols pay the big multipliers. Exactly two matching symbols pay the smaller ones.</p>
        <p>Every bet puts 4% into the jackpot. Three 7s wins the entire pool and resets it to 1,000.</p>

        <p class="fine-print">
          Symbols are weighted — 7s are rare, cherries are common. The math is tuned to a house edge so the arcade stays balanced. Play money only.
        </p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/slots.js"></script>
</body>
</html>
````

## `coinflip.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Coin Flip — call heads or tails and double your play-money points.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Coin Flip — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="coinflip">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 02 // QUICK DRAW</p>
        <h1>Coin Flip</h1>
        <p class="game-sub">Pick a side. Call it in the air. Win and your bet doubles. Lose and it disappears. No in-between.</p>
      </div>
      <div class="game-badges">
        <span class="badge">50 / 50</span>
        <span class="badge">PAYS <strong>2×</strong></span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel coin-panel">
        <div class="coin-stage" id="coin-stage">
          <div class="coin-wrap">
            <div class="coin" id="coin">
              <div class="coin-face coin-front" aria-hidden="true">H</div>
              <div class="coin-face coin-back" aria-hidden="true">T</div>
            </div>
          </div>
        </div>

        <div class="choice-row" role="group" aria-label="Choose heads or tails">
          <button class="choice-btn is-active" type="button" data-choice="heads">HEADS</button>
          <button class="choice-btn" type="button" data-choice="tails">TAILS</button>
        </div>

        <div class="bet-bar">
          <div class="bet-field">
            <span>BET</span>
            <input id="coin-bet" type="number" min="10"  step="5" value="25" inputmode="numeric" aria-label="Bet amount">
            <span class="pts">PTS</span>
          </div>
          <div class="bet-chips">
            <button class="chip" type="button" data-coin-bet="10">10</button>
            <button class="chip" type="button" data-coin-bet="25">25</button>
            <button class="chip" type="button" data-coin-bet="50">50</button>
            <button class="chip" type="button" data-coin-bet="100">100</button>
            <button class="chip" type="button" data-coin-bet="max">MAX</button>
          </div>
        </div>

        <button class="btn btn-primary btn-wide" id="coin-flip" type="button" style="margin-top: 14px;">
          FLIP — DOUBLE OR NOTHING
        </button>

        <div class="coin-result" id="coin-result" aria-live="polite">
          Pick heads or tails, then flip. A win pays 2× your bet.
        </div>

        <div class="mini-stats">
          <div><span id="coin-streak">0</span><small>STREAK</small></div>
          <div><span id="coin-best">0</span><small>BEST STREAK</small></div>
          <div><span id="coin-last">—</span><small>LAST FLIP</small></div>
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">The rules</h2>
        <p>Choose <strong>heads</strong> or <strong>tails</strong>, set a bet, and flip. The coin is a true 50/50.</p>
        <p><strong>Win:</strong> you get 2× your bet back — your original stake plus the same amount in profit.</p>
        <p><strong>Lose:</strong> the bet is gone.</p>
        <p>There is no house edge on this one. It is pure double-or-nothing. Your streak resets after a loss.</p>

        <div class="divider"></div>

        <h3>Streak hunting</h3>
        <p>Win five flips in a row to unlock <strong>On Fire</strong>. Your best streak is saved across sessions.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/coinflip.js"></script>
</body>
</html>
````

## `crash.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Crash — watch the multiplier climb and cash out before it crashes. Play-money only.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Crash — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="crash">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 03 // NERVE CHECK</p>
        <h1>Crash</h1>
        <p class="game-sub">The multiplier climbs from 1.00×. It can crash at any moment. Cash out before it does.</p>
      </div>
      <div class="game-badges">
        <span class="badge">HOUSE EDGE <strong>3%</strong></span>
        <span class="badge">MAX <strong>1000×</strong></span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel crash-panel">
        <div class="crash-stage" id="crash-stage">
          <canvas id="crash-canvas" aria-hidden="true"></canvas>

          <div class="crash-overlay">
            <div class="crash-multiplier" id="crash-multiplier">1.00<span>×</span></div>
            <div class="crash-status" id="crash-status">Place a bet and launch.</div>
          </div>

          <div class="crash-history" id="crash-history" aria-label="Recent rounds"></div>
        </div>

        <div class="crash-controls">
          <div class="bet-bar">
            <div class="bet-field">
              <span>BET</span>
              <input id="crash-bet" type="number" min="10"  step="5" value="25" inputmode="numeric" aria-label="Bet amount">
              <span class="pts">PTS</span>
            </div>
            <div class="bet-chips">
              <button class="chip" type="button" data-crash-bet="10">10</button>
              <button class="chip" type="button" data-crash-bet="25">25</button>
              <button class="chip" type="button" data-crash-bet="50">50</button>
              <button class="chip" type="button" data-crash-bet="100">100</button>
              <button class="chip" type="button" data-crash-bet="max">MAX</button>
            </div>
          </div>

          <div class="crash-buttons">
            <button class="btn btn-primary" id="crash-start" type="button">LAUNCH</button>
            <button class="btn btn-cashout" id="crash-cashout" type="button" disabled>CASH OUT</button>
          </div>

          <p class="microcopy">
            Your bet is locked in when you launch. Cash out at any time after the first 0.25 seconds.
            The house edge is built into the crash curve.
          </p>
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">How it works</h2>
        <p>Set a bet and launch. The multiplier starts at <strong>1.00×</strong> and climbs in real time.</p>
        <p>Hit <strong>cash out</strong> and your payout is <strong>bet × current multiplier</strong>. Wait too long and the round crashes, taking the bet with it.</p>
        <p>The longer you wait, the bigger the payout — and the bigger the chance you lose everything. That is the whole game.</p>

        <div class="divider"></div>

        <h3>The math</h3>
        <p>The crash point is random, with a <strong>3% house edge</strong>. There is a 3% chance of an instant crash, and the odds get thinner as the multiplier climbs.</p>
        <p>Your best cashout multiplier is saved in your player file.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/crash.js"></script>
</body>
</html>
````

## `blackjack.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Blackjack — hit, stand, or double down in a play-money six-deck shoe.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Blackjack — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="blackjack">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 04 // TABLE GAME</p>
        <h1>Blackjack</h1>
        <p class="game-sub">Hit, stand, or double. Get closer to 21 than the dealer without going over. Blackjack pays 3:2.</p>
      </div>
      <div class="game-badges">
        <span class="badge">BLACKJACK <strong>3:2</strong></span>
        <span class="badge">DEALER STANDS ON <strong>17</strong></span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel blackjack-panel">
        <div class="bj-table">
          <div class="bj-row">
            <div class="bj-label">DEALER <span id="bj-dealer-total"></span></div>
            <div class="bj-hand" id="bj-dealer-hand" aria-label="Dealer hand"></div>
          </div>

          <div class="bj-center" id="bj-status" aria-live="polite">
            Place your bet and deal. Dealer stands on all 17.
          </div>

          <div class="bj-row">
            <div class="bj-label">YOU <span id="bj-player-total"></span></div>
            <div class="bj-hand" id="bj-player-hand" aria-label="Your hand"></div>
          </div>
        </div>

        <div class="bj-controls">
          <div class="bet-bar">
            <div class="bet-field">
              <span>BET</span>
              <input id="bj-bet" type="number" min="10"  step="5" value="25" inputmode="numeric" aria-label="Bet amount">
              <span class="pts">PTS</span>
            </div>
            <div class="bet-chips">
              <button class="chip" type="button" data-bj-bet="10">10</button>
              <button class="chip" type="button" data-bj-bet="25">25</button>
              <button class="chip" type="button" data-bj-bet="50">50</button>
              <button class="chip" type="button" data-bj-bet="100">100</button>
              <button class="chip" type="button" data-bj-bet="max">MAX</button>
            </div>
          </div>

          <div class="bj-actions">
            <button class="btn btn-primary" id="bj-deal" type="button">DEAL</button>
            <button class="btn" id="bj-hit" type="button" disabled>HIT</button>
            <button class="btn" id="bj-stand" type="button" disabled>STAND</button>
            <button class="btn" id="bj-double" type="button" disabled>DOUBLE</button>
          </div>

          <p class="microcopy">
            Six-deck shoe · Blackjack pays 3:2 · Dealer stands on all 17 ·
            <span id="bj-shoe">312 cards</span>
          </p>
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">Table rules</h2>
        <p><strong>Goal:</strong> beat the dealer's hand without going over 21. Number cards are their value, face cards are 10, and aces count as 1 or 11.</p>
        <p><strong>Hit</strong> takes another card. <strong>Stand</strong> ends your turn. <strong>Double</strong> doubles your bet, deals one final card, and stands automatically.</p>
        <p><strong>Blackjack</strong> is an ace plus a ten-value card on the first two cards. It pays <strong>3:2</strong>.</p>
        <p>A push (equal totals) returns your bet. The dealer stands on all 17s.</p>

        <div class="divider"></div>

        <h3>Good to know</h3>
        <p>You can only double on your first two cards, and only if your balance covers the extra bet.</p>
        <p>The shoe is shuffled automatically when it runs low.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/blackjack.js"></script>
</body>
</html>
````

## `aim.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Aim Trainer — 30 seconds of targets. Turn accuracy and reaction speed into play-money points.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Aim Trainer — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="aim">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 05 // SKILL SHOT</p>
        <h1>Aim Trainer</h1>
        <p class="game-sub">Thirty seconds. As many targets as you can hit. Your score converts straight into points.</p>
      </div>
      <div class="game-badges">
        <span class="badge">DURATION <strong>30s</strong></span>
        <span class="badge">BONUS <strong>ACCURACY + SPEED</strong></span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel aim-panel">
        <div class="game-hud" aria-live="off">
          <div><span id="aim-time">30.0</span><small>TIME LEFT</small></div>
          <div><span id="aim-hits">0</span><small>HITS</small></div>
          <div><span id="aim-acc">0%</span><small>ACCURACY</small></div>
          <div><span id="aim-react">—</span><small>AVG REACTION</small></div>
        </div>

        <div class="aim-arena" id="aim-arena">
          <div class="aim-overlay" id="aim-overlay">
            <p class="eyebrow">30-SECOND RUN</p>
            <h2 id="aim-title">Click the targets. Fast.</h2>
            <p id="aim-message">
              Every hit is worth 4 points. Accuracy and reaction speed add bonuses.
              Targets move on their own — keep your cursor ready.
            </p>

            <div class="aim-result" id="aim-result" hidden>
              <div><span id="aim-r-hits">0</span><small>HITS</small></div>
              <div><span id="aim-r-acc">0%</span><small>ACCURACY</small></div>
              <div><span id="aim-r-react">—</span><small>AVG REACT</small></div>
            </div>

            <p class="aim-payout" id="aim-payout" hidden>+0 points</p>

            <button class="btn btn-primary" id="aim-start" type="button">START RUN</button>
          </div>
        </div>

        <p class="microcopy aim-tip">Click or tap inside the arena. Missing counts against your accuracy.</p>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">Scoring</h2>
        <p><strong>Hits:</strong> 4 points each.</p>
        <p><strong>Accuracy bonus:</strong> up to 100 points for hitting what you aim at.</p>
        <p><strong>Speed bonus:</strong> up to 150 points for fast average reactions.</p>
        <p>A clean, quick run can pay 300+ points. A panic-spam run pays a lot less.</p>

        <div class="divider"></div>

        <h3>How to play</h3>
        <p>Press <strong>Start Run</strong> and click the purple targets for 30 seconds. Each hit spawns a new target somewhere else.</p>
        <p>Targets you ignore will disappear and respawn. Clicking empty space still counts as a shot, so aim deliberately.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/aim.js"></script>
</body>
</html>
````

## `reaction.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Reaction Timer — wait for green, click fast, and turn your reflexes into play-money points.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Reaction Timer — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="reaction">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 06 // REFLEX TEST</p>
        <h1>Reaction Timer</h1>
        <p class="game-sub">Wait for the screen to turn green, then click as fast as humanly possible. Faster reactions pay more.</p>
      </div>
      <div class="game-badges">
        <span class="badge">MAX PAYOUT <strong>200 PTS</strong></span>
        <span class="badge">FALSE STARTS <strong>0 PTS</strong></span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel reaction-panel">
        <div class="reaction-stage" id="reaction-stage" role="button" tabindex="0" aria-label="Reaction test. Click to start.">
          <div class="reaction-content">
            <span class="reaction-kicker" id="reaction-kicker">REACTION TEST</span>
            <h2 id="reaction-text">Click to start</h2>
            <p id="reaction-sub">Wait for green. Click as fast as you can. Space bar works too.</p>
          </div>
        </div>

        <div class="reaction-history">
          <div class="mini-stats">
            <div><span id="reaction-best">—</span><small>BEST</small></div>
            <div><span id="reaction-last">—</span><small>LAST</small></div>
            <div><span id="reaction-avg">—</span><small>SESSION AVG</small></div>
          </div>
          <ul class="reaction-attempts" id="reaction-attempts" aria-label="Recent attempts"></ul>
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">Scoring</h2>
        <p><strong>150 ms or less:</strong> 200 points</p>
        <p><strong>151–200 ms:</strong> 160 points</p>
        <p><strong>201–250 ms:</strong> 120 points</p>
        <p><strong>251–300 ms:</strong> 90 points</p>
        <p><strong>301–400 ms:</strong> 60 points</p>
        <p><strong>401–600 ms:</strong> 30 points</p>
        <p><strong>Slower:</strong> 10 points</p>

        <div class="divider"></div>

        <h3>How to play</h3>
        <p>Click the panel to arm the test. Wait for it to turn green, then click immediately. Clicking early is a false start and pays nothing.</p>
        <p>React in under <strong>200 ms</strong> to unlock the <strong>Lightning</strong> achievement.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/reaction.js"></script>
</body>
</html>
````

## `memory.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Memory Match — sixteen cards, eight pairs. Finish fast and clean to earn play-money points.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Memory Match — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="memory">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 07 // BRAIN GAME</p>
        <h1>Memory Match</h1>
        <p class="game-sub">Eight pairs, sixteen cards. Clear the board quickly and efficiently for the biggest point bonus.</p>
      </div>
      <div class="game-badges">
        <span class="badge">BASE <strong>50 PTS</strong></span>
        <span class="badge">BONUS <strong>TIME + MOVES</strong></span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel memory-panel">
        <div class="game-hud">
          <div><span id="memory-moves">0</span><small>MOVES</small></div>
          <div><span id="memory-time">0.0</span><small>TIME</small></div>
          <div><span id="memory-pairs">0/8</span><small>PAIRS</small></div>
        </div>

        <div class="memory-stage">
          <div class="memory-board" id="memory-board" aria-label="Memory board"></div>

          <div class="memory-complete" id="memory-complete" hidden>
            <p class="eyebrow">BOARD CLEARED</p>
            <h2>Nice memory.</h2>
            <p id="memory-result-text">You cleared the board.</p>
            <p class="memory-points" id="memory-points">+0 points</p>
            <button class="btn btn-primary" id="memory-again" type="button">PLAY AGAIN</button>
          </div>
        </div>

        <div class="memory-actions">
          <button class="btn btn-ghost" id="memory-restart" type="button">SHUFFLE &amp; RESTART</button>
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">Scoring</h2>
        <p><strong>Base:</strong> 50 points for clearing the board.</p>
        <p><strong>Time bonus:</strong> up to 200 points. Every second costs you 5.</p>
        <p><strong>Move bonus:</strong> up to 100 points for solving it in close to the minimum 8 moves.</p>
        <p>Finish in <strong>25 seconds or less</strong> to unlock the <strong>Memory Ace</strong> achievement.</p>

        <div class="divider"></div>

        <h3>How to play</h3>
        <p>Flip two cards at a time. Matching symbols stay face up. Non-matches flip back after a moment.</p>
        <p>The timer starts on your first flip and stops when the last pair is matched.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/memory.js"></script>
</body>
</html>
````

## `cps.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Click Speed Test — ten seconds of clicking. Turn your CPS into play-money points.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Click Speed Test — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="cps">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 08 // HANDS ON</p>
        <h1>Click Speed Test</h1>
        <p class="game-sub">Ten seconds. Maximum clicks. Your clicks per second convert directly into points. No wrist damage refunds.</p>
      </div>
      <div class="game-badges">
        <span class="badge">DURATION <strong>10s</strong></span>
        <span class="badge">8+ CPS <strong>BONUS 50</strong></span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel cps-panel">
        <div class="game-hud">
          <div><span id="cps-timer">10.00</span><small>TIME LEFT</small></div>
          <div><span id="cps-count">0</span><small>CLICKS</small></div>
          <div><span id="cps-live">0.0</span><small>CPS</small></div>
        </div>

        <div class="cps-progress" aria-hidden="true"><span id="cps-progress"></span></div>

        <button class="cps-pad" id="cps-pad" type="button" aria-label="Click speed test pad. Click or press Space to start.">
          <span class="cps-pad-label" id="cps-pad-label">START</span>
          <span class="cps-pad-sub" id="cps-pad-sub">Click the pad or press Space. You have 10 seconds.</span>
        </button>

        <div class="cps-result" id="cps-result" aria-live="polite">
          Ten seconds. Click as fast as you can.
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">Scoring</h2>
        <p>Points = <strong>CPS × 30</strong>, rounded to the nearest whole number.</p>
        <p>Reach <strong>8 CPS</strong> or higher for an extra <strong>+50 points</strong>. The maximum payout is capped at 600.</p>
        <p>Your first click starts the timer and counts. The test ends automatically after 10 seconds.</p>

        <div class="divider"></div>

        <h3>How to play</h3>
        <p>Click the big pad or press <strong>Space</strong> repeatedly. Holding the key down does not count — you need a fresh press each time.</p>
        <p>Reach 8 CPS to unlock the <strong>Speed Demon</strong> achievement.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/cps.js"></script>
</body>
</html>
````

## `dice.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Dice Duel — bet on under, over, or exactly seven with two play-money dice.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Dice Duel — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="dice">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 09 // DICE TABLE</p>
        <h1>Dice Duel</h1>
        <p class="game-sub">Two dice. Three calls. Pick a side of seven, or call the exact number and get paid for the nerve.</p>
      </div>
      <div class="game-badges">
        <span class="badge">2 DICE</span>
        <span class="badge">RTP ≈ 96%</span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel dice-panel">
        <div class="dice-stage" id="dice-stage">
          <div class="die" id="die-a" data-value="3" aria-hidden="true"></div>
          <div class="die" id="die-b" data-value="4" aria-hidden="true"></div>
          <div class="dice-total">
            <span id="dice-total">7</span>
            <small>TOTAL</small>
          </div>
        </div>

        <div class="dice-choice" role="group" aria-label="Choose under, seven, or over">
          <button class="choice-btn is-active" type="button" data-dice-choice="under">
            <span>UNDER 7</span><small>2.3×</small>
          </button>
          <button class="choice-btn" type="button" data-dice-choice="seven">
            <span>EXACTLY 7</span><small>5.8×</small>
          </button>
          <button class="choice-btn" type="button" data-dice-choice="over">
            <span>OVER 7</span><small>2.3×</small>
          </button>
        </div>

        <div class="bet-bar">
          <div class="bet-field">
            <span>BET</span>
            <input id="dice-bet" type="number" min="10"  step="5" value="25" inputmode="numeric" aria-label="Bet amount">
            <span class="pts">PTS</span>
          </div>
          <div class="bet-chips">
            <button class="chip" type="button" data-dice-bet="10">10</button>
            <button class="chip" type="button" data-dice-bet="25">25</button>
            <button class="chip" type="button" data-dice-bet="50">50</button>
            <button class="chip" type="button" data-dice-bet="100">100</button>
            <button class="chip" type="button" data-dice-bet="max">MAX</button>
          </div>
        </div>

        <button class="btn btn-primary btn-wide dice-roll" id="dice-roll" type="button" style="margin-top: 14px;">
          ROLL THE DICE
        </button>

        <div class="dice-result" id="dice-result" aria-live="polite">
          Choose under, seven, or over, then roll. A winning under/over pays 2.3×; exactly seven pays 5.8×.
        </div>

        <div class="mini-stats">
          <div><span id="dice-last">—</span><small>LAST ROLL</small></div>
          <div><span id="dice-streak">0</span><small>WIN STREAK</small></div>
          <div><span id="dice-history">—</span><small>RECENT</small></div>
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">How the dice pay</h2>
        <p>Two fair six-sided dice are rolled. The total is between <strong>2</strong> and <strong>12</strong>.</p>
        <p><strong>Under 7</strong> wins on 2–6 and pays <strong>2.3×</strong>. <strong>Over 7</strong> wins on 8–12 and pays <strong>2.3×</strong>.</p>
        <p><strong>Exactly 7</strong> wins on a seven and pays <strong>5.8×</strong>. The other two calls lose.</p>

        <div class="divider"></div>

        <h3>Why the payouts differ</h3>
        <p>There are 36 possible rolls. Fifteen are under seven, fifteen are over seven, and six are exactly seven. The smaller chance pays more.</p>
        <p>The payouts are tuned to a small house edge so the shared balance stays healthy. Every point is play money.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/dice.js"></script>
</body>
</html>
````

## `mines.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Mines — reveal gems on a 5×5 grid, dodge five mines, and cash out before your luck runs out.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Mines — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="mines">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 10 // RISK GRID</p>
        <h1>Mines</h1>
        <p class="game-sub">Twenty safe tiles. Five mines. Every gem raises the multiplier — cash out before you find the wrong square.</p>
      </div>
      <div class="game-badges">
        <span class="badge">25 TILES</span>
        <span class="badge">5 MINES</span>
        <span class="badge">CASH OUT ANY TIME</span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel mines-panel">
        <div class="game-hud mines-hud" aria-live="off">
          <div><span id="mines-gems">0</span><small>GEMS FOUND</small></div>
          <div><span id="mines-multiplier">1.00×</span><small>CASHOUT</small></div>
          <div><span id="mines-next">1.21×</span><small>NEXT GEM</small></div>
        </div>

        <div class="mines-board" id="mines-board" aria-label="Mines grid"></div>

        <div class="bet-bar">
          <div class="bet-field">
            <span>BET</span>
            <input id="mines-bet" type="number" min="10"  step="5" value="25" inputmode="numeric" aria-label="Bet amount">
            <span class="pts">PTS</span>
          </div>
          <div class="bet-chips">
            <button class="chip" type="button" data-mines-bet="10">10</button>
            <button class="chip" type="button" data-mines-bet="25">25</button>
            <button class="chip" type="button" data-mines-bet="50">50</button>
            <button class="chip" type="button" data-mines-bet="100">100</button>
            <button class="chip" type="button" data-mines-bet="max">MAX</button>
          </div>
        </div>

        <div class="mines-actions">
          <button class="btn btn-primary" id="mines-start" type="button">START ROUND</button>
          <button class="btn btn-ghost" id="mines-cashout" type="button" disabled>CASH OUT</button>
        </div>

        <div class="dice-result mines-result" id="mines-result" aria-live="polite">
          Set a bet and start a round. Your first safe tile pays 1.21×.
        </div>

        <div class="mini-stats">
          <div><span id="mines-best">—</span><small>BEST CASHOUT</small></div>
          <div><span id="mines-played">0</span><small>ROUNDS</small></div>
          <div><span id="mines-last">—</span><small>LAST RESULT</small></div>
        </div>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">How Mines works</h2>
        <p>Every round hides <strong>five mines</strong> in a 5×5 grid. Reveal a safe tile to collect a gem and raise your cash-out multiplier.</p>
        <p>You can cash out after the first gem. The payout is your bet multiplied by the current multiplier. Hit a mine and the bet is gone.</p>

        <div class="divider"></div>

        <h3>Multipliers</h3>
        <p>The multiplier is based on the real odds of surviving that many picks, with a small house edge. More gems means a much bigger cash-out — and a much smaller chance of getting there.</p>
        <p>Find all <strong>20 gems</strong> and the round cashes out automatically at the maximum multiplier.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/mines.js"></script>
</body>
</html>
````

## `whack.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Whack-a-Mole — thirty seconds of reaction testing. Hit the moles, build a combo, and earn play-money points.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Whack-a-Mole — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="whack">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 11 // REFLEX GARDEN</p>
        <h1>Whack-a-Mole</h1>
        <p class="game-sub">Thirty seconds. Nine holes. One very fast mole. Hit it before it ducks back down.</p>
      </div>
      <div class="game-badges">
        <span class="badge">DURATION <strong>30s</strong></span>
        <span class="badge">COMBO BONUS</span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel whack-panel">
        <div class="game-hud" aria-live="off">
          <div><span id="whack-time">30.0</span><small>TIME LEFT</small></div>
          <div><span id="whack-hits">0</span><small>HITS</small></div>
          <div><span id="whack-acc">0%</span><small>ACCURACY</small></div>
          <div><span id="whack-combo">0</span><small>COMBO</small></div>
        </div>

        <div class="whack-arena" id="whack-arena">
          <div class="whack-grid" id="whack-grid"></div>

          <div class="aim-overlay" id="whack-overlay">
            <p class="eyebrow">30-SECOND RUN</p>
            <h2 id="whack-title">Whack the moles.</h2>
            <p id="whack-message">
              Every hit is worth 6 points. Accuracy and your best combo add bonuses.
              Click a hole with a mole in it — empty clicks cost accuracy.
            </p>

            <div class="aim-result" id="whack-result" hidden>
              <div><span id="whack-r-hits">0</span><small>HITS</small></div>
              <div><span id="whack-r-acc">0%</span><small>ACCURACY</small></div>
              <div><span id="whack-r-combo">0</span><small>BEST COMBO</small></div>
            </div>

            <p class="aim-payout" id="whack-payout" hidden>+0 points</p>

            <button class="btn btn-primary" id="whack-start" type="button">START RUN</button>
          </div>
        </div>

        <p class="microcopy aim-tip">Tap or click a hole. A mole is only up for a moment.</p>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">Scoring</h2>
        <p><strong>Hits:</strong> 6 points each.</p>
        <p><strong>Accuracy bonus:</strong> up to 100 points for clicking the right holes.</p>
        <p><strong>Combo bonus:</strong> 2 points per hit in your best uninterrupted streak.</p>
        <p>A focused run can pay 250+ points. Panic-clicking pays much less.</p>

        <div class="divider"></div>

        <h3>How to play</h3>
        <p>Press <strong>Start Run</strong>. A mole pops out of one of the nine holes. Click it before it disappears.</p>
        <p>Missing a mole or clicking an empty hole resets your combo. The run lasts 30 seconds.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/whack.js"></script>
</body>
</html>
````

## `simon.html`

````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Simon Says — watch the pattern, repeat it, and see how many rounds your memory can survive.">
  <meta name="theme-color" content="#07080d">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <title>Simon Says — Spectator Room</title>
  <script src="js/theme.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="simon">
  <header id="site-header"></header>

  <main class="page-shell">
    <a class="back-link" href="index.html">← Back to arcade</a>

    <header class="game-header">
      <div>
        <p class="eyebrow">GAME 12 // MEMORY CIRCUIT</p>
        <h1>Simon Says</h1>
        <p class="game-sub">Watch the pads light up. Repeat the pattern. Every round adds one more step and one more chance to forget.</p>
      </div>
      <div class="game-badges">
        <span class="badge">PATTERN MEMORY</span>
        <span class="badge">NO BET REQUIRED</span>
      </div>
    </header>

    <div class="game-layout">
      <section class="panel game-panel simon-panel">
        <div class="game-hud simon-hud" aria-live="off">
          <div><span id="simon-round">0</span><small>ROUND</small></div>
          <div><span id="simon-length">3</span><small>SEQUENCE</small></div>
          <div><span id="simon-best">0</span><small>BEST ROUNDS</small></div>
          <div><span id="simon-state">IDLE</span><small>STATUS</small></div>
        </div>

        <div class="simon-stage" id="simon-stage">
          <div class="simon-board" id="simon-board">
            <button class="simon-pad simon-pad--green" type="button" data-pad="0" aria-label="Green pad" disabled></button>
            <button class="simon-pad simon-pad--red" type="button" data-pad="1" aria-label="Red pad" disabled></button>
            <button class="simon-pad simon-pad--gold" type="button" data-pad="2" aria-label="Gold pad" disabled></button>
            <button class="simon-pad simon-pad--cyan" type="button" data-pad="3" aria-label="Cyan pad" disabled></button>
          </div>

          <p class="simon-status" id="simon-status" aria-live="polite">Press start to watch the pattern.</p>

          <div class="aim-overlay" id="simon-overlay">
            <p class="eyebrow">MEMORY CIRCUIT</p>
            <h2 id="simon-title">Watch. Repeat. Survive.</h2>
            <p id="simon-message">
              The pattern starts at three pads and grows by one each round.
              Repeat it correctly to bank another round. One wrong pad ends the run.
            </p>

            <div class="aim-result" id="simon-result" hidden>
              <div><span id="simon-r-rounds">0</span><small>ROUNDS</small></div>
              <div><span id="simon-r-length">3</span><small>SEQUENCE</small></div>
              <div><span id="simon-r-points">0</span><small>POINTS</small></div>
            </div>

            <p class="aim-payout" id="simon-payout" hidden>+0 points</p>

            <button class="btn btn-primary" id="simon-start" type="button">START RUN</button>
          </div>
        </div>

        <p class="microcopy aim-tip">Pads are locked while the pattern plays. Watch first, then repeat.</p>
      </section>

      <aside class="panel side-panel">
        <h2 class="panel-title">Scoring</h2>
        <p>Each completed round is worth <strong>25 points</strong>.</p>
        <p>Complete five rounds in one run for a <strong>+50 point</strong> clean-memory bonus.</p>
        <p>The sequence keeps growing, so every round is worth the same but much harder to reach.</p>

        <div class="divider"></div>

        <h3>How to play</h3>
        <p>Press <strong>Start Run</strong>. Four pads will light up in order. When the board unlocks, click or tap them in the same order.</p>
        <p>Repeat the full sequence to advance. The next pattern adds one step. A single wrong pad ends the run.</p>
        <p>Each pad has its own tone, so you can play it by ear as well as by sight.</p>

        <p class="fine-print">Play money only. No real gambling.</p>
      </aside>
    </div>
  </main>

  <footer id="site-footer"></footer>

  <script src="js/points.js"></script>
  <script src="js/simon.js"></script>
</body>
</html>
````

## `css/style.css`

````css
/* =========================================================
   SPECTATOR ROOM — css/style.css
   Everything is hand-written. Sections are labelled so you
   can find things quickly.
   ========================================================= */

/* ---------------------------------------------------------
   1. RESET + DESIGN TOKENS
   --------------------------------------------------------- */

:root {
  --bg: #07080d;
  --bg-soft: #0b0d14;
  --panel: #0f121b;
  --panel-2: #131725;
  --panel-3: #191e2d;
  --line: rgba(255, 255, 255, 0.08);
  --line-strong: rgba(255, 255, 255, 0.16);
  --text: #f1f3fb;
  --muted: #8f95ab;
  --muted-2: #646b81;
  --red: #ff3b4e;
  --red-bright: #ff6172;
  --red-dark: #b51f30;
  --gold: #ffd166;
  --cyan: #6ff7ff;
  --green: #5cffb1;
  --violet: #a78bfa;
  --accent: var(--red);
  --radius: 14px;
  --radius-sm: 8px;
  --shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
  --font: "Segoe UI Variable", "Segoe UI", system-ui, -apple-system, sans-serif;
  --font-display: "Arial Black", "Segoe UI Black", "Segoe UI", system-ui, sans-serif;
  --font-mono: "Cascadia Code", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  --header-height: 74px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(1100px 700px at 78% -10%, color-mix(in srgb, var(--red) 12%, transparent), transparent 62%),
    radial-gradient(900px 650px at 8% 15%, color-mix(in srgb, var(--cyan) 5.5%, transparent), transparent 60%),
    var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}

/* Subtle tactical grid behind everything. */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 20%, black 20%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 20%, black 20%, transparent 80%);
}

body.has-broke-banner {
  padding-bottom: 110px;
}

::selection {
  background: var(--red);
  color: #fff;
}

[hidden] {
  display: none !important;
}

img,
svg {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-display);
  font-weight: 900;
  line-height: 1.03;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}

ul,
ol {
  list-style: none;
}

:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 3px;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: #262b3c;
  border-radius: 99px;
  border: 2px solid var(--bg);
}

::-webkit-scrollbar-thumb:hover {
  background: #363d52;
}

.wrap {
  width: min(1220px, calc(100% - 48px));
  margin-inline: auto;
}

.muted {
  color: var(--muted);
}

.text-red {
  color: var(--red);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 0 0 color-mix(in srgb, var(--red) 60%, transparent);
  animation: pulse-dot 2s infinite;
  flex: 0 0 auto;
}

/* ---------------------------------------------------------
   2. HEADER
   --------------------------------------------------------- */

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(7, 8, 13, 0.82);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.header-inner {
  width: min(1220px, calc(100% - 48px));
  min-height: var(--header-height);
  margin-inline: auto;
  display: flex;
  align-items: center;
  gap: 28px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  flex: 0 0 auto;
  transition: opacity 0.2s ease;
}

.brand:hover {
  opacity: 0.85;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  color: var(--red);
  filter: drop-shadow(0 0 12px color-mix(in srgb, var(--red) 35%, transparent));
}

.brand-mark svg {
  width: 30px;
  height: 30px;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1;
  white-space: nowrap;
}

.brand-name em {
  color: var(--red);
  font-style: normal;
  margin-left: 5px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 3px;
  margin-right: auto;
}

.nav-link {
  position: relative;
  padding: 8px 12px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover,
.nav-link.is-active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
}

.nav-link.is-active::after {
  content: "";
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 2px;
  height: 2px;
  background: var(--red);
}

.nav-random {
  color: var(--red);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 9px;
  flex: 0 0 auto;
}

.balance-pill {
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid color-mix(in srgb, var(--red) 28%, transparent);
  border-radius: 6px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--red) 11%, transparent), color-mix(in srgb, var(--red) 3.5%, transparent));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.balance-dot {
  width: 5px;
  height: 5px;
  align-self: center;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 8px var(--red);
}

.balance-value {
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  display: inline-block;
}

.balance-label {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.14em;
}

.balance-value.bump {
  animation: balance-bump 0.35s ease;
}

.daily-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 38px;
  padding: 0 12px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  white-space: nowrap;
  flex: 0 0 auto;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.daily-pill:hover {
  color: var(--text);
  border-color: var(--line-strong);
  background: rgba(255, 255, 255, 0.055);
  transform: translateY(-1px);
}

.daily-pill-inner {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.daily-pill .daily-emoji {
  font-size: 13px;
  line-height: 1;
}

.daily-pill .daily-text {
  color: var(--gold);
}

.daily-pill.is-claimed {
  opacity: 0.65;
  cursor: default;
  pointer-events: none;
}

.daily-pill.is-claimed .daily-text {
  color: var(--muted);
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--muted);
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.icon-btn:hover {
  color: var(--text);
  border-color: var(--line-strong);
  background: rgba(255, 255, 255, 0.055);
  transform: translateY(-1px);
}

.icon-btn svg {
  width: 18px;
  height: 18px;
}

.icon-btn.is-muted {
  color: var(--red);
  border-color: color-mix(in srgb, var(--red) 30%, transparent);
}

/* ---------------------------------------------------------
   3. BUTTONS, CHIPS + FORM CONTROLS
   --------------------------------------------------------- */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 46px;
  padding: 0 22px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease,
    color 0.18s ease;
  user-select: none;
}

.btn:hover:not(:disabled) {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.075);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-primary {
  border-color: var(--red);
  background: linear-gradient(135deg, var(--red), color-mix(in srgb, var(--red) 80%, transparent));
  color: #fff;
  box-shadow: 0 10px 30px color-mix(in srgb, var(--red) 24%, transparent);
}

.btn-primary:hover:not(:disabled) {
  border-color: var(--red-bright);
  background: linear-gradient(135deg, var(--red-bright), var(--red));
  box-shadow: 0 14px 38px color-mix(in srgb, var(--red) 36%, transparent);
}

.btn-ghost {
  background: transparent;
  border-color: var(--line-strong);
}

.btn-small {
  min-height: 34px;
  padding: 0 13px;
  font-size: 10px;
  letter-spacing: 0.1em;
}

.btn-wide {
  width: 100%;
}

.btn-cashout {
  border-color: rgba(92, 255, 177, 0.45);
  background: linear-gradient(135deg, rgba(92, 255, 177, 0.2), rgba(92, 255, 177, 0.08));
  color: var(--green);
}

.btn-cashout:hover:not(:disabled) {
  border-color: var(--green);
  background: rgba(92, 255, 177, 0.2);
  box-shadow: 0 10px 30px rgba(92, 255, 177, 0.15);
}

.btn-danger {
  border-color: color-mix(in srgb, var(--red) 45%, transparent);
  background: color-mix(in srgb, var(--red) 10%, transparent);
  color: var(--red-bright);
}

.btn-danger:hover:not(:disabled) {
  border-color: var(--red);
  background: color-mix(in srgb, var(--red) 0.18%, transparent);
}

.btn kbd {
  padding: 2px 5px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 8px;
  opacity: 0.75;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 46px;
  height: 34px;
  padding: 0 11px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  transition: all 0.18s ease;
}

.chip:hover {
  color: var(--text);
  border-color: var(--line-strong);
  background: rgba(255, 255, 255, 0.06);
}

.chip.is-active {
  color: var(--red-bright);
  border-color: color-mix(in srgb, var(--red) 45%, transparent);
  background: color-mix(in srgb, var(--red) 10%, transparent);
}

.bet-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.bet-field {
  display: flex;
  align-items: center;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.22);
  overflow: hidden;
  flex: 0 0 auto;
}

.bet-field > span {
  padding: 0 10px 0 13px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.bet-field input {
  width: 78px;
  height: 100%;
  padding: 0 10px;
  border: 0;
  border-left: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 700;
  text-align: right;
  outline: none;
  font-variant-numeric: tabular-nums;
}

.bet-field input:focus {
  background: rgba(255, 255, 255, 0.035);
}

.bet-field .pts {
  padding: 0 12px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.1em;
}

.bet-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.microcopy {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.03em;
  line-height: 1.5;
}

.divider {
  height: 1px;
  margin: 20px 0;
  background: var(--line);
}

/* ---------------------------------------------------------
   4. PANELS + GAME PAGE SHELL
   --------------------------------------------------------- */

.panel {
  position: relative;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.028), transparent 24%),
    linear-gradient(180deg, var(--panel-2), var(--panel));
  box-shadow: var(--shadow);
}

.panel::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 22px;
  width: 56px;
  height: 2px;
  background: var(--accent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 60%, transparent);
}

.side-panel {
  padding: 24px;
}

.panel-title {
  font-size: 16px;
  letter-spacing: 0.02em;
  margin-bottom: 14px;
}

.side-panel h3 {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--muted);
  text-transform: uppercase;
  margin: 18px 0 9px;
}

.side-panel p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.65;
}

.side-panel p + p {
  margin-top: 10px;
}

.side-panel strong {
  color: var(--text);
}

.fine-print {
  color: var(--muted-2) !important;
  font-family: var(--font-mono);
  font-size: 10px !important;
  border-top: 1px dashed var(--line);
  padding-top: 12px;
  margin-top: 16px;
}

.page-shell {
  width: min(1220px, calc(100% - 48px));
  margin-inline: auto;
  padding: 26px 0 72px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 22px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.2s ease, transform 0.2s ease;
}

.back-link:hover {
  color: var(--text);
  transform: translateX(-3px);
}

.game-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 26px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--line);
}

.game-header h1 {
  margin-top: 9px;
  font-size: clamp(36px, 5.5vw, 64px);
}

.game-sub {
  max-width: 640px;
  margin-top: 10px;
  color: var(--muted);
  font-size: 15px;
}

.game-badges {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-bottom: 4px;
}

.badge {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 8px 11px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}

.badge strong {
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
}

.game-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 20px;
  align-items: start;
}

.game-panel {
  padding: 26px;
  min-width: 0;
}

/* A tiny HUD used by the skill games. */
.game-hud {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}

.game-hud > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.18);
}

.game-hud span {
  font-family: var(--font-mono);
  font-size: 19px;
  font-weight: 700;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.game-hud small {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.14em;
}

/* ---------------------------------------------------------
   5. FOOTER
   --------------------------------------------------------- */

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(0, 0, 0, 0.22);
}

.footer-inner {
  width: min(1220px, calc(100% - 48px));
  margin-inline: auto;
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-inner p:first-child {
  color: var(--red);
  font-weight: 600;
}

.footer-meta {
  color: var(--muted-2);
}

/* ---------------------------------------------------------
   6. TOASTS, BROKE BANNER, SETTINGS MODAL
   --------------------------------------------------------- */

.toast-host {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 300;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: min(360px, calc(100vw - 40px));
  pointer-events: none;
  transition: bottom 0.3s ease;
}

body.has-broke-banner .toast-host {
  bottom: 118px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border: 1px solid var(--line-strong);
  border-left: 3px solid var(--cyan);
  border-radius: 6px;
  background: rgba(16, 19, 29, 0.96);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  color: var(--text);
  font-size: 12px;
  line-height: 1.45;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  backdrop-filter: blur(12px);
}

.toast.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.toast--gold {
  border-left-color: var(--gold);
}

.toast--red {
  border-left-color: var(--red);
}

.toast-icon {
  font-size: 18px;
  line-height: 1;
  flex: 0 0 auto;
}

.broke-banner {
  position: fixed;
  left: 50%;
  bottom: 18px;
  z-index: 250;
  transform: translateX(-50%);
  width: min(680px, calc(100vw - 32px));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 16px 14px 20px;
  border: 1px solid rgba(255, 209, 102, 0.35);
  border-radius: 8px;
  background:
    linear-gradient(90deg, rgba(255, 209, 102, 0.1), transparent 45%),
    rgba(13, 15, 23, 0.97);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55), 0 0 40px rgba(255, 209, 102, 0.06);
  backdrop-filter: blur(16px);
  animation: slide-up 0.35s ease both;
}

.broke-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.broke-copy strong {
  color: var(--gold);
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.broke-copy span {
  color: var(--muted);
  font-size: 12px;
}

/* Native dialog modal */
.modal {
  position: fixed;
  inset: 0;
  margin: auto;
  width: min(720px, calc(100vw - 28px));
  max-height: 90vh;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--text);
  overflow: visible;
}

.modal::backdrop {
  background: rgba(3, 4, 8, 0.78);
  backdrop-filter: blur(6px);
}

.modal-card {
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent 18%),
    var(--panel-2);
  box-shadow: 0 40px 120px rgba(0, 0, 0, 0.65);
  overflow: hidden;
}

.modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 24px;
  border-bottom: 1px solid var(--line);
}

.modal-head h2 {
  margin-top: 5px;
  font-size: 26px;
}

.modal-body {
  max-height: min(66vh, 620px);
  overflow-y: auto;
  padding: 22px 24px 26px;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.stat-tile {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.18);
}

.stat-tile span {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}

.stat-tile small {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.13em;
}

.modal-section {
  margin-top: 24px;
}

.modal-section h3 {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 11px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.best-list {
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
}

.best-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 13px;
  font-size: 12px;
  color: var(--muted);
  background: rgba(0, 0, 0, 0.13);
}

.best-list li + li {
  border-top: 1px solid var(--line);
}

.best-list strong {
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
}

.achievement-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}

.achievement {
  display: grid;
  grid-template-columns: 27px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 10px 11px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.14);
  opacity: 0.48;
  filter: grayscale(1);
}

.achievement.is-earned {
  opacity: 1;
  filter: none;
  border-color: rgba(92, 255, 177, 0.22);
  background: linear-gradient(90deg, rgba(92, 255, 177, 0.07), rgba(0, 0, 0, 0.12));
}

.ach-icon {
  font-size: 18px;
  line-height: 1;
}

.ach-copy {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.ach-copy strong {
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ach-copy small {
  color: var(--muted-2);
  font-size: 9px;
  line-height: 1.35;
}

.ach-state {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.achievement.is-earned .ach-state {
  color: var(--green);
}

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 11px 0;
  border-bottom: 1px solid var(--line);
}

.setting-row:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.setting-row > div {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.setting-row strong {
  font-size: 12px;
  font-weight: 600;
}

.setting-row span {
  color: var(--muted-2);
  font-size: 10px;
  line-height: 1.4;
}

.danger-zone {
  padding: 14px;
  border: 1px solid color-mix(in srgb, var(--red) 16%, transparent);
  border-radius: 8px;
  background: color-mix(in srgb, var(--red) 3.5%, transparent);
}

.danger-zone h3 {
  margin-bottom: 4px;
  color: var(--red);
}

/* ---------------------------------------------------------
   7. KEYFRAMES
   --------------------------------------------------------- */

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--red) 0.5%, transparent); }
  50% { box-shadow: 0 0 0 6px color-mix(in srgb, var(--red) 0%, transparent); }
}

@keyframes balance-bump {
  0% { transform: scale(1); }
  40% { transform: scale(1.16); color: var(--gold); }
  100% { transform: scale(1); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translate(-50%, 16px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-9px); }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.04); }
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(2px); }
}

/* ---------------------------------------------------------
   8. HOMEPAGE HERO
   --------------------------------------------------------- */

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  align-items: center;
  gap: 50px;
  min-height: 660px;
  padding: 58px 0 64px;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.hero-title {
  margin: 18px 0 20px;
  font-size: clamp(52px, 7.2vw, 100px);
  line-height: 0.88;
  letter-spacing: -0.045em;
}

.hero-title .text-red {
  position: relative;
  display: inline-block;
  text-shadow: 0 0 40px color-mix(in srgb, var(--red) 0.34%, transparent);
}

.hero-title .text-red::after {
  content: "";
  position: absolute;
  left: 0.04em;
  right: 0.02em;
  bottom: 0.02em;
  height: 0.09em;
  background: var(--red);
  opacity: 0.55;
  transform: skewX(-18deg);
}

.hero-lede {
  max-width: 570px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 38px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.hero-stat-value {
  font-family: var(--font-mono);
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.hero-stat-label {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.15em;
}

/* The CSS-only slot machine illustration. */
.hero-visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 460px;
  perspective: 1200px;
}

.hero-halo {
  position: absolute;
  width: 440px;
  height: 440px;
  border-radius: 50%;
  background:
    radial-gradient(circle, color-mix(in srgb, var(--red) 0.19%, transparent), transparent 58%),
    conic-gradient(from 0deg, transparent, rgba(255, 209, 102, 0.14), transparent 35%, rgba(111, 247, 255, 0.09), transparent 70%);
  filter: blur(4px);
  animation: glow-pulse 6s ease-in-out infinite;
}

.mini-machine {
  position: relative;
  z-index: 2;
  width: min(380px, 90%);
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.07), transparent 30%),
    linear-gradient(180deg, #171b28, #0b0d15);
  box-shadow:
    0 40px 90px rgba(0, 0, 0, 0.62),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 80px color-mix(in srgb, var(--red) 10%, transparent);
  transform: rotate(-3deg);
}

.mini-machine::after {
  content: "";
  position: absolute;
  inset: 6px;
  border: 1px solid color-mix(in srgb, var(--red) 0.14%, transparent);
  border-radius: 13px;
  pointer-events: none;
}

.mini-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 3px 4px 12px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.17em;
}

.mini-lights {
  display: flex;
  gap: 5px;
}

.mini-lights i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 8px color-mix(in srgb, var(--red) 80%, transparent);
  animation: pulse-dot 2.4s infinite;
}

.mini-lights i:nth-child(2) { animation-delay: 0.5s; background: var(--gold); box-shadow: 0 0 8px rgba(255, 209, 102, 0.8); }
.mini-lights i:nth-child(3) { animation-delay: 1s; background: var(--cyan); box-shadow: 0 0 8px rgba(111, 247, 255, 0.8); }

.mini-reels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
  padding: 12px;
  border: 1px solid rgba(255, 209, 102, 0.2);
  border-radius: 10px;
  background: #06070b;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.9);
}

.mini-reel {
  display: grid;
  place-items: center;
  min-height: 112px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 7px;
  background:
    radial-gradient(circle at 50% 35%, rgba(255, 209, 102, 0.11), transparent 62%),
    linear-gradient(180deg, #121522, #090b11);
  font-size: 46px;
  line-height: 1;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6));
}

.mini-jackpot {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
  padding: 10px 13px;
  border: 1px solid color-mix(in srgb, var(--gold) 26%, transparent);
  border-radius: 7px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--gold) 13%, transparent), color-mix(in srgb, var(--red) 6%, transparent));
}

.mini-jackpot span {
  color: var(--gold);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.mini-jackpot strong {
  color: var(--gold);
  font-family: var(--font-mono);
  font-size: 20px;
  line-height: 1;
  text-shadow: 0 0 18px rgba(255, 209, 102, 0.4);
  font-variant-numeric: tabular-nums;
}

.mini-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 4px 1px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.floating-chip {
  position: absolute;
  z-index: 3;
  padding: 8px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 5px;
  background: rgba(13, 16, 25, 0.94);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.5);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  animation: float 5s ease-in-out infinite;
  backdrop-filter: blur(10px);
}

.floating-chip--red {
  top: 16%;
  left: 3%;
  color: var(--red-bright);
  border-color: color-mix(in srgb, var(--red) 0.35%, transparent);
}

.floating-chip--cyan {
  top: 48%;
  right: 0;
  color: var(--cyan);
  border-color: rgba(111, 247, 255, 0.28);
  animation-delay: 1.2s;
}

.floating-chip--gold {
  bottom: 13%;
  left: 8%;
  color: var(--gold);
  border-color: rgba(255, 209, 102, 0.32);
  animation-delay: 2.1s;
}

/* ---------------------------------------------------------
   9. TICKER
   --------------------------------------------------------- */

.ticker {
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.015);
  mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
}

.ticker-track {
  display: flex;
  width: max-content;
  animation: ticker-scroll 32s linear infinite;
}

.ticker-track span {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 13px 28px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.18em;
  white-space: nowrap;
}

.ticker-track span::after {
  content: "◆";
  color: var(--red);
  font-size: 7px;
}

/* ---------------------------------------------------------
   10. HOMEPAGE GAME GRID
   --------------------------------------------------------- */

.game-section {
  padding: 78px 0 40px;
  scroll-margin-top: calc(var(--header-height) + 20px);
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 26px;
}

.section-head h2 {
  margin-top: 8px;
  font-size: clamp(34px, 4.9vw, 56px);
}

.section-note {
  max-width: 300px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
  text-align: right;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.game-card {
  --card-accent: var(--red);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-height: 218px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background:
    linear-gradient(150deg, color-mix(in srgb, var(--card-accent) 8%, transparent), transparent 40%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.025), transparent 40%),
    var(--panel);
  overflow: hidden;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.game-card::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 20px;
  width: 42px;
  height: 2px;
  background: var(--card-accent);
  opacity: 0.85;
  transition: width 0.25s ease;
}

.game-card::after {
  content: "";
  position: absolute;
  right: -45px;
  bottom: -55px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--card-accent) 13%, transparent);
  filter: blur(40px);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.game-card:hover {
  transform: translateY(-5px);
  border-color: color-mix(in srgb, var(--card-accent) 45%, var(--line));
  box-shadow: 0 24px 55px rgba(0, 0, 0, 0.38), 0 0 40px color-mix(in srgb, var(--card-accent) 8%, transparent);
}

.game-card:hover::before {
  width: 72px;
}

.game-card:hover::after {
  opacity: 1;
}

.game-card:focus-visible {
  outline: 2px solid var(--card-accent);
  outline-offset: 4px;
}

.game-card--featured {
  grid-column: span 2;
  min-height: 250px;
  padding: 26px;
  background:
    linear-gradient(120deg, color-mix(in srgb, var(--card-accent) 12%, transparent), transparent 47%),
    radial-gradient(700px 300px at 90% 105%, rgba(255, 209, 102, 0.08), transparent),
    linear-gradient(180deg, rgba(255, 255, 255, 0.035), transparent 40%),
    var(--panel);
}

.game-card--featured .game-card-body h3 {
  font-size: clamp(30px, 3.5vw, 42px);
}

.game-card--featured .game-icon {
  width: 60px;
  height: 60px;
}

.game-card--featured .game-icon svg {
  width: 32px;
  height: 32px;
}

.game-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.game-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid color-mix(in srgb, var(--card-accent) 28%, transparent);
  border-radius: 9px;
  background: color-mix(in srgb, var(--card-accent) 8%, transparent);
  color: var(--card-accent);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.game-card:hover .game-icon {
  transform: scale(1.06) rotate(-2deg);
  box-shadow: 0 0 26px color-mix(in srgb, var(--card-accent) 18%, transparent);
}

.game-icon svg {
  width: 24px;
  height: 24px;
}

.game-number {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.12em;
}

.game-card-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: auto;
}

.game-tag {
  color: var(--card-accent);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.game-card-body h3 {
  font-size: 23px;
  letter-spacing: -0.02em;
}

.game-card-body p {
  max-width: 390px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
}

.game-card-cta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  transition: color 0.2s ease, gap 0.2s ease;
}

.game-card:hover .game-card-cta {
  gap: 13px;
  color: var(--card-accent);
}

.game-card-cta span {
  font-size: 13px;
}

/* ---------------------------------------------------------
   11. INFO STRIP
   --------------------------------------------------------- */

.info-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 40px 0 84px;
}

.info-card {
  position: relative;
  padding: 22px;
  border-top: 1px solid var(--line);
}

.info-index {
  display: block;
  margin-bottom: 14px;
  color: var(--red);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.info-card h3 {
  font-size: 18px;
  margin-bottom: 6px;
}

.info-card p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
}

/* ---------------------------------------------------------
   12. HOMEPAGE RESPONSIVE
   --------------------------------------------------------- */

@media (max-width: 1060px) {
  .hero {
    grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);
    gap: 24px;
    min-height: 600px;
  }

  .hero-visual {
    min-height: 400px;
  }

  .game-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .game-card--featured {
    grid-column: span 2;
  }
}

@media (max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 44px 0 52px;
  }

  .hero-visual {
    min-height: 390px;
    margin-top: 16px;
  }

  .hero-halo {
    width: 340px;
    height: 340px;
  }

  .hero-stats {
    gap: 22px;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-note {
    text-align: left;
  }

  .info-strip {
    grid-template-columns: 1fr;
    gap: 4px;
    padding-bottom: 60px;
  }
}

@media (max-width: 600px) {
  .wrap,
  .header-inner,
  .footer-inner,
  .page-shell {
    width: min(100% - 28px, 1220px);
  }

  .hero-title {
    font-size: clamp(44px, 15vw, 64px);
  }

  .hero-lede {
    font-size: 14px;
  }

  .hero-stat-value {
    font-size: 18px;
  }

  .game-grid {
    grid-template-columns: 1fr;
    gap: 9px;
  }

  .game-card--featured {
    grid-column: span 1;
    min-height: 230px;
    padding: 21px;
  }

  .game-card {
    min-height: 205px;
  }

  .mini-machine {
    width: min(330px, 94%);
  }

  .floating-chip--cyan {
    right: -4px;
  }
}

/* ---------------------------------------------------------
   13. GAME PAGE RESPONSIVE SHELL
   --------------------------------------------------------- */

@media (max-width: 980px) {
  .game-layout {
    grid-template-columns: 1fr;
  }

  .side-panel {
    padding: 20px;
  }

  .game-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .game-badges {
    justify-content: flex-start;
  }
}

@media (max-width: 620px) {
  .page-shell {
    padding-top: 18px;
    padding-bottom: 54px;
  }

  .game-panel {
    padding: 18px;
  }

  .game-header h1 {
    font-size: clamp(31px, 11vw, 46px);
  }

  .game-sub {
    font-size: 13px;
  }

  .game-hud {
    grid-template-columns: 1fr 1fr;
  }

  .game-hud span {
    font-size: 17px;
  }

  .bet-bar {
    align-items: flex-start;
  }

  .bet-field {
    width: 100%;
  }

  .bet-field input {
    flex: 1;
    text-align: left;
  }

  .footer-inner {
    min-height: 86px;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    text-align: center;
  }

  .broke-banner {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 14px;
  }

  .broke-banner .btn {
    width: 100%;
  }

  .achievement-list {
    grid-template-columns: 1fr;
  }

  .stat-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .main-nav {
    display: none;
  }

  .brand {
    margin-right: auto;
  }

  .header-inner {
    gap: 12px;
  }

  .balance-pill {
    padding: 0 10px;
  }

  .balance-label {
    display: none;
  }
}

@media (max-width: 430px) {
  .brand-name {
    font-size: 12px;
  }

  .brand-mark {
    width: 27px;
    height: 27px;
  }

  .brand-mark svg {
    width: 25px;
    height: 25px;
  }

  .header-actions {
    gap: 6px;
  }

  .icon-btn {
    width: 35px;
    height: 35px;
  }

  .balance-pill {
    min-height: 35px;
  }

  .balance-value {
    font-size: 13px;
  }
}

@media (max-width: 380px) {
  /* Keep the balance and controls usable on very narrow phones. */
  .brand-name {
    display: none;
  }
}

/* ---------------------------------------------------------
   14. SLOT MACHINE
   --------------------------------------------------------- */

.slots-panel {
  --accent: var(--gold);
}

.slot-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 16px;
}

.slot-brand {
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.slot-jackpot {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.slot-jackpot strong {
  color: var(--gold);
  font-size: 18px;
  line-height: 1;
  text-shadow: 0 0 20px rgba(255, 209, 102, 0.35);
  font-variant-numeric: tabular-nums;
}

.slot-machine {
  position: relative;
  padding: 20px;
  border: 1px solid rgba(255, 209, 102, 0.18);
  border-radius: 10px;
  background:
    radial-gradient(700px 220px at 50% 0%, rgba(255, 209, 102, 0.08), transparent),
    linear-gradient(180deg, #0a0c13, #07080d);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.65);
  overflow: hidden;
}

.slot-machine.is-shaking {
  animation: shake 0.45s ease;
}

.slot-reels {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 11px;
}

.reel {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 150px;
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.055), transparent 22%, transparent 78%, rgba(0, 0, 0, 0.35)),
    radial-gradient(circle at 50% 42%, rgba(255, 209, 102, 0.07), transparent 65%),
    #0b0d14;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.reel::before,
.reel::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 24%;
  z-index: 2;
  pointer-events: none;
}

.reel::before {
  top: 0;
  background: linear-gradient(180deg, rgba(7, 8, 13, 0.9), transparent);
}

.reel::after {
  bottom: 0;
  background: linear-gradient(0deg, rgba(7, 8, 13, 0.9), transparent);
}

.reel-symbol {
  position: relative;
  z-index: 1;
  font-size: clamp(46px, 7vw, 72px);
  line-height: 1;
  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.55));
  transition: transform 0.15s ease;
  user-select: none;
}

.reel.is-spinning .reel-symbol {
  animation: reel-blur 0.09s linear infinite;
}

.reel.is-settling .reel-symbol {
  animation: reel-settle 0.32s cubic-bezier(0.2, 0.9, 0.3, 1.3);
}

.reel.is-win {
  border-color: rgba(255, 209, 102, 0.65);
  box-shadow:
    inset 0 0 30px rgba(255, 209, 102, 0.11),
    0 0 32px rgba(255, 209, 102, 0.16);
}

.reel.is-win .reel-symbol {
  filter: drop-shadow(0 0 18px rgba(255, 209, 102, 0.55));
}

.payline {
  display: none;
}

.payline::before,
.payline::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 10px var(--red);
  transform: translateY(-50%);
}

.payline::before { left: 10%; }
.payline::after { right: 10%; }

.slot-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  min-height: 76px;
  margin-top: 14px;
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.slot-result-label {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.2em;
}

.slot-result-text {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
}

.slot-result-text strong {
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 17px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.slot-result.is-win {
  border-color: color-mix(in srgb, var(--gold) 38%, transparent);
  background: linear-gradient(90deg, color-mix(in srgb, var(--gold) 8%, transparent), color-mix(in srgb, var(--red) 4.5%, transparent));
}

.slot-result.is-win .slot-result-label {
  color: var(--gold);
}

.slot-result.is-jackpot {
  border-color: rgba(255, 209, 102, 0.7);
  background:
    radial-gradient(400px 90px at 50% 50%, rgba(255, 209, 102, 0.2), transparent),
    rgba(255, 209, 102, 0.06);
  box-shadow: 0 0 40px rgba(255, 209, 102, 0.12);
}

.slot-result.is-jackpot .slot-result-label,
.slot-result.is-jackpot .slot-result-text {
  color: var(--gold);
}

.slot-result.is-loss {
  border-color: color-mix(in srgb, var(--red) 0.16%, transparent);
}

.slot-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.slot-bet-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.spin-button {
  min-height: 54px;
  font-size: 13px;
  letter-spacing: 0.2em;
}

.spin-button.is-spinning {
  background: linear-gradient(135deg, #2a2e3e, #191d2a);
  border-color: var(--line-strong);
  box-shadow: none;
  color: var(--muted);
}

.slot-hint {
  margin-top: 3px;
  text-align: center;
}

.paytable {
  display: flex;
  flex-direction: column;
}

.paytable li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 7px 0;
  border-bottom: 1px dashed var(--line);
  color: var(--muted);
  font-size: 11px;
}

.paytable li:last-child {
  border-bottom: 0;
}

.paytable .symbols {
  font-size: 15px;
  letter-spacing: 2px;
  filter: saturate(0.9);
}

.paytable strong {
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

.paytable .is-jackpot {
  color: var(--gold);
}

.paytable .is-jackpot strong {
  color: var(--gold);
  text-shadow: 0 0 14px rgba(255, 209, 102, 0.3);
}

.paytable-subhead {
  margin-top: 9px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.13em;
}

.flash-overlay {
  position: fixed;
  inset: 0;
  z-index: 180;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--gold) 42%, transparent), color-mix(in srgb, var(--red) 8%, transparent) 45%, transparent 72%);
}

.flash-overlay.is-active {
  animation: screen-flash 0.7s ease;
}

.flash-overlay.is-jackpot {
  background: radial-gradient(circle at 50% 45%, rgba(255, 209, 102, 0.7), color-mix(in srgb, var(--red) 0.18%, transparent) 45%, transparent 75%);
}

@keyframes reel-blur {
  0% { transform: translateY(-7px); filter: blur(2px); opacity: 0.65; }
  50% { transform: translateY(0); filter: blur(0.5px); opacity: 1; }
  100% { transform: translateY(7px); filter: blur(2px); opacity: 0.65; }
}

@keyframes reel-settle {
  0% { transform: translateY(-18px) scale(1.1); opacity: 0.6; }
  60% { transform: translateY(3px) scale(0.98); opacity: 1; }
  100% { transform: translateY(0) scale(1); }
}

@keyframes screen-flash {
  0% { opacity: 0; }
  15% { opacity: 1; }
  100% { opacity: 0; }
}

@media (max-width: 620px) {
  .slot-machine {
    padding: 13px;
  }

  .reel {
    min-height: 110px;
  }

  .reel-symbol {
    font-size: clamp(38px, 13vw, 58px);
  }

  .slot-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }

  .slot-jackpot strong {
    font-size: 16px;
  }

  .slot-bet-row {
    align-items: flex-start;
  }

  .slot-bet-row .bet-field {
    width: 100%;
  }

  .slot-bet-row .bet-chips {
    width: 100%;
  }

  .slot-bet-row .chip {
    flex: 1;
  }
}

/* ---------------------------------------------------------
   15. COIN FLIP
   --------------------------------------------------------- */

.coin-panel {
  --accent: var(--cyan);
}

.coin-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 260px;
  margin-bottom: 18px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background:
    radial-gradient(circle at 50% 50%, rgba(255, 209, 102, 0.09), transparent 48%),
    linear-gradient(180deg, #0b0e16, #07080d);
  overflow: hidden;
  perspective: 900px;
}

.coin-stage::before {
  content: "";
  position: absolute;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 209, 102, 0.16), transparent 65%);
  filter: blur(8px);
  animation: glow-pulse 5s ease-in-out infinite;
}

.coin-stage::after {
  content: "";
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 29px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  filter: blur(12px);
}

.coin-stage.is-flipping .coin-wrap {
  animation: coin-toss 1.2s cubic-bezier(0.2, 0.7, 0.3, 1);
}

.coin-stage.is-win::before {
  background: radial-gradient(circle, rgba(92, 255, 177, 0.2), transparent 65%);
}

.coin-stage.is-loss::before {
  background: radial-gradient(circle, color-mix(in srgb, var(--red) 18%, transparent), transparent 65%);
}

.coin-wrap {
  position: relative;
  z-index: 2;
  width: 154px;
  height: 154px;
  transform-style: preserve-3d;
}

.coin {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1.2s cubic-bezier(0.2, 0.72, 0.2, 1);
  will-change: transform;
}

.coin-face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border: 2px solid rgba(255, 209, 102, 0.75);
  border-radius: 50%;
  background:
    radial-gradient(circle at 34% 28%, #fff2ba, #ffd166 32%, #b88a1e 78%, #6f5210);
  box-shadow:
    inset 0 0 0 8px rgba(88, 62, 8, 0.28),
    inset 0 0 34px rgba(255, 255, 255, 0.3),
    0 18px 40px rgba(0, 0, 0, 0.5);
  color: #443200;
  font-family: var(--font-display);
  font-size: 68px;
  font-weight: 900;
  line-height: 1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.45);
}

.coin-face::after {
  content: "";
  position: absolute;
  inset: 16px;
  border: 2px dashed rgba(68, 50, 0, 0.35);
  border-radius: 50%;
}

.coin-back {
  transform: rotateY(180deg);
}

.choice-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
}

.choice-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 54px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.025);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  transition: all 0.2s ease;
}

.choice-btn:hover {
  color: var(--text);
  border-color: var(--line-strong);
}

.choice-btn.is-active {
  color: var(--cyan);
  border-color: color-mix(in srgb, var(--cyan) 42%, transparent);
  background: linear-gradient(180deg, color-mix(in srgb, var(--cyan) 13%, transparent), color-mix(in srgb, var(--cyan) 4%, transparent));
  box-shadow: inset 0 0 20px color-mix(in srgb, var(--cyan) 5%, transparent);
}

.choice-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.coin-result {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: 12px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.18);
  color: var(--muted);
  font-size: 13px;
  text-align: center;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.coin-result.is-win {
  color: var(--green);
  border-color: rgba(92, 255, 177, 0.3);
  background: rgba(92, 255, 177, 0.055);
}

.coin-result.is-loss {
  color: var(--red-bright);
  border-color: color-mix(in srgb, var(--red) 0.25%, transparent);
  background: color-mix(in srgb, var(--red) 0.045%, transparent);
}

.coin-result strong {
  color: var(--text);
  font-family: var(--font-mono);
}

.mini-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 14px;
}

.mini-stats > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 6px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.15);
  text-align: center;
}

.mini-stats span {
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}

.mini-stats small {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 0.13em;
}

@keyframes coin-toss {
  0% { transform: translateY(0); }
  25% { transform: translateY(-42px); }
  50% { transform: translateY(-8px); }
  72% { transform: translateY(-26px); }
  100% { transform: translateY(0); }
}

@media (max-width: 620px) {
  .coin-stage {
    min-height: 215px;
  }

  .coin-wrap {
    width: 124px;
    height: 124px;
  }

  .coin-face {
    font-size: 54px;
  }

  .coin-stage::before {
    width: 185px;
    height: 185px;
  }
}

/* ---------------------------------------------------------
   16. CRASH
   --------------------------------------------------------- */

.crash-panel {
  --accent: var(--green);
}

.crash-stage {
  position: relative;
  min-height: 400px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background:
    radial-gradient(600px 250px at 50% 0%, rgba(92, 255, 177, 0.045), transparent),
    #080a11;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.crash-stage.is-running {
  border-color: rgba(92, 255, 177, 0.22);
}

.crash-stage.is-crashed {
  border-color: color-mix(in srgb, var(--red) 40%, transparent);
  animation: shake 0.4s ease;
}

.crash-stage.is-cashed {
  border-color: rgba(92, 255, 177, 0.45);
  box-shadow: 0 0 50px rgba(92, 255, 177, 0.08);
}

#crash-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.crash-overlay {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 22px 20px 0;
  pointer-events: none;
}

.crash-multiplier {
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(54px, 9vw, 90px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
  text-shadow: 0 0 40px rgba(92, 255, 177, 0.25);
  font-variant-numeric: tabular-nums;
  transition: color 0.2s ease;
}

.crash-multiplier span {
  margin-left: 3px;
  font-size: 0.5em;
  opacity: 0.65;
}

.crash-multiplier.is-crashed {
  color: var(--red);
  text-shadow: 0 0 40px color-mix(in srgb, var(--red) 0.3%, transparent);
}

.crash-multiplier.is-cashed {
  color: var(--gold);
  text-shadow: 0 0 40px rgba(255, 209, 102, 0.3);
}

.crash-status {
  min-height: 20px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  text-align: center;
}

.crash-status.is-win {
  color: var(--green);
}

.crash-status.is-loss {
  color: var(--red-bright);
}

.crash-history {
  position: absolute;
  left: 12px;
  bottom: 10px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: calc(100% - 24px);
  overflow: hidden;
  pointer-events: none;
}

.crash-history-chip {
  padding: 3px 7px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.4);
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  white-space: nowrap;
  animation: chip-in 0.25s ease both;
}

.crash-history-chip.is-win {
  color: var(--green);
  border-color: rgba(92, 255, 177, 0.25);
}

.crash-history-chip.is-crash {
  color: var(--red-bright);
  border-color: color-mix(in srgb, var(--red) 20%, transparent);
}

.crash-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 14px;
}

.crash-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.crash-buttons .btn {
  min-height: 54px;
  font-size: 12px;
  letter-spacing: 0.16em;
}

@keyframes chip-in {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 620px) {
  .crash-stage {
    min-height: 340px;
  }

  .crash-overlay {
    padding-top: 18px;
  }

  .crash-multiplier {
    font-size: clamp(48px, 17vw, 70px);
  }

  .crash-buttons {
    grid-template-columns: 1fr;
  }
}

/* ---------------------------------------------------------
   17. BLACKJACK
   --------------------------------------------------------- */

.blackjack-panel {
  --accent: var(--red);
}

.bj-table {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  min-height: 400px;
  padding: 20px;
  border: 1px solid rgba(92, 255, 177, 0.14);
  border-radius: 12px;
  background:
    radial-gradient(ellipse at 50% 40%, rgba(33, 92, 72, 0.2), transparent 64%),
    radial-gradient(ellipse at 50% 105%, color-mix(in srgb, var(--red) 0.055%, transparent), transparent 55%),
    linear-gradient(180deg, #0a1213, #080b11);
  box-shadow: inset 0 0 70px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.bj-table::before {
  content: "";
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 8px;
  pointer-events: none;
}

.bj-row {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.bj-label {
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.bj-label span {
  color: var(--text);
  font-size: 12px;
  letter-spacing: 0.02em;
}

.bj-hand {
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 106px;
  flex-wrap: wrap;
}

.playing-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 70px;
  height: 100px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  background: linear-gradient(145deg, #fbf8ef, #ddd6c4);
  color: #15161c;
  font-family: var(--font-mono);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.38);
  flex: 0 0 auto;
  user-select: none;
}

.playing-card.is-new {
  animation: card-in 0.32s cubic-bezier(0.2, 0.8, 0.3, 1.2) both;
}

.playing-card .card-rank {
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
}

.playing-card .card-suit {
  font-size: 21px;
  line-height: 1;
}

.playing-card.is-red {
  color: #cf2638;
}

.playing-card.is-back {
  border: 3px solid #e8e1d2;
  background:
    repeating-linear-gradient(45deg, #141827 0 5px, #0d101a 5px 10px),
    #0d101a;
  color: var(--gold);
}

.playing-card.is-back::after {
  content: "SR";
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 209, 102, 0.35);
  border-radius: 50%;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.02em;
  background: rgba(7, 8, 13, 0.65);
}

.bj-center {
  position: relative;
  z-index: 1;
  min-height: 40px;
  padding: 10px 12px;
  border-top: 1px dashed rgba(255, 255, 255, 0.08);
  border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.03em;
  text-align: center;
  line-height: 1.5;
}

.bj-center.is-win {
  color: var(--green);
}

.bj-center.is-loss {
  color: var(--red-bright);
}

.bj-center.is-push {
  color: var(--gold);
}

.bj-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
  margin-top: 12px;
}

.bj-actions .btn {
  min-height: 48px;
}

.bj-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 14px;
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(-16px) rotate(-3deg); }
  to { opacity: 1; transform: translateY(0) rotate(0); }
}

@media (max-width: 620px) {
  .bj-table {
    min-height: 340px;
    padding: 15px;
  }

  .bj-hand {
    min-height: 88px;
  }

  .playing-card {
    width: 57px;
    height: 83px;
  }

  .playing-card .card-rank {
    font-size: 21px;
  }

  .playing-card .card-suit {
    font-size: 17px;
  }

  .playing-card.is-back::after {
    width: 30px;
    height: 30px;
    font-size: 11px;
  }

  .bj-actions {
    grid-template-columns: 1fr 1fr;
  }
}

/* ---------------------------------------------------------
   18. AIM TRAINER
   --------------------------------------------------------- */

.aim-panel {
  --accent: var(--violet);
}

.aim-arena {
  position: relative;
  height: 440px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background:
    radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.055), transparent 55%),
    linear-gradient(180deg, #0b0d15, #080a10);
  overflow: hidden;
  cursor: crosshair;
  touch-action: manipulation;
  user-select: none;
}

.aim-arena::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: radial-gradient(circle at 50% 50%, black, transparent 78%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, black, transparent 78%);
  pointer-events: none;
}

.aim-arena.is-hit {
  box-shadow: inset 0 0 70px rgba(92, 255, 177, 0.07);
}

.aim-arena.is-miss {
  box-shadow: inset 0 0 70px color-mix(in srgb, var(--red) 0.08%, transparent);
}

.aim-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 26px;
  background: rgba(8, 10, 16, 0.86);
  backdrop-filter: blur(5px);
  text-align: center;
  /* On short screens the overlay content can be taller than the arena. */
  overflow-y: auto;
}

.aim-overlay h2 {
  font-size: clamp(25px, 4vw, 38px);
}

.aim-overlay p {
  max-width: 440px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

.aim-result {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
  width: min(420px, 100%);
  margin-top: 4px;
}

.aim-result > div {
  padding: 8px;
  border: 1px solid var(--line);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
}

.aim-result span {
  display: block;
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
}

.aim-result small {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 7px;
  letter-spacing: 0.12em;
}

.aim-target {
  position: absolute;
  z-index: 2;
  display: block;
  padding: 0;
  border: 2px solid rgba(167, 139, 250, 0.9);
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(167, 139, 250, 0.95) 0 12%, transparent 13%),
    radial-gradient(circle, transparent 0 30%, rgba(167, 139, 250, 0.55) 31% 34%, transparent 35%),
    radial-gradient(circle, transparent 0 58%, rgba(167, 139, 250, 0.38) 59% 62%, transparent 63%),
    rgba(167, 139, 250, 0.13);
  box-shadow: 0 0 24px rgba(167, 139, 250, 0.28), inset 0 0 18px rgba(167, 139, 250, 0.15);
  animation: target-in 0.16s cubic-bezier(0.2, 0.9, 0.3, 1.3) both;
  cursor: crosshair;
  will-change: transform;
}

.aim-target:hover {
  transform: scale(1.04);
}

.aim-target:active {
  transform: scale(0.94);
}

.aim-ripple {
  position: absolute;
  z-index: 3;
  width: 24px;
  height: 24px;
  border: 2px solid var(--green);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: aim-ripple 0.38s ease-out forwards;
}

.aim-ripple.is-miss {
  border-color: var(--red);
}

.aim-tip {
  margin-top: 10px;
  text-align: center;
}

.aim-payout {
  color: var(--gold);
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
}

.aim-payout strong {
  font-size: 23px;
  font-weight: 700;
}

@keyframes target-in {
  from { opacity: 0; transform: scale(0.4); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes aim-ripple {
  from { opacity: 0.9; transform: translate(-50%, -50%) scale(0.3); }
  to { opacity: 0; transform: translate(-50%, -50%) scale(2.4); }
}

@media (max-width: 620px) {
  .aim-arena {
    height: 340px;
  }

  .aim-overlay {
    padding: 18px;
  }

  .aim-result {
    grid-template-columns: 1fr 1fr;
  }

  .aim-result > div:last-child {
    grid-column: span 2;
  }
}

/* ---------------------------------------------------------
   19. REACTION TIMER
   --------------------------------------------------------- */

.reaction-panel {
  --accent: var(--gold);
}

.reaction-stage {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 420px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background:
    radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--red) 0.13%, transparent), transparent 55%),
    linear-gradient(180deg, #1a0c12, #090a0f);
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, color 0.18s ease;
}

.reaction-stage::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
  pointer-events: none;
}

.reaction-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.reaction-kicker {
  color: var(--red-bright);
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: color 0.18s ease;
}

.reaction-stage h2 {
  font-size: clamp(36px, 6vw, 62px);
  line-height: 0.95;
  transition: color 0.18s ease;
}

.reaction-stage p {
  max-width: 380px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  line-height: 1.6;
  transition: color 0.18s ease;
}

.reaction-stage.is-waiting {
  background:
    radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--red) 0.2%, transparent), transparent 58%),
    linear-gradient(180deg, #1e0b11, #090a0f);
  border-color: color-mix(in srgb, var(--red) 0.28%, transparent);
}

.reaction-stage.is-waiting .reaction-kicker {
  color: var(--red-bright);
}

.reaction-stage.is-ready {
  background:
    radial-gradient(circle at 50% 45%, #8affc8, transparent 65%),
    linear-gradient(180deg, #4dffa7, #20c97a);
  border-color: var(--green);
  box-shadow: 0 0 80px rgba(92, 255, 177, 0.3), inset 0 0 80px rgba(255, 255, 255, 0.15);
  color: #04110a;
  animation: ready-pop 0.18s ease;
}

.reaction-stage.is-ready .reaction-kicker,
.reaction-stage.is-ready p {
  color: rgba(4, 17, 10, 0.72);
}

.reaction-stage.is-ready h2 {
  color: #04110a;
  font-size: clamp(52px, 9vw, 96px);
}

.reaction-stage.is-too-soon {
  background:
    radial-gradient(circle at 50% 45%, rgba(255, 209, 102, 0.16), transparent 58%),
    linear-gradient(180deg, #1d1609, #090a0f);
  border-color: rgba(255, 209, 102, 0.35);
}

.reaction-stage.is-too-soon h2 {
  color: var(--gold);
}

.reaction-stage.is-result {
  background:
    radial-gradient(circle at 50% 45%, rgba(255, 209, 102, 0.12), transparent 58%),
    linear-gradient(180deg, #141420, #090a0f);
  border-color: rgba(255, 209, 102, 0.3);
}

.reaction-stage.is-result h2 {
  color: var(--gold);
}

.reaction-stage:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: -6px;
}

.reaction-history {
  margin-top: 14px;
}

.reaction-attempts {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 8px;
}

.reaction-attempts li {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 4px 8px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.18);
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--muted);
}

.reaction-attempts li em {
  color: var(--gold);
  font-style: normal;
  font-size: 8px;
}

@keyframes ready-pop {
  from { transform: scale(0.99); }
  to { transform: scale(1); }
}

@media (max-width: 620px) {
  .reaction-stage {
    min-height: 330px;
    padding: 20px;
  }

  .reaction-stage h2 {
    font-size: clamp(32px, 12vw, 48px);
  }

  .reaction-stage.is-ready h2 {
    font-size: clamp(48px, 18vw, 74px);
  }
}

/* ---------------------------------------------------------
   20. MEMORY MATCH
   --------------------------------------------------------- */

.memory-panel {
  --accent: var(--cyan);
}

.memory-panel .game-hud {
  grid-template-columns: repeat(3, 1fr);
}

.memory-stage {
  position: relative;
  width: min(620px, 100%);
  margin-inline: auto;
}

.memory-board {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 9px;
}

.mem-card {
  position: relative;
  aspect-ratio: 1 / 1.06;
  padding: 0;
  border: 0;
  background: transparent;
  perspective: 800px;
  cursor: pointer;
}

.mem-inner {
  position: absolute;
  inset: 0;
  display: block;
  transform-style: preserve-3d;
  transition: transform 0.38s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.mem-card.is-flipped .mem-inner,
.mem-card.is-matched .mem-inner {
  transform: rotateY(180deg);
}

.mem-face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 8px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.mem-front {
  border: 1px solid rgba(111, 247, 255, 0.16);
  background:
    linear-gradient(145deg, rgba(111, 247, 255, 0.07), transparent 45%),
    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0 7px, transparent 7px 14px),
    #0d1018;
  color: rgba(111, 247, 255, 0.35);
  font-family: var(--font-mono);
  font-size: 20px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 8px 18px rgba(0, 0, 0, 0.25);
  transition: border-color 0.2s ease, color 0.2s ease;
}

.mem-card:hover .mem-front {
  border-color: rgba(111, 247, 255, 0.4);
  color: var(--cyan);
}

.mem-back {
  transform: rotateY(180deg);
  border: 1px solid rgba(111, 247, 255, 0.35);
  background:
    radial-gradient(circle at 50% 40%, rgba(111, 247, 255, 0.14), transparent 65%),
    #101420;
  font-size: clamp(26px, 4.5vw, 42px);
  box-shadow: inset 0 0 24px rgba(111, 247, 255, 0.06);
}

.mem-card.is-matched .mem-back {
  border-color: rgba(92, 255, 177, 0.55);
  background:
    radial-gradient(circle at 50% 40%, rgba(92, 255, 177, 0.17), transparent 65%),
    #0c1714;
  box-shadow: 0 0 26px rgba(92, 255, 177, 0.1);
  animation: matched-pop 0.35s ease;
}

.mem-card.is-matched .mem-front {
  border-color: rgba(92, 255, 177, 0.4);
}

.memory-complete {
  position: absolute;
  inset: -10px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px;
  border: 1px solid rgba(92, 255, 177, 0.25);
  border-radius: 12px;
  background: rgba(8, 11, 16, 0.9);
  backdrop-filter: blur(8px);
  text-align: center;
  animation: complete-in 0.35s ease both;
}

.memory-complete h2 {
  font-size: clamp(30px, 5vw, 44px);
  color: var(--green);
}

.memory-complete p {
  max-width: 380px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

.memory-complete .memory-points {
  color: var(--gold);
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 700;
}

.memory-actions {
  display: flex;
  justify-content: center;
  margin-top: 14px;
}

@keyframes matched-pop {
  0% { transform: rotateY(180deg) scale(1); }
  50% { transform: rotateY(180deg) scale(1.08); }
  100% { transform: rotateY(180deg) scale(1); }
}

@keyframes complete-in {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}

@media (max-width: 620px) {
  .memory-board {
    gap: 5px;
  }

  .mem-front {
    font-size: 16px;
  }

  .memory-complete {
    inset: -4px;
    padding: 16px;
  }
}

/* ---------------------------------------------------------
   21. CLICK SPEED TEST
   --------------------------------------------------------- */

.cps-panel {
  --accent: var(--red);
}

.cps-panel .game-hud {
  grid-template-columns: repeat(3, 1fr);
}

.cps-progress {
  height: 4px;
  margin: 10px 0 14px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.cps-progress span {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--red), var(--red-bright));
  box-shadow: 0 0 14px color-mix(in srgb, var(--red) 0.45%, transparent);
  transition: width 0.08s linear;
}

.cps-pad {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 320px;
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background:
    radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--red) 0.08%, transparent), transparent 58%),
    linear-gradient(180deg, #10121c, #090b11);
  color: var(--text);
  text-align: center;
  transition: transform 0.08s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  user-select: none;
  touch-action: manipulation;
}

.cps-pad:hover {
  border-color: color-mix(in srgb, var(--red) 0.32%, transparent);
}

.cps-pad.is-live {
  border-color: color-mix(in srgb, var(--red) 0.55%, transparent);
  background:
    radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--red) 0.22%, transparent), transparent 62%),
    linear-gradient(180deg, #250b12, #0d0910);
  box-shadow: 0 0 70px color-mix(in srgb, var(--red) 0.12%, transparent), inset 0 0 60px color-mix(in srgb, var(--red) 0.05%, transparent);
}

.cps-pad.is-finished {
  border-color: rgba(255, 209, 102, 0.38);
  background:
    radial-gradient(circle at 50% 42%, rgba(255, 209, 102, 0.1), transparent 62%),
    linear-gradient(180deg, #15130d, #0a0b10);
}

.cps-pad.is-pressed {
  transform: scale(0.985);
}

.cps-pad-label {
  font-family: var(--font-display);
  font-size: clamp(50px, 9vw, 88px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.cps-pad.is-live .cps-pad-label {
  color: var(--red-bright);
  text-shadow: 0 0 44px color-mix(in srgb, var(--red) 0.3%, transparent);
}

.cps-pad.is-finished .cps-pad-label {
  color: var(--gold);
  text-shadow: 0 0 44px rgba(255, 209, 102, 0.24);
}

.cps-pad-sub {
  max-width: 420px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  line-height: 1.6;
  letter-spacing: 0.04em;
}

.cps-result {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  margin-top: 12px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.18);
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.cps-result strong {
  color: var(--gold);
  font-family: var(--font-mono);
  font-size: 17px;
}

.cps-result.is-win {
  border-color: rgba(92, 255, 177, 0.3);
  background: rgba(92, 255, 177, 0.045);
  color: var(--text);
}

@media (max-width: 620px) {
  .cps-pad {
    min-height: 260px;
    padding: 18px;
  }

  .cps-pad-label {
    font-size: clamp(44px, 17vw, 66px);
  }
}

/* ---------------------------------------------------------
   25. DICE DUEL
   --------------------------------------------------------- */

.dice-panel {
  --accent: var(--gold);
}

.dice-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  min-height: 230px;
  margin-bottom: 16px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background:
    radial-gradient(circle at 50% 45%, rgba(255, 209, 102, 0.09), transparent 58%),
    linear-gradient(180deg, #0b0e16, #07080d);
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.dice-stage.is-win {
  border-color: rgba(92, 255, 177, 0.38);
  box-shadow: 0 0 44px rgba(92, 255, 177, 0.07);
}

.dice-stage.is-loss {
  border-color: color-mix(in srgb, var(--red) 0.32%, transparent);
}

.die {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  width: clamp(74px, 12vw, 104px);
  aspect-ratio: 1;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 15px;
  background: linear-gradient(145deg, #fffdf7, #ddd6c4);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 18px 38px rgba(0, 0, 0, 0.45);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.die i {
  display: block;
  border-radius: 50%;
  background: transparent;
}

.die i.is-pip {
  background: #171820;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.35);
}

.dice-stage.is-rolling .die {
  animation: dice-tumble 0.18s linear infinite alternate;
}

.dice-stage.is-rolling .die:last-of-type {
  animation-delay: 0.08s;
}

.dice-stage.is-win .die {
  box-shadow: 0 0 0 2px rgba(92, 255, 177, 0.35), 0 18px 38px rgba(0, 0, 0, 0.45);
}

.dice-total {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 62px;
  color: var(--gold);
}

.dice-total span {
  font-family: var(--font-mono);
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.dice-total small {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 7px;
  font-weight: 600;
  letter-spacing: 0.16em;
}

.dice-choice {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 14px;
}

.dice-choice .choice-btn {
  flex-direction: column;
  gap: 2px;
  min-height: 62px;
}

.dice-choice .choice-btn small {
  color: var(--gold);
  font-size: 9px;
  letter-spacing: 0.06em;
}

.dice-choice .choice-btn.is-active {
  color: var(--gold);
  border-color: rgba(255, 209, 102, 0.45);
  background: linear-gradient(180deg, rgba(255, 209, 102, 0.13), rgba(255, 209, 102, 0.04));
  box-shadow: inset 0 0 20px rgba(255, 209, 102, 0.05);
}

.dice-result {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: 12px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.18);
  color: var(--muted);
  font-size: 13px;
  text-align: center;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.dice-result.is-win {
  color: var(--green);
  border-color: rgba(92, 255, 177, 0.3);
  background: rgba(92, 255, 177, 0.055);
}

.dice-result.is-loss {
  color: var(--red-bright);
  border-color: color-mix(in srgb, var(--red) 0.25%, transparent);
  background: color-mix(in srgb, var(--red) 0.045%, transparent);
}

.dice-result strong {
  color: var(--text);
  font-family: var(--font-mono);
}

.dice-roll {
  letter-spacing: 0.08em;
}

@keyframes dice-tumble {
  from { transform: translateY(-3px) rotate(-4deg); }
  to { transform: translateY(4px) rotate(5deg); }
}

/* ---------------------------------------------------------
   26. MINES
   --------------------------------------------------------- */

.mines-panel {
  --accent: var(--red);
}

.mines-hud {
  grid-template-columns: repeat(3, 1fr);
}

.mines-board {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 16px;
}

.mines-tile {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.045), transparent 50%),
    var(--panel-3);
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.mines-tile:hover:not(:disabled) {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--red) 0.42%, transparent);
  background: color-mix(in srgb, var(--red) 0.08%, transparent);
}

.mines-tile.is-safe {
  color: var(--green);
  border-color: rgba(92, 255, 177, 0.38);
  background:
    radial-gradient(circle at 50% 40%, rgba(92, 255, 177, 0.18), transparent 70%),
    rgba(92, 255, 177, 0.06);
}

.mines-tile.is-mine {
  color: var(--red-bright);
  border-color: color-mix(in srgb, var(--red) 0.45%, transparent);
  background:
    radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--red) 0.2%, transparent), transparent 70%),
    color-mix(in srgb, var(--red) 0.07%, transparent);
}

.mines-tile.is-hit {
  animation: shake 0.35s ease;
  box-shadow: 0 0 28px color-mix(in srgb, var(--red) 0.25%, transparent);
}

.mines-actions {
  display: flex;
  gap: 8px;
  margin-top: 14px;
}

.mines-actions .btn {
  flex: 1;
}

.mines-result {
  margin-top: 14px;
}

.mines-tile:disabled {
  cursor: default;
}

/* ---------------------------------------------------------
   27. WHACK-A-MOLE
   --------------------------------------------------------- */

.whack-panel {
  --accent: var(--green);
}

.whack-arena {
  position: relative;
  min-height: 440px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background:
    radial-gradient(circle at 50% 40%, rgba(92, 255, 177, 0.08), transparent 62%),
    linear-gradient(180deg, #0a1410, #070d0b);
  overflow: hidden;
}

.whack-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 11px;
  min-height: 400px;
}

.whack-hole {
  position: relative;
  display: block;
  aspect-ratio: 1 / 0.82;
  padding: 0;
  border: 0;
  border-radius: 50% 50% 44% 44%;
  background:
    radial-gradient(ellipse at 50% 82%, #223229, #0b130e 68%),
    #0b130e;
  box-shadow: inset 0 12px 28px rgba(0, 0, 0, 0.7), inset 0 -2px 0 rgba(255, 255, 255, 0.04);
  cursor: crosshair;
  overflow: hidden;
  transition: box-shadow 0.12s ease, background 0.12s ease;
}

.whack-hole::after {
  content: "";
  position: absolute;
  left: 12%;
  right: 12%;
  bottom: 8%;
  height: 20%;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  filter: blur(6px);
  pointer-events: none;
}

.whack-hole:hover {
  box-shadow: inset 0 12px 28px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(92, 255, 177, 0.18);
}

.whack-hole.is-hit {
  background: radial-gradient(ellipse at 50% 82%, rgba(92, 255, 177, 0.25), #0b130e 68%);
}

.whack-hole.is-wrong {
  background: radial-gradient(ellipse at 50% 82%, color-mix(in srgb, var(--red) 0.25%, transparent), #0b130e 68%);
}

.mole {
  position: absolute;
  left: 50%;
  bottom: -34%;
  z-index: 2;
  transform: translateX(-50%);
  font-size: clamp(28px, 5.5vw, 48px);
  line-height: 1;
  filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.5));
  transition: bottom 0.14s cubic-bezier(0.2, 0.9, 0.3, 1.25);
  pointer-events: none;
  user-select: none;
}

.whack-hole.is-up .mole {
  bottom: 17%;
}

.whack-hole.is-up::after {
  opacity: 0.6;
}

.whack-arena .aim-overlay {
  border-radius: 10px;
}

/* ---------------------------------------------------------
   28. SIMON SAYS
   --------------------------------------------------------- */

.simon-panel {
  --accent: var(--violet);
}

.simon-hud {
  grid-template-columns: repeat(4, 1fr);
}

.simon-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 480px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background:
    radial-gradient(circle at 50% 40%, rgba(167, 139, 250, 0.09), transparent 64%),
    linear-gradient(180deg, #0c0b16, #07080d);
  overflow: hidden;
}

.simon-board {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  width: min(390px, 100%);
}

.simon-pad {
  position: relative;
  aspect-ratio: 1;
  padding: 0;
  border: 2px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  opacity: 0.58;
  box-shadow:
    inset 0 0 40px rgba(255, 255, 255, 0.1),
    inset 0 -12px 26px rgba(0, 0, 0, 0.32);
  transition: opacity 0.14s ease, transform 0.14s ease, filter 0.14s ease, box-shadow 0.14s ease;
}

.simon-pad--green {
  background: radial-gradient(circle at 32% 26%, #9dffd0, #1d9d65 72%);
}

.simon-pad--red {
  background: radial-gradient(circle at 32% 26%, #ffb0b8, #c1263b 72%);
}

.simon-pad--gold {
  background: radial-gradient(circle at 32% 26%, #fff0b5, #c08b14 72%);
}

.simon-pad--cyan {
  background: radial-gradient(circle at 32% 26%, #b5fdff, #0d8e9d 72%);
}

.simon-pad.is-lit {
  opacity: 1;
  transform: scale(1.035);
  filter: brightness(1.28);
  box-shadow:
    0 0 38px rgba(255, 255, 255, 0.3),
    inset 0 0 56px rgba(255, 255, 255, 0.25);
}

.simon-pad.is-wrong {
  opacity: 1;
  filter: brightness(1.1) saturate(0.4);
  box-shadow: 0 0 34px color-mix(in srgb, var(--red) 0.5%, transparent);
}

.simon-pad:disabled {
  cursor: default;
}

.simon-status {
  min-height: 20px;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  text-align: center;
}

.simon-stage .aim-overlay {
  border-radius: 10px;
}

/* ---------------------------------------------------------
   29. CREDITS
   --------------------------------------------------------- */

.credits {
  padding: 8px 0 74px;
}

.credits-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding: 30px 0 20px;
  border-top: 1px solid var(--line);
}

.credits-head h2 {
  margin-top: 8px;
  font-size: clamp(34px, 5vw, 54px);
}

.credits-head p {
  max-width: 430px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
  text-align: right;
}

.credits-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.credit-card {
  position: relative;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel);
}

.credit-card::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 18px;
  width: 34px;
  height: 2px;
  background: var(--red);
  opacity: 0.7;
}

.credit-index {
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.14em;
}

.credit-card h3 {
  margin: 9px 0 5px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--muted);
  text-transform: uppercase;
}

.credit-card p {
  color: var(--text);
  font-size: 13px;
  line-height: 1.55;
}

.credits-note {
  margin-top: 18px;
  color: var(--muted-2);
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.09em;
  text-align: center;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .credits-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .credits-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .credits-head p {
    text-align: left;
  }
}

@media (max-width: 520px) {
  .credits-grid {
    grid-template-columns: 1fr;
  }
}/* ---------------------------------------------------------
   30. LIGHT THEME
   --------------------------------------------------------- */

html[data-theme="light"] {
  color-scheme: light;
  --bg: #f4f0e7;
  --bg-soft: #ebe5d9;
  --panel: #fffdf8;
  --panel-2: #f9f5ec;
  --panel-3: #efe8db;
  --line: rgba(27, 28, 35, 0.12);
  --line-strong: rgba(27, 28, 35, 0.22);
  --text: #1a1b23;
  --muted: #5b5e6c;
  --muted-2: #7c7f8c;
  --red: #b01828;
  --red-bright: #d9283c;
  --red-dark: #8f1426;
  --gold: #b87300;
  --cyan: #007a8c;
  --green: #007a4b;
  --violet: #6946c9;
  --shadow: 0 24px 70px rgba(60, 50, 35, 0.14);
}

html[data-theme="light"] body {
  background:
    radial-gradient(1100px 700px at 78% -10%, rgba(197, 31, 54, 0.1), transparent 62%),
    radial-gradient(900px 650px at 8% 15%, rgba(8, 127, 140, 0.07), transparent 60%),
    var(--bg);
}

html[data-theme="light"] body::before {
  background-image:
    linear-gradient(rgba(27, 28, 35, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(27, 28, 35, 0.045) 1px, transparent 1px);
}

html[data-theme="light"] ::selection {
  background: var(--red);
  color: #fff;
}

html[data-theme="light"] ::-webkit-scrollbar-track {
  background: var(--bg);
}

html[data-theme="light"] ::-webkit-scrollbar-thumb {
  background: #c9c1b2;
  border-color: var(--bg);
}

html[data-theme="light"] .site-header {
  background: rgba(250, 247, 240, 0.88);
}

html[data-theme="light"] .nav-link:hover,
html[data-theme="light"] .nav-link.is-active {
  background: rgba(27, 28, 35, 0.05);
}

html[data-theme="light"] .btn-ghost,
html[data-theme="light"] .icon-btn,
html[data-theme="light"] .daily-pill,
html[data-theme="light"] .chip,
html[data-theme="light"] .choice-btn,
html[data-theme="light"] .badge,
html[data-theme="light"] .game-hud > div,
html[data-theme="light"] .mini-stats > div,
html[data-theme="light"] .stat-tile,
html[data-theme="light"] .best-list li,
html[data-theme="light"] .achievement {
  background: rgba(27, 28, 35, 0.045);
}

html[data-theme="light"] .daily-pill {
  border-color: rgba(27, 28, 35, 0.14);
  background: rgba(27, 28, 35, 0.045);
}

html[data-theme="light"] .daily-pill:hover {
  background: rgba(27, 28, 35, 0.08);
}

html[data-theme="light"] .daily-pill.is-claimed {
  opacity: 0.65;
}

html[data-theme="light"] .chip.is-active {
  color: var(--red-bright);
  border-color: rgba(197, 31, 54, 0.4);
  background: rgba(197, 31, 54, 0.09);
}

html[data-theme="light"] .choice-btn.is-active {
  color: var(--cyan);
  border-color: rgba(8, 127, 140, 0.4);
  background: linear-gradient(180deg, rgba(8, 127, 140, 0.12), rgba(8, 127, 140, 0.04));
}

html[data-theme="light"] .dice-choice .choice-btn.is-active {
  color: var(--gold);
  border-color: rgba(154, 101, 0, 0.42);
  background: linear-gradient(180deg, rgba(154, 101, 0, 0.12), rgba(154, 101, 0, 0.04));
}

html[data-theme="light"] .bet-field {
  background: rgba(27, 28, 35, 0.05);
}

html[data-theme="light"] .bet-field input:focus {
  background: rgba(27, 28, 35, 0.04);
}

html[data-theme="light"] .panel {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.65), transparent 24%),
    linear-gradient(180deg, var(--panel-2), var(--panel));
}

html[data-theme="light"] .game-card {
  background:
    linear-gradient(150deg, color-mix(in srgb, var(--card-accent) 8%, transparent), transparent 40%),
    var(--panel);
}

html[data-theme="light"] .game-card--featured {
  background:
    linear-gradient(120deg, color-mix(in srgb, var(--card-accent) 12%, transparent), transparent 47%),
    radial-gradient(700px 300px at 90% 105%, rgba(154, 101, 0, 0.08), transparent),
    var(--panel);
}

html[data-theme="light"] .game-card:hover {
  box-shadow: 0 24px 55px rgba(60, 50, 35, 0.16), 0 0 40px color-mix(in srgb, var(--card-accent) 8%, transparent);
}

html[data-theme="light"] .game-icon {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

html[data-theme="light"] .site-footer {
  background: rgba(27, 28, 35, 0.035);
}

html[data-theme="light"] .ticker {
  background: rgba(27, 28, 35, 0.025);
}

html[data-theme="light"] .floating-chip {
  background: rgba(255, 253, 248, 0.94);
  box-shadow: 0 14px 34px rgba(60, 50, 35, 0.16);
}

html[data-theme="light"] .hero-title .text-red {
  text-shadow: 0 0 40px rgba(197, 31, 54, 0.18);
}

html[data-theme="light"] .toast {
  border-color: var(--line-strong);
  background: rgba(255, 253, 248, 0.98);
  color: var(--text);
  box-shadow: 0 18px 50px rgba(60, 50, 35, 0.18);
}

html[data-theme="light"] .broke-banner {
  background:
    linear-gradient(90deg, rgba(154, 101, 0, 0.12), transparent 45%),
    rgba(255, 253, 248, 0.98);
  box-shadow: 0 18px 60px rgba(60, 50, 35, 0.18);
}

html[data-theme="light"] .modal-card {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent 18%),
    var(--panel-2);
  box-shadow: 0 40px 120px rgba(60, 50, 35, 0.28);
}

html[data-theme="light"] .modal::backdrop {
  background: rgba(40, 35, 25, 0.42);
}

html[data-theme="light"] .achievement.is-earned {
  border-color: rgba(8, 122, 75, 0.25);
  background: linear-gradient(90deg, rgba(8, 122, 75, 0.08), rgba(27, 28, 35, 0.03));
}

html[data-theme="light"] .danger-zone {
  border-color: rgba(197, 31, 54, 0.18);
  background: rgba(197, 31, 54, 0.05);
}

html[data-theme="light"] .coin-result:not(.is-win):not(.is-loss),
html[data-theme="light"] .dice-result:not(.is-win):not(.is-loss),
html[data-theme="light"] .cps-result:not(.is-win) {
  background: rgba(27, 28, 35, 0.045);
}

/* Game surfaces: arcade cabinets become daylight tables. */

html[data-theme="light"] .slot-machine {
  background:
    radial-gradient(700px 220px at 50% 0%, rgba(154, 101, 0, 0.09), transparent),
    linear-gradient(180deg, #fffdf8, #f3ecdf);
  box-shadow: inset 0 0 50px rgba(120, 100, 60, 0.08);
}

html[data-theme="light"] .reel {
  border-color: rgba(27, 28, 35, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.7), transparent 22%, transparent 78%, rgba(120, 100, 60, 0.08)),
    radial-gradient(circle at 50% 42%, rgba(154, 101, 0, 0.08), transparent 65%),
    #fbf7ee;
  box-shadow: inset 0 0 30px rgba(120, 100, 60, 0.12);
}

html[data-theme="light"] .reel::before {
  background: linear-gradient(180deg, rgba(251, 247, 238, 0.95), transparent);
}

html[data-theme="light"] .reel::after {
  background: linear-gradient(0deg, rgba(251, 247, 238, 0.95), transparent);
}

html[data-theme="light"] .reel.is-win {
  border-color: rgba(154, 101, 0, 0.6);
  box-shadow:
    inset 0 0 30px rgba(154, 101, 0, 0.12),
    0 0 32px rgba(154, 101, 0, 0.14);
}

html[data-theme="light"] .slot-result:not(.is-win):not(.is-jackpot) {
  background: rgba(27, 28, 35, 0.045);
}

html[data-theme="light"] .slot-result.is-win {
  background: linear-gradient(90deg, rgba(154, 101, 0, 0.09), rgba(197, 31, 54, 0.04));
}

html[data-theme="light"] .slot-result.is-jackpot {
  background:
    radial-gradient(400px 90px at 50% 50%, rgba(154, 101, 0, 0.16), transparent),
    rgba(154, 101, 0, 0.06);
}

html[data-theme="light"] .coin-stage {
  background:
    radial-gradient(circle at 50% 50%, rgba(154, 101, 0, 0.1), transparent 48%),
    linear-gradient(180deg, #fffaf0, #f2eadb);
}

html[data-theme="light"] .coin-stage::after {
  background: rgba(60, 50, 35, 0.25);
}

html[data-theme="light"] .crash-stage {
  background:
    radial-gradient(600px 250px at 50% 0%, rgba(8, 122, 75, 0.08), transparent),
    #fbf8f1;
}

html[data-theme="light"] .crash-history-chip {
  background: rgba(27, 28, 35, 0.05);
}

html[data-theme="light"] .bj-table {
  border-color: rgba(8, 122, 75, 0.18);
  background:
    radial-gradient(ellipse at 50% 40%, rgba(8, 122, 75, 0.1), transparent 64%),
    radial-gradient(ellipse at 50% 105%, rgba(197, 31, 54, 0.05), transparent 55%),
    linear-gradient(180deg, #f4fbf6, #f3eee4);
  box-shadow: inset 0 0 70px rgba(120, 100, 60, 0.08);
}

html[data-theme="light"] .bj-table::before {
  border-color: rgba(27, 28, 35, 0.08);
}

html[data-theme="light"] .bj-label {
  color: var(--muted-2);
}

html[data-theme="light"] .bj-label span {
  color: var(--text);
}

html[data-theme="light"] .bj-center:not(.is-win):not(.is-loss):not(.is-push) {
  color: var(--muted);
  border-color: rgba(27, 28, 35, 0.14);
}

html[data-theme="light"] .playing-card {
  border-color: rgba(27, 28, 35, 0.18);
  box-shadow: 0 10px 22px rgba(60, 50, 35, 0.2);
}

html[data-theme="light"] .playing-card.is-back {
  border-color: #d7cfc0;
  background:
    repeating-linear-gradient(45deg, #22283a 0 5px, #151a29 5px 10px),
    #151a29;
  color: #ffd166;
}

html[data-theme="light"] .playing-card.is-back::after {
  background: rgba(7, 8, 13, 0.65);
}

html[data-theme="light"] .aim-arena {
  background:
    radial-gradient(circle at 50% 45%, rgba(105, 70, 201, 0.08), transparent 60%),
    linear-gradient(180deg, #fbf7ff, #f3eee8);
}

html[data-theme="light"] .aim-arena::before {
  background-image:
    linear-gradient(rgba(27, 28, 35, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(27, 28, 35, 0.06) 1px, transparent 1px);
}

html[data-theme="light"] .aim-overlay {
  background: rgba(255, 253, 248, 0.92);
}

html[data-theme="light"] .aim-result > div {
  background: rgba(27, 28, 35, 0.045);
}

html[data-theme="light"] .reaction-stage:not(.is-ready) {
  background:
    radial-gradient(circle at 50% 45%, rgba(197, 31, 54, 0.08), transparent 55%),
    linear-gradient(180deg, #fff8f7, #f3eee6);
}

html[data-theme="light"] .reaction-stage.is-waiting {
  background:
    radial-gradient(circle at 50% 45%, rgba(197, 31, 54, 0.14), transparent 58%),
    linear-gradient(180deg, #fff3f3, #f3eee6);
  border-color: rgba(197, 31, 54, 0.25);
}

html[data-theme="light"] .reaction-stage.is-too-soon {
  background:
    radial-gradient(circle at 50% 45%, rgba(154, 101, 0, 0.14), transparent 58%),
    linear-gradient(180deg, #fff9ea, #f3eee6);
  border-color: rgba(154, 101, 0, 0.3);
}

html[data-theme="light"] .reaction-stage.is-result {
  background:
    radial-gradient(circle at 50% 45%, rgba(154, 101, 0, 0.1), transparent 58%),
    linear-gradient(180deg, #fbf7ff, #f3eee6);
  border-color: rgba(154, 101, 0, 0.28);
}

html[data-theme="light"] .reaction-stage::before {
  background-image:
    linear-gradient(rgba(27, 28, 35, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(27, 28, 35, 0.05) 1px, transparent 1px);
}

html[data-theme="light"] .mem-front {
  border-color: rgba(8, 127, 140, 0.2);
  background:
    linear-gradient(145deg, rgba(8, 127, 140, 0.07), transparent 45%),
    repeating-linear-gradient(45deg, rgba(27, 28, 35, 0.02) 0 7px, transparent 7px 14px),
    #f2fbfb;
  color: rgba(8, 127, 140, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 8px 18px rgba(60, 50, 35, 0.1);
}

html[data-theme="light"] .mem-card:hover .mem-front {
  border-color: rgba(8, 127, 140, 0.45);
  color: var(--cyan);
}

html[data-theme="light"] .mem-back {
  border-color: rgba(8, 127, 140, 0.32);
  background:
    radial-gradient(circle at 50% 40%, rgba(8, 127, 140, 0.12), transparent 65%),
    #effbfb;
  box-shadow: inset 0 0 24px rgba(8, 127, 140, 0.06);
}

html[data-theme="light"] .mem-card.is-matched .mem-back {
  border-color: rgba(8, 122, 75, 0.5);
  background:
    radial-gradient(circle at 50% 40%, rgba(8, 122, 75, 0.14), transparent 65%),
    #effaf4;
  box-shadow: 0 0 26px rgba(8, 122, 75, 0.1);
}

html[data-theme="light"] .memory-complete {
  background: rgba(255, 253, 248, 0.94);
}

html[data-theme="light"] .cps-pad {
  background:
    radial-gradient(circle at 50% 42%, rgba(197, 31, 54, 0.07), transparent 58%),
    linear-gradient(180deg, #fffdf8, #f3eee6);
}

html[data-theme="light"] .cps-pad.is-live {
  background:
    radial-gradient(circle at 50% 42%, rgba(197, 31, 54, 0.16), transparent 62%),
    linear-gradient(180deg, #fff1f2, #f6ece8);
  box-shadow: 0 0 70px rgba(197, 31, 54, 0.1), inset 0 0 60px rgba(197, 31, 54, 0.04);
}

html[data-theme="light"] .cps-pad.is-finished {
  background:
    radial-gradient(circle at 50% 42%, rgba(154, 101, 0, 0.12), transparent 62%),
    linear-gradient(180deg, #fff9ea, #f4efe5);
}

html[data-theme="light"] .cps-progress {
  background: rgba(27, 28, 35, 0.08);
}

html[data-theme="light"] .dice-stage {
  background:
    radial-gradient(circle at 50% 45%, rgba(154, 101, 0, 0.1), transparent 58%),
    linear-gradient(180deg, #fffdf8, #f3ecdf);
}

html[data-theme="light"] .dice-stage.is-win {
  border-color: rgba(8, 122, 75, 0.35);
  box-shadow: 0 0 44px rgba(8, 122, 75, 0.08);
}

html[data-theme="light"] .dice-stage.is-loss {
  border-color: rgba(197, 31, 54, 0.3);
}

html[data-theme="light"] .die {
  border-color: rgba(27, 28, 35, 0.2);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 18px 38px rgba(60, 50, 35, 0.2);
}

html[data-theme="light"] .dice-stage.is-win .die {
  box-shadow: 0 0 0 2px rgba(8, 122, 75, 0.3), 0 18px 38px rgba(60, 50, 35, 0.2);
}

html[data-theme="light"] .mines-tile {
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.8), transparent 50%),
    var(--panel-3);
}

html[data-theme="light"] .mines-tile:hover:not(:disabled) {
  border-color: rgba(197, 31, 54, 0.35);
  background: rgba(197, 31, 54, 0.07);
}

html[data-theme="light"] .mines-tile.is-safe {
  color: var(--green);
  border-color: rgba(8, 122, 75, 0.35);
  background:
    radial-gradient(circle at 50% 40%, rgba(8, 122, 75, 0.14), transparent 70%),
    rgba(8, 122, 75, 0.05);
}

html[data-theme="light"] .mines-tile.is-mine {
  color: var(--red);
  border-color: rgba(197, 31, 54, 0.4);
  background:
    radial-gradient(circle at 50% 40%, rgba(197, 31, 54, 0.16), transparent 70%),
    rgba(197, 31, 54, 0.06);
}

html[data-theme="light"] .whack-arena {
  background:
    radial-gradient(circle at 50% 40%, rgba(8, 122, 75, 0.1), transparent 62%),
    linear-gradient(180deg, #f5fbf6, #f0ece3);
}

html[data-theme="light"] .whack-hole {
  background:
    radial-gradient(ellipse at 50% 82%, #355244, #20382c 68%),
    #20382c;
  box-shadow: inset 0 12px 28px rgba(0, 0, 0, 0.55), inset 0 -2px 0 rgba(255, 255, 255, 0.15);
}

html[data-theme="light"] .whack-hole:hover {
  box-shadow: inset 0 12px 28px rgba(0, 0, 0, 0.55), 0 0 0 2px rgba(8, 122, 75, 0.25);
}

html[data-theme="light"] .whack-hole.is-hit {
  background: radial-gradient(ellipse at 50% 82%, rgba(8, 122, 75, 0.55), #20382c 68%);
}

html[data-theme="light"] .whack-hole.is-wrong {
  background: radial-gradient(ellipse at 50% 82%, rgba(197, 31, 54, 0.55), #20382c 68%);
}

html[data-theme="light"] .whack-hole.is-up::after {
  opacity: 0.75;
}

html[data-theme="light"] .simon-stage {
  background:
    radial-gradient(circle at 50% 40%, rgba(105, 70, 201, 0.1), transparent 64%),
    linear-gradient(180deg, #faf7ff, #f2ede6);
}

html[data-theme="light"] .simon-pad {
  border-color: rgba(27, 28, 35, 0.14);
  box-shadow:
    inset 0 0 40px rgba(255, 255, 255, 0.2),
    inset 0 -12px 26px rgba(60, 50, 35, 0.18);
}

html[data-theme="light"] .simon-pad.is-lit {
  box-shadow:
    0 0 38px rgba(105, 70, 201, 0.25),
    inset 0 0 56px rgba(255, 255, 255, 0.35);
}

html[data-theme="light"] .simon-pad.is-wrong {
  box-shadow: 0 0 34px rgba(197, 31, 54, 0.45);
}

@media (max-width: 620px) {
  .dice-stage {
    min-height: 200px;
    gap: 14px;
    padding: 18px;
  }

  .die {
    width: 70px;
    padding: 9px;
    gap: 4px;
  }

  .dice-choice {
    grid-template-columns: 1fr;
  }

  .mines-board {
    gap: 5px;
  }

  .mines-tile {
    font-size: 15px;
    border-radius: 6px;
  }

  .whack-arena {
    min-height: 390px;
    padding: 12px;
  }

  .whack-grid {
    min-height: 366px;
    gap: 7px;
  }

  .mole {
    font-size: 28px;
  }

  .simon-stage {
    min-height: 430px;
    padding: 16px;
  }

  .simon-board {
    gap: 8px;
    width: min(330px, 100%);
  }

  .simon-hud {
    grid-template-columns: 1fr 1fr;
  }
}

/* ---------------------------------------------------------
   31. REDUCED MOTION
   --------------------------------------------------------- */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
````

## `js/points.js`

````js
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
````

## `js/theme.js`

````js
/* =========================================================
   SPECTATOR ROOM — js/theme.js
   Loaded in the <head> so a saved light theme is applied
   before the page paints. points.js keeps it in sync later.
   ========================================================= */

'use strict';

(function applySavedTheme() {
  try {
    const raw = localStorage.getItem('spectator-room-state-v1');
    if (!raw) return;

    const saved = JSON.parse(raw);
    if (saved && saved.theme === 'light') {
      document.documentElement.dataset.theme = 'light';
    }
  } catch (error) {
    // localStorage can be unavailable (private mode, file:// restrictions).
    // The site simply falls back to the default dark theme.
  }
})();
````

## `js/slots.js`

````js
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
````

## `js/coinflip.js`

````js
/* =========================================================
   SPECTATOR ROOM — js/coinflip.js
   Pick heads or tails. Win = double. Lose = nothing.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const MIN = 10;
  const MAX = Infinity;

  const stage = document.getElementById('coin-stage');
  const coin = document.getElementById('coin');
  const flipButton = document.getElementById('coin-flip');
  const betInput = document.getElementById('coin-bet');
  const betChips = Array.from(document.querySelectorAll('[data-coin-bet]'));
  const choiceButtons = Array.from(document.querySelectorAll('[data-choice]'));
  const resultElement = document.getElementById('coin-result');
  const streakElement = document.getElementById('coin-streak');
  const bestElement = document.getElementById('coin-best');
  const lastElement = document.getElementById('coin-last');

  if (!stage || !coin || !flipButton || !betInput) return;

  let choice = 'heads';
  let rotation = 0;
  let flipping = false;
  let streak = 0;
  let best = Number(Points.getStats().bestStreak) || 0;

  bestElement.textContent = best;

  /* -------------------------------------------------------
     Betting
     ------------------------------------------------------- */
  function setBet(value) {
    const balance = Points.getBalance();
    const ceiling = Math.max(MIN, Math.min(MAX, balance || MIN));
    const bet = SR.clamp(Math.floor(Number(value) || MIN), MIN, ceiling);
    betInput.value = bet;
    betChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.coinBet) === bet);
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

  betInput.addEventListener('change', () => setBet(betInput.value));
  betInput.addEventListener('blur', () => setBet(betInput.value));
  betInput.addEventListener('focus', () => betInput.select());

  betChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      Sound.play('click');
      const value = chip.dataset.coinBet === 'max'
        ? Math.min(MAX, Points.getBalance())
        : chip.dataset.coinBet;
      setBet(value);
    });
  });

  /* -------------------------------------------------------
     Choice
     ------------------------------------------------------- */
  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (flipping) return;
      choice = button.dataset.choice;
      Sound.play('click');
      choiceButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      resultElement.className = 'coin-result';
      resultElement.textContent = `You called ${choice.toUpperCase()}. Now flip.`;
    });
  });

  /* -------------------------------------------------------
     Lock / unlock controls
     ------------------------------------------------------- */
  function setControlsDisabled(disabled) {
    betInput.disabled = disabled;
    betChips.forEach((chip) => { chip.disabled = disabled; });
    choiceButtons.forEach((button) => { button.disabled = disabled; });
    flipButton.disabled = disabled;
  }

  /* -------------------------------------------------------
     Flip
     ------------------------------------------------------- */
  function flip() {
    if (flipping) return;

    const bet = readBet();
    if (bet === null) return;

    // Lock the controls before Points triggers a re-render.
    flipping = true;
    if (!Points.startRound(bet)) {
      flipping = false;
      return;
    }

    setControlsDisabled(true);
    stage.classList.remove('is-win', 'is-loss');
    resultElement.className = 'coin-result';
    resultElement.textContent = 'Coin is in the air…';
    Sound.play('flip');

    // The result is decided honestly at 50/50.
    const result = Points.random() < 0.5 ? 'heads' : 'tails';

    // Add at least five full spins, then land on the correct face.
    const currentFace = ((rotation % 360) + 360) % 360; // 0 = heads, 180 = tails
    const wantedFace = result === 'heads' ? 0 : 180;
    const adjustment = ((wantedFace - currentFace) + 360) % 360;
    rotation += 1800 + adjustment;
    coin.style.transform = `rotateY(${rotation}deg)`;

    stage.classList.remove('is-flipping');
    void stage.offsetWidth;
    stage.classList.add('is-flipping');

    setTimeout(() => {
      const won = result === choice;
      const payout = won ? bet * 2 : 0;

      if (won) {
        streak += 1;
        if (streak > best) {
          best = streak;
          Points.recordBest('bestStreak', best);
        }
        if (streak >= 5) Points.unlock('streak-5');
      } else {
        streak = 0;
      }

      Points.endRound(bet, payout);

      stage.classList.remove('is-flipping');
      stage.classList.add(won ? 'is-win' : 'is-loss');
      resultElement.className = `coin-result ${won ? 'is-win' : 'is-loss'}`;

      if (won) {
        resultElement.innerHTML = `It's <strong>${result.toUpperCase()}</strong>. You win <strong>+${bet}</strong> points. Streak: <strong>${streak}</strong>.`;
        Sound.play('win');
      } else {
        resultElement.innerHTML = `It's <strong>${result.toUpperCase()}</strong>. You lose <strong>${bet}</strong> points. Streak reset.`;
        Sound.play('lose');
      }

      streakElement.textContent = streak;
      bestElement.textContent = best;
      lastElement.textContent = result.toUpperCase();

      flipping = false;
      setControlsDisabled(false);
      setBet(bet);
    }, 1200);
  }

  flipButton.addEventListener('click', flip);

  // Space is a shortcut for the flip button.
  document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || event.repeat) return;
    if (document.querySelector('dialog[open]')) return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'SELECT') return;
    event.preventDefault();
    flip();
  });

  Points.subscribe(() => {
    if (flipping) return;
    setBet(betInput.value);
    best = Number(Points.getStats().bestStreak) || 0;
    bestElement.textContent = best;
  });

  setBet(25);
});
````

## `js/crash.js`

````js
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
````

## `js/blackjack.js`

````js
/* =========================================================
   SPECTATOR ROOM — js/blackjack.js
   Six-deck blackjack with hit, stand and double down.
   Dealer stands on all 17. Blackjack pays 3:2.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const MIN = 10;
  const MAX = Infinity;
  const DECKS = 6;

  const SUITS = [
    { symbol: '♠', red: false },
    { symbol: '♥', red: true },
    { symbol: '♦', red: true },
    { symbol: '♣', red: false }
  ];
  const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const dealerHandElement = document.getElementById('bj-dealer-hand');
  const playerHandElement = document.getElementById('bj-player-hand');
  const dealerTotalElement = document.getElementById('bj-dealer-total');
  const playerTotalElement = document.getElementById('bj-player-total');
  const statusElement = document.getElementById('bj-status');
  const shoeElement = document.getElementById('bj-shoe');
  const betInput = document.getElementById('bj-bet');
  const betChips = Array.from(document.querySelectorAll('[data-bj-bet]'));
  const dealButton = document.getElementById('bj-deal');
  const hitButton = document.getElementById('bj-hit');
  const standButton = document.getElementById('bj-stand');
  const doubleButton = document.getElementById('bj-double');

  if (!dealerHandElement || !playerHandElement || !dealButton || !betInput) return;

  let shoe = createShoe();
  let playerHand = [];
  let dealerHand = [];
  let totalBet = 0;
  let inRound = false;
  let playerTurn = false;
  let busy = false;
  let holeHidden = true;

  /* -------------------------------------------------------
     Cards
     ------------------------------------------------------- */
  function createShoe() {
    const cards = [];
    for (let deck = 0; deck < DECKS; deck += 1) {
      SUITS.forEach((suit) => {
        RANKS.forEach((rank) => {
          cards.push({ rank, suit: suit.symbol, red: suit.red });
        });
      });
    }
    return SR.shuffle(cards);
  }

  function drawCard() {
    if (shoe.length === 0) shoe = createShoe();
    return shoe.pop();
  }

  function handValue(hand) {
    let total = 0;
    let aces = 0;

    hand.forEach((card) => {
      if (card.rank === 'A') {
        aces += 1;
        total += 11;
      } else if (card.rank === 'K' || card.rank === 'Q' || card.rank === 'J') {
        total += 10;
      } else {
        total += Number(card.rank);
      }
    });

    // Turn aces from 11 into 1 while the hand is too high.
    while (total > 21 && aces > 0) {
      total -= 10;
      aces -= 1;
    }

    return total;
  }

  function isBlackjack(hand) {
    return hand.length === 2 && handValue(hand) === 21;
  }

  /* -------------------------------------------------------
     Rendering
     ------------------------------------------------------- */
  function makeCard(card, hidden, animate) {
    const element = document.createElement('div');
    element.className = 'playing-card';

    if (animate) element.classList.add('is-new');

    if (hidden) {
      element.classList.add('is-back');
      element.setAttribute('aria-label', 'Face-down card');
      return element;
    }

    if (card.red) element.classList.add('is-red');
    element.setAttribute('aria-label', `${card.rank} of ${card.suit}`);

    const rank = document.createElement('span');
    rank.className = 'card-rank';
    rank.textContent = card.rank;

    const suit = document.createElement('span');
    suit.className = 'card-suit';
    suit.textContent = card.suit;

    element.appendChild(rank);
    element.appendChild(suit);
    return element;
  }

  function renderHands(animate = {}) {
    const animatePlayer = new Set(animate.player || []);
    const animateDealer = new Set(animate.dealer || []);

    dealerHandElement.innerHTML = '';
    dealerHand.forEach((card, index) => {
      dealerHandElement.appendChild(makeCard(card, holeHidden && index === 1, animateDealer.has(index)));
    });

    playerHandElement.innerHTML = '';
    playerHand.forEach((card, index) => {
      playerHandElement.appendChild(makeCard(card, false, animatePlayer.has(index)));
    });

    playerTotalElement.textContent = playerHand.length ? String(handValue(playerHand)) : '';

    if (!dealerHand.length) {
      dealerTotalElement.textContent = '';
    } else if (holeHidden) {
      dealerTotalElement.textContent = `${handValue([dealerHand[0]])} + ?`;
    } else {
      dealerTotalElement.textContent = String(handValue(dealerHand));
    }

    if (shoeElement) shoeElement.textContent = `${shoe.length} cards`;
  }

  function setStatus(message, type = '') {
    statusElement.textContent = message;
    statusElement.className = `bj-center${type ? ` is-${type}` : ''}`;
  }

  function updateControls() {
    const locked = inRound || busy;
    dealButton.disabled = locked;
    hitButton.disabled = !playerTurn || busy;
    standButton.disabled = !playerTurn || busy;
    doubleButton.disabled =
      !playerTurn || busy || playerHand.length !== 2 || Points.getBalance() < totalBet;

    betInput.disabled = locked;
    betChips.forEach((chip) => { chip.disabled = locked; });

    if (shoeElement) shoeElement.textContent = `${shoe.length} cards`;
  }

  /* -------------------------------------------------------
     Betting
     ------------------------------------------------------- */
  function setBet(value) {
    const balance = Points.getBalance();
    const ceiling = Math.max(MIN, Math.min(MAX, balance || MIN));
    const amount = SR.clamp(Math.floor(Number(value) || MIN), MIN, ceiling);
    betInput.value = amount;
    betChips.forEach((chip) => {
      chip.classList.toggle('is-active', Number(chip.dataset.bjBet) === amount);
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
      if (inRound || busy) return;
      Sound.play('click');
      const value = chip.dataset.bjBet === 'max'
        ? Math.min(MAX, Points.getBalance())
        : chip.dataset.bjBet;
      setBet(value);
    });
  });

  /* -------------------------------------------------------
     Deal
     ------------------------------------------------------- */
  async function deal() {
    if (inRound || busy) return;

    const bet = readBet();
    if (bet === null) return;

    // Shuffle a fresh shoe when it gets low, like a real table.
    if (shoe.length < 52) {
      shoe = createShoe();
      Points.notify('Shoe shuffled.', 'info', '🃏');
    }

    // Lock the bet controls before Points triggers a re-render.
    inRound = true;
    if (!Points.startRound(bet)) {
      inRound = false;
      return;
    }

    totalBet = bet;
    playerHand = [drawCard(), drawCard()];
    dealerHand = [drawCard(), drawCard()];
    holeHidden = true;
    busy = true;
    playerTurn = false;

    renderHands({ dealer: [0, 1], player: [0, 1] });
    updateControls();
    setStatus('Dealing…');
    Sound.play('deal');

    await SR.sleep(360);
    Sound.play('deal');
    await SR.sleep(380);

    const playerBlackjack = isBlackjack(playerHand);
    const dealerBlackjack = isBlackjack(dealerHand);

    if (playerBlackjack || dealerBlackjack) {
      holeHidden = false;
      renderHands();
      setStatus('Revealing the hole card…');
      await SR.sleep(520);

      if (playerBlackjack && dealerBlackjack) {
        settle('push', `Both have blackjack. Push — your ${SR.fmt(totalBet)} points come back.`);
      } else if (playerBlackjack) {
        settle('blackjack', `Blackjack! You win +${SR.fmt(Math.round(totalBet * 1.5))} points.`);
      } else {
        settle('lose', `Dealer blackjack. You lost ${SR.fmt(totalBet)} points.`);
      }
      return;
    }

    playerTurn = true;
    busy = false;
    setStatus(`You have ${handValue(playerHand)}. Hit, stand or double.`);
    updateControls();
  }

  /* -------------------------------------------------------
     Player actions
     ------------------------------------------------------- */
  async function hit() {
    if (!playerTurn || busy) return;

    busy = true;
    playerTurn = false;
    playerHand.push(drawCard());
    renderHands({ player: [playerHand.length - 1] });
    updateControls();
    Sound.play('deal');

    await SR.sleep(320);

    const total = handValue(playerHand);

    if (total > 21) {
      busy = false;
      settle('lose', `Bust with ${total}. You lost ${SR.fmt(totalBet)} points.`);
      return;
    }

    if (total === 21) {
      busy = false;
      playerTurn = true;
      await stand();
      return;
    }

    busy = false;
    playerTurn = true;
    setStatus(`You have ${total}. Hit, stand or double.`);
    updateControls();
  }

  async function stand() {
    if (!playerTurn || busy) return;

    playerTurn = false;
    busy = true;
    holeHidden = false;
    renderHands();
    setStatus('Dealer reveals the hole card…');
    updateControls();
    Sound.play('deal');

    await SR.sleep(450);

    // Dealer draws until 17 or more. Stands on all 17s.
    while (handValue(dealerHand) < 17) {
      dealerHand.push(drawCard());
      renderHands({ dealer: [dealerHand.length - 1] });
      updateControls();
      Sound.play('deal');
      await SR.sleep(560);
    }

    const playerTotal = handValue(playerHand);
    const dealerTotal = handValue(dealerHand);

    if (dealerTotal > 21) {
      settle('win', `Dealer busts with ${dealerTotal}. You win +${SR.fmt(totalBet)} points.`);
    } else if (dealerTotal > playerTotal) {
      settle('lose', `Dealer has ${dealerTotal}. You have ${playerTotal}. You lost ${SR.fmt(totalBet)} points.`);
    } else if (dealerTotal < playerTotal) {
      settle('win', `You have ${playerTotal}. Dealer has ${dealerTotal}. You win +${SR.fmt(totalBet)} points.`);
    } else {
      settle('push', `Both have ${playerTotal}. Push — your ${SR.fmt(totalBet)} points come back.`);
    }
  }

  async function doubleDown() {
    if (!playerTurn || busy || playerHand.length !== 2) return;

    if (Points.getBalance() < totalBet) {
      Points.notify('Not enough points to double down.', 'red', '⚠️');
      Sound.play('error');
      return;
    }

    busy = true;
    playerTurn = false;
    updateControls();

    // Deduct the second half of the bet.
    if (!Points.startRound(totalBet)) {
      busy = false;
      playerTurn = true;
      updateControls();
      return;
    }

    totalBet *= 2;
    playerHand.push(drawCard());
    renderHands({ player: [playerHand.length - 1] });
    updateControls();
    Sound.play('deal');

    await SR.sleep(360);

    if (handValue(playerHand) > 21) {
      busy = false;
      settle('lose', `Double bust with ${handValue(playerHand)}. You lost ${SR.fmt(totalBet)} points.`);
      return;
    }

    busy = false;
    playerTurn = true;
    await stand();
  }

  /* -------------------------------------------------------
     Settlement
     ------------------------------------------------------- */
  function settle(result, message) {
    inRound = false;
    playerTurn = false;
    busy = false;
    holeHidden = false;
    renderHands();

    let payout = 0;
    let type = 'push';
    let sound = 'coin';

    if (result === 'blackjack') {
      payout = Math.round(totalBet * 2.5);
      type = 'win';
      sound = 'win';
    } else if (result === 'win') {
      payout = totalBet * 2;
      type = 'win';
      sound = 'win';
    } else if (result === 'push') {
      payout = totalBet;
      type = 'push';
      sound = 'coin';
    } else {
      payout = 0;
      type = 'loss';
      sound = 'lose';
    }

    Points.endRound(totalBet, payout);
    setStatus(message, type);
    Sound.play(sound);

    updateControls();
    setBet(betInput.value);
  }

  /* -------------------------------------------------------
     Buttons + sync
     ------------------------------------------------------- */
  dealButton.addEventListener('click', deal);
  hitButton.addEventListener('click', hit);
  standButton.addEventListener('click', stand);
  doubleButton.addEventListener('click', doubleDown);

  Points.subscribe(() => {
    if (!inRound && !busy) {
      setBet(betInput.value);
      updateControls();
    }
  });

  renderHands();
  setBet(25);
  updateControls();
});
````

## `js/aim.js`

````js
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
````

## `js/reaction.js`

````js
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
````

## `js/memory.js`

````js
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
````

## `js/cps.js`

````js
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
````

## `js/dice.js`

````js
/* =========================================================
   SPECTATOR ROOM — js/dice.js
   Two dice, three calls: under 7, exactly 7, or over 7.
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const MIN = 10;
  const MAX = Infinity;
  const PAYOUTS = { under: 2.3, seven: 5.8, over: 2.3 };
  const PIP_POSITIONS = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
  };

  const stage = document.getElementById('dice-stage');
  const dieA = document.getElementById('die-a');
  const dieB = document.getElementById('die-b');
  const totalElement = document.getElementById('dice-total');
  const rollButton = document.getElementById('dice-roll');
  const betInput = document.getElementById('dice-bet');
  const betChips = Array.from(document.querySelectorAll('[data-dice-bet]'));
  const choiceButtons = Array.from(document.querySelectorAll('[data-dice-choice]'));
  const resultElement = document.getElementById('dice-result');
  const lastElement = document.getElementById('dice-last');
  const streakElement = document.getElementById('dice-streak');
  const historyElement = document.getElementById('dice-history');

  if (!stage || !dieA || !dieB || !rollButton || !betInput) return;

  let choice = 'under';
  let rolling = false;
  let streak = 0;
  let history = [];

  /* -------------------------------------------------------
     Dice faces
     ------------------------------------------------------- */
  function renderDie(element, value) {
    const pips = PIP_POSITIONS[value] || PIP_POSITIONS[1];
    element.dataset.value = value;
    element.innerHTML = Array.from({ length: 9 }, (_, index) => (
      `<i class="${pips.includes(index) ? 'is-pip' : ''}"></i>`
    )).join('');
  }

  function rollFace() {
    return 1 + Math.floor(Points.random() * 6);
  }

  function updateHistory(sum) {
    history = [sum, ...history].slice(0, 6);
    historyElement.textContent = history.join(' · ');
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
      chip.classList.toggle('is-active', Number(chip.dataset.diceBet) === bet);
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

  function setControlsDisabled(disabled) {
    betInput.disabled = disabled;
    betChips.forEach((chip) => { chip.disabled = disabled; });
    choiceButtons.forEach((button) => { button.disabled = disabled; });
    rollButton.disabled = disabled;
  }

  /* -------------------------------------------------------
     Choice
     ------------------------------------------------------- */
  choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (rolling) return;
      choice = button.dataset.diceChoice;
      Sound.play('click');
      choiceButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      resultElement.className = 'dice-result';
      resultElement.textContent = `Call set: ${button.querySelector('span').textContent}. Set a bet and roll.`;
    });
  });

  /* -------------------------------------------------------
     Roll
     ------------------------------------------------------- */
  function roll() {
    if (rolling) return;

    const bet = readBet();
    if (bet === null) return;

    rolling = true;
    if (!Points.startRound(bet)) {
      rolling = false;
      return;
    }

    setControlsDisabled(true);
    stage.classList.remove('is-win', 'is-loss', 'is-rolling');
    void stage.offsetWidth;
    stage.classList.add('is-rolling');
    resultElement.className = 'dice-result';
    resultElement.textContent = 'Dice are in the air…';
    Sound.play('flip');

    const tumble = setInterval(() => {
      renderDie(dieA, rollFace());
      renderDie(dieB, rollFace());
      totalElement.textContent = '?';
    }, 85);

    setTimeout(() => {
      clearInterval(tumble);

      const a = rollFace();
      const b = rollFace();
      const sum = a + b;
      const won = choice === 'seven' ? sum === 7 : choice === 'under' ? sum < 7 : sum > 7;
      const multiplier = PAYOUTS[choice];
      const payout = won ? Math.round(bet * multiplier) : 0;

      renderDie(dieA, a);
      renderDie(dieB, b);
      totalElement.textContent = sum;
      stage.classList.remove('is-rolling');
      stage.classList.add(won ? 'is-win' : 'is-loss');

      Points.endRound(bet, payout);

      if (won) {
        streak += 1;
        if (choice === 'seven') Points.unlock('dice-seven');
        Sound.play('win');
      } else {
        streak = 0;
        Sound.play('lose');
      }

      resultElement.className = `dice-result ${won ? 'is-win' : 'is-loss'}`;
      resultElement.innerHTML = won
        ? `Rolled <strong>${sum}</strong>. Your <strong>${choice.toUpperCase()}</strong> call wins <strong>+${SR.fmt(payout - bet)}</strong> points.`
        : `Rolled <strong>${sum}</strong>. Your <strong>${choice.toUpperCase()}</strong> call loses <strong>${SR.fmt(bet)}</strong> points.`;

      lastElement.textContent = sum;
      streakElement.textContent = streak;
      updateHistory(sum);

      rolling = false;
      setControlsDisabled(false);
      setBet(bet);
    }, 900);
  }

  rollButton.addEventListener('click', roll);

  document.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || event.repeat) return;
    if (document.querySelector('dialog[open]')) return;
    const tag = document.activeElement ? document.activeElement.tagName : '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON' || tag === 'SELECT') return;
    event.preventDefault();
    roll();
  });

  betInput.addEventListener('change', () => setBet(betInput.value));
  betInput.addEventListener('blur', () => setBet(betInput.value));
  betInput.addEventListener('focus', () => betInput.select());

  betChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      Sound.play('click');
      const value = chip.dataset.diceBet === 'max'
        ? Math.min(MAX, Points.getBalance())
        : chip.dataset.diceBet;
      setBet(value);
    });
  });

  Points.subscribe(() => {
    if (rolling) return;
    setBet(betInput.value);
  });

  renderDie(dieA, 3);
  renderDie(dieB, 4);
  setBet(25);
});
````

## `js/mines.js`

````js
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
````

## `js/whack.js`

````js
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
````

## `js/simon.js`

````js
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
````

## `assets/favicon.svg`

````svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#07080d"/>
  <g fill="none" stroke="#ff3b4e" stroke-width="2" stroke-linejoin="round">
    <path d="M16 3 29 16 16 29 3 16Z"/>
    <path d="M16 9v14M9 16h14" stroke-linecap="round"/>
  </g>
</svg>
````

## `README.md`

````md
# Spectator Room

A play-money arcade for the respawn timer. Twelve games, one shared balance, no real gambling.

Built with plain HTML, CSS and vanilla JavaScript. No build step, no backend, no external APIs, no image or audio files.

## Run it locally

The easiest way:

1. Open this folder.
2. Double-click `index.html`.

Everything except a few browser niceties works straight from `file://`. For the most accurate result (and to match Vercel), serve the folder over HTTP:

```powershell
# From this folder, with Python installed:
python -m http.server 8080
```

Then open <http://localhost:8080>.

You can also use the VS Code "Live Server" extension, or any static file server.

## Deploy to Vercel

No configuration is needed:

1. Put this folder in a Git repository (GitHub, GitLab or Bitbucket).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the framework preset as **Other** and leave the build command empty.
4. Deploy.

Because `index.html` is at the root, Vercel serves it as the homepage automatically. All links are relative, so the game pages work without a `vercel.json`.

## Files

```text
Spectator Room/
├─ index.html          Homepage and game grid
├─ slots.html          Slot machine
├─ coinflip.html       Coin Flip
├─ crash.html          Crash
├─ blackjack.html      Blackjack
├─ aim.html            Aim Trainer
├─ reaction.html       Reaction Timer
├─ memory.html         Memory Match
├─ cps.html            Click Speed Test
├─ dice.html           Dice Duel
├─ mines.html          Mines
├─ whack.html          Whack-a-Mole
├─ simon.html          Simon Says
├─ css/
│  └─ style.css        All styling, responsive rules, light theme and animations
├─ js/
│  ├─ points.js        Shared balance, storage, sound, theme, header/footer, achievements
│  ├─ theme.js         Applies a saved light theme before first paint
│  ├─ slots.js
│  ├─ coinflip.js
│  ├─ crash.js
│  ├─ blackjack.js
│  ├─ aim.js
│  ├─ reaction.js
│  ├─ memory.js
│  ├─ cps.js
│  ├─ dice.js
│  ├─ mines.js
│  ├─ whack.js
│  └─ simon.js
├─ assets/             Optional (currently empty)
└─ README.md
```

## How the shared points system works

Every page loads `js/points.js` first, then its own game file.

`points.js` exposes three globals:

- `Points` — balance, bets, payouts, stats, achievements, jackpot, daily bonus.
- `Sound` — small synthesized sound effects (`Sound.play('win')`, etc.).
- `SR` — helpers such as `fmt`, `clamp`, `random`, `shuffle`, `sleep` and `countUp`.

A typical betting round looks like this:

```js
// Take the stake out of the balance first.
if (!Points.startRound(bet)) return;

const won = /* resolve the game somehow */;
const payout = won ? bet * 2 : 0;

// Add the payout back (0 for a loss). This also counts the round.
Points.endRound(bet, payout);
```

Skill games that do not take a stake call `Points.endRound(0, reward)`.

The balance, jackpot, mute setting, theme, achievements and personal bests are saved in `localStorage` under `spectator-room-state-v1`.

## Light theme

Open the settings dialog (the gear in the header) and press **Light mode**. The choice is saved with the rest of the player state, survives a refresh, and applies to every page. `js/theme.js` runs in the `<head>` so a saved light theme is applied before the first paint; `points.js` keeps it in sync after that. The theme also follows the player across tabs via the `storage` event.

## Credits

The homepage ends with a credits section. It currently credits **Spectator Room** for design and code, lists the plain HTML/CSS/JS stack and the Web Audio sound design, and thanks everyone who queues “one more round”. Edit the `.credits` block in `index.html` to personalise it.

## Add a new game

1. **Create the page.** Copy a small game page such as `reaction.html` to `mygame.html` and update the `<title>`, the page heading and the `<body data-page="...">` value. Keep the empty header and footer shells and the two script tags at the bottom:

   ```html
   <header id="site-header"></header>
   ...
   <footer id="site-footer"></footer>

   <script src="js/points.js"></script>
   <script src="js/mygame.js"></script>
   ```

2. **Create `js/mygame.js`.** Use the `Points`, `Sound` and `SR` globals. Wire your buttons with `addEventListener`, and call `Points.startRound` / `Points.endRound` around each round. Give the game a personal best with `Points.recordBest('bestCps', value)` if it has a score.

3. **Add it to the shared header.** In `js/points.js`, add one entry to `GAME_LINKS` (it currently lists all twelve games):

   ```js
   { href: 'mygame.html', name: 'My Game' }
   ```

   The header, mobile nav and the "random game" button all read from that list.

4. **Add a card on the homepage.** In `index.html`, copy an existing `<a class="game-card">` block inside the game grid and point it at `mygame.html`. Give it a number, an icon and a one-line description.

5. **Add styles.** Put game-specific CSS near the other game sections in `css/style.css`. Reuse the existing variables (`--red`, `--gold`, `--green`, `--panel`, etc.) so the new page matches the rest of the site. If the game has custom stage colours, add `html[data-theme="light"]` overrides in section 30 of the stylesheet so it also reads correctly in the light theme.

6. **Test it.** Open the page, play a round, refresh, and check that the header balance and the homepage stats change. Then test at a narrow window width.

## Adding an achievement

Add an entry to `ACHIEVEMENTS` in `js/points.js`, then call `Points.unlock('your-id')` when the player earns it. The settings dialog lists achievements automatically.

## Notes on fairness

- The slots and crash games have a deliberate house edge so the shared economy stays balanced. Every payout is shown in the UI.
- Coin Flip and Blackjack use standard fair rules (coin flip has no house edge).
- Dice Duel pays 2.3× on under/over and 5.8× on exactly seven, which gives it a small house edge.
- Mines uses the real survival odds with a small house edge and a 250× cash-out cap.
- Skill games (Aim Trainer, Reaction Timer, Memory Match, Click Speed Test, Whack-a-Mole, Simon Says) pay based on performance, not chance.
- Everything is play money. There is no purchase, cash-out or real-world value.

## Reset progress

Open the settings button (the gear in the header) and use **Reset progress**. This clears the balance, stats, achievements, personal bests and the jackpot, and restores the starting 1,000 points. Mute preference and theme are kept.
````

