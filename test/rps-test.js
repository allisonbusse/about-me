import { getThrowFromNumber } from '../src/get-throw.js';

const test = QUnit.test;

test('2 is scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerThrow = 2;
    const expected = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(computerThrow);

    //Assert
    assert.equal(result, expected);
});

test('1 is paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerThrow = 1;
    const expected = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(computerThrow);

    //Assert
    assert.equal(result, expected);
});

test('0 is rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerThrow = 0;
    const expected = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = getThrowFromNumber(computerThrow);

    //Assert
    assert.equal(result, expected);
});

