import { BookOpen, FileText, Dumbbell, CheckCircle, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { path: "/", label: "ホーム", icon: Home },
  { path: "/issue-guide/learn", label: "学ぶ", icon: BookOpen },
  { path: "/issue-guide/reference", label: "参照する", icon: FileText },
  { path: "/issue-guide/practice", label: "練習する", icon: Dumbbell },
  { path: "/issue-guide/evaluate", label: "評価する", icon: CheckCircle },
] as const;
