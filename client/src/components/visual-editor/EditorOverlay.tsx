import { createPortal } from "react-dom";
import { useVisualEditor } from "@/contexts/VisualEditorContext";
import ElementHighlight from "./ElementHighlight";

export default function EditorOverlay() {
  const { hoveredElement, selectedElement, isEditorMode } = useVisualEditor();

  if (!isEditorMode) return null;

  const selectedLabel = selectedElement
    ? `${selectedElement.locator.filePath}:${selectedElement.locator.line}`
    : "";

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {hoveredElement?.element ? (
        <ElementHighlight element={hoveredElement.element as Element} mode="hover" />
      ) : null}
      {selectedElement?.element ? (
        <ElementHighlight element={selectedElement.element as Element} mode="selected" />
      ) : null}

      {selectedLabel ? (
        <div
          style={{
            position: "fixed",
            top: 8,
            left: 8,
            padding: "6px 8px",
            fontSize: 12,
            borderRadius: 6,
            background: "rgba(17,24,39,0.75)",
            color: "white",
            maxWidth: 520,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          選択中: {selectedLabel}
        </div>
      ) : null}
    </div>,
    document.body,
  );
}
