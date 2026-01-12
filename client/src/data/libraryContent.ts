export interface LibraryHeaderContent {
  title: string;
  description: string;
}

export interface LibrarySearchContent {
  placeholder: string;
}

export interface LibraryStatsContent {
  searchResultLabel: string;
  favoritesLabel: string;
  categoriesLabel: string;
}

export interface LibraryMessagesContent {
  noResults: string;
  favoriteAdded: string;
  favoriteRemoved: string;
  copied: string;
}

export type LibraryLevel = 1 | 2 | 3;

export interface LibraryFooterContent {
  text: string;
}

export const libraryHeaderContent: LibraryHeaderContent = {
  title: "質問ライブラリ",
  description: "135個の質問例から、インスピレーションを得ましょう",
};

export const librarySearchContent: LibrarySearchContent = {
  placeholder: "質問やタグで検索...",
};

export const libraryStatsContent: LibraryStatsContent = {
  searchResultLabel: "検索結果",
  favoritesLabel: "お気に入り",
  categoriesLabel: "カテゴリ",
};

export const libraryMessagesContent: LibraryMessagesContent = {
  noResults: "検索条件に一致する質問が見つかりませんでした",
  favoriteAdded: "お気に入りに追加しました",
  favoriteRemoved: "お気に入りから削除しました",
  copied: "質問をコピーしました",
};

/** フィルタの「全て」ラベル。Library内で一貫して使う */
export const LIBRARY_ALL_CATEGORY = "全て" as const;

/** レベルごとのラベル（意味） */
export const libraryLevelLabels: Record<LibraryLevel, string> = {
  1: "情報収集",
  2: "洞察",
  3: "変容",
};

export const libraryFooterContent: LibraryFooterContent = {
  text: "質問力を極限まで高める © 2024",
};
