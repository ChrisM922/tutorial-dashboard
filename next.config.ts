import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    localPatterns: [{ pathname: '/public/*' }],
  },
  /* config options here */
  experimental: {
    ppr: 'incremental',
  }
};

export default nextConfig;
