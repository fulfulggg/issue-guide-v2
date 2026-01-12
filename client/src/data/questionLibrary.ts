import { masterQuestions } from "./masters";

export interface LibraryQuestion {
  id: number;
  category: string;
  question: string;
  level: 1 | 2 | 3;
  tags: string[];
}

// 偉人の質問をライブラリ形式に変換
const masterLibraryQuestions: LibraryQuestion[] = masterQuestions.map((mq, index) => ({
  id: 1000 + index,
  category: mq.category,
  question: mq.question,
  level: 3 as 1 | 2 | 3,
  tags: [mq.master, mq.purpose]
}));

const baseQuestions: LibraryQuestion[] = [
  // 明確化の質問
  { id: 1, category: "明確化の質問", question: "そもそも何を達成したいのか？", level: 2, tags: ["目的", "ゴール"] },
  { id: 2, category: "明確化の質問", question: "成功とは具体的にどんな状態か？", level: 2, tags: ["目的", "定義"] },
  { id: 3, category: "明確化の質問", question: "誰のための問題解決なのか？", level: 2, tags: ["対象", "ステークホルダー"] },
  { id: 4, category: "明確化の質問", question: "この問題が解決されたら、何が変わるのか？", level: 2, tags: ["影響", "変化"] },
  { id: 5, category: "明確化の質問", question: "最も重要な指標は何か？", level: 2, tags: ["KPI", "測定"] },
  { id: 6, category: "明確化の質問", question: "なぜ今、この問題に取り組むのか？", level: 2, tags: ["タイミング", "優先順位"] },
  { id: 7, category: "明確化の質問", question: "この目標を達成できなかったら、何が起こるか？", level: 2, tags: ["リスク", "影響"] },
  { id: 8, category: "明確化の質問", question: "本当に解決すべき問題は何か？", level: 2, tags: ["本質", "問題定義"] },
  { id: 9, category: "明確化の質問", question: "誰が最終的な意思決定者なのか？", level: 1, tags: ["責任", "権限"] },
  { id: 10, category: "明確化の質問", question: "この取り組みの期限はいつか？", level: 1, tags: ["スケジュール", "期限"] },
  { id: 11, category: "明確化の質問", question: "利用可能なリソースは何か？", level: 1, tags: ["リソース", "制約"] },
  { id: 12, category: "明確化の質問", question: "何を測定すれば進捗が分かるか？", level: 2, tags: ["測定", "進捗"] },
  { id: 13, category: "明確化の質問", question: "この目標は他の目標とどう関連しているか？", level: 2, tags: ["関連性", "全体像"] },
  { id: 14, category: "明確化の質問", question: "最小限の成功とは何か？", level: 2, tags: ["MVP", "最小単位"] },
  { id: 15, category: "明確化の質問", question: "この問題を一言で表すと？", level: 2, tags: ["要約", "本質"] },

  // 前提を疑う質問
  { id: 16, category: "前提を疑う質問", question: "我々は何を思い込みとして抱えているのか？", level: 2, tags: ["前提", "思い込み"] },
  { id: 17, category: "前提を疑う質問", question: "この「常識」は本当に正しいのか？", level: 2, tags: ["常識", "検証"] },
  { id: 18, category: "前提を疑う質問", question: "なぜこの方法でなければならないのか？", level: 2, tags: ["方法", "選択肢"] },
  { id: 19, category: "前提を疑う質問", question: "誰がこのルールを決めたのか？", level: 2, tags: ["ルール", "起源"] },
  { id: 20, category: "前提を疑う質問", question: "この前提が間違っていたら、何が見えてくるか？", level: 3, tags: ["前提", "視点転換"] },
  { id: 21, category: "前提を疑う質問", question: "業界の常識で、実は間違っているものは何か？", level: 2, tags: ["業界", "常識"] },
  { id: 22, category: "前提を疑う質問", question: "この言葉の定義は、みんな同じか？", level: 2, tags: ["定義", "言葉"] },
  { id: 23, category: "前提を疑う質問", question: "過去の成功体験が、今の足かせになっていないか？", level: 3, tags: ["成功体験", "バイアス"] },
  { id: 24, category: "前提を疑う質問", question: "なぜこれが「当たり前」なのか？", level: 2, tags: ["当たり前", "疑問"] },
  { id: 25, category: "前提を疑う質問", question: "この仮定が崩れたら、何が起こるか？", level: 2, tags: ["仮定", "シナリオ"] },
  { id: 26, category: "前提を疑う質問", question: "誰も疑問に思わないことは何か？", level: 2, tags: ["盲点", "常識"] },
  { id: 27, category: "前提を疑う質問", question: "この問題の「前提」を3つ挙げるとしたら？", level: 2, tags: ["前提", "列挙"] },
  { id: 28, category: "前提を疑う質問", question: "もし全く新しい視点で見たら、何が見えるか？", level: 3, tags: ["視点", "革新"] },
  { id: 29, category: "前提を疑う質問", question: "この制約は本当に必要なのか？", level: 2, tags: ["制約", "必要性"] },
  { id: 30, category: "前提を疑う質問", question: "なぜ誰もこれを変えようとしないのか？", level: 2, tags: ["変化", "抵抗"] },

  // 二次効果の質問
  { id: 31, category: "二次効果の質問", question: "これを実行した先にどんな新しい問題が出るか？", level: 2, tags: ["影響", "問題"] },
  { id: 32, category: "二次効果の質問", question: "この決定が5年後にどんな影響を与えるか？", level: 2, tags: ["長期", "影響"] },
  { id: 33, category: "二次効果の質問", question: "誰が意図しない影響を受けるか？", level: 2, tags: ["ステークホルダー", "影響"] },
  { id: 34, category: "二次効果の質問", question: "この解決策が新たな問題を生まないか？", level: 2, tags: ["解決策", "副作用"] },
  { id: 35, category: "二次効果の質問", question: "間接的に影響を受ける人は誰か？", level: 2, tags: ["間接影響", "関係者"] },
  { id: 36, category: "二次効果の質問", question: "この変化が連鎖的に何を引き起こすか？", level: 2, tags: ["連鎖", "波及"] },
  { id: 37, category: "二次効果の質問", question: "最悪のシナリオは何か？", level: 2, tags: ["リスク", "最悪"] },
  { id: 38, category: "二次効果の質問", question: "この成功が次にどんな課題を生むか？", level: 2, tags: ["成功", "次の課題"] },
  { id: 39, category: "二次効果の質問", question: "システム全体にどんな影響があるか？", level: 2, tags: ["システム", "全体"] },
  { id: 40, category: "二次効果の質問", question: "この行動が文化にどう影響するか？", level: 2, tags: ["文化", "影響"] },
  { id: 41, category: "二次効果の質問", question: "予期しない良い結果は何か？", level: 2, tags: ["副次効果", "ポジティブ"] },
  { id: 42, category: "二次効果の質問", question: "この変化に抵抗する人は誰か？なぜか？", level: 2, tags: ["抵抗", "理由"] },
  { id: 43, category: "二次効果の質問", question: "3つ先の影響まで考えたか？", level: 2, tags: ["多段階", "影響"] },
  { id: 44, category: "二次効果の質問", question: "この決定が他のプロジェクトにどう影響するか？", level: 2, tags: ["相互影響", "プロジェクト"] },
  { id: 45, category: "二次効果の質問", question: "長期的なコストは何か？", level: 2, tags: ["コスト", "長期"] },

  // 制約解除の質問
  { id: 46, category: "制約解除の質問", question: "もし制約がなかったら、どうするか？", level: 3, tags: ["制約", "理想"] },
  { id: 47, category: "制約解除の質問", question: "予算が10倍あったら、何をするか？", level: 3, tags: ["予算", "可能性"] },
  { id: 48, category: "制約解除の質問", question: "時間が無限にあったら、どうするか？", level: 3, tags: ["時間", "理想"] },
  { id: 49, category: "制約解除の質問", question: "失敗が存在しないとしたら、何を試すか？", level: 3, tags: ["失敗", "挑戦"] },
  { id: 50, category: "制約解除の質問", question: "技術的な制約がなかったら、何ができるか？", level: 3, tags: ["技術", "可能性"] },
  { id: 51, category: "制約解除の質問", question: "誰の許可も必要なかったら、何をするか？", level: 3, tags: ["権限", "自由"] },
  { id: 52, category: "制約解除の質問", question: "完璧な人材がいたら、どんなチームを作るか？", level: 3, tags: ["人材", "理想"] },
  { id: 53, category: "制約解除の質問", question: "この制約は本当に動かせないのか？", level: 2, tags: ["制約", "検証"] },
  { id: 54, category: "制約解除の質問", question: "ゼロから始められるとしたら、何をするか？", level: 3, tags: ["ゼロベース", "設計"] },
  { id: 55, category: "制約解除の質問", question: "最も理想的な解決策は何か？", level: 2, tags: ["理想", "解決策"] },
  { id: 56, category: "制約解除の質問", question: "もし魔法が使えたら、何を実現するか？", level: 3, tags: ["理想", "想像"] },
  { id: 57, category: "制約解除の質問", question: "規制がなかったら、どんなサービスを作るか？", level: 3, tags: ["規制", "革新"] },
  { id: 58, category: "制約解除の質問", question: "この制約を逆に強みにできないか？", level: 2, tags: ["制約", "転換"] },
  { id: 59, category: "制約解除の質問", question: "全てのリソースにアクセスできたら、何をするか？", level: 3, tags: ["リソース", "可能性"] },
  { id: 60, category: "制約解除の質問", question: "もし世界中の誰とでも協力できたら？", level: 3, tags: ["協力", "ネットワーク"] },

  // 視点変更の質問
  { id: 61, category: "視点変更の質問", question: "完全な外部の人なら、どう判断するか？", level: 2, tags: ["外部視点", "客観性"] },
  { id: 62, category: "視点変更の質問", question: "顧客の立場だったら、どう感じるか？", level: 2, tags: ["顧客", "共感"] },
  { id: 63, category: "視点変更の質問", question: "競合はこれをどう見ているか？", level: 2, tags: ["競合", "視点"] },
  { id: 64, category: "視点変更の質問", question: "10年後の自分なら、どうアドバイスするか？", level: 3, tags: ["未来", "アドバイス"] },
  { id: 65, category: "視点変更の質問", question: "この分野の第一人者なら、何と言うか？", level: 2, tags: ["専門家", "意見"] },
  { id: 66, category: "視点変更の質問", question: "子供に説明するとしたら、どう言うか？", level: 2, tags: ["シンプル化", "本質"] },
  { id: 67, category: "視点変更の質問", question: "反対意見を持つ人の視点は何か？", level: 2, tags: ["反対", "理解"] },
  { id: 68, category: "視点変更の質問", question: "全く違う業界の人なら、どう解決するか？", level: 2, tags: ["異業種", "発想"] },
  { id: 69, category: "視点変更の質問", question: "歴史上の偉人なら、どう考えるか？", level: 2, tags: ["歴史", "知恵"] },
  { id: 70, category: "視点変更の質問", question: "最も影響を受ける人の視点は？", level: 2, tags: ["影響", "当事者"] },
  { id: 71, category: "視点変更の質問", question: "もし性別や年齢が違ったら、どう見えるか？", level: 2, tags: ["多様性", "視点"] },
  { id: 72, category: "視点変更の質問", question: "システム全体から見たら、これはどう見えるか？", level: 2, tags: ["全体", "俯瞰"] },
  { id: 73, category: "視点変更の質問", question: "敵対者の視点に立ったら、何が見えるか？", level: 2, tags: ["対立", "理解"] },
  { id: 74, category: "視点変更の質問", question: "未来の世代は、これをどう評価するか？", level: 3, tags: ["未来", "評価"] },
  { id: 75, category: "視点変更の質問", question: "もし立場が逆だったら、どう感じるか？", level: 2, tags: ["逆転", "共感"] },

  // 根本原因の質問
  { id: 76, category: "根本原因の質問", question: "なぜ？（5回繰り返す）", level: 2, tags: ["根本原因", "深掘り"] },
  { id: 77, category: "根本原因の質問", question: "本当の問題は何か？", level: 2, tags: ["本質", "問題"] },
  { id: 78, category: "根本原因の質問", question: "この症状の根本原因は何か？", level: 2, tags: ["原因", "症状"] },
  { id: 79, category: "根本原因の質問", question: "なぜこの問題が繰り返されるのか？", level: 2, tags: ["繰り返し", "パターン"] },
  { id: 80, category: "根本原因の質問", question: "表面的な問題の下に何があるか？", level: 2, tags: ["深層", "本質"] },
  { id: 81, category: "根本原因の質問", question: "この問題を生み出しているシステムは何か？", level: 2, tags: ["システム", "構造"] },
  { id: 82, category: "根本原因の質問", question: "誰が本当にこの問題を抱えているのか？", level: 2, tags: ["当事者", "問題"] },
  { id: 83, category: "根本原因の質問", question: "この問題はいつから存在しているのか？", level: 1, tags: ["起源", "歴史"] },
  { id: 84, category: "根本原因の質問", question: "何がこの状況を維持しているのか？", level: 2, tags: ["維持", "メカニズム"] },
  { id: 85, category: "根本原因の質問", question: "根本原因を取り除いたら、何が起こるか？", level: 2, tags: ["解決", "影響"] },
  { id: 86, category: "根本原因の質問", question: "この問題の「真の」コストは何か？", level: 2, tags: ["コスト", "影響"] },
  { id: 87, category: "根本原因の質問", question: "なぜ今まで解決されなかったのか？", level: 2, tags: ["障害", "理由"] },
  { id: 88, category: "根本原因の質問", question: "この問題を複雑にしているものは何か？", level: 2, tags: ["複雑性", "要因"] },
  { id: 89, category: "根本原因の質問", question: "最も単純な説明は何か？", level: 2, tags: ["シンプル", "本質"] },
  { id: 90, category: "根本原因の質問", question: "この問題の根っこにある信念は何か？", level: 3, tags: ["信念", "価値観"] },

  // 長期視点の質問
  { id: 91, category: "長期視点の質問", question: "このまま変わらなかったら5年後どうなるか？", level: 3, tags: ["未来", "予測"] },
  { id: 92, category: "長期視点の質問", question: "10年後、これはどう評価されるか？", level: 2, tags: ["評価", "長期"] },
  { id: 93, category: "長期視点の質問", question: "今日の決定が10年後にどう影響するか？", level: 2, tags: ["決定", "影響"] },
  { id: 94, category: "長期視点の質問", question: "毎日1%改善したら、1年後どうなるか？", level: 2, tags: ["改善", "複利"] },
  { id: 95, category: "長期視点の質問", question: "この習慣を10年続けたら、どんな人になるか？", level: 3, tags: ["習慣", "成長"] },
  { id: 96, category: "長期視点の質問", question: "何を残したいか？", level: 3, tags: ["レガシー", "価値"] },
  { id: 97, category: "長期視点の質問", question: "今やめるべきことは何か？", level: 2, tags: ["優先順位", "選択"] },
  { id: 98, category: "長期視点の質問", question: "短期的な痛みと長期的な利益、どちらを選ぶか？", level: 2, tags: ["トレードオフ", "選択"] },
  { id: 99, category: "長期視点の質問", question: "この投資は何年で回収できるか？", level: 1, tags: ["投資", "ROI"] },
  { id: 100, category: "長期視点の質問", question: "持続可能な方法は何か？", level: 2, tags: ["持続可能性", "方法"] },
  { id: 101, category: "長期視点の質問", question: "次の世代に何を伝えたいか？", level: 3, tags: ["世代", "継承"] },
  { id: 102, category: "長期視点の質問", question: "この決定は未来の選択肢を増やすか、減らすか？", level: 2, tags: ["選択肢", "柔軟性"] },
  { id: 103, category: "長期視点の質問", question: "長期的に最も重要なことは何か？", level: 2, tags: ["重要性", "優先順位"] },
  { id: 104, category: "長期視点の質問", question: "今の行動は、理想の未来につながっているか？", level: 3, tags: ["整合性", "未来"] },
  { id: 105, category: "長期視点の質問", question: "時間が経っても変わらない価値は何か？", level: 3, tags: ["価値", "普遍性"] },

  // 恐れを暴く質問
  { id: 106, category: "恐れを暴く質問", question: "何を恐れて行動できていないのか？", level: 3, tags: ["恐れ", "行動"] },
  { id: 107, category: "恐れを暴く質問", question: "今、避けている問いは何か？", level: 3, tags: ["回避", "問い"] },
  { id: 108, category: "恐れを暴く質問", question: "失敗しないとしたら、何を選ぶか？", level: 3, tags: ["失敗", "選択"] },
  { id: 109, category: "恐れを暴く質問", question: "この不安の本質は何か？", level: 3, tags: ["不安", "本質"] },
  { id: 110, category: "恐れを暴く質問", question: "何があれば、一歩踏み出せるか？", level: 3, tags: ["勇気", "条件"] },
  { id: 111, category: "恐れを暴く質問", question: "最悪の事態とは何で、それにどう備えるか？", level: 2, tags: ["最悪", "準備"] },
  { id: 112, category: "恐れを暴く質問", question: "この恐れは現実的か、想像上のものか？", level: 3, tags: ["恐れ", "現実"] },
  { id: 113, category: "恐れを暴く質問", question: "失敗から何を学べるか？", level: 2, tags: ["失敗", "学び"] },
  { id: 114, category: "恐れを暴く質問", question: "何を失うことを恐れているのか？", level: 3, tags: ["喪失", "恐れ"] },
  { id: 115, category: "恐れを暴く質問", question: "この恐れが自分を守っているものは何か？", level: 3, tags: ["防衛", "保護"] },
  { id: 116, category: "恐れを暴く質問", question: "勇気を出すために必要なものは何か？", level: 3, tags: ["勇気", "必要"] },
  { id: 117, category: "恐れを暴く質問", question: "この恐れを乗り越えた先に何があるか？", level: 3, tags: ["克服", "報酬"] },
  { id: 118, category: "恐れを暴く質問", question: "誰の期待を恐れているのか？", level: 3, tags: ["期待", "他者"] },
  { id: 119, category: "恐れを暴く質問", question: "この恐れはいつから持っているのか？", level: 3, tags: ["起源", "歴史"] },
  { id: 120, category: "恐れを暴く質問", question: "恐れずに行動できる小さな一歩は何か？", level: 2, tags: ["小さな一歩", "行動"] },

  // 想像力を広げる質問
  { id: 121, category: "想像力を広げる質問", question: "最も美しい結果とは何か？", level: 3, tags: ["理想", "美しさ"] },
  { id: 122, category: "想像力を広げる質問", question: "もし全く違う方法があるとしたら？", level: 2, tags: ["代替案", "創造性"] },
  { id: 123, category: "想像力を広げる質問", question: "これを最もシンプルに表現すると？", level: 2, tags: ["シンプル", "本質"] },
  { id: 124, category: "想像力を広げる質問", question: "全く違う分野から、何を学べるか？", level: 2, tags: ["異分野", "学び"] },
  { id: 125, category: "想像力を広げる質問", question: "これを遊びにできないか？", level: 2, tags: ["遊び", "楽しさ"] },
  { id: 126, category: "想像力を広げる質問", question: "もっとエレガントな解決策はないか？", level: 2, tags: ["エレガンス", "解決策"] },
  { id: 127, category: "想像力を広げる質問", question: "これを芸術作品にするとしたら？", level: 3, tags: ["芸術", "創造"] },
  { id: 128, category: "想像力を広げる質問", question: "逆にしたら、どうなるか？", level: 2, tags: ["逆転", "発想"] },
  { id: 129, category: "想像力を広げる質問", question: "これを100倍にしたら、何が変わるか？", level: 2, tags: ["スケール", "変化"] },
  { id: 130, category: "想像力を広げる質問", question: "もし色や形で表現するとしたら？", level: 2, tags: ["視覚化", "表現"] },
  { id: 131, category: "想像力を広げる質問", question: "この問題を物語にするとしたら？", level: 2, tags: ["物語", "ナラティブ"] },
  { id: 132, category: "想像力を広げる質問", question: "最もワクワクする可能性は何か？", level: 3, tags: ["可能性", "興奮"] },
  { id: 133, category: "想像力を広げる質問", question: "これを組み合わせたら、何が生まれるか？", level: 2, tags: ["組み合わせ", "創造"] },
  { id: 134, category: "想像力を広げる質問", question: "もっと面白くするには？", level: 2, tags: ["面白さ", "改善"] },
  { id: 135, category: "想像力を広げる質問", question: "この問題を祝福に変えられないか？", level: 3, tags: ["転換", "ポジティブ"] }
];

// 全ての質問を統合
export const questionLibrary: LibraryQuestion[] = [
  ...baseQuestions,
  ...masterLibraryQuestions
];

export const categories = [
  "明確化の質問",
  "前提を疑う質問",
  "二次効果の質問",
  "制約解除の質問",
  "視点変更の質問",
  "根本原因の質問",
  "長期視点の質問",
  "恐れを暴く質問",
  "想像力を広げる質問",
  "ソクラテスの質問",
  "トヨタ生産方式の質問",
  "ピーター・ドラッカーの質問",
  "禅の質問",
  "アルバート・アインシュタインの質問",
  "リチャード・ファインマンの質問"
];
