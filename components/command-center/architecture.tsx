"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";

export function Architecture() {
  const [hovered, setHovered] = useState<number | null>(null);
  const nodes = profileData.architecture;

  return (
    <section id="architecture" className="py-[52px] border-t border-divider">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-heading text-[13px] text-accent tracking-widest">05</span>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,34px)] text-ink">How I build</h2>
      </div>
      <p className="m-0 mb-7 text-sm text-ink/60 max-w-[560px]">
        A representative system map for the platforms above. Hover a node for what it does.
      </p>
      <div className="flex items-center gap-1.5 overflow-x-auto py-3">
        {nodes.map((n, i) => (
          <div key={n.name} className="flex items-center gap-1.5 flex-none">
            <div
              className="relative min-w-[150px] border border-ink/20 px-3 py-3.5 text-center bg-surface"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="font-heading font-semibold text-[13px] text-ink">{n.name}</div>
              {hovered === i && (
                <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 z-30 w-[220px] bg-paper border border-ink/20 shadow-lg px-3.5 py-3 text-left">
                  <div className="text-[12.5px] text-ink/80 leading-relaxed">{n.tooltip}</div>
                </div>
              )}
            </div>
            {i < nodes.length - 1 && <span className="text-accent text-lg flex-none">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
