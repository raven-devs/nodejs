// node src/module/assert/assert-rejects.js

/**
 * Awaits the asyncFn promise or, if asyncFn is a function, immediately calls the function and awaits the returned promise to complete. It will then check that the promise is rejected.
 */

const assert = require('node:assert/strict');

async function main() {
  try {
    await assert.rejects(asyncFn);
    console.log('OK', 'rejects');
  } catch (error) {
    console.error(error);
  }
}

async function asyncFn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hi, there!');
      // reject('not valid!');
    }, 3000);
  });
}

main()
  .then()
  .catch((error) => console.error(error));
