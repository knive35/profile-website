"use client";

import { useEffect, useState } from "react";
import { profileData } from "@/data/profile";
import { CornerMarks } from "./corner-marks";
import { ProjectModal } from "./project-modal";

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = profileData.projects.find((p) => p.id === activeId) ?? null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="py-[52px] border-t border-divider">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-heading text-[13px] text-accent tracking-widest">04</span>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,34px)] text-ink">Featured projects</h2>
      </div>
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {profileData.projects.map((p) => (
          <div
            key={p.id}
            className="blueprint border border-divider p-[22px] cursor-pointer transition-shadow hover:shadow-lg"
            onClick={() => setActiveId(p.id)}
          >
            <CornerMarks />
            <div className="flex gap-1.5 mb-3.5 flex-wrap">
              {p.badges.map((b) => (
                <span key={b} className="text-[10.5px] tracking-wide uppercase px-2 py-1 border border-accent text-accent-700">
                  {b}
                </span>
              ))}
            </div>
            <div className="font-heading font-bold text-xl mb-2 text-ink">{p.title}</div>
            <p className="m-0 mb-3.5 text-[13.5px] leading-relaxed text-ink/75">{p.description}</p>
            <div className="text-[11px] text-ink/50 font-heading tracking-wide">{p.techLine}</div>
            <div className="mt-3.5 text-xs font-semibold text-accent-700">View details →</div>
          </div>
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActiveId(null)} />}
    </section>
  );
}
