import fs from "node:fs";
import path from "node:path";

function parseBody(raw: any): {
  filePath?: string;
  lineStart?: number;
  lineEnd?: number;
  newCode?: string;
} {
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

export default async function handler(
  req: any,
  res: any,
  opts?: { onWritten?: (absPath: string) => void },
) {
  // dev only
  if (process.env.NODE_ENV === "production") {
    sendJson(res, 404, { error: "Not Found" });
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method Not Allowed" });
    return;
  }

  const { filePath, lineStart, lineEnd, newCode } = parseBody(req.body);

  if (typeof filePath !== "string") {
    sendJson(res, 400, { error: "filePath is required" });
    return;
  }
  if (typeof newCode !== "string") {
    sendJson(res, 400, { error: "newCode is required" });
    return;
  }

  const normalized = normalizeClientSrcPath(filePath);
  if (!normalized) {
    sendJson(res, 403, { error: "Forbidden path" });
    return;
  }

  const content = fs.readFileSync(normalized.abs, "utf-8");
  const lines = content.split(/\r?\n/);

  const start =
    typeof lineStart === "number" && Number.isFinite(lineStart)
      ? Math.max(1, Math.floor(lineStart))
      : 1;
  const end =
    typeof lineEnd === "number" && Number.isFinite(lineEnd)
      ? Math.max(start, Math.floor(lineEnd))
      : start;

  if (start > lines.length + 1) {
    sendJson(res, 400, { error: "lineStart is out of range" });
    return;
  }

  const replacementLines = newCode.split(/\r?\n/);
  const deleteCount = Math.min(lines.length - (start - 1), end - start + 1);
  lines.splice(start - 1, deleteCount, ...replacementLines);

  fs.writeFileSync(normalized.abs, lines.join("\n"), "utf-8");
  opts?.onWritten?.(normalized.abs);

  sendJson(res, 200, { success: true, filePath: normalized.rel });
}
