/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
interface Container {
  value: number | null | undefined;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
interface Circle {
  kind: 'circle';
  radius: number;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
interface Square {
  kind: 'square';
  length: number;
}

interface Rectangle {
  kind: 'rectangle';
  length: number;
  width: number;
}

interface Pentagon {
  kind: 'pentagon';
}

type Bird = { fly: () => void; name?: string };

type Fish = { swim: () => void; name?: string };

type Human = {
  fly?: () => string;
  swim?: () => string;
  run?: () => string;
  name?: string;
};

type Shape = Circle | Square | Rectangle | Pentagon;

/**
 *
 * @param padding
 * @param input
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const padLeft = (padding: number | string, input: string): string => {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
};

/**
 *
 * @param arg
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const printAll = (arg: string | string[] | null) => {
  if (typeof arg === 'object') {
    // 'arg' is possibly 'null' because in JS typeof null is 'object'.
    console.log(arg?.join(' '));
  } else if (typeof arg === 'string') {
    console.log(arg);
  } else {
    // do nothing.
  }
};

/**
 *
 * @param arg
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const safePrintAll = (arg: string | string[] | null) => {
  if (arg && typeof arg === 'object') {
    console.log(arg.join(' '));
  } else if (typeof arg === 'string') {
    console.log(arg);
  }
};

/**
 *
 * @param values
 * @param factor
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const multiplyAll = (
  values: number[] | undefined,
  factor: number
): number[] | undefined => {
  if (!values) {
    return values;
  }
  return values.map((value) => value * factor);
};

/**
 *
 * @param x
 * @param y
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const equalityNarrowingExample = (
  x: string | number,
  y: string | boolean
): { x: string | number; y: string | boolean } => {
  if (x === y) {
    console.log(x.toUpperCase());
    console.log(y.toLowerCase());
    return { x: x.toUpperCase(), y: y.toLowerCase() };
  }
  console.log(x);
  console.log(y);
  return { x, y };
};

/**
 *
 * @param arg
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const equalityNarrowingPrintAll = (arg: string | string[] | null) => {
  if (arg !== null) {
    if (typeof arg === 'object') {
      console.log(arg.join(' '));
    } else if (typeof arg === 'string') {
      console.log(arg);
    }
  }
};

/**
 *
 * @param container
 * @param factor
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const multiplyContainerValue = (
  container: Container,
  factor: number
): number => {
  // JS' looser equality check will see if container.value is equal to either null or undefined.
  if (container.value != null) {
    console.log(`Container's value is: ${container.value}.`);
    return container.value * factor;
  }
  return -1;
};

/**
 *
 * @param animal
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const moveAnimal = (animal: Bird | Fish | Human) => {
  if ('swim' in animal) {
    return animal?.swim && animal.swim();
  }
  return animal?.fly && animal.fly();
};

/**
 *
 * @param value
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const logValue = (value: Date | string) => {
  if (value instanceof Date) {
    return value.toUTCString();
  }
  return value.toUpperCase();
};

/**
 *
 * @param pet
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const isFish = (pet: Bird | Fish): pet is Fish =>
  (pet as Fish).swim !== undefined;

const getSmallPet = (): Bird | Fish =>
  Math.random() < 0.5
    ? { fly: () => console.log('bird flying') }
    : { swim: () => console.log('fish swimming') };

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const narrowArrayWithTypePredicate = () => {
  const entries = [
    getSmallPet(),
    getSmallPet(),
    getSmallPet(),
    getSmallPet(),
    getSmallPet(),
    getSmallPet(),
    getSmallPet()
  ];
  console.log('entries', entries);

  const fish1: Fish[] = entries.filter(isFish);
  const fish2: Fish[] = entries.filter((entry) => isFish(entry)) as Fish[];
  /* eslint-disable no-param-reassign */
  const fish3: Fish[] = entries.filter((entry): entry is Fish => {
    if (Math.random() < 0.5) {
      entry.name = 'sharkey';
    }
    if (entry.name === 'sharkey') {
      return false;
    }
    return isFish(entry);
  });
  /* eslint-enable no-param-reassign */

  console.log('entries', entries);
  console.log('fish1', fish1);
  console.log('fish2', fish2);
  console.log('fish3', fish3);
};

/**
 *
 * @param shape
 * @returns
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/narrowing.html Typescript: Documentation - Narrowing}
 */
export const getArea = (shape: Shape): number => {
  switch (shape.kind) {
    case 'circle': {
      return Math.PI * shape.radius * shape.radius;
    }
    case 'rectangle': {
      return shape.width * shape.length;
    }
    case 'square': {
      return shape.length ** 2;
    }
    case 'pentagon': {
      return -1;
    }
    default: {
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
    }
  }
};
