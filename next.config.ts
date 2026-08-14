import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isGitHubPages ? "/hyro" : "",
  devIndicators: false,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
