let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
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
  agent += 1;
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
    return "It is a tie";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    addScore(computerScore);
    return "You lose. Paper beats rock.";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    addScore(playerScore);
    return "You win. Rock beats scissors.";
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    return "It is a tie";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    addScore(playerScore);
    return "You win. Paper beats rock.";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    addScore(computerScore);
    return "You lose. Scissors beat paper.";
  }
  if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "It is a tie";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    addScore(playerScore);
    return "You win. Scissors beat paper.";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    addScore(computerScore);
    return "You lose. Rock beats scissors.";
  }
}
