/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/zn",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
