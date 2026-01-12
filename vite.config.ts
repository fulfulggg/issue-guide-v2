import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

import aiChatHandler from "./api/ai/chat";
import aiFeedbackHandler from "./api/ai/feedback";
import codeContextHandler from "./api/code/context";
import codeUpdateHandler from "./api/code/update";

function devApiPlugin(): Plugin {
  return {
    name: "dev-api-plugin",
    configureServer(server) {
      const mount = (route: string, handler: any) => {
        server.middlewares.use(route, async (req, res) => {
          try {
            // Read raw body (Vite dev server doesn't parse JSON for us)
            const rawBody = await new Promise<string>((resolve, reject) => {
              let data = "";
              req.on("data", (chunk) => {
                data += chunk;
              });
              req.on("end", () => resolve(data));
              req.on("error", reject);
            });

            (req as any).body = rawBody;

            // /api/code/update は FS 書き換え後に watcher を軽く刺激して HMR を確実化
            if (route === "/api/code/update") {
              await handler(req as any, res as any, {
                onWritten: (absPath: string) => {
                  server.watcher.emit("change", absPath);
                },
              });
              return;
            }

            await handler(req as any, res as any);
          } catch (error) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.end(JSON.stringify({ error: "Dev API proxy error" }));
            // eslint-disable-next-line no-console
            console.error("devApiPlugin error:", error);
          }
        });
      };

      mount("/api/ai/feedback", aiFeedbackHandler);
      mount("/api/ai/chat", aiChatHandler);
      mount("/api/code/context", codeContextHandler);
      mount("/api/code/update", codeUpdateHandler);
    },
  };
}

const plugins = [
  devApiPlugin(),
  // jsxLocPlugin は JSX を解析して data-loc を付与するため、react() より先に適用する
  jsxLocPlugin(),
  react(),
  tailwindcss(),
  vitePluginManusRuntime(),
];

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
