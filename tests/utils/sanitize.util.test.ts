import stringify from 'safe-stable-stringify';
import sanitizeUtil from '../../src/utils/sanitize.util';

const log = (obj: unknown, log = false) => {
  const str = stringify(obj, null, 2);
  log && console.log(str);
  return str;
};

const testdata = {
  audit: {
    event: {
      positive: {
        withError: {
          err: {
            config: {
              url: 'localhost',
              method: 'POST',
              headers: {
                key: 'value'
              }
            },
            e: {
              name: 'exceptionName',
              message: 'exceptionMessage'
            }
          },
          data: {
            someKey: 'someValue',
            someObj: {
              someKey1: 'someValue1',
              someKey2: 'someValue2'
            }
          }
        },
        withoutError: {
          data: {
            someKey: 'someValue',
            someObj: {
              someKey1: 'someValue1',
              someKey2: 'someValue2'
            }
          }
        }
      }
    }
  },
  expected: {
    tests: {
      1: '{\n  "data": {\n    "someKey": "someValue",\n    "someObj": {\n      "someKey1": "someValue1",\n      "someKey2": "someValue2"\n    }\n  },\n  "err": {\n    "config": {\n      "additional": {\n        "headers": {\n          "key": "value"\n        }\n      },\n      "method": "POST",\n      "url": "localhost"\n    },\n    "message": "exceptionMessage",\n    "name": "exceptionName"\n  }\n}',
      2: '{\n  "data": {\n    "someKey": "someValue",\n    "someObj": {\n      "someKey1": "someValue1",\n      "someKey2": "someValue2"\n    }\n  }\n}'
    }
  }
};

describe('sanitize.util unit tests', () => {
  test('Unit Test 1 | Positive withError', () => {
    expect(
      log(sanitizeUtil(testdata.audit.event.positive.withError), true)
    ).toStrictEqual(testdata.expected.tests[1]);
  });

  test('Unit Test 2 | Positive withoutError', () => {
    expect(
      log(sanitizeUtil(testdata.audit.event.positive.withoutError), true)
    ).toStrictEqual(testdata.expected.tests[2]);
  });
});
