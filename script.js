let computerScore = 0;
let playerScore = 0;
let playerChoice = "";
let computerChoice = "";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function cl(message) {
  console.log(message);
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function showScores() {
  cl(`Player score: ${playerScore} Computer score: ${computerScore}`);
}

function addScore(agent) {
  return (agent += 1);
}



function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("It is a tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore = addScore(computerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You lose. Paper beats rock.");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore = addScore(playerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You win. Rock beats scissors.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore = addScore(playerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You win. Paper beats rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore = addScore(computerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You lose. Scissors beat paper.");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore = addScore(playerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You win. Scissors beat paper.");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore = addScore(computerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You lose. Rock beats scissors.");
  }
}

rock.addEventListener("click", function () {
  playerChoice = rock.textContent;
  computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  showScores();
});
