/// <reference path="Validation.ts" />
namespace Validation {
  const globalHyphenRegexp = /-/g;
  const numbers5Regexp = /^[0-9]{5,5}$/;
  const numbers9Regexp = /^[0-9]{9,9}$/;

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return (
        numbers5Regexp.test(s) ||
        numbers9Regexp.test(s.replace(globalHyphenRegexp, ''))
      );
    }
  }
}
