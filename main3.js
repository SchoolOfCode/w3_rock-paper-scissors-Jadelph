/*To complete this ticket you will need to write a set of if statements in 
[main.js](main.js) that will determine the winner of rock, paper, scissors.

We will hard-code each move in variables so that we can check our game logic,
 but will later delete these and instead use function parameters.
 
 Possible combinations for the game 

**Computer rock combinations ** 

 // IF COMPUTER ROCK && PLAYER SCISSOR === COMPUTER WINS

//IF COMPUTER ROCK && PLAYER  PAPER === PLAYER WINS

// IF COMPUTER ROCK && PLAYER ROCK === DRAW 

**Computer scissors combinations** 

//IF COMPUTER SCISSOR && PLAYER ROCK === COMPUTER WINS

//IF COMPUTER SCISSOR &&PLAYER PAPER === PLAYER WINS

// IF COMPUTER SCISSOR && PLAYER SCISSOR === DRAW

***Computer Paper Combinations***


//IF COMPUTER PAPER && PLAYER SCISSOR === PLAYER WINS 

// IF COMPUTER PAPER&& PLAYER ROCK === COMPUTER WINS

// IF COMPUTER PAPER&& PLAYER PAPER === DRAW


IF STATEMENTS */

/*Take the if statements that you've written and tested and put them into a function. The variables from before should now be taken in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function should return:

- `1` if player1 wins
- `0` if it is a draw
- `-1` if player1 loses (player2 wins)

The function should be able to be used like so:

```js
function getWinner(player1, player2) {
  // code goes here...
}

let result = getWinner("rock", "paper");
```

This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate number.
*/

function getWinner() {

    if (cChoice === "rock" && pChoice === "paper") {
        console.log("You win!")
    }



    if (cChoice === "rock" && pChoice === "scissors") {
        console.log("Computer Wins!")
    }


    if (cChoice === "rock" && pChoice === "rock") {
        console.log("Its a draw")

    }

    if (cChoice === "paper" && pChoice === "paper") {
        console.log("Its a Draw")

    }
    if (cChoice === "paper" && pChoice === "rock") {
        console.log("Computer Wins!")

    }
    if (cChoice === "paper" && pChoice === "scissors") {
        console.log("You Win!")

    }
    if (cChoice === "scissors" && pChoice === "scissors") {
        console.log("ITS A DRAW")

    }
    if (cChoice === "scissors" && pChoice === "paper") {
        console.log("Computer Wins!")

    }
    if (cChoice === "scissors" && pChoice === "rock") {
        console.log("You Win!")

    }
}