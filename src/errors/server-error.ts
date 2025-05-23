import { SuppressedError } from './suppressed-error';

export class ServerError extends SuppressedError {
  constructor(message: string, payload: object) {
    super(message, payload, 'error');
  }
}
