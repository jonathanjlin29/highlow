console.log('activate framework!');

var deck = [  {rank: "A", suit: "♣", value: 1},
              {rank: "2", suit: "♣", value: 2},
              {rank: "3", suit: "♣", value: 3},
              {rank: "4", suit: "♣", value: 4},
              {rank: "5", suit: "♣", value: 5},
              {rank: "6", suit: "♣", value: 6},
              {rank: "7", suit: "♣", value: 7},
              {rank: "8", suit: "♣", value: 8},
              {rank: "9", suit: "♣", value: 9},
              {rank: "10", suit: "♣", value: 10},
              {rank: "J", suit: "♣", value: 11},
              {rank: "Q", suit: "♣", value: 12},
              {rank: "K", suit: "♣", value: 13},
              {rank: "A", suit: "♠", value: 1},
              {rank: "2", suit: "♠", value: 2},
              {rank: "3", suit: "♠", value: 3},
              {rank: "4", suit: "♠", value: 4},
              {rank: "5", suit: "♠", value: 5},
              {rank: "6", suit: "♠", value: 6},
              {rank: "7", suit: "♠", value: 7},
              {rank: "8", suit: "♠", value: 8},
              {rank: "9", suit: "♠", value: 9},
              {rank: "10", suit: "♠", value: 10},
              {rank: "J", suit: "♠", value: 11},
              {rank: "Q", suit: "♠", value: 12},
              {rank: "K", suit: "♠", value: 13},
              {rank: "A", suit: "♥", value: 1},
              {rank: "2", suit: "♥", value: 2},
              {rank: "3", suit: "♥", value: 3},
              {rank: "4", suit: "♥", value: 4},
              {rank: "5", suit: "♥", value: 5},
              {rank: "6", suit: "♥", value: 6},
              {rank: "7", suit: "♥", value: 7},
              {rank: "8", suit: "♥", value: 8},
              {rank: "9", suit: "♥", value: 9},
              {rank: "10", suit: "♥", value: 10},
              {rank: "J", suit: "♥", value: 11},
              {rank: "Q", suit: "♥", value: 12},
              {rank: "K", suit: "♥", value: 13},
              {rank: "A", suit: "♦", value: 1},
              {rank: "2", suit: "♦", value: 2},
              {rank: "3", suit: "♦", value: 3},
              {rank: "4", suit: "♦", value: 4},
              {rank: "5", suit: "♦", value: 5},
              {rank: "6", suit: "♦", value: 6},
              {rank: "7", suit: "♦", value: 7},
              {rank: "8", suit: "♦", value: 8},
              {rank: "9", suit: "♦", value: 9},
              {rank: "10", suit: "♦", value: 10},
              {rank: "J", suit: "♦", value: 11},
              {rank: "Q", suit: "♦", value: 12},
              {rank: "K", suit: "♦", value: 13} ];


var shuffledDeck = new Array(deck.length);

var random = 0;

for (var i = 0; i < shuffledDeck.length; i++) {
  random = Math.random()*deck.length;
  shuffledDeck[i] = deck.splice(random,1)[0];
}

var upcomingCard;
var currentCard;

var dealCard = function() {
  currentCard = shuffledDeck.pop();
  console.log("Current card: " + currentCard.rank + "" + currentCard.suit);
  upcomingCard = shuffledDeck[shuffledDeck.length - 1];
  console.log("Upcoming card: " + upcomingCard.rank + upcomingCard.suit);
  console.log(shuffledDeck.length);
  $('#card').html(currentCard.rank + " " + currentCard.suit);

}

var cardStack = [];

var boardStack = $('.cards');

var buildCardStack = function() {
  cardStack.push(currentCard);
  console.log(cardStack);
  for (var i = 0; i < 52; i++) {
    if (boardStack.eq(i).html() === "") {
      boardStack.eq(i).html(cardStack[i].rank + cardStack[i].suit);
    }

  }
}

$('#dealButton').on("click", dealCard);
$('#high').on("click", function() {
  if (upcomingCard.value >= currentCard.value) {
    alert("Cards tie! " + upcomingCard.rank + upcomingCard.suit + " is greater than / equal to " + currentCard.rank + currentCard.suit + ". Keep going!");
    buildCardStack();
    dealCard();
    //stack cards
  } else {
    //wrong choice
  }
})

$('#low').on("click", function() {
  if (upcomingCard.value <= currentCard.value) {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is lower than / equal to " + currentCard.rank + currentCard.suit + ". Keep going!");
    dealCard();
  }
})








