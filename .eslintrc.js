module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    mocha: true,
    node: true
  },
  extends: 'standard',
  plugins: [
    'import'
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    }
  },
  rules: {
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'no-debugger': process.env.NODE_ENV === 'release' ? 2 : 0
  }
}
