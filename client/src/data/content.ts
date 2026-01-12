export interface QuestionCategory {
  id: number;
  title: string;
  description: string;
  example: string;
  color: string;
}

export interface Master {
  name: string;
  specialty: string;
  description: string;
}

export interface TrainingDay {
  day: number;
  category: string;
  theme: string;
  prompt: string;
}

export const questionCategories: QuestionCategory[] = [
  {
    id: 1,
    title: "明確化の質問",
    description: "目的や目標を明確にし、何を達成したいのかを浮き彫りにします。",
    example: "そもそも何を達成したいのか？",
    color: "bg-blue-100 text-blue-900 border-blue-300"
  },
  {
    id: 2,
    title: "前提を疑う質問",
    description: "無意識に抱えている思い込みや前提を明らかにします。",
    example: "我々は何を思い込みとして抱えているのか？",
    color: "bg-purple-100 text-purple-900 border-purple-300"
  },
  {
    id: 3,
    title: "二次効果の質問",
    description: "行動の先にある影響や新たな問題を予測します。",
    example: "これを実行した先にどんな新しい問題が出ますか？",
    color: "bg-green-100 text-green-900 border-green-300"
  },
  {
    id: 4,
    title: "制約解除の質問",
    description: "制限を取り払い、理想的な解決策を探ります。",
    example: "もし制約がなかったら、どうしますか？",
    color: "bg-yellow-100 text-yellow-900 border-yellow-300"
  },
  {
    id: 5,
    title: "視点変更の質問",
    description: "異なる立場や視点から物事を見直します。",
    example: "完全な外部の人なら、どう判断しますか？",
    color: "bg-pink-100 text-pink-900 border-pink-300"
  },
  {
    id: 6,
    title: "根本原因の質問",
    description: "表面的な問題の背後にある真の原因を探ります。",
    example: "なぜ？（5回繰り返す）",
    color: "bg-red-100 text-red-900 border-red-300"
  },
  {
    id: 7,
    title: "長期視点の質問",
    description: "現在の選択が将来に与える影響を考えます。",
    example: "このまま変わらなかったら5年後どうなりますか？",
    color: "bg-indigo-100 text-indigo-900 border-indigo-300"
  },
  {
    id: 8,
    title: "恐れを暴く質問",
    description: "行動を妨げている恐れや不安を明らかにします。",
    example: "何を恐れて行動できていないのですか？",
    color: "bg-orange-100 text-orange-900 border-orange-300"
  },
  {
    id: 9,
    title: "想像力を広げる質問",
    description: "理想的な結果や可能性を自由に描きます。",
    example: "最も美しい結果とは何ですか？",
    color: "bg-teal-100 text-teal-900 border-teal-300"
  }
];

export const masters: Master[] = [
  {
    name: "ソクラテス",
    specialty: "前提破壊",
    description: "対話を通じて相手の前提を問い直し、真の知識へと導く"
  },
  {
    name: "ピーター・ドラッカー",
    specialty: "目的の明確化",
    description: "「正しい問いを立てることが、正しい答えを得る第一歩」"
  },
  {
    name: "クレイトン・クリステンセン",
    specialty: "因果の発見",
    description: "Job-to-be-done理論で顧客の本当のニーズを探る"
  },
  {
    name: "イーロン・マスク",
    specialty: "ファーストプリンシプル",
    description: "物理レベルまで問題を分解し、本質から再構築する"
  }
];

export const trainingProgram: TrainingDay[] = [
  { day: 1, category: "前提", theme: "思い込みを疑う", prompt: "あなたが当たり前だと思っていることは何ですか？それは本当に正しいですか？" },
  { day: 2, category: "前提", theme: "隠れた仮定", prompt: "この問題について、誰もが共有している前提は何ですか？" },
  { day: 3, category: "未来", theme: "5年後の視点", prompt: "5年後の自分から見たら、今の選択はどう見えますか？" },
  { day: 4, category: "未来", theme: "理想の状態", prompt: "完璧に成功した状態とは、具体的にどんな状態ですか？" },
  { day: 5, category: "恐れ", theme: "回避している問い", prompt: "あなたが今、意図的に避けている質問は何ですか？" },
  { day: 6, category: "恐れ", theme: "失敗の定義", prompt: "もし失敗が存在しないとしたら、何を試しますか？" },
  { day: 7, category: "長期視点", theme: "変化の影響", prompt: "このまま何も変えなかったら、1年後どうなっていますか？" },
  { day: 8, category: "長期視点", theme: "複利効果", prompt: "毎日1%改善したら、1年後どれだけ成長していますか？" },
  { day: 9, category: "創造性", theme: "制約の解除", prompt: "時間・お金・能力の制約がなかったら、何をしますか？" },
  { day: 10, category: "創造性", theme: "逆転の発想", prompt: "もし逆のことが正しかったら、何が見えてきますか？" },
  { day: 11, category: "人間理解", theme: "他者の視点", prompt: "相手の立場だったら、どう感じますか？" },
  { day: 12, category: "人間理解", theme: "動機の探求", prompt: "この人が本当に求めているものは何ですか？" },
  { day: 13, category: "自由形式", theme: "自由な探求", prompt: "今日、最も重要な質問は何ですか？" },
  { day: 14, category: "自由形式", theme: "メタ質問", prompt: "今、自分は何を問うべきなのか？" },
  { day: 15, category: "前提", theme: "常識への挑戦", prompt: "業界の常識で、実は間違っているものは何ですか？" },
  { day: 16, category: "前提", theme: "言葉の定義", prompt: "この言葉は、本当にみんな同じ意味で使っていますか？" },
  { day: 17, category: "未来", theme: "最悪のシナリオ", prompt: "最悪の事態とは何で、それにどう備えますか？" },
  { day: 18, category: "未来", theme: "レガシー", prompt: "あなたは何を残したいですか？" },
  { day: 19, category: "恐れ", theme: "不安の正体", prompt: "この不安の本質は何ですか？" },
  { day: 20, category: "恐れ", theme: "勇気の源泉", prompt: "何があれば、一歩踏み出せますか？" },
  { day: 21, category: "長期視点", theme: "習慣の力", prompt: "10年続けたら、どんな人になっていますか？" },
  { day: 22, category: "長期視点", theme: "優先順位", prompt: "今やめるべきことは何ですか？" },
  { day: 23, category: "創造性", theme: "組み合わせ", prompt: "全く違う分野から、何を学べますか？" },
  { day: 24, category: "創造性", theme: "シンプル化", prompt: "これを最もシンプルに表現すると？" },
  { day: 25, category: "人間理解", theme: "信頼の構築", prompt: "相手が本当に必要としている支援は何ですか？" },
  { day: 26, category: "人間理解", theme: "共感の深化", prompt: "この人の人生で、最も大切なものは何ですか？" },
  { day: 27, category: "自由形式", theme: "統合", prompt: "これまでの質問で、最も重要だったものは？" },
  { day: 28, category: "自由形式", theme: "実践", prompt: "明日から何を変えますか？" },
  { day: 29, category: "自由形式", theme: "継続", prompt: "この習慣をどう続けますか？" },
  { day: 30, category: "自由形式", theme: "次のステップ", prompt: "質問力を使って、次に何を探求しますか？" }
];

export const enemies = [
  {
    title: "すぐ答えようとする",
    description: "質問する前に答えを出そうとすると、深い探求ができません"
  },
  {
    title: "無知と思われることを恐れる",
    description: "「当たり前」の質問こそ、本質を突くことがあります"
  },
  {
    title: "当たり前の質問を避ける",
    description: "基本的な質問が、最も重要な洞察をもたらすことがあります"
  },
  {
    title: "自分の信念を守ろうとする",
    description: "防衛的な姿勢では、新しい視点は得られません"
  },
  {
    title: "早口で畳みかける",
    description: "質問の間に余白がないと、深い思考は生まれません"
  },
  {
    title: "沈黙を怖がる",
    description: "沈黙の中でこそ、深い洞察が生まれます"
  }
];
