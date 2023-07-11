const path = require("path")

module.exports = {
	stories: [
		"../packages/**/stories/*.stories.mdx",
		"../packages/**/stories/*.stories.@(js|jsx|ts|tsx)",
		"../packages/**/packages/**/stories/*.stories.mdx",
		"../packages/**/packages/**/stories/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-styling",
		"@storybook/addon-a11y",
	],
	webpackFinal: async (config, { configType }) => {
		// Add SASS support.
		config.module.rules.push({
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "sass-loader"],
			include: path.resolve(__dirname, "../"),
		})

		// load typescript files
		config.module.rules.push({
			test: /\.(ts|tsx)?$/,
			exclude: /node_modules/,
			use: [
				{
					loader: "ts-loader",
					options: {
						transpileOnly: true,
					},
				},
			],
		})

		// add typescript extensions
		config.resolve.extensions.push(".ts", ".tsx")

		return config
	},
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	typescript: {
		reactDocgen: "react-docgen-typescript-plugin",
	},
	docs: {
		autodocs: true,
	},
}
