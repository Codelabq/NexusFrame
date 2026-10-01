"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building,
  Building2,
  CircleDollarSign,
  Gavel,
  Handshake,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Minus,
  Mountain,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  SquareStack,
  Star,
  Store,
  Trees,
  Waves,
  X,
} from "lucide-react";
import "./style.css";
type RealEstateO1Props = {
  resolvedData?: Record<string, unknown>;
};

function displayValue(
  value: unknown,
  fallback = "Waiting for resolved data",
): string {
  if (value === undefined || value === null || value === "") return fallback;
  return Array.isArray(value) ? value.join(", ") : String(value);
}

function numericPrice(value: unknown): number {
  if (value === undefined || value === null || value === "") return NaN;
  if (typeof value === "number") return Number.isFinite(value) ? value : NaN;
  const text = String(value).trim().toLowerCase();
  const parsed = Number(text.replace(/[^\d.-]/g, ""));
  const multiplier = /(?:\d)\s*m\b|million/.test(text)
    ? 1_000_000
    : /(?:\d)\s*k\b|thousand/.test(text)
      ? 1_000
      : 1;
  const normalized = parsed * multiplier;
  return Number.isFinite(normalized) ? normalized : NaN;
}

function formatPrice(
  price: unknown,
  currency = "$",
  listingType?: unknown,
): string {
  if (price === undefined || price === null || price === "") return "";
  const num = numericPrice(price);
  if (isNaN(num)) return String(price);

  const formatted = num.toLocaleString("en-US");
  const isRental =
    String(listingType).toLowerCase().includes("rent") ||
    String(listingType).toLowerCase().includes("lease");

  return `${currency}${formatted}${isRental ? " / mo" : ""}`;
}

const placeholderProperties = [
  {
    id: "prop-1",
    title: "742 Evergreen Terrace",
    price: 850000,
    currency: "$",
    listingType: "For Sale",
    address: "Bellevue, WA 98004",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2450,
    areaUnit: "sq ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAh05VVekdjLDxbkks3eeufxf0E05msOqyG1aam7H9QIhlndmjiuck0-Zj-6XLgAIQE4qm43FkiGjW3N_mKfMzutxvvUrJnZ3IxO1X5fDeYwmWlfMUhFzCpGzpWVfeMXbVbJ8AOhSmY32inyeICqiXp8tR3zBX8GSrmeGhqpyVRKAU_XD5-abp6may-xdLlDFsdMehcfwoBUfjnvcU_exXk8vQkBpc55D55bwLmnUSQflEMUnpdkqkt",
    verified: true,
  },
  {
    id: "prop-2",
    title: "The Oakridge Residence",
    price: 1240000,
    currency: "$",
    listingType: "For Sale",
    address: "West End, WA 98005",
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3210,
    areaUnit: "sq ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAibYQBZFobjA1VlT4VXcA60tpIOwc0p6wFUnRJslMN3y5xdET47tpN4HaLaJMdkzWBj_TUFwO1h294V6dbsa_nCGssYzXIus6DZTQwXRsoLALCzMWQFemXBkg8P-CCtTI92MBN4pLv5PNa4H1MOYWbyn8NsBHjMEQXeVGCDWCfz_pORTvGNhdJHK5BwYeOojDwi6gJb0AOtxQ-Dgsd6uGYTeH2tyfAHmpEFT_NdIERpiiugQtYL3yF",
    verified: true,
  },
  {
    id: "prop-3",
    title: "Highland Park Penthouse",
    price: 3200,
    currency: "$",
    listingType: "For Rent",
    address: "Downtown, WA 98101",
    bedrooms: 2,
    bathrooms: 2,
    area: 1380,
    areaUnit: "sq ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5MAei8VdY15XNuV3wXuMpukXxsaZh5PGRTAM3Pmoz0CkhLfC_KEYv6YmTHTPM9XQh1aOpJGDQiCJYJYIS32lOAhYhdKdFEOSbkpAEs6mn7w8usj8T97BGmfCWE1lRHWXjMg3kskDkIjMSR2-s0vW5eHBSOH95rqNoM3xkikZ6LIDJkkVskIK-1uy_FoSNqcOmKa8NIFC_HAnq-_WA_e_484BFAj2hKv_eAAZObPe__-wjwCcyQaCx",
    verified: true,
  },
  {
    id: "prop-4",
    title: "Lakeview Rowhome #4",
    price: 620000,
    currency: "$",
    listingType: "For Sale",
    address: "Lakeview District, WA 98033",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1890,
    areaUnit: "sq ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYuEwFW5XrDsIDoj-xJwXjcu43C1uKLb3A6TuISzLM9ZctB2O8dCwxXuWVX3OYlkb0JIUzTUcgbAGWbw-_6EZ1HGIrxpUyZAyWjatp67v8_IiWg-qZqH3fRV760xUAKBp7qXECBcsUzRumqVCiLdc02JWPRIBMs-hYUHZaoeHn10QXXRk-SkRhhl9Kg8s0NQNGaUyx8xubcwdzzIYhR1SJRHC3Rg7gcX72cNNEjkOgWQeWCx70PfWv",
    verified: true,
  },
  {
    id: "prop-5",
    title: "The Mercer View Condos",
    price: 2450,
    currency: "$",
    listingType: "For Rent",
    address: "Downtown, WA 98109",
    bedrooms: 1,
    bathrooms: 1,
    area: 820,
    areaUnit: "sq ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs1-91z9-UaMog-SIicxQ0NIDKC6z2O5Fib1FB2DIVGevi1xKHQ-E81oU_XfCCfqcrvbJVT_Ft3QDA3tgwVjRTcN5t4Z5-wk0aEHzVUc9qcPxjdu6iovY4u9FMtMYY2zxJv1J_5wHEmlZVnt5tWtV4_qkH4AQ9M9DRqf2OQWmR54ldBS30pg3HQsYhDfcULbSCjht22Bs7QWJ065M-0zuXoWpn7fajiP7bbFMUxP0uqmeIL73nOf48",
    verified: true,
  },
  {
    id: "prop-6",
    title: "Meadowbrook Manor",
    price: 1850000,
    currency: "$",
    listingType: "For Sale",
    address: "Highland Park, WA 98052",
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4650,
    areaUnit: "sq ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmnyAz8M3CrtAOM5RK7lzhgF8JZLXPLUss8MLeV9NO5FfpX_rZCaYhFF1F8GiTUhE5VcZMT6Rcabk1bHDBw0VE00dVI3X7lIjzoCE3H51619e9NTSewAS-go8eZGtBtDxznSLxN5I8G2-dyq8ZS9isELKv80tE-xLX-VJQbOWqzV-cxKnx56D9oiModG2EHNYkeVTzlKCK59QXyq1ggQOQM1duPg6zYHS8nWolzrbWfM1j0x1zGpts",
    verified: true,
  },
];

const placeholderPropertyTypes = [
  { name: "Single Family", count: 128, icon: "cottage" },
  { name: "Apartments", count: 94, icon: "apartment" },
  { name: "Townhomes", count: 42, icon: "holiday_village" },
  { name: "Villas", count: 26, icon: "pool" },
  { name: "Commercial", count: 35, icon: "storefront" },
];

const placeholderLocations = [
  {
    name: "Downtown",
    description: "Urban high-rises & offices",
    count: 64,
    icon: "location_city",
  },
  {
    name: "West End",
    description: "Tree-lined family residences",
    count: 42,
    icon: "park",
  },
  {
    name: "Lakeview District",
    description: "Waterfront villas & piers",
    count: 28,
    icon: "water",
  },
  {
    name: "Highland Park",
    description: "Spacious suburban estates",
    count: 37,
    icon: "terrain",
  },
];

const placeholderMapPins = [
  { price: "$850k", top: "28%", left: "45%", active: false },
  { price: "$1.2M", top: "48%", left: "62%", active: true },
  { price: "$620k", top: "68%", left: "28%", active: false },
  { price: "$1.85M", top: "35%", left: "78%", active: false },
  { price: "$3.2k/mo", top: "72%", left: "68%", active: false },
];

const placeholderTrustFeatures = [
  {
    icon: "verified_user",
    title: "Verified Brokerage Records",
    description:
      "Every property on our roster is reviewed against local land registries, title claims, and municipal assessment protocols before publication.",
  },
  {
    icon: "balance",
    title: "Unbiased Price Discovery",
    description:
      "We eliminate speculative inflation by presenting real closed transaction datasets, clear neighborhood medians, and direct fee structures.",
  },
  {
    icon: "handshake",
    title: "Licensed Advisory Team",
    description:
      "Work directly with accredited brokers bound by strict fiduciaries. We guide buyers and sellers from initial touring through final closing escrow.",
  },
];

const placeholderData: Record<string, unknown> = {
  companyName: "Modern Realty",
  companyTagline: "Licensed real estate brokerage and advisory operations.",
  phone: "+1 (555) 234-8900",
  email: "inquiries@modernrealty.com",
  address: "400 Bellevue Way, Suite 800",
  heroBadge: "Licensed Brokerage Verification Guaranteed",
  heroTitle: "Find Your Next Home With Confidence.",
  heroDescription:
    "Access transparent, verified real estate listings backed by seasoned local advisors. Direct pricing, clean data, and zero market friction.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDpP8K1JCGrsfITfDLF-xuW3qoQeolITe7cvGIFncLv21xnf0lQtfsgxw4swtbOFFL6W6MvKBjsLqc-Maci3o6muDLCqGD_JnP10A2w32WLBEB49urN_CzDsNmPfce9GgSm4yOMv90PNZO-EQXlwPQUaYioiXEMLKRpToeyH6NOLiB0aWEaKFJTK9sycLP1EWT0MmcJttZZlmy-EkmmuW0G2zELncz4oLwnjpYsB2OT8L3r0sOUHVxe",
  propertyTypes: placeholderPropertyTypes,
  properties: placeholderProperties,
  locations: placeholderLocations,
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9CRHtT3h682XoLWYLdQTC_QJhOSlqZ7HBSmM1-5azUCSX_KoKEll0WvXg-u-vn9WtJi1dMfzUD6MiZi0F1XA3s7qhpNO_9k3lp28LLvvYTLBoSTCzWsd-CiPZiVZNQHNHbsZZioIIvKv57DejRw_rgB6YsP7WGYKCnjDe3_v3o3p5GaRnEg39o8530CamcaR5JMo_c1XJlEChlWdvydOlUi5mF7sKXBVruGqtqebGSoJJwai3yRPP",
  mapPins: placeholderMapPins,
  trustFeatures: placeholderTrustFeatures,
  ctaTitle:
    "Looking to buy or sell a property? Speak with our licensed advisors.",
  ctaDescription:
    "Our regional advisory office provides immediate confidential consultation regarding property acquisitions, valuation reports, and verified agency tours.",
};

const lucideIconMap = {
  domain: Building2,
  location_on: MapPin,
  home: Home,
  payments: CircleDollarSign,
  search: Search,
  cottage: Home,
  apartment: Building,
  holiday_village: Landmark,
  pool: Waves,
  storefront: Store,
  pin_drop: MapPin,
  bed: BedDouble,
  bathtub: Bath,
  square_foot: SquareStack,
  verified_user: ShieldCheck,
  balance: Landmark,
  handshake: Handshake,
  call: Phone,
  mail: Mail,
  location_city: Building2,
  park: Trees,
  water: Waves,
  terrain: Mountain,
  arrow_forward: ArrowRight,
  menu: Menu,
  close: X,
  add: Plus,
  remove: Minus,
  star: Star,
  gavel: Gavel,
  default: Building2,
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

export default function RealEstate01({ resolvedData }: RealEstateO1Props) {
  const data = normalizeTemplateData(resolvedData);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("properties");
  const [listingFilter, setListingFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("price-desc");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [appliedSearch, setAppliedSearch] = useState({
    location: "",
    type: "",
    price: "",
  });
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [selectedPin, setSelectedPin] = useState<number | null>(null);
  const [mapZoom, setMapZoom] = useState(1);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const sectionIds = ["properties", "locations", "about", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigateTo = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const navigationClass = (section: string) =>
    activeSection === section
      ? "text-[#0051df] font-semibold border-b-2 border-[#0051df] pb-1"
      : "text-[#667085] hover:text-[#202124] font-medium transition-colors";

  const properties = (
    Array.isArray(data.properties) && data.properties.length > 0
      ? data.properties
      : placeholderProperties
  ) as Record<string, any>[];

  const visibleProperties = properties
    .filter((property) => {
      const listingStatus = String(
        property.listingType || property.status || "For Sale",
      ).toLowerCase();
      const isRental =
        listingStatus.includes("rent") || listingStatus.includes("lease");
      if (listingFilter === "For Sale" && isRental) return false;
      if (listingFilter === "For Rent" && !isRental) return false;

      const location = String(
        property.address ||
          property.location ||
          property.neighborhood ||
          property.city ||
          "",
      ).toLowerCase();
      if (
        appliedSearch.location &&
        !location.includes(appliedSearch.location.toLowerCase())
      )
        return false;

      const type = String(
        property.propertyType || property.type || property.category || "",
      ).toLowerCase();
      if (
        appliedSearch.type &&
        !appliedSearch.type.split("|").some((value) => type.includes(value))
      )
        return false;

      if (appliedSearch.price) {
        const [minimum, maximum] = appliedSearch.price.split("-").map(Number);
        const price = numericPrice(property.price);
        if (
          !Number.isFinite(price) ||
          price < minimum ||
          (maximum && price > maximum)
        )
          return false;
      }
      return true;
    })
    .sort((first, second) => {
      if (sortOrder === "price-asc")
        return (
          (numericPrice(first.price) || 0) - (numericPrice(second.price) || 0)
        );
      if (sortOrder === "newest") {
        const firstDate = new Date(
          first.createdAt || first.listedAt || first.date || 0,
        ).getTime();
        const secondDate = new Date(
          second.createdAt || second.listedAt || second.date || 0,
        ).getTime();
        return secondDate - firstDate;
      }
      return (
        (numericPrice(second.price) || 0) - (numericPrice(first.price) || 0)
      );
    });

  const propertyTypes = (
    Array.isArray(data.propertyTypes) && data.propertyTypes.length > 0
      ? data.propertyTypes
      : placeholderPropertyTypes
  ) as Record<string, any>[];

  const locations = (
    Array.isArray(data.locations) && data.locations.length > 0
      ? data.locations
      : placeholderLocations
  ) as Record<string, any>[];

  const mapPins = (
    Array.isArray(data.mapPins) && data.mapPins.length > 0
      ? data.mapPins
      : placeholderMapPins
  ) as Record<string, any>[];

  const trustFeatures = (
    Array.isArray(data.trustFeatures) && data.trustFeatures.length > 0
      ? data.trustFeatures
      : placeholderTrustFeatures
  ) as Record<string, any>[];

  const heroImage = displayValue(
    data.heroImage,
    placeholderData.heroImage as string,
  );
  const mapImage = displayValue(
    data.mapImage,
    placeholderData.mapImage as string,
  );

  return (
    <div className="bg-[#f9f9f7] text-[#202124] font-['Manrope',sans-serif] text-[14px] leading-[22px] antialiased selection:bg-[#0051df] selection:text-[#ffffff] min-h-screen flex flex-col justify-between big-component">
      {/* Navigation Bar */}
      <header className="w-full sticky top-0 z-50 px-4 sm:px-6 md:px-12 max-w-[1280px] mx-auto flex flex-wrap items-center justify-between min-h-20 bg-[#FFFFFF] shadow-sm">
        <div className="flex min-w-0 items-center gap-4 md:gap-12">
          <a
            className="min-w-0 max-w-[calc(100vw-110px)] sm:max-w-none truncate text-[20px] leading-[28px] font-bold text-[#202124] tracking-tight flex items-center gap-2"
            href="#properties"
            onClick={() => navigateTo("properties")}
          >
            <Icon
              name="domain"
              className="text-[#0051df]"
              size={22}
              strokeWidth={2.2}
            />
            {displayValue(data.companyName, "Modern Realty")}
          </a>
        </div>

        <nav
          id="primary-navigation"
          className={`${menuOpen ? "flex" : "hidden"} w-full basis-full flex-col gap-1 py-3 md:flex md:w-auto md:basis-auto md:flex-row md:items-center md:gap-8 md:py-0`}
        >
          <a
            className={`${navigationClass("properties")} px-2 py-2 text-[13px] leading-[18px] tracking-[0.01em] md:px-0 md:py-0`}
            aria-current={
              activeSection === "properties" ? "location" : undefined
            }
            href="#properties"
            onClick={() => navigateTo("properties")}
          >
            Properties
          </a>
          <a
            className={`${navigationClass("locations")} px-2 py-2 text-[13px] leading-[18px] tracking-[0.01em] md:px-0 md:py-0`}
            aria-current={
              activeSection === "locations" ? "location" : undefined
            }
            href="#locations"
            onClick={() => navigateTo("locations")}
          >
            Locations
          </a>
          <a
            className={`${navigationClass("about")} px-2 py-2 text-[13px] leading-[18px] tracking-[0.01em] md:px-0 md:py-0`}
            aria-current={activeSection === "about" ? "location" : undefined}
            href="#about"
            onClick={() => navigateTo("about")}
          >
            About Us
          </a>
          <a
            className={`${navigationClass("contact")} px-2 py-2 text-[13px] leading-[18px] tracking-[0.01em] md:px-0 md:py-0`}
            aria-current={activeSection === "contact" ? "location" : undefined}
            href="#contact"
            onClick={() => navigateTo("contact")}
          >
            Contact
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <a
            className="hidden sm:inline-flex items-center justify-center bg-[#2f6bff] hover:bg-[#0051df] text-[#ffffff] text-[13px] leading-[18px] tracking-[0.01em] px-5 py-2.5 rounded-lg font-bold transition-all shadow-sm active:scale-[0.99]"
            href="#contact"
            onClick={() => navigateTo("contact")}
          >
            Inquire Now
          </a>
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center text-[#202124] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0051df] rounded-lg"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon
              name={menuOpen ? "close" : "menu"}
              className="text-[#202124]"
              size={20}
              strokeWidth={2.2}
            />
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-8 pb-14">
          <div className="relative rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${heroImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-[#FFFFFF]/40 md:to-transparent" />
            </div>

            <div className="relative z-10 p-8 md:p-14 lg:p-16 max-w-2xl">
              {Boolean(data.heroBadge) && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d6e0f8]/60 border border-[#E5E7EB] mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#12B76A]" />
                  <span className="text-[12px] leading-[16px] text-[#202124] font-medium">
                    {displayValue(data.heroBadge)}
                  </span>
                </div>
              )}
              <h1 className="text-[36px] leading-[42px] sm:text-[42px] sm:leading-[48px] md:text-[48px] md:leading-[56px] font-bold text-[#202124] mb-4 tracking-[-0.02em]">
                {displayValue(
                  data.heroTitle,
                  "Find Your Next Home With Confidence.",
                )}
              </h1>
              <p className="text-[16px] leading-[26px] text-[#667085] mb-8">
                {displayValue(
                  data.heroDescription,
                  "Access transparent, verified real estate listings backed by seasoned local advisors. Direct pricing, clean data, and zero market friction.",
                )}
              </p>
            </div>

            {/* Embedded Search Form */}
            <div className="relative z-10 px-6 pb-8 md:px-12 md:pb-12">
              <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] shadow-md p-3 md:p-4">
                <form
                  className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setAppliedSearch({
                      location: searchLocation.trim(),
                      type: searchType,
                      price: searchPrice,
                    });
                    navigateTo("properties");
                    document
                      .getElementById("properties")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className="px-3 py-2 flex flex-col justify-center">
                    <label className="text-[12px] leading-[16px] text-[#667085] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-medium">
                      <Icon
                        name="location_on"
                        className="text-[#0051df]"
                        size={16}
                        strokeWidth={2.2}
                      />
                      Location
                    </label>
                    <input
                      className="w-full border-0 p-0 text-[#202124] placeholder:text-[#667085] text-[14px] leading-[22px] focus:ring-0 focus:outline-none bg-transparent"
                      placeholder="City, neighborhood, or zip"
                      aria-label="Location"
                      value={searchLocation}
                      onChange={(event) =>
                        setSearchLocation(event.target.value)
                      }
                      type="text"
                    />
                  </div>

                  <div className="px-3 py-2 flex flex-col justify-center">
                    <label className="text-[12px] leading-[16px] text-[#667085] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-medium">
                      <Icon
                        name="home"
                        className="text-[#0051df]"
                        size={16}
                        strokeWidth={2.2}
                      />
                      Property Type
                    </label>
                    <select
                      aria-label="Property Type"
                      value={searchType}
                      onChange={(event) => setSearchType(event.target.value)}
                      className="w-full border-0 p-0 text-[#202124] text-[14px] leading-[22px] focus:ring-0 focus:outline-none bg-transparent cursor-pointer"
                    >
                      <option value="">All Types</option>
                      <option value="single">Single Family</option>
                      <option value="apartment|condo">
                        Apartment &amp; Condo
                      </option>
                      <option value="town">Townhouse</option>
                      <option value="villa">Waterfront Villa</option>
                    </select>
                  </div>

                  <div className="px-3 py-2 flex flex-col justify-center">
                    <label className="text-[12px] leading-[16px] text-[#667085] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-medium">
                      <Icon
                        name="payments"
                        className="text-[#0051df]"
                        size={16}
                        strokeWidth={2.2}
                      />
                      Price Range
                    </label>
                    <select
                      aria-label="Price Range"
                      value={searchPrice}
                      onChange={(event) => setSearchPrice(event.target.value)}
                      className="w-full border-0 p-0 text-[#202124] text-[14px] leading-[22px] focus:ring-0 focus:outline-none bg-transparent cursor-pointer"
                    >
                      <option value="">Any Price Range</option>
                      <option value="0-500000">Up to $500,000</option>
                      <option value="500000-1000000">
                        $500,000 - $1,000,000
                      </option>
                      <option value="1000000-2000000">
                        $1,000,000 - $2,000,000
                      </option>
                      <option value="2000000-">$2,000,000+</option>
                    </select>
                  </div>

                  <div className="px-2 py-2 flex items-center">
                    <button
                      className="w-full h-full min-h-[44px] bg-[#2f6bff] hover:bg-[#0051df] text-[#ffffff] text-[13px] leading-[18px] tracking-[0.01em] rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                      type="submit"
                    >
                      <Icon
                        name="search"
                        className="text-white"
                        size={18}
                        strokeWidth={2.2}
                      />
                      <span>Search Properties</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        {propertyTypes.length > 0 && (
          <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-[#0051df] text-[13px] leading-[18px] tracking-[0.01em] font-semibold uppercase">
                  Classification
                </span>
                <h2 className="text-[32px] leading-[40px] font-bold text-[#202124] mt-1 tracking-[-0.015em]">
                  Browse by Property Type
                </h2>
              </div>
              <p className="text-[14px] leading-[22px] text-[#667085] mt-2 md:mt-0">
                Explore our tailored portfolios structured across residential
                categories and prime commercial spaces.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {propertyTypes.map((item, index) => (
                <a
                  key={index}
                  className={`bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-5 hover:border-[#2f6bff] transition-all hover:shadow-sm group ${
                    index === propertyTypes.length - 1 &&
                    propertyTypes.length % 2 === 1
                      ? "col-span-2 sm:col-span-1"
                      : ""
                  }`}
                  href="#properties"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#f4f4f2] flex items-center justify-center text-[#0051df] group-hover:bg-[#2f6bff] group-hover:text-[#ffffff] transition-colors mb-4">
                    <Icon
                      name={String(displayValue(item.icon, "cottage"))}
                      className="text-current"
                      size={22}
                      strokeWidth={2.2}
                    />
                  </div>
                  <h3 className="text-[18px] leading-[26px] font-semibold text-[#202124] group-hover:text-[#0051df] transition-colors">
                    {displayValue(item.name, "Property Type")}
                  </h3>
                  {item.count !== undefined && (
                    <p className="text-[12px] leading-[16px] text-[#667085] mt-1 font-medium">
                      {displayValue(item.count)} Properties
                    </p>
                  )}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Featured Properties Grid */}
        <section
          className="max-w-[1280px] mx-auto px-6 md:px-12 py-12"
          id="properties"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#E5E7EB] gap-4">
            <div>
              <span className="text-[#0051df] text-[13px] leading-[18px] tracking-[0.01em] font-semibold uppercase">
                Curated Portfolio
              </span>
              <h2 className="text-[32px] leading-[40px] font-bold text-[#202124] mt-1 tracking-[-0.015em]">
                Featured Properties
              </h2>
              <p className="text-[14px] leading-[22px] text-[#667085] mt-1">
                Verified brokerage listings available for immediate viewing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div
                aria-label="Listing type"
                className="inline-flex max-w-full bg-[#f4f4f2] p-1 rounded-lg border border-[#E5E7EB]"
              >
                {["All", "For Sale", "For Rent"].map((filter) => (
                  <button
                    key={filter}
                    aria-pressed={listingFilter === filter}
                    className={`px-3 sm:px-4 py-1.5 rounded text-[12px] leading-[16px] font-medium ${listingFilter === filter ? "bg-[#2f6bff] text-[#ffffff] font-semibold shadow-xs" : "text-[#667085] hover:text-[#202124]"}`}
                    onClick={() => setListingFilter(filter)}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="relative">
                <select
                  aria-label="Sort properties"
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                  className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg px-3 py-1.5 text-[#202124] text-[12px] leading-[16px] font-medium focus:ring-1 focus:ring-[#0051df] focus:outline-none cursor-pointer pr-8"
                >
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              {(appliedSearch.location ||
                appliedSearch.type ||
                appliedSearch.price ||
                listingFilter !== "All") && (
                <button
                  className="text-[12px] leading-[16px] font-semibold text-[#0051df] hover:underline"
                  onClick={() => {
                    setListingFilter("All");
                    setSearchLocation("");
                    setSearchType("");
                    setSearchPrice("");
                    setAppliedSearch({ location: "", type: "", price: "" });
                  }}
                  type="button"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {visibleProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProperties.map((property, index) => {
                const imageSrc =
                  displayValue(property.imageUrl) ||
                  (Array.isArray(property.images) && property.images[0]) ||
                  placeholderData.heroImage;

                const listingStatus = displayValue(
                  property.listingType || property.status,
                  "For Sale",
                );

                const priceText = formatPrice(
                  property.price,
                  displayValue(property.currency, "$"),
                  listingStatus,
                );

                return (
                  <article
                    key={property.id || index}
                    className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#eeeeec]">
                      <Image
                        alt={displayValue(property.title, "Property Listing")}
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        src={String(imageSrc)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                      <span className="absolute top-3 left-3 bg-[#FFFFFF] text-[#202124] text-[12px] leading-[16px] font-semibold px-2.5 py-1 rounded-md border border-[#E5E7EB] shadow-xs z-10">
                        {listingStatus}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="text-[20px] leading-[28px] font-bold text-[#202124]">
                            {priceText}
                          </span>
                        </div>
                        <h3 className="text-[18px] leading-[26px] font-semibold text-[#202124] mb-1">
                          {displayValue(property.title, "Residential Property")}
                        </h3>
                        <p className="text-[14px] leading-[22px] text-[#667085] mb-5 flex items-center gap-1">
                          <Icon
                            name="pin_drop"
                            className="text-[#667085]"
                            size={16}
                            strokeWidth={2.2}
                          />
                          {displayValue(
                            property.address ||
                              property.location ||
                              property.city,
                            "Location details available upon inquiry",
                          )}
                        </p>
                      </div>

                      <div className="border-t border-[#E5E7EB] pt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[13px] leading-[18px] tracking-[0.01em] text-[#667085] font-semibold">
                        {property.bedrooms !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Icon
                              name="bed"
                              className="text-[#0051df]"
                              size={16}
                              strokeWidth={2.2}
                            />
                            <span>{displayValue(property.bedrooms)} Beds</span>
                          </div>
                        )}
                        {property.bathrooms !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Icon
                              name="bathtub"
                              className="text-[#0051df]"
                              size={16}
                              strokeWidth={2.2}
                            />
                            <span>
                              {displayValue(property.bathrooms)} Baths
                            </span>
                          </div>
                        )}
                        {property.area !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Icon
                              name="square_foot"
                              className="text-[#0051df]"
                              size={16}
                              strokeWidth={2.2}
                            />
                            <span>
                              {displayValue(property.area)}{" "}
                              {displayValue(property.areaUnit, "sq ft")}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#E5E7EB]/60 flex items-center justify-between">
                        <span className="text-[12px] leading-[16px] text-[#12B76A] font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A]" />{" "}
                          Verified Agency Listing
                        </span>
                        <a
                          className="text-[13px] leading-[18px] tracking-[0.01em] font-semibold text-[#0051df] hover:text-[#2f6bff] flex items-center gap-1"
                          href="#contact"
                        >
                          View Details{" "}
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
                );
              })}
            </div>
          ) : (
            <div className="border border-dashed border-[#D0D5DD] rounded-xl bg-white px-6 py-10 text-center">
              <p className="text-[16px] leading-[24px] font-semibold text-[#202124]">
                No properties match these filters.
              </p>
              <button
                className="mt-3 text-[13px] leading-[18px] font-semibold text-[#0051df] hover:underline"
                onClick={() => {
                  setListingFilter("All");
                  setSearchLocation("");
                  setSearchType("");
                  setSearchPrice("");
                  setAppliedSearch({ location: "", type: "", price: "" });
                }}
                type="button"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Geographic Locations & Map */}
        <section
          className="max-w-[1280px] mx-auto px-6 md:px-12 py-14"
          id="locations"
        >
          <div className="mb-8">
            <span className="text-[#0051df] text-[13px] leading-[18px] tracking-[0.01em] font-semibold uppercase">
              Geographic Reach
            </span>
            <h2 className="text-[32px] leading-[40px] font-bold text-[#202124] mt-1 tracking-[-0.015em]">
              Explore by Location
            </h2>
            <p className="text-[14px] leading-[22px] text-[#667085] mt-1">
              Direct neighborhood indexing and geographic listings mapping
              across regional hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              {locations.map((loc, index) => {
                const isSelected = index === selectedLocation;
                return (
                  <button
                    key={index}
                    aria-pressed={isSelected}
                    className={`w-full text-left p-4 rounded-xl border transition-all shadow-xs flex items-center justify-between gap-3 ${
                      isSelected
                        ? "border-[#0051df]/30 bg-[#d6e0f8]/20"
                        : "bg-[#FFFFFF] border-[#E5E7EB] hover:border-[#0051df]/40"
                    }`}
                    onClick={() => setSelectedLocation(index)}
                    type="button"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                          isSelected
                            ? "bg-[#2f6bff] text-[#ffffff]"
                            : "bg-[#f4f4f2] text-[#202124]"
                        }`}
                      >
                        <Icon
                          name={String(displayValue(loc.icon, "location_city"))}
                          className={
                            isSelected ? "text-white" : "text-[#202124]"
                          }
                          size={18}
                          strokeWidth={2.2}
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[18px] leading-[26px] font-semibold text-[#202124]">
                          {displayValue(loc.name)}
                        </h4>
                        <p className="text-[12px] leading-[16px] text-[#667085]">
                          {displayValue(loc.description)}
                        </p>
                      </div>
                    </div>
                    {loc.count !== undefined && (
                      <span
                        className={`shrink-0 text-[12px] sm:text-[13px] leading-[16px] sm:leading-[18px] tracking-[0.01em] font-semibold px-2 sm:px-2.5 py-1 rounded-md ${
                          isSelected
                            ? "text-[#0051df] bg-[#FFFFFF] border border-[#E5E7EB]"
                            : "text-[#667085] bg-[#f4f4f2]"
                        }`}
                      >
                        {displayValue(loc.count)} listings
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8">
              <button
                aria-expanded={showMap}
                aria-controls="location-map"
                className="mb-3 inline-flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-[13px] leading-[18px] font-semibold text-[#202124] lg:hidden"
                onClick={() => setShowMap((shown) => !shown)}
                type="button"
              >
                {showMap ? "Hide map" : "Show map"}
              </button>
              <div
                id="location-map"
                className={`${showMap ? "block" : "hidden"} lg:block`}
              >
                <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm bg-[#f4f4f2]">
                  <Image
                    alt="City street map"
                    className="object-cover opacity-80 transition-transform duration-200"
                    src={mapImage}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    style={{ scale: mapZoom }}
                    unoptimized
                  />

                  <div className="absolute top-4 right-4 bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg shadow-sm flex flex-col p-1 z-10">
                    <button
                      aria-label="Zoom in"
                      className="w-8 h-8 flex items-center justify-center text-[#202124] hover:bg-[#f4f4f2] rounded font-bold"
                      disabled={mapZoom >= 1.8}
                      onClick={() =>
                        setMapZoom((zoom) =>
                          Math.min(1.8, Number((zoom + 0.2).toFixed(1))),
                        )
                      }
                      type="button"
                    >
                      <Icon
                        name="add"
                        className="text-[#202124]"
                        size={16}
                        strokeWidth={2.2}
                      />
                    </button>
                    <div className="h-[1px] bg-[#E5E7EB] w-full my-0.5" />
                    <button
                      aria-label="Zoom out"
                      className="w-8 h-8 flex items-center justify-center text-[#202124] hover:bg-[#f4f4f2] rounded font-bold"
                      disabled={mapZoom <= 1}
                      onClick={() =>
                        setMapZoom((zoom) =>
                          Math.max(1, Number((zoom - 0.2).toFixed(1))),
                        )
                      }
                      type="button"
                    >
                      <Icon
                        name="remove"
                        className="text-[#202124]"
                        size={16}
                        strokeWidth={2.2}
                      />
                    </button>
                  </div>

                  {mapPins.map((pin, index) => {
                    const isActive =
                      selectedPin === null
                        ? Boolean(pin.active)
                        : index === selectedPin;
                    const top = Number.parseFloat(String(pin.top || "50%"));
                    const left = Number.parseFloat(String(pin.left || "50%"));
                    return (
                      <button
                        key={index}
                        aria-label={`Select listing at ${displayValue(pin.price)}`}
                        aria-pressed={isActive}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer border-0 bg-transparent p-0"
                        style={{
                          top: `${50 + (top - 50) * mapZoom}%`,
                          left: `${50 + (left - 50) * mapZoom}%`,
                        }}
                        onClick={() => setSelectedPin(index)}
                        type="button"
                      >
                        {isActive ? (
                          <>
                            <div className="bg-[#0051df] text-[#ffffff] text-[13px] leading-[18px] tracking-[0.01em] font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#2f6bff] flex items-center gap-1.5 scale-105">
                              <Icon
                                name="star"
                                className="text-white"
                                size={14}
                                strokeWidth={2.2}
                              />
                              <span>{displayValue(pin.price)}</span>
                            </div>
                            <div className="w-2.5 h-2.5 bg-[#0051df] mx-auto rotate-45 -mt-1 shadow-xs" />
                          </>
                        ) : (
                          <>
                            <div className="bg-[#FFFFFF] group-hover:bg-[#2f6bff] text-[#202124] group-hover:text-[#ffffff] text-[13px] leading-[18px] tracking-[0.01em] font-bold px-3 py-1.5 rounded-full shadow-md border border-[#E5E7EB] transition-all flex items-center gap-1">
                              <span>{displayValue(pin.price)}</span>
                            </div>
                            <div className="w-2 h-2 bg-[#202124] group-hover:bg-[#0051df] mx-auto rotate-45 -mt-1 shadow-xs" />
                          </>
                        )}
                      </button>
                    );
                  })}

                  <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-[#FFFFFF]/95 backdrop-blur-sm border border-[#E5E7EB] px-4 py-2 rounded-lg shadow-sm flex items-center gap-4 text-[12px] leading-[16px] text-[#667085]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0051df]" />
                      <span>Active Selection</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFFFFF] border border-[#202124]" />
                      <span>Verified Listings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        {trustFeatures.length > 0 && (
          <section
            className="max-w-[1280px] mx-auto px-6 md:px-12 py-12"
            id="about"
          >
            <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
                {trustFeatures.map((feat, index) => (
                  <div
                    key={index}
                    className={`${
                      index === 0
                        ? "md:pr-6"
                        : index === 1
                          ? "pt-6 md:pt-0 md:px-6"
                          : "pt-6 md:pt-0 md:pl-6"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#dbe1ff] flex items-center justify-center text-[#0051df] mb-4 font-bold">
                      <Icon
                        name={String(displayValue(feat.icon, "verified_user"))}
                        className="text-[#0051df]"
                        size={22}
                        strokeWidth={2.2}
                      />
                    </div>
                    <h3 className="text-[20px] leading-[28px] font-semibold text-[#202124] mb-2">
                      {displayValue(feat.title)}
                    </h3>
                    <p className="text-[14px] leading-[22px] text-[#667085]">
                      {displayValue(feat.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lead Generation CTA */}
        <section
          className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 mb-10"
          id="contact"
        >
          <div className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-[#0051df] text-[13px] leading-[18px] tracking-[0.01em] font-semibold uppercase">
                  Direct Consultation
                </span>
                <h2 className="text-[32px] leading-[40px] font-bold text-[#202124] mt-1 mb-3 tracking-[-0.015em]">
                  {displayValue(
                    data.ctaTitle,
                    "Looking to buy or sell a property? Speak with our licensed advisors.",
                  )}
                </h2>
                <p className="text-[16px] leading-[26px] text-[#667085] mb-6">
                  {displayValue(
                    data.ctaDescription,
                    "Our regional advisory office provides immediate confidential consultation regarding property acquisitions, valuation reports, and verified agency tours.",
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 text-[14px] leading-[22px] text-[#202124]">
                  {Boolean(data.phone) && (
                    <a
                      href={`tel:${String(data.phone).replace(/[^\d+]/g, "")}`}
                      className="flex items-center gap-2.5 hover:text-[#0051df]"
                    >
                      <Icon
                        name="call"
                        className="text-[#0051df]"
                        size={20}
                        strokeWidth={2.2}
                      />
                      <span className="font-semibold">
                        {displayValue(data.phone)}
                      </span>
                    </a>
                  )}
                  {Boolean(data.email) && (
                    <a
                      href={`mailto:${displayValue(data.email)}`}
                      className="flex items-center gap-2.5 hover:text-[#0051df]"
                    >
                      <Icon
                        name="mail"
                        className="text-[#0051df]"
                        size={20}
                        strokeWidth={2.2}
                      />
                      <span>{displayValue(data.email)}</span>
                    </a>
                  )}
                  {Boolean(data.address) && (
                    <div className="flex items-center gap-2.5">
                      <Icon
                        name="apartment"
                        className="text-[#0051df]"
                        size={20}
                        strokeWidth={2.2}
                      />
                      <span>{displayValue(data.address)}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#f4f4f2] p-6 rounded-xl border border-[#E5E7EB]">
                <h4 className="text-[18px] leading-[26px] font-semibold text-[#202124] mb-3">
                  Submit an Advisory Request
                </h4>
                <form
                  className="space-y-3"
                  onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const subject = encodeURIComponent(
                      "Real estate advisory request",
                    );
                    const body = encodeURIComponent(
                      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nInquiry: ${formData.get("interest")}`,
                    );
                    window.location.href = `mailto:${displayValue(data.email, "inquiries@modernrealty.com")}?subject=${subject}&body=${body}`;
                  }}
                >
                  <div>
                    <input
                      className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg px-3.5 py-2 text-[#202124] text-[14px] leading-[22px] focus:ring-1 focus:ring-[#0051df] focus:outline-none"
                      placeholder="Full Name"
                      aria-label="Full Name"
                      name="name"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg px-3.5 py-2 text-[#202124] text-[14px] leading-[22px] focus:ring-1 focus:ring-[#0051df] focus:outline-none"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      name="email"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <select
                      aria-label="Inquiry type"
                      name="interest"
                      className="w-full bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg px-3.5 py-2 text-[#202124] text-[14px] leading-[22px] focus:ring-1 focus:ring-[#0051df] focus:outline-none cursor-pointer"
                    >
                      <option>Interested in Buying a Home</option>
                      <option>Interested in Selling a Home</option>
                      <option>Rental &amp; Leasing Inquiry</option>
                      <option>Commercial Property Advisory</option>
                    </select>
                  </div>
                  <button
                    className="w-full bg-[#2f6bff] hover:bg-[#0051df] text-[#ffffff] text-[13px] leading-[18px] tracking-[0.01em] font-bold py-3 rounded-lg transition-colors shadow-sm active:scale-[0.99]"
                    type="submit"
                  >
                    Connect With a Licensed Agent
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#ffffff] border-t border-[#E5E7EB]">
        <div className="w-full px-6 md:px-12 py-12 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#E5E7EB]">
            <div>
              <a
                className="text-[20px] leading-[28px] font-bold text-[#202124] flex items-center gap-2"
                href="#properties"
                onClick={() => navigateTo("properties")}
              >
                <Icon
                  name="domain"
                  className="text-[#0051df]"
                  size={22}
                  strokeWidth={2.2}
                />
                {displayValue(data.companyName, "Modern Realty")}
              </a>
              <p className="text-[14px] leading-[22px] text-[#667085] mt-1">
                {displayValue(
                  data.companyTagline,
                  "Licensed real estate brokerage and advisory operations.",
                )}
              </p>
            </div>

            <nav className="flex flex-wrap gap-6 text-[12px] leading-[16px]">
              <a
                className={`${activeSection === "properties" ? "text-[#0051df] font-semibold" : "text-[#667085] hover:text-[#202124]"} transition-colors`}
                aria-current={
                  activeSection === "properties" ? "location" : undefined
                }
                href="#properties"
                onClick={() => navigateTo("properties")}
              >
                Properties
              </a>
              <a
                className={`${activeSection === "locations" ? "text-[#0051df] font-semibold" : "text-[#667085] hover:text-[#202124]"} transition-colors`}
                aria-current={
                  activeSection === "locations" ? "location" : undefined
                }
                href="#locations"
                onClick={() => navigateTo("locations")}
              >
                Locations
              </a>
              <a
                className={`${activeSection === "about" ? "text-[#0051df] font-semibold" : "text-[#667085] hover:text-[#202124]"} transition-colors`}
                aria-current={
                  activeSection === "about" ? "location" : undefined
                }
                href="#about"
                onClick={() => navigateTo("about")}
              >
                About Us
              </a>
              <a
                className={`${activeSection === "contact" ? "text-[#0051df] font-semibold" : "text-[#667085] hover:text-[#202124]"} transition-colors`}
                aria-current={
                  activeSection === "contact" ? "location" : undefined
                }
                href="#contact"
                onClick={() => navigateTo("contact")}
              >
                Contact
              </a>
              <span className="text-[#667085]">Privacy Policy</span>
              <span className="text-[#667085]">Terms of Service</span>
            </nav>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] leading-[16px] text-[#667085]">
            <p>
              © {new Date().getFullYear()}{" "}
              {displayValue(data.companyName, "Modern Realty")}. All rights
              reserved. Professional Real Estate Brokerage.
            </p>
            <p className="flex items-center gap-2">
              <span>Equal Housing Opportunity Brokerage</span>
              <Icon
                name="gavel"
                className="text-current"
                size={16}
                strokeWidth={2.2}
              />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
