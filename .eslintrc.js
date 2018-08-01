module.exports = {
  extends: [ 'airbnb' ],

  plugins: [ 'json' ],

  env: { browser: true },

  parserOptions: { ecmaVersion: 8 },

  rules: {
    'max-len': [
      "error",
      200,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'linebreak-style': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ]
  }
}
