import {
  getFirstThree,
  printCoordinates,
  printId,
  welcomePeople
} from './everyday.types.poc';

describe('everyday.types.poc', () => {
  test('UT001 | everyday.types.poc | printCoordinates (x, y)', () => {
    printCoordinates({ x: 2, y: 3 });
  });

  test('UT002 | everyday.types.poc | printCoordinates (x, y, z)', () => {
    printCoordinates({ x: 4, y: 5, z: 6 });
  });

  test('UT003 | everyday.types.poc | printCoordinates (x, y, z, str)', () => {
    printCoordinates({ x: 7, y: 8, z: 9, str: 'hola mundo' });
  });

  test('UT004 | everyday.types.poc | printCoordinates (x, y, str)', () => {
    printCoordinates({ x: 7, y: 8, str: 'Mar7aBa 3alim' });
  });

  test('UT005 | everyday.types.poc | printId (string)', () => {
    printId('hello world');
  });

  test('UT006 | everyday.types.poc | printId (number)', () => {
    printId(15);
  });

  test('UT007 | everyday.types.poc | printId (boolean false)', () => {
    printId(false);
  });

  test('UT008 | everyday.types.poc | printId (boolean true)', () => {
    printId(true);
  });

  test('UT009 | everyday.types.poc | welcomePeople (string)', () => {
    welcomePeople('Waleed');
  });

  test('UT010 | everyday.types.poc | welcomePeople (string[])', () => {
    welcomePeople(['Waleed', 'Nasser', 'Mohammed', 'Malik']);
  });

  test('UT011 | everyday.types.poc | getFirstThree (string)', () => {
    expect(getFirstThree('Waleed')).toStrictEqual('Wal');
  });

  test('UT012 | everyday.types.poc | getFirstThree (number[])', () => {
    expect(getFirstThree([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([1, 2, 3]);
  });
});
