//Import functions to reference
import getThrow from './get-throw.js';

//Reference needed DOM elements
const playGame = document.getElementById('play-game');
const generatedImage = document.getElementById('generated-hand');
const userImage = document.getElementById('user-image');
let outcomeMessage = document.getElementById('outcome-message');
const resultsSection = document.getElementById('results-section');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
let userBet = document.getElementById('user-bet');
const userBalance = document.getElementById('user-balance');

//Initialization
let wins = 0;
let losses = 0;
let balance = 500;

//Event Handlers
playGame.addEventListener('click', () => {
    //run function to generate computer's throw
    const computerThrow = getThrow();

    //get user choice from input
    let userChoice = getUserChoice();

    //define the image src of the computer's throw
    generatedImage.classList.remove('hidden');
    const src = 'assets/computer-' + computerThrow + '.png';
    generatedImage.src = src;

    //define the image src of the user's throw
    const userSrc = 'assets/user-' + userChoice + '.png';
    userImage.src = userSrc;
    userImage.classList.remove('hidden');

    //remove hidden class from results section
    resultsSection.classList.remove('hidden');

    // check betting balance
    checkBalance();

    // compare the two throws to determine winner
    compareThrow(userChoice, computerThrow);    
    
    // tally score and balance
    winCount.textContent = wins;
    lossCount.textContent = losses;
    userBalance.textContent = balance;

});    


//get user choice from input
function getUserChoice() {
    return document.querySelector('input:checked').value;
}

// compareThrow Function
function compareThrow(userChoice, computerThrow) {
    let bet = userBet.value;
    if(userChoice === computerThrow) {
        outcomeMessage.textContent = 'Draw! Try again.';
        balance;
    }
    
    else if(userChoice === 'rock') {
        if(computerThrow === 'scissors') {
            outcomeMessage.textContent = 'Rock crushes scissors, you win!';
            wins++;
            balance += +bet;
        }
        else {
            outcomeMessage.textContent = 'Paper covers rock. You lose :(';
            losses++;
            balance -= bet;
        }
    }
    else if(userChoice === 'paper') {
        if(computerThrow === 'rock') {
            outcomeMessage.textContent = 'Paper covers rock. You win!';
            wins++;
            balance += +bet;
        }
        else {
            outcomeMessage.textContent = 'Scissors crush rock. You lose :(';
            losses++;
            balance -= bet;
        }
    }
    else if(userChoice === 'scissors') {
        if(computerThrow === 'paper') {
            outcomeMessage.textContent = 'Scissors cut paper. You win!';
            wins++;
            balance += +bet;
        }
        else {
            outcomeMessage.textContent = 'Rock crushes paper. You lose :(';
            losses++;
            balance -= bet;
        }
    }}
 
// check betting balance
function checkBalance() {

    if(balance <= 0) {
        outcomeMessage.textContent = 'Oh no! You\'re out of money. Refresh to play again.';
        userImage.classList.add('hidden');
        generatedImage.classList.add('hidden');
        playGame.disabled = true;
    }
    
    else if(userBet > balance) {
        outcomeMessage.textContent = 'Oops, you don\'t have that much money left. Try a lower bet.';
        userImage.classList.add('hidden');
        generatedImage.classList.add('hidden');
    }}