// node src/module/assert/assert-fail.js

/**
 * Throws an AssertionError with the provided error message or a default error message.
 */

const assert = require('node:assert/strict');

function main() {
  try {
    assert.fail();
  } catch (error) {
    console.error(error);
  }

  try {
    assert.fail('some error');
  } catch (error) {
    console.error(error);
  }

  try {
    assert.fail(new TypeError('need array'));
  } catch (error) {
    console.error(error);
  }
}

main();
