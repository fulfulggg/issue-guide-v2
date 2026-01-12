import { useEffect, useState } from "react";

import EnhancedAIFeedback from "@/components/EnhancedAIFeedback";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { trainingProgram } from "@/data/content";
import {
  trainingFooterContent,
  trainingHeaderContent,
  trainingLegendContent,
  trainingMessagesContent,
  trainingProgressContent,
  trainingQuestionAreaContent,
} from "@/data/trainingContent";
import { ArrowLeft, BookOpen, Brain, Calendar, CheckCircle2, Circle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

interface DayRecord {
  completed: boolean;
  questions: string[];
  date?: string;
}

type TrainingData = {
  [key: number]: DayRecord;
};

export default function Training() {
  const [currentDay, setCurrentDay] = useState(1);
  const [questions, setQuestions] = useState<string[]>(Array(10).fill(""));
  const [trainingData, setTrainingData] = useState<TrainingData>({});
  const [showAIFeedback, setShowAIFeedback] = useState(false);

  const totalDays = trainingProgressContent.totalDays;

  // Load training data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("questionMasteryTraining");
    if (saved) {
      const data = JSON.parse(saved);
      setTrainingData(data);

      // Find the first incomplete day
      for (let i = 1; i <= totalDays; i++) {
        if (!data[i]?.completed) {
          setCurrentDay(i);
          break;
        }
      }
    }
  }, [totalDays]);

  // Load questions for current day
  useEffect(() => {
    if (trainingData[currentDay]?.questions) {
      setQuestions(trainingData[currentDay].questions);
    } else {
      setQuestions(Array(10).fill(""));
    }
  }, [currentDay, trainingData]);

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const saveDay = () => {
    const filledQuestions = questions.filter((q) => q.trim() !== "");

    if (filledQuestions.length === 0) {
      toast.error(trainingMessagesContent.minQuestionsError);
      return;
    }

    const newData = {
      ...trainingData,
      [currentDay]: {
        completed: true,
        questions,
        date: new Date().toISOString(),
      },
    };

    setTrainingData(newData);
    localStorage.setItem("questionMasteryTraining", JSON.stringify(newData));

    toast.success(
      trainingMessagesContent.dayCompleteTitleTemplate.replace(
        "{day}",
        String(currentDay),
      ),
      {
        description: trainingMessagesContent.dayCompleteDescriptionTemplate.replace(
          "{count}",
          String(filledQuestions.length),
        ),
      },
    );
  };

  const resetTraining = () => {
    if (confirm(trainingMessagesContent.resetConfirm)) {
      localStorage.removeItem("questionMasteryTraining");
      setTrainingData({});
      setCurrentDay(1);
      setQuestions(Array(10).fill(""));
      toast.success(trainingMessagesContent.resetDone);
    }
  };

  const completedDays = Object.values(trainingData).filter((d) => d.completed).length;
  const progress = (completedDays / totalDays) * 100;

  const dayInfo = trainingProgram.find((d) => d.day === currentDay);

  const remainingDays = totalDays - completedDays;
  const progressMessage =
    completedDays === totalDays
      ? trainingProgressContent.completeMessage
      : trainingProgressContent.remainingMessageTemplate.replace(
          "{remaining}",
          String(remainingDays),
        );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <Header />

      <main className="flex-1 container py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href={trainingHeaderContent.backLinkHref}>
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {trainingHeaderContent.backLinkLabel}
            </Button>
          </Link>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {trainingHeaderContent.title}
              </h1>
              <p className="text-muted-foreground">
                {trainingHeaderContent.subtitle}
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={resetTraining}>
              {trainingHeaderContent.resetButtonLabel}
            </Button>
          </div>
        </div>

        {/* Progress */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {trainingProgressContent.title}
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                {completedDays} / {totalDays} {trainingProgressContent.badgeUnit}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">{progressMessage}</p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">カレンダー</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {trainingProgram.map((day) => {
                    const isCompleted = trainingData[day.day]?.completed;
                    const isCurrent = day.day === currentDay;

                    return (
                      <button
                        key={day.day}
                        onClick={() => setCurrentDay(day.day)}
                        className={
                          "aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all hover:scale-105 " +
                          (isCurrent
                            ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 "
                            : "") +
                          (isCompleted && !isCurrent
                            ? "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100 "
                            : "") +
                          (!isCompleted && !isCurrent
                            ? "bg-muted text-muted-foreground hover:bg-muted/80 "
                            : "")
                        }
                      >
                        {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : day.day}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Category Legend */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">
                  {trainingLegendContent.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {trainingLegendContent.categories.map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <Circle className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-sm">{cat}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Training Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-base px-3 py-1">
                    Day {currentDay}
                  </Badge>
                  <Badge className="text-base px-3 py-1">
                    {dayInfo?.category}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{dayInfo?.theme}</CardTitle>
                <CardDescription className="text-base pt-2">
                  <Sparkles className="h-4 w-4 inline mr-2" />
                  {dayInfo?.prompt}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm font-medium mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {trainingQuestionAreaContent.introTitle}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {trainingQuestionAreaContent.introNote}
                  </p>
                </div>

                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <div key={index}>
                      <label className="text-sm font-medium text-muted-foreground mb-1 block">
                        {trainingQuestionAreaContent.questionLabelPrefix} {index + 1}
                      </label>
                      <Textarea
                        value={question}
                        onChange={(e) =>
                          handleQuestionChange(index, e.target.value)
                        }
                        placeholder={
                          trainingQuestionAreaContent.questionPlaceholder
                        }
                        className="min-h-[80px]"
                        disabled={trainingData[currentDay]?.completed}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex gap-4">
                    {!trainingData[currentDay]?.completed ? (
                      <Button onClick={saveDay} size="lg" className="flex-1">
                        <CheckCircle2 className="h-5 w-5 mr-2" />
                        {trainingQuestionAreaContent.completeButtonLabelPrefix}
                        {currentDay}
                        {trainingQuestionAreaContent.completeButtonLabelSuffix}
                      </Button>
                    ) : (
                      <div className="flex-1 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 rounded-lg p-4 text-center font-medium">
                        <CheckCircle2 className="h-5 w-5 inline mr-2" />
                        {trainingQuestionAreaContent.completedLabel}
                      </div>
                    )}
                  </div>

                  {trainingData[currentDay]?.completed &&
                    questions.filter((q) => q.trim() !== "").length > 0 && (
                      <Button
                        onClick={() => setShowAIFeedback(true)}
                        size="lg"
                        variant="outline"
                        className="w-full"
                      >
                        <Brain className="h-5 w-5 mr-2" />
                        {trainingQuestionAreaContent.aiButtonLabel}
                      </Button>
                    )}
                </div>

                {trainingData[currentDay]?.date && (
                  <p className="text-xs text-muted-foreground text-center">
                    {trainingQuestionAreaContent.completedDatePrefix}
                    {new Date(trainingData[currentDay].date!).toLocaleDateString(
                      "ja-JP",
                    )}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t py-8 bg-secondary/30 mt-16">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{trainingFooterContent.text}</p>
        </div>
      </footer>

      <EnhancedAIFeedback
        open={showAIFeedback}
        onClose={() => setShowAIFeedback(false)}
        questions={questions.filter((q) => q.trim() !== "")}
      />
    </div>
  );
}
