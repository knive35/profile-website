"use client";

import { useEffect, useRef, useState } from "react";
import { profileData } from "@/data/profile";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(profileData.counters.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const dur = 900;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setCounts(profileData.counters.map((c) => Math.round(c.target * p)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  return (
    <section id="about" className="py-[52px] border-t border-divider">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-heading text-[13px] text-accent tracking-widest">01</span>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,34px)] text-ink">About</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
        <div className="border border-divider p-7">
          {profileData.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-base leading-[1.7] ${i === profileData.about.paragraphs.length - 1 ? "m-0 text-ink/75" : "mb-3.5"}`}
            >
              {p}
            </p>
          ))}
        </div>
        <div ref={ref} className="grid grid-cols-2 gap-px bg-divider border border-divider">
          {profileData.counters.map((c, i) => (
            <div key={c.label} className="bg-paper p-5">
              <div className="font-heading font-bold text-[32px] text-ink">
                {counts[i]}
                {c.suffix ?? ""}
              </div>
              <div className="text-[11px] uppercase tracking-wide text-ink/55 mt-1">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
