import type { BatchOverall, BatchResult, QuestionFeedback } from "../types";

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

  // gpt-5.1 用のコアパラメータ（env があればそれを優先）
  const reasoningEffort =
    (process.env.OPENAI_REASONING_EFFORT as ReasoningEffort | undefined) ?? "medium";
  const verbosity =
    (process.env.OPENAI_VERBOSITY as VerbosityLevel | undefined) ?? "medium";

  return { apiKey, baseUrl, model, reasoningEffort, verbosity };
}

// 単一質問評価用のシステムプロンプト
const SINGLE_SYSTEM_PROMPT = `
あなたは「質問力」の専門家かつコーチです。
ユーザーが入力した1つの「質問」を分析し、必ず以下のJSON形式「だけ」を出力してください。

期待するJSONフォーマット:
{
  "score": 0-100の総合スコア,
  "depth": 1-5の深さ評価（1:浅い、2:やや浅い、3:普通、4:深い、5:非常に深い）,
  "creativity": 1-5の創造性評価,
  "specificity": 1-5の具体性評価,
  "level": 質問のレベル（1:情報収集、2:洞察、3:変容）,
  "strengths": ["強み1", "強み2", "強み3"],
  "improvements": ["改善点1", "改善点2"],
  "exampleQuestions": ["参考質問例1", "参考質問例2", "参考質問例3"]
}

評価基準の概要:
- 深さ: 表面的か、本質に迫っているか
- 創造性: ユニークな視点や切り口があるか
- 具体性: 曖昧でなく、対象や条件が明確か
- レベル1: 事実確認の質問
- レベル2: 思考を深める質問
- レベル3: 価値観や行動を変えるような質問

制約:
- 出力は必ず有効なJSONのみ（前後に説明文やコメント、日本語の文章を付けてはいけません）
- JSONのキー名は上記と完全に一致させてください
`.trim();

// 複数質問評価（バッチ）用のシステムプロンプト
const BATCH_SYSTEM_PROMPT = `
あなたは「質問力」の専門家かつコーチです。
ユーザーが入力した複数の「質問リスト」を分析し、全体としての傾向と改善ポイントを評価してください。

必ず以下のJSON形式「だけ」を出力してください:
{
  "overall": {
    "averageScore": 全体の平均スコア(0-100),
    "averageDepth": 深さの平均(1-5),
    "averageCreativity": 創造性の平均(1-5),
    "averageSpecificity": 具体性の平均(1-5),
    "levelDistribution": {
      "level1": レベル1の質問数,
      "level2": レベル2の質問数,
      "level3": レベル3の質問数
    }
  },
  "summary": "全体的な評価と改善アドバイス（日本語で200〜400文字程度）"
}

評価の観点:
- 平均スコアや平均深度だけでなく、
  「どのレベルの質問が多いか」「どこが伸びしろか」を summary に具体的に書いてください。

制約:
- 出力は必ず有効なJSONのみ（前後に説明文やコメント、日本語の文章を付けてはいけません）
- JSONのキー名は上記と完全に一致させてください
`.trim();

async function createChatCompletion(
  systemPrompt: string,
  userContent: string,
  maxTokens: number,
): Promise<string> {
  const { apiKey, baseUrl, model, reasoningEffort, verbosity } = getOpenAIConfig();

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
          content: systemPrompt,
        },
        {
          role: "user",
          content: userContent,
        },
      ],
      // gpt-5.1 用の推論・出力量パラメータ
      reasoning_effort: reasoningEffort, // "none" | "low" | "medium" | "high"（デフォルト: "medium"）
      verbosity, // "low" | "medium" | "high"（デフォルト: "medium"）
      // 出力長は少し余裕を持たせて多めに
      max_tokens: maxTokens,
      // 注意: gpt-5.1 + reasoning_effort !== "none" の場合、
      // temperature / top_p / logprobs は使用不可のため指定しない。
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

function parseJsonFromText<T>(text: string): T {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error("LLM response did not contain JSON");
  }
  return JSON.parse(match[0]) as T;
}

export async function analyzeQuestionWithOpenAI(
  question: string,
): Promise<QuestionFeedback> {
  const userContent = `以下の質問を分析し、システムプロンプトで指定されたJSON形式で評価を返してください。

質問: "${question}"`;

  // 単一質問なので 2000 トークン程度の上限を確保（余裕多め）
  const content = await createChatCompletion(SINGLE_SYSTEM_PROMPT, userContent, 2000);

  return parseJsonFromText<QuestionFeedback>(content);
}

export async function analyzeBatchWithOpenAI(questions: string[]): Promise<BatchResult> {
  const validQuestions = questions.filter((q) => q.trim() !== "");
  const list = validQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n");

  const userContent = `以下の${validQuestions.length}個の質問を分析し、システムプロンプトで指定されたJSON形式で「全体評価」を返してください。

質問リスト:
${list}`;

  // バッチ評価なので summary も含めて 3000 トークン程度に余裕を持たせる
  const content = await createChatCompletion(BATCH_SYSTEM_PROMPT, userContent, 3000);
  const parsed = parseJsonFromText<{ overall: BatchOverall; summary: string }>(content);

  return {
    mode: "batch",
    overall: parsed.overall,
    summary: parsed.summary,
  };
}
