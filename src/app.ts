import express, { Application, Request, Response } from 'express';
import 'express-async-errors';

const app: Application = express();
app.use(express.json());

/* --------------------------------- Routes --------------------------------- */
app.get('/', (request: Request, response: Response) => {
  response.sendStatus(200);
});

/* ------------------------------- Middleware ------------------------------- */

export default app;
