/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ellara.geeklab.am'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hy'],
    defaultLocale: 'hy',
    localeDetection: false
  },
  unoptimized: true
};

export default nextConfig;

