import fs from "node:fs";
import path from "node:path";

function parseBody(raw: any): { filePath?: string; line?: number; radius?: number } {
  if (!raw) return {};
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
  return raw;
}

function sendJson(res: any, status: number, data: unknown) {
  if (typeof res.status === "function" && typeof res.json === "function") {
    res.status(status).json(data);
    return;
  }

  if ("statusCode" in res) {
    res.statusCode = status;
  }
  if (typeof res.setHeader === "function") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
  }
  if (typeof res.end === "function") {
    res.end(JSON.stringify(data));
  }
}

function normalizeClientSrcPath(input: string): { rel: string; abs: string } | null {
  const normalized = input.replace(/\\/g, "/");
  const idx = normalized.lastIndexOf("client/src/");
  const rel = (idx >= 0 ? normalized.slice(idx) : normalized).replace(/^\//, "");

  if (!rel.startsWith("client/src/")) return null;

  const abs = path.resolve(process.cwd(), rel);
  const allowedRoot = path.resolve(process.cwd(), "client", "src") + path.sep;

  if (!abs.startsWith(allowedRoot)) return null;

  return { rel, abs };
}

export default async function handler(req: any, res: any) {
  // dev only
  if (process.env.NODE_ENV === "production") {
    sendJson(res, 404, { error: "Not Found" });
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method Not Allowed" });
    return;
  }

  const { filePath, line, radius } = parseBody(req.body);

  if (typeof filePath !== "string") {
    sendJson(res, 400, { error: "filePath is required" });
    return;
  }

  const normalized = normalizeClientSrcPath(filePath);
  if (!normalized) {
    sendJson(res, 403, { error: "Forbidden path" });
    return;
  }

  const lineNum =
    typeof line === "number" && Number.isFinite(line)
      ? Math.max(1, Math.floor(line))
      : 1;
  const r =
    typeof radius === "number" && Number.isFinite(radius)
      ? Math.max(5, Math.min(200, Math.floor(radius)))
      : 60;

  const content = fs.readFileSync(normalized.abs, "utf-8");
  const lines = content.split(/\r?\n/);
  const startLine = Math.max(1, lineNum - r);
  const endLine = Math.min(lines.length, lineNum + r);
  const snippet = lines.slice(startLine - 1, endLine).join("\n");

  sendJson(res, 200, {
    filePath: normalized.rel,
    startLine,
    endLine,
    totalLines: lines.length,
    snippet,
  });
}
