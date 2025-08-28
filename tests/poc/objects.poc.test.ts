import { callHappyBirthday, paintShape } from './objects.poc';

describe('objects.poc.ts', () => {
  test('UT001 | paintShape', () => {
    paintShape({ shape: 'circle' });
    paintShape({ shape: 'square', yPos: 9 });
    paintShape({ shape: 'pentagon', xPos: 88 });
    paintShape({ shape: 'rectangle', xPos: 10, yPos: 4, zPos: -71 });
  });

  test('UT002 | callHappyBirthday', () => callHappyBirthday());
});
