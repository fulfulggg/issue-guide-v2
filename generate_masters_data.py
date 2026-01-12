import json

# コア偉人30名の詳細データを生成するスクリプト

core_masters_data = [
    {
        "id": "socrates",
        "name": "ソクラテス",
        "nameEn": "Socrates",
        "period": "BC469-BC399",
        "field": "古代ギリシア哲学",
        "tier": "core",
        "thinkingStyles": ["premise-destruction", "dialectic", "essence-pursuit"],
        "shortBio": "古代ギリシアの哲学者。「無知の知」を説き、対話を通じて真理を探求した。",
        "coreApproach": "定義を問い直し、矛盾をあぶり出すことで、相手の思い込みを破壊し、真の知へと導く産婆術。",
        "questions": [
            {"id": "soc-001", "question": "それは本当に正しいと言えるのか？", "context": "相手が当然と思っていることに対して", "purpose": "前提を疑わせ、根拠を問い直す", "depth": 2, "level": "洞察", "domain": "前提を疑う質問", "phase": "発散", "timeAxis": "現在", "useCases": ["問題解決", "意思決定"]},
            {"id": "soc-002", "question": "その言葉の定義は何か？", "context": "抽象的な概念が使われたとき", "purpose": "曖昧さを排除し、明確な理解を促す", "depth": 2, "level": "洞察", "domain": "明確化の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["1on1・コーチング", "チームビルディング"]},
            {"id": "soc-003", "question": "それは常に成り立つのか？", "context": "一般化された主張に対して", "purpose": "例外を探し、主張の限界を明らかにする", "depth": 3, "level": "洞察", "domain": "前提を疑う質問", "phase": "発散", "timeAxis": "現在", "useCases": ["問題解決", "創造性"]},
            {"id": "soc-004", "question": "なぜそう思うのか？", "context": "相手の意見や信念に対して", "purpose": "根拠を明確にさせる", "depth": 2, "level": "洞察", "domain": "根本原因の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["1on1・コーチング", "自己内省"]},
            {"id": "soc-005", "question": "その反対は成り立たないのか？", "context": "一方的な主張に対して", "purpose": "多面的な視点を引き出す", "depth": 3, "level": "洞察", "domain": "視点変更の質問", "phase": "発散", "timeAxis": "現在", "useCases": ["創造性", "問題解決"]},
            {"id": "soc-006", "question": "あなたは本当にそれを知っているのか？", "context": "確信を持って語る相手に対して", "purpose": "無知の知を自覚させる", "depth": 4, "level": "変容", "domain": "前提を疑う質問", "phase": "収束", "timeAxis": "現在", "useCases": ["自己内省", "リーダーシップ"]},
            {"id": "soc-007", "question": "それを別の言葉で説明できるか？", "context": "理解の深さを確認したいとき", "purpose": "真の理解を試す", "depth": 2, "level": "洞察", "domain": "明確化の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["1on1・コーチング", "チームビルディング"]},
            {"id": "soc-008", "question": "その根拠は何か？", "context": "主張の妥当性を検証したいとき", "purpose": "論理的な基盤を問う", "depth": 3, "level": "洞察", "domain": "根本原因の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["意思決定", "問題解決"]},
            {"id": "soc-009", "question": "それは誰にとって正しいのか？", "context": "普遍性を問いたいとき", "purpose": "相対性を意識させる", "depth": 3, "level": "洞察", "domain": "視点変更の質問", "phase": "発散", "timeAxis": "現在", "useCases": ["リーダーシップ", "チームビルディング"]},
            {"id": "soc-010", "question": "矛盾はないか？", "context": "論理の整合性を確認したいとき", "purpose": "思考の穴を見つける", "depth": 3, "level": "洞察", "domain": "前提を疑う質問", "phase": "収束", "timeAxis": "現在", "useCases": ["問題解決", "意思決定"]},
            {"id": "soc-011", "question": "善とは何か？", "context": "倫理的判断が必要なとき", "purpose": "価値の本質を問う", "depth": 5, "level": "変容", "domain": "前提を疑う質問", "phase": "収束", "timeAxis": "現在", "useCases": ["リーダーシップ", "自己内省"]},
            {"id": "soc-012", "question": "正義とは何か？", "context": "公正さを問うとき", "purpose": "普遍的な価値を探る", "depth": 5, "level": "変容", "domain": "前提を疑う質問", "phase": "収束", "timeAxis": "現在", "useCases": ["リーダーシップ", "意思決定"]},
            {"id": "soc-013", "question": "それを知ることで何が変わるのか？", "context": "知識の価値を問うとき", "purpose": "実践的意義を明らかにする", "depth": 3, "level": "洞察", "domain": "明確化の質問", "phase": "実行", "timeAxis": "未来", "useCases": ["キャリア", "自己内省"]},
            {"id": "soc-014", "question": "あなたの魂にとって何が最善か？", "context": "人生の選択に迫られたとき", "purpose": "本質的な価値を問う", "depth": 5, "level": "変容", "domain": "価値観の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["キャリア", "自己内省"]},
            {"id": "soc-015", "question": "それは徳を高めるか？", "context": "行動の是非を判断するとき", "purpose": "倫理的な基準を問う", "depth": 4, "level": "変容", "domain": "価値観の質問", "phase": "実行", "timeAxis": "未来", "useCases": ["リーダーシップ", "自己内省"]},
            {"id": "soc-016", "question": "無知を自覚しているか？", "context": "謙虚さを促したいとき", "purpose": "知的謙遜を引き出す", "depth": 4, "level": "変容", "domain": "前提を疑う質問", "phase": "収束", "timeAxis": "現在", "useCases": ["自己内省", "リーダーシップ"]},
            {"id": "soc-017", "question": "それは真に価値あることか？", "context": "優先順位を問うとき", "purpose": "本質的な価値を見極める", "depth": 4, "level": "変容", "domain": "価値観の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["キャリア", "意思決定"]},
            {"id": "soc-018", "question": "あなたは自分自身を知っているか？", "context": "自己理解を促したいとき", "purpose": "内省を促す", "depth": 5, "level": "変容", "domain": "価値観の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["自己内省", "キャリア"]},
            {"id": "soc-019", "question": "それは本当に必要なのか？", "context": "欲望と必要性を区別したいとき", "purpose": "本質的なニーズを見極める", "depth": 3, "level": "洞察", "domain": "明確化の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["意思決定", "自己内省"]},
            {"id": "soc-020", "question": "死を前にしてもそれは重要か？", "context": "真の優先順位を問うとき", "purpose": "本質的な価値を浮き彫りにする", "depth": 5, "level": "変容", "domain": "価値観の質問", "phase": "収束", "timeAxis": "現在", "useCases": ["キャリア", "自己内省"]},
        ]
    },
    # 残り29名のデータは同様の構造で作成
]

# JSONファイルとして出力
with open('/home/ubuntu/question-mastery/core_masters_full.json', 'w', encoding='utf-8') as f:
    json.dump(core_masters_data, f, ensure_ascii=False, indent=2)

print("ソクラテスのデータ作成完了。残り29名は同様の構造で追加予定。")
