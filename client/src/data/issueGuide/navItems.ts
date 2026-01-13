import { BookOpen, FileText, Dumbbell, CheckCircle, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Hash fragment for section navigation on the single-page layout (e.g. "#learn") */
  hash?: string;
}

export const navItems: NavItem[] = [
  { href: "/", label: "ホーム", icon: Home },
  { href: "/#learn", label: "学ぶ", icon: BookOpen, hash: "#learn" },
  { href: "/#reference", label: "参照する", icon: FileText, hash: "#reference" },
  { href: "/#practice", label: "練習する", icon: Dumbbell, hash: "#practice" },
  { href: "/#evaluate", label: "評価する", icon: CheckCircle, hash: "#evaluate" },
] as const;
