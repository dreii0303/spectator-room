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
