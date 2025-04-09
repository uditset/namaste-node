import { alltypeOfRequest, userDataGetRequest } from '../controllers/main.controller.js'
import { Router } from "express";

export const mainRoutes = Router();
mainRoutes?.all('/',alltypeOfRequest);
mainRoutes?.get('/userdata',userDataGetRequest);
