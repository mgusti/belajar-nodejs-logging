import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "Hello Logging",
  });
});
