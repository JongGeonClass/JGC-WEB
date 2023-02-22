/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jgc-product-bucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/title/**',
      },
    ],
  },
}

module.exports = nextConfig
