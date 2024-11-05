import { loggerConfig } from "./logger.config";
import { ILoggerService } from "./logger.contract";

export class LoggerService implements ILoggerService {
  private readonly logger: typeof loggerConfig;

  constructor(logger: typeof loggerConfig) {
    this.logger = logger;
  }

  error(message: string): void {
    this.logger.error(message)
  }
  warn(message: string): void {
    this.logger.warn(message)
  }
  info(message: string): void {
    this.logger.info(message)
  }
}
