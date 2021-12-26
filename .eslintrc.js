const config = {
  extends: ['airbnb', 'airbnb-typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'operator-linebreak': ['error', 'after'],
    'object-curly-newline': ['error', { consistent: true }],
  },
};

module.exports = config;
