import tseslint from 'typescript-eslint';
import nestjsTyped from '@darraghor/eslint-plugin-nestjs-typed';
import nodeConfig from './node.js';

export default tseslint.config(
  ...nodeConfig,
  nestjsTyped.configs.recommended,
  {
    rules: {
      '@darraghor/nestjs-typed/injectable-should-be-provided': 'off',
    },
  },
);
