import {
  callDescribable,
  callGreeter,
  callMyForEach,
  firstElement,
  longest,
  makeDate,
  multiply,
  sum,
  sum2
} from './functions.poc';

describe('functions.poc.ts', () => {
  test('UT001 | callGreeter', () => callGreeter());

  test('UT002 | callDescribable', () => callDescribable());

  test('UT003 | firstElement<string>', () => {
    expect(firstElement<string>(['hello', 'hola', 'mar7aba'])).toStrictEqual(
      'hello'
    );
  });

  test('UT004 | firstElement<number>', () => {
    expect(firstElement<number>([1, 2, 3])).toStrictEqual(1);
  });

  test('UT005 | firstElement<boolean>', () => {
    expect(firstElement<boolean>([true, true, false])).toStrictEqual(true);
  });

  test('UT006 | firstElement<undefined>', () => {
    expect(firstElement<boolean>([])).toBe(undefined);
  });

  test('UT007 | longest<string>', () => {
    expect(longest('Waleed', 'Nasser')).toStrictEqual('Nasser');
  });

  test('UT008 | longest<Array<string>>', () => {
    /* eslint-disable @typescript-eslint/no-array-constructor */
    const arr1 = new Array('Waleed', 'Khaled', 'Mohammed', 'Al-Jaradat');
    const arr2 = new Array('Waleed', 'Khaled', 'Al-Jaradat');
    /* eslint-enable @typescript-eslint/no-array-constructor */
    expect(longest(arr1, arr2)).toBe(arr1);
  });

  test('UT009 | longest<number[]>', () => {
    expect(longest([1, 2, 3, 4, 5], [6, 7, 8, 9])).toStrictEqual([
      1, 2, 3, 4, 5
    ]);
  });

  test('UT010 | callMyForEach<string>', () =>
    callMyForEach([
      'Waleed',
      'Khaled',
      'Mohammed',
      'al-Mousa',
      'al-Abdallah',
      'Al-Jaradat'
    ]));

  test('UT011 | makeDate(timestamp)', () => console.log(makeDate(12345678)));

  test('UT012 | makeDate(month, day, year)', () =>
    console.log(makeDate(7, 15, 1990)));

  test('UT013 | makeDate(month, day, year)', () =>
    console.log(makeDate(2, 6, 1993)));

  test('UT014 | multiply', () => {
    expect(multiply(20, 1, 2, 3, 4, 5)).toStrictEqual([20, 40, 60, 80, 100]);
  });

  test('UT015 | sum', () => {
    const a = 10;
    const b = 20;
    const c = 30;
    expect(sum({ a, b, c })).toBe(a + b + c);
  });

  test('UT016 | sum2', () => {
    expect(sum2(1, 2, 3)).toBe(15);
    expect(sum2(2, 2, 3)).toBe(7);
    expect(sum2(1, 11, 10)).toBe(121);
  });
});
