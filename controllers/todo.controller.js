import { toDoDeleteService, toDoGetByIdService, toDoGetService, toDoPatchService, toDoPostService, toDoPutByIdService } from "../services/todo.service.js";

//Instead of passing complete request to service layer better approach to pass only the payload to keep the service layer pure.
export const toDoGetHandler = async (req,res) => {
    const data = await toDoGetService(req?.body);
    res?.status(200)?.json(data);
};
export const toDoGetByIdHandler = async (req,res) => {
    const data = await toDoGetByIdService(req?.body,req?.params);
    res?.status(200)?.json(data);
};

export const toDoPostHandler = async(req,res) => {
    const serviceResponse = await toDoPostService(req?.body);
    try{
        if(serviceResponse?.err)
        {
            console.log(serviceResponse?.err)//technically error ke hisab se status code bhjna chahiye
            res?.status(500)?.json(serviceResponse?.err);
        }
        if(serviceResponse){
            res?.status(201)?.send(serviceResponse);
        }
    }
    catch(err){
        console.log(err);
        res?.status(500)?.json(serviceResponse?.err);
    }
    
};

export const toDoPutByIdHandler = async (req,res) => {
    console.log("Here")
    const queryParam = req?.params;
    try {
        await toDoPutByIdService(req?.body,queryParam);
        res?.status(200)?.send("To Do Updated successfully with put");
    } catch (error) {
        res?.status(400)?.json({"error" : error?.message});
    }
    
   
};

export const toDoPatchHandler = (req,res) => {
    toDoPatchService(req?.body);
    res?.status(204)?.send("To Do Updated successfully Patch");
};

export const toDoDeleteHandler = async (req,res) => {
       //In this case msg will not go as we have setted the status code 204 - No Content
    try {
        await toDoDeleteService(req?.body,req?.params);
        res?.status(204)?.send("To Do Deleted successfully");  
    } catch (error) {
        res?.status(400)?.json({"error" : error?.message});
    }
};