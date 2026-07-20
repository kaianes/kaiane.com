"use client";

import { useState, useEffect } from "react";
import type { SectionId } from "@/app/page";

const links: { label: string; section: SectionId }[] = [
  { label: "About", section: "about" },
  { label: "Academic", section: "academic" },
  { label: "Projects", section: "projects" },
  { label: "Experience", section: "experience" },
  { label: "Credentials", section: "credentials" },
  { label: "Inside My Mind", section: "inside-my-mind" },
  { label: "Contacts", section: "lets-talk" },
];

const sectionIds: SectionId[] = links.map((l) => l.section);

export default function NavBar() {
  const [active, setActive] = useState<SectionId>("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const navHeight = window.innerWidth >= 768 ? 72 : 56;
      let current: SectionId = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= navHeight + 10) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (section: SectionId) => {
    setOpen(false);
    setTimeout(() => {
      if (section === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full bg-deep-mind transition-shadow duration-200 ${
          scrolled ? "shadow-[0_1px_0_rgba(22,198,201,0.12)]" : ""
        }`}
      >
        <div className="h-[56px] md:h-[72px] px-6 md:px-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => go("hero")}
            className="font-heading font-bold text-[18px] text-live-circuit tracking-wide leading-none"
            aria-label="Kaiane — home"
          >
            K
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => go(link.section)}
                className={`font-body text-[13px] transition-colors duration-150 ${
                  active === link.section
                    ? "text-soft-canvas"
                    : "text-soft-canvas/65 hover:text-soft-canvas"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 -mr-1"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span
              className={`block h-[2px] bg-soft-canvas rounded-full transition-all duration-200 origin-center ${
                open ? "rotate-45 translate-y-[7px] w-5" : "w-5"
              }`}
            />
            <span
              className={`block h-[2px] bg-soft-canvas rounded-full transition-all duration-200 ${
                open ? "opacity-0 w-5" : "w-4"
              }`}
            />
            <span
              className={`block h-[2px] bg-soft-canvas rounded-full transition-all duration-200 origin-center ${
                open ? "-rotate-45 -translate-y-[7px] w-5" : "w-5"
              }`}
            />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 border-t border-live-circuit/10 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col py-2">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => go(link.section)}
                className={`px-6 py-3 text-left font-body text-[14px] hover:bg-white/5 transition-colors ${
                  active === link.section
                    ? "text-soft-canvas"
                    : "text-soft-canvas/70 hover:text-soft-canvas"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
