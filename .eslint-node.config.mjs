import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config([
  {
    extends: [tseslint.configs.recommended],
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
]);
