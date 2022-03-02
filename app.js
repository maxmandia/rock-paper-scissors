const Options = ["rock", "paper", "scissors"];

const playerChoice = "rock"
let computerChoice = computerPlay()


function computerPlay() {
    return Options[~~(Math.random() * Options.length)];
}

function playRound (playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "paper")
    return "you lose"
    else if (playerChoice === "rock" && computerChoice === "rock")
    return "you tied"
    else if (playerChoice === "rock" && computerChoice === "scissors")
    return "you win"
}

function game() {
    console.log(playRound(playerChoice, computerChoice))
    console.log(playRound(playerChoice, computerChoice))
    console.log(playRound(playerChoice, computerChoice))
    console.log(playRound(playerChoice, computerChoice))
    console.log(playRound(playerChoice, computerChoice))
}

console.log(game())