import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Enable static site generation (prerendering) to generate static files
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  nitro: false, // Disable Nitro to allow TanStack Start's native prerenderer to build to dist/
  vite: {
    base: process.env.NODE_ENV === "production" ? "/my-creative-canvas-443/" : "/",
  },
});
