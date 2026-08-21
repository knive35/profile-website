import { profileData } from "@/data/profile";
import { CornerMarks } from "./corner-marks";
import { getLeetCodeStats } from "@/lib/leetcode";

const LEVEL_COLORS = ["rgba(29,31,32,.08)", "#d6ebff", "#94bce3", "#5980a6"];
const DAY = 86400;
const WEEKS = 20;

function levelFor(count: number) {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  return 3;
}

function buildWeeks(calendar: Record<string, number>) {
  const todayStart = Math.floor(Date.now() / 1000 / DAY) * DAY;
  const dow = new Date(todayStart * 1000).getUTCDay();
  const gridEnd = todayStart + (6 - dow) * DAY;
  const gridStart = gridEnd - (WEEKS * 7 - 1) * DAY;

  const days: { epoch: number; count: number }[] = [];
  for (let t = gridStart; t <= gridEnd; t += DAY) {
    days.push({ epoch: t, count: calendar[String(t)] ?? 0 });
  }

  const weeks: { epoch: number; count: number }[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function timeAgo(unixSeconds: number) {
  const diffSeconds = Date.now() / 1000 - unixSeconds;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const units: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, "second"],
    [60, "minute"],
    [24, "hour"],
    [7, "day"],
    [4.345, "week"],
    [12, "month"],
    [Infinity, "year"],
  ];
  let value = diffSeconds;
  for (const [amount, unit] of units) {
    if (Math.abs(value) < amount) return rtf.format(-Math.round(value), unit);
    value /= amount;
  }
  return rtf.format(-Math.round(value), "year");
}

export async function Activity() {
  const stats = await getLeetCodeStats(profileData.leetcodeUsername);

  return (
    <section id="activity" className="py-[52px] border-t border-divider">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-heading text-[13px] text-accent tracking-widest">06</span>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,34px)] text-ink">Coding activity</h2>
      </div>

      {!stats ? (
        <div className="border border-divider p-[22px] text-sm text-ink/60">
          Live LeetCode sync is unavailable right now.{" "}
          <a href={profileData.leetcodeUrl} target="_blank" rel="noreferrer">
            View profile directly ↗
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">
          <div className="blueprint border border-divider p-[22px]">
            <CornerMarks />
            <div className="flex justify-between items-baseline mb-3.5 flex-wrap gap-1">
              <div className="font-heading text-[11px] tracking-widest uppercase text-ink/55">
                LeetCode activity
              </div>
              <div className="font-heading text-[10.5px] text-ink/40">
                {stats.totalSolved} problems solved
              </div>
            </div>
            <div className="flex gap-[3px] overflow-x-auto">
              {buildWeeks(stats.calendar).map((col, ci) => (
                <div key={ci} className="flex flex-col gap-[3px]">
                  {col.map((day) => (
                    <div
                      key={day.epoch}
                      title={`${new Date(day.epoch * 1000).toISOString().slice(0, 10)}: ${day.count} submission${day.count === 1 ? "" : "s"}`}
                      className="w-[11px] h-[11px]"
                      style={{ background: LEVEL_COLORS[levelFor(day.count)] }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-4 text-[11px] text-ink/55 font-heading">
              <a href={profileData.leetcodeUrl} target="_blank" rel="noreferrer">
                View full LeetCode profile ↗
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="border border-divider p-[22px]">
              <div className="font-heading text-[11px] tracking-widest uppercase text-ink/55 mb-3.5">
                Difficulty breakdown
              </div>
              {[
                { label: "Easy", count: stats.easySolved, color: "#94bce3" },
                { label: "Medium", count: stats.mediumSolved, color: "#5980a6" },
                { label: "Hard", count: stats.hardSolved, color: "#2c455d" },
              ].map((d) => (
                <div key={d.label} className="mb-3 last:mb-0">
                  <div className="flex justify-between text-[13px] mb-1">
                    <span>{d.label}</span>
                    <span className="text-ink/55">{d.count}</span>
                  </div>
                  <div className="h-1.5 bg-ink/[.08]">
                    <div
                      className="h-full"
                      style={{
                        width: stats.totalSolved ? `${(d.count / stats.totalSolved) * 100}%` : "0%",
                        background: d.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-divider p-[22px]">
              <div className="font-heading text-[11px] tracking-widest uppercase text-ink/55 mb-3.5">
                Recently solved
              </div>
              <div className="flex flex-col gap-2.5">
                {stats.recent.map((r) => (
                  <a
                    key={r.slug + r.timestamp}
                    href={`https://leetcode.com/problems/${r.slug}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between gap-3 text-[13px] no-underline text-ink hover:text-accent"
                  >
                    <span className="truncate">{r.title}</span>
                    <span className="flex-none text-ink/45 text-[11px] font-heading">{timeAgo(r.timestamp)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
