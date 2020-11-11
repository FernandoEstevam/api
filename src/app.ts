import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import routes from './routes/index';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

dotenv.config();

app.use('/api/v1', routes);


export default app;