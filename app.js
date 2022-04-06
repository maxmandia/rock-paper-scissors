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
}

btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let computerChoice = computerPlay();
    let playerChoice = btn.textContent;

    console.log(playRound(computerChoice, playerChoice));
  });
});
