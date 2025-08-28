/* eslint-disable max-classes-per-file */
/**
 *
 * @param arg
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html Typescript: Documentation - Generics}
 */
export const identity = <Type>(arg: Type) => arg;

/**
 *
 * @param arg
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html Typescript: Documentation - Generics}
 */
export const loggingIdentityWithBrackets = <Type>(args: Type[]): Type[] => {
  console.log(`Length of args is ${args.length}.`);
  return args;
};

/**
 * The generic function `loggingIdentity` takes a type parameter `Type`, and an
 * argument `arg` which is an array of `Type`s, and returns an array of `Type`s.
 * @param args
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html Typescript: Documentation - Generics}
 */
export const loggingIdentity = <Type>(args: Array<Type>): Array<Type> => {
  console.log(`Length of args is ${args.length}.`);
  return args;
};

/**
 *
 * @param arg
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html Typescript: Documentation - Generics}
 */
export const loggingIdentityLength = <Type>(args: Type[]): number =>
  loggingIdentityWithBrackets(args).length;

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types Typescript: Documentation - Generics}
 */
interface IIdentity {
  <T>(arg: T): T;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types Typescript: Documentation - Generics}
 */
interface IGenericIdentity<T> {
  (arg: T): T;
}

export interface IAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: number;
}

/**
 *
 * @param arg
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types Typescript: Documentation - Generics}
 */
function identityLiteral<T>(arg: T): T {
  return arg;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types Typescript: Documentation - Generics}
 */
export const myIdentity: IIdentity = identityLiteral;

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types Typescript: Documentation - Generics}
 */
export const myStringIdentity: IGenericIdentity<string> = identityLiteral;

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types Typescript: Documentation - Generics}
 */
export const myNumberIdentity: IGenericIdentity<number> = identityLiteral;

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types Typescript: Documentation - Generics}
 */
export const myAddressIdentity: IGenericIdentity<IAddress> = identityLiteral;

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints Typescript Documentation - Generics}
 */
interface Lengthwise {
  length: number;
}

/**
 *
 * @param arg
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints Typescript Documentation - Generics}
 */
export const loggingIdentityConstrainedByInterface = <T extends Lengthwise>(
  arg: T
): number => arg.length;

export const loggingIdentityConstrained = <T extends { length: number }>(
  arg: T
): number => arg.length;

/**
 *
 * @param obj
 * @param key
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints Typescript: Documentation - Generics}
 */
export const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key];

interface Container<T, U> {
  T: unknown;
  U: unknown;
}

/**
 *
 * @param element
 * @param children
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-parameter-defaults Typescript: Documentation - Generics}
 */
export const createHTMLElement = <
  T extends HTMLElement = HTMLDivElement,
  U extends HTMLElement[] = T[]
>(
  element: T,
  children: U
): Container<T, U> | undefined => undefined;

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics Typescript: Documentation - Generics}
 */
export class BeeKeeper {
  hasMask = true;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics Typescript: Documentation - Generics}
 */
export class ZooKeeper {
  nametag = 'Waleed';
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics Typescript: Documentation - Generics}
 */
export class Animal {
  numOfLegs = 4;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics Typescript: Documentation - Generics}
 */
export class Bee extends Animal {
  numOfLegs = 6;

  keeper: BeeKeeper = new BeeKeeper();
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics Typescript: Documentation - Generics}
 */
export class Lion extends Animal {
  keeper = new ZooKeeper();
}

/**
 *
 * @param C
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html#using-class-types-in-generics Typescript: Documentation - Generics}
 */
const createInstance = <A extends Animal>(C: new () => A): A => new C();

export const lion = createInstance(Lion);
export const bee = createInstance(Bee);
