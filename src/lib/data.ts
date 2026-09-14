import {
  Boxes,
  BrainCircuit,
  CloudCog,
  Database,
  LayoutDashboard,
  MessagesSquare,
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

export type ApproachPillar = {
  id: string;
  step: string;
  title: string;
  description: string;
  items: string[];
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
  tag: string;
  description: string;
  focus: string[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  status: "Concept" | "Research" | "Development" | "Beta" | "Live";
  image: string;
  teaser: string;
};

export type CareerTrack = {
  id: string;
  title: string;
  description: string;
  points: string[];
};

/* -------------------------------- Capabilities ----------------------------- */

export const CAPABILITIES: Capability[] = [
  {
    id: "custom-web-applications",
    icon: Boxes,
    title: "Custom Web Applications",
    summary:
      "Responsive, user-friendly websites and custom applications built around your business needs — taken from concept to deployment as scalable, secure products that drive growth and engagement.",
    technologies: ["Web apps", "Responsive UI", "Scalable architecture", "Secure by design"],
    outcomes: [
      "Tailored to how your business actually works",
      "Scalable and secure from day one",
      "Handled end to end — concept through deployment",
    ],
  },
  {
    id: "data-engineering-analytics",
    icon: Database,
    title: "Data Engineering & Analytics",
    summary:
      "Robust data pipelines, dashboards and analytics platforms that turn raw data into actionable insight — so decisions across the business are made on evidence, not guesswork.",
    technologies: ["Data pipelines", "Dashboards", "Analytics platforms", "Reporting"],
    outcomes: [
      "Raw data turned into decisions-ready insight",
      "Pipelines and platforms built to last",
      "Smarter, faster business decisions",
    ],
  },
  {
    id: "ai-integration",
    icon: BrainCircuit,
    title: "AI Integration",
    summary:
      "Practical AI woven into your operations — custom models, chatbots and intelligent systems that automate tasks, lift user experience and boost productivity, tailored to your goals.",
    technologies: ["Custom models", "Chatbots", "Intelligent systems", "Workflow automation"],
    outcomes: [
      "Repetitive work automated end to end",
      "Customer and employee experiences enhanced",
      "AI shaped around your goals — not the hype",
    ],
  },
  {
    id: "cloud-services",
    icon: CloudCog,
    title: "Cloud Services",
    summary:
      "Secure cloud migration, infrastructure setup and cloud-native development that accelerate digital transformation — with the scalability, flexibility and cost-efficiency to grow as you do.",
    technologies: ["Cloud migration", "Infrastructure setup", "Cloud-native development"],
    outcomes: [
      "Workloads migrated securely, without disruption",
      "Infrastructure that scales on demand",
      "Cost-efficiency engineered in, not bolted on",
    ],
  },
  {
    id: "enterprise-software",
    icon: LayoutDashboard,
    title: "Enterprise Software Development",
    summary:
      "Enterprise-grade ERP, CRM and workflow systems built for performance and reliability — aligned with your business processes and designed to deliver measurable operational results.",
    technologies: ["ERP systems", "CRM platforms", "Workflow systems", "Integrations"],
    outcomes: [
      "Operations streamlined on one reliable system",
      "Software that mirrors your business processes",
      "Measurable results, not just features",
    ],
  },
  {
    id: "it-consulting",
    icon: MessagesSquare,
    title: "IT Consulting",
    summary:
      "Strategic guidance, technology roadmaps and hands-on implementation support for complex tech challenges — helping you choose the right tools and drive digital success with confidence.",
    technologies: ["Strategic guidance", "Technology roadmaps", "Implementation support"],
    outcomes: [
      "Clear direction through complex tech decisions",
      "Roadmaps grounded in your reality",
      "A partner from strategy through implementation",
    ],
  },
];

/* --------------------------------- Approach -------------------------------- */

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    id: "strategy",
    step: "01",
    title: "Strategy",
    description:
      "We don't take a transactional approach. We dig into your most complex business challenges and apply technology systemically — so the solution is sustainable, not just functional.",
    items: ["Product planning", "Lean development", "Value engineering", "Accessibility compliance"],
  },
  {
    id: "design",
    step: "02",
    title: "Design",
    description:
      "User research meets creative vision. Our design process produces interfaces that are intuitive and engaging — simplifying complex workflows into experiences people actually enjoy.",
    items: ["User experience (UX)", "User interface (UI)", "Prototyping & testing"],
  },
  {
    id: "development",
    step: "03",
    title: "Development",
    description:
      "Clean, efficient, scalable code written with modern technologies and agile practice — robust applications that are ready for what your business does next.",
    items: ["Full-stack development", "Mobile app development", "API integration", "Cloud deployment"],
  },
  {
    id: "maintain",
    step: "04",
    title: "Maintain",
    description:
      "Our work doesn't end at launch. Ongoing support and maintenance keep your application secure, performant and up to date long after release day.",
    items: ["24/7 proactive monitoring", "Performance optimization", "Security audits & patching", "Regular data backups"],
  },
  {
    id: "scale",
    step: "05",
    title: "Scale",
    description:
      "As your business grows, your technology grows with it. We scale your infrastructure and application to handle increased demand and new challenges.",
    items: ["Cloud infrastructure scaling", "Feature enhancements", "Load balancing & tuning", "Global content delivery"],
  },
];

export const DEV_STRENGTHS = [
  "Component-based architecture",
  "API integration",
  "Responsive web applications",
  "Performance optimization",
  "Secure authentication systems",
];

/* -------------------------------- Technologies ----------------------------- */

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    headline: "Interfaces your users actually enjoy",
    description:
      "Responsive, user-friendly frontends built with a hard budget on performance and accessibility — the kind of surfaces that make complex products feel simple.",
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
      "APIs, event services and domain logic designed around explicit contracts, idempotency and the failure modes production will eventually exercise.",
    items: [
      { name: "Node.js", use: "APIs & real-time services" },
      { name: "NestJS", use: "Structured enterprise backends" },
      { name: "Python", use: "Data, ML and AI services" },
      { name: "Java / Spring", use: "Core enterprise estates" },
      { name: "Go", use: "High-throughput edge services" },
      { name: "REST & gRPC", use: "Interoperable service contracts" },
    ],
  },
  {
    id: "data",
    label: "Data",
    headline: "One governed layer of truth",
    description:
      "Pipelines, warehouses and analytics platforms modeled, tested and documented — so the numbers your business runs on can be trusted.",
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
      "Migration, infrastructure setup and cloud-native development designed for the platform you'll run in three years — not just the one you launch on.",
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
      "Custom models, chatbots and intelligent systems with the evaluation, guardrails and cost controls that make AI dependable enough for real operations.",
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
      "Pipelines, platforms and observability that turn releases into non-events — and keep 24/7 monitoring honest.",
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
    tag: "Understand",
    description:
      "We dive deep to understand your business, your audience and your goals. The research done here becomes the foundation for every decision that follows.",
    focus: ["Business & audience research", "Goal mapping", "Foundation setting"],
  },
  {
    step: "02",
    title: "Define",
    tag: "Align",
    description:
      "Project scope is clarified, goals are set, and strategy is aligned with your vision — so everyone is moving down a clear path forward before a line of code is written.",
    focus: ["Scope definition", "Goal setting", "Strategy alignment"],
  },
  {
    step: "03",
    title: "Design",
    tag: "Create",
    description:
      "Ideas take shape as engaging UI/UX that prioritizes user experience and your brand identity — designed to be as intuitive as it is distinctive.",
    focus: ["UI/UX design", "Brand alignment", "Interactive prototypes"],
  },
  {
    step: "04",
    title: "Develop",
    tag: "Build",
    description:
      "Designs become fully functional digital products, built with modern technologies and best practices — engineered to perform, not just to demo.",
    focus: ["Full-stack build", "Modern toolchains", "Quality engineering"],
  },
  {
    step: "05",
    title: "Deploy",
    tag: "Launch",
    description:
      "Rigorous testing precedes launch, and launch itself is deliberate — your project goes live working flawlessly across devices and platforms.",
    focus: ["Rigorous testing", "Cross-device QA", "Production launch"],
  },
  {
    step: "06",
    title: "Deliver",
    tag: "Grow",
    description:
      "Deployment is not the finish line. Ongoing support, updates and improvements keep the product succeeding long-term — this is where partnerships compound.",
    focus: ["Ongoing support", "Continuous updates", "Long-term partnership"],
  },
];

/* -------------------------------- Innovation ------------------------------- */

export const PRODUCTS: Product[] = [
  {
    id: "product-one",
    name: "Product 01",
    category: "Launching 2026",
    status: "Development",
    image: "/images/innovation-copilot.png",
    teaser:
      "The first of two products NextKinLife will launch by the end of 2026 — developed from the ground up with passion, precision and patented technology.",
  },
  {
    id: "product-two",
    name: "Product 02",
    category: "Launching 2026",
    status: "Development",
    image: "/images/innovation-docs.png",
    teaser:
      "Our second groundbreaking release — currently in stealth development, and built to be more than a solution: a statement of what technology with purpose can be.",
  },
];

/* --------------------------------- Careers --------------------------------- */

export const CAREER_TRACKS: CareerTrack[] = [
  {
    id: "early-careers",
    title: "Early Careers",
    description:
      "Start your journey on global projects with structured mentorship and real responsibility from day one — an opportunity to learn, grow and reinvent your world.",
    points: ["Mentorship & hands-on learning", "Global project exposure", "A path to grow with the company"],
  },
  {
    id: "experienced-professionals",
    title: "Experienced Professionals",
    description:
      "Bring your expertise where it compounds: cutting-edge technology projects, collaboration with industry experts, and the platform to turn your ideas into reality.",
    points: ["Cutting-edge technology projects", "Collaboration with industry experts", "Space to innovate and lead"],
  },
];

export const CAREER_PERKS = [
  "A team-first, growth-oriented culture",
  "Space to innovate, experiment and lead",
  "Mentorship, learning and life-long development",
  "A platform to turn your ideas into reality",
  "Flexible work environment",
  "Competitive compensation and benefits",
];

/* --------------------------------- Offices --------------------------------- */

export const OFFICES = [
  {
    city: "Maryland, USA",
    country: "United States",
    role: "Global headquarters",
    address: "8795 Stonehouse Dr, Ellicott City, MD 21043",
    email: "us@nextkinlife.com",
    timezone: "UTC−5",
  },
  {
    city: "India",
    country: "India",
    role: "Development & management hub",
    address: "Skilled engineering workforce powering US delivery",
    email: "india@nextkinlife.com",
    timezone: "UTC+5:30",
  },
  {
    city: "Midrand, South Africa",
    country: "South Africa",
    role: "Africa presence",
    address: "403 Kyalami Hills, Maple Drive, Kyalami Hills, Midrand, Gauteng 1684",
    email: "contact@nextkinlife.com",
    timezone: "UTC+2",
  },
];

export const SERVICE_KEYWORDS = [
  "Custom Web Applications",
  "Data Engineering & Analytics",
  "AI Integration",
  "Cloud Services",
  "Enterprise Software",
  "IT Consulting",
  "UI/UX Design",
  "eCommerce",
  "Tech Support",
];

export const TRUST_MARKERS = [
  { value: "3", label: "global locations — USA · India · South Africa" },
  { value: "6", label: "integrated service lines, end to end" },
  { value: "2025", label: "founded — building for the long term" },
  { value: "24/7", label: "proactive monitoring & support" },
];
