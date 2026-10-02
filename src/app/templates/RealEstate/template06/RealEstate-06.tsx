"use client";

import Image from "next/image";
import React from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Compass,
  Download,
  Landmark,
  Map,
  MapPin,
  Minus,
  Navigation,
  ParkingCircle,
  Phone,
  Plus,
  Printer,
  SlidersHorizontal,
  Trees,
  UtensilsCrossed,
  Clapperboard,
  Tv,
} from "lucide-react";

type RealEstate06Props = {
  resolvedData?: Record<string, unknown>;
};

function displayValue(
  value: unknown,
  fallback = "Waiting for resolved data",
): string {
  if (value === undefined || value === null || value === "") return fallback;
  return Array.isArray(value) ? value.join(", ") : String(value);
}

function formatPrice(price: unknown, currency = "$"): string {
  if (price === undefined || price === null || price === "") return "";
  const num = typeof price === "number" ? price : parseFloat(String(price));
  if (isNaN(num)) return String(price);
  return `${currency}${num.toLocaleString("en-US")}`;
}

const placeholderStrata = [
  {
    tier: "TIER III",
    levels: "LEVELS 38 — 48",
    title: "The Signature Penthouses",
    description:
      "Full-floor and duplex sky sanctuaries featuring internal 360-degree glass courtyards, private infinity plunge pools, and dual ceiling heights exceeding 4.2 meters.",
    unitsSummary: "12 EXCLUSIVE UNITS",
    liftSummary: "PRIVATE CONCIERGE LIFT",
    isPrimary: true,
  },
  {
    tier: "TIER II",
    levels: "LEVELS 12 — 37",
    title: "The Sky Residences",
    description:
      "Generously planned two and three-bedroom suites oriented toward panoramic harbor and parkland axes, punctuated by corner loggias and fluted bronze screening.",
    unitsSummary: "86 UNITS",
    liftSummary: "LOGGIA BALCONIES",
    isPrimary: false,
  },
  {
    tier: "TIER I",
    levels: "LEVELS 02 — 11",
    title: "The Garden Pavilions",
    description:
      "Tactile limestone-framed duplexes opening onto private sunken landscaped courtyards curated by renowned landscape master Piet Oudolf associates.",
    unitsSummary: "44 UNITS",
    liftSummary: "PRIVATE GARDENS",
    isPrimary: false,
  },
];

const placeholderFeaturedUnits = [
  {
    id: "unit-1804",
    unitNumber: "Unit 1804",
    tier: "Sky Residence — Level 18",
    title: "2-Bed Sky Suite",
    status: "Available",
    beds: 2,
    baths: 2.5,
    aspect: "S / E",
    internalArea: "1,420 sq ft (131.9 m²)",
    terraceArea: "210 sq ft (19.5 m²)",
    totalArea: "1,630 sq ft (151.4 m²)",
    price: 1850000,
    currency: "$",
    pricePrefix: "STARTING FROM",
  },
  {
    id: "unit-3201",
    unitNumber: "Unit 3201",
    tier: "Sky Residence — Level 32",
    title: "3-Bed Terrace Suite",
    status: "Available",
    beds: 3,
    baths: 3.5,
    aspect: "Panoramic",
    internalArea: "2,380 sq ft (221.1 m²)",
    terraceArea: "460 sq ft (42.7 m²)",
    totalArea: "2,840 sq ft (263.8 m²)",
    price: 3420000,
    currency: "$",
    pricePrefix: "STARTING FROM",
  },
  {
    id: "unit-4202",
    unitNumber: "Unit 4202",
    tier: "Signature Penthouse — Levels 42-43",
    title: "4-Bed Duplex Penthouse",
    status: "Reserved",
    isFlagship: true,
    beds: 4,
    baths: 4.5,
    aspect: "360° View",
    internalArea: "4,850 sq ft (450.5 m²)",
    terraceArea: "1,120 sq ft (104.0 m²)",
    totalArea: "5,970 sq ft (554.5 m²)",
    price: 6400000,
    currency: "$",
    pricePrefix: "GUIDE VALUATION",
  },
];

const placeholderUnits = [
  {
    id: "0402",
    unitId: "Unit 0402",
    tierLevel: "Garden Pavilion (L04)",
    typology: "2-Bed Courtyard Suite",
    bedBath: "2 Bed / 2 Bath",
    internalArea: "1,310 sq ft",
    terraceArea: "340 sq ft",
    orientation: "East (Garden)",
    price: 1620000,
    currency: "$",
    status: "Available",
    isAvailable: true,
  },
  {
    id: "1804",
    unitId: "Unit 1804",
    tierLevel: "Sky Residence (L18)",
    typology: "2-Bed Sky Suite",
    bedBath: "2 Bed / 2.5 Bath",
    internalArea: "1,420 sq ft",
    terraceArea: "210 sq ft",
    orientation: "South East",
    price: 1850000,
    currency: "$",
    status: "Available",
    isAvailable: true,
  },
  {
    id: "2503",
    unitId: "Unit 2503",
    tierLevel: "Sky Residence (L25)",
    typology: "3-Bed Terrace Residence",
    bedBath: "3 Bed / 3 Bath",
    internalArea: "2,150 sq ft",
    terraceArea: "380 sq ft",
    orientation: "South West",
    price: 2890000,
    currency: "$",
    status: "Reserved",
    isAvailable: false,
  },
  {
    id: "3201",
    unitId: "Unit 3201",
    tierLevel: "Sky Residence (L32)",
    typology: "3-Bed Corner Suite",
    bedBath: "3 Bed / 3.5 Bath",
    internalArea: "2,380 sq ft",
    terraceArea: "460 sq ft",
    orientation: "Panoramic Harbour",
    price: 3420000,
    currency: "$",
    status: "Available",
    isAvailable: true,
  },
  {
    id: "3902",
    unitId: "Unit 3902",
    tierLevel: "Penthouse Tier (L39)",
    typology: "3-Bed Lateral Penthouse",
    bedBath: "3 Bed / 3.5 Bath",
    internalArea: "3,120 sq ft",
    terraceArea: "650 sq ft",
    orientation: "North West",
    price: 4750000,
    currency: "$",
    status: "Pending Contract",
    isAvailable: false,
  },
  {
    id: "4202",
    unitId: "Unit 4202",
    tierLevel: "Signature Penthouse (L42-43)",
    typology: "4-Bed Duplex Sky Villa",
    bedBath: "4 Bed / 4.5 Bath",
    internalArea: "4,850 sq ft",
    terraceArea: "1,120 sq ft",
    orientation: "Harbour / Skyline 360°",
    price: 6400000,
    currency: "$",
    status: "Reserved",
    isAvailable: false,
  },
];

const placeholderDimensions = [
  { room: "Great Room & Dining", area: "48.2 m² / 518 sq ft" },
  { room: "Primary Bedroom Suite", area: "28.4 m² / 305 sq ft" },
  { room: "Ensuite & Dressing Suite", area: "14.6 m² / 157 sq ft" },
  { room: "Bedroom Two (Ensuite)", area: "19.8 m² / 213 sq ft" },
  { room: "Bedroom Three / Library", area: "16.2 m² / 174 sq ft" },
  { room: "Chef's Scullery & Pantry", area: "12.5 m² / 134 sq ft" },
  { room: "Cantilevered Sky Terrace", area: "42.7 m² / 460 sq ft" },
];

const placeholderAmenities = [
  {
    id: "amenity-1",
    tag: "Level 05 Wellness Sanctuary",
    title: "25m Heated Lap Pool & Thermal Spa",
    timing: "RESIDENTS ONLY • 06:00 - 23:00",
    description:
      "Carved from monolithic Vals quartzite with integrated magnesium flotation pools, cedar Finnish saunas, cold plunge cisterns, and private restorative treatment rooms.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1w-QRQ-s7hUlrcc0u1cKowps4MpMe3CoXKsev2OMhhxxFFXMcbOZVeNVU23Ls-GIZ5wDnsG4N56tV6sMJ15jAv3SzdLHKXeuESkNuzK72uCTj4vVvREzgjoefkqBffQLuI7wzQZy2aEef187J-B32DIuSKutIoPjB1c3cuHdQPDi5azO5eK3yMczIKQaYLXuFoP5fuElcoPHuJO82cdpJRh7K4LydBQ4CIHCz9zfcldAGQeCX08HL",
    isFeatured: true,
  },
  {
    id: "amenity-2",
    tag: "Level 24 Sky Lounge",
    title: "Sky Dining & Sommelier Room",
    description:
      "Full commercial catering prep kitchen with private sommelier temperature-controlled lockers and private terrace dining for up to twenty seated guests.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWc-9e1eN6KMlyJjKrWhQjO3PqiwWID3IcN4Dd77O8Nmc9Z88ssw3L1LZypWN6up3Of1vM7LTYafQHsEiQ0jnm0X6CAlzgdRyb6pqAUmdoekJEeGjOr4HuwJuTq5IZ2orDkcxsVlZ1GUGPJstM6GdUzJUisH915HzP9uzoFiofD-XPfw_lSFfPs7axag2KxYSJLQaIxE5YiODIvc4hpW9pAOPbg4GupxWBjFxds63TubRJDTpq9Wfg",
  },
  {
    id: "amenity-3",
    tag: "Level 03 Quiet Wing",
    title: "Biophilic Coworking Suites",
    icon: "menu_book",
    description:
      "Acoustically isolated executive meeting suites, high-speed fiber trunks, a curated architectural design library, and tranquil private zoom alcoves facing the courtyard trees.",
    meta: "RESERVABLE VIA RESIDENT APP",
  },
  {
    id: "amenity-4",
    tag: "Podium Lower Concourse",
    title: "Private Screening Cinema",
    icon: "theaters",
    description:
      "Sixteen-seat Dolby Atmos preview screening theater with custom mohair reclining chaises, 4K digital projection, and dedicated champagne bar service staging.",
    meta: "PRIVATE BOOKING SANCTIONED",
  },
  {
    id: "amenity-5",
    tag: "Porte-Cochère & Basement",
    title: "Automated Parking & Valet",
    icon: "local_parking",
    description:
      "German-engineered contactless robotic vehicle retrieval bays, rapid EV hyper-chargers for every allocated bay, and 24/7 uniformed concierge parcel handling.",
    meta: "SUBTERRANEAN 3-TIER MATRIX",
  },
];

const placeholderMilestones = [
  {
    stage: "STAGE 01",
    title: "Groundbreaking",
    description:
      "Subterranean diaphragm wall, 4-tier basement excavation, and foundational bedrock pylon anchoring.",
    date: "Q2 2023",
    status: "COMPLETE",
  },
  {
    stage: "STAGE 02",
    title: "Core Topping Off",
    description:
      "Completion of 48 levels structural reinforced concrete skeleton and sky penthouse floor slabs.",
    date: "Q1 2025",
    status: "COMPLETE",
  },
  {
    stage: "STAGE 03",
    title: "Facade Enclosure",
    description:
      "Triple-glazed high-acoustic unitized curtain walls, limestone cladding, and bronze fluted architectural panels.",
    date: "Q3 2025 (CURRENT)",
    status: "IN PROGRESS",
    isCurrent: true,
  },
  {
    stage: "STAGE 04",
    title: "Interior Fit-Out",
    description:
      "Stone masonry installation, custom Italian joinery, private spas, and integrated smart-home commissioning.",
    date: "Q1 2026",
    status: "SCHEDULED",
  },
  {
    stage: "STAGE 05",
    title: "Key Handover",
    description:
      "Architectural inspection approvals, resident concierge induction, and settlement commencement.",
    date: "Q4 2026",
    status: "FINAL GOAL",
  },
];

const placeholderSalesDirectors = [
  {
    name: "Victoria Sterling",
    role: "HEAD OF RESIDENTIAL SALES",
    bio: "Specializing in prime off-market penthouses and institutional family office acquisitions across Europe and the Asia-Pacific.",
    email: "V.STERLING@AETHERIA.COM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIKp4d8cO_XpvpnSB2wW33Mt2dePkM6jMc7HQKfHcCkWPrIRcNSYuJmqV4b59YZXzTE2GDkQQrCDnD_I0pyfZCGX82SZeu5yRWUDlEm4d5Mh6aa3VF_6kH8LEtdgoudzgJzk7icfGB2uROXspKfy6eY3QQdGsdkzj3PpGiXMFLl6QzeO7AKo4crCq0XXGXUcu-J0i4dEVEH2T7KO5uRoIn_XPrNBrtS-LR3GygNhz9rzI5zegUCu3Z",
  },
  {
    name: "Julian Vance-Moreau",
    role: "PARTNER & CLIENT ADVISOR",
    bio: "Advising on structural customization, architectural joins, and bespoke private interior configurations for signature suites.",
    email: "J.VANCE@AETHERIA.COM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgnYYzxbSv02PAPJWX2cfs4LOesW3zxj0LYrPP8xfr2Q2aWdB3WWN1dFp-eFEHXs_05-sgFmCv0hvewpg5XWHWqPsbISABl-_3j9LPUi2xcHkj2IkE5Uft89sNaXasexa6pfMn-5M-5sOKL69eaogM6Q198BjjPsF_uFFaWfXsTzU-mrRVVVAWLfSl0HWVaJjzY4fNh5RQAz9HD2fXAPW0NObfUbfS2_wTSW6cJf5PSPGcsIned_m5",
  },
];

const placeholderData: Record<string, unknown> = {
  companyName: "AETHERIA RESIDENCES",
  projectNumber: "PROJECT NO. 06-ATX",
  developmentCategory: "PRIME RESIDENTIAL MONOGRAPH",
  architectPartner: "STUDIO KUMA & PARTNERS ARCHITECTURE",
  developmentTitle: "The Verdant Horizon &",
  developmentSubtitle: "Lumina Tower",
  developmentDescription:
    "A dual-tower architectural dialogue sculptured in limestone, thermal fluted bronze, and biophilic cascading sky gardens. Rising 48 levels over the harbor promontory.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAXpQwzIwvM4daSYTF8bRaf_5jfmvT7DjOqhLRfg5eg-3PswRaAvk4x2NQumB-cQK_6sk2i3vCPzxqIo15rra3etL6Z0QQVKo4fRWgl6SIvnttIMvJMulPjpMsU8DJisObJxNWN_X20pcmES75e3qv-_wGG6EVW7d6S8MII3w71tsKfeVICI7U4-EBY5jDdBGvpDTJH4GJHLjcYDkvia4lRlD24bZG74boaVTIw_cJMMxXqotm9WHj9",
  targetOccupancy: "Q4 2026",
  elevationScale: "48 Levels",
  residencesCount: "142 Suites",
  designArchitect: "Studio Kuma",
  masterplanImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDWfUvJNO_4sBeWwWN8Eju90P5hQu9XEw34auul7FSszXiULRzo8LcHzfGCXzRtd-UiClD6XW3YVeTztHBUPGXMgtcV8qbawFbC8DIdwqAjZ85-_L9IfLybpNfLowXZAUKdwra_X4CeKzfGAw6MnN4wpAharsG5UdjhpUa8MMft45A_GkK6MTR4DZWwemN3N6xj_P336czYQNlTG80V2hjJXyctxO569XAbiXkqq-UK_LhDDcDdLXiT",
  masterplanStrata: placeholderStrata,
  featuredUnits: placeholderFeaturedUnits,
  units: placeholderUnits,
  activePlanImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHNYyePP8K_xX30uTsBm4681JIfUg52J6lqzH_zZIvUuBfRbJX_JAkjq4r-4WWNuLs_yZSAUMXDK4IMW3zhn5__XTDYuGPnYILxlKPWwpye8ZqCzLJGrAvLmNNAxe8A4sJsHjjzygOdBrbebsruneLcIazpNA1IPl2Pr-fvUnSaGKUOyJ4MciMY-hwxhS4LLwSe-8VZzUO5gcUECc45yS9t25DFd62iiMZ2DsVcNaFwVq4eRQepls",
  activePlanTitle: "Residence Typology: Unit 3201",
  activePlanDimensions: placeholderDimensions,
  activePlanFinishes:
    "Honéd Grigio Alpi limestone flooring, custom fluted European white oak joinery, Poliform architectural kitchen cabinetry, and Gaggenau 400-Series integrated appliances.",
  amenities: placeholderAmenities,
  timelineMilestones: placeholderMilestones,
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAt_ZXGQYqX7dtVuQj0vcXeMxjnczARrdh0oqPKKDHTO4aUExeolwTiPW7-fSdxOSUVK_J4a0-ZH-rJ_51dZ6eDDjPrQtpOEjxbmhgyw05TKRjbdW86QZOulbiGs0xNeKLPKgDnbrlKquam27jlNxtrk6lrUXe0Y-ix4N5qQfB9YIRA5kzvHTtTGXr02hV3TSoR-l0Q117z2fM654c4Lvc5_j08LwB1VpDglwbjk_iLl1aXIfJ6R0Wy",
  districtTitle: "The Prime Harbor Promontory",
  districtDescription:
    "Positioned at the convergence of heritage botanical gardens, premier cultural galleries, and premier waterfront transit connections.",
  galleryTitle: "The Aetheria Sales Pavilion",
  galleryDescription:
    "Featuring a 1:50 architectural scale model, 1:1 tactile mockups of the master kitchen and bath suites, material tactile libraries, and full panoramic view simulators.",
  galleryAddress: "420 Promenade Boulevard, North Concourse, Suite 1200",
  galleryHours:
    "Monday — Saturday: 10:00 - 18:00 (By Private Appointment Only)",
  galleryContact: "+1 (800) 428-3844 • gallery@aetheria-residences.com",
  salesDirectors: placeholderSalesDirectors,
  vipRegistrationTitle: "Register VIP Interest",
  vipRegistrationDescription:
    "Prospective purchasers registered through the developer portal receive priority access to unreleased penthouse allocations, architectural preview folios, and private gallery scheduling prior to public release.",
  developmentCode: "REF-AETH-2025-06",
};

function normalizeTemplateData(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return data && Object.keys(data).length > 0
    ? { ...placeholderData, ...data }
    : placeholderData;
}

const lucideIconMap = {
  add: Plus,
  remove: Minus,
  explore: Compass,
  download: Download,
  print: Printer,
  location_on: MapPin,
  schedule: CalendarDays,
  call: Phone,
  park: Trees,
  museum: Landmark,
  restaurant: UtensilsCrossed,
  arrow_forward: ArrowRight,
  check_circle: CheckCircle2,
  menu_book: BookOpen,
  theaters: Clapperboard,
  local_parking: ParkingCircle,
  navigation: Navigation,
  map: Map,
  tune: SlidersHorizontal,
  default: Compass,
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

export default function RealEstate06({
  resolvedData,
}: RealEstate06Props) {
  const data = normalizeTemplateData(resolvedData);

  const strata = (
    Array.isArray(data.masterplanStrata) && data.masterplanStrata.length > 0
      ? data.masterplanStrata
      : placeholderStrata
  ) as Record<string, any>[];

  const featuredUnits = (
    Array.isArray(data.featuredUnits) && data.featuredUnits.length > 0
      ? data.featuredUnits
      : placeholderFeaturedUnits
  ) as Record<string, any>[];

  const units = (
    Array.isArray(data.units) && data.units.length > 0
      ? data.units
      : placeholderUnits
  ) as Record<string, any>[];

  const dimensions = (
    Array.isArray(data.activePlanDimensions) &&
    data.activePlanDimensions.length > 0
      ? data.activePlanDimensions
      : placeholderDimensions
  ) as Record<string, any>[];

  const amenities = (
    Array.isArray(data.amenities) && data.amenities.length > 0
      ? data.amenities
      : placeholderAmenities
  ) as Record<string, any>[];

  const milestones = (
    Array.isArray(data.timelineMilestones) && data.timelineMilestones.length > 0
      ? data.timelineMilestones
      : placeholderMilestones
  ) as Record<string, any>[];

  const salesDirectors = (
    Array.isArray(data.salesDirectors) && data.salesDirectors.length > 0
      ? data.salesDirectors
      : placeholderSalesDirectors
  ) as Record<string, any>[];

  const heroImage = displayValue(
    data.heroImage,
    placeholderData.heroImage as string,
  );
  const masterplanImage = displayValue(
    data.masterplanImage,
    placeholderData.masterplanImage as string,
  );
  const activePlanImage = displayValue(
    data.activePlanImage,
    placeholderData.activePlanImage as string,
  );
  const mapImage = displayValue(
    data.mapImage,
    placeholderData.mapImage as string,
  );

  return (
    <div className="bg-[#faf9f5] text-[#1b1c1a] antialiased font-['Manrope',sans-serif] text-[0.9375rem] leading-[1.6rem] selection:bg-[#725b35] selection:text-white">
      {/* ================= TopNavBar ================= */}
      <header className="sticky top-0 z-50 bg-[#faf9f5] border-b border-[#c6c7c0]">
        <div className="flex justify-between items-center w-full px-5 md:px-12 max-w-[1440px] mx-auto h-20">
          <a
            className="text-[1.125rem] leading-[1.625rem] font-semibold uppercase tracking-widest text-[#1b1c1a] flex items-center gap-3"
            href="#overview"
          >
            <span className="w-2.5 h-2.5 bg-[#000000] inline-block" />
            <span>{displayValue(data.companyName, "AETHERIA RESIDENCES")}</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              className="text-[#000000] border-b border-[#725b35] pb-1 text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase hover:text-[#725b35] transition-colors duration-200"
              href="#overview"
            >
              Developments
            </a>
            <a
              className="text-[#454742] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase hover:text-[#725b35] transition-colors duration-200"
              href="#masterplan"
            >
              Masterplan
            </a>
            <a
              className="text-[#454742] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase hover:text-[#725b35] transition-colors duration-200"
              href="#residences"
            >
              Residences &amp; Units
            </a>
            <a
              className="text-[#454742] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase hover:text-[#725b35] transition-colors duration-200"
              href="#amenities"
            >
              Amenities
            </a>
            <a
              className="text-[#454742] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase hover:text-[#725b35] transition-colors duration-200"
              href="#location"
            >
              Location
            </a>
            <a
              className="text-[#454742] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase hover:text-[#725b35] transition-colors duration-200"
              href="#timeline"
            >
              Timeline
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              className="hidden sm:inline-block px-4 py-2 text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase text-[#000000] border border-[#767872] hover:bg-[#efeeea] transition-colors duration-150 ease-out"
              href="#gallery-sales"
            >
              Sales Gallery
            </a>
            <a
              className="px-5 py-2.5 text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase bg-[#000000] text-[#faf9f5] hover:bg-[#725b35] transition-colors duration-150 ease-out"
              href="#register"
            >
              Register Interest
            </a>
          </div>
        </div>
      </header>

      <main className="w-full">
        {/* ================= SECTION 1: HERO ================= */}
        <section
          className="relative w-full border-b border-[#c6c7c0] bg-[#faf9f5]"
          id="overview"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12 pt-12 pb-16">
            <div className="flex flex-wrap items-center justify-between border-b border-[#c6c7c0] pb-4 mb-8 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
              <div className="flex items-center gap-6">
                <span>
                  {displayValue(data.projectNumber, "PROJECT NO. 06-ATX")}
                </span>
                <span className="w-1 h-1 bg-[#767872] rounded-full" />
                <span>
                  {displayValue(
                    data.developmentCategory,
                    "PRIME RESIDENTIAL MONOGRAPH",
                  )}
                </span>
                <span className="w-1 h-1 bg-[#767872] rounded-full" />
                <span>
                  {displayValue(
                    data.architectPartner,
                    "STUDIO KUMA & PARTNERS ARCHITECTURE",
                  )}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <span className="inline-block w-2 h-2 rounded-full bg-[#725b35]" />
                <span className="text-[#1b1c1a] font-semibold">
                  PRE-COMPLETION INVENTORY AVAILABLE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 items-end">
              <div className="md:col-span-8">
                <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] block mb-3 uppercase">
                  Flagship Development
                </span>
                <h1 className="font-['EB_Garamond',serif] text-[2.75rem] md:text-[4.5rem] leading-[3rem] md:leading-[4.75rem] tracking-[-0.02em] font-normal text-[#1b1c1a] mb-4">
                  {displayValue(data.developmentTitle, "The Verdant Horizon &")}
                  <br />
                  <span className="italic font-normal">
                    {displayValue(data.developmentSubtitle, "Lumina Tower")}
                  </span>
                </h1>
              </div>
              <div className="md:col-span-4 pb-2">
                <p className="text-[1.125rem] leading-[1.875rem] text-[#454742] font-normal mb-6">
                  {displayValue(
                    data.developmentDescription,
                    "A dual-tower architectural dialogue sculptured in limestone, thermal fluted bronze, and biophilic cascading sky gardens. Rising 48 levels over the harbor promontory.",
                  )}
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    className="px-6 py-3 bg-[#000000] text-[#ffffff] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase hover:bg-[#725b35] transition-colors duration-200"
                    href="#residences"
                  >
                    Explore Inventory →
                  </a>
                  <a
                    className="px-6 py-3 border border-[#767872] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase text-[#1b1c1a] hover:bg-[#efeeea] transition-colors duration-200"
                    href="#masterplan"
                  >
                    View Masterplan
                  </a>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[21/9] max-h-[640px] overflow-hidden border border-[#c6c7c0] mb-12">
              <Image
                alt={displayValue(data.developmentTitle, "Elevation Overview")}
                className="object-cover"
                src={heroImage}
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                unoptimized
              />
              <div className="absolute bottom-6 left-6 bg-[#faf9f5]/90 backdrop-blur-sm border border-[#c6c7c0] px-5 py-3 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#1b1c1a] flex items-center gap-6">
                <span>EXTERIOR ELEVATION — SOUTH EAST ASPECT</span>
                <span className="text-[#767872]">
                  SCALE 1:500 AT DATUM LEVEL
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#c6c7c0] border-y border-[#c6c7c0] py-6">
              <div className="px-4 py-2">
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block mb-1">
                  TARGET OCCUPANCY
                </span>
                <p className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] text-[#1b1c1a] font-normal">
                  {displayValue(data.targetOccupancy, "Q4 2026")}
                </p>
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#725b35]">
                  STRUCTURAL TOPPING REACHED
                </span>
              </div>
              <div className="px-4 py-2">
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block mb-1">
                  ELEVATION SCALE
                </span>
                <p className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] text-[#1b1c1a] font-normal">
                  {displayValue(data.elevationScale, "48 Levels")}
                </p>
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#454742]">
                  174 METERS VERTICAL
                </span>
              </div>
              <div className="px-4 py-2">
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block mb-1">
                  PRIVATE RESIDENCES
                </span>
                <p className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] text-[#1b1c1a] font-normal">
                  {displayValue(data.residencesCount, "142 Suites")}
                </p>
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#454742]">
                  LIMITED 3 TIERS ONLY
                </span>
              </div>
              <div className="px-4 py-2">
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block mb-1">
                  DESIGN ARCHITECT
                </span>
                <p className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] text-[#1b1c1a] font-normal">
                  {displayValue(data.designArchitect, "Studio Kuma")}
                </p>
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#454742]">
                  &amp; PARTNERS TOKYO / LONDON
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: MASTERPLAN ================= */}
        <section
          className="w-full border-b border-[#c6c7c0] bg-[#f5f4ef] py-12"
          id="masterplan"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#c6c7c0]">
              <div>
                <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase block mb-2">
                  Architectural Anatomy
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[3rem] leading-[3.25rem] tracking-[-0.015em] font-normal text-[#1b1c1a]">
                  Integrated Masterplan Schematic
                </h2>
              </div>
              <p className="text-[0.9375rem] leading-[1.6rem] text-[#454742] mt-4 md:mt-0">
                A harmonious stratified vertical ecosystem. Select schematic
                strata below to inspect specialized operational zones, amenity
                podiums, and structural cores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 relative bg-[#faf9f5] border border-[#c6c7c0] p-6 technical-grid overflow-hidden">
                <div className="flex justify-between items-center mb-4 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
                  <span>SCHEMATIC ELEVATION BAY A-09</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#725b35]" /> LIVE
                    SECTOR HIGHLIGHT: LEVELS 38–48
                  </span>
                </div>

                <div className="relative w-full aspect-[16/10] bg-[#efeeea] overflow-hidden border border-[#c6c7c0]">
                  <Image
                    alt="Sectional diagram"
                    className="object-cover"
                    src={masterplanImage}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    unoptimized
                  />
                  <div className="absolute top-[14%] right-[22%] bg-[#faf9f5]/95 border border-[#000000] px-3 py-1 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold shadow-sm">
                    <span className="text-[#000000] font-bold">L42-48:</span>{" "}
                    SIGNATURE PENTHOUSES
                  </div>
                  <div className="absolute top-[40%] left-[30%] bg-[#faf9f5]/95 border border-[#725b35] px-3 py-1 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold shadow-sm">
                    <span className="text-[#725b35] font-bold">L24:</span> SKY
                    CONSERVATORY &amp; SPA
                  </div>
                  <div className="absolute bottom-[20%] right-[32%] bg-[#faf9f5]/95 border border-[#767872] px-3 py-1 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold shadow-sm">
                    <span className="text-[#454742]">L01-04:</span> PODIUM &amp;
                    GARDEN PAVILIONS
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold">
                  <div className="flex items-center space-x-2 text-[#767872]">
                    <Tv className="small-icon"/>
                    <span>  
                      ISO 128 TECHNICAL PROJECTION — ELEVATION EAST-FACING
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      className="w-8 h-8 bg-[#faf9f5] border border-[#c6c7c0] flex items-center justify-center hover:bg-[#efeeea] transition-colors text-[#1b1c1a]"
                      title="Zoom In"
                    >
                      <Icon
                        name="add"
                        className="text-current"
                        size={18}
                        strokeWidth={2.2}
                      />
                    </button>
                    <button
                      className="w-8 h-8 bg-[#faf9f5] border border-[#c6c7c0] flex items-center justify-center hover:bg-[#efeeea] transition-colors text-[#1b1c1a]"
                      title="Zoom Out"
                    >
                      <Icon
                        name="remove"
                        className="text-current"
                        size={18}
                        strokeWidth={2.2}
                      />
                    </button>
                    <button
                      className="w-8 h-8 bg-[#faf9f5] border border-[#c6c7c0] flex items-center justify-center hover:bg-[#efeeea] transition-colors text-[#1b1c1a]"
                      title="Reset View"
                    >
                      <Icon
                        name="explore"
                        className="text-current"
                        size={18}
                        strokeWidth={2.2}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col space-y-3">
                {strata.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`p-5 bg-[#faf9f5] border transition-all ${
                      tier.isPrimary
                        ? "border-[#000000]"
                        : "border-[#c6c7c0] hover:border-[#725b35]"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35]">
                        {displayValue(tier.levels)}
                      </span>
                      <span className="px-2 py-0.5 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold bg-[#efeeea] border border-[#c6c7c0]">
                        {displayValue(tier.tier)}
                      </span>
                    </div>
                    <h3 className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] font-medium text-[#1b1c1a] mb-2">
                      {displayValue(tier.title)}
                    </h3>
                    <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742] mb-3">
                      {displayValue(tier.description)}
                    </p>
                    <div className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] flex items-center gap-4">
                      <span>{displayValue(tier.unitsSummary)}</span>
                      <span>•</span>
                      <span>{displayValue(tier.liftSummary)}</span>
                    </div>
                  </div>
                ))}

                <div className="p-4 bg-[#efeeea] border border-[#c6c7c0] flex items-center justify-between text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold">
                  <span className="text-[#1b1c1a] uppercase">
                    SUBTERRANEAN BASEMENT: AUTOMATED PARKING &amp; PRIVATE
                    CELLARS
                  </span>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: RESIDENCES & INVENTORY ================= */}
        <section
          className="w-full border-b border-[#c6c7c0] bg-[#faf9f5] py-12"
          id="residences"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#c6c7c0]">
              <div>
                <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase block mb-2">
                  Unit Inventory &amp; Availability
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[3rem] leading-[3.25rem] tracking-[-0.015em] font-normal text-[#1b1c1a]">
                  Curated Residence Schedule
                </h2>
              </div>

              <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
                <div className="inline-flex border border-[#c6c7c0] p-0.5 bg-[#efeeea]">
                  <button className="px-4 py-1.5 text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase bg-[#000000] text-[#ffffff]">
                    All Tiers
                  </button>
                  <button className="px-4 py-1.5 text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase text-[#1b1c1a] hover:text-[#000000]">
                    Garden
                  </button>
                  <button className="px-4 py-1.5 text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase text-[#1b1c1a] hover:text-[#000000]">
                    Sky Suites
                  </button>
                  <button className="px-4 py-1.5 text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase text-[#1b1c1a] hover:text-[#000000]">
                    Penthouses
                  </button>
                </div>
                <div className="inline-flex border border-[#c6c7c0] px-3 py-1.5 bg-[#faf9f5] text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold items-center gap-2">
                  <span className="text-[#767872]">UNIT SYSTEM:</span>
                  <span className="font-bold text-[#000000]">SQ FT</span>
                  <span className="text-[#c6c7c0]">|</span>
                  <span className="text-[#767872] hover:text-[#000000] cursor-pointer">
                    M²
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {featuredUnits.map((u, idx) => (
                <div
                  key={u.id || idx}
                  className={`bg-[#faf9f5] p-6 transition-all ${
                    u.isFlagship
                      ? "border-2 border-[#000000] relative"
                      : "border border-[#c6c7c0] hover:border-[#1b1c1a]"
                  }`}
                >
                  {u.isFlagship && (
                    <div className="absolute -top-3 right-6 bg-[#000000] text-[#ffffff] px-3 py-0.5 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold uppercase">
                      Flagship Residence
                    </div>
                  )}
                  <div className="flex justify-between items-center pb-4 border-b border-[#c6c7c0] mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${u.status === "Available" ? "bg-[#725b35]" : "bg-[#767872]"}`}
                      />
                      <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-semibold text-[#1b1c1a] uppercase">
                        {displayValue(u.unitNumber)}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold bg-[#efeeea] border border-[#c6c7c0] text-[#1b1c1a]">
                      {displayValue(u.status)}
                    </span>
                  </div>
                  <p className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#725b35] uppercase mb-1">
                    {displayValue(u.tier)}
                  </p>
                  <h3 className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] font-medium text-[#1b1c1a] mb-4">
                    {displayValue(u.title)}
                  </h3>
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#c6c7c0] mb-4 text-center">
                    <div>
                      <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block">
                        BEDS
                      </span>
                      <span className="font-['EB_Garamond',serif] text-[1.25rem] text-[#1b1c1a]">
                        {displayValue(u.beds)}
                      </span>
                    </div>
                    <div className="border-x border-[#c6c7c0]">
                      <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block">
                        BATHS
                      </span>
                      <span className="font-['EB_Garamond',serif] text-[1.25rem] text-[#1b1c1a]">
                        {displayValue(u.baths)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block">
                        ASPECT
                      </span>
                      <span className="font-['EB_Garamond',serif] text-[1.25rem] text-[#1b1c1a]">
                        {displayValue(u.aspect)}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-6 text-[0.8125rem] leading-[1.375rem]">
                    <div className="flex justify-between text-[#454742]">
                      <span>Internal Area:</span>
                      <span className="font-medium text-[#1b1c1a]">
                        {displayValue(u.internalArea)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#454742]">
                      <span>External Terrace:</span>
                      <span className="font-medium text-[#1b1c1a]">
                        {displayValue(u.terraceArea)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#454742]">
                      <span>Total Spatial Footprint:</span>
                      <span className="font-semibold text-[#000000]">
                        {displayValue(u.totalArea)}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#c6c7c0] flex items-end justify-between">
                    <div>
                      <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block">
                        {displayValue(u.pricePrefix, "PRICE")}
                      </span>
                      <span className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] text-[#1b1c1a] font-semibold">
                        {formatPrice(u.price, displayValue(u.currency, "$"))}
                      </span>
                    </div>
                    <a
                      className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase text-[#725b35] hover:text-[#000000] flex items-center gap-1 border-b border-[#725b35] pb-0.5"
                      href="#floorplan-viewer"
                    >
                      Plan Detail →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Matrix Table */}
            <div className="border border-[#c6c7c0] bg-[#faf9f5]">
              <div className="p-4 bg-[#efeeea] border-b border-[#c6c7c0] flex items-center justify-between">
                <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] uppercase font-bold text-[#1b1c1a]">
                  Complete Architectural Unit Inventory Matrix
                </span>
                <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
                  UPDATED HOURLY FROM SALES REPOSITORY
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#c6c7c0] text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] bg-[#f5f4ef]">
                      <th className="py-3 px-4 font-semibold">UNIT ID</th>
                      <th className="py-3 px-4 font-semibold">
                        TIER &amp; LEVEL
                      </th>
                      <th className="py-3 px-4 font-semibold">TYPOLOGY</th>
                      <th className="py-3 px-4 font-semibold">BED / BATH</th>
                      <th className="py-3 px-4 font-semibold">INTERNAL AREA</th>
                      <th className="py-3 px-4 font-semibold">TERRACE AREA</th>
                      <th className="py-3 px-4 font-semibold">ORIENTATION</th>
                      <th className="py-3 px-4 font-semibold">PRICE GUIDE</th>
                      <th className="py-3 px-4 font-semibold">STATUS</th>
                      <th className="py-3 px-4 font-semibold text-right">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#c6c7c0] text-[0.8125rem] leading-[1.375rem] text-[#1b1c1a]">
                    {units.map((row, rIdx) => (
                      <tr
                        key={row.id || rIdx}
                        className="hover:bg-[#f5f4ef] transition-colors"
                      >
                        <td className="py-3 px-4 font-semibold text-[#000000]">
                          {displayValue(row.unitId)}
                        </td>
                        <td className="py-3 px-4 text-[#454742]">
                          {displayValue(row.tierLevel)}
                        </td>
                        <td className="py-3 px-4">
                          {displayValue(row.typology)}
                        </td>
                        <td className="py-3 px-4">
                          {displayValue(row.bedBath)}
                        </td>
                        <td className="py-3 px-4">
                          {displayValue(row.internalArea)}
                        </td>
                        <td className="py-3 px-4">
                          {displayValue(row.terraceArea)}
                        </td>
                        <td className="py-3 px-4">
                          {displayValue(row.orientation)}
                        </td>
                        <td className="py-3 px-4 font-semibold">
                          {formatPrice(
                            row.price,
                            displayValue(row.currency, "$"),
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold border border-[#c6c7c0] bg-[#faf9f5]">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${row.isAvailable ? "bg-[#725b35]" : "bg-[#767872]"}`}
                            />
                            {displayValue(row.status)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <a
                            className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#725b35] hover:underline uppercase"
                            href="#floorplan-viewer"
                          >
                            View CAD
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: FLOOR PLAN VIEWER ================= */}
        <section
          className="w-full border-b border-[#c6c7c0] bg-[#f5f4ef] py-12"
          id="floorplan-viewer"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#c6c7c0]">
              <div>
                <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase block mb-2">
                  Technical Documents &amp; CAD
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[3rem] leading-[3.25rem] tracking-[-0.015em] font-normal text-[#1b1c1a]">
                  {displayValue(
                    data.activePlanTitle,
                    "Residence Typology: Unit 3201",
                  )}
                </h2>
              </div>
              <div className="flex items-center space-x-3 mt-4 md:mt-0">
                <button
                  className="px-4 py-2 border border-[#767872] bg-[#faf9f5] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase text-[#1b1c1a] flex items-center gap-2 hover:bg-[#efeeea] transition-colors"
                  type="button"
                >
                  <Icon
                    name="download"
                    className="text-current"
                    size={18}
                    strokeWidth={2.2}
                  />
                  Download Architectural Plan PDF
                </button>
                <button
                  className="px-4 py-2 bg-[#000000] text-[#ffffff] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase flex items-center gap-2 hover:bg-[#725b35] transition-colors"
                  type="button"
                >
                  <Icon
                    name="print"
                    className="text-current"
                    size={18}
                    strokeWidth={2.2}
                  />
                  Print Specification Sheet
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-[#faf9f5] border border-[#c6c7c0] p-6 relative technical-grid">
                <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#c6c7c0] text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
                  <span>PLAN DRAWING: DWG-REF-3201-REV4</span>
                  <span>DIMENSIONS: MM / METRIC EQUIVALENT NOTED</span>
                  <span>NORTH ASPECT: ↑ 02° EAST</span>
                </div>

                <div className="relative w-full aspect-[4/3] bg-[#ffffff] border border-[#c6c7c0] p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    alt="Floor plan CAD"
                    className="object-contain"
                    src={activePlanImage}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    unoptimized
                  />
                  <div className="absolute top-4 left-6 bg-[#faf9f5]/90 border border-[#c6c7c0] px-3 py-1.5 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#1b1c1a]">
                    PRIMARY SUITE: 5,400mm × 4,200mm
                  </div>
                  <div className="absolute bottom-4 right-6 bg-[#faf9f5]/90 border border-[#c6c7c0] px-3 py-1.5 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#1b1c1a]">
                    GREAT ROOM &amp; LOGGIA: 11,200mm × 6,800mm
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#c6c7c0] flex items-center justify-between text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-[#1b1c1a]">
                      SCALE: 1:100 AT A3
                    </span>
                    <span>CEILING HEIGHT: 3.10M CLEAR FINISH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="navigation"
                      className="text-current"
                      size={16}
                      strokeWidth={2.2}
                    />
                    <span>TRUE SOLAR SOUTH-EAST FACING</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-[#faf9f5] border border-[#c6c7c0] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase block mb-1">
                    Room Dimensions Schedule
                  </span>
                  <h3 className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] font-medium text-[#1b1c1a] mb-6">
                    Spatial Breakdown
                  </h3>

                  <div className="space-y-4 text-[0.8125rem] leading-[1.375rem] border-b border-[#c6c7c0] pb-6 mb-6">
                    {dimensions.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex justify-between items-center py-1.5 border-b border-[#efeeea]"
                      >
                        <span className="text-[#454742] font-medium">
                          {displayValue(d.room)}
                        </span>
                        <span className="text-[#1b1c1a] font-semibold">
                          {displayValue(d.area)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {Boolean(data.activePlanFinishes) && (
                    <div className="space-y-2 mb-6">
                      <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase text-[#767872] block">
                        Selected Finishes Specification
                      </span>
                      <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742]">
                        {displayValue(data.activePlanFinishes)}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#c6c7c0]">
                  <a
                    className="w-full block text-center py-3 bg-[#000000] text-[#ffffff] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase hover:bg-[#725b35] transition-colors"
                    href="#register"
                  >
                    Inquire on Unit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: AMENITIES ================= */}
        {amenities.length > 0 && (
          <section
            className="w-full border-b border-[#c6c7c0] bg-[#faf9f5] py-12"
            id="amenities"
          >
            <div className="max-w-[1440px] mx-auto px-5 md:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#c6c7c0]">
                <div>
                  <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase tracking-widest block mb-2">
                    Curated Private Facilities
                  </span>
                  <h2 className="font-['EB_Garamond',serif] text-[3rem] leading-[3.25rem] tracking-[-0.015em] font-normal text-[#1b1c1a]">
                    Architectural Amenities
                  </h2>
                </div>
                <p className="text-[0.9375rem] leading-[1.6rem] text-[#454742] mt-4 md:mt-0">
                  Over 3,800 square meters of dedicated private facilities
                  crafted as natural extensions of each individual residence,
                  centered on vitality, contemplation, and discreet hospitality.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {amenities.map((a, aIdx) => {
                  const isHeroCard = Boolean(a.isFeatured);
                  const isImageCard = Boolean(a.imageUrl) && !isHeroCard;

                  if (isHeroCard) {
                    return (
                      <div
                        key={a.id || aIdx}
                        className="md:col-span-8 bg-[#f5f4ef] border border-[#c6c7c0] overflow-hidden group"
                      >
                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                          <Image
                            alt={displayValue(a.title)}
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            src={String(a.imageUrl)}
                            fill
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            unoptimized
                          />
                          {Boolean(a.tag) && (
                            <div className="absolute top-4 left-4 bg-[#faf9f5]/90 border border-[#c6c7c0] px-3 py-1 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold uppercase text-[#1b1c1a]">
                              {displayValue(a.tag)}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] font-medium text-[#1b1c1a]">
                              {displayValue(a.title)}
                            </h3>
                            {Boolean(a.timing) && (
                              <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#725b35]">
                                {displayValue(a.timing)}
                              </span>
                            )}
                          </div>
                          <p className="text-[0.9375rem] leading-[1.6rem] text-[#454742]">
                            {displayValue(a.description)}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  if (isImageCard) {
                    return (
                      <div
                        key={a.id || aIdx}
                        className="md:col-span-4 bg-[#f5f4ef] border border-[#c6c7c0] overflow-hidden flex flex-col justify-between group"
                      >
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                          <Image
                            alt={displayValue(a.title)}
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            src={String(a.imageUrl)}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            unoptimized
                          />
                          {Boolean(a.tag) && (
                            <div className="absolute top-4 left-4 bg-[#faf9f5]/90 border border-[#c6c7c0] px-3 py-1 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold uppercase text-[#1b1c1a]">
                              {displayValue(a.tag)}
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] font-medium text-[#1b1c1a] mb-2">
                            {displayValue(a.title)}
                          </h3>
                          <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742]">
                            {displayValue(a.description)}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={a.id || aIdx}
                      className="md:col-span-4 bg-[#f5f4ef] border border-[#c6c7c0] p-6 flex flex-col justify-between"
                    >
                      <div>
                        {Boolean(a.icon) && (
                          <div className="w-10 h-10 border border-[#c6c7c0] bg-[#faf9f5] flex items-center justify-center mb-4 text-[#725b35]">
                            <Icon
                              name={displayValue(a.icon, "book_open")}
                              className="text-current"
                              size={20}
                              strokeWidth={2.2}
                            />
                          </div>
                        )}
                        {Boolean(a.tag) && (
                          <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase block mb-1">
                            {displayValue(a.tag)}
                          </span>
                        )}
                        <h3 className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] font-medium text-[#1b1c1a] mb-3">
                          {displayValue(a.title)}
                        </h3>
                        <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742]">
                          {displayValue(a.description)}
                        </p>
                      </div>
                      {Boolean(a.meta) && (
                        <div className="mt-6 pt-4 border-t border-[#c6c7c0] text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#725b35] flex items-center gap-1">
                          <span>{displayValue(a.meta)}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ================= SECTION 6: TIMELINE ================= */}
        {milestones.length > 0 && (
          <section
            className="w-full border-b border-[#c6c7c0] bg-[#f5f4ef] py-12"
            id="timeline"
          >
            <div className="max-w-[1440px] mx-auto px-5 md:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#c6c7c0]">
                <div>
                  <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase tracking-widest block mb-2">
                    Construction Chronology
                  </span>
                  <h2 className="font-['EB_Garamond',serif] text-[3rem] leading-[3.25rem] tracking-[-0.015em] font-normal text-[#1b1c1a]">
                    Development Timeline
                  </h2>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <span className="w-2.5 h-2.5 bg-[#725b35] rounded-full" />
                  <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#1b1c1a]">
                    STAGE 03 UNDERWAY — ON SCHEDULE
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-[#c6c7c0] bg-[#faf9f5] divide-y md:divide-y-0 md:divide-x divide-[#c6c7c0]">
                {milestones.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-6 relative ${
                      m.isCurrent
                        ? "bg-[#efeeea] border-t-2 md:border-t-0 md:border-l-2 border-[#000000]"
                        : m.status !== "COMPLETE"
                          ? "opacity-75"
                          : ""
                    }`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span
                        className={`text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold ${m.isCurrent ? "text-[#000000] font-bold" : "text-[#767872]"}`}
                      >
                        {displayValue(m.stage)}
                      </span>
                      <span
                        className={`text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold ${m.isCurrent ? "text-[#725b35] font-bold animate-pulse" : m.status === "COMPLETE" ? "text-[#725b35] flex items-center gap-1" : "text-[#767872]"}`}
                      >
                        {m.status === "COMPLETE" && (
                          <Icon
                            name="check_circle"
                            className="text-current"
                            size={14}
                            strokeWidth={2.2}
                          />
                        )}
                        {m.isCurrent ? "• IN PROGRESS" : displayValue(m.status)}
                      </span>
                    </div>
                    <h4 className="font-['EB_Garamond',serif] text-[1.75rem] leading-[2.125rem] font-medium text-[#1b1c1a] mb-2">
                      {displayValue(m.title)}
                    </h4>
                    <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742] mb-4">
                      {displayValue(m.description)}
                    </p>
                    <span
                      className={`text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold ${m.isCurrent ? "text-[#000000]" : "text-[#767872]"}`}
                    >
                      {displayValue(m.date)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= SECTION 7: LOCATION ================= */}
        <section
          className="w-full border-b border-[#c6c7c0] bg-[#faf9f5] py-12"
          id="location"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#c6c7c0]">
              <div>
                <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase tracking-widest block mb-2">
                  Environs &amp; Infrastructure
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[3rem] leading-[3.25rem] tracking-[-0.015em] font-normal text-[#1b1c1a]">
                  {displayValue(
                    data.districtTitle,
                    "The Prime Harbor Promontory",
                  )}
                </h2>
              </div>
              <p className="text-[0.9375rem] leading-[1.6rem] text-[#454742] mt-4 md:mt-0">
                {displayValue(
                  data.districtDescription,
                  "Positioned at the convergence of heritage botanical gardens, premier cultural galleries, and premier waterfront transit connections.",
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 bg-[#faf9f5] border border-[#c6c7c0] p-6 relative">
                <div className="flex justify-between items-center mb-4 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
                  <span>CARTOGRAPHIC DISTRICT PROJECTION</span>
                  <span>
                    GEO-REF: 37°48&apos;52&quot;S 144°58&apos;12&quot;E
                  </span>
                </div>

                <div className="relative w-full aspect-[16/10] bg-[#efeeea] overflow-hidden border border-[#c6c7c0]">
                  <Image
                    alt="Cartographic district projection map"
                    className="object-cover"
                    src={mapImage}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    unoptimized
                  />
                  <div className="absolute top-[48%] left-[45%] bg-[#000000] text-[#faf9f5] px-3 py-1.5 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#725b35]" />
                    <span>
                      {displayValue(data.companyName, "AETHERIA RESIDENCES")}{" "}
                      SITE
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
                  <span>AIRPORT CORRIDOR: 22 MINUTES VIA CHAUFFEUR DIRECT</span>
                  <span>PRIVATE HELIPAD ACCESS: 4 MINUTES WALK</span>
                </div>
              </div>

              <div className="md:col-span-4 space-y-4">
                <div className="p-5 bg-[#f5f4ef] border border-[#c6c7c0]">
                  <div className="flex items-center gap-2 mb-2 text-[#725b35]">
                    <Icon
                      name="park"
                      className="text-current"
                      size={18}
                      strokeWidth={2.2}
                    />
                    <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-bold uppercase">
                      Parks &amp; Waterfront
                    </span>
                  </div>
                  <ul className="space-y-2 text-[0.8125rem] leading-[1.375rem] text-[#454742]">
                    <li className="flex justify-between">
                      <span>Royal Botanical Waterfront Reserve</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        2 min walk
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Harbor Promontory Boardwalk</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        Direct access
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Observatory Hill Terraces</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        6 min walk
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-[#f5f4ef] border border-[#c6c7c0]">
                  <div className="flex items-center gap-2 mb-2 text-[#725b35]">
                    <Icon
                      name="museum"
                      className="text-current"
                      size={18}
                      strokeWidth={2.2}
                    />
                    <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-bold uppercase">
                      Arts &amp; Culture
                    </span>
                  </div>
                  <ul className="space-y-2 text-[0.8125rem] leading-[1.375rem] text-[#454742]">
                    <li className="flex justify-between">
                      <span>Museum of Contemporary Architecture</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        4 min walk
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Symphony Opera Pavilion</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        8 min walk
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Kuma Sculpture Gardens</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        5 min walk
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-[#f5f4ef] border border-[#c6c7c0]">
                  <div className="flex items-center gap-2 mb-2 text-[#725b35]">
                    <Icon
                      name="restaurant"
                      className="text-current"
                      size={18}
                      strokeWidth={2.2}
                    />
                    <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-bold uppercase">
                      Fine Dining &amp; Lifestyle
                    </span>
                  </div>
                  <ul className="space-y-2 text-[0.8125rem] leading-[1.375rem] text-[#454742]">
                    <li className="flex justify-between">
                      <span>L&apos;Aura Three-Star Michelin</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        3 min walk
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>The Yacht Squadron Private Marina</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        7 min walk
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Montague Private Members Club</span>
                      <span className="font-semibold text-[#1b1c1a]">
                        5 min walk
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: SALES DIRECTORS ================= */}
        <section
          className="w-full border-b border-[#c6c7c0] bg-[#f5f4ef] py-12"
          id="gallery-sales"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#c6c7c0]">
              <div>
                <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase tracking-widest block mb-2">
                  Development Advisory
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[3rem] leading-[3.25rem] tracking-[-0.015em] font-normal text-[#1b1c1a]">
                  Sales Directors &amp; Gallery
                </h2>
              </div>
              <p className="text-[0.9375rem] leading-[1.6rem] text-[#454742] mt-4 md:mt-0">
                Our private development advisory team offers discreet portfolio
                representation, bespoke structural customization briefings, and
                scale model previews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              <div className="md:col-span-6 bg-[#faf9f5] border border-[#c6c7c0] p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase block mb-2">
                    PHYSICAL DISCOVERY SUITE
                  </span>
                  <h3 className="font-['EB_Garamond',serif] text-[2.25rem] leading-[2.5rem] font-normal text-[#1b1c1a] mb-4">
                    {displayValue(
                      data.galleryTitle,
                      "The Aetheria Sales Pavilion",
                    )}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.6rem] text-[#454742] mb-6">
                    {displayValue(
                      data.galleryDescription,
                      "Featuring a 1:50 architectural scale model, 1:1 tactile mockups of the master kitchen and bath suites, material tactile libraries, and full panoramic view simulators.",
                    )}
                  </p>
                  <div className="space-y-3 text-[0.8125rem] leading-[1.375rem] text-[#1b1c1a] mb-8">
                    <div className="flex items-start gap-3">
                      <Icon
                        name="location_on"
                        className="text-[#725b35]"
                        size={20}
                        strokeWidth={2.2}
                      />
                      <span>
                        {displayValue(
                          data.galleryAddress,
                          "420 Promenade Boulevard, North Concourse, Suite 1200",
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon
                        name="schedule"
                        className="text-[#725b35]"
                        size={20}
                        strokeWidth={2.2}
                      />
                      <span>
                        {displayValue(
                          data.galleryHours,
                          "Monday — Saturday: 10:00 - 18:00 (By Private Appointment Only)",
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon
                        name="call"
                        className="text-[#725b35]"
                        size={20}
                        strokeWidth={2.2}
                      />
                      <span>
                        {displayValue(
                          data.galleryContact,
                          "+1 (800) 428-3844 • gallery@aetheria-residences.com",
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#c6c7c0] pt-6">
                  <a
                    className="inline-block px-6 py-3 bg-[#000000] text-[#ffffff] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase tracking-wider hover:bg-[#725b35] transition-colors"
                    href="#register"
                  >
                    Book Private Viewing Appointment →
                  </a>
                </div>
              </div>

              <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {salesDirectors.map((dir, dIdx) => (
                  <div
                    key={dIdx}
                    className="bg-[#faf9f5] border border-[#c6c7c0] p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full aspect-[4/5] bg-[#efeeea] overflow-hidden border border-[#c6c7c0] mb-4 relative">
                        <Image
                          alt={displayValue(dir.name)}
                          className="object-cover"
                          src={String(dir.imageUrl)}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          unoptimized
                        />
                      </div>
                      <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#725b35] uppercase block mb-1">
                        {displayValue(dir.role)}
                      </span>
                      <h4 className="font-['EB_Garamond',serif] text-[1.35rem] leading-[1.75rem] font-medium text-[#1b1c1a] mb-1">
                        {displayValue(dir.name)}
                      </h4>
                      <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742] mb-4">
                        {displayValue(dir.bio)}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#c6c7c0] text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
                      <span>{displayValue(dir.email)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: VIP REGISTRATION ================= */}
        <section
          className="w-full border-b border-[#c6c7c0] bg-[#faf9f5] py-12"
          id="register"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-5 pr-0 md:pr-8">
                <span className="text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium text-[#725b35] uppercase tracking-widest block mb-2">
                  Priority Allocation
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[3rem] leading-[3.25rem] tracking-[-0.015em] font-normal text-[#1b1c1a] mb-4">
                  {displayValue(
                    data.vipRegistrationTitle,
                    "Register VIP Interest",
                  )}
                </h2>
                <p className="text-[1.125rem] leading-[1.875rem] text-[#454742] font-normal mb-6">
                  {displayValue(
                    data.vipRegistrationDescription,
                    "Prospective purchasers registered through the developer portal receive priority access to unreleased penthouse allocations, architectural preview folios, and private gallery scheduling prior to public release.",
                  )}
                </p>
                <div className="p-4 bg-[#efeeea] border-l-2 border-[#725b35] space-y-2 mb-8">
                  <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold uppercase font-bold text-[#1b1c1a] block">
                    DISCLAIMER NOTE
                  </span>
                  <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742]">
                    Registration does not constitute a contractual binding
                    offer. All sales handled under approved regulatory
                    disclosure statements.
                  </p>
                </div>
                <div className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] space-y-1">
                  <p>CONFIDENTIALITY GUARANTEED • NO THIRD-PARTY BROKERS</p>
                  <p>
                    ENCRYPTION PROTOCOL ACTIVE: TLS 1.3 ARCHITECTURAL LEDGER
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 bg-[#faf9f5] border border-[#c6c7c0] p-8 md:p-10">
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase mb-2">
                        Full Legal Name *
                      </label>
                      <input
                        className="w-full bg-[#faf9f5] border border-[#c6c7c0] focus:border-[#000000] px-4 py-3 text-[0.9375rem] leading-[1.6rem] text-[#1b1c1a] placeholder-[#c6c7c0] outline-none rounded-none"
                        placeholder="e.g. Lord Alistair Montgomery"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        className="w-full bg-[#faf9f5] border border-[#c6c7c0] focus:border-[#000000] px-4 py-3 text-[0.9375rem] leading-[1.6rem] text-[#1b1c1a] placeholder-[#c6c7c0] outline-none rounded-none"
                        placeholder="name@domain.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase mb-2">
                        Direct Telephone *
                      </label>
                      <input
                        className="w-full bg-[#faf9f5] border border-[#c6c7c0] focus:border-[#000000] px-4 py-3 text-[0.9375rem] leading-[1.6rem] text-[#1b1c1a] placeholder-[#c6c7c0] outline-none rounded-none"
                        placeholder="+1 (555) 000-0000"
                        required
                        type="tel"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase mb-2">
                        Residence Typology of Interest
                      </label>
                      <select
                        className="w-full bg-[#faf9f5] border border-[#c6c7c0] focus:border-[#000000] px-4 py-3 text-[0.9375rem] leading-[1.6rem] text-[#1b1c1a] outline-none rounded-none cursor-pointer"
                        defaultValue="Sky Residence Suite (2 - 3 Bed)"
                      >
                        <option>Garden Pavilion (2 Bed)</option>
                        <option>Sky Residence Suite (2 - 3 Bed)</option>
                        <option>Signature Duplex Penthouse (4 Bed)</option>
                        <option>Full-Floor Custom Consolidation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase mb-2">
                        Purchase Timeframe
                      </label>
                      <select className="w-full bg-[#faf9f5] border border-[#c6c7c0] focus:border-[#000000] px-4 py-3 text-[0.9375rem] leading-[1.6rem] text-[#1b1c1a] outline-none rounded-none cursor-pointer">
                        <option>Immediate / Pre-Completion</option>
                        <option>Within 6 Months</option>
                        <option>Q4 2026 Settlement Horizon</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase mb-2">
                        Intended Acquisition Purpose
                      </label>
                      <select className="w-full bg-[#faf9f5] border border-[#c6c7c0] focus:border-[#000000] px-4 py-3 text-[0.9375rem] leading-[1.6rem] text-[#1b1c1a] outline-none rounded-none cursor-pointer">
                        <option>Primary Private Residence</option>
                        <option>Secondary Pied-à-Terre</option>
                        <option>Family Office / Investment Portfolio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] uppercase mb-2">
                      Specific Architectural Requirements or Custom Requests
                    </label>
                    <textarea
                      className="w-full bg-[#faf9f5] border border-[#c6c7c0] focus:border-[#000000] px-4 py-3 text-[0.9375rem] leading-[1.6rem] text-[#1b1c1a] placeholder-[#c6c7c0] outline-none rounded-none resize-none"
                      placeholder="Specify preferences for aspect, floor level, wine vault capacity, or multiple vehicular allocations..."
                      rows={3}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      className="w-full py-4 bg-[#000000] text-[#ffffff] text-[0.75rem] leading-[1.125rem] tracking-[0.08em] font-medium uppercase tracking-widest hover:bg-[#725b35] transition-colors"
                      type="submit"
                    >
                      Submit VIP Registration →
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= Footer ================= */}
      <footer className="bg-[#f5f4ef] border-t border-[#c6c7c0]">
        <div className="w-full px-5 md:px-12 py-12 max-w-[1440px] mx-auto grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-4 mb-6 md:mb-0">
            <h4 className="text-[1.75rem] leading-[2.125rem] font-['EB_Garamond',serif] font-medium text-[#1b1c1a] tracking-widest uppercase mb-3">
              {displayValue(data.companyName, "AETHERIA RESIDENCES")}
            </h4>
            <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742] mb-6">
              An architectural monograph celebrating landmark residential
              permanence, tactile stone materiality, and human-centric master
              planning.
            </p>
            <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872] block">
              DEVELOPMENT CODE:{" "}
              {displayValue(data.developmentCode, "REF-AETH-2025-06")}
            </span>
          </div>

          <div className="col-span-4 md:col-span-5 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold uppercase text-[#767872] block mb-3">
                NAVIGATION &amp; ARCHIVES
              </span>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-[0.8125rem] leading-[1.375rem] text-[#454742] hover:text-[#725b35] transition-colors duration-200"
                    href="#overview"
                  >
                    Flagship Developments
                  </a>
                </li>
                <li>
                  <a
                    className="text-[0.8125rem] leading-[1.375rem] text-[#454742] hover:text-[#725b35] transition-colors duration-200"
                    href="#overview"
                  >
                    Architectural Partners
                  </a>
                </li>
                <li>
                  <a
                    className="text-[0.8125rem] leading-[1.375rem] text-[#454742] hover:text-[#725b35] transition-colors duration-200"
                    href="#timeline"
                  >
                    Planning Approvals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold uppercase text-[#767872] block mb-3">
                LEGAL &amp; CONTACT
              </span>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-[0.8125rem] leading-[1.375rem] text-[#454742] hover:text-[#725b35] transition-colors duration-200"
                    href="#gallery-sales"
                  >
                    Sales Gallery Appointments
                  </a>
                </li>
                <li>
                  <a
                    className="text-[0.8125rem] leading-[1.375rem] text-[#454742] hover:text-[#725b35] transition-colors duration-200"
                    href="#register"
                  >
                    Legal &amp; Disclaimers
                  </a>
                </li>
                <li>
                  <a
                    className="text-[0.8125rem] leading-[1.375rem] text-[#454742] hover:text-[#725b35] transition-colors duration-200"
                    href="#register"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-4 md:col-span-3 border-t md:border-t-0 md:border-l border-[#c6c7c0] pt-6 md:pt-0 md:pl-6 flex flex-col justify-between">
            <p className="text-[0.8125rem] leading-[1.375rem] text-[#454742] leading-relaxed">
              © {new Date().getFullYear()} Aetheria Development Group. All
              architectural specifications, masterplan diagrams, floor plans,
              and finishes are indicative and subject to change without notice.
            </p>
            <div className="mt-4 text-[0.6875rem] leading-[1rem] tracking-[0.12em] font-semibold text-[#767872]">
              DESIGNED FOR ARCHITECTURAL CONNOISSEURS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
