// node src/module/assert/assert-match.js

/**
 * Expects the string input to match the regular expression.
 */

const assert = require('node:assert/strict');

function main() {
  try {
    const value = 'I will fail';
    assert.match(value, /pass/);
    console.log('OK', value);
  } catch (error) {
    console.error(error);
  }

  try {
    const value = 'I will pass';
    assert.match(value, /pass/);
    console.log('OK', value);
  } catch (error) {
    console.error(error);
  }
}

main();
