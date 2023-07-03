import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // verbose: true,
    // automock: false,
    setupFilesAfterEnv: ['./jest-int.setup.ts'],
    // testMatch: ['**/tests/**/*.test.ts'], // match pattern for test files
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    // testRegex: '.int.test.ts$',
    // moduleNameMapper: {
    //     '^src/(.*)$': '<rootDir>/src/$1',
    //     '^tests/(.*)$': '<rootDir>/tests/$1',
    // },
    forceExit: true,
};
export default config;
