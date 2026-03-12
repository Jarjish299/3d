'use strict';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domain
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
