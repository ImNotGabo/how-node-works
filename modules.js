// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module-1');

const calculator1 = new C();
console.log(calculator1.add(2, 5));
