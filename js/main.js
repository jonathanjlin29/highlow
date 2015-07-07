console.log('activate framework!');

var deck = [ {card: "A", suit: "♣", value: 1},
              {card: "2", suit: "♣", value: 2},
              {card: "3", suit: "♣", value: 3},
              {card: "4", suit: "♣", value: 4},
              {card: "5", suit: "♣", value: 5},
              {card: "6", suit: "♣", value: 6},
              {card: "7", suit: "♣", value: 7},
              {card: "8", suit: "♣", value: 8},
              {card: "9", suit: "♣", value: 9},
              {card: "10", suit: "♣", value: 10},
              {card: "J", suit: "♣", value: 11},
              {card: "Q", suit: "♣", value: 12},
              {card: "K", suit: "♣", value: 13},
              {card: "A", suit: "♠", value: 1},
              {card: "2", suit: "♠", value: 2},
              {card: "3", suit: "♠", value: 3},
              {card: "4", suit: "♠", value: 4},
              {card: "5", suit: "♠", value: 5},
              {card: "6", suit: "♠", value: 6},
              {card: "7", suit: "♠", value: 7},
              {card: "8", suit: "♠", value: 8},
              {card: "9", suit: "♠", value: 9},
              {card: "10", suit: "♠", value: 10},
              {card: "J", suit: "♠", value: 11},
              {card: "Q", suit: "♠", value: 12},
              {card: "K", suit: "♠", value: 13},
              {card: "A", suit: "♥", value: 1},
              {card: "2", suit: "♥", value: 2},
              {card: "3", suit: "♥", value: 3},
              {card: "4", suit: "♥", value: 4},
              {card: "5", suit: "♥", value: 5},
              {card: "6", suit: "♥", value: 6},
              {card: "7", suit: "♥", value: 7},
              {card: "8", suit: "♥", value: 8},
              {card: "9", suit: "♥", value: 9},
              {card: "10", suit: "♥", value: 10},
              {card: "J", suit: "♥", value: 11},
              {card: "Q", suit: "♥", value: 12},
              {card: "K", suit: "♥", value: 13},
              {card: "A", suit: "♦", value: 1},
              {card: "2", suit: "♦", value: 2},
              {card: "3", suit: "♦", value: 3},
              {card: "4", suit: "♦", value: 4},
              {card: "5", suit: "♦", value: 5},
              {card: "6", suit: "♦", value: 6},
              {card: "7", suit: "♦", value: 7},
              {card: "8", suit: "♦", value: 8},
              {card: "9", suit: "♦", value: 9},
              {card: "10", suit: "♦", value: 10},
              {card: "J", suit: "♦", value: 11},
              {card: "Q", suit: "♦", value: 12},
              {card: "K", suit: "♦", value: 13} ];


var shuffledDeck = new Array(deck.length);

var random = 0;

for (var i = 0; i < shuffledDeck.length; i++) {
  random = Math.random()*deck.length;
  shuffledDeck[i] = deck.splice(random,1)[0];
}

var upcomingCard;
var currentCard = [];

var dealCard = function() {
  currentCard = shuffledDeck.pop();
  console.log("Current card: " + currentCard.card + "" + currentCard.suit);
  upcomingCard = shuffledDeck[shuffledDeck.length - 1];
  console.log("Upcoming card: " + upcomingCard.card + upcomingCard.suit);
  console.log(shuffledDeck.length);
  $('#card').html(currentCard.card + " " + currentCard.suit);

}

var cardStack = [];

var buildCardStack = function() {
  cardStack = currentCard.pop();
  console.log(cardStack.card);
}

$('#dealButton').on("click", dealCard);
$('#high').on("click", function() {
  if (upcomingCard.value >= currentCard.value) {
    alert("Cards tie! " + upcomingCard.card + upcomingCard.suit + " is greater than / equal to " + currentCard.card + currentCard.suit + ". Keep going!");
    buildCardStack();
    dealCard();
    //stack cards
  } else {
    //wrong choice
  }
})

$('#low').on("click", function() {
  if (upcomingCard.value <= currentCard.value) {
    alert("Correct! " + upcomingCard.card + upcomingCard.suit + " is lower than / equal to " + currentCard.card + currentCard.suit + ". Keep going!");
    dealCard();
  }
})








