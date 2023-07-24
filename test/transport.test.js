import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {
  class Mytransport extends TransportStream {
    constructor(option) {
      super(option);
    }
    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );
      next();
    }
  }

  const logger = winston.createLogger({
    level: "silly",
    transports: [new Mytransport({})],
  });

  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello info");
  logger.http("Hello http");
  logger.verbose("Hello verbose");
  logger.debug("Hello debug");
  logger.silly("Hello silly");
});
