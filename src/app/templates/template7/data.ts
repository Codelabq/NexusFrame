import type { NexusCareersTemplateData } from "@/types/index";

/** Raw template content. Derived fields (departmentFilters, locationFilters) are computed in `page.tsx`. */
export const placeholder: Omit<
  NexusCareersTemplateData,
  "departmentFilters" | "locationFilters"
> = {
  heroBadgeText: "Q1 2025 Headcount Openings",
  heroTitle: "Build the future with us.",
  heroDescription:
    "NexusFrame is recruiting world-class systems engineers, product designers, and distributed infrastructure leaders to shape low-latency computation primitives.",

  stackHighlights: [
    { stackHighlightTitle: "Distributed Engine", stackHighlightDetail: "Bare-metal Rust & WASM compiler architecture" },
    { stackHighlightTitle: "Ultra-Low Latency", stackHighlightDetail: "Sub-4ms p99 real-time client synchronization" },
    { stackHighlightTitle: "Async-Native Culture", stackHighlightDetail: "Autonomous execution with flexible timezones" },
  ],

  roles: [
    {
      roleId: "role-1",
      roleTitle: "Staff Systems Engineer, Kernel Runtime",
      roleDept: "engineering",
      roleDeptLabel: "Engineering",
      roleLocation: "remote",
      roleLocationLabel: "Remote / US",
      roleCompensation: "$240,000 - $310,000 · 0.35% Equity",
      roleDescription:
        "Architect our core POSIX-compliant sandbox virtualization layer. You will construct high-density execution isolation zones handling tens of thousands of simultaneous real-time worker micro-runtimes.",
      roleDeliverables: [
        "Design low-overhead Linux namespace wrappers and eBPF network monitors.",
        "Optimize context switches down to sub-10 microsecond thresholds.",
        "Maintain zero-regression performance tests on arm64 and x86-64 metal targets.",
      ],
      roleSkills: ["Rust", "C/C++", "Linux Kernel", "eBPF", "WASM", "Memory Optimization"],
    },
    {
      roleId: "role-2",
      roleTitle: "Principal Product Designer, Design Systems",
      roleDept: "design",
      roleDeptLabel: "Design",
      roleLocation: "sf",
      roleLocationLabel: "San Francisco, CA",
      roleCompensation: "$200,000 - $260,000 · 0.20% Equity",
      roleDescription:
        "Own the visual foundation of NexusFrame. You will forge a developer-grade UI architecture that translates complex state graphs into ergonomic canvas tools.",
      roleDeliverables: [
        "Build tokenized multi-tier component libraries optimized for complex data grids.",
        "Collaborate with canvas rendering engineers on 120 FPS interaction models.",
        "Define tactile feedback guidelines for keyboard-first navigation patterns.",
      ],
      roleSkills: ["Figma Tokens", "Design Systems", "Data Vis", "Typography", "Micro-interactions"],
    },
    {
      roleId: "role-3",
      roleTitle: "Senior Frontend Engineer, Canvas UI",
      roleDept: "engineering",
      roleDeptLabel: "Engineering",
      roleLocation: "remote",
      roleLocationLabel: "Remote / US",
      roleCompensation: "$190,000 - $240,000 · 0.18% Equity",
      roleDescription:
        "Push browser constraints to their edge. You will engineer our WebGL/WebGPU infinite canvas, enabling users to orchestrate cloud graphs with smooth pan, zoom, and multi-cursor sync.",
      roleDeliverables: [
        "Maintain custom spatial tree structures for high-cadence culling.",
        "Implement Web Workers off-main-thread gesture prediction and reconciliation.",
        "Craft clean, accessible developer instrumentation overlays.",
      ],
      roleSkills: ["TypeScript", "WebGL/WebGPU", "Canvas API", "RxJS", "WebSockets"],
    },
    {
      roleId: "role-4",
      roleTitle: "Distributed Systems Architect",
      roleDept: "engineering",
      roleDeptLabel: "Engineering",
      roleLocation: "nyc",
      roleLocationLabel: "New York, NY",
      roleCompensation: "$260,000 - $340,000 · 0.40% Equity",
      roleDescription:
        "Guide the state coordination protocols underpinning our globally replicated edge clusters. You will implement conflict-free data types and consensus mechanisms under network partition regimes.",
      roleDeliverables: [
        "Lead architecture for dynamic leader election across 20+ metropolitan edge POPs.",
        "Ensure strong consistency guarantees on billing ledgers with Raft consensus.",
        "Audit fault tolerance via automated Jepsen and Chaos Engineering pipelines.",
      ],
      roleSkills: ["Go", "Raft", "CRDTs", "Distributed Consensus", "p99 Profiling"],
    },
    {
      roleId: "role-5",
      roleTitle: "Lead Product Manager, Developer Experience",
      roleDept: "product",
      roleDeptLabel: "Product",
      roleLocation: "sf",
      roleLocationLabel: "San Francisco, CA",
      roleCompensation: "$210,000 - $275,000 · 0.25% Equity",
      roleDescription:
        "Champion the workflow of engineers using the Nexus CLI, SDKs, and debugger. You will turn deeply technical capabilities into instinctive developer workflows.",
      roleDeliverables: [
        "Define the quarterly roadmap for Nexus CLI, VS Code Extension, and API docs.",
        "Host weekly user-feedback deep dives with infrastructure leads.",
        "Drive time-to-first-hello-world from four minutes down to sub-45 seconds.",
      ],
      roleSkills: ["CLI UX", "API Design", "DevRel", "Product Strategy", "Telemetry"],
    },
    {
      roleId: "role-6",
      roleTitle: "ML Infrastructure Engineer, Inference Runtimes",
      roleDept: "engineering",
      roleDeptLabel: "Engineering",
      roleLocation: "remote",
      roleLocationLabel: "Remote / US",
      roleCompensation: "$210,000 - $270,000 · 0.22% Equity",
      roleDescription:
        "Build high-throughput, low-latency model hosting pipelines. You will optimize tensor layout compilers, model quantization passes, and direct PCIe streaming paths for multi-GPU nodes.",
      roleDeliverables: [
        "Deploy dynamic batching architectures on clusters of NVIDIA H100s.",
        "Optimize vLLM and TensorRT-LLM runtimes for speculative decoding.",
        "Implement auto-scaling triggers responding to token velocity spikes in under 500ms.",
      ],
      roleSkills: ["CUDA", "Python", "vLLM", "TensorRT", "Triton", "Kubernetes"],
    },
    {
      roleId: "role-7",
      roleTitle: "Senior Product Designer, Developer Consoles",
      roleDept: "design",
      roleDeptLabel: "Design",
      roleLocation: "nyc",
      roleLocationLabel: "New York, NY",
      roleCompensation: "$180,000 - $230,000 · 0.15% Equity",
      roleDescription:
        "Design observability portals, runtime traces, and configuration dashboards. You will balance complex diagnostic feeds with pristine, distraction-free visual layout.",
      roleDeliverables: [
        "Design flame-graph profiling interfaces and distributed tracing views.",
        "Conduct interactive user testing with DevOps and SRE teams.",
        "Maintain strict adherence to high-contrast WCAG AAA accessibility tiers.",
      ],
      roleSkills: ["Figma", "Prototyping", "Information Architecture", "Observability UX"],
    },
    {
      roleId: "role-8",
      roleTitle: "Group Product Manager, Cloud Infrastructure",
      roleDept: "product",
      roleDeptLabel: "Product",
      roleLocation: "remote",
      roleLocationLabel: "Remote / US",
      roleCompensation: "$230,000 - $300,000 · 0.30% Equity",
      roleDescription:
        "Direct the strategy of our global compute fleet. You will balance server unit economics with mission-critical SLA promises for enterprise partners.",
      roleDeliverables: [
        "Manage compute gross margin models across cloud providers and bare metal.",
        "Lead pricing strategy and enterprise quota enforcement mechanisms.",
        "Direct a squad of 18 engineers across three infrastructure pods.",
      ],
      roleSkills: ["Cloud Unit Economics", "FinOps", "Roadmapping", "Executive Comms"],
    },
  ],

  benefits: [
    { benefitTitle: "Flagship Tooling", benefitDetail: "Top-spec Apple Silicon or Linux workstations plus a $2,500 home studio setup stipend.", benefitNote: "Spec tier: Max" },
    { benefitTitle: "Annual Growth", benefitDetail: "$5,000 unrestricted yearly budget for technical conferences, research papers, and coaching.", benefitNote: "Reimbursed 100%" },
    { benefitTitle: "Full Family Care", benefitDetail: "Comprehensive medical, dental, and vision coverage with premiums 100% employer paid.", benefitNote: "Global & US" },
    { benefitTitle: "Global Offsites", benefitDetail: "Bi-annual engineering retreats in locations like Kyoto, Zurich, and Banff to jam in person.", benefitNote: "2x Yearly" },
  ],
};
