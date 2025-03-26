import { Router } from 'express';
import { config } from '../config';
import { examplesRouter } from './examples/router';

export const appRouter = Router();

appRouter.use(['/isAlive', '/isalive', '/health'], (_req, res) => res.status(200).send('alive'));

appRouter.use(config.examples.examplesRoute, examplesRouter);

appRouter.use('*', (_req, res) => res.status(404).send('Invalid Route'));
