
function MindCard({
  title,
  description,
  cta,
  href,
  accent,
  icon,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
  accent: "live-circuit" | "warm-spark";
  icon: "star" | "journal";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block bg-insight-blue rounded-lg p-6 md:p-8 overflow-hidden group transition-transform hover:-translate-y-1 duration-200"
    >
      {/* Icon accent — top right */}
      <div className="absolute top-5 right-5" aria-hidden>
        {icon === "star" ? (
          <svg aria-hidden width="22" height="22" viewBox="0 0 50 50" fill="currentColor" className="text-live-circuit/65">
            <path d="M43,11H8V5h35V11z" />
            <path d="M43,19H8v-6h35V19z" />
            <path d="M43,44.805L25.984,34.169L8,44.748V21h35V44.805z" />
          </svg>
        ) : (
          <svg aria-hidden width="22" height="22" viewBox="0 0 30 30" fill="currentColor" className="text-warm-spark/85">
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
          </svg>
        )}
      </div>

      <h3 className="font-heading font-bold text-[20px] md:text-[22px] text-soft-canvas mt-6">
        {title}
      </h3>
      <p className="mt-3 font-body text-[13px] md:text-[14px] leading-[1.65] text-soft-canvas/75">
        {description}
      </p>
      <span
        className={`inline-block mt-5 font-body font-medium text-[13px] ${
          accent === "live-circuit" ? "text-live-circuit" : "text-warm-spark"
        } group-hover:underline`}
      >
        {cta}
      </span>
    </a>
  );
}

export default function InsideMyMind() {
  return (
    <section id="inside-my-mind" className="bg-soft-canvas px-6 md:px-20 pt-[72px] pb-[80px]">
      {/* Section header */}
      <div className="mb-[38px] w-full h-px bg-deep-mind/12" />

      <h2 className="font-heading font-bold text-[40px] md:text-[64px] leading-none text-deep-mind">
        Inside My Mind
      </h2>

      <p className="mt-6 font-body text-[14px] md:text-[16px] leading-[1.7] text-deep-mind/70 max-w-[800px]">
        Not everything fits in a &ldquo;Projects&rdquo; folder. Here&apos;s where I write about
        tech and AI, and document life abroad — one byte and one trip at a time.
      </p>

      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <MindCard
          title="The Clever Byte"
          description="Smart takes on AI and tech, with a bit of humor — one byte a week."
          cta="Read on Substack"
          href="https://substack.com/@thecleverbyte"
          accent="live-circuit"
          icon="star"
        />
        <MindCard
          title="Kaiane Journals"
          description="Behind the scenes of my exchange abroad — new places, new lessons."
          cta="Follow on Instagram"
          href="https://www.instagram.com/kaiane_journals/"
          accent="warm-spark"
          icon="journal"
        />
      </div>
    </section>
  );
}
