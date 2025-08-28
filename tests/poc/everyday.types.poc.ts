/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html Typescript: Documentation - Everyday Types}
 */
interface Point {
  x: number;
  y: number;
  z?: number;
  str?: string;
  alignment?: 'auto' | 'left' | 'right' | 'top' | 'down' | 'center';
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html Typescript: Documentation - Everyday Types}
 */
type IdType = string | number | boolean;

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html Typescript: Documentation - Everyday Types}
 */
type WelcomeSliceType = string | string[] | number[];

/**
 *
 * @param pt
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html Typescript: Documentation - Everyday Types}
 */
export const printCoordinates = (pt: Point) => {
  console.log(`Point's X coordinate: ${pt.x}.`);
  console.log(`Point's Y coordinate: ${pt.y}.`);
  if (pt?.z) {
    console.log(`Point's Z coordinate: ${pt.z}.`);
  }
  console.log(pt.str?.toUpperCase());
};

/**
 *
 * @param x
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html Typescript: Documentation - Everyday Types}
 */
export const printId = (x: IdType) => {
  const printingId = 'Printing id:';
  if (typeof x === 'string') {
    console.log(`${printingId} ${x.toUpperCase()}.`);
  } else if (typeof x === 'number') {
    console.log(`${printingId} ${x * 100}.`);
  } else if (x) {
    console.log(x);
  }
};

/**
 *
 * @param str
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html Typescript: Documentation - Everyday Types}
 */
export const welcomePeople = (str: WelcomeSliceType) => {
  if (Array.isArray(str)) {
    console.log(`Welcome ${str.join(' and ')}!`);
  } else {
    console.log(`Welcome ${str}!`);
  }
};

/**
 *
 * @param x
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html Typescript: Documentation - Everyday Types}
 */
export const getFirstThree = (x: WelcomeSliceType) => x.slice(0, 3);

/**
 *
 * @param a
 * @param b
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/everyday-types.html Typescript: Documentation - Everyday Types}
 */
/* eslint-disable no-nested-ternary */
export const compare = (a: number, b: number): -1 | 0 | 1 =>
  a === b ? 0 : a > b ? 1 : -1;
/* eslint-enable no-nested-ternary */
