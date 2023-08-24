import { compose, stringify } from '../../src/utils';
import data from '../data';
import log from '../log';

describe('compose.util', () => {
  test('compose.util   | positive | default export, asString parameter is true', () => {
    expect(
      log(compose(data.compose.unsanitizedObj, data.compose.msg, true, 2, 2))
    ).toStrictEqual(
      'testData.msg: {\n  "err": {\n    "config": "[Object]",\n    "e": "[Object]"\n  },\n  "data": {\n    "someKey": "someValue",\n    "someObj": "[Object]"\n  }\n}'
    );
  });

  test('compose.util   | positive | default export, asString parameter is false', () => {
    const res = compose(
      data.compose.unsanitizedObj,
      data.compose.msg,
      false,
      data.compose.indentationSpacing,
      4
    );

    expect(typeof res === 'string').toBe(true);
    expect(res.includes(data.compose.msg));
  });
});

describe('stringify.util', () => {
  test('stringify.util | positive | optional bigint parameter is default', () => {
    expect(log(stringify(data.stringify.obj))).toBe(
      data.stringify.expectedBigintTrue
    );
  });

  test('stringify.util | positive | optional bigint parameter is true', () => {
    expect(log(stringify(data.stringify.obj))).toBe(
      data.stringify.expectedBigintTrue
    );
  });

  test('stringify.util | positive | optional bigint parameter is false', () => {
    expect(
      stringify(data.stringify.obj, {
        bigint: false,
        maximumDepth: 4,
        maximumBreadth: 4,
        deterministic: false
      })
    ).toBe(data.stringify.expectedBigintFalse);
  });

  test('stringify.util | positive | optional bigint parameter is true, maximumDepoth is 10, maximumBreadth is 2', () => {
    expect(
      stringify(data.stringify.obj, {
        bigint: true,
        maximumDepth: 10,
        maximumBreadth: 2,
        deterministic: false
      })
    ).toBe(data.stringify.expectedBigintTrueCustomMaximumDepth);
  });

  test('stringify.util | positive | optional bigint parameter is false, maximumDepoth is 4, maximumBreadth is 12, deterministic is true', () => {
    expect(
      stringify(data.stringify.obj, {
        bigint: false,
        maximumDepth: 4,
        maximumBreadth: 12,
        deterministic: true
      })
    ).toBe(data.stringify.expectedBigintFalseCustomMaximumDepth);
  });
});
