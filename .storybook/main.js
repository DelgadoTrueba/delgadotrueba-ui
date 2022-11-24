// import type { StorybookConfig } from '@storybook/core-common';

const config = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
    // "../src/components/**/*.stories.[tj]s"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    //actions
    //view-port
    //control
    //background
  ],
  framework: "@storybook/web-components",
  core: {
    builder: "@storybook/builder-webpack5"
  }
}

module.exports = config;

// export default config;