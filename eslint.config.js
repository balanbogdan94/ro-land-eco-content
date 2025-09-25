import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default tseslint.config({
  ignores: ['dist', './src/components/ui/**', '*.config.{js,ts}'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.app.json'],
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
    import: importPlugin,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': 'error',
    'max-lines': ['error', { max: 200, skipComments: true }],
    'max-params': ['error', { max: 5 }],
    'import/no-unresolved': 'error',
    'import/no-default-export': 'error',
  },
});
