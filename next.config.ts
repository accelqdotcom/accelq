import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting
  output: "export",
  // If hosted at https://username.github.io/accelq/ uncomment:
  // basePath: "/accelq",
  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
