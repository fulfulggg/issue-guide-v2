import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { masters } from "@/data/masters";
import { ArrowLeft, BookOpen, Lightbulb, MessageSquare } from "lucide-react";
import { Link, useParams } from "wouter";

export default function MasterDetail() {
  const params = useParams();
  const masterId = params.id;
  const master = masters.find(m => m.id === masterId);

  if (!master) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <p>質問の名手が見つかりません</p>
          <Link href="/">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ホームに戻る
            </Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
          <div className="container">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                ホームに戻る
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">{master.name}</h1>
                <Badge variant="outline" className="text-base">{master.period}</Badge>
              </div>
              <Badge className="text-lg px-4 py-1 mb-4">{master.title}</Badge>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {master.description}
              </p>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="container py-12">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">アプローチ</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{master.approach}</p>
            </CardContent>
          </Card>
        </section>

        {/* Key Principles Section */}
        <section className="container py-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">主要原則</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {master.keyPrinciples.map((principle, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{principle.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Patterns Section (if exists) */}
        {master.patterns && (
          <section className="container py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">質問のパターン</h2>
              <div className="space-y-4">
                {master.patterns.map((pattern, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Badge>{idx + 1}</Badge>
                        <CardTitle className="text-xl">{pattern.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{pattern.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-accent/10 p-4 rounded-lg">
                        <p className="font-medium text-sm text-muted-foreground mb-1">例：</p>
                        <p className="italic">「{pattern.example}」</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Questions Section */}
        <section className="container py-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-center">代表的な質問</h2>
            </div>
            <div className="grid gap-4">
              {master.questions.map((q, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Badge className="mt-1">{idx + 1}</Badge>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 italic">「{q.question}」</CardTitle>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">文脈:</span> {q.context}
                          </p>
                          <p className="text-sm text-primary font-medium">
                            <span className="font-medium">目的:</span> {q.purpose}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Example Section */}
        {master.practicalExample && (
          <section className="container py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <BookOpen className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-center">実践例</h2>
              </div>
              
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">{master.practicalExample.situation}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Dialogue */}
                  <div className="space-y-3">
                    {master.practicalExample.dialogue.map((line, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 rounded-lg ${
                          line.speaker === master.name || line.speaker.includes('なぜ') || line.speaker.includes('ドラッカー')
                            ? 'bg-primary/10 border-l-4 border-primary' 
                            : 'bg-accent/10'
                        }`}
                      >
                        <p className="font-bold text-sm mb-1">{line.speaker}</p>
                        <p className="text-base">{line.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Insight */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border-2 border-primary/20">
                    <p className="font-bold text-lg mb-2 text-primary">💡 洞察</p>
                    <p className="text-base leading-relaxed">{master.practicalExample.insight}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="container py-12 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">この質問法を実践してみましょう</h2>
            <p className="text-lg text-muted-foreground">
              30日間トレーニングで、{master.name}の質問法を身につけることができます。
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/training">
                <Button size="lg">
                  30日間トレーニングを始める
                </Button>
              </Link>
              <Link href="/library">
                <Button size="lg" variant="outline">
                  質問ライブラリを見る
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
