let computerScore = 0;
let playerScore = 0;
let playerChoice = "";
let computerChoice = "";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerScoreDom = document.querySelector("#player-score");
const computerScoreDom = document.querySelector("#computer-score");
const infoTextDom = document.querySelector("#info-text");
const warTextDom = document.querySelector("#war-text");
const gameOverTextDom = document.querySelector("#game-over-text");
const btnRestartDom = document.querySelector("#btn-restart");

function updateScoreDom() {
  playerScoreDom.textContent = playerScore;
  computerScoreDom.textContent = computerScore;
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function addScore(agent) {
  return (agent += 1);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    infoTextDom.textContent = `You choose: ${playerSelection} Computer choose: ${computerSelection}`;
    warTextDom.textContent = "It is a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore = addScore(computerScore);
    infoTextDom.textContent = `You choose: ${playerSelection} Computer choose: ${computerSelection}`;
    warTextDom.textContent = "You lose. Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore = addScore(playerScore);
    infoTextDom.textContent = `You choose: ${playerSelection} Computer choose: ${computerSelection}`;
    warTextDom.textContent = "You win. Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore = addScore(playerScore);
    infoTextDom.textContent = `You choose: ${playerSelection} Computer choose: ${computerSelection}`;
    warTextDom.textContent = "You win. Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore = addScore(computerScore);
    infoTextDom.textContent = `You choose: ${playerSelection} Computer choose: ${computerSelection}`;
    warTextDom.textContent = "You lose. Scissors beat paper.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore = addScore(playerScore);
    infoTextDom.textContent = `You choose: ${playerSelection} Computer choose: ${computerSelection}`;
    warTextDom.textContent = "You win. Scissors beat paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore = addScore(computerScore);
    infoTextDom.textContent = `You choose: ${playerSelection} Computer choose: ${computerSelection}`;
    warTextDom.textContent = "You lose. Rock beats scissors.";
  }
}

function disableRpsBtns() {
  rock.removeEventListener("click", game);
  paper.removeEventListener("click", game);
  scissors.removeEventListener("click", game);
}

function enableRpsBtns() {
  rock.addEventListener("click", game);
  paper.addEventListener("click", game);
  scissors.addEventListener("click", game);
}

function game() {
  playerChoice = this.textContent;
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  updateScoreDom();
  if (playerScore === 5) {
    gameOverTextDom.textContent = "You won the game";
    gameOverTextDom.style.color = "blue";
    playerScoreDom.style.color = "blue";
    disableRpsBtns();
  } else if (computerScore === 5) {
    gameOverTextDom.textContent = "You lost the game";
    gameOverTextDom.style.color = "red";
    computerScoreDom.style.color = "red";
    disableRpsBtns();
  }
}

function resetGame() {
  enableRpsBtns();
  computerScore = 0;
  playerScore = 0;
  playerChoice = "";
  computerChoice = "";
  playerScoreDom.textContent = "0";
  computerScoreDom.textContent = "0";
  infoTextDom.textContent = "Click buttons";
  warTextDom.textContent = "to play the game!";
  gameOverTextDom.textContent = "";
  gameOverTextDom.style.color = "";
  playerScoreDom.style.color = "";
  computerScoreDom.style.color = "";
}

rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
btnRestartDom.addEventListener("click", resetGame);
