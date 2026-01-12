import React, { createContext, useContext, useMemo, useState } from "react";

export type ElementLocator = {
  raw: string;
  filePath: string;
  line: number;
  column?: number;
};

export type SelectedElement = {
  locator: ElementLocator;
  element: Element;
  tagName: string;
  className: string;
  textContent: string;
};

type VisualEditorState = {
  isEditorMode: boolean;
  setEditorMode: (mode: boolean) => void;
  hoveredElement: SelectedElement | null;
  setHoveredElement: (el: SelectedElement | null) => void;
  selectedElement: SelectedElement | null;
  setSelectedElement: (el: SelectedElement | null) => void;
};

const VisualEditorContext = createContext<VisualEditorState | undefined>(
  undefined,
);

function normalizeFilePathFromLoc(filePath: string): string {
  const normalized = filePath.replace(/\\/g, "/");
  const idx = normalized.lastIndexOf("client/src/");
  if (idx >= 0) return normalized.slice(idx);
  return normalized.replace(/^\//, "");
}

export function parseDataLoc(raw: string): ElementLocator | null {
  // @builder.io/vite-plugin-jsx-loc は環境により以下の形式が混在する:
  // - "path:line"
  // - "path:line:column"
  // また Windows ドライブ等の ":" 混入に備え、末尾から数値を解析する
  const parts = raw.split(":");
  if (parts.length < 2) return null;

  const last = parts[parts.length - 1];
  const nLast = Number.parseInt(last, 10);
  if (!Number.isFinite(nLast)) return null;

  const secondLast = parts[parts.length - 2];
  const nSecondLast = Number.parseInt(secondLast, 10);

  let file = "";
  let line = 0;
  let column: number | undefined;

  if (Number.isFinite(nSecondLast)) {
    // ...:line:col
    column = nLast;
    line = nSecondLast;
    file = parts.slice(0, -2).join(":");
  } else {
    // ...:line
    column = undefined;
    line = nLast;
    file = parts.slice(0, -1).join(":");
  }

  if (!Number.isFinite(line) || line <= 0) return null;

  return {
    raw,
    filePath: normalizeFilePathFromLoc(file || parts[0]),
    line,
    column,
  };
}

function getElementClassName(el: Element): string {
  const cn = (el as any).className as unknown;
  if (typeof cn === "string") return cn;
  if (cn && typeof (cn as any).baseVal === "string") return (cn as any).baseVal;
  return "";
}

export function buildSelectedElement(el: Element): SelectedElement | null {
  const dataLoc = el.getAttribute("data-loc");
  if (!dataLoc) return null;

  const locator = parseDataLoc(dataLoc);
  if (!locator) return null;

  const text = (el.textContent ?? "").replace(/\s+/g, " ").trim();
  const clipped = text.length > 200 ? `${text.slice(0, 200)}…` : text;

  return {
    locator,
    element: el,
    tagName: el.tagName.toLowerCase(),
    className: getElementClassName(el),
    textContent: clipped,
  };
}

export function VisualEditorProvider({ children }: { children: React.ReactNode }) {
  const [isEditorMode, setEditorMode] = useState(true);
  const [hoveredElement, setHoveredElement] = useState<SelectedElement | null>(
    null,
  );
  const [selectedElement, setSelectedElement] =
    useState<SelectedElement | null>(null);

  const value = useMemo<VisualEditorState>(
    () => ({
      isEditorMode,
      setEditorMode,
      hoveredElement,
      setHoveredElement,
      selectedElement,
      setSelectedElement,
    }),
    [isEditorMode, hoveredElement, selectedElement],
  );

  return (
    <VisualEditorContext.Provider value={value}>
      {children}
    </VisualEditorContext.Provider>
  );
}

export function useVisualEditor(): VisualEditorState {
  const ctx = useContext(VisualEditorContext);
  if (!ctx) {
    throw new Error("useVisualEditor must be used within VisualEditorProvider");
  }
  return ctx;
}
