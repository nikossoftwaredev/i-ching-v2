"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";

const navItems = [
  { href: "/#home", label: "Αρχική" },
  { href: "/#about", label: "Γνωρίστε μας" },
  { href: "/#services", label: "Υπηρεσίες" },
  { href: "/#contact", label: "Επικοινωνία" },
  { href: "/resume", label: "Βιογραφικό" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo.svg"
              alt="I Ching Balance Way"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12"
              priority
            />
            <span className="text-xl font-bold text-primary hidden sm:block">
              I Ching Balance Way
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/#appointment">Κλείστε Ραντεβού</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}