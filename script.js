let computerScore = 0;
let playerScore = 0;

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

function convertAnswer(answer) {
  if (answer === "1") {
    return "rock";
  }
  if (answer === "2") {
    return "paper";
  }
  if (answer === "3") {
    return "scissors";
  }
}

function addScore(agent) {
  agent === playerScore ? (playerScore += 1) : (computerScore += 1);
}

function getPlayerChoice() {
  let answer;
  while (true) {
    answer = prompt(
      "Choose rock(1)/paper(2)/scissors(3) by typing corresponding number:"
    );
    if (answer === "1" || answer === "2" || answer === "3") {
      return convertAnswer(answer);
    }
    alert("wrong input");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("It is a tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    addScore(computerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You lose. Paper beats rock.");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    addScore(playerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You win. Rock beats scissors.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    addScore(playerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You win. Paper beats rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    addScore(computerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You lose. Scissors beat paper.");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    addScore(playerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You win. Scissors beat paper.");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    addScore(computerScore);
    cl(`You choose: ${playerSelection} Computer choose: ${computerSelection}`);
    cl("You lose. Rock beats scissors.");
  }
}

function game() {
  for (let index = 0; index < 5; index++) {
    playRound(getPlayerChoice(), getComputerChoice());
    showScores();
  }
}
