const certs: { year: string; title: string; href?: string }[] = [
  { year: "2025", title: 'Co-author, "Documentation and Quality Assurance as Code" — COBENGE', href: "https://doi.org/10.37702/2175-957X.COBENGE.2025.6199" },
  { year: "2025", title: "AWS Academy Graduate – Cloud Architecting", href: "https://www.credly.com/go/5hL7DpIA" },
  { year: "2024", title: "Generative AI & Trends, Winter Week — PUCP Business School, Lima, Peru" },
  { year: "2024", title: "Blockchain & Web3 — Cartesi Masterclass" },
];

const leadership = [
  "English Monitor, Inteli — volunteer instructor (Apr–Jun 2024)",
  "Community Volunteer — distributing essential goods across São Paulo (2022–2025)",
];

export default function Credentials() {
  return (
    <section id="credentials" className="bg-white px-6 md:px-20 pt-[72px] pb-[80px]">
      {/* Section header */}
      <div className="mb-[38px] w-full h-px bg-deep-mind/12" />

      <h2 className="font-heading font-bold text-[40px] md:text-[64px] leading-none text-deep-mind">
        Credentials &amp; Leadership
      </h2>

      {/* Two-column grid on desktop */}
      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left — Certifications */}
        <div>
          <p className="font-body text-[10px] font-medium tracking-widest text-deep-mind/45 uppercase mb-6">
            Certifications &amp; Awards
          </p>
          <ul className="space-y-5">
            {certs.map((cert, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 mt-[2px] px-1.5 py-[2px] rounded text-[10px] font-medium font-body text-deep-mind/55 bg-deep-mind/7">
                  {cert.year}
                </span>
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[13px] md:text-[14px] leading-[1.6] text-deep-mind/80 hover:text-bright-logic transition-colors"
                  >
                    {cert.title}
                  </a>
                ) : (
                  <span className="font-body text-[13px] md:text-[14px] leading-[1.6] text-deep-mind/80">
                    {cert.title}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Leadership */}
        <div>
          <p className="font-body text-[10px] font-medium tracking-widest text-deep-mind/45 uppercase mb-6">
            Leadership
          </p>

          {/* Tantera highlight item */}
          <div className="border-l-[3px] border-warm-spark pl-4 mb-5">
            <p className="font-heading font-medium text-[14px] md:text-[15px] text-deep-mind">
              President, Atlética Tantera (2023–2024)
            </p>
            <p className="mt-2 font-body text-[12px] md:text-[13px] leading-[1.65] text-deep-mind/70">
              Elected president of a 10-member student organization at risk of dissolving. Built
              7 directorates from scratch, grew membership to 40, and delivered 20+
              projects during the term — turning a struggling club into a structured,
              active organization.
            </p>
          </div>

          {/* Other leadership items */}
          <ul className="space-y-3">
            {leadership.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 mt-1 w-[3px] self-stretch rounded-full bg-bright-logic/60" />
                <span className="font-body text-[13px] md:text-[14px] leading-[1.6] text-deep-mind/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
