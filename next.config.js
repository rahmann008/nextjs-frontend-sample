/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL,
    NEXT_API_URL: process.env.NEXT_API_URL,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    MAPS_API_KEY: process.env.MAPS_API_KEY,
  },
  target: 'serverless',
};

module.exports = nextConfig;
