const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["velaris.sirv.com"],
  },
};
