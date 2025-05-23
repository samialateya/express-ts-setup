import { ExposableError } from './exposable-error';

export class NotFoundError extends ExposableError {
  constructor(message: string, errors: object = {}) {
    super(message, errors);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}
