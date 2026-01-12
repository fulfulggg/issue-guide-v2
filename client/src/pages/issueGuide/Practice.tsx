import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import IssueGuideHeader from "@/components/issueGuide/IssueGuideHeader";
import { practiceContent } from "@/data/issueGuide/practiceContent";
import { AlertTriangle, CheckCircle2, XCircle, Newspaper, Building2 } from "lucide-react";

export default function Practice() {
  return (
    <div className="min-h-screen bg-background">
      <IssueGuideHeader />

      <main className="container py-8 space-y-12">
        <h1 className="text-3xl font-bold">練習する</h1>
        <p className="text-muted-foreground">
          3つの演習問題で論点設定を実践。新技術・競合動向・規制のケースで練習。
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
          <p className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
            <AlertTriangle className="h-5 w-5" />
            {practiceContent.disclaimer}
          </p>
        </div>

        {/* Exercises */}
        <div className="space-y-8">
          {practiceContent.exercises.map((exercise) => (
            <Card key={exercise.id} className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{exercise.category}</Badge>
                </div>
                <CardTitle className="text-xl">{exercise.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {/* News */}
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Newspaper className="h-4 w-4 text-blue-500" />
                    ニュース
                  </h3>
                  <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                    <CardContent className="pt-4">
                      <p className="text-sm text-muted-foreground mb-2">{exercise.news.date}</p>
                      <p>{exercise.news.content}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Company Situation */}
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-green-500" />
                    あなたの状況（設定）
                  </h3>
                  <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                    <CardContent className="pt-4 space-y-4">
                      <p className="font-medium">{exercise.companySituation.description}</p>
                      {exercise.companySituation.assets.map((asset, index) => (
                        <div key={index}>
                          <p className="text-sm font-medium">{asset.category}：</p>
                          <ul className="text-sm text-muted-foreground">
                            {asset.items.map((item, i) => (
                              <li key={i}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <p className="text-sm text-muted-foreground italic">
                        ※ {exercise.companySituation.note}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Question */}
                <div className="bg-primary/5 p-4 rounded-lg border-2 border-primary">
                  <p className="font-semibold text-lg">{exercise.question}</p>
                </div>

                {/* Bad Examples */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="bad-examples" className="border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="font-medium flex items-center gap-2 text-red-600 dark:text-red-400">
                        <XCircle className="h-5 w-5" />
                        悪い例（{exercise.badExamples.length}件）
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      {exercise.badExamples.map((bad) => (
                        <div key={bad.id} className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-200 dark:border-red-800">
                          <p className="font-medium">{bad.text}</p>
                          <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                            ✗ {bad.reason}
                          </p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Good Examples */}
                <Accordion type="single" collapsible defaultValue="good-examples">
                  <AccordionItem value="good-examples" className="border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="font-medium flex items-center gap-2 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="h-5 w-5" />
                        良い例（{exercise.goodExamples.length}件）
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      {exercise.goodExamples.map((good) => (
                        <Card key={good.id} className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                          <CardHeader>
                            <CardTitle className="text-base text-green-700 dark:text-green-300">
                              {good.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <pre className="text-sm whitespace-pre-wrap bg-white/50 dark:bg-black/20 p-3 rounded">
                              {good.content}
                            </pre>
                            <div>
                              <p className="text-sm font-medium mb-1">なぜ良いのか：</p>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {good.whyGood.map((reason, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    {reason}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>{practiceContent.summary.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {practiceContent.summary.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">□</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-amber-800 dark:text-amber-200 font-medium">
                {practiceContent.summary.emphasis}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
