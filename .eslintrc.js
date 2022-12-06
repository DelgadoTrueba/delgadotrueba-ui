module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [
    'node_modules',
    '**/*d.ts',
    'src/**/*.stories.tsx',
    'src/**/*.stories.ts',
    'src/**/*.stories.jsx',
    'src/**/*.stories.js'
  ],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: true }],
  },
};
