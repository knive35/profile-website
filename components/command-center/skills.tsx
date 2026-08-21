"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-[52px] border-t border-divider">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-heading text-[13px] text-accent tracking-widest">02</span>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,34px)] text-ink">Technical stack</h2>
      </div>
      <div className="flex flex-col gap-[18px]">
        {profileData.skillGroups.map((group) => (
          <div key={group.name} className="border border-divider px-5 py-[18px]">
            <div className="font-heading text-xs tracking-wide uppercase text-ink/55 mb-3">{group.name}</div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => {
                const id = `${group.name}-${s.name}`;
                return (
                  <div
                    key={id}
                    className="relative"
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="text-[13px] px-3.5 py-1.5 border border-accent-400 bg-accent-100 text-accent-800 cursor-default">
                      {s.name}
                    </div>
                    {hovered === id && (
                      <div className="absolute top-[calc(100%+6px)] left-0 z-30 w-[220px] bg-paper border border-ink/20 shadow-lg px-3.5 py-3">
                        <div className="text-[11px] uppercase tracking-wide text-accent mb-1">{s.level}</div>
                        <div className="text-[12.5px] text-ink/75 leading-relaxed">{s.used}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
