module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
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
  }
}
