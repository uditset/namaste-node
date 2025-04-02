require('./module1.cjs');
const calcSum = require('./sum.cjs');
const {subtract,multiply,divide,percentage} = require('./arithmeticoperations.cjs');
const a = 20;
const b = 2;
console.log(a+b);
console.log("This file is written to test nodejs env");
calcSum(a,b);
require('./module2.cjs');
require('./module1.cjs');
multiply(a,b);
divide(a,b)
subtract(a,b);
percentage(a,b)

console.log("After module 2");
// console.log(global)
// console.log(globalThis)

z= "testing strict mode";
console.log(z);