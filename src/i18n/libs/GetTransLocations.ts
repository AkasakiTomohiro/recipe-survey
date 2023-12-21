import { getTranslations } from 'next-intl/server';

import { InternationalizationKey, Locales } from '../i18n';

export type GetTransLocationsResult = (key: InternationalizationKey) => string;

export async function getTransLocations(lang: Locales): Promise<GetTransLocationsResult> {
  const t = await getTranslations({ lang });
  return t;
}