import { createRequire } from "node:module";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const require = createRequire(import.meta.url);
// Package ESM entry uses top-level `require` and fails under Vite 6's config loader; use CJS build.
const vitePrerender: {
  (options: Record<string, unknown>): import("vite").Plugin;
  PuppeteerRenderer: new (options?: Record<string, unknown>) => unknown;
} = require("vite-plugin-prerender");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");

const PuppeteerRenderer = vitePrerender.PuppeteerRenderer;

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: distDir,
      routes: [
        "/",
        "/book-appointment",
        "/privacy-policy",
        "/terms-and-conditions",
        "/a2p",
      ],
      renderer: new PuppeteerRenderer({
        headless: true,
        renderAfterElementExists: "main",
        renderAfterTime: 1500,
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
          "--disable-gpu",
        ],
      }),
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
});
