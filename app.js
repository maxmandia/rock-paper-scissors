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

const buttons = document.querySelectorAll("button");
buttons.forEach(button) => {
    button.addEventListener ("click", () => {
        playerChoice = button.className;
        let computerChoice = computerPlay();
        



    })
}

rockbtn.addEventListener("click", () => {});
