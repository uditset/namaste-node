import { Router } from "express";
import { getHomePage, getHomePageData, updateHomePageData } from "../controllers/homepage.controller.js";

const homeRouter = Router();

homeRouter?.get('/home',getHomePage);
homeRouter?.get('/homedata',getHomePageData);
homeRouter?.post('/homedata',updateHomePageData);

export default homeRouter;