import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: ["three"],
  async rewrites() {
    return [
      {
        source: "/wp-content/themes/organimo/public/:path*",
        destination: "/:path*",
      },
      {
        source: "/public/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
