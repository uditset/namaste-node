console.log("app.js written with es module system")
/*import { subtract,multiply,divide,percentage } from "./arithmeticoperations.cjs";
const a = 20;
const b = 2;
console.log(a+b);
console.log("This file is written to test nodejs env with es module system");
multiply(a,b);
divide(a,b)
subtract(a,b);
percentage(a,b)

console.log("After module 2");
// console.log(global)
// console.log(globalThis)

z= "testing strict mode";
console.log(z);*/

import {divide,subtract,calcSum} from "./utility/calculator/index.js";
import users from "./utility/json_files/users.json" with { type: 'json' };
const a = 20;
const b = 2;
calcSum(a,b);
subtract(a,b);
divide(a,b);
console.log(typeof users);
console.log(JSON.stringify(users));