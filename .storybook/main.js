module.exports = {
  "stories": [
    // @workspace sui-stories
    "../sui-stories/**/*.stories.mdx",
    "../sui-stories/**/*.stories.@(js|jsx|ts|tsx)",
    // @workspace sui-icons
    "../sui-icons/**/*.stories.mdx",
    "../sui-icons/**/*.stories.@(js|jsx|ts|tsx)",
    // @workspace sui-css
    "../sui-css/packages/**!(/__tests__)/*.stories.mdx",
    "../sui-css/packages/**/*.stories.@(js|jsx|ts|tsx)",
    // @workspace sui-react
    "../sui-react/packages/**/*.stories.mdx",
    "../sui-react/packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}