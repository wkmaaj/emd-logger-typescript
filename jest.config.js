export default {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  verbose: true,
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  //   testMatch: ['tests/**/*.+((j|t)s(x?))', '**/?(*.)+(spec|test).+((j|t)s(x?))'],
  testMatch: [
    'tests/**/*.+(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/.aws-sam',
    '<rootDir>/tests/config',
    '<rootDir>/tests/fixtures',
    '<rootDir>/tests/data',
    '<rootDir>/tests/global-setup.js'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  clearMocks: true
};
