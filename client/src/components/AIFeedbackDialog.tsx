import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { analyzeMultipleQuestions } from "@/lib/aiFeedback";
import { Sparkles, TrendingUp, Lightbulb, Target, Loader2, AlertCircle } from "lucide-react";

interface AIFeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  questions: string[];
  dayNumber: number;
}

export default function AIFeedbackDialog({ open, onOpenChange, questions, dayNumber }: AIFeedbackDialogProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<any>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await analyzeMultipleQuestions(questions);
      setFeedback(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "分析中にエラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFeedback(null);
    setError(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary" />
            AI質問分析
          </DialogTitle>
          <DialogDescription>
            Day {dayNumber} の質問をAIが分析し、フィードバックを提供します
          </DialogDescription>
        </DialogHeader>

        {!feedback && !loading && !error && (
          <div className="space-y-4 py-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                分析対象: {questions.filter(q => q.trim() !== "").length}個の質問
              </p>
              <p className="text-sm">
                AIがあなたの質問を分析し、深さ、創造性、具体性を評価します。改善のためのアドバイスも提供します。
              </p>
            </div>
            <Button onClick={handleAnalyze} className="w-full" size="lg">
              <Sparkles className="h-5 w-5 mr-2" />
              分析を開始
            </Button>
          </div>
        )}

        {loading && (
          <div className="py-12 text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">質問を分析しています...</p>
          </div>
        )}

        {error && (
          <div className="py-8">
            <Card className="border-destructive">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 text-destructive">
                  <AlertCircle className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">エラーが発生しました</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button onClick={handleAnalyze} className="w-full mt-4">
              再試行
            </Button>
          </div>
        )}

        {feedback && (
          <div className="space-y-6 py-4">
            {/* Overall Score */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  総合スコア
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-5xl font-bold text-primary">
                    {Math.round(feedback.overall.averageScore)}
                  </p>
                  <p className="text-sm text-muted-foreground">/ 100点</p>
                </div>
                <Progress value={feedback.overall.averageScore} className="h-3" />
              </CardContent>
            </Card>

            {/* Detailed Metrics */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">深さ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-primary">
                      {feedback.overall.averageDepth.toFixed(1)}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">/ 5.0</p>
                  </div>
                  <Progress value={(feedback.overall.averageDepth / 5) * 100} className="h-2 mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">創造性</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-primary">
                      {feedback.overall.averageCreativity.toFixed(1)}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">/ 5.0</p>
                  </div>
                  <Progress value={(feedback.overall.averageCreativity / 5) * 100} className="h-2 mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">具体性</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-primary">
                      {feedback.overall.averageSpecificity.toFixed(1)}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">/ 5.0</p>
                  </div>
                  <Progress value={(feedback.overall.averageSpecificity / 5) * 100} className="h-2 mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Level Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingUp className="h-5 w-5" />
                  質問レベルの分布
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge style={{backgroundColor: "#10b981", color: "white"}}>深度1</Badge>
                      <span className="text-sm">情報収集</span>
                    </div>
                    <span className="font-semibold">{feedback.overall.levelDistribution.level1}問</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge style={{backgroundColor: "#3b82f6", color: "white"}}>深度2</Badge>
                      <span className="text-sm">構造理解</span>
                    </div>
                    <span className="font-semibold">{feedback.overall.levelDistribution.level2}問</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge style={{backgroundColor: "#f59e0b", color: "white"}}>深度3</Badge>
                      <span className="text-sm">前提を疑う</span>
                    </div>
                    <span className="font-semibold">{feedback.overall.levelDistribution.level3}問</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge style={{backgroundColor: "#8b5cf6", color: "white"}}>深度4</Badge>
                      <span className="text-sm">価値観を探る</span>
                    </div>
                    <span className="font-semibold">{feedback.overall.levelDistribution.level4 || 0}問</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge style={{backgroundColor: "#ec4899", color: "white"}}>深度5</Badge>
                      <span className="text-sm">自己変容</span>
                    </div>
                    <span className="font-semibold">{feedback.overall.levelDistribution.level5 || 0}問</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Lightbulb className="h-5 w-5" />
                  総合評価とアドバイス
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{feedback.summary}</p>
              </CardContent>
            </Card>

            <Button onClick={handleClose} className="w-full" size="lg">
              閉じる
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
