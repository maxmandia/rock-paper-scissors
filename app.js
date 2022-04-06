const Options = ["rock", "paper", "scissors"];

// Query the DOM
btns = document.querySelectorAll(".btn");

let playerChoice = "rock";

function playerPlay() {
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let pushingP = btn.textContent;
    });
  });
}

function computerPlay() {
  return Options[~~(Math.random() * Options.length)];
}

const computerChoice = computerPlay();

function playRound(playerChoice, computerChoice) {
  if (playerChoice === "rock" && computerChoice === "paper") return "you lose";
  else if (playerChoice === "rock" && computerChoice === "rock")
    return "you tied";
  else if (playerChoice === "rock" && computerChoice === "scissors")
    return "you win";
}
