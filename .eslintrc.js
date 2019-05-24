module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, avoidEscape: true }]
  },
  env: {
    es6: true,
    node: true
  }
};
