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

export interface LevelDistribution {
  level1: number;
  level2: number;
  level3: number;
}

export interface BatchOverall {
  averageScore: number;
  averageDepth: number;
  averageCreativity: number;
  averageSpecificity: number;
  levelDistribution: LevelDistribution;
}

export interface BatchResult {
  mode: "batch";
  overall: BatchOverall;
  summary: string;
}

export interface SingleResult {
  mode: "single";
  feedback: QuestionFeedback;
}
