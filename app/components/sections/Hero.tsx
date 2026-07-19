export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-deep-mind overflow-hidden h-[460px] md:h-[560px]"
    >
      {/* Dot grid — mobile: 4×3, 88×100px cells, offset 18px */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(46,74,125,0.45) 1.5px, transparent 1.5px)",
          backgroundSize: "88px 100px",
          backgroundPosition: "18px 18px",
        }}
      />
      {/* Dot grid — desktop: 10×5, 111×94px cells, offset 110px 92px */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(46,74,125,0.45) 1.5px, transparent 1.5px)",
          backgroundSize: "111px 94px",
          backgroundPosition: "110px 92px",
        }}
      />

      {/* Live Circuit accent dot — mobile only */}
      <div
        aria-hidden
        className="md:hidden absolute right-8 top-[60px] w-5 h-5 rounded-full bg-live-circuit/65"
      />

      {/* Contact links — desktop, positioned at top-right of hero */}
      <div className="hidden md:flex items-center gap-6 absolute top-6 right-20 text-[13px] font-body text-soft-canvas/55">
        <a
          href="mailto:kaianesouzac@gmail.com"
          className="flex items-center gap-[6px] hover:text-soft-canvas transition-colors duration-200"
        >
          <span aria-hidden className="block w-4 h-3 rounded-sm border border-current" />
          kaianesouzac@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/kaiane-cordeiro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[6px] hover:text-soft-canvas transition-colors duration-200"
        >
          <span aria-hidden className="block w-3.5 h-3.5 rounded-sm border border-current" />
          LinkedIn →
        </a>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-20 pt-[100px] md:pt-[148px]">
        <p className="font-body text-[13px] md:text-[16px] text-soft-canvas/60 md:text-white/55">
          Hey there! My name is
        </p>
        <h1 className="font-heading font-bold text-[52px] md:text-[88px] leading-none text-soft-canvas mt-0">
          Kaiane
        </h1>
        <p className="font-body text-[13px] md:text-[18px] text-soft-canvas/70 md:text-white/60 mt-4 md:mt-2 max-w-[342px] md:max-w-[540px]">
          Software Engineer · Cloud Architecture · Artificial Intelligence
        </p>
        {/* Warm Spark accent line — 64px mobile, 96px desktop */}
        <div className="mt-4 md:mt-3 w-16 md:w-24 h-[3px] bg-warm-spark" />
      </div>

      {/* Bottom row: scroll hint (both) + email (mobile only) */}
      <div className="absolute bottom-8 md:bottom-[70px] left-6 md:left-20 right-6 md:right-auto flex items-center justify-between">
        <span className="font-body text-[12px] md:text-[13px] text-soft-canvas/50 md:text-live-circuit">
          ↓ scroll to explore
        </span>
        <span className="md:hidden font-body text-[11px] text-soft-canvas/45">
          kaianesouzac@gmail.com
        </span>
      </div>
    </section>
  );
}
