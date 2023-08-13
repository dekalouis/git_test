console.log("HELLO MA G");

let playerScore = 0;
let computerScore = 0;
// first get the computer to send a random choice between rock, paper and scissors
// 1. make a function that calls a random number between 1-3
// make the output provide from an array of rock/paper/scis

function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}

// second make a function that plays a single round
// takes 2 inputs, player option and computer option
// make player input insensitive
// output needs to be returned

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore++;
    return "You Win! Rock beats Scissor!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissor!";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Scissor beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    return "You Lose! Scissor beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === computerSelection) {
    return "Draw!";
  } else {
    return "Undefined!";
  }
}

//finally make a game roudn that does 5 plays

function game() {
  if (playerScore === 0 && computerScore === 0) {
    let playerSelection = prompt("what is your input?").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("what is your input?").toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("what is your input?").toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("what is your input?").toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("what is your input?").toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    if (playerScore > computerScore && computerScore != playerScore) {
      console.log("You won the most points! Game over!");
    } else if (computerScore > playerScore && computerScore != playerScore) {
      console.log("Computer won the most points! You lose!");
    } else if (computerScore === playerScore) {
      console.log("All draw! Try again");
    }
  }
}

game();
