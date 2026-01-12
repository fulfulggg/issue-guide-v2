import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { phases, appreciativeInquiry } from "@/data/phaseGuide";
import { ArrowLeft, Lightbulb, Target, Rocket, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function PhaseGuide() {
  const [selectedPhase, setSelectedPhase] = useState<"diverge" | "converge" | "execute">("diverge");

  const currentPhase = phases.find(p => p.id === selectedPhase)!;

  const phaseIcons = {
    diverge: <Lightbulb className="h-5 w-5" />,
    converge: <Target className="h-5 w-5" />,
    execute: <Rocket className="h-5 w-5" />
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">フェーズ別質問ガイド</h1>
          <p className="text-muted-foreground">
            状況に応じた質問の使い分けで、議論や思考を効果的に進めましょう
          </p>
        </div>

        <Tabs value={selectedPhase} onValueChange={(v) => setSelectedPhase(v as any)} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="diverge" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              発散フェーズ
            </TabsTrigger>
            <TabsTrigger value="converge" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              収束フェーズ
            </TabsTrigger>
            <TabsTrigger value="execute" className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              実行フェーズ
            </TabsTrigger>
          </TabsList>

          {(["diverge", "converge", "execute"] as const).map((phase) => (
            <TabsContent key={phase} value={phase} className="space-y-6">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {phaseIcons[phase]}
                    <CardTitle className="text-2xl">{phases.find(p => p.id === phase)!.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {phases.find(p => p.id === phase)!.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 目的 */}
                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Badge variant="outline">目的</Badge>
                    </h3>
                    <p className="text-gray-700">{phases.find(p => p.id === phase)!.purpose}</p>
                  </div>

                  {/* 特徴 */}
                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Badge variant="outline">特徴</Badge>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phases.find(p => p.id === phase)!.characteristics.map((char, index) => (
                        <div key={index} className="flex items-start gap-2 bg-accent/10 p-3 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                          <p className="text-sm text-gray-700">{char}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 質問例 */}
                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Badge variant="outline">質問例</Badge>
                    </h3>
                    <div className="space-y-3">
                      {phases.find(p => p.id === phase)!.questionExamples.map((q, index) => (
                        <Card key={index} className="bg-white">
                          <CardContent className="pt-4">
                            <div className="flex items-start gap-3">
                              <Badge className="mt-0.5">{index + 1}</Badge>
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 mb-1">{q.question}</p>
                                <p className="text-sm text-muted-foreground">{q.purpose}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* 注意点 */}
                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Badge variant="outline" className="bg-orange-100 text-orange-700">注意点</Badge>
                    </h3>
                    <div className="space-y-2">
                      {phases.find(p => p.id === phase)!.avoidQuestions.map((avoid, index) => (
                        <div key={index} className="flex items-start gap-2 bg-orange-50 p-3 rounded-lg border border-orange-200">
                          <div className="text-orange-600 font-bold">!</div>
                          <p className="text-sm text-gray-700">{avoid.question} - {avoid.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Appreciative Inquiry セクション */}
        <Card className="mt-12 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl text-purple-900">{appreciativeInquiry.title}</CardTitle>
            </div>
            <CardDescription className="text-base text-purple-800">
              {appreciativeInquiry.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 原則 */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-900">5つの原則</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {appreciativeInquiry.principles.map((principle, index) => (
                  <Card key={index} className="bg-white border-purple-200">
                    <CardContent className="pt-4">
                      <h4 className="font-bold text-purple-900 mb-2">{principle.name}</h4>
                      <p className="text-sm text-gray-700">{principle.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 4Dサイクル */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-purple-900">4Dサイクル</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {appreciativeInquiry.fourDCycle.map((phase: any, index: number) => (
                  <Card key={index} className="bg-white border-purple-200">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-purple-600">{index + 1}</Badge>
                        <CardTitle className="text-lg">{phase.name}</CardTitle>
                      </div>
                      <CardDescription>{phase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-purple-900">質問例：</p>
                          {phase.questions.map((q: string, qIndex: number) => (
                          <div key={qIndex} className="flex items-start gap-2 bg-purple-50 p-2 rounded">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5"></div>
                            <p className="text-sm text-gray-700">{q}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 実践のヒント */}
            <Card className="bg-purple-100 border-purple-300">
              <CardContent className="pt-4">
                <h4 className="font-bold text-purple-900 mb-3">💡 実践のヒント</h4>
                <div className="space-y-2">
                  {appreciativeInquiry.examples.map((example, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-1.5"></div>
                      <p className="text-sm text-purple-900">{example.situation}: {example.ai}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* 使い方ガイド */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>フェーズの見分け方</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <h4 className="font-bold">発散フェーズ</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                まだ答えが見えていない、可能性を広げたい、新しいアイデアが欲しい状況
              </p>
              <Badge variant="outline" className="text-xs">ブレスト、企画立案、問題発見</Badge>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-blue-600" />
                <h4 className="font-bold">収束フェーズ</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                選択肢を絞り込みたい、優先順位をつけたい、決定したい状況
              </p>
              <Badge variant="outline" className="text-xs">意思決定、評価、選択</Badge>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="h-5 w-5 text-green-600" />
                <h4 className="font-bold">実行フェーズ</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                具体的な行動に移したい、実行計画を立てたい、進捗を確認したい状況
              </p>
              <Badge variant="outline" className="text-xs">実行計画、進捗管理、改善</Badge>
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
