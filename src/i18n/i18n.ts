import {getRequestConfig} from 'next-intl/server';

import enJson from './locales/en.json';
import jaJson from './locales/ja.json';
import { AttributeList } from '@/types';

export const defaultLocale = 'en';
export const locales = [defaultLocale, 'ja'] as const;
export type Locales = typeof locales[number];
 
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./locales/${locale}.json`)).default
}));

type EnLocale = typeof enJson;
type JaLocale = typeof jaJson;

type Resources = {
  en: EnLocale,
  ja: JaLocale
}

/**
 * 検索キーリスト
 */
export type InternationalizationKey = AttributeList<Resources[Locales], 10>;
