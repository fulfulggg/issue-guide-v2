export interface QuestionFeedback {
  score: number; // 0-100
  depth: number; // 1-5
  creativity: number; // 1-5
  specificity: number; // 1-5
  level: 1 | 2 | 3;
  strengths: string[];
  improvements: string[];
  exampleQuestions: string[];
}

type LevelDistribution = { level1: number; level2: number; level3: number };

interface BatchOverall {
  averageScore: number;
  averageDepth: number;
  averageCreativity: number;
  averageSpecificity: number;
  levelDistribution: LevelDistribution;
}

interface SingleResponse {
  mode: "single";
  feedback: QuestionFeedback;
}

interface BatchResponse {
  mode: "batch";
  overall: BatchOverall;
  summary: string;
}

async function postJson<T>(
  url: string,
  body: unknown,
  headers?: Record<string, string>,
): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-AI-Provider": "openai",
      ...(headers ?? {}),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`AI API error: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

// 単一の質問を評価（サーバレスAPI経由）
export async function analyzeQuestion(question: string): Promise<QuestionFeedback> {
  if (!question.trim()) {
    throw new Error("Question is empty");
  }

  const data = await postJson<SingleResponse>("/api/ai/feedback", { question });

  if (data.mode !== "single") {
    throw new Error("Unexpected AI API response mode (expected single)");
  }

  return data.feedback;
}

// 複数の質問をまとめて評価（トレーニング全体のサマリー）
export async function analyzeMultipleQuestions(
  questions: string[],
): Promise<{
  overall: BatchOverall;
  individual: QuestionFeedback[];
  summary: string;
}> {
  const validQuestions = questions.filter((q) => q.trim() !== "");

  if (validQuestions.length === 0) {
    throw new Error("No valid questions to analyze");
  }

  const data = await postJson<BatchResponse>("/api/ai/feedback", {
    questions: validQuestions,
  });

  if (data.mode !== "batch") {
    throw new Error("Unexpected AI API response mode (expected batch)");
  }

  return {
    overall: data.overall,
    // 各質問ごとの詳細分析は将来の拡張用として空配列のまま維持
    individual: [],
    summary: data.summary,
  };
}
