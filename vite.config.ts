import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/my-creative-canvas-443/', // <--- AJOUTEZ CETTE LIGNE EXACTEMENT ICI
  server: {
    host: "::",
    port: 8080,
  },
  // ... le reste du fichier ne change pas
