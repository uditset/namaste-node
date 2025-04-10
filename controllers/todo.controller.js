import { toDoDeleteService, toDoGetService, toDoPatchService, toDoPostService, toDoPutService } from "../services/todo.service.js";

export const toDoGetHandler = (req,res) => {
    toDoGetService(req);
    res?.send("To Do Added successfully");
};

export const toDoPostHandler = (req,res) => {
    toDoPostService(req);
    res?.send("To Do created successfully");
};

export const toDoPutHandler = (req,res) => {
    toDoPutService(req);
    res?.send("To Do Updated successfully with put");
};

export const toDoPatchHandler = (req,res) => {
    toDoPatchService(req);
    res?.send("To Do Updated successfully Patch");
};

export const toDoDeleteHandler = (req,res) => {
    toDoDeleteService(req);
    res?.send("To Do Deleted successfully");
}