// node src/module/assert/assert-deepStrictEqual.js

/**
 * Tests for deep equality between the actual and expected parameters.
 */

const assert = require('node:assert/strict');

function main() {
  try {
    const expected = {
      name: 'jack',
      age: 31,
      location: 'london',
    };

    const actual = {
      name: 'john',
      age: 31,
      location: 'london',
    };

    assert.deepStrictEqual(actual, expected);
    console.log('OK', expected, actual);
  } catch (error) {
    console.error(error);
  }

  try {
    const expected = {
      name: 'jack',
      age: 31,
      address: {
        city: 'london',
        zip: 345989,
        street: 'main str.',
        building: 12,
      },
    };

    const actual = {
      name: 'jack',
      age: 31,
      address: {
        building: 12,
        zip: 345989,
        city: 'london',
        street: 'main str.',
      },
    };

    assert.deepStrictEqual(actual, expected);
    console.log('OK', expected, actual);
  } catch (error) {
    console.error(error);
  }

  try {
    const expected = [1, 2, 3];

    const actual = [1, 2, 3, 4];

    assert.deepStrictEqual(actual, expected);
    console.log('OK', expected, actual);
  } catch (error) {
    console.error(error);
  }

  try {
    const expected = [1, 2, [4, 5, 9], 3];

    const actual = [1, 2, [4, 5, 9], 3];

    assert.deepStrictEqual(actual, expected);
    console.log('OK', expected, actual);
  } catch (error) {
    console.error(error);
  }
}

main();
