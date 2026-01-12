import { useMemo, useState } from "react";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { categories, questionLibrary } from "@/data/questionLibrary";
import {
  LIBRARY_ALL_CATEGORY,
  libraryFooterContent,
  libraryHeaderContent,
  libraryLevelLabels,
  libraryMessagesContent,
  librarySearchContent,
  libraryStatsContent,
} from "@/data/libraryContent";
import { BookOpen, Filter, Heart, Search } from "lucide-react";
import { toast } from "sonner";

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(LIBRARY_ALL_CATEGORY);
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("questionFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  const filteredQuestions = useMemo(() => {
    let filtered = questionLibrary;

    // Category filter
    if (selectedCategory !== LIBRARY_ALL_CATEGORY) {
      filtered = filtered.filter((q) => q.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (q) =>
          q.question.toLowerCase().includes(query) ||
          q.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const toggleFavorite = (id: number) => {
    const wasFavorite = favorites.includes(id);
    const newFavorites = wasFavorite
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem("questionFavorites", JSON.stringify(newFavorites));

    toast.success(
      wasFavorite
        ? libraryMessagesContent.favoriteRemoved
        : libraryMessagesContent.favoriteAdded,
    );
  };

  const copyToClipboard = (question: string) => {
    navigator.clipboard.writeText(question);
    toast.success(libraryMessagesContent.copied);
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-blue-100 text-blue-900 border-blue-300";
      case 2:
        return "bg-purple-100 text-purple-900 border-purple-300";
      case 3:
        return "bg-pink-100 text-pink-900 border-pink-300";
      default:
        return "bg-gray-100 text-gray-900 border-gray-300";
    }
  };

  const getLevelLabel = (level: number) => {
    return libraryLevelLabels[level as 1 | 2 | 3] ?? "";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      <Header />

      <main className="flex-1 container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">
              {libraryHeaderContent.title}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {libraryHeaderContent.description}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={librarySearchContent.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Button
              variant={selectedCategory === LIBRARY_ALL_CATEGORY ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(LIBRARY_ALL_CATEGORY)}
            >
              {LIBRARY_ALL_CATEGORY} ({questionLibrary.length})
            </Button>
            {categories.map((category) => {
              const count = questionLibrary.filter((q) => q.category === category).length;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({count})
                </Button>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{filteredQuestions.length}</p>
                <p className="text-sm text-muted-foreground">
                  {libraryStatsContent.searchResultLabel}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{favorites.length}</p>
                <p className="text-sm text-muted-foreground">
                  {libraryStatsContent.favoritesLabel}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{categories.length}</p>
                <p className="text-sm text-muted-foreground">
                  {libraryStatsContent.categoriesLabel}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Questions Grid */}
        {filteredQuestions.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">
              {libraryMessagesContent.noResults}
            </p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filteredQuestions.map((question) => (
              <Card
                key={question.id}
                className="hover:shadow-lg transition-shadow relative"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {question.category}
                      </Badge>
                      <Badge className={`text-xs ${getLevelColor(question.level)}`}>
                        レベル{question.level}: {getLevelLabel(question.level)}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => toggleFavorite(question.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(question.id)
                            ? "fill-red-500 text-red-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                  </div>
                  <CardTitle className="text-lg leading-relaxed">
                    {question.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {question.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => copyToClipboard(question.question)}
                  >
                    質問をコピー
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t py-8 bg-secondary/30 mt-16">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{libraryFooterContent.text}</p>
        </div>
      </footer>
    </div>
  );
}
