import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

export function printStartStatusToConsole(error?: Error) {
  if (error) {
    logger.error("‼️ Failed to start the server ‼️");
    logger.error(`‼️ Error name: ${error.name} ‼️`);
    logger.error(`‼️ Error message: ${error.message} ‼️`);

    if (process.env.NODE_ENV !== "prod") {
      console.error(error);
    }

    return;
  }

  logger.info("✨ Server is started at http://localhost");
}

export function logError(error: Error) {
  logger.error(`!!! Error name: ${error.name}`);
  logger.error(`!!! Request Error: ${error.message}`);

  if (process.env.NODE_ENV !== "prod") {
    console.log(error);
  }
}
