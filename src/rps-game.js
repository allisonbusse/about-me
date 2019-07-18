//Import functions to reference
import getThrow from './get-throw.js';

//Reference needed DOM elements
const playGame = document.getElementById('play-game');
const generatedImage = document.getElementById('generated-hand');
const userImage = document.getElementById('user-image');
let outcomeMessage = document.getElementById('outcome-message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

//Initialization
let wins = 0;
let losses = 0;

//Event Handlers
playGame.addEventListener('click', () => {
    //run function to generate computer's throw
    const computerThrow = getThrow();
    
    //get user choice from input
    let userChoice = document.querySelector('input:checked').value;
    
    //define the image src of the computer's throw
    generatedImage.classList.remove('hidden');
    const src = 'assets/' + computerThrow + '.png';
    generatedImage.src = src;

    //define the image src of the user's throw
    userImage.classList.remove('hidden');
    const userSrc = 'assets/' + userChoice + '.png';
    userImage.src = userSrc;


    //remove hidden class from outcome message
    outcomeMessage.classList.remove('hidden');
    
    //compare computer throw to user choice
    if(userChoice === computerThrow) {
        outcomeMessage.textContent = 'Draw! Try again.';
    }
    else if(userChoice === 'rock') {
        if(computerThrow === 'scissors') {
            outcomeMessage.textContent = 'Rock crushes scissors, you win!';
            wins++;
        }
        else {
            outcomeMessage.textContent = 'Paper covers rock. You lose :(';
            losses++;
        }
    }
    else if(userChoice === 'paper') {
        if(computerThrow === 'rock') {
            outcomeMessage.textContent = 'Paper covers rock. You win!';
            wins++;
        }
        else {
            outcomeMessage.textContent = 'Scissors crush rock. You lose :(';
            losses++;
        }
    }
    else if(userChoice === 'scissors') {
        if(computerThrow === 'paper') {
            outcomeMessage.textContent = 'Scissors cut paper. You win!';
            wins++;
        }
        else {
            outcomeMessage.textContent = 'Rock crushes paper. You lose :(';
            losses++;
        }
    }
    
    //tally score
    winCount.textContent = wins;
    lossCount.textContent = losses;

});    