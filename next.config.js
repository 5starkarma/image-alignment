/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path:false, "crypto": false  };
    return config;
  },
};

module.exports = nextConfig
