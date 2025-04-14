console.log("This is index.js file.");
import express from 'express';
import dotenv from 'dotenv';
import { mainRoutes } from './routes/main.routes.js';
import toDoRoute from './routes/todo.routes.js';
import { jsonPayloadValidation } from './middlewares/errorHandlingMiddleWare.js';

const app = express();
const envConfig = dotenv?.config();
const PORT = process?.env?.PORT || 8080;

//Good Practice to mount routes above the listen
app.use(express?.json()); //middleware to capture the request payload of content type json.
app.use(jsonPayloadValidation) //middleware to capture the wrong format in payload of content application/json
app.use('/',mainRoutes);
app.use('/toDo',toDoRoute);


app?.listen(PORT,() => {
    console.log("Express server is started bro at port: ",PORT);
});


console.log("Syscronous code 1")
process?.nextTick(() => {console.log("Process next tick")});