// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module-1');

// module.exports
const calculator1 = new C();
console.log(calculator1.add(2, 5));

// exports
// const calc2 = require('./test-module-2');
// console.log(calc2.multiply(5, 5));

// Destructured
const { add, multiply, divide } = require('./test-module-2');
console.log(multiply(5, 5));
