/**
 * @author wkmaaj
 * @param this see {@link https://stackoverflow.com/a/44164125 this keyword for function parameter}
 * @param error
 * @param restClientType
 */
// export default function RestClientException(
//   this: {
//     name: string;
//     error: {
//       [key: string]:
//         | number
//         | string
//         | { [key: string]: number | string | unknown | undefined }
//         | undefined;
//     };
//   },
//   error: {
//     [key: string]: {
//       status: number;
//       message: string;
//       reason: string;
//       response: { status: number; data: unknown };
//       headers?: { [key: string]: string };
//     };
//   },
//   restClientType: string
// ) {
//   this.name = (APP_CONSTANTS.rest.exception as IExceptionConstant)[
//     restClientType
//   ].name;
//   this.error = {
//     ...error,
//     ...(() =>
//       (APP_CONSTANTS.rest.exception as IExceptionConstant)[restClientType]
//         .showHeaders && error?.config?.headers
//         ? {
//             headers: error.config.headers
//           }
//         : {})()
//   };
// }

export default class extends Error {
  constructor(
    public name: string,
    public error: {
      [key: string]:
        | number
        | string
        | unknown
        | { [key: string]: number | string | unknown | undefined }
        | undefined;
    }
  ) {
    super();
    this.name = name;
    this.error = error;
  }

  getName() {
    return this.name;
  }

  getError() {
    return this.error;
  }

  setName(name: string) {
    this.name = name;
  }

  setError(error: {
    [key: string]:
      | number
      | string
      | unknown
      | { [key: string]: number | string | unknown | undefined }
      | undefined;
  }) {
    this.error = error;
  }
}
