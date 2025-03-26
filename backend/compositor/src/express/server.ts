import { once } from 'events';
import express from 'express';
import helmet from 'helmet';
import http from 'http';

import { config } from '../config';
import { loggerMiddleware } from '../utils/logger/middleware';
import { appRouter } from './router';
import { errorMiddleware } from '../utils/express/error';

export class Server {
    private app: express.Application;

    private http: http.Server;

    constructor(private port: number) {
        this.app = Server.createExpressApp();
    }

    static createExpressApp() {
        const app = express();

        app.use(helmet());
        app.use(express.json({ limit: config.service.maxFileSize }));
        app.use(express.urlencoded({ extended: true, limit: config.service.maxFileSize }));

        app.use(loggerMiddleware);

        app.use(appRouter);

        app.use(errorMiddleware);

        return app;
    }

    async start() {
        this.http = this.app.listen(this.port);
        await once(this.http, 'listening');
    }
}
