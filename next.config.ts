import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // 注意：不要设置 output: 'export'
};

export default nextConfig;