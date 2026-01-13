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
import { useEffect } from "react";
import { LearnContent } from "@/pages/issueGuide/Learn";
import { ReferenceContent } from "@/pages/issueGuide/Reference";
import { PracticeContent } from "@/pages/issueGuide/Practice";
import { EvaluateContent } from "@/pages/issueGuide/Evaluate";

export default function IssueGuideHome() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // On first load and on hash changes
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <IssueGuideHeader />

      <main className="flex-1 w-full">
        {/* Hero Section - Full width background with inline style for reliability */}
        <div 
          className="w-full border-b border-slate-100 dark:border-slate-800"
          style={{ backgroundColor: 'rgb(248 250 252)' }} // slate-50 equivalent
        >
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative text-center py-32 md:py-40 space-y-8">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              {homeHeroContent.badgeLabel && (
                <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-white/80 backdrop-blur-sm text-primary rounded-full shadow-sm">
                  {homeHeroContent.badgeLabel}
                </Badge>
              )}
              
              <div className="space-y-6">
                <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl text-slate-900 dark:text-slate-50 leading-[1.1]">
                  {homeHeroContent.title}
                </h1>
                <p className="text-2xl font-bold text-slate-700 dark:text-slate-300">
                  {homeHeroContent.subtitle}
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {homeHeroContent.lead}
              </p>
            </div>
          </div>
        </div>

        <div className="container space-y-24 py-24">
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

        {/* Learn */}
        <section id="learn" className="space-y-12 scroll-mt-24">
          <LearnContent showSectionNav={false} />
        </section>

        {/* Reference */}
        <section id="reference" className="space-y-12 scroll-mt-24">
          <ReferenceContent showSectionNav={false} />
        </section>

        {/* Practice */}
        <section id="practice" className="space-y-12 scroll-mt-24">
          <PracticeContent />
        </section>

        {/* Evaluate */}
        <section id="evaluate" className="space-y-12 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <EvaluateContent />
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

        </div>
      </main>
    </div>
  );
}
