import type { BatchOverall, BatchResult, QuestionFeedback } from "../types";

function getAnthropicConfig() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const baseUrl = process.env.ANTHROPIC_API_URL ?? "https://api.anthropic.com/v1/messages";
  const model = process.env.ANTHROPIC_MODEL ?? "claude-3-5-sonnet-latest";
  const version = process.env.ANTHROPIC_VERSION ?? "2023-06-01";

  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not configured");
  }

  return { apiKey, baseUrl, model, version };
}

async function createAnthropicMessage(prompt: string, maxTokens: number): Promise<string> {
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
      max_tokens: maxTokens,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
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

function parseJsonFromText<T>(text: string): T {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error("LLM response did not contain JSON");
  }
  return JSON.parse(match[0]) as T;
}

export async function analyzeQuestionWithAnthropic(
  question: string,
): Promise<QuestionFeedback> {
  const prompt = `あなたは質問力の専門家です。以下の質問を分析し、JSON形式で評価してください。

質問: "${question}"

以下の形式でJSONを返してください：
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

評価基準：
- 深さ: 表面的か、本質に迫っているか
- 創造性: ユニークな視点があるか
- 具体性: 曖昧でなく、明確か
- レベル1: 事実確認の質問
- レベル2: 思考を深める質問
- レベル3: 価値観や行動を変える質問

必ずJSONのみを返し、他の説明は含めないでください。`;

  const content = await createAnthropicMessage(prompt, 1000);
  return parseJsonFromText<QuestionFeedback>(content);
}

export async function analyzeBatchWithAnthropic(
  questions: string[],
): Promise<BatchResult> {
  const validQuestions = questions.filter((q) => q.trim() !== "");
  const list = validQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n");

  const prompt = `あなたは質問力の専門家です。以下の${validQuestions.length}個の質問を分析し、総合的な評価を行ってください。

質問リスト:
${list}

以下の形式でJSONを返してください：
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
  "summary": "全体的な評価と改善アドバイス（200文字程度）"
}

必ずJSONのみを返し、他の説明は含めないでください。`;

  const content = await createAnthropicMessage(prompt, 1500);
  const parsed = parseJsonFromText<{ overall: BatchOverall; summary: string }>(content);

  return {
    mode: "batch",
    overall: parsed.overall,
    summary: parsed.summary,
  };
}
