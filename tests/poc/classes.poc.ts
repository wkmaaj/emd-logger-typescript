/* eslint-disable max-classes-per-file */
/**
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members Typescript: Documentation - Classes}
 */
class Point {
  x: number;

  y: number;

  constructor(x = 100, y = 100) {
    this.x = x;
    this.y = y;
  }

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

class Point3D extends Point {
  z: number;

  constructor(x = 0, y = 0, z = 0) {
    super(x, y);
    this.z = z;
  }

  scale(n: number): void {
    super.scale(n);
    this.z *= n;
  }
}

export const point = new Point();
point.x = 11;
point.y = 4;

export const point3d = new Point3D(1, 1, 1);
