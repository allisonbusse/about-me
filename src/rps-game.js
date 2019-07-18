//Import functions to reference
import getThrow from './get-throw.js';

//Reference needed DOM elements
const playGame = document.getElementById('play-game');
const generatedImage = document.getElementById('generated-hand');
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
    
    //define the image src of the computer's throw
    generatedImage.classList.remove('invisible');
    const src = 'assets/' + computerThrow + '.png';
    generatedImage.src = src;

    //get user choice from input
    let userChoice = document.querySelector('input:checked').value;
    
    //compare computer throw to user choice
    if(userChoice === computerThrow) {
        outcomeMessage = 'Draw! Try again.';
    }
    
    //tally score

});    