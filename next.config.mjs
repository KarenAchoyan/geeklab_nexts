/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['geeklab.dahk.am'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hy'],
    defaultLocale: 'en',
    localeDetection: false
  },
  unoptimized: true
};

export default nextConfig;

