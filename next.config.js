/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  future: {
    webpack5: true,
  },
};

module.exports = nextConfig;
