export const jsonPayloadValidation = (err,req,res,next) => {
    if(err instanceof SyntaxError && err?.status==400 && 'body' in err)
    {
        //status 400 is for the bad request in payload data is not coming as expected.
        return res.status(400).json({ error: "Invalid JSON payload" });
    }
}