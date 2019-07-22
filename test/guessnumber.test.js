import compareNumber from '../src/guessnumber.js';

const test = QUnit.test;
const correctNumber = 12;

test('12 is number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 12;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumber(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('6 is too low', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = '6';
    const expected = '-1';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumber(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('18 is too high', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = '18';
    const expected = '1';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumber(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});
