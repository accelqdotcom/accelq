import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting
  output: "export",
  // Hosted at https://accelqdotcom.github.io/accelq/
  basePath: "/accelq",
  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
