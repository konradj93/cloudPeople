process.env.TZ = 'UTC';
process.env.REACT_APP_MSAL_SCOPES = 'test';

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
    '\\.(svg)$': '<rootDir>/svgTransform.js',
  },
  testPathIgnorePatterns: ['./src/config/environmentConfig/environments/*'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  globals: {
    crypto: require('crypto'),
  },
};
