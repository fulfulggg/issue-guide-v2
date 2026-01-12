export interface HomeHeroContent {
  badgeLabel: string;
  titleLine1: string;
  titleLine2: string;
  lead: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    scrollTargetId: string;
  };
}

export interface HomeFormulaContent {
  /** 左辺（例: 質問力） */
  label: string;
  /** 右辺の要素（例: 好奇心 / 余白 / 観察 / 勇気） */
  factors: string[];
}

export interface SectionHeaderContent {
  title: string;
  description: string;
}

export interface HomeLevelsIntroContent {
  title: string;
  /** 段落を複数行に分けておき、<br /> でつなぐ */
  descriptions: string[];
}

export interface HomeHabitContent {
  title: string;
  subtitle: string;
  mainHeading: string;
  points: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface HomeUltimateQuestionContent {
  title: string;
  description: string;
  question: string;
}

export interface HomeFooterContent {
  text: string;
}

export const homeHeroContent: HomeHeroContent = {
  badgeLabel: "質問力を極限まで高める完全ガイド",
  titleLine1: "質問力を極限まで",
  titleLine2: "高める方法",
  lead:
    "人生を面白くし、他者に深い示唆を与える核心は「質問」にあります。質問こそが、創造性・戦略・人間理解・問題解決の源泉です。",
  primaryCta: {
    label: "30日間トレーニングを始める",
    href: "/training",
  },
  secondaryCta: {
    label: "ガイドを読む",
    scrollTargetId: "levels",
  },
};

export const homeFormulaContent: HomeFormulaContent = {
  label: "質問力",
  factors: ["好奇心", "余白", "観察", "勇気"],
};

export const homeLevelsIntroContent: HomeLevelsIntroContent = {
  title: "質問の5つの深度",
  descriptions: [
    "質問には階層がある。表面から本質へ、そして自己変容へ。",
    "各レベルをマスターすることで、真の洞察が生まれる。",
  ],
};

export const homeSectionHeadersContent: {
  categories: SectionHeaderContent;
  masters: SectionHeaderContent;
  enemies: SectionHeaderContent;
} = {
  categories: {
    title: "9つの質問領域",
    description:
      "質問力の高い人は、実は「質問の型」を持っています。この9カテゴリを自在に使える人は「質問で人を動かせる」ようになります。",
  },
  masters: {
    title: "質問の名手から学ぶ",
    description: "質問の本質を理解するには、巨匠たちの型が最も参考になります。",
  },
  enemies: {
    title: "質問力を弱める6つの敵",
    description: "以下の状態では、絶対に良い質問は生まれません。",
  },
};

export const homeHabitContent: HomeHabitContent = {
  title: "質問力を極める最強の習慣",
  subtitle: "これは本当に効きます",
  mainHeading: "⭐ 毎朝10個、質問だけを書き出す（30日間）",
  points: [
    "答えは書かない",
    "ジャンルは日ごとに変える（前提、未来、恐れ、長期視点、創造性、人間理解、自由形式）",
    "これを30日続けると、脳が勝手に深い質問を生成するようになります",
  ],
  cta: {
    label: "30日間トレーニングを始める",
    href: "/training",
  },
};

export const homeUltimateQuestionContent: HomeUltimateQuestionContent = {
  title: "究極の問い",
  description:
    "すべての質問を統合する、思考を一段上に引き上げるメタ質問",
  question: "いま、自分は何を問うべきなのか？",
};

export const homeFooterContent: HomeFooterContent = {
  text: "質問力を極限まで高める © 2024",
};
