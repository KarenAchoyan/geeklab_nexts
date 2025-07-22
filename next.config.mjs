/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@ant-design/icons', '@ant-design/icons-svg'],
  images: {
    domains: ['geeklab.dahk.am'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'hy', 'ge'],
    defaultLocale: 'en',
    localeDetection: false
  },
  unoptimized: true,
  env: {
    API_URL: "http://127.0.0.1:8000/api",
    IMAGE_URL: "http://127.0.0.1:8000/storage/",
    IMAGE_URL2: "http://127.0.0.1:8000/",
  },
};

export default nextConfig;

