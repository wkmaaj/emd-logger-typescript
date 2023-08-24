import loggerConfig from './configs';
import { APP_CONSTANTS, HTTP_CONSTANTS } from './constants';
import restClient from './rest';
import { compose, stringify } from './utils/index.bak';

export default (
  name: string,
  isClientBrowser = false,
  urlContextPath = '/api/browser/logs'
) =>
  loggerConfig(
    name,
    restClient,
    compose,
    stringify,
    APP_CONSTANTS,
    HTTP_CONSTANTS,
    isClientBrowser,
    urlContextPath
  );
