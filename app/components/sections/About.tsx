function PhotoPlaceholder() {
  return (
    <div className="relative w-full md:w-[380px] aspect-[380/420] bg-deep-mind overflow-hidden rounded-sm">
      {/* Abstract graphic — replace with <Image> when photo is ready */}
      <div
        aria-hidden
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-insight-blue/40"
      />
      <div
        aria-hidden
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-bright-logic/30"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-live-circuit"
      />
      <span className="absolute bottom-4 left-4 font-mono text-[10px] text-live-circuit/50">
        {/* TODO: replace with photo */}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-soft-canvas px-6 md:px-20 pt-[72px] pb-[80px]">
      {/* Section header */}
      <p className="font-body text-[11px] text-deep-mind/45 font-medium">01</p>
      <div className="mt-3 mb-[38px] w-full h-px bg-deep-mind/12" />

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-x-24 gap-y-10 items-start">
        {/* Left — heading + bio */}
        <div>
          <h2 className="font-heading font-bold text-[40px] md:text-[64px] leading-none text-deep-mind">
            About
          </h2>

          {/* Photo — mobile only, between heading and bio */}
          <div className="md:hidden mt-8 mb-8">
            <PhotoPlaceholder />
          </div>

          <div className="mt-8 md:mt-10 space-y-5 font-body text-[14px] md:text-[16px] leading-[1.7] text-deep-mind/80 max-w-[640px]">
            <p>
              Hi! I&apos;m Kaiane Cordeiro — a Software Engineering student at the
              Institute of Technology and Leadership (Inteli), São Paulo, with a focus
              on AI/ML and cloud architecture. Currently on an exchange year at the
              University of Bradford, UK.
            </p>
            <p>
              I&apos;ve had the opportunity to intern at BTG Pactual (AI/ML), Banco Pan
              (Data Analytics and MLOps), and Vizion Brazil (Full Stack), building
              everything from end-to-end ML pipelines on AWS to full-stack internal
              platforms from scratch.
            </p>
            <p>
              Outside of code, I was president of Atlética Tantera, volunteer English
              monitor, and community volunteer across São Paulo. I build things, lead
              teams, and try to be useful wherever I am.
            </p>
          </div>
        </div>

        {/* Right — photo (desktop only) */}
        <div className="hidden md:block mt-1">
          <PhotoPlaceholder />
        </div>
      </div>
    </section>
  );
}
