// 人生を変える質問データ

export interface LifeChangingQuestion {
  id: number;
  category: string;
  question: string;
  purpose: string;
  context: string;
  example?: string;
}

export interface QuestionCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: LifeChangingQuestion[];
}

export const lifeChangingCategories: QuestionCategory[] = [
  {
    id: "existential",
    title: "実存的な問い",
    description: "死、意味、目的など、人間存在の根源を問う質問",
    icon: "🌌",
    questions: [
      {
        id: 1,
        category: "existential",
        question: "もし明日死ぬとしたら、今日何をしますか？",
        purpose: "真に大切なものを明確にする",
        context: "日常の雑音を取り除き、本質的な価値観を浮き彫りにする。多くの人がこの質問で人生の優先順位を見直す。"
      },
      {
        id: 2,
        category: "existential",
        question: "あなたの墓石に何と刻まれたいですか？",
        purpose: "人生の最終的な意味を定義する",
        context: "自分がどのように記憶されたいかを問うことで、今どう生きるべきかが見えてくる。"
      },
      {
        id: 3,
        category: "existential",
        question: "80歳の自分は、今の自分に何とアドバイスしますか？",
        purpose: "長期的視点を獲得する",
        context: "未来の自分の視点から現在を見ることで、短期的な悩みの相対化と本質的な選択が可能になる。"
      },
      {
        id: 4,
        category: "existential",
        question: "あなたが生まれてきた理由は何だと思いますか？",
        purpose: "人生の使命を探求する",
        context: "この問いに向き合うことで、単なる生存を超えた意味のある人生へと転換する。"
      },
      {
        id: 5,
        category: "existential",
        question: "死ぬ前に必ず答えたい問いは何ですか？",
        purpose: "人生の探求テーマを明確にする",
        context: "生涯をかけて追求する価値のある問いを持つことが、人生に深みと方向性を与える。"
      }
    ]
  },
  {
    id: "identity",
    title: "自己認識の問い",
    description: "自分は誰か、何者かを深く探る質問",
    icon: "🪞",
    questions: [
      {
        id: 6,
        category: "identity",
        question: "誰も見ていないとき、あなたは何をしていますか？",
        purpose: "本当の自分を発見する",
        context: "社会的な役割や期待を取り除いたとき、純粋な自分の欲求や価値観が現れる。"
      },
      {
        id: 7,
        category: "identity",
        question: "あなたが最も恐れているものは何ですか？そしてなぜ？",
        purpose: "深層心理の制約を明らかにする",
        context: "恐れの正体を理解することで、それが人生の選択をどう制限しているかが見える。"
      },
      {
        id: 8,
        category: "identity",
        question: "お金も時間も無限にあったら、何をしますか？",
        purpose: "純粋な情熱を発見する",
        context: "制約を取り除くことで、社会的成功ではなく内発的動機に基づく本当の願望が見えてくる。"
      },
      {
        id: 9,
        category: "identity",
        question: "あなたを最も深く傷つけた出来事は何ですか？それはあなたをどう変えましたか？",
        purpose: "トラウマを成長の源泉に転換する",
        context: "過去の傷を直視し、それが現在の自分をどう形成したかを理解することで癒しと成長が起こる。"
      },
      {
        id: 10,
        category: "identity",
        question: "あなたが「自分らしい」と感じる瞬間はいつですか？",
        purpose: "真正性（Authenticity）を特定する",
        context: "本来の自分でいられる状態を認識することで、人生の方向性が定まる。"
      }
    ]
  },
  {
    id: "breakthrough",
    title: "ブレイクスルーの問い",
    description: "現状を打破し、飛躍的な成長を促す質問",
    icon: "💡",
    questions: [
      {
        id: 11,
        category: "breakthrough",
        question: "この問題が実は「問題」ではなく「機会」だとしたら？",
        purpose: "パラダイムを転換する",
        context: "問題の再定義によって、全く異なる解決策と可能性が見えてくる。"
      },
      {
        id: 12,
        category: "breakthrough",
        question: "もし失敗が絶対にないとしたら、何に挑戦しますか？",
        purpose: "恐れを取り除き本質的な願望を引き出す",
        context: "失敗の恐れが多くの可能性を封じている。この質問はその制約を外す。"
      },
      {
        id: 13,
        category: "breakthrough",
        question: "10倍の成果を出すには何を変える必要がありますか？",
        purpose: "漸進的改善から飛躍的革新へ",
        context: "10%改善ではなく10倍を目指すことで、従来の枠組みを超えた発想が生まれる。"
      },
      {
        id: 14,
        category: "breakthrough",
        question: "この制約が実は最大の強みだとしたら、どう活かせますか？",
        purpose: "制約を創造の源泉に転換する",
        context: "制約は創造性を刺激する。弱みを強みに変える視点の転換。"
      },
      {
        id: 15,
        category: "breakthrough",
        question: "誰もやっていないことで、やるべきことは何ですか？",
        purpose: "ブルーオーシャンを発見する",
        context: "競争のない領域、未開拓の価値創造の機会を見つける。"
      }
    ]
  },
  {
    id: "relationship",
    title: "関係性の問い",
    description: "他者との深いつながりを築く質問",
    icon: "🤝",
    questions: [
      {
        id: 16,
        category: "relationship",
        question: "この人が本当に求めているものは何ですか？",
        purpose: "表面的な要求の奥にある真のニーズを理解する",
        context: "人は自分の本当の欲求を言語化できないことが多い。深層のニーズを見抜く力。"
      },
      {
        id: 17,
        category: "relationship",
        question: "もし相手の立場だったら、私はどう感じますか？",
        purpose: "真の共感を育む",
        context: "視点の転換による深い理解。対立を協力に変える鍵。"
      },
      {
        id: 18,
        category: "relationship",
        question: "この関係で私が本当に恐れているものは何ですか？",
        purpose: "関係性の障壁を明らかにする",
        context: "拒絶、裏切り、孤独への恐れが関係を歪める。恐れを認識することで健全な関係が築ける。"
      },
      {
        id: 19,
        category: "relationship",
        question: "相手の最高の可能性を引き出すために、私は何ができますか？",
        purpose: "相手の成長を支援する",
        context: "他者の可能性を信じ、それを引き出すことが最高の関係性を生む。"
      },
      {
        id: 20,
        category: "relationship",
        question: "この人から学ぶべき最も重要なことは何ですか？",
        purpose: "すべての出会いを成長の機会にする",
        context: "どんな人からも学びがある。この姿勢が人生を豊かにする。"
      }
    ]
  },
  {
    id: "decision",
    title: "意思決定の問い",
    description: "重要な選択の質を高める質問",
    icon: "⚖️",
    questions: [
      {
        id: 21,
        category: "decision",
        question: "10年後の自分は、この決断をどう評価しますか？",
        purpose: "長期的視点で判断する",
        context: "短期的な快楽や苦痛に惑わされず、長期的な影響を考慮する。"
      },
      {
        id: 22,
        category: "decision",
        question: "この選択は、私の価値観と一致していますか？",
        purpose: "真正性を保つ",
        context: "外部の期待ではなく、内なる価値観に基づいた選択が後悔を生まない。"
      },
      {
        id: 23,
        category: "decision",
        question: "最悪のシナリオでも受け入れられますか？",
        purpose: "リスクを現実的に評価する",
        context: "最悪を受け入れられるなら、恐れずに挑戦できる。"
      },
      {
        id: 24,
        category: "decision",
        question: "この決断で、誰が得をして誰が損をしますか？",
        purpose: "利害関係を明確にする",
        context: "隠れた動機や影響を可視化することで、より公正で賢明な判断ができる。"
      },
      {
        id: 25,
        category: "decision",
        question: "選ばなかった道を、10年後に後悔しませんか？",
        purpose: "機会損失を評価する",
        context: "行動の後悔より、行動しなかった後悔の方が大きいことが多い。"
      }
    ]
  },
  {
    id: "transformation",
    title: "変容の問い",
    description: "自己変革と成長を促す質問",
    icon: "🦋",
    questions: [
      {
        id: 26,
        category: "transformation",
        question: "今の自分を手放すことで、どんな自分になれますか？",
        purpose: "アイデンティティの再構築",
        context: "過去の自分への執着が成長を妨げる。新しい自分への変容を許可する。"
      },
      {
        id: 27,
        category: "transformation",
        question: "この苦しみは、私に何を教えようとしていますか？",
        purpose: "苦難を成長の機会に転換する",
        context: "すべての困難には意味がある。その意味を見出すことで成長が起こる。"
      },
      {
        id: 28,
        category: "transformation",
        question: "私が変わることで、周りの何が変わりますか？",
        purpose: "自己変革の波及効果を認識する",
        context: "自分が変われば世界が変わる。この認識が変革の動機になる。"
      },
      {
        id: 29,
        category: "transformation",
        question: "恐れを手放したら、私は何者になれますか？",
        purpose: "恐れの制約から解放される",
        context: "恐れが可能性を封じている。それを手放すことで本来の力が発揮される。"
      },
      {
        id: 30,
        category: "transformation",
        question: "私の人生の次の章は、どんなタイトルですか？",
        purpose: "新しいステージを意識的に設計する",
        context: "人生は章立てできる。次の章を意図的に創造する力を持つ。"
      }
    ]
  }
];

// ビッグアハを生む質問の構造
export const bigAhaStructure = {
  title: "ビッグアハを生む質問の5つの構造",
  description: "人生を変える洞察（Big Aha）を引き起こす質問には、共通する構造パターンがある。",
  patterns: [
    {
      id: 1,
      name: "時間軸の転換",
      description: "過去・現在・未来の視点を入れ替えることで、新しい意味が生まれる",
      examples: [
        "10年後の自分から見たら、今の悩みはどう見えますか？",
        "5年前の自分に、今の自分は何とアドバイスしますか？"
      ]
    },
    {
      id: 2,
      name: "制約の除去",
      description: "現実の制約を一時的に取り除くことで、本質的な願望が見える",
      examples: [
        "もしお金が無限にあったら？",
        "もし失敗が絶対にないとしたら？",
        "もし誰の許可も必要なかったら？"
      ]
    },
    {
      id: 3,
      name: "視点の転換",
      description: "自分以外の視点（他者、未来の自分、神の視点）から見ることで気づきが生まれる",
      examples: [
        "もしあなたが相手の立場だったら？",
        "宇宙から見たら、この問題はどう見えますか？"
      ]
    },
    {
      id: 4,
      name: "逆転の発想",
      description: "前提や常識を逆転させることで、新しい可能性が開ける",
      examples: [
        "この問題が実は機会だとしたら？",
        "この弱みが実は強みだとしたら？",
        "もし逆が正しかったら？"
      ]
    },
    {
      id: 5,
      name: "本質への還元",
      description: "表面的な現象から本質的な問いへと深掘りする",
      examples: [
        "本当に求めているものは何ですか？",
        "なぜそれが重要なのですか？（5回繰り返す）",
        "この奥にある真の問題は何ですか？"
      ]
    }
  ]
};

// 質問の実践ガイド
export const practiceGuide = {
  title: "人生を変える質問の実践法",
  steps: [
    {
      step: 1,
      title: "静かな時間を確保する",
      description: "深い質問には、静かに内省する時間が必要。最低30分、理想は1-2時間。"
    },
    {
      step: 2,
      title: "書き出す",
      description: "頭の中で考えるだけでなく、紙やデジタルに書き出す。書くことで思考が明確になる。"
    },
    {
      step: 3,
      title: "最初の答えを疑う",
      description: "最初に浮かぶ答えは表面的なことが多い。「本当にそうか？」と問い直す。"
    },
    {
      step: 4,
      title: "感情に注目する",
      description: "質問に向き合うとき、どんな感情が湧くか。抵抗や恐れは、重要な洞察の手がかり。"
    },
    {
      step: 5,
      title: "定期的に問い直す",
      description: "人生を変える質問は、一度答えて終わりではない。定期的に問い直すことで深まる。"
    }
  ]
};
