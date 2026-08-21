"use client";

import { profileData } from "@/data/profile";

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const goto = (hash: string) => {
    onClose();
    window.location.hash = hash;
  };

  const commands = [
    ...profileData.navLinks
      .filter((l) => l.href !== "#about")
      .map((l) => ({ label: `Go to ${l.label}`, action: () => goto(l.href) })),
    { label: "Download resume", action: () => { window.open(profileData.resumeUrl, "_blank"); onClose(); } },
  ];

  return (
    <div
      className="fixed inset-0 z-[80] flex justify-center pt-[12vh] bg-ink/50"
      onClick={onClose}
    >
      <div
        className="w-[min(480px,90vw)] h-fit bg-paper border border-divider shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-3 border-b border-divider font-heading text-[11px] tracking-widest uppercase text-ink/55">
          Quick navigation
        </div>
        {commands.map((cmd) => (
          <button
            key={cmd.label}
            onClick={cmd.action}
            className="block w-full text-left px-4 py-3 border-0 bg-transparent text-sm text-ink cursor-pointer font-sans hover:bg-accent-100 hover:text-accent-700"
          >
            {cmd.label}
          </button>
        ))}
      </div>
    </div>
  );
}
