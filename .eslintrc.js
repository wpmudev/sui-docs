module.exports = {
	parser: "@typescript-eslint/parser",
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"plugin:@wordpress/eslint-plugin/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		// "airbnb-typescript",
		"prettier",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
}
