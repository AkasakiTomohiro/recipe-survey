import { useTranslations } from "next-intl";
import { InternationalizationKey, Namespaces } from "../i18n";

export type UseTransLocationsResult<TNamespaces extends Namespaces> = (key: InternationalizationKey<TNamespaces>) => string;

export function useTransLocations<TNamespaces extends Namespaces = "translation">(namespace?: TNamespaces): UseTransLocationsResult<TNamespaces> {
  const t = useTranslations(namespace ?? 'translation');
  return t;
}