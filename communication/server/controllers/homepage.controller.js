import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { homePageUserData, updateUserData } from "../services/homapage.service.js";

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname,'..','..'))
const indexHtmlFile = join(__dirname,'..','..','client','public','index.html');

export const getHomePage = (req,res) => {
    res?.status(200)?.sendFile(indexHtmlFile);
};

export const getHomePageData = (req,res) => {
    const data = homePageUserData();
    res?.status(200)?.json(data);
};

export const updateHomePageData = (req,res) => {
    const user = req?.body;
    console.log(user);
    const data = updateUserData(user);
    res?.status(200)?.json(data);
};