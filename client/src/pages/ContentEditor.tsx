import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Copy, Send, Sparkles } from "lucide-react";
import Header from "@/components/Header";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const CONTENT_FILES = [
  { value: "homeContent", label: "Home" },
  { value: "trainingContent", label: "Training" },
  { value: "libraryContent", label: "Library" },
];

const SYSTEM_PROMPT = `あなたは React + TypeScript プロジェクトのコンテンツ編集アシスタントです。

対象: client/src/data/*.ts ファイル
役割: ユーザーの指示に従って、型安全にコンテンツを編集します。

ルール:
1. interface定義は変更しない
2. 既存の型に準拠した編集のみ
3. 変更が必要な部分のコードを提示
4. TypeScriptのコードブロック形式で出力

例:
ユーザー: "タイトルをもっとキャッチーに"
あなた: 
\`\`\`typescript
export const homeHeroContent: HomeHeroContent = {
  badgeLabel: "質問力を極限まで高める完全ガイド",
  titleLine1: "質問の力で",
  titleLine2: "人生を変える",
  ...
};
\`\`\`
`;

export default function ContentEditor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "こんにちは！コンテンツ編集アシスタントです。\n\n編集したいファイルを選択して、変更内容を教えてください。\n\n例:\n- 「タイトルをもっとキャッチーに」\n- 「説明文を簡潔にして」\n- 「ボタンのラベルを変更して」",
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState("homeContent");
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("コードをクリップボードにコピーしました");
  };

  const extractCodeBlock = (content: string): string | null => {
    const codeBlockRegex = /```typescript\n([\s\S]*?)\n```/;
    const match = content.match(codeBlockRegex);
    return match ? match[1] : null;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // コンテンツ編集用のプロンプトを構築
      const prompt = `${SYSTEM_PROMPT}

ファイル: client/src/data/${selectedFile}.ts
ユーザーの指示: ${input}

上記の指示に従って、該当ファイルの編集コードをTypeScriptのコードブロック形式で提案してください。`;

      // 既存のAI APIを活用
      const response = await fetch("/api/ai/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-AI-Provider": "openai",
        },
        body: JSON.stringify({
          question: prompt,
        }),
      });

      if (!response.ok) {
        throw new Error("AI APIのリクエストに失敗しました");
      }

      const data = await response.json();
      const aiMsg: Message = {
        role: "assistant",
        content: data.mode === "single" 
          ? data.feedback 
          : "申し訳ありません。編集提案を生成できませんでした。",
      };

      setMessages([...updatedMessages, aiMsg]);
    } catch (error) {
      console.error("Error:", error);
      toast.error("エラーが発生しました。もう一度お試しください。");
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "申し訳ありません。エラーが発生しました。",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <Header />

      <main className="flex-1 container py-8">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
          {/* 左: プレビューペイン */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-secondary/50">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                プレビュー
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-5rem)]">
              <iframe
                src="/"
                className="w-full h-full border-0"
                title="プレビュー"
              />
            </CardContent>
          </Card>

          {/* 右: チャットペイン */}
          <Card className="flex flex-col overflow-hidden">
            <CardHeader className="bg-secondary/50">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                AI編集アシスタント
              </CardTitle>
              <Select value={selectedFile} onValueChange={setSelectedFile}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CONTENT_FILES.map((file) => (
                    <SelectItem key={file.value} value={file.value}>
                      {file.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>

            {/* メッセージ履歴 */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg p-3 ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      {msg.role === "assistant" &&
                      extractCodeBlock(msg.content) ? (
                        <div className="space-y-2">
                          <p className="text-sm mb-2">
                            {msg.content.split("```")[0]}
                          </p>
                          <div className="relative">
                            <pre className="bg-black/10 p-3 rounded text-xs overflow-x-auto">
                              <code>{extractCodeBlock(msg.content)}</code>
                            </pre>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="absolute top-2 right-2"
                              onClick={() =>
                                copyToClipboard(
                                  extractCodeBlock(msg.content) || ""
                                )
                              }
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            💡 コピーボタンでコードをコピーして、エディタで{" "}
                            <code className="bg-black/10 px-1 rounded">
                              client/src/data/{selectedFile}.ts
                            </code>{" "}
                            に貼り付けてください
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap">
                          {msg.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
                        <span className="text-sm">考え中...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* 入力欄 */}
            <CardContent className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
                  placeholder="例: タイトルをもっとキャッチーに"
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
