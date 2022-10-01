function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    return choices[~~(Math.random()*choices.length)]
}
console.log(getComputerChoice())