/**
 * A JSON object of constant values supported by the application.
 *
 * @author wkmaaj
 */
export default {
  stringify: {
    maximumBreadth: 2,
    maximumDepth: 2,
    indentationSpacing: 2
  },
  logger: {
    defaultBrowserLogLevel: 'warn',
    defaultServerLogLevel: 'info'
  },
  rest: {
    exception: {
      api: { name: 'ApiException', showHeaders: true },
      browser: { name: 'BrowserException', showHeaders: false },
      client: { name: 'ClientException', showHeaders: false },
      standard: { name: 'DefaultRestException', showHeaders: true },
      server: { name: 'ServerException', showHeaders: true }
    }
  }
};
