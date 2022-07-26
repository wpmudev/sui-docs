module.exports = {
  "stories": [
    // @workspace sui-stories
    "../sui-stories/**/*.stories.mdx",
    "../sui-stories/**/*.stories.@(js|jsx|ts|tsx)",
    // @workspace sub-packages
    "../**/sui-stories/*.stories.mdx",
    "../**/sui-stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}