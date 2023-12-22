const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({

  // the following options are the default values
  indent: 2,
  quotes: 'single',
  semi  : true,
  jsx   : true
});

module.exports = {
  root   : true,
  parser : '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'plugin:@stylistic/recommended-extends',
    'plugin:storybook/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:jest-test-each-formatting/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    '@stylistic/eslint-plugin-plus'
  ],
  rules: {
    ...customized.rules,
    'react-hooks/rules-of-hooks'      : 'off',
    'jest-test-each-formatting/format': ['error', {
      indent: 2
    }],
    'react-hooks/exhaustive-deps'            : ['error'],
    '@typescript-eslint/no-explicit-any'     : 'off',
    '@stylistic/no-confusing-arrow'          : 'off',
    '@stylistic/no-extra-semi'               : 'error',
    '@stylistic/no-floating-decimal'         : 'error',
    '@stylistic/no-mixed-operators'          : 'off',
    '@stylistic/one-var-declaration-per-line': 'off',
    '@stylistic/quote-props'                 : ['error',  'as-needed'],
    '@stylistic/spaced-comment'              : ['error',  'always',  { block: { exceptions: ['*'] }}],
    '@stylistic/array-bracket-newline'       : ['error', 'consistent'],
    '@stylistic/array-bracket-spacing'       : [
      'error',
      'never',
      {
        singleValue    : false,
        arraysInArrays : false,
        objectsInArrays: false
      }
    ],
    '@stylistic/array-element-newline': 'off',
    '@stylistic/arrow-parens'         : ['error',  'as-needed'],
    '@stylistic/arrow-spacing'        : [
      'error',
      {
        before: true,
        after : true
      }
    ],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/brace-style'  : ['error', '1tbs'],
    '@stylistic/comma-dangle' : ['error', 'never'],
    '@stylistic/comma-spacing': [
      'error',
      {
        before: false,
        after : true
      }
    ],
    '@stylistic/comma-style'                   : ['error', 'last'],
    '@stylistic/computed-property-spacing'     : ['error', 'never'],
    '@stylistic/dot-location'                  : ['error', 'property'],
    '@stylistic/eol-last'                      : ['error', 'always'],
    '@stylistic/func-call-spacing'             : 'error',
    '@stylistic/function-call-argument-newline': 'off',
    '@stylistic/function-paren-newline'        : 'off',
    '@stylistic/generator-star-spacing'        : [
      'error',
      {
        before: true,
        after : false
      }
    ],
    '@stylistic/implicit-arrow-linebreak': ['error',  'beside'],
    '@stylistic/indent'                  : [
      'error',
      2,
      {
        ignoredNodes: [
          'TSTypeReference'
        ],
        SwitchCase         : 0,
        VariableDeclarator : 1,
        outerIIFEBody      : 1,
        MemberExpression   : 1,
        FunctionDeclaration: {
          body      : 1,
          parameters: 1
        },
        FunctionExpression: {
          body      : 1,
          parameters: 1
        },
        StaticBlock: {
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression         : 1,
        ObjectExpression        : 1,
        ImportDeclaration       : 1,
        flatTernaryExpressions  : false,
        offsetTernaryExpressions: false,
        ignoreComments          : false
      }
    ],
    '@stylistic/plus/indent-binary-ops': ['error', 2],
    '@stylistic/jsx-quotes'            : ['error', 'prefer-double'],
    '@stylistic/key-spacing'           : [
      'error',
      {
        beforeColon: false,
        afterColon : true,
        align      : 'colon'
      }
    ],
    '@stylistic/keyword-spacing': [
      'error',
      { before   : true,
        after    : true,
        overrides: { if    : { after: false },
          for   : { after: false },
          while : { after: false },
          switch: { after: false }}}
    ],
    '@stylistic/linebreak-style'     : 'off',
    '@stylistic/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment : false,
        beforeLineComment : true,
        afterLineComment  : false,
        allowClassStart   : false
      }
    ],
    '@stylistic/lines-between-class-members': 'off',
    '@stylistic/max-len'                    : [
      'error',
      {
        code                  : 140,
        ignoreStrings         : true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals  : true,
        ignoreComments        : true
      }
    ],
    '@stylistic/max-statements-per-line'         : ['error', { max: 1 }],
    '@stylistic/multiline-ternary'               : 'off',
    '@stylistic/new-parens'                      : 'error',
    '@stylistic/newline-per-chained-call'        : ['error', { ignoreChainWithDepth: 2 }],
    '@stylistic/no-extra-parens'                 : 'off',
    '@stylistic/no-mixed-spaces-and-tabs'        : 'off',
    '@stylistic/no-multi-spaces'                 : 'off',
    '@stylistic/no-multiple-empty-lines'         : ['error', { max: 1 }],
    '@stylistic/no-tabs'                         : 'error',
    '@stylistic/no-trailing-spaces'              : 'error',
    '@stylistic/no-whitespace-before-property'   : 'error',
    '@stylistic/nonblock-statement-body-position': 'off',
    '@stylistic/object-curly-newline'            : ['error', { consistent: true }],
    '@stylistic/object-curly-spacing'            : ['error', 'always', { objectsInObjects: false }],
    '@stylistic/object-property-newline'         : 'off',
    '@stylistic/operator-linebreak'              : 'off',
    '@stylistic/padded-blocks'                   : 'off',
    '@stylistic/padding-line-between-statements' : 'off',
    '@stylistic/quotes'                          : ['error', 'single'],
    '@stylistic/rest-spread-spacing'             : 'error',
    '@stylistic/semi'                            : ['error',  'always'],
    '@stylistic/semi-spacing'                    : ['error',  { before: false, after: true }],
    '@stylistic/semi-style'                      : ['error', 'last'],
    '@stylistic/space-before-blocks'             : ['error', 'always'],
    '@stylistic/space-before-function-paren'     : [
      'error',
      {
        anonymous : 'never',
        named     : 'never',
        asyncArrow: 'always'
      }
    ],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': [
      'error',
      {
        words   : true,
        nonwords: false
      }
    ],
    '@stylistic/switch-colon-spacing': [
      'error',
      {
        after : true,
        before: false
      }
    ],
    '@stylistic/template-curly-spacing' : ['error', 'never'],
    '@stylistic/template-tag-spacing'   : ['error', 'never'],
    '@stylistic/wrap-iife'              : 'off',
    '@stylistic/wrap-regex'             : 'off',
    '@stylistic/yield-star-spacing'     : ['error', 'after'],
    '@stylistic/type-annotation-spacing': 'off'
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
};
