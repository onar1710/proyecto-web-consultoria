/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/proyecto-web-consultoria' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/proyecto-web-consultoria' : '',
  trailingSlash: false,
}

module.exports = nextConfig
