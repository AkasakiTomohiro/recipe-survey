import type { Preview } from "@storybook/react";
import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { lightTheme } from '../src/theme/LightTheme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story: () => JSX.Element) => {
    return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  },
]
