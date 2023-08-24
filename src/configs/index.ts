import { IComposeConfig } from '@/interfaces';
import pinoConfig from './pino.config';

export default (
  name: string,
  restClient: (
    method: string,
    url: string,
    headers: { [key: string]: string },
    data: { [key: string]: string | boolean | Date }
  ) => unknown,
  compose: (config: IComposeConfig) => string,
  stringify: (obj: unknown) => string,
  appConstants: {
    stringify: {
      indentationSpacing: number;
      maximumDepth: number;
    };
    rest: {
      exception: {
        [key: string]: {
          [key: string]: string | boolean;
        };
      };
    };
    [key: string]:
      | string
      | boolean
      | number
      | {
          [key: string]:
            | string
            | boolean
            | number
            | {
                [key: string]: {
                  [key: string]: string | boolean | number;
                };
              };
        };
  },
  httpConstants: {
    headers: {
      [key: string]: {
        [key: string]: string;
      };
    };
    statuses: {
      [key: string]: {
        [key: string]: number | string;
      };
    };
    [key: string]: {
      [key: string]: string | number | { [key: string]: string | number };
    };
  },
  isClientBrowser = false,
  urlContextPath = ''
) => {
  const logger = pinoConfig(
    name,
    restClient,
    compose,
    stringify,
    httpConstants,
    isClientBrowser,
    urlContextPath
  );
  return {
    trace: (
      obj: unknown,
      msg = '',
      asString = false,
      indentationSpacing = appConstants.stringify.indentationSpacing,
      maximumDepth = appConstants.stringify.maximumDepth
    ) => {
      logger.trace(
        compose({
          obj,
          msg,
          asString,
          indentationSpacing,
          maximumDepth,
          maximumBreadth: 4,
          bigint: true,
          deterministic: true
        })
      );
      return obj;
    },
    debug: (
      obj: unknown,
      msg = '',
      asString = false,
      indentationSpacing = appConstants.stringify.indentationSpacing,
      maximumDepth = appConstants.stringify.maximumDepth
    ) => {
      logger.debug(
        compose({
          obj,
          msg,
          asString,
          indentationSpacing,
          maximumDepth,
          maximumBreadth: 4,
          bigint: true,
          deterministic: true
        })
      );
      return obj;
    },
    info: (
      obj: unknown,
      msg = '',
      asString = false,
      indentationSpacing = appConstants.stringify.indentationSpacing,
      maximumDepth = appConstants.stringify.maximumDepth
    ) => {
      logger.info(
        compose({
          obj,
          msg,
          asString,
          indentationSpacing,
          maximumDepth,
          maximumBreadth: 4,
          bigint: true,
          deterministic: true
        })
      );
      return obj;
    },
    warn: (
      obj: unknown,
      msg = '',
      asString = false,
      indentationSpacing = appConstants.stringify.indentationSpacing,
      maximumDepth = appConstants.stringify.maximumDepth
    ) => {
      logger.warn(
        compose({
          obj,
          msg,
          asString,
          indentationSpacing,
          maximumDepth,
          maximumBreadth: 4,
          bigint: true,
          deterministic: true
        })
      );
      return obj;
    },
    error: (
      obj: unknown,
      msg = '',
      asString = false,
      indentationSpacing = appConstants.stringify.indentationSpacing,
      maximumDepth = appConstants.stringify.maximumDepth
    ) => {
      logger.error(
        compose({
          obj,
          msg,
          asString,
          indentationSpacing,
          maximumDepth,
          maximumBreadth: 4,
          bigint: true,
          deterministic: true
        })
      );
      return obj;
    },
    fatal: (
      obj: unknown,
      msg = '',
      asString = false,
      indentationSpacing = appConstants.stringify.indentationSpacing,
      maximumDepth = appConstants.stringify.maximumDepth
    ) => {
      logger.fatal(
        compose({
          obj,
          msg,
          asString,
          indentationSpacing,
          maximumDepth,
          maximumBreadth: 4,
          bigint: true,
          deterministic: true
        })
      );
      return obj;
    }
  };
};
