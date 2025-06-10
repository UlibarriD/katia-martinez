"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Proyectos",
    href: "/proyectos",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-background sticky top-0 z-40 w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-6xl">
        <div className="flex items-center">
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl font-medium"
          >
            Katia Martínez
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  pathname === item.href
                    ? "text-primary after:w-full"
                    : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                } 
                  after:content-[""] after:absolute after:h-[2px] after:bg-primary after:left-0 after:bottom-[-6px] after:transition-all after:duration-300`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 hover:bg-primary/10 transition-colors duration-300"
              >
                <Menu className="h-7 w-7" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-full">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <nav className="flex flex-col items-center gap-8 mt-16">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`block px-4 py-2 text-2xl font-heading font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? "text-primary scale-105"
                        : "text-foreground/90 hover:text-primary hover:translate-x-1"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
