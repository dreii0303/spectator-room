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
