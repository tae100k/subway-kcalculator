// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://m.subway.co.kr/:path*",
      },
    ];
  },
};
