module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    mocha: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
    'import'
  ],
  globals: {
    '$': true,
    'jQuery': true,
    'Foundation': true,
  },
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      'babel-module': {},
    }
  },
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
