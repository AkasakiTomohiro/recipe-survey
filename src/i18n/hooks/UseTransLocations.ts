/**
 * @file UseTransLocations.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useTranslations } from 'next-intl';

import { InternationalizationKey } from '../i18n';

export type UseTransLocationsResult = (key: InternationalizationKey) => string;

export function useTransLocations(): UseTransLocationsResult {
  const t = useTranslations();
  return t;
}
