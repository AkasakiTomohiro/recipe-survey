/**
 * @file UseInternationalization.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '~/i18n/types';

import { UseInternationalizationReturn } from './types';

export function useInternationalization(): UseInternationalizationReturn {
  const { t, i18n } = useTranslation("translation");
  const changeLang = useCallback((language: Language) => i18n.changeLanguage(language), [i18n]);
  return { t, changeLang };
}