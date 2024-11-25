module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './src/',
        rootPathPrefix: '~/',
      },
    ],
    '@babel/plugin-transform-export-namespace-from',
  ],
};
