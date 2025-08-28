import {
  Animal,
  Bee,
  bee,
  BeeKeeper,
  getProperty,
  identity,
  Lion,
  lion,
  loggingIdentity,
  loggingIdentityConstrained,
  loggingIdentityConstrainedByInterface,
  loggingIdentityLength,
  loggingIdentityWithBrackets,
  myAddressIdentity,
  myIdentity,
  myNumberIdentity,
  myStringIdentity,
  ZooKeeper
} from './generics.poc';

describe('generics.poc', () => {
  test('UT001 | identity<string>', () => {
    const expectedString = 'Hello World';
    expect(identity<string>(expectedString)).toStrictEqual(expectedString);
  });

  test('UT002 | identity<number>', () => {
    const expectedNumber = 3;
    expect(identity<number>(expectedNumber)).toStrictEqual(expectedNumber);
  });

  test('UT003 | identity<boolean>', () => {
    const expectedBoolean = true;
    expect(identity<boolean>(expectedBoolean)).toStrictEqual(expectedBoolean);
  });

  test('UT004 | identity (string inferred)', () => {
    const expected = 'Hello World';
    expect(identity(expected)).toStrictEqual(expected);
  });

  test('UT005 | identity (number inferred)', () => {
    const expected = 3;
    expect(identity(expected)).toStrictEqual(expected);
  });

  test('UT006 | identity (boolean inferred)', () => {
    const expected = true;
    expect(identity(expected)).toStrictEqual(expected);
  });

  test('UT007 | loggingIdentityWithBrackets<boolean>', () => {
    const expected = [true, false, true];
    expect(loggingIdentityWithBrackets<boolean>(expected)).toBe(expected);
  });

  test('UT008 | loggingIdentityLength (boolean inferred)', () => {
    const expected = [true, false, true];
    expect(loggingIdentityLength(expected)).toBe(expected.length);
  });

  test('UT009 | loggingIdentity<string>', () => {
    const expected = ['true', 'false', 'true'];
    expect(loggingIdentity<string>(expected)).toBe(expected);
  });

  test('UT010 | myIdentity<string>', () => {
    expect(myIdentity<string>('Hello World')).toStrictEqual('Hello World');
  });

  test('UT011 | myStringIdentity', () => {
    expect(myStringIdentity('Hello World')).toStrictEqual('Hello World');
  });

  test('UT012 | myNumberIdentity', () => {
    expect(myNumberIdentity(45)).toStrictEqual(45);
  });

  test('UT013 | myAddressIdentity', () => {
    const address = {
      addressLine1: '6904 Gilbert St',
      city: 'Springfield',
      state: 'VA',
      zip: 22150
    };
    expect(myAddressIdentity(address)).toBe(address);
  });

  test('UT014 | loggingIdentityConstrained<string>', () => {
    expect(loggingIdentityConstrained('Hola Mundo')).toBe(10);
  });

  test('UT015 | loggingIdentityConstrained<Array<boolean>>', () => {
    expect(
      loggingIdentityConstrained([true, true, false, true, false, false])
    ).toBe(6);
  });

  test('UT016 | loggingIdentityConstrained<{length:number, [key:string]:any}>', () => {
    expect(
      loggingIdentityConstrained({
        length: 14,
        name: 'Waleed',
        developer: true
      })
    ).toBe(14);
  });

  test('UT017 | loggingIdentityConstrainedByInterface<string>', () => {
    expect(loggingIdentityConstrainedByInterface('Mar7aba 3alim')).toBe(13);
  });

  test('UT018 | loggingIdentityConstrainedByInterface<Array<boolean>>', () => {
    expect(loggingIdentityConstrainedByInterface([true, false])).toBe(2);
  });

  test('UT019 | loggingIdentityConstrainedByInterface<{length:number, [key:string]:any}>', () => {
    expect(
      loggingIdentityConstrainedByInterface({
        length: 5,
        name: 'Nasser',
        developer: true
      })
    ).toBe(5);
  });

  test('UT020 | getProperty', () => {
    const obj = { a: 1, b: 'string', c: true };
    expect(getProperty(obj, 'a')).toBe(1);
    expect(getProperty(obj, 'b')).toBe('string');
    expect(getProperty(obj, 'c')).toBe(true);
  });

  test('UT021 | lion and bee instances', () => {
    expect(lion instanceof Lion).toBe(true);
    expect(lion instanceof Animal).toBe(true);
    expect(lion.keeper instanceof ZooKeeper).toBe(true);
    expect(lion.keeper.nametag).toStrictEqual('Waleed');
    expect(lion.numOfLegs).toBe(4);
    expect(bee instanceof Bee).toBe(true);
    expect(bee instanceof Animal).toBe(true);
    expect(bee.keeper instanceof BeeKeeper).toBe(true);
    expect(bee.keeper.hasMask).toBe(true);
    expect(bee.numOfLegs).toBe(6);
  });
});
