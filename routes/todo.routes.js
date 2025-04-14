import { Router } from "express";
import { toDoDeleteHandler, toDoGetByIdHandler, toDoGetHandler, toDoPatchHandler, toDoPostHandler, toDoPutByIdHandler } from "../controllers/todo.controller.js";
const toDoRoute = Router();
toDoRoute?.get('/',toDoGetHandler);
toDoRoute?.get('/:id',toDoGetByIdHandler);
toDoRoute?.post('/',toDoPostHandler);
toDoRoute?.put('/:id',toDoPutByIdHandler);
toDoRoute?.patch('/',toDoPatchHandler);
toDoRoute?.delete('/:id',toDoDeleteHandler);

export default toDoRoute;
