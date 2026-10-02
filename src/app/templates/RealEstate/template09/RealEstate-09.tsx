"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  ArrowRight,
  BadgeCheck,
  Bell,
  BookmarkPlus,
  Building2,
  CalendarDays,
  Camera,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  Download,
  Grid2X2,
  GraduationCap,
  Heart,
  House,
  List,
  LockKeyhole,
  Mail,
  Map,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  TrainFront,
} from "lucide-react";

type RealEstate09Props = {
  resolvedData?: Record<string, unknown>;
};

const lucideIconMap: Record<string, LucideIcon> = {
  search: Search,
  favorite: Heart,
  compare_arrows: ArrowLeftRight,
  notifications: Bell,
  calendar_today: CalendarDays,
  verified: BadgeCheck,
  shield: ShieldCheck,
  pin_drop: MapPin,
  expand_more: ChevronDown,
  tune: SlidersHorizontal,
  bookmark_add: BookmarkPlus,
  grid_view: Grid2X2,
  view_list: List,
  map: Map,
  photo_camera: Camera,
  download: Download,
  attach_money: DollarSign,
  school: GraduationCap,
  directions_subway: TrainFront,
  badge: BadgeCheck,
  arrow_forward: ArrowRight,
  call: Phone,
  mail: Mail,
  analytics: ChartNoAxesCombined,
  lock: LockKeyhole,
  check_circle: CheckCircle2,
  apartment: Building2,
  home: House,
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
  const IconComponent = lucideIconMap[name] ?? Building2;
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

function formatPrice(price: unknown, currency = "$"): string {
  if (price === undefined || price === null || price === "") return "";
  const num = typeof price === "number" ? price : parseFloat(String(price));
  if (isNaN(num)) return String(price);
  return `${currency}${num.toLocaleString("en-US")}`;
}

function numericValue(value: unknown): number {
  if (typeof value === "number") return value;
  const text = String(value ?? "").replace(/[^0-9.m-]/gi, "");
  const amount = parseFloat(text);
  if (!Number.isFinite(amount)) return 0;
  return text.toLowerCase().endsWith("m") ? amount * 1_000_000 : amount;
}

const placeholderProperties = [
  {
    id: "prop-1",
    title: "70 Franklin Street, PH 5A, Tribeca",
    address: "New York, NY 10013",
    price: 8200000,
    currency: "$",
    pricePerSqFt: "($2,186 / sq.ft)",
    bedrooms: 4,
    bathrooms: 4.5,
    interiorArea: "3,750",
    exteriorArea: "820",
    badge: "EXCLUSIVE MANDATE",
    secondaryBadge: "NEW TO MARKET",
    mediaCount: "1 / 28",
    amenitiesTags: ["Keyed Elevator", "Skyline Terrace", "24/7 Doorman"],
    agentName: "Julian Sterling",
    agentRole: "Manhattan Managing Director",
    agentPhoto:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKtrcnAWekPxWC9dSleY-e3MtpeF3IsSw3kcsAR4lU2QCkd5W9CArZ6AtoglvRnsQdtHhHi-AbcwwhhCNDTwOG0jtUjTP8HtL2LV9FBhXqMRdgMIHgfVYDDH6fFpsbOIs377iy8JgpO_OkphTosQHcs-mNDDQ8cS5xyDONhe299b8SXCfacUszAwd3mBuYmIEO_gyQdc-KpT4GzZt2eC6bFC9wLS4A4HQAOwL1lBQOmCr_m5RDhFDm",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9GHUtqc4mB-iefxWMUTIdLoSJ0DRk7-00z05TJpftvwNazsZpuiuIuuVu7pd2n0McIbHg2u7VFgEW20SmoQSY5m0f9aiIEmI0g-uONZ5e386tcKTjvmYnBQ8ZzZQaL4FPD0NaHPg-mMIygaHQQxGmXOHL2BZ46tb5aZA7-wm36N5OZSmi5FAw8zFB_fFeWypO1VHQI8U9ukNgQQHYWxZywlAbO5LIxwwuBbtwLQ8s4JyvAhSaJ9fX",
  },
  {
    id: "prop-2",
    title: "142 Ocean Dune Lane, East Hampton",
    address: "East Hampton, NY 11937",
    price: 12950000,
    currency: "$",
    pricePerSqFt: "($1,850 / sq.ft)",
    bedrooms: 6,
    bathrooms: 7,
    interiorArea: "7,000",
    exteriorArea: "1.8 Ac",
    badge: "OFF-MARKET PREVIEW",
    secondaryBadge: "WATERFRONT",
    mediaCount: "1 / 34",
    amenitiesTags: [
      "Gunite Infinity Pool",
      "Private Dune Access",
      "3-Car Garage",
    ],
    agentName: "Victoria Vance",
    agentRole: "Hamptons Senior Partner",
    agentPhoto:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOX-bFHXFsbBEgC2wWXE9ejsxcTHPRH9vv09cm0pCLK9nKRETbWRTbe6b8nUaYKS5P9_NeKJSNGPif_MsnDn7AZpS9fOk1bOalxpk6N8ZgeLf2K1sXU7HmOSu7Y58gKZgI10_OQ5mppyWAttjk8CGoY9D4gTPAj3lCSxTxYF0DEUdRBgVpEjuh3VI0CoFUEDgWtADOBf-owelQv8N1Mx2VCF9PFxykSNBMugLoJhcfiElHaw1fvqDb",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8lcEiMSnP4Szcc06BWXjUYt2YgiRoOHTi0f47hqNdWMILLDX3pG1HBuO25OSppL8uOzhhu6LmhC-NqI_dS63ZaXSY94w3nlGraNNZvTysC_P3FKdMd4zV60zc7othA7SQYpuRQa3keDU_r4ThXPtsI_N-RuBN4qwYgBU6qclYOzfPhUxwmrfL4midOvF770Rub2PcSLGfvFPEyK8bdRjVIPL1CAZ4qOGcqE6sj7POfkyC5fpN_wFw",
  },
  {
    id: "prop-3",
    title: "220 Central Park South, Suite 41B",
    address: "Midtown West, New York, NY 10019",
    price: 6100000,
    currency: "$",
    pricePerSqFt: "($2,440 / sq.ft)",
    bedrooms: 3,
    bathrooms: 3.5,
    interiorArea: "2,500",
    exteriorArea: "2020",
    badge: "PRICE IMPROVED",
    mediaCount: "1 / 42",
    amenitiesTags: [
      "Direct Central Park View",
      "Private Dining Club",
      "Spa & Pool",
    ],
    agentName: "Alexander Croft",
    agentRole: "Private Client Principal",
    agentPhoto:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf4jJIgSpwM3zyf_kM51IkSx6eEkTsV7BmjcrBGzofiICpnxsPHPyqxue2cOX3gXOZ-ThpbtE0eRLDE4jQqG33TxFbP-NGWCBqIs4oin73pstvU0c9QoG6nGb60uskC92JB5gFShebftRcn1_KyekZpqp8pUVwE9hu3cPuojKOVqhW_QiMBxxf7zXp18mIcOu12R5fgb-EKgVH5mbDLN-tlpZFgeZUy4Wx_vOG-v4ha1xUhgPN_c8z",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqp4jGDICAi9HLBaVOyvFhXt0WnE3ayacd2vcFVy6iObhYAxn1xrUKfOE8mw2a5B85QGx6f3vF7QI55rau7sSSQRTaPa1sc9oq2mOZubB41ozwf1F9FZZkWRMlDBe_vIrIsiZ17LuyRFMA1UTuZNADxCoUibypmAw8jVVSTMeXO8b-sfT9GlNe8darJvZGFYtqPwibK3EGkozmxGehkIr5-0spia0Y2c2xfBtgTUYpuiFBJjHQgzYi",
  },
];

const placeholderComparison = [
  {
    name: "70 Franklin St, PH 5A",
    price: "$8,200,000",
    pricePerSqFt: "$2,186 / sq.ft",
    bedsBaths: "4 Beds / 4.5 Baths",
    areas: "3,750 SF Int / 820 SF Terrace",
    yearBuilt: "1915 / Converted 2021",
    carryingCharges: "$4,850 / mo ($3,200 RET)",
    keyAmenities: "Keyed Elevator, Scavolini Kitchen, Private Terrace",
  },
  {
    name: "142 Ocean Dune Lane",
    price: "$12,950,000",
    pricePerSqFt: "$1,850 / sq.ft",
    bedsBaths: "6 Beds / 7.0 Baths",
    areas: "7,000 SF Int / 1.80 Acre Lot",
    yearBuilt: "2023 (New Construction)",
    carryingCharges: "$1,450 / mo ($31,200 Ann. RET)",
    keyAmenities: "Gunite Pool, Oceanfront Walkway, 3-Bay Garage",
  },
  {
    name: "220 Central Park South #41B",
    price: "$6,100,000",
    pricePerSqFt: "$2,440 / sq.ft",
    bedsBaths: "3 Beds / 3.5 Baths",
    areas: "2,500 SF Int / High-floor loggia",
    yearBuilt: "2020 (Robert A.M. Stern)",
    carryingCharges: "$6,920 / mo ($4,800 RET)",
    keyAmenities: "Central Park Panoramic, Private Dining, Spa/Club",
  },
];

const placeholderMapPins = [
  { id: 1, price: "$8.2M", top: "70%", left: "25%", hasPip: true },
  {
    id: 2,
    price: "$6.1M (Selected)",
    top: "35%",
    left: "66%",
    isSelected: true,
  },
  { id: 3, price: "$4.85M", top: "54%", left: "33%" },
  { id: 4, price: "$12.95M", top: "80%", left: "88%" },
];

const placeholderActiveMapProperty = {
  title: "220 Central Park South #41B",
  corridor: "Midtown West / Billionaires' Row Corridor",
  price: "$6,100,000",
  districtTrend: "+4.2% District YoY",
  specs: "3 Beds • 3.5 Baths • 2,500 SF • Direct North Park Vistas",
  schoolRating: "10/10 (District 2 Core)",
  transitAccess: "59th St Columbus Circle (A/C/B/D/1)",
  daysOnMarket: "34 Days (Ultra-High Velocity)",
};

const placeholderAdvisors = [
  {
    name: "Alexander Croft",
    title: "Private Client Principal",
    license: "LIC #1040128919 • Manhattan",
    closedVolume: "$245M+",
    activeMandates: "14",
    phone: "+1 (212) 890-4421",
    email: "a.croft@estatepro.com",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjedt36pPII2wis1rjU8LDocts0DmMYsbH7jsKz2hM05G-2yuEspBVTUPzuSUsUtQnqqkrwUmY9_zKNrUemhqR4QUCyY8RoWz1EefjW3KbXeT93C5ueHKVzW13sNkLqEeWPsHz_0ehonyOpDgyBhTnT_s7ZBPfAk1_IJ0PCQMDk6cjRMapGVvdvMjrM1YYSoyfCfGuUPGQ3D8m6eMMmLxtCjlyOqJgg29qEj9aBTKTANYIX7Gqc0t8",
  },
  {
    name: "Victoria Vance",
    title: "Hamptons Managing Director",
    license: "LIC #2049182741 • East Hampton",
    closedVolume: "$310M+",
    activeMandates: "19",
    phone: "+1 (631) 402-9910",
    email: "v.vance@estatepro.com",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOvIenmNjuzwLrh8W3B2kTRBp_TXRpWgnRQFy1ThFlwX6e85xk7nDMrJl2TpPMaCiqgc2NkXdeVgnsf9HRG6-22ouCcQEWsln9shVpSh2B_Bn10nlTB_pe4jsbhmZ3Y2c0ROyB8W1louGU58je-1g6iRGY8CSHgVB-_8MBkWsGUMyg3d5_vw52xKmhKhPs8-_0v77pQoobHbivDnSdJc5aAd1-TZJmxadnOLQCU6dX6LwckNRWENv2",
  },
  {
    name: "Julian Sterling",
    title: "Head of Downtown Residential",
    license: "LIC #1040182650 • Tribeca",
    closedVolume: "$185M+",
    activeMandates: "11",
    phone: "+1 (212) 890-4498",
    email: "j.sterling@estatepro.com",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuyqrE0CuV_bGZa2RLBzlyLCUlmiQHw8lGZTgcGiCGX0wnYc_ylXGE1b5EPHfGC3ACr6oEH3v4rlTs0zj9r2T_w-pA6v0y1zyKA3x7LhT51zp07Fet7YSyIva2-5R14Q-ZslMiTa503_oZofJ5FYE4Ark_ZbrahXR00vhA7lHKFY6_TjqVwEomTDIeCvIZ_rj7pC-QiONNx6V33Jb2SJ91zmBv6n05avQQ1EWNuyRNboafsUPtkfjj",
  },
];

const placeholderNeighborhoods = [
  {
    name: "Tribeca",
    trendBadge: "+5.8% YoY",
    medianPrice: "$5,420,000",
    avgPricePerSqFt: "$2,210",
    daysOnMarket: "42 Days",
    activeCount: "34 Properties",
  },
  {
    name: "SoHo Cast-Iron",
    trendBadge: "+4.1% YoY",
    medianPrice: "$4,180,000",
    avgPricePerSqFt: "$1,980",
    daysOnMarket: "51 Days",
    activeCount: "28 Properties",
  },
  {
    name: "Central Park South",
    trendBadge: "+7.3% YoY",
    medianPrice: "$8,900,000",
    avgPricePerSqFt: "$2,840",
    daysOnMarket: "36 Days",
    activeCount: "22 Properties",
  },
  {
    name: "Hamptons Coastal",
    trendBadge: "+6.5% YoY",
    medianPrice: "$7,850,000",
    avgPricePerSqFt: "$1,720",
    daysOnMarket: "64 Days",
    activeCount: "44 Properties",
  },
];

const placeholderData: Record<string, unknown> = {
  companyName: "Estate Pro",
  searchPlaceholder: "Search address, MLS ID, district...",
  defaultLocation: "Tribeca, Central Park South, Hamptons...",
  heroBadge: "Premier Institutional Asset Brokerage",
  heroTitle: "Institutional Rigor. Exceptional Residences.",
  heroDescription:
    "Curated residential portfolios, private off-market mandates, and analytical valuation clarity across the New York Metropolitan and Hamptons prime corridors.",
  verifiedListingsCount: "128 Verified Brokerage Listings",
  regionSubtext: "New York & Hamptons Flagships",
  properties: placeholderProperties,
  comparisonProperties: placeholderComparison,
  mapPins: placeholderMapPins,
  activeMapProperty: placeholderActiveMapProperty,
  advisors: placeholderAdvisors,
  brokerDirectoryCount: "View Full Broker Directory (48)",
  neighborhoods: placeholderNeighborhoods,
  advisoryLeadTitle: "Schedule Private Advisory & Asset Valuation",
  advisoryLeadDescription:
    "Whether positioning a flagship residence for acquisition or deploying institutional capital into prime residential portfolios, our Managing Directors provide discrete, data-driven counsel.",
  flagshipAddress: "Flagship: 450 Lexington Ave, New York",
  brokerageLicenseNotice:
    "Licensed brokerage in the State of New York, Connecticut, and Florida. Equal Housing Opportunity.",
  mlsIdCode: "MLS ID: 88201-EP",
};

function normalizeTemplateData(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return data && Object.keys(data).length > 0
    ? { ...placeholderData, ...data }
    : placeholderData;
}

export default function RealEstate09({ resolvedData }: RealEstate09Props) {
  const data = normalizeTemplateData(resolvedData);

  const properties = (
    Array.isArray(data.properties) && data.properties.length > 0
      ? data.properties
      : placeholderProperties
  ) as Record<string, any>[];

  const comparisonProperties = (
    Array.isArray(data.comparisonProperties) &&
    data.comparisonProperties.length > 0
      ? data.comparisonProperties
      : placeholderComparison
  ) as Record<string, any>[];

  const mapPins = (
    Array.isArray(data.mapPins) && data.mapPins.length > 0
      ? data.mapPins
      : placeholderMapPins
  ) as Record<string, any>[];

  const advisors = (
    Array.isArray(data.advisors) && data.advisors.length > 0
      ? data.advisors
      : placeholderAdvisors
  ) as Record<string, any>[];

  const neighborhoods = (
    Array.isArray(data.neighborhoods) && data.neighborhoods.length > 0
      ? data.neighborhoods
      : placeholderNeighborhoods
  ) as Record<string, any>[];

  const activeMapProperty = (
    data.activeMapProperty && typeof data.activeMapProperty === "object"
      ? data.activeMapProperty
      : placeholderActiveMapProperty
  ) as Record<string, any>;

  const [searchTerm, setSearchTerm] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [listingType, setListingType] = useState("Buy");
  const [quickFilter, setQuickFilter] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [minimumBedrooms, setMinimumBedrooms] = useState("0");
  const [assetClass, setAssetClass] = useState("all");
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [sortOrder, setSortOrder] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>([]);
  const [savedStateReady, setSavedStateReady] = useState(false);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [comparedPropertyIds, setComparedPropertyIds] = useState<string[]>(() =>
    properties
      .slice(0, comparisonProperties.length)
      .map((property, index) => String(property.id ?? index)),
  );
  const [selectedPropertyId, setSelectedPropertyId] = useState(
    String(properties[0]?.id ?? ""),
  );
  const [mapMode, setMapMode] = useState("price");
  const [mapZoom, setMapZoom] = useState(1);
  const [notice, setNotice] = useState("");
  const [inquiryProperty, setInquiryProperty] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      try {
        const savedIds = window.localStorage.getItem("realestate09-saved");
        if (savedIds) {
          const parsedIds: unknown = JSON.parse(savedIds);
          setSavedPropertyIds(
            Array.isArray(parsedIds) ? parsedIds.map(String) : [],
          );
        }
      } catch {
        setSavedPropertyIds([]);
      } finally {
        setSavedStateReady(true);
      }
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!savedStateReady) return;
    try {
      window.localStorage.setItem(
        "realestate09-saved",
        JSON.stringify(savedPropertyIds),
      );
    } catch {
      // Saved properties remain available for this page session.
    }
  }, [savedPropertyIds, savedStateReady]);

  const announce = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3500);
  };

  const scrollToInquiry = (propertyTitle = "") => {
    setInquiryProperty(propertyTitle);
    document.getElementById("advisory-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const toggleSavedProperty = (propertyId: string) => {
    setSavedPropertyIds((current) =>
      current.includes(propertyId)
        ? current.filter((id) => id !== propertyId)
        : [...current, propertyId],
    );
  };

  const toggleComparedProperty = (propertyId: string) => {
    setComparedPropertyIds((current) =>
      current.includes(propertyId)
        ? current.filter((id) => id !== propertyId)
        : [...current, propertyId],
    );
  };

  const saveSearchAlert = () => {
    try {
      window.localStorage.setItem(
        "realestate09-search-alert",
        JSON.stringify({
          searchTerm,
          locationQuery,
          listingType,
          minimumPrice,
          maximumPrice,
          minimumBedrooms,
          assetClass,
          quickFilter,
        }),
      );
      announce("Search alert saved on this device.");
    } catch {
      announce("This browser could not save the search alert.");
    }
  };

  const filteredProperties = properties.filter((property) => {
    const propertyId = String(property.id ?? "");
    const searchableText = [
      property.title,
      property.address,
      property.agentName,
      property.agentRole,
      property.badge,
      property.secondaryBadge,
      ...(Array.isArray(property.amenitiesTags) ? property.amenitiesTags : []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const queryTerms = `${searchTerm} ${locationQuery}`
      .trim()
      .toLowerCase()
      .split(/[\s,]+/)
      .filter(Boolean);
    const price = numericValue(property.price);
    const beds = numericValue(property.bedrooms);
    const category = String(
      property.listingType ?? property.type ?? "",
    ).toLowerCase();
    const asset = String(
      property.assetClass ?? property.propertyType ?? "",
    ).toLowerCase();
    const quickFilterTerms: Record<string, RegExp> = {
      penthouse: /penthouse|ph\b/i,
      waterfront: /waterfront|water|dock|dune/i,
      pool: /pool|grounds|garden/i,
      doorman: /doorman|white glove|concierge/i,
      "price-drop": /price|drop|reduced|improved/i,
    };
    const quickFilterMatches =
      !quickFilter ||
      Boolean(searchableText.match(quickFilterTerms[quickFilter]));

    return (
      queryTerms.every((term) => searchableText.includes(term)) &&
      (!showSavedOnly || savedPropertyIds.includes(propertyId)) &&
      (!minimumPrice || price >= Number(minimumPrice)) &&
      (!maximumPrice || price <= Number(maximumPrice)) &&
      beds >= Number(minimumBedrooms) &&
      (listingType === "Buy" ||
        (listingType === "New Developments"
          ? /new development|new construction/i.test(
              `${category} ${searchableText}`,
            )
          : category.includes(listingType.toLowerCase()))) &&
      (assetClass === "all" ||
        (asset || searchableText).includes(assetClass) ||
        (assetClass === "penthouse" && /\bph\b/i.test(searchableText))) &&
      quickFilterMatches
    );
  });

  const visibleProperties = [...filteredProperties].sort((first, second) => {
    if (sortOrder === "price-high")
      return numericValue(second.price) - numericValue(first.price);
    if (sortOrder === "price-low")
      return numericValue(first.price) - numericValue(second.price);
    if (sortOrder === "newest") {
      return (
        Date.parse(String(second.dateListed ?? second.createdAt ?? "")) -
        Date.parse(String(first.dateListed ?? first.createdAt ?? ""))
      );
    }
    if (sortOrder === "price-sqft") {
      return (
        numericValue(second.pricePerSqFt) - numericValue(first.pricePerSqFt)
      );
    }
    return 0;
  });

  const selectedProperty =
    visibleProperties.find(
      (property) => String(property.id ?? "") === selectedPropertyId,
    ) ?? visibleProperties[0];
  const selectedMapIndex = Math.max(
    0,
    visibleProperties.findIndex((property) => property === selectedProperty),
  );
  const comparisonRows = comparedPropertyIds
    .map((propertyId) => {
      const propertyIndex = properties.findIndex(
        (property) => String(property.id ?? "") === propertyId,
      );
      if (propertyIndex < 0) return undefined;
      const property = properties[propertyIndex];
      const fallback = comparisonProperties[propertyIndex] ?? {};
      const beds = displayValue(property.bedrooms, "");
      const baths = displayValue(property.bathrooms, "");
      const area = displayValue(property.interiorArea, "");
      const exterior = displayValue(property.exteriorArea, "");
      return {
        ...fallback,
        name: displayValue(property.title, fallback.name),
        price:
          formatPrice(property.price, displayValue(property.currency, "$")) ||
          displayValue(fallback.price),
        pricePerSqFt: displayValue(
          property.pricePerSqFt,
          fallback.pricePerSqFt,
        ),
        bedsBaths:
          beds || baths
            ? `${beds || "-"} Beds / ${baths || "-"} Baths`
            : displayValue(fallback.bedsBaths),
        areas:
          area || exterior
            ? `${area || "-"} SF Int / ${exterior || "-"} Ext`
            : displayValue(fallback.areas),
        yearBuilt: displayValue(property.yearBuilt, fallback.yearBuilt),
        carryingCharges: displayValue(
          property.carryingCharges,
          fallback.carryingCharges,
        ),
        keyAmenities: displayValue(
          property.amenitiesTags,
          fallback.keyAmenities,
        ),
      };
    })
    .filter(Boolean) as Record<string, any>[];

  const activeListing = selectedProperty ?? properties[0];
  const activePinId =
    mapPins[selectedMapIndex % Math.max(mapPins.length, 1)]?.id;

  return (
    <div className="bg-[#f8f9ff] text-[#191c21] font-['Inter',sans-serif] text-[14px] leading-[22px] antialiased selection:bg-[#0047c1] selection:text-[#ffffff]">
      {notice && (
        <div
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-[#191c21] px-4 py-3 text-[13px] text-white shadow-lg"
          role="status"
          aria-live="polite"
        >
          {notice}
        </div>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c3c6d8;
          border-radius: 9999px;
        }
        .map-grid-pattern {
          background-image: linear-gradient(to right, #e1e2e9 1px, transparent 1px),
                            linear-gradient(to bottom, #e1e2e9 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @media print {
          body * { visibility: hidden; }
          #comparison-section, #comparison-section * { visibility: visible; }
          #comparison-section { position: absolute; inset: 0; width: 100%; padding: 0; }
          #comparison-section button { display: none; }
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. TOP APP BAR                                                            */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#ffffff] border-b border-[#c3c6d8] shadow-sm">
        <div className="flex justify-between items-center w-full px-6 lg:px-8 py-3 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-2 group" href="#">
              <div className="w-8 h-8 rounded-lg bg-[#0047c1] flex items-center justify-center text-[#ffffff] font-bold text-lg shadow-sm">
                E
              </div>
              <span className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold text-[#191c21]">
                {displayValue(data.companyName, "Estate Pro")}
              </span>
            </a>

            <div className="relative hidden xl:block w-72">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#737687]">
                <Icon name="search" className="text-current" size={18} />
              </span>
              <input
                className="w-full pl-9 pr-3 py-1.5 text-[12px] leading-[18px] bg-[#f2f3fa] border border-[#c3c6d8] rounded-lg text-[#191c21] placeholder:text-[#737687] focus:outline-none focus:border-[#0047c1] focus:ring-1 focus:ring-[#0047c1] transition-all"
                placeholder={displayValue(
                  data.searchPlaceholder,
                  "Search address, MLS ID, district...",
                )}
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    document
                      .getElementById("properties")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-[#0047c1] font-semibold border-b-2 border-[#0047c1] pb-1 text-[16px] leading-[24px]"
              href="#properties"
            >
              Properties
            </a>
            <a
              className="text-[#434655] hover:text-[#191c21] transition-colors text-[14px] leading-[22px]"
              href="#map-discovery"
            >
              Search &amp; Map
            </a>
            <a
              className="text-[#434655] hover:text-[#191c21] transition-colors text-[14px] leading-[22px]"
              href="#neighborhoods"
            >
              Neighborhoods
            </a>
            <a
              className="text-[#434655] hover:text-[#191c21] transition-colors flex items-center gap-1.5 text-[14px] leading-[22px]"
              href="#comparison-section"
            >
              <span>Compare</span>
              <span className="inline-flex items-center justify-center px-1.5 py-0.2 bg-[#0047c1] text-[#ffffff] text-[11px] leading-[14px] font-medium rounded-full">
                {comparisonRows.length}
              </span>
            </a>
            <a
              className="text-[#434655] hover:text-[#191c21] transition-colors text-[14px] leading-[22px]"
              href="#advisors"
            >
              Top Agents
            </a>
            <a
              className="text-[#434655] hover:text-[#191c21] transition-colors text-[14px] leading-[22px]"
              href="#neighborhoods"
            >
              Market Reports
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1 border-r border-[#c3c6d8] pr-3">
              <button
                className="p-2 rounded-lg text-[#434655] hover:bg-[#f2f3fa] hover:text-[#0047c1] transition-all duration-150 relative"
                title="Saved Properties"
                type="button"
                aria-pressed={showSavedOnly}
                onClick={() => {
                  setShowSavedOnly((current) => !current);
                  document
                    .getElementById("properties")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Icon name="favorite" className="text-current" size={20} />
                <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-[#0047c1] text-white text-[10px] leading-4 rounded-full ring-2 ring-white">
                  {savedPropertyIds.length}
                </span>
              </button>
              <button
                className="p-2 rounded-lg text-[#434655] hover:bg-[#f2f3fa] hover:text-[#0047c1] transition-all duration-150"
                title="Comparison Manager"
                type="button"
                onClick={() =>
                  document
                    .getElementById("comparison-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Icon
                  name="compare_arrows"
                  className="text-current"
                  size={20}
                />
              </button>
              <button
                className="p-2 rounded-lg text-[#434655] hover:bg-[#f2f3fa] hover:text-[#0047c1] transition-all duration-150"
                title="Notifications"
                type="button"
                onClick={() => announce("You are all caught up.")}
              >
                <Icon name="notifications" className="text-current" size={20} />
              </button>
            </div>
            <button
              className="hidden sm:inline-flex items-center px-3.5 py-2 rounded-lg text-[12px] leading-[16px] tracking-[0.04em] font-semibold bg-[#ffffff] border border-[#c3c6d8] text-[#191c21] hover:bg-[#f2f3fa] transition-all duration-150 active:scale-[0.98]"
              type="button"
              onClick={() => scrollToInquiry("Seller representation")}
            >
              List with Us
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] leading-[16px] tracking-[0.04em] font-semibold bg-[#155eef] text-[#ffffff] hover:bg-[#0047c1] transition-all duration-150 active:scale-[0.98] shadow-sm"
              type="button"
              onClick={() => scrollToInquiry()}
            >
              <span>Schedule Consultation</span>
              <Icon name="calendar_today" className="text-current" size={16} />
            </button>
            <div className="relative pl-1">
              <Image
                alt="Executive Agent"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#006a63]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANvYjTYJ7Wlh3c1skt_CbHJAf-YbXO0P9vwIAbw9xaP-0QMIn62wyAjJWS6nDSX2mk9S5fRXha70euHnbpc6Iw5AysbzFw1IaUvx5P2IhaMGlY0SzJBdAbNsiNuK70j9pV54RGoZBQia2G0_jx3BJQG4f17tMHU58OjolaC4mb6RZJ_ebr8MFUy1IiqZSNGqzTZDvA5SMZ0XJoCszsWnudXtseQy-XIy7zk9U5dlwaZHR5QrI_j6k3"
                width={36}
                height={36}
                unoptimized
              />
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. BROKERAGE HERO & SEARCH CONSOLE                                        */}
      {/* ========================================================================= */}
      <section className="relative bg-[#ffffff] border-b border-[#c3c6d8] pt-10 pb-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#99efe5] text-[#006f67] text-[11px] leading-[14px] tracking-[0.02em] font-medium mb-3">
              <Icon name="verified" className="text-current" size={14} />
              <span>
                {displayValue(
                  data.heroBadge,
                  "Premier Institutional Asset Brokerage",
                )}
              </span>
            </div>
            <h1 className="text-[36px] leading-[44px] tracking-[-0.02em] font-semibold text-[#191c21]">
              {displayValue(
                data.heroTitle,
                "Institutional Rigor. Exceptional Residences.",
              )}
            </h1>
            <p className="mt-2 text-[16px] leading-[26px] text-[#434655]">
              {displayValue(
                data.heroDescription,
                "Curated residential portfolios, private off-market mandates, and analytical valuation clarity across the New York Metropolitan and Hamptons prime corridors.",
              )}
            </p>
          </div>

          <div className="bg-[#ffffff] rounded-xl border border-[#c3c6d8] shadow-sm overflow-hidden p-3 lg:p-4">
            <div className="flex items-center justify-between border-b border-[#c3c6d8] pb-3 mb-3">
              <div className="flex items-center gap-1 bg-[#f2f3fa] p-1 rounded-lg">
                <button
                  className={`px-4 py-1.5 rounded-lg text-[12px] leading-[16px] tracking-[0.04em] font-semibold ${listingType === "Buy" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
                  aria-pressed={listingType === "Buy"}
                  onClick={() => setListingType("Buy")}
                  type="button"
                >
                  Buy
                </button>
                <button
                  className={`px-4 py-1.5 rounded-lg text-[12px] leading-[16px] tracking-[0.04em] font-semibold ${listingType === "Rent" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
                  aria-pressed={listingType === "Rent"}
                  onClick={() => setListingType("Rent")}
                  type="button"
                >
                  Rent
                </button>
                <button
                  className={`px-4 py-1.5 rounded-lg text-[12px] leading-[16px] tracking-[0.04em] font-semibold ${listingType === "Commercial" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
                  aria-pressed={listingType === "Commercial"}
                  onClick={() => setListingType("Commercial")}
                  type="button"
                >
                  Commercial
                </button>
                <button
                  className={`px-4 py-1.5 rounded-lg text-[12px] leading-[16px] tracking-[0.04em] font-semibold ${listingType === "New Developments" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
                  aria-pressed={listingType === "New Developments"}
                  onClick={() => setListingType("New Developments")}
                  type="button"
                >
                  New Developments
                </button>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[12px] leading-[18px] text-[#737687]">
                <Icon name="shield" className="text-[#006a69]" size={16} />
                <span>Brokerage Verified MLS Feed Active</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <div className="md:col-span-4 bg-[#f2f3fa] rounded-lg p-2.5 border border-[#c3c6d8] focus-within:border-[#0047c1] focus-within:bg-[#ffffff] transition-all">
                <label className="block text-[11px] leading-[14px] tracking-[0.02em] font-medium text-[#737687] uppercase">
                  Target Geography / Address
                </label>
                <div className="flex items-center gap-2 mt-0.5">
                  <Icon name="pin_drop" className="text-[#0047c1]" size={18} />
                  <input
                    className="w-full bg-transparent border-0 p-0 text-[16px] leading-[24px] font-semibold text-[#191c21] focus:ring-0 focus:outline-none"
                    type="text"
                    placeholder={displayValue(
                      data.defaultLocation,
                      "Enter a city, neighborhood, or address",
                    )}
                    value={locationQuery}
                    onChange={(event) => setLocationQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setSearchTerm(locationQuery);
                        document
                          .getElementById("properties")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  />
                </div>
              </div>

              <div className="md:col-span-3 bg-[#f2f3fa] rounded-lg p-2.5 border border-[#c3c6d8] focus-within:border-[#0047c1] focus-within:bg-[#ffffff] transition-all">
                <label className="block text-[11px] leading-[14px] tracking-[0.02em] font-medium text-[#737687] uppercase">
                  Acquisition Bracket
                </label>
                <div className="flex items-center justify-between gap-1 mt-0.5">
                  <select
                    aria-label="Minimum price"
                    className="w-1/2 bg-transparent text-[14px] font-semibold text-[#191c21]"
                    value={minimumPrice}
                    onChange={(event) => setMinimumPrice(event.target.value)}
                  >
                    <option value="">Min price</option>
                    <option value="2500000">$2.5M</option>
                    <option value="5000000">$5M</option>
                    <option value="10000000">$10M</option>
                  </select>
                  <select
                    aria-label="Maximum price"
                    className="w-1/2 bg-transparent text-[14px] font-semibold text-[#191c21]"
                    value={maximumPrice}
                    onChange={(event) => setMaximumPrice(event.target.value)}
                  >
                    <option value="">Max price</option>
                    <option value="5000000">$5M</option>
                    <option value="10000000">$10M</option>
                    <option value="25000000">$25M+</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2 bg-[#f2f3fa] rounded-lg p-2.5 border border-[#c3c6d8] focus-within:border-[#0047c1] focus-within:bg-[#ffffff] transition-all">
                <label className="block text-[11px] leading-[14px] tracking-[0.02em] font-medium text-[#737687] uppercase">
                  Bedrooms &amp; Baths
                </label>
                <div className="flex items-center justify-between gap-1 mt-0.5">
                  <select
                    aria-label="Minimum bedrooms"
                    className="w-full bg-transparent text-[14px] font-semibold text-[#191c21]"
                    value={minimumBedrooms}
                    onChange={(event) => setMinimumBedrooms(event.target.value)}
                  >
                    <option value="0">Any beds</option>
                    <option value="3">3+ beds</option>
                    <option value="4">4+ beds</option>
                    <option value="6">6+ beds</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2 bg-[#f2f3fa] rounded-lg p-2.5 border border-[#c3c6d8] focus-within:border-[#0047c1] focus-within:bg-[#ffffff] transition-all">
                <label className="block text-[11px] leading-[14px] tracking-[0.02em] font-medium text-[#737687] uppercase">
                  Asset Class
                </label>
                <div className="flex items-center justify-between gap-1 mt-0.5">
                  <select
                    aria-label="Asset class"
                    className="w-full bg-transparent text-[14px] font-semibold text-[#191c21]"
                    value={assetClass}
                    onChange={(event) => setAssetClass(event.target.value)}
                  >
                    <option value="all">All asset classes</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="villa">Villa</option>
                    <option value="condo">Condo</option>
                    <option value="house">House</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-1 flex items-center h-full">
                <button
                  aria-label="Search"
                  className="w-full h-[54px] rounded-lg bg-[#0047c1] hover:bg-[#155eef] text-[#ffffff] flex items-center justify-center transition-all duration-150 shadow-sm active:scale-[0.98]"
                  type="button"
                  onClick={() => {
                    setSearchTerm(locationQuery);
                    document
                      .getElementById("properties")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Icon name="search" className="text-current" size={24} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-[#c3c6d8]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] leading-[14px] tracking-[0.02em] font-medium text-[#737687] uppercase mr-1">
                  Quick Select:
                </span>
                <button
                  className={`px-3 py-1 rounded-lg text-[11px] leading-[14px] font-medium border flex items-center gap-1 ${quickFilter === "penthouse" ? "bg-[#0047c1] text-white border-[#0047c1]" : "bg-white text-[#191c21] border-[#c3c6d8]"}`}
                  type="button"
                  aria-pressed={quickFilter === "penthouse"}
                  onClick={() =>
                    setQuickFilter(
                      quickFilter === "penthouse" ? "" : "penthouse",
                    )
                  }
                >
                  <span>Penthouse Collection</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                </button>
                <button
                  className={`px-3 py-1 rounded-lg text-[11px] leading-[14px] font-medium border transition-colors ${quickFilter === "waterfront" ? "bg-[#0047c1] text-white border-[#0047c1]" : "bg-white border-[#c3c6d8] text-[#191c21] hover:border-[#0047c1]"}`}
                  type="button"
                  aria-pressed={quickFilter === "waterfront"}
                  onClick={() =>
                    setQuickFilter(
                      quickFilter === "waterfront" ? "" : "waterfront",
                    )
                  }
                >
                  Waterfront &amp; Docks
                </button>
                <button
                  className={`px-3 py-1 rounded-lg text-[11px] leading-[14px] font-medium border transition-colors ${quickFilter === "pool" ? "bg-[#0047c1] text-white border-[#0047c1]" : "bg-white border-[#c3c6d8] text-[#191c21] hover:border-[#0047c1]"}`}
                  type="button"
                  aria-pressed={quickFilter === "pool"}
                  onClick={() =>
                    setQuickFilter(quickFilter === "pool" ? "" : "pool")
                  }
                >
                  Private Pool &amp; Grounds
                </button>
                <button
                  className={`px-3 py-1 rounded-lg text-[11px] leading-[14px] font-medium border transition-colors ${quickFilter === "doorman" ? "bg-[#0047c1] text-white border-[#0047c1]" : "bg-white border-[#c3c6d8] text-[#191c21] hover:border-[#0047c1]"}`}
                  type="button"
                  aria-pressed={quickFilter === "doorman"}
                  onClick={() =>
                    setQuickFilter(quickFilter === "doorman" ? "" : "doorman")
                  }
                >
                  Doorman &amp; White Glove
                </button>
                <button
                  className={`px-3 py-1 rounded-lg text-[11px] leading-[14px] font-medium border transition-colors ${quickFilter === "price-drop" ? "bg-[#0047c1] text-white border-[#0047c1]" : "bg-white border-[#c3c6d8] text-[#191c21] hover:border-[#0047c1]"}`}
                  type="button"
                  aria-pressed={quickFilter === "price-drop"}
                  onClick={() =>
                    setQuickFilter(
                      quickFilter === "price-drop" ? "" : "price-drop",
                    )
                  }
                >
                  Price Drop (Last 14d)
                </button>
              </div>
              <button
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] leading-[14px] font-medium text-[#0047c1] hover:bg-[#f2f3fa] transition-colors"
                type="button"
                aria-expanded={filtersExpanded}
                onClick={() => setFiltersExpanded((current) => !current)}
              >
                <Icon name="tune" className="text-current" size={16} />
                <span>All 24 Advanced Filters</span>
              </button>
            </div>
            {filtersExpanded && (
              <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#c3c6d8] pt-3 text-[12px]">
                <label className="flex items-center gap-2">
                  Minimum price
                  <select
                    className="rounded border border-[#c3c6d8] bg-white px-2 py-1"
                    value={minimumPrice}
                    onChange={(event) => setMinimumPrice(event.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="2500000">$2.5M</option>
                    <option value="5000000">$5M</option>
                    <option value="10000000">$10M</option>
                  </select>
                </label>
                <label className="flex items-center gap-2">
                  Maximum price
                  <select
                    className="rounded border border-[#c3c6d8] bg-white px-2 py-1"
                    value={maximumPrice}
                    onChange={(event) => setMaximumPrice(event.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="5000000">$5M</option>
                    <option value="10000000">$10M</option>
                    <option value="25000000">$25M+</option>
                  </select>
                </label>
                <button
                  className="text-[#0047c1] font-semibold"
                  type="button"
                  onClick={() => {
                    setMinimumPrice("");
                    setMaximumPrice("");
                    setMinimumBedrooms("0");
                    setAssetClass("all");
                    setQuickFilter("");
                    setSearchTerm("");
                    setLocationQuery("");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PERSISTENT CONTROL BAR                                                 */}
      {/* ========================================================================= */}
      <section className="sticky top-[61px] z-30 bg-[#ffffff] border-b border-[#c3c6d8] py-3 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[16px] leading-[24px] font-semibold text-[#191c21]">
              {displayValue(
                undefined,
                `${visibleProperties.length} Verified Brokerage Listings`,
              )}
            </span>
            <span className="text-[#737687]">|</span>
            <span className="text-[12px] leading-[18px] text-[#434655]">
              {displayValue(
                data.regionSubtext,
                "New York & Hamptons Flagships",
              )}
            </span>
            <button
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#f2f3fa] border border-[#c3c6d8] text-[11px] leading-[14px] font-medium text-[#0047c1] hover:bg-[#ecedf5] transition-colors"
              type="button"
              onClick={saveSearchAlert}
            >
              <Icon name="bookmark_add" className="text-current" size={14} />
              <span>Save Search Alert</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-[12px] leading-[18px]">
              <span className="text-[#737687]">Sort:</span>
              <select
                aria-label="Sort properties"
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className="py-1.5 pl-2.5 pr-8 bg-[#ffffff] border border-[#c3c6d8] rounded-lg text-[#191c21] font-semibold text-[12px] leading-[18px] focus:ring-1 focus:ring-[#0047c1] focus:border-[#0047c1] cursor-pointer"
              >
                <option value="featured">Featured Mandates</option>
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
                <option value="newest">Newest to Market</option>
                <option value="price-sqft">Highest $/Sq.Ft</option>
              </select>
            </div>

            <div className="flex items-center p-0.5 bg-[#f2f3fa] rounded-lg border border-[#c3c6d8]">
              <button
                className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655]"}`}
                title="Grid View"
                type="button"
                aria-pressed={viewMode === "grid"}
                onClick={() => setViewMode("grid")}
              >
                <Icon name="grid_view" className="text-current" size={18} />
              </button>
              <button
                className={`p-1.5 rounded ${viewMode === "list" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
                title="List View"
                type="button"
                aria-pressed={viewMode === "list"}
                onClick={() => setViewMode("list")}
              >
                <Icon name="view_list" className="text-current" size={18} />
              </button>
              <button
                className={`p-1.5 rounded flex items-center gap-1 px-2 ${viewMode === "map" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
                title="Split Map View"
                type="button"
                aria-pressed={viewMode === "map"}
                onClick={() => {
                  setViewMode("map");
                  document
                    .getElementById("map-discovery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Icon name="map" className="text-current" size={18} />
                <span className="text-[11px] leading-[14px] font-medium hidden sm:inline">
                  Split Map
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MULTI-FEATURED PROPERTY LISTING GRID                                   */}
      {/* ========================================================================= */}
      <main
        className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10"
        id="properties"
      >
        <div
          className={
            viewMode === "list"
              ? "grid grid-cols-1 gap-4"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {visibleProperties.map((prop, propertyIndex) => {
            const formattedPrice = formatPrice(
              prop.price,
              displayValue(prop.currency, "$"),
            );
            const propertyId = String(prop.id ?? propertyIndex);
            const isSaved = savedPropertyIds.includes(propertyId);
            const isCompared = comparedPropertyIds.includes(propertyId);

            return (
              <article
                key={propertyId}
                className={`bg-[#ffffff] rounded-xl border border-[#c3c6d8] hover:border-[#0047c1] transition-all duration-200 shadow-sm flex ${viewMode === "list" ? "flex-row" : "flex-col"} group overflow-hidden`}
              >
                <div
                  className={`relative overflow-hidden bg-[#ecedf5] ${viewMode === "list" ? "w-1/3 min-h-60" : "aspect-[16/10]"}`}
                >
                  <Image
                    alt={displayValue(prop.title)}
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    src={String(
                      displayValue(
                        prop.imageUrl,
                        placeholderProperties[0].imageUrl,
                      ),
                    )}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between bg-gradient-to-b from-[#191c21]/40 to-transparent">
                    <div className="flex items-center gap-1.5">
                      {Boolean(prop.badge) && (
                        <span className="px-2 py-0.5 rounded text-[11px] leading-[14px] tracking-[0.02em] bg-[#006a63] text-[#ffffff] font-medium">
                          {displayValue(prop.badge)}
                        </span>
                      )}
                      {Boolean(prop.secondaryBadge) && (
                        <span className="px-2 py-0.5 rounded text-[11px] leading-[14px] tracking-[0.02em] bg-[#191c21]/70 backdrop-blur-md text-[#ffffff] border border-[#ffffff]/20 font-medium">
                          {displayValue(prop.secondaryBadge)}
                        </span>
                      )}
                    </div>
                    <button
                      className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-colors ${isSaved ? "bg-white text-[#ba1a1a]" : "bg-[#191c21]/60 text-white hover:text-[#ba1a1a] hover:bg-[#191c21]/80"}`}
                      title={
                        isSaved ? "Remove saved property" : "Save property"
                      }
                      aria-pressed={isSaved}
                      onClick={() => toggleSavedProperty(propertyId)}
                      type="button"
                    >
                      <Icon
                        name="favorite"
                        className="text-current"
                        size={18}
                      />
                    </button>
                  </div>
                  {Boolean(prop.mediaCount) && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded bg-[#191c21]/70 backdrop-blur-md text-[#ffffff] text-[11px] leading-[14px] font-medium border border-[#ffffff]/15">
                      <Icon
                        name="photo_camera"
                        className="text-current"
                        size={14}
                      />
                      <span>{displayValue(prop.mediaCount)}</span>
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[22px] leading-[28px] tracking-[-0.02em] font-bold text-[#191c21]">
                        {formattedPrice}
                      </span>
                      {Boolean(prop.pricePerSqFt) && (
                        <span className="text-[12px] leading-[18px] text-[#737687] font-medium">
                          {displayValue(prop.pricePerSqFt)}
                        </span>
                      )}
                    </div>
                    <label className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        checked={isCompared}
                        onChange={() => toggleComparedProperty(propertyId)}
                        className="rounded border-[#c3c6d8] text-[#0047c1] focus:ring-[#0047c1] w-4 h-4"
                        type="checkbox"
                      />
                      <span className="text-[11px] leading-[14px] tracking-[0.02em] text-[#0047c1] font-medium">
                        Compare
                      </span>
                    </label>
                  </div>

                  <h3 className="mt-1 text-[16px] leading-[24px] font-semibold text-[#191c21] group-hover:text-[#0047c1] transition-colors">
                    {displayValue(prop.title)}
                  </h3>
                  <p className="text-[12px] leading-[18px] text-[#434655]">
                    {displayValue(prop.address)}
                  </p>

                  <div className="grid grid-cols-4 gap-2 py-3 my-3 border-y border-[#c3c6d8] text-center">
                    <div>
                      <span className="block text-[16px] leading-[24px] font-semibold text-[#191c21]">
                        {displayValue(prop.bedrooms)}
                      </span>
                      <span className="block text-[11px] leading-[14px] text-[#737687] uppercase">
                        Beds
                      </span>
                    </div>
                    <div>
                      <span className="block text-[16px] leading-[24px] font-semibold text-[#191c21]">
                        {displayValue(prop.bathrooms)}
                      </span>
                      <span className="block text-[11px] leading-[14px] text-[#737687] uppercase">
                        Baths
                      </span>
                    </div>
                    <div>
                      <span className="block text-[16px] leading-[24px] font-semibold text-[#191c21]">
                        {displayValue(prop.interiorArea)}
                      </span>
                      <span className="block text-[11px] leading-[14px] text-[#737687] uppercase">
                        Int Sq.Ft
                      </span>
                    </div>
                    <div>
                      <span className="block text-[16px] leading-[24px] font-semibold text-[#191c21]">
                        {displayValue(prop.exteriorArea)}
                      </span>
                      <span className="block text-[11px] leading-[14px] text-[#737687] uppercase">
                        Lot / Ter
                      </span>
                    </div>
                  </div>

                  {Array.isArray(prop.amenitiesTags) &&
                    prop.amenitiesTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {prop.amenitiesTags.map((tag: any, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-[#f2f3fa] text-[12px] leading-[18px] text-[#434655]"
                          >
                            {displayValue(tag)}
                          </span>
                        ))}
                      </div>
                    )}

                  <div className="mt-auto pt-3 border-t border-[#c3c6d8] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {Boolean(prop.agentPhoto) && (
                        <Image
                          alt={displayValue(prop.agentName)}
                          className="w-7 h-7 rounded-full object-cover ring-1 ring-[#c3c6d8]"
                          src={String(prop.agentPhoto)}
                          width={28}
                          height={28}
                          unoptimized
                        />
                      )}
                      <div>
                        <span className="block text-[11px] leading-[14px] font-semibold text-[#191c21]">
                          {displayValue(prop.agentName)}
                        </span>
                        <span className="block text-[10px] text-[#737687] leading-tight">
                          {displayValue(prop.agentRole)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        className="px-2.5 py-1 text-[11px] leading-[14px] border border-[#c3c6d8] rounded-lg text-[#191c21] hover:bg-[#f2f3fa] transition-colors"
                        type="button"
                        onClick={() => {
                          setSelectedPropertyId(propertyId);
                          document
                            .getElementById("map-discovery")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Dossier
                      </button>
                      <button
                        className="px-3 py-1 text-[11px] leading-[14px] bg-[#0047c1] text-[#ffffff] rounded-lg hover:bg-[#155eef] transition-colors"
                        type="button"
                        onClick={() =>
                          scrollToInquiry(displayValue(prop.title))
                        }
                      >
                        Tour
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {visibleProperties.length === 0 && (
          <div className="py-16 text-center">
            <h2 className="text-[20px] font-semibold">
              No matching properties
            </h2>
            <p className="mt-2 text-[#737687]">
              Adjust your search or clear the active filters.
            </p>
            <button
              className="mt-4 rounded-lg bg-[#0047c1] px-4 py-2 font-semibold text-white"
              type="button"
              onClick={() => {
                setSearchTerm("");
                setLocationQuery("");
                setQuickFilter("");
                setMinimumPrice("");
                setMaximumPrice("");
                setMinimumBedrooms("0");
                setAssetClass("all");
                setShowSavedOnly(false);
              }}
            >
              Clear search and filters
            </button>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* 5. PROPERTY COMPARISON MATRIX (Feature Group D)                           */}
      {/* ========================================================================= */}
      {comparisonProperties.length > 0 && (
        <section
          className="bg-[#ffffff] border-y border-[#c3c6d8] py-10"
          id="comparison-section"
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] leading-[14px] tracking-[0.02em] text-[#0047c1] font-semibold uppercase mb-1">
                  <Icon
                    name="compare_arrows"
                    className="text-current"
                    size={16}
                  />
                  <span>Side-by-Side Asset Analysis</span>
                </div>
                <h2 className="text-[24px] leading-[32px] tracking-[-0.015em] font-semibold text-[#191c21]">
                  Property Comparison Matrix ({comparisonRows.length} Selected)
                </h2>
                <p className="text-[14px] leading-[22px] text-[#434655]">
                  Evaluating valuation density, physical metrics, and carrying
                  fees side-by-side.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1.5 text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#737687] hover:text-[#ba1a1a] transition-colors"
                  type="button"
                  onClick={() => setComparedPropertyIds([])}
                >
                  Clear All
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-[#0047c1] text-[#ffffff] text-[12px] leading-[16px] tracking-[0.04em] font-semibold hover:bg-[#155eef] transition-colors shadow-sm flex items-center gap-1.5"
                  type="button"
                  onClick={() => window.print()}
                >
                  <Icon name="download" className="text-current" size={16} />
                  <span>Export Comparison PDF</span>
                </button>
              </div>
            </div>

            {comparisonRows.length === 0 && (
              <p className="mb-4 rounded-lg bg-[#f2f3fa] px-4 py-3 text-[13px] text-[#434655]">
                No properties selected. Choose Compare on a listing to build
                this matrix.
              </p>
            )}

            <div className="border border-[#c3c6d8] rounded-xl overflow-hidden bg-[#ffffff] shadow-xs overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[850px]">
                <thead>
                  <tr className="bg-[#f2f3fa] border-b border-[#c3c6d8] text-[12px] leading-[18px] text-[#737687]">
                    <th className="p-4 w-1/4 uppercase tracking-wider font-semibold">
                      Asset Attribute
                    </th>
                    {comparisonRows.map((cp, idx) => (
                      <th
                        key={idx}
                        className="p-4 w-1/4 text-[#191c21] font-semibold"
                      >
                        {displayValue(cp.name)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c3c6d8] text-[14px] leading-[22px]">
                  <tr className="hover:bg-[#f2f3fa]/50 transition-colors">
                    <td className="p-4 font-semibold text-[#737687] text-[12px] leading-[16px]">
                      Offering Price
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className="p-4 text-[22px] leading-[28px] font-bold text-[#0047c1]"
                      >
                        {displayValue(cp.price)}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-[#f2f3fa]/50 transition-colors">
                    <td className="p-4 font-semibold text-[#737687] text-[12px] leading-[16px]">
                      Calculated Rate / Sq.Ft
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td key={idx} className="p-4 text-[#191c21] font-medium">
                        {displayValue(cp.pricePerSqFt)}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-[#f2f3fa]/50 transition-colors">
                    <td className="p-4 font-semibold text-[#737687] text-[12px] leading-[16px]">
                      Bed / Bath Configuration
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td key={idx} className="p-4 text-[#191c21]">
                        {displayValue(cp.bedsBaths)}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-[#f2f3fa]/50 transition-colors">
                    <td className="p-4 font-semibold text-[#737687] text-[12px] leading-[16px]">
                      Interior Area &amp; Exterior
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td key={idx} className="p-4 text-[#191c21]">
                        {displayValue(cp.areas)}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-[#f2f3fa]/50 transition-colors">
                    <td className="p-4 font-semibold text-[#737687] text-[12px] leading-[16px]">
                      Built / Renovated
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td key={idx} className="p-4 text-[#191c21]">
                        {displayValue(cp.yearBuilt)}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-[#f2f3fa]/50 transition-colors">
                    <td className="p-4 font-semibold text-[#737687] text-[12px] leading-[16px]">
                      Est. Monthly HOA &amp; Taxes
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td key={idx} className="p-4 text-[#434655]">
                        {displayValue(cp.carryingCharges)}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-[#f2f3fa]/50 transition-colors">
                    <td className="p-4 font-semibold text-[#737687] text-[12px] leading-[16px]">
                      Key Amenities
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td key={idx} className="p-4 text-[#434655]">
                        {displayValue(cp.keyAmenities)}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-[#f2f3fa]/40">
                    <td className="p-4 font-semibold text-[#737687] text-[12px] leading-[16px]">
                      Advisory Action
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td key={idx} className="p-4">
                        <button
                          className="w-full py-2 bg-[#0047c1] text-[#ffffff] rounded-lg text-[12px] leading-[16px] tracking-[0.04em] font-semibold hover:bg-[#155eef] transition-colors"
                          type="button"
                          onClick={() => scrollToInquiry(cp.name)}
                        >
                          Schedule Viewing
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. BROKERAGE MAP DISCOVERY (Feature Group B)                              */}
      {/* ========================================================================= */}
      <section
        className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12"
        id="map-discovery"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] leading-[14px] tracking-[0.02em] text-[#006a63] font-semibold uppercase mb-1">
              <Icon name="map" className="text-current" size={16} />
              <span>Spatial Intelligence &amp; Cluster View</span>
            </div>
            <h2 className="text-[24px] leading-[32px] tracking-[-0.015em] font-semibold text-[#191c21]">
              Interactive Prime Corridor Map
            </h2>
            <p className="text-[14px] leading-[22px] text-[#434655]">
              Synchronized asset positioning with real-time valuation pins and
              district overlays.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#f2f3fa] p-1.5 rounded-lg border border-[#c3c6d8]">
            <button
              className={`px-3 py-1 rounded text-[11px] leading-[14px] font-medium flex items-center gap-1 ${mapMode === "price" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
              type="button"
              aria-pressed={mapMode === "price"}
              onClick={() => setMapMode("price")}
            >
              <Icon name="attach_money" className="text-current" size={14} />
              <span>Price Pins</span>
            </button>
            <button
              className={`px-3 py-1 rounded text-[11px] leading-[14px] font-medium flex items-center gap-1 ${mapMode === "schools" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
              type="button"
              aria-pressed={mapMode === "schools"}
              onClick={() => setMapMode("schools")}
            >
              <Icon name="school" className="text-current" size={14} />
              <span>Top Schools</span>
            </button>
            <button
              className={`px-3 py-1 rounded text-[11px] leading-[14px] font-medium flex items-center gap-1 ${mapMode === "transit" ? "bg-white text-[#0047c1] shadow-xs" : "text-[#434655] hover:text-[#191c21]"}`}
              type="button"
              aria-pressed={mapMode === "transit"}
              onClick={() => setMapMode("transit")}
            >
              <Icon
                name="directions_subway"
                className="text-current"
                size={14}
              />
              <span>Transit Hubs</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl border border-[#c3c6d8] bg-[#ffffff] overflow-hidden shadow-sm">
          <div
            className="lg:col-span-8 relative h-[480px] bg-[#E5E9EC] map-grid-pattern overflow-hidden flex items-center justify-center select-none"
            style={{ backgroundSize: `${40 * mapZoom}px ${40 * mapZoom}px` }}
          >
            <div className="absolute -left-10 top-0 bottom-0 w-32 bg-[#D1DFEC] opacity-80 rotate-3 pointer-events-none" />
            <div className="absolute right-10 top-12 w-64 h-80 rounded-xl bg-[#DAECE0] border border-[#B9DAC2] opacity-70 flex items-center justify-center pointer-events-none">
              <span className="text-[12px] leading-[18px] font-medium text-[#006a63]/70 tracking-widest uppercase">
                Central Park
              </span>
            </div>

            {mapPins.map((pin, pIdx) => {
              const property =
                visibleProperties[pIdx % Math.max(visibleProperties.length, 1)];
              const isSelected = pin.id === activePinId;
              const markerLabel =
                mapMode === "schools"
                  ? displayValue(
                      pin.schoolRating ?? property?.schoolRating,
                      "Schools",
                    )
                  : mapMode === "transit"
                    ? displayValue(
                        pin.transitAccess ?? property?.transitAccess,
                        "Transit",
                      )
                    : displayValue(pin.price);

              return (
                <button
                  key={pin.id || pIdx}
                  className="absolute z-10 group cursor-pointer border-0 bg-transparent p-0 text-left"
                  style={{ top: pin.top, left: pin.left }}
                  type="button"
                  aria-label={`Select ${displayValue(property?.title, markerLabel)}`}
                  aria-pressed={isSelected}
                  onClick={() => {
                    if (property)
                      setSelectedPropertyId(String(property.id ?? ""));
                  }}
                >
                  <div
                    className={`px-2.5 py-1 text-[12px] leading-[18px] font-bold rounded-lg shadow-md border flex items-center gap-1 transform transition-transform group-hover:scale-110 ${
                      isSelected
                        ? "bg-[#191c21] text-[#ffffff] border-2 border-[#0047c1] ring-4 ring-[#0047c1]/20 scale-105"
                        : "bg-[#ffffff] text-[#191c21] border-[#c3c6d8] hover:bg-[#f2f3fa]"
                    }`}
                  >
                    {isSelected && (
                      <Icon
                        name="verified"
                        className="text-[#9cf2e8]"
                        size={14}
                      />
                    )}
                    <span>{markerLabel}</span>
                    {pin.hasPip && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9cf2e8]" />
                    )}
                  </div>
                  <div
                    className={`w-2 h-2 mx-auto rotate-45 -mt-1 shadow-sm ${
                      isSelected
                        ? "bg-[#191c21] -mt-1.5"
                        : "bg-[#ffffff] border-r border-b border-[#c3c6d8]"
                    }`}
                  />
                </button>
              );
            })}

            <div className="absolute bottom-4 left-4 bg-[#ffffff] rounded-lg border border-[#c3c6d8] p-1 shadow-md flex flex-col gap-1">
              <button
                className="w-8 h-8 flex items-center justify-center text-[#191c21] hover:bg-[#f2f3fa] rounded font-bold text-lg"
                type="button"
                aria-label="Zoom in"
                onClick={() => setMapZoom((zoom) => Math.min(zoom + 0.2, 1.8))}
              >
                +
              </button>
              <div className="h-px bg-[#c3c6d8]" />
              <button
                className="w-8 h-8 flex items-center justify-center text-[#191c21] hover:bg-[#f2f3fa] rounded font-bold text-lg"
                type="button"
                aria-label="Zoom out"
                onClick={() => setMapZoom((zoom) => Math.max(zoom - 0.2, 0.8))}
              >
                -
              </button>
            </div>
            <div className="absolute top-4 right-4 bg-[#ffffff]/90 backdrop-blur-md rounded-lg border border-[#c3c6d8] px-3 py-1.5 shadow-sm text-[11px] leading-[14px] font-medium text-[#191c21] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#006a69] animate-pulse" />
              <span>
                {mapMode === "schools"
                  ? "School overlays"
                  : mapMode === "transit"
                    ? "Transit overlays"
                    : "Live Coordinate Engine Active"}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#c3c6d8]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] leading-[14px] text-[#0047c1] uppercase font-bold tracking-wider">
                  Synchronized Asset Dossier
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] leading-[14px] bg-[#99efe5] text-[#006f67] font-medium">
                  Pin Active
                </span>
              </div>
              <h3 className="text-[20px] leading-[28px] font-semibold text-[#191c21]">
                {displayValue(
                  activeListing?.title,
                  displayValue(activeMapProperty.title),
                )}
              </h3>
              <p className="text-[12px] leading-[18px] text-[#434655]">
                {displayValue(
                  activeListing?.address,
                  displayValue(activeMapProperty.corridor),
                )}
              </p>

              <div className="mt-4 p-3 bg-[#f2f3fa] rounded-lg border border-[#c3c6d8]">
                <div className="flex items-baseline justify-between">
                  <span className="text-[22px] leading-[28px] font-bold text-[#191c21]">
                    {formatPrice(
                      activeListing?.price,
                      displayValue(activeListing?.currency, "$"),
                    ) || displayValue(activeMapProperty.price)}
                  </span>
                  <span className="text-[12px] leading-[18px] text-[#006a69] font-semibold">
                    {displayValue(activeMapProperty.districtTrend)}
                  </span>
                </div>
                <p className="text-[12px] leading-[18px] text-[#434655] mt-1">
                  {activeListing
                    ? `${displayValue(activeListing.bedrooms, "-")} Beds • ${displayValue(activeListing.bathrooms, "-")} Baths • ${displayValue(activeListing.interiorArea, "-")} SF`
                    : displayValue(activeMapProperty.specs)}
                </p>
              </div>

              <div className="mt-4 space-y-2 text-[12px] leading-[18px]">
                <div className="flex items-center justify-between">
                  <span className="text-[#737687]">
                    School District Rating:
                  </span>
                  <span className="font-semibold text-[#191c21]">
                    {displayValue(
                      activeListing?.schoolRating,
                      displayValue(activeMapProperty.schoolRating),
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#737687]">Subway Access:</span>
                  <span className="font-semibold text-[#191c21]">
                    {displayValue(
                      activeListing?.transitAccess,
                      displayValue(activeMapProperty.transitAccess),
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#737687]">Avg Days on Market:</span>
                  <span className="font-semibold text-[#191c21]">
                    {displayValue(
                      activeListing?.daysOnMarket,
                      displayValue(activeMapProperty.daysOnMarket),
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#c3c6d8] flex items-center gap-3">
              <button
                className="flex-1 py-2 rounded-lg bg-[#0047c1] text-[#ffffff] text-[12px] leading-[16px] tracking-[0.04em] font-semibold hover:bg-[#155eef] transition-colors shadow-sm"
                type="button"
                onClick={() =>
                  scrollToInquiry(displayValue(activeListing?.title))
                }
              >
                Book Private Tour
              </button>
              <button
                className="px-3 py-2 rounded-lg border border-[#c3c6d8] text-[#191c21] hover:bg-[#f2f3fa] transition-colors text-[12px] leading-[16px] tracking-[0.04em] font-semibold"
                type="button"
                onClick={() =>
                  document
                    .getElementById("comparison-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Full Metrics
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TOP PRODUCING EXECUTIVE ADVISORS (Feature Group E)                     */}
      {/* ========================================================================= */}
      {advisors.length > 0 && (
        <section
          className="bg-[#f2f3fa] py-14 border-t border-[#c3c6d8]"
          id="advisors"
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] leading-[14px] tracking-[0.02em] text-[#006a63] font-semibold uppercase mb-1">
                  <Icon name="badge" className="text-current" size={16} />
                  <span>Institutional Council</span>
                </div>
                <h2 className="text-[24px] leading-[32px] tracking-[-0.015em] font-semibold text-[#191c21]">
                  Top Producing Executive Advisors
                </h2>
                <p className="text-[14px] leading-[22px] text-[#434655]">
                  Direct access to the managing partners stewarding New York and
                  the Hamptons&apos; top transactions.
                </p>
              </div>
              <button
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#c3c6d8] bg-[#ffffff] text-[#191c21] text-[12px] leading-[16px] tracking-[0.04em] font-semibold hover:bg-[#ecedf5] transition-colors shadow-xs"
                type="button"
                onClick={() =>
                  document
                    .getElementById("advisors-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span>
                  {displayValue(
                    data.brokerDirectoryCount,
                    "View Full Broker Directory (48)",
                  )}
                </span>
                <Icon name="arrow_forward" className="text-current" size={16} />
              </button>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              id="advisors-grid"
            >
              {advisors.map((adv, aIdx) => (
                <div
                  key={adv.id || aIdx}
                  className="bg-[#ffffff] rounded-xl border border-[#c3c6d8] p-6 shadow-sm flex flex-col hover:border-[#0047c1] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <Image
                      alt={displayValue(adv.name)}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[#006a63]"
                      src={String(
                        displayValue(
                          adv.imageUrl,
                          placeholderAdvisors[0].imageUrl,
                        ),
                      )}
                      width={64}
                      height={64}
                      unoptimized
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-[20px] leading-[28px] font-semibold text-[#191c21]">
                          {displayValue(adv.name)}
                        </h3>
                        <Icon
                          name="verified"
                          className="text-[#006a63]"
                          size={18}
                          title="Brokerage Verified Principal"
                        />
                      </div>
                      <p className="text-[12px] leading-[18px] text-[#0047c1] font-medium">
                        {displayValue(adv.title)}
                      </p>
                      <p className="text-[11px] leading-[14px] text-[#737687] mt-0.5">
                        {displayValue(adv.license)}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-5 p-3 bg-[#f2f3fa] rounded-lg border border-[#c3c6d8] text-center">
                    <div>
                      <span className="block text-[16px] leading-[24px] font-semibold text-[#191c21]">
                        {displayValue(adv.closedVolume)}
                      </span>
                      <span className="block text-[11px] leading-[14px] text-[#737687] uppercase">
                        2024 Closed Vol
                      </span>
                    </div>
                    <div>
                      <span className="block text-[16px] leading-[24px] font-semibold text-[#191c21]">
                        {displayValue(adv.activeMandates)}
                      </span>
                      <span className="block text-[11px] leading-[14px] text-[#737687] uppercase">
                        Active Mandates
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[12px] leading-[18px] text-[#434655] mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="call" className="text-[#737687]" size={16} />
                      <a
                        className="hover:text-[#0047c1]"
                        href={`tel:${String(adv.phone ?? "").replace(/[^+\d]/g, "")}`}
                      >
                        {displayValue(adv.phone)}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="mail" className="text-[#737687]" size={16} />
                      <a
                        className="hover:text-[#0047c1]"
                        href={`mailto:${displayValue(adv.email, "")}`}
                      >
                        {displayValue(adv.email)}
                      </a>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button
                      className="w-full py-2 bg-[#0047c1] text-[#ffffff] rounded-lg text-[12px] leading-[16px] tracking-[0.04em] font-semibold hover:bg-[#155eef] transition-colors shadow-sm"
                      type="button"
                      onClick={() => scrollToInquiry(displayValue(adv.name))}
                    >
                      Request Private Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 8. PRIME NEIGHBORHOOD INTELLIGENCE (Feature Group H)                      */}
      {/* ========================================================================= */}
      {neighborhoods.length > 0 && (
        <section
          className="max-w-[1440px] mx-auto px-6 lg:px-8 py-14"
          id="neighborhoods"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] leading-[14px] tracking-[0.02em] text-[#006a63] font-semibold uppercase mb-1">
                <Icon name="analytics" className="text-current" size={16} />
                <span>District Micro-Economies</span>
              </div>
              <h2 className="text-[24px] leading-[32px] tracking-[-0.015em] font-semibold text-[#191c21]">
                Prime Neighborhood Intelligence
              </h2>
              <p className="text-[14px] leading-[22px] text-[#434655]">
                Actionable pricing indices, year-over-year shifts, and inventory
                liquidity.
              </p>
            </div>
            <span className="text-[11px] leading-[14px] text-[#737687]">
              Q1 2025 Intelligence Data
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((n, nIdx) => (
              <div
                key={nIdx}
                className="bg-[#ffffff] rounded-xl border border-[#c3c6d8] p-5 shadow-xs flex flex-col justify-between hover:border-[#0047c1] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[16px] leading-[24px] font-semibold text-[#191c21]">
                      {displayValue(n.name)}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] leading-[14px] bg-[#99efe5] text-[#006f67] font-semibold">
                      {displayValue(n.trendBadge)}
                    </span>
                  </div>
                  <div className="text-[22px] leading-[28px] tracking-[-0.02em] font-bold text-[#191c21]">
                    {displayValue(n.medianPrice)}
                  </div>
                  <p className="text-[12px] leading-[18px] text-[#737687] mt-0.5">
                    Median Sale Price
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#c3c6d8] space-y-2 text-[12px] leading-[18px]">
                  <div className="flex justify-between">
                    <span className="text-[#737687]">Avg $/Sq.Ft:</span>
                    <span className="font-medium text-[#191c21]">
                      {displayValue(n.avgPricePerSqFt)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737687]">Avg Days on Market:</span>
                    <span className="font-medium text-[#191c21]">
                      {displayValue(n.daysOnMarket)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737687]">Active Mandates:</span>
                    <span className="font-medium text-[#0047c1]">
                      {displayValue(n.activeCount)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 9. LEAD GENERATION & PRIVATE ASSET VALUATION (Feature Group K)            */}
      {/* ========================================================================= */}
      <section className="bg-[#ffffff] border-t border-[#c3c6d8] py-14">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="bg-[#f2f3fa] rounded-2xl border border-[#c3c6d8] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffffff] text-[#0047c1] text-[11px] leading-[14px] font-medium mb-4 border border-[#c3c6d8]">
                  <Icon name="lock" className="text-current" size={14} />
                  <span>Confidential Representation Mandate</span>
                </div>
                <h2 className="text-[36px] leading-[44px] tracking-[-0.02em] font-semibold text-[#191c21]">
                  {displayValue(
                    data.advisoryLeadTitle,
                    "Schedule Private Advisory & Asset Valuation",
                  )}
                </h2>
                <p className="mt-3 text-[16px] leading-[26px] text-[#434655]">
                  {displayValue(
                    data.advisoryLeadDescription,
                    "Whether positioning a flagship residence for acquisition or deploying institutional capital into prime residential portfolios, our Managing Directors provide discrete, data-driven counsel.",
                  )}
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-[12px] leading-[18px] text-[#191c21]">
                    <Icon
                      name="check_circle"
                      className="text-[#006a63]"
                      size={20}
                    />
                    <span>
                      Off-market luxury inventory access not listed on public
                      MLS
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] leading-[18px] text-[#191c21]">
                    <Icon
                      name="check_circle"
                      className="text-[#006a63]"
                      size={20}
                    />
                    <span>
                      Bespoke Comparative Market Analysis (CMA) within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] leading-[18px] text-[#191c21]">
                    <Icon
                      name="check_circle"
                      className="text-[#006a63]"
                      size={20}
                    />
                    <span>
                      Non-disclosure compliance &amp; discrete VIP private
                      viewings
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#ffffff] rounded-xl border border-[#c3c6d8] p-6 lg:p-8 shadow-sm">
                <form
                  className="space-y-4"
                  id="advisory-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    announce(
                      "Request validated locally. Connect a brokerage endpoint to deliver it.",
                    );
                    event.currentTarget.reset();
                    setInquiryProperty("");
                  }}
                >
                  {inquiryProperty && (
                    <p className="rounded-lg bg-[#f2f3fa] px-3 py-2 text-[12px] text-[#434655]">
                      Inquiry for:{" "}
                      <span className="font-semibold text-[#191c21]">
                        {inquiryProperty}
                      </span>
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#191c21] mb-1">
                        Full Legal Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-[14px] leading-[22px] bg-[#ffffff] border border-[#c3c6d8] rounded-lg text-[#191c21] focus:outline-none focus:border-[#0047c1] focus:ring-1 focus:ring-[#0047c1]"
                        placeholder="e.g. Harrison Sterling"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#191c21] mb-1">
                        Direct Telephone
                      </label>
                      <input
                        className="w-full px-3 py-2 text-[14px] leading-[22px] bg-[#ffffff] border border-[#c3c6d8] rounded-lg text-[#191c21] focus:outline-none focus:border-[#0047c1] focus:ring-1 focus:ring-[#0047c1]"
                        placeholder="+1 (555) 019-2834"
                        type="tel"
                        name="telephone"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#191c21] mb-1">
                        Confidential Email
                      </label>
                      <input
                        className="w-full px-3 py-2 text-[14px] leading-[22px] bg-[#ffffff] border border-[#c3c6d8] rounded-lg text-[#191c21] focus:outline-none focus:border-[#0047c1] focus:ring-1 focus:ring-[#0047c1]"
                        placeholder="client@organization.com"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#191c21] mb-1">
                        Mandate Objective
                      </label>
                      <select className="w-full px-3 py-2 text-[14px] leading-[22px] bg-[#ffffff] border border-[#c3c6d8] rounded-lg text-[#191c21] focus:outline-none focus:border-[#0047c1] focus:ring-1 focus:ring-[#0047c1] cursor-pointer">
                        <option>Buyer Acquisition ($5M+)</option>
                        <option>Seller Representation &amp; Listing</option>
                        <option>Portfolio / 1031 Exchange Advisory</option>
                        <option>Off-Market Private Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#191c21] mb-1">
                        Target Capital Bracket
                      </label>
                      <select className="w-full px-3 py-2 text-[14px] leading-[22px] bg-[#ffffff] border border-[#c3c6d8] rounded-lg text-[#191c21] focus:outline-none focus:border-[#0047c1] focus:ring-1 focus:ring-[#0047c1] cursor-pointer">
                        <option>$2,500,000 – $5,000,000</option>
                        <option>$5,000,000 – $10,000,000</option>
                        <option>$10,000,000 – $25,000,000+</option>
                        <option>Institutional Ultra-Prime ($25M+)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#191c21] mb-1">
                        Preferred Office / Advisor
                      </label>
                      <select className="w-full px-3 py-2 text-[14px] leading-[22px] bg-[#ffffff] border border-[#c3c6d8] rounded-lg text-[#191c21] focus:outline-none focus:border-[#0047c1] focus:ring-1 focus:ring-[#0047c1] cursor-pointer">
                        <option>
                          Manhattan Flagship (Tribeca / Central Park)
                        </option>
                        <option>Hamptons Regional (East Hampton)</option>
                        <option>South Florida Private Desk (Miami)</option>
                        <option>First Available Managing Director</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#191c21] mb-1">
                      Specific Portfolio Requirements or Notes (Optional)
                    </label>
                    <textarea
                      className="w-full px-3 py-2 text-[14px] leading-[22px] bg-[#ffffff] border border-[#c3c6d8] rounded-lg text-[#191c21] focus:outline-none focus:border-[#0047c1] focus:ring-1 focus:ring-[#0047c1]"
                      placeholder="Target square footage, specific building requirements, outdoor space parameters..."
                      rows={3}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[12px] leading-[18px] text-[#737687]">
                      All consultations subject to strict brokerage
                      non-disclosure.
                    </p>
                    <button
                      className="px-6 py-2.5 rounded-lg bg-[#0047c1] text-[#ffffff] text-[16px] leading-[24px] font-semibold hover:bg-[#155eef] transition-colors shadow-sm"
                      type="submit"
                    >
                      Transmit Consultation Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FOOTER                                                                */}
      {/* ========================================================================= */}
      <footer className="bg-[#ffffff] border-t border-[#c3c6d8]">
        <div className="w-full px-6 lg:px-8 py-12 max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-[#c3c6d8]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded bg-[#0047c1] flex items-center justify-center text-[#ffffff] font-bold text-sm">
                  E
                </div>
                <span className="text-[16px] leading-[24px] font-semibold text-[#191c21]">
                  {displayValue(data.companyName, "Estate Pro")} Brokerage Group
                </span>
              </div>
              <p className="text-[12px] leading-[18px] text-[#434655] ">
                {displayValue(
                  data.brokerageLicenseNotice,
                  "Institutional brokerage representation for exceptional residential real estate assets. Licensed brokerage in the State of New York, Connecticut, and Florida.",
                )}
              </p>
              <div className="mt-4 flex items-center gap-3 text-[12px] leading-[18px] text-[#737687]">
                <span className="inline-flex items-center gap-1">
                  <Icon name="apartment" className="text-current" size={16} />
                  <span>
                    {displayValue(
                      data.flagshipAddress,
                      "Flagship: 450 Lexington Ave, New York",
                    )}
                  </span>
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-[16px] leading-[24px] font-semibold text-[#191c21] mb-3">
                Brokerage Solutions
              </h4>
              <ul className="space-y-2 text-[12px] leading-[18px]">
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Exclusive Listings
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Institutional Investments
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Private Client Advisory
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Global Affiliates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] leading-[24px] font-semibold text-[#191c21] mb-3">
                Intel &amp; Coverage
              </h4>
              <ul className="space-y-2 text-[12px] leading-[18px]">
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Neighborhood Guides
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Market Intel Quarterly
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Careers &amp; Broker Onboarding
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Tribeca &amp; SoHo Desk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] leading-[24px] font-semibold text-[#191c21] mb-3">
                Compliance &amp; Legal
              </h4>
              <ul className="space-y-2 text-[12px] leading-[18px]">
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Legal &amp; Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Accessibility Statement
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#434655] hover:text-[#191c21] transition-colors"
                    href="#"
                  >
                    Fair Housing Notice (NYS)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] leading-[18px] text-[#737687]">
            <div className="flex items-center gap-2">
              <Icon name="home" className="text-current" size={18} />
              <span>
                © {new Date().getFullYear()}{" "}
                {displayValue(data.companyName, "Estate Pro")} Brokerage Group.
                All rights reserved. Equal Housing Opportunity.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>{displayValue(data.mlsIdCode, "MLS ID: 88201-EP")}</span>
              <span>REBNY Member</span>
              <span>NAR Luxury Affiliate</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
