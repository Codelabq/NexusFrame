"use client";

import Image from "next/image";
import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bell,
  Bookmark,
  Building2,
  Camera,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Compass,
  Footprints,
  GraduationCap,
  Heart,
  Layers3,
  LayoutList,
  Locate,
  LocateFixed,
  Map,
  MapPin,
  MapPinned,
  Minus,
  Plus,
  Route,
  Scale,
  Search,
  Signpost,
  SlidersHorizontal,
  SquareX,
  TrainFront,
  TramFront,
  Trees,
  Waves,
} from "lucide-react";

type RealEstate07Props = {
  resolvedData?: Record<string, unknown>;
};

const lucideIconMap: Record<string, LucideIcon> = {
  near_me: LocateFixed,
  search: Search,
  tune: SlidersHorizontal,
  map: Map,
  notifications: Bell,
  bookmark: Bookmark,
  add_business: Building2,
  arrow_drop_down: ChevronDown,
  directions_subway: TrainFront,
  school: GraduationCap,
  water: Waves,
  park: Trees,
  polyline: Route,
  view_agenda: LayoutList,
  photo_camera: Camera,
  favorite: Heart,
  pin_drop: MapPin,
  directions_walk: Footprints,
  tram: TramFront,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  my_location: Locate,
  add: Plus,
  remove: Minus,
  explore: Compass,
  equal: Scale,
  arrow_forward: ArrowRight,
  layers: Layers3,
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
  const IconComponent = lucideIconMap[name] ?? MapPin;
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

const placeholderProperties = [
  {
    id: 1,
    title: "301 Main Street, Residence 18B",
    neighborhoodLocation: "South Beach / Rincon Hill, San Francisco, CA 94105",
    price: 1480000,
    currency: "$",
    pricePerSqFt: "$1,121/sqft",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1320,
    yearBuilt: 2021,
    badgeText: "Featured",
    priceDropText: "Price Drop -$25k",
    photoCountText: "1/18",
    mapPinId: 1,
    pinLabel: "Pin #1",
    walkScore: 98,
    transitNotice: "MUNI / Embarcadero 4 min",
    amenityPerk: "EV Valet",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA49oGEueotpo7VCL1ez7wuLvnnB9_vSn7BinFjK6dn-Q9YddFD8VvbfDKDMT9Knw9YxpK1oVguk2ur9YZd_MgFjjPPXntX2LAATXzsgPCS3HgDV9bsxTzthAdJvuDIuxZACTwhNBJx1lxJ7ZtHfO2qTAKC7-JrieELzVSTgkB6P2A4jiebSZnl35eC_Xn5-KheX16OSzpaNOl-cuwH0rp8FbK3EqU-N0epe9WxA6uUn3V4_EQo-w97",
  },
  {
    id: 2,
    title: "110 Channel Street, Unit 402",
    neighborhoodLocation: "Mission Bay Waterfront, San Francisco, CA 94158",
    price: 1250000,
    currency: "$",
    pricePerSqFt: "$1,086/sqft",
    bedrooms: 2,
    bathrooms: 2,
    area: 1150,
    yearBuilt: 2019,
    badgeText: "New (2h ago)",
    photoCountText: "1/14",
    mapPinId: 2,
    pinLabel: "Pin #2",
    walkScore: 92,
    transitNotice: "Caltrain 4th & King 6 min",
    amenityPerk: "Mission Creek Park 200m",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpn31Sti6pHkKV9u8vonCY2KRNJUL6_V233sz4uxu5bI4mqwrQ2kx8MaTvlCP3zTd-AVgVZehWzfvF5EDuZvP3KkYzXnX0uhbfYbWDda1KFg9csR8QT59eoCNlfz6MkoSAcSGkZW1Z8W1iZmIe-FpYm92i48q2TPylEoux1c1As8HDALUGW-zbCLkOBXykzUA2j2CpJK5ThMD2jZssC1raTjuw1rkIH62x77cNg9G7LFqO8xj73v67",
  },
  {
    id: 3,
    title: "2440 Broadway Street, Flat 2",
    neighborhoodLocation: "Pacific Heights, San Francisco, CA 94115",
    price: 2150000,
    currency: "$",
    pricePerSqFt: "$1,287/sqft",
    bedrooms: 3,
    bathrooms: 2,
    area: 1670,
    yearBuilt: 2023,
    badgeText: "Classic Architecture",
    photoCountText: "1/26",
    mapPinId: 3,
    pinLabel: "Pin #3",
    walkScore: 95,
    transitNotice: "Top School Rating: 9/10",
    amenityPerk: "Alta Plaza Park 2 min",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xdpxql1Su0dPKVQ5qrSpL8gg2Ii2BcMV-i5kP-zgE3iFYn16k5s-jFD68wMF4cKdURYxfid4Fju_FjdYqD5B16SGDWIxs6GBzMI5ncaqPQqYpKL-ADE9NiZkXZu8QixNUcEqyQPaazJk9GgUAcjakyJBVNb9AO9H6gFyqI1a7gZHwnkB_Xp3Ux-LkSZCa0WHopD4eIbLMD8-v3eJo87QAtaDOqdY1XTyWzGYQtNNf1tAdNZA6hgy",
  },
  {
    id: 4,
    title: "428 28th Street, Unit A",
    neighborhoodLocation:
      "Noe Valley / 24th St Corridor, San Francisco, CA 94131",
    price: 1695000,
    currency: "$",
    pricePerSqFt: "$1,210/sqft",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    yearBuilt: 2017,
    badgeText: "Garden Terrace",
    photoCountText: "1/21",
    mapPinId: 4,
    pinLabel: "Pin #4",
    walkScore: 94,
    transitNotice: "J Church Line 2 blocks",
    amenityPerk: "Low HOA ($310)",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtIGXJ8SlMrPx4xr6Dzjd2KrZPaYiYQjMEuSeyZXr3cwm33KflKXr4WRFycFsuD1Glq8dmpWc76rD-xQqnPBuSmq5N1eZOYHjVXS6edb1ep2Pc2fN5MHp9yxxXUD9J5PIvEf9MctODaedkLhRte8Zp35b1FsQLHIxfxjZzByuu8VdDfl-gCQth07pbHco1g_uqwU3V-U-BrrJrkAp5BHIXsVbbR4vbPwO1BDZeUkj0YJ3riUMUjo4r",
  },
];

const placeholderMapPins = [
  { id: 1, label: "$1.48M", top: "36%", left: "64%", active: true },
  { id: 2, label: "$1.25M", top: "52%", left: "68%", active: false },
  { id: 3, label: "$2.15M", top: "22%", left: "38%", active: false },
  { id: 4, label: "$1.69M", top: "68%", left: "36%", active: false },
  { id: 5, label: "$890k", top: "18%", left: "60%", active: false },
  { id: 6, label: "$2.89M", top: "28%", left: "28%", active: false },
  { id: 7, label: "$3.1M", top: "26%", left: "78%", active: false },
];

const placeholderActivePinPreview = {
  pinNumber: "Pin #1 • Selected",
  title: "301 Main St #18B • South Beach",
  specs: "3 Beds • 2.5 Baths • 1,320 sqft",
  price: "$1,480,000",
  walkScore: 98,
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBBnCDSlGnEIMaD40xhqPklbrjmsDie2r2numeV10ClveKZ7pwf8FeiejsV6NTDzuCp4jKc-fY8h0C0wPz87U0c99FUHASuUBgaatVNTjRdTRSQEfTXYvKxZlrXbJXXdG2qCPkNRFIGNoUGIWOaXzsod3jr15XZVHqBW6qrngWrT-AxG9hCiVQfnvT5zgtE4dBB3D7pxI7oVLWBRdvMXSJVb0GMfFwGHK7whBRRV2-IceNS-Cc_rUZG",
};

const placeholderClusters = [
  { label: "Financial Dist.", count: 14, top: "32%", left: "72%", ping: true },
  { label: "North Coast", count: 8, top: "14%", left: "50%", ping: false },
];

const placeholderSubmarkets = [
  {
    name: "Downtown / South Beach",
    median: "$1.35M",
    count: "142 Homes",
    walk: "98 Walk",
  },
  { name: "Mission Bay", median: "$1.18M", count: "68 Homes", walk: "92 Walk" },
  {
    name: "Pacific Heights",
    median: "$2.40M",
    count: "45 Homes",
    walk: "95 Walk",
  },
  { name: "Noe Valley", median: "$1.85M", count: "29 Homes", walk: "94 Walk" },
];

const placeholderData: Record<string, unknown> = {
  companyName: "Map Living",
  searchPlaceholder: "Search by neighborhood, street, or ZIP...",
  searchQuery: "San Francisco Bay Area, CA",
  searchBadge: "Downtown",
  savedLocationsCount: 3,
  regionTitle: "San Francisco Metro Area",
  viewportCoordinates: "South Beach & Bay Area Corridor",
  totalListingsLabel: "284 Homes",
  properties: placeholderProperties,
  mapPins: placeholderMapPins,
  activePinPreview: placeholderActivePinPreview,
  mapClusters: placeholderClusters,
  submarkets: placeholderSubmarkets,
  mlsSyncTimestamp: "4 mins ago",
  copyrightStatement:
    "© 2025 Map Living Real Estate Technologies Inc. Equal Housing Opportunity. Map data © OpenStreetMap contributors.",
  mlsFeedVersion: "San Francisco MLS Real-time Geospatial Feed v4.8",
};

function normalizeTemplateData(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return data && Object.keys(data).length > 0
    ? { ...placeholderData, ...data }
    : placeholderData;
}

export default function RealEstate07({ resolvedData }: RealEstate07Props) {
  const data = normalizeTemplateData(resolvedData);

  const [searchTerm, setSearchTerm] = useState<string>(
    displayValue(data.searchQuery, "San Francisco Bay Area, CA"),
  );
  const [selectedPinId, setSelectedPinId] = useState<number>(1);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [showTransitOnly, setShowTransitOnly] = useState<boolean>(true);
  const [bedroomFilter, setBedroomFilter] = useState<"all" | "2+" | "3+">("2+");

  const properties = (
    Array.isArray(data.properties) && data.properties.length > 0
      ? data.properties
      : placeholderProperties
  ) as Record<string, any>[];

  const mapPins = (
    Array.isArray(data.mapPins) && data.mapPins.length > 0
      ? data.mapPins
      : placeholderMapPins
  ) as Record<string, any>[];

  const submarkets = (
    Array.isArray(data.submarkets) && data.submarkets.length > 0
      ? data.submarkets
      : placeholderSubmarkets
  ) as Record<string, any>[];

  const mapClusters = (
    Array.isArray(data.mapClusters) && data.mapClusters.length > 0
      ? data.mapClusters
      : placeholderClusters
  ) as Record<string, any>[];

  const activePinPreview = (
    data.activePinPreview && typeof data.activePinPreview === "object"
      ? data.activePinPreview
      : placeholderActivePinPreview
  ) as Record<string, any>;

  const filteredProperties = properties.filter((property) => {
    const query = searchTerm.trim().toLowerCase();
    const searchableText = [
      property.title,
      property.neighborhoodLocation,
      property.address,
      property.amenityPerk,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !query ||
      searchableText.includes(query) ||
      String(property.title ?? "")
        .toLowerCase()
        .includes(query);

    const matchesTransit = !showTransitOnly || Boolean(property.transitNotice);

    const bedrooms = Number(property.bedrooms ?? 0);
    const matchesBedrooms =
      bedroomFilter === "all"
        ? true
        : bedroomFilter === "2+"
          ? bedrooms >= 2
          : bedrooms >= 3;

    return matchesSearch && matchesTransit && matchesBedrooms;
  });

  const visibleProperties =
    filteredProperties.length > 0 ? filteredProperties : properties;

  const selectedProperty =
    visibleProperties.find(
      (property) => Number(property.mapPinId ?? property.id) === selectedPinId,
    ) ?? visibleProperties[0];

  const visiblePins = visibleProperties.map((property, index) => {
    const mappedPin = mapPins.find(
      (pin) => Number(pin.id) === Number(property.mapPinId ?? property.id),
    ) ?? {
      id: property.mapPinId ?? property.id,
      top: `${26 + (index % 4) * 14}%`,
      left: `${28 + (index % 6) * 13}%`,
    };

    return {
      id: Number(property.mapPinId ?? property.id),
      label: formatPrice(property.price, displayValue(property.currency, "$")),
      top: mappedPin.top ?? `${30 + index * 10}%`,
      left: mappedPin.left ?? `${40 + index * 10}%`,
    };
  });

  const previewData = {
    pinNumber: `Pin #${selectedProperty?.mapPinId ?? selectedProperty?.id ?? 1} • Selected`,
    title: displayValue(selectedProperty?.title, activePinPreview.title),
    specs: `${selectedProperty?.bedrooms ?? 3} Beds • ${selectedProperty?.bathrooms ?? 2.5} Baths • ${selectedProperty?.area ?? 1320} sqft`,
    price:
      formatPrice(
        selectedProperty?.price,
        displayValue(selectedProperty?.currency, "$"),
      ) || displayValue(activePinPreview.price, "$1,480,000"),
    walkScore: selectedProperty?.walkScore ?? activePinPreview.walkScore ?? 98,
    imageUrl:
      displayValue(selectedProperty?.imageUrl, activePinPreview.imageUrl) ||
      placeholderActivePinPreview.imageUrl,
  };

  return (
    <div className="bg-[#f9f9ff] text-[#141b2c] font-['Manrope',sans-serif] text-[14px] leading-[20px] antialiased min-h-screen flex flex-col selection:bg-[#0057c2] selection:text-[#ffffff]">
      <style>{`
        .carto-pattern {
          background-color: #f4f6fa;
          background-image:
            radial-gradient(#d5dcee 0.75px, transparent 0.75px),
            linear-gradient(to right, rgba(225, 232, 245, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(225, 232, 245, 0.4) 1px, transparent 1px);
          background-size: 24px 24px, 96px 96px, 96px 96px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f3ff;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c6d7;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #727786;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <header className="w-full h-16 px-4 md:px-6 flex items-center justify-between gap-4 sticky top-0 z-50 bg-[#ffffff] border-b border-[#c1c6d7] shadow-sm">
        <div className="flex items-center gap-5 flex-1 max-w-2xl">
          <a className="flex items-center gap-2.5 shrink-0" href="#">
            <div className="w-8 h-8 rounded-lg bg-[#0057c2] flex items-center justify-center text-[#ffffff] shadow-sm">
              <Icon
                name="near_me"
                className="text-current"
                size={20}
                strokeWidth={2.2}
              />
            </div>
            <span className="text-[20px] leading-[28px] font-bold text-[#141b2c] tracking-tight">
              {displayValue(data.companyName, "Map Living")}
            </span>
          </a>

          <div className="relative flex-1 hidden sm:flex items-center">
            <div className="absolute left-3 flex items-center pointer-events-none text-[#525c70]">
              <Icon
                name="search"
                className="text-current"
                size={18}
                strokeWidth={2.2}
              />
            </div>
            <input
              className="w-full h-10 pl-9 pr-24 bg-[#f1f3ff] border border-[#c1c6d7] rounded-lg text-[14px] leading-[20px] text-[#141b2c] placeholder:text-[#525c70] focus:outline-none focus:border-[#0057c2] focus:ring-1 focus:ring-[#0057c2] focus:bg-[#ffffff] transition-all"
              placeholder={displayValue(
                data.searchPlaceholder,
                "Search by neighborhood, street, or ZIP...",
              )}
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            {Boolean(data.searchBadge) && (
              <div className="absolute right-2 flex items-center gap-1">
                <button className="px-2 py-0.5 rounded bg-[#e9edff] text-[#0057c2] text-[11px] leading-[14px] font-bold tracking-[0.04em] border border-[#c1c6d7]/60 hover:bg-[#e0e8ff] transition-colors">
                  {displayValue(data.searchBadge)}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button className="w-9 h-9 rounded-lg border border-[#c1c6d7] flex items-center justify-center text-[#141b2c] hover:bg-[#e9edff] transition-colors duration-150">
            <Icon
              name="tune"
              className="text-current"
              size={19}
              strokeWidth={2.2}
            />
          </button>
          <button className="w-9 h-9 rounded-lg border border-[#c1c6d7] flex items-center justify-center text-[#141b2c] hover:bg-[#e9edff] transition-colors duration-150">
            <Icon
              name="map"
              className="text-current"
              size={19}
              strokeWidth={2.2}
            />
          </button>
          <button className="w-9 h-9 rounded-lg border border-[#c1c6d7] flex items-center justify-center text-[#141b2c] hover:bg-[#e9edff] transition-colors duration-150 relative">
            <Icon
              name="notifications"
              className="text-current"
              size={19}
              strokeWidth={2.2}
            />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#006a69]" />
          </button>

          <button className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#c1c6d7] text-[12px] leading-[16px] font-semibold tracking-[0.02em] text-[#141b2c] hover:bg-[#e9edff] transition-colors duration-150">
            <Icon
              name="bookmark"
              className="text-[#0057c2]"
              size={16}
              strokeWidth={2.2}
            />
            <span>Saved Locations</span>
            <span className="ml-0.5 px-1.5 py-0.2 bg-[#e0e8ff] text-[#0057c2] rounded-full text-[11px] leading-[14px] font-bold">
              {displayValue(data.savedLocationsCount, "3")}
            </span>
          </button>

          <button className="h-9 px-3.5 md:px-4 rounded-lg bg-[#0057c2] hover:bg-[#006ef2] text-[#ffffff] text-[12px] leading-[16px] font-semibold tracking-[0.02em] inline-flex items-center gap-1.5 shadow-sm transition-transform duration-150">
            <Icon
              name="add_business"
              className="text-current"
              size={18}
              strokeWidth={2.2}
            />
            <span>List Property</span>
          </button>
        </div>
      </header>

      <section className="w-full bg-[#ffffff] border-b border-[#c1c6d7] px-4 md:px-6 py-2.5 z-40 sticky top-16 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <button
            className={`h-8 px-3 rounded border text-[12px] leading-[16px] font-semibold ${showTransitOnly ? "border-[#0057c2] bg-[#e9edff] text-[#0057c2]" : "border-[#c1c6d7] bg-[#ffffff] text-[#141b2c]"}`}
            onClick={() => setShowTransitOnly((current) => !current)}
          >
            <span className="flex items-center gap-2">
              <Icon
                name="directions_subway"
                className="text-current"
                size={15}
                strokeWidth={2.2}
              />
              <span>{showTransitOnly ? "Near Transit" : "Show All"}</span>
            </span>
          </button>

          {[
            ["all", "All Beds"],
            ["2+", "2+ Beds"],
            ["3+", "3+ Beds"],
          ].map(([value, label]) => (
            <button
              key={value}
              className={`h-8 px-3 rounded border text-[12px] leading-[16px] font-semibold ${bedroomFilter === value ? "border-[#0057c2] bg-[#f1f3ff] text-[#0057c2]" : "border-[#c1c6d7] bg-[#ffffff] text-[#141b2c]"}`}
              onClick={() => setBedroomFilter(value as "all" | "2+" | "3+")}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden w-full relative">
        <section className="w-full lg:w-[46%] xl:w-[44%] h-[600px] lg:h-[calc(100vh-128px)] flex flex-col bg-[#f9f9ff] border-r border-[#c1c6d7] overflow-y-auto custom-scrollbar">
          <div className="p-4 md:p-5 border-b border-[#c1c6d7] bg-[#ffffff] sticky top-0 z-20">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div>
                <h1 className="text-[16px] leading-[24px] font-bold text-[#141b2c] flex items-center gap-2">
                  <span>
                    {displayValue(data.regionTitle, "San Francisco Metro Area")}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#e9edff] text-[#0057c2] text-[11px] leading-[14px] font-bold">
                    {displayValue(
                      data.totalListingsLabel,
                      `${visibleProperties.length} Homes`,
                    )}
                  </span>
                </h1>
                <p className="text-[12px] leading-[18px] text-[#525c70] mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#006a69] animate-pulse" />
                  <span>Live Map View</span>
                  <span>•</span>
                  <span>
                    {displayValue(
                      data.viewportCoordinates,
                      "South Beach & Bay Area Corridor",
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            {visibleProperties.length === 0 ? (
              <div className="bg-[#ffffff] border border-[#c1c6d7] rounded-lg p-6 text-center">
                <p className="text-[16px] font-bold text-[#141b2c]">
                  No homes match your filters
                </p>
                <p className="mt-2 text-[#525c70]">
                  Try a wider search or reset the bedroom and transit filters.
                </p>
              </div>
            ) : (
              visibleProperties.map((property) => {
                const imageSrc =
                  displayValue(property.imageUrl) ||
                  (Array.isArray(property.images) && property.images[0]) ||
                  placeholderProperties[0].imageUrl;

                const isActive =
                  Number(property.mapPinId ?? property.id) ===
                    Number(selectedPinId) || hoveredCardId === property.id;
                const formattedPrice = formatPrice(
                  property.price,
                  displayValue(property.currency, "$"),
                );

                return (
                  <article
                    key={property.id}
                    className={`bg-[#ffffff] border-2 ${isActive ? "border-[#0057c2] shadow-md" : "border-[#c1c6d7]"} rounded-lg overflow-hidden transition-all duration-200 group relative`}
                    onMouseEnter={() => setHoveredCardId(property.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    onClick={() =>
                      setSelectedPinId(Number(property.mapPinId ?? property.id))
                    }
                  >
                    <div className="relative w-full aspect-[16/10] bg-[#e0e8ff] overflow-hidden">
                      <Image
                        alt={displayValue(property.title, "Listing Photograph")}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        src={String(imageSrc)}
                        fill
                        sizes="(max-width: 768px) 100vw, 46vw"
                        unoptimized
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {Boolean(property.badgeText) && (
                          <span className="px-2 py-0.5 rounded bg-[#141b2c]/90 text-[#ffffff] text-[11px] leading-[14px] font-bold tracking-wider uppercase">
                            {displayValue(property.badgeText)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[20px] leading-[28px] font-bold text-[#141b2c]">
                            {formattedPrice}
                          </span>
                          {Boolean(property.pricePerSqFt) && (
                            <span className="text-[12px] leading-[18px] text-[#525c70] font-medium">
                              {displayValue(property.pricePerSqFt)}
                            </span>
                          )}
                        </div>
                        {isActive && (
                          <span className="px-2 py-0.5 rounded bg-[#f1f3ff] text-[#006a69] text-[11px] leading-[14px] font-bold border border-[#006a69]/20">
                            Selected
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[12px] leading-[16px] font-semibold text-[#414755]">
                        {property.bedrooms !== undefined && (
                          <span>{property.bedrooms} Beds</span>
                        )}
                        {property.bedrooms !== undefined &&
                          property.bathrooms !== undefined && (
                            <span className="text-[#c1c6d7]">•</span>
                          )}
                        {property.bathrooms !== undefined && (
                          <span>{property.bathrooms} Baths</span>
                        )}
                        {property.area !== undefined && (
                          <>
                            <span className="text-[#c1c6d7]">•</span>
                            <span>{property.area} sqft</span>
                          </>
                        )}
                      </div>

                      <div>
                        <p className="text-[14px] leading-[20px] font-medium text-[#141b2c]">
                          {displayValue(property.title)}
                        </p>
                        <p className="text-[12px] leading-[18px] text-[#525c70]">
                          {displayValue(
                            property.neighborhoodLocation || property.address,
                          )}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#c1c6d7]/60 flex flex-wrap items-center gap-2">
                        {property.walkScore !== undefined && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#e0e8ff] text-[#414755] text-[11px] leading-[14px] font-bold">
                            <Icon
                              name="directions_walk"
                              className="text-[#006a69]"
                              size={14}
                              strokeWidth={2.2}
                            />
                            <span>
                              Walk <strong>{property.walkScore}</strong>
                            </span>
                          </div>
                        )}
                        {Boolean(property.transitNotice) && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#e0e8ff] text-[#414755] text-[11px] leading-[14px] font-bold">
                            <Icon
                              name="tram"
                              className="text-[#0057c2]"
                              size={14}
                              strokeWidth={2.2}
                            />
                            <span>{displayValue(property.transitNotice)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </section>

        <section
          className="flex-1 h-[520px] lg:h-[calc(100vh-128px)] relative overflow-hidden bg-[#e8ecf4] select-none"
          data-location="San Francisco"
        >
          <div className="absolute inset-0 w-full h-full carto-pattern">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
              preserveAspectRatio="none"
              viewBox="0 0 1000 800"
            >
              <defs>
                <linearGradient
                  id="bayWater"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#c9daf8" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#b6cff5" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <rect fill="#eef3fb" height="100%" width="100%" />
              <path
                d="M 520,0 C 580,180 640,240 760,290 C 850,330 920,380 1000,430 L 1000,0 Z"
                fill="url(#bayWater)"
              />
              <path
                d="M 0,220 L 420,240 L 620,380 L 710,540 L 760,800"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4.5"
              />
              <path
                d="M 320,0 L 360,190 L 490,340 L 520,800"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
              />
            </svg>

            {mapClusters.map((cluster, cIdx) => (
              <div
                key={cIdx}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                style={{ top: cluster.top, left: cluster.left }}
              >
                <div className="relative flex items-center justify-center">
                  {cluster.ping && (
                    <div className="absolute w-12 h-12 rounded-full bg-[#006a69]/20 animate-ping" />
                  )}
                  <div className="w-10 h-10 rounded-full bg-[#141b2c] text-[#ffffff] border-2 border-[#006a69] text-[16px] leading-[24px] font-bold flex items-center justify-center shadow-lg">
                    {cluster.count}
                  </div>
                </div>
              </div>
            ))}

            {visiblePins.map((pin) => {
              const isActive = Number(selectedPinId) === Number(pin.id);
              return (
                <div
                  key={pin.id}
                  className={`absolute -translate-x-1/2 -translate-y-full ${isActive ? "z-30 flex flex-col items-center" : "z-20 cursor-pointer"}`}
                  style={{ top: pin.top, left: pin.left }}
                  onClick={() => setSelectedPinId(Number(pin.id))}
                >
                  {isActive && (
                    <div className="w-72 bg-[#ffffff] rounded-lg border border-[#c1c6d7] shadow-xl overflow-hidden mb-2">
                      <div className="relative h-28 w-full bg-[#e0e8ff]">
                        <Image
                          alt={displayValue(previewData.title, "Pin Preview")}
                          className="object-cover"
                          src={String(
                            displayValue(
                              previewData.imageUrl,
                              placeholderActivePinPreview.imageUrl,
                            ),
                          )}
                          fill
                          sizes="288px"
                          unoptimized
                        />
                        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-[#0057c2] text-[#ffffff] text-[11px] leading-[14px] font-bold">
                          {displayValue(
                            previewData.pinNumber,
                            "Pin #1 • Selected",
                          )}
                        </div>
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#141b2c]/85 text-[#ffffff] text-[16px] leading-[24px] font-bold">
                          {displayValue(previewData.price, "$1,480,000")}
                        </div>
                      </div>
                      <div className="p-2.5">
                        <p className="text-[12px] leading-[16px] font-bold text-[#141b2c] truncate">
                          {displayValue(
                            previewData.title,
                            "301 Main St #18B • South Beach",
                          )}
                        </p>
                        <p className="text-[12px] leading-[18px] text-[#525c70]">
                          {displayValue(
                            previewData.specs,
                            "3 Beds • 2.5 Baths • 1,320 sqft",
                          )}
                        </p>
                        <div className="mt-2 pt-2 border-t border-[#c1c6d7] flex items-center justify-between">
                          <span className="text-[#006a69] text-[11px] leading-[14px] font-bold flex items-center gap-1">
                            <Signpost /> Walk{" "}
                            {displayValue(previewData.walkScore, "98")}
                          </span>
                          <a
                            className="text-[#0057c2] text-[11px] leading-[14px] font-bold hover:underline flex items-center gap-0.5"
                            href="#"
                          >
                            View Details <ArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {isActive ? (
                    <div className="relative px-3 py-1 rounded-full bg-[#0057c2] text-[#ffffff] border-2 border-[#ffffff] text-[16px] leading-[24px] font-bold shadow-lg flex items-center gap-1 cursor-pointer">
                      <span className="w-2 h-2 rounded-full bg-[#7df5f4] animate-ping" />
                      <span>{displayValue(pin.label)}</span>
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0057c2] rotate-45 border-r-2 border-b-2 border-[#ffffff]" />
                    </div>
                  ) : (
                    <div className="px-2.5 py-1 rounded-full bg-[#ffffff] hover:bg-[#141b2c] text-[#141b2c] hover:text-[#ffffff] border border-[#c1c6d7] shadow-md text-[12px] leading-[16px] font-bold transition-all flex items-center gap-1">
                      <span>{displayValue(pin.label)}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="absolute top-4 left-4 z-30">
            <label className="px-3 py-1.5 rounded-lg bg-[#ffffff] border border-[#c1c6d7] shadow-md flex items-center gap-2 cursor-pointer text-[#141b2c] text-[12px] leading-[16px] font-semibold">
              <input
                className="rounded border-[#c1c6d7] text-[#0057c2] h-4 w-4"
                type="checkbox"
                checked={showTransitOnly}
                onChange={(event) => setShowTransitOnly(event.target.checked)}
              />
              <span>Transit-focused homes</span>
            </label>
          </div>

          <div className="absolute bottom-6 right-4 z-30 flex flex-col gap-2">
            <button
              className="w-9 h-9 rounded-lg bg-[#ffffff] border border-[#c1c6d7] shadow-md flex items-center justify-center text-[#141b2c] hover:bg-[#f1f3ff] transition-colors"
              title="Locate Current Position"
            >
              <MapPinned />
            </button>
            <div className="bg-[#ffffff] border border-[#c1c6d7] rounded-lg shadow-md flex flex-col overflow-hidden">
              <button
                className="w-9 h-9 flex items-center justify-center text-[#141b2c] hover:bg-[#f1f3ff] transition-colors border-b border-[#c1c6d7]/60"
                title="Zoom In"
              >
                <CirclePlus />
              </button>
              <button
                className="w-9 h-9 flex items-center justify-center text-[#141b2c] hover:bg-[#f1f3ff] transition-colors"
                title="Zoom Out"
              >
                <SquareX />
              </button>
            </div>
          </div>
        </section>
      </main>

      {submarkets.length > 0 && (
        <section className="w-full bg-[#ffffff] border-t border-[#c1c6d7] px-4 md:px-6 py-3 shrink-0">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[12px] leading-[16px] font-bold text-[#141b2c] uppercase tracking-wider flex items-center gap-1.5">
                <span className="text-[16px] text-[#006a69]">◉</span>
                <span>Submarket Intelligence:</span>
              </span>
            </div>
            <div className="flex items-center gap-4 divide-x divide-[#c1c6d7]/60 text-[12px] leading-[18px] shrink-0">
              {submarkets.map((sm, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 pl-3 first:pl-0"
                >
                  <span className="font-semibold text-[#141b2c]">
                    {displayValue(sm.name)}
                  </span>
                  <span className="text-[#525c70]">
                    Median:{" "}
                    <strong className="text-[#141b2c] font-semibold">
                      {displayValue(sm.median)}
                    </strong>
                  </span>
                  <span className="text-[#006a69] font-semibold">
                    {displayValue(sm.count)}
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-[#e9edff] text-[#141b2c] text-[11px] leading-[14px] font-bold">
                    {displayValue(sm.walk)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="w-full py-8 px-6 md:px-12 flex flex-col gap-4 border-t border-[#c1c6d7] bg-[#ffffff] shrink-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[16px] leading-[24px] font-bold text-[#141b2c]">
              {displayValue(data.companyName, "Map Living")}
            </span>
            <span className="text-[#c1c6d7]">|</span>
            <div className="flex items-center gap-1.5 text-[#525c70] text-[12px] leading-[18px]">
              <span className="text-[16px]">◎</span>
              <span>Equal Housing Opportunity</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              className="text-[#525c70] hover:text-[#0057c2] text-[12px] leading-[18px] transition-colors duration-150"
              href="#"
            >
              Explore Markets
            </a>
            <a
              className="text-[#525c70] hover:text-[#0057c2] text-[12px] leading-[18px] transition-colors duration-150"
              href="#"
            >
              Neighborhood Index
            </a>
            <a
              className="text-[#525c70] hover:text-[#0057c2] text-[12px] leading-[18px] transition-colors duration-150"
              href="#"
            >
              Price Trends
            </a>
            <a
              className="text-[#525c70] hover:text-[#0057c2] text-[12px] leading-[18px] transition-colors duration-150"
              href="#"
            >
              Transit Scores
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-[#c1c6d7]/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] leading-[18px] text-[#525c70]">
            {displayValue(
              data.copyrightStatement,
              "© 2025 Map Living Real Estate Technologies Inc. Equal Housing Opportunity. Map data © OpenStreetMap contributors.",
            )}
          </p>
          <p className="text-[11px] leading-[14px] font-bold text-[#525c70]">
            {displayValue(
              data.mlsFeedVersion,
              "San Francisco MLS Real-time Geospatial Feed v4.8",
            )}
          </p>
        </div>
      </footer>
    </div>
  );
}
