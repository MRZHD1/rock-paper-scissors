function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
    return choices[~~(Math.random()*choices.length)]
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return 0
        }
        else if (computerSelection == "paper") {
            return -1
        }
        else {
            return 1
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return 1
        }
        else if (computerSelection == "paper") {
            return 0
        }
        else {
            return -1
        }
    }
    else { // Scissors
        if (computerSelection == "rock") {
            return -1
        }
        else if (computerSelection == "paper") {
            return 1
        }
        else {
            return 0
        }
    }
}
