import { useTranslations } from 'next-intl';

import { InternationalizationKey } from '../i18n';

export type UseTransLocationsResult = (key: InternationalizationKey) => string;

export function useTransLocations(): UseTransLocationsResult {
  const t = useTranslations();
  return t;
}
