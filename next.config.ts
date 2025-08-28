import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // enables static export
  images: { unoptimized: true } // needed if you use next/image
};

export default nextConfig;
