const path = require('path');

module.exports = {
	stories: [
		// @workspace sui-stories
		"../sui-stories/**/*.stories.mdx",
		"../sui-stories/**/*.stories.@(js|jsx|ts|tsx)",
		// @workspace sub-packages
		"../**/sui-stories/*.stories.mdx",
		"../**/sui-stories/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-postcss"
	],
	webpackFinal: async (config, { configType }) => {
		// Add SASS support.
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			],
			include: path.resolve( __dirname, '../' ),
		});

		return config;
	},
	framework: "@storybook/react",
	core: {
		"builder": "@storybook/builder-webpack5"
	}
}