/* eslint-disable max-len, no-trailing-spaces */
/**
 * An interface specifying the configuration options available for stringification of a JSON object.
 *
 * @author wkmaaj
 * @param bigint a boolean flag indicating whether or not bigint values are converted to numbers, default is true, if set to false then the bigint values are ignored when serializing an object.
 * @param maximumDepth the number of object nesting levels that will be serialized.
 * @param deterministic a boolean flag.
 */
export interface IStringifyConfig {
  bigint: boolean;
  maximumDepth: number;
  maximumBreadth: number;
  deterministic: boolean;
}
/* eslint-enable max-len, no-trailing-spaces */

/**
 * @author wkmaaj
 * @param obj
 * @param msg a string message.
 */
export interface IComposeConfig extends IStringifyConfig {
  obj: unknown;
  msg: string;
  asString: boolean;
  [key: string]:
    | string
    | number
    | boolean
    | unknown
    | { [key: string]: string };
}

export interface IExceptionConstant {
  [key: string]: {
    name: string;
    showHeaders: boolean;
  };
}

/**
 * see {@link https://stackoverflow.com/a/57192972 Typescript: No index signature with a parameter of type 'string' was found on type}
 */
export interface IRuntimeConfig {
  runtimeConfig: {
    logLevel: string | { [key: string]: string };
    basePath: string;
    [key: string]: string | { [key: string]: string };
  };
}

export interface ILoggingLevel {
  level: string;
}

export interface IAuditEvent {
  err?: {
    config: {
      url: string;
      method: string;
      additional?: { [key: string]: string | { [key: string]: string } };
      [key: string]:
        | string
        | { [key: string]: string | { [key: string]: string } }
        | undefined;
    };
    e?: Error;
    [key: string]:
      | string
      | Error
      | {
          [key: string]:
            | string
            | { [key: string]: string | { [key: string]: string } }
            | undefined;
        }
      | undefined;
  };
  [key: string]:
    | string
    | Error
    | {
        [key: string]:
          | string
          | Error
          | {
              [key: string]:
                | string
                | { [key: string]: string | { [key: string]: string } }
                | undefined;
            }
          | undefined;
      }
    | undefined;
}

export interface IExceptionEvent {
  err: {
    config: {
      url: string;
      method: string;
      additional?: { [key: string]: string } | undefined;
    };
    name?: string | undefined;
    message?: string | undefined;
    stack?: string | undefined;
    cause?: unknown;
  };
}
