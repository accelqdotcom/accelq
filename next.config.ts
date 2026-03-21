import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages hosting
  output: "export",
  // Hosted at https://accelqdotcom.github.io/accelq/
  basePath: isProd ? "/accelq" : "",
  assetPrefix: isProd ? "/accelq" : "",
  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
