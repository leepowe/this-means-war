import Deck from "./deck.js";

const computerCardSlot = document.querySelector('.computer-card-slot');
const playerCardSlot = document.querySelector('.player-card-slot');
const computerDeckElement = document.querySelector('.computer-deck');
const playerDeckElement = document.querySelector('.player-deck');
const text = document.querySelector('.text');

let playerDeck, computerDeck;

startGame();

function startGame(){
    const deck = new Deck();
    const deckMidPoint = Math.ceil(deck.numberOfCards / 2);
    deck.shuffle();

    playerDeck = new Deck(deck.cards.slice(0, deckMidPoint));
    computerDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards));

    cleanBeforeRound();
}

function cleanBeforeRound(){
    computerCardSlot.innerHTML = ""
    playerCardSlot.innerHTML = ""
    text.innerText = ""

    updateDeckCount();
}

function updateDeckCount(){
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards
}