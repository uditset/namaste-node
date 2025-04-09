const http = require('http');
const {serverCallBackFunction} = require('./utility/serverCallbackFunctions.cjs');

//creating an instance of http server 
const httpServer = http.createServer(serverCallBackFunction);

//result in server to listen to incoming requests on the given port no.
console.log("SYnchronous tas0");
httpServer?.listen(1103,()=>{console.log("Finally the http server is started on port 1104")});
console.log("SYnchronous tas1");
process.nextTick(()=>{console.log("process Tick")});
setTimeout(()=>{console.log("set time out with 0 ms")},0);
setImmediate(() => {console.log("set immediate")});
Promise.resolve("This is resolved").then(console.log);
setTimeout(()=>{console.log("5 second completed")},5000)
console.log("SYnchronous last");

//expected output
// SYnchronous tas0
// SYnchronous last
// SYnchronous tas1
// process Tick
// This is resolved
// set time out with 0 ms
// Finally the http server is started on port 1104
// set immediate
// 5 second completed