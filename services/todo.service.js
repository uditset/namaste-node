import { TODOLIST } from "../utility/db.js";

export const toDoGetService = async (payload) => {
    console.log("To Do Get Service Called ",payload,typeof payload);
    //mimiking getting data from db
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data = TODOLIST;
            resolve(data);
        },2000);
    })
}

export const toDoGetByIdService = async (payload,queryParam) => {
    console.log("To Do Get By Id Service Called ",payload,typeof payload);
    const queryId = queryParam?.id;
    //mimiking getting data from db
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const data = TODOLIST?.filter(item => item?.id==queryId);
            resolve(data);
        },1000);
    })
}

export const toDoPutByIdService = async (payload,queryParam) => {
    console.log("To Do Put Service Called ",payload,typeof payload);
    const updatedValue = payload;
    const queryId = queryParam?.id;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const indexToModify = TODOLIST?.findIndex((item) => item?.id==queryId);
            if(indexToModify!==-1)
            {
                TODOLIST[indexToModify] = {...TODOLIST[indexToModify], ...payload}
                resolve("Data updated successfully");
            }
            else {
                reject(new Error("Id You Are trying to Update Does Not Exist"));
            }
        },500);
    });
}
export const toDoPatchService = (payload) => {
    console.log("To Do Patch Service Called ",payload,typeof payload);
}
export const toDoPostService = async (payload) => {
    const newToDo = payload;
    console.log("To Do Post Service Called ",payload,typeof payload);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                //mimicing here it takes 1 sec to push into db.
                TODOLIST.push(newToDo);
                resolve("new Todo inserted Successfully")
            }
            catch(err){
                reject(err);
            }
            
        },1000)
    })
}
export const toDoDeleteService = async (payload,queryParam) => {
    console.log("To Do Delete Service Called ",payload,typeof payload);
    const queryId = queryParam?.id;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const indexToModify = TODOLIST?.findIndex((item) => item?.id==queryId);
            if(indexToModify!==-1)
            {
                TODOLIST?.splice(indexToModify,1);
                resolve("Data Deleted Succesfully")
            }
            else {
                reject(new Error("Data You Are trying to Delete Does Not Exist"));
            }
        },500);
    });
}