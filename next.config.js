/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jgc-product-bucket.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/title/**",
      },
      {
        protocol: "https",
        hostname: "jgc-product-bucket.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/description/**",
      },
    ],
  },
};

module.exports = nextConfig;
