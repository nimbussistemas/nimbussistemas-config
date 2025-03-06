import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import nextPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export const next = {
  configs: {
    recommended: tseslint.config([
      {
        extends: [
          tseslint.configs.recommended,
          reactPlugin.configs.flat.recommended,
          reactPlugin.configs.flat['jsx-runtime'],
          reactHooksPlugin.configs['recommended-latest'],
        ],
        plugins: {
          prettier: prettierPlugin,
          '@next/next': nextPlugin,
        },
        rules: {
          ...nextPlugin.configs['core-web-vitals'].rules,
          'prettier/prettier': 'warn',
          '@next/next/no-sync-scripts': 'error',
          '@next/next/no-html-link-for-pages': 'off',
          '@typescript-eslint/no-empty-object-type': 'off',
        },
        settings: {
          react: {
            version: '19',
          },
        },
      },
    ]),
  },
};

export const node = {
  configs: {
    recommended: tseslint.config([
      {
        extends: [tseslint.configs.recommended],
        plugins: {
          prettier: prettierPlugin,
        },
        rules: {
          'prettier/prettier': 'warn',
          '@typescript-eslint/no-empty-object-type': 'off',
        },
      },
    ]),
  },
};

export default [...next.configs.recommended, ...node.configs.recommended];
