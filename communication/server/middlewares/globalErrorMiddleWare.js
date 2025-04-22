const globalErrorMiddleware = (err,req,res,next) => {
    res?.status(500)?.send("Server Encountered Error!!!");
}

export default globalErrorMiddleware;