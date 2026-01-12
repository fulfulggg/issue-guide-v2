import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { MessageCircleQuestion, BookOpen, Library, Heart, CheckSquare, Workflow, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "ガイド", icon: null },
    { href: "/library", label: "ライブラリ", icon: Library },
    { href: "/phase-guide", label: "フェーズ", icon: Workflow },
    { href: "/masters-questions", label: "偉人の問い", icon: Users },
    { href: "/checklist", label: "チェックリスト", icon: CheckSquare },
    { href: "/life-changing", label: "人生を変える", icon: Heart },
    { href: "/training", label: "トレーニング", icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <MessageCircleQuestion className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">質問力マスター</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button 
              key={item.href}
              variant={location === item.href ? "default" : "ghost"}
              size="sm"
              className="flex items-center gap-1"
              asChild
            >
              <Link href={item.href}>
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Button 
                  key={item.href}
                  variant={location === item.href ? "default" : "ghost"}
                  className="w-full justify-start flex items-center gap-2"
                  onClick={() => setOpen(false)}
                  asChild
                >
                  <Link href={item.href}>
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.label}
                  </Link>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
