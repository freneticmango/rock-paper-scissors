function getComputerChoice() {
    choose = Math.random()

    if (choose < .3) {
        computerChoice = 'rock'
    } else if (choose > .3 && choose < .6) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }

    return computerChoice
}

compChoice = getComputerChoice()
console.log(compChoice)