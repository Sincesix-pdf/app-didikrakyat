import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // aktifin static export
  images: { unoptimized: true }, // biar next/image jalan di export
};

export default nextConfig;
