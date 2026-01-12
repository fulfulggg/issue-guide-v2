import { useEffect, useState, type CSSProperties } from "react";

type Mode = "hover" | "selected";

export default function ElementHighlight({
  element,
  mode,
}: {
  element: Element;
  mode: Mode;
}) {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = requestAnimationFrame(() => {
        setRect(element.getBoundingClientRect());
      });
    };

    update();

    // scroll は bubble しないが capture なら拾える
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);

    const ro = new ResizeObserver(update);
    ro.observe(element);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [element]);

  if (!rect) return null;

  const borderStyle =
    mode === "hover"
      ? "2px dashed rgba(59,130,246,0.9)"
      : "2px solid rgba(59,130,246,0.95)";

  const base: CSSProperties = {
    position: "fixed",
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    border: borderStyle,
    borderRadius: 4,
    boxSizing: "border-box",
    pointerEvents: "none",
  };

  const handleSize = 8;
  const handleStyle: CSSProperties = {
    position: "absolute",
    width: handleSize,
    height: handleSize,
    background: "rgba(59,130,246,0.95)",
    borderRadius: 2,
  };

  return (
    <div style={base}>
      {mode === "selected" ? (
        <>
          <div
            style={{
              ...handleStyle,
              top: -handleSize / 2,
              left: -handleSize / 2,
            }}
          />
          <div
            style={{
              ...handleStyle,
              top: -handleSize / 2,
              right: -handleSize / 2,
            }}
          />
          <div
            style={{
              ...handleStyle,
              bottom: -handleSize / 2,
              left: -handleSize / 2,
            }}
          />
          <div
            style={{
              ...handleStyle,
              bottom: -handleSize / 2,
              right: -handleSize / 2,
            }}
          />
        </>
      ) : null}
    </div>
  );
}
