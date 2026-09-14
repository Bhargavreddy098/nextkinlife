import {
  Boxes,
  BrainCircuit,
  Compass,
  Database,
  Network,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- Types --------------------------------- */

export type Capability = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  technologies: string[];
  outcomes: string[];
};

export type CaseStudy = {
  id: string;
  name: string;
  industry: string;
  image: string;
  problem: string;
  solution: string;
  impact: { value: string; label: string }[];
  technologies: string[];
};

export type TechCategory = {
  id: string;
  label: string;
  headline: string;
  description: string;
  items: { name: string; use: string }[];
};

export type ProcessStage = {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverable: string;
};

export type Innovation = {
  id: string;
  name: string;
  category: string;
  status: "Concept" | "Research" | "Development" | "Beta" | "Live";
  image?: string;
  problem: string;
  solution: string;
  targetUsers: string;
};

export type ResearchItem = {
  id: string;
  title: string;
  kind: "Research" | "Patent";
  status: "Concept" | "Research" | "Development" | "Beta" | "Live";
  summary: string;
};

export type Role = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
};

/* -------------------------------- Capabilities ----------------------------- */

export const CAPABILITIES: Capability[] = [
  {
    id: "custom-software",
    icon: Boxes,
    title: "Custom Software",
    summary:
      "Web platforms, mobile apps and SaaS products engineered for longevity — architecture decisions made upfront so the first release isn't a rewrite waiting to happen.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "React Native", "PostgreSQL"],
    outcomes: [
      "Ship in weeks without accruing a rewrite debt",
      "Products that hold up well past their first 100k users",
      "Full ownership of source code, IP and infrastructure",
    ],
  },
  {
    id: "ai-automation",
    icon: BrainCircuit,
    title: "AI & Automation",
    summary:
      "LLM applications, AI agents, RAG systems and workflow automation that move beyond demos — grounded in your data, permissioned for your enterprise, measurable in production.",
    technologies: ["LLM apps", "RAG", "AI agents", "Vector search", "Computer vision", "IDP"],
    outcomes: [
      "Manual workflows compressed from days to minutes",
      "Institutional knowledge made searchable and citable",
      "Every AI answer traceable to a source you control",
    ],
  },
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    summary:
      "Pipelines, warehouses and streaming analytics that turn scattered operational data into one governed, trustworthy decision layer the whole business can build on.",
    technologies: ["PostgreSQL", "Kafka", "dbt", "Spark", "ClickHouse", "Airflow"],
    outcomes: [
      "A single source of truth across systems",
      "Reporting in minutes instead of sprint queues",
      "Real-time operational visibility, end to end",
    ],
  },
  {
    id: "cloud-devops",
    icon: ServerCog,
    title: "Cloud & DevOps",
    summary:
      "Cloud architecture, migration, Kubernetes and CI/CD that make infrastructure boring — observable, recoverable, cost-aware and ready for the traffic you're hoping for.",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD"],
    outcomes: [
      "Weekly releases instead of quarterly events",
      "Infrastructure that survives its worst day",
      "Cloud spend actively engineered, not just billed",
    ],
  },
  {
    id: "enterprise-software",
    icon: Network,
    title: "Enterprise Systems",
    summary:
      "CRMs, ERPs, internal platforms and integrations shaped around how your business actually operates — and connected cleanly to the legacy estate you can't retire yet.",
    technologies: ["NestJS", "Java / Spring", "GraphQL", "Event-driven", "SSO / SAML", "iPaaS"],
    outcomes: [
      "Systems that fit the workflow, not force it",
      "Fewer spreadsheets and swivel-chair handoffs",
      "Integrations that survive vendor changes",
    ],
  },
  {
    id: "technology-consulting",
    icon: Compass,
    title: "Technology Consulting",
    summary:
      "Architecture reviews, technical due diligence and transformation roadmaps delivered by engineers who still ship code — advice grounded in what actually runs in production.",
    technologies: ["Architecture audits", "Cloud strategy", "Scalability reviews", "Security posture", "Team enablement"],
    outcomes: [
      "Clarity before major platform commitments",
      "Risks surfaced before they become outages",
      "Roadmaps your own teams can actually execute",
    ],
  },
];

/* -------------------------------- Case studies ----------------------------- */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ledgerline",
    name: "Real-time treasury platform",
    industry: "Financial Services",
    image: "/images/work-ledger.png",
    problem:
      "A cross-border payments firm ran treasury operations across spreadsheets and three disconnected systems — intraday liquidity was effectively invisible to the people responsible for it.",
    solution:
      "A real-time treasury platform unifying accounts, forecasts and approval workflows, with event-driven reconciliation across fourteen banking integrations and a regulator-ready audit trail.",
    impact: [
      { value: "+38%", label: "forecast accuracy" },
      { value: "Days → min", label: "reconciliation time" },
      { value: "14", label: "banking integrations" },
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Kafka", "AWS"],
  },
  {
    id: "atlasfield",
    name: "AI-assisted dispatch engine",
    industry: "Logistics & Supply Chain",
    image: "/images/work-atlas.png",
    problem:
      "A national field-services operator scheduled thousands of jobs daily by hand — a process that couldn't absorb weather, traffic or the slippage that cascaded through every shift.",
    solution:
      "An AI-assisted dispatch and route-optimization engine with live re-planning as conditions change, integrated into the incumbent ERP through clean, versioned APIs.",
    impact: [
      { value: "+22%", label: "jobs completed per day" },
      { value: "−15%", label: "fleet fuel costs" },
      { value: "94%", label: "live ETA accuracy" },
    ],
    technologies: ["Python", "FastAPI", "Redis", "Kubernetes", "GCP"],
  },
  {
    id: "helios",
    name: "Streaming clinical analytics",
    industry: "Healthcare",
    image: "/images/work-helios.png",
    problem:
      "A hospital network's quality teams waited weeks for cross-facility reports while the patient-outcome signals behind them went stale.",
    solution:
      "A privacy-conscious streaming data platform normalizing more than forty source systems into one governed analytics layer, with role-based clinical dashboards on top.",
    impact: [
      { value: "< 5 min", label: "reporting lag" },
      { value: "40+", label: "source systems unified" },
      { value: "0", label: "PHI exposure incidents" },
    ],
    technologies: ["Python", "Spark", "dbt", "Snowflake", "React"],
  },
];

/* -------------------------------- Technologies ----------------------------- */

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    headline: "Interfaces that stay fast at enterprise scale",
    description:
      "We build the surfaces your users touch — dashboards, portals, design systems — with a hard budget on performance and accessibility from the first commit.",
    items: [
      { name: "React", use: "Complex state, design systems" },
      { name: "Next.js", use: "SSR, SEO, edge rendering" },
      { name: "TypeScript", use: "Type-safe from database to UI" },
      { name: "Tailwind CSS", use: "Consistent, token-driven styling" },
      { name: "React Native", use: "Shared logic, native mobile apps" },
      { name: "GraphQL / tRPC", use: "Efficient, contract-first APIs" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    headline: "Services built for correctness under load",
    description:
      "APIs, event services and domain logic designed around explicit contracts, idempotency and the failure modes we know production will eventually exercise.",
    items: [
      { name: "Node.js", use: "APIs & real-time services" },
      { name: "NestJS", use: "Structured enterprise backends" },
      { name: "Python", use: "Data, ML and AI services" },
      { name: "Java / Spring", use: "Core banking & ERP estates" },
      { name: "Go", use: "High-throughput edge services" },
      { name: "REST & gRPC", use: "Interoperable service contracts" },
    ],
  },
  {
    id: "data",
    label: "Data",
    headline: "One governed layer of truth",
    description:
      "Transactional stores, event streams and analytical warehouses chosen deliberately — then modeled, tested and documented so trust in the numbers compounds.",
    items: [
      { name: "PostgreSQL", use: "The transactional core" },
      { name: "MongoDB", use: "Document & catalog workloads" },
      { name: "Redis", use: "Caching, sessions, queues" },
      { name: "Kafka", use: "Event streaming backbone" },
      { name: "ClickHouse", use: "Real-time OLAP analytics" },
      { name: "dbt", use: "Tested, versioned transforms" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    headline: "Architecture before credentials",
    description:
      "We design for the platform you'll run in three years — multi-account landing zones, network topology and identity done properly the first time.",
    items: [
      { name: "AWS", use: "Primary delivery platform" },
      { name: "Azure", use: "Enterprise & Microsoft estates" },
      { name: "GCP", use: "Data-heavy & ML workloads" },
      { name: "Terraform", use: "Everything as reviewed code" },
      { name: "Serverless", use: "Event-driven cost efficiency" },
      { name: "Multi-region", use: "Resilience & data residency" },
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    headline: "Applied intelligence, not demos",
    description:
      "From retrieval pipelines to agent orchestration — with evaluation harnesses, guardrails and cost controls that make AI dependable enough to put in front of customers.",
    items: [
      { name: "LLM applications", use: "Copilots & assistants" },
      { name: "RAG pipelines", use: "Answers grounded in your data" },
      { name: "Vector databases", use: "Semantic search at scale" },
      { name: "AI agents", use: "Tool-using autonomous workflows" },
      { name: "Computer vision", use: "Inspection & document OCR" },
      { name: "Evals & guardrails", use: "Quality you can defend" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    headline: "Ship quickly, recover instantly",
    description:
      "Pipelines, platforms and observability that turn releases into non-events — and give engineers the confidence to deploy on a Friday afternoon.",
    items: [
      { name: "Docker", use: "Immutable, portable builds" },
      { name: "Kubernetes", use: "Orchestration & autoscaling" },
      { name: "CI/CD", use: "Trunk-based, gated delivery" },
      { name: "Terraform", use: "Reproducible infrastructure" },
      { name: "OpenTelemetry", use: "Traces, metrics, logs" },
      { name: "Supply-chain security", use: "Scanning & signed artifacts" },
    ],
  },
];

/* ---------------------------------- Process -------------------------------- */

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "Discover",
    duration: "1–2 weeks",
    description:
      "Stakeholder interviews, systems audit and constraint mapping. We learn how the business actually runs — including the workarounds nobody documented — before proposing anything.",
    deliverable: "Technical findings brief & success metrics",
  },
  {
    step: "02",
    title: "Define",
    duration: "1–2 weeks",
    description:
      "Scope is carved into outcomes rather than feature lists. Architecture options are priced against risk, timeline and total cost of ownership, with a recommendation we're willing to defend.",
    deliverable: "Solution blueprint & delivery roadmap",
  },
  {
    step: "03",
    title: "Design",
    duration: "2–4 weeks",
    description:
      "Domain models, API contracts, data flows and interface systems are designed together — so frontend, backend and data land aligned instead of negotiating at integration time.",
    deliverable: "Validated prototypes & decision records",
  },
  {
    step: "04",
    title: "Build",
    duration: "Iterative",
    description:
      "Senior pods ship in weekly increments behind CI/CD, with code review, automated tests and security gates in place from day one — not bolted on before launch.",
    deliverable: "Working software, every week",
  },
  {
    step: "05",
    title: "Deploy",
    duration: "1–2 weeks",
    description:
      "Progressive rollouts with infrastructure as code, observability dashboards and rehearsed rollback plans. Boring, deliberate releases — the kind nobody needs to stay up late for.",
    deliverable: "Launch runbook & monitoring baselines",
  },
  {
    step: "06",
    title: "Scale",
    duration: "Ongoing",
    description:
      "After launch we tune cost, performance and reliability — then either hand over cleanly to your team with documentation and enablement, or stay on as an embedded platform team.",
    deliverable: "SLAs, optimization reports & enablement",
  },
];

/* -------------------------------- Innovation ------------------------------- */

export const PRODUCTS: Innovation[] = [
  {
    id: "copilot",
    name: "Kaidron Copilot",
    category: "Enterprise AI",
    status: "Beta",
    image: "/images/innovation-copilot.png",
    problem:
      "Enterprise chatbots answer confidently from the wrong data — and can't prove where any answer came from.",
    solution:
      "A copilot framework that grounds every response in your systems of record, with role-based permissions, citation trails and full audit logging.",
    targetUsers: "Regulated enterprises deploying internal AI assistants",
  },
  {
    id: "paperflow",
    name: "Paperflow IDP",
    category: "Document Intelligence",
    status: "Development",
    image: "/images/innovation-docs.png",
    problem:
      "Teams spend their first hour of every day retyping data from invoices, claims and contracts.",
    solution:
      "Document intelligence that extracts, validates and routes structured data with confidence scores and human-in-the-loop review for edge cases.",
    targetUsers: "Finance, insurance and operations teams",
  },
];

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    id: "rag-audit",
    title: "Citation-grade retrieval for regulated industries",
    kind: "Research",
    status: "Research",
    summary:
      "Retrieval techniques where every generated statement traces to an auditable source span — designed for finance and healthcare compliance regimes.",
  },
  {
    id: "agent-budget",
    title: "Budget-constrained multi-agent orchestration",
    kind: "Research",
    status: "Research",
    summary:
      "Cost-aware planner architectures that keep long-running agent workflows inside predictable token and time budgets.",
  },
  {
    id: "streaming-features",
    title: "Streaming feature stores for real-time ML",
    kind: "Patent",
    status: "Concept",
    summary:
      "A method for keeping online model features consistent with streaming events while meeting strict latency floors.",
  },
];

/* --------------------------------- Careers --------------------------------- */

export const OPEN_ROLES: Role[] = [
  {
    id: "senior-fullstack",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote — Global",
    type: "Full-time",
    level: "Senior",
  },
  {
    id: "ai-engineer-agents",
    title: "AI Engineer — Agents & RAG",
    department: "AI",
    location: "Bengaluru, India",
    type: "Full-time",
    level: "Mid–Senior",
  },
  {
    id: "data-platform-engineer",
    title: "Data Platform Engineer",
    department: "Data",
    location: "Austin, USA",
    type: "Full-time",
    level: "Senior",
  },
  {
    id: "platform-engineer",
    title: "Platform Engineer — Kubernetes",
    department: "Cloud",
    location: "Cape Town, South Africa",
    type: "Full-time",
    level: "Mid-level",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote — Global",
    type: "Full-time",
    level: "Mid-level",
  },
];

/* --------------------------------- Offices --------------------------------- */

export const OFFICES = [
  {
    city: "Austin",
    country: "United States",
    role: "North America delivery hub",
    email: "us@kaidron.com",
    timezone: "UTC−6",
  },
  {
    city: "Bengaluru",
    country: "India",
    role: "Engineering & AI delivery hub",
    email: "in@kaidron.com",
    timezone: "UTC+5:30",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    role: "EMEA delivery hub",
    email: "za@kaidron.com",
    timezone: "UTC+2",
  },
];

export const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Logistics & Supply Chain",
  "Retail & Commerce",
  "SaaS & Technology",
  "Manufacturing",
  "Energy & Utilities",
  "Professional Services",
];

export const TRUST_MARKERS = [
  { value: "3", label: "global delivery hubs — USA · India · South Africa" },
  { value: "6", label: "integrated capability lines" },
  { value: "24/7", label: "follow-the-sun delivery coverage" },
  { value: "Senior", label: "engineers on every engagement" },
];
