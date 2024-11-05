import { ErrorService } from "./error.implementation";
import { faker, tr } from "@faker-js/faker/.";
import { LoggerService } from "../logger/logger.implementation";
import { loggerConfig } from "../logger/logger.config";

jest.mock("../logger/logger.config");

describe("ErrorService", () => {
  let errorService: ErrorService;
  let loggerService: LoggerService;
  beforeEach(() => {
    jest.clearAllMocks();

    loggerService = new LoggerService(loggerConfig);
    errorService = new ErrorService(loggerService);

    loggerService.error = jest.fn();
  });

  describe("[BadRequest] When calling method on ErrorService", () => {
    it("should throw 'error' with the correct message", () => {
      const message = faker.lorem.sentence();

      expect(() => errorService.badRequest(message)).toThrow(message);
    });

    it("should call 'error' on the logger with the correct message", () => {
      const message = faker.lorem.sentence();
      
      try {
        errorService.badRequest(message);
      } catch (error) {}

      expect(loggerService.error).toHaveBeenCalledWith(message);
      expect(loggerService.error).toHaveBeenCalledTimes(1);
    });
  });

  describe("[Unauthorized] When calling method on ErrorService", () => {
    it("should throw 'error' with the correct message", () => {
      const message = faker.lorem.sentence();

      expect(() => errorService.unauthorized(message)).toThrow(message);
    });

    it("should call 'error' on the logger with the correct message", () => {
      const message = faker.lorem.sentence();
      
      try {
        errorService.unauthorized(message);
      } catch (error) {}

      expect(loggerService.error).toHaveBeenCalledWith(message);
      expect(loggerService.error).toHaveBeenCalledTimes(1);
    });
  });

  describe("[NotFound] When calling method on ErrorService", () => {
    it("should call 'error' with the correct message", () => {
      const message = faker.lorem.sentence();

      expect(() => errorService.notFound(message)).toThrow(message);
    });
    it("should call 'error' on the logger with the correct message", () => {
      const message = faker.lorem.sentence();
     
      try {
        errorService.notFound(message);
      } catch (error) {}

      expect(loggerService.error).toHaveBeenCalledWith(message);
      expect(loggerService.error).toHaveBeenCalledTimes(1);
    });
  });
})