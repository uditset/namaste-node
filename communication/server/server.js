import { app } from "./app.js";
const PORT = process?.env?.PORT || "2012";

app.listen(PORT, () => {
    console.log("Express server is started");
});