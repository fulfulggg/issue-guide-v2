// 良い質問のチェックリスト

export interface ChecklistItem {
  id: string;
  question: string;
  description: string;
  goodExample: string;
  badExample: string;
}

export const questionChecklist: ChecklistItem[] = [
  {
    id: "open",
    question: "オープン質問になっているか？",
    description: "「はい/いいえ」で終わらず、相手の思考を広げる質問になっているか",
    goodExample: "それについてどう考えていますか？",
    badExample: "それは良いと思いますか？"
  },
  {
    id: "simple",
    question: "シンプルで分かりやすいか？",
    description: "一文が短く、専門用語を避け、相手の言葉に寄せているか",
    goodExample: "何が一番大事ですか？",
    badExample: "あなたの現在の状況を鑑みて、最も優先度が高いと考えられる事項は何でしょうか？"
  },
  {
    id: "non_leading",
    question: "誘導していないか？",
    description: "自分の答えや仮説を押し付けず、相手の視点を引き出しているか",
    goodExample: "あなたはどう捉えていますか？",
    badExample: "それは〇〇ということですよね？"
  },
  {
    id: "agency",
    question: "相手の主体性を引き出しているか？",
    description: "「すべき」ではなく「したい」、外部の期待ではなく内なる動機を問うているか",
    goodExample: "あなたはどうしたいのですか？",
    badExample: "これをすべきだと思いませんか？"
  },
  {
    id: "positive",
    question: "ポジティブな前提を持っているか？",
    description: "問題ではなく、可能性・強み・望ましい未来に焦点を当てているか",
    goodExample: "うまくいったときは、何が違っていましたか？",
    badExample: "なぜこんなにうまくいっていないのですか？"
  },
  {
    id: "deep",
    question: "表面を超えて深掘りしているか？",
    description: "事実だけでなく、感情・価値観・意味にアクセスしているか",
    goodExample: "それはあなたにとって、なぜ重要なのですか？",
    badExample: "何が起きましたか？"
  },
  {
    id: "actionable",
    question: "行動につながるか？",
    description: "気づきを具体的な行動に落とし込めているか",
    goodExample: "では、いつ・何を始めますか？",
    badExample: "どう思いますか？"
  },
  {
    id: "respectful",
    question: "相手を尊重しているか？",
    description: "相手の立場やメンツを傷つけず、心理的安全性を保っているか",
    goodExample: "あなたの視点を教えていただけますか？",
    badExample: "なぜそんなことをしたのですか？"
  },
  {
    id: "phase_appropriate",
    question: "フェーズに適しているか？",
    description: "発散・収束・実行のフェーズに合った質問になっているか",
    goodExample: "【発散】他にどんな可能性がありますか？",
    badExample: "【発散フェーズで】結論は何ですか？"
  },
  {
    id: "curious",
    question: "genuine な好奇心から問うているか？",
    description: "テストや確認ではなく、本当に知りたいという姿勢で問うているか",
    goodExample: "それについてもっと聞かせてください",
    badExample: "それは知っていますよね？"
  }
];

export interface ChecklistResult {
  checkedItems: string[];
  score: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
}

export function evaluateChecklist(checkedItems: string[]): ChecklistResult {
  const score = (checkedItems.length / questionChecklist.length) * 100;
  const strengths: string[] = [];
  const improvements: string[] = [];

  questionChecklist.forEach(item => {
    if (checkedItems.includes(item.id)) {
      strengths.push(item.question);
    } else {
      improvements.push(item.question);
    }
  });

  let feedback = "";
  if (score >= 90) {
    feedback = "素晴らしい！プロフェッショナルレベルの質問です。";
  } else if (score >= 70) {
    feedback = "良い質問です。さらに磨きをかけましょう。";
  } else if (score >= 50) {
    feedback = "基本はできています。いくつかの観点を改善しましょう。";
  } else {
    feedback = "改善の余地があります。チェックリストを参考に質問を見直しましょう。";
  }

  return {
    checkedItems,
    score,
    feedback,
    strengths: strengths.slice(0, 3),
    improvements: improvements.slice(0, 3)
  };
}
