/**
 * @file i18n.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AttributeList } from '~/types';

import enJson from './locales/en.json';
import jaJson from './locales/ja.json';
import { defaultLanguage, Language } from './types';

export type InternationalizationKey = AttributeList<Resources[Language]["translation"], 5>;

export type Resources = {
  ja: {
    translation: typeof jaJson;
  },
  en: {
    translation: typeof enJson;
  }
};

export const resources: Resources = {
  ja: {
    translation: jaJson
  },
  en: {
    translation: enJson
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
