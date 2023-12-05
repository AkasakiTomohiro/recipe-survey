import { KeyPrefix, createInstance, i18n } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { InternationalizationKey, Languages, Namespaces, getOptions } from './settings'
import { UseTranslationOptions } from 'react-i18next'

type I18nInstance = ReturnType<typeof createInstance>;

const initI18next = async (lng: Languages, ns: Namespaces): Promise<I18nInstance> => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

type UseTranslationResponse<T extends Namespaces> = {
  t: (key: InternationalizationKey<T>) => string
  i18n: I18nInstance
}

export async function useTranslation<T extends Namespaces>(
  lng: Languages, 
  ns: T, 
  options: UseTranslationOptions<T> = {}
): Promise<UseTranslationResponse<T>> {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}
