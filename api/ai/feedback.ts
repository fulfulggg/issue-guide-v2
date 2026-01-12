import {
  analyzeBatchRouted,
  analyzeQuestionRouted,
  providerFromHeader,
  type Provider,
} from "../_lib/aiRouter";
import type { BatchResult, SingleResult } from "../_lib/types";

function parseBody(raw: any): { question?: string; questions?: string[] } {
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
    // Express / Vercel-style
    res.status(status).json(data);
    return;
  }

  // Node.js http.ServerResponse fallback
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

// Vercel Node / Express 互換のハンドラ
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method Not Allowed" });
    return;
  }

  try {
    const rawProviderHeader = req?.headers?.["x-ai-provider"] as unknown;
    const provider: Provider | undefined = Array.isArray(rawProviderHeader)
      ? providerFromHeader(rawProviderHeader[0]) ?? undefined
      : providerFromHeader(rawProviderHeader) ?? undefined;

    const { question, questions } = parseBody(req.body);

    if (typeof question === "string" && question.trim().length > 0) {
      const feedback = await analyzeQuestionRouted({ question, provider });
      const result: SingleResult = {
        mode: "single",
        feedback,
      };
      sendJson(res, 200, result);
      return;
    }

    if (Array.isArray(questions) && questions.length > 0) {
      const batch: BatchResult = await analyzeBatchRouted({
        questions,
        provider,
      });
      sendJson(res, 200, batch);
      return;
    }

    sendJson(res, 400, {
      error: "Invalid request body. Provide either `question` or non-empty `questions`.",
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("AI feedback API error:", error);

    if (error instanceof Error) {
      sendJson(res, 500, {
        error: "Internal server error",
        message: error.message,
      });
      return;
    }

    sendJson(res, 500, {
      error: "Internal server error",
    });
  }
}
