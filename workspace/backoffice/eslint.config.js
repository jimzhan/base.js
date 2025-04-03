import url from 'node:url'
import path from 'node:path'
import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-config-prettier/flat'

export default [
  ...(new FlatCompat({
    baseDirectory: path.dirname(url.fileURLToPath(import.meta.url)),
  }).extends('eslint-config-standard')),
  // plugins
  prettier,
  // custom rules
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
    },
    ignores: ['node_modules/*'],
    rules: {
    'space-before-function-paren': 0
    }
  }
]