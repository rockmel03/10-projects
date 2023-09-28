const buttons = document.querySelectorAll('.buttons>button');
const resultEl = document.querySelector('#result');
const userScoreEl = document.querySelector('#user-score')
const computerScoreEl = document.querySelector('#computer-score')

let userScore = 0;
let computerScore = 0;
let resultColor = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log('clicked' ,button.id);
        // console.log(computerPlay());
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
        resultEl.style.color = resultColor;
    })
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]
};
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultColor = 'rgb(115, 0, 191)'
        return "it is tie, both have " + userChoice;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
    ) {
        userScore++;
        resultColor = 'green';
        userScoreEl.innerText = userScore;
        return "You Win! " + userChoice + ' beats ' + computerChoice
    } else {
        computerScore++;
        resultColor = 'red'
        computerScoreEl.innerText = computerScore;
        return "You loose! " + computerChoice + ' beats ' + userChoice
    }
}