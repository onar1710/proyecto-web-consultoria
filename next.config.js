/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://leexms.com' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
}

module.exports = nextConfig
