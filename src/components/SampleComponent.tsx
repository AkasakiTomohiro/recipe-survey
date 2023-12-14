import { useTranslations } from "next-intl";

export const SampleComponent = (): JSX.Element => {
  const t = useTranslations('translation');
  return (<>{t("docs")}{' '}</>)
}