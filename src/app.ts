import express from 'express';
import config from 'config';
import db  from '../config/db'
import router from './router';
import Logger from '../config/logger';
import morganMiddleware from './middleware/morganMiddleware';

const app = express();

//JSON middleware
app.use(express.json());

//app porta
const port = config.get<number>('port');

//middleware
app.use(morganMiddleware);

//Routes
app.use('/api', router);


app.listen(port, async () => {
  await db();
  Logger.info(`🚀 Server ready at: http://localhost:${port}`);
})
