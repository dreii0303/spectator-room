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
