/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	extends: [
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
		'@remix-run/eslint-config/jest-testing-library',
		'prettier',
	],
	env: {
		'cypress/globals': true,
	},
	plugins: ['cypress'],
	rules: {
		'react-hooks/exhaustive-deps': 'off',
	},
}
