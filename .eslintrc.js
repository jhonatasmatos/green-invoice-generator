module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Brackets keep code readable.
    curly: [2, 'all'],
    // Brackets keep code readable and `return` intentions clear.
    'arrow-body-style': ['error', 'always'],
    // Error if files are not formatted with Prettier correctly.
    'prettier/prettier': 2,
    // syntax preferences
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['*'],
      },
    ],
    'accessor-pairs': [
      2,
      {
        getWithoutSet: false,
        setWithoutGet: false,
      },
    ],
    'new-parens': 2,
    'func-call-spacing': 2,
    'prefer-const': 2,

    'max-len': [
      2,
      {
        code: 200,
        comments: 90,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // anti-patterns
    'no-var': 2,
    'no-with': 2,
    'no-multi-str': 2,
    'no-caller': 2,
    'no-debugger': 2,
    'valid-typeof': 2,
    'no-unused-vars': [
      2,
      {
        args: 'none',
        vars: 'local',
        varsIgnorePattern:
          '([fx]?describe|[fx]?it|beforeAll|beforeEach|afterAll|afterEach)',
      },
    ],
    'no-implicit-globals': [2],
  },
};
