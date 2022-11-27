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
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    //actions
    //view-port
    //control
    //background
  ],
  framework: "@storybook/web-components",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets],
    plugins: [
      ...options.plugins,
       // START ALLOW JSX in stories.jsx
      "@babel/plugin-syntax-jsx",
      [
        "@babel/plugin-transform-react-jsx",
        {
          "runtime": "automatic",
          "importSource": "jsx-dom"
        },
        "unique-name"
      ]
    ]
  }),
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //       esModuleInterop: false,
  //     },
  //   }
  // }
}

module.exports = config;

// export default config;