// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginHooks from 'eslint-plugin-react-hooks';
import pluginRouter from '@tanstack/eslint-plugin-router';
import configPrettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['eslint.config.mjs', 'vite.config.js'] },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  pluginHooks.configs['recommended-latest'],
  pluginRouter.configs['flat/recommended'],
  configPrettier,
  {
    rules: {
      'max-lines-per-function': ['error', { max: 400 }],
      'max-lines': ['error', { max: 500 }],
    },
  },
);
