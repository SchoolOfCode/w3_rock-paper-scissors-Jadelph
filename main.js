//Set up for use of DOM in the JS File - "reference point"
let computerScore = 0;
let playerScore = 0;
let resultAnnouncement = document.querySelector(".announce-winner > p"); // needs the p tag otherwise it will not work as it is inside a paragraph  
let playerScoreSpan = document.getElementById("player-score");
let computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector("score-board");
const rockMove = document.getElementById("rock"); //clicking on the rock sometimes needs more than one click
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
//increase player score or computer score depending on function- not working properly for playerScore
// create announcement of player + computer choice accross all functions 
function winner(playerMove, computerChoice) { //parameter code is unreachable until used in function 
    playerScore++;
    playerScoreSpan.innerHTML = playerScore; //this is not consistenly working unsure why
    computerScoreSpan.innerHTML = computerScore;
    resultAnnouncement.innerHTML = playerMove + " beats " + computerChoice + " you WIN!!🥳";
}

function loser(playerMove, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    playerScoreSpan.innerHTML = playerScore;
    resultAnnouncement.innerHTML = computerChoice + " beats " + playerMove + " you lose ";
}

function tie(playerMove, computerChoice) {
    playerScoreSpan = innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    resultAnnouncement.innerHTML = "Computer also chose " + playerMove + " Its a draw!";
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
    //originally used if statements but this was an easier way to execute.
    switch (playerMove + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorspaper":
            //change console log "you win" to call the win function 
            winner(playerMove, computerChoice);
            break; //stops the switch statement from continuing to run
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            // change console log to call the lose function 
            //lose(playerMove, computerChoice)
            loser(playerMove, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(playerMove, computerChoice);
            break;

    }


}

// funtion for when the png are clicked 
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