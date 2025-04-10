import { Router } from "express";
import { toDoDeleteHandler, toDoGetHandler, toDoPatchHandler, toDoPostHandler, toDoPutHandler } from "../controllers/todo.controller.js";
const toDoRoute = Router();
toDoRoute?.get('/',toDoGetHandler);
toDoRoute?.post('/',toDoPostHandler);
toDoRoute?.put('/',toDoPutHandler);
toDoRoute?.patch('/',toDoPatchHandler);
toDoRoute?.delete('/',toDoDeleteHandler);

export default toDoRoute;
