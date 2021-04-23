let startGame = confirm("Would you like to play Rock, Paper, Scissors")

let pScore = 0;
let cScore = 0;

let pWins = 0;
let cWins = 0;

let pLose = 0;
let cLose = 0;

let pDraw = 0;
let cDraw = 0;

let i;
let totalGames = 0;

cMoveArray = ["rock", "paper", "scissors"];
if (startGame == true) {
    alert("Lets gooo🎉 ");

    pChoice = prompt("Please enter your choice rock, paper, scissors");



    //p stands for player
    // c stands for computer 



} else if (startGame == false) {
    alert("Nevermind Come back soon");
}






function cMoveGenerate(i) {
    i = Math.floor(Math.random() * 3);
    cChoice = cMoveArray[i];
    return cChoice;
}

cMoveGenerate(i);



function pWin() {
    pScore = 1;
    cScore = 0;
    pWins++;
    cLose++;
    totalGames++;
}
pWin();
console.log(pScore + cScore)

function cWin() {
    cScore = 1;
    pScore = 0;
    cWins++;
    pLose++;
    totalGames++;
}
cWin()
console.log(pScore + cScore)


function draw() {
    pDraw++;
    cDraw++;
}
draw()
console.log(pScore + cScore)



if (cChoice === "rock" && pChoice === "paper") {
    pWin();
    console.log("You Win!");

}
if (cChoice === "rock" && pChoice === "scissors") {
    cWin();
    console.log("Computer Wins!")

}
if (cChoice === "rock" && pChoice === "rock") {
    draw();
    console.log("ITS A DRAW")

}

if (cChoice === "paper" && pChoice === "paper") {
    draw();
    console.log("ITS A DRAW")

}
if (cChoice === "paper" && pChoice === "rock") {
    cWin();
    console.log("Computer Wins!")

}
if (cChoice === "paper" && pChoice === "scissors") {
    pWin();
    console.log("You Win!")

}
if (cChoice === "scissors" && pChoice === "scissors") {
    draw();
    console.log("ITS A DRAW")

}
if (cChoice === "scissors" && pChoice === "paper") {
    cWin();
    console.log("Computer Wins!")

}
if (cChoice === "scissors" && pChoice === "rock") {
    pWin();
    console.log("You Win!")

}