  console.log('activate framework!');

var cards = [ {card: "A", suit: "Clubs", value: 1},
              {card: "2", suit: "Clubs", value: 2},
              {card: "3", suit: "Clubs", value: 3},
              {card: "4", suit: "Clubs", value: 4},
              {card: "5", suit: "Clubs", value: 5},
              {card: "6", suit: "Clubs", value: 6},
              {card: "7", suit: "Clubs", value: 7},
              {card: "8", suit: "Clubs", value: 8},
              {card: "9", suit: "Clubs", value: 9},
              {card: "10", suit: "Clubs", value: 10},
              {card: "J", suit: "Clubs", value: 11},
              {card: "Q", suit: "Clubs", value: 12},
              {card: "K", suit: "Clubs", value: 13},
              {card: "A", suit: "Spades", value: 1},
              {card: "2", suit: "Spades", value: 2},
              {card: "3", suit: "Spades", value: 3},
              {card: "4", suit: "Spades", value: 4},
              {card: "5", suit: "Spades", value: 5},
              {card: "6", suit: "Spades", value: 6},
              {card: "7", suit: "Spades", value: 7},
              {card: "8", suit: "Spades", value: 8},
              {card: "9", suit: "Spades", value: 9},
              {card: "10", suit: "Spades", value: 10},
              {card: "J", suit: "Spades", value: 11},
              {card: "Q", suit: "Spades", value: 12},
              {card: "K", suit: "Spades", value: 13},
              {card: "A", suit: "Hearts", value: 1},
              {card: "2", suit: "Hearts", value: 2},
              {card: "3", suit: "Hearts", value: 3},
              {card: "4", suit: "Hearts", value: 4},
              {card: "5", suit: "Hearts", value: 5},
              {card: "6", suit: "Hearts", value: 6},
              {card: "7", suit: "Hearts", value: 7},
              {card: "8", suit: "Hearts", value: 8},
              {card: "9", suit: "Hearts", value: 9},
              {card: "10", suit: "Hearts", value: 10},
              {card: "J", suit: "Hearts", value: 11},
              {card: "Q", suit: "Hearts", value: 12},
              {card: "K", suit: "Hearts", value: 13},
              {card: "A", suit: "Diamonds", value: 1},
              {card: "2", suit: "Diamonds", value: 2},
              {card: "3", suit: "Diamonds", value: 3},
              {card: "4", suit: "Diamonds", value: 4},
              {card: "5", suit: "Diamonds", value: 5},
              {card: "6", suit: "Diamonds", value: 6},
              {card: "7", suit: "Diamonds", value: 7},
              {card: "8", suit: "Diamonds", value: 8},
              {card: "9", suit: "Diamonds", value: 9},
              {card: "10", suit: "Diamonds", value: 10},
              {card: "J", suit: "Diamonds", value: 11},
              {card: "Q", suit: "Diamonds", value: 12},
              {card: "K", suit: "Diamonds", value: 13} ];


var shuffledDeck = new Array(cards.length);

var random = 0;
for (var i = 0; i < shuffledDeck.length; i++) {
  random = Math.floor(Math.random()*cards.length);
  shuffledDeck[i] = cards.splice(random, 1);
}

console.log(shuffledDeck.length);

