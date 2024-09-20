module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'dot-notation': 'off',
    'no-empty-pattern': 'off',
    'no-case-declarations': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
  },
};
