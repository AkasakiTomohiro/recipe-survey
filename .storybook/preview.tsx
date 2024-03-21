import type { Preview } from "@storybook/react";
import React from 'react';

import { ThemeProvider } from '@mui/material/styles';

import i18n from '../src/i18n/i18n';
import { lightTheme } from '../src/theme/LightTheme';

const decorators: NonNullable<Preview["decorators"]> = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  )
];

const preview: Preview = {
  globals: {
    locale: "ja",
    locales: {
      en: "English",
      ja: "日本語",
    }
  },
  parameters: {
    i18n,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators
};

export default preview;
