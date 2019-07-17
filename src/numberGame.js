//Import functions to reference
import compareNumbers from './guessnumber.js';

//Reference needed DOM elements
const checkAnswer = document.getElementById('check-answer');
const guess = document.getElementById('user-guess');
const guessResponse = document.getElementById('guess-response');
const guessesLeft = document.getElementById('guesses-left');


//Initialization
const correctNumber = 12;
let guessCount = 4;

//Event Handlers
checkAnswer.addEventListener('click', () => {
    
    if(compareNumbers(Number(guess.value), correctNumber) === 0) {
        guessResponse.textContent = 'You got it! Way to go!';
        checkAnswer.disabled = true;
    }
    
    else if(guessCount < 1) {
        guessResponse.textContent = 'Ah, so close! But now you\'re out of guesses';
        guessesLeft.textContent = '';
        checkAnswer.disabled = true;
    }
    
    else if(compareNumbers(Number(guess.value), correctNumber) === 1) {
        guessCount -= 1;
        guessResponse.textContent = 'Oooh you\'re a bit too high';
        guessesLeft.textContent = 'You have ' + guessCount + ' guesses left.';
        
    }

    else if(compareNumbers(Number(guess.value), correctNumber) === -1) {
        guessCount -= 1;
        guessResponse.textContent = 'Oooh you\'re a bit too low';
        guessesLeft.textContent = 'You have ' + guessCount + ' guesses left.';
        
    }


});
    