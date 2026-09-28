export type Discipline = "all" | "distributed" | "product" | "core" | "ai";

export type Role = {
  id: string;
  title: string;
  discipline: Discipline;
  disciplineLabel: string;
  badge?: string;
  badgeType?: "priority" | "active" | "labs" | "global" | "canvas" | "community" | "open";
  team: string;
  reqId: string;
  location: string;
  compensation: string;
  description: string;
  requirements: string[];
  tools: string[];
  statusText?: string;
};

export const roles: Role[] = [
  {
    id: "role-1",
    title: "Staff Distributed Systems Architect (Kernel & eBPF)",
    discipline: "distributed",
    disciplineLabel: "Distributed Systems",
    badge: "Priority Hire",
    badgeType: "priority",
    team: "Kernel Squad",
    reqId: "OC-89241",
    location: "Remote · US / EU",
    compensation: "$240,000 – $310,000",
    description: "Spearhead the architecture of our kernel-bypass ingest pipeline. You will design ultra-low footprint byte-parsers, optimize zero-copy rings in Linux kernel eBPF modules, and shape memory streaming architectures handling 250M+ packets per second.",
    requirements: [
      "8+ years systems programming in Rust and C with deep Linux kernel internals knowledge.",
      "Demonstrated production experience writing and verifying eBPF programs (XDP, TC) for high throughput.",
      "Expertise in lock-free ring buffers, memory barriers, and SIMD vectorization primitives."
    ],
    tools: ["Rust", "eBPF / XDP", "SIMD Vectorization", "Zero-Copy IO", "Raft Consensus"],
    statusText: "6 candidates in technical interview loop"
  },
  {
    id: "role-2",
    title: "Lead Product Designer — Telemetry Workbenches",
    discipline: "product",
    disciplineLabel: "Product & Design",
    badge: "Active",
    badgeType: "active",
    team: "Design Studio",
    reqId: "OC-71029",
    location: "SF or Remote",
    compensation: "$190k – $245k + Equity",
    description: "Craft deep-canvas analytical interfaces for incident command. Architect WebGL graph interactions, topology maps, and trace timeline visualizations.",
    requirements: [
      "6+ years designing complex developer tooling, observability platforms, or trading terminals.",
      "Proficiency with tokenized design systems and high-performance SVG/WebGL rendering.",
      "Proven track record conducting developer user research and translating metrics into UI primitives."
    ],
    tools: ["Data Vis", "WebGL UI", "Design Tokens"]
  },
  {
    id: "role-3",
    title: "Principal AI Research Scientist (Anomaly Detection)",
    discipline: "ai",
    disciplineLabel: "AI & Research",
    badge: "New Opening",
    badgeType: "labs",
    team: "AI Labs",
    reqId: "OC-65042",
    location: "Remote / Hybrid NYC",
    compensation: "$230k – $290k + High Equity",
    description: "Build bespoke time-series foundational models for streaming signal prediction. Uncover latent anomalies across 100M concurrent trace metrics with zero manual thresholds.",
    requirements: [
      "Ph.D. or equivalent research background in Machine Learning, Time-Series Forecasting, or Probabilistic Graphical Models.",
      "Experience training transformer architectures on distributed GPU clusters with PyTorch.",
      "Publications in top-tier conferences (NeurIPS, ICML, ICLR) on anomaly detection or streaming inference."
    ],
    tools: ["PyTorch", "Transformers", "ONNX"]
  },
  {
    id: "role-4",
    title: "Senior Site Reliability Engineer (Global Mesh)",
    discipline: "core",
    disciplineLabel: "Core Infra",
    badge: "3 Interviews in Step",
    badgeType: "global",
    team: "Global Mesh",
    reqId: "OC-54190",
    location: "Americas Remote",
    compensation: "$195k – $250k + Equity",
    description: "Maintain high-availability Kubernetes multi-region ingress. Orchestrate automated chaos game days, dynamic BGP Anycast routing, and stateful Kafka/ClickHouse clusters.",
    requirements: [
      "5+ years operating massive Kubernetes fleets across AWS, GCP, and bare metal datacenters.",
      "Advanced proficiency with Terraform, ArgoCD, Prometheus, and distributed tracing stacks.",
      "Strong commitment to SRE principles: blameless post-mortems, toil elimination, and SLO engineering."
    ],
    tools: ["Kubernetes", "Terraform", "ArgoCD"]
  },
  {
    id: "role-5",
    title: "Senior Frontend Engineer (WebGL & Canvas Engine)",
    discipline: "product",
    disciplineLabel: "Product & Design",
    badge: "Open",
    badgeType: "canvas",
    team: "Canvas UI",
    reqId: "OC-48901",
    location: "Global Remote",
    compensation: "$180k – $230k + Equity",
    description: "Push the browser to its graphics limits. Render 500,000 live trace spans smoothly at 60 FPS using offscreen canvas workers, custom shaders, and WebGPU primitives.",
    requirements: [
      "Deep mastery of the HTML5 Canvas API, WebGL shaders, Three.js, or WebGPU pipeline.",
      "Expert understanding of browser layout thrashing, composite layers, and requestAnimationFrame budgeting.",
      "Experience building real-time collaboration canvas tools or spatial data explorers."
    ],
    tools: ["WebGL / Three.js", "TypeScript", "Web Workers"]
  },
  {
    id: "role-6",
    title: "Developer Relations Engineer & Technical Advocate",
    discipline: "core",
    disciplineLabel: "Core Infra",
    badge: "Open",
    badgeType: "community",
    team: "Community",
    reqId: "OC-39218",
    location: "Remote Anywhere",
    compensation: "$160k – $210k + Equity",
    description: "Champion open observability standards (OpenTelemetry, Prometheus). Write in-depth dev guides, build canonical sample apps, and represent Prism at SRE conferences globally.",
    requirements: [
      "Background in software engineering with a passion for public speaking, writing, and technical teaching.",
      "Hands-on experience instrumenting microservices with OpenTelemetry metrics, logs, and traces.",
      "Active portfolio of technical blog posts, conference talks, or open source contributions."
    ],
    tools: ["OpenTelemetry", "Go / Python", "Public Speaking"]
  }
];

export const disciplines = [
  { id: "all", label: "All Roles (11)" },
  { id: "distributed", label: "Distributed Systems (4)" },
  { id: "product", label: "Product & Design (3)" },
  { id: "core", label: "Core Infra (2)" },
  { id: "ai", label: "AI & Research (2)" },
];

export const metrics = [
  { value: "142", sub: "+18 Q2", label: "Core Team Size", desc: "Full-time engineers" },
  { value: "14", sub: "Remote", label: "Countries Represented", desc: "Americas & EMEA hubs" },
  { value: "64M", sub: "Series B", label: "Capital Raised", desc: "Benchmark & Sequoia" },
  { value: "28.4M", sub: "+140% YoY", label: "Annual Recurring Revenue", desc: "Enterprise high net-retention" },
  { value: "< 4ms", sub: "Global", label: "Telemetry Query p99", desc: "40+ distributed regions" },
];

export const lifestyleImages = [
  { title: "Hack Week Summit - Lisbon 2024", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
  { title: "Autonomous Deep Work Architecture", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { title: "Annual Systems Offsite - Alps", url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" },
];
