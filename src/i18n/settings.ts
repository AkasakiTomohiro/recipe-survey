export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ja'] as const;
export type Languages = typeof languages[number];
export const defaultNS = 'translation' as const;
export type Namespaces = typeof defaultNS | (string & {});
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
