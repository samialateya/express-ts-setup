import { logger } from '../helpers/logger';

export function unhandledRejectionHandler(reason: Error) {
  logger.error(reason, {}, 'Unhandled Promise Rejection');
}

export function uncaughtExceptionHandler(error: Error) {
  logger.error(error, {}, 'Uncaught Exception');
}
