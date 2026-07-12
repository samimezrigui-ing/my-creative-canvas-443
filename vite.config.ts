import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Enable static site generation (prerendering) to generate static files
    prerender: {
      enabled: true,
      crawlLinks: true,
      filter: ({ path }) => {
        // Exclude Lovable assets and static files from being crawled/prerendered
        if (path.includes("/__l5e/") || /\.(pdf|png|jpg|jpeg|gif|mp4|webm|svg|ico)$/i.test(path)) {
          return false;
        }
        return true;
      },
    },
  },
  nitro: false, // Disable Nitro to allow TanStack Start's native prerenderer to build to dist/
  vite: {
    base: process.env.NODE_ENV === "production" ? "/my-creative-canvas-443/" : "/",
  },
});
