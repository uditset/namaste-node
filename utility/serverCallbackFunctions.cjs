const serverCallBackFunction = (req,res) => {
    const endPoint = req?.url?.toLowerCase();
    switch (endPoint) {
        case '/':
            res?.end("Home Page");
            break;

        case '/favicon.ico':
            res?.end("Request for favicon.io is fulfullfed");
            break;

        case '/getsecretpage':
            res?.end("secret Page");
            break;
    
        default:
            res?.end("End Point Not Handled");
            break;
    }
}

module.exports = {serverCallBackFunction};