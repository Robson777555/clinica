import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig, Plugin } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// Plugin para garantir que o favicon seja copiado durante o build
const faviconPlugin = (): Plugin => {
  return {
    name: "favicon-plugin",
    buildStart() {
      const clientRoot = path.resolve(import.meta.dirname, "client");
      const faviconSource = path.join(clientRoot, "favicon.png");
      const faviconDest = path.join(clientRoot, "public", "favicon.png");
      
      // Copia o favicon da raiz para public se existir
      if (fs.existsSync(faviconSource) && !fs.existsSync(faviconDest)) {
        fs.copyFileSync(faviconSource, faviconDest);
      }
    },
    generateBundle() {
      // Garante que o favicon seja incluído no build
      const clientRoot = path.resolve(import.meta.dirname, "client");
      const faviconPath = path.join(clientRoot, "public", "favicon.png");
      
      if (fs.existsSync(faviconPath)) {
        this.emitFile({
          type: "asset",
          fileName: "favicon.png",
          source: fs.readFileSync(faviconPath),
        });
      }
    },
  };
};

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), faviconPlugin()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
