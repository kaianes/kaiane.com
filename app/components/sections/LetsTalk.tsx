import { Mail } from "lucide-react";

export default function LetsTalk() {
  return (
    <section id="lets-talk" className="bg-deep-mind px-6 md:px-20 pt-[72px] pb-[80px] min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-72px)]">
      <h2 className="font-heading font-bold text-[52px] md:text-[80px] leading-none text-soft-canvas">
        Let&apos;s Talk
      </h2>

      <p className="mt-6 md:mt-8 font-body text-[14px] md:text-[16px] leading-[1.7] text-soft-canvas/70 max-w-[560px]">
        Got a project in mind, a role to fill, or just want to talk tech? I&apos;d love
        to hear from you.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <a
          href="mailto:kaianesouzac@gmail.com"
          className="flex items-center gap-3 font-body text-[13px] text-live-circuit hover:text-live-circuit/80 transition-colors"
        >
          <Mail size={16} aria-hidden />
          kaianesouzac@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/kaiane-souza/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 font-body text-[13px] text-live-circuit hover:text-live-circuit/80 transition-colors"
        >
          <svg aria-hidden width="16" height="16" viewBox="0 0 30 30" fill="currentColor">
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/kaianes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 font-body text-[13px] text-live-circuit hover:text-live-circuit/80 transition-colors"
        >
          <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
}
