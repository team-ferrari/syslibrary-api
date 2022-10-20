module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-undef': 'error',
    'no-explicit-any': 'off',
    'valid-typeof': 'error',
    'no-unused-vars': 'error',
    'no-const-assign': 'error',
    'no-use-before-define': 'warn',
    'explicit-function-return-type': 'off',
    'explicit-module-boundary-types': 'off',

    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    eqeqeq: ['error', 'always'],
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-magic-numbers': [
      'error',
      {
        ignoreDefaultValues: true,
        detectObjects: true,
      },
    ],
  },
};
