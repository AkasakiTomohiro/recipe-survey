import { useTransLocations } from "@/i18n";

export const SampleComponent = (): JSX.Element => {
  const t = useTransLocations('translation');
  return (<>{t("docs")}{' '}</>)
}