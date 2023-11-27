// node src/module/assert/assert-strictEqual.js

/**
 * Tests strict equality between the actual and expected parameters.
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

    assert.strictEqual(actual, expected);
    console.log('OK', expected, actual);
  } catch (error) {
    console.error(error);
  }

  try {
    const expected = {
      name: 'jack',
      age: 31,
      location: 'london',
    };

    const actual = {
      name: 'jack',
      age: 31,
      location: 'london',
    };

    assert.strictEqual(actual, expected);
    console.log('OK', expected, actual);
  } catch (error) {
    console.error(error);
  }

  try {
    const expected = [1, 2, 3];

    const actual = [1, 2, 3];

    assert.strictEqual(actual, expected);
    console.log('OK', expected, actual);
  } catch (error) {
    console.error(error);
  }

  try {
    const expected = 'jack';

    const actual = 'jack';

    assert.strictEqual(actual, expected);
    console.log('OK', expected, actual);
  } catch (error) {
    console.error(error);
  }
}

main();
