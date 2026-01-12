import { providerFromHeader, type Provider } from "../_lib/aiRouter";

function parseBody(raw: any): { prompt?: string } {
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

type ReasoningEffort = "none" | "low" | "medium" | "high";
type VerbosityLevel = "low" | "medium" | "high";

function getOpenAIConfig() {
  const apiKey = process.env.OPENAI_API_KEY;
  const baseUrl = process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1";
  // デフォルトモデルは gpt-5.1（env で上書き可）
  const model = process.env.OPENAI_MODEL ?? "gpt-5.1";

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  const reasoningEffort =
    (process.env.OPENAI_REASONING_EFFORT as ReasoningEffort | undefined) ??
    "medium";
  const verbosity =
    (process.env.OPENAI_VERBOSITY as VerbosityLevel | undefined) ?? "medium";

  return { apiKey, baseUrl, model, reasoningEffort, verbosity };
}

function getAnthropicConfig() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const baseUrl =
    process.env.ANTHROPIC_API_URL ?? "https://api.anthropic.com/v1/messages";
  const model = process.env.ANTHROPIC_MODEL ?? "claude-3-5-sonnet-latest";
  const version = process.env.ANTHROPIC_VERSION ?? "2023-06-01";

  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured");
  }

  return { apiKey, baseUrl, model, version };
}

async function chatWithOpenAI(prompt: string): Promise<string> {
  const { apiKey, baseUrl, model, reasoningEffort, verbosity } =
    getOpenAIConfig();

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content: "You are a helpful coding assistant.",
        },
        { role: "user", content: prompt },
      ],
      reasoning_effort: reasoningEffort,
      verbosity,
      max_tokens: 2500,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `OpenAI API error: ${response.status} ${response.statusText}${text ? ` - ${text}` : ""}`,
    );
  }

  const data = (await response.json()) as any;
  const content = data?.choices?.[0]?.message?.content;

  if (typeof content !== "string") {
    throw new Error("Invalid response format from OpenAI");
  }

  return content;
}

async function chatWithAnthropic(prompt: string): Promise<string> {
  const { apiKey, baseUrl, model, version } = getAnthropicConfig();

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": version,
    },
    body: JSON.stringify({
      model,
      max_tokens: 2500,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `Anthropic API error: ${response.status} ${response.statusText}${text ? ` - ${text}` : ""}`,
    );
  }

  const data = (await response.json()) as any;
  const contentBlock = data?.content?.[0];
  const text = contentBlock?.text;

  if (typeof text !== "string") {
    throw new Error("Invalid response format from Anthropic");
  }

  return text;
}

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

    const { prompt } = parseBody(req.body);

    if (typeof prompt !== "string" || prompt.trim().length === 0) {
      sendJson(res, 400, { error: "Invalid request body. Provide `prompt`." });
      return;
    }

    const usedProvider: Provider =
      provider ??
      (process.env.PRIMARY_PROVIDER?.toLowerCase() === "anthropic"
        ? "anthropic"
        : "openai");

    const message =
      usedProvider === "anthropic"
        ? await chatWithAnthropic(prompt)
        : await chatWithOpenAI(prompt);

    sendJson(res, 200, { mode: "chat", message });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("AI chat API error:", error);

    const message = error instanceof Error ? error.message : "Internal server error";
    sendJson(res, 500, { error: "Internal server error", message });
  }
}
