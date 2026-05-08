import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Cloud,
  Shield,
  Cpu,
  Rocket,
  Code2,
  Database,
  GitBranch,
  Workflow,
  Award,
  GraduationCap,
  Languages as LanguagesIcon,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: CV,
  head: () => ({
    meta: [
      { title: "Andrei Milas — CTO, Founder & Cloud / DevSecOps Leader" },
      {
        name: "description",
        content:
          "Andrei Milas — CTO, founder, and cloud architect specializing in DevSecOps, Kubernetes, and secure platform engineering.",
      },
      { property: "og:title", content: "Andrei Milas — CV" },
      {
        property: "og:description",
        content:
          "Executive technology leader: cloud, security, platform engineering and product strategy.",
      },
    ],
  }),
});

const experience = [
  {
    period: "2026 — Present",
    role: "Founder",
    company: "Groundspeed Labs",
    location: "Remote",
    link: "https://groundspeedlabs.com",
    bullets: [
      "Founded an indie mobile software studio building focused, well-crafted apps.",
      "Leading product, design and engineering end-to-end on Android.",
    ],
  },
  {
    period: "2024 — Present",
    role: "Cloud Architect & Cloud Security Specialist",
    company: "PANTOPIX GmbH & Co. KG",
    location: "Remote",
    bullets: [
      "Architected scalable, secure cloud infrastructure across projects, standardizing delivery and improving reliability.",
      "Transformed a fragmented MVP platform into an enterprise-grade system by refactoring and replacing core services.",
      "Built Kubernetes deployment pipelines with Helm — reducing release time from hours to minutes.",
      "Led cloud cost optimization, reducing expenses by 70% through right-sizing and logging improvements.",
      "Redesigned CI/CD workflows in Gitea & Bitbucket to support trunk-based development.",
      "Drove organizational changes toward cross-functional teams and stronger SDLC practices.",
    ],
  },
  {
    period: "2019 — 2024",
    role: "CTO & Co-founder",
    company: "Cyscale",
    location: "Remote",
    bullets: [
      "Shaped company strategy and drove product development as CTO and co-founder.",
      "Built and led a 10-person engineering team.",
      "Led the technical process for ISO 27001 certification — completed in 3 weeks.",
      "Defined the platform's architecture and led backend development in JavaScript and Go.",
      "Collaborated with sales and CS on acquisition and retention for a portfolio of 8 customers.",
      "Helped replace a significantly larger competitor for a key customer through technical partnerships.",
    ],
  },
  {
    period: "2016 — 2018",
    role: "Security Software Engineer",
    company: "CoSoSys",
    location: "Cluj-Napoca",
    bullets: [
      "Contributed to architecture and development of cloud security products.",
      "Designed a scalable microservice architecture using REST APIs.",
      "Integrated Google Drive, OneDrive and Amazon S3 for sensitive data detection.",
      "Built ELK-based logging infrastructure for real-time monitoring.",
      "Deployed infrastructure on Kubernetes with Docker-managed dev environments.",
    ],
  },
  {
    period: "2015 — 2016",
    role: "Technical Lead",
    company: "Freedactics",
    location: "Cluj-Napoca",
    bullets: [
      "Partnered with senior management on requirements and technical feasibility.",
      "Oversaw design, implementation and testing across the product lifecycle.",
      "Built backend services and managed cloud infrastructure for scalability.",
    ],
  },
  {
    period: "2014 — 2015",
    role: "Software Developer",
    company: "Agilio",
    location: "Cluj-Napoca",
    bullets: ["Developed and maintained admin components for video streaming applications."],
  },
  {
    period: "2011 — 2014",
    role: "Software Developer",
    company: "PitechPlus",
    location: "Cluj-Napoca",
    bullets: [
      "Built presentation sites, health-tracking apps, admin panels, sync tools and APIs.",
      "Mentored interns through company training programs.",
    ],
  },
];

const techStacks = [
  { icon: Cloud, title: "Cloud Providers", items: ["AWS", "Azure", "Google Cloud", "Alibaba Cloud"] },
  { icon: Workflow, title: "Infra & Orchestration", items: ["Terraform", "Terragrunt", "Kubernetes", "Helm", "Docker"] },
  { icon: GitBranch, title: "CI / CD", items: ["GitHub Actions", "Azure DevOps", "GitLab CI", "Jenkins"] },
  { icon: Code2, title: "Languages", items: ["Go", "Python", "JavaScript"] },
  { icon: Database, title: "Databases", items: ["Neo4j", "PostgreSQL", "MySQL / MariaDB", "MongoDB", "Elasticsearch", "InfluxDB"] },
  { icon: Cpu, title: "Data & AI", items: ["Prefect", "Databricks", "Claude Code", "Codex"] },
];

const coreSkills = [
  "Strategic Planning",
  "Team Building",
  "Technical Leadership",
  "Software Architecture",
  "Cloud Computing",
  "Software Engineering",
  "DevSecOps",
  "Cost Optimization",
];

function CV() {
  return (
    <main className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
      {/* HERO */}
      <section className="relative">
        <div>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl">
            Andrei <span className="text-gradient">Milas</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-foreground/90 sm:text-2xl">
            CTO · Founder · Cloud &amp; DevSecOps leader
          </p>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Building secure cloud-native applications and leading the teams behind them.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:andreimilas@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" /> Get in touch
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/andrei-milas/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-primary/60"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/andreimilas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-primary/60"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Cluj-Napoca, Romania</span>
            <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> andreimilas@gmail.com</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mt-20">
        <SectionLabel icon={Rocket}>About</SectionLabel>
        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground/90">
          Executive technology leader with experience spanning cloud infrastructure,
          cybersecurity, DevSecOps and software architecture across startup and scale-up
          environments. I've built and modernized secure platforms, led engineering teams,
          shaped product and technology strategy, and driven initiatives in cloud
          architecture, CI/CD, compliance and operational efficiency — combining
          founder-level ownership with hands-on depth.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="15+" label="Years in tech" />
          <Stat value="5" label="Teams led" />
          <Stat value="2" label="Startups founded" />
          <Stat value="10+" label="Production platforms shipped" />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-20">
        <SectionLabel icon={Shield}>Experience</SectionLabel>
        <div className="mt-6 space-y-5">
          {experience.map((job) => (
            <article
              key={job.role + job.company}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:border-primary/50 sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-hero opacity-0 transition group-hover:opacity-100" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{job.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {"link" in job && job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-foreground/90 hover:text-primary"
                      >
                        {job.company}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="text-foreground/90">{job.company}</span>
                    )}{" "}
                    · {job.location}
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-foreground/85">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-hero" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-20">
        <SectionLabel icon={Cpu}>Core skills</SectionLabel>
        <div className="mt-5 flex flex-wrap gap-2">
          {coreSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground/90 hover:border-primary/60"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section className="mt-16">
        <SectionLabel icon={Code2}>Technologies</SectionLabel>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStacks.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-5 shadow-card transition hover:border-primary/50"
            >
              <div className="flex items-center gap-2 text-primary">
                <Icon className="h-5 w-5" />
                <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {items.map((i) => (
                  <span
                    key={i}
                    className="rounded-md bg-background/60 px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION + CERTIFICATIONS + LANGUAGES */}
      <section className="mt-20 grid gap-6 lg:grid-cols-3">
        <Card icon={GraduationCap} title="Education">
          <p className="font-semibold text-foreground">B.Sc. Computer Science</p>
          <p className="text-sm text-muted-foreground">Technical University of Cluj-Napoca</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">2009 — 2013</p>
        </Card>
        <Card icon={Award} title="Certifications">
          <ul className="space-y-2 text-foreground/85">
            <li>
              <p className="font-medium">Cybersecurity Essentials</p>
              <p className="text-xs text-muted-foreground">CISCO Networking Academy · 2021</p>
            </li>
            <li>
              <p className="font-medium">Neo4j Certified Professional</p>
              <p className="text-xs text-muted-foreground">Neo4j · 2021</p>
            </li>
            <li>
              <p className="font-medium">Private Pilot License (PPL)</p>
              <p className="text-xs text-muted-foreground">2025</p>
            </li>
          </ul>
        </Card>
        <Card icon={LanguagesIcon} title="Languages">
          <ul className="space-y-2 text-foreground/85">
            <Lang name="Romanian" level="Native" pct={100} />
            <Lang name="English" level="Advanced (C1)" pct={85} />
            <Lang name="German" level="Beginner (A1)" pct={20} />
          </ul>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-border pt-8 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Andrei Milas</p>
          <div className="flex gap-4">
            <a href="mailto:andreimilas@gmail.com" className="hover:text-primary">Email</a>
            <a href="https://www.linkedin.com/in/andrei-milas/" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href="https://github.com/andreimilas" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-glow">
        <Icon className="h-4 w-4" />
      </span>
      <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-primary">{children}</h2>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-card">
      <p className="text-3xl font-bold text-gradient sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
      <div className="flex items-center gap-2 text-primary">
        <Icon className="h-5 w-5" />
        <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Lang({ name, level, pct }: { name: string; level: string; pct: number }) {
  return (
    <li>
      <div className="flex items-baseline justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-background/60">
        <div className="h-full bg-gradient-hero" style={{ width: `${pct}%` }} />
      </div>
    </li>
  );
}
