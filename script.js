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
function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        let play = prompt("Pick rock, paper, or scissors!").toLowerCase()
        if (play != "rock" && play != "paper" && play != "scissors") {
            alert("That was not a valid choice!")
            i--
        }
        else {
            let cpuPlay = String(getComputerChoice())
            point = parseInt(playRound(play,cpuPlay))
            if (point == -1) {
                alert(`You lost by playing ${play} against ${cpuPlay}`)
            }
            else if (point == 0) {
                alert(`Draw! Both players played ${play}`)
            }
            else {
                alert(`Win! You played ${play} against ${cpuPlay}`)
            }
            score = score + point
        }
    }
    if (score < 0) {
        alert(`You lost! The CPU beat you ${Math.abs(point)} more time(s)`)
    }
    else if (score == 0) {
        alert("Draw! What a conclusion!")
    }
    else {
        alert(`A WIN! Congrats. You beat the CPU ${score} more time(s)`)
    }
}
game()