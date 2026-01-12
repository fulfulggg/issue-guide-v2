import type { BatchResult, QuestionFeedback } from "./types";
import { analyzeQuestionWithOpenAI, analyzeBatchWithOpenAI } from "./providers/openai";
import { analyzeQuestionWithAnthropic, analyzeBatchWithAnthropic } from "./providers/anthropic";

export type Provider = "openai" | "anthropic";

export function providerFromHeader(value: unknown): Provider | null {
  if (typeof value !== "string") return null;
  const v = value.toLowerCase().trim();
  if (v === "openai" || v === "anthropic") return v;
  return null;
}

function getPrimaryProvider(): Provider {
  const value = process.env.PRIMARY_PROVIDER?.toLowerCase();

  if (value === "anthropic") {
    return "anthropic";
  }

  // デフォルトは openai
  return "openai";
}

export async function analyzeQuestionRouted(input: {
  question: string;
  provider?: Provider;
}): Promise<QuestionFeedback> {
  const provider = input.provider ?? getPrimaryProvider();

  if (provider === "anthropic") {
    return analyzeQuestionWithAnthropic(input.question);
  }

  return analyzeQuestionWithOpenAI(input.question);
}

export async function analyzeBatchRouted(input: {
  questions: string[];
  provider?: Provider;
}): Promise<BatchResult> {
  const provider = input.provider ?? getPrimaryProvider();

  if (provider === "anthropic") {
    return analyzeBatchWithAnthropic(input.questions);
  }

  return analyzeBatchWithOpenAI(input.questions);
}

export type { QuestionFeedback, BatchResult };
