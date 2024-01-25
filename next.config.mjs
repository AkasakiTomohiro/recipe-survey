import intlPlugin from 'next-intl/plugin';

const withNextIntl = intlPlugin('./src/i18n/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({});

export default nextConfig;
