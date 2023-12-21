import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import i18n from 'storybook-i18n/preview';
import enJson from "../src/i18n/locales/en.json"
import jpJson from "../src/i18n/locales/ja.json"
import '../src/app/[locale]/globals.css';

// @ts-ignore
const i18nDecorators = i18n?.decorators || [];

// 翻訳マップ
const messages = {
  en: enJson,
  ja: jpJson
};

const preview: Preview = {
  ...i18n,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    ...i18nDecorators,
    (Story, { globals }) => {
      return (
        <NextIntlClientProvider locale={globals.locale} messages={messages[globals.locale]}>
          <NextUIProvider>
            <Story />
          </NextUIProvider>
        </NextIntlClientProvider>
      );
    }
  ],
  globals: {
    locale: "ja",
    locales: {
        en: "English",
        ja: "日本語"
    }
  }
};

export default preview;
