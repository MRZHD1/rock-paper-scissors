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
win = true
rounds = 3
yourScore = 2
botScore = 1
yourMove = "rock"
botMove = "paper"
game = false
const body = document.querySelector('body');
function screen1() {
    if (game) {
        body.removeChild(document.querySelector('.screen-2'))
    }
    const screen1 = document.createElement('div')
    screen1.classList.add('screen-1')

    const button = document.createElement('div')
    button.classList.add('button')
    button.classList.add('rock')
    button.addEventListener('click', function(e) {
        // botMove = getComputerChoice()
        // game = playRound()
        game = true
        screen2(win, rounds, yourScore, botScore, yourMove, botMove)
    })
    screen1.appendChild(button)

    const button2 = document.createElement('div')
    button2.classList.add('button')
    button2.classList.add('paper')
    screen1.appendChild(button2)

    const button3 = document.createElement('div')
    button3.classList.add('button')
    button3.classList.add('scissors')
    screen1.appendChild(button3)


    body.appendChild(screen1)
}
function screen2(win, rounds, yourScore, botScore, yourMove, botMove) {
    body.removeChild(document.querySelector('.screen-1'))

    const screen2 = document.createElement('div')
    screen2.classList.add('screen-2')

    const winloss = document.createElement('div')
    winloss.classList.add('winloss')

    const p1 = document.createElement('p')
    if (win == true) {
        p1.textContent = "You won... this time."
    }
    else {
        p1.textContent = "You lost! The CPU simply has you bested"
    }
    winloss.append(p1)

    const p2 = document.createElement('p')
    p2.textContent = `You chose ${yourMove} while the CPU chose ${botMove}`
    winloss.append(p2)

    const next = document.createElement('div')
    next.addEventListener('click', function (e) {
        screen1()
    })
    next.classList.add('next')

    const tryAgain = document.createElement('div')
    tryAgain.textContent = "Try again?"

    next.appendChild(tryAgain)
    winloss.appendChild(next)
    screen2.appendChild(winloss)

    const score = document.createElement('div')
    score.classList.add('score')
    score.textContent = `You: ${yourScore} | CPU: ${botScore}`
    screen2.appendChild(score)

    body.appendChild(screen2)

}
screen1()
