import { AttributeList } from '@/types';
import enJson from './locales/en/translation.json';
import jaJson from './locales/ja/translation.json';

export const fallbackLng = 'en' as const;
export type Language = typeof fallbackLng;
export const languages = [fallbackLng, 'ja'] as const;
export type Languages = typeof languages[number];
export const defaultNS = 'translation' as const;
export const namespaces = [defaultNS] as const;
export type Namespaces = typeof namespaces[number];
export const cookieName = 'i18next'

export function getOptions (lng: Languages = fallbackLng, ns: Namespaces = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}

type Resources = {
  en: {
    translation: typeof enJson
  },
  ja: {
    translation: typeof jaJson
  }
}

/**
 * 検索キーリスト
 */
export type InternationalizationKey<T extends Namespaces> = AttributeList<Resources[Language][T], 5>;
