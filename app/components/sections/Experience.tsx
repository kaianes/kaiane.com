interface ExpEntry {
  role: string;
  company: string;
  date: string;
  badge: "Long-term Intern" | "Summer Intern";
  description: string;
}

const entries: ExpEntry[] = [
  {
    role: "Software Development Intern – AI/ML",
    company: "BTG Pactual",
    date: "Jan 2025 – Sep 2025",
    badge: "Long-term Intern",
    description:
      "Sole AI engineer on a 6-person team in the IT Funds department. Designed and shipped an end-to-end ML pipeline on cloud (AWS) with specialized classifiers to automate cash transaction reconciliation across five investment fund categories. Cut manual processing time by ~75% (from 1 hour to ~15 minutes per week) at 80–90% model accuracy, and presented results to 40+ stakeholders.",
  },
  {
    role: "Software Development Intern – Data & Analytics",
    company: "Banco Pan",
    date: "Jul 2024",
    badge: "Summer Intern",
    description:
      "Automated the data pipeline — complex queries on AWS Athena and RDS — behind operational KPI dashboards built in Tableau. Eliminated weekly manual reporting for 2–3 teams and contributed to the creation of a new internal monitoring area.",
  },
  {
    role: "Software Development Intern – MLOps",
    company: "Banco Pan",
    date: "Jan 2024",
    badge: "Summer Intern",
    description:
      "Extended MLOps pipelines on Apache Airflow and AWS SageMaker to monitor ~10 active classification models. Developed new DAGs, standardized the monitoring rule architecture, and refactored legacy code with full technical documentation.",
  },
  {
    role: "Software Development Intern – Full Stack",
    company: "Vizion Brazil Investments",
    date: "Jul 2023",
    badge: "Summer Intern",
    description:
      "Built, solo and from scratch, the company's first data infrastructure: a relational SQL database of carbon credits aggregating multiple international sources, plus an internal React platform for searching and analyzing investment opportunities.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-deep-mind px-6 md:px-20 pt-[72px] pb-[80px]">
      {/* Section header */}
      <div className="mb-[38px] w-full h-px bg-live-circuit/20" />

      <h2 className="font-heading font-bold text-[40px] md:text-[64px] leading-none text-soft-canvas">
        Experience
      </h2>

      <div className="mt-10 md:mt-14">
        {entries.map((entry, i) => (
          <div key={i}>
            <div className="h-px bg-soft-canvas/10 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-8 gap-y-1">
              {/* Role */}
              <h3 className="font-heading font-medium text-[15px] md:text-[17px] text-soft-canvas">
                {entry.role.includes(" – ") ? (
                  <>
                    {entry.role.split(" – ")[0]} –{" "}
                    <span className="text-warm-spark">{entry.role.split(" – ")[1]}</span>
                  </>
                ) : (
                  entry.role
                )}
              </h3>
              {/* Date — right on desktop, below role on mobile */}
              <span className="font-body text-[11px] text-soft-canvas/40 md:mt-1 self-start">
                {entry.date}
              </span>
              {/* Company + badge row */}
              <div className="flex items-center gap-3 mt-1">
                <span className="font-body text-[13px] text-warm-spark">{entry.company}</span>
                <span className="px-2 py-[2px] rounded-full text-[10px] font-medium font-body text-live-circuit bg-soft-canvas/10">
                  {entry.badge}
                </span>
              </div>
              {/* Description */}
              <p className="font-body text-[13px] md:text-[14px] leading-[1.7] text-soft-canvas/75 mt-3 md:col-span-2 md:max-w-[900px]">
                {entry.description}
              </p>
            </div>

            {i === entries.length - 1 && (
              <div className="h-px bg-soft-canvas/10 mt-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
