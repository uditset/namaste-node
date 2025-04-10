# namaste-node
This is repository is puposly designed during the learning period of node js with namaste node course

Router was introduced in express to make the code modular in terms of seperating the controllers and their callback methods that run when the path on particular method type hit by the client.

if without router we try to import app in mainController.js and use it like app.all() / app.get() etc it will again result into tightly couple code with the app defined in index.js


Best folder structure practice Made in this for express

Servives folder contain logic related file
routes folder will contain files related to routing.
Controller folder contains files in which functions are return to return final functions.

route -> will call controller callback func -> controller will call service func to perform logic and service func will return data after the lodic is done to controller back -> controller will give response to client finally and socket will be closed.

//Date: 10-04-2025
//Doing CRUD operation with express.

