import {getRequestConfig} from 'next-intl/server';

export const defaultLocale = 'en';
export const locales = [defaultLocale, 'ja'];
 
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./locales/${locale}.json`)).default
}));
