import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config({
  ignores: ['dist'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', path.resolve(__dirname, 'src')]],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      window: 'readonly',
      document: 'readonly',
      navigator: 'readonly',
    },
  },
  plugins: {
    'import-plugin': importPlugin,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': 'error',
    'max-lines': ['error', { max: 150, skipComments: true }],
    'max-lines-per-function': ['error', { max: 50, skipComments: true }],
    'max-params': ['error', { max: 5 }],
    'import-plugin/no-unresolved': 'error',
    'import-plugin/no-default-export': 'error',
  },
});
