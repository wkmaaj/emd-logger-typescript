import { APP_CONSTANTS, HTTP_CONSTANTS } from '@/constants';
import axiosClient from './axios.client';

export default (
  method: string,
  url: string,
  headers: { [key: string]: string },
  data: unknown,
  isClientBrowser = false,
  additionalConfig?: { [key: string]: string }
) =>
  axiosClient(
    method,
    url,
    headers,
    data,
    APP_CONSTANTS,
    HTTP_CONSTANTS,
    isClientBrowser,
    additionalConfig
  );
