import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lifeChangingCategories, bigAhaStructure, practiceGuide } from "@/data/lifeChangingQuestions";
import { Sparkles, Heart, Lightbulb } from "lucide-react";

export default function LifeChanging() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                <Heart className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                人生を変える質問
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                表面的な問題解決を超えて、存在そのものを問う。<br />
                これらの質問は、あなたの人生観、価値観、行動を根本から変える力を持つ。
              </p>
            </div>
          </div>
        </section>

        {/* Big Aha Structure */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Lightbulb className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {bigAhaStructure.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {bigAhaStructure.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bigAhaStructure.patterns.map((pattern) => (
                  <Card key={pattern.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                          {pattern.id}
                        </div>
                        <CardTitle className="text-lg">{pattern.name}</CardTitle>
                      </div>
                      <CardDescription>{pattern.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pattern.examples.map((example, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground italic">
                            「{example}」
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Life Changing Questions by Category */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  6つのカテゴリ × 30の質問
                </h2>
                <p className="text-muted-foreground text-lg">
                  各カテゴリの質問に真摯に向き合うことで、人生の質が変わる
                </p>
              </div>

              <Tabs defaultValue={lifeChangingCategories[0].id} className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
                  {lifeChangingCategories.map((cat) => (
                    <TabsTrigger key={cat.id} value={cat.id} className="text-sm py-3">
                      <span className="mr-2">{cat.icon}</span>
                      {cat.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {lifeChangingCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl">
                          <span className="text-3xl">{category.icon}</span>
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <div className="space-y-4">
                      {category.questions.map((q) => (
                        <Card key={q.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <Badge variant="secondary" className="mt-1">
                                Q{q.id}
                              </Badge>
                              <div className="flex-1">
                                <CardTitle className="text-xl mb-3 text-purple-700">
                                  {q.question}
                                </CardTitle>
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                                      目的：
                                    </p>
                                    <p className="text-sm">{q.purpose}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                                      解説：
                                    </p>
                                    <p className="text-sm text-muted-foreground">{q.context}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Practice Guide */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {practiceGuide.title}
              </h2>

              <div className="space-y-6">
                {practiceGuide.steps.map((step) => (
                  <Card key={step.step} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                          <CardDescription className="text-base">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
                <CardContent className="pt-6">
                  <p className="text-center text-lg font-medium text-purple-900">
                    これらの質問は、一度答えて終わりではありません。<br />
                    人生の節目ごとに問い直すことで、より深い洞察が得られます。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
