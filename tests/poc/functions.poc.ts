/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions Typescript: Documentation - More on Functions}
 */
type GreeterFunction = (s: string) => void;

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures Typescript: Documentation - More on Functions}
 */
type DescribableFunction = {
  description: string;
  (arg: number): boolean;
};

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures Typescript: Documentation - More on Functions}
 */
interface CallOrConstruct {
  (s: string): string;
  new (s: string): Date;
}

/**
 *
 * @param fn a function of type {@link GreeterFunction}.
 * @param str a string
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions Typescript: Documentation - More on Functions}
 */
const greeterFunction = (fn: GreeterFunction, str = '¡Hola Mundo!') => fn(str);

/**
 *
 * @param s a string.
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions Typescript: Documentation - More on Functions}
 */
const consoleFunction = (s: string) => console.log(s);

export const callGreeter = () => {
  greeterFunction(consoleFunction);
  greeterFunction(consoleFunction, 'Hello World!');
};

const descFn = (arg: number) => arg < 6;
descFn.description = 'descFn';

/**
 *
 * @param fn a function of type {@link DescribableFunction}.
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures Typescript: Documentation - More on Functions}
 */
const describableFn = (fn: DescribableFunction) => {
  console.log(`${fn.description} returned ${fn(1)}`);
  console.log(`${fn.description} returned ${fn(10)}`);
  console.log(`${fn.description} returned ${fn(2)}`);
  console.log(`${fn.description} returned ${fn(9)}`);
  console.log(`${fn.description} returned ${fn(3)}`);
  console.log(`${fn.description} returned ${fn(8)}`);
  console.log(`${fn.description} returned ${fn(100)}`);
};

export const callDescribable = () => describableFn(descFn);

const callOrConstructFn = (fn: CallOrConstruct) => {
  /* eslint-disable new-cap */
  if (Math.random() < 0.5) {
    return new fn('construct signature');
  }
  /* eslint-enable new-cap */
  return fn('call signature');
};

/*
const implementedFn = new (s: string) => s;
export const callCallOrConstruct = () => callOrConstructFn(new (s:string) => s:string);
*/

/**
 *
 * @param arr
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions Typescript: Documentation - More on Functions}
 */
export const firstElement = <T>(arr: T[]): T | undefined => arr[0];

/**
 *
 * @param a
 * @param b
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#constraints Typescript: Documentation - More on Functions}
 */
export const longest = <T extends { length: number }>(a: T, b: T) => {
  if (a.length > b.length) {
    return a;
  }
  return b;
};

/**
 *
 * @param arr
 * @param callback
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters-in-callbacks Typescript: Documentation - More on Functions}
 */
const myForEach = <T>(arr: T[], callback: (arg: T, index?: number) => void) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      callback(arr[i], i);
    } else {
      callback(arr[i]);
    }
  }
};

export const callMyForEach = <T>(arr: T[]) =>
  myForEach<T>(arr, (a, i) => console.log(a, i && i >= 0 ? i.toFixed() : ''));

/**
 *
 * @param timestamp
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads Typescript: Documentation - More on Functions}
 */
export function makeDate(timestamp: number): Date;
/**
 *
 * @param month
 * @param day
 * @param year
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads Typescript: Documentation - More on Functions}
 */
export function makeDate(month: number, day: number, year: number): Date;
/**
 *
 * @param monthOrTimestamp
 * @param day
 * @param year
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads Typescript: Documentation - More on Functions}
 */
export function makeDate(
  monthOrTimestamp: number,
  day?: number,
  year?: number
) {
  if (day !== undefined && year !== undefined) {
    return new Date(year, monthOrTimestamp, day);
  }
  return new Date(monthOrTimestamp);
}

function fn(x: string): string;
function fn(x: number): boolean;
function fn(x: string | number): string | boolean {
  if (typeof x === 'string') {
    return 'oops';
  }
  return true;
}

/**
 *
 * @param n
 * @param m
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters Typescript: Documentation - More on Functions}
 */
export const multiply = (n: number, ...m: number[]) => m.map((x) => x * n);

type ABC = { a: number; b: number; c: number };
/**
 *
 * @param param0
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-destructuring Typescript: Documentation - More on Functions}
 */
export const sum = ({ a, b, c }: ABC) => a + b + c;

/**
 *
 * @param a
 * @param b
 * @param c
 * @returns
 * @see {@link https://stackoverflow.com/a/12315145 Exact meaning of Function literal in JavaScript}
 * @see {@link https://stackoverflow.com/a/39821288 Exact meaning of Function literal in JavaScript}
 */
export const sum2 = function sum(a: number, b: number, c: number): number {
  if (a < b) {
    return sum(a * 10, b, c);
  }
  return a + b + c;
};
