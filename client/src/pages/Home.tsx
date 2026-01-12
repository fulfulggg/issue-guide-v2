import Header from "@/components/Header";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { questionCategories, enemies } from "@/data/content";
import { fiveLevels, levelTransitions } from "@/data/fiveLevels";
import { masters } from "@/data/masters";
import {
  homeFooterContent,
  homeFormulaContent,
  homeHabitContent,
  homeHeroContent,
  homeLevelsIntroContent,
  homeSectionHeadersContent,
  homeUltimateQuestionContent,
} from "@/data/homeContent";
import { AlertTriangle, ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
              <Sparkles className="h-3 w-3 mr-1 inline" />
              {homeHeroContent.badgeLabel}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {homeHeroContent.titleLine1}
              <br />
              <span className="text-primary">{homeHeroContent.titleLine2}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {homeHeroContent.lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href={homeHeroContent.primaryCta.href}>
                <Button size="lg" className="text-lg px-8">
                  {homeHeroContent.primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() => {
                  document
                    .getElementById(homeHeroContent.secondaryCta.scrollTargetId)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {homeHeroContent.secondaryCta.label}
              </Button>
            </div>
          </div>
        </section>

        {/* Formula Section */}
        <section className="container py-12">
          <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20 p-0">
            <CardContent className="p-0 h-24 flex items-center justify-center">
              <p className="text-center text-lg md:text-xl font-semibold leading-relaxed">
                {homeFormulaContent.label} ={" "}
                {homeFormulaContent.factors.map((factor, index) => (
                  <span key={factor}>
                    {index > 0 && " × "}
                    <span className="text-primary">{factor}</span>
                  </span>
                ))}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 5段階の質問階層 */}
        <section
          id="levels"
          className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
        >
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {homeLevelsIntroContent.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                {homeLevelsIntroContent.descriptions.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < homeLevelsIntroContent.descriptions.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {fiveLevels.map((level, index) => (
                <Card
                  key={level.id}
                  className="hover:shadow-xl transition-all duration-300 border-l-4"
                  style={{
                    borderLeftColor: [
                      "#10b981", // green
                      "#3b82f6", // blue
                      "#f59e0b", // amber
                      "#8b5cf6", // purple
                      "#ec4899", // pink
                    ][index],
                  }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                        style={{
                          backgroundColor: [
                            "#10b981",
                            "#3b82f6",
                            "#f59e0b",
                            "#8b5cf6",
                            "#ec4899",
                          ][index],
                        }}
                      >
                        {level.id}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{level.title}</CardTitle>
                        <p className="text-lg text-muted-foreground font-medium">
                          {level.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{level.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="text-blue-600">■</span>
                          質問例
                        </h4>
                        <ul className="space-y-2">
                          {level.examples.slice(0, 3).map((example, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              ・ {example}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span className="text-purple-600">■</span>
                          名手の技術
                        </h4>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="font-medium mb-2">
                            {level.masterTechnique.master}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {level.masterTechnique.technique}
                          </p>
                        </div>
                      </div>
                    </div>

                    {index < fiveLevels.length - 1 && (
                      <div className="pt-4 border-t">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          {levelTransitions[index].guide}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <Section className="py-16 bg-secondary/30" containerClassName="">
          <SectionHeader
            icon={<Zap className="h-12 w-12 text-primary" />}
            title={homeSectionHeadersContent.categories.title}
            description={homeSectionHeadersContent.categories.description}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {questionCategories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center text-sm font-bold`}
                    >
                      {category.id}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm font-medium italic">
                      「{category.example}」
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Masters Section */}
        <Section className="py-16" containerClassName="">
          <SectionHeader
            icon={<Users className="h-12 w-12 text-primary" />}
            title={homeSectionHeadersContent.masters.title}
            description={homeSectionHeadersContent.masters.description}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {masters.slice(0, 5).map((master) => (
              <Card
                key={master.id}
                className="hover:shadow-xl transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{master.name}</CardTitle>
                    <Badge variant="outline">{master.period}</Badge>
                  </div>
                  <Badge className="w-fit">{master.title}</Badge>
                  <CardDescription className="text-base mt-3">
                    {master.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* アプローチ */}
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">💡 アプローチ</p>
                    <p className="text-sm text-muted-foreground">
                      {master.approach}
                    </p>
                  </div>

                  {/* 主要原則 */}
                  <div>
                    <p className="text-sm font-medium mb-2">🎯 主要原則</p>
                    <div className="space-y-2">
                      {master.keyPrinciples.slice(0, 2).map((principle, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-medium">{principle.name}:</span>
                          <span className="text-muted-foreground ml-1">
                            {principle.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 代表的な質問 */}
                  <div>
                    <p className="text-sm font-medium mb-2">❓ 代表的な質問</p>
                    <div className="space-y-2">
                      {master.questions.slice(0, 3).map((q, idx) => (
                        <div
                          key={idx}
                          className="bg-primary/5 p-3 rounded border-l-2 border-primary"
                        >
                          <p className="text-sm font-medium italic">
                            「{q.question}」
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {q.purpose}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/masters-questions">
              <Button size="lg" variant="outline" className="text-lg px-8">
                全ての偉人を見る（52名）
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Enemies Section */}
        <Section className="py-16 bg-destructive/5" containerClassName="">
          <SectionHeader
            icon={<AlertTriangle className="h-12 w-12 text-destructive" />}
            title={homeSectionHeadersContent.enemies.title}
            description={homeSectionHeadersContent.enemies.description}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {enemies.map((enemy, idx) => (
              <Card key={idx} className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">
                    {enemy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {enemy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Habit Section */}
        <section className="container py-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-3xl">{homeHabitContent.title}</CardTitle>
              <CardDescription className="text-lg">
                {homeHabitContent.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-background/80 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {homeHabitContent.mainHeading}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {homeHabitContent.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center pt-4">
                <Link href={homeHabitContent.cta.href}>
                  <Button size="lg" className="text-lg px-8">
                    {homeHabitContent.cta.label}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ultimate Question Section */}
        <section className="container py-16 mb-16">
          <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">
                {homeUltimateQuestionContent.title}
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg">
                {homeUltimateQuestionContent.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-2xl font-bold py-8">
                {`「${homeUltimateQuestionContent.question}」`}
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t py-8 bg-secondary/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{homeFooterContent.text}</p>
        </div>
      </footer>
    </div>
  );
}
