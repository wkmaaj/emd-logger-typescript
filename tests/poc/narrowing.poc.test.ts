import {
  equalityNarrowingExample,
  equalityNarrowingPrintAll,
  getArea,
  isFish,
  logValue,
  moveAnimal,
  multiplyAll,
  multiplyContainerValue,
  narrowArrayWithTypePredicate,
  padLeft,
  printAll,
  safePrintAll
} from './narrowing.poc';

describe('narrowing.poc.ts', () => {
  const padLeftStr = 'padLeft';
  const multiplyAllFactor = 10;

  test('UT001 | padLeft(number)', () => {
    expect(padLeft(4, padLeftStr)).toStrictEqual(`    ${padLeftStr}`);
  });

  test('UT002 | padLeft(string)', () => {
    expect(padLeft('function ', padLeftStr)).toStrictEqual(
      `function ${padLeftStr}`
    );
  });

  test('UT003 | printAll(string[])', () => {
    printAll(['Waleed', 'Khaled', 'Mohammed', 'al-Mousa', 'Al-Jaradat']);
  });

  test('UT004 | printAll(string)', () => {
    printAll('Waleed');
  });

  test('UT005 | printAll(null)', () => {
    printAll(null);
  });

  test('UT006 | safePrintAll(string[])', () => {
    safePrintAll(['Waleed', 'Khaled', 'Mohammed', 'al-Mousa', 'Al-Jaradat']);
  });

  test('UT007 | safePrintAll(string)', () => {
    safePrintAll('Waleed');
  });

  test('UT008 | safePrintAll(null)', () => {
    console.log('safePrintAll ==> running null');
    safePrintAll(null);
  });

  test('UT009 | safePrintAll("")', () => {
    console.log('safePrintAll ==> running empty string');
    safePrintAll('');
  });

  test('UT010 | multiplyAll(undefined)', () => {
    expect(multiplyAll(undefined, multiplyAllFactor)).toStrictEqual(undefined);
  });

  test('UT011 | multiplyAll(number[])', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(multiplyAll(values, multiplyAllFactor)).toStrictEqual([
      10, 20, 30, 40, 50, 60, 70, 80, 90
    ]);
  });

  test('UT012 | equalityNarrowingPrintAll(null)', () => {
    console.log('equalityNarrowingPrintAll ==> running null');
    equalityNarrowingPrintAll(null);
  });

  test('UT013 | equalityNarrowingPrintAll("")', () => {
    console.log('equalityNarrowingPrintAll ==> running empty string');
    equalityNarrowingPrintAll('');
  });

  test('UT014 | equalityNarrowingExample(string, string) (different strings)', () => {
    const x = 'waleed';
    const y = 'KHALED';
    expect(equalityNarrowingExample(x, y)).toStrictEqual({ x, y });
  });

  test('UT015 | equalityNarrowingExample(string, boolean)', () => {
    const x = 'Waleed';
    const y = true;
    expect(equalityNarrowingExample(x, y)).toStrictEqual({ x, y });
  });

  test('UT016 | equalityNarrowingExample(number, string)', () => {
    const x = 14;
    const y = 'KhaLED';
    expect(equalityNarrowingExample(x, y)).toStrictEqual({ x, y });
  });

  test('UT017 | equalityNarrowingExample(number, boolean)', () => {
    const x = 14;
    const y = true;
    expect(equalityNarrowingExample(x, y)).toStrictEqual({ x, y });
  });

  test('UT018 | equalityNarrowingExample(string, string) (same strings)', () => {
    const x = 'Waleed';
    const y = 'Waleed';
    expect(equalityNarrowingExample(x, y)).toStrictEqual({
      x: 'WALEED',
      y: 'waleed'
    });
  });

  test('UT019 | multiplyContainerValue({number})', () => {
    expect(multiplyContainerValue({ value: 14 }, 10)).toBe(140);
  });

  test('UT020 | multiplyContainerValue({null})', () => {
    expect(multiplyContainerValue({ value: null }, 10)).toBe(-1);
  });

  test('UT021 | multiplyContainerValue({undefined})', () => {
    expect(multiplyContainerValue({ value: undefined }, 10)).toBe(-1);
  });

  test('UT022 | moveAnimal(Bird)', () => {
    const bird = { fly: () => console.log('bird flying.') };
    expect(moveAnimal(bird)).toStrictEqual(undefined);
  });

  test('UT023 | moveAnimal(Fish)', () => {
    const fish = { swim: () => console.log('fish swimming.') };
    expect(moveAnimal(fish)).toStrictEqual(undefined);
  });

  test('UT024 | moveAnimal(Human) (fly and swim properties present)', () => {
    const human = { fly: () => 'human flying.', swim: () => 'human swimming.' };
    expect(moveAnimal(human)).toStrictEqual(human.swim());
  });

  test('UT025 | moveAnimal(Human) (fly property present)', () => {
    const human = { fly: () => 'human flying.' };
    expect(moveAnimal(human)).toStrictEqual(human.fly());
  });

  test('UT026 | moveAnimal(Human) (swim property present)', () => {
    const human = { swim: () => 'human swimming.' };
    expect(moveAnimal(human)).toStrictEqual(human.swim());
  });

  test('UT027 | moveAnimal(Human) (no properties present)', () => {
    expect(moveAnimal({})).toStrictEqual(undefined);
  });

  test('UT028 | logValue(Date)', () => {
    const date = new Date();
    expect(logValue(date)).toStrictEqual(date.toUTCString());
  });

  test('UT029 | logValue(string)', () => {
    const date = 'date';
    expect(logValue(date)).toStrictEqual('DATE');
  });

  test('UT030 | isFish(Bird)', () => {
    const bird = { fly: () => console.log('bird flying.') };
    expect(isFish(bird)).toBe(false);
  });

  test('UT031 | isFish(Fish)', () => {
    const fish = { swim: () => console.log('fish swimming.') };
    expect(isFish(fish)).toBe(true);
  });

  test('UT032 | isFish(Human)', () => {
    const human1 = {
      fly: () => 'human flying.',
      swim: () => 'human swimming.'
    };
    const human2 = { fly: () => 'human flying.', run: () => 'human running.' };
    expect(isFish(human1)).toBe(true);
    expect(isFish(human2)).toBe(false);
  });

  test('UT033 | narrowArrayWithTypePredicate', () =>
    narrowArrayWithTypePredicate());

  test('UT034 | getArea(square)', () =>
    expect(getArea({ kind: 'square', length: 6 })).toBe(36));

  test('UT035 | getArea(circle)', () =>
    expect(getArea({ kind: 'circle', radius: 1 })).toBe(Math.PI));

  test('UT036 | getArea(rectangle)', () =>
    expect(getArea({ kind: 'rectangle', length: 4, width: 5 })).toBe(20));

  test('UT037 | getArea(pentagon)', () =>
    expect(getArea({ kind: 'pentagon' })).toBe(-1));
});
