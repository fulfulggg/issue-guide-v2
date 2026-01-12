import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { questionDetails } from "@/data/questionDetails";
import type { MasterQuestion } from "@/data/mastersExpanded";
import { BookOpen, Lightbulb, Target, TrendingUp } from "lucide-react";

interface QuestionDetailDialogProps {
  question: MasterQuestion | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuestionDetailDialog({ question, open, onOpenChange }: QuestionDetailDialogProps) {
  if (!question) return null;

  const detail = questionDetails[question.id];
  const hasDetail = !!detail;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {question.question}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* 基本情報 */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">深度: {question.depth}/5</Badge>
              <Badge variant="outline">{question.level}</Badge>
              <Badge variant="outline">{question.phase}</Badge>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><span className="font-semibold">目的:</span> {question.purpose}</p>
              <p><span className="font-semibold">使用場面:</span> {question.context}</p>
              <p><span className="font-semibold">領域:</span> {question.domain}</p>
              <p><span className="font-semibold">用途:</span> {question.useCases.join(", ")}</p>
            </div>
          </div>

          {/* 詳細情報 */}
          {hasDetail ? (
            <div className="space-y-4">
              {/* 用語解説 */}
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">用語解説</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">{detail.termExplanation}</p>
                  </div>
                </div>
              </div>

              {/* 具体例 */}
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">具体例</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">{detail.example}</p>
                  </div>
                </div>
              </div>

              {/* 使い方ガイド */}
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">使い方ガイド</h4>
                    <p className="text-sm text-purple-800 dark:text-purple-200">{detail.howToUse}</p>
                  </div>
                </div>
              </div>

              {/* 期待される効果 */}
              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">期待される効果</h4>
                    <p className="text-sm text-orange-800 dark:text-orange-200">{detail.expectedEffect}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-8">
              <p>この質問の詳細情報は準備中です。</p>
              <p className="text-sm mt-2">基本情報は上記をご参照ください。</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
