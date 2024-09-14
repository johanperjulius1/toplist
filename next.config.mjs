/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: [
          "**/node_modules/**",
          "**/.next/**",
          "**/path/to/your/ignored/files/**",
        ],
      };
    }

    config.output.filename = "static/js/[name].[contenthash].js";
    config.output.chunkFilename = "static/js/[name].[contenthash].js";

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
      loader: "file-loader",
      options: {
        name: "static/media/[name].[contenthash].[ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
