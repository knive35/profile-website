import { profileData } from "@/data/profile";
import { CornerMarks } from "./corner-marks";

export function Hero() {
  return (
    <header
      id="home"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-24 pb-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-7"
    >
      <div
        className="blueprint border border-divider p-7 sm:p-9 lg:p-11 flex flex-col gap-4"
        style={{ animation: "kc-fade .6s ease both" }}
      >
        <CornerMarks />
        <div className="flex items-center gap-2 font-heading text-xs tracking-widest uppercase text-accent-700">
          <span
            className="w-2 h-2 rounded-full bg-accent"
            style={{ animation: "kc-pulse 2.2s infinite" }}
          />
          {profileData.availability}
        </div>
        <h1 className="m-0 font-heading font-bold text-[clamp(38px,6vw,58px)] leading-[1.02] tracking-tight text-ink">
          {profileData.name}
        </h1>
        <div className="text-[clamp(16px,2vw,19px)] text-accent-700 font-semibold">
          {profileData.title}
        </div>
        <p className="m-0 text-[15px] leading-relaxed max-w-[520px] text-ink/85">
          {profileData.tagline}
        </p>
        <div className="flex gap-6 flex-wrap font-heading text-[13px] text-ink/70 mt-1">
          <span>
            <b className="text-ink">{profileData.experienceYears} yrs</b> experience
          </span>
          <span>
            <b className="text-ink">{profileData.company}</b> · {profileData.companyRole}
          </span>
        </div>
        <div className="flex gap-2.5 flex-wrap mt-2.5">
          <a
            href="https://github.com/knive35"
            target="_blank"
            rel="noreferrer"
            className="font-heading font-semibold text-[13px] px-4 py-2 border border-divider text-ink no-underline hover:bg-ink/5"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/kamesh35/"
            target="_blank"
            rel="noreferrer"
            className="font-heading font-semibold text-[13px] px-4 py-2 border border-divider text-ink no-underline hover:bg-ink/5"
          >
            LINKEDIN ↗
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="font-heading font-semibold text-[13px] px-4 py-2 border border-divider text-ink no-underline hover:bg-ink/5"
          >
            EMAIL ↗
          </a>
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-heading font-semibold text-[13px] px-[18px] py-2 border border-accent bg-accent text-paper no-underline hover:bg-accent-600"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div
          className="blueprint border border-divider p-5"
          style={{ animation: "kc-fade .6s ease .05s both" }}
        >
          <CornerMarks />
          <div className="font-heading text-[11px] tracking-widest uppercase text-accent-700 mb-2.5">
            Current focus
          </div>
          <div className="text-base font-semibold leading-snug mb-2">
            {profileData.currentFocus.headline}
          </div>
          <div className="text-[12.5px] text-ink/60 font-heading tracking-wide">
            {profileData.currentFocus.techLine}
          </div>
        </div>

        <div
          className="blueprint border border-divider p-5"
          style={{ animation: "kc-fade .6s ease .1s both" }}
        >
          <CornerMarks />
          <div className="font-heading text-[11px] tracking-widest uppercase text-accent-700 mb-2.5">
            System status
          </div>
          {profileData.statusRows.map((row) => (
            <div
              key={row.k}
              className="flex justify-between gap-3 py-1.5 border-b border-ink/[.08] text-[13px]"
            >
              <span className="font-heading uppercase tracking-wide text-ink/55 text-[11px]">{row.k}</span>
              <span className="font-semibold text-right">{row.v}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
