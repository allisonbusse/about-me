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
    if(name === null) {
        return prompt('Come on, we need your name!');
    }
    else if(name === '') {
        return prompt('Please tell us!');
    }

    //confirm they want to take the quiz
    const check = confirm('Hi ' + name + '! Are you sure you\'re ready for this?');
    if(check === false) {
        return;
    }

    //define variable for user's input
    let correctAnswers = 0;

    //first coffee question
    const firstQuestion = prompt('Is coffee a stimulant?');

    //convert to boolean
    const correctFirstQuestion = true;
    if(isYes(firstQuestion) === correctFirstQuestion) {
        correctAnswers += 1;
    }

    //second coffee question
    const secondQuestion = prompt('Is coffee considered a carcinogenic food?');

    //convert to boolean
    const correctSecondQuestion = false;
    if(isYes(secondQuestion) === correctSecondQuestion) {
        correctAnswers += 1;
    }

    //third coffee question
    const thirdQuestion = prompt('Is coffee delicious?');

    //convert to boolean
    const correctThirdQuestion = true;
    if(isYes(thirdQuestion) === correctThirdQuestion) {
        correctAnswers += 1;
    }

    //convert score to percentage rounded to a whole number
    correctAnswers = Math.round(correctAnswers / 3 * 100);
    
    //return results for 0 or 1 correct answers
    if(correctAnswers < 35) {
        results.textContent = 'Hey ' + name + ', you scored ' + correctAnswers + '% on the quiz! You might want to try again';
        results.classList.add('bad-score');
    } 

    //return results for 2 correct answers
    if(correctAnswers === 67) {
        results.textContent = 'Hey ' + name + ', you scored ' + correctAnswers + '% on the quiz! Not bad!';
        results.classList.add('middle-score');
    } 

    //return results for 3 correct answers
    if(correctAnswers === 100) {
        results.textContent = 'Hey ' + name + ', you scored ' + correctAnswers + '% on the quiz! Nailed it!';
        results.classList.add('good-score');
    } 

    //remove the hidden class on the results box to reveal the results on the page
    results.classList.remove('hidden');
};

