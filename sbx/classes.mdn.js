/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes MDN: Using classes}
 */

class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }

  get red() {
    return this.#values[0];
  }

  set red(r) {
    this.#checkValueRange(r);
    this.#values[0] = r;
  }

  get green() {
    return this.#values[1];
  }

  set green(g) {
    this.#checkValueRange(g);
    this.#values[1] = g;
  }

  getBlue() {
    return this.#values[2];
  }

  setBlue(b) {
    this.#checkValueRange(b);
    this.#values[2] = b;
  }

  toString() {
    return `Color has a red value of ${this.red}, a green value of ${
      this.green
    }, and a blue value of ${this.getBlue()}`;
  }

  #checkValueRange(value) {
    if (value < 0 || value > 255) {
      throw new RangeError('Provided value is outside of allowable range.');
    }
  }

  static isValidRGB = (r, g, b) =>
    r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
}

class TransparentColor extends Color {
  #alpha;

  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }

  get alpha() {
    return this.#alpha;
  }

  set alpha(a) {
    if (a < 0 || a > 1) {
      throw new RangeError('Provided value is outside allowable range.');
    }
    this.#alpha = a;
  }

  toString() {
    return `${super.toString()}, with a transparency value of ${this.alpha}`;
  }
}

class Entity {
  constructor(...rest) {
    this.values = rest;
  }
}

const red = new Color(255, 0, 0);
console.log(red.toString());
console.log(red.red);
console.log(red.green);
console.log(red.getBlue());

const blue = new Color(0, 0, 255);
blue.red = 255;
console.log(`Does red.red equal to blue.red? ${red.red === blue.red}`);

const green = new Color(0, 255, 0);
console.log(`Value of green property ${green.green}`);
green.green = 0;
console.log(`Value of green property ${green.green}`);

console.log(Color.isValidRGB(-1, 2, -1));
console.log(Color.isValidRGB(1, 2, 1));
console.log(Color.isValidRGB(1, -2, 1));

const firstEntity = new Entity(
  'Waleed',
  'Khaled',
  'Mohammed',
  'al-Musa',
  'al-Abdallah',
  'Al-Jaradat'
);
const secondEntity = new Entity(
  'Waleed',
  'Khaled',
  'Mohammed',
  'al-Musa',
  'al-Abdallah',
  'Al-Jaradat'
);
console.log(firstEntity);
console.log(secondEntity);
console.log(
  `Does firstEntity equal to secondEntity? ${firstEntity === secondEntity}`
);

const alphaColor = new TransparentColor(156, 132, 14, 0.5);
console.log(alphaColor.toString());

const Person = class {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }

  greet() {
    return `Hello, my name is ${this.#name} and my age is ${this.#age}`;
  }
};

const person1 = new Person('Waleed Al-Jaradat', 33);
const person2 = new Person('Mohammed Jaradat', 36);
console.log(person1.greet());
console.log(person2.greet());

const insan = {
  name: 'Waleed',
  age: 33
};

insan.greet = function greet() {
  return `Hello, my name is ${this.name} and my age is ${this.age}`;
};

console.log(insan.greet());

insan.name = 'Big Willay';
console.info(insan.greet());

const countdown = (count) => {
  console.log(count);
  if (count > 1) countdown(--count);
  return;
};

countdown(10);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const c1 = new Car('Subaru', 'WRX', 2004);
Car.prototype.wheels = 4;
Car.prototype.isCar = true;
Car.prototype.isPlane = false;
Car.prototype.isVehicle = 'maybe';

console.log(JSON.stringify(c1, null, 4));
console.log(JSON.stringify(Car.prototype, null, 4));
console.log(`A ${c1.year} ${c1.make} ${c1.model} has ${c1.wheels} wheels.`);

Car.prototype = { ...Car.prototype, wheels: 6 };
console.log(JSON.stringify(Car.prototype, null, 4));
const c2 = new Car('Ford', 'F750', 2025);
console.log(`A ${c2.year} ${c2.make} ${c2.model} has ${c2.wheels} wheels.`);
