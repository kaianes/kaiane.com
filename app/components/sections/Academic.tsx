interface Entry {
  date: string;
  institution: string;
  institutionUrl?: string;
  degree: string;
  description: string;
}

const entries: Entry[] = [
  {
    date: "2023–2026",
    institution: "Institute of Technology and Leadership (Inteli)",
    institutionUrl: "https://www.inteli.edu.br/en/",
    degree: "B.Sc. Software Engineering  ·  São Paulo, Brazil",
    description:
      "Full scholarship student at a project-based learning institution ranked the most innovative university in Latin America by the WURI Rankings.",
  },
  {
    date: "2025–2026",
    institution: "University of Bradford",
    institutionUrl: "https://www.bradford.ac.uk/undergraduate/subjects/computing/",
    degree: "Exchange Year, Computer Science  ·  England, United Kingdom",
    description:
      "Exchange year focused on Computer Science, combining a UK academic perspective with international exposure to the field. Ranked among the top 500 universities worldwide in the QS World University Rankings 2027.",
  },
];

export default function Academic() {
  return (
    <section id="academic" className="bg-white px-6 md:px-20 pt-[72px] pb-[80px]">
      {/* Section header */}
      <div className="mb-[38px] w-full h-px bg-deep-mind/12" />

      <h2 className="font-heading font-bold text-[40px] md:text-[64px] leading-none text-deep-mind">
        Academic Background
      </h2>

      <div className="mt-10 md:mt-14">
        {entries.map((entry, i) => (
          <div key={i}>
            {i > 0 && <div className="my-8 w-full h-px bg-deep-mind/10" />}

            <div className="flex items-start gap-4">
              {/* Bullet dot */}
              <span className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-live-circuit" />

              <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-y-1 gap-x-8">
                {/* Date badge */}
                <span className="inline-flex items-center self-start px-2 py-[3px] rounded text-[10px] font-medium font-body text-deep-mind/55 bg-deep-mind/7 md:order-none order-first w-fit">
                  {entry.date}
                </span>
                {/* Institution */}
                <p className="font-heading font-medium text-[15px] md:text-[17px] text-deep-mind md:col-start-1 md:row-start-1">
                  {entry.institutionUrl ? (
                    <a href={entry.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {entry.institution}
                    </a>
                  ) : (
                    entry.institution
                  )}
                </p>
                {/* Degree */}
                <p className="font-body text-[12px] md:text-[13px] text-deep-mind/60 md:col-start-1">
                  {entry.degree}
                </p>
                {/* Description */}
                <p className="font-body text-[13px] md:text-[14px] leading-[1.65] text-deep-mind/75 mt-2 md:col-start-1 md:max-w-[820px]">
                  {entry.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
