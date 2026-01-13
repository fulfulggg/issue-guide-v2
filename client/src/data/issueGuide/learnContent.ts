// セクション1: 目的・想定読者
export interface PurposeContent {
  id: string;
  title: string;
  description: string;
  importantPremise: {
    title: string;
    points: {
      label: string;
      text: string;
      source?: string;
    }[];
  };
}

// セクション2: 論点の定義
export interface DefinitionContent {
  id: string;
  title: string;
  mainDefinition: {
    text: string;
    source: string;
  };
  fiveConditions: {
    id: number;
    text: string;
  }[];
  additionalRequirement: {
    id: number;
    text: string;
    note: string;
  };
  antiPatterns: {
    text: string;
  }[];
}

// セクション3: 論点が重要な理由
export interface ImportanceContent {
  id: string;
  title: string;
  quote: {
    text: string;
    source: string;
  };
  threeDifferences: {
    id: number;
    title: string;
    description: string;
  }[];
  flowDiagram: {
    steps: string[];
    labels: string[];
  };
  tradeoff: {
    title: string;
    speedPriority: {
      title: string;
      points: string[];
    };
    qualityAssurance: {
      title: string;
      points: string[];
    };
  };
}

// セクション4: 論点の構成要素
export interface ComponentContent {
  id: string;
  title: string;
  elements: {
    id: number;
    title: string;
    goodExamples: string[];
    badExamples: string[];
    tips?: string;
  }[];
  selfCheckChecklist: {
    title: string;
    items: string[];
  };
}

// セクション5: 論点ではないもの
export interface NotIssueContent {
  id: string;
  title: string;
  confusionPatterns: {
    id: number;
    title: string;
    comparison: {
      type: string;
      example: string;
      characteristics: string[];
      solution: string;
    }[];
  }[];
  conversionTemplates: {
    id: number;
    title: string;
    before: string;
    question: string;
    after: string;
  }[];
}

// セクション1のコンテンツ
export const purposeContent: PurposeContent = {
  id: "purpose",
  title: "目的・想定読者",
  description: "本マニュアルは、テクノロジー戦略部門の若手メンバーが、日々流れてくる膨大なAIニュースから「自社にとって重要な論点」を素早く設定し、それを分析して意思決定や行動につなげるための基礎スキルを身につけることを目的としています。",
  importantPremise: {
    title: "重要な前提：速報性と質のバランス",
    points: [
      {
        label: "速報性を重視",
        text: "AIニュースは鮮度が命です。60点の精度でも、いち早く「自社へのインパクト」を示すことが最優先です",
        source: "出典：社内資料「リサーチ業務設計」P7",
      },
      {
        label: "自分事化が必須",
        text: "ニュースの数値をそのまま受け取らず、既知の情報（例：自社の既存システム、過去のプロジェクト規模）と比較することで、リアリティを持って理解できるようになります",
        source: "出典：同上",
      },
    ],
  },
};

// セクション2のコンテンツ
export const definitionContent: DefinitionContent = {
  id: "definition",
  title: "論点の定義（短く、厳密に）",
  mainDefinition: {
    text: "「答えによって、私たちの決定や行動が変わる未解決の質問」",
    source: "",
  },
  fiveConditions: [
    { id: 1, text: "質問形式である ─ 「～か？」「どう～すべきか？」という問いの形をとる" },
    { id: 2, text: "分岐する選択肢を持つ ─ 複数の答えが考えられ、それぞれ異なる含意を持つ" },
    { id: 3, text: "未解決である ─ まだ答えが確定していない" },
    { id: 4, text: "決定に結びつく ─ 答えが分かれば、何らかの意思決定や行動変更ができる" },
    { id: 5, text: "文脈が明確である ─ 誰にとって、何のための論点なのかが分かる" },
  ],
  additionalRequirement: {
    id: 6,
    text: "自分事化されている ─ 自社の既存アセット・業務と具体的に比較できる形で表現されている",
    note: "これは論点の本質的定義ではなく、ニュース分析業務における品質基準（必須ゲート）です。自分事化なしの論点は「評論」で終わり、意思決定につながりません。",
  },
  antiPatterns: [
    { text: "単なるテーマや関心領域（「生成AIについて」）" },
    { text: "すでに答えが分かっている事実確認（「ChatGPTはいつリリースされたか？」）" },
    { text: "答えが決まっても何も変わらない質問" },
    { text: "主張や結論（「AIへの投資を増やすべきだ」）" },
    { text: "自社との関連が不明瞭な一般論（「業界全体にとってこの技術は重要か？」）" },
  ],
};

// セクション3のコンテンツ
export const importanceContent: ImportanceContent = {
  id: "importance",
  title: "論点が重要な理由（AIニュース分析での位置づけ）",
  quote: {
    text: "「適切なイシュー（論点）が提起できれば、与えられたテーマの半分は解決できたことになる」",
    source: "",
  },
  threeDifferences: [
    {
      id: 1,
      title: "テーマの本質を理解しているかの証明",
      description: "曖昧なテーマ「生成AIの動向について調べて」から、明確な論点「当社のカスタマーサポート業務に生成AIを導入すると、コスト削減とCX向上のどちらの効果が大きいか？」を立てられる人は、テーマの本質（自社への影響）を既に理解しています。",
    },
    {
      id: 2,
      title: "優先順位がついている",
      description: "論点を立てる過程で、「どの質問に答えることが最も重要か」という判断が自然に行われます。これにより、限られた時間で何を調べ、何を捨てるべきかが明確になります。",
    },
    {
      id: 3,
      title: "仮説ができている",
      description: "良い論点には複数の答え（仮説）がセットで存在します。「既存ベンダーとの契約を継続すべきか、新規AIベンダーに切り替えるべきか？」という論点を立てた時点で、あなたは両方の選択肢とその判断基準について考え始めています。",
    },
  ],
  flowDiagram: {
    steps: ["大量のニュース", "論点設定", "仮説形成", "証拠収集", "含意導出", "アクション"],
    labels: ["「何が起きたか」", "「何を問うべきか」", "「答えは何か」", "「なぜそう言えるか」", "「だから何？」", "「今何をする？」"],
  },
  tradeoff: {
    title: "速報性と質のトレードオフ：実務における優先順位",
    speedPriority: {
      title: "戦略的武器としての速報性",
      points: [
        "AIニュースは鮮度が命です。完璧な分析（質）よりも、生成AI等を活用して「いかに早く自社へのインパクトを出すか（速報性）」を最優先します",
        "60点の精度でもよい：暫定的な論点と自社比較をSlack等で即座に共有し、チーム内で議論を開始することが重要です",
        "調査結果を業務へのインパクトとして整理しておくことで、顧客や社外パートナーとの対話で即座に使える「武器」になります",
      ],
    },
    qualityAssurance: {
      title: "質を担保する仕組み",
      points: [
        "初期の速報は「暫定版」として明示",
        "チームレビューで誤りを修正",
        "週次で精度を振り返り、パターン学習",
      ],
    },
  },
};

// セクション4のコンテンツ
export const componentContent: ComponentContent = {
  id: "components",
  title: "論点の構成要素（成立条件）",
  elements: [
    {
      id: 1,
      title: "要素1：質問形式",
      goodExamples: [
        "「OpenAIの新モデルは当社のチャットボット性能を何%向上させるか？」",
        "「社内文書検索にRAGを導入すべきか、ファインチューニングすべきか？」",
      ],
      badExamples: [
        "「OpenAIの新モデルについて」（テーマであって質問ではない）",
        "「RAGの導入」（名詞句であって質問ではない）",
      ],
    },
    {
      id: 2,
      title: "要素2：分岐する選択肢を持つ",
      goodExamples: [
        "「競合A社のAI活用事例は、当社にとって（a）すぐに模倣すべき脅威か、（b）様子見すべき実験段階か、（c）無視してよい無関係な動きか？」",
      ],
      badExamples: [
        "「競合A社はどんなAIを使っているか？」（事実確認で終わり、答えが分かっても次の行動が不明）",
      ],
    },
    {
      id: 3,
      title: "要素3：未解決である",
      goodExamples: [],
      badExamples: [],
      tips: "判定のコツ：5分のGoogle検索で答えが出る→論点ではなく事実確認、社内の誰かに聞けばすぐ分かる→論点ではなく情報収集、深い分析や判断が必要→論点の可能性あり",
    },
    {
      id: 4,
      title: "要素4：決定に結びつく",
      goodExamples: [
        "「自社データでのLLMファインチューニングは、外部API利用と比較してROIが3年以内にプラスになるか？」→答えが「Yes」なら予算を確保して内製化プロジェクトを開始、「No」なら外部API利用を継続という決定につながる",
      ],
      badExamples: [
        "「LLMのファインチューニングにはどんな手法があるか？」→知識は増えるが、答えが出ても決定には直結しない",
      ],
      tips: "テスト質問：この論点の答えが分かったら、誰が何を決定できるか？その決定によって何が変わるか？",
    },
    {
      id: 5,
      title: "要素5：文脈が明確である",
      goodExamples: [],
      badExamples: [],
      tips: "文脈を明示する方法：主語を入れる「当社は～すべきか」、時間軸を入れる「今期中に～すべきか」、目的を入れる「競争優位性確保のために～すべきか」",
    },
    {
      id: 6,
      title: "要素6：自分事化されている（ニュース分析での必須要件）",
      goodExamples: [
        "レベル1（規模の比較）：「IIJが10MWのDCを増設した。当社の苫小牧DCの受電容量と比較して○倍の規模」",
        "レベル2（コスト・投資の比較）：「投資規模300億円は、当社の昨年度の○○プロジェクトの△倍に相当」",
        "レベル3（業務影響の具体化）：「このAI技術は、当社の××部門が現在使用している□□システムの代替となる可能性があり、年間○○万円のコスト削減が見込まれる」",
      ],
      badExamples: [
        "「IIJが10MWのDCを増設した」（ニュースそのまま）",
        "「投資規模は300億円」（抽象的）",
        "「このAI技術は当社の業務に影響する」（漠然としている）",
      ],
    },
  ],
  selfCheckChecklist: {
    title: "自分事化のチェックリスト",
    items: [
      "自社のどの部門・業務に関係するか明示されているか？",
      "既存の自社システム・プロジェクトと比較されているか？",
      "具体的な数値（規模・コスト・人数等）で表現されているか？",
      "社外の人（顧客・パートナー）に説明する際に使える形になっているか？",
    ],
  },
};

// セクション5のコンテンツ
export const notIssueContent: NotIssueContent = {
  id: "not-issue",
  title: "論点ではないもの（テーマ/事実/主張との違い）",
  confusionPatterns: [
    {
      id: 1,
      title: "混乱パターン1：テーマ vs 論点",
      comparison: [
        {
          type: "テーマ",
          example: "「生成AIの動向」「マルチモーダルAIについて」",
          characteristics: ["範囲が広すぎる", "質問形式ではない", "決定につながらない", "自社との関連不明"],
          solution: "テーマに「誰が」「何を」「なぜ」を追加し、「～か？」の形に変換。さらに自社比較を追加",
        },
        {
          type: "論点",
          example: "「当社のマーケティング部門は、今期中にマルチモーダルAIを導入すべきか？導入した場合、既存の○○システムと比較してコストは何%増加するか？」",
          characteristics: ["質問形式", "主体と時間軸が明確", "Yes/Noで行動が変わる", "自社比較が含まれる"],
          solution: "",
        },
      ],
    },
    {
      id: 2,
      title: "混乱パターン2：事実確認 vs 論点",
      comparison: [
        {
          type: "事実確認",
          example: "「GPT-4の価格はいくらか？」「競合B社はどのAIベンダーを使っているか？」",
          characteristics: ["すでに答えが存在する", "調べれば分かる", "判断を伴わない", "自社への影響不明"],
          solution: "事実を確認した「後に」何を判断したいのかを考える。「その事実が分かったら、私たちは何を決めるのか？」必ず自社比較を入れる",
        },
        {
          type: "論点",
          example: "「GPT-4の価格上昇は、当社のAI戦略のコスト試算を見直すほどのインパクトがあるか？現行の年間AI関連予算○○万円と比較して何%の増加になるか？」",
          characteristics: ["事実に基づく判断", "分析が必要", "決定につながる", "自社の具体的数値と比較"],
          solution: "",
        },
      ],
    },
    {
      id: 3,
      title: "混乱パターン3：主張・結論 vs 論点",
      comparison: [
        {
          type: "主張・結論",
          example: "「当社はAI投資を増やすべきだ」「生成AIは競争優位の源泉になる」",
          characteristics: ["すでに答えが出ている", "質問形式ではない", "立証すべき内容", "根拠が不明確"],
          solution: "主張を疑問文に戻す。「本当にそうなのか？」「どの程度そうなのか？」「どういう条件でそうなのか？」自社の状況で検証",
        },
        {
          type: "論点",
          example: "「当社のどの領域でAI投資を増やすと、最も高いROIが期待できるか？昨年度の投資実績○○万円と比較して、どの程度の増額が必要か？」",
          characteristics: ["まだ答えが出ていない", "質問形式", "答えで行動が変わる", "自社の実績と比較"],
          solution: "",
        },
      ],
    },
  ],
  conversionTemplates: [
    {
      id: 1,
      title: "型1：テーマ → 論点（自分事化）",
      before: "テーマ「〇〇について」",
      question: "「〇〇について、私たちは何を決めたいのか？自社の△△と比較するとどうか？」",
      after: "論点「□□は〇〇すべきか？当社の既存△△と比較して、規模/コスト/効果はどの程度か？」",
    },
    {
      id: 2,
      title: "型2：事実 → 論点（自分事化）",
      before: "事実「××が起きた」",
      question: "「その事実は、私たちにとってどういう意味があるのか？自社の▲▲と比べてどうか？」",
      after: "論点「××は、当社の□□にどのような影響を与えるか？既存の▲▲と比較して、規模/コスト/影響は何倍か？」",
    },
    {
      id: 3,
      title: "型3：主張 → 論点（自分事化）",
      before: "主張「▲▲すべきだ」",
      question: "「本当にそうなのか？どの程度か？条件は？自社で検証すると？」",
      after: "論点「▲▲は、◇◇という条件下で、本当に●●より優れているか？当社の既存○○と比較して、どの程度の改善が見込めるか？」",
    },
  ],
};

// 全セクションをまとめたエクスポート
export const learnSections = [
  { id: "purpose", title: "目的・想定読者", sectionNumber: 1 },
  { id: "definition", title: "論点の定義", sectionNumber: 2 },
  { id: "importance", title: "論点が重要な理由", sectionNumber: 3 },
  { id: "components", title: "論点の構成要素", sectionNumber: 4 },
  { id: "not-issue", title: "論点ではないもの", sectionNumber: 5 },
] as const;
