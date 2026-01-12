import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * セクション見出し用コンポーネント。
 *
 * - アイコン（任意）
 * - タイトル
 * - 説明テキスト（任意）
 *
 * というよくあるパターンを1か所に集約する。
 */
export function SectionHeader({
  icon,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", titleClassName)}>{title}</h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground text-lg max-w-2xl mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
