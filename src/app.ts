import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/index';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
	
app.use('/api/v1', routes);


export default app;