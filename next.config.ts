import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The admin console is a standalone static website living outside the
  // storefront's React tree, reachable at its own URL: /console
  async rewrites() {
    return [
      { source: "/console", destination: "/console/index.html" },
      { source: "/console/", destination: "/console/index.html" },
    ];
  },
};

export default nextConfig;
