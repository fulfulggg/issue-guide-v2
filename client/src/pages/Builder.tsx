import { useState } from "react";
import { toast } from "sonner";
import { MousePointerClick, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import PreviewViewport from "@/components/visual-editor/PreviewViewport";
import {
  VisualEditorProvider,
  useVisualEditor,
} from "@/contexts/VisualEditorContext";
import {
  fetchCodeContext,
  postCodeUpdate,
  type CodeUpdateRequest,
} from "@/hooks/useCodeUpdate";

type Message =
  | { role: "user"; content: string }
  | { role: "assistant"; content: string; patch?: CodeUpdateRequest };

const SYSTEM_PROMPT = `あなたは React + TypeScript + Vite のビジュアルエディタ用コーディングアシスタントです。

必ず次の要件を守ってください:
- 出力は最後に **1つの JSON を \`\`\`json コードブロックで出力** してください（それ以外の JSON は出さない）
- JSON 形式:
  {"filePath":"client/src/...","lineStart":1,"lineEnd":1,"newCode":"..."}
- filePath は client/src 配下のみ
- 可能なら lineStart/lineEnd は変更対象の最小範囲
- newCode は置換後のコード（複数行可）

説明文は JSON の前に書いてよいが、最後は必ず JSON ブロックで終えること。
`;

function extractJsonPatch(text: string): CodeUpdateRequest | null {
  const match = text.match(/```json\s*([\s\S]*?)\s*```/);
  if (!match) return null;

  try {
    const parsed = JSON.parse(match[1]);
    if (
      parsed &&
      typeof parsed.filePath === "string" &&
      typeof parsed.lineStart === "number" &&
      typeof parsed.lineEnd === "number" &&
      typeof parsed.newCode === "string"
    ) {
      return parsed as CodeUpdateRequest;
    }
    return null;
  } catch {
    return null;
  }
}

function VisualEditorPage() {
  const { selectedElement, isEditorMode, setEditorMode } = useVisualEditor();
  const [previewPath, setPreviewPath] = useState("/");
  const [provider, setProvider] = useState<"openai" | "anthropic">("openai");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "プレビュー上の要素をクリックして選択し、右側のチャットで変更指示を出してください。\n\n例: ‘このボタンを赤くして’",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const selectedLabel = selectedElement
    ? `${selectedElement.locator.filePath}:${selectedElement.locator.line}`
    : "なし";

  const availableRoutes = (() => {
    const raw = (window as any).__WOUTER_ROUTES__ as string[] | undefined;
    const list = Array.isArray(raw)
      ? raw
      : ["/", "/training", "/library", "/phase-guide"]; // fallback
    return list.filter((p) => p !== "/builder" && p !== "/404");
  })();

  const handleApplyPatch = async (patch: CodeUpdateRequest) => {
    try {
      await postCodeUpdate(patch);
      toast.success("コードを更新しました（HMR反映）");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "不明なエラー";
      toast.error(`更新に失敗しました: ${msg}`);
    }
  };

  const handleSend = async () => {
    const userInstruction = input.trim();
    if (!userInstruction) return;

    setInput("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: "user", content: userInstruction }]);

    try {
      const selectionContext = selectedElement
        ? [
            `選択要素: ${selectedElement.locator.raw}`,
            `file: ${selectedElement.locator.filePath}`,
            `line: ${selectedElement.locator.line}`,
            `tag: ${selectedElement.tagName}`,
            `class: ${selectedElement.className}`,
            `text: ${selectedElement.textContent}`,
          ].join("\n")
        : "選択要素: なし";

      let codeContext = "";
      if (selectedElement) {
        const ctx = await fetchCodeContext({
          filePath: selectedElement.locator.filePath,
          line: selectedElement.locator.line,
          radius: 80,
        });

        codeContext = [
          `対象ファイル: ${ctx.filePath}`,
          `スニペット範囲: ${ctx.startLine}-${ctx.endLine} / total ${ctx.totalLines}`,
          "```tsx",
          ctx.snippet,
          "```",
        ].join("\n");
      }

      const prompt = [
        SYSTEM_PROMPT,
        "---",
        selectionContext,
        codeContext,
        "---",
        `ユーザー指示: ${userInstruction}`,
      ]
        .filter(Boolean)
        .join("\n\n");

      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-AI-Provider": provider,
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(text || "AI API request failed");
      }

      const data = (await response.json()) as any;
      const content =
        typeof data?.message === "string"
          ? data.message
          : "応答を解析できませんでした";

      const patch = extractJsonPatch(content);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content, patch: patch ?? undefined },
      ]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "不明なエラー";
      toast.error(`エラー: ${msg}`);
      setMessages((prev) => [...prev, { role: "assistant", content: `エラー: ${msg}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <MousePointerClick className="h-5 w-5" />
              Visual Editor
            </h1>
            <p className="text-xs text-muted-foreground">
              EditorMode: {isEditorMode ? "ON" : "OFF"} / 選択中: <code>{selectedLabel}</code>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Select value={previewPath} onValueChange={setPreviewPath}>
              <SelectTrigger className="h-9 w-[240px]">
                <SelectValue placeholder="プレビュー対象" />
              </SelectTrigger>
              <SelectContent>
                {availableRoutes.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={provider} onValueChange={(v) => setProvider(v as any)}>
              <SelectTrigger className="h-9 w-[150px]">
                <SelectValue placeholder="AI" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="openai">openai</SelectItem>
                <SelectItem value="anthropic">anthropic</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setEditorMode(!isEditorMode)}
            >
              {isEditorMode ? "選択OFF" : "選択ON"}
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-14rem)]">
          <Card className="overflow-hidden">
            <CardHeader className="bg-secondary/50">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                プレビュー（同一ツリー）
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-5rem)]">
              <PreviewViewport path={previewPath} onPathChange={setPreviewPath} />
            </CardContent>
          </Card>

          <Card className="flex flex-col overflow-hidden">
            <CardHeader className="bg-secondary/50">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                AI 編集チャット
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                入力欄の上に選択コンテキストが自動付加されます。
              </p>
            </CardHeader>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-lg p-3 ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      {msg.role === "assistant" && msg.patch ? (
                        <div className="mt-3 flex justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleApplyPatch(msg.patch!)}
                          >
                            適用（/api/code/update）
                          </Button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
                {isLoading ? (
                  <div className="text-sm text-muted-foreground">考え中...</div>
                ) : null}
              </div>
            </ScrollArea>

            <CardContent className="p-4 border-t">
              <div className="mb-2 text-xs text-muted-foreground">
                選択中: <code>{selectedLabel}</code>
              </div>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (isLoading) return;
                  handleSend();
                }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="例: このボタンの背景色を赤にして"
                  disabled={isLoading}
                  className="flex-1"
                  autoFocus
                />
                <Button type="submit" disabled={isLoading || !input.trim()} className="gap-2">
                  <Send className="h-4 w-4" />
                  送信
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default function Builder() {
  return (
    <VisualEditorProvider>
      <VisualEditorPage />
    </VisualEditorProvider>
  );
}
