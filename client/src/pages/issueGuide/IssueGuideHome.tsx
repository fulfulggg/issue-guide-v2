import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import IssueGuideHeader from "@/components/issueGuide/IssueGuideHeader";
import {
  homeHeroContent,
  homeNavigationCards,
  homeKeyConceptContent,
  homeFooterContent,
} from "@/data/issueGuide/homeContent";
import { CheckCircle2, Target, Users } from "lucide-react";
import { Link } from "wouter";

export default function IssueGuideHome() {
  return (
    <div className="min-h-screen bg-background">
      <IssueGuideHeader />

      <main className="container py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          {homeHeroContent.badgeLabel && (
            <Badge variant="secondary" className="text-sm">
              {homeHeroContent.badgeLabel}
            </Badge>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {homeHeroContent.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {homeHeroContent.subtitle}
          </p>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            {homeHeroContent.lead}
          </p>
        </section>

        {/* Target Audience */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Users className="h-5 w-5 text-primary" />
            <h2>想定読者</h2>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {homeHeroContent.targetAudience.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Target className="h-5 w-5 text-primary" />
            <h2>このマニュアルで身につくこと</h2>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {homeHeroContent.benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-center">コンテンツ</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeNavigationCards.map((card) => (
              <Link key={card.id} href={card.href}>
                <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-3 h-3 rounded-full ${card.color} mb-2`} />
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{card.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Concept */}
        <section className="space-y-4">
          <Card className="border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl">{homeKeyConceptContent.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                {homeKeyConceptContent.definition}
              </blockquote>
              <p className="text-sm text-muted-foreground">
                {homeKeyConceptContent.source}
              </p>
              <div className="space-y-2">
                <p className="font-medium">5つの成立条件：</p>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                  {homeKeyConceptContent.conditions.map((condition) => (
                    <li key={condition.id}>{condition.text}</li>
                  ))}
                </ol>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="font-medium text-amber-800 dark:text-amber-200">
                  +{homeKeyConceptContent.additionalRequirement.id}. {homeKeyConceptContent.additionalRequirement.text}
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                  ※ {homeKeyConceptContent.additionalRequirement.note}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground py-8 border-t">
          {homeFooterContent.text}
        </footer>
      </main>
    </div>
  );
}
