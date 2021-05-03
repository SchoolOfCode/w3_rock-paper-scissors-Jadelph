//Set up for use of DOM in the JS File - "reference point"
const computerScore = 0;
const playerScore = 0;
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', function() {
    console.log("You chose Rock 🤘");
})

paper.addEventListener('click', function() {
    console.log("You chose Paper 📰");
})

scissors.addEventListener('click', function() {
    console.log("You chose Scissors ✂️");
})