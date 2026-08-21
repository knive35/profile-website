import { profileData } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="py-[52px] border-t border-divider">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-heading text-[13px] text-accent tracking-widest">03</span>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,34px)] text-ink">Experience</h2>
      </div>
      <div className="flex flex-col">
        {profileData.experience.map((role) => (
          <div key={role.company} className="grid grid-cols-[24px_1fr] gap-4 pb-7 relative">
            <div className="flex flex-col items-center">
              <div className="w-[11px] h-[11px] border-2 border-accent bg-paper flex-none" />
              <div className="w-px flex-1 bg-divider mt-1" />
            </div>
            <div className="pb-2">
              <div className="flex flex-wrap gap-2.5 items-baseline mb-1.5">
                <span className="text-[17px] font-bold text-ink">{role.role}</span>
                <span className="text-accent-700 font-semibold text-[15px]">{role.company}</span>
                <span className="font-heading text-xs text-ink/50 tracking-wide">{role.period}</span>
              </div>
              <p className="m-0 mb-2.5 text-[14.5px] leading-relaxed text-ink/80 max-w-[640px]">
                {role.description}
              </p>
              <ul className="m-0 mb-2.5 pl-4 text-[14px] leading-relaxed text-ink/75 max-w-[640px]">
                {role.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {role.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 bg-ink/[.06] text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
