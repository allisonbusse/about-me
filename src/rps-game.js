//Import functions to reference
import getThrow from './get-throw.js';

//Reference needed DOM elements
const playGame = document.getElementById('play-game');
const generatedImage = document.getElementById('generated-hand');
const outcomeMessage = document.getElementById('outcome-message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

//Initialization
let wins = 0;
let losses = 0;

//Event Handlers
playGame.addEventListener('click', () => {
    const computerThrow = getThrow();
    console.log(computerThrow);
    //define the image src of the computer's throw
    generatedImage.classList.remove('invisible');
    const src = 'assets/' + computerThrow + '.png';
    generatedImage.src = src;

});    