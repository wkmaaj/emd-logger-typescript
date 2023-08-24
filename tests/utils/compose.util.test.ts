import { stringify } from '../../src/utils';
import composeUtil from '../../src/utils/compose.util';
import data from '../data';
import log from '../log';

describe('compose.util', () => {
  const { compose } = data;

  test('UT001 | compose.util   | positive | default export, asString parameter is true', () => {
    expect(
      log(
        composeUtil(compose.unsanitizedObj, compose.msg, true, 2, 2, stringify)
      )
    ).toStrictEqual(
      'testData.msg: {\n  "err": {\n    "config": "[Object]",\n    "e": "[Object]"\n  },\n  "data": {\n    "someKey": "someValue",\n    "someObj": "[Object]"\n  }\n}'
    );
  });

  test('UT002 | compose.util   | positive | default export, asString parameter is false', () => {
    const res = composeUtil(
      compose.unsanitizedObj,
      compose.msg,
      false,
      compose.indentationSpacing,
      4,
      stringify
    );

    expect(typeof res === 'string').toBe(true);
    expect(res.includes(compose.msg));
  });
});
