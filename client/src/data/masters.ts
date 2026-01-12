// 質問の名手：歴史上の偉人から学ぶ質問法

export interface Master {
  id: string;
  name: string;
  title: string;
  period: string;
  description: string;
  approach: string;
  keyPrinciples: {
    name: string;
    description: string;
  }[];
  patterns?: {
    name: string;
    description: string;
    example: string;
  }[];
  questions: {
    question: string;
    context: string;
    purpose: string;
  }[];
  practicalExample?: {
    situation: string;
    dialogue: {
      speaker: string;
      text: string;
    }[];
    insight: string;
  };
}

export const masters: Master[] = [
  {
    id: "socrates",
    name: "ソクラテス",
    title: "産婆術の創始者",
    period: "紀元前469-399年",
    description: "古代ギリシャの哲学者。「無知の知」を説き、対話を通じて相手の中にある真理を引き出す「産婆術（マイエウティケー）」を確立。質問によって相手の思い込みを破壊し、自ら真理に到達させる手法は、現代のコーチングやファシリテーションの原型となった。",
    approach: "相手の主張を受け入れた上で、矛盾や前提を問い続けることで、相手自身が誤りに気づき、真理に到達する",
    keyPrinciples: [
      {
        name: "無知の知",
        description: "自分が何も知らないことを知っている。だからこそ genuine な好奇心で問える"
      },
      {
        name: "産婆術",
        description: "答えを教えるのではなく、相手の中にある真理を引き出す"
      },
      {
        name: "エレンコス（論駁）",
        description: "矛盾を明らかにすることで、より深い理解へ導く"
      }
    ],
    patterns: [
      {
        name: "明確化の質問",
        description: "言葉の定義や意味を明確にする",
        example: "「正義」とは何を意味しますか？"
      },
      {
        name: "初期設定の質問",
        description: "議論の前提を確認する",
        example: "その主張の根拠は何ですか？"
      },
      {
        name: "仮定を問う質問",
        description: "隠れた仮定を明らかにする",
        example: "それは常に正しいと言えますか？"
      },
      {
        name: "エビデンスを問う質問",
        description: "証拠や根拠を求める",
        example: "それをどうやって知ったのですか？"
      },
      {
        name: "起源を問う質問",
        description: "信念の源泉を探る",
        example: "その考えはどこから来たのですか？"
      },
      {
        name: "影響を問う質問",
        description: "結果や帰結を考えさせる",
        example: "それが正しいとすると、何が起こりますか？"
      },
      {
        name: "視点を問う質問",
        description: "別の見方を促す",
        example: "他の人はどう考えるでしょうか？"
      }
    ],
    questions: [
      {
        question: "それは本当に正しいのですか？",
        context: "相手の主張の確実性を問う",
        purpose: "思い込みを疑わせる"
      },
      {
        question: "その言葉の意味は何ですか？",
        context: "定義の曖昧さを明らかにする",
        purpose: "概念を明確化する"
      },
      {
        question: "なぜそう思うのですか？",
        context: "根拠を問う",
        purpose: "論理の基盤を確認する"
      },
      {
        question: "それは常に正しいと言えますか？",
        context: "普遍性を問う",
        purpose: "例外を考えさせる"
      },
      {
        question: "反対の場合はどうですか？",
        context: "逆のケースを考えさせる",
        purpose: "論理の一貫性を試す"
      },
      {
        question: "それはどこから学んだのですか？",
        context: "知識の源泉を問う",
        purpose: "権威への盲従を疑わせる"
      },
      {
        question: "他の人も同じように考えますか？",
        context: "視点の多様性を促す",
        purpose: "自己中心性を破壊する"
      },
      {
        question: "それが正しいとすると、何が起こりますか？",
        context: "帰結を考えさせる",
        purpose: "論理的一貫性を確認する"
      },
      {
        question: "あなたは本当にそれを知っていますか？",
        context: "知識と信念の区別を促す",
        purpose: "無知の知に導く"
      },
      {
        question: "もっと良い説明はありませんか？",
        context: "より深い理解を促す",
        purpose: "思考の深化を促進する"
      }
    ],
    practicalExample: {
      situation: "「正義とは強者の利益である」と主張する相手との対話",
      dialogue: [
        { speaker: "相手", text: "正義とは強者の利益です" },
        { speaker: "ソクラテス", text: "強者とは誰のことですか？" },
        { speaker: "相手", text: "権力を持つ者です" },
        { speaker: "ソクラテス", text: "権力者は間違いを犯しませんか？" },
        { speaker: "相手", text: "もちろん犯します" },
        { speaker: "ソクラテス", text: "では、権力者が自分の利益だと思って命じたことが、実は自分の不利益だった場合、それは正義ですか？" },
        { speaker: "相手", text: "...いいえ" },
        { speaker: "ソクラテス", text: "では、正義は強者の利益とは言えませんね？" }
      ],
      insight: "相手の主張を受け入れた上で、その帰結を問うことで、相手自身が矛盾に気づく"
    }
  },
  {
    id: "toyota",
    name: "トヨタ生産方式",
    title: "5回のなぜ",
    period: "1950年代〜",
    description: "トヨタ自動車が開発した問題解決手法。表面的な症状ではなく、真の根本原因を発見するために「なぜ？」を5回繰り返す。大野耐一が体系化し、世界中の製造業・サービス業で採用されている。",
    approach: "問題が発生したら、「なぜそれが起きたのか？」を5回繰り返し、真因に到達する",
    keyPrinciples: [
      {
        name: "現地現物",
        description: "現場に行き、実物を見て、事実を確認する"
      },
      {
        name: "真因追求",
        description: "症状ではなく、根本原因を見つける"
      },
      {
        name: "再発防止",
        description: "真因を取り除くことで、同じ問題の再発を防ぐ"
      }
    ],
    questions: [
      {
        question: "なぜそれが起きたのですか？（1回目）",
        context: "問題の直接的な原因を問う",
        purpose: "表面的な原因を特定する"
      },
      {
        question: "なぜそれが起きたのですか？（2回目）",
        context: "1回目の原因のさらに深い原因を問う",
        purpose: "一段深い原因を探る"
      },
      {
        question: "なぜそれが起きたのですか？（3回目）",
        context: "システムや仕組みの問題を探る",
        purpose: "構造的な原因を発見する"
      },
      {
        question: "なぜそれが起きたのですか？（4回目）",
        context: "組織や文化の問題を探る",
        purpose: "根深い原因を明らかにする"
      },
      {
        question: "なぜそれが起きたのですか？（5回目）",
        context: "真の根本原因に到達する",
        purpose: "真因を特定する"
      },
      {
        question: "この原因を取り除いたら、問題は再発しませんか？",
        context: "真因かどうかを確認する",
        purpose: "根本原因の妥当性を検証する"
      },
      {
        question: "なぜこの問題に今まで気づかなかったのですか？",
        context: "検知の仕組みを問う",
        purpose: "予防策を考える"
      },
      {
        question: "他にも同じ問題が起きていませんか？",
        context: "横展開を促す",
        purpose: "類似問題を発見する"
      }
    ],
    practicalExample: {
      situation: "機械が停止したトラブル",
      dialogue: [
        { speaker: "問題", text: "機械が停止した" },
        { speaker: "なぜ1", text: "なぜ機械が停止したのか？ → オーバーロードでヒューズが切れた" },
        { speaker: "なぜ2", text: "なぜオーバーロードになったのか？ → 軸受部の潤滑が不十分だった" },
        { speaker: "なぜ3", text: "なぜ潤滑が不十分だったのか？ → 潤滑ポンプが十分に汲み上げていなかった" },
        { speaker: "なぜ4", text: "なぜ十分に汲み上げていなかったのか？ → ポンプの軸が摩耗してガタガタになっていた" },
        { speaker: "なぜ5", text: "なぜ摩耗したのか？ → ストレーナー（濾過器）がついていなかったため、切粉が入った" }
      ],
      insight: "「ヒューズ交換」という対症療法ではなく、「ストレーナー設置」という根本対策に到達"
    }
  },
  {
    id: "drucker",
    name: "ピーター・ドラッカー",
    title: "マネジメントの父",
    period: "1909-2005年",
    description: "現代マネジメントの創始者。組織の本質を問う5つの質問で、企業や非営利組織の戦略を明確化する手法を確立。表面的な活動ではなく、本質的な目的と成果に焦点を当てる。",
    approach: "組織の存在理由、顧客、価値、成果、計画の5つを問うことで、戦略の本質を明確にする",
    keyPrinciples: [
      {
        name: "顧客中心",
        description: "顧客が決めるのは価値である。組織が決めるのではない"
      },
      {
        name: "成果志向",
        description: "活動ではなく、成果で測る"
      },
      {
        name: "本質追求",
        description: "何をするかではなく、なぜ存在するかを問う"
      }
    ],
    questions: [
      {
        question: "我々のミッション（使命）は何か？",
        context: "組織の存在理由を問う",
        purpose: "本質的な目的を明確にする"
      },
      {
        question: "我々の顧客は誰か？",
        context: "価値を提供する相手を特定する",
        purpose: "顧客を明確に定義する"
      },
      {
        question: "顧客にとっての価値は何か？",
        context: "顧客が求めるものを理解する",
        purpose: "提供価値を明確にする"
      },
      {
        question: "我々の成果は何か？",
        context: "活動ではなく成果を問う",
        purpose: "測定可能な成果を定義する"
      },
      {
        question: "我々の計画は何か？",
        context: "具体的な行動を問う",
        purpose: "実行計画を明確にする"
      },
      {
        question: "もし今日この事業を始めるとしたら、同じことをするか？",
        context: "既存事業の妥当性を問う",
        purpose: "惰性を排除する"
      },
      {
        question: "何を捨てるべきか？",
        context: "優先順位を問う",
        purpose: "リソースを集中させる"
      },
      {
        question: "最も重要な貢献は何か？",
        context: "本質的な価値を問う",
        purpose: "焦点を絞る"
      },
      {
        question: "誰が責任を持つのか？",
        context: "アカウンタビリティを問う",
        purpose: "実行責任を明確にする"
      },
      {
        question: "いつまでに達成するのか？",
        context: "期限を問う",
        purpose: "実行を促進する"
      }
    ],
    practicalExample: {
      situation: "ある病院が「我々のミッションは何か？」を問い直した",
      dialogue: [
        { speaker: "従来の答え", text: "病気を治すこと" },
        { speaker: "ドラッカー", text: "顧客（患者）にとっての価値は何ですか？" },
        { speaker: "再考", text: "健康を取り戻し、日常生活に戻ること" },
        { speaker: "洞察", text: "ミッションは「治療」ではなく「健康な生活への復帰支援」" },
        { speaker: "変化", text: "退院後のフォローアップ、リハビリ、予防医療に注力するようになった" }
      ],
      insight: "顧客視点で価値を再定義することで、組織の活動が根本から変わる"
    }
  },
  {
    id: "zen",
    name: "禅",
    title: "公案による悟り",
    period: "6世紀〜",
    description: "禅宗における修行法。論理的思考では解決できない矛盾的な問い（公案）を通じて、二元論を超越し、直観的な悟りに到達する。最も有名な公案は「隻手の声（片手の音）」。",
    approach: "論理では答えられない問いに向き合うことで、思考の枠を破壊し、直観的な理解に到達する",
    keyPrinciples: [
      {
        name: "不立文字",
        description: "言葉では伝えられない。直接体験するしかない"
      },
      {
        name: "以心伝心",
        description: "心から心へ、直接伝わる"
      },
      {
        name: "矛盾の超越",
        description: "AかBかではなく、AでもBでもない境地"
      }
    ],
    questions: [
      {
        question: "隻手の声を聞け（片手の音とは何か？）",
        context: "最も有名な公案",
        purpose: "二元論を超越させる"
      },
      {
        question: "犬に仏性はあるか？",
        context: "趙州の公案",
        purpose: "存在と非存在の境界を問う"
      },
      {
        question: "父母未生以前の本来の面目は何か？",
        context: "生まれる前の自分とは",
        purpose: "本質的な自己を問う"
      },
      {
        question: "庭前の柏樹子",
        context: "「仏法の大意は何か？」に対する答え",
        purpose: "言葉を超えた理解を促す"
      },
      {
        question: "万法帰一、一帰何処？",
        context: "全てが一に帰するなら、一は何に帰するか",
        purpose: "究極の根源を問う"
      },
      {
        question: "無",
        context: "「犬に仏性はあるか？」への答え",
        purpose: "有無を超越させる"
      },
      {
        question: "喫茶去（お茶でも飲んでいきなさい）",
        context: "悟りを求める者への答え",
        purpose: "今ここに気づかせる"
      },
      {
        question: "平常心是道",
        context: "道とは何か",
        purpose: "特別なものを求めることを止めさせる"
      }
    ],
    practicalExample: {
      situation: "弟子が師に「仏法の大意は何ですか？」と問う",
      dialogue: [
        { speaker: "弟子", text: "仏法の大意は何ですか？" },
        { speaker: "師", text: "庭前の柏の木だ" },
        { speaker: "弟子", text: "（困惑）" },
        { speaker: "師", text: "（沈黙）" }
      ],
      insight: "言葉で説明できる真理は、真理ではない。直接体験するしかない"
    }
  },
  {
    id: "einstein",
    name: "アルバート・アインシュタイン",
    title: "思考実験の天才",
    period: "1879-1955年",
    description: "相対性理論の創始者。実験装置なしで、想像力だけで物理法則を発見する「思考実験」の手法を確立。「もし〜だったら？」という質問から、革命的な発見を生み出した。",
    approach: "極端な状況を想像し、「もし〜だったら何が起こるか？」を問うことで、物理法則の本質を理解する",
    keyPrinciples: [
      {
        name: "想像力",
        description: "想像力は知識より重要である"
      },
      {
        name: "シンプルさ",
        description: "できるだけシンプルに、しかしシンプルすぎないように"
      },
      {
        name: "本質追求",
        description: "複雑な現象の背後にある単純な原理を見つける"
      }
    ],
    questions: [
      {
        question: "もし光速で走ったら、鏡に自分の顔は映るか？",
        context: "16歳のアインシュタインの思考実験",
        purpose: "光の性質を理解する"
      },
      {
        question: "もし落下するエレベーターの中にいたら、重力は感じるか？",
        context: "等価原理の発見",
        purpose: "重力と加速度の関係を理解する"
      },
      {
        question: "もし光速に近い速度で移動する列車の中で光を放ったら？",
        context: "特殊相対性理論の思考実験",
        purpose: "時間と空間の相対性を理解する"
      },
      {
        question: "もし宇宙全体が加速していたら、どうやって気づくか？",
        context: "一般相対性理論の思考実験",
        purpose: "絶対空間の概念を疑う"
      },
      {
        question: "神はサイコロを振るか？",
        context: "量子力学への疑問",
        purpose: "決定論と確率の本質を問う"
      },
      {
        question: "もし宇宙が有限だとしたら、端には何があるか？",
        context: "宇宙の構造を問う",
        purpose: "空間の性質を理解する"
      },
      {
        question: "時間とは何か？",
        context: "時間の本質を問う",
        purpose: "絶対時間の概念を疑う"
      },
      {
        question: "同時とは何か？",
        context: "同時性の相対性",
        purpose: "時間の相対性を理解する"
      }
    ],
    practicalExample: {
      situation: "光速で走る思考実験",
      dialogue: [
        { speaker: "問い", text: "もし光速で走ったら、鏡に自分の顔は映るか？" },
        { speaker: "推論1", text: "光速で走れば、自分から出た光は鏡に届かない" },
        { speaker: "推論2", text: "だから鏡には何も映らないはず" },
        { speaker: "矛盾", text: "しかし、光速で走っても物理法則は変わらないはず" },
        { speaker: "洞察", text: "光速は観測者によらず一定である（光速度不変の原理）" },
        { speaker: "結論", text: "時間と空間が相対的に変化する（特殊相対性理論）" }
      ],
      insight: "極端な状況を想像することで、常識を疑い、新しい法則を発見する"
    }
  },
  {
    id: "feynman",
    name: "リチャード・ファインマン",
    title: "12の問題を持つ男",
    period: "1918-1988年",
    description: "ノーベル物理学賞受賞者。常に12の根本的な問題を心に留め、新しい情報に触れるたびに「これで12の問題のどれかが解けないか？」と問い続けた。また「簡単な言葉で説明できないなら、理解していない」という基準を持つ。",
    approach: "常に根本的な問いを持ち続け、あらゆる情報をその問いに照らして考える。また、複雑なことを単純化して本質を理解する",
    keyPrinciples: [
      {
        name: "12の問題",
        description: "常に12の根本的な問題を心に留めておく"
      },
      {
        name: "シンプル化",
        description: "簡単な言葉で説明できないなら、理解していない"
      },
      {
        name: "好奇心",
        description: "なぜそうなるのか？を常に問う"
      }
    ],
    questions: [
      {
        question: "これで12の問題のどれかが解けないか？",
        context: "新しい情報に触れたとき",
        purpose: "常に根本問題とつなげる"
      },
      {
        question: "これを子供に説明できるか？",
        context: "理解度を確認する",
        purpose: "本質的な理解を確認する"
      },
      {
        question: "なぜそうなるのか？",
        context: "現象の背後を問う",
        purpose: "因果関係を理解する"
      },
      {
        question: "もっと単純な例はないか？",
        context: "複雑な問題に直面したとき",
        purpose: "本質を抽出する"
      },
      {
        question: "これは本当に正しいのか？",
        context: "権威ある主張に対して",
        purpose: "盲信を避ける"
      },
      {
        question: "どうやって確かめられるか？",
        context: "仮説を立てたとき",
        purpose: "検証可能性を確保する"
      },
      {
        question: "この問題の本質は何か？",
        context: "複雑な問題を分析するとき",
        purpose: "核心を見抜く"
      },
      {
        question: "他の分野ではどう考えるか？",
        context: "行き詰まったとき",
        purpose: "異分野の知見を活用する"
      },
      {
        question: "もし私が間違っていたら、何が見えるか？",
        context: "自分の仮説を検証するとき",
        purpose: "反証可能性を確保する"
      },
      {
        question: "これを楽しめないか？",
        context: "困難な問題に直面したとき",
        purpose: "好奇心を維持する"
      }
    ],
    practicalExample: {
      situation: "ファインマンの12の問題手法",
      dialogue: [
        { speaker: "方法", text: "常に12の根本的な問題をリストアップしておく" },
        { speaker: "実践", text: "新しい論文、講演、会話に触れるたび、「これで12の問題のどれかが解けないか？」と問う" },
        { speaker: "効果", text: "一見無関係な情報が、根本問題の解決につながることがある" },
        { speaker: "例", text: "量子電磁力学の問題を、経路積分という全く新しい手法で解決" }
      ],
      insight: "常に根本的な問いを持ち続けることで、あらゆる情報が学びの機会になる"
    }
  },
  {
    id: "nietzsche",
    name: "フリードリヒ・ニーチェ",
    title: "生の哲学者",
    period: "1844-1900年",
    description: "ドイツの哲学者。「神は死んだ」と宣言し、既存の価値観を破壊。「力への意志」と「超人」の思想で、人間の可能性を問い続けた。",
    approach: "既存の価値観を徹底的に疑い、生の肯定と自己創造を問う",
    keyPrinciples: [
      { name: "力への意志", description: "人間の本質は、力を増大させようとする意志である" },
      { name: "超人", description: "既存の価値観を超え、自ら価値を創造する存在" },
      { name: "永劫回帰", description: "同じ人生を何度でも繰り返したいと思えるか？" }
    ],
    questions: [
      { question: "この価値観は誰が作ったのか？", context: "既存の価値観を疑う", purpose: "価値観の起源を問う" },
      { question: "これは生を肯定するか？", context: "行動の意味を問う", purpose: "生の肯定を確認する" },
      { question: "同じ人生を何度でも繰り返したいか？", context: "人生の選択を問う", purpose: "永劫回帰で考える" },
      { question: "これは弱者の道徳か？", context: "道徳の起源を問う", purpose: "ルサンチマンを暴く" },
      { question: "これは自分を超えさせるか？", context: "成長を問う", purpose: "超克を促す" }
    ]
  },
  {
    id: "heidegger",
    name: "マルティン・ハイデガー",
    title: "存在の哲学者",
    period: "1889-1976年",
    description: "ドイツの哲学者。「存在と時間」で、「存在とは何か？」という根本問題を提起。現存在（ダーザイン）の分析を通じて、人間存在の意味を問い続けた。",
    approach: "存在そのものを問い、日常性の中に埋没した本来的な存在を取り戻す",
    keyPrinciples: [
      { name: "現存在", description: "人間は「そこにいる」存在。世界の中に投げ出されている" },
      { name: "死への存在", description: "死を意識することで、本来的な生き方が開かれる" },
      { name: "世界内存在", description: "人間は世界から切り離された存在ではない" }
    ],
    questions: [
      { question: "存在とは何か？", context: "根本問題を問う", purpose: "存在そのものを問う" },
      { question: "私は本来的に生きているか？", context: "日常性を疑う", purpose: "本来性を問う" },
      { question: "死を意識しているか？", context: "有限性を問う", purpose: "死への存在を確認する" },
      { question: "これは世人（他者）の声か？", context: "自己を問う", purpose: "世人からの脱却を促す" },
      { question: "今ここにいるとは？", context: "現在を問う", purpose: "現存在を確認する" }
    ]
  },
  {
    id: "sartre",
    name: "ジャン＝ポール・サルトル",
    title: "実存主義の哲学者",
    period: "1905-1980年",
    description: "フランスの哲学者。「実存は本質に先立つ」という命題で、人間の自由と責任を問う。人間は自由の刑に処せられている。",
    approach: "人間には本質がなく、自ら選択し、自らを作り上げる。その自由と責任を問う",
    keyPrinciples: [
      { name: "実存は本質に先立つ", description: "人間には決まった本質がなく、自ら作り上げる" },
      { name: "自由の刑", description: "人間は自由であることを逃れられない" },
      { name: "アンガジュマン", description: "自分の選択に責任を持ち、社会に関わる" }
    ],
    questions: [
      { question: "私は自由に選択しているか？", context: "自由を問う", purpose: "自由の自覚を促す" },
      { question: "これは自己欺瞄か？", context: "自己を疑う", purpose: "悪信を暴く" },
      { question: "私はこの選択に責任を持つか？", context: "責任を問う", purpose: "責任の自覚を促す" },
      { question: "他者は地獄か？", context: "他者との関係を問う", purpose: "他者の眼差しを意識する" },
      { question: "私は何にアンガジュするか？", context: "社会参加を問う", purpose: "アンガジュマンを促す" }
    ]
  },
  {
    id: "foucault",
    name: "ミシェル・フーコー",
    title: "権力と知の哲学者",
    period: "1926-1984年",
    description: "フランスの哲学者。権力と知の関係を分析し、「真理」がどのように構築されるかを問う。狂気、監獄、セクシュアリティなどを通じて、社会の機制を暴いた。",
    approach: "権力がどのように知を生産し、主体を形成するかを問う",
    keyPrinciples: [
      { name: "知と権力", description: "知は権力と不可分。真理は権力関係の中で生産される" },
      { name: "言説", description: "言葉は中立ではなく、権力を帯びている" },
      { name: "系譜学", description: "歴史は連続ではなく、断絶と変化の繰り返し" }
    ],
    questions: [
      { question: "この「真理」は誰が作ったのか？", context: "真理の起源を問う", purpose: "知と権力を暴く" },
      { question: "この言葉は何を排除しているか？", context: "言説を問う", purpose: "言葉の権力を暴く" },
      { question: "これはいつから「普通」になったのか？", context: "歴史を問う", purpose: "系譜学的分析をする" },
      { question: "私は監視されているか？", context: "権力を問う", purpose: "規律訓練権力を意識する" },
      { question: "この主体はどう構築されたか？", context: "主体化を問う", purpose: "自己の形成を問う" }
    ]
  },
  {
    id: "wittgenstein",
    name: "ルートヴィヒ・ヴィトゲンシュタイン",
    title: "言語哲学の革命家",
    period: "1889-1951年",
    description: "オーストリアの哲学者。「論理哲学論考」で言語と世界の関係を問い、後期は「言語ゲーム」で言葉の使用を分析。「語り得ないものについては沈黙しなければならない」。",
    approach: "言語の限界を問い、言葉の使用を分析することで、哲学的問題を解消する",
    keyPrinciples: [
      { name: "言語ゲーム", description: "言葉の意味は、その使用にある" },
      { name: "家族的類似", description: "概念には明確な境界がない" },
      { name: "沈黙", description: "語り得ないものについては沈黙する" }
    ],
    questions: [
      { question: "この言葉はどう使われているか？", context: "言葉の使用を問う", purpose: "言語ゲームを分析する" },
      { question: "これは語り得るか？", context: "言語の限界を問う", purpose: "沈黙の領域を確認する" },
      { question: "この問題は言語の混乱か？", context: "哲学的問題を問う", purpose: "擬似問題を解消する" },
      { question: "この概念の境界は明確か？", context: "概念を問う", purpose: "家族的類似を確認する" },
      { question: "これは生活形式の中でどう機能するか？", context: "実践を問う", purpose: "言語と生活の関係を問う" }
    ]
  },
  {
    id: "schopenhauer",
    name: "アルトゥール・ショーペンハウアー",
    title: "意志と表象の哲学者",
    period: "1788-1860年",
    description: "ドイツの哲学者。世界は「意志」と「表象」から成り、人間は盲目的な意志に支配されていると考えた。苦しみからの解放を芸術と禁欲に求めた。",
    approach: "意志の支配を認識し、芸術や禁欲を通じて苦しみからの解放を問う",
    keyPrinciples: [
      { name: "意志と表象", description: "世界は意志（本質）と表象（現象）から成る" },
      { name: "苦しみの哲学", description: "人生は本質的に苦しみである" },
      { name: "禁欲", description: "意志を否定することで苦しみから解放される" }
    ],
    questions: [
      { question: "これは意志の支配か？", context: "行動の動機を問う", purpose: "意志の影響を確認する" },
      { question: "これは苦しみを生むか？", context: "結果を問う", purpose: "苦しみの原因を問う" },
      { question: "芸術は解放を与えるか？", context: "美的体験を問う", purpose: "芸術の力を問う" },
      { question: "私は欲望を手放せるか？", context: "禁欲を問う", purpose: "意志の否定を促す" },
      { question: "これは表象か本質か？", context: "現実を問う", purpose: "意志と表象を区別する" }
    ]
  },
  {
    id: "hegel",
    name: "ゲオルク・ヴィルヘルム・フリードリヒ・ヘーゲル",
    title: "弁証法の哲学者",
    period: "1770-1831年",
    description: "ドイツ観念論の大成者。弁証法（正・反・合）で、矛盾を通じて真理が発展すると考えた。精神の現象学で、意識の発展を描いた。",
    approach: "矛盾を否定せず、それを通じてより高次の統一（アウフヘーベン）に到達する",
    keyPrinciples: [
      { name: "弁証法", description: "正・反・合のプロセスで真理が発展する" },
      { name: "アウフヘーベン", description: "矛盾を保存しながら、より高次の次元で統一する" },
      { name: "絶対精神", description: "歴史は精神が自己を展開する過程" }
    ],
    questions: [
      { question: "この矛盾をどう統一するか？", context: "対立を問う", purpose: "弁証法的統一を促す" },
      { question: "これは歴史の必然性か？", context: "歴史を問う", purpose: "精神の展開を問う" },
      { question: "反対は何か？", context: "対立を問う", purpose: "反定立を見つける" },
      { question: "これはより高次の統一か？", context: "統合を問う", purpose: "アウフヘーベンを確認する" },
      { question: "理性的なものは現実的か？", context: "理性と現実を問う", purpose: "理性と現実の一致を問う" }
    ]
  },
  {
    id: "spinoza",
    name: "バールーフ・デ・スピノザ",
    title: "汎神論の哲学者",
    period: "1632-1677年",
    description: "オランダの哲学者。神＝自然という汎神論で、万物は神の属性の現れと考えた。「エチカ」で、理性による自由と至福を説いた。",
    approach: "万物を神の属性として理解し、理性により情念から解放される",
    keyPrinciples: [
      { name: "神＝自然", description: "神と自然は同一。万物は神の属性" },
      { name: "能動的自然と受動的自然", description: "神は能動的自然、万物は受動的自然" },
      { name: "理性による自由", description: "理性で物事を理解することで、情念から解放される" }
    ],
    questions: [
      { question: "これは神の属性か？", context: "存在を問う", purpose: "汎神論的理解をする" },
      { question: "これは必然性か自由意志か？", context: "因果を問う", purpose: "決定論を確認する" },
      { question: "私は理性で理解しているか？", context: "認識を問う", purpose: "理性的認識を促す" },
      { question: "この情念は理性で制御できるか？", context: "感情を問う", purpose: "情念からの解放を促す" },
      { question: "これは至福につながるか？", context: "幸福を問う", purpose: "至福を問う" }
    ]
  },
  {
    id: "leibniz",
    name: "ゴットフリート・ヴィルヘルム・ライプニッツ",
    title: "モナド論の哲学者",
    period: "1646-1716年",
    description: "ドイツの哲学者・数学者。世界はモナド（単子）から成り、予定調和により秩序が保たれる。「この世界は可能な世界の中で最善」と考えた。",
    approach: "世界をモナドの集合として理解し、予定調和と最善を問う",
    keyPrinciples: [
      { name: "モナド", description: "世界は窓のない単子（モナド）から成る" },
      { name: "予定調和", description: "神が予め調和させたことで、モナド間に秩序がある" },
      { name: "最善説", description: "この世界は可能な世界の中で最善" }
    ],
    questions: [
      { question: "これは最善の選択か？", context: "選択を問う", purpose: "最善説で考える" },
      { question: "この調和は予定されていたか？", context: "秩序を問う", purpose: "予定調和を問う" },
      { question: "これは十分理由の原理に反するか？", context: "因果を問う", purpose: "十分理由律を確認する" },
      { question: "これは矛盾を含むか？", context: "論理を問う", purpose: "矛盾律を確認する" },
      { question: "これは可能世界の中で最善か？", context: "価値を問う", purpose: "最善を問う" }
    ]
  },
  {
    id: "derrida",
    name: "ジャック・デリダ",
    title: "脱構築の哲学者",
    period: "1930-2004年",
    description: "フランスの哲学者。脱構築（デコンストラクション）で、テキストの中に隠された矛盾や二項対立を暴き、既存の構造を解体する。「差延」という概念で、意味の不安定性を示した。",
    approach: "テキストを注意深く読み、二項対立や矛盾を見つけ、構造を脱構築する",
    keyPrinciples: [
      { name: "脱構築", description: "テキストの中の矛盾や二項対立を暴き、解体する" },
      { name: "差延", description: "意味は常に延期され、確定しない" },
      { name: "二項対立の転倒", description: "二項対立（理性/感性、男/女など）を疑う" }
    ],
    questions: [
      { question: "この二項対立は本当か？", context: "対立を問う", purpose: "二項対立を脱構築する" },
      { question: "このテキストは何を抑圧しているか？", context: "テキストを問う", purpose: "抑圧されたものを暴く" },
      { question: "この意味は確定か？", context: "意味を問う", purpose: "差延を確認する" },
      { question: "この中心は本当に中心か？", context: "構造を問う", purpose: "中心を脱構築する" },
      { question: "これは何を排除しているか？", context: "境界を問う", purpose: "排除されたものを問う" }
    ]
  },
  {
    id: "confucius",
    name: "孔子",
    title: "儒学の祖",
    period: "紀元前551-479年",
    description: "中国春秋時代の思想家。人間関係と社会秩序を重視し、「仁」（思いやり）と「礼」（礼儀）を説いた。「学びて時にこれを習う」という学習の姿勢を示した。",
    approach: "人間関係の中で仁と礼を実践し、自己修養を問う",
    keyPrinciples: [
      { name: "仁", description: "人を思いやる心。己れた立たんと欲して人を立てる" },
      { name: "礼", description: "社会秩序を保つ礼儀。内面の仁を外に表す" },
      { name: "学而時習之", description: "学び、繰り返し実践することで身につける" }
    ],
    questions: [
      { question: "これは仁か？", context: "行動を問う", purpose: "仁の実践を問う" },
      { question: "礼に叶っているか？", context: "作法を問う", purpose: "礼の実践を問う" },
      { question: "己れた立たんと欲して人を立てているか？", context: "他者を問う", purpose: "仁の実践を問う" },
      { question: "学びて習っているか？", context: "学習を問う", purpose: "実践を促す" },
      { question: "君子の道か？", context: "人格を問う", purpose: "理想的人間像を問う" }
    ]
  },
  {
    id: "laozi",
    name: "老子",
    title: "道家の祖",
    period: "紀元前6世紀？",
    description: "中国春秋時代の思想家。「道徳経」で、「道」（宇宙の根本原理）と「無為」（作為的に行動しない）を説いた。柔軟さと謙虚さを重んじた。",
    approach: "道に従い、無為自然で生きることで、作為的な努力を超える",
    keyPrinciples: [
      { name: "道", description: "宇宙の根本原理。言葉で表せない" },
      { name: "無為自然", description: "作為的に行動せず、自然に任せる" },
      { name: "柔弱勝剛強", description: "柔軟さが剛強さに勝つ" }
    ],
    questions: [
      { question: "これは道に叶うか？", context: "自然を問う", purpose: "道との調和を問う" },
      { question: "無為でいるか？", context: "行動を問う", purpose: "作為を手放す" },
      { question: "これは柔軟か？", context: "姿勢を問う", purpose: "柔軟さを問う" },
      { question: "水のように振る舞っているか？", context: "生き方を問う", purpose: "水のような柔軟さを問う" },
      { question: "少なくすることで足りるか？", context: "欲望を問う", purpose: "少欲知足を問う" }
    ]
  },
  {
    id: "zhuangzi",
    name: "莊子",
    title: "道家の大家",
    period: "紀元前369-286年",
    description: "中国戦国時代の思想家。老子の思想を継承し、「道」を追求。「胡蝶の夢」で知られ、相対的な価値観を超え、絶対的自由を説いた。",
    approach: "相対的な価値観を超え、道と一体化することで絶対的自由を得る",
    keyPrinciples: [
      { name: "齊物論", description: "万物は平等。大小、貴賤などの区別は相対的" },
      { name: "遥遥遊", description: "価値観に縛られず、自由に遊ぶ" },
      { name: "胡蝶の夢", description: "現実と夢の境界は曖昧" }
    ],
    questions: [
      { question: "この区別は絶対か？", context: "価値観を問う", purpose: "齊物論で考える" },
      { question: "私は自由に遊んでいるか？", context: "自由を問う", purpose: "遥遥遊を問う" },
      { question: "これは夢か現実か？", context: "現実を問う", purpose: "境界を曖昧にする" },
      { question: "無用の用はあるか？", context: "有用性を問う", purpose: "無用の価値を問う" },
      { question: "道と一体化しているか？", context: "境地を問う", purpose: "道との一体化を問う" }
    ]
  },
  {
    id: "buddha",
    name: "ブッダ（釈迦）",
    title: "仏教の祖",
    period: "紀元前563-483年",
    description: "古代インドの宗教家。四聖説（苦・集・滅・道）で、苦しみの原因と解脱を説いた。執着を手放し、中道を歩むことで涅槃に到達する。",
    approach: "苦しみの原因を見極め、執着を手放し、中道を歩む",
    keyPrinciples: [
      { name: "四聖説", description: "苦・集（原因）・滅（解脱）・道（方法）" },
      { name: "八正道", description: "正しい見方、思い、言葉、行いなど八つの実践" },
      { name: "無常・苦・無我", description: "万物は変化し、苦しみを含み、実体がない" }
    ],
    questions: [
      { question: "これは苦しみか？", context: "苦を問う", purpose: "苦を認識する" },
      { question: "この苦しみの原因は何か？", context: "集を問う", purpose: "執着を見つける" },
      { question: "私は執着しているか？", context: "執着を問う", purpose: "執着を手放す" },
      { question: "中道を歩んでいるか？", context: "バランスを問う", purpose: "中道を問う" },
      { question: "これは無常か？", context: "変化を問う", purpose: "無常を認識する" }
    ]
  },
  {
    id: "shinran",
    name: "親鸞",
    title: "浄土真宗の祖",
    period: "1173-1263年",
    description: "鎌倉時代の僧侶。「悪人正機」で、悪人こそが阿弥陀仏の本願の対象と説いた。自力ではなく他力（阿弥陀仏の力）による救済を強調。",
    approach: "自力の限界を認め、他力に任せることで救われる",
    keyPrinciples: [
      { name: "悪人正機", description: "悪人こそが阿弥陀仏の本願の対象" },
      { name: "他力本願", description: "自力ではなく、阿弥陀仏の力により救われる" },
      { name: "絶対他力", description: "完全に他力に任せる" }
    ],
    questions: [
      { question: "私は自力で救われるか？", context: "自力を問う", purpose: "自力の限界を認める" },
      { question: "私は悪人か？", context: "自己を問う", purpose: "悪人正機を問う" },
      { question: "他力に任せているか？", context: "信仰を問う", purpose: "他力本願を問う" },
      { question: "念仏は自力か他力か？", context: "実践を問う", purpose: "念仏の意味を問う" },
      { question: "私は救われるのか？", context: "救済を問う", purpose: "信心を問う" }
    ]
  },
  {
    id: "dogen",
    name: "道元",
    title: "曹洞宗の祖",
    period: "1200-1253年",
    description: "鎌倉時代の僧侶。「正法眼蔵」で、「修証一等」（修行と悉悟は一体）を説いた。座禅そのものが悉悟であり、目的を求めない「只管打座」を強調。",
    approach: "修行と悉悟は一体。座禅そのものが悉悟である",
    keyPrinciples: [
      { name: "修証一等", description: "修行と悉悟は別ではなく、一体" },
      { name: "只管打座", description: "目的を求めず、ただ座る" },
      { name: "而今の山水", description: "今ここの現実が真理" }
    ],
    questions: [
      { question: "修行と悉悟は別か？", context: "修行を問う", purpose: "修証一等を問う" },
      { question: "私は目的を求めているか？", context: "動機を問う", purpose: "只管打座を問う" },
      { question: "今ここにいるか？", context: "現在を問う", purpose: "而今を問う" },
      { question: "これは悉悟か？", context: "境地を問う", purpose: "悉悟を問う" },
      { question: "身心脱落しているか？", context: "執着を問う", purpose: "身心脱落を問う" }
    ]
  },
  {
    id: "kukai",
    name: "空海",
    title: "真言密教の祖",
    period: "774-835年",
    description: "平安時代の僧侶。真言密教を日本に伝え、「即身成仏」（この身のまま仏になる）を説いた。曼荼羅、真言、印を通じて、宇宙の真理と一体化する。",
    approach: "身体、言葉、心を通じて、宇宙の真理と一体化する",
    keyPrinciples: [
      { name: "即身成仏", description: "この身のままで仏になれる" },
      { name: "三密加持", description: "身・口・意の三つを通じて仏と一体化" },
      { name: "大日如来", description: "宇宙の根本仏。万物は大日如来の現れ" }
    ],
    questions: [
      { question: "この身で仏になれるか？", context: "成仏を問う", purpose: "即身成仏を問う" },
      { question: "身・口・意は一致しているか？", context: "実践を問う", purpose: "三密加持を問う" },
      { question: "これは大日如来の現れか？", context: "存在を問う", purpose: "宇宙との一体性を問う" },
      { question: "曼荼羅は何を示すか？", context: "シンボルを問う", purpose: "曼荼羅の意味を問う" },
      { question: "真言は宇宙の言葉か？", context: "言葉を問う", purpose: "真言の力を問う" }
    ]
  },
  {
    id: "steve-jobs",
    name: "スティーブ・ジョブズ",
    title: "Apple共同創業者",
    period: "1955-2011年",
    description: "Appleを創業し、Mac、iPod、iPhoneで世界を変えた。「顕著な痕跡を宇宙に残す」というビジョンで、デザインと技術の融合を追求。「連結する点」を重視した。",
    approach: "本質を問い、シンプルさを追求し、顧客体験を最優先する",
    keyPrinciples: [
      { name: "連結する点", description: "過去の経験を未来につなげる" },
      { name: "シンプルさ", description: "複雑さを削ぎ落とし、本質だけを残す" },
      { name: "顧客体験", description: "技術ではなく、体験から始める" }
    ],
    questions: [
      { question: "これは本当に必要か？", context: "機能を問う", purpose: "シンプルさを問う" },
      { question: "顧客はこれを愛するか？", context: "体験を問う", purpose: "顧客体験を問う" },
      { question: "これは美しいか？", context: "デザインを問う", purpose: "美しさを問う" },
      { question: "これは世界を変えるか？", context: "インパクトを問う", purpose: "ビジョンを問う" },
      { question: "連結する点はあるか？", context: "経験を問う", purpose: "過去と未来をつなげる" }
    ]
  },
  {
    id: "jeff-bezos",
    name: "ジェフ・ベゾス",
    title: "Amazon創業者",
    period: "1964年-",
    description: "Amazonを創業し、オンライン小売を革命。「顧客第一主義」と「Day 1」（常に初日の姿勢）を貴い、長期的思考を重視。「変わらないもの」に注目する。",
    approach: "顧客から逆算し、長期的に考え、変わらないものに投資する",
    keyPrinciples: [
      { name: "顧客第一主義", description: "顧客から逆算して考える" },
      { name: "Day 1", description: "常に初日の姿勢を保つ" },
      { name: "長期的思考", description: "10年後を見据えて意思決定する" }
    ],
    questions: [
      { question: "顧客はこれを望んでいるか？", context: "顧客を問う", purpose: "顧客第一主義を問う" },
      { question: "これは10年後も変わらないか？", context: "時間を問う", purpose: "長期的思考を問う" },
      { question: "これはDay 1か？", context: "姿勢を問う", purpose: "Day 1を問う" },
      { question: "これは顧客体験を向上させるか？", context: "体験を問う", purpose: "顧客体験を問う" },
      { question: "これは実験か？", context: "イノベーションを問う", purpose: "実験を促す" }
    ]
  },
  {
    id: "inamori-kazuo",
    name: "稲盛和夫",
    title: "京セラ・KDDI創業者",
    period: "1932年-",
    description: "京セラ、KDDIを創業し、JALを再建。「人生・仕事の結果＝考え方×熱意×能力」という方程式で、「利他」と「敬天愛人」を説いた。",
    approach: "人間として何が正しいかを問い、利他の心で経営する",
    keyPrinciples: [
      { name: "人生方程式", description: "結果＝考え方×熱意×能力" },
      { name: "利他", description: "自分だけでなく、他者のために行動する" },
      { name: "敬天愛人", description: "天を敬い、人を愛する" }
    ],
    questions: [
      { question: "人間として何が正しいか？", context: "個別判断を問う", purpose: "道徳的判断を問う" },
      { question: "これは利他か？", context: "動機を問う", purpose: "利他の心を問う" },
      { question: "熱意はあるか？", context: "情熱を問う", purpose: "熱意を問う" },
      { question: "考え方は正しいか？", context: "思考を問う", purpose: "考え方を問う" },
      { question: "天に恥じないか？", context: "良心を問う", purpose: "敬天愛人を問う" }
    ]
  },
  {
    id: "matsushita-konosuke",
    name: "松下幸之助",
    title: "パナソニック創業者",
    period: "1894-1989年",
    description: "松下電器（現パナソニック）を創業。「水道哲学」で、良い製品を水道の水のように安く提供することを目指した。「素直な心」を重視。",
    approach: "社会貢献を問い、素直な心で経営する",
    keyPrinciples: [
      { name: "水道哲学", description: "良い製品を水道の水のように安く提供する" },
      { name: "素直な心", description: "私心を捨て、素直に見る" },
      { name: "社会貢献", description: "企業は社会の公器" }
    ],
    questions: [
      { question: "これは社会のためになるか？", context: "社会貢献を問う", purpose: "社会貢献を問う" },
      { question: "素直な心で見ているか？", context: "姿勢を問う", purpose: "素直な心を問う" },
      { question: "これは水道の水のように届けられるか？", context: "普及を問う", purpose: "水道哲学を問う" },
      { question: "私心はないか？", context: "動機を問う", purpose: "素直な心を問う" },
      { question: "これは人々を幸せにするか？", context: "目的を問う", purpose: "社会貢献を問う" }
    ]
  },
  {
    id: "honda-soichiro",
    name: "本田宗一郎",
    title: "ホンダ創業者",
    period: "1906-1991年",
    description: "本田技研工業（現ホンダ）を創業。「三現主義」（現地・現物・現実）で、現場を重視。「失敗は成功の母」という姿勢で、挑戦を続けた。",
    approach: "現場で現物を見て現実を把握し、失敗を恐れず挑戦する",
    keyPrinciples: [
      { name: "三現主義", description: "現地・現物・現実を重視する" },
      { name: "失敗は成功の母", description: "失敗から学び、成功につなげる" },
      { name: "挑戦精神", description: "常に新しいことに挑戦する" }
    ],
    questions: [
      { question: "現場で見たか？", context: "確認を問う", purpose: "三現主義を問う" },
      { question: "これは失敗から学んだか？", context: "学習を問う", purpose: "失敗からの学びを問う" },
      { question: "これは挑戦か？", context: "姿勢を問う", purpose: "挑戦精神を問う" },
      { question: "現物を触ったか？", context: "体験を問う", purpose: "現物主義を問う" },
      { question: "これは現実か？", context: "事実を問う", purpose: "現実を問う" }
    ]
  },
  {
    id: "bill-gates",
    name: "ビル・ゲイツ",
    title: "Microsoft共同創業者",
    period: "1955年-",
    description: "Microsoftを共同創業し、PC革命を主導。「全ての机にコンピュータを」というビジョンを実現。現在は慈善活動で、データと測定を重視。",
    approach: "データで考え、測定し、長期的インパクトを問う",
    keyPrinciples: [
      { name: "データ主義", description: "データで事実を把握し、意思決定する" },
      { name: "測定と改善", description: "測定し、分析し、改善する" },
      { name: "インパクト", description: "最大のインパクトを生む領域に注力" }
    ],
    questions: [
      { question: "データは何を示しているか？", context: "データを問う", purpose: "データ主義を問う" },
      { question: "これは測定できるか？", context: "測定を問う", purpose: "測定を問う" },
      { question: "これは最大のインパクトを生むか？", context: "インパクトを問う", purpose: "インパクトを問う" },
      { question: "これは改善されているか？", context: "進歩を問う", purpose: "改善を問う" },
      { question: "これはスケールするか？", context: "規模を問う", purpose: "スケーラビリティを問う" }
    ]
  },
  {
    id: "warren-buffett",
    name: "ウォーレン・バフェット",
    title: "バークシャー・ハサウェイCEO",
    period: "1930年-",
    description: "世界最高峰の投資家。「価値投資」で、本質的価値より安い企業に長期投資。「理解できるものに投資する」という原則を貴いた。",
    approach: "本質的価値を問い、長期的に考え、理解できるものに投資する",
    keyPrinciples: [
      { name: "価値投資", description: "本質的価値より安い企業に投資する" },
      { name: "理解できるもの", description: "理解できないものには投資しない" },
      { name: "長期保有", description: "優良企業を長期保有する" }
    ],
    questions: [
      { question: "これは理解できるか？", context: "理解を問う", purpose: "理解できるものを問う" },
      { question: "これは本質的価値より安いか？", context: "価値を問う", purpose: "価値投資を問う" },
      { question: "これは10年後も価値があるか？", context: "時間を問う", purpose: "長期的価値を問う" },
      { question: "これは優良企業か？", context: "質を問う", purpose: "優良企業を問う" },
      { question: "経済的堀はあるか？", context: "競争優位性を問う", purpose: "経済的堀を問う" }
    ]
  },
  {
    id: "jack-welch",
    name: "ジャック・ウェルチ",
    title: "元GE CEO",
    period: "1935-2020年",
    description: "GEを世界最大の企業に成長させた伝説的経営者。「ナンバー1・ナンバー2戦略」で、市場で1位・2位になれない事業から撤退。「変革か死か」を説いた。",
    approach: "市場で1位・2位を問い、変革を続け、人材に投資する",
    keyPrinciples: [
      { name: "ナンバー1・ナンバー2", description: "市場で1位・2位になれない事業から撤退" },
      { name: "変革か死か", description: "変革し続けない企業は死ぬ" },
      { name: "4Eリーダーシップ", description: "Energy, Energize, Edge, Execute" }
    ],
    questions: [
      { question: "これはナンバー1・2になれるか？", context: "競争を問う", purpose: "ナンバー1・2戦略を問う" },
      { question: "これは変革か？", context: "変化を問う", purpose: "変革を問う" },
      { question: "この人材は4Eを持つか？", context: "人材を問う", purpose: "4Eリーダーシップを問う" },
      { question: "これは撤退すべきか？", context: "戦略を問う", purpose: "撤退を問う" },
      { question: "これは実行されているか？", context: "実行を問う", purpose: "Executeを問う" }
    ]
  },
  {
    id: "andy-grove",
    name: "アンディ・グローブ",
    title: "元Intel CEO",
    period: "1936-2016年",
    description: "Intelを世界最大の半導体企業に成長させた。「パラノイアだけが生き残る」という名言で、危機感を持ち続けることを説いた。「10倍の変化」を重視。",
    approach: "危機感を持ち、戦略変曲点を見極め、素早く変化する",
    keyPrinciples: [
      { name: "パラノイア", description: "常に危機感を持ち続ける" },
      { name: "戦略変曲点", description: "業界が根本的に変わる瞬間を見極める" },
      { name: "10倍の変化", description: "10倍の変化に備える" }
    ],
    questions: [
      { question: "これは戦略変曲点か？", context: "変化を問う", purpose: "戦略変曲点を問う" },
      { question: "これは10倍の変化か？", context: "規模を問う", purpose: "10倍の変化を問う" },
      { question: "私はパラノイアか？", context: "危機感を問う", purpose: "パラノイアを問う" },
      { question: "競合他社がこれをしたら？", context: "競争を問う", purpose: "競合他社の視点を問う" },
      { question: "これは素早く変化すべきか？", context: "タイミングを問う", purpose: "素早い変化を問う" }
    ]
  },
  {
    id: "larry-page",
    name: "ラリー・ペイジ",
    title: "Google共同創業者",
    period: "1973年-",
    description: "Googleを共同創業し、検索エンジンで世界を変えた。「10倍の改善ではなく10倍の変化」を問い、「月面旅行」のような大胆な目標を設定。",
    approach: "10倍の変化を問い、月面旅行のような大胆な目標を設定する",
    keyPrinciples: [
      { name: "10倍の変化", description: "10倍の改善ではなく10倍の変化を目指す" },
      { name: "月面旅行", description: "一見不可能な大胆な目標を設定する" },
      { name: "ユーザー第一", description: "ユーザーを第一に考える" }
    ],
    questions: [
      { question: "これは10倍の変化か？", context: "規模を問う", purpose: "10倍の変化を問う" },
      { question: "これは月面旅行か？", context: "大胆さを問う", purpose: "月面旅行を問う" },
      { question: "これはユーザーのためか？", context: "ユーザーを問う", purpose: "ユーザー第一を問う" },
      { question: "これは世界を変えるか？", context: "インパクトを問う", purpose: "インパクトを問う" },
      { question: "これは技術的に可能か？", context: "実現可能性を問う", purpose: "技術的可能性を問う" }
    ]
  },
  {
    id: "clayton-christensen",
    name: "クレイトン・クリステンセン",
    title: "イノベーション理論の第一人者",
    period: "1952-2020年",
    description: "Harvard Business School教授。「イノベーションのジレンマ」で、優良企業が破壊的イノベーションに負ける理由を解明。「Jobs to be Done」で、顧客が雇う仕事を問う。",
    approach: "破壊的イノベーションを問い、顧客が雇う仕事を問う",
    keyPrinciples: [
      { name: "破壊的イノベーション", description: "既存市場を破壊するイノベーション" },
      { name: "Jobs to be Done", description: "顧客が製品を雇う仕事" },
      { name: "持続的イノベーション", description: "既存製品を改善するイノベーション" }
    ],
    questions: [
      { question: "これは破壊的イノベーションか？", context: "イノベーションを問う", purpose: "破壊的イノベーションを問う" },
      { question: "顧客は何の仕事を雇うのか？", context: "顧客を問う", purpose: "Jobs to be Doneを問う" },
      { question: "これは持続的イノベーションか？", context: "イノベーションを問う", purpose: "持続的イノベーションを問う" },
      { question: "これはローエンド市場から始めるか？", context: "市場を問う", purpose: "破壊的イノベーションの始まりを問う" },
      { question: "これは既存顧客を無視するか？", context: "顧客を問う", purpose: "イノベーションのジレンマを問う" }
    ]
  },
  {
    id: "michael-porter",
    name: "マイケル・ポーター",
    title: "競争戦略論の第一人者",
    period: "1947年-",
    description: "Harvard Business School教授。「5フォース分析」と「価値連鎖」で、競争戦略を体系化。「戦略とは何をしないかを決めること」と説いた。",
    approach: "競争環境を分析し、競争優位性を問い、戦略的ポジショニングを問う",
    keyPrinciples: [
      { name: "5フォース", description: "競争環境を5つの力で分析する" },
      { name: "価値連鎖", description: "価値を生み出す活動の連鎖" },
      { name: "競争優位性", description: "コストリーダーシップか差別化" }
    ],
    questions: [
      { question: "5フォースは何か？", context: "競争環境を問う", purpose: "5フォース分析をする" },
      { question: "これは価値連鎖のどこか？", context: "価値を問う", purpose: "価値連鎖を問う" },
      { question: "これは競争優位性か？", context: "優位性を問う", purpose: "競争優位性を問う" },
      { question: "これはコストリーダーシップか差別化か？", context: "戦略を問う", purpose: "戦略的ポジショニングを問う" },
      { question: "これは何をしないか？", context: "戦略を問う", purpose: "戦略的選択を問う" }
    ]
  },
  {
    id: "jim-collins",
    name: "ジム・コリンズ",
    title: "優良企業研究の第一人者",
    period: "1958年-",
    description: "経営学者・作家。「ビジョナリー・カンパニー」で、優良企業の条件を研究。「針鼠の概念」で、情熱・卓越・経済性の交差点を問う。",
    approach: "優良企業の条件を問い、針鼠の概念を問い、弾み車を回す",
    keyPrinciples: [
      { name: "針鼠の概念", description: "情熱・卓越・経済性の交差点" },
      { name: "弾み車効果", description: "一貫した努力が大きな効果を生む" },
      { name: "第5レベルリーダーシップ", description: "謙虚さと意志の強さ" }
    ],
    questions: [
      { question: "これは針鼠の概念か？", context: "戦略を問う", purpose: "針鼠の概念を問う" },
      { question: "これは弾み車を回すか？", context: "努力を問う", purpose: "弾み車効果を問う" },
      { question: "これは情熱・卓越・経済性の交差点か？", context: "戦略を問う", purpose: "三つの円を問う" },
      { question: "これは第5レベルリーダーシップか？", context: "リーダーシップを問う", purpose: "第5レベルを問う" },
      { question: "これは良から偉大への跳躍か？", context: "変化を問う", purpose: "跳躍を問う" }
    ]
  },
  {
    id: "henry-mintzberg",
    name: "ヘンリー・ミンツバーグ",
    title: "経営学の巨人",
    period: "1939年-",
    description: "McGill大学教授。「戦略サファリ」で、計画された戦略と创発的戦略を区別。マネジャーの10の役割を提示し、経営学教育を批判。",
    approach: "計画された戦略と创発的戦略を問い、実践を重視する",
    keyPrinciples: [
      { name: "初発的戦略", description: "実践の中から生まれる戦略" },
      { name: "マネジャーの10の役割", description: "マネジャーの実際の仕事" },
      { name: "クラフティング戦略", description: "職人のように戦略を作る" }
    ],
    questions: [
      { question: "これは計画された戦略か初発的戦略か？", context: "戦略を問う", purpose: "戦略の種類を問う" },
      { question: "これは実践から生まれたか？", context: "起源を問う", purpose: "初発的戦略を問う" },
      { question: "マネジャーはどの役割を果たすか？", context: "役割を問う", purpose: "10の役割を問う" },
      { question: "これはクラフティングか？", context: "戦略形成を問う", purpose: "クラフティング戦略を問う" },
      { question: "これは理論か実践か？", context: "知識を問う", purpose: "実践を問う" }
    ]
  },
  {
    id: "gary-hamel",
    name: "ゲイリー・ハメル",
    title: "経営イノベーションの第一人者",
    period: "1954年-",
    description: "経営学者・コンサルタント。「コア・コンピタンス」と「経営イノベーション」を提唱。「未来を発明する」ことを説き、既存の経営モデルを破壊することを促す。",
    approach: "未来を発明し、コア・コンピタンスを問い、経営イノベーションを問う",
    keyPrinciples: [
      { name: "コア・コンピタンス", description: "企業の中核的能力" },
      { name: "経営イノベーション", description: "経営モデル自体を革新する" },
      { name: "未来を発明する", description: "未来を予測するのではなく、創造する" }
    ],
    questions: [
      { question: "これはコア・コンピタンスか？", context: "能力を問う", purpose: "コア・コンピタンスを問う" },
      { question: "これは経営イノベーションか？", context: "イノベーションを問う", purpose: "経営イノベーションを問う" },
      { question: "これは未来を発明するか？", context: "未来を問う", purpose: "未来を発明する" },
      { question: "これは経営モデルを破壊するか？", context: "破壊を問う", purpose: "経営モデルの破壊を問う" },
      { question: "これは戦略的意図か？", context: "戦略を問う", purpose: "戦略的意図を問う" }
    ]
  },
  {
    id: "albert-einstein",
    name: "アルベルト・アインシュタイン",
    title: "理論物理学者",
    period: "1879-1955年",
    description: "相対性理論で時空の概念を革命。「想像力は知識よりも重要」と説き、「思考実験」で本質を問い続けた。「神はサイコロを振らない」という信念で、自然の美しい秩序を追求。",
    approach: "本質を問い、想像力で思考実験し、シンプルさを追求する",
    keyPrinciples: [
      { name: "思考実験", description: "頭の中で実験し、本質を問う" },
      { name: "想像力", description: "想像力は知識よりも重要" },
      { name: "シンプルさ", description: "可能な限りシンプルに、しかし簡素すぎないように" }
    ],
    questions: [
      { question: "これは本質か？", context: "本質を問う", purpose: "本質を問う" },
      { question: "これはシンプルか？", context: "シンプルさを問う", purpose: "シンプルさを問う" },
      { question: "これは想像実験できるか？", context: "思考を問う", purpose: "思考実験を問う" },
      { question: "これは美しいか？", context: "美しさを問う", purpose: "自然の美しさを問う" },
      { question: "これは直観に反するか？", context: "直観を問う", purpose: "直観を疑う" }
    ]
  },
  {
    id: "richard-feynman",
    name: "リチャード・ファインマン",
    title: "理論物理学者",
    period: "1918-1988年",
    description: "量子電磁力学でノーベル賞。「本当に理解しているか？」を問い続けた。「理解するとは、簡単な言葉で説明できること」と説いた。好奇心と疑問を重視。",
    approach: "本当に理解しているかを問い、簡単な言葉で説明し、好奇心を持つ",
    keyPrinciples: [
      { name: "本当の理解", description: "簡単な言葉で説明できるか" },
      { name: "好奇心", description: "子供のような好奇心を持つ" },
      { name: "疑問", description: "全てを疑い、自分で考える" }
    ],
    questions: [
      { question: "本当に理解しているか？", context: "理解を問う", purpose: "本当の理解を問う" },
      { question: "簡単な言葉で説明できるか？", context: "説明を問う", purpose: "簡単な説明を問う" },
      { question: "これは好奇心からか？", context: "動機を問う", purpose: "好奇心を問う" },
      { question: "これは本当か？", context: "真実を問う", purpose: "疑問を問う" },
      { question: "これは自分で考えたか？", context: "思考を問う", purpose: "自分で考えることを問う" }
    ]
  },
  {
    id: "charles-darwin",
    name: "チャールズ・ダーウィン",
    title: "自然学者",
    period: "1809-1882年",
    description: "進化論で生物学を革命。「種の起源」で、自然選択を提唱。長年の観察と記録で、小さな変化が大きな違いを生むことを示した。仮説を立て、検証する姿勢を貴いた。",
    approach: "観察し、記録し、仮説を立て、検証する",
    keyPrinciples: [
      { name: "自然選択", description: "環境に適応したものが生き残る" },
      { name: "観察と記録", description: "丁寧に観察し、詳細に記録する" },
      { name: "漸進的変化", description: "小さな変化が積み重なり、大きな違いを生む" }
    ],
    questions: [
      { question: "これは適応か？", context: "適応を問う", purpose: "自然選択を問う" },
      { question: "これは観察されたか？", context: "観察を問う", purpose: "観察を問う" },
      { question: "これは小さな変化か？", context: "変化を問う", purpose: "漸進的変化を問う" },
      { question: "これは仮説か？", context: "仮説を問う", purpose: "仮説を問う" },
      { question: "これは検証されたか？", context: "検証を問う", purpose: "検証を問う" }
    ]
  },
  {
    id: "galileo-galilei",
    name: "ガリレオ・ガリレイ",
    title: "天文学者・物理学者",
    period: "1564-1642年",
    description: "近代科学の父。望遠鏡で天体を観察し、地動説を支持。「それでも地球は回る」という姿勢で、権威よりも事実を重視。実験と数学で自然を理解することを示した。",
    approach: "権威よりも事実を問い、実験と数学で検証する",
    keyPrinciples: [
      { name: "事実優先", description: "権威よりも事実を優先する" },
      { name: "実験", description: "実験で検証する" },
      { name: "数学", description: "自然は数学の言葉で書かれている" }
    ],
    questions: [
      { question: "これは事実か？", context: "事実を問う", purpose: "事実を問う" },
      { question: "これは実験で検証されたか？", context: "検証を問う", purpose: "実験を問う" },
      { question: "これは権威か事実か？", context: "権威を問う", purpose: "事実優先を問う" },
      { question: "これは数学で表せるか？", context: "数学を問う", purpose: "数学を問う" },
      { question: "これは観察されたか？", context: "観察を問う", purpose: "観察を問う" }
    ]
  },
  {
    id: "isaac-newton",
    name: "アイザック・ニュートン",
    title: "物理学者・数学者",
    period: "1643-1727年",
    description: "万有引力の法則と運動の三法則で、古典力学を確立。微積分を発明。「巨人の肩の上に立つ」という謙虚さで、先人の業績を尊重。法則と数学で自然を統一的に理解した。",
    approach: "法則を問い、数学で表現し、先人の業績を尊重する",
    keyPrinciples: [
      { name: "法則", description: "自然には法則がある" },
      { name: "数学", description: "法則を数学で表現する" },
      { name: "巨人の肩", description: "先人の業績の上に立つ" }
    ],
    questions: [
      { question: "これは法則か？", context: "法則を問う", purpose: "法則を問う" },
      { question: "これは数学で表せるか？", context: "数学を問う", purpose: "数学を問う" },
      { question: "先人は何をしたか？", context: "先人を問う", purpose: "巨人の肩を問う" },
      { question: "これは統一的か？", context: "統一を問う", purpose: "統一的理解を問う" },
      { question: "これは普遍的か？", context: "普遍性を問う", purpose: "普遍性を問う" }
    ]
  },
  {
    id: "leonardo-da-vinci",
    name: "レオナルド・ダ・ヴィンチ",
    title: "芸術家・発明家・科学者",
    period: "1452-1519年",
    description: "ルネサンスの天才。絵画、彫刻、建築、科学、工学、解剖学など、あらゆる分野で業績を残した。「好奇心」と「観察」で、自然の本質を問い続けた。芸術と科学を融合した。",
    approach: "好奇心を持ち、観察し、芸術と科学を融合する",
    keyPrinciples: [
      { name: "好奇心", description: "子供のような好奇心を持つ" },
      { name: "観察", description: "丁寧に観察し、詳細に記録する" },
      { name: "芸術と科学の融合", description: "芸術と科学を分けない" }
    ],
    questions: [
      { question: "これは好奇心からか？", context: "動機を問う", purpose: "好奇心を問う" },
      { question: "これは観察されたか？", context: "観察を問う", purpose: "観察を問う" },
      { question: "これは芸術か科学か？", context: "分類を問う", purpose: "融合を問う" },
      { question: "これは美しいか？", context: "美しさを問う", purpose: "美しさを問う" },
      { question: "これは機能するか？", context: "機能を問う", purpose: "機能を問う" }
    ]
  },
  {
    id: "william-shakespeare",
    name: "ウィリアム・シェイクスピア",
    title: "劇作家・詩人",
    period: "1564-1616年",
    description: "英文学史上最大の劇作家。「ハムレット」「リア王」などで、人間の本質を描いた。「生きるべきか死ぬべきか」という問いで、人生の意味を問う。人間の内面を深く問い続けた。",
    approach: "人間の本質を問い、内面を探り、人生の意味を問う",
    keyPrinciples: [
      { name: "人間の本質", description: "人間の本質を描く" },
      { name: "内面の探究", description: "人間の内面を深く探る" },
      { name: "人生の意味", description: "人生の意味を問う" }
    ],
    questions: [
      { question: "生きるべきか死ぬべきか？", context: "人生を問う", purpose: "人生の意味を問う" },
      { question: "これは人間の本質か？", context: "本質を問う", purpose: "人間の本質を問う" },
      { question: "これは内面か？", context: "内面を問う", purpose: "内面を問う" },
      { question: "これは悲劇か喜劇か？", context: "物語を問う", purpose: "物語を問う" },
      { question: "これは運命か自由意志か？", context: "自由を問う", purpose: "自由意志を問う" }
    ]
  },
  {
    id: "johann-wolfgang-von-goethe",
    name: "ヨハン・ヴォルフガング・フォン・ゲーテ",
    title: "詩人・小説家・科学者",
    period: "1749-1832年",
    description: "ドイツ文学の巨人。「ファウスト」で、人間の成長と救済を描いた。「知るだけでは不十分、実践せよ」と説き、文学と科学を統合。「永遠に女性的なるもの」を追求した。",
    approach: "知識と実践を統合し、成長を問い、理想を追求する",
    keyPrinciples: [
      { name: "知識と実践", description: "知るだけでは不十分、実践せよ" },
      { name: "成長", description: "人間は成長し続ける" },
      { name: "理想追求", description: "永遠に理想を追求する" }
    ],
    questions: [
      { question: "これは実践されているか？", context: "実践を問う", purpose: "実践を問う" },
      { question: "これは成長か？", context: "成長を問う", purpose: "成長を問う" },
      { question: "これは理想か？", context: "理想を問う", purpose: "理想を問う" },
      { question: "これは知識か実践か？", context: "知識を問う", purpose: "知識と実践を問う" },
      { question: "これは永遠に女性的なるものか？", context: "理想を問う", purpose: "理想を問う" }
    ]
  },
  {
    id: "sigmund-freud",
    name: "ジークムント・フロイト",
    title: "精神分析学の祖",
    period: "1856-1939年",
    description: "精神分析を確立。「無意識」を発見し、人間の内面を探究。「夢は無意識への王道」と説き、「抑圧」と「防衛機制」を提唱。人間の深層を問い続けた。",
    approach: "無意識を問い、抑圧を問い、内面を探究する",
    keyPrinciples: [
      { name: "無意識", description: "無意識が行動を支配する" },
      { name: "抑圧", description: "抑圧された欲望が症状を生む" },
      { name: "防衛機制", description: "心は自分を守るために防衛する" }
    ],
    questions: [
      { question: "これは無意識か？", context: "無意識を問う", purpose: "無意識を問う" },
      { question: "これは抑圧されているか？", context: "抑圧を問う", purpose: "抑圧を問う" },
      { question: "これは防衛機制か？", context: "防衛を問う", purpose: "防衛機制を問う" },
      { question: "これは夢か？", context: "夢を問う", purpose: "夢を問う" },
      { question: "これは欲望か？", context: "欲望を問う", purpose: "欲望を問う" }
    ]
  },
  {
    id: "carl-jung",
    name: "カール・ユング",
    title: "分析心理学の祖",
    period: "1875-1961年",
    description: "フロイトの弟子から独立し、分析心理学を確立。「集合的無意識」と「元型」を提唱。「個性化」（自己実現）を人生の目標とした。内面の統合を問い続けた。",
    approach: "集合的無意識を問い、元型を問い、個性化を問う",
    keyPrinciples: [
      { name: "集合的無意識", description: "人類共通の無意識" },
      { name: "元型", description: "集合的無意識のパターン" },
      { name: "個性化", description: "自己実現のプロセス" }
    ],
    questions: [
      { question: "これは元型か？", context: "元型を問う", purpose: "元型を問う" },
      { question: "これは個性化か？", context: "個性化を問う", purpose: "個性化を問う" },
      { question: "これは集合的無意識か？", context: "無意識を問う", purpose: "集合的無意識を問う" },
      { question: "これは影か？", context: "影を問う", purpose: "影を問う" },
      { question: "これは自己実現か？", context: "自己実現を問う", purpose: "自己実現を問う" }
    ]
  },
  {
    id: "maria-montessori",
    name: "マリア・モンテッソーリ",
    title: "教育学者・医師",
    period: "1870-1952年",
    description: "モンテッソーリ教育を確立。「子供は自分で学ぶ力を持つ」と説き、「教えるのではなく、環境を整える」ことを重視。子供の自主性と集中力を尊重した。",
    approach: "子供の自主性を尊重し、環境を整え、観察する",
    keyPrinciples: [
      { name: "自主性", description: "子供は自分で学ぶ力を持つ" },
      { name: "準備された環境", description: "教えるのではなく、環境を整える" },
      { name: "観察", description: "子供を丁寧に観察する" }
    ],
    questions: [
      { question: "これは自主性を尊重するか？", context: "自主性を問う", purpose: "自主性を問う" },
      { question: "これは環境か？", context: "環境を問う", purpose: "準備された環境を問う" },
      { question: "これは観察されたか？", context: "観察を問う", purpose: "観察を問う" },
      { question: "これは教えるか環境か？", context: "教育を問う", purpose: "環境を問う" },
      { question: "これは集中しているか？", context: "集中を問う", purpose: "集中を問う" }
    ]
  },
  {
    id: "thomas-edison",
    name: "トーマス・エジソン",
    title: "発明家",
    period: "1847-1931年",
    description: "電球、蓄音機、映画など、1000以上の発明。「天才は1%のひらめきと99%の努力」と説き、「失敗ではなく、うまくいかない方法を見つけた」という姿勢で、試行錯誤を続けた。",
    approach: "試行錯誤を繰り返し、失敗から学び、努力を続ける",
    keyPrinciples: [
      { name: "試行錯誤", description: "何度も試し、失敗から学ぶ" },
      { name: "努力", description: "天才は1%のひらめきと99%の努力" },
      { name: "実用性", description: "実用的な発明を目指す" }
    ],
    questions: [
      { question: "これは試したか？", context: "試行を問う", purpose: "試行錯誤を問う" },
      { question: "これは失敗か？", context: "失敗を問う", purpose: "失敗から学ぶ" },
      { question: "これは努力したか？", context: "努力を問う", purpose: "努力を問う" },
      { question: "これは実用的か？", context: "実用性を問う", purpose: "実用性を問う" },
      { question: "これはうまくいかない方法か？", context: "失敗を問う", purpose: "失敗を問う" }
    ]
  },
  {
    id: "nikola-tesla",
    name: "ニコラ・テスラ",
    title: "発明家・電気工学者",
    period: "1856-1943年",
    description: "交流電気、ラジオ、リモコンなどを発明。「未来を発明する」というビジョンで、先駆的な発明を続けた。「想像力」と「直観」を重視し、頭の中で設計した。",
    approach: "未来を想像し、直観で設計し、先駆的に発明する",
    keyPrinciples: [
      { name: "想像力", description: "頭の中で設計する" },
      { name: "直観", description: "直観を信じる" },
      { name: "未来ビジョン", description: "未来を発明する" }
    ],
    questions: [
      { question: "これは未来か？", context: "未来を問う", purpose: "未来を問う" },
      { question: "これは想像できるか？", context: "想像を問う", purpose: "想像力を問う" },
      { question: "これは直観か？", context: "直観を問う", purpose: "直観を問う" },
      { question: "これは先駆的か？", context: "先駆性を問う", purpose: "先駆性を問う" },
      { question: "これは頭の中で設計されたか？", context: "設計を問う", purpose: "想像力を問う" }
    ]
  },
  {
    id: "dale-carnegie",
    name: "デール・カーネギー",
    title: "作家・講演家",
    period: "1888-1955年",
    description: "「人を動かす」で、人間関係の原則を提示。「人は自分に関心がある」と説き、「相手の立場で考える」ことを重視。「名前を覚える」「笑顔」「聴く」を強調した。",
    approach: "相手の立場で考え、聴き、認める",
    keyPrinciples: [
      { name: "相手の立場", description: "相手の立場で考える" },
      { name: "聴く", description: "話すよりも聴く" },
      { name: "認める", description: "人は認められたい" }
    ],
    questions: [
      { question: "これは相手の立場か？", context: "立場を問う", purpose: "相手の立場を問う" },
      { question: "これは聴いているか？", context: "傾聴を問う", purpose: "聴くことを問う" },
      { question: "これは認めているか？", context: "承認を問う", purpose: "認めることを問う" },
      { question: "これは名前を覚えているか？", context: "名前を問う", purpose: "名前を問う" },
      { question: "これは笑顔か？", context: "笑顔を問う", purpose: "笑顔を問う" }
    ]
  }
];

// 偉人の質問を質問ライブラリ用に変換
export const masterQuestions = masters.flatMap(master =>
  master.questions.map((q, index) => ({
    id: `${master.id}-${index}`,
    category: `${master.name}の質問`,
    question: q.question,
    context: q.context,
    purpose: q.purpose,
    master: master.name
  }))
);
