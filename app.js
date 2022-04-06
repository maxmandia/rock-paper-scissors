const Options = ["rock", "paper", "scissors"];

function computerPlay() {
  return Options[~~(Math.random() * Options.length)];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "paper") return "you lose";
  else if (playerChoice === "rock" && computerChoice === "rock")
    return "you tied";
  else if (playerChoice === "rock" && computerChoice === "scissors")
    return "you win";
  else if (playerChoice === "paper" && computerChoice === "paper")
    return "you tied";
  else if (playerChoice === "paper" && computerChoice === "rock")
    return "you win";
  else if (playerChoice === "paper" && computerChoice === "scissors")
    return "you lose";
  else if (playerChoice === "scissors" && computerChoice === "paper")
    return "you win";
  else if (playerChoice === "scissors" && computerChoice === "rock")
    return "you lose";
  else if (playerChoice === "scissors" && computerChoice === "scissors")
    return "you tied";
}

const buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", () => {
    playerChoice = btn.className;
    let computerChoice = computerPlay();

    console.log(playRound(playerChoice, computerChoice));
  });
});
