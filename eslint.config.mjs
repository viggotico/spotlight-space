import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
        rules: {
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-assign-module-variable': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-undef': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-extra-semi': 'off',
            '@typescript-eslint/no-magic-numbers': 'off',
            '@typescript-eslint/no-restricted-syntax': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-var': 'off',
            '@typescript-eslint/prefer-const': 'off',
            '@typescript-eslint/prefer-destructuring': 'off',
            '@typescript-eslint/prefer-object-spread': 'off',
            '@typescript-eslint/prefer-reduce': 'off',
            '@typescript-eslint/prefer-template': 'off',
        },
    },
];

export default eslintConfig;
