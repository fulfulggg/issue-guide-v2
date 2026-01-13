import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/issueGuide/navItems";
import { FileQuestion, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

export default function IssueGuideHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isHomeActive = (location === "/" || location === "/issue-guide") && !hash;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <FileQuestion className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">論点設定マニュアル</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={
                item.hash
                  ? hash === item.hash
                    ? "default"
                    : "ghost"
                  : isHomeActive
                    ? "default"
                    : "ghost"
              }
              size="sm"
              className="flex items-center gap-1"
              asChild
            >
              <a href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
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
                  variant={
                    item.hash
                      ? hash === item.hash
                        ? "default"
                        : "ghost"
                      : isHomeActive
                        ? "default"
                        : "ghost"
                  }
                  className="w-full justify-start flex items-center gap-2"
                  onClick={() => setOpen(false)}
                  asChild
                >
                  <a href={item.href}>
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </a>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
