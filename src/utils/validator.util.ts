/// <reference path="./validation/Validation.ts" />
/// <reference path="./validation/LettersOnlyValidator.ts" />
/// <reference path="./validation/ZipCodeValidator.ts" />

// Aliases (@see https://www.typescriptlang.org/docs/handbook/namespaces.html#aliases)
import StringValidator = Validation.StringValidator;
import LettersOnlyValidator = Validation.LettersOnlyValidator;
import ZipCodeValidator = Validation.ZipCodeValidator;

namespace ValidationOriginal {
  const lettersRegexp = /^[A-Za-z]+$/;
  const numbersRegexp = /^[0-9]+$/;

  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return (s.length === 5 || s.length === 9) && numbersRegexp.test(s);
    }
  }
}

const strings = ['Hello', '98052', '191', '22150-0241'];

const validators: { [key: string]: StringValidator } = {};
validators['ZIP Code'] = new ZipCodeValidator();
validators['Letters Only'] = new LettersOnlyValidator();

for (const s of strings) {
  for (const name in validators) {
    const isMatch = validators[name].isAcceptable(s);
    console.log(
      `'${s}' - ${isMatch ? 'matches' : 'does not match'} '${name}'.`
    );
  }
}
