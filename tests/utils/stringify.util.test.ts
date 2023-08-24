import stringifyUtil from '../../src/utils/stringify.util';
import data from '../data';
import log from '../log';

describe('stringify.util', () => {
  const { stringify } = data;
  const defaultConfig = {
    bigint: true,
    maximumDepth: 10,
    maximumBreadth: 4,
    deterministic: true
  };
  const defaultIndentationSpacing = 2;

  test('UT001 | stringify.util | positive | optional bigint parameter is default', () => {
    expect(
      log(
        stringifyUtil(stringify.obj, defaultConfig, defaultIndentationSpacing)
      )
    ).toBe(stringify.expectedBigintTrue);
  });

  test('UT002 | stringify.util | positive | optional bigint parameter is true', () => {
    expect(
      log(
        stringifyUtil(stringify.obj, defaultConfig, defaultIndentationSpacing)
      )
    ).toBe(stringify.expectedBigintTrue);
  });

  test('UT003 | stringify.util | positive | optional bigint parameter is false', () => {
    expect(
      stringifyUtil(stringify.obj, {
        bigint: false,
        maximumDepth: 4,
        maximumBreadth: 4,
        deterministic: false
      })
    ).toBe(stringify.expectedBigintFalse);
  });

  test('UT004 | stringify.util | positive | optional bigint parameter is true, maximumDepoth is 10, maximumBreadth is 2', () => {
    expect(
      stringifyUtil(stringify.obj, {
        bigint: true,
        maximumDepth: 10,
        maximumBreadth: 2,
        deterministic: false
      })
    ).toBe(stringify.expectedBigintTrueCustomMaximumDepth);
  });

  test('UT005 | stringify.util | positive | optional bigint parameter is false, maximumDepoth is 4, maximumBreadth is 12, deterministic is true', () => {
    expect(
      stringifyUtil(stringify.obj, {
        bigint: false,
        maximumDepth: 4,
        maximumBreadth: 12,
        deterministic: true
      })
    ).toBe(stringify.expectedBigintFalseCustomMaximumDepth);
  });
});
