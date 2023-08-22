console.log("HELLO MA G");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let computerSelection = choices[Math.floor(Math.random() * 3)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore++;
    updateScore();
    return "You Win! Rock beats Scissor!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    updateScore();
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    updateScore();
    return "You Lose! Rock beats Scissor!";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++;
    updateScore();
    return "You Win! Scissor beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    updateScore();
    return "You Lose! Scissor beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    updateScore();
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === computerSelection) {
    return "Draw!";
  } else {
    return "Undefined!";
  }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

function updateScore() {
  const scoreBoard = document.getElementById("scoreContainer");
  scoreBoard.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
  if (playerScore >= 5) {
    announceWinner("Player");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    refreshPageWithDelay(4000);
  } else if (computerScore >= 5) {
    announceWinner("Computer");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    refreshPageWithDelay(4000);
  }
}

function refreshPageWithDelay(delay) {
  setTimeout(function () {
    location.reload();
  }, delay);
}

function announceWinner(winner) {
  const winnerContainer = document.getElementById("winnerContainer");
  winnerContainer.innerHTML = `${winner} wins the game!`;
}

function handleClick(event) {
  const logContainer = document.getElementById("logContainer");
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();

  const round = `You selected ${playerSelection}, Computer selected ${computerSelection}`;

  const result = playRound(playerSelection, computerSelection);
  console.log(result);

  logContainer.innerHTML = round + "<br>" + result;
}

rockBtn.addEventListener("click", handleClick);
paperBtn.addEventListener("click", handleClick);
scissorBtn.addEventListener("click", handleClick);

//finally make a game roudn that does 5 plays

// function game() {
//   if (playerScore === 0 && computerScore === 0) {
//     let playerSelection = prompt("what is your input?").toLowerCase();
//     let computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     console.log(playRound(playerSelection, computerSelection));

//     playerSelection = prompt("what is your input?").toLowerCase();
//     computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     console.log(playRound(playerSelection, computerSelection));

//     playerSelection = prompt("what is your input?").toLowerCase();
//     computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     console.log(playRound(playerSelection, computerSelection));

//     playerSelection = prompt("what is your input?").toLowerCase();
//     computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     console.log(playRound(playerSelection, computerSelection));

//     playerSelection = prompt("what is your input?").toLowerCase();
//     computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
//     if (playerScore > computerScore && computerScore != playerScore) {
//       console.log("You won the most points! Game over!");
//     } else if (computerScore > playerScore && computerScore != playerScore) {
//       console.log("Computer won the most points! You lose!");
//     } else if (computerScore === playerScore) {
//       console.log("All draw! Try again");
//     }
//   }
// }

// game();
