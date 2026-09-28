import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    // Allowlist for the quality values used on next/image components.
    // 75 (Next default) for heroes, 60 for below-fold and carousel imagery.
    qualities: [60, 55, 75],
  },
};

export default nextConfig;
