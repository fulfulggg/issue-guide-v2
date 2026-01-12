// フェーズ別質問ガイドとAppreciative Inquiry

export interface Phase {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  purpose: string;
  characteristics: string[];
  questionExamples: {
    question: string;
    purpose: string;
  }[];
  avoidQuestions: {
    question: string;
    reason: string;
  }[];
}

export const phases: Phase[] = [
  {
    id: "diverge",
    name: "発散フェーズ",
    description: "可能性を広げ、多様な視点やアイデアを引き出す段階",
    icon: "🌊",
    color: "bg-blue-100 text-blue-700",
    purpose: "視野を広げ、まだ見えていない選択肢や論点を浮かび上がらせる",
    characteristics: [
      "判断を保留し、可能性を探索する",
      "「正解」を求めず、多様性を歓迎する",
      "量を重視し、質は後で絞る",
      "「もし〜だったら」と制約を外して考える"
    ],
    questionExamples: [
      {
        question: "まだ話に出ていない、重要な論点は何ですか？",
        purpose: "盲点を発見する"
      },
      {
        question: "もし制約がなかったら、どんな可能性がありますか？",
        purpose: "思考の枠を外す"
      },
      {
        question: "全く違う視点から見たら、何が見えますか？",
        purpose: "多様な視点を引き出す"
      },
      {
        question: "他にどんなアプローチがありますか？",
        purpose: "選択肢を増やす"
      },
      {
        question: "この問題を面白くするには？",
        purpose: "創造性を刺激する"
      }
    ],
    avoidQuestions: [
      {
        question: "結論は何ですか？",
        reason: "まだ収束のタイミングではない"
      },
      {
        question: "どれが一番良いですか？",
        reason: "評価・判断は収束フェーズで行う"
      }
    ]
  },
  {
    id: "converge",
    name: "収束フェーズ",
    description: "優先順位をつけ、選択肢を絞り込む段階",
    icon: "🎯",
    color: "bg-green-100 text-green-700",
    purpose: "多様な選択肢から、最も重要なものを選び取る",
    characteristics: [
      "評価基準を明確にする",
      "優先順位をつける",
      "何を「選ばないか」も決める",
      "合意形成を図る"
    ],
    questionExamples: [
      {
        question: "最も重要なのは何ですか？",
        purpose: "優先順位を明確にする"
      },
      {
        question: "何を選ばないと決めますか？",
        purpose: "選択肢を絞る"
      },
      {
        question: "判断基準は何ですか？",
        purpose: "評価軸を明確にする"
      },
      {
        question: "これを選ぶことで、何を得て何を失いますか？",
        purpose: "トレードオフを理解する"
      },
      {
        question: "全員が合意できるポイントは何ですか？",
        purpose: "合意形成を促す"
      }
    ],
    avoidQuestions: [
      {
        question: "他にアイデアはありませんか？",
        reason: "発散は既に終わっている"
      },
      {
        question: "もっと可能性を広げられませんか？",
        reason: "収束のタイミングで発散に戻ると決まらない"
      }
    ]
  },
  {
    id: "execute",
    name: "実行フェーズ",
    description: "決定を具体的な行動に落とし込む段階",
    icon: "🚀",
    color: "bg-red-100 text-red-700",
    purpose: "誰が・いつ・何を・どうやって実行するかを明確にする",
    characteristics: [
      "具体性を高める",
      "責任を明確にする",
      "期限を設定する",
      "最初の一歩を決める"
    ],
    questionExamples: [
      {
        question: "誰が・いつ・何をやりますか？",
        purpose: "責任と期限を明確にする"
      },
      {
        question: "最初の一歩は何ですか？",
        purpose: "行動を開始する"
      },
      {
        question: "どうやって進捗を確認しますか？",
        purpose: "測定可能にする"
      },
      {
        question: "障害になりそうなことは何ですか？",
        purpose: "リスクを予測する"
      },
      {
        question: "1週間後、何が起きていれば成功ですか？",
        purpose: "短期目標を設定する"
      }
    ],
    avoidQuestions: [
      {
        question: "本当にこれで良いですか？",
        reason: "決定を覆すと実行が進まない"
      },
      {
        question: "他の選択肢も考え直しませんか？",
        reason: "収束フェーズに戻ってしまう"
      }
    ]
  }
];

// Appreciative Inquiry（ポジティブ前提の対話手法）
export interface AppreciativeInquiry {
  title: string;
  description: string;
  principles: {
    name: string;
    description: string;
    icon: string;
  }[];
  fourDCycle: {
    stage: string;
    name: string;
    description: string;
    questions: string[];
  }[];
  examples: {
    situation: string;
    traditional: string;
    ai: string;
    impact: string;
  }[];
}

export const appreciativeInquiry: AppreciativeInquiry = {
  title: "Appreciative Inquiry（AI：ポジティブ探求）",
  description: "問題ではなく、強み・可能性・望ましい未来に焦点を当てることで、ポジティブな変化を加速する対話手法",
  principles: [
    {
      name: "構成主義の原理",
      description: "現実は対話によって構成される。何を問うかが、何を見つけるかを決める",
      icon: "🏗️"
    },
    {
      name: "同時性の原理",
      description: "質問した瞬間から変化が始まる。問いそのものが介入である",
      icon: "⚡"
    },
    {
      name: "詩的原理",
      description: "組織や人は常に変化している。過去の成功も現在の可能性も、どちらも真実",
      icon: "📖"
    },
    {
      name: "予期の原理",
      description: "ポジティブなイメージが、ポジティブな行動を生む",
      icon: "🌅"
    },
    {
      name: "ポジティブの原理",
      description: "ポジティブな感情と社会的絆が、持続的な変化を生む",
      icon: "✨"
    }
  ],
  fourDCycle: [
    {
      stage: "1D",
      name: "Discovery（発見）",
      description: "過去の成功体験や強みを発見する",
      questions: [
        "これまでで最もうまくいったときは、いつでしたか？",
        "そのとき、何が違っていましたか？",
        "あなたの強みは何ですか？",
        "この組織/チームの最高の瞬間を教えてください"
      ]
    },
    {
      stage: "2D",
      name: "Dream（夢）",
      description: "望ましい未来を描く",
      questions: [
        "理想の状態はどんなものですか？",
        "3年後、最高の状態になっているとしたら、何が起きていますか？",
        "もし魔法が使えたら、何を実現したいですか？",
        "あなたの夢は何ですか？"
      ]
    },
    {
      stage: "3D",
      name: "Design（設計）",
      description: "理想を実現する仕組みを設計する",
      questions: [
        "その未来を実現するために、何が必要ですか？",
        "既にある強みをどう活かせますか？",
        "どんな仕組みや文化があれば良いですか？",
        "誰と協力すれば実現できますか？"
      ]
    },
    {
      stage: "4D",
      name: "Destiny（運命）",
      description: "行動を開始し、学習し続ける",
      questions: [
        "最初の一歩は何ですか？",
        "誰が・いつ・何を始めますか？",
        "どうやって学習し続けますか？",
        "成功をどう祝いますか？"
      ]
    }
  ],
  examples: [
    {
      situation: "チームのパフォーマンスが低下している",
      traditional: "なぜパフォーマンスが低下しているのですか？",
      ai: "過去にチームが最高のパフォーマンスを発揮したときは、何が違っていましたか？",
      impact: "問題の原因探しではなく、成功の要因を再現することに焦点が移る"
    },
    {
      situation: "新しいプロジェクトを始める",
      traditional: "リスクは何ですか？",
      ai: "このプロジェクトが大成功したら、何が起きていますか？",
      impact: "リスク回避ではなく、成功のビジョンに向かってエネルギーが向かう"
    },
    {
      situation: "組織変革が必要",
      traditional: "何が問題ですか？",
      ai: "この組織の最も誇れる強みは何ですか？それをどう活かせますか？",
      impact: "問題の分析ではなく、既にある資源を活用することに焦点が移る"
    },
    {
      situation: "個人のキャリア相談",
      traditional: "なぜうまくいっていないのですか？",
      ai: "あなたが最も輝いていたときは、いつでしたか？そのときの要素を今にどう活かせますか？",
      impact: "欠点の克服ではなく、強みの発揮に焦点が移る"
    }
  ]
};

// Humble Inquiry（謙虚な問い）
export interface HumbleInquiry {
  title: string;
  description: string;
  author: string;
  keyPrinciples: {
    name: string;
    description: string;
    example: string;
  }[];
  comparison: {
    situation: string;
    aggressive: string;
    diagnostic: string;
    humble: string;
  }[];
}

export const humbleInquiry: HumbleInquiry = {
  title: "Humble Inquiry（謙虚な問い）",
  description: "自分も答えを知らない前提で、genuine な好奇心から相手の世界を理解しようとする問いの姿勢",
  author: "Edgar Schein（組織心理学者）",
  keyPrinciples: [
    {
      name: "Here-and-now humility（今ここでの謙虚さ）",
      description: "この瞬間、この関係において、相手に依存していることを認める",
      example: "「あなたの助けが必要です。教えていただけますか？」"
    },
    {
      name: "Genuine curiosity（本物の好奇心）",
      description: "テストや確認ではなく、本当に知りたいという姿勢",
      example: "「それについてもっと聞かせてください」"
    },
    {
      name: "Temporary dependence（一時的な依存）",
      description: "この問いにおいて、相手が専門家であることを認める",
      example: "「あなたの経験から、どう見えますか？」"
    }
  ],
  comparison: [
    {
      situation: "部下が遅刻した",
      aggressive: "なぜ遅刻したのか？（詰問）",
      diagnostic: "交通機関に問題があったのか？（仮説の確認）",
      humble: "今朝は何があったのか、教えてもらえますか？（genuine な関心）"
    },
    {
      situation: "プロジェクトが遅れている",
      aggressive: "なぜ遅れているのか？（責任追及）",
      diagnostic: "リソースが足りないのか？（仮説の確認）",
      humble: "今どんな状況ですか？私にできることはありますか？（支援の姿勢）"
    },
    {
      situation: "新しいアイデアを聞く",
      aggressive: "それは本当に実現可能なのか？（疑い）",
      diagnostic: "予算はいくらかかるのか？（評価）",
      humble: "そのアイデアについて、もっと聞かせてください（genuine な好奇心）"
    }
  ]
};
