import js from '@eslint/js';
import pluginN from 'eslint-plugin-n';
import globals from 'globals';

export default [
  js.configs.recommended,
  pluginN.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Allow importing optional peer dependencies
      'n/no-missing-import': ['error', {
        allowModules: [
          '@darraghor/eslint-plugin-nestjs-typed',
          'eslint-plugin-react',
        ],
      }],
    },
  },
];
