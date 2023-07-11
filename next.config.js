/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'utdgrupoti.com',
      'pexels.com'
    ]
  },
};

module.exports = nextConfig;
