"use client";

import { useState, useEffect, useCallback } from "react";

interface Project {
  code: string;
  title: string;
  meta: string;
  description: string;
  tags: string[];
  github?: string;
  repoNote?: string;
}

// Accent colors — one per project (global index), ordered so each slide shows a different pattern
const ACCENTS = [
  "bg-live-circuit",  // slide 1: teal
  "bg-warm-spark",   //           yellow
  "bg-bright-logic", //           blue
  "bg-warm-spark",   // slide 2: yellow
  "bg-bright-logic", //           blue
  "bg-live-circuit", //           teal
  "bg-bright-logic", // slide 3: blue
  "bg-live-circuit", //           teal
  "bg-warm-spark",   //           yellow
  "bg-warm-spark",   // slide 4: yellow
  "bg-live-circuit", //           teal
  "bg-bright-logic", //           blue
  "bg-live-circuit", // slide 5: teal
] as const;

const projects: Project[] = [
  {
    code: "AGENTIC NAS",
    title: "Multi-Agent Framework for Neural Architecture Search",
    meta: "Sep 2025 – Apr 2026  ·  University of Bradford · Final Year Project",
    description:
      "An individually-researched framework that automates Neural Architecture Search using five specialized agents (Profiler, Builder, Trainer, Evaluator, Reporter) coordinated via CrewAI. Each agent operates within strict contract boundaries: the Profiler inspects the dataset, the Builder translates that understanding into a context-aware search space, the Trainer runs Optuna-driven optimization within it, and the Evaluator and Reporter assess and document the results. Validated end-to-end on a real ECG dataset, correctly identifying dataset constraints and selecting a CNN1D architecture consistent with the data's structure.",
    tags: ["PyTorch", "Optuna", "CrewAI", "Multi-Agent Systems", "Neural Architecture Search", "Python"],
    github: "https://github.com/kaianes/neural-architecture-search-agents",
  },
  {
    code: "TAAS",
    title: "Decentralized Fact-Checking News Platform",
    meta: "Jul – Sep 2025  ·  WCHL 2025, ICP Hubs Network",
    description:
      "Built a decentralized news platform on the Internet Computer Protocol (ICP) where journalists publish censorship-resistant content on-chain, verified through AI-driven fact-checking. A modular canister architecture (Motoko) handles user identity, publishing, LLM-based verdict generation from community-curated trusted sources, and crypto-based subscriptions settled in ckBTC. Placed 3rd in Brazil's qualification round, advanced to the national round, then reached the regional round — the competition's penultimate stage.",
    tags: ["Motoko", "Internet Computer (ICP)", "Blockchain", "LLM", "Web3", "AI"],
    github: "https://github.com/Txrmarcos/TaaS",
  },
  {
    code: "TIMENOW",
    title: "CI/CD Automation Framework",
    meta: "Apr – Jun 2025  ·  in partnership with Timenow",
    description:
      "Designed a CI/CD automation framework to replace Timenow's manual build-test-deploy process, which caused inconsistent environments and high error rates in production releases. Built YAML-based Azure Pipelines for frontend and backend, with automated testing (Jest, PyTest), enforced pull-request reviews, semantic versioning tied to Git tags, and zero-downtime deployments via Azure deployment slots with rollback support.",
    tags: ["Azure Pipelines", "CI/CD", "DevOps", "Jest", "PyTest", "Git"],
    github: "https://github.com/Inteli-College/2025-1B-T09-ES10-G02",
  },
  {
    code: "RAPPITORS",
    title: "System Resilience & Observability for Delivery App",
    meta: "Feb – Apr 2025  ·  in partnership with Rappi",
    description:
      "Built an observability and quality-control layer for Rappi's courier app, focused on system resilience. Implemented real-time monitoring with Prometheus and Grafana, load testing with Locust, and a version-sync service (Python + Firebase Realtime Database) that flags outdated API integrations automatically. Also prototyped a predictive maintenance model using machine learning on distributed system logs to anticipate failures before they happen.",
    tags: ["Python", "Docker", "Prometheus", "Grafana", "Firebase", "Machine Learning"],
    github: "https://github.com/Inteli-College/2025-1A-T09-ES09-G05",
  },
  {
    code: "FOODATLAS",
    title: "WhatsApp Restaurant Recommendation Bot",
    meta: "Jul 2024 – Feb 2025  ·  Freelance",
    description:
      "A B2C chatbot that gives personalized restaurant recommendations through WhatsApp, using NLP to understand natural-language requests — cuisine type, location, budget, dietary preferences. Backend in Node.js/Express on Google Cloud, with Dialogflow handling intent detection and entity extraction, and BigQuery powering user history and personalization.",
    tags: ["Node.js", "Express", "Dialogflow", "NLP", "Google Cloud", "BigQuery"],
    repoNote: "Private repository — client freelance project",
  },
  {
    code: "INSPETEC",
    title: "System Architecture for Building Inspections",
    meta: "Oct – Dec 2024  ·  in partnership with IPT",
    description:
      "Designed a modular cloud architecture to replace IPT's manual, paper-based building inspection process. Focused on confidentiality and interoperability as the key non-functional requirements — RBAC, encryption at rest, and standardized REST/GraphQL APIs to support future integration with IoT devices, drones, and BIM/CAD systems. Validated the design using ATAM, with Markov Chains and Petri Nets to simulate system behavior under the new architecture.",
    tags: ["System Architecture", "ATAM", "REST API", "RBAC", "Cloud", "Security"],
    github: "https://github.com/Inteli-College/2024-2B-T09-ES08-G04",
  },
  {
    code: "LAW HUNTER",
    title: "Regulatory Change Monitoring Platform",
    meta: "Aug – Oct 2024  ·  in partnership with Bank of America",
    description:
      "Built a platform that automates regulatory compliance monitoring for Bank of America's operations in Brazil. Combines web scraping and NLP to continuously track new rules from regulators like BACEN and CVM, then classifies them through a hierarchical tagging system to route changes to the right compliance teams. Backend split between Go and C#/.NET, with Python handling the NLP and machine learning pipeline; PostgreSQL on Amazon RDS for storage.",
    tags: ["Go", "C#/.NET", "Python", "NLP", "React", "PostgreSQL", "AWS"],
    github: "https://github.com/Inteli-College/2024-2A-T09-ES07-G02",
  },
  {
    code: "LEGACY LAB",
    title: "CEO Networking & Project Synergy App",
    meta: "Apr – Jun 2024  ·  in partnership with Fundação Dom Cabral",
    description:
      "Built a mobile app for FDC's \"CEO's Legacy\" program, helping CEOs manage their projects and discover valuable synergies with peers. A recommendation system, based on user profile and rating history, suggests projects likely to produce productive collaborations — turning a network of business leaders into an active source of connections. Backend in C# with Dapper, React Native for cross-platform mobile, and a Python/pandas pipeline powering the recommendation model. Hosted on AWS.",
    tags: ["C#", "React Native", "Python", "Recommendation System", "AWS", "Mobile"],
    github: "https://github.com/Inteli-College/2024-1B-T09-ES06-G05",
  },
  {
    code: "A.S.A.S.",
    title: "Impact Management Platform for NGOs",
    meta: "Feb – Apr 2024  ·  in partnership with Gerando Falcões",
    description:
      "Built a web app helping Gerando Falcões' partner NGOs track service delivery and measure social impact — replacing informal, inconsistent record-keeping with a simple system designed for low digital literacy and unreliable connectivity in underserved communities. Backend with Express and Sequelize (JWT auth), React frontend with Ant Design and Vite, deployed on AWS (EC2 + RDS).",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "AWS", "Social Impact"],
    github: "https://github.com/Inteli-College/2024-T0009-ES05-G01",
  },
  {
    code: "CLEPIUS",
    title: "IoT for Hospital Patient Flow",
    meta: "Oct – Dec 2023  ·  Hospital Sírio-Libanês",
    description:
      "An IoT prototype that tracks doctors and patients in real time inside the hospital, reducing wait times and improving response coordination. Built on ESP32 devices communicating over Wi-Fi and ESP-NOW, with data flowing through MQTT into a live Ubidots dashboard.",
    tags: ["IoT", "C++", "ESP32", "MQTT", "Ubidots"],
    github: "https://github.com/kaianes/IoT-for-Hospital-Patient-Flow",
  },
  {
    code: "SINAPSE",
    title: "Churn Prediction for Energy Clients",
    meta: "Aug – Oct 2023  ·  BCG",
    description:
      "A predictive model built for a global consulting firm to forecast customer churn for an energy provider. Followed CRISP-DM end to end, testing multiple algorithms before landing on Random Forest — 89.98% accuracy on the test set.",
    tags: ["Python", "Scikit-learn", "Random Forest", "CRISP-DM"],
    github: "https://github.com/kaianes/Churn-Prediction-for-Energy-Clients",
  },
  {
    code: "TEKO PORÃ",
    title: "Digital Data Collection for Natura",
    meta: "Mar – Jun 2023  ·  in partnership with Natura",
    description:
      "A web platform replacing Natura's paper-based data collection from Amazon rainforest producers. Two tailored interfaces — desktop for researchers, mobile-first for producers — sharing a common database, designed for offline-first use and low digital literacy.",
    tags: ["React", "JavaScript", "SQLite", "HTML/CSS", "UX Research"],
    github: "https://github.com/kaianes/Digital-Data-Collection-for-Natura",
  },
  {
    code: "BUMBA CODE",
    title: "Educational Game for Kids",
    meta: "Jan – Mar 2023  ·  UFAL",
    description:
      "A 2D isometric game teaching basic programming logic and math to elementary school children in Alagoas, Brazil, built around the regional Bumba Meu Boi festival. Contributed to programming, documentation, and the game's soundtrack.",
    tags: ["Unity", "C#", "Game Design", "Education"],
    github: "https://github.com/kaianes/Educational-Game-for-Kids",
  },
];

// Chunk array into groups of n
function chunk<T>(arr: T[], n: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += n) result.push(arr.slice(i, i + n));
  return result;
}

const ACCENT_BORDER: Record<string, string> = {
  "bg-live-circuit": "border-live-circuit",
  "bg-warm-spark": "border-warm-spark",
  "bg-bright-logic": "border-bright-logic",
};

const slides = chunk(projects, 3);
const TOTAL = projects.length;

function ProjectModal({
  project,
  accentClass,
  open,
  onClose,
}: {
  project: Project;
  accentClass: string;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 transition-opacity duration-200 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 bg-white rounded-2xl border-2 ${ACCENT_BORDER[accentClass] ?? "border-live-circuit"} w-full max-w-[680px] max-h-[85vh] overflow-y-auto transition-all duration-200 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="px-6 md:px-8 pt-6 pb-7">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <p className="font-body font-medium text-[10px] tracking-widest text-deep-mind/50 uppercase mb-2">
                {project.code}
              </p>
              <h3 className="font-heading font-bold text-[22px] md:text-[28px] text-deep-mind leading-tight">
                {project.title}
              </h3>
              <p className="font-body text-[12px] text-deep-mind/50 mt-2">{project.meta}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="shrink-0 mt-1 w-8 h-8 flex items-center justify-center text-deep-mind/35 hover:text-deep-mind transition-colors"
            >
              <span className="text-[24px] leading-none">×</span>
            </button>
          </div>

          {/* Full description */}
          <p className="font-body text-[14px] leading-[1.75] text-deep-mind/80 mb-6">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[10px] font-medium font-body text-deep-mind/55 bg-deep-mind/6"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* GitHub / repo note */}
          {(project.github || project.repoNote) && (
            <div className="border-t border-deep-mind/10 pt-4">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-medium text-[13px] text-bright-logic hover:text-insight-blue transition-colors"
                >
                  github ↗
                </a>
              ) : (
                <span className="font-body text-[12px] text-deep-mind/35">
                  {project.repoNote}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  accentClass,
  onOpen,
}: {
  project: Project;
  accentClass: string;
  onOpen: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(); }}
      className="h-[320px] bg-white border border-deep-mind/8 overflow-hidden flex flex-col cursor-pointer rounded-none hover:rounded-lg hover:shadow-md transition-all duration-300"
    >
      {/* Top accent bar */}
      <div className={`h-[3px] shrink-0 ${accentClass}`} />

      <div className="px-6 pt-4 pb-5 flex flex-col flex-1 overflow-hidden">
        {/* Top zone — grows and clips if content is too tall */}
        <div className="flex-1 overflow-hidden min-h-0">
          <p className="font-body font-medium text-[10px] tracking-widest text-deep-mind/50 uppercase">
            {project.code}
          </p>
          <h3 className="font-heading font-bold text-[20px] md:text-[22px] text-deep-mind mt-3 leading-tight line-clamp-2">
            {project.title}
          </h3>
          <p className="font-body text-[11px] text-deep-mind/50 mt-2">{project.meta}</p>
          <p className="font-body text-[13px] leading-[1.7] text-deep-mind/75 mt-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Bottom zone — always pinned at the same height across all cards */}
        <div className="shrink-0 mt-4">
          {project.tags.length > 0 && (
            <div className="flex flex-nowrap gap-2 overflow-hidden">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-medium font-body text-deep-mind/55 bg-deep-mind/6"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-medium font-body text-deep-mind/35 bg-deep-mind/4">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>
          )}
          {(project.github || project.repoNote) && (
            <div className="mt-4 pt-4 border-t border-deep-mind/10">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-body font-medium text-[12px] text-bright-logic hover:text-insight-blue transition-colors"
                >
                  github ↗
                </a>
              ) : (
                <span className="font-body text-[11px] text-deep-mind/35">
                  {project.repoNote}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => setSelectedIndex(null), 200);
  }, []);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <section id="projects" className="bg-soft-canvas pt-[72px] pb-[80px]">
      {/* Section header */}
      <div className="px-6 md:px-20">
        <div className="mb-[38px] w-full h-px bg-deep-mind/12" />
        <h2 className="font-heading font-bold text-[40px] md:text-[64px] leading-none text-deep-mind">
          Projects
        </h2>
      </div>

      {/* ── Desktop carousel ── */}
      <div className="hidden md:flex items-center gap-4 mt-10 px-6">
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
          className="shrink-0 w-9 h-9 rounded-full border border-deep-mind/20 flex items-center justify-center text-deep-mind/50 hover:border-deep-mind/50 hover:text-deep-mind disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          ←
        </button>

        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slideProjects, si) => (
              <div key={si} className="w-full shrink-0 grid grid-cols-3 gap-6">
                {slideProjects.map((project, pi) => {
                  const globalIndex = si * 3 + pi;
                  return (
                    <ProjectCard
                      key={project.code}
                      project={project}
                      accentClass={ACCENTS[globalIndex % ACCENTS.length]}
                      onOpen={() => openModal(globalIndex)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          aria-label="Next slide"
          className="shrink-0 w-9 h-9 rounded-full border border-deep-mind/20 flex items-center justify-center text-deep-mind/50 hover:border-deep-mind/50 hover:text-deep-mind disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          →
        </button>
      </div>

      {/* ── Mobile: horizontal scroll snap ── */}
      <div
        className="md:hidden mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory px-6"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, i) => (
          <div key={project.code} className="snap-start shrink-0 w-[calc(100vw-48px)]">
            <ProjectCard
              project={project}
              accentClass={ACCENTS[i % ACCENTS.length]}
              onOpen={() => openModal(i)}
            />
          </div>
        ))}
      </div>

      {/* Pagination — dots + counter */}
      <div className="mt-8 px-6 md:px-20 flex items-center justify-between md:justify-start md:gap-8">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? "w-4 h-2 bg-live-circuit"
                  : "w-2 h-2 bg-deep-mind/20 hover:bg-deep-mind/40"
              }`}
            />
          ))}
        </div>

        <p className="font-body text-[11px] text-deep-mind/40">
          {TOTAL} projects · {slides.length} slides
        </p>

        {/* Mobile arrows */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous"
            className="w-8 h-8 rounded-full border border-deep-mind/20 flex items-center justify-center text-[12px] text-deep-mind/50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            aria-label="Next"
            className="w-8 h-8 rounded-full border border-deep-mind/20 flex items-center justify-center text-[12px] text-deep-mind/50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>

      {/* Project modal */}
      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          accentClass={ACCENTS[selectedIndex % ACCENTS.length]}
          open={modalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
