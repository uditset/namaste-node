import https from 'node:https';
import { options } from './utility/utilityObjects.js'; //contains information ssl certificate and private key required for https server.
const httpsServer = https.createServer(options,function(req,res){
    res?.end("This request is fulfilled in es module style");
});
httpsServer?.listen(1104,()=>{console.log("Finally the http server is started on port 1104")});
console.log(https);
console.log("server already started");
setTimeout(() => {
    console.log("Its been 5 sec no server has already started");
},5000);