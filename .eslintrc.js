module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-restricted-syntax': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
  },
};
