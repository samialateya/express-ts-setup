import express, { Application, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import { errorHandlerMiddleware } from './middleware/error-handler';
import { notFoundMiddleware } from './middleware/not-found';
import { swaggerDocumentations } from './swagger';

const app: Application = express();

/* ------------------------------- Swagger Setup ------------------------------- */
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentations));
}

app.use(express.json());

/* --------------------------------- Routes --------------------------------- */
/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a successful response
 *     description: A simple endpoint that returns a 200 OK status.
 *     responses:
 *       200:
 *         description: Successful response
 */
app.get('/', (request: Request, response: Response) => {
  response.sendStatus(200);
});

/* ------------------------------- Middleware ------------------------------- */
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
