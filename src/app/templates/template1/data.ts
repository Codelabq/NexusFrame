export const categories = [
  "All Items",
  "Shaders & VFX",
  "AI Models",
  "Cyber UI Kits",
  "Audio Engines",
];

export interface LiveLedgerItem {
  hash: string;
  status: "licensed" | "deployed" | "minted";
  itemName: string;
  price: string;
  time: string;
}

export const liveLedger: LiveLedgerItem[] = [
  {
    hash: "0x7F...c2a9",
    status: "licensed",
    itemName: "Aether Shaders Pro",
    price: "0.024 ETH",
    time: "14s ago",
  },
  {
    hash: "0x1B...88e4",
    status: "deployed",
    itemName: "Synapse-8B Weights",
    price: "$79.00",
    time: "32s ago",
  },
  {
    hash: "0x99...4d10",
    status: "minted",
    itemName: "Cybernetic HUD Kit",
    price: "0.019 ETH",
    time: "1m ago",
  },
];

export interface SpotlightData {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  priceUSD: string;
  countdown: string;
  imageUrl: string;
  contractHash: string;
}

export const spotlight: SpotlightData = {
  title: "Quantum Mesh OS v2.0",
  subtitle: "SERIES #009 EXCLUSIVE",
  description:
    "Next-generation cybernetic operating system interface with real-time neural mesh integration. Features holographic rendering, adaptive AI core, and zero-latency quantum synchronization.",
  price: "0.14 ETH",
  priceUSD: "$490 USD",
  countdown: "08h : 41m : 05s",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB80zcOP-EOUyJeGRraeZGBM5SNkI9kyXtjejQD6HdJP_TwtVmLdq2iKLdFHrjb4e8JMbdcPGATXEaLUdHoYnvZTrmklAAEzMWj3xFeCOcwUg9VYCF2JplqXdyTAkV9miEQ7uormYVsxWkhZdUPO5Nc-rA-AZPc1u9KuY0p02D7_G9zaD3CmNkEwc_QXBOQqM8ZcS83XOYYhKh2Uy_9MS07KeAcAv_AW55N8fBjVmTRooUZzOkUX_7ChQ",
  contractHash: "0x9C4...bB71",
};

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  priceType: "ETH" | "USD";
  category: string;
  author: string;
  engine: string;
  rating: number;
  reviewsCount: number;
  badgeText?: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: "prod_001",
    title: "Holographic Chromatic Shader Pack",
    description:
      "Intricate iridescent chromatic shader pattern with hyper-detailed refraction neon turquoise and magenta fluid vectors.",
    price: "0.089",
    priceType: "ETH",
    category: "Shaders & VFX",
    author: "@axion_vfx",
    engine: "GLSL 4.6",
    rating: 4.99,
    reviewsCount: 847,
    badgeText: "Trending",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGzX_C2nxL5JFV_Kg1IXonn0SQzzFD2ZFprlXbJmm0VbD8ZH0_JTG6y4sklhaZcdnWLpcqgrwQmFOPsap4Qv4rbYaiFpEmK7juvLIVZORPVsYjrobkPN3A2AzWA_7J0MTifjsPMGUU8lErySR3k1LfCqpuuWwByoYEmJeW513U50tN_p-YALIX1M3YNHt137qnoiDNCURW1sTOFkRG6M-U7ptZeoBIyuutfJMuxHK3yo8clB_4K1vpw",
  },
  {
    id: "prod_002",
    title: "Synapse-8B AI Model Weights",
    description:
      "Pre-trained neural network weights for real-time style transfer and generative synthesis. Optimized for inference under 10ms.",
    price: "0.24",
    priceType: "ETH",
    category: "AI Models",
    author: "@neural_labs",
    engine: "PyTorch 2.4",
    rating: 4.97,
    reviewsCount: 412,
    badgeText: "Staff Pick",
   imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGzX_C2nxL5JFV_Kg1IXonn0SQzzFD2ZFprlXbJmm0VbD8ZH0_JTG6y4sklhaZcdnWLpcqgrwQmFOPsap4Qv4rbYaiFpEmK7juvLIVZORPVsYjrobkPN3A2AzWA_7J0MTifjsPMGUU8lErySR3k1LfCqpuuWwByoYEmJeW513U50tN_p-YALIX1M3YNHt137qnoiDNCURW1sTOFkRG6M-U7ptZeoBIyuutfJMuxHK3yo8clB_4K1vpw",
 },
  {
    id: "prod_003",
    title: "Cyberpunk HUD Interface Kit",
    description:
      "Complete UI kit with 200+ components for building immersive AR/VR experiences. Includes holographic buttons, data visualizations, and gesture controls.",
    price: "149.00",
    priceType: "USD",
    category: "Cyber UI Kits",
    author: "@holo_design",
    engine: "Unity URP",
    rating: 4.95,
    reviewsCount: 1204,
    badgeText: "Best Seller",
     imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGzX_C2nxL5JFV_Kg1IXonn0SQzzFD2ZFprlXbJmm0VbD8ZH0_JTG6y4sklhaZcdnWLpcqgrwQmFOPsap4Qv4rbYaiFpEmK7juvLIVZORPVsYjrobkPN3A2AzWA_7J0MTifjsPMGUU8lErySR3k1LfCqpuuWwByoYEmJeW513U50tN_p-YALIX1M3YNHt137qnoiDNCURW1sTOFkRG6M-U7ptZeoBIyuutfJMuxHK3yo8clB_4K1vpw",
  },
  {
    id: "prod_004",
    title: "Neural Synthesis Audio Engine",
    description:
      "AI-powered audio synthesis engine with real-time voice cloning and spatial audio rendering. Perfect for game audio and immersive media.",
    price: "0.18",
    priceType: "ETH",
    category: "Audio Engines",
    author: "@sound_forge",
    engine: "Wwise Pro",
    rating: 4.92,
    reviewsCount: 328,
   imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGzX_C2nxL5JFV_Kg1IXonn0SQzzFD2ZFprlXbJmm0VbD8ZH0_JTG6y4sklhaZcdnWLpcqgrwQmFOPsap4Qv4rbYaiFpEmK7juvLIVZORPVsYjrobkPN3A2AzWA_7J0MTifjsPMGUU8lErySR3k1LfCqpuuWwByoYEmJeW513U50tN_p-YALIX1M3YNHt137qnoiDNCURW1sTOFkRG6M-U7ptZeoBIyuutfJMuxHK3yo8clB_4K1vpw",
 },
  {
    id: "prod_005",
    title: "Volumetric Light Scattering Kit",
    description:
      "Real-time volumetric lighting and atmospheric scattering system. Features god rays, light shafts, and atmospheric perspective.",
    price: "0.065",
    priceType: "ETH",
    category: "Shaders & VFX",
    author: "@render_witch",
    engine: "GLSL 4.5",
    rating: 4.98,
    reviewsCount: 567,
    badgeText: "New",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGzX_C2nxL5JFV_Kg1IXonn0SQzzFD2ZFprlXbJmm0VbD8ZH0_JTG6y4sklhaZcdnWLpcqgrwQmFOPsap4Qv4rbYaiFpEmK7juvLIVZORPVsYjrobkPN3A2AzWA_7J0MTifjsPMGUU8lErySR3k1LfCqpuuWwByoYEmJeW513U50tN_p-YALIX1M3YNHt137qnoiDNCURW1sTOFkRG6M-U7ptZeoBIyuutfJMuxHK3yo8clB_4K1vpw",
  },
  {
    id: "prod_006",
    title: "Quantum Mesh Neural Core",
    description:
      "Distributed AI processing unit for real-time data synthesis and mesh network optimization. Zero-gas batch processing included.",
    price: "0.32",
    priceType: "ETH",
    category: "AI Models",
    author: "@quantum_labs",
    engine: "ONNX Runtime",
    rating: 4.99,
    reviewsCount: 891,
    badgeText: "Trending",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGzX_C2nxL5JFV_Kg1IXonn0SQzzFD2ZFprlXbJmm0VbD8ZH0_JTG6y4sklhaZcdnWLpcqgrwQmFOPsap4Qv4rbYaiFpEmK7juvLIVZORPVsYjrobkPN3A2AzWA_7J0MTifjsPMGUU8lErySR3k1LfCqpuuWwByoYEmJeW513U50tN_p-YALIX1M3YNHt137qnoiDNCURW1sTOFkRG6M-U7ptZeoBIyuutfJMuxHK3yo8clB_4K1vpw",
  },
  {
    id: "prod_007",
    title: "Holographic AR Component Suite",
    description:
      "Enterprise-grade AR components with markerless tracking, spatial mapping, and persistent world anchors. 60fps on mobile.",
    price: "219.00",
    priceType: "USD",
    category: "Cyber UI Kits",
    author: "@ar_architect",
    engine: "ARKit/ARCore",
    rating: 4.94,
    reviewsCount: 445,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGzX_C2nxL5JFV_Kg1IXonn0SQzzFD2ZFprlXbJmm0VbD8ZH0_JTG6y4sklhaZcdnWLpcqgrwQmFOPsap4Qv4rbYaiFpEmK7juvLIVZORPVsYjrobkPN3A2AzWA_7J0MTifjsPMGUU8lErySR3k1LfCqpuuWwByoYEmJeW513U50tN_p-YALIX1M3YNHt137qnoiDNCURW1sTOFkRG6M-U7ptZeoBIyuutfJMuxHK3yo8clB_4K1vpw",
  },
  {
    id: "prod_008",
    title: "Spatial Audio Impulse Response Pack",
    description:
      "High-fidelity convolution reverb IRs captured in real acoustic spaces. Includes concert halls, caves, and digital environments.",
    price: "0.045",
    priceType: "ETH",
    category: "Audio Engines",
    author: "@audio_sphere",
    engine: "FMOD Studio",
    rating: 4.91,
    reviewsCount: 276,
    badgeText: "Staff Pick",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGzX_C2nxL5JFV_Kg1IXonn0SQzzFD2ZFprlXbJmm0VbD8ZH0_JTG6y4sklhaZcdnWLpcqgrwQmFOPsap4Qv4rbYaiFpEmK7juvLIVZORPVsYjrobkPN3A2AzWA_7J0MTifjsPMGUU8lErySR3k1LfCqpuuWwByoYEmJeW513U50tN_p-YALIX1M3YNHt137qnoiDNCURW1sTOFkRG6M-U7ptZeoBIyuutfJMuxHK3yo8clB_4K1vpw",
},
];
