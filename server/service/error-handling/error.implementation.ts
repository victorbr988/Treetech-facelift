import { ILoggerService } from "../logger/logger.contract";
import { IError } from "./error.contract";

export class ErrorService implements IError {
  private readonly logger: ILoggerService;

  constructor(logger: ILoggerService) {
    this.logger = logger;
  }

  badRequest(message: string): void {
    this.logger.error(message);
    throw new Error(message);
  }

  unauthorized(message: string): void {
    this.logger.error(message);
    throw new Error(message);
  }

  notFound(message: string): void {
    this.logger.error(message);
    throw new Error(message);
  }
}
