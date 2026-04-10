/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  assetPrefix: '',
  basePath: '',
  trailingSlash: false,
  generateBuildId: async () => {
    return `build-${new Date().getTime()}`
  }
}

module.exports = nextConfig
