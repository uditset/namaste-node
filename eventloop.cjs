// import {readFile} from 'fs/promises';
const fs = require('fs/promises');

const a = 100;

const fileReading = async () => {
    const output = await fs.readFile('./README.md','utf-8');
    console.log("Read file: ",output)
}
fileReading();
setTimeout(()=> {
    console.log("Set time out");
},0);
setImmediate(()=>{
    console.log("This is set immediate function");
})
console.log("value of a is: ",a);
console.log("This is part of synchronous code");
setTimeout(()=>{
    console.log("setTimeout 4ms")
},4);
 Promise.reject("Promise Rejected").catch((err) => {
     console.log(err);
 });
Promise.resolve("THis promise is resolved 1").then((msg) => {
    console.log(msg);
})
process.nextTick(() => {console.log("Process next tick 1")});

Promise.resolve("THis promise is resolved 2").then((msg) => {
    console.log(msg);
})

process.nextTick(() => {console.log("Process next tick 2")});

console.log("End of script");


//Expected Output Dry Run of common js module system and for esm promise will come before process tick:
// value of a is: 100
// This is part of synchronous code
// End of script
// Process next tick 1
// Process next tick 2
// THis promise is rejected
// THis promise is resolved 1
// This promise is resolved 2
// Set time out
// This is set immediate function
// Read file: 
// setTimeout 5 sec