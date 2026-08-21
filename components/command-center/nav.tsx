"use client";

import { useEffect, useState } from "react";
import { profileData } from "@/data/profile";
import { CommandPalette } from "./command-palette";

export function Nav() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-40 flex flex-wrap items-center gap-3 sm:gap-5 lg:gap-7 px-4 sm:px-6 lg:px-10 py-3.5 bg-paper/90 backdrop-blur-md border-b border-divider">
        <a href="#home" className="font-heading font-bold text-lg tracking-tight text-ink no-underline mr-auto">
          K. BURDE <span className="text-accent">/</span> CMD
        </a>
        <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5">
          {profileData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] no-underline text-ink uppercase tracking-wider font-heading font-semibold hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setPaletteOpen(true)}
          className="flex items-center gap-1.5 font-heading font-semibold text-xs px-2.5 py-1.5 border border-divider bg-transparent text-ink cursor-pointer hover:bg-ink/5"
        >
          SEARCH <span className="border border-ink/30 px-1 text-[11px]">⌘K</span>
        </button>
      </nav>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
