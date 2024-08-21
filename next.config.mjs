/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        config.watchOptions = {
          ignored: [
            '**/node_modules/**',
            '**/.next/**',
            '**/path/to/your/ignored/files/**'
          ],
        };
      }
      return config;
    },
  };
  
  export default nextConfig;