"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Bell,
  Bookmark,
  Building2,
  Camera,
  CarFront,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  GraduationCap,
  Grid2x2,
  Heart,
  House,
  Map,
  Minus,
  PanelsTopLeft,
  Plus,
  RotateCcw,
  Rows3,
  Satellite,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TrainFront,
  UserRound,
  Waves,
  X,
} from "lucide-react";

type RealEstate02Props = {
  resolvedData?: Record<string, unknown>;
};

type SavedSearch = {
  category: string;
  query: string;
  locations: string[];
  priceRange: string;
  propertyType: string;
  minimumBeds: string;
  minimumBaths: string;
  minimumArea: string;
  statusFilter: string;
  verifiedOnly: boolean;
  quickFilterLabels: string[];
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
  const number = Number(text.replace(/[^\d.-]/g, ""));
  const multiplier = /\d\s*m\b|million/.test(text)
    ? 1_000_000
    : /\d\s*k\b|thousand/.test(text)
      ? 1_000
      : 1;
  return Number.isFinite(number) ? number * multiplier : NaN;
}

function formatPrice(
  price: unknown,
  currency = "$",
  listingType?: unknown,
): string {
  if (price === undefined || price === null || price === "") return "";
  const num = numericPrice(price);
  if (!Number.isFinite(num)) return String(price);

  const formatted = num.toLocaleString("en-US");
  const isRental =
    String(listingType).toLowerCase().includes("rent") ||
    String(listingType).toLowerCase().includes("lease");

  return `${currency}${formatted}${isRental ? " / mo" : ""}`;
}

const placeholderProperties = [
  {
    id: "prop-1",
    propertyType: "condo",
    title: "2101 4th Ave, Unit 2804",
    price: 1290000,
    currency: "$",
    pricePerSqFt: "$883/sqft",
    listingType: "For Sale",
    statusBadge: "OPEN SAT 1-4PM",
    address: "2101 4th Ave, Unit 2804",
    neighborhood: "Belltown / Downtown Core, Seattle",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1460,
    areaUnit: "sqft",
    photoCount: "1/24",
    contextTag: "$35,000 price drop",
    contextIcon: "trending_down",
    contextPositive: true,
    timeAgo: "Added 2d ago",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8YthD2X09F9mRGkoFptSQiG92RrCecmwMmGNdGRyepdCxhmZHvo_oYG4IPWRQAskOZCv21kWPxIhe4AoOk55V1v4uz0YryP9xbb2ScpUC_gJ-u034fzGuxnrjuf3MUBrIJbptGEMzM-yiIZOE4iGVWsOGDfVe9Hf-G9Gv2sbO7GH-HUuukH0Hh4K_SWqqqJDPPzYoytP0l6-aMPd_Qw4m1u1D7QOjsfvIq_SNX2RWan_zwMSavQh",
  },
  {
    id: "prop-2",
    propertyType: "single family",
    title: "742 Belmont Ave E",
    price: 849000,
    currency: "$",
    pricePerSqFt: "$643/sqft",
    listingType: "For Sale",
    statusBadge: "NEW",
    statusBadgeType: "success",
    address: "742 Belmont Ave E",
    neighborhood: "Capitol Hill, Seattle",
    bedrooms: 3,
    bathrooms: 2,
    area: 1320,
    areaUnit: "sqft",
    photoCount: "1/19",
    contextTag: "Attached 1-Car Garage",
    contextIcon: "garage",
    contextPositive: false,
    timeAgo: "Listed 6h ago",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCPSs_cNusKAeEBejsQKAfyh1T2IS9llNn0iicfwuPDdgp6BMM9wKflQ62Zww614idllxClZUZc8ouGYTbs5-PMHBqyFw28UY1gNYeSaMOpYodGBvR_LZo6PvFyi7Oo4VO6onl5jvI3sU2ltQRdc0PfHnthEz6jt5R2zQ10WQ2cNJjR5iQauGwzLnprFT-YKbe-5RTNsmf0TwqFz-TwKcv4rLjX6ysVssgBbZn2_aPmWy1nA7QPQWM",
  },
  {
    id: "prop-3",
    propertyType: "condo",
    title: "1918 8th Ave, Unit 1205",
    price: 685000,
    currency: "$",
    pricePerSqFt: "$721/sqft",
    listingType: "For Sale",
    statusBadge: null,
    address: "1918 8th Ave, Unit 1205",
    neighborhood: "South Lake Union, Seattle",
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    areaUnit: "sqft",
    photoCount: "1/32",
    contextTag: "Concierge & Pool",
    contextIcon: "pool",
    contextMeta: "HOA $520/mo",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYcr6a2DYjgtv3USMeuZcnpj0FAtz9LfEXUrwGzzAtd_y2PC2SI15fBBNHYPDLKfX-iLeZsIUL2o7SImHioFc12MV-SY8eOETLpiGeUpP348Lxz0pvgZTT2Avs_v8Lg-fE-ZDEM8bGNNDv0YTpEs0rvhFoHIX5DDp480nxLKJAyGFVpdtkeoc2LQxoOQgr2_DpnYkisubH6ij_CN9xs8tUzOKr5Ou7OtaCIvO5ryWqQpgxNo7iP5KX",
  },
  {
    id: "prop-4",
    propertyType: "single family",
    title: "10244 NE 21st Place",
    price: 2450000,
    currency: "$",
    pricePerSqFt: "$785/sqft",
    listingType: "For Sale",
    statusBadge: "PENDING",
    statusBadgeType: "warning",
    address: "10244 NE 21st Place",
    neighborhood: "Meydenbauer Bay, Bellevue",
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3120,
    areaUnit: "sqft",
    photoCount: "1/28",
    contextTag: "0.35 Acre Lot",
    contextIcon: "deck",
    timeAgo: "Pending in 4 days",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUb8IxuPVauM-PEfiduXUMERnzTaQeYLkF3NW_c94S5ik--06UOTz8SMwFLPpppAATBC4j0x_UYyYWgvUc2_0MoLczFlpOtuRzfLm_90mJe7z7VxXLyGNAZEkGUbRIpHsZsla4zKmUtqsB3LIzlOo0Ne3Jv98z94vfK9pWIp7HaXk7FSIwcvWlvwRzKLrEsln58s1t_AvZ0KFe9uzM1SOUPsxKFTkH7IFAo3vFmGe87sGnJguh1C2J",
  },
  {
    id: "prop-5",
    propertyType: "condo",
    title: "83 S King St, Unit 302",
    price: 420000,
    currency: "$",
    pricePerSqFt: "$591/sqft",
    listingType: "For Sale",
    statusBadge: null,
    address: "83 S King St, Unit 302",
    neighborhood: "Pioneer Square, Seattle",
    bedrooms: 1,
    bathrooms: 1,
    area: 710,
    areaUnit: "sqft",
    photoCount: "1/15",
    contextTag: "Transit Score: 98",
    contextIcon: "train",
    timeAgo: "Added 5d ago",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5lejtKg9i8vGvBYAnGnX6bgX8DaDllXvzCfyu9G_rYCgPOC1Hvbc6RYVpcIP-ufcS_ednx7htFNCXdiIDKupolbew4qzOqp-CTYyayy4ux5aCFBHZ-pytDe2-RmxTHs2rkM54_VIE3sdsYa-OF5ciwdF3Kukkep-5Xv_x_6QIg3LjmKWzBlXX8nFQAUzmo9Dk1D1lmpVzWV2DPC0xfAv-341i1wXMjNr-3OT2wZ_VluUAQC3yBhmI",
  },
  {
    id: "prop-6",
    propertyType: "condo",
    title: "505 5th Ave W, Unit 4B",
    price: 1150000,
    currency: "$",
    pricePerSqFt: "$746/sqft",
    listingType: "For Sale",
    statusBadge: "OPEN SUN",
    address: "505 5th Ave W, Unit 4B",
    neighborhood: "Lower Queen Anne, Seattle",
    bedrooms: 3,
    bathrooms: 2,
    area: 1540,
    areaUnit: "sqft",
    photoCount: "1/21",
    contextTag: "Private 320 sqft Deck",
    contextIcon: "balcony",
    timeAgo: "Added 1w ago",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYgzPiCn9VxtD9Vn9v6V1VghSgTLLfEP-MWs2WWq5mT71fRDEZmHjcN6cqtD2z8TLjJoB7kDMamgAvtyCirB-yJa_j_fRnCFgBUGtahu4SsSkcab7sFVzXOsb3spnuDoM6K-WKlDDXHn3YQRwWD2yfsl7H7w8KvpmdtC3vrNz90hB4-qughZ09a6zLMtYia1z4JgMFch5BUjdr7pU4mxGWVg5IjeB1SsHN3cyU8VN3-fTdNVOx4SmT",
  },
];

const placeholderActivePinCallout = {
  price: "$1,290,000",
  specs: "3 bd • 2.5 ba • 1,460 sqft",
  address: "2101 4th Ave, Unit 2804",
  badge: "FOR SALE",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAOiHEWlufzc7Q_yhQFRgWPJHmFn231CTWwasnpL_JM1KRDBxc4wmC61UR2Y5cHCbUmA9HNhizvKyZOEqiCHYZGl7aX5Sbeb7jcbAORc41t-2I397MxhL4QslU7jIVbyy2jJiZeYCQssOlQEIEp7YHusqtqkv6NBQVh9ibNF9ox5zLihwOxfp1yypHaDljh7yd5v-zAwh3RdR7gr_4UA8SfdD_LfevrQRc5-BbKQXcY9999eFwLrgE2",
};

const placeholderMapPins = [
  { price: "$1.29M", top: "28%", left: "45%", active: true },
  { price: "$849k", top: "20%", left: "62%", active: false },
  { price: "$685k", top: "42%", left: "54%", active: false },
  { price: "$2.45M", top: "68%", left: "78%", active: false },
  { price: "$420k", top: "60%", left: "38%", active: false },
  { price: "$1.15M", top: "16%", left: "34%", active: false },
  { price: "$925k", top: "75%", left: "50%", active: false },
];

const placeholderMarketStats = [
  {
    name: "DOWNTOWN & BELLTOWN",
    trend: "+2.4% MoM",
    trendIsPositive: true,
    medianPrice: "$785,000",
    pricePerSqFt: "$810/sqft",
    activeCount: "412 active listings",
    avgDaysOnMarket: "28 avg days on market",
  },
  {
    name: "SOUTH LAKE UNION TECH",
    trend: "+4.1% MoM",
    trendIsPositive: true,
    medianPrice: "$695,000",
    pricePerSqFt: "$745/sqft",
    activeCount: "329 active listings",
    avgDaysOnMarket: "19 avg days on market",
  },
  {
    name: "CAPITOL HILL & CENTRAL",
    trend: "-0.8% MoM",
    trendIsPositive: false,
    medianPrice: "$890,000",
    pricePerSqFt: "$670/sqft",
    activeCount: "215 active listings",
    avgDaysOnMarket: "24 avg days on market",
  },
  {
    name: "BELLEVUE & EASTSIDE",
    trend: "+5.7% MoM",
    trendIsPositive: true,
    medianPrice: "$1,650,000",
    pricePerSqFt: "$890/sqft",
    activeCount: "503 active listings",
    avgDaysOnMarket: "14 avg days on market",
  },
];

const placeholderData: Record<string, unknown> = {
  companyName: "Urban Search",
  companyTagline:
    "Direct MLS real estate platform engineered for high-velocity residential exploration, institutional valuation standards, and verified neighborhood data.",
  activeLocations: ["Seattle, WA", "Metro Downtown"],
  quickFilters: [
    { label: "Open House Weekend", dotColor: "bg-emerald-500" },
    { label: "MLS Verified Only", icon: "verified" },
    {
      label: "Price Reduced (Past 7 Days)",
      icon: "trending_down",
      active: true,
    },
    { label: "Waterfront / Bay View" },
    { label: "Parking Garage Included" },
  ],
  submarkets: [
    { name: "Downtown Core", count: "412", href: "#downtown" },
    { name: "Belltown Waterfront", count: "184", href: "#waterfront" },
    { name: "South Lake Union", count: "329", href: "#tech" },
    { name: "Bellevue East", count: "503", href: "#eastside" },
  ],
  totalListingsCount: "1,428",
  marketRegionLabel: "Greater Metropolitan Area, WA",
  mlsStatusLabel: "MLS Synced 3 min ago",
  properties: placeholderProperties,
  mapPins: placeholderMapPins,
  activePinCallout: placeholderActivePinCallout,
  marketIntelligenceTitle: "Seattle Metropolitan Market Intelligence",
  marketIntelligenceSubtitle:
    "Real-time inventory benchmarks and price metrics across primary target corridors",
  marketStats: placeholderMarketStats,
};

const lucideIconMap = {
  apartment: Building2,
  search: Search,
  favorite: Heart,
  notifications: Bell,
  bookmark: Bookmark,
  account_circle: UserRound,
  expand_more: ChevronDown,
  tune: SlidersHorizontal,
  restart_alt: RotateCcw,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  photo_camera: Camera,
  add: Plus,
  remove: Minus,
  explore: Compass,
  map: Map,
  satellite_alt: Satellite,
  directions_subway: TrainFront,
  school: GraduationCap,
  flood: Waves,
  vertical_split: PanelsTopLeft,
  grid_view: Grid2x2,
  view_agenda: Rows3,
  home: House,
  verified_user: ShieldCheck,
  arrow_forward: ArrowRight,
  close: X,
  trending_down: ArrowDown,
  garage: CarFront,
  pool: Waves,
  deck: House,
  train: TrainFront,
  balcony: House,
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

export default function RealEstate02({ resolvedData }: RealEstate02Props) {
  const data = normalizeTemplateData(resolvedData);

  const properties = (
    Array.isArray(data.properties) && data.properties.length > 0
      ? data.properties
      : placeholderProperties
  ) as Record<string, any>[];

  const activeLocations = (
    Array.isArray(data.activeLocations) ? data.activeLocations : []
  ) as string[];

  const quickFilters = (
    Array.isArray(data.quickFilters) ? data.quickFilters : []
  ) as Record<string, any>[];

  const submarkets = (
    Array.isArray(data.submarkets) ? data.submarkets : []
  ) as Record<string, any>[];

  const mapPins = (
    Array.isArray(data.mapPins) && data.mapPins.length > 0
      ? data.mapPins
      : placeholderMapPins
  ) as Record<string, any>[];

  const activeCallout = (
    data.activePinCallout && typeof data.activePinCallout === "object"
      ? data.activePinCallout
      : placeholderActivePinCallout
  ) as Record<string, any>;

  const marketStats = (
    Array.isArray(data.marketStats) && data.marketStats.length > 0
      ? data.marketStats
      : placeholderMarketStats
  ) as Record<string, any>[];

  const [activeCategory, setActiveCategory] = useState("buy");
  const [searchText, setSearchText] = useState("");
  const [locationTokens, setLocationTokens] = useState(activeLocations);
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [minimumBeds, setMinimumBeds] = useState("");
  const [minimumBaths, setMinimumBaths] = useState("");
  const [minimumArea, setMinimumArea] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [quickFilterLabels, setQuickFilterLabels] = useState<string[]>(
    quickFilters
      .filter((filter) => filter.active)
      .map((filter) => String(filter.label)),
  );
  const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("featured");
  const [viewMode, setViewMode] = useState<"split" | "grid" | "list">("split");
  const [mapZoom, setMapZoom] = useState(1);
  const [mapStyle, setMapStyle] = useState<"map" | "contrast">("map");
  const [selectedPin, setSelectedPin] = useState<number | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>([]);
  const [savedSearchesOpen, setSavedSearchesOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [accountNoticeOpen, setAccountNoticeOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const resetFilters = () => {
    setActiveCategory("buy");
    setSearchText("");
    setLocationTokens([]);
    setPriceRange("");
    setPropertyType("");
    setMinimumBeds("");
    setMinimumBaths("");
    setMinimumArea("");
    setStatusFilter("");
    setVerifiedOnly(false);
    setQuickFilterLabels([]);
    setSortOrder("featured");
    setCurrentPage(1);
  };

  const filteredProperties = properties
    .filter((property) => {
      const searchableText = [
        property.title,
        property.address,
        property.neighborhood,
        property.city,
        property.location,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (
        locationTokens.length &&
        !locationTokens.some((token) =>
          searchableText.includes(token.toLowerCase().split(",")[0].trim()),
        )
      )
        return false;
      if (
        searchText.trim() &&
        !searchableText.includes(searchText.trim().toLowerCase())
      )
        return false;

      const status = String(
        property.listingType || property.status || "sale",
      ).toLowerCase();
      if (activeCategory === "rent" && !/rent|lease/.test(status)) return false;
      if (activeCategory === "buy" && /rent|lease/.test(status)) return false;
      if (
        activeCategory === "commercial" &&
        !String(
          property.propertyType || property.type || property.category || "",
        )
          .toLowerCase()
          .includes("commercial")
      )
        return false;
      if (activeCategory === "new-developments" && !property.newDevelopment)
        return false;

      const price = numericPrice(property.price);
      if (priceRange) {
        const [minimum, maximum] = priceRange.split(":").map(Number);
        if (
          !Number.isFinite(price) ||
          price < minimum ||
          (maximum > 0 && price > maximum)
        )
          return false;
      }
      if (
        propertyType &&
        !String(
          property.propertyType || property.type || property.category || "",
        )
          .toLowerCase()
          .includes(propertyType)
      )
        return false;
      if (minimumBeds && Number(property.bedrooms || 0) < Number(minimumBeds))
        return false;
      if (
        minimumBaths &&
        Number(property.bathrooms || 0) < Number(minimumBaths)
      )
        return false;
      if (minimumArea && Number(property.area || 0) < Number(minimumArea))
        return false;
      if (
        statusFilter &&
        !String(property.statusBadge || "")
          .toLowerCase()
          .includes(statusFilter)
      )
        return false;
      if (verifiedOnly && property.verified === false) return false;

      return quickFilterLabels.every((label) => {
        if (label === "Open House Weekend")
          return /open/i.test(String(property.statusBadge || ""));
        if (label === "MLS Verified Only") return property.verified !== false;
        if (label === "Price Reduced (Past 7 Days)")
          return property.contextIcon === "trending_down";
        if (label === "Waterfront / Bay View")
          return /waterfront|bay|view/i.test(
            `${property.title || ""} ${property.neighborhood || ""} ${property.contextTag || ""}`,
          );
        if (label === "Parking Garage Included")
          return /garage|parking/i.test(
            `${property.contextTag || ""} ${property.parking || ""}`,
          );
        return true;
      });
    })
    .sort((first, second) => {
      if (sortOrder === "price-low")
        return (
          (numericPrice(first.price) || 0) - (numericPrice(second.price) || 0)
        );
      if (sortOrder === "price-high")
        return (
          (numericPrice(second.price) || 0) - (numericPrice(first.price) || 0)
        );
      if (sortOrder === "area")
        return Number(second.area || 0) - Number(first.area || 0);
      if (sortOrder === "price-sqft")
        return (
          (numericPrice(second.pricePerSqFt) || 0) -
          (numericPrice(first.pricePerSqFt) || 0)
        );
      if (sortOrder === "featured")
        return (
          Number(first.verified === false) - Number(second.verified === false)
        );
      if (sortOrder === "newest") {
        const ageHours = (property: Record<string, any>) => {
          const age = String(property.timeAgo || "").match(/(\d+)\s*(h|d|w)/i);
          if (!age) return Number.POSITIVE_INFINITY;
          const multiplier =
            age[2].toLowerCase() === "w"
              ? 168
              : age[2].toLowerCase() === "d"
                ? 24
                : 1;
          return Number(age[1]) * multiplier;
        };
        return ageHours(first) - ageHours(second);
      }
      return 0;
    });

  const pageSize = 6;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProperties.length / pageSize),
  );
  const page = Math.min(currentPage, totalPages);
  const pageProperties = filteredProperties.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );
  const defaultPinIndex = Math.max(
    0,
    mapPins.findIndex((pin) => pin.active),
  );
  const activePinIndex = selectedPin ?? defaultPinIndex;
  const mapCallout =
    selectedPin === null
      ? activeCallout
      : properties[selectedPin]
        ? {
            ...activeCallout,
            price: formatPrice(
              properties[selectedPin].price,
              displayValue(properties[selectedPin].currency, "$"),
              properties[selectedPin].listingType,
            ),
            specs: `${properties[selectedPin].bedrooms ?? "-"} bd • ${properties[selectedPin].bathrooms ?? "-"} ba • ${properties[selectedPin].area ?? "-"} ${displayValue(properties[selectedPin].areaUnit, "sqft")}`,
            address: displayValue(
              properties[selectedPin].address || properties[selectedPin].title,
            ),
            imageUrl:
              properties[selectedPin].imageUrl || activeCallout.imageUrl,
            badge: displayValue(
              properties[selectedPin].listingType,
              "FOR SALE",
            ).toUpperCase(),
          }
        : null;

  return (
    <div className="bg-[#f9f9ff] text-[#111c2d] antialiased min-h-screen flex flex-col font-['Geist',sans-serif] text-[14px] leading-[20px] selection:bg-[#dbe1ff] selection:text-[#00174b]">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .map-pattern {
          background-color: #f8fafc;
          background-image: 
            radial-gradient(#e2e8f0 1.2px, transparent 1.2px),
            radial-gradient(#e2e8f0 1.2px, #f8fafc 1.2px);
          background-size: 32px 32px;
          background-position: 0 0, 16px 16px;
        }
        .map-pattern-contrast {
          background-color: #465247;
          background-image: radial-gradient(#66725f 1.2px, transparent 1.2px), radial-gradient(#465247 1.2px, #465247 1.2px);
        }
      `}</style>

      {/* ================= TOP APP BAR ================= */}
      <header className="sticky top-0 z-40 w-full px-5 h-14 flex items-center justify-between bg-[#ffffff] border-b border-[#c3c6d7]">
        <div className="flex items-center gap-6 h-full">
          <a className="flex items-center gap-2 select-none" href="#listings">
            <div className="w-8 h-8 rounded-lg bg-[#004ac6] flex items-center justify-center text-[#ffffff]">
              <Icon
                name="apartment"
                className="text-[#ffffff]"
                size={20}
                strokeWidth={2.2}
              />
            </div>
            <span className="text-[18px] leading-[24px] tracking-[-0.005em] font-semibold text-[#004ac6]">
              {displayValue(data.companyName, "Urban Search")}
            </span>
          </a>

          <nav className="hidden md:flex items-center h-full space-x-1">
            <a
              aria-current={activeCategory === "buy" ? "page" : undefined}
              className={`${activeCategory === "buy" ? "border-[#004ac6] text-[#004ac6]" : "border-transparent text-[#434655] hover:text-[#111c2d]"} border-b-2 font-medium h-full flex items-center px-3`}
              href="#listings"
              onClick={() => {
                setActiveCategory("buy");
                setCurrentPage(1);
              }}
            >
              Buy
            </a>
            <a
              aria-current={activeCategory === "rent" ? "page" : undefined}
              className={`${activeCategory === "rent" ? "border-[#004ac6] text-[#004ac6]" : "border-transparent text-[#434655] hover:text-[#111c2d]"} border-b-2 h-full flex items-center px-3 font-medium transition-colors`}
              href="#listings"
              onClick={() => {
                setActiveCategory("rent");
                setCurrentPage(1);
              }}
            >
              Rent
            </a>
            <a
              aria-current={
                activeCategory === "commercial" ? "page" : undefined
              }
              className={`${activeCategory === "commercial" ? "border-[#004ac6] text-[#004ac6]" : "border-transparent text-[#434655] hover:text-[#111c2d]"} border-b-2 h-full flex items-center px-3 font-medium transition-colors`}
              href="#listings"
              onClick={() => {
                setActiveCategory("commercial");
                setCurrentPage(1);
              }}
            >
              Commercial
            </a>
            <a
              aria-current={
                activeCategory === "new-developments" ? "page" : undefined
              }
              className={`${activeCategory === "new-developments" ? "border-[#004ac6] text-[#004ac6]" : "border-transparent text-[#434655] hover:text-[#111c2d]"} border-b-2 h-full flex items-center px-3 font-medium transition-colors`}
              href="#listings"
              onClick={() => {
                setActiveCategory("new-developments");
                setCurrentPage(1);
              }}
            >
              New Developments
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              aria-label="Saved searches"
              aria-expanded={savedSearchesOpen}
              className="h-9 px-2 sm:px-3 inline-flex items-center gap-1 text-[13px] leading-[18px] text-[#434655] hover:text-[#111c2d] hover:bg-[#f0f3ff] transition-colors rounded-lg border border-[#c3c6d7]"
              onClick={() => setSavedSearchesOpen((open) => !open)}
              type="button"
            >
              <Icon
                name="favorite"
                className="text-[#434655]"
                size={18}
                strokeWidth={2.2}
              />
              <span className="hidden lg:inline">Saved Searches</span>
              <span className="ml-1 px-1.5 py-0.5 bg-[#dae2fd] text-[#131b2e] text-[11px] leading-[14px] font-medium rounded-full">
                {savedSearches.length}
              </span>
            </button>
            {savedSearchesOpen && (
              <div className="absolute right-0 top-11 z-50 w-64 max-w-[calc(100vw-24px)] rounded-lg border border-[#c3c6d7] bg-white p-3 shadow-lg">
                <p className="mb-2 text-[13px] font-semibold text-[#111c2d]">
                  Saved searches
                </p>
                {savedSearches.length ? (
                  savedSearches.map((saved, index) => (
                    <button
                      key={`${saved.query}-${index}`}
                      className="block w-full border-t border-[#e8eeff] py-2 text-left text-[12px] text-[#434655] hover:text-[#004ac6]"
                      onClick={() => {
                        setActiveCategory(saved.category);
                        setSearchText(saved.query);
                        setLocationTokens(saved.locations);
                        setPriceRange(saved.priceRange);
                        setPropertyType(saved.propertyType);
                        setMinimumBeds(saved.minimumBeds);
                        setMinimumBaths(saved.minimumBaths);
                        setMinimumArea(saved.minimumArea);
                        setStatusFilter(saved.statusFilter);
                        setVerifiedOnly(saved.verifiedOnly);
                        setQuickFilterLabels(saved.quickFilterLabels);
                        setCurrentPage(1);
                        setSavedSearchesOpen(false);
                      }}
                      type="button"
                    >
                      {saved.query ||
                        saved.locations.join(", ") ||
                        "All listings"}
                    </button>
                  ))
                ) : (
                  <p className="text-[12px] text-[#737686]">
                    No searches saved yet.
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              aria-label="Alerts and notifications"
              aria-expanded={notificationsOpen}
              className="h-9 px-3 inline-flex items-center gap-1 text-[13px] leading-[18px] text-[#434655] hover:text-[#111c2d] hover:bg-[#f0f3ff] transition-colors rounded-lg border border-[#c3c6d7]"
              onClick={() => setNotificationsOpen((open) => !open)}
              type="button"
            >
              <Icon
                name="notifications"
                className="text-[#434655]"
                size={18}
                strokeWidth={2.2}
              />
            </button>
            {notificationsOpen && (
              <div
                role="status"
                className="absolute right-0 top-11 z-50 w-56 rounded-lg border border-[#c3c6d7] bg-white p-3 text-[12px] text-[#737686] shadow-lg"
              >
                No new notifications.
              </div>
            )}
          </div>
          <div className="h-6 w-[1px] bg-[#c3c6d7] mx-1 hidden sm:block" />
          <button
            aria-label="Save current search"
            className="h-9 px-2 sm:px-3 bg-[#2563eb] hover:bg-[#004ac6] text-[#ffffff] rounded-lg text-[13px] leading-[18px] font-medium transition-colors flex items-center gap-1 shadow-sm"
            onClick={() =>
              setSavedSearches((saved) => [
                ...saved,
                {
                  category: activeCategory,
                  query: searchText,
                  locations: [...locationTokens],
                  priceRange,
                  propertyType,
                  minimumBeds,
                  minimumBaths,
                  minimumArea,
                  statusFilter,
                  verifiedOnly,
                  quickFilterLabels: [...quickFilterLabels],
                },
              ])
            }
            type="button"
          >
            <Icon
              name="bookmark"
              className="text-[#ffffff]"
              size={18}
              strokeWidth={2.2}
            />
            <span className="hidden sm:inline">Save Search</span>
          </button>
          <button
            aria-label="Sign in"
            className="h-9 px-2 sm:px-3 text-[13px] leading-[18px] text-[#111c2d] hover:bg-[#f0f3ff] transition-colors rounded-lg border border-[#c3c6d7] flex items-center gap-1"
            onClick={() => setAccountNoticeOpen((open) => !open)}
            type="button"
          >
            <Icon
              name="account_circle"
              className="text-[#111c2d]"
              size={18}
              strokeWidth={2.2}
            />
            <span className="hidden sm:inline">Sign In</span>
          </button>
          {accountNoticeOpen && (
            <div
              role="status"
              className="absolute right-3 top-14 z-50 max-w-[calc(100vw-24px)] rounded-lg border border-[#c3c6d7] bg-white p-3 text-[12px] text-[#434655] shadow-lg"
            >
              Account sign-in isn&apos;t connected in this template.
            </div>
          )}
        </div>
      </header>

      {/* ================= ADVANCED HIGH-DENSITY SEARCH & FILTER BAR ================= */}
      <section className="bg-[#ffffff] border-b border-[#c3c6d7] py-2 px-5 sticky top-14 z-30 shadow-sm">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-2">
          {/* Primary Search Compound Console */}
          <div className="flex flex-wrap items-center gap-2">
            <label className="sr-only" htmlFor="mobile-category">
              Listing category
            </label>
            <select
              id="mobile-category"
              className="md:hidden h-10 rounded-lg border border-[#c3c6d7] bg-white px-3 text-[13px] text-[#111c2d]"
              value={activeCategory}
              onChange={(event) => {
                setActiveCategory(event.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
              <option value="commercial">Commercial</option>
              <option value="new-developments">New Developments</option>
            </select>
            <div className="flex-1 w-full min-w-0 sm:min-w-[320px] h-10 border border-[#c3c6d7] rounded-lg bg-[#ffffff] flex items-center px-3 focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-[#2563eb]/15 transition-all">
              <Icon
                name="search"
                className="text-[#737686] mr-2"
                size={20}
                strokeWidth={2.2}
              />
              <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar py-1 mr-2 max-w-[120px] sm:max-w-[280px] lg:max-w-none">
                {locationTokens.map((loc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#e8eeff] text-[#111c2d] text-[11px] leading-[14px] font-medium whitespace-nowrap"
                  >
                    {loc}
                    <button
                      aria-label="Remove filter"
                      className="hover:text-[#ba1a1a] flex items-center"
                      onClick={() => {
                        setLocationTokens((tokens) =>
                          tokens.filter((_, tokenIndex) => tokenIndex !== idx),
                        );
                        setCurrentPage(1);
                      }}
                      type="button"
                    >
                      <Icon
                        name="close"
                        className="text-current"
                        size={14}
                        strokeWidth={2.2}
                      />
                    </button>
                  </span>
                ))}
              </div>
              <input
                className="flex-1 min-w-0 sm:min-w-[140px] border-0 p-0 text-[13px] leading-[18px] text-[#111c2d] placeholder:text-[#737686] focus:ring-0 focus:outline-none bg-transparent"
                placeholder="Add neighborhood, ZIP, or address..."
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                  setCurrentPage(1);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && searchText.trim()) {
                    event.preventDefault();
                    setLocationTokens((tokens) => [
                      ...tokens,
                      searchText.trim(),
                    ]);
                    setSearchText("");
                  }
                }}
                type="text"
              />
            </div>

            {/* Price Filter Trigger */}
            <details className="relative group">
              <summary className="list-none cursor-pointer h-10 px-3 border border-[#c3c6d7] rounded-lg bg-[#ffffff] hover:bg-[#f0f3ff] text-[#111c2d] flex items-center gap-2 text-[13px] leading-[18px] transition-colors">
                <span className="text-[#737686] text-[11px] leading-[14px]">
                  Price:
                </span>
                <span className="font-['JetBrains_Mono',monospace] text-[13px] leading-[16px] tracking-[-0.01em] font-medium">
                  {priceRange === "400000:1800000"
                    ? "$400k - $1.8M"
                    : priceRange === "0:500000"
                      ? "Up to $500k"
                      : priceRange === "1000000:2000000"
                        ? "$1M - $2M"
                        : priceRange === "2000000:0"
                          ? "$2M+"
                          : "Any"}
                </span>
                <Icon
                  name="expand_more"
                  className="text-[#737686]"
                  size={18}
                  strokeWidth={2.2}
                />
              </summary>
              <div className="absolute left-0 top-11 z-40 w-56 rounded-lg border border-[#c3c6d7] bg-white p-3 shadow-lg">
                <label
                  className="block text-[11px] font-medium text-[#737686]"
                  htmlFor="listing-price"
                >
                  Price range
                </label>
                <select
                  id="listing-price"
                  value={priceRange}
                  onChange={(event) => {
                    setPriceRange(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="mt-1 w-full rounded border border-[#c3c6d7] bg-white p-2 text-[13px]"
                >
                  <option value="">Any price</option>
                  <option value="0:500000">Up to $500k</option>
                  <option value="400000:1800000">$400k - $1.8M</option>
                  <option value="1000000:2000000">$1M - $2M</option>
                  <option value="2000000:0">$2M+</option>
                </select>
              </div>
            </details>

            {/* Property Type Trigger */}
            <details className="relative group">
              <summary
                className={`list-none cursor-pointer h-10 px-3 border rounded-lg flex items-center gap-2 text-[13px] leading-[18px] transition-colors ${propertyType ? "border-[#2563eb] bg-[#f0f3ff] text-[#2563eb]" : "border-[#c3c6d7] bg-white text-[#111c2d] hover:bg-[#f0f3ff]"}`}
              >
                <span>{propertyType || "All types"}</span>
                {propertyType && (
                  <span className="px-1.5 py-0.5 rounded-full bg-[#2563eb] text-[#ffffff] text-[11px] leading-[14px]">
                    1
                  </span>
                )}
                <Icon
                  name="expand_more"
                  className="text-[#2563eb]"
                  size={18}
                  strokeWidth={2.2}
                />
              </summary>
              <div className="absolute left-0 top-11 z-40 w-52 rounded-lg border border-[#c3c6d7] bg-white p-3 shadow-lg">
                <label
                  className="block text-[11px] font-medium text-[#737686]"
                  htmlFor="listing-type"
                >
                  Property type
                </label>
                <select
                  id="listing-type"
                  value={propertyType}
                  onChange={(event) => {
                    setPropertyType(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="mt-1 w-full rounded border border-[#c3c6d7] bg-white p-2 text-[13px]"
                >
                  <option value="">All types</option>
                  <option value="condo">Condo</option>
                  <option value="single">Single family</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </details>

            {/* Beds Trigger */}
            <details className="relative group">
              <summary className="list-none cursor-pointer h-10 px-3 border border-[#c3c6d7] rounded-lg bg-[#ffffff] hover:bg-[#f0f3ff] text-[#111c2d] flex items-center gap-2 text-[13px] leading-[18px] transition-colors">
                <span className="text-[#737686] text-[11px] leading-[14px]">
                  Beds:
                </span>
                <span className="font-medium">
                  {minimumBeds ? `${minimumBeds}+` : "Any"}
                </span>
                <Icon
                  name="expand_more"
                  className="text-[#737686]"
                  size={18}
                  strokeWidth={2.2}
                />
              </summary>
              <div className="absolute left-0 top-11 z-40 w-44 rounded-lg border border-[#c3c6d7] bg-white p-3 shadow-lg">
                <label
                  className="block text-[11px] font-medium text-[#737686]"
                  htmlFor="minimum-beds"
                >
                  Minimum bedrooms
                </label>
                <select
                  id="minimum-beds"
                  value={minimumBeds}
                  onChange={(event) => {
                    setMinimumBeds(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="mt-1 w-full rounded border border-[#c3c6d7] bg-white p-2 text-[13px]"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
            </details>

            {/* Baths Trigger */}
            <details className="relative group">
              <summary className="list-none cursor-pointer h-10 px-3 border border-[#c3c6d7] rounded-lg bg-[#ffffff] hover:bg-[#f0f3ff] text-[#111c2d] flex items-center gap-2 text-[13px] leading-[18px] transition-colors">
                <span className="text-[#737686] text-[11px] leading-[14px]">
                  Baths:
                </span>
                <span className="font-medium">
                  {minimumBaths ? `${minimumBaths}+` : "Any"}
                </span>
                <Icon
                  name="expand_more"
                  className="text-[#737686]"
                  size={18}
                  strokeWidth={2.2}
                />
              </summary>
              <div className="absolute left-0 top-11 z-40 w-44 rounded-lg border border-[#c3c6d7] bg-white p-3 shadow-lg">
                <label
                  className="block text-[11px] font-medium text-[#737686]"
                  htmlFor="minimum-baths"
                >
                  Minimum bathrooms
                </label>
                <select
                  id="minimum-baths"
                  value={minimumBaths}
                  onChange={(event) => {
                    setMinimumBaths(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="mt-1 w-full rounded border border-[#c3c6d7] bg-white p-2 text-[13px]"
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="1.5">1.5+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                </select>
              </div>
            </details>

            {/* Area Trigger */}
            <details className="relative group">
              <summary className="list-none cursor-pointer h-10 px-3 border border-[#c3c6d7] rounded-lg bg-[#ffffff] hover:bg-[#f0f3ff] text-[#111c2d] flex items-center gap-2 text-[13px] leading-[18px] transition-colors">
                <span className="text-[#737686] text-[11px] leading-[14px]">
                  Area:
                </span>
                <span className="font-['JetBrains_Mono',monospace] text-[13px] leading-[16px] tracking-[-0.01em] font-medium">
                  {minimumArea ? `${minimumArea}+ sqft` : "Any"}
                </span>
                <Icon
                  name="expand_more"
                  className="text-[#737686]"
                  size={18}
                  strokeWidth={2.2}
                />
              </summary>
              <div className="absolute left-0 top-11 z-40 w-44 rounded-lg border border-[#c3c6d7] bg-white p-3 shadow-lg">
                <label
                  className="block text-[11px] font-medium text-[#737686]"
                  htmlFor="minimum-area"
                >
                  Minimum area
                </label>
                <select
                  id="minimum-area"
                  value={minimumArea}
                  onChange={(event) => {
                    setMinimumArea(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="mt-1 w-full rounded border border-[#c3c6d7] bg-white p-2 text-[13px]"
                >
                  <option value="">Any</option>
                  <option value="800">800+ sqft</option>
                  <option value="1200">1,200+ sqft</option>
                  <option value="2000">2,000+ sqft</option>
                  <option value="3500">3,500+ sqft</option>
                </select>
              </div>
            </details>

            <button
              aria-expanded={moreFiltersOpen}
              aria-controls="more-filters"
              className="h-10 px-3 border border-[#c3c6d7] rounded-lg bg-[#ffffff] hover:bg-[#f0f3ff] text-[#111c2d] flex items-center gap-1 text-[13px] leading-[18px] transition-colors"
              onClick={() => setMoreFiltersOpen((open) => !open)}
              type="button"
            >
              <Icon
                name="tune"
                className="text-[#111c2d]"
                size={18}
                strokeWidth={2.2}
              />
              <span className="font-medium">More Filters</span>
              <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
            </button>
            <button
              className="h-10 px-3 text-[13px] leading-[18px] text-[#434655] hover:text-[#ba1a1a] transition-colors flex items-center gap-1 font-medium"
              onClick={resetFilters}
              type="button"
            >
              <Icon
                name="restart_alt"
                className="text-current"
                size={16}
                strokeWidth={2.2}
              />
              <span>Reset</span>
            </button>
          </div>
          <div
            id="more-filters"
            style={{ display: moreFiltersOpen ? "flex" : "none" }}
            className="flex flex-wrap items-center gap-4 rounded-lg border border-[#c3c6d7] bg-[#f9faff] p-3 text-[12px] text-[#434655]"
          >
            <label className="inline-flex items-center gap-2">
              <input
                checked={verifiedOnly}
                className="accent-[#2563eb]"
                onChange={(event) => setVerifiedOnly(event.target.checked)}
                type="checkbox"
              />
              Verified listings only
            </label>
            <label className="flex items-center gap-2">
              Status
              <select
                className="rounded border border-[#c3c6d7] bg-white px-2 py-1"
                value={statusFilter}
                onChange={(event) => {
                  setStatusFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">Any</option>
                <option value="open">Open house</option>
                <option value="new">New</option>
                <option value="pending">Pending</option>
              </select>
            </label>
            <button
              className="font-medium text-[#004ac6] underline"
              onClick={resetFilters}
              type="button"
            >
              Clear filters
            </button>
          </div>

          {/* Quick Criteria & Submarkets Strip */}
          <div className="flex items-center justify-between border-t border-[#c3c6d7]/60 pt-1 text-[13px] leading-[18px]">
            <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar py-0.5">
              <span className="text-[11px] leading-[14px] text-[#737686] mr-1 uppercase tracking-wider font-medium">
                Quick Filters:
              </span>
              {quickFilters.map((qf, idx) => (
                <button
                  key={idx}
                  aria-pressed={quickFilterLabels.includes(String(qf.label))}
                  onClick={() => {
                    const label = String(qf.label);
                    setQuickFilterLabels((selected) =>
                      selected.includes(label)
                        ? selected.filter((item) => item !== label)
                        : [...selected, label],
                    );
                    setCurrentPage(1);
                  }}
                  type="button"
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[13px] transition-colors ${
                    quickFilterLabels.includes(String(qf.label))
                      ? "bg-[#f0f3ff] border border-[#2563eb] text-[#004ac6] font-medium"
                      : "bg-[#ffffff] border border-[#c3c6d7] hover:border-[#2563eb] text-[#111c2d]"
                  }`}
                >
                  {qf.dotColor && (
                    <span className={`w-2 h-2 rounded-full ${qf.dotColor}`} />
                  )}
                  {qf.icon && (
                    <Icon
                      name={
                        qf.icon === "verified"
                          ? "verified_user"
                          : qf.icon === "trending_down"
                            ? "trending_down"
                            : "sparkles"
                      }
                      className="text-[#004ac6]"
                      size={14}
                      strokeWidth={2.2}
                    />
                  )}
                  <span>{displayValue(qf.label)}</span>
                </button>
              ))}
            </div>

            {submarkets.length > 0 && (
              <div className="hidden 2xl:flex items-center gap-2 text-[11px] leading-[14px] text-[#434655]">
                <span className="text-[#737686]">Sub-markets:</span>
                {submarkets.map((sm, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-[#c3c6d7]">•</span>}
                    <a
                      className="hover:text-[#004ac6] hover:underline"
                      href="#listings"
                      onClick={() => {
                        setSearchText(String(sm.name).split(" ")[0]);
                        setCurrentPage(1);
                      }}
                    >
                      {displayValue(sm.name)} ({displayValue(sm.count)})
                    </a>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= DISCOVERY TOOLBAR & VIEW CONTROLLER ================= */}
      <div className="bg-[#f0f3ff] border-b border-[#c3c6d7] px-3 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[13px] leading-[18px]">
        <div className="flex items-center gap-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[18px] leading-[24px] tracking-[-0.005em] font-semibold text-[#111c2d]">
              {filteredProperties.length}
            </span>
            <span className="text-[#434655] font-medium">Properties shown</span>
          </div>
          <span className="text-[#c3c6d7] hidden sm:inline">|</span>
          <span className="text-[#434655] hidden sm:inline">
            {displayValue(
              data.marketRegionLabel,
              "Greater Metropolitan Area, WA",
            )}
          </span>
          {Boolean(data.mlsStatusLabel) && (
            <span className="text-[11px] leading-[14px] px-2 py-0.5 rounded bg-[#e8eeff] text-[#434655] hidden lg:inline-flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {displayValue(data.mlsStatusLabel)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <label
              className="text-[11px] leading-[14px] text-[#737686] hidden md:block"
              htmlFor="sort-select"
            >
              Sort By:
            </label>
            <select
              className="h-8 py-0 pl-2.5 pr-8 border border-[#c3c6d7] rounded bg-[#ffffff] text-[13px] leading-[18px] font-medium text-[#111c2d] focus:ring-1 focus:ring-[#2563eb] focus:border-[#2563eb] cursor-pointer"
              id="sort-select"
              value={sortOrder}
              onChange={(event) => {
                setSortOrder(event.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="featured">Featured &amp; Verified</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest Listed</option>
              <option value="price-sqft">Price / Sq Ft</option>
              <option value="area">Largest Sq Footage</option>
            </select>
          </div>

          <div className="inline-flex p-0.5 bg-[#e8eeff] border border-[#c3c6d7] rounded-lg">
            <button
              aria-label="Split map and listings view"
              aria-pressed={viewMode === "split"}
              onClick={() => setViewMode("split")}
              type="button"
              className={`px-2.5 py-1 rounded flex items-center gap-1 text-[13px] leading-[16px] font-medium ${viewMode === "split" ? "bg-white text-[#004ac6] shadow-sm" : "text-[#434655] hover:text-[#111c2d]"}`}
              title="Split Map View"
            >
              <Icon
                name="vertical_split"
                className="text-current"
                size={16}
                strokeWidth={2.2}
              />
              <span className="hidden sm:inline">Split</span>
            </button>
            <button
              aria-label="Grid view only"
              aria-pressed={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
              type="button"
              className={`px-2.5 py-1 rounded flex items-center gap-1 text-[13px] leading-[16px] font-medium ${viewMode === "grid" ? "bg-white text-[#004ac6] shadow-sm" : "text-[#434655] hover:text-[#111c2d]"}`}
              title="Grid View Only"
            >
              <Icon
                name="grid_view"
                className="text-current"
                size={16}
                strokeWidth={2.2}
              />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              aria-label="List view only"
              aria-pressed={viewMode === "list"}
              onClick={() => setViewMode("list")}
              type="button"
              className={`px-2.5 py-1 rounded flex items-center gap-1 text-[13px] leading-[16px] font-medium ${viewMode === "list" ? "bg-white text-[#004ac6] shadow-sm" : "text-[#434655] hover:text-[#111c2d]"}`}
              title="List View Only"
            >
              <Icon
                name="view_agenda"
                className="text-current"
                size={16}
                strokeWidth={2.2}
              />
              <span className="hidden sm:inline">Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= SPLIT VIEWPORT CANVAS ================= */}
      <main
        className="flex-1 flex flex-col-reverse lg:flex-row overflow-hidden max-w-[1920px] w-full mx-auto"
        id="listings"
      >
        {/* LEFT DISCOVERY CANVAS: Infinite Listing Grid */}
        <div
          className={`${viewMode === "split" ? "w-full lg:w-[58%] xl:w-[55%] 2xl:w-[52%]" : "w-full"} overflow-y-auto custom-scrollbar p-3 sm:p-4 lg:p-5 border-r border-[#c3c6d7] bg-[#ffffff]`}
        >
          {pageProperties.length ? (
            <div
              className={`grid gap-4 ${viewMode === "list" ? "grid-cols-1" : viewMode === "split" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"}`}
            >
              {pageProperties.map((property, index) => {
                const propertyId = String(
                  property.id || property.title || property.address || index,
                );
                const isFavorite = favoriteIds.includes(propertyId);
                const imageSrc =
                  displayValue(property.imageUrl, "") ||
                  (Array.isArray(property.images) && property.images[0]) ||
                  placeholderProperties[0].imageUrl;

                const listingType = displayValue(
                  property.listingType || property.status,
                  "FOR SALE",
                ).toUpperCase();
                const priceText = formatPrice(
                  property.price,
                  displayValue(property.currency, "$"),
                  listingType,
                );

                return (
                  <article
                    key={property.id || index}
                    className={`group bg-[#ffffff] border border-[#c3c6d7] hover:border-[#737686] rounded-lg overflow-hidden transition-all duration-150 flex ${viewMode === "list" ? "flex-row" : "flex-col"} hover:shadow-md`}
                  >
                    <div
                      className={`relative ${viewMode === "list" ? "w-1/3 min-w-[120px] aspect-square" : "aspect-[16/10]"} bg-[#e8eeff] overflow-hidden`}
                    >
                      <Image
                        alt={displayValue(property.title, "Listing")}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        src={String(imageSrc)}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-[#2563eb] text-[#ffffff] text-[11px] leading-[14px] font-medium shadow-sm">
                          {listingType}
                        </span>
                        {Boolean(property.statusBadge) && (
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] leading-[14px] font-medium ${
                              property.statusBadgeType === "success"
                                ? "bg-emerald-600 text-[#ffffff]"
                                : property.statusBadgeType === "warning"
                                  ? "bg-amber-600 text-[#ffffff]"
                                  : "bg-[#ffffff]/90 backdrop-blur-sm text-[#111c2d]"
                            }`}
                          >
                            {displayValue(property.statusBadge)}
                          </span>
                        )}
                      </div>
                      {Boolean(property.photoCount) && (
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-[#273143]/80 text-[#ecf0ff] font-['JetBrains_Mono',monospace] text-[11px] leading-[14px] backdrop-blur-sm flex items-center gap-1">
                          <Icon
                            name="photo_camera"
                            className="text-[#ecf0ff]"
                            size={14}
                            strokeWidth={2.2}
                          />
                          <span>{displayValue(property.photoCount)}</span>
                        </div>
                      )}
                      <button
                        aria-label={
                          isFavorite
                            ? "Remove property from favorites"
                            : "Add property to favorites"
                        }
                        aria-pressed={isFavorite}
                        className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-[#ffffff]/80 backdrop-blur-sm hover:bg-[#ffffff] flex items-center justify-center text-[#111c2d] hover:text-[#ba1a1a] transition-colors shadow-sm"
                        onClick={() =>
                          setFavoriteIds((ids) =>
                            isFavorite
                              ? ids.filter((id) => id !== propertyId)
                              : [...ids, propertyId],
                          )
                        }
                        type="button"
                      >
                        <Icon
                          name="favorite"
                          className={
                            isFavorite
                              ? "fill-[#ba1a1a] text-[#ba1a1a]"
                              : "text-[#111c2d]"
                          }
                          size={18}
                          strokeWidth={2.2}
                        />
                      </button>
                    </div>

                    <div className="min-w-0 p-3 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 mb-1">
                          <span className="text-[18px] leading-[24px] tracking-[-0.005em] text-[#111c2d] font-semibold">
                            {priceText}
                          </span>
                          {Boolean(property.pricePerSqFt) && (
                            <span className="font-['JetBrains_Mono',monospace] text-[11px] leading-[14px] text-[#737686]">
                              {displayValue(property.pricePerSqFt)}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-2 text-[13px] leading-[18px] font-medium text-[#111c2d] mb-1.5">
                          {property.bedrooms !== undefined && (
                            <span>
                              {displayValue(property.bedrooms)}{" "}
                              <span className="text-[#434655] font-normal">
                                bds
                              </span>
                            </span>
                          )}
                          {property.bedrooms !== undefined &&
                            property.bathrooms !== undefined && (
                              <span className="text-[#c3c6d7]">•</span>
                            )}
                          {property.bathrooms !== undefined && (
                            <span>
                              {displayValue(property.bathrooms)}{" "}
                              <span className="text-[#434655] font-normal">
                                ba
                              </span>
                            </span>
                          )}
                          {property.area !== undefined && (
                            <>
                              <span className="text-[#c3c6d7]">•</span>
                              <span className="font-['JetBrains_Mono',monospace]">
                                {displayValue(property.area)}{" "}
                                <span className="text-[#434655] font-normal">
                                  {displayValue(property.areaUnit, "sqft")}
                                </span>
                              </span>
                            </>
                          )}
                        </div>

                        <p className="text-[13px] leading-[18px] text-[#111c2d] font-medium truncate">
                          {displayValue(property.address || property.title)}
                        </p>
                        <p className="text-[13px] leading-[18px] text-[#434655] truncate">
                          {displayValue(
                            property.neighborhood ||
                              property.city ||
                              property.location,
                          )}
                        </p>
                      </div>

                      <div className="mt-3 pt-1 border-t border-[#c3c6d7] flex flex-wrap items-center justify-between gap-1 text-[11px] leading-[14px] text-[#737686]">
                        {property.contextTag ? (
                          <span
                            className={`flex items-center gap-1 ${
                              property.contextPositive ? "text-emerald-700" : ""
                            }`}
                          >
                            {property.contextIcon && (
                              <Icon
                                name={
                                  property.contextIcon === "trending_down"
                                    ? "trending_down"
                                    : property.contextIcon === "garage"
                                      ? "garage"
                                      : property.contextIcon === "pool"
                                        ? "pool"
                                        : property.contextIcon === "deck"
                                          ? "deck"
                                          : property.contextIcon === "train"
                                            ? "train"
                                            : property.contextIcon === "balcony"
                                              ? "balcony"
                                              : "sparkles"
                                }
                                className={
                                  property.contextPositive
                                    ? "text-emerald-700"
                                    : "text-[#004ac6]"
                                }
                                size={14}
                                strokeWidth={2.2}
                              />
                            )}
                            {displayValue(property.contextTag)}
                          </span>
                        ) : (
                          <span />
                        )}
                        {property.contextMeta ? (
                          <span>{displayValue(property.contextMeta)}</span>
                        ) : property.timeAgo ? (
                          <span>{displayValue(property.timeAgo)}</span>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="rounded-lg border border-dashed border-[#c3c6d7] p-8 text-center text-[13px] text-[#737686]">
              No listings match these filters.
            </p>
          )}

          {/* Pagination Toolbar */}
          <div className="mt-8 pt-4 border-t border-[#c3c6d7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[13px] leading-[18px] text-[#434655]">
              Showing{" "}
              <span className="font-medium text-[#111c2d]">
                {filteredProperties.length
                  ? `${(page - 1) * pageSize + 1} - ${(page - 1) * pageSize + pageProperties.length}`
                  : "0"}
              </span>{" "}
              of{" "}
              <span className="font-medium text-[#111c2d]">
                {filteredProperties.length} loaded
              </span>{" "}
              homes
            </div>
            <nav aria-label="Pagination" className="flex items-center gap-1">
              <button
                className="h-9 px-3 border border-[#c3c6d7] rounded bg-[#ffffff] text-[#434655] hover:text-[#111c2d] hover:bg-[#f0f3ff] flex items-center gap-1 text-[13px] leading-[16px] font-medium disabled:opacity-40"
                disabled={page <= 1}
                onClick={() =>
                  setCurrentPage((value) => Math.max(1, value - 1))
                }
                type="button"
              >
                <Icon
                  name="chevron_left"
                  className="text-current"
                  size={16}
                  strokeWidth={2.2}
                />
                <span>Prev</span>
              </button>
              <span
                aria-live="polite"
                className="min-w-16 text-center text-[12px] text-[#434655]"
              >
                Page {page} of {totalPages}
              </span>
              <button
                className="h-9 px-3 border border-[#c3c6d7] rounded bg-[#ffffff] text-[#111c2d] hover:bg-[#f0f3ff] flex items-center gap-1 text-[13px] leading-[16px] font-medium disabled:opacity-40"
                disabled={page >= totalPages}
                onClick={() =>
                  setCurrentPage((value) => Math.min(totalPages, value + 1))
                }
                type="button"
              >
                <span>Next</span>
                <Icon
                  name="chevron_right"
                  className="text-current"
                  size={16}
                  strokeWidth={2.2}
                />
              </button>
            </nav>
            <div className="hidden xl:flex items-center gap-2 text-[13px] leading-[18px]">
              <span className="text-[#737686]">Go to page:</span>
              <input
                className="w-14 h-8 text-center text-[13px] border border-[#c3c6d7] rounded bg-[#ffffff] focus:ring-1 focus:ring-[#2563eb]"
                value={page}
                onChange={(event) =>
                  setCurrentPage(
                    Math.max(
                      1,
                      Math.min(totalPages, Number(event.target.value) || 1),
                    ),
                  )
                }
                max={totalPages}
                min={1}
                type="number"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CANVAS: SYNCHRONIZED INTERACTIVE MAP PANEL */}
        <div className="w-full lg:w-[42%] xl:w-[45%] 2xl:w-[48%] h-[360px] sm:h-[440px] lg:h-auto relative bg-slate-100 flex flex-col border-t lg:border-t-0 lg:border-l border-[#c3c6d7]">
          <div
            className={`relative w-full h-full overflow-hidden select-none ${mapStyle === "contrast" ? "map-pattern-contrast" : "map-pattern"}`}
          >
            <div
              className="absolute inset-0 transition-transform duration-200"
              style={{ transform: `scale(${mapZoom})` }}
            >
              <svg
                className={`absolute inset-0 w-full h-full stroke-slate-300 fill-none ${mapStyle === "contrast" ? "brightness-75 saturate-50" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 900"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  d="M 0,0 L 220,0 C 210,120 180,240 240,400 C 290,520 230,700 190,900 L 0,900 Z"
                  fill="#e0f2fe"
                  stroke="#bae6fd"
                  strokeWidth="2"
                />
                <text
                  fill="#0284c7"
                  fontFamily="Geist"
                  fontSize="12"
                  fontWeight="600"
                  letterSpacing="0.1em"
                  opacity="0.6"
                  x="50"
                  y="380"
                >
                  ELLIOTT BAY
                </text>
                <path
                  d="M 380,0 C 370,200 420,450 390,900"
                  stroke="#fcd34d"
                  strokeLinecap="round"
                  strokeWidth="5"
                />
                <path
                  d="M 380,0 C 370,200 420,450 390,900"
                  stroke="#f59e0b"
                  strokeDasharray="8 4"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M 190,160 L 600,160"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                />
                <path
                  d="M 210,320 L 700,320"
                  stroke="#cbd5e1"
                  strokeWidth="4"
                />
                <path
                  d="M 230,510 L 650,510"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                />
                <path
                  d="M 240,680 L 800,680"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                />
                <path
                  d="M 270,120 L 320,800"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
                <path
                  d="M 330,100 L 360,820"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
                <path d="M 460,80 L 480,850" stroke="#e2e8f0" strokeWidth="2" />
                <path d="M 540,80 L 550,850" stroke="#e2e8f0" strokeWidth="2" />
              </svg>

              {/* Price Pins */}
              {mapPins.map((pin, idx) => {
                const isActive = activePinIndex === idx;
                return (
                  <button
                    key={idx}
                    aria-label={`Show listing ${displayValue(pin.price)}`}
                    aria-pressed={isActive}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 ${
                      isActive ? "z-20 flex flex-col items-center" : "z-10"
                    }`}
                    style={{ top: pin.top || "50%", left: pin.left || "50%" }}
                    onClick={() => setSelectedPin(idx)}
                    type="button"
                  >
                    {isActive && mapCallout && (
                      <div className="mb-2 bg-[#ffffff] rounded-lg border border-[#c3c6d7] shadow-xl w-60 overflow-hidden pointer-events-auto">
                        <div className="h-24 bg-[#e8eeff] relative">
                          <Image
                            alt="Active Listing Callout"
                            className="object-cover"
                            src={String(
                              mapCallout.imageUrl ||
                                placeholderActivePinCallout.imageUrl,
                            )}
                            fill
                            sizes="240px"
                            unoptimized
                          />
                          <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-[#2563eb] text-[#ffffff] text-[10px] leading-[14px] font-semibold">
                            {displayValue(mapCallout.badge, "FOR SALE")}
                          </div>
                        </div>
                        <div className="p-2.5">
                          <div className="text-[18px] leading-[24px] tracking-[-0.005em] font-semibold text-[#111c2d] leading-tight">
                            {displayValue(mapCallout.price, "$1,290,000")}
                          </div>
                          <div className="text-[13px] leading-[18px] text-[#434655] font-medium mt-0.5">
                            {displayValue(
                              mapCallout.specs,
                              "3 bd • 2.5 ba • 1,460 sqft",
                            )}
                          </div>
                          <div className="text-[11px] leading-[14px] text-[#737686] truncate">
                            {displayValue(
                              mapCallout.address,
                              "2101 4th Ave, Unit 2804",
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {isActive ? (
                      <>
                        <div className="px-2.5 py-1 rounded bg-[#2563eb] text-[#ffffff] font-['JetBrains_Mono',monospace] text-[13px] leading-[16px] tracking-[-0.01em] font-semibold shadow-lg border-2 border-[#ffffff] flex items-center gap-1 cursor-pointer transform scale-110">
                          <span>{displayValue(pin.price)}</span>
                        </div>
                        <div className="w-2.5 h-2.5 bg-[#2563eb] rotate-45 -mt-1 shadow-sm" />
                      </>
                    ) : (
                      <div className="px-2.5 py-1 rounded bg-[#ffffff] text-[#111c2d] hover:bg-[#2563eb] hover:text-[#ffffff] font-['JetBrains_Mono',monospace] text-[11px] leading-[14px] font-semibold shadow border border-[#c3c6d7] hover:border-transparent transition-all cursor-pointer">
                        {displayValue(pin.price)}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <div className="bg-[#ffffff] rounded-lg border border-[#c3c6d7] shadow-md flex flex-col overflow-hidden">
                <button
                  aria-label="Zoom in on map"
                  className="w-9 h-9 flex items-center justify-center hover:bg-[#f0f3ff] text-[#111c2d] border-b border-[#c3c6d7] transition-colors disabled:opacity-40"
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
                    className="text-[#111c2d]"
                    size={18}
                    strokeWidth={2.2}
                  />
                </button>
                <button
                  aria-label="Zoom out on map"
                  className="w-9 h-9 flex items-center justify-center hover:bg-[#f0f3ff] text-[#111c2d] transition-colors disabled:opacity-40"
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
                    className="text-[#111c2d]"
                    size={18}
                    strokeWidth={2.2}
                  />
                </button>
              </div>

              <button
                aria-label="Reset map view"
                className="w-9 h-9 bg-[#ffffff] rounded-lg border border-[#c3c6d7] shadow-md flex items-center justify-center text-[#111c2d] hover:bg-[#f0f3ff] transition-colors"
                onClick={() => {
                  setMapZoom(1);
                  setMapStyle("map");
                  setSelectedPin(null);
                }}
                type="button"
              >
                <Icon
                  name="explore"
                  className="text-[#111c2d]"
                  size={18}
                  strokeWidth={2.2}
                />
              </button>

              <div className="bg-[#ffffff] rounded-lg border border-[#c3c6d7] shadow-md p-1 flex flex-col gap-1 text-[11px] leading-[14px] font-medium">
                <button
                  aria-pressed={mapStyle === "map"}
                  onClick={() => setMapStyle("map")}
                  type="button"
                  className={`px-2 py-1 rounded flex items-center gap-1 text-left ${mapStyle === "map" ? "bg-[#e8eeff] text-[#004ac6]" : "text-[#434655] hover:bg-[#f0f3ff]"}`}
                >
                  <Icon
                    name="map"
                    className="text-[#004ac6]"
                    size={14}
                    strokeWidth={2.2}
                  />
                  <span>Map</span>
                </button>
                <button
                  aria-label="High-contrast map style"
                  aria-pressed={mapStyle === "contrast"}
                  onClick={() => setMapStyle("contrast")}
                  type="button"
                  className={`px-2 py-1 rounded flex items-center gap-1 text-left ${mapStyle === "contrast" ? "bg-[#e8eeff] text-[#004ac6]" : "text-[#434655] hover:bg-[#f0f3ff]"}`}
                >
                  <Icon
                    name="tune"
                    className="text-current"
                    size={14}
                    strokeWidth={2.2}
                  />
                  <span>Contrast</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ================= METRO SUB-MARKET DATA ================= */}
      {marketStats.length > 0 && (
        <section
          id="market-report"
          className="bg-[#e8eeff] border-t border-[#c3c6d7] py-6 px-5"
        >
          <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-2">
              <div>
                <h2 className="text-[18px] leading-[24px] tracking-[-0.005em] text-[#111c2d] font-semibold">
                  {displayValue(
                    data.marketIntelligenceTitle,
                    "Seattle Metropolitan Market Intelligence",
                  )}
                </h2>
                <p className="text-[13px] leading-[18px] text-[#434655]">
                  {displayValue(
                    data.marketIntelligenceSubtitle,
                    "Real-time inventory benchmarks and price metrics across primary target corridors",
                  )}
                </p>
              </div>
              <a
                className="text-[#004ac6] hover:underline text-[13px] leading-[18px] font-medium flex items-center gap-1"
                href="#market-report"
              >
                <span>View Comprehensive Metro Market Analytics</span>
                <Icon
                  name="arrow_forward"
                  className="text-current"
                  size={16}
                  strokeWidth={2.2}
                />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {marketStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#ffffff] p-3 rounded-lg border border-[#c3c6d7]"
                >
                  <div className="flex items-center justify-between text-[11px] leading-[14px] text-[#737686] mb-1">
                    <span>{displayValue(stat.name)}</span>
                    <span
                      className={`font-medium ${
                        stat.trendIsPositive
                          ? "text-emerald-600"
                          : "text-[#ba1a1a]"
                      }`}
                    >
                      {displayValue(stat.trend)}
                    </span>
                  </div>
                  <div className="text-[18px] leading-[24px] tracking-[-0.005em] font-semibold text-[#111c2d]">
                    {displayValue(stat.medianPrice)}
                  </div>
                  <div className="font-['JetBrains_Mono',monospace] text-[11px] leading-[14px] text-[#434655] mt-1">
                    Median Price • {displayValue(stat.pricePerSqFt)}
                  </div>
                  <div className="mt-2 text-[11px] leading-[14px] text-[#737686]">
                    {displayValue(stat.activeCount)} •{" "}
                    {displayValue(stat.avgDaysOnMarket)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#ffffff] border-t border-[#c3c6d7] text-[#434655] text-[13px] leading-[18px]">
        <div className="max-w-[1920px] mx-auto px-5 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-3 select-none">
                <div className="w-7 h-7 rounded-lg bg-[#004ac6] flex items-center justify-center text-[#ffffff]">
                  <Icon
                    name="apartment"
                    className="text-[#ffffff]"
                    size={18}
                    strokeWidth={2.2}
                  />
                </div>
                <span className="text-[18px] leading-[24px] tracking-[-0.005em] font-semibold text-[#004ac6]">
                  {displayValue(data.companyName, "Urban Search")}
                </span>
              </div>
              <p className="text-[13px] leading-[18px] text-[#737686] mb-3">
                {displayValue(
                  data.companyTagline,
                  "Direct MLS real estate platform engineered for high-velocity residential exploration, institutional valuation standards, and verified neighborhood data.",
                )}
              </p>
              <div className="flex items-center gap-4 text-[#737686]">
                <span className="flex items-center gap-1 text-[11px] leading-[14px] font-medium">
                  <Icon
                    name="verified_user"
                    className="text-current"
                    size={16}
                    strokeWidth={2.2}
                  />{" "}
                  NWMLS
                </span>
                <span className="flex items-center gap-1 text-[11px] leading-[14px] font-medium">
                  <Icon
                    name="home"
                    className="text-current"
                    size={16}
                    strokeWidth={2.2}
                  />{" "}
                  Equal Housing Opportunity
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] leading-[16px] font-semibold text-[#111c2d] uppercase tracking-wider mb-3">
                Marketplace
              </h3>
              <ul className="space-y-2 text-[13px] leading-[18px]">
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setActiveCategory("buy");
                      setPropertyType("");
                      setSearchText("");
                      setCurrentPage(1);
                    }}
                  >
                    Residential for Sale
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setActiveCategory("buy");
                      setPropertyType("condo");
                      setSearchText("");
                      setCurrentPage(1);
                    }}
                  >
                    Downtown Condominiums
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setActiveCategory("buy");
                      setPropertyType("single");
                      setSearchText("");
                      setCurrentPage(1);
                    }}
                  >
                    Single Family Residences
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setActiveCategory("buy");
                      setPropertyType("town");
                      setSearchText("");
                      setCurrentPage(1);
                    }}
                  >
                    Townhomes &amp; Penthouses
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setActiveCategory("commercial");
                      setPropertyType("");
                      setSearchText("");
                      setCurrentPage(1);
                    }}
                  >
                    Commercial &amp; Multi-Family
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setActiveCategory("new-developments");
                      setSearchText("");
                      setCurrentPage(1);
                    }}
                  >
                    New Developments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[13px] leading-[16px] font-semibold text-[#111c2d] uppercase tracking-wider mb-3">
                Metro Districts
              </h3>
              <ul className="space-y-2 text-[13px] leading-[18px]">
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setSearchText("South Lake Union");
                      setCurrentPage(1);
                    }}
                  >
                    South Lake Union
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setSearchText("Belltown");
                      setCurrentPage(1);
                    }}
                  >
                    Belltown Waterfront
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setSearchText("Capitol Hill");
                      setCurrentPage(1);
                    }}
                  >
                    Capitol Hill
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setSearchText("Bellevue");
                      setCurrentPage(1);
                    }}
                  >
                    Bellevue Downtown
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setSearchText("Kirkland");
                      setCurrentPage(1);
                    }}
                  >
                    Kirkland Waterfront
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#004ac6] transition-colors"
                    href="#listings"
                    onClick={() => {
                      setSearchText("Ballard");
                      setCurrentPage(1);
                    }}
                  >
                    Ballard &amp; Fremont
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[13px] leading-[16px] font-semibold text-[#111c2d] uppercase tracking-wider mb-3">
                Data &amp; Legal
              </h3>
              <ul className="space-y-2 text-[13px] leading-[18px]">
                <li>
                  <span className="text-[#737686]">MLS Compliance Terms</span>
                </li>
                <li>
                  <span className="text-[#737686]">Privacy Notice</span>
                </li>
                <li>
                  <span className="text-[#737686]">Terms of Use</span>
                </li>
                <li>
                  <span className="text-[#737686]">Property Index Sitemap</span>
                </li>
                <li>
                  <span className="text-[#737686]">Brokerage Disclosures</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-[#c3c6d7] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] leading-[14px] text-[#737686]">
            <p className="max-w-4xl leading-relaxed">
              Based on information from the Northwest Multiple Listing Service.
              Listing information is deemed reliable but is not guaranteed and
              should be independently verified. All properties are subject to
              prior sale, change, or withdrawal.
            </p>
            <p className="text-left md:text-right">
              © {new Date().getFullYear()}{" "}
              {displayValue(data.companyName, "Urban Search")} Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
