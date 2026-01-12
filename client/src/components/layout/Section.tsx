import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** `<section>` 要素自体に付与するクラス */
  className?: string;
  /** 内側の `.container` に付与するクラス */
  containerClassName?: string;
  children: ReactNode;
}

/**
 * ページ内セクション用のレイアウトコンポーネント。
 *
 * - 外側に `<section>` を描画
 * - その中に `.container` を1つだけ置く
 * - 余白や背景色などは基本的に `className` に集約
 */
export function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("w-full", className)}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}
