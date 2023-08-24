import sanitizeUtil from '../../src/utils/sanitize.util';
import data from '../data';
import log from '../log';

describe('sanitize.util', () => {
  const { audit } = data;

  test('UT001 | Positive withError', () => {
    expect(log(sanitizeUtil(audit.event.positive.withError))).toStrictEqual(
      audit.expected.tests[1]
    );
  });

  test('UT002 | Positive withoutError', () => {
    expect(log(sanitizeUtil(audit.event.positive.withoutError))).toStrictEqual(
      audit.expected.tests[2]
    );
  });
});
