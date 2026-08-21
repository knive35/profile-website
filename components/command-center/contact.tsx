"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import { CornerMarks } from "./corner-marks";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(
      "Portfolio contact from " + (name || "a visitor")
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="pt-[52px] pb-20 border-t border-divider">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-heading text-[13px] text-accent tracking-widest">07</span>
        <h2 className="m-0 font-heading text-[clamp(26px,3vw,34px)] text-ink">Contact</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="m-0 mb-4 font-heading text-[clamp(28px,4vw,40px)] leading-[1.1] text-ink">
            Let&apos;s build something meaningful.
          </h3>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            <a href={`mailto:${profileData.email}`} className="no-underline">
              {profileData.email}
            </a>
            <a href="https://www.linkedin.com/in/kamesh35/" target="_blank" rel="noreferrer" className="no-underline">
              linkedin.com/in/kamesh35
            </a>
            <a href="https://github.com/knive35" target="_blank" rel="noreferrer" className="no-underline">
              github.com/knive35
            </a>
            <a href={profileData.resumeUrl} target="_blank" rel="noreferrer" className="no-underline">
              Download resume (PDF)
            </a>
          </div>
        </div>
        <div className="blueprint border border-divider p-[22px] flex flex-col gap-3">
          <CornerMarks />
          <label className="text-xs text-ink/70">
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full min-h-9 mt-1.5 px-2.5 py-1.5 text-sm bg-surface border border-divider"
            />
          </label>
          <label className="text-xs text-ink/70">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full min-h-9 mt-1.5 px-2.5 py-1.5 text-sm bg-surface border border-divider"
            />
          </label>
          <label className="text-xs text-ink/70">
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full min-h-20 mt-1.5 px-2.5 py-1.5 text-sm bg-surface border border-divider resize-y"
            />
          </label>
          <button
            onClick={submit}
            className="mt-1 font-heading font-semibold text-[13px] py-2.5 border border-accent bg-accent text-paper cursor-pointer hover:bg-accent-600"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
      <div className="mt-[60px] pt-5 border-t border-divider flex justify-between flex-wrap gap-2 text-[11px] text-ink/45 font-heading tracking-wide">
        <span>KAMESH BURDE — DEVELOPER COMMAND CENTER</span>
        <span>BUILT 2026</span>
      </div>
    </section>
  );
}
