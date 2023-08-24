export interface IStringifyConfig {
  bigint: boolean;
  maximumDepth: number;
  maximumBreadth: number;
  deterministic: boolean;
}

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
