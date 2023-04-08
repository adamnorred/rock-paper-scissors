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

function getPlayerChoice() {
  let answer;
  while (true) {
    answer = prompt(
      "Choose rock(1)/paper(2)/scissors(3) by typing corresponding number:"
    );
    if (answer === "1" || answer === "2" || answer === "3") {
      return convertAnswer(answer);
    } else alert("wrong input");
  }
}
