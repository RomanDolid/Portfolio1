// https://eslint.org/docs/user-guide/configuring

const eslintConfigDcf = './node_modules/eslint-config-dcf/index.js';

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [eslintConfigDcf],
  plugins: ['vue'],
  rules: {
    'no-use-before-define': 0,
    'import/extensions': 0,
    'import/first': 0,
    'no-unused-vars': 0,
    'import/no-unresolved': [2, { ignore: ['Content', 'ewizardjs'] }],
    'import/prefer-default-export': 0,
    'no-new': 0,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
  },
};
