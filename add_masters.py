#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# masters.tsの最後に9名の偉人を追加するスクリプト

additional_masters = """  },
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
];"""

# masters.tsファイルを読み込む
with open('/home/ubuntu/question-mastery/client/src/data/masters.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 最後の ]; を見つけて、その前に追加
content = content.replace('\n];', additional_masters + '\n];')

# ファイルに書き込む
with open('/home/ubuntu/question-mastery/client/src/data/masters.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("9名の偉人を追加しました")
