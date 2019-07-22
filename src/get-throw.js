
// generate random number and assign rock, paper, scissor value to it
export default function getThrow() {
    //generate random number
    const randomNumber = Math.floor(Math.random() * 3);

    //call function to assign throw
    const thrownHand = getThrowFromNumber(randomNumber);

    //return throw
    return thrownHand;
}

// gets 'rock', 'paper', or 'scissors' from random number
export function getThrowFromNumber(randomNumber) {
    if(randomNumber === 0) {
        return 'rock';
    }
    else if(randomNumber === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}