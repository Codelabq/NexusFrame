export type Brand = "all" | "silicon-craft" | "lenovo" | "hp" | "asus";
export type FormFactor = "all" | "laptop" | "desktop" | "sff";
export type UseCase = "all" | "ai-ml" | "rendering" | "development" | "simulation";
export type PriceRange = "all" | "under-2k" | "2k-3k" | "3k-5k" | "over-5k";

export type Workstation = {
  id: string;
  name: string;
  series: string;
  revision: string;
  description: string;
  cpu: { label: string; detail: string };
  gpu: { label: string; detail: string };
  ram: { label: string; detail: string };
  storage: { label: string; detail: string };
  price: number;
  monthlyPrice: number;
  tdp?: string;
  weight?: string;
  stockStatus: "in-stock" | "built-to-order";
  stockLabel: string;
  badgeColor: "emerald" | "amber" | "cyan";
  imageUrl: string;
  imageAlt: string;
  tags: string[];
};

export const workstations: Workstation[] = [
  {
    id: "titan-pro-16",
    name: "M-Series Studio Workstation",
    series: "TITAN PRO 16",
    revision: "REV 4.2",
    description: "Calibrated for color-critical 8K workflows, simulation matrices, and low-noise sustained render loads.",
    cpu: { label: "Ultra 9 185H", detail: "16C • 5.1 GHz Turbo" },
    gpu: { label: "RTX 4080 (12GB)", detail: "175W Max TGP" },
    ram: { label: "32GB DDR5-5600", detail: "Dual Channel SO-DIMM" },
    storage: { label: "2TB NVMe Gen4", detail: "7,200 MB/s Sequential" },
    price: 2499,
    monthlyPrice: 208,
    tdp: "210W",
    stockStatus: "in-stock",
    stockLabel: "IN STOCK • SHIPS IN 24H",
    badgeColor: "emerald",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7KPshvHtjVQRKGxAYjhDReXQTT0NWMDoIuqjS2DaFbTAlqg84oXS3vKUhph8CjhYfYviD9-4Qr9FgT_4vXzyqWrMdv1UbmzsssY3TVI9O6oIlwVL94QH0saNToZnvYbtgA2rcoAx2PKupPaWlupYb6KSY4_GeMhFpcqj2bnTcdXixlBQ-2eZzab4yEPQYJ1XRamync1BPnrOT0_1gT8bsDLggJ7nicZnUnCSFeZ8sfjbrDEWWAuyrng",
    imageAlt: "Dark anodized CNC aluminum studio laptop workstation",
    tags: ["color-critical", "simulation", "rendering"],
  },
  {
    id: "apex-slim-14",
    name: "Gen 4 Neural Developer Edition",
    series: "APEX SLIM 14",
    revision: "REV 3.1",
    description: "Engineered for nomadic systems programming, low thermal acoustics, and native local LLM token inference.",
    cpu: { label: "Ryzen 9 7940HS", detail: "8C/16T • Ryzen AI NPU" },
    gpu: { label: "Radeon 780M", detail: "12 Compute Units" },
    ram: { label: "32GB LPDDR5X", detail: "7500MHz Low Power" },
    storage: { label: "1TB PCIe Gen4 M.2", detail: "6,800 MB/s Sequential" },
    price: 1849,
    monthlyPrice: 154,
    weight: "1.28 KG NET",
    stockStatus: "in-stock",
    stockLabel: "IN STOCK • SHIPS IN 24H",
    badgeColor: "emerald",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8oIyHki5uGARKKYDrK7ngHEvhALvqhYB5oJncExLtzAkI4Th7j58WOpe6w_8pVgyovajC2ssJwQhOeY8fNS_gKw4S2FLZKVip3hXpZdzYlSLsCZnaZ50pzE01Qb1l81nzKq7Q2cloBk7YBJ3j9aJUklHDac9wnhS5EPYLdVvNJTHnl5gUIck6R1RQJuIKPMRWKjw9fpqXE4NjRjWZuf3si-_4ExechxhPRuOhGCl-yJU515tFL4yhWA",
    imageAlt: "Ultralight CNC milled space-slate grey laptop",
    tags: ["development", "ai-ml", "portable"],
  },
  {
    id: "titan-max-18",
    name: "Extreme Compute Workstation",
    series: "TITAN MAX 18",
    revision: "CUSTOM PROV",
    description: "Uncompromised desktop-replacement silicon designed for aerospace CAE, VFX compositing, and parallel simulation.",
    cpu: { label: "i9-14900HX", detail: "24C/32T • 5.8 GHz" },
    gpu: { label: "RTX 4090 Mobile", detail: "16GB GDDR6 • 175W" },
    ram: { label: "64GB DDR5-5600", detail: "Expandable to 192GB" },
    storage: { label: "4TB RAID 0 (2x2TB)", detail: "14,000 MB/s Striped" },
    price: 3899,
    monthlyPrice: 324,
    tdp: "MAX COMPUTE",
    stockStatus: "built-to-order",
    stockLabel: "BUILT TO ORDER (3-5 DAYS)",
    badgeColor: "amber",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmuC8-Tx3WaRnWtfWOt2s9EagxI33LY-LQ0Rfxt0MT84SBum7RU4NQltoZBpNSkBKsv5OOqqjk2q8O2PO9AbRU-MOydRhFO6iLboUbd9w5QBcfzTza06s9FLYLi4sYUEC4lCcPcR584mtSc2QK06twzcP5E69RiL5-vKNmTOB49krRVLvGUk9rD9XKqhNZnqMnl5frkSp55VCoxyB0zWMzBeVIfoxJeAtOY-NZrgCWKTpdg70tAl6NkA",
    imageAlt: "Heavy duty high-performance workstation laptop",
    tags: ["simulation", "rendering", "aerospace"],
  },
  {
    id: "nebula-sff-1",
    name: "Studio Micro Desktop",
    series: "NEBULA SFF-1",
    revision: "REV 2.0",
    description: "High-density computing powerhouse designed for quiet desk deployment with desktop-class graphics acceleration.",
    cpu: { label: "Ryzen 9 7945HX3D", detail: "128MB 3D V-Cache" },
    gpu: { label: "RTX 4070 Dual-Slot", detail: "12GB GDDR6X Desktop" },
    ram: { label: "32GB DDR5-5200", detail: "Dual Channel SO-DIMM" },
    storage: { label: "2TB NVMe Gen4 SSD", detail: "Direct-to-CPU Lane" },
    price: 2199,
    monthlyPrice: 183,
    weight: "11.2L VOLUME",
    stockStatus: "in-stock",
    stockLabel: "IN STOCK • SHIPS IN 24H",
    badgeColor: "emerald",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCok3Rcad_OnGNKuQaNQZRasWSxe7tzkODqh7E04t8RdN-cfH2Cuio3ubuGBJqebpHhr4Esec619F0Eh4a94OCjjFTPGoyITGvI-IhRUpCsdDP1DpWLkEXkWvKDSIk9aCr7f24GGQpIHazqpwOk01Gw4IBWHvQbWwDsIDqJ2HBIvJ2Bvqb8pW9oKTJPEfy4ymB5OLk5if7UyrLEViKMKln9s2wVPmU0RxgyMNG_hTwYx3AON9scA78WbA",
    imageAlt: "Matte obsidian small form factor desktop computer",
    tags: ["development", "rendering", "compact"],
  },
  {
    id: "kernel-15-pro",
    name: "Open Firmware Developer Kit",
    series: "KERNEL 15 PRO",
    revision: "REV 1.0",
    description: "Fully unlocked developer laptop with open-source Coreboot firmware, Linux-first architecture, and hardware kill switches.",
    cpu: { label: "Ryzen 7 7840HS", detail: "8C/16T • 5.1 GHz" },
    gpu: { label: "Radeon 780M", detail: "12 Compute Units" },
    ram: { label: "64GB DDR5-5600", detail: "Dual Channel SO-DIMM" },
    storage: { label: "2TB NVMe Gen4", detail: "7,200 MB/s Sequential" },
    price: 1699,
    monthlyPrice: 141,
    weight: "1.65 KG NET",
    stockStatus: "in-stock",
    stockLabel: "IN STOCK • SHIPS IN 24H",
    badgeColor: "emerald",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Qpl4MBncbcRTgSU1cKGjbgBYjdivSQAD319l3otIdGVZCxJUeUVRgVgIknAq5AK3xQexcHlXhFNfdnELKqaNaU4d6xfPuvJNYxNCeyVODa6p8YeUqGPZ88YNcC4VgLdkNfi5pN1dtnKaWnSZwUa23IXPMiyOy4iywlk5YyzsetppLdjfVQOdtlzy1GNUeF7eUFrrRPtBiSM6CMLLEHAOtJpLddH7Huw53MV7LS-CUFpKmYAoD7f8ZQ",
    imageAlt: "Matte charcoal stealth developer laptop",
    tags: ["development", "open-source", "linux"],
  },
];

export const brands = [
  { id: "all", label: "All Brands" },
  { id: "silicon-craft", label: "Silicon Craft (Custom)" },
  { id: "lenovo", label: "Lenovo (ThinkPad / Legion)" },
  { id: "hp", label: "HP (ZBook / OMEN)" },
  { id: "asus", label: "ASUS (ROG / ProArt)" },
];

export const formFactors = [
  { id: "all", label: "All Form Factors" },
  { id: "laptop", label: "Laptop / Mobile" },
  { id: "desktop", label: "Desktop / Tower" },
  { id: "sff", label: "Small Form Factor" },
];

export const useCases = [
  { id: "all", label: "All Use Cases" },
  { id: "ai-ml", label: "AI / ML Training" },
  { id: "rendering", label: "3D Rendering / VFX" },
  { id: "development", label: "Systems Development" },
  { id: "simulation", label: "CAE / Simulation" },
];

export const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "under-2k", label: "Under $2,000" },
  { id: "2k-3k", label: "$2,000 - $3,000" },
  { id: "3k-5k", label: "$3,000 - $5,000" },
  { id: "over-5k", label: "Over $5,000" },
];

export const telemetryBadges = [
  { icon: "verified_user", label: "CHIP-LEVEL CALIBRATION CERTIFIED", color: "primary" },
  { icon: "speed", label: "COPPER VAPOR CHAMBERS TESTED", color: "tertiary" },
  { icon: "memory", label: "JEDEC & XMP TIMINGS PROFILED", color: "secondary" },
];