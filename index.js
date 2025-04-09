console.log("This is index.js file.");
import express from 'express';
import dotenv from 'dotenv';
import { mainRoutes } from './routes/main.routes.js';

const app = express();
const envConfig = dotenv?.config();
const PORT = process?.env?.PORT || 8080;

//Good Practice to mount routes above the listen
app.use('/',mainRoutes);


app?.listen(PORT,() => {
    console.log("Express server is started bro at port: ",PORT);
});


console.log("Syscronous code 1")
process?.nextTick(() => {console.log("Process next tick")});