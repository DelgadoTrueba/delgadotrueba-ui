module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
    // "plugin:@stencil/recommended"
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
    '**/*.d.ts',
    "stencil.config.ts"
  ],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowString: true }],
  },
};
