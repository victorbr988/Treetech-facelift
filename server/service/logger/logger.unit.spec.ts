import { loggerConfig } from "./logger.config";
import { faker } from "@faker-js/faker/.";
import { LoggerService } from "./logger.implementation";

jest.mock("./logger.config");

describe("LoggerService", () => {
  let loggerService: LoggerService;

  beforeEach(() => {
    jest.clearAllMocks();
    loggerService = new LoggerService(loggerConfig);

    // Mock dos métodos do loggerConfig
    loggerConfig.error = jest.fn();
    loggerConfig.warn = jest.fn();
    loggerConfig.info = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe("When calling error method on LoggerService", () => {
    it("should call 'error' the correct message", () => {
      const message = faker.lorem.sentence();
      loggerService.error = jest.fn();
      loggerService.error(message);

      expect(loggerService.error).toHaveBeenCalledWith(message);
      expect(loggerService.error).toHaveBeenCalledTimes(1);
    });
    it("should call 'error' on the logger with the correct message", () => {
      const message = faker.lorem.sentence();
      loggerService.error(message);

      expect(loggerConfig.error).toHaveBeenCalledWith(message);
      expect(loggerConfig.error).toHaveBeenCalledTimes(1);
    });
  });

  describe("When calling warn method on LoggerService", () => {
    it("should call 'warn' the correct message", () => {
      const message = faker.lorem.sentence();
      loggerService.warn = jest.fn();
      loggerService.warn(message);

      expect(loggerService.warn).toHaveBeenCalledWith(message);
      expect(loggerService.warn).toHaveBeenCalledTimes(1);
    });
    it("should call 'warn' on the logger with the correct message", () => {
      const message = faker.lorem.sentence();
      loggerService.warn(message);

      expect(loggerConfig.warn).toHaveBeenCalledWith(message);
      expect(loggerConfig.warn).toHaveBeenCalledTimes(1);
    });
  });

  describe("When calling info method on LoggerService", () => {
    it("should call 'info' the correct message", () => {
      const message = faker.lorem.sentence();
      loggerService.info = jest.fn();
      loggerService.info(message);

      expect(loggerService.info).toHaveBeenCalledWith(message);
      expect(loggerService.info).toHaveBeenCalledTimes(1);
    });
    it("should call 'info' on the logger with the correct message", () => {
      const message = faker.lorem.sentence();
      loggerConfig.info = jest.fn();

      loggerService.info(message);

      expect(loggerConfig.info).toHaveBeenCalledWith(message);
      expect(loggerConfig.info).toHaveBeenCalledTimes(1);
    });
  });
});