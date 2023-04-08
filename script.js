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
  console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);
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
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "It is a tie";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    addScore(computerScore);
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "You lose. Paper beats rock.";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    addScore(playerScore);
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "You win. Rock beats scissors.";
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "It is a tie";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    addScore(playerScore);
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "You win. Paper beats rock.";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    addScore(computerScore);
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "You lose. Scissors beat paper.";
  }
  if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "It is a tie";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    addScore(playerScore);
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "You win. Scissors beat paper.";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    addScore(computerScore);
    console.log(
      `You choose: ${playerSelection} Computer choose: ${computerSelection}`
    );
    return "You lose. Rock beats scissors.";
  }
}

function game() {
  for (let index = 0; index < 5; index++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    showScores();
  }
}
