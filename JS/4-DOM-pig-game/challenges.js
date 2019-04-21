/*
3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, lastDice;
init();

//anonymous function
document.querySelector(".btn-roll").addEventListener("click", function() {
  //https://developer.mozilla.org/en-US/docs/Web/Events

  if (gamePlaying) {
    //1. Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceEl1 = document.getElementById("dice-0");
    var diceEl2 = document.getElementById("dice-1");

    diceEl1.style.display = "block";
    diceEl2.style.display = "block";

    diceEl1.src = "dice-" + dice1 + ".png";
    diceEl2.src = "dice-" + dice2 + ".png";

    //3. Update the round score if the rolled number was not a 1
    if (dice1 !== 1 && dice2 !== 1) {
      // add score
      roundScore += dice1 + dice2;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
      //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
    } else {
      // next player
      nextPlayer();
    }
    /*
        if (dice === 6 && lastDice === 6) {
            //Player looses score
            scores[activePlayer] = 0;
            document.getElementById("score-" + activePlayer).textContent =
            scores[activePlayer];
            nextPlayer();
        } else if (dice !== 1) {
        // add score
        roundScore += dice;
        document.getElementById(
            "current-" + activePlayer
        ).textContent = roundScore;
        //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
        } else {
        // next player
        nextPlayer();
        }
        lastDice = dice;
    */
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore;

    // update the UI
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    var winningScore;

    var input = document.querySelector(".final-score").value;
    // type coercion: undefined, null, 0 or '' are coerced to false
    // anything else coerced to true
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    //check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document.getElementById("dice-0").style.display = "none";
      document.getElementById("dice-1").style.display = "none";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});
// init() - сразу вызовет функцию, поэтому указывается init
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  gamePlaying = true;

  document.getElementById("dice-0").style.display = "none";
  document.getElementById("dice-1").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.getElementById("dice-0").style.display = "none";
  document.getElementById("dice-1").style.display = "none";
}
//var x = document.querySelector('#score-'+activePlayer).textContent;
// console.log(x);
