import express from 'express';
import { config } from 'dotenv';
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
import homeRouter from './routes/hompage.routes.js';
import globalErrorMiddleware from './middlewares/globalErrorMiddleWare.js';
import scoreCardRoute from './routes/longpollingroutes/scorecard.routes.js';
export const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.static(join(__dirname, '../client')));
app.use('/cricket',scoreCardRoute);
app.use('/',homeRouter);
app.use('/',globalErrorMiddleware);