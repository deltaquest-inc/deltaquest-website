import type { Config } from '@typescript-eslint/utils'

export const createTypeScriptConfig = (options: {
  projectRoot: string
  include?: string[]
  exclude?: string[]
}): Config => ({
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: `${options.projectRoot}/tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-const': 'error',
  },
  ignorePatterns: options.exclude || ['node_modules/', '.next/', 'dist/'],
})

export default createTypeScriptConfig
