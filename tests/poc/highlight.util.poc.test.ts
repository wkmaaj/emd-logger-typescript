import {
  backwardCheck,
  forwardCheck,
  runForwardAndBackward
} from './highlight.util.poc';

describe('highlight.util.poc', () => {
  const original = 'tyyrannny';
  const updated = 'tyranny';

  test('UT001 | highlight.util.poc  | forwardCheck | something happens', () => {
    const expected = {
      0: { modified: false, original: 't', updated: 't' },
      1: { modified: false, original: 'y', updated: 'y' },
      2: { modified: true, original: 'y', updated: 'r' },
      3: { modified: true, original: 'r', updated: 'a' },
      4: { modified: true, original: 'a', updated: 'n' },
      5: { modified: false, original: 'n', updated: 'n' },
      6: { modified: true, original: 'n', updated: 'y' },
      7: { modified: true, original: 'n', updated: '' },
      8: { modified: true, original: 'y', updated: '' }
    };

    expect(forwardCheck(original, updated)).toStrictEqual(expected);
  });

  test('UT002 | highlight.util.poc  | backwardCheck | something happens', () => {
    const expected = {
      0: { modified: false, original: 'y', updated: 'y' },
      1: { modified: false, original: 'n', updated: 'n' },
      2: { modified: false, original: 'n', updated: 'n' },
      3: { modified: true, original: 'n', updated: 'a' },
      4: { modified: true, original: 'a', updated: 'r' },
      5: { modified: true, original: 'r', updated: 'y' },
      6: { modified: true, original: 'y', updated: 't' },
      7: { modified: true, original: 'y', updated: '' },
      8: { modified: true, original: 't', updated: '' }
    };

    expect(backwardCheck(original, updated)).toStrictEqual(expected);
  });

  test('UT003 | highlight.util.poc  | runForwardAndBackward | something happens', () => {
    const expected = {
      0: {
        backward: { modified: true, original: 't', updated: '' },
        forward: { modified: false, original: 't', updated: 't' }
      },
      1: {
        backward: { modified: true, original: 'y', updated: '' },
        forward: { modified: false, original: 'y', updated: 'y' }
      },
      2: {
        backward: { modified: true, original: 'y', updated: 't' },
        forward: { modified: true, original: 'y', updated: 'r' }
      },
      3: {
        backward: { modified: true, original: 'r', updated: 'y' },
        forward: { modified: true, original: 'r', updated: 'a' }
      },
      4: {
        backward: { modified: true, original: 'a', updated: 'r' },
        forward: { modified: true, original: 'a', updated: 'n' }
      },
      5: {
        backward: { modified: true, original: 'n', updated: 'a' },
        forward: { modified: false, original: 'n', updated: 'n' }
      },
      6: {
        backward: { modified: false, original: 'n', updated: 'n' },
        forward: { modified: true, original: 'n', updated: 'y' }
      },
      7: {
        backward: { modified: false, original: 'n', updated: 'n' },
        forward: { modified: true, original: 'n', updated: '' }
      },
      8: {
        backward: { modified: false, original: 'y', updated: 'y' },
        forward: { modified: true, original: 'y', updated: '' }
      }
    };

    expect(runForwardAndBackward(original, updated)).toStrictEqual(expected);
  });
});
