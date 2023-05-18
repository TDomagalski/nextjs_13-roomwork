module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'plugin:jsx-a11y/recommended',
		'plugin:@next/next/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'jsx-a11y'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-one-expression-per-line': 'off',
		'react/prop-types': 'off',
		indent: [0, 'tab'],
		'no-tabs': 0,
	},
};
