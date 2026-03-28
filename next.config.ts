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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
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
