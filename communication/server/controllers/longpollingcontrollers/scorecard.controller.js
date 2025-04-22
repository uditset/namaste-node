import { getScoreCardDataService, updateScoreCardDataService } from "../../services/longpollingservices/scorecard.service.js";
import _ from 'lodash';
const clientScoreCardWaitlist = [];

export const getScoreCardData = (req,res) => {
    const clientData = req?.body;
    console.log(clientData);
    const dbData = getScoreCardDataService();
    if(!_.isEqual(clientData,dbData))
    {
        console.log(clientData);
        console.log(dbData)
        res?.json(dbData);
    }
    else{
        clientScoreCardWaitlist?.push(res);
    }
};

export const updateScoreCardData = (req,res) => {
    const payload = req?.body;
    const dbData = updateScoreCardDataService(payload);
    while(clientScoreCardWaitlist.length>0)
    {
        const res = clientScoreCardWaitlist.pop();
        res?.json(dbData);
    }
    res?.send("Score card data updated successfully");
}