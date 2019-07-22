import { getThrowFromNumber } from '../src/get-throw.js';

const test = QUnit.test;

test('return 2 when scissors is selected', function(assert) {
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

test('return 1 when paper is selected', function(assert) {
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

test('return 0 when rock is selected', function(assert) {
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

