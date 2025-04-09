const fs = require('fs');
const https = require('https');
const a = 123;
const b = 234;
console.log("Running sync: ", a+b);

fs.readFile('./README.md','utf-8',(error,data)=>{
    console.log("File Data in async");
    console.log(data);
})

const data = fs.readFileSync('./README.md','utf-8');
console.log("sync file loaded: " + data);
setTimeout(()=>{
    console.log("This is setTimeout Function");
},0);