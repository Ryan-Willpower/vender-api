import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

export function printStartStatusToConsole() {
  logger.info("✨ Server is started at http://localhost");
}
