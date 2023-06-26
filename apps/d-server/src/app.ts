import express, { Application } from 'express';
import { testRoutes } from './routes/test.route';
import { API_PREFIX, API_VERSION } from './constants';

const app: Application = express();
const URL_PREFIX = `${API_PREFIX}${API_VERSION}`;

app.use(`${URL_PREFIX}/test`, testRoutes);

export { app };
