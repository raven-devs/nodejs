// node src/module/assert/assert-ok.js

/**
 * Tests if value is truthy.
 */

const assert = require('node:assert/strict');

function main() {
  try {
    const value = '';

    assert.ok(value);
    console.log('OK', value);
  } catch (error) {
    console.error(error);
  }
}

main();
