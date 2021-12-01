const stylelintConfigDcf = './node_modules/stylelint-config-dcf/index.js';

module.exports = {
  extends: [stylelintConfigDcf],
  rules: {
	// here we can override rules for the project
    'max-line-length': 1000,
    'declaration-block-semicolon-newline-after': null
  }
}
