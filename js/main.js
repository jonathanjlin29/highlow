console.log('activate framework!');

var deck = [  {rank: "A", suit: "♣", color: "black", value: 1},
              {rank: "2", suit: "♣", color: "black", value: 2},
              {rank: "3", suit: "♣", color: "black", value: 3},
              {rank: "4", suit: "♣", color: "black", value: 4},
              {rank: "5", suit: "♣", color: "black", value: 5},
              {rank: "6", suit: "♣", color: "black", value: 6},
              {rank: "7", suit: "♣", color: "black", value: 7},
              {rank: "8", suit: "♣", color: "black", value: 8},
              {rank: "9", suit: "♣", color: "black", value: 9},
              {rank: "10", suit: "♣", color: "black", value: 10},
              {rank: "J", suit: "♣", color: "black", value: 11},
              {rank: "Q", suit: "♣", color: "black", value: 12},
              {rank: "K", suit: "♣", color: "black", value: 13},
              {rank: "A", suit: "♠", color: "black", value: 1},
              {rank: "2", suit: "♠", color: "black", value: 2},
              {rank: "3", suit: "♠", color: "black", value: 3},
              {rank: "4", suit: "♠", color: "black", value: 4},
              {rank: "5", suit: "♠", color: "black", value: 5},
              {rank: "6", suit: "♠", color: "black", value: 6},
              {rank: "7", suit: "♠", color: "black", value: 7},
              {rank: "8", suit: "♠", color: "black", value: 8},
              {rank: "9", suit: "♠", color: "black", value: 9},
              {rank: "10", suit: "♠", color: "black", value: 10},
              {rank: "J", suit: "♠", color: "black", value: 11},
              {rank: "Q", suit: "♠", color: "black", value: 12},
              {rank: "K", suit: "♠", color: "black", value: 13},
              {rank: "A", suit: "♥", color: "red", value: 1},
              {rank: "2", suit: "♥", color: "red", value: 2},
              {rank: "3", suit: "♥", color: "red", value: 3},
              {rank: "4", suit: "♥", color: "red", value: 4},
              {rank: "5", suit: "♥", color: "red", value: 5},
              {rank: "6", suit: "♥", color: "red", value: 6},
              {rank: "7", suit: "♥", color: "red", value: 7},
              {rank: "8", suit: "♥", color: "red", value: 8},
              {rank: "9", suit: "♥", color: "red", value: 9},
              {rank: "10", suit: "♥", color: "red", value: 10},
              {rank: "J", suit: "♥", color: "red", value: 11},
              {rank: "Q", suit: "♥", color: "red", value: 12},
              {rank: "K", suit: "♥", color: "red", value: 13},
              {rank: "A", suit: "♦", color: "red", value: 1},
              {rank: "2", suit: "♦", color: "red", value: 2},
              {rank: "3", suit: "♦", color: "red", value: 3},
              {rank: "4", suit: "♦", color: "red", value: 4},
              {rank: "5", suit: "♦", color: "red", value: 5},
              {rank: "6", suit: "♦", color: "red", value: 6},
              {rank: "7", suit: "♦", color: "red", value: 7},
              {rank: "8", suit: "♦", color: "red", value: 8},
              {rank: "9", suit: "♦", color: "red", value: 9},
              {rank: "10", suit: "♦", color: "red", value: 10},
              {rank: "J", suit: "♦", color: "red", value: 11},
              {rank: "Q", suit: "♦", color: "red", value: 12},
              {rank: "K", suit: "♦", color: "red", value: 13} ];


var shuffledDeck = new Array(deck.length);

var random = 0;

for (var i = 0; i < shuffledDeck.length; i++) {
  random = Math.random()*deck.length;
  shuffledDeck[i] = deck.splice(random,1)[0];
}

var upcomingCard;
var currentCard = [];

// Pushes last card from shuffledDeck array to currentCard. Displays currentCard
var dealCard = function() {
  currentCard.push(shuffledDeck.pop());
  console.log("Current card: " + currentCard[0].rank + "" + currentCard[0].suit);
  upcomingCard = shuffledDeck[shuffledDeck.length - 1];
  console.log("Upcoming card: " + upcomingCard.rank + upcomingCard.suit);
  console.log(shuffledDeck.length);
  $('#card').html(currentCard[0].rank + " " + currentCard[0].suit);
}

var cardStack = [];

var boardStack = $('.cards');

//pushes the currentCard to the cardStack. Displays stack on the board
var buildCardStack = function() {
  cardStack.push(currentCard.pop());
  console.log(cardStack);
  for (var i = 0; i < 52; i++) {
    if (boardStack.eq(i).html() === "") {
      boardStack.eq(i).html(cardStack[i].rank + cardStack[i].suit);
      return;
    }
  }
}

//takes entire cardStack and adds it to player's
var buildPlayerStack = function(player) {
  if (player === "one") {

  }
}

$('#dealButton').on("click", dealCard);

$('#high').on("click", function() {
  if (upcomingCard.value >= currentCard[0].value) {
    alert("Cards tie! " + upcomingCard.rank + upcomingCard.suit + " is greater than / equal to " + currentCard[0].rank + currentCard[0].suit + ". Keep going!");
    buildCardStack();
    dealCard();
  } else {
    //wrong choice
  }
})

$('#low').on("click", function() {
  if (upcomingCard.value <= currentCard[0].value) {
    alert("Correct! " + upcomingCard.rank + upcomingCard.suit + " is lower than / equal to " + currentCard[0].rank + currentCard[0].suit + ". Keep going!");
    buildCardStack();
    dealCard();
  } else {
    //wrong choice
  }
})







