export interface HomeHeroContent {
  badgeLabel: string;
  title: string;
  subtitle: string;
  lead: string;
  targetAudience: string[];
  benefits: string[];
}

export interface HomeNavigationCard {
  id: string;
  title: string;
  description: string;
  href: string;
  color: string;
}

export interface HomeKeyConceptContent {
  title: string;
  definition: string;
  source: string;
  conditions: {
    id: number;
    text: string;
  }[];
  additionalRequirement: {
    id: number;
    text: string;
    note: string;
  };
}

export interface HomeFooterContent {
  text: string;
}

export const homeHeroContent: HomeHeroContent = {
  badgeLabel: "",
  title: "論点設定マニュアル",
  subtitle: "日次AIニュースを分析して、「自社の意思決定」につなげる",
  lead: "膨大なAIニュースから「事業にとって重要な論点」を素早く設定し、それを分析して意思決定や行動につなげるための基礎スキルを身につけましょう。",
  targetAudience: [
    "テクノロジー戦略部門の若手メンバー（入社1～3年目）",
    "AI関連ニュースを日常的にウォッチする業務を担当している方",
    "情報は集めているが「だから何？」「うちはどうすべき？」という問いに答えられず悩んでいる方",
    "情報を顧客や社外パートナーとの対話で使える「武器」にしたい方",
  ],
  benefits: [
    "論点とは何か、なぜ重要なのかの理解",
    "混沌としたニュースから「決定につながる質問」を作り出す方法",
    "MECEを使った論点候補の体系的な洗い出し手順",
    "自分事化（自社比較）を組み込んだ日次業務ワークフローとテンプレート",
    "速報性を重視しながら質を担保する実践的手法",
  ],
};

export const homeNavigationCards: HomeNavigationCard[] = [
  {
    id: "learn",
    title: "学ぶ",
    description: "論点の定義、重要性、構成要素を理解する。基礎概念をしっかり押さえましょう。",
    href: "/issue-guide/learn",
    color: "bg-blue-500",
  },
  {
    id: "reference",
    title: "参照する",
    description: "手順、ワークフロー、テンプレートを確認。実務ですぐに使えるリファレンス集。",
    href: "/issue-guide/reference",
    color: "bg-green-500",
  },
  {
    id: "practice",
    title: "練習する",
    description: "3つの演習問題で論点設定を実践。新技術・競合動向・規制のケースで練習。",
    href: "/issue-guide/practice",
    color: "bg-amber-500",
  },
  {
    id: "evaluate",
    title: "評価する",
    description: "自分事化ゲートと失敗パターン診断。チェックリストで合否判定を受けましょう。",
    href: "/issue-guide/evaluate",
    color: "bg-purple-500",
  },
];

export const homeKeyConceptContent: HomeKeyConceptContent = {
  title: "論点とは何か？",
  definition: "「答えによって、私たちの決定や行動が変わる未解決の質問」",
  source: "出典：A.T. Kearney「イシューレイズの方法」",
  conditions: [
    { id: 1, text: "質問形式である ─ 「～か？」「どう～すべきか？」という問いの形をとる" },
    { id: 2, text: "分岐する選択肢を持つ ─ 複数の答えが考えられ、それぞれ異なる含意を持つ" },
    { id: 3, text: "未解決である ─ まだ答えが確定していない" },
    { id: 4, text: "決定に結びつく ─ 答えが分かれば、何らかの意思決定や行動変更ができる" },
    { id: 5, text: "文脈が明確である ─ 誰にとって、何のための論点なのかが分かる" },
  ],
  additionalRequirement: {
    id: 6,
    text: "自分事化されている ─ 自社の既存アセット・業務と具体的に比較できる形で表現されている",
    note: "これは論点の本質的定義ではなく、ニュース分析業務における品質基準（必須ゲート）です",
  },
};

export const homeFooterContent: HomeFooterContent = {
  text: "論点設定マニュアル © 2026",
};
