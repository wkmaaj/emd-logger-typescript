/**
 * A JSON object of HTTP headers, methods, statuses, and
 * operational codes (opcodes) supported by the application.
 *
 * @author wkmaaj
 */
export default {
  headers: {
    standard: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST'
    }
  },
  methods: {
    delete: 'DELETE',
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    patch: 'PATCH'
  },
  opcodes: {
    success: '00',
    failure: '01'
  },
  statuses: {
    OK: {
      code: 200,
      text: 'Ok'
    },
    MULTIPLE_CHOICES: {
      code: 300,
      text: 'Multiple Choices'
    },
    MOVED_PERMANENTLY: {
      code: 301,
      text: 'Moved Permanently'
    },
    FOUND: {
      code: 302,
      text: 'Found'
    },
    NOT_MODIFIED: {
      code: 304,
      text: 'Not Modified'
    },
    TEMPORARY_REDIRECT: {
      code: 307,
      text: 'Temporary Redirect'
    },
    PERMANENT_REDIRECT: {
      code: 308,
      text: 'Permanent Redirect'
    },
    BAD_REQUEST: {
      code: 400,
      text: 'Bad Request'
    },
    UNAUTHORIZED: {
      code: 401,
      text: 'Unauthorized'
    },
    REQUEST_TIMEOUT: {
      code: 408,
      text: 'Request Timeout'
    },
    UNSUPPORTED_MEDIA_TYPE: {
      code: 415,
      text: 'Unsupported Media Type'
    },
    INTERNAL_SERVER_ERROR: {
      code: 500,
      text: 'Internal Server Error'
    },
    NOT_IMPLEMENTED: {
      code: 501,
      text: 'Not Implemented'
    },
    BAD_GATEWAY: {
      code: 502,
      text: 'Bad Gateway'
    },
    SERVICE_UNAVAILABLE: {
      code: 503,
      text: 'Service Unavailable'
    },
    GATEWAY_TIMEOUT: {
      code: 504,
      text: 'Gateway Timeout'
    },
    HTTP_VERSION_NOT_SUPPORTED: {
      code: 505,
      text: 'HTTP Version Not Supported'
    }
  }
};
