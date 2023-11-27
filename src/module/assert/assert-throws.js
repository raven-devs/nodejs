// node src/module/assert/assert-throws.js

/**
 * Expects the function fn to throw an error.
 */

const assert = require('node:assert/strict');

function main() {
  try {
    assert.throws(fn);
    console.log('OK', 'throws');
  } catch (error) {
    console.error(error);
  }
}

function fn() {
  throw new Error('some error');
}

main();
