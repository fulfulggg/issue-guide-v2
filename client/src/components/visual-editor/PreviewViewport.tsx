import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Router } from "wouter";
import { AppRoutes } from "@/App";
import { useVisualEditor } from "@/contexts/VisualEditorContext";
import { useElementSelection } from "@/hooks/useElementSelection";
import EditorOverlay from "./EditorOverlay";

export default function PreviewViewport({
  path,
  onPathChange,
}: {
  path: string;
  onPathChange: (p: string) => void;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const { isEditorMode, setHoveredElement, setSelectedElement } = useVisualEditor();
  const [location, setLocation] = useState(path);

  useEffect(() => {
    setLocation(path);
  }, [path]);

  const setPreviewLocation = useCallback(
    (to: string) => {
      setLocation(to);
      onPathChange(to);
    },
    [onPathChange],
  );

  const hook = useMemo(() => {
    return () => [location, setPreviewLocation] as any;
  }, [location, setPreviewLocation]);

  useElementSelection({
    enabled: isEditorMode,
    rootRef,
    onHover: setHoveredElement,
    onSelect: setSelectedElement,
  });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // data-loc が実際に付与されているかをログで検証
    const id = window.setTimeout(() => {
      const count = root.querySelectorAll("[data-loc]").length;
      // eslint-disable-next-line no-console
      console.debug("[visual-editor] data-loc count in preview:", count);
    }, 0);

    return () => window.clearTimeout(id);
  }, [location]);

  return (
    <div className="relative w-full h-full">
      <Router hook={hook}>
        {/*
          NOTE: iframe を使わない場合、Tailwind のブレークポイントは「window 幅」で決まる。
          そのまま左右分割すると、見た目は狭いのに desktop 表示になりヘッダ等が崩れる。

          Phase1 では最小限の安定策として、プレビューの中身に幅を固定し、
          必要なら横スクロールできるようにする。
        */}
        <div className="w-full h-full overflow-auto bg-background">
          <div
            ref={rootRef}
            data-visual-editor-preview-root
            className="min-h-full"
            style={{ width: 1280 }}
          >
            <AppRoutes includeBuilder={false} />
          </div>
        </div>
      </Router>

      <EditorOverlay />
    </div>
  );
}
