export interface TrainingHeaderContent {
  backLinkLabel: string;
  backLinkHref: string;
  title: string;
  subtitle: string;
  resetButtonLabel: string;
}

export interface TrainingProgressContent {
  title: string;
  totalDays: number;
  badgeUnit: string; // 例: 「日」
  completeMessage: string;
  remainingMessageTemplate: string; // 例: 「あと {remaining} 日です」
}

export interface TrainingMessagesContent {
  minQuestionsError: string;
  dayCompleteTitleTemplate: string; // {day}
  dayCompleteDescriptionTemplate: string; // {count}
  resetConfirm: string;
  resetDone: string;
}

export interface TrainingLegendContent {
  title: string;
  categories: string[];
}

export interface TrainingQuestionAreaContent {
  introTitle: string;
  introNote: string;
  questionLabelPrefix: string;
  questionPlaceholder: string;
  completeButtonLabelPrefix: string; // 「Day 」
  completeButtonLabelSuffix: string; // 「 を完了」
  completedLabel: string;
  aiButtonLabel: string;
  completedDatePrefix: string; // 「完了日: 」
}

export interface TrainingFooterContent {
  text: string;
}

export const trainingHeaderContent: TrainingHeaderContent = {
  backLinkLabel: "ガイドに戻る",
  backLinkHref: "/",
  title: "30日間トレーニング",
  subtitle: "毎日10個の質問を書き出して、質問力を高めましょう",
  resetButtonLabel: "リセット",
};

export const trainingProgressContent: TrainingProgressContent = {
  title: "進捗状況",
  totalDays: 30,
  badgeUnit: "日",
  completeMessage: "🎉 おめでとうございます！30日間完了しました！",
  remainingMessageTemplate: "あと {remaining} 日です",
};

export const trainingMessagesContent: TrainingMessagesContent = {
  minQuestionsError: "少なくとも1つの質問を記入してください",
  dayCompleteTitleTemplate: "Day {day} を完了しました！",
  dayCompleteDescriptionTemplate:
    "{count}個の質問を記録しました。AIフィードバックで質問を分析できます。",
  resetConfirm: "本当にトレーニングデータをリセットしますか？",
  resetDone: "トレーニングデータをリセットしました",
};

export const trainingLegendContent: TrainingLegendContent = {
  title: "カテゴリー",
  categories: ["前提", "未来", "恐れ", "長期視点", "創造性", "人間理解", "自由形式"],
};

export const trainingQuestionAreaContent: TrainingQuestionAreaContent = {
  introTitle: "今日のテーマに沿って、10個の質問を書き出しましょう",
  introNote:
    "※答えは書かず、質問だけを記入してください。全て埋める必要はありません。",
  questionLabelPrefix: "質問",
  questionPlaceholder: "質問を入力してください...",
  completeButtonLabelPrefix: "Day ",
  completeButtonLabelSuffix: " を完了",
  completedLabel: "完了済み",
  aiButtonLabel: "AIに質問を分析してもらう",
  completedDatePrefix: "完了日: ",
};

export const trainingFooterContent: TrainingFooterContent = {
  text: "質問力を極限まで高める © 2024",
};
