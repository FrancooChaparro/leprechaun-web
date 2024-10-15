/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'masonlineprod.vtexassets.com',
      },
      {
        protocol: 'https',
        hostname: 't2.uc.ltmcdn.com',
      },
    ],
  },
};

export default nextConfig;
