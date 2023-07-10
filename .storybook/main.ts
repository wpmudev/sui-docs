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
		// Add rule for TypeScript files
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve("babel-loader"),
					options: {
						presets: [
							require.resolve("@babel/preset-react"),
							require.resolve("@babel/preset-typescript"),
						],
					},
				},
			],
			include: path.resolve(__dirname, "../"),
		})
		// Add SASS support.
		config.module.rules.push({
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "sass-loader"],
			include: path.resolve(__dirname, "../"),
		})
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
