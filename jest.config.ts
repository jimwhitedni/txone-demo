import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  coverageDirectory: 'coverage',
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  roots: ['<rootDir>/src/', '<rootDir>/src/__tests__/'],
  moduleDirectories: ['node_modules', 'src', '<rootDir>/'],
  // transformIgnorePatterns: ['node_modules/(?!(@zerologix/common-ui|@react-hook)/*)'],
  transform: {
    '^.+\\.[tsx|ts]?$': [
      'ts-jest',
      {
        diagnostics: false,
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__tests__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'scss', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
}

export default config