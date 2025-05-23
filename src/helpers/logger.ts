import pino from 'pino';

class Logger {
  private logger: pino.Logger;

  private options: pino.LoggerOptions = {
    formatters: {
      level: label => ({
        level: label.toUpperCase(),
      }),
    },
    base: undefined,
    timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
  };

  constructor() {
    this.logger = pino(this.options);
  }

  debug(object: object, message?: string) {
    this.logger.debug(object, message);
  }

  info(object: object, message?: string) {
    this.logger.info(object, message);
  }

  warn(object: object, message?: string) {
    this.logger.warn(object, message);
  }

  error(error: Error, object: object, message?: string) {
    this.logger.error({ error, object }, message);
  }
}

const logger = new Logger();
export { logger };
