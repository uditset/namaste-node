import { alltypeOfRequestService, userDataGetRequestService } from "../services/main.service.js";

export const alltypeOfRequest = (req,res) => {
    //yahan p business logic hoga jo service se call krenge apan to finalize the response
    alltypeOfRequestService();
    //here the response send actually take place
    // console.log(req);
    // console.log(res);
    console.log("Now sending response from allTypeOfRequest");
    res?.send("I am up buddy for all types of requests!");
}

export const userDataGetRequest = (req,res) => {
    //yahan p business logic hoga jo service se call krenge apan to finalize the response
    userDataGetRequestService();
    //here the response send actually take place
    console.log("Now sending response from user Data request");
    res?.send("This is response to user Data");
}