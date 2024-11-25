import eslintConfigPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

import js from '@eslint/js';
import pluginTS from '@typescript-eslint/eslint-plugin';
import parserTS from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx,mjs,js}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parserTS,
      parserOptions: {
        parser: parserTS,
        project: './tsconfig.json',
      },
      globals: {
        ...globals.es2024,
        ...globals.node,
        ...globals.jest,
        __DEV__: true,
      },
    },

    plugins: {
      import: pluginImport,
      '@typescript-eslint': pluginTS,
      react: pluginReact,
      prettier: pluginPrettier,
    },

    ignores: [],

    settings: {
      'import/resolver': {
        typescript: {
          project: 'tsconfig.json',
        },
        node: {
          extensions: ['.tsx', '.ts'],
        },
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'no-unused-vars': 'off',
      'no-unresolved': 'off',
      'no-undef': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
          packageDir: '.',
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx', '.ts'],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          tsx: 'never',
          ts: 'warn',
        },
      ],
      'react/function-component-definition': [
        2,
        {
          namedComponents: ['arrow-function', 'function-declaration'],
        },
      ],
      camelcase: [
        0,
        {
          extensions: ['.d.ts'],
        },
      ],
      'no-shadow': [
        0,
        {
          extensions: ['.d.ts'],
        },
      ],
      'import/prefer-default-export': [
        0,
        {
          extensions: ['styles.ts'],
        },
      ],
      'react/require-default-props': [
        1,
        {
          functions: 'defaultArguments',
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      semi: 'off',
      '@/semi': ['error', 'always'],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      '@typescript-eslint/consistent-type-assertions': 'off',
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '~/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '@*/**',
              group: 'external',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {
          ignoreArrowShorthand: true,
        },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
    },
  },
];
