import { Router } from 'express';
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';
import { config } from '../../config';

const {
    examples: { uri },
    service,
} = config;

export const examplesRouter = Router();

examplesRouter.all('*', createProxyMiddleware({ target: uri, onProxyReq: fixRequestBody, proxyTimeout: service.requestTimeout }));
