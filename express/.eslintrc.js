module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ["standard", "prettier", "plugin:node/recommended", "plugin:promise/recommended"],
	plugins: ["prettier"],
	ignorePatterns: ["node_modules/**/*.js"],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		eqeqeq: ["off"],
		camelcase: ["off"],

		"prettier/prettier": ["error"],
		"linebreak-style": ["error", "windows"],
		"prefer-arrow-callback": ["error"],
		"prefer-template": ["error"],
		"node/no-unpublished-require": ["off"],
		"no-unused-vars": ["off"],
		"no-undef": ["off"],
	},
}
