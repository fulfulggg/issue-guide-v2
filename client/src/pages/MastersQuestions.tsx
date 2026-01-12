import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { masters } from "@/data/masters";
import { Search, Filter, Lightbulb, Target } from "lucide-react";

export default function MastersQuestions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaster, setSelectedMaster] = useState<string>("all");

  // フィルタリング
  const filteredMasters = useMemo(() => {
    return masters.filter(master => {
      // 偉人フィルター
      if (selectedMaster !== "all" && master.id !== selectedMaster) {
        return false;
      }

      // 検索クエリ
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchName = master.name.toLowerCase().includes(query);
        const matchDescription = master.description.toLowerCase().includes(query);
        const matchQuestions = master.questions.some(q => 
          q.question.toLowerCase().includes(query) ||
          q.context.toLowerCase().includes(query) ||
          q.purpose.toLowerCase().includes(query)
        );
        return matchName || matchDescription || matchQuestions;
      }

      return true;
    });
  }, [selectedMaster, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* ヘッダー */}
      <div className="bg-white border-b">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">偉人の問い</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            歴史上の偉大な思想家・科学者・経営者の質問法を体系的に学べる質問集。
            各偉人の思想と代表的な質問から、あなたの状況に最適な質問を見つけることができます。
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{masters.length}名の偉人</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{filteredMasters.length}名が表示中</span>
            </div>
          </div>
        </div>
      </div>

      {/* フィルターセクション */}
      <div className="bg-white border-b">
        <div className="container py-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">フィルター</h2>
          </div>
          
          {/* 検索バー */}
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="偉人名や質問を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* 偉人フィルター */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={selectedMaster} onValueChange={setSelectedMaster}>
              <SelectTrigger>
                <SelectValue placeholder="偉人" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全ての偉人</SelectItem>
                {masters.map(master => (
                  <SelectItem key={master.id} value={master.id}>{master.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* 偉人の詳細情報セクション */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">質問の名手から学ぶ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMasters.map((master) => (
            <Card key={master.id} className="hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{master.name}</CardTitle>
                  <Badge variant="outline">{master.period}</Badge>
                </div>
                <Badge className="w-fit mb-2">{master.title}</Badge>
                <CardDescription className="text-base">
                  {master.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* アプローチ */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                    <p className="text-sm font-medium">アプローチ</p>
                  </div>
                  <p className="text-sm text-gray-700">{master.approach}</p>
                </div>

                {/* 主要原則 */}
                {master.keyPrinciples && master.keyPrinciples.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-purple-600" />
                      <p className="text-sm font-medium">主要原則</p>
                    </div>
                    <div className="space-y-2">
                      {master.keyPrinciples.map((principle, idx) => (
                        <div key={idx} className="text-sm bg-purple-50 p-3 rounded">
                          <span className="font-medium">{principle.name}:</span>
                          <span className="text-gray-700 ml-1">{principle.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 代表的な質問 */}
                {master.questions && master.questions.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">❓ 代表的な質問</p>
                    <div className="space-y-2">
                      {master.questions.slice(0, 3).map((q, idx) => (
                        <div key={idx} className="bg-primary/5 p-3 rounded border-l-2 border-primary">
                          <p className="text-sm font-medium italic">「{q.question}」</p>
                          <p className="text-xs text-gray-600 mt-1">{q.purpose}</p>
                        </div>
                      ))}
                      {master.questions.length > 3 && (
                        <p className="text-xs text-gray-500 text-center">他{master.questions.length - 3}問</p>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
