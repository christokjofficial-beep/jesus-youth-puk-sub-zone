import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/public/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
