//Import functions to reference
import compareNumbers from './guessnumber.js';

//Reference needed DOM elements
const checkAnswer = document.getElementById('check-answer');
const guess = document.getElementById('user-guess');
const resultsSection = document.getElementById('results-section')
const guessResponse = document.getElementById('guess-response');
const guessesLeft = document.getElementById('guesses-left');


//Initialization
// Math function from MDN
const correctNumber = Math.floor(Math.random() * 20);
let guessCount = 4;

//Event Handlers
checkAnswer.addEventListener('click', () => {
    guessCount -= 1;
    if(compareNumbers(Number(guess.value), correctNumber) === 0) {
        resultsSection.classList.remove('hidden');
        guessResponse.textContent = '🎉 🏄🏻‍♀️ You got it! Way to go! 🎉 🏄🏻‍♀️';
        guessesLeft.classList.add('hidden');
        checkAnswer.disabled = true;
    }
    
    else if(guessCount < 1) {
        resultsSection.classList.remove('hidden');
        guessResponse.textContent = '😩 Ah, so close! But now you\'re out of guesses 😩';
        guessesLeft.classList.add('hidden');
        checkAnswer.disabled = true;
    }
    
    else if(compareNumbers(Number(guess.value), correctNumber) === 1) {
        resultsSection.classList.remove('hidden');
        guessResponse.textContent = '👇 Oooh you\'re a bit too high 👇';
        guessesLeft.textContent = 'Number of guesses left: ' + guessCount;
        
    }

    else if(compareNumbers(Number(guess.value), correctNumber) === -1) {
        resultsSection.classList.remove('hidden');
        guessResponse.textContent = '👆 Oooh you\'re a bit too low 👆';
        guessesLeft.textContent = 'Number of guesses left: ' + guessCount;
        
    }


});
    