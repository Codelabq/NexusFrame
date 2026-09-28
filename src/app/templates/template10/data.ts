import type { PrismObservabilityCareersTemplateData } from "@/types/index";

/** Raw template content. Derived fields (e.g. `disciplines`) are computed in `page.tsx`. */
export const placeholder: PrismObservabilityCareersTemplateData = {
  brandName: "Prism",

  bannerText: "LIVE HEADCOUNT PIPELINE · Q2 2025",

  heroTitle: "Engineer the next frontier of real-time cloud observability.",
  heroTitleAccent: "real-time cloud",
  heroDescription:
    "We are scaling Prism's distributed streaming telemetry engine across 40+ global regions. Join an autonomous, remote-first engineering cohort pioneering sub-millisecond query latency.",
  heroPillars: [
    { heroPillarLabel: "Foundation", heroPillarValue: "100% Rust / eBPF" },
    { heroPillarLabel: "Cadence", heroPillarValue: "Async First" },
    { heroPillarLabel: "Offsites", heroPillarValue: "Bi-Annual Global" },
  ],

  metrics: [
    { metricValue: "142", metricSub: "+18 Q2", metricLabel: "Core Team Size", metricDescription: "Full-time engineers" },
    { metricValue: "14", metricSub: "Remote", metricLabel: "Countries Represented", metricDescription: "Americas & EMEA hubs" },
    { metricValue: "64M", metricSub: "Series B", metricLabel: "Capital Raised", metricDescription: "Benchmark & Sequoia" },
    { metricValue: "28.4M", metricSub: "+140% YoY", metricLabel: "Annual Recurring Revenue", metricDescription: "Enterprise high net-retention" },
    { metricValue: "< 4ms", metricSub: "Global", metricLabel: "Telemetry Query p99", metricDescription: "40+ distributed regions" },
  ],

  rolesEyebrow: "Autonomous Squads",
  rolesTitle: "Active Openings & Engineering Primitives",
  rolesDescription:
    "High ownership, transparent compensation bands, and foundational equity packages. Filter by domain below.",

  codexTitle: "Prism Engineering Codex v4.2",
  codexSubtitle: "Core primitives & architectural standards",
  codexSections: [
    { codexSectionTitle: "1. Zero-Allocation Streaming Hot-Paths", codexSectionBody: "All real-time ingest daemons written in Rust must bypass garbage collection boundaries and operate on strict arena allocators or static memory pools. Unbounded allocations inside core packet loops trigger automated PR rejections." },
    { codexSectionTitle: "2. Async-First Autonomous Execution", codexSectionBody: "We operate across 14 timezones with zero synchronous status meetings. Pull requests require two codeowners approval, automated fuzz testing, and deterministic replay benchmarks before merging." },
    { codexSectionTitle: "3. SOC-2 Type II & eBPF Safety Protocols", codexSectionBody: "Kernel verifier bounds checking is mandatory for all eBPF bytecode loaded into production nodes. Telemetry payloads must adhere strictly to OpenTelemetry semantic conventions without exception." },
  ],

  roles: [
    { roleId: "role-1", roleTitle: "Staff Distributed Systems Architect (Kernel & eBPF)", roleDiscipline: "distributed", roleDisciplineLabel: "Distributed Systems", roleBadge: "Priority Hire", roleBadgeType: "priority", roleTeam: "Kernel Squad", roleRefId: "OC-89241", roleLocation: "Remote · US / EU", roleCompensation: "$240,000 – $310,000", roleDescription: "Spearhead the architecture of our kernel-bypass ingest pipeline. You will design ultra-low footprint byte-parsers, optimize zero-copy rings in Linux kernel eBPF modules, and shape memory streaming architectures handling 250M+ packets per second.", roleRequirements: ["8+ years systems programming in Rust and C with deep Linux kernel internals knowledge.", "Demonstrated production experience writing and verifying eBPF programs (XDP, TC) for high throughput.", "Expertise in lock-free ring buffers, memory barriers, and SIMD vectorization primitives."], roleTools: ["Rust", "eBPF / XDP", "SIMD Vectorization", "Zero-Copy IO", "Raft Consensus"], roleStatusText: "6 candidates in technical interview loop" },
    { roleId: "role-2", roleTitle: "Lead Product Designer — Telemetry Workbenches", roleDiscipline: "product", roleDisciplineLabel: "Product & Design", roleBadge: "Active", roleBadgeType: "active", roleTeam: "Design Studio", roleRefId: "OC-71029", roleLocation: "SF or Remote", roleCompensation: "$190k – $245k + Equity", roleDescription: "Craft deep-canvas analytical interfaces for incident command. Architect WebGL graph interactions, topology maps, and trace timeline visualizations.", roleRequirements: ["6+ years designing complex developer tooling, observability platforms, or trading terminals.", "Proficiency with tokenized design systems and high-performance SVG/WebGL rendering.", "Proven track record conducting developer user research and translating metrics into UI primitives."], roleTools: ["Data Vis", "WebGL UI", "Design Tokens"] },
    { roleId: "role-3", roleTitle: "Principal AI Research Scientist (Anomaly Detection)", roleDiscipline: "ai", roleDisciplineLabel: "AI & Research", roleBadge: "New Opening", roleBadgeType: "labs", roleTeam: "AI Labs", roleRefId: "OC-65042", roleLocation: "Remote / Hybrid NYC", roleCompensation: "$230k – $290k + High Equity", roleDescription: "Build bespoke time-series foundational models for streaming signal prediction. Uncover latent anomalies across 100M concurrent trace metrics with zero manual thresholds.", roleRequirements: ["Ph.D. or equivalent research background in Machine Learning, Time-Series Forecasting, or Probabilistic Graphical Models.", "Experience training transformer architectures on distributed GPU clusters with PyTorch.", "Publications in top-tier conferences (NeurIPS, ICML, ICLR) on anomaly detection or streaming inference."], roleTools: ["PyTorch", "Transformers", "ONNX"] },
    { roleId: "role-4", roleTitle: "Senior Site Reliability Engineer (Global Mesh)", roleDiscipline: "core", roleDisciplineLabel: "Core Infra", roleBadge: "3 Interviews in Step", roleBadgeType: "global", roleTeam: "Global Mesh", roleRefId: "OC-54190", roleLocation: "Americas Remote", roleCompensation: "$195k – $250k + Equity", roleDescription: "Maintain high-availability Kubernetes multi-region ingress. Orchestrate automated chaos game days, dynamic BGP Anycast routing, and stateful Kafka/ClickHouse clusters.", roleRequirements: ["5+ years operating massive Kubernetes fleets across AWS, GCP, and bare metal datacenters.", "Advanced proficiency with Terraform, ArgoCD, Prometheus, and distributed tracing stacks.", "Strong commitment to SRE principles: blameless post-mortems, toil elimination, and SLO engineering."], roleTools: ["Kubernetes", "Terraform", "ArgoCD"] },
    { roleId: "role-5", roleTitle: "Senior Frontend Engineer (WebGL & Canvas Engine)", roleDiscipline: "product", roleDisciplineLabel: "Product & Design", roleBadge: "Open", roleBadgeType: "canvas", roleTeam: "Canvas UI", roleRefId: "OC-48901", roleLocation: "Global Remote", roleCompensation: "$180k – $230k + Equity", roleDescription: "Push the browser to its graphics limits. Render 500,000 live trace spans smoothly at 60 FPS using offscreen canvas workers, custom shaders, and WebGPU primitives.", roleRequirements: ["Deep mastery of the HTML5 Canvas API, WebGL shaders, Three.js, or WebGPU pipeline.", "Expert understanding of browser layout thrashing, composite layers, and requestAnimationFrame budgeting.", "Experience building real-time collaboration canvas tools or spatial data explorers."], roleTools: ["WebGL / Three.js", "TypeScript", "Web Workers"] },
    { roleId: "role-6", roleTitle: "Developer Relations Engineer & Technical Advocate", roleDiscipline: "core", roleDisciplineLabel: "Core Infra", roleBadge: "Open", roleBadgeType: "community", roleTeam: "Community", roleRefId: "OC-39218", roleLocation: "Remote Anywhere", roleCompensation: "$160k – $210k + Equity", roleDescription: "Champion open observability standards (OpenTelemetry, Prometheus). Write in-depth dev guides, build canonical sample apps, and represent Prism at SRE conferences globally.", roleRequirements: ["Background in software engineering with a passion for public speaking, writing, and technical teaching.", "Hands-on experience instrumenting microservices with OpenTelemetry metrics, logs, and traces.", "Active portfolio of technical blog posts, conference talks, or open source contributions."], roleTools: ["OpenTelemetry", "Go / Python", "Public Speaking"] },
  ],
};
