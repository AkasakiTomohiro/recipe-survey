/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { InternationalizationKey } from '~/i18n/i18n';
import { Language } from '~/i18n/types';

export type UseInternationalizationReturn = {
  t: (key: InternationalizationKey, variable?: Record<string, number | string>) => string;
  changeLang: (language: Language) => void;
};