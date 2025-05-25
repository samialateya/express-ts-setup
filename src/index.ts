import { config } from 'dotenv';
import { createServer, RequestListener } from 'node:http';
import app from './app';
import { logger } from './helpers/logger';
import {
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
} from './middleware/process-error-handler';

config(); // Load environment variables from .env file

/* ------------------------------- Http Server ------------------------------ */
const server = createServer(app as RequestListener);
const port = process.env.PORT ?? 3000;
const environment = process.env.NODE_ENV ?? 'development';

/* ----------------------------- Listener And Serve ----------------------------- */
server.listen(port, () => {
  logger.info({}, `Server is running on port ${port} in ${environment} mode`);
});

/* ----------------------------- process controller ---------------------------- */
process
  .on('unhandledRejection', unhandledRejectionHandler)
  .on('uncaughtException', uncaughtExceptionHandler);
