import { useTransLocations } from '@/i18n';

export const SampleComponent = (): JSX.Element => {
  const t = useTransLocations();
  return (
    <>
      {t('docs')}
      {' '}
    </>
  );
};
