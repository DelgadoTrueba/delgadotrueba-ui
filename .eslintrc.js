module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    "plugin:@stencil/recommended",
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './.storybook/tsconfig.json'
    ]
  },
  plugins: [
    'react',
    'prettier'
  ],
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
    "react/no-unknown-property": ['error', { ignore: ['class'] }],
    '@stencil/strict-boolean-conditions': "off",
    "@stencil/decorators-context": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["error", {varsIgnorePattern: 'h' }],
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: true }],
  },
}
