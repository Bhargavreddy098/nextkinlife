import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Pin the Turbopack root to this project so it does not walk up into a parent
 * directory that happens to contain an unrelated lockfile.
 */
const nextConfig: NextConfig = {
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
