import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import * as middlewares from './middlewares';

import api from './api';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();

// CONFIGURATION

app.use(cors()); // Enable Cors
app.use(morgan('dev'));
app.use(helmet()); // Sets HTTP response headers
app.use(express.json()); // Parse incoming request with JSON payloads

// Test Emjoi Data
app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// API Endpoints
// ****  USERS ****
// ****  PRODUCTS ****

export default app;
