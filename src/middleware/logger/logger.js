import path from 'path'
import { fileURLToPath } from 'url'
import winston from 'winston'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configError = {
  level: "error",
  format: winston.format.json(),
  defoultMeta: {
    service: "user-service",
  },
  trasports: [
    new winston.transports.Console({
      level: "error",
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: __dirname + "../../logs/error.log",
      level: "error",
    }),
  ],
};

const configInfo = {
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({
      filename: __dirname + "../../logs/info.log",

      level: "info",
      maxsize: 500,
    }),new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    }),
  ],
};
const configWarnig = {
  level: "warn",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File({
      filename: __dirname + "../../logs/warn.log",

      level: "warn",
      maxsize: 500,
    }),new winston.transports.Console({
      level: "warn",
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    }),
  ],
};

export const loggerErr = winston.createLogger(configError);

export const loggerInfo = winston.createLogger(configInfo);

export const loggerWarn = winston.createLogger(configWarnig);