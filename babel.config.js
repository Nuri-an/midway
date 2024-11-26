module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src/',
            rootPathPrefix: '~/',
          },
          {
            rootPathSuffix: './src/modules/Transfer/Pix/',
            rootPathPrefix: '@Pix/',
          },
        ],
      },
    ],
    '@babel/plugin-transform-export-namespace-from',
  ],
};
