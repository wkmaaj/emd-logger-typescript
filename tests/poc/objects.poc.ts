/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties Typescript: Documentation - Object Types}
 */
interface IHome {
  readonly resident: { readonly name: string; age: number };
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types Typescript: Documentation - Object Types}
 */
interface IBasicAddress {
  street: string;
  city: string;
  state: string;
  zip: number;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types Typescript: Documentation - Object Types}
 */

interface IAddressWithUnit extends IBasicAddress {
  unit: number;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types Typescript: Documentation - Object Types}
 */
interface ICircle {
  radius: number;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types Typescript: Documentation - Object Types}
 */
interface IColorful {
  color: string;
}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types Typescript: Documentation - Object Types}
 */
interface IColorfulCircle extends ICircle, IColorful {}

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types Typescript: Documentation - Object Types}
 */
interface IBox<T> {
  contents: T;
}

type Shape = 'circle' | 'square' | 'rectangle' | 'pentagon' | 'hexagon';

type PaintOptions = {
  shape: Shape;
  xPos?: number;
  yPos?: number;
  zPos?: number;
};

/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types Typescript: Documentation - Object Types}
 */
type ColorfulCircleType = IColorful & ICircle;

/**
 *
 * @param param0
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties Typescript: Documentation - Object Types}
 */
export const paintShape = ({
  shape,
  xPos = 0,
  yPos = 0,
  zPos = 0
}: PaintOptions) => {
  console.log(`Painting a ${shape} at coordinates (${xPos}, ${yPos}, ${zPos})`);
};

const happyBirthday = (home: IHome) => {
  /* eslint-disable no-param-reassign, no-nested-ternary */
  console.log(
    `Happy ${++home.resident.age}${
      home.resident.age.toString().endsWith('3') &&
      !home.resident.age.toString().endsWith('13')
        ? 'rd'
        : home.resident.age.toString().endsWith('1') &&
          !home.resident.age.toString().endsWith('11')
        ? 'st'
        : 'th'
    } birthday ${home.resident.name}!`
  );
  /* eslint-enable no-param-reassign, no-nested-ternary */
};

export const callHappyBirthday = () => {
  happyBirthday({ resident: { name: 'Waleed', age: 32 } });
  happyBirthday({ resident: { name: 'Waleed', age: 12 } });
  happyBirthday({ resident: { name: 'Waleed', age: 82 } });
  happyBirthday({ resident: { name: 'Waleed', age: 1012 } });
  happyBirthday({ resident: { name: 'Waleed', age: 30 } });
  happyBirthday({ resident: { name: 'Waleed', age: 10 } });
  happyBirthday({ resident: { name: 'Waleed', age: 80 } });
  happyBirthday({ resident: { name: 'Waleed', age: 1010 } });
  happyBirthday({ resident: { name: 'Waleed', age: 33 } });
  happyBirthday({ resident: { name: 'Waleed', age: 18 } });
  happyBirthday({ resident: { name: 'Waleed', age: 85 } });
  happyBirthday({ resident: { name: 'Waleed', age: 1019 } });
};

const cci: IColorfulCircle = { color: 'green', radius: Math.PI };
const cct: ColorfulCircleType = { color: 'blue', radius: Math.PI ** 3 };

/**
 *
 * @param box
 * @param newContents
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types Typescript: Documentation - Object Types}
 */
const setContents = <T>(box: IBox<T>, newContents: T): void => {
  /* eslint-disable no-param-reassign */
  box.contents = newContents;
  /* eslint-enable no-param-reassign */
};
