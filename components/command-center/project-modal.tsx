"use client";

import { ProjectItem } from "@/data/profile";

export function ProjectModal({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-6 bg-ink/55"
      onClick={onClose}
    >
      <div
        className="w-[min(680px,100%)] max-h-[85vh] overflow-auto bg-paper border border-ink/20 shadow-lg p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-3">
          <div>
            <div className="flex gap-1.5 mb-2.5 flex-wrap">
              {project.badges.map((b) => (
                <span key={b} className="text-[10.5px] tracking-wide uppercase px-2 py-1 border border-accent text-accent-700">
                  {b}
                </span>
              ))}
            </div>
            <h3 className="m-0 font-heading text-[26px] text-ink">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="border border-divider bg-transparent w-8 h-8 cursor-pointer text-base hover:bg-ink/5"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="h-px bg-divider my-[18px]" />
        {project.detail.map((d) => (
          <div key={d.k} className="mb-4">
            <div className="font-heading text-[11px] tracking-wide uppercase text-accent mb-1">{d.k}</div>
            <div className="text-[14.5px] leading-relaxed text-ink/85">{d.v}</div>
          </div>
        ))}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 font-heading font-semibold text-[13px] px-4 py-2 border border-divider text-ink no-underline hover:bg-ink/5"
        >
          GITHUB PROFILE ↗
        </a>
      </div>
    </div>
  );
}
