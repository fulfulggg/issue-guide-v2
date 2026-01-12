import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import IssueGuideHeader from "@/components/issueGuide/IssueGuideHeader";
import {
  purposeContent,
  definitionContent,
  importanceContent,
  componentContent,
  notIssueContent,
  learnSections,
} from "@/data/issueGuide/learnContent";
import { AlertCircle, CheckCircle2, XCircle, Lightbulb, ArrowRight } from "lucide-react";

export default function Learn() {
  return (
    <div className="min-h-screen bg-background">
      <IssueGuideHeader />

      <main className="container py-8 space-y-12">
        <h1 className="text-3xl font-bold">学ぶ</h1>
        <p className="text-muted-foreground">
          論点の定義、重要性、構成要素を理解する。基礎概念をしっかり押さえましょう。
        </p>

        {/* Section Navigation */}
        <nav className="flex flex-wrap gap-2">
          {learnSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-3 py-1 text-sm bg-muted rounded-full hover:bg-primary/10 transition-colors"
            >
              {section.sectionNumber}. {section.title}
            </a>
          ))}
        </nav>

        {/* Section 1: Purpose */}
        <section id="purpose" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            {purposeContent.title}
          </h2>
          <p className="text-muted-foreground">{purposeContent.description}</p>
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-lg">{purposeContent.importantPremise.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {purposeContent.importantPremise.points.map((point, index) => (
                <div key={index} className="space-y-1">
                  <p className="font-medium">{point.label}</p>
                  <p className="text-muted-foreground">{point.text}</p>
                  {point.source && (
                    <p className="text-xs text-muted-foreground">{point.source}</p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Section 2: Definition */}
        <section id="definition" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
            {definitionContent.title}
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                {definitionContent.mainDefinition.text}
              </blockquote>
              <p className="text-sm text-muted-foreground">
                {definitionContent.mainDefinition.source}
              </p>
              <div className="space-y-2">
                <p className="font-medium">5つの成立条件：</p>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                  {definitionContent.fiveConditions.map((condition) => (
                    <li key={condition.id}>{condition.text}</li>
                  ))}
                </ol>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="font-medium text-amber-800 dark:text-amber-200">
                  +{definitionContent.additionalRequirement.id}. {definitionContent.additionalRequirement.text}
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                  ※ {definitionContent.additionalRequirement.note}
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  論点ではないもの（アンチパターン）：
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  {definitionContent.antiPatterns.map((pattern, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500">×</span>
                      {pattern.text}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Importance */}
        <section id="importance" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
            {importanceContent.title}
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                {importanceContent.quote.text}
              </blockquote>
              <p className="text-sm text-muted-foreground">
                {importanceContent.quote.source}
              </p>
              <div className="space-y-4">
                <p className="font-medium">論点が立てられる人の3つの違い：</p>
                {importanceContent.threeDifferences.map((diff) => (
                  <div key={diff.id} className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-medium">{diff.id}. {diff.title}</p>
                    <p className="text-muted-foreground mt-1">{diff.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <p className="font-medium">論点の位置づけ（フロー）：</p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {importanceContent.flowDiagram.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="px-3 py-2 bg-primary/10 rounded-lg">
                        <p className="font-medium">{step}</p>
                        <p className="text-xs text-muted-foreground">
                          {importanceContent.flowDiagram.labels[index]}
                        </p>
                      </div>
                      {index < importanceContent.flowDiagram.steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-medium">{importanceContent.tradeoff.title}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-base">{importanceContent.tradeoff.speedPriority.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {importanceContent.tradeoff.speedPriority.points.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-base">{importanceContent.tradeoff.qualityAssurance.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {importanceContent.tradeoff.qualityAssurance.points.map((point, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 4: Components */}
        <section id="components" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
            {componentContent.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {componentContent.elements.map((element) => (
              <AccordionItem key={element.id} value={`element-${element.id}`} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-medium">{element.title}</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  {element.goodExamples.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium text-green-600 dark:text-green-400 flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        良い例：
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        {element.goodExamples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {element.badExamples.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium text-red-600 dark:text-red-400 flex items-center gap-1">
                        <XCircle className="h-4 w-4" />
                        悪い例：
                      </p>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        {element.badExamples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {element.tips && (
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                      <p className="text-sm flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        {element.tips}
                      </p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                {componentContent.selfCheckChecklist.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {componentContent.selfCheckChecklist.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-green-500">□</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Section 5: Not Issue */}
        <section id="not-issue" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
            {notIssueContent.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {notIssueContent.confusionPatterns.map((pattern) => (
              <AccordionItem key={pattern.id} value={`pattern-${pattern.id}`} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-medium flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    {pattern.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  {pattern.comparison.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        item.type === "論点"
                          ? "bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800"
                          : "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800"
                      }`}
                    >
                      <p className={`font-medium ${item.type === "論点" ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"}`}>
                        {item.type}
                      </p>
                      <p className="text-sm mt-1">{item.example}</p>
                      {item.characteristics.length > 0 && (
                        <ul className="mt-2 text-xs text-muted-foreground">
                          {item.characteristics.map((char, i) => (
                            <li key={i}>• {char}</li>
                          ))}
                        </ul>
                      )}
                      {item.solution && (
                        <p className="mt-2 text-sm bg-white/50 dark:bg-black/20 p-2 rounded">
                          <strong>解決策：</strong> {item.solution}
                        </p>
                      )}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">変換テンプレート</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {notIssueContent.conversionTemplates.map((template) => (
                <div key={template.id} className="space-y-2 p-4 bg-muted/50 rounded-lg">
                  <p className="font-medium">{template.title}</p>
                  <div className="text-sm space-y-1">
                    <p className="text-red-600 dark:text-red-400">{template.before}</p>
                    <p className="text-muted-foreground">↓ {template.question}</p>
                    <p className="text-green-600 dark:text-green-400">{template.after}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
