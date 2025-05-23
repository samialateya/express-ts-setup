import express, { Application, Request, Response } from 'express';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middleware/error-handler';
import { notFoundMiddleware } from './middleware/not-found';

const app: Application = express();
app.use(express.json());

/* --------------------------------- Routes --------------------------------- */
app.get('/', (request: Request, response: Response) => {
  response.sendStatus(200);
});

/* ------------------------------- Middleware ------------------------------- */
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
