import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} {profileData.name}. All rights reserved.</div>
        <div className="flex items-center gap-4">
          {profileData.socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-sm text-slate-600 dark:text-slate-300 hover:underline">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
