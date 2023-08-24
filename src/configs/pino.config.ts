import { IComposeConfig, ILoggingLevel, IRuntimeConfig } from '@/interfaces';
import { pino } from 'pino';

const getRuntimeConfig = (): IRuntimeConfig => ({
  runtimeConfig: {
    logLevel: { browser: 'info', server: 'debug' },
    basePath: '/api/log'
  }
});

const { runtimeConfig } = getRuntimeConfig();

const getLoggingLevel = (key: string): ILoggingLevel => {
  if (runtimeConfig.logLevel) {
    if (
      typeof runtimeConfig.logLevel === 'object' &&
      Object.keys(runtimeConfig.logLevel).includes(key) &&
      runtimeConfig.logLevel[key]
    ) {
      return { level: runtimeConfig.logLevel[key] };
    }
    return { level: <string>runtimeConfig.logLevel };
  }
  return { level: 'fatal' };
};

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
  isClientLogger: boolean,
  urlContextPath: string
) =>
  pino({
    ...(() =>
      isClientLogger
        ? {
            browser: {
              write: (o: object) => stringify(o),
              transmit: {
                ...getLoggingLevel('browser'),
                send: (level: string, logEvent: { messages: string[] }) =>
                  restClient(
                    httpConstants?.methods?.post &&
                      typeof httpConstants.methods.post === 'string'
                      ? httpConstants.methods.post
                      : '',
                    `${runtimeConfig?.basePath}${urlContextPath}`,
                    httpConstants?.headers?.standard &&
                      typeof httpConstants.headers.standard === 'object'
                      ? httpConstants.headers.standard
                      : {},
                    {
                      name,
                      level,
                      timestamp: new Date(),
                      log: logEvent.messages[0]
                    }
                  )
              }
            }
          }
        : {})(),
    ...getLoggingLevel('server'),
    formatters: {
      level: (label: string) => ({ level: label })
    },
    timestamp: () => `,"Timestamp":"${new Date(Date.now()).toISOString()}"`,
    base: {
      /**
       * An object consisting of key-values pairs to be added as child loggers to each line.
       * If not set, then nothing is added.
       *
       * @example
       * [2023-07-07 20:41:54.039 +0900] DEBUG (LoggerName): Some action or event occurred
       * env: "EnvironmentName"
       */
      name
    }
  });
