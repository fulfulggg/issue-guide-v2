import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IssueGuideHeader from "@/components/issueGuide/IssueGuideHeader";
import CopyButton from "@/components/issueGuide/CopyButton";
import {
  basicProcessContent,
  meceContent,
  workflowContent,
  templateContent,
  referenceSections,
} from "@/data/issueGuide/referenceContent";
import { CheckCircle2, Lightbulb, Clock, AlertTriangle } from "lucide-react";

export function ReferenceContent({ showSectionNav = true }: { showSectionNav?: boolean }) {
  return (
    <>
      <h1 className="text-3xl font-bold">参照する</h1>
      <p className="text-muted-foreground">
        手順、ワークフロー、テンプレートを確認。実務ですぐに使えるリファレンス集。
      </p>

      {/* Section Navigation */}
      {showSectionNav ? (
        <nav className="flex flex-wrap gap-2">
          {referenceSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-3 py-1 text-sm bg-muted rounded-full hover:bg-primary/10 transition-colors"
            >
              {section.sectionNumber}. {section.title}
            </a>
          ))}
        </nav>
      ) : null}

        {/* Section 6: Basic Process */}
        <section id="basic-process" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
            {basicProcessContent.title}
          </h2>
          <div className="space-y-4">
            {basicProcessContent.steps.map((step) => (
              <Card key={step.id}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      {step.id}
                    </span>
                    {step.title}
                  </CardTitle>
                  <CardDescription>{step.question}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{step.description}</p>
                  {step.template && (
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm whitespace-pre-wrap font-mono">{step.template}</pre>
                    </div>
                  )}
                  {step.tips && (
                    <div className="space-y-2">
                      <p className="font-medium flex items-center gap-1 text-sm">
                        <Lightbulb className="h-4 w-4 text-amber-500" />
                        ヒント：
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {step.tips.map((tip, index) => (
                          <li key={index}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.checklist && (
                    <div className="space-y-2">
                      <p className="font-medium text-sm">チェックリスト：</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {step.checklist.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-500">□</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 7: MECE */}
        <section id="mece" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
            {meceContent.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {meceContent.steps.map((step) => (
              <AccordionItem key={step.id} value={`mece-${step.id}`} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-medium flex items-center gap-2">
                    <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      {step.id}
                    </span>
                    {step.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">{step.description}</p>
                  {step.template && (
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm whitespace-pre-wrap font-mono">{step.template}</pre>
                    </div>
                  )}
                  {step.examples && (
                    <div className="space-y-2">
                      <p className="font-medium text-sm">例：</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {step.examples.map((example, index) => (
                          <li key={index}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.tips && (
                    <div className="space-y-2">
                      <p className="font-medium text-sm flex items-center gap-1">
                        <Lightbulb className="h-4 w-4 text-amber-500" />
                        ヒント：
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {step.tips.map((tip, index) => (
                          <li key={index}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-base">{meceContent.conversionTemplate.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {meceContent.conversionTemplate.examples.map((example, index) => (
                  <li key={index}>• {example}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Section 8: Workflow */}
        <section id="workflow" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
            {workflowContent.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {workflowContent.modes.speed.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{workflowContent.modes.speed.description}</p>
                <p className="text-sm font-medium mt-2">所要時間: {workflowContent.modes.speed.duration}</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {workflowContent.modes.deep.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{workflowContent.modes.deep.description}</p>
                <p className="text-sm font-medium mt-2">所要時間: {workflowContent.modes.deep.duration}</p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            {workflowContent.steps.map((step) => (
              <Card key={step.id} className={step.isGate ? "border-amber-500 border-2" : ""}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {step.isGate && <AlertTriangle className="h-5 w-5 text-amber-500" />}
                    {step.title}
                  </CardTitle>
                  <CardDescription>{step.purpose}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {step.method.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {step.tips && (
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                      <p className="font-medium text-sm flex items-center gap-1 mb-2">
                        <Lightbulb className="h-4 w-4 text-blue-500" />
                        Tips：
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {step.tips.map((tip, index) => (
                          <li key={index}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">運用のコツ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {workflowContent.operationTips.map((tip) => (
                <div key={tip.id} className="space-y-1">
                  <p className="font-medium">{tip.id}. {tip.title}</p>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Section 9: Templates */}
        <section id="templates" className="space-y-4 scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">9</span>
            {templateContent.title}
          </h2>
          <Tabs defaultValue="1" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1">
              {templateContent.templates.map((template) => (
                <TabsTrigger key={template.id} value={String(template.id)} className="text-xs">
                  ①②③④⑤{template.id === 1 ? "①" : template.id === 2 ? "②" : template.id === 3 ? "③" : template.id === 4 ? "④" : "⑤"}
                </TabsTrigger>
              ))}
            </TabsList>
            {templateContent.templates.map((template) => (
              <TabsContent key={template.id} value={String(template.id)} className="mt-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </div>
                      <CopyButton content={template.content} label="テンプレをコピー" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg overflow-auto max-h-96">
                      <pre className="text-sm whitespace-pre-wrap font-mono">{template.content}</pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

    </>
  );
}

export default function Reference() {
  return (
    <div className="min-h-screen bg-background">
      <IssueGuideHeader />

      <main className="container py-8 space-y-12">
        <ReferenceContent />
      </main>
    </div>
  );
}
