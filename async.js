import fs from 'fs';
import { readFile } from 'fs/promises';
const a = 2;
const b = 3;

(async () => {
    const file = await readFile('./README.md','utf-8');
    console.log(file);
})();
(() => {
    const file =  fs.readFileSync('./README.md','utf-8');
    console.log(file);
})();
console.log("sync", a+b);
setTimeout(()=>{
    console.log('set time out');
},1);
console.log("after set time out ");
console.log("yo budy");
