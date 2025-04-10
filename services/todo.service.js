export const toDoGetService = (req) => {
    const payload = req?.body;
    console.log("To Do Get Service Called ",payload,typeof payload);
}
export const toDoPutService = (req) => {
    console.log(req);
    const payload = req?.body;
    console.log("To Do Put Service Called ",payload,typeof payload);
}
export const toDoPatchService = (req) => {
    const payload = req?.body;
    console.log("To Do Patch Service Called ",payload,typeof payload);
}
export const toDoPostService = (req) => {
    const payload = req?.body;
    console.log("To Do Post Service Called ",payload,typeof payload);
}
export const toDoDeleteService = (req) => {
    const payload = req?.body;
    console.log("To Do Delete Service Called ",payload,typeof payload);
}