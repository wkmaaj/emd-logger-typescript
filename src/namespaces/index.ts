declare namespace EmdLogger {
  interface Opts {
    [key: string]: unknown;
  }

  interface StringifyOpts extends Opts {
    bigint: boolean;
    maximumDepth: number;
    maximumBreadth: number;
    deterministic: boolean;
  }

  interface ComposeOptsV1 extends StringifyOpts {
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

  interface ComposeOptsV2 extends Opts {
    obj: unknown;
    msg: string;
    asString: boolean;
    stringifyOpts: StringifyOpts;
    [key: string]:
      | string
      | number
      | boolean
      | unknown
      | { [key: string]: string };
  }

  interface ExceptionConstant extends Opts {
    [key: string]: {
      name: string;
      showHeaders: boolean;
    };
  }

  interface LoggingLevelOpts extends Opts {
    level: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
  }

  interface ErrorOpts extends Opts {
    name: string;
    message: string;
    stack: string;
    cause: unknown;
  }

  interface ExceptionEvent extends ErrorOpts {
    err: {
      config: {
        url: string;
        method: string;
        additional: { [key: string]: string } | undefined;
      };
    };
  }

  /**
   * see {@link https://stackoverflow.com/a/57192972 Typescript: No index signature with a parameter of type 'string' was found on type}
   */
  interface RuntimeOpts extends LoggingLevelOpts {
    config: {
      basePath: string;
      [key: string]: string | { [key: string]: string };
    };
  }
}
