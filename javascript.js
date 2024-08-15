const score = document.querySelector("#score");
const results = document.querySelector("#results");

const buttons = document.querySelectorAll("button");

humanScore = 0;
computerScore = 0;

// Uses a random number generator to choose a selection and returns it

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

// Contains logic for playing a single round, increments scores and reports round winner

function playRound(humanChoice) {

    computerChoice = getComputerChoice();

    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        results.textContent = "You win! Rock beats scissors";
        ++humanScore;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        results.textContent = 'You win! Paper beats rock';
        ++humanScore;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        results.textContent = 'You win! Scissors beat paper';
        ++humanScore;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        results.textContent = 'You lose! Paper beats rock';
        ++computerScore;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        results.textContent = 'You lose! Scissors beats paper';
        ++computerScore;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        results.textContent = 'You lose! Rock beats scissors';
        ++computerScore;
    } else if (humanChoice === computerChoice) {
        results.textContent = 'Its a tie!';
    } 
    
    score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        buttons.forEach((button) => button.disabled=true);
        if (humanScore > computerScore) results.textContent = 'You win the game!';
        if (humanScore < computerScore) results.textContent = 'You lose the game!';
    
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.id));
})








