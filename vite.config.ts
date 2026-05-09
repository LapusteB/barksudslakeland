import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Client build: `vite build` → dist/
// SSR bundle: `vite build --ssr src/entry-server.tsx --outDir dist/server`
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
  ssr: {
    noExternal: ["react-router-dom", "react-router"],
  },
});
