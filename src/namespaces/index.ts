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

  interface AppOpts extends Opts {
    stringify: {
      bigint: boolean;
      deterministic: boolean;
      indentationSpacing: number;
      maximumBreadth: number;
      maximumDepth: number;
    };
    logger: {
      [key: string]: LoggingLevelOpts;
    };
    rest: {
      exception: {
        [key: string]: {
          name: string;
          showHeaders: boolean;
        };
      };
    };
  }

  interface HttpOpts extends Opts {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    headers: {
      standard: {
        post: {
          applicationJson: {
            'Content-Type': 'application/json';
            'Access-Control-Allow-Headers': '*';
            'Access-Control-Allow-Origin': '*';
            'Access-Control-Allow-Methods': 'POST';
          };
          applicationXml: {
            'Content-Type': 'application/xml';
            'Access-Control-Allow-Headers': '*';
            'Access-Control-Allow-Origin': '*';
            'Access-Control-Allow-Methods': 'POST';
          };
        };
      };
    };
    opcodes: {
      [key: string]: string;
    };
    statuses: {
      200: {
        code: 200;
        text: 'Ok';
      };
      300: {
        code: 300;
        text: 'Multiple Choices';
      };
      301: {
        code: 301;
        text: 'Moved Permanently';
      };
      302: {
        code: 302;
        text: 'Found';
      };
      304: {
        code: 304;
        text: 'Not Modified';
      };
      307: {
        code: 307;
        text: 'Temporary Redirect';
      };
      308: {
        code: 308;
        text: 'Permanent Redirect';
      };
      400: {
        code: 400;
        text: 'Bad Request';
      };
      401: {
        code: 401;
        text: 'Unauthorized';
      };
      408: {
        code: 408;
        text: 'Request Timeout';
      };
      415: {
        code: 415;
        text: 'Unsupported Media Type';
      };
      500: {
        code: 500;
        text: 'Internal Server Error';
      };
      501: {
        code: 501;
        text: 'Not Implemented';
      };
      502: {
        code: 502;
        text: 'Bad Gateway';
      };
      503: {
        code: 503;
        text: 'Service Unavailable';
      };
      504: {
        code: 504;
        text: 'Gateway Timeout';
      };
      55: {
        code: 505;
        text: 'HTTP Version Not Supported';
      };
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
