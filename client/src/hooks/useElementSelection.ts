import { useEffect, useRef, type RefObject } from "react";
import {
  buildSelectedElement,
  type SelectedElement,
} from "@/contexts/VisualEditorContext";

type Options = {
  enabled: boolean;
  rootRef: RefObject<HTMLElement | null>;
  onHover: (el: SelectedElement | null) => void;
  onSelect: (el: SelectedElement | null) => void;
};

function findClosestLocElement(target: Element | null, root: HTMLElement): Element | null {
  let node: Element | null = target;

  while (node && node !== root) {
    if (node.getAttribute("data-loc")) return node;
    node = node.parentElement;
  }

  if (root.getAttribute("data-loc")) return root;

  return null;
}

export function useElementSelection({ enabled, rootRef, onHover, onSelect }: Options) {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const debug = (window as any).__VISUAL_EDITOR_DEBUG__ === true;
    let lastHoverLoc: string | null = null;

    const handleMove = (e: MouseEvent) => {
      const root = rootRef.current;
      if (!root) return;

      const node = e.target as Node | null;
      const t =
        node && node.nodeType === Node.TEXT_NODE
          ? (node as any).parentElement
          : node instanceof Element
            ? node
            : null;
      if (!t) return;
      if (!root.contains(t)) return;

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const hit = findClosestLocElement(t, root);
        const selected = hit ? buildSelectedElement(hit) : null;

        if (debug) {
          const loc = selected?.locator?.raw ?? null;
          if (loc !== lastHoverLoc) {
            lastHoverLoc = loc;
            // eslint-disable-next-line no-console
            console.debug("[visual-editor] hover:", loc);
          }
        }

        onHover(selected);
      });
    };

    const handleClick = (e: MouseEvent) => {
      const root = rootRef.current;
      if (!root) return;

      const node = e.target as Node | null;
      const t =
        node && node.nodeType === Node.TEXT_NODE
          ? (node as any).parentElement
          : node instanceof Element
            ? node
            : null;
      if (!t) return;
      if (!root.contains(t)) return;

      const hit = findClosestLocElement(t, root);
      const selected = hit ? buildSelectedElement(hit) : null;

      if (debug) {
        // eslint-disable-next-line no-console
        console.debug("[visual-editor] click target:", t);
        // eslint-disable-next-line no-console
        console.debug("[visual-editor] click hit:", selected?.locator?.raw ?? null);
      }

      if (!selected) return;

      e.preventDefault();
      e.stopPropagation();
      onSelect(selected);
    };

    document.addEventListener("mousemove", handleMove, true);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("mousemove", handleMove, true);
      document.removeEventListener("click", handleClick, true);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [enabled, rootRef, onHover, onSelect]);
}
