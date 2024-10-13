/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['masonlineprod.vtexassets.com', "t2.uc.ltmcdn.com"], 
    },
  };

export default nextConfig;
// next.config.js
module.exports = {
  api: {
    bodyParser: {
      sizeLimit: '1mb', // Ajusta según tus necesidades
    },
  },
};
