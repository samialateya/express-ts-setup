import { Request, Response } from 'express';
import { ExposableError } from '../errors/exposable-error';
import { SuppressedError } from '../errors/suppressed-error';
import { logger } from '../helpers/logger';

export const errorHandlerMiddleware = (
  error: Error,
  request: Request,
  response: Response
) => {
  if (error instanceof ExposableError) {
    if (!error.message && Object.keys(error.errors).length === 0) {
      response.sendStatus(error.statusCode);
      return;
    }

    response
      .status(error.statusCode)
      .json({
        message: error.message,
        ...(Object.keys(error.errors).length > 0 && { errors: error.errors }),
      })
      .end();
    return;
  }

  if (error instanceof SuppressedError) {
    response.status(error.statusCode).end();
    return;
  }

  logger.error(
    error,
    {
      url: request.url,
      method: request.method,
      headers: request.headers,
      query: request.query,
      body: request.body,
    },
    'run time error'
  );
  response.status(500).end();
};
