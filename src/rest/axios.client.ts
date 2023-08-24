import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import http from 'http';
import https from 'https';
import RestClientException from './exception.client';

const requestConfigOpts = (httpConstants: {
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
}) => ({
  timeout: 300000, // 300,000 ms equals 5 mins
  headers: httpConstants.headers.standard,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  maxRedirects: 10 // limits the number of allowable HTTP 3xx redirects
});

const generateAxiosInstance = (
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
  isClientBrowser: boolean
) => {
  const axiosInstance = axios.create(requestConfigOpts(httpConstants));
  if (isClientBrowser) {
    return axiosInstance;
  }

  axiosInstance.interceptors.request.use(
    (
      requestConfig: InternalAxiosRequestConfig<{
        headers: { [key: string]: string };
        [key: string]: string | { [key: string]: string } | undefined;
      }>
    ) => {
      let headers = {};
      if (requestConfig.headers) {
        Object.keys(requestConfig.headers)
          .filter((headerKey) => headerKey !== 'host')
          .forEach((filteredHeaderKey) => {
            headers = {
              ...headers,
              [filteredHeaderKey]: requestConfig.headers[filteredHeaderKey]
            };
          });
        requestConfig.headers.set(headers);
      }
      return requestConfig;
    }
  );
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response
  );
  return axiosInstance;
};

export default async (
  method: string,
  url: string,
  headers: { [key: string]: string },
  data: unknown,
  appConstants: {
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
  isClientBrowser: boolean,
  additionalConfig?: { [key: string]: string }
) =>
  generateAxiosInstance(httpConstants, isClientBrowser)
    .request({
      url,
      method,
      headers,
      data,
      ...additionalConfig
    })
    .catch((error) => {
      let apiError = {};

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx.
        apiError = {
          status:
            error.response?.data?.error?.status ??
            error.response?.status ??
            error?.status ??
            httpConstants.statuses.BAD_REQUEST.code,
          message: error.message,
          reason: 'Client received error response from server',
          response: {
            status:
              error.response?.data?.error?.status ??
              error.response?.status ??
              error?.status ??
              httpConstants.statuses.BAD_REQUEST.code,
            ...(() =>
              error?.response?.data ? { data: error.response.data } : {})()
          }
        };
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in Node.js
        apiError = {
          status: httpConstants.statuses.REQUEST_TIMEOUT.code,
          message: error.message,
          reason: 'Client received NO response from server'
        };
      } else {
        // Something happened in setting up the request that triggered an error
        apiError = {
          status: httpConstants.statuses.INTERNAL_SERVER_ERROR.code,
          message: error.message,
          reason: 'Client encountered an error building the request'
        };
      }

      throw new RestClientException(
        appConstants.rest.exception.standard.name as string,
        {
          ...apiError,
          url: error.config.url as string
        }
      );
    });
