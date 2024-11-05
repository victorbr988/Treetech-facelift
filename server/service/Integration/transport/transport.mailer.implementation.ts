import { ITransportMessage } from "./transport.contract";
import { transporterConfig } from "./transport.mailer.config";

interface MailerTransportOptionsDto {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export class MailerTransportService implements ITransportMessage<MailerTransportOptionsDto> {
  private transporter: typeof transporterConfig;
  
  constructor(transporter: typeof transporterConfig) {
    this.transporter = transporter;
  }
  
  async send(transporterDto: MailerTransportOptionsDto): Promise<void> {
    await this.transporter.sendMail({
      from: transporterDto.from,
      to: transporterDto.to,
      subject: transporterDto.subject,
      text: transporterDto.text,
    });
  }
}
