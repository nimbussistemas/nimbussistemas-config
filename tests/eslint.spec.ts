import path from 'node:path';
import { ESLint } from 'eslint';
import fs from 'node:fs/promises';
import { it, expect, describe } from 'vitest';
import { next, node } from '../eslint.config.mjs';

describe('eslint', () => {
  describe('next', () => {
    const eslint = new ESLint({
      cwd: process.cwd(),
      overrideConfig: next.configs.recommended as never,
      // overrideConfigFile: path.join(process.cwd(), 'eslint.config.mjs'),
    });

    describe('prettier', () => {
      it.each([
        ['semicolons', 'Insert `;`', 'ts'],
        ['single-quote', 'Replace `"a"` with `\'a\'`', 'ts'],
        ['tab-width', 'Delete `··`', 'ts'],
        [
          'print-width',
          "Replace `·email:·'email@email.com',·phone:·'1234567890',·postalCode:·'1234567890',·companyName:·'Company·Name',·tradingName:·'Trading·Name',·legalCategory:·'Legal·Category'` with `⏎····email:·'email@email.com',⏎····phone:·'1234567890',⏎····postalCode:·'1234567890',⏎····companyName:·'Company·Name',⏎····tradingName:·'Trading·Name',⏎····legalCategory:·'Legal·Category',⏎·`",
          'ts',
        ],
        [
          'arrow-parens',
          'Replace `x·=>·{·console.log(x)·}` with `(x)·=>·{⏎····console.log(x);⏎··};`',
          'ts',
        ],
        ['bracket-spacing', 'Replace `a:1` with `·a:·1·`', 'ts'],
        ['trailing-comma', 'Insert `,`', 'ts'],
        [
          'single-attribute-per-line',
          'Replace `·className="flex·flex-col·items-center·justify-center·h-screen"·onClick={()·=>·{}}` with `⏎······className="flex·flex-col·items-center·justify-center·h-screen"⏎······onClick={()·=>·{}}⏎····`',
          'tsx',
        ],
        ['prettier-plugin-fort-imports', "Replace `bc·}·from·'abc` with `·}·from·'a`", 'ts'],
      ])('%s', async (ruleId, message, extension) => {
        const filePath = path.join(process.cwd(), `tests/inputs/prettier/${ruleId}.${extension}`);

        const code = await fs.readFile(filePath, 'utf-8');

        const results = await eslint.lintText(code, { filePath });

        expect(
          results.every((r) =>
            r.messages.some((m) => m.ruleId === 'prettier/prettier' && m.message === message),
          ),
        ).toBe(true);
      });
    });

    // DOCS: https://github.com/jsx-eslint/eslint-plugin-react

    describe('react', () => {
      it.each([
        ['display-name', true],
        ['jsx-key', true],
        ['jsx-no-comment-textnodes', true],
        ['jsx-no-duplicate-props', true],
        ['jsx-no-target-blank', true],
        ['jsx-no-undef', true],
        // ['jsx-uses-react', true], -> disabled in jsx-runtime
        // ['jsx-uses-vars', true],
        ['no-children-prop', true],
        ['no-danger-with-children', true],
        ['no-deprecated', true],
        // ['no-direct-mutation-state', true],
        ['no-find-dom-node', true],
        ['no-is-mounted', true],
        ['no-render-return-value', true],
        ['no-string-refs', true],
        // ['no-unescaped-entities', true],
        ['no-unknown-property', true],
        // ['no-unsafe', true], -> disabled in recommended
        ['prop-types', true],
        // ['react-in-jsx-scope', true], -> disabled in jsx-runtime
        ['require-render-return', true],
      ])('%s', async (ruleId, isError) => {
        const filePath = path.join(process.cwd(), `tests/inputs/react/${ruleId}.tsx`);

        const code = await fs.readFile(filePath, 'utf-8');

        const results = await eslint.lintText(code, { filePath });

        // console.log(results);

        // for (const result of results) {
        //   for (const message of result.messages) {
        //     console.log({ message });
        //   }
        // }

        expect(results.every((r) => r.messages.some((m) => m.ruleId === `react/${ruleId}`))).toBe(
          isError,
        );
      });
    });

    // DOCS: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks

    describe('react-hooks', () => {
      it.each([
        ['rules-of-hooks', true],
        ['exhaustive-deps', true],
      ])('%s', async (ruleId, isError) => {
        const filePath = path.join(process.cwd(), `tests/inputs/react-hooks/${ruleId}.tsx`);

        const code = await fs.readFile(filePath, 'utf-8');

        const results = await eslint.lintText(code, { filePath });

        expect(
          results.every((r) => r.messages.some((m) => m.ruleId === `react-hooks/${ruleId}`)),
        ).toBe(isError);
      });
    });

    // DOCS: https://typescript-eslint.io/rules/

    describe('@typescript-eslint', () => {
      it.each([
        ['ban-ts-comment', true],
        ['no-array-constructor', true],
        ['no-duplicate-enum-values', true],
        ['no-empty-object-type', false],
        ['no-explicit-any', true],
        ['no-extra-non-null-assertion', true],
        ['no-misused-new', true],
        ['no-namespace', true],
        ['no-non-null-asserted-optional-chain', true],
        ['no-require-imports', true],
        ['no-this-alias', true],
        ['no-unnecessary-type-constraint', true],
        ['no-unsafe-declaration-merging', true],
        ['no-unsafe-function-type', true],
        ['no-unused-expressions', true],
        ['no-unused-vars', true],
        ['no-wrapper-object-types', true],
        ['prefer-as-const', true],
        ['prefer-namespace-keyword', true],
        ['triple-slash-reference', true],
      ])('%s', async (ruleId, isError) => {
        const filePath = path.join(process.cwd(), `tests/inputs/typescript-eslint/${ruleId}.ts`);

        const code = await fs.readFile(filePath, 'utf-8');

        const results = await eslint.lintText(code, { filePath });

        expect(
          results.every((r) => r.messages.some((m) => m.ruleId === `@typescript-eslint/${ruleId}`)),
        ).toBe(isError);
      });
    });
  });

  describe('node', () => {
    const eslint = new ESLint({
      cwd: process.cwd(),
      overrideConfig: node.configs.recommended as never,
      // overrideConfigFile: path.join(process.cwd(), 'eslint.config.mjs'),
    });

    describe('prettier', () => {
      it.each([
        ['semicolons', 'Insert `;`'],
        ['single-quote', 'Replace `"a"` with `\'a\'`'],
        ['tab-width', 'Delete `··`'],
        [
          'print-width',
          "Replace `·email:·'email@email.com',·phone:·'1234567890',·postalCode:·'1234567890',·companyName:·'Company·Name',·tradingName:·'Trading·Name',·legalCategory:·'Legal·Category'` with `⏎····email:·'email@email.com',⏎····phone:·'1234567890',⏎····postalCode:·'1234567890',⏎····companyName:·'Company·Name',⏎····tradingName:·'Trading·Name',⏎····legalCategory:·'Legal·Category',⏎·`",
        ],
        [
          'arrow-parens',
          'Replace `x·=>·{·console.log(x)·}` with `(x)·=>·{⏎····console.log(x);⏎··};`',
        ],
        ['bracket-spacing', 'Replace `a:1` with `·a:·1·`'],
        ['trailing-comma', 'Insert `,`'],
        ['prettier-plugin-fort-imports', "Replace `bc·}·from·'abc` with `·}·from·'a`"],
      ])('%s', async (ruleId, message) => {
        const filePath = path.join(process.cwd(), `tests/inputs/prettier/${ruleId}.ts`);

        const code = await fs.readFile(filePath, 'utf-8');

        const results = await eslint.lintText(code, { filePath });

        expect(
          results.every((r) =>
            r.messages.some((m) => m.ruleId === 'prettier/prettier' && m.message === message),
          ),
        ).toBe(true);
      });
    });

    // DOCS: https://typescript-eslint.io/rules/

    describe('@typescript-eslint', () => {
      it.each([
        ['ban-ts-comment', true],
        ['no-array-constructor', true],
        ['no-duplicate-enum-values', true],
        ['no-empty-object-type', false],
        ['no-explicit-any', true],
        ['no-extra-non-null-assertion', true],
        ['no-misused-new', true],
        ['no-namespace', true],
        ['no-non-null-asserted-optional-chain', true],
        ['no-require-imports', true],
        ['no-this-alias', true],
        ['no-unnecessary-type-constraint', true],
        ['no-unsafe-declaration-merging', true],
        ['no-unsafe-function-type', true],
        ['no-unused-expressions', true],
        ['no-unused-vars', true],
        ['no-wrapper-object-types', true],
        ['prefer-as-const', true],
        ['prefer-namespace-keyword', true],
        ['triple-slash-reference', true],
      ])('%s', async (ruleId, isError) => {
        const filePath = path.join(process.cwd(), `tests/inputs/typescript-eslint/${ruleId}.ts`);

        const code = await fs.readFile(filePath, 'utf-8');

        const results = await eslint.lintText(code, { filePath });

        expect(
          results.every((r) => r.messages.some((m) => m.ruleId === `@typescript-eslint/${ruleId}`)),
        ).toBe(isError);
      });
    });
  });
});
