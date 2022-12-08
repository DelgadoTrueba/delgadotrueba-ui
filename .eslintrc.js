module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:@stencil/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './.storybook/tsconfig.json'
    ],
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'loader',
    'www',
    '**/*.d.ts',
    "stencil.config.ts",
    ".*"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: true }],
    "react/jsx-no-bind": [ "error", { "ignoreDOMComponents": true } ],
    '@stencil/strict-boolean-conditions': "off",
    "@stencil/decorators-context": "off",
  },
};
