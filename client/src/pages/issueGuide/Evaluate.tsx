import { useState } from "react";
import IssueGuideHeader from "@/components/issueGuide/IssueGuideHeader";
import CopyButton from "@/components/issueGuide/CopyButton";
import { evaluateContent } from "@/data/issueGuide/evaluateContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

export default function Evaluate() {
  const { failurePatterns, selfContextualizationGate, finalChecklist } =
    evaluateContent;

  // 自分事化ゲートのチェック状態
  const [gateChecks, setGateChecks] = useState<Record<number, boolean>>({});

  // 最終チェックリストの状態
  const [finalChecks, setFinalChecks] = useState<Record<string, boolean>>({});

  const handleGateCheck = (id: number, checked: boolean) => {
    setGateChecks((prev) => ({ ...prev, [id]: checked }));
  };

  const handleFinalCheck = (categoryId: number, itemIndex: number, checked: boolean) => {
    const key = `${categoryId}-${itemIndex}`;
    setFinalChecks((prev) => ({ ...prev, [key]: checked }));
  };

  // ゲート通過判定
  const allGatesPassed = selfContextualizationGate.checkItems.every(
    (item) => gateChecks[item.id]
  );

  // 最終チェックの完了数
  const totalFinalItems = finalChecklist.categories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );
  const checkedFinalItems = Object.values(finalChecks).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <IssueGuideHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* ページタイトル */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{evaluateContent.title}</h1>
          <p className="text-muted-foreground">
            よくある失敗パターンを自己診断し、論点の品質を向上させましょう。
          </p>
        </div>

        {/* 失敗パターン */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-amber-500" />
            6つの失敗パターン
          </h2>
          <p className="text-muted-foreground mb-6">
            以下の失敗パターンに当てはまっていないか確認し、該当する場合はリカバリー手順に従って修正してください。
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {failurePatterns.map((pattern) => (
              <AccordionItem
                key={pattern.id}
                value={`pattern-${pattern.id}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-amber-600 border-amber-600">
                      #{pattern.id}
                    </Badge>
                    <span className="font-medium">{pattern.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="space-y-6">
                    {/* 症状 */}
                    <div>
                      <h4 className="font-medium text-destructive flex items-center gap-2 mb-2">
                        <XCircle className="h-4 w-4" />
                        こんな症状が出ていませんか？
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {pattern.symptoms.map((symptom, idx) => (
                          <li key={idx}>{symptom}</li>
                        ))}
                      </ul>
                    </div>

                    {/* 原因 */}
                    <div>
                      <h4 className="font-medium text-amber-600 flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4" />
                        原因
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {pattern.causes.map((cause, idx) => (
                          <li key={idx}>{cause}</li>
                        ))}
                      </ul>
                    </div>

                    {/* リカバリー */}
                    <div>
                      <h4 className="font-medium text-green-600 flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4" />
                        リカバリー手順
                      </h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground mb-4">
                        {pattern.recovery.steps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>

                      {/* テンプレート */}
                      {pattern.recovery.template && (
                        <div className="bg-muted rounded-lg p-4 relative">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-medium text-muted-foreground">
                              変換テンプレート
                            </span>
                            <CopyButton content={pattern.recovery.template} />
                          </div>
                          <pre className="text-sm whitespace-pre-wrap font-mono">
                            {pattern.recovery.template}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 自分事化ゲート */}
        <section className="mb-12">
          <Card className={allGatesPassed ? "border-green-500" : "border-amber-500"}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {allGatesPassed ? (
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                ) : (
                  <ShieldAlert className="h-6 w-6 text-amber-500" />
                )}
                {selfContextualizationGate.title}
              </CardTitle>
              <CardDescription>
                {selfContextualizationGate.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {selfContextualizationGate.checkItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={`gate-${item.id}`}
                      checked={gateChecks[item.id] || false}
                      onCheckedChange={(checked) =>
                        handleGateCheck(item.id, checked as boolean)
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={`gate-${item.id}`}
                        className="font-medium cursor-pointer"
                      >
                        {item.label}
                      </label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.question}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-green-600 text-sm font-medium mb-1">
                        <CheckCircle2 className="h-4 w-4" />
                        合格例
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.passExample}
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-destructive text-sm font-medium mb-1">
                        <XCircle className="h-4 w-4" />
                        不合格例
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.failExample}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* ゲート結果 */}
              <Alert variant={allGatesPassed ? "default" : "destructive"}>
                {allGatesPassed ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <AlertTriangle className="h-4 w-4" />
                )}
                <AlertTitle>
                  {allGatesPassed ? "ゲート通過" : "ゲート未通過"}
                </AlertTitle>
                <AlertDescription>
                  {allGatesPassed
                    ? selfContextualizationGate.passMessage
                    : selfContextualizationGate.failureMessage}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* 最終チェックリスト */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                {finalChecklist.title}
              </CardTitle>
              <CardDescription>
                進捗: {checkedFinalItems} / {totalFinalItems} 項目完了
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {finalChecklist.categories.map((category) => (
                <div key={category.id}>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    {category.title}
                    {category.id === 3 && (
                      <Badge variant="destructive" className="text-xs">
                        必須
                      </Badge>
                    )}
                  </h4>
                  <div className="space-y-2 ml-6">
                    {category.items.map((item, idx) => {
                      const key = `${category.id}-${idx}`;
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <Checkbox
                            id={key}
                            checked={finalChecks[key] || false}
                            onCheckedChange={(checked) =>
                              handleFinalCheck(category.id, idx, checked as boolean)
                            }
                            className="mt-0.5"
                          />
                          <label
                            htmlFor={key}
                            className="text-sm cursor-pointer leading-relaxed"
                          >
                            {item}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>合格基準</AlertTitle>
                <AlertDescription>
                  {finalChecklist.passThreshold}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
