function getComputerChoice() {
    choose = Math.random()

    if (choose < .333) {
        computerChoice = 'rock'
    } else if (choose > .333 && choose < .666) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }

    return computerChoice
}

function getHumanChoice() {
    chosen = false
    choose = prompt("Rock, paper, or scissors?")

    while (chosen == false) {
    if (choose.toLowerCase() === 'rock') {
        humanChoice = 'rock'
        chosen = true
    } else if (choose.toLowerCase() === 'paper') {
        humanChoice = 'paper'
        chosen = true
    } else if (choose.toLowerCase() === 'scissors') {
        humanChoice = 'scissors'
        chosen = true
    } else {
        choose = prompt("Please input rock, paper, or scissors.")
    }
    }

    return humanChoice
}

playerChoice = getHumanChoice()
console.log(playerChoice)