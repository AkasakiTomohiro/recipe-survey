import {getTranslations} from 'next-intl/server';
import { InternationalizationKey, Locales, Namespaces } from '../i18n';

export type GetTransLocationsResult<TNamespaces extends Namespaces> = (key: InternationalizationKey<TNamespaces>) => string;

export async function getTransLocations<TNamespaces extends Namespaces = "translation">(
  lang: Locales, namespace?: TNamespaces
): Promise<GetTransLocationsResult<TNamespaces>> {
  const t = await getTranslations({ lang, namespace: namespace ?? 'translation' });
  return t;
}