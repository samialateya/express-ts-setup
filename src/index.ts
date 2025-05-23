/* eslint-disable no-console */
import { createServer, RequestListener } from 'node:http';
import app from './app';
import {
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
} from './middleware/process-error-handler';

/* ------------------------------- Http Server ------------------------------ */
const server = createServer(app as RequestListener);
const port = process.env.PORT ?? 3000;

/* ----------------------------- Listener And Serve ----------------------------- */
server.listen(port, () => {
  console.log(`listening on port ${String(port)}`);
});

/* ----------------------------- process controller ---------------------------- */
process
  .on('unhandledRejection', unhandledRejectionHandler)
  .on('uncaughtException', uncaughtExceptionHandler);
