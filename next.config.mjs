/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: process.env.ENV_HOSTNAME,
         },
         {
            hostname: "127.0.0.1",
         },
      ],
   },
};

export default nextConfig;
