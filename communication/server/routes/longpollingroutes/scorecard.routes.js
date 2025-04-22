import { Router } from "express";
import { getScoreCardData, updateScoreCardData } from "../../controllers/longpollingcontrollers/scorecard.controller.js";

const scoreCardRoute = Router();

scoreCardRoute?.post('/score-update',getScoreCardData);
scoreCardRoute?.post('/score-update-req',updateScoreCardData);

export default scoreCardRoute;