let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choose = Math.random();

    if (choose < .333) {
        computerChoice = 'rock';
    } else if (choose > .333 && choose < .666) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function getHumanChoice() {
    chosen = false;
    choose = prompt("Rock, paper, or scissors?");

    while (chosen == false) {
    if (choose.toLowerCase() === 'rock') {
        humanChoice = 'rock';
        chosen = true;
    } else if (choose.toLowerCase() === 'paper') {
        humanChoice = 'paper';
        chosen = true;
    } else if (choose.toLowerCase() === 'scissors') {
        humanChoice = 'scissors';
        chosen = true;
    } else {
        choose = prompt("Please input rock, paper, or scissors.");
    }
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors');
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats rock');
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Scissors beat paper');
        humanScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Paper beats rock');
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Scissors beats paper');
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Rock beats scissors');
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log('Its a tie!');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

console.log(humanScore, computerScore)