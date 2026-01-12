// 100名規模の偉人質問集データ構造

export interface ThinkingStyle {
  id: string;
  name: string;
  description: string;
}

export interface MasterExpanded {
  id: string;
  name: string;
  nameEn: string;
  period: string;
  field: string; // 哲学、科学、経営、心理学、宗教、文学等
  tier: "core" | "extended"; // コア偉人 or 拡張偉人
  thinkingStyles: string[]; // 思考スタイルID配列
  shortBio: string;
  detailedBio?: string; // 詳細な解説（哲学的背景、現代への影響など）
  coreApproach: string;
  approachDetail?: string; // アプローチの詳細説明
  keyPrinciples?: { name: string; description: string }[]; // 主要原則
  representativeQuestions?: { question: string; purpose: string }[]; // 代表的な質問
  questions: MasterQuestion[];
}

export interface MasterQuestion {
  id: string;
  question: string;
  context: string;
  purpose: string;
  depth: 1 | 2 | 3 | 4 | 5; // 5段階の深度
  level: "情報収集" | "洞察" | "変容";
  domain: string; // 9つの質問領域
  phase: "発散" | "収束" | "実行";
  timeAxis: "過去" | "現在" | "未来";
  useCases: string[]; // キャリア、経営、1on1、自己内省等
  // 追加情報
  termExplanation?: string; // 用語解説（専門用語がある場合）
  example?: string; // 具体例（日常・ビジネスでの使用例）
  howToUse?: string; // 使い方ガイド（どんな場面で使うか）
  expectedEffect?: string; // 期待される効果（この質問が何を引き出すか）
}

// 思考スタイル定義
export const thinkingStyles: ThinkingStyle[] = [
  { id: "premise-destruction", name: "前提破壊", description: "常識や前提を疑い、根本から問い直す" },
  { id: "essence-pursuit", name: "本質追求", description: "表面的な現象の奥にある本質を探る" },
  { id: "experimental-thinking", name: "実験思考", description: "思考実験やWhat ifで可能性を探る" },
  { id: "introspection", name: "内省・自己理解", description: "自分自身の内面を深く見つめる" },
  { id: "dialectic", name: "弁証法", description: "対話や矛盾を通じて真理に近づく" },
  { id: "pragmatism", name: "実用主義", description: "実践的な成果や有用性を重視する" },
  { id: "systematic-thinking", name: "体系的思考", description: "全体を俯瞰し、構造や関係性を理解する" },
  { id: "paradox", name: "逆説・矛盾", description: "矛盾や逆説を通じて洞察を得る" },
  { id: "empiricism", name: "経験主義", description: "経験や観察を重視する" },
  { id: "rationalism", name: "合理主義", description: "理性や論理を重視する" },
];

// 分野定義
export const fields = [
  "古代ギリシア哲学",
  "東洋哲学",
  "近代哲学",
  "現代哲学",
  "科学・物理学",
  "心理学",
  "経営・マネジメント",
  "宗教・神学",
  "文学・芸術",
  "政治・社会思想"
];

// 用途定義
export const useCases = [
  "キャリア",
  "経営・戦略",
  "1on1・コーチング",
  "自己内省",
  "人間関係",
  "意思決定",
  "問題解決",
  "創造性",
  "リーダーシップ",
  "チームビルディング"
];

// 第一弾：コア偉人30名
export const coreMasters: MasterExpanded[] = [
  {
    id: "socrates",
    name: "ソクラテス",
    nameEn: "Socrates",
    period: "BC469-BC399",
    field: "古代ギリシア哲学",
    tier: "core",
    thinkingStyles: ["premise-destruction", "dialectic", "essence-pursuit"],
    shortBio: "古代ギリシアの哲学者。「無知の知」を説き、対話を通じて真理を探求した。",
    coreApproach: "定義を問い直し、矛盾をあぶり出すことで、相手の思い込みを破壊し、真の知へと導く産婆術。",
    questions: [
      {
        id: "soc-001",
        question: "それは本当に正しいと言えるのか？",
        context: "相手が当然と思っていることに対して",
        purpose: "前提を疑わせ、根拠を問い直す",
        depth: 2,
        level: "洞察",
        domain: "前提を疑う質問",
        phase: "発散",
        timeAxis: "現在",
        useCases: ["問題解決", "意思決定"]
      },
      {
        id: "soc-002",
        question: "その言葉の定義は何か？",
        context: "抽象的な概念が使われたとき",
        purpose: "曖昧さを排除し、明確な理解を促す",
        depth: 2,
        level: "洞察",
        domain: "明確化の質問",
        phase: "収束",
        timeAxis: "現在",
        useCases: ["1on1・コーチング", "チームビルディング"]
      },
      {
        id: "soc-003",
        question: "それは常に成り立つのか？",
        context: "一般化された主張に対して",
        purpose: "例外を探し、主張の限界を明らかにする",
        depth: 3,
        level: "洞察",
        domain: "前提を疑う質問",
        phase: "発散",
        timeAxis: "現在",
        useCases: ["問題解決", "創造性"]
      },
      {
        id: "soc-004",
        question: "なぜそう思うのか？",
        context: "相手の意見や信念に対して",
        purpose: "根拠を明確にさせる",
        depth: 2,
        level: "洞察",
        domain: "根本原因の質問",
        phase: "収束",
        timeAxis: "現在",
        useCases: ["1on1・コーチング", "自己内省"]
      },
      {
        id: "soc-005",
        question: "その反対は成り立たないのか？",
        context: "一方的な主張に対して",
        purpose: "多面的な視点を引き出す",
        depth: 3,
        level: "洞察",
        domain: "視点変更の質問",
        phase: "発散",
        timeAxis: "現在",
        useCases: ["創造性", "問題解決"]
      },
      // ... 残り15-25問
    ]
  },
  {
    id: "plato",
    name: "プラトン",
    nameEn: "Plato",
    period: "BC427-BC347",
    field: "古代ギリシア哲学",
    tier: "core",
    thinkingStyles: ["essence-pursuit", "rationalism", "dialectic"],
    shortBio: "ソクラテスの弟子。イデア論を提唱し、真の実在は感覚世界を超えたところにあると説いた。",
    coreApproach: "現象の背後にある本質（イデア）を探求し、真理と善の探究を通じて理想の国家と人間のあり方を問う。",
    questions: [
      {
        id: "plato-001",
        question: "この現象の背後にある本質は何か？",
        context: "表面的な問題に直面したとき",
        purpose: "現象の奥にある真の原因を探る",
        depth: 4,
        level: "変容",
        domain: "根本原因の質問",
        phase: "収束",
        timeAxis: "現在",
        useCases: ["問題解決", "経営・戦略"]
      },
      {
        id: "plato-002",
        question: "理想的な状態とは何か？",
        context: "現状に不満があるとき",
        purpose: "目指すべき理想を明確にする",
        depth: 3,
        level: "洞察",
        domain: "明確化の質問",
        phase: "発散",
        timeAxis: "未来",
        useCases: ["キャリア", "経営・戦略"]
      },
      {
        id: "plato-003",
        question: "真の正義とは何か？",
        context: "倫理的な判断が必要なとき",
        purpose: "普遍的な価値基準を問う",
        depth: 5,
        level: "変容",
        domain: "前提を疑う質問",
        phase: "収束",
        timeAxis: "現在",
        useCases: ["リーダーシップ", "意思決定"]
      },
      // ... 残り17-27問
    ]
  },
  {
    id: "aristotle",
    name: "アリストテレス",
    nameEn: "Aristotle",
    period: "BC384-BC322",
    field: "古代ギリシア哲学",
    tier: "core",
    thinkingStyles: ["systematic-thinking", "empiricism", "essence-pursuit"],
    shortBio: "プラトンの弟子。論理学、倫理学、政治学、自然学など幅広い分野で体系的な思想を展開した。",
    coreApproach: "観察と分類を通じて事物の本質を理解し、目的因を探ることで、あらゆる存在の意味と役割を明らかにする。",
    questions: [
      {
        id: "aris-001",
        question: "これは何のために存在するのか？",
        context: "物事の意義を問うとき",
        purpose: "目的因を明らかにする",
        depth: 3,
        level: "洞察",
        domain: "明確化の質問",
        phase: "収束",
        timeAxis: "現在",
        useCases: ["自己内省", "経営・戦略"]
      },
      {
        id: "aris-002",
        question: "これを分類するとどうなるか？",
        context: "複雑な事象を整理したいとき",
        purpose: "体系的に理解する",
        depth: 2,
        level: "洞察",
        domain: "明確化の質問",
        phase: "収束",
        timeAxis: "現在",
        useCases: ["問題解決", "経営・戦略"]
      },
      {
        id: "aris-003",
        question: "原因は何か？（質料因・形相因・作用因・目的因）",
        context: "根本原因を探るとき",
        purpose: "四原因説で多角的に分析する",
        depth: 4,
        level: "変容",
        domain: "根本原因の質問",
        phase: "収束",
        timeAxis: "現在",
        useCases: ["問題解決", "経営・戦略"]
      },
      // ... 残り17-27問
    ]
  },
  // 以下、コア偉人を27名追加予定
  // デカルト、スピノザ、ライプニッツ、ロック、ヒューム、カント、ヘーゲル、
  // ニーチェ、キルケゴール、ハイデガー、サルトル、ウィトゲンシュタイン、
  // 孔子、老子、荘子、ブッダ、マルクス、フロイト、ユング、
  // アインシュタイン、ファインマン、ドラッカー、禅、ストア派（エピクテトス、マルクス・アウレリウス）等
];

// 第二弾：拡張偉人70-80名（簡潔版）
export const extendedMasters: MasterExpanded[] = [
  // タレス、アナクシマンドロス、ピタゴラス、ヘラクレイトス、パルメニデス、
  // エンペドクレス、デモクリトス、プロタゴラス、ゴルギアス、
  // エピクロス、ゼノン、ディオゲネス、
  // アウグスティヌス、トマス・アクィナス、
  // ベーコン、ホッブズ、パスカル、ルソー、ヴォルテール、
  // ショーペンハウアー、ミル、ベンサム、
  // ジェームズ、デューイ、パース、
  // フッサール、メルロ=ポンティ、レヴィナス、デリダ、フーコー、
  // ロールズ、ノージック、サンデル、
  // ガリレオ、ニュートン、ダーウィン、ボーア、ハイゼンベルク、
  // アドラー、マズロー、ロジャーズ、フランクル、
  // ウェーバー、デュルケム、ハーバーマス、
  // シュンペーター、ケインズ、ハイエク、フリードマン、
  // コトラー、ポーター、センゲ、コヴィー、
  // ゲーテ、ドストエフスキー、トルストイ、カフカ、カミュ、
  // 親鸞、道元、日蓮、空海、
  // ガンディー、マザー・テレサ、マンデラ、キング牧師
  // 等70-80名
];

// 全偉人を統合
export const allMasters = [...coreMasters, ...extendedMasters];
