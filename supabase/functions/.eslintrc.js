module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: false,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
