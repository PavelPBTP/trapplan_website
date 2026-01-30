import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.co",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/wishlist-calculator",
        destination: "/steam-wishlist-calculator",
        permanent: false,
      },
      {
        source: "/redditlaunch-support",
        destination: "/reddit-launch-support",
        permanent: false,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
