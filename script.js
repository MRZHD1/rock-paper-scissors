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
rounds = 0
yourScore = 0
botScore = 0
game = false
const body = document.querySelector('body');
function screen1() {
    if (game) {
        body.removeChild(document.querySelector('.screen-2'))
        body.style.backgroundColor = 'white'
    }
    if (rounds == 5) {
        rounds = 0
        yourScore = 0
        botScore = 0
    }
    function moveListener(move) {
        game = true

        botMove = getComputerChoice()
        result = playRound(move, botMove)

        if (result == 1) {
            yourScore++
            rounds++
        }
        else if (result == -1) {
            botScore++
            rounds++
        }
        screen2(result, rounds, yourScore, botScore, move, botMove)
    }
    const screen1 = document.createElement('div')
    screen1.classList.add('screen-1')

    const button = document.createElement('div')
    button.classList.add('button')
    button.classList.add('rock')
    button.textContent = 'Rock'
    button.addEventListener('click', () => {
        moveListener('rock')
    })
    screen1.appendChild(button)

    const button2 = document.createElement('div')
    button2.classList.add('button')
    button2.classList.add('paper')
    button2.textContent = 'Paper'
    button2.addEventListener('click', () => {
        moveListener('paper')
    })
    
    screen1.appendChild(button2)

    const button3 = document.createElement('div')
    button3.classList.add('button')
    button3.classList.add('scissors')
    button3.textContent = 'Scissors'
    button3.addEventListener('click', () => {
        moveListener('scissors')
    })

    screen1.appendChild(button3)


    body.appendChild(screen1)
}
function screen2(win, rounds, yourScore, botScore, yourMove, botMove) {
    body.removeChild(document.querySelector('.screen-1'))
    if (win == 1) {
        body.style.backgroundColor = 'lightgreen'
    }
    else if (win == -1) {
        body.style.backgroundColor = 'indianred'
    }
    const screen2 = document.createElement('div')
    screen2.classList.add('screen-2')

    const winloss = document.createElement('div')
    winloss.classList.add('winloss')

    const p1 = document.createElement('p')
    if (rounds == 5) {
        if (yourScore > botScore) {
            p1.textContent = "You won! (unfortunately)"
            body.style.backgroundColor = 'green'}
        else {
            p1.textContent = "Good game! I win, as usual."
            body.style.backgroundColor = 'darkred'
        }
    }
    else if (win == 0) {
        p1.textContent = "It's a tie. I wasn't really trying..."
    }
    else if (win == 1) {
        p1.textContent = "You won... this time."
    }
    else {
        p1.textContent = "You lost! I simply have you bested."
    }
    winloss.append(p1)

    const p2 = document.createElement('p')
    p2.textContent = `You chose ${yourMove} while I chose ${botMove}.`
    if (rounds == 5) {
        p2.textContent+= " Up for another game?"
    }
    winloss.append(p2)

    const next = document.createElement('div')
    next.addEventListener('click', function (e) {
        screen1()
    })
    next.classList.add('next')

    const tryAgain = document.createElement('div')
    if (rounds == 5) {
        tryAgain.textContent = "Next game"
    }
    else {
        tryAgain.textContent = "Next round"
    }

    next.appendChild(tryAgain)
    winloss.appendChild(next)
    screen2.appendChild(winloss)

    const score = document.createElement('div')
    score.classList.add('score')
    score.textContent = `You: ${yourScore} | Me: ${botScore}`
    screen2.appendChild(score)

    body.appendChild(screen2)

}
screen1()
