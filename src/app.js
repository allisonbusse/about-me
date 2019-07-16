//Import functions to reference
import isYes from './is-yes.js';

//Reference needed DOM elements
const startQuiz = document.getElementById('quiz');
const results = document.getElementById('results');


//Initialization


//Event Handlers
startQuiz.onclick = function() {
    //ask user for their name
    const name = prompt('Hi there! What\'s your name?');

    //confirm they want to take the quiz
    const check = confirm('Hi ' + name + '! Are you sure you\'re ready for this?');
    if(check === false) {
        return;
    }

    let correctAnswers = 0;
    
    //first coffee question
}




//