"use client";

import Image from "next/image";
import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bookmark,
  ChevronDown,
  Filter,
  Lock,
  Mail,
  MapPin,
  Menu,
  Search,
  SlidersHorizontal,
} from "lucide-react";

type RealEstate08Props = {
  resolvedData?: Record<string, unknown>;
};

const lucideIconMap: Record<string, LucideIcon> = {
  search: Search,
  bookmark: Bookmark,
  menu: Menu,
  filter_alt: Filter,
  expand_more: ChevronDown,
  manage_search: Search,
  location_on: MapPin,
  mail: Mail,
  lock: Lock,
  arrow_forward: ArrowRight,
};

function Icon({
  name,
  className,
  size = 16,
  strokeWidth = 2,
  ...props
}: {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
  [key: string]: unknown;
}) {
  const IconComponent = lucideIconMap[name] ?? SlidersHorizontal;
  return (
    <IconComponent
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}

function displayValue(
  value: unknown,
  fallback = "Waiting for resolved data",
): string {
  if (value === undefined || value === null || value === "") return fallback;
  return Array.isArray(value) ? value.join(", ") : String(value);
}

function formatPrice(price: unknown, currency = "£"): string {
  if (price === undefined || price === null || price === "") return "";
  const num = typeof price === "number" ? price : parseFloat(String(price));
  if (isNaN(num)) return String(price);
  return `${currency}${num.toLocaleString("en-US")}`;
}

const placeholderProperties = [
  {
    id: "prop-1",
    refNumber: "Ref. EJ-MAY-401",
    location: "Mayfair Conservation District • London W1K",
    title: "The Chesterfield House & Private Sculpture Garden",
    price: 6450000,
    currency: "£",
    badge: "Active Monograph",
    secondaryBadge: "Exclusive Mandate",
    description:
      "An exceptional 18th-century residence restored by Studio Liaigre, merging preserved Georgian plasterwork with monolithic Italian travertine baths and temperature-controlled wine galleries.",
    bedrooms: 5,
    bathrooms: 6,
    area: "5,840",
    areaUnit: "Sq Ft Internal",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw3PKoasfoySbTS2zVkoGUWKkt686zzjviGGTmJQ6gy4EgKu79I4q6I63uOhUb-WaznivRuSmtye3Y-fzk5NC1FKKKPFMIv-kjVczw6TYd0jNVOb8B3jMWn5sKsDVMtJynkG5Nlq8UH_SlMGM0PJkZdi2yukPAE9VaunA7cnJtcEN6nxmYcQNkDI3fgGYU0z9bip33hhB0YxMzbd3Qg9JlMVt_iQxRx7-o9Lr9ExSDv0LLdDSvG0sT",
    isFeaturedHero: true,
  },
  {
    id: "prop-2",
    refNumber: "Ref. EJ-PAR-812",
    location: "7th Arrondissement • Paris",
    title: "Quai d'Orsay Penthouse & River Observatory",
    price: 5200000,
    currency: "€",
    badge: "Acquisition Dossier",
    description:
      "Unobstructed vistas of the Eiffel Tower framed by triple-glazed steel casement windows, custom bleached oak cabinetry, and direct elevator gallery.",
    bedrooms: 3,
    bathrooms: 3.5,
    area: "320",
    areaUnit: "m²",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmRApkJiAPM8dvCJdBfnbUwruUONx9bLSx1joP_IXLSm-7grezKM2XmN9laLsrZHd7DshSmG9ul7cL-EgSW630bf1neyvpJLiob8EQcAgj8TE9lZ_IDH3Xmiee8hs-tgQAVwjWzwD2-6oMuWKd4XMS-lb_SpTUUNZHO09BEhCD8aF6oK_5lcxD62n0EDecVoxnyAzZIKz5QFKNvflHaWInM9IOXkY0Zigp9L5IdAOB1yse1OWlPS_q",
  },
  {
    id: "prop-3",
    refNumber: "Ref. EJ-NYC-204",
    location: "Tribeca Historic District • New York",
    title: "Franklin Street Cast-Iron Corner Loft",
    price: 4850000,
    currency: "$",
    badge: "Historic Cast-Iron",
    description:
      "Original 1891 architectural integrity preserved with bespoke Bulthaup culinary island and automated gallery-grade climate stabilization.",
    bedrooms: 2,
    bathrooms: 2,
    area: "2,950",
    areaUnit: "Sq Ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSqCcrf_ZYrDjmByzZ20dmkEyxm9fPH0mgxamqpOz46UFWwXnEvvA_JqP2zm5sCrhypvu-ILYkZuNGjYGQTSqi4RQBBQVte0N015AS0voemEZiQrsiNNsKHiq_lCka1whYFUEfN3TEhXXOsND_-Ohvezgf1VQjJLdkjs0dMiSZhlhhdc133Mc4hYFN5wm3BNmkQBM-7qUdR-xoIhnkMdci0IaJduQDBwWDuDNvveBINABxlCiR1e6z",
  },
];

const placeholderMetrics = [
  {
    label: "Prime Growth (YoY)",
    value: "+6.4%",
    subtext: "Outperforming CPI by 3.1%",
  },
  { label: "Days on Market", value: "28", subtext: "-12 Days vs. Sub-Prime" },
  {
    label: "Quarterly Volume",
    value: "£142M",
    subtext: "Top 5% Tier-One Transactions",
  },
];

const placeholderYields = [
  {
    district: "Mayfair & Belgravia, London",
    avgPrice: "£2,450 / sq ft",
    yieldRate: "3.85%",
    liquidity: "High (Tier A)",
  },
  {
    district: "Upper East Side, New York",
    avgPrice: "$2,180 / sq ft",
    yieldRate: "4.20%",
    liquidity: "Very High",
  },
  {
    district: "7th Arrondissement, Paris",
    avgPrice: "€17,900 / m²",
    yieldRate: "3.40%",
    liquidity: "Stable (Tier A)",
  },
  {
    district: "Zürichberg Enclave, Zurich",
    avgPrice: "CHF 19,400 / m²",
    yieldRate: "2.95%",
    liquidity: "Sovereign Ultra",
  },
];

const placeholderNeighborhoods = [
  {
    enclaveNumber: "Enclave No. 01",
    region: "London W1",
    title: "The West End Heritage Quarter",
    description:
      "Distinguished by private garden squares, classical porticoes, and proximity to Royal Parks. Home to Britain's most historic private members' institutions and art galleries.",
    conservationIndex: "Grade I & II Listed (92%)",
    schoolRating: "9.8 / 10 Exceptional",
    parkAccess: "Enclosed Resident Key",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClejsDsE-7SiKvG3FWUf_THElQf8P1Rw46uTkiBYrBlfL5MeV-r-WO7sU49AiJkL34KnXxMxrPvb00OQLeh2EH2GpVL_OB46SxYxkXIs-03XG_p-nZqX6CoElq-xKg6YF23AR_OIdVoO904ME2WjXvMQlXnrUJmmcuFv1uLb66KVKXZceBLsKFbGRc1XZVEwF8cuV60dAFzUojzV_TtAk5Y3Xr0R8qeNHTfgesXMdFNTAFC_ZZIuCo",
  },
  {
    enclaveNumber: "Enclave No. 02",
    region: "Paris 7ème",
    title: "Riverside Arts Enclave",
    description:
      "The intellectual and diplomatic nexus of Paris. Anchored by the Musée d'Orsay, boutique antiquaires, and courtyards secluded behind heavy carriage portals.",
    conservationIndex: "24 Major Museums / Galleries",
    schoolRating: "11 Michelin Stars within 1km",
    parkAccess: "99 / 100 Prime Mobility",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCksLVoHUBYDfYhzgaYyMqipHTy1JenMgearNWN6h88r7tfJ_JaVVsmYTPzLxgoT1RUMq8KDEkLlNszWajJ0iNDVUMAFbnZD5od9aK_qIKMytGOHZWXy4g2UavSGvkPR4TwfGLYmVWr5OX29n_jngQnUZ_ma54kGDfU5gDwbooVqWchoEE4PA6-GN6OdK2vUs6FYsDXZ9WUiM5OIL32jVJdIUZsblS0Yv1XveqsMSZzEMxlJduA9XWW",
  },
  {
    enclaveNumber: "Enclave No. 03",
    region: "Manhattan Central",
    title: "The Northern Terraces",
    description:
      "A sanctuary of residential serenity flanked by Central Park. Revered for brownstone blocks protected by landmark preservation trusts and premier academic institutions.",
    conservationIndex: "Immediate (< 150 meters)",
    schoolRating: "Historic District Trust Protected",
    parkAccess: "Express Direct Midtown",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXYuSd5sUvt9D2pqgDrLj0lJK7oayuBSU-tJE310FHRoOwtBgkzlsVQjpcXq_-yDFEYwKVx3u42wz-63klW3-7g8ObjK_SuUZapPZWUf-eti4IO7rX_1lNI1fK5Xz3-IKd3drHie31dq2VLUQMNfN1EFCDNZtayNLut6VoVrGGKKCTR7XmYk5dvQs7RtMVFnwhr9R89SQ6E2yrGdbTr25AIapYUH0DnmacKqRMvmHDVN2QgiByVAnd",
  },
];

const placeholderArticles = [
  {
    category: "Architecture & Design",
    date: "12 Oct 2024",
    title: "The Tactile Permanence of Hand-Carved Limestone",
    excerpt:
      "Why contemporary starchitecture is returning to quarry-sourced natural ashlar over composite paneling, analyzing the thermodynamics and patina lifecycle of authentic stone.",
    authorName: "Eleanor Leclair",
    authorInitials: "EL",
    readTime: "6 Min Read",
  },
  {
    category: "Preservation Law",
    date: "08 Oct 2024",
    title: "Navigating Grade I Heritage Restrictions in Prime London",
    excerpt:
      "A comprehensive legal framework for international buyers wishing to integrate geothermal heating and subterranean art vaults into 200-year-old structures.",
    authorName: "Rupert Hastings, KC",
    authorInitials: "RH",
    readTime: "9 Min Read",
  },
  {
    category: "Market Analysis",
    date: "29 Sept 2024",
    title: "Private Off-Market Transactions: The Disappearing Public Listing",
    excerpt:
      "Over 68% of residential sales above £10M now conclude without ever appearing on digital portals. How private dossier syndicates protect seller anonymity.",
    authorName: "Clara Sterling",
    authorInitials: "CS",
    readTime: "5 Min Read",
  },
];

const placeholderAdvisors = [
  {
    name: "Alistair Sterling-Vane",
    role: "Founding Partner • London",
    license: "Lic. RICS No. 901248 • 24 Years Tenure",
    bio: "Specializing in Grade-listed sovereign estates and private acquisitions across Belgravia, Mayfair, and the Cotswolds. Advisory board member for historic building trusts.",
    portfolioVolume: "£280M Managed",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXp6XXTJnBITVehrS2wYVJHQjSjlLg0m1MVkBbp5yJwRTbc8LMQdPmveAV9gA-CN91KB6vpe36Frx14HvJef6oCc2JdMC0KmKvW_1RSU0ePh3v6ZcRH-g7YJx_4waOM3M6Vw87ER1RQ3xSe72xS4RWD1FqgDeX81TWkGPUjJhkQcsCK6VqKouRxuskHHd0y-cpbb_IibOeckAWkWD3NuPBinjFLgmorit0N5R5PBgzjyXfDU2oLmOu",
  },
  {
    name: "Geneviève de Rochefort",
    role: "Managing Principal • Paris & New York",
    license: "Lic. Carte T No. 7501 • 19 Years Tenure",
    bio: "Directs cross-border family office mandates between Europe and North America. Former architectural historian and heritage asset appraiser for premier private trusts.",
    portfolioVolume: "$340M Managed",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfv0XRjN2lCfaVvsGEKf9ioxLSO1B9kI4B_ySBu6EQS3zmeMitLEY9oCsTk1ywtSvVpyc5cMca24qV5GVPNkbgiCPLQ2HjoOHb3ImiuhlL3XxO1S9j8u5rrLVmuOdzLfkB9LgaWRzG0A6lMAdxwth346V2wrE5U7zzPmHYyF-kcGp1quE50k8QVbeOW-HIutUimTJcHu4QEjojh91ZAc7hd-KX1BHVuItTC9BGygKYfu-E9dAt1pwU",
  },
  {
    name: "Markus von Halden",
    role: "Head of Capital Markets • Zurich",
    license: "Swiss Valuer Swissreg No. 412 • 16 Years Tenure",
    bio: "Overseeing private institutional placement, yield analysis, and structured asset disposal. Advises on private bank real estate allocations and tax-efficient structures.",
    portfolioVolume: "CHF 410M Managed",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcPuxTTKk91dJtNgvIvvuNFDGh5lKvexaqE9Ms4nqfMJrYmKNV7SOHx9K3sp1AYu9CfoSFU09gCPvh4HoYCSmpwRV5ycT_INroplo96zI6r8qQUwPh7i4K1Si-OdPPgijHsyDIz0xuk93qecCIjSLP6rtwVb98odnguOk9X14xG1ZpyVYBm9So5GOEO__XeIBZZzjCd86QSwQjYP4Fggigc142qPkkkMDkNcWlcQX4c9sl_bk-C0Wm",
  },
];

const placeholderData: Record<string, unknown> = {
  companyName: "Estate Journal",
  issueNumber: "Issue No. 42 — Autumn / Winter",
  globalBureaus: "London • New York • Paris • Zurich",
  marketTickerText: "Global Prime Index +4.8% YoY",
  coverCategory: "Cover Essay • Monograph 42",
  coverReadTime: "8 Min Read",
  coverTitle: "The Revival of Historic Brownstones & New Urbanism",
  coverDescription:
    "In an era defined by ephemeral architectural trends, classic masonry and disciplined limestone elevations are reclaiming prime urban centers. An in-depth investigation into high-performance restoration and the enduring capital value of historic fabric.",
  coverAuthorName: "Julian Vane",
  coverAuthorRole: "Senior Architectural Fellow",
  coverAuthorInitials: "A",
  coverImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA25zR_KdHX6kLee60Amd0MLN7G2bPPyO6W1ROCf2aOlAQQ17DFM-3eOtR21UdWLEkX5d8DWWFfGckje6Kv4_PWomJ-szphmpFTQTl6onAdgqX7jAieSvEqfERpA1dYf20E5xC3GqwqMvngoxp1hi5HEIirvoS4kheaUBaTGOdMGX60_T_ELurC5CIR2zoh1Z874e3r4w3O8CDdcIBsDI8rnSVyT43bax7tzO_iOAzPjU5bizPdX2uP",
  coverPlateCaption: "Plate 01: The Kensington Grand Residence — Restored 2024",
  coverRecordNumber: "Portfolio Record No. EJ-9042",
  properties: placeholderProperties,
  marketReportTitle:
    "Metropolitan Housing Report: Yield Resilience & Sovereign Capital Flows",
  marketReportLeadParagraph:
    "Prime residential real estate continues to function as an uncorrelated hard-asset hedge against systemic volatility. Through Q3 2024, our proprietary tracking across tier-one enclaves illustrates a flight to pedigree: buyers are discounting speculative developments while underwriting significant premiums for verified heritage provenance.",
  marketReportBodyParagraph:
    "Cross-border institutional allocators have increased private residential allocations by 14.2% year-to-date, prioritizing low-leverage central heritage quarters over peripheral expansion zones.",
  marketPullQuote:
    "Capital does not merely seek square footage; it seeks irrevocable architectural authenticity that cannot be duplicated by modern cost engineering.",
  marketMetrics: placeholderMetrics,
  districtYields: placeholderYields,
  neighborhoods: placeholderNeighborhoods,
  articles: placeholderArticles,
  advisors: placeholderAdvisors,
  newsletterTitle: "Receive The Weekly Dispatch",
  newsletterDescription:
    "Curated architectural monographs, private off-market dossiers, and macroeconomic residential intelligence delivered directly to your desk every Saturday morning. Zero promotional noise.",
  officeAddress: "42 Berkeley Square, Mayfair, London W1J 5AW",
  advisoryEmail: "inquiries@estatejournal.authority.org",
  issnNumber: "ISSN 2981-4029",
  catalogNumber: "Catalog No. EJ-AUT-2024-ED",
};

function normalizeTemplateData(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return data && Object.keys(data).length > 0
    ? { ...placeholderData, ...data }
    : placeholderData;
}

export default function RealEstate08({
  resolvedData,
}: RealEstate08Props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const data = normalizeTemplateData(resolvedData);

  const properties = (
    Array.isArray(data.properties) && data.properties.length > 0
      ? data.properties
      : placeholderProperties
  ) as Record<string, any>[];

  const marketMetrics = (
    Array.isArray(data.marketMetrics) && data.marketMetrics.length > 0
      ? data.marketMetrics
      : placeholderMetrics
  ) as Record<string, any>[];

  const districtYields = (
    Array.isArray(data.districtYields) && data.districtYields.length > 0
      ? data.districtYields
      : placeholderYields
  ) as Record<string, any>[];

  const neighborhoods = (
    Array.isArray(data.neighborhoods) && data.neighborhoods.length > 0
      ? data.neighborhoods
      : placeholderNeighborhoods
  ) as Record<string, any>[];

  const articles = (
    Array.isArray(data.articles) && data.articles.length > 0
      ? data.articles
      : placeholderArticles
  ) as Record<string, any>[];

  const advisors = (
    Array.isArray(data.advisors) && data.advisors.length > 0
      ? data.advisors
      : placeholderAdvisors
  ) as Record<string, any>[];

  const coverImage = displayValue(
    data.coverImage,
    placeholderData.coverImage as string,
  );

  // Layout separation: 1st estate is the broadsheet hero (7 cols), others in stacked column (5 cols)
  const heroEstate = properties[0];
  const stackedEstates = properties.slice(1);

  return (
    <div className="bg-[#fff8f1] text-[#0e0d0a] antialiased font-['Manrope',sans-serif] text-[15px] leading-[24px] selection:bg-[#fedaaa] selection:text-[#291800]">
      {/* ========================================================================= */}
      {/* 1. TOP MASTHEAD TICKER / METADATA RIBBON                                  */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#f6ede0] border-b border-[#cac6bd]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-2 flex flex-col md:flex-row justify-between items-center text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
          <div className="flex items-center gap-6">
            <span>
              {displayValue(data.issueNumber, "Issue No. 42 — Autumn / Winter")}
            </span>
            <span className="hidden sm:inline text-[#cac6bd]">|</span>
            <span className="hidden sm:inline">
              {displayValue(
                data.globalBureaus,
                "London • New York • Paris • Zurich",
              )}
            </span>
          </div>
          <div className="flex items-center gap-6 mt-1 md:mt-0">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#745a34] inline-block" />
              {displayValue(
                data.marketTickerText,
                "Global Prime Index +4.8% YoY",
              )}
            </span>
            <a
              className="text-[#0e0d0a] hover:text-[#745a34] transition-colors underline decoration-[#cac6bd] underline-offset-4"
              href="#subscribe"
            >
              Subscribe to Monograph
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TOP APP BAR                                                            */}
      {/* ========================================================================= */}
      <header className="w-full border-b border-[#cac6bd]/30 bg-[#fff8f1] sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a
                className="font-['Bodoni_Moda',serif] text-[28px] leading-[36px] tracking-tight text-[#0e0d0a] uppercase font-bold"
                href="#"
              >
                {displayValue(data.companyName, "Estate Journal")}
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                className="text-[#0e0d0a] border-b border-[#0e0d0a] pb-1 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase"
                href="#properties"
              >
                Properties
              </a>
              <a
                className="text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase hover:text-[#0e0d0a] transition-colors duration-200"
                href="#neighborhoods"
              >
                Neighborhood Guides
              </a>
              <a
                className="text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase hover:text-[#0e0d0a] transition-colors duration-200"
                href="#market-insights"
              >
                Market Insights
              </a>
              <a
                className="text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase hover:text-[#0e0d0a] transition-colors duration-200"
                href="#the-journal"
              >
                The Journal
              </a>
              <a
                className="text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase hover:text-[#0e0d0a] transition-colors duration-200"
                href="#agency-advisors"
              >
                Agency &amp; Advisors
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button
                aria-label="Search articles and properties"
                className="p-2 text-[#484740] hover:text-[#0e0d0a] transition-colors"
                type="button"
              >
                <Icon
                  name="search"
                  className="text-current"
                  size={20}
                  strokeWidth={2.2}
                />
              </button>
              <button
                aria-label="Saved dossiers"
                className="p-2 text-[#484740] hover:text-[#0e0d0a] transition-colors"
                type="button"
              >
                <Icon
                  name="bookmark"
                  className="text-current"
                  size={20}
                  strokeWidth={2.2}
                />
              </button>
              <a
                className="hidden sm:inline-flex bg-[#24231f] text-[#fff8f1] hover:bg-[#745a34] transition-colors duration-200 px-6 py-2.5 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase"
                href="#inquiry-consult"
              >
                Client Inquiries
              </a>
              <button
                aria-label="Toggle Navigation"
                className="lg:hidden p-2 text-[#0e0d0a]"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                type="button"
              >
                <Icon
                  name="menu"
                  className="text-current"
                  size={24}
                  strokeWidth={2.2}
                />
              </button>
            </div>
          </div>
        </div>

        {mobileNavOpen && (
          <div className="lg:hidden border-t border-[#cac6bd]/30 bg-[#f6ede0] px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
              <a
                className="text-[#0e0d0a] py-1 border-b border-[#0e0d0a]"
                href="#properties"
                onClick={() => setMobileNavOpen(false)}
              >
                Properties
              </a>
              <a
                className="text-[#484740] py-1"
                href="#neighborhoods"
                onClick={() => setMobileNavOpen(false)}
              >
                Neighborhood Guides
              </a>
              <a
                className="text-[#484740] py-1"
                href="#market-insights"
                onClick={() => setMobileNavOpen(false)}
              >
                Market Insights
              </a>
              <a
                className="text-[#484740] py-1"
                href="#the-journal"
                onClick={() => setMobileNavOpen(false)}
              >
                The Journal
              </a>
              <a
                className="text-[#484740] py-1"
                href="#agency-advisors"
                onClick={() => setMobileNavOpen(false)}
              >
                Agency &amp; Advisors
              </a>
            </div>
            <div className="pt-4 border-t border-[#cac6bd]/30 flex flex-col gap-3">
              <a
                className="w-full text-center bg-[#24231f] text-[#fff8f1] py-3 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase"
                href="#inquiry-consult"
                onClick={() => setMobileNavOpen(false)}
              >
                Client Inquiries
              </a>
              <a
                className="w-full text-center border border-[#0e0d0a] text-[#0e0d0a] py-3 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase"
                href="#subscribe"
                onClick={() => setMobileNavOpen(false)}
              >
                Subscribe to Monograph
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 3. HERO & COVER STORY: BROADSHEET EDITORIAL                               */}
      {/* ========================================================================= */}
      <main className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
        <section className="py-10 border-b border-[#cac6bd]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center pr-0 lg:pr-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-[#f0e7db] border border-[#cac6bd]/30 text-[#745a34] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                  {displayValue(
                    data.coverCategory,
                    "Cover Essay • Monograph 42",
                  )}
                </span>
                <span className="text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold">
                  {displayValue(data.coverReadTime, "8 Min Read")}
                </span>
              </div>
              <h1 className="font-['Bodoni_Moda',serif] text-[38px] md:text-[64px] leading-[44px] md:leading-[72px] tracking-[-0.02em] font-normal text-[#0e0d0a] mb-6">
                {displayValue(
                  data.coverTitle,
                  "The Revival of Historic Brownstones & New Urbanism",
                )}
              </h1>
              <p className="text-[18px] leading-[30px] font-normal tracking-[-0.005em] text-[#484740] mb-8">
                {displayValue(
                  data.coverDescription,
                  "In an era defined by ephemeral architectural trends, classic masonry and disciplined limestone elevations are reclaiming prime urban centers. An in-depth investigation into high-performance restoration and the enduring capital value of historic fabric.",
                )}
              </p>
              <div className="pt-6 border-t border-[#cac6bd]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#eae1d5] flex items-center justify-center font-['Bodoni_Moda',serif] text-[22px] text-[#0e0d0a]">
                    {displayValue(data.coverAuthorInitials, "A")}
                  </div>
                  <div>
                    <p className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#0e0d0a]">
                      {displayValue(data.coverAuthorName, "Julian Vane")}
                    </p>
                    <p className="text-[#484740] text-xs">
                      {displayValue(
                        data.coverAuthorRole,
                        "Senior Architectural Fellow",
                      )}
                    </p>
                  </div>
                </div>
                <a
                  className="inline-flex items-center gap-2 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#0e0d0a] hover:text-[#745a34] group transition-colors"
                  href="#the-journal"
                >
                  <span>Read Monograph</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative overflow-hidden bg-[#f6ede0] p-2 border border-[#cac6bd]/30">
                <div className="relative h-[460px] md:h-[580px] overflow-hidden">
                  <Image
                    alt={displayValue(data.coverTitle, "Cover Photograph")}
                    className="object-cover hover:scale-[1.01] transition-transform duration-700 ease-out"
                    src={coverImage}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    unoptimized
                  />
                </div>
                <div className="mt-2.5 px-2 py-1 flex flex-col sm:flex-row justify-between text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase border-t border-[#cac6bd]/20 pt-2">
                  <span>
                    {displayValue(
                      data.coverPlateCaption,
                      "Plate 01: The Kensington Grand Residence — Restored 2024",
                    )}
                  </span>
                  <span className="text-[#79776f]">
                    {displayValue(
                      data.coverRecordNumber,
                      "Portfolio Record No. EJ-9042",
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. ARCHIVE PROPERTY SEARCH CONSOLE                                        */}
        {/* ========================================================================= */}
        <section className="py-6 border-b border-[#cac6bd]/30">
          <div className="bg-[#fbf2e6] p-6 md:p-8 border border-[#cac6bd]/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon
                  name="filter_alt"
                  className="text-[#745a34]"
                  size={18}
                  strokeWidth={2.2}
                />
                <h2 className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#0e0d0a]">
                  Private Property Archive Search
                </h2>
              </div>
              <span className="text-[#484740] text-xs">
                Cataloging {properties.length} Vetted Residential &amp; Historic
                Estates
              </span>
            </div>

            <form
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                  District / Enclave
                </label>
                <div className="relative">
                  <select className="w-full bg-[#ffffff] border border-[#cac6bd]/40 px-3.5 py-3 text-[#0e0d0a] text-[15px] leading-[24px] focus:border-[#0e0d0a] focus:ring-0 rounded-none appearance-none cursor-pointer">
                    <option>All Global Metropolises</option>
                    <option>Mayfair &amp; Kensington (London)</option>
                    <option>Upper East Side (Manhattan)</option>
                    <option>7th Arrondissement (Paris)</option>
                    <option>Zürichberg (Zurich)</option>
                  </select>
                  <span className="absolute right-3 top-3.5 pointer-events-none text-[#484740]">
                    <Icon
                      name="expand_more"
                      className="text-current"
                      size={16}
                      strokeWidth={2.2}
                    />
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                  Architectural Style
                </label>
                <div className="relative">
                  <select className="w-full bg-[#ffffff] border border-[#cac6bd]/40 px-3.5 py-3 text-[#0e0d0a] text-[15px] leading-[24px] focus:border-[#0e0d0a] focus:ring-0 rounded-none appearance-none cursor-pointer">
                    <option>All Typologies</option>
                    <option>Georgian &amp; Regency Townhouse</option>
                    <option>Haussmannian Flat</option>
                    <option>Brutalist &amp; Mid-Century Modern</option>
                    <option>Private Waterfront Pavilion</option>
                  </select>
                  <span className="absolute right-3 top-3.5 pointer-events-none text-[#484740]">
                    <Icon
                      name="expand_more"
                      className="text-current"
                      size={16}
                      strokeWidth={2.2}
                    />
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                  Valuation Bracket
                </label>
                <div className="relative">
                  <select className="w-full bg-[#ffffff] border border-[#cac6bd]/40 px-3.5 py-3 text-[#0e0d0a] text-[15px] leading-[24px] focus:border-[#0e0d0a] focus:ring-0 rounded-none appearance-none cursor-pointer">
                    <option>All Valuation Tiers</option>
                    <option>£2,500,000 — £5,000,000</option>
                    <option>£5,000,000 — £10,000,000</option>
                    <option>£10,000,000+ (High Sovereign)</option>
                  </select>
                  <span className="absolute right-3 top-3.5 pointer-events-none text-[#484740]">
                    <Icon
                      name="expand_more"
                      className="text-current"
                      size={16}
                      strokeWidth={2.2}
                    />
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                  Chambers / Bedrooms
                </label>
                <div className="relative">
                  <select className="w-full bg-[#ffffff] border border-[#cac6bd]/40 px-3.5 py-3 text-[#0e0d0a] text-[15px] leading-[24px] focus:border-[#0e0d0a] focus:ring-0 rounded-none appearance-none cursor-pointer">
                    <option>Any Capacity</option>
                    <option>2–3 Suites</option>
                    <option>4–5 Suites</option>
                    <option>6+ Expansive Residence</option>
                  </select>
                  <span className="absolute right-3 top-3.5 pointer-events-none text-[#484740]">
                    <Icon
                      name="expand_more"
                      className="text-current"
                      size={16}
                      strokeWidth={2.2}
                    />
                  </span>
                </div>
              </div>

              <div>
                <button
                  className="w-full bg-[#24231f] text-[#fff8f1] hover:bg-[#745a34] py-3.5 px-4 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase transition-colors flex items-center justify-center gap-2"
                  type="submit"
                >
                  <Icon
                    name="manage_search"
                    className="text-current"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span>Filter Portfolio</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CURATED PROPERTY COLLECTIONS                                           */}
        {/* ========================================================================= */}
        <section className="py-16 border-b border-[#cac6bd]/30" id="properties">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#745a34] block mb-1">
                Vol. 42 Curated Catalog
              </span>
              <h2 className="font-['Bodoni_Moda',serif] text-[28px] md:text-[44px] leading-[34px] md:leading-[52px] tracking-[-0.015em] font-normal text-[#0e0d0a]">
                Featured Architectural Estates
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span className="text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                {properties.length} Monographs Available
              </span>
              <a
                className="underline decoration-[#cac6bd] underline-offset-4 hover:text-[#745a34] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase transition-colors"
                href="#inquiry-consult"
              >
                Request Private Dossier
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Hero Estate (7 Cols) */}
            {heroEstate && (
              <article className="lg:col-span-7 bg-[#fbf2e6] border border-[#cac6bd]/30 flex flex-col group">
                <div className="relative overflow-hidden aspect-[16/10] bg-[#e1d9cd]">
                  <Image
                    alt={displayValue(heroEstate.title)}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src={String(
                      displayValue(
                        heroEstate.imageUrl,
                        placeholderProperties[0].imageUrl,
                      ),
                    )}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {Boolean(heroEstate.badge) && (
                      <span className="bg-[#24231f] text-[#fff8f1] px-3 py-1 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                        {displayValue(heroEstate.badge)}
                      </span>
                    )}
                    {Boolean(heroEstate.secondaryBadge) && (
                      <span className="bg-[#fff8f1]/90 text-[#0e0d0a] backdrop-blur px-3 py-1 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase border border-[#cac6bd]/40">
                        {displayValue(heroEstate.secondaryBadge)}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#24231f]/90 backdrop-blur text-[#fff8f1] px-3.5 py-1.5 font-['Bodoni_Moda',serif] text-[22px] leading-[28px]">
                    {formatPrice(
                      heroEstate.price,
                      displayValue(heroEstate.currency, "£"),
                    )}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase mb-2">
                      <span>{displayValue(heroEstate.refNumber)}</span>
                      <span>{displayValue(heroEstate.location)}</span>
                    </div>
                    <h3 className="font-['Bodoni_Moda',serif] text-[28px] leading-[36px] font-medium text-[#0e0d0a] mb-3 group-hover:text-[#745a34] transition-colors">
                      {displayValue(heroEstate.title)}
                    </h3>
                    <p className="text-[#484740] text-[15px] leading-[24px] mb-6 line-clamp-2">
                      {displayValue(heroEstate.description)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#cac6bd]/30 flex flex-wrap items-center justify-between gap-4 text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                    <div className="flex items-center gap-6">
                      {heroEstate.bedrooms !== undefined && (
                        <span>
                          <strong>{heroEstate.bedrooms}</strong> Bedrooms
                        </span>
                      )}
                      {heroEstate.bathrooms !== undefined && (
                        <span>
                          <strong>{heroEstate.bathrooms}</strong> Baths
                        </span>
                      )}
                      {heroEstate.area !== undefined && (
                        <span>
                          <strong>{heroEstate.area}</strong>{" "}
                          {displayValue(heroEstate.areaUnit, "Sq Ft Internal")}
                        </span>
                      )}
                    </div>
                    <a
                      className="inline-flex items-center gap-1 text-[#0e0d0a] hover:text-[#745a34] transition-colors"
                      href="#inquiry-consult"
                    >
                      <span>View Full Study</span>
                      <Icon
                        name="arrow_forward"
                        className="text-current"
                        size={14}
                        strokeWidth={2.2}
                      />
                    </a>
                  </div>
                </div>
              </article>
            )}

            {/* Right Stacked Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              {stackedEstates.map((estate, idx) => (
                <article
                  key={estate.id || idx}
                  className="bg-[#fbf2e6] border border-[#cac6bd]/30 flex flex-col group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#e1d9cd]">
                    <Image
                      alt={displayValue(estate.title)}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src={String(
                        displayValue(
                          estate.imageUrl,
                          placeholderProperties[1].imageUrl,
                        ),
                      )}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                    {Boolean(estate.badge) && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#fff8f1]/90 backdrop-blur text-[#0e0d0a] px-2.5 py-1 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase border border-[#cac6bd]/40">
                          {displayValue(estate.badge)}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-[#24231f]/90 backdrop-blur text-[#fff8f1] px-3 py-1 font-['Bodoni_Moda',serif] text-[22px] leading-[28px]">
                      {formatPrice(
                        estate.price,
                        displayValue(estate.currency, "€"),
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase mb-1">
                      <span>{displayValue(estate.refNumber)}</span>
                      <span>{displayValue(estate.location)}</span>
                    </div>
                    <h4 className="font-['Bodoni_Moda',serif] text-[22px] leading-[28px] font-medium text-[#0e0d0a] mb-2 group-hover:text-[#745a34] transition-colors">
                      {displayValue(estate.title)}
                    </h4>
                    <p className="text-[#484740] text-[13px] leading-[20px] mb-4 line-clamp-2">
                      {displayValue(estate.description)}
                    </p>
                    <div className="pt-3 border-t border-[#cac6bd]/30 flex justify-between items-center text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740]">
                      <span>
                        {estate.bedrooms !== undefined &&
                          `${estate.bedrooms} Suites • `}
                        {estate.bathrooms !== undefined &&
                          `${estate.bathrooms} Baths • `}
                        {estate.area !== undefined &&
                          `${estate.area} ${displayValue(estate.areaUnit, "m²")}`}
                      </span>
                      <a
                        className="text-[#0e0d0a] hover:text-[#745a34]"
                        href="#inquiry-consult"
                      >
                        Request Details →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. MARKET INSIGHTS & ECONOMIC INTELLIGENCE (Feature Group J)              */}
        {/* ========================================================================= */}
        <section
          className="py-16 border-b border-[#cac6bd]/30"
          id="market-insights"
        >
          <div className="mb-6">
            <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#745a34] block mb-1">
              Macroeconomic Dossier
            </span>
            <h2 className="font-['Bodoni_Moda',serif] text-[28px] md:text-[44px] leading-[34px] md:leading-[52px] tracking-[-0.015em] font-normal text-[#0e0d0a]">
              Market Intelligence &amp; Yield Trajectory
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 pr-0 lg:pr-6 flex flex-col justify-between">
              <div>
                <h3 className="font-['Bodoni_Moda',serif] text-[28px] leading-[36px] font-medium text-[#0e0d0a] mb-4">
                  {displayValue(
                    data.marketReportTitle,
                    "Metropolitan Housing Report: Yield Resilience & Sovereign Capital Flows",
                  )}
                </h3>
                <p className="text-[15px] leading-[24px] text-[#484740] mb-4 leading-relaxed">
                  {displayValue(
                    data.marketReportLeadParagraph,
                    "Prime residential real estate continues to function as an uncorrelated hard-asset hedge against systemic volatility. Through Q3 2024, our proprietary tracking across tier-one enclaves illustrates a flight to pedigree: buyers are discounting speculative developments while underwriting significant premiums for verified heritage provenance.",
                  )}
                </p>
                <p className="text-[15px] leading-[24px] text-[#484740] mb-6 leading-relaxed">
                  {displayValue(
                    data.marketReportBodyParagraph,
                    "Cross-border institutional allocators have increased private residential allocations by 14.2% year-to-date, prioritizing low-leverage central heritage quarters over peripheral expansion zones.",
                  )}
                </p>
                {Boolean(data.marketPullQuote) && (
                  <blockquote className="border-l-2 border-[#745a34] pl-4 py-1 italic font-['Bodoni_Moda',serif] text-[24px] leading-[36px] tracking-[-0.01em] text-[#0e0d0a] mb-6">
                    &ldquo;{displayValue(data.marketPullQuote)}&rdquo;
                  </blockquote>
                )}
              </div>
              <div className="pt-4 border-t border-[#cac6bd]/30 flex items-center justify-between">
                <span className="text-[#484740] text-xs text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                  Source: Estate Journal Analytics &amp; Advisory Group
                </span>
                <a
                  className="text-[#745a34] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase hover:text-[#0e0d0a] transition-colors"
                  href="#subscribe"
                >
                  Download Full Whitepaper →
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {marketMetrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="bg-[#fbf2e6] p-5 border border-[#cac6bd]/30"
                  >
                    <span className="text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase block mb-2">
                      {displayValue(m.label)}
                    </span>
                    <div className="font-['Bodoni_Moda',serif] text-[44px] leading-[52px] text-[#0e0d0a] mb-1">
                      {displayValue(m.value)}
                    </div>
                    <span className="text-[#745a34] text-xs text-[11px] leading-[16px] tracking-[0.12em] font-semibold">
                      {displayValue(m.subtext)}
                    </span>
                  </div>
                ))}
              </div>

              {districtYields.length > 0 && (
                <div className="bg-[#fbf2e6] border border-[#cac6bd]/30 p-5 mt-2">
                  <div className="flex justify-between items-center pb-3 border-b border-[#cac6bd]/30 mb-3">
                    <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#0e0d0a]">
                      District Capitalization &amp; Cap Rates
                    </span>
                    <span className="text-[11px] text-[#484740] tracking-[0.12em] font-semibold uppercase">
                      Updated Weekly
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[13px] leading-[20px]">
                      <thead>
                        <tr className="border-b border-[#cac6bd]/20 text-[#484740] text-[10px] leading-[14px] tracking-[0.12em] font-semibold uppercase">
                          <th className="pb-2">Metropolitan District</th>
                          <th className="pb-2">Avg. Sq Ft Price</th>
                          <th className="pb-2">Net Rental Yield</th>
                          <th className="pb-2 text-right">Liquidity Index</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#cac6bd]/20 text-[#0e0d0a]">
                        {districtYields.map((row, rIdx) => (
                          <tr key={rIdx}>
                            <td className="py-2.5 font-medium">
                              {displayValue(row.district)}
                            </td>
                            <td className="py-2.5">
                              {displayValue(row.avgPrice)}
                            </td>
                            <td className="py-2.5 text-[#745a34]">
                              {displayValue(row.yieldRate)}
                            </td>
                            <td className="py-2.5 text-right font-semibold">
                              {displayValue(row.liquidity)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. NEIGHBORHOOD GUIDES & AREA MONOGRAPHS (Feature Group H)                */}
        {/* ========================================================================= */}
        {neighborhoods.length > 0 && (
          <section
            className="py-16 border-b border-[#cac6bd]/30"
            id="neighborhoods"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#745a34] block mb-1">
                  Local Monograph Series
                </span>
                <h2 className="font-['Bodoni_Moda',serif] text-[28px] md:text-[44px] leading-[34px] md:leading-[52px] tracking-[-0.015em] font-normal text-[#0e0d0a]">
                  Neighborhood Profiles &amp; Enclave Dossiers
                </h2>
              </div>
              <p className="text-[#484740] text-[13px] leading-[20px] mt-2 md:mt-0">
                Rigorous evaluations of urban fabric, cultural infrastructure,
                historic conservation codes, and generational lifestyle appeal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {neighborhoods.map((n, nIdx) => (
                <div
                  key={nIdx}
                  className="bg-[#fbf2e6] border border-[#cac6bd]/30 flex flex-col"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-[#e1d9cd] relative">
                    <Image
                      alt={displayValue(n.title)}
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      src={String(
                        displayValue(
                          n.imageUrl,
                          placeholderNeighborhoods[0].imageUrl,
                        ),
                      )}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                    {Boolean(n.enclaveNumber) && (
                      <div className="absolute bottom-3 left-3 bg-[#24231f]/90 backdrop-blur text-[#fff8f1] px-3 py-1 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                        {displayValue(n.enclaveNumber)}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[#745a34] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase block mb-1">
                        {displayValue(n.region)}
                      </span>
                      <h3 className="font-['Bodoni_Moda',serif] text-[28px] leading-[36px] font-medium text-[#0e0d0a] mb-2">
                        {displayValue(n.title)}
                      </h3>
                      <p className="text-[#484740] text-[13px] leading-[20px] mb-4">
                        {displayValue(n.description)}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#cac6bd]/30 space-y-2 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740]">
                      <div className="flex justify-between">
                        <span>Conservation Index:</span>
                        <span className="text-[#0e0d0a] font-bold">
                          {displayValue(n.conservationIndex)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Key Schools Rating:</span>
                        <span className="text-[#0e0d0a] font-bold">
                          {displayValue(n.schoolRating)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Private Garden Access:</span>
                        <span className="text-[#0e0d0a] font-bold">
                          {displayValue(n.parkAccess)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 8. THE JOURNAL: ARTICLES & ESSAYS (Feature Group J)                       */}
        {/* ========================================================================= */}
        {articles.length > 0 && (
          <section
            className="py-16 border-b border-[#cac6bd]/30"
            id="the-journal"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div>
                <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#745a34] block mb-1">
                  Critical Discourse &amp; Dispatches
                </span>
                <h2 className="font-['Bodoni_Moda',serif] text-[28px] md:text-[44px] leading-[34px] md:leading-[52px] tracking-[-0.015em] font-normal text-[#0e0d0a]">
                  From The Journal
                </h2>
              </div>
              <a
                className="underline decoration-[#cac6bd] underline-offset-4 hover:text-[#745a34] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase transition-colors mt-2 md:mt-0"
                href="#the-journal"
              >
                Browse Complete Library Archive
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {articles.map((art, aIdx) => (
                <article
                  key={aIdx}
                  className="flex flex-col justify-between bg-[#fbf2e6] p-6 border border-[#cac6bd]/30"
                >
                  <div>
                    <div className="flex items-center justify-between text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase mb-3">
                      <span className="text-[#745a34] font-bold">
                        {displayValue(art.category)}
                      </span>
                      <span>{displayValue(art.date)}</span>
                    </div>
                    <h3 className="font-['Bodoni_Moda',serif] text-[22px] leading-[28px] font-medium text-[#0e0d0a] mb-3 hover:text-[#745a34] transition-colors cursor-pointer">
                      {displayValue(art.title)}
                    </h3>
                    <p className="text-[#484740] text-[13px] leading-[20px] mb-6 leading-relaxed">
                      {displayValue(art.excerpt)}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#cac6bd]/30 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#eae1d5] flex items-center justify-center text-xs font-bold text-[#0e0d0a]">
                        {displayValue(art.authorInitials, "EJ")}
                      </div>
                      <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#0e0d0a]">
                        {displayValue(art.authorName)}
                      </span>
                    </div>
                    <span className="text-[#484740] text-xs text-[11px] leading-[16px] tracking-[0.12em] font-semibold">
                      {displayValue(art.readTime)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 9. AGENCY PRINCIPALS & ADVISORS (Feature Group E)                         */}
        {/* ========================================================================= */}
        {advisors.length > 0 && (
          <section
            className="py-16 border-b border-[#cac6bd]/30"
            id="agency-advisors"
          >
            <div className="mb-6">
              <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#745a34] block mb-1">
                Advisory Directorate
              </span>
              <h2 className="font-['Bodoni_Moda',serif] text-[28px] md:text-[44px] leading-[34px] md:leading-[52px] tracking-[-0.015em] font-normal text-[#0e0d0a]">
                Principals &amp; Private Counsel
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {advisors.map((adv, adIdx) => (
                <div
                  key={adIdx}
                  className="bg-[#fbf2e6] border border-[#cac6bd]/30 p-6 flex flex-col items-start"
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-[#e1d9cd] mb-6 border border-[#cac6bd]/20">
                    <Image
                      alt={displayValue(adv.name)}
                      className="object-cover grayscale contrast-125"
                      src={String(
                        displayValue(
                          adv.imageUrl,
                          placeholderAdvisors[0].imageUrl,
                        ),
                      )}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <span className="text-[#745a34] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase block mb-1">
                    {displayValue(adv.role)}
                  </span>
                  <h3 className="font-['Bodoni_Moda',serif] text-[22px] leading-[28px] font-medium text-[#0e0d0a] mb-1">
                    {displayValue(adv.name)}
                  </h3>
                  <p className="text-[#484740] text-xs text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase mb-4">
                    {displayValue(adv.license)}
                  </p>
                  <p className="text-[#484740] text-[13px] leading-[20px] mb-6 leading-relaxed">
                    {displayValue(adv.bio)}
                  </p>
                  <div className="w-full pt-4 border-t border-[#cac6bd]/30 flex justify-between items-center text-xs text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                    <span>Portfolio: {displayValue(adv.portfolioVolume)}</span>
                    <a
                      className="text-[#0e0d0a] hover:text-[#745a34] underline decoration-[#cac6bd] underline-offset-4"
                      href="#inquiry-consult"
                    >
                      Direct Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 10. EDITORIAL NEWSLETTER DISPATCH                                         */}
        {/* ========================================================================= */}
        <section className="py-16 border-b border-[#cac6bd]/30" id="subscribe">
          <div className="bg-[#f0e7db] border border-[#cac6bd]/40 p-8 md:p-14 max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#745a34] block mb-2">
                The Saturday Monograph
              </span>
              <h2 className="font-['Bodoni_Moda',serif] text-[28px] md:text-[44px] leading-[34px] md:leading-[52px] tracking-[-0.015em] font-normal text-[#0e0d0a] mb-4">
                {displayValue(
                  data.newsletterTitle,
                  "Receive The Weekly Dispatch",
                )}
              </h2>
              <p className="text-[#484740] text-[15px] leading-[24px] leading-relaxed">
                {displayValue(
                  data.newsletterDescription,
                  "Curated architectural monographs, private off-market dossiers, and macroeconomic residential intelligence delivered directly to your desk every Saturday morning. Zero promotional noise.",
                )}
              </p>
            </div>

            <form
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-1 bg-[#ffffff] border border-[#cac6bd]/40 px-4 py-3.5 text-[#0e0d0a] text-[15px] leading-[24px] focus:border-[#0e0d0a] focus:ring-0 rounded-none placeholder:text-[#79776f]"
                placeholder="Enter institutional or personal email"
                required
                type="email"
              />
              <button
                className="bg-[#24231f] text-[#fff8f1] hover:bg-[#745a34] px-8 py-3.5 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase transition-colors whitespace-nowrap"
                type="submit"
              >
                Subscribe to Monograph
              </button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                Strict confidentiality guaranteed. Readers may revoke
                subscription at any moment.
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. PRIVATE CLIENT INQUIRIES & ACQUISITION CONSULTATION (Feature Group K) */}
        {/* ========================================================================= */}
        <section className="py-16" id="inquiry-consult">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 pr-0 lg:pr-8">
              <span className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#745a34] block mb-2">
                Private Client Office
              </span>
              <h2 className="font-['Bodoni_Moda',serif] text-[28px] md:text-[44px] leading-[34px] md:leading-[52px] tracking-[-0.015em] font-normal text-[#0e0d0a] mb-4">
                Initiate a Confidential Dossier
              </h2>
              <p className="text-[#484740] text-[15px] leading-[24px] mb-6 leading-relaxed">
                Whether contemplating the disposal of an uncataloged heritage
                estate or seeking discreet mandate representation for global
                acquisition, our senior partners are available for private
                consultations under non-disclosure.
              </p>

              <div className="space-y-4 pt-6 border-t border-[#cac6bd]/30 text-[13px] leading-[20px] text-[#484740]">
                <div className="flex items-start gap-3">
                  <Icon
                    name="location_on"
                    className="text-[#745a34] mt-0.5"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span>
                    <strong>London Directorate:</strong>{" "}
                    {displayValue(
                      data.officeAddress,
                      "42 Berkeley Square, Mayfair, London W1J 5AW",
                    )}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="mail"
                    className="text-[#745a34] mt-0.5"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span>
                    <strong>Advisory Desk:</strong>{" "}
                    {displayValue(
                      data.advisoryEmail,
                      "inquiries@estatejournal.authority.org",
                    )}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="lock"
                    className="text-[#745a34] mt-0.5"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span>
                    All communications protected by institutional non-disclosure
                    protocol.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#fbf2e6] p-8 border border-[#cac6bd]/30">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                      Full Legal Name
                    </label>
                    <input
                      className="w-full bg-[#ffffff] border border-[#cac6bd]/40 p-3 text-[15px] leading-[24px] rounded-none focus:border-[#0e0d0a] focus:ring-0"
                      placeholder="e.g. Lord Harrington / Dr. Elena Rostova"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                      Direct Contact Email
                    </label>
                    <input
                      className="w-full bg-[#ffffff] border border-[#cac6bd]/40 p-3 text-[15px] leading-[24px] rounded-none focus:border-[#0e0d0a] focus:ring-0"
                      placeholder="contact@familyoffice.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                      Nature of Mandate
                    </label>
                    <select className="w-full bg-[#ffffff] border border-[#cac6bd]/40 p-3 text-[15px] leading-[24px] rounded-none focus:border-[#0e0d0a] focus:ring-0">
                      <option>Off-Market Asset Acquisition</option>
                      <option>Heritage Estate Disposal / Monograph</option>
                      <option>Institutional Valuation Appraisal</option>
                      <option>General Editorial &amp; Press Inquiries</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                      Target Metropolitan Enclave
                    </label>
                    <input
                      className="w-full bg-[#ffffff] border border-[#cac6bd]/40 p-3 text-[15px] leading-[24px] rounded-none focus:border-[#0e0d0a] focus:ring-0"
                      placeholder="e.g. Central London, Paris 7e, Zurich"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#484740] mb-2">
                    Preliminary Specification or Inquiries
                  </label>
                  <textarea
                    className="w-full bg-[#ffffff] border border-[#cac6bd]/40 p-3 text-[15px] leading-[24px] rounded-none focus:border-[#0e0d0a] focus:ring-0"
                    placeholder="Detail any specific architectural prerequisites, heritage period preferences, or timeline constraints..."
                    rows={4}
                  />
                </div>

                <div className="pt-2">
                  <button
                    className="bg-[#24231f] text-[#fff8f1] hover:bg-[#745a34] py-3.5 px-8 text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase transition-colors w-full sm:w-auto"
                    type="submit"
                  >
                    Submit Mandate to Advisory Board
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 12. COMPLIANCE FOOTER                                                     */}
      {/* ========================================================================= */}
      <footer className="w-full bg-[#f6ede0] border-t border-[#cac6bd]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5 pr-0 md:pr-12">
              <span className="font-['Bodoni_Moda',serif] text-[28px] leading-[36px] font-bold text-[#0e0d0a] tracking-tight uppercase block mb-4">
                {displayValue(data.companyName, "Estate Journal")}
              </span>
              <p className="text-[#484740] text-[13px] leading-[20px] leading-relaxed mb-6">
                An architectural publication and licensed property advisory
                documenting the world&apos;s most disciplined residential
                buildings, historic preservation endeavors, and private capital
                dynamics.
              </p>
              <div className="flex items-center space-x-6 text-[#484740] text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase">
                <span>{displayValue(data.issnNumber, "ISSN 2981-4029")}</span>
                <span>
                  {displayValue(
                    data.globalBureaus,
                    "London • New York • Paris",
                  )}
                </span>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#0e0d0a] mb-4">
                  Archival Index
                </h4>
                <ul className="space-y-2.5 text-[13px] leading-[20px]">
                  <li>
                    <a
                      className="text-[#484740] hover:text-[#0e0d0a] transition-colors"
                      href="#properties"
                    >
                      Properties Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#484740] hover:text-[#0e0d0a] transition-colors"
                      href="#neighborhoods"
                    >
                      Neighborhood Index
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#484740] hover:text-[#0e0d0a] transition-colors"
                      href="#the-journal"
                    >
                      Dispatch Archive
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#0e0d0a] mb-4">
                  Intelligence
                </h4>
                <ul className="space-y-2.5 text-[13px] leading-[20px]">
                  <li>
                    <a
                      className="text-[#484740] hover:text-[#0e0d0a] transition-colors"
                      href="#market-insights"
                    >
                      Market Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#484740] hover:text-[#0e0d0a] transition-colors"
                      href="#agency-advisors"
                    >
                      Agency &amp; Dossiers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#484740] hover:text-[#0e0d0a] transition-colors"
                      href="#inquiry-consult"
                    >
                      Literary Inquiries
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] leading-[16px] tracking-[0.12em] font-semibold uppercase text-[#0e0d0a] mb-4">
                  Statutory
                </h4>
                <ul className="space-y-2.5 text-[13px] leading-[20px]">
                  <li>
                    <a
                      className="text-[#484740] hover:text-[#0e0d0a] transition-colors"
                      href="#"
                    >
                      Legal Notices
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#484740] hover:text-[#0e0d0a] transition-colors"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <span className="text-[#79776f]">Equal Housing Opp.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#cac6bd]/30 flex flex-col md:flex-row justify-between items-center text-[#484740] text-[13px] leading-[20px]">
            <p>
              © {new Date().getFullYear()} Estate Journal Authority Ltd. All
              architectural monographs and market intelligence cataloged.
            </p>
            <p className="mt-2 md:mt-0 text-[10px] leading-[14px] tracking-[0.12em] font-semibold uppercase">
              {displayValue(data.catalogNumber, "Catalog No. EJ-AUT-2024-ED")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
