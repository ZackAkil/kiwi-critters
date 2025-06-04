// next.config.js
import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production'; // Helpful for conditional settings

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Added this line for static export
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Required for static export with next/image
  },
  
  // --- ADD THESE LINES FOR GITHUB PAGES ---
  basePath: isProd ? '/kiwi-critters' : '', // Your repository name
  assetPrefix: isProd ? '/kiwi-critters/' : '', // Your repository name with trailing slash
  // ----------------------------------------
};

export default nextConfig;