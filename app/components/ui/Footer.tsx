"use client";

import type { SectionId } from "@/app/page";

const navLinks: { label: string; section: SectionId }[] = [
  { label: "About", section: "about" },
  { label: "Academic", section: "academic" },
  { label: "Projects", section: "projects" },
  { label: "Experience", section: "experience" },
  { label: "Credentials", section: "credentials" },
  { label: "Inside My Mind", section: "inside-my-mind" },
  { label: "Contacts", section: "lets-talk" },
];

const go = (section: SectionId) => {
  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-deep-mind border-t border-live-circuit/15 px-6 md:px-20 py-7">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-body text-[11px] text-soft-canvas/40">© Kaiane</span>
          <a
            href="https://www.linkedin.com/in/kaiane-souza/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] text-soft-canvas/40 hover:text-soft-canvas/70 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => go(link.section)}
              className="font-body text-[11px] text-soft-canvas/40 hover:text-soft-canvas/70 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
