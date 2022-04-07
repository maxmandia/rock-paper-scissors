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
const results = document.querySelector(".results");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const gameResults = document.querySelector(".game-results");

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    playerChoice = btn.textContent;
    let computerChoice = computerPlay();

    let outcome = playRound(playerChoice, computerChoice);

    if (outcome === "you win") {
      myScore++;
    } else if (outcome === "you lose") {
      pcScore++;
    } else if (outcome === "you tied") {
    }

    if (myScore === 5) {
      gameResults.innerHTML = `<p> You win!</p>`;
    } else if (pcScore === 5) {
      gameResults.innerHTML = `<p> You lose!</p>`;
    }

    results.innerHTML = `<p>${outcome}</p>`;
    playerScore.innerHTML = `<p> player score:${myScore}</p>`;
    computerScore.innerHTML = `<p>computer score: ${pcScore}</p>`;
  });
});

myScore = 0;
pcScore = 0;
