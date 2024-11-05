import path from "path";
import winston from "winston";

export const loggerConfig = winston.createLogger({
  level: "silly",  
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      filename: path.join(__dirname, 'logs', 'treetech.log'),
      level: "silly",
      handleExceptions: true,
    }),
  ],
});