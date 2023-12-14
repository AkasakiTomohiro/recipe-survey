const withNextIntl = require('next-intl/plugin')('./src/i18n/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true
})

module.exports = nextConfig
