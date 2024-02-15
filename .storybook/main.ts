import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
    // {
    //   name: "@storybook/addon-coverage",
    //   options: {
    //     istanbul: {
    //       exclude: ["../src/**/*.ts", '**/stories/**'],
    //     },
    //   },
    // },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config: any) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    }
    return config;
  }
};
export default config;
