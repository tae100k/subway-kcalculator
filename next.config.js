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
