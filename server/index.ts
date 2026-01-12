import express from "express";
import { createServer } from "http";
import { randomUUID } from "node:crypto";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "1mb" }));

  // Return JSON for malformed JSON bodies
  app.use((err: any, _req: any, res: any, next: any) => {
    if (err instanceof SyntaxError) {
      res.status(400).json({ error: "Bad Request", message: "Malformed JSON" });
      return;
    }
    if (err && (err as any).type === "entity.too.large") {
      res.status(413).json({ error: "Payload Too Large" });
      return;
    }
    next(err);
  });

  type Workspace = {
    id: string;
    createdAt: string;
  };

  // NOTE: Ephemeral in-memory store (not durable; single-instance only).
  const workspaces = new Map<string, Workspace>();
  const WORKSPACE_MAX_COUNT = 1000;

  // --- API (Production Foundation) ---
  app.get("/api/health", (_req, res) => {
    res.status(200).json({ ok: true });
  });

  app.post("/api/workspaces", (req, res) => {
    const contentType = String((req as any)?.headers?.["content-type"] ?? "");
    if (contentType !== "" && !contentType.toLowerCase().includes("application/json")) {
      res.status(415).json({ error: "Unsupported Media Type" });
      return;
    }

    const body = (req as any).body;
    if (body === undefined && contentType === "") {
      // allow empty body with no content-type (minimal client compatibility)
    } else {
      if (body === null || typeof body !== "object" || Array.isArray(body)) {
        res
          .status(400)
          .json({ error: "Bad Request", message: "Body must be an empty JSON object" });
        return;
      }
      if (Object.keys(body).length !== 0) {
        res
          .status(400)
          .json({ error: "Bad Request", message: "Body must be an empty JSON object" });
        return;
      }
    }

    const workspace: Workspace = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
    };

    if (workspaces.size >= WORKSPACE_MAX_COUNT) {
      res.status(503).json({ error: "Service Unavailable" });
      return;
    }

    workspaces.set(workspace.id, workspace);
    res.status(201).json({ workspace });
  });

  app.get("/api/workspaces/:id", (req, res) => {
    const id = (req as any)?.params?.id;
    if (typeof id !== "string" || id.length === 0) {
      res.status(400).json({ error: "Bad Request", message: "id is required" });
      return;
    }

    const workspace = workspaces.get(id);
    if (!workspace) {
      res.status(404).json({ error: "Not Found" });
      return;
    }

    res.status(200).json({ workspace });
  });

  // Ensure /api/* doesn't fall back to SPA routing
  app.use("/api", (_req, res) => {
    res.status(404).json({ error: "Not Found" });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
