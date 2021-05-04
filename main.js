//Set up for use of DOM in the JS File - "reference point"
const computerScore = 0;
const playerScore = 0;
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const rockMove = document.getElementById("rock");
const paperMove = document.getElementById("paper");
const scissorsMove = document.getElementById("scissors");

//create the function to generate a computer move at random 
// use Math.random to generate computer more
//return move from array + assign it as the computer move 
function generateComputerMove() {
    const arrayOfChoices = ["rock", "paper", "scissors"];
    const computerMove = Math.floor(Math.random() * 3);
    return arrayOfChoices[computerMove];
}

// IF COMPUTER ROCK && PLAYER SCISSOR === COMPUTER WINS
//IF COMPUTER ROCK && PLAYER  PAPER === PLAYER WINS
// IF COMPUTER ROCK && PLAYER ROCK === DRAW 
//Computer scissors combinations **
//IF COMPUTER SCISSOR && PLAYER ROCK === COMPUTER WINS
//IF COMPUTER SCISSOR &&PLAYER PAPER === PLAYER WINS
// IF COMPUTER SCISSOR && PLAYER SCISSOR === DRAW
//Computer Paper Combinations ** *
//IF COMPUTER PAPER && PLAYER SCISSOR === PLAYER WINS 
// IF COMPUTER PAPER&& PLAYER ROCK === COMPUTER WINS
//IF COMPUTER PAPER && PLAYER PAPER === DRAW



function gamePlay(playerMove) {
    const computerChoice = generateComputerMove();
    //learnt the use of switch statements via tutorial - used to execute one of many blocks of code to be used. 
    //switch expression is evaluated once and then compared against the "case" for a match then code can be executed. 
    switch (playerMove + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorspaper":
            console.log("You win ! 🥳");
            break; //stops the switch statement from continuing to run
        case "rockpaper":
        case "paperscissor":
        case "scissorsrock":
            console.log("You lose, better luck next time")
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("Its a TIE!")
            break;

    }


}


function optionClicked() {
    rockMove.addEventListener('click', function() {
        gamePlay("rock");
    })

    paperMove.addEventListener('click', function() {

        gamePlay("paper");
    })

    scissorsMove.addEventListener('click', function() {
        gamePlay("scissors");
    })
}
optionClicked() //calling function