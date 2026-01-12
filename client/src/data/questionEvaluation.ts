// 質問の多次元評価システム

export interface EvaluationDimension {
  id: string;
  name: string;
  description: string;
  icon: string;
  goodExample: string;
  badExample: string;
  improvementTips: string[];
}

export const evaluationDimensions: EvaluationDimension[] = [
  {
    id: "positive_premise",
    name: "ポジティブ前提",
    description: "問題ではなく、強み・可能性・望ましい未来に光を当てているか",
    icon: "🌟",
    goodExample: "うまくいったときは、何が違っていましたか？",
    badExample: "なぜこんなにうまくいっていないのですか？",
    improvementTips: [
      "「問題」を「機会」や「可能性」の言葉に置き換える",
      "「なぜできないか」ではなく「どうすればできるか」と問う",
      "過去の成功体験や既にある強みに注目させる"
    ]
  },
  {
    id: "humility",
    name: "謙虚さ",
    description: "自分も答えを知らない前提で、相手の世界への genuine な好奇心から問えているか",
    icon: "🙏",
    goodExample: "あなたはそれをどう捉えていますか？",
    badExample: "それは〇〇ということですよね？（答えを誘導）",
    improvementTips: [
      "自分の仮説や正解を押し付けない",
      "相手の視点や経験を本当に知りたいという姿勢を持つ",
      "「確認質問」ではなく「探求質問」にする"
    ]
  },
  {
    id: "agency",
    name: "主体性",
    description: "相手の選択・価値観・主体性を引き出しているか",
    icon: "💪",
    goodExample: "あなたはどうしたいのですか？",
    badExample: "これをすべきだと思いませんか？",
    improvementTips: [
      "「すべき」「正しい」ではなく「したい」「大事」を問う",
      "相手の価値観や選択基準を引き出す",
      "外部の期待ではなく、内なる動機に焦点を当てる"
    ]
  },
  {
    id: "emotion_values",
    name: "感情・価値観アクセス",
    description: "事実レベルを超えて、感情や価値観の深い層にアクセスしているか",
    icon: "❤️",
    goodExample: "それはあなたにとって、なぜ重要なのですか？",
    badExample: "何が起きましたか？（事実のみ）",
    improvementTips: [
      "「何」の後に「それはあなたにとってどんな意味がありますか」と続ける",
      "「どう感じましたか」「何が大切だと思いますか」と感情・価値観を問う",
      "表面的な出来事から、その人の大事にしているものへ深掘りする"
    ]
  },
  {
    id: "actionability",
    name: "行動性",
    description: "気づきを具体的な行動に落とし込めているか",
    icon: "🎯",
    goodExample: "では、いつ・何を・どのレベルで始めますか？",
    badExample: "どう思いますか？（気づきで終わる）",
    improvementTips: [
      "洞察の後に「では次に何をしますか」と行動を問う",
      "「いつ」「誰が」「何を」と具体性を高める",
      "小さな一歩を明確にする"
    ]
  },
  {
    id: "openness",
    name: "オープン度",
    description: "「はい/いいえ」で終わらず、相手の思考を広げているか",
    icon: "🌊",
    goodExample: "それについてどう考えていますか？",
    badExample: "それは良いと思いますか？（Yes/No）",
    improvementTips: [
      "「どう」「何」「どのように」で始める",
      "「〜ですか？」（クローズド）を「〜について教えてください」（オープン）に変える",
      "複数の選択肢や視点を引き出す"
    ]
  },
  {
    id: "simplicity",
    name: "シンプルさ",
    description: "一文が短く、シンプルで、相手の言葉に寄せられているか",
    icon: "✨",
    goodExample: "何が一番大事ですか？",
    badExample: "あなたの現在の状況を鑑みて、最も優先度が高いと考えられる事項は何でしょうか？",
    improvementTips: [
      "一文を短くする（20文字以内が理想）",
      "専門用語を避け、相手の言葉を使う",
      "複雑な質問は分解する"
    ]
  },
  {
    id: "phase_fit",
    name: "フェーズ適合",
    description: "発散・収束・実行のフェーズに適した質問になっているか",
    icon: "🔄",
    goodExample: "【発散】まだ話に出ていない重要な論点は何ですか？",
    badExample: "【発散フェーズで】結論は何ですか？（収束の質問）",
    improvementTips: [
      "発散：可能性を広げる質問（「他には？」「もし〜だったら？」）",
      "収束：優先順位をつける質問（「最も重要なのは？」「何を選ばないか？」）",
      "実行：具体化する質問（「誰が」「いつ」「どうやって」）"
    ]
  }
];

export interface QuestionEvaluation {
  question: string;
  scores: {
    [dimensionId: string]: number; // 0-10
  };
  overallScore: number;
  strengths: string[];
  improvements: {
    dimension: string;
    suggestion: string;
    example: string;
  }[];
}

// 質問を評価する関数（簡易版 - 実際はAI APIを使用）
export function evaluateQuestion(question: string): QuestionEvaluation {
  const scores: { [key: string]: number } = {};
  const strengths: string[] = [];
  const improvements: { dimension: string; suggestion: string; example: string }[] = [];

  // ポジティブ前提
  const hasNegativeWords = /なぜ.*ない|できない|うまくいかない|問題/.test(question);
  const hasPositiveWords = /できる|うまくいった|強み|可能性|機会/.test(question);
  scores.positive_premise = hasPositiveWords ? 8 : hasNegativeWords ? 3 : 5;
  
  if (hasNegativeWords) {
    improvements.push({
      dimension: "ポジティブ前提",
      suggestion: "問題ではなく、可能性に焦点を当てる表現に変えましょう",
      example: question.replace(/なぜ.*ない/, "どうすれば").replace(/できない/, "できる")
    });
  }

  // 謙虚さ
  const hasLeadingWords = /〜ですよね|〜だと思いませんか|〜すべき/.test(question);
  scores.humility = hasLeadingWords ? 3 : 7;
  
  if (hasLeadingWords) {
    improvements.push({
      dimension: "謙虚さ",
      suggestion: "自分の答えを押し付けず、相手の視点を引き出しましょう",
      example: "あなたはどう考えていますか？"
    });
  }

  // 主体性
  const hasAgencyWords = /どうしたい|何が大事|あなたにとって/.test(question);
  const hasShouldWords = /すべき|しなければ/.test(question);
  scores.agency = hasAgencyWords ? 8 : hasShouldWords ? 3 : 5;
  
  if (hasShouldWords) {
    improvements.push({
      dimension: "主体性",
      suggestion: "「すべき」ではなく「したい」を問いましょう",
      example: question.replace(/すべき/, "したい")
    });
  }

  // 感情・価値観アクセス
  const hasEmotionWords = /感じ|思い|大切|重要|意味/.test(question);
  const isFactOnly = /何が起きた|いつ|誰が/.test(question) && !hasEmotionWords;
  scores.emotion_values = hasEmotionWords ? 8 : isFactOnly ? 3 : 5;
  
  if (isFactOnly) {
    improvements.push({
      dimension: "感情・価値観アクセス",
      suggestion: "事実だけでなく、その意味や感情を問いましょう",
      example: question + " それはあなたにとってどんな意味がありますか？"
    });
  }

  // 行動性
  const hasActionWords = /いつ|何を|どうやって|始め|実行/.test(question);
  scores.actionability = hasActionWords ? 8 : 4;
  
  if (!hasActionWords && question.length > 10) {
    improvements.push({
      dimension: "行動性",
      suggestion: "気づきを行動に落とし込む質問を追加しましょう",
      example: "では、次に何をしますか？"
    });
  }

  // オープン度
  const isClosedQuestion = /ですか？$/.test(question) && /^(は|です|ます)/.test(question);
  const hasOpenWords = /どう|何|どのように|どんな/.test(question);
  scores.openness = hasOpenWords ? 8 : isClosedQuestion ? 3 : 5;
  
  if (isClosedQuestion) {
    improvements.push({
      dimension: "オープン度",
      suggestion: "Yes/Noで終わらない質問にしましょう",
      example: question.replace(/ですか？/, "について、どう考えていますか？")
    });
  }

  // シンプルさ
  const length = question.length;
  const hasComplexWords = /鑑みて|考慮|状況|事項/.test(question);
  scores.simplicity = length < 20 && !hasComplexWords ? 9 : length > 40 ? 4 : 6;
  
  if (length > 30 || hasComplexWords) {
    improvements.push({
      dimension: "シンプルさ",
      suggestion: "もっと短く、シンプルな言葉で表現しましょう",
      example: "何が一番大事ですか？"
    });
  }

  // フェーズ適合（デフォルト値）
  scores.phase_fit = 6;

  // 強みの抽出
  Object.entries(scores).forEach(([dim, score]) => {
    if (score >= 7) {
      const dimension = evaluationDimensions.find(d => d.id === dim);
      if (dimension) {
        strengths.push(dimension.name);
      }
    }
  });

  const overallScore = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length
  );

  return {
    question,
    scores,
    overallScore,
    strengths,
    improvements: improvements.slice(0, 3) // 上位3つの改善提案
  };
}

// 質問タイプの定義
export interface QuestionType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  examples: string[];
  whenToUse: string;
}

export const questionTypes: QuestionType[] = [
  {
    id: "clarify",
    name: "明確化",
    description: "目的・ゴール・定義を明確にする質問",
    icon: "🎯",
    color: "bg-blue-100 text-blue-700",
    examples: [
      "そもそも何を達成したいのか？",
      "成功とは具体的にどんな状態か？",
      "誰のための問題解決なのか？"
    ],
    whenToUse: "プロジェクト開始時、目標設定時、議論が曖昧になったとき"
  },
  {
    id: "assumption_breaking",
    name: "前提破壊",
    description: "思い込みや常識を疑い、新しい視点を開く質問",
    icon: "💥",
    color: "bg-purple-100 text-purple-700",
    examples: [
      "この「常識」は本当に正しいのか？",
      "なぜこの方法でなければならないのか？",
      "この前提が間違っていたら、何が見えてくるか？"
    ],
    whenToUse: "行き詰まったとき、イノベーションが必要なとき、既存の枠を超えたいとき"
  },
  {
    id: "perspective_shift",
    name: "視点変更",
    description: "異なる立場や視点から物事を見る質問",
    icon: "👁️",
    color: "bg-green-100 text-green-700",
    examples: [
      "もし相手の立場だったら、どう感じるか？",
      "10年後の自分なら、どうアドバイスするか？",
      "全く違う業界の人なら、どう解決するか？"
    ],
    whenToUse: "対立があるとき、視野を広げたいとき、共感を深めたいとき"
  },
  {
    id: "action",
    name: "行動喚起",
    description: "具体的な行動に落とし込む質問",
    icon: "🚀",
    color: "bg-red-100 text-red-700",
    examples: [
      "では、いつ・何を・どのレベルで始めますか？",
      "最初の一歩として、何をしますか？",
      "1週間後に進んだと感じるために、何が起きていれば良いですか？"
    ],
    whenToUse: "意思決定後、会議の終わり、気づきを行動に変えたいとき"
  },
  {
    id: "emotion_values",
    name: "感情・価値観",
    description: "深い感情や価値観を引き出す質問",
    icon: "❤️",
    color: "bg-pink-100 text-pink-700",
    examples: [
      "それはあなたにとって、なぜ重要なのですか？",
      "どう感じましたか？",
      "あなたが本当に大切にしているものは何ですか？"
    ],
    whenToUse: "信頼関係を深めたいとき、本質的な動機を探りたいとき、コーチングセッション"
  }
];
