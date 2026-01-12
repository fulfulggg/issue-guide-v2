import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { questionChecklist, evaluateChecklist, type ChecklistResult } from "@/data/questionChecklist";
import { CheckCircle2, AlertCircle, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Checklist() {
  const [question, setQuestion] = useState("");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [result, setResult] = useState<ChecklistResult | null>(null);

  const handleCheck = (itemId: string, checked: boolean) => {
    if (checked) {
      setCheckedItems([...checkedItems, itemId]);
    } else {
      setCheckedItems(checkedItems.filter(id => id !== itemId));
    }
  };

  const handleEvaluate = () => {
    if (!question.trim()) {
      return;
    }
    const evalResult = evaluateChecklist(checkedItems);
    setResult(evalResult);
  };

  const handleReset = () => {
    setQuestion("");
    setCheckedItems([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <main className="flex-1 container py-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            ガイドに戻る
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">良い質問のチェックリスト</h1>
          <p className="text-muted-foreground">
            自分の質問を10の観点でセルフレビューし、質問の質を高めましょう
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 左側: 質問入力とチェックリスト */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>質問を入力</CardTitle>
                <CardDescription>
                  評価したい質問を入力してください
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="例: あなたはどうしたいのですか？"
                  className="min-h-[100px] text-base"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>チェックリスト</CardTitle>
                <CardDescription>
                  当てはまる項目にチェックを入れてください
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {questionChecklist.map((item) => (
                  <div key={item.id} className="space-y-2 pb-4 border-b last:border-0">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id={item.id}
                        checked={checkedItems.includes(item.id)}
                        onCheckedChange={(checked) => handleCheck(item.id, checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <label
                          htmlFor={item.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {item.question}
                        </label>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.description}
                        </p>
                        <div className="mt-2 space-y-1">
                          <div className="text-xs">
                            <span className="text-green-600 font-medium">✓ 良い例: </span>
                            <span className="text-gray-700">{item.goodExample}</span>
                          </div>
                          <div className="text-xs">
                            <span className="text-red-600 font-medium">✗ 悪い例: </span>
                            <span className="text-gray-700">{item.badExample}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button
                onClick={handleEvaluate}
                disabled={!question.trim()}
                className="flex-1"
                size="lg"
              >
                <CheckCircle2 className="h-5 w-5 mr-2" />
                評価する
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                size="lg"
              >
                リセット
              </Button>
            </div>
          </div>

          {/* 右側: 評価結果 */}
          <div>
            {result ? (
              <div className="space-y-6 sticky top-8">
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      評価結果
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* スコア表示 */}
                    <div className="text-center space-y-3">
                      <div className="text-5xl font-bold text-primary">
                        {Math.round(result.score)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {checkedItems.length} / {questionChecklist.length} 項目クリア
                      </div>
                      <Progress value={result.score} className="h-3" />
                      <p className="text-sm font-medium text-gray-700">
                        {result.feedback}
                      </p>
                    </div>

                    {/* 質問表示 */}
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">
                        {question}
                      </p>
                    </div>

                    {/* 強み */}
                    {result.strengths.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <h4 className="font-bold text-gray-900">強み</h4>
                        </div>
                        <div className="space-y-2">
                          {result.strengths.map((strength, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-600 mt-1.5"></div>
                              <p className="text-sm text-gray-700">{strength}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 改善点 */}
                    {result.improvements.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <AlertCircle className="h-5 w-5 text-orange-600" />
                          <h4 className="font-bold text-gray-900">改善点</h4>
                        </div>
                        <div className="space-y-2">
                          {result.improvements.map((improvement, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-orange-600 mt-1.5"></div>
                              <p className="text-sm text-gray-700">{improvement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ヒント */}
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-4">
                        <h4 className="font-bold text-blue-900 mb-2">💡 次のステップ</h4>
                        <p className="text-sm text-blue-800">
                          チェックが入らなかった項目を参考に、質問を書き換えてみましょう。
                          質問の質は練習によって確実に向上します。
                        </p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-full flex items-center justify-center min-h-[400px]">
                <CardContent className="text-center text-muted-foreground">
                  <CheckCircle2 className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p>質問を入力してチェックリストを確認し、</p>
                  <p>「評価する」ボタンを押してください</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* 使い方ガイド */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>チェックリストの使い方</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-lg px-3 py-1">1</Badge>
                <h4 className="font-bold">質問を書く</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                評価したい質問を入力欄に書き込みます。会議で使う質問、コーチングの質問、自分への問いかけなど、何でもOKです。
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-lg px-3 py-1">2</Badge>
                <h4 className="font-bold">チェックする</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                10の観点それぞれについて、自分の質問が当てはまるかチェックします。良い例・悪い例を参考にしましょう。
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-lg px-3 py-1">3</Badge>
                <h4 className="font-bold">改善する</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                評価結果を見て、チェックが入らなかった観点を改善します。質問を書き直して、再度チェックしてみましょう。
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t py-8 bg-secondary/30 mt-16">
        <div className="container text-center text-sm text-muted-foreground">
          <p>質問力を極限まで高める © 2024</p>
        </div>
      </footer>
    </div>
  );
}
