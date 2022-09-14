module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://m.subway.co.kr/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
