"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { profileData } from "@/data/profile";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-lg font-semibold">
              {profileData.name}
            </Link>
            <span className="text-sm text-slate-500 dark:text-slate-400">{profileData.title}</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm hover:underline">
              About
            </a>
            <a href="#projects" className="text-sm hover:underline">
              Projects
            </a>
            <a href="#experience" className="text-sm hover:underline">
              Experience
            </a>
            <a href="#skills" className="text-sm hover:underline">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contact
            </a>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              className="ml-3 p-2 rounded-md focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#about" className="block text-base" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#projects" className="block text-base" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#experience" className="block text-base" onClick={() => setOpen(false)}>
              Experience
            </a>
            <a href="#skills" className="block text-base" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a href="#contact" className="block text-base" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
