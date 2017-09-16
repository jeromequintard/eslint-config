module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: 'airbnb',

  settings: {
    'import/resolver': { 
      node: {
          paths: ['src']
      },
      webpack: {
          config: 'config/webpack.dev.js'
      }
    }
  },

  plugins: [
    'import',
    'react'
  ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    'accessor-pairs': 'warn',
    'arrow-body-style': 'warn',
    'arrow-spacing': 'warn',
    'class-methods-use-this': 'warn',
    'constructor-super': 'warn',
    'import/extensions': 'off',
    'import/prefer-default-export': 'warn',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/no-static-element-interactions': 'off',
    'key-spacing': 'off',
    'max-len': 'warn',
    'no-cond-assign': 'off',
    'no-console': 'warn',
    'no-const-assign': 'warn',
    'no-empty-function': 'warn',
    'no-multi-spaces': 'off',
    'no-param-reassign': 'warn',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    'padded-blocks': 'off',
    'prefer-template': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/jsx-indent': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-find-dom-node': 'off',
    'react/no-unescaped-entities': 'warn',
    'react/no-unused-prop-types' :'warn',
    'react/prefer-stateless-function' : 'warn',
    'react/prop-types': 'warn',
    'react/require-default-props': 'warn',
    'semi': 'error',
    'space-before-function-paren': 'off',
    'valid-typeof': 'warn'
  },
};