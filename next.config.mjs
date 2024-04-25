/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hy'],
    defaultLocale: 'hy',
    localeDetection: false
  },
  unoptimized: true
};

export default nextConfig;

