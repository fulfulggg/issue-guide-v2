import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, TrendingUp, AlertCircle } from "lucide-react";
import { evaluateQuestion, evaluationDimensions, type QuestionEvaluation } from "@/data/questionEvaluation";

interface EnhancedAIFeedbackProps {
  open: boolean;
  onClose: () => void;
  questions: string[];
}

export default function EnhancedAIFeedback({ open, onClose, questions }: EnhancedAIFeedbackProps) {
  const [evaluations, setEvaluations] = useState<QuestionEvaluation[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const analyzeQuestions = async () => {
    setIsAnalyzing(true);
    const results: QuestionEvaluation[] = [];
    
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].trim()) {
        // 簡易的な遅延でAI分析をシミュレート
        await new Promise(resolve => setTimeout(resolve, 500));
        const evaluation = evaluateQuestion(questions[i]);
        results.push(evaluation);
      }
    }
    
    setEvaluations(results);
    setIsAnalyzing(false);
  };

  const handleOpen = () => {
    if (open && evaluations.length === 0) {
      analyzeQuestions();
    }
  };

  useEffect(() => {
    handleOpen();
  }, [open]);

  const currentEvaluation = evaluations[currentIndex];
  const avgScore = evaluations.length > 0
    ? Math.round(evaluations.reduce((sum, e) => sum + e.overallScore, 0) / evaluations.length)
    : 0;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            質問の多次元評価
          </DialogTitle>
        </DialogHeader>

        {isAnalyzing ? (
          <div className="py-12 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">質問を分析中...</p>
          </div>
        ) : evaluations.length > 0 ? (
          <div className="space-y-6">
            {/* 全体サマリー */}
            <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">全体スコア</h3>
                  <p className="text-sm text-gray-600">{evaluations.length}問を分析</p>
                </div>
                <div className="text-4xl font-bold text-purple-600">{avgScore}</div>
              </div>
              <Progress value={avgScore * 10} className="h-2" />
              <p className="mt-2 text-sm text-gray-600">
                {avgScore >= 8 ? "素晴らしい！プロフェッショナルレベルの質問です" :
                 avgScore >= 6 ? "良い質問です。さらに磨きをかけましょう" :
                 avgScore >= 4 ? "基本はできています。いくつかの観点を改善しましょう" :
                 "改善の余地があります。各観点を見直しましょう"}
              </p>
            </Card>

            {/* 質問ナビゲーション */}
            <div className="flex items-center gap-2 flex-wrap">
              {evaluations.map((_, index) => (
                <Button
                  key={index}
                  variant={currentIndex === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentIndex(index)}
                  className="w-12"
                >
                  Q{index + 1}
                </Button>
              ))}
            </div>

            {/* 現在の質問の詳細評価 */}
            {currentEvaluation && (
              <div className="space-y-6">
                {/* 質問表示 */}
                <Card className="p-4 bg-gray-50">
                  <p className="font-medium text-gray-900">{currentEvaluation.question}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-bold text-purple-600">{currentEvaluation.overallScore}</span>
                    <span className="text-sm text-gray-600">/ 10</span>
                  </div>
                </Card>

                {/* 強み */}
                {currentEvaluation.strengths.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-gray-900">強み</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentEvaluation.strengths.map((strength, index) => (
                        <Badge key={index} className="bg-green-100 text-green-700 hover:bg-green-200">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* 8つの観点別スコア */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">8つの観点別評価</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {evaluationDimensions.map((dimension) => {
                      const score = currentEvaluation.scores[dimension.id] || 0;
                      return (
                        <div key={dimension.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span>{dimension.icon}</span>
                              <span className="text-sm font-medium text-gray-700">{dimension.name}</span>
                            </div>
                            <span className="text-sm font-bold text-gray-900">{score}/10</span>
                          </div>
                          <Progress value={score * 10} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 改善提案 */}
                {currentEvaluation.improvements.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      <h4 className="font-bold text-gray-900">改善提案</h4>
                    </div>
                    <div className="space-y-4">
                      {currentEvaluation.improvements.map((improvement, index) => (
                        <Card key={index} className="p-4 border-l-4 border-orange-500">
                          <div className="flex items-start gap-2 mb-2">
                            <Badge className="bg-orange-100 text-orange-700">
                              {improvement.dimension}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{improvement.suggestion}</p>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-xs text-gray-600 mb-1">改善例：</p>
                            <p className="text-sm font-medium text-gray-900">{improvement.example}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* 参考情報 */}
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">💡 ヒント</h4>
                  <p className="text-sm text-blue-800">
                    質問の質を高めるには、8つの観点をバランスよく意識することが重要です。
                    特に「ポジティブ前提」「主体性」「感情・価値観アクセス」の3つは、
                    深い洞察と変容を生む鍵となります。
                  </p>
                </Card>
              </div>
            )}

            {/* ナビゲーションボタン */}
            <div className="flex justify-between pt-4 border-t">
              <Button
                variant="outline"
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
              >
                前の質問
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentIndex(Math.min(evaluations.length - 1, currentIndex + 1))}
                disabled={currentIndex === evaluations.length - 1}
              >
                次の質問
              </Button>
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-gray-600">
            質問が入力されていません
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
