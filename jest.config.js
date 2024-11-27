module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  automock: false,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './src/__mocks__/reactotron-react-native.js',
  ],
  moduleNameMapper: {
    '^~store(.*)$': '<rootDir>/src/store$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|reactotron-react-native|reactotron-core-client|@react-navigation))',
  ],
};
