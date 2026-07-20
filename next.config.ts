import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/kaiane.com",
  assetPrefix: "/kaiane.com",
};

export default nextConfig;
