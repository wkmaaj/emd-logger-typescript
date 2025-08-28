interface ICheckResult {
  modified: boolean;
  original: string;
  updated: string;
}

interface ICheckResults {
  [key: number]: {
    modified: boolean;
    original: string;
    updated: string;
    forward?: ICheckResult;
    backward?: ICheckResult;
  };
}

/**
 * Performs a forward comparison of two string values and identifies new and modified characters.
 * A forward comparison in the sense that the first character compared between the strings will
 * be the 0th index (i.e. the first character).
 *
 * @param original the original string to be compared
 * @param updated the updated string to be compared
 * @returns
 */
export const forwardCheck = (original: string, updated: string) => {
  let checkResults: ICheckResults = {};

  for (let i = 0; i < original.length; i += 1) {
    checkResults = {
      ...checkResults,
      [i]: {
        modified: original.charAt(i) !== updated.charAt(i),
        original: original.charAt(i),
        updated: updated.charAt(i)
      }
    };
  }

  return checkResults;
};

/**
 * Performs a backward comparison of two string values and identifies new and modified characters.
 * A backward comparison in the sense that the first character compared between the strings will
 * be the nth index (i.e. the last character).
 *
 * @param original the original string to be compared
 * @param updated the updated string to be compared
 * @returns
 */

export const backwardCheck = (original: string, updated: string) => {
  let checkResults: ICheckResults = {};
  let continueCheck = true;
  let i = 1;

  while (continueCheck) {
    checkResults = {
      ...checkResults,
      [i - 1]: {
        modified:
          original.charAt(original.length - i) !==
          updated.charAt(updated.length - i),
        original: original.charAt(original.length - i),
        updated: updated.charAt(updated.length - i)
      }
    };
    i += 1;
    if (i > original.length && i > updated.length) continueCheck = false;
  }
  /*
  for (let i = original.length - 1; i >= 0; i -= 1) {
    checkResults = {
      ...checkResults,
      [i]: {
        modified: original.charAt(i) !== updated.charAt(i),
        original: original.charAt(i),
        updated: updated.charAt(i)
      }
    };
  }
  */
  return checkResults;
};

export const runForwardAndBackward = (original: string, updated: string) => {
  let checkResults: ICheckResults = {};
  const forwardCheckResults = forwardCheck(original, updated);
  const backwardCheckResults = backwardCheck(original, updated);

  Object.keys(forwardCheckResults).forEach((key: string, index: number) => {
    const backwardCheckResultsKey =
      Object.keys(forwardCheckResults).length - index - 1;
    checkResults = {
      ...checkResults,
      [key]: {
        forward: {
          ...forwardCheckResults[index]
        },
        backward: {
          ...backwardCheckResults[backwardCheckResultsKey]
        }
      }
    };
  });

  return checkResults;
};
