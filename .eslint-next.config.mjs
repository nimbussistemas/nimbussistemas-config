import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config([
  {
    extends: [
      tseslint.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs['recommended-latest'],
    ],
    plugins: {
      prettier,
      '@next/next': next,
    },
    rules: {
      ...next.configs['core-web-vitals'].rules,
      'prettier/prettier': 'warn',
      '@next/next/no-html-link-for-pages': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
    settings: {
      react: {
        version: '19',
      },
    },
  },
]);
