import type { Config } from 'jest';

const config: Config = {
  rootDir:'./',
  testEnvironment:'jsdom',
  setupFilesAfterEnv:["<rootDir>/test/jest.setup.ts"],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|webp|avif)$': '<rootDir>/test/mocks/fileMock.js',
  },
}

export default config;