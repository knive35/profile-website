import { profileData } from "@/data/profile";
import { CornerMarks } from "./corner-marks";

const LEVEL_COLORS = ["rgba(29,31,32,.08)", "#d6ebff", "#94bce3", "#5980a6"];

function buildHeatmap() {
  return Array.from({ length: 20 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const v = Math.abs(Math.sin(w * 12.9898 + d * 78.233) * 43758.5453) % 1;
      return v > 0.8 ? 3 : v > 0.6 ? 2 : v > 0.4 ? 1 : 0;
    })
  );
}

export function Activity() {
  const heatmap = buildHeatmap();

  return (
    <section id="activity" className="py-[52px] border-t border-divider">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-heading text-[13px] text-accent tracking-widest">06</span>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,34px)] text-ink">Coding activity</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">
        <div className="blueprint border border-divider p-[22px]">
          <CornerMarks />
          <div className="flex justify-between items-baseline mb-3.5">
            <div className="font-heading text-[11px] tracking-widest uppercase text-ink/55">
              Contribution pattern
            </div>
            <div className="font-heading text-[10.5px] text-ink/40">SAMPLE DATA — live sync pending</div>
          </div>
          <div className="flex gap-[3px] overflow-x-auto">
            {heatmap.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-[3px]">
                {col.map((level, ri) => (
                  <div key={ri} className="w-[11px] h-[11px]" style={{ background: LEVEL_COLORS[level] }} />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 text-[11px] text-ink/55 font-heading">
            Recent repositories — connect the GitHub API to populate live.
          </div>
        </div>
        <div className="border border-divider p-[22px]">
          <div className="font-heading text-[11px] tracking-widest uppercase text-ink/55 mb-3.5">
            Languages (relative, illustrative)
          </div>
          {profileData.languages.map((lang) => (
            <div key={lang.name} className="mb-3">
              <div className="flex justify-between text-[13px] mb-1">
                <span>{lang.name}</span>
              </div>
              <div className="h-1.5 bg-ink/[.08]">
                <div className="h-full bg-accent" style={{ width: lang.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
