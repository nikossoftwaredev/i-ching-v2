"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/#home", label: "Αρχική" },
  { href: "/#about", label: "Γνωρίστε μας" },
  { href: "/#services", label: "Υπηρεσίες" },
  { href: "/#contact", label: "Επικοινωνία" },
  { href: "/resume", label: "Βιογραφικό" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Άνοιγμα μενού</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <div className="p-6">
          <SheetHeader>
            <SheetTitle className="text-left text-primary text-2xl font-bold">
              I Ching Balance Way
            </SheetTitle>
          </SheetHeader>
        </div>
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-200 border-b border-border/50"
            >
              {item.label}
            </Link>
          ))}
          <div className="p-6 mt-4">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/#appointment">Κλείστε Ραντεβού</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}