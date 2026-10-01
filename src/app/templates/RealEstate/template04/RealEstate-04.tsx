"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  Check,
  CircleDollarSign,
  Compass,
  Fullscreen,
  Lock,
  MapPin,
  Menu,
  Minus,
  MoveUpRight,
  Navigation,
  Phone,
  Play,
  Plus,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trees,
  UserRound,
  Users,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

type RealEstate04Props = {
  resolvedData?: Record<string, unknown>;
};

function displayValue(
  value: unknown,
  fallback = "Waiting for resolved data",
): string {
  if (value === undefined || value === null || value === "") return fallback;
  return Array.isArray(value) ? value.join(", ") : String(value);
}

function formatPrice(
  price: unknown,
  currency = "CHF",
  listingType?: unknown,
): string {
  if (price === undefined || price === null || price === "") return "";
  const num = typeof price === "number" ? price : parseFloat(String(price));
  if (isNaN(num)) return String(price);

  const formatted = num.toLocaleString("en-US");
  const isRental =
    String(listingType).toLowerCase().includes("rent") ||
    String(listingType).toLowerCase().includes("lease");

  return `${currency} ${formatted}${isRental ? " / mo" : ""}`;
}

const placeholderProperties = [
  {
    id: "res-01",
    title: "The Küsnacht Peninsula Sanctuary",
    location: "Goldküste, Lake Zürich — Canton of Zürich, Switzerland",
    price: 42000000,
    currency: "CHF",
    badge: "Private Treaty",
    secondaryBadge: "Zürichsee Mandate",
    bedrooms: 6,
    bathrooms: 8,
    area: "1,180 m²",
    areaUnit: "12,700 SQ FT",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjILL346Wq2HQVyWsxqfvCu2Ma_UkEORwYhncF-cyWhx-RTtTwds1TddG_iH7s13MVz0dD79lbdAARbIKRTTNrX2Vud8SnEW1qTMD69pVfk2WDlTcfBsHSpdfnBdjr4riCpLuGoz6bAAStsXnWoE3tK5icH4CP2uvfOdd5ZjDI6YhA5I5nkrn_-ojWYDINYD2PNzUX9m20tU5zHlA6ymZ8HXwW8LUN1AJ1-Qr87M6mPf5Xf-wmhszI",
  },
  {
    id: "res-02",
    title: "The Chesterfield Manor House",
    location: "Charles Street, Mayfair — London W1J, United Kingdom",
    price: 28500000,
    currency: "£",
    badge: "Off-Market Mandate",
    description:
      "Five-story classical facade shielding modern seismic security, subterranean private vault, and private garden pavilion.",
    bedrooms: 5,
    bathrooms: 6,
    area: "8,450",
    areaUnit: "SQ FT",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2gOK28dkrBsu_y4UUeC8sbnf5cuDWNHlG3Eq1caY_BDVEROw0qWIcRW5ERu2b6JGg6mPkfGsW6brS-dQBfUIkn5Hpaeg0eCpNiY0uZ6T9yQ8_vFChaiJNnxlu6TjCpDr0A0NqMqPUvCemmjc1FnCFPGXwq2p62eJ7dEaSmAoCMPVYXalGkRIeoXOAIaEiaYZ6q904WRAQgCt9JMCbkTuOuQWf3kiM5zmmK5cPYeQoktu6VrVbpByu",
  },
  {
    id: "res-03",
    title: "The 5th Avenue Crown Triplex",
    location: "Fifth Avenue Corridor, Manhattan — New York, USA",
    price: 58000000,
    currency: "$",
    badge: "Confidential Acquisition",
    description:
      "Unobstructed reservoir vistas, cantilevered private wrap terrace, and dedicated direct private elevator vestibules.",
    bedrooms: 4,
    bathrooms: 5.5,
    area: "9,200",
    areaUnit: "SQ FT",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3uGo9LvmlA7hAtSs-6HHUKkp-X-nAZKcswtEBKylMXAy1zVdE8coGNsO9OeH8pXZunhBmVLa_j_Vlmn-Ifl_ZSJb1P25YQaSjdEXlkqaSIrd9md2kIhzGpTtcQowdGNV14B2tCU7JY_e7lVzLhqy2pR1eRHZQRypqLIepBZVV4itsaPRKx8AuEZSapcszMKRkhyEaWRZ21TWu67D5ngRvmjlASwatA1RvHYZjEbZkVSu7YoSNvVx7",
  },
  {
    id: "res-04",
    title: "Chalet Monolith & Thermal Spa",
    location: "Suvretta Hillside — St. Moritz, Graubünden, Switzerland",
    price: 36500000,
    currency: "CHF",
    badge: "Off-Market Mandate",
    secondaryBadge: "Engadin Valley",
    bedrooms: 7,
    bathrooms: 9,
    area: "14,200",
    areaUnit: "SQ FT",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCBf4tcAXvvBfYaZlgLPEQPPi_pwigPS06pvrUlKJrcfCQPRf8sxzlECDdlmxmsR33oJmCwCGUxjDkReSaYAygGuqbDKL1UKgClcjMO0Shu6aGtmVh--X4wBiySvj5m4a--kTKMdVnH-SgiYv3HuNmoSV6NJn_BrXw9jfHIQ18NQ3dtPpM8ep8Ds4cKwU8luBjOVqsuBd0BTszNRXhyPWD9kxlTNpC33W95_sXYHLOUUm1projOG5t",
  },
];

const placeholderAdvisors = [
  {
    name: "Lord Julian Sterling-Vance",
    role: "Managing Partner",
    territory: "Head of UK & Sovereign Mandates",
    bio: "Twenty-six years orchestrating Mayfair and Belgravia off-market heritage transfers. Appointed advisor to British and Middle Eastern family offices.",
    office: "Mayfair, London",
    email: "j.sterling@blacklabel.ch",
    phone: "+44 (0)20 7946 0912",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzSUu-IHBJ3_QvhfWrumyjMP0EakZIOJoP2okW7RxPAlX1ko70f0Y27Mcy7AFTTfIX7M56Acpf8-8fXUZs2dgb5YX2W7hN6DLZWw4JNHjoFSktg9a2ouht7_q02zwGhiHTrN7MCTXjfQP5aZShk4hm5c99A0g5v0Ntcp0n2Q2R0wVaJ0sB5uM_r_gW-T-Z49Ip1cInzVdfRhpqUJfa7jRRt9FHGw-XsSqyvSLZo1JvOZ5P3YWuyvM2",
  },
  {
    name: "Dr. Aurelia von Bergmann",
    role: "Senior Partner",
    territory: "DACH & Alpine Portfolio Lead",
    bio: "Specialized in Swiss banking privacy, Alpine canton tax residency acquisitions, and architectural preservation holdings across Zürich and Geneva.",
    office: "Paradeplatz, Zürich",
    email: "a.bergmann@blacklabel.ch",
    phone: "+41 44 218 8900",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvi-chrPcD5nAcfcK15zCr6Da_6bRMAWfA_w-5fqJIlIcHJ-6WqTj1WOpXLEvOOdI-TtQfuShvIGHsSY0duHfdVal10D9Ai-lJdwtURvIttel1JZUW60-9IE0trrpjgqyenrVphRsem8dcLBQuhSq6x0xN5DbMOLlVP_opBDL-DI8sVKqLFdjgGBbtUHZi4nY_0jo3Hl-tHYsd6nValU1__gb2W42y_VeBcm0_dfybhljFinwcMakG",
  },
  {
    name: "Christian D. Thorne",
    role: "Managing Partner",
    territory: "North American & Island Acquisitions",
    bio: "Pioneering institutional-scale residential acquisitions across Manhattan, coastal Connecticut, and private Caribbean peninsulas.",
    office: "Madison Avenue, NYC",
    email: "c.thorne@blacklabel.ch",
    phone: "+1 212 849 7100",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4wGbI4OUdxUkNKD9J7DuawZBnu1l7FAatFwvHDuw9rBT2Sbie7Lopk21bQJ1OOY2K6SGnSJf-zHlrPXkZkJfP8C5yPDPcIca3piiveOIhtI3wdokt0CTdTZEtda6S1zJU_jQZNyP42VHqUnNBOwMPckPc1y-vPwnIzQ7Rrc_UvUQ9RwlzS6Ywir26ViKOG5RyRmbkIxk5iDIs8a8FuRFi2KOlpV3DgbS37elenlAnLs1kxSS04t5g",
  },
];

const placeholderMapPins = [
  { label: "Zürichsee · CHF 42M", top: "33%", left: "25%" },
  { label: "Mayfair · £28.5M", top: "25%", left: "50%" },
  { label: "Engadin Valley · CHF 36.5M", top: "66%", left: "66%" },
];

const placeholderData: Record<string, unknown> = {
  companyName: "BLACK LABEL ADVISORY",
  companyTagline:
    "Private Architectural Stewardship & Off-Market Portfolio Governance.",
  monographEdition: "Confidential Monograph Portfolio 2025",
  heroTitle: "Architecture of Seclusion & Permanence",
  heroDescription:
    "Stewarding irreplaceable private holdings, discreet coastal pavilions, and off-market architectural monuments across Europe, North America, and Alpine enclaves.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9d-BtN2UD7gfqpmefNBYUpsCWwNCvvP5PUjT8lJxEo0FR5T36D-vEnCkhwZzsJxywTQeUGEVCa7zpizUv2xOpcZ6N8WMsR01TV7nAWgNiGebnmAb-FfYYN6zNm8lWDWRVUwiGsl2UUggnIBJWWFtfrmexEom9spWETOBySzoVaBL_v67xNlldFG-bznGI57yftEiRwsAgpi1ndVkcTmt-M6UXj5abAyW2Su3NoJLRIiEQ2k5jD2Se",
  properties: placeholderProperties,
  cinemaVignetteTitle: "The Pavilion on the Ridge",
  cinemaVignetteSubtitle:
    "Runtime: 04:18 — Directed by Studio Monolith for Black Label Advisory.",
  cinemaVignetteImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9nras3kT_2pkJBvIBifWW8sRGBHPIO-4YHY_m-lBPjQhW-Vjs_E44TeCD6_p-JNAVer0sFp2zquqO9TVT5hmUmqlWl79w4WcE62Uvt5aXpiitxJuUgWDT_NraEMh7zVqO3WmkvME9CeFF2F3bw1ZVQ9mkmiIioId5FAIfi64Pa4O83d4TlkWIG0Eg6ln-rHYsKvaIydoUXjpdgj5_S7-yT28-jezYAosGWg0m6KimgdjJjVJ6mqhF",
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCktzsGGUb0l_ZtmbWoM6ZtMuLp-ATTMwxeLnYw7sMNUk4pqlbxXvjUFeFdc2GHMRx-XEG9z6j5tytpZ52RUHsXNgdYv10QvvjCO5V_GhL6DRJk1o0U7chUY87g63eXb1EKcIvB12uaj3DPVVyqx2NcHyTiuFoNqsQxOh66nykBHYZLFPPwmX2smV3Hfl61HS5Z3ijU3FSCod52U63CZicT4byFgoCuZxt7b7VMCb3mlMEjoXehUna2",
  mapPins: placeholderMapPins,
  activeMandatesCount: "14 Parcels",
  avgParcelFootprint: "9,800 SQ FT",
  advisors: placeholderAdvisors,
  bureauLondon: "Mayfair — London",
  bureauNewYork: "Manhattan — New York",
  bureauZurich: "Zürichsee — Zürich",
};

const lucideIconMap = {
  lock: Lock,
  menu: Menu,
  location_on: MapPin,
  apartment: Building2,
  payments: CircleDollarSign,
  search: Search,
  fullscreen: Fullscreen,
  play_arrow: Play,
  zoom_in: ZoomIn,
  zoom_out: ZoomOut,
  layers: SlidersHorizontal,
  verified_user: ShieldCheck,
  check: Check,
  map: Navigation,
  user: UserRound,
  users: Users,
  compass: Compass,
  trees: Trees,
  sparkles: Sparkles,
  move_up_right: MoveUpRight,
  arrow_up_right: ArrowUpRight,
  phone: Phone,
  plus: Plus,
  minus: Minus,
  default: Sparkles,
} as const;

function Icon({
  name,
  className,
  size = 18,
  strokeWidth = 2,
}: {
  name: keyof typeof lucideIconMap | string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const IconComponent =
    lucideIconMap[name as keyof typeof lucideIconMap] ?? lucideIconMap.default;

  return (
    <IconComponent
      className={className}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}

function normalizeTemplateData(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return data && Object.keys(data).length > 0
    ? { ...placeholderData, ...data }
    : placeholderData;
}

export default function RealEstate04({
  resolvedData,
}: RealEstate04Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = normalizeTemplateData(resolvedData);

  const properties = (
    Array.isArray(data.properties) && data.properties.length > 0
      ? data.properties
      : placeholderProperties
  ) as Record<string, any>[];

  const advisors = (
    Array.isArray(data.advisors) && data.advisors.length > 0
      ? data.advisors
      : placeholderAdvisors
  ) as Record<string, any>[];

  const mapPins = (
    Array.isArray(data.mapPins) && data.mapPins.length > 0
      ? data.mapPins
      : placeholderMapPins
  ) as Record<string, any>[];

  const heroImage = displayValue(
    data.heroImage,
    placeholderData.heroImage as string,
  );
  const cinemaVignetteImage = displayValue(
    data.cinemaVignetteImage,
    placeholderData.cinemaVignetteImage as string,
  );
  const mapImage = displayValue(
    data.mapImage,
    placeholderData.mapImage as string,
  );

  return (
    <div className="bg-[#0e0e0d] text-[#e5e2e0] antialiased selection:bg-[#aa8c5c] selection:text-[#3a2601] font-['Hanken_Grotesk',sans-serif] text-[15px] leading-[24px]">
      <style>{`
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #0e0e0d;
        }
        ::-webkit-scrollbar-thumb {
          background: #353533;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #aa8c5c;
        }
      `}</style>

      {/* ================= TOP APP BAR ================= */}
      <header className="bg-[#131312]/90 backdrop-blur-md top-0 sticky z-50 border-b border-[#4d463b]/40 w-full">
        <div className="w-full px-6 md:px-16 py-6 flex justify-between items-center max-w-full">
          <a
            className="text-[24px] leading-[32px] font-['Bodoni_Moda',serif] tracking-widest uppercase text-[#e5e2e0] hover:text-[#e4c18d] transition-colors duration-300"
            href="#"
          >
            {displayValue(data.companyName, "BLACK LABEL ADVISORY")}
          </a>

          <nav className="hidden md:flex items-center space-x-10 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase">
            <a
              className="text-[#e4c18d] border-b border-[#e4c18d] pb-1"
              href="#collection"
            >
              Private Collection
            </a>
            <a
              className="text-[#c9c6bf] hover:text-[#e5e2e0] transition-colors duration-300"
              href="#cinematic"
            >
              Cinematic Residences
            </a>
            <a
              className="text-[#c9c6bf] hover:text-[#e5e2e0] transition-colors duration-300"
              href="#advisors"
            >
              Private Advisory
            </a>
            <a
              className="text-[#c9c6bf] hover:text-[#e5e2e0] transition-colors duration-300"
              href="#mandates"
            >
              Acquisitions &amp; Off-Market
            </a>
          </nav>

          <div className="flex items-center space-x-6">
            <a
              className="hidden sm:inline-flex items-center space-x-2 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e5e2e0] hover:text-[#e4c18d] transition-colors duration-300"
              href="#inquiry"
            >
              <Icon
                name="lock"
                className="text-[#e4c18d]"
                size={14}
                strokeWidth={2.2}
              />
              <span>Private Inquiries</span>
            </a>
            <button
              aria-label="Toggle Navigation"
              className="md:hidden text-[#e5e2e0] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon
                name="menu"
                className="text-[#e5e2e0]"
                size={18}
                strokeWidth={2.2}
              />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#4d463b]/40 bg-[#131312] px-6 py-8 flex flex-col space-y-6 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase">
            <a
              className="text-[#e4c18d]"
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
            >
              Private Collection
            </a>
            <a
              className="text-[#c9c6bf] hover:text-[#e5e2e0]"
              href="#cinematic"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cinematic Residences
            </a>
            <a
              className="text-[#c9c6bf] hover:text-[#e5e2e0]"
              href="#advisors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Private Advisory
            </a>
            <a
              className="text-[#c9c6bf] hover:text-[#e5e2e0]"
              href="#mandates"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acquisitions &amp; Off-Market
            </a>
            <a
              className="text-[#e4c18d] flex items-center space-x-2 pt-4 border-t border-[#4d463b]/30"
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon
                name="lock"
                className="text-[#e4c18d]"
                size={12}
                strokeWidth={2.2}
              />
              <span>Private Inquiries</span>
            </a>
          </div>
        )}
      </header>

      <main>
        {/* ================= CINEMATIC HERO & SEARCH ENTRY ================= */}
        <section className="relative min-h-[92vh] flex flex-col justify-end px-6 md:px-16 pb-16 pt-32 overflow-hidden border-b border-[#4d463b]/40">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Nordic architectural pavilion"
              className="object-cover brightness-[0.55] contrast-[1.1]"
              src={heroImage}
              fill
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0d] via-[#0e0e0d]/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#e4c18d]" />
              <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                {displayValue(
                  data.monographEdition,
                  "Confidential Monograph Portfolio 2025",
                )}
              </p>
            </div>
            <h1 className="text-[40px] md:text-[72px] leading-[48px] md:leading-[80px] font-['Bodoni_Moda',serif] text-[#e5e2e0] tracking-[-0.02em] max-w-4xl">
              {displayValue(
                data.heroTitle,
                "Architecture of Seclusion & Permanence",
              )}
            </h1>
            <p className="text-[18px] leading-[30px] font-light text-[#c9c6bf] max-w-2xl">
              {displayValue(
                data.heroDescription,
                "Stewarding irreplaceable private holdings, discreet coastal pavilions, and off-market architectural monuments across Europe, North America, and Alpine enclaves.",
              )}
            </p>
          </div>

          <div className="relative z-10 mt-12 bg-[#1c1c1a]/95 backdrop-blur-md border border-[#4d463b]/40 p-4 md:p-6 max-w-6xl">
            <form
              className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] block">
                  Territory / Enclave
                </label>
                <div className="relative flex items-center border-b border-[#4d463b]/60 focus-within:border-[#e4c18d] transition-colors pb-1">
                  <Icon
                    name="location_on"
                    className="text-[#9a8f82] mr-2"
                    size={18}
                    strokeWidth={2.2}
                  />
                  <input
                    className="bg-transparent text-[15px] leading-[24px] text-[#e5e2e0] placeholder:text-[#9a8f82] border-none p-0 focus:ring-0 w-full"
                    placeholder="Mayfair, Zürichsee, Manhattan..."
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] block">
                  Architectural Typology
                </label>
                <div className="relative flex items-center border-b border-[#4d463b]/60 focus-within:border-[#e4c18d] transition-colors pb-1">
                  <Icon
                    name="apartment"
                    className="text-[#9a8f82] mr-2"
                    size={18}
                    strokeWidth={2.2}
                  />
                  <select
                    className="bg-transparent text-[15px] leading-[24px] text-[#e5e2e0] border-none p-0 focus:ring-0 w-full cursor-pointer"
                    defaultValue="all"
                  >
                    <option className="bg-[#2a2a29] text-[#e5e2e0]" value="all">
                      All Typologies
                    </option>
                    <option
                      className="bg-[#2a2a29] text-[#e5e2e0]"
                      value="peninsula"
                    >
                      Peninsula Compounds
                    </option>
                    <option
                      className="bg-[#2a2a29] text-[#e5e2e0]"
                      value="penthouse"
                    >
                      Historic Penthouses
                    </option>
                    <option
                      className="bg-[#2a2a29] text-[#e5e2e0]"
                      value="brutalist"
                    >
                      Modernist Sanctuaries
                    </option>
                    <option
                      className="bg-[#2a2a29] text-[#e5e2e0]"
                      value="alpine"
                    >
                      Alpine Estates
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] block">
                  Capital Commitment
                </label>
                <div className="relative flex items-center border-b border-[#4d463b]/60 focus-within:border-[#e4c18d] transition-colors pb-1">
                  <Icon
                    name="payments"
                    className="text-[#9a8f82] mr-2"
                    size={18}
                    strokeWidth={2.2}
                  />
                  <select
                    className="bg-transparent text-[15px] leading-[24px] text-[#e5e2e0] border-none p-0 focus:ring-0 w-full cursor-pointer"
                    defaultValue="any"
                  >
                    <option className="bg-[#2a2a29] text-[#e5e2e0]" value="any">
                      Select Bracket
                    </option>
                    <option
                      className="bg-[#2a2a29] text-[#e5e2e0]"
                      value="15-30"
                    >
                      CHF 15M – 30M
                    </option>
                    <option
                      className="bg-[#2a2a29] text-[#e5e2e0]"
                      value="30-65"
                    >
                      CHF 30M – 65M
                    </option>
                    <option className="bg-[#2a2a29] text-[#e5e2e0]" value="65+">
                      CHF 65M+ (Confidential)
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  className="w-full h-12 bg-[#e5e2e0] text-[#0e0e0d] text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase hover:bg-[#e4c18d] transition-colors duration-300 flex items-center justify-center space-x-2"
                  type="submit"
                >
                  <Icon
                    name="search"
                    className="text-[#0e0e0d]"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span>Filter Mandates</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ================= PRIVATE COLLECTION / FEATURED PROPERTIES ================= */}
        <section
          className="px-6 md:px-16 py-24 space-y-16 border-b border-[#4d463b]/40"
          id="collection"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                Volume IV — Curated Acquisitions
              </p>
              <h2 className="text-[32px] leading-[40px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
                The Private Collection
              </h2>
            </div>
            <div className="flex items-center space-x-6 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase border-b border-[#4d463b]/40 pb-2">
              <button className="text-[#e4c18d] border-b border-[#e4c18d] pb-1">
                All Acquisitions ({properties.length})
              </button>
              <button className="text-[#c9c6bf] hover:text-[#e5e2e0] transition-colors">
                Private Treaty
              </button>
              <button className="text-[#c9c6bf] hover:text-[#e5e2e0] transition-colors">
                Off-Market
              </button>
              <button className="text-[#c9c6bf] hover:text-[#e5e2e0] transition-colors">
                By Sovereign Request
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {properties.map((residence, idx) => {
              const imageSrc =
                displayValue(residence.imageUrl) ||
                (Array.isArray(residence.images) && residence.images[0]) ||
                placeholderProperties[0].imageUrl;

              const isWide = idx % 3 === 0;
              const priceText = formatPrice(
                residence.price,
                displayValue(residence.currency, "CHF"),
                residence.listingType,
              );

              return isWide ? (
                <article
                  key={residence.id || idx}
                  className="md:col-span-8 group border border-[#4d463b]/40 bg-[#1c1c1a] transition-all duration-300 hover:border-[#e4c18d]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      alt={displayValue(residence.title, "Residence")}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      src={String(imageSrc)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {Boolean(residence.badge) && (
                        <span className="bg-[#0e0e0d]/90 backdrop-blur-md border border-[#4d463b]/40 px-3 py-1 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                          {displayValue(residence.badge)}
                        </span>
                      )}
                      {Boolean(residence.secondaryBadge) && (
                        <span className="bg-[#0e0e0d]/90 backdrop-blur-md border border-[#4d463b]/40 px-3 py-1 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf]">
                          {displayValue(residence.secondaryBadge)}
                        </span>
                      )}
                    </div>
                    {Boolean(priceText) && (
                      <div className="absolute bottom-4 right-4 bg-[#0e0e0d]/90 backdrop-blur-md border border-[#4d463b]/40 px-3 py-1 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e5e2e0]">
                        {priceText}
                      </div>
                    )}
                  </div>
                  <div className="p-8 space-y-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <h3 className="text-[24px] leading-[32px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
                          {displayValue(residence.title)}
                        </h3>
                        <p className="text-[13px] leading-[20px] text-[#c9c6bf]">
                          {displayValue(
                            residence.location ||
                              residence.city ||
                              residence.address,
                          )}
                        </p>
                      </div>
                      <a
                        className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e5e2e0] border-b border-[#4d463b]/60 pb-1 hover:border-[#e4c18d] hover:text-[#e4c18d] transition-all self-start md:self-auto"
                        href="#inquiry"
                      >
                        Request Dossier &amp; Access
                      </a>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#4d463b]/30 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf]">
                      {residence.bedrooms !== undefined && (
                        <div>
                          <span className="text-[#e5e2e0] block text-[16px] leading-[24px]">
                            {displayValue(residence.bedrooms)}
                          </span>{" "}
                          Suites
                        </div>
                      )}
                      {residence.bathrooms !== undefined && (
                        <div>
                          <span className="text-[#e5e2e0] block text-[16px] leading-[24px]">
                            {displayValue(residence.bathrooms)}
                          </span>{" "}
                          Bathrooms
                        </div>
                      )}
                      {residence.area !== undefined && (
                        <div>
                          <span className="text-[#e5e2e0] block text-[16px] leading-[24px]">
                            {displayValue(residence.area)}
                          </span>{" "}
                          {displayValue(residence.areaUnit, "SQ FT")}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ) : (
                <article
                  key={residence.id || idx}
                  className="md:col-span-4 group border border-[#4d463b]/40 bg-[#1c1c1a] transition-all duration-300 hover:border-[#e4c18d] flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        alt={displayValue(residence.title, "Residence")}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        src={String(imageSrc)}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                      {Boolean(residence.badge) && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#0e0e0d]/90 backdrop-blur-md border border-[#e4c18d]/40 px-3 py-1 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                            {displayValue(residence.badge)}
                          </span>
                        </div>
                      )}
                      {Boolean(priceText) && (
                        <div className="absolute bottom-4 right-4 bg-[#0e0e0d]/90 backdrop-blur-md border border-[#4d463b]/40 px-3 py-1 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e5e2e0]">
                          {priceText}
                        </div>
                      )}
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-[24px] leading-[32px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
                        {displayValue(residence.title)}
                      </h3>
                      <p className="text-[13px] leading-[20px] text-[#c9c6bf]">
                        {displayValue(
                          residence.location ||
                            residence.city ||
                            residence.address,
                        )}
                      </p>
                      {Boolean(residence.description) && (
                        <p className="text-[13px] leading-[20px] text-[#c9c6bf] line-clamp-2">
                          {displayValue(residence.description)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#4d463b]/30 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf]">
                      {residence.bedrooms !== undefined && (
                        <div>
                          <span className="text-[#e5e2e0] block text-[16px] leading-[24px]">
                            {displayValue(residence.bedrooms)}
                          </span>{" "}
                          Bedrooms
                        </div>
                      )}
                      {residence.bathrooms !== undefined && (
                        <div>
                          <span className="text-[#e5e2e0] block text-[16px] leading-[24px]">
                            {displayValue(residence.bathrooms)}
                          </span>{" "}
                          Baths
                        </div>
                      )}
                      {residence.area !== undefined && (
                        <div>
                          <span className="text-[#e5e2e0] block text-[16px] leading-[24px]">
                            {displayValue(residence.area)}
                          </span>{" "}
                          {displayValue(residence.areaUnit, "SQ FT")}
                        </div>
                      )}
                    </div>
                    <a
                      className="block text-center w-full py-3 border border-[#4d463b]/40 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e5e2e0] hover:border-[#e4c18d] hover:text-[#e4c18d] transition-all"
                      href="#inquiry"
                    >
                      Examine Title &amp; Provenance
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ================= FEATURE GROUP G: MEDIA EXPERIENCE & STORYTELLING ================= */}
        <section
          className="px-6 md:px-16 py-24 bg-[#0e0e0d] border-b border-[#4d463b]/40 space-y-16"
          id="cinematic"
        >
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#e4c18d]" />
              <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                Media Experience Protocol
              </p>
            </div>
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
              Cinematic Monograph &amp; Spatial Diagnostics
            </h2>
            <p className="text-[18px] leading-[30px] font-light text-[#c9c6bf]">
              Immersive spatial verification prior to physical travel. Every
              estate is scanned, filmed, and mapped in uncompressed resolution
              for authorized principals.
            </p>
          </div>

          <div className="relative aspect-video w-full border border-[#4d463b]/40 overflow-hidden bg-[#2a2a29] group">
            <Image
              alt="Cinematic interior of concrete residence"
              className="object-cover brightness-[0.7] contrast-[1.05]"
              src={cinemaVignetteImage}
              fill
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-t from-[#0e0e0d]/80 via-transparent to-[#0e0e0d]/40">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="flex h-2 w-2 rounded-full bg-[#e4c18d] animate-pulse" />
                  <span className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                    4K HDR Cinema Master
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="bg-[#0e0e0d]/80 border border-[#4d463b]/40 px-3 py-1.5 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] hover:text-[#e5e2e0] transition-colors">
                    Matterport Pro3 360°
                  </button>
                  <button className="bg-[#0e0e0d]/80 border border-[#4d463b]/40 px-3 py-1.5 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] hover:text-[#e5e2e0] transition-colors flex items-center space-x-1">
                    <Icon
                      name="fullscreen"
                      className="text-current"
                      size={12}
                      strokeWidth={2.2}
                    />
                    <span>Fullscreen</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf]">
                    Vignette 01 — Architectural Provenance
                  </span>
                  <h3 className="text-[32px] leading-[40px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
                    {displayValue(
                      data.cinemaVignetteTitle,
                      "The Pavilion on the Ridge",
                    )}
                  </h3>
                  <p className="text-[13px] leading-[20px] text-[#c9c6bf]">
                    {displayValue(
                      data.cinemaVignetteSubtitle,
                      "Runtime: 04:18 — Directed by Studio Monolith for Black Label Advisory.",
                    )}
                  </p>
                </div>
                <button className="flex items-center space-x-4 bg-[#e4c18d] text-[#412d05] px-8 py-4 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase hover:bg-[#e5e2e0] transition-colors duration-300">
                  <Icon
                    name="play_arrow"
                    className="text-[#412d05]"
                    size={20}
                    strokeWidth={2.2}
                  />
                  <span>Watch 4K Cinematic Vignette</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-8">
            <div className="md:col-span-7 border border-[#4d463b]/40 p-8 bg-[#1c1c1a] space-y-6">
              <div className="flex justify-between items-center border-b border-[#4d463b]/30 pb-4">
                <div>
                  <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                    Technical Draft
                  </p>
                  <h4 className="text-[20px] leading-[28px] font-medium text-[#e5e2e0]">
                    Cadastral &amp; Level 02 Floorplan
                  </h4>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 border border-[#4d463b]/40 hover:border-[#e4c18d] text-[#c9c6bf] hover:text-[#e4c18d] transition-colors">
                    <Icon
                      name="zoom_in"
                      className="text-current"
                      size={14}
                      strokeWidth={2.2}
                    />
                  </button>
                  <button className="p-2 border border-[#4d463b]/40 hover:border-[#e4c18d] text-[#c9c6bf] hover:text-[#e4c18d] transition-colors">
                    <Icon
                      name="zoom_out"
                      className="text-current"
                      size={14}
                      strokeWidth={2.2}
                    />
                  </button>
                  <button className="p-2 border border-[#4d463b]/40 hover:border-[#e4c18d] text-[#c9c6bf] hover:text-[#e4c18d] transition-colors">
                    <Icon
                      name="layers"
                      className="text-current"
                      size={14}
                      strokeWidth={2.2}
                    />
                  </button>
                </div>
              </div>

              <div className="relative aspect-[16/10] bg-[#0e0e0d] border border-[#4d463b]/30 flex items-center justify-center p-8">
                <svg
                  className="w-full h-full text-[#4d463b]/60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 600 350"
                >
                  <rect
                    height="310"
                    stroke="#4d463b"
                    strokeDasharray="4 4"
                    width="560"
                    x="20"
                    y="20"
                  />
                  <rect
                    height="230"
                    stroke="#e4c18d"
                    strokeWidth="1.5"
                    width="320"
                    x="60"
                    y="60"
                  />
                  <rect
                    height="130"
                    stroke="#9a8f82"
                    width="160"
                    x="380"
                    y="60"
                  />
                  <rect
                    fill="#131312"
                    height="80"
                    stroke="#353533"
                    width="160"
                    x="380"
                    y="210"
                  />
                  <text
                    fill="#aa8c5c"
                    fontFamily="Hanken Grotesk"
                    fontSize="10"
                    letterSpacing="0.1em"
                    x="400"
                    y="255"
                  >
                    REFLECTING BASIN
                  </text>
                  <line stroke="#4d463b" x1="60" x2="260" y1="160" y2="160" />
                  <line stroke="#4d463b" x1="260" x2="260" y1="60" y2="290" />
                  <line stroke="#4d463b" x1="160" x2="160" y1="160" y2="290" />
                  <circle cx="200" cy="110" fill="#e4c18d" r="4" />
                  <text
                    fill="#e5e2e0"
                    fontFamily="Hanken Grotesk"
                    fontSize="9"
                    letterSpacing="0.1em"
                    x="130"
                    y="115"
                  >
                    GRAND GALLERY
                  </text>
                  <circle cx="460" cy="120" fill="#e4c18d" r="4" />
                  <text
                    fill="#e5e2e0"
                    fontFamily="Hanken Grotesk"
                    fontSize="9"
                    letterSpacing="0.1em"
                    x="410"
                    y="145"
                  >
                    PRIMARY SUITE
                  </text>
                  <circle cx="110" cy="220" fill="#e4c18d" r="4" />
                  <text
                    fill="#e5e2e0"
                    fontFamily="Hanken Grotesk"
                    fontSize="9"
                    letterSpacing="0.1em"
                    x="80"
                    y="245"
                  >
                    WINE CELLAR
                  </text>
                </svg>
                <div className="absolute bottom-4 left-4 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf]">
                  Scale: 1:100 Metric · Georeferenced
                </div>
              </div>

              <div className="flex justify-between items-center text-[13px] leading-[20px] text-[#c9c6bf]">
                <span>Primary Floor Gross External: 740 m²</span>
                <span className="text-[#e4c18d]">
                  Download Encrypted CAD Dossier (.DWG)
                </span>
              </div>
            </div>

            <div className="md:col-span-5 border border-[#4d463b]/40 p-8 bg-[#1c1c1a] flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                  Materiality &amp; Provenance
                </p>
                <h4 className="text-[24px] leading-[32px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
                  Poured Dolomite, Smoked Larch &amp; Bronze
                </h4>
                <p className="text-[15px] leading-[24px] text-[#c9c6bf]">
                  Every surface has been curated to age with dignity. Non-porous
                  alpine quartzites provide acoustic tranquility, while bespoke
                  bronze fenestrations with triple-glazed laminated thermal
                  barriers maintain an uninterrupted acoustic sanctuary.
                </p>
                <div className="space-y-4 pt-4 border-t border-[#4d463b]/30">
                  <div className="flex items-center justify-between text-[13px] leading-[20px]">
                    <span className="text-[#c9c6bf]">Security Protocol:</span>
                    <span className="text-[#e5e2e0]">
                      Biometric Air-Lock &amp; Panic Citadel
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] leading-[20px]">
                    <span className="text-[#c9c6bf]">Energy Autonomy:</span>
                    <span className="text-[#e5e2e0]">
                      Geothermal Deep Probes + Tesla Megapack
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] leading-[20px]">
                    <span className="text-[#c9c6bf]">Acoustic Rating:</span>
                    <span className="text-[#e5e2e0]">
                      NC-20 Concert Hall Benchmark
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#0e0e0d] border border-[#4d463b]/40 space-y-2">
                <div className="flex items-center space-x-2 text-[#e4c18d]">
                  <Icon
                    name="verified_user"
                    className="text-[#e4c18d]"
                    size={14}
                    strokeWidth={2.2}
                  />
                  <span className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase">
                    Confidential Inspection
                  </span>
                </div>
                <p className="text-[13px] leading-[20px] text-[#c9c6bf]">
                  Physical viewings require executed NDA and bank confirmation
                  from Tier-1 private institution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE MAP: DISCRETE ENCLAVE MAPPING ================= */}
        <section className="px-6 md:px-16 py-24 border-b border-[#4d463b]/40 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                Cartographic Portfolio
              </p>
              <h2 className="text-[32px] leading-[40px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
                Discrete Global Enclaves
              </h2>
            </div>
            <p className="text-[13px] leading-[20px] text-[#c9c6bf]">
              Current advisory mandates plotted across tier-1 jurisdiction
              epicenters. Coordinate markers reveal approximate perimeter to
              preserve principal anonymity.
            </p>
          </div>

          <div className="relative w-full h-[520px] bg-[#0e0e0d] border border-[#4d463b]/40 overflow-hidden">
            <Image
              alt="Dark architectural map"
              className="object-cover brightness-[0.4] contrast-[1.2]"
              src={mapImage}
              fill
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              {mapPins.map((pin, idx) => (
                <div
                  key={idx}
                  className="absolute pointer-events-auto group cursor-pointer"
                  style={{ top: pin.top || "50%", left: pin.left || "50%" }}
                >
                  <div className="relative flex items-center">
                    <div className="h-3 w-3 bg-[#e4c18d] ring-4 ring-[#e4c18d]/20" />
                    <div className="ml-3 bg-[#2a2a29]/90 backdrop-blur-md border border-[#4d463b]/40 px-3 py-1.5 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e5e2e0] group-hover:border-[#e4c18d] transition-colors">
                      {displayValue(pin.label)}
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-auto pointer-events-auto bg-[#1c1c1a]/90 backdrop-blur-md border border-[#4d463b]/40 p-4 space-y-2">
                <span className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                  Enclave Diagnostics
                </span>
                <div className="flex justify-between text-[13px] leading-[20px] text-[#c9c6bf]">
                  <span>Active Private Mandates</span>
                  <span className="text-[#e5e2e0] font-medium">
                    {displayValue(data.activeMandatesCount, "14 Parcels")}
                  </span>
                </div>
                <div className="flex justify-between text-[13px] leading-[20px] text-[#c9c6bf]">
                  <span>Average Parcel Footprint</span>
                  <span className="text-[#e5e2e0] font-medium">
                    {displayValue(data.avgParcelFootprint, "9,800 SQ FT")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURE GROUP E: AGENTS & AGENCY (PARTNERS & ADVISORS) ================= */}
        {advisors.length > 0 && (
          <section
            className="px-6 md:px-16 py-24 border-b border-[#4d463b]/40 space-y-16"
            id="advisors"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[1px] bg-[#e4c18d]" />
                  <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                    Agency Stewardship
                  </p>
                </div>
                <h2 className="text-[32px] leading-[40px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
                  Managing Partners &amp; Private Advisors
                </h2>
              </div>
              <p className="text-[15px] leading-[24px] text-[#c9c6bf]">
                A dedicated fiduciary cohort executing discreet bilateral
                transactions with unbending discretion and direct principal
                representation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisors.map((partner, idx) => (
                <div
                  key={idx}
                  className="border border-[#4d463b]/40 bg-[#1c1c1a] p-8 space-y-8 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="relative aspect-[3/4] overflow-hidden border border-[#4d463b]/30">
                      <Image
                        alt={displayValue(partner.name)}
                        className="object-cover grayscale contrast-125"
                        src={String(partner.imageUrl)}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                      {Boolean(partner.role) && (
                        <div className="absolute bottom-3 left-3 bg-[#0e0e0d]/90 px-2 py-1 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                          {displayValue(partner.role)}
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[20px] leading-[28px] font-medium text-[#e5e2e0]">
                        {displayValue(partner.name)}
                      </h3>
                      {Boolean(partner.territory) && (
                        <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf]">
                          {displayValue(partner.territory)}
                        </p>
                      )}
                      {Boolean(partner.bio) && (
                        <p className="text-[13px] leading-[20px] text-[#c9c6bf] pt-2">
                          {displayValue(partner.bio)}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3 pt-6 border-t border-[#4d463b]/30 text-[13px] leading-[20px]">
                    {Boolean(partner.office) && (
                      <div className="flex items-center justify-between">
                        <span className="text-[#c9c6bf]">Office:</span>
                        <span className="text-[#e5e2e0]">
                          {displayValue(partner.office)}
                        </span>
                      </div>
                    )}
                    {Boolean(partner.email) && (
                      <div className="flex items-center justify-between">
                        <span className="text-[#c9c6bf]">
                          Encrypted Direct:
                        </span>
                        <span className="text-[#e4c18d] font-mono text-xs">
                          {displayValue(partner.email)}
                        </span>
                      </div>
                    )}
                    {Boolean(partner.phone) && (
                      <div className="flex items-center justify-between">
                        <span className="text-[#c9c6bf]">Telephone:</span>
                        <span className="text-[#e5e2e0] font-mono text-xs">
                          {displayValue(partner.phone)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= CONFIDENTIAL INQUIRY & BESPOKE MANDATE FORM ================= */}
        <section
          className="px-6 md:px-16 py-24 bg-[#1c1c1a] border-b border-[#4d463b]/40"
          id="inquiry"
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <span className="w-8 h-[1px] bg-[#e4c18d]" />
                <p className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#e4c18d]">
                  Strict Non-Disclosure Protocol
                </p>
                <span className="w-8 h-[1px] bg-[#e4c18d]" />
              </div>
              <h2 className="text-[32px] leading-[40px] font-['Bodoni_Moda',serif] text-[#e5e2e0]">
                Initiate Confidential Mandate
              </h2>
              <p className="text-[15px] leading-[24px] text-[#c9c6bf] mx-auto">
                Dispatches received through this portal are routed directly to
                our Managing Partners via encrypted channels. No public ledger
                or automated distribution occurs.
              </p>
            </div>

            <form
              className="space-y-8 bg-[#0e0e0d] border border-[#4d463b]/40 p-8 md:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Mandate encrypted and transmitted to Managing Partners.",
                );
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] block">
                    Principal or Representative Name *
                  </label>
                  <input
                    className="w-full bg-[#1c1c1a] border-b border-[#4d463b]/60 focus:border-[#e4c18d] text-[15px] leading-[24px] text-[#e5e2e0] px-3 py-2 border-t-0 border-x-0 focus:ring-0 placeholder:text-[#9a8f82]"
                    placeholder="e.g., Sterling Family Office / Principal"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] block">
                    Direct Encrypted Channel (Email / Signal) *
                  </label>
                  <input
                    className="w-full bg-[#1c1c1a] border-b border-[#4d463b]/60 focus:border-[#e4c18d] text-[15px] leading-[24px] text-[#e5e2e0] px-3 py-2 border-t-0 border-x-0 focus:ring-0 placeholder:text-[#9a8f82]"
                    placeholder="name@domain.com or verified contact"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] block">
                    Target Geographic Enclave
                  </label>
                  <select
                    className="w-full bg-[#1c1c1a] border-b border-[#4d463b]/60 focus:border-[#e4c18d] text-[15px] leading-[24px] text-[#e5e2e0] px-3 py-2 border-t-0 border-x-0 focus:ring-0 cursor-pointer"
                    defaultValue="zurich"
                  >
                    <option className="bg-[#2a2a29]" value="zurich">
                      Zürichsee / Alpine Canton (Switzerland)
                    </option>
                    <option className="bg-[#2a2a29]" value="london">
                      Mayfair &amp; Belgravia (United Kingdom)
                    </option>
                    <option className="bg-[#2a2a29]" value="ny">
                      Manhattan / Upper East Side (United States)
                    </option>
                    <option className="bg-[#2a2a29]" value="discrete">
                      Unlisted Sovereign Compound
                    </option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] block">
                    Capital Allocation Envelope
                  </label>
                  <select
                    className="w-full bg-[#1c1c1a] border-b border-[#4d463b]/60 focus:border-[#e4c18d] text-[15px] leading-[24px] text-[#e5e2e0] px-3 py-2 border-t-0 border-x-0 focus:ring-0 cursor-pointer"
                    defaultValue="1"
                  >
                    <option className="bg-[#2a2a29]" value="1">
                      CHF 20,000,000 – CHF 40,000,000
                    </option>
                    <option className="bg-[#2a2a29]" value="2">
                      CHF 40,000,000 – CHF 80,000,000
                    </option>
                    <option className="bg-[#2a2a29]" value="3">
                      CHF 80,000,000+ (Institutional Mandate)
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase text-[#c9c6bf] block">
                  Mandate Specifications &amp; Provenance Criteria
                </label>
                <textarea
                  className="w-full bg-[#1c1c1a] border-b border-[#4d463b]/60 focus:border-[#e4c18d] text-[15px] leading-[24px] text-[#e5e2e0] px-3 py-2 border-t-0 border-x-0 focus:ring-0 placeholder:text-[#9a8f82]"
                  placeholder="Detail specific architectural parameters, privacy buffer requirements, subterranean zoning, or immediate acquisition timetables..."
                  rows={4}
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <input
                  className="mt-1 h-3.5 w-3.5 rounded-none border border-[#4d463b] bg-[#1c1c1a] text-[#e4c18d] focus:ring-0"
                  id="nda"
                  required
                  type="checkbox"
                />
                <label
                  className="text-[13px] leading-[20px] text-[#c9c6bf] cursor-pointer"
                  htmlFor="nda"
                >
                  I affirm that this inquiry represents an accredited principal
                  or authorized fiduciary counsel, and agree to execute Black
                  Label Advisory&apos;s standard bilateral mutual non-disclosure
                  undertaking prior to receiving sensitive property cadastres.
                </label>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-[#c9c6bf]">
                  <Icon
                    name="lock"
                    className="text-[#e4c18d]"
                    size={14}
                    strokeWidth={2.2}
                  />
                  <span>256-bit TLS Cryptographic Pipe</span>
                </div>
                <button
                  className="w-full sm:w-auto px-10 py-4 bg-[#e5e2e0] text-[#0e0e0d] text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase hover:bg-[#e4c18d] transition-colors duration-300"
                  type="submit"
                >
                  Transmit Encrypted Mandate
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0e0e0d] border-t border-[#4d463b]/40">
        <div className="w-full px-6 md:px-16 py-20 flex flex-col justify-between max-w-full space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <span className="text-[16px] leading-[24px] font-medium tracking-widest uppercase text-[#e5e2e0]">
                {displayValue(data.companyName, "BLACK LABEL ADVISORY")}
              </span>
              <p className="text-[13px] leading-[20px] text-[#c9c6bf] mt-1">
                {displayValue(
                  data.companyTagline,
                  "Private Architectural Stewardship & Off-Market Portfolio Governance.",
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase">
              <a
                className="text-[#c9c6bf] hover:text-[#e4c18d] transition-colors duration-300"
                href="#"
              >
                {displayValue(data.bureauLondon, "Mayfair — London")}
              </a>
              <a
                className="text-[#c9c6bf] hover:text-[#e4c18d] transition-colors duration-300"
                href="#"
              >
                {displayValue(data.bureauNewYork, "Manhattan — New York")}
              </a>
              <a
                className="text-[#c9c6bf] hover:text-[#e4c18d] transition-colors duration-300"
                href="#"
              >
                {displayValue(data.bureauZurich, "Zürichsee — Zürich")}
              </a>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#4d463b]/40" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[13px] leading-[20px]">
            <p className="text-[#c9c6bf] max-w-2xl">
              © {new Date().getFullYear()} MONOLITH &amp; CO. /{" "}
              {displayValue(data.companyName, "BLACK LABEL ADVISORY")}. ALL
              RIGHTS RESERVED. CONFIDENTIAL ARCHITECTURAL STEWARDSHIP.
            </p>
            <div className="flex flex-wrap items-center space-x-6 text-[11px] leading-[16px] tracking-[0.18em] font-semibold uppercase">
              <a
                className="text-[#c9c6bf] hover:text-[#e4c18d] transition-colors duration-300"
                href="#mandates"
              >
                Private Mandates
              </a>
              <a
                className="text-[#c9c6bf] hover:text-[#e4c18d] transition-colors duration-300"
                href="#"
              >
                Legal &amp; Disclosures
              </a>
              <a
                className="text-[#c9c6bf] hover:text-[#e4c18d] transition-colors duration-300"
                href="#inquiry"
              >
                Encrypted Inquiries
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
