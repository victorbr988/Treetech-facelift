import { MailerTransportService } from "./transport.mailer.implementation";
import { transporterConfig } from "./transport.mailer.config";
import { faker } from '@faker-js/faker';

jest.mock("./transport.mailer.config");

describe("MailerTransport", () => {
  let transportService: MailerTransportService;
  const transporterOptions = {
    from: faker.internet.email(),
    to: faker.internet.email(),
    subject: faker.lorem.sentence(),
    text: faker.lorem.sentence(),
  }

  beforeEach(() => {
    jest.clearAllMocks();

    transportService = new MailerTransportService(transporterConfig);
    transporterConfig.sendMail = jest.fn();
  });

  describe("When calling send method on MailerTransport", () => {
    it("should call 'send' with the correct transporter options", async () => {
      transportService.send = jest.fn();
      await transportService.send(transporterOptions);
      
      expect(transportService.send).toHaveBeenCalledWith(transporterOptions);
      expect(transportService.send).toHaveBeenCalledTimes(1);
    });

    it("should call 'sendMail' on the transporter with the correct options", async () => {     
      await transportService.send(transporterOptions);

      expect(transporterConfig.sendMail).toHaveBeenCalledWith(transporterOptions);
      expect(transporterConfig.sendMail).toHaveBeenCalledTimes(1);
    });
  });
});
