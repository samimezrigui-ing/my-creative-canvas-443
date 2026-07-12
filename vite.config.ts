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
  nitro: {
    preset: "github_pages",
  },
  vite: {
    base: process.env.NODE_ENV === "production" ? "/my-creative-canvas-443/" : "/",
  },
});
