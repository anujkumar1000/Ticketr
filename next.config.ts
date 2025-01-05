import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "bold-porcupine-632.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
