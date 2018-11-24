module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    strict: 0,
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'react/react-in-jsx-scope': ['off'],
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '15.0',
      flowVersion: '0.53',
    },
    propWrapperFunctions: ['forbidExtraProps'],
  },
}
