"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  ArrowRight,
  Bell,
  BellRing,
  BookmarkPlus,
  CalendarCheck2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Coffee,
  Compass,
  Dumbbell,
  Footprints,
  Heart,
  House,
  HousePlus,
  LaptopMinimalCheck,
  Layers3,
  LayoutGrid,
  Leaf,
  List,
  LocateFixed,
  Mail,
  Map,
  MapPinned,
  MessageSquare,
  Minus,
  ParkingCircle,
  PawPrint,
  Phone,
  Plus,
  Search,
  Share2,
  SlidersHorizontal,
  Trash2,
  Trees,
  WalletCards,
  WashingMachine,
  X,
  Zap,
} from "lucide-react";

type RealEstate05Props = {
  resolvedData?: Record<string, unknown>;
};

function displayValue(
  value: unknown,
  fallback = "Waiting for resolved data",
): string {
  if (value === undefined || value === null || value === "") return fallback;
  return Array.isArray(value) ? value.join(", ") : String(value);
}

function formatPrice(price: unknown, currency = "$", period = "month"): string {
  if (price === undefined || price === null || price === "") return "";
  const num = typeof price === "number" ? price : parseFloat(String(price));
  if (isNaN(num)) return String(price);
  return `${currency}${num.toLocaleString("en-US")} / ${period}`;
}

const placeholderProperties = [
  {
    id: "prop-1",
    title: "The Sunlit Terrace at Green Lake",
    propertyType: "Courtyard Flat",
    neighborhood: "Green Lake",
    address: "6824 East Green Lake Way N, Seattle, WA 98115",
    price: 2650,
    currency: "$",
    period: "month",
    availabilityDate: "Ready Oct 1",
    leaseTerm: "12 Mo Lease",
    statusBadge: "Available Now",
    bedrooms: 2,
    bedroomsDetail: "Private layout",
    bathrooms: 2.0,
    bathroomsDetail: "Soaking tub",
    area: 1050,
    areaUnit: "Sq Ft",
    walkScore: 94,
    amenitiesTags: [
      { label: "Dogs & Cats OK", icon: "pets" },
      { label: "In-Unit W/D", icon: "local_laundry_service" },
      { label: "Private Deck", icon: "deck" },
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAM3tdvjxsLm80iq_pQhTOl6ChLMGTmqqV-73lrbxm7Lz89SAlPzeDTyJ1VuARgvJujGdnwTUZWfW8BuelQzgqN7zuJS1sCXIifks6TQrjJF1gqc284VValqtQcxR-mfkM7r4uO_3m0RAXzkt8wvjNDeriaujZ83GToi4CL2ILL0WJcZpIIfvSXrkn-WFcwrz17G81hf4iHl3X2zRPuCPrAU4lycQ-I2RFmJ5pK3_LU8Emoyd3CT9Dd",
  },
  {
    id: "prop-2",
    title: "The Ballard Garden Townhome",
    propertyType: "Modern Townhouse",
    neighborhood: "Ballard",
    address: "2218 NW 62nd St, Seattle, WA 98107",
    price: 3450,
    currency: "$",
    period: "month",
    availabilityDate: "Immediate",
    leaseTerm: "Flexible Term",
    statusBadge: "Lease Pending",
    bedrooms: 3,
    bedroomsDetail: "3 Levels",
    bathrooms: 2.5,
    bathroomsDetail: "Powder room",
    area: 1480,
    areaUnit: "Sq Ft",
    walkScore: 89,
    amenitiesTags: [
      { label: "Garage Pkg", icon: "local_parking" },
      { label: "Resident Garden", icon: "yard" },
      { label: "EV Ready", icon: "bolt" },
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5kYyUmzkPzlTcTMpSxSXTbTO9pXj7RMMwbcdxsndz-heYGKFyEfTpNpl6qLX-1e_GkGGa6pQLOCo3fncRIlan1nwV6fYqOu14o6k7C1QT_VP5Wfkb1yD4PGt-z6dPKYjoJEmwTY_HBvKgbq2pkbdNQT37mf24UYvurWNyrkMif8JPmmvShOxgWKLF-Cny1Og2hKFbiuY89z_WznmDj1mpAC838yL0tpAwm0IghIi4vIYhP6RadfDR",
  },
  {
    id: "prop-3",
    title: "The Fremont Canal Studio Loft",
    propertyType: "Canal Loft",
    neighborhood: "Fremont",
    address: "3400 Phinney Ave N, Seattle, WA 98103",
    price: 2950,
    currency: "$",
    period: "month",
    availabilityDate: "Ready Nov 1",
    leaseTerm: "12 Mo Lease",
    statusBadge: "Available Now",
    bedrooms: "1 Bed + Den",
    bedroomsDetail: "Work lounge",
    bathrooms: 1.5,
    bathroomsDetail: "Walk-in glass",
    area: 920,
    areaUnit: "Sq Ft",
    walkScore: 96,
    amenitiesTags: [
      { label: "Coworking", icon: "laptop_chromebook" },
      { label: "Wellness Gym", icon: "fitness_center" },
      { label: "Pet Spa", icon: "pets" },
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0CUuUS0hsWJ107N0tTT-DghI6TSI-hw-DfKu1H8jaEzn95jpY2fnXVjuXCOcGGRLaNg4Wf_NPuLMnLRyvpb0RVhTLNJUf7sxSH2PcqTMkSo61lYcXWzwNfTzGGdJCnAKUqoQu_--PW7TaN2YIuDYUZgNW9akhwv2Hb0gjUFemgaLGGMP0-ijPU_fL01UHuNAQpNmolT1c18E46m7C5JkJWn8xiU5bNAiJI2GQBE7i3ogRIZmeaWI9",
  },
];

const placeholderAmenities = [
  {
    icon: "pets",
    title: "Dog Run & Warm Pet Spa",
    description:
      "Dedicated warm-water wash stations, slip-resistant paw grooming benches, and enclosed fenced courtyard turf for evening play.",
    filterCountText: "Filter 18 homes",
  },
  {
    icon: "yard",
    title: "Courtyard & Herb Garden",
    description:
      "Native evergreen plantings, communal rosemary and basil planters, and sheltered outdoor seating with gas fire tables for cool evenings.",
    filterCountText: "Filter 12 homes",
  },
  {
    icon: "local_laundry_service",
    title: "Full-Size In-Unit Laundry",
    description:
      "Whisper-quiet Energy Star appliances tucked behind acoustic slatted doors, accompanied by overhead shelving and linen storage.",
    filterCountText: "Filter 24 homes",
  },
  {
    icon: "bolt",
    title: "Dedicated EV Charging",
    description:
      "Level 2 garage chargers assigned directly to your numbered resident stall with mobile app usage monitoring and automated billing.",
    filterCountText: "Filter 15 homes",
  },
];

const placeholderNeighborhoods = [
  {
    name: "Green Lake",
    subRegion: "North Seattle",
    description:
      "Lakeside trails, morning swim access, and quiet neighborhood bakeries.",
    walkScore: "94 / 100",
    diningSpotsCount: "32 Spots",
    avgRent: "$2,750/mo",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTVoScZEhl4rt4V6q6Iu366bkVvDRxnD4Zh9OOKQwKH6plX2lq0WXWPt_WjrKQ7uz4QT5AdO49oni_xGCu5nkcWacopi2Q0ylZdtknyTUv9vM1I0mLTIC64sC__Y3AChTXfk2mBbZsFMJjq91RRxWQl0Jama3OOKdrnSvSyi1Bev1rDSUkrvyRji6_TvxjnsHmxme47ax917fn8my1saHhGVaq3EDFkR2zEiY5mLRiGUChaiwHlZ3",
  },
  {
    name: "Ballard",
    subRegion: "Maritime Northwest",
    description:
      "Nordic roots, bustling Sunday farmers market, and craft microbreweries.",
    walkScore: "89 / 100",
    diningSpotsCount: "54 Spots",
    avgRent: "$3,100/mo",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3gjmQ6sMayPKiG7mscmP2oPyrN_XUE0hXjuAdKV_masFv9w_sFL8N3LtfqM91Ml_y9dSfZxPeDM-mWhkFrhpA5C32pVP_mTUBwDG-BqQRO0-ywk15oveeT0pqntw0DekI27EfyzCUuyWx90RJ6Y9mGdx8NqTJtSbeDMMQMC1VTzqcvoskPY1R0mzeEAZJtEkHz8eFt9eVReJ-godV8Uatvl1rAaFCxxqm6RVbQCwJhzPPgEPhIVZc",
  },
  {
    name: "Fremont",
    subRegion: "Canal Center",
    description:
      "Artistic soul of Seattle with canal bike commutes and eclectic eateries.",
    walkScore: "96 / 100",
    diningSpotsCount: "48 Spots",
    avgRent: "$2,850/mo",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSIODTtRP0MwaYqe1W5pYcJqWwP8uXVi-93OctblTBXy8LyrVY4AlwIFyLTBA9B76kEAkD0cN5FEIhr0HcASwtRxFgkQKijjYWHX6n_9bgyJK65lRtOrfmVWzQsX29FfnmksrC8EaMQlwuVehHIwi9E4F-hJAVzWff_5naXffOkc7Pcv5AZs_yVdC5tur8OWxlPf_bQ18UoSnlSwNoazIhlFxjhK7aCIq_OsYMKeAVljzCTdByL3Q1",
  },
  {
    name: "Queen Anne",
    subRegion: "Upper Hillside",
    description:
      "Hillside panoramic vistas, Kerry Park sunsets, and calm residential streets.",
    walkScore: "91 / 100",
    diningSpotsCount: "40 Spots",
    avgRent: "$3,400/mo",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRaKWdEn1t9uZ7qV-ZLbKmVGod6hkeyeAml1fiEsYTmVnvo6pRif2W9u126oxkRbaPp3eUPSCy1VDLCFzf6OdFPOEZJmEDcIlVsNjh28Zupn2i7lRKjeGuIOPPeJLpnATjDg24HfICwG6s2eAfTDXo684vPxwyfJKPS1l3R4Zr7kZ6p7pM1niFk7HIh7GS-saQOIuD8Zt3rBumVpBnNn7cO3rhCLTnyIIpyuPqXnX7zHEyxzX_eVNb",
  },
];

const placeholderMapPins = [
  {
    label: "$2,650/mo",
    top: "28%",
    left: "45%",
    title: "The Sunlit Terrace",
    category: "Green Lake Flat",
    specs: "2 Beds • 2 Baths • 1,050 sq ft",
    isAvailable: true,
  },
  {
    label: "$3,450/mo",
    top: "42%",
    left: "24%",
    title: "Ballard Garden Row",
    category: "Ballard Townhome",
    specs: "3 Beds • 2.5 Baths • Yard",
    isAvailable: false,
  },
  {
    label: "$2,950/mo",
    top: "52%",
    left: "52%",
    title: "Canal Studio Loft",
    category: "Fremont Canal",
    specs: "1 Bed + Den • 920 sq ft",
    isAvailable: true,
  },
  {
    label: "$3,150/mo",
    top: "68%",
    left: "38%",
    title: "The Hillside Residence",
    category: "Queen Anne",
    specs: "2 Beds • Panoramic View",
    isAvailable: true,
  },
];

const placeholderSavedHomes = [
  {
    title: "The Sunlit Terrace at Green Lake",
    specs: "2 Beds • 2.0 Baths • Oct 1 Move-in",
    price: "$2,650/mo",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPg_OlWdwb3R4XvOgzIq5k4i0d2Jvjec1iWfeZbrrS_RATW2zYBgWnXH2L6BQRMacnVtvcAPP92FmZwMXAfi2nAmUs1XgEfYijYItFQ52bGNbiHKRFjXBbxLrfdtsUJphri50X0n6wQfOI9vTB299sOBo1ktuWnlEKQ3Bv2S3NNYBy6ymGtIURIOT6X_a4FYICPLTIcNi8d7RnYVmij8d2psi61ItS1WYs9DpX9Fst0b_poDCV1RgP",
  },
  {
    title: "The Ballard Garden Townhome",
    specs: "3 Beds • 2.5 Baths • Immediate",
    price: "$3,450/mo",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvZCGGyXCOB9gjHrpZ-suJC9_i6SzcF7wwTQxwlNM4nrJX0WrNlUJ88RiVcDRoLOCSTgNN3jgAs8R0LtrA0rRazgebnJxyMaUww2gPoedY-Aqx6Ws0DRrBl9VbautH924zMaN126HBJEghaguGbhnemZWBIvXhxnAnXx1Fgmm4MLIBC2gn9K3eKM_HnjVZyetfC5TTmBk8_3FYVpAjXSggKkJIT38QiNdLxi8CEyDEqluYd_OhThpg",
  },
  {
    title: "The Fremont Canal Studio Loft",
    specs: "1 Bed + Den • 1.5 Baths • Nov 1",
    price: "$2,950/mo",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTVAmccOxsDvRY8X8aX-ke69Z4KjGnKoRA_F29IYOIv7HnU1rjUmVK3CWMcx6Yh3ya7dka90OOedS5hsxMcCqz22tR-lTfNJNWVULi_hssoVI4tXoCBH5mEqiOWGunlCTR8nO91DwHYD-sc2p1F7wjYU6CwGD7DPKH3kUVf8EfB2eF4tCmBho2ZZghyeLnh4XAoMSpZUIsowO7tJnPRYC3MvTBLzfZqZ2WNDl0TfxP87--TtUSA_Hz",
  },
];

const placeholderData: Record<string, unknown> = {
  companyName: "Living",
  searchLocationPlaceholder: "Search Seattle, WA...",
  savedHomesCount: 3,
  heroBadge: "A more gentle approach to domestic living",
  heroTitle: "Find a place that",
  heroTitleHighlight: "feels like home.",
  heroDescription:
    "Curated residential rentals designed for calm routines, natural daylight, and walkable neighborhood connections. Thoughtful leases with zero hidden fees.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxXabchC_gLw8R1l0IEagV9GousP7I5R-bobcy8QvzStauxthvVXBOMLfRbNJ-55Q6b_yWQHmNy2sA3VyrYag40avyPxniKrWRCC90BHTKtg9J9fiWSsMRdjRdcEn_G0E0pvBFtebhRfw3fn-48h03w_Zosmc7YXCAMqQT7lIpLmRtt7shK5NRBUJh615_H_Hm8yWhRGxUkEBUqEuwzTBgo4pktvoQnzbhi6qtZ21sdr2ULfeZozs4",
  heroTickerText: "14 New Rentals this week",
  properties: placeholderProperties,
  amenities: placeholderAmenities,
  neighborhoods: placeholderNeighborhoods,
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBIFRqs848pk0oK92usq0pMnWqtUGLOt7D3tm0ocJqgcsgGRsBEVt4TZNI10R__dmazRpMnCKFr-XmXB02gH8erMeJqz6ohpskqIs1Zyj1e3fjHUDbq4t_Ib69x_8xAbTtFNCJDH2im6Mt_5rwauU2AkXfeeOdinup_qHXdvmQ0qcmx_qLUX8lytrcvyirm_G8WEtr3J8GtOYHcYj4h4pZq1S3n_UflYNkoeujXx7umEJqp3-RXrZgI",
  mapPins: placeholderMapPins,
  savedHomes: placeholderSavedHomes,
  conciergeName: "Elena Vance",
  conciergeRole: "Living Seattle Concierge & Resident Guide",
  conciergeResponseTime: "Typical response time: under 15 mins",
  conciergePhoto:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3PH_o-SY0Ri8e_YkKqdi0Xv-5dTyW9CosEFq84S0flyatjOCNSnKO4Lo5dX-RqsX2okqb6xMOJu_YgMZsJ-_LAnEZ97R9TJEgCEkyUR5puQL-jaBEAZ6LeJ_ZZfI3b2roPVhUQIDpx2da6dxovV6xN1tdapRAomI_ZwEKeLbDLv04E3v0GECP0VGCV0995Nzk6ycqGRPEJgh7w2t5ClaE54rk5aj0Yyk5xQGbbOVcP7Kk-tvm2ZCv",
};

const lucideIconMap = {
  search: Search,
  location_on: MapPinned,
  favorite: Heart,
  notifications: Bell,
  calendar_today: CalendarDays,
  calendar_month: CalendarDays,
  payments: WalletCards,
  home: House,
  cottage: HousePlus,
  check_circle: CheckCircle2,
  pets: PawPrint,
  local_laundry_service: WashingMachine,
  deck: Trees,
  local_parking: ParkingCircle,
  bolt: Zap,
  yard: Trees,
  laptop_chromebook: LaptopMinimalCheck,
  fitness_center: Dumbbell,
  explore: Compass,
  pin_drop: MapPinned,
  directions_walk: Footprints,
  local_cafe: Coffee,
  event_available: CalendarCheck2,
  tune: SlidersHorizontal,
  schedule: Clock3,
  bookmark_add: BookmarkPlus,
  delete: Trash2,
  notifications_active: BellRing,
  map: Map,
  add: Plus,
  remove: Minus,
  my_location: LocateFixed,
  chevron_right: ChevronRight,
  expand_more: ChevronDown,
  grid_view: LayoutGrid,
  view_list: List,
  home_work: HousePlus,
  eco: Leaf,
  chat: MessageSquare,
  call: Phone,
  mail: Mail,
  share: Share2,
  arrow_forward: ArrowRight,
  park: Trees,
  layers: Layers3,
  close: X,
  verified_user: CheckCircle2,
  default: Search,
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

export default function RealEstate05({ resolvedData }: RealEstate05Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const data = normalizeTemplateData(resolvedData);

  const properties = (
    Array.isArray(data.properties) && data.properties.length > 0
      ? data.properties
      : placeholderProperties
  ) as Record<string, any>[];

  const amenities = (
    Array.isArray(data.amenities) && data.amenities.length > 0
      ? data.amenities
      : placeholderAmenities
  ) as Record<string, any>[];

  const neighborhoods = (
    Array.isArray(data.neighborhoods) && data.neighborhoods.length > 0
      ? data.neighborhoods
      : placeholderNeighborhoods
  ) as Record<string, any>[];

  const mapPins = (
    Array.isArray(data.mapPins) && data.mapPins.length > 0
      ? data.mapPins
      : placeholderMapPins
  ) as Record<string, any>[];

  const savedHomes = (
    Array.isArray(data.savedHomes) && data.savedHomes.length > 0
      ? data.savedHomes
      : placeholderSavedHomes
  ) as Record<string, any>[];

  const heroImage = displayValue(
    data.heroImage,
    placeholderData.heroImage as string,
  );
  const mapImage = displayValue(
    data.mapImage,
    placeholderData.mapImage as string,
  );
  const conciergePhoto = displayValue(
    data.conciergePhoto,
    placeholderData.conciergePhoto as string,
  );

  return (
    <div className="bg-[#e8f7ee] text-[#111e19] antialiased selection:bg-[#ffdbc9] selection:text-[#331200] font-['Plus_Jakarta_Sans',sans-serif] text-[15px] leading-[24px]">
      <style>{``}</style>

      {/* ==================== 1. TopNavBar ==================== */}
      <header className="sticky top-0 z-50 w-full bg-[#ffffff] shadow-sm">
        <div className="flex justify-between items-center w-full px-6 max-w-[1320px] mx-auto h-20">
          <div className="flex items-center gap-8">
            <a
              className="text-[24px] leading-[32px] font-bold text-[#8d4e26] tracking-tight flex items-center gap-2"
              href="#"
            >
              <span className="w-8 h-8 rounded-xl bg-[#d98c5f] text-[#ffffff] flex items-center justify-center font-bold text-[18px] shadow-sm">
                L
              </span>
              <span>{displayValue(data.companyName, "Living")}</span>
            </a>
            <div className="hidden lg:flex items-center bg-[#e8f7ee] rounded-full px-4 py-2 border border-[#d8c2b7]/30 text-[#556159] w-64 hover:border-[#d98c5f] transition-colors duration-200 cursor-pointer">
              <Icon
                name="search"
                className="text-[#556159] mr-2"
                size={18}
                strokeWidth={2.2}
              />
              <span className="text-[13px] leading-[20px] text-[#556159]">
                {displayValue(
                  data.searchLocationPlaceholder,
                  "Search Seattle, WA...",
                )}
              </span>
              <span className="ml-auto text-[11px] bg-[#ffffff] text-[#556159] px-1.5 py-0.5 rounded border border-[#d8c2b7]/40 font-mono">
                ⌘K
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            <a
              className="text-[#8d4e26] font-semibold border-b-2 border-[#8d4e26] pb-1 transition-colors duration-200 text-[14px] leading-[20px]"
              href="#explore"
            >
              Explore Homes
            </a>
            <a
              className="text-[#556159] font-normal hover:text-[#111e19] transition-colors duration-200 text-[14px] leading-[20px]"
              href="#rent-filters"
            >
              Rent
            </a>
            <a
              className="text-[#556159] font-normal hover:text-[#111e19] transition-colors duration-200 text-[14px] leading-[20px]"
              href="#neighborhoods"
            >
              Neighborhoods
            </a>
            <a
              className="text-[#556159] font-normal hover:text-[#111e19] transition-colors duration-200 text-[14px] leading-[20px]"
              href="#amenities"
            >
              Amenities
            </a>
            <a
              className="text-[#556159] font-normal hover:text-[#111e19] transition-colors duration-200 text-[14px] leading-[20px] flex items-center gap-1.5"
              href="#saved-homes"
            >
              <span>Saved Homes</span>
              <span className="px-1.5 py-0.2 bg-[#ffdbc9] text-[#8d4e26] font-bold rounded-full text-[11px] leading-tight">
                {displayValue(data.savedHomesCount, String(savedHomes.length))}
              </span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Favorite homes drawer"
              className="p-2 rounded-full text-[#556159] hover:text-[#8d4e26] hover:bg-[#e2f1e8] transition-colors duration-200 relative"
              onClick={() => setModalOpen(true)}
              type="button"
            >
              <Icon
                name="favorite"
                className="text-current"
                size={18}
                strokeWidth={2.2}
              />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#d98c5f]" />
            </button>
            <button
              aria-label="Notifications"
              className="p-2 rounded-full text-[#556159] hover:text-[#8d4e26] hover:bg-[#e2f1e8] transition-colors duration-200"
              type="button"
            >
              <Icon
                name="notifications"
                className="text-current"
                size={18}
                strokeWidth={2.2}
              />
            </button>
            <a
              className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg border border-[#d8c2b7]/40 text-[#556159] hover:text-[#111e19] hover:bg-[#e2f1e8] text-[14px] leading-[20px] font-semibold transition-all duration-200 active:scale-95"
              href="#contact-viewing"
            >
              Contact
            </a>
            <a
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#d98c5f] text-[#ffffff] text-[14px] leading-[20px] font-semibold shadow-ambient-rest hover:bg-[#8d4e26] transition-all duration-200 active:scale-95"
              href="#contact-viewing"
            >
              <Icon
                name="calendar_today"
                className="text-[#ffffff]"
                size={18}
                strokeWidth={2.2}
              />
              <span>Book Viewing</span>
            </a>
            <div className="relative ml-1 pl-2 border-l border-[#d8c2b7]/30 flex items-center">
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#e2f1e8] shadow-sm cursor-pointer">
                <Image
                  alt="Resident member profile avatar"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu4cew0d_zLAJE-QJwV_oxBoHIwnSAKWigze2sgdoSMPXxAomGKlAh3m0bOe2EO_7y1BlMUxozg_B8PodO0Ltegz_aOEky88ySECYUhmcWKObL5fTpjJvJXBUUo74A3MVpvVfEy2heRfKhQnHPlEibrYTenjZQviZoiKrP_wakl0qlxT1DZOYZpv0d_XcjQnT2laU-7vYJMPkBC-s2OmFj6ZrOFUNY1c2YyAf0qTQM6m7ax0eYISb6"
                  fill
                  sizes="36px"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== 2. Friendly Hero Section ==================== */}
      <section className="relative pt-12 pb-16 px-6 overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#e8f7ee]">
        <div className="max-w-[1320px] mx-auto">
          {Boolean(data.heroBadge) && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8e6db]/60 text-[#121e18] text-[12px] leading-[16px] font-semibold mb-5 border border-[#d8c2b7]/20">
              <Icon
                name="cottage"
                className="text-[#8d4e26]"
                size={16}
                strokeWidth={2.2}
              />
              <span>{displayValue(data.heroBadge)}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-[32px] sm:text-[48px] leading-[40px] sm:leading-[56px] font-bold text-[#111e19] tracking-[-0.02em] mb-4">
                {displayValue(data.heroTitle, "Find a place that")}{" "}
                <span className="text-[#8d4e26] relative inline-block underline decoration-[#d98c5f] decoration-wavy decoration-2">
                  {displayValue(data.heroTitleHighlight, "feels like home.")}
                </span>
              </h1>
              <p className="text-[18px] leading-[28px] text-[#556159] mb-8">
                {displayValue(
                  data.heroDescription,
                  "Curated residential rentals designed for calm routines, natural daylight, and walkable neighborhood connections. Thoughtful leases with zero hidden fees.",
                )}
              </p>

              <div className="bg-[#ffffff] p-3 rounded-2xl shadow-ambient-elevated border border-[#d8c2b7]/30 max-w-2xl">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <button
                    className="px-4 py-1.5 rounded-full bg-[#26332d] text-[#ffffff] text-[12px] leading-[16px] font-semibold transition-all"
                    type="button"
                  >
                    Rent a Home
                  </button>
                  <button
                    className="px-4 py-1.5 rounded-full text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px] font-medium transition-colors"
                    type="button"
                  >
                    Flexible Stay
                  </button>
                  <button
                    className="px-4 py-1.5 rounded-full text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px] font-medium transition-colors"
                    type="button"
                  >
                    Purchase
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 bg-[#e8f7ee] p-2 rounded-xl border border-[#d8c2b7]/20">
                  <div className="px-3 py-2 bg-[#ffffff] rounded-lg">
                    <label
                      className="block text-[11px] font-bold text-[#556159] uppercase tracking-wider"
                      htmlFor="main-search-input"
                    >
                      Location
                    </label>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Icon
                        name="location_on"
                        className="text-[#8d4e26]"
                        size={18}
                        strokeWidth={2.2}
                      />
                      <input
                        className="w-full bg-transparent border-0 p-0 text-[16px] leading-[22px] font-semibold text-[#111e19] focus:ring-0 placeholder-[#556159]/50"
                        defaultValue="Seattle, WA"
                        id="main-search-input"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="px-3 py-2 bg-[#ffffff] rounded-lg">
                    <label className="block text-[11px] font-bold text-[#556159] uppercase tracking-wider">
                      Monthly Budget
                    </label>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Icon
                        name="payments"
                        className="text-[#8d4e26]"
                        size={18}
                        strokeWidth={2.2}
                      />
                      <select
                        className="w-full bg-transparent border-0 p-0 text-[16px] leading-[22px] font-semibold text-[#111e19] focus:ring-0 cursor-pointer"
                        defaultValue="$2,400 – $3,600"
                      >
                        <option>$1,800 – $2,800</option>
                        <option>$2,400 – $3,600</option>
                        <option>$3,600 – $5,000</option>
                        <option>$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="px-3 py-2 bg-[#ffffff] rounded-lg">
                    <label className="block text-[11px] font-bold text-[#556159] uppercase tracking-wider">
                      Dwelling
                    </label>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Icon
                        name="home"
                        className="text-[#8d4e26]"
                        size={18}
                        strokeWidth={2.2}
                      />
                      <select
                        className="w-full bg-transparent border-0 p-0 text-[16px] leading-[22px] font-semibold text-[#111e19] focus:ring-0 cursor-pointer"
                        defaultValue="Townhouse & Flat"
                      >
                        <option>All Types</option>
                        <option>Townhouse &amp; Flat</option>
                        <option>Garden Apartment</option>
                        <option>Courtyard Loft</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-3 py-2 bg-[#ffffff] rounded-lg">
                      <label className="block text-[11px] font-bold text-[#556159] uppercase tracking-wider">
                        Beds
                      </label>
                      <select
                        className="w-full bg-transparent border-0 p-0 text-[16px] leading-[22px] font-semibold text-[#111e19] focus:ring-0 cursor-pointer"
                        defaultValue="2+ Beds"
                      >
                        <option>Studio</option>
                        <option>1+ Bed</option>
                        <option>2+ Beds</option>
                        <option>3+ Beds</option>
                      </select>
                    </div>
                    <button
                      className="h-full px-5 rounded-lg bg-[#d98c5f] hover:bg-[#8d4e26] text-[#ffffff] flex items-center justify-center transition-all duration-200 shadow-ambient-rest active:scale-95"
                      type="button"
                    >
                      <Icon
                        name="search"
                        className="text-[#ffffff]"
                        size={22}
                        strokeWidth={2.2}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-3 px-1 pt-1">
                  <span className="text-[13px] leading-[20px] text-[#556159] mr-1">
                    Popular:
                  </span>
                  <button
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] leading-[16px] font-semibold bg-[#e2f1e8] text-[#121e18] hover:bg-[#d7e6dd] transition-colors"
                    type="button"
                  >
                    <Icon
                      name="pets"
                      className="text-[#8d4e26]"
                      size={14}
                      strokeWidth={2.2}
                    />{" "}
                    Dogs Welcome
                  </button>
                  <button
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] leading-[16px] font-semibold bg-[#e2f1e8] text-[#121e18] hover:bg-[#d7e6dd] transition-colors"
                    type="button"
                  >
                    <Icon
                      name="local_laundry_service"
                      className="text-[#8d4e26]"
                      size={14}
                      strokeWidth={2.2}
                    />{" "}
                    In-Unit Laundry
                  </button>
                  <button
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] leading-[16px] font-semibold bg-[#e2f1e8] text-[#121e18] hover:bg-[#d7e6dd] transition-colors"
                    type="button"
                  >
                    <Icon
                      name="deck"
                      className="text-[#8d4e26]"
                      size={14}
                      strokeWidth={2.2}
                    />{" "}
                    Private Balcony
                  </button>
                  <button
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] leading-[16px] font-semibold bg-[#e2f1e8] text-[#121e18] hover:bg-[#d7e6dd] transition-colors"
                    type="button"
                  >
                    <Icon
                      name="bolt"
                      className="text-[#8d4e26]"
                      size={14}
                      strokeWidth={2.2}
                    />{" "}
                    EV Charging
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-ambient-elevated border-4 border-[#ffffff] bg-[#e2f1e8] relative h-[420px]">
                  <Image
                    alt="Sunlit living room with balcony and warm oak details"
                    className="object-cover"
                    src={heroImage}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    unoptimized
                  />
                </div>

                <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#ffffff] p-4 rounded-2xl shadow-ambient-floating border border-[#d8c2b7]/20 flex items-center gap-3.5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#e2f1e8] flex items-center justify-center text-[#8d4e26] flex-shrink-0">
                    <Icon
                      name="pets"
                      className="text-[#8d4e26]"
                      size={24}
                      strokeWidth={2.2}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[12px] leading-[16px] text-[#8d4e26] font-bold">
                      <Icon
                        name="check_circle"
                        className="text-[#8d4e26]"
                        size={15}
                        strokeWidth={2.2}
                      />
                      <span>100% Pet-Welcoming</span>
                    </div>
                    <p className="text-[13px] leading-[20px] text-[#556159]">
                      Every single listing verified with clear pet terms and
                      nearby parks.
                    </p>
                  </div>
                </div>

                {Boolean(data.heroTickerText) && (
                  <div className="absolute top-4 right-4 bg-[#ffffff]/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-ambient-rest border border-[#d8c2b7]/30 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[12px] leading-[16px] text-[#111e19] font-semibold">
                      {displayValue(data.heroTickerText)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. Search Experience & Rental Filtering ==================== */}
      <section
        className="py-8 px-6 bg-[#ffffff] border-y border-[#d8c2b7]/30"
        id="rent-filters"
      >
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="relative">
                <button
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/30 text-[14px] leading-[20px] font-semibold text-[#111e19] hover:border-[#d98c5f] transition-colors"
                  type="button"
                >
                  <Icon
                    name="event_available"
                    className="text-[#8d4e26]"
                    size={18}
                    strokeWidth={2.2}
                  />
                  <span>Move-in: Immediate &amp; 30 Days</span>
                  <Icon
                    name="expand_more"
                    className="text-[#556159]"
                    size={16}
                    strokeWidth={2.2}
                  />
                </button>
              </div>

              <div className="relative">
                <button
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/30 text-[14px] leading-[20px] font-semibold text-[#111e19] hover:border-[#d98c5f] transition-colors"
                  type="button"
                >
                  <Icon
                    name="tune"
                    className="text-[#8d4e26]"
                    size={18}
                    strokeWidth={2.2}
                  />
                  <span>$1,500 – $4,500 / mo</span>
                  <Icon
                    name="expand_more"
                    className="text-[#556159]"
                    size={16}
                    strokeWidth={2.2}
                  />
                </button>
              </div>

              <div className="relative">
                <button
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/30 text-[14px] leading-[20px] font-semibold text-[#111e19] hover:border-[#d98c5f] transition-colors"
                  type="button"
                >
                  <Icon
                    name="schedule"
                    className="text-[#8d4e26]"
                    size={18}
                    strokeWidth={2.2}
                  />
                  <span>12 mo &amp; Flexible Terms</span>
                  <Icon
                    name="expand_more"
                    className="text-[#556159]"
                    size={16}
                    strokeWidth={2.2}
                  />
                </button>
              </div>

              <button
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#e2f1e8] text-[#121e18] border border-[#d8c2b7]/40 text-[14px] leading-[20px] hover:border-[#8d4e26] transition-colors font-medium"
                type="button"
              >
                <Icon
                  name="pets"
                  className="text-[#8d4e26]"
                  size={18}
                  strokeWidth={2.2}
                />
                <span>Dogs &amp; Cats OK</span>
              </button>

              <button
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#e2f1e8] text-[#121e18] border border-[#d8c2b7]/40 text-[14px] leading-[20px] hover:border-[#8d4e26] transition-colors font-medium"
                type="button"
              >
                <Icon
                  name="local_laundry_service"
                  className="text-[#8d4e26]"
                  size={18}
                  strokeWidth={2.2}
                />
                <span>In-unit W/D</span>
              </button>

              <button
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#e2f1e8] text-[#121e18] border border-[#d8c2b7]/40 text-[14px] leading-[20px] hover:border-[#8d4e26] transition-colors font-medium"
                type="button"
              >
                <Icon
                  name="local_parking"
                  className="text-[#8d4e26]"
                  size={18}
                  strokeWidth={2.2}
                />
                <span>Parking Included</span>
              </button>
            </div>

            <div className="flex items-center gap-3 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#d8c2b7]/20">
              <div className="flex items-center gap-1.5 text-[13px] leading-[20px] text-[#556159]">
                <span className="text-[#556159] whitespace-nowrap">
                  Sort by:
                </span>
                <select className="bg-[#e8f7ee] border border-[#d8c2b7]/30 rounded-lg px-2.5 py-1.5 text-[14px] leading-[20px] font-semibold text-[#111e19] focus:ring-1 focus:ring-[#8d4e26] focus:outline-none cursor-pointer">
                  <option>Availability Date (Earliest)</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Recent Additions</option>
                </select>
              </div>

              <div className="flex items-center bg-[#e8f7ee] p-1 rounded-lg border border-[#d8c2b7]/30">
                <button
                  aria-label="Grid view"
                  className="p-1.5 rounded-md bg-[#ffffff] text-[#8d4e26] shadow-sm"
                  type="button"
                >
                  <Icon
                    name="grid_view"
                    className="text-current"
                    size={18}
                    strokeWidth={2.2}
                  />
                </button>
                <button
                  aria-label="List view"
                  className="p-1.5 rounded-md text-[#556159] hover:text-[#111e19]"
                  type="button"
                >
                  <Icon
                    name="view_list"
                    className="text-current"
                    size={18}
                    strokeWidth={2.2}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#d8c2b7]/20 flex flex-wrap items-center justify-between gap-2 text-[13px] leading-[20px] text-[#556159]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#111e19]">
                {properties.length} Available Residences
              </span>
              <span className="text-[#556159]">•</span>
              <span>Filtered by Seattle area • Dog-friendly verified</span>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-[#8d4e26] hover:text-[#5a2702] text-[14px] leading-[20px] font-semibold transition-colors"
              href="#saved-homes"
            >
              <Icon
                name="bookmark_add"
                className="text-current"
                size={18}
                strokeWidth={2.2}
              />
              <span>Save this Search for Instant Alerts</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 4. Curated Residential Listings ==================== */}
      <section className="py-10 px-6" id="explore">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[12px] leading-[16px] font-bold text-[#8d4e26] uppercase tracking-wider mb-2">
                <Icon
                  name="home_work"
                  className="text-[#8d4e26]"
                  size={16}
                  strokeWidth={2.2}
                />
                <span>Curated Homes &amp; Spaces</span>
              </div>
              <h2 className="text-[36px] leading-[44px] font-semibold text-[#111e19] tracking-[-0.015em]">
                Move-in Ready Residential Rentals
              </h2>
              <p className="text-[15px] leading-[24px] text-[#556159] mt-1">
                Each home is photographed in pure daylight with documented
                natural airflow and verified leases.
              </p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              <button
                className="px-3.5 py-1.5 rounded-full bg-[#d98c5f] text-[#ffffff] text-[12px] leading-[16px] font-semibold whitespace-nowrap"
                type="button"
              >
                All Rentals
              </button>
              <button
                className="px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#d8c2b7]/40 text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px] font-medium whitespace-nowrap"
                type="button"
              >
                Courtyard Flats
              </button>
              <button
                className="px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#d8c2b7]/40 text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px] font-medium whitespace-nowrap"
                type="button"
              >
                Townhomes
              </button>
              <button
                className="px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#d8c2b7]/40 text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px] font-medium whitespace-nowrap"
                type="button"
              >
                Garden Lofts
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, idx) => {
              const imageSrc =
                displayValue(property.imageUrl) ||
                (Array.isArray(property.images) && property.images[0]) ||
                placeholderProperties[0].imageUrl;

              const priceFormatted = formatPrice(
                property.price,
                displayValue(property.currency, "$"),
                displayValue(property.period, "month"),
              );

              return (
                <article
                  key={property.id || idx}
                  className="bg-[#ffffff] rounded-2xl overflow-hidden border border-[#d8c2b7]/30 shadow-ambient-rest hover:shadow-ambient-elevated transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e2f1e8]">
                    <Image
                      alt={displayValue(property.title, "Rental Residence")}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      src={String(imageSrc)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      {Boolean(property.statusBadge) && (
                        <span className="px-2.5 py-1 rounded-full bg-[#ffffff]/95 backdrop-blur text-emerald-800 text-[12px] leading-[16px] font-bold shadow-sm flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />{" "}
                          {displayValue(property.statusBadge)}
                        </span>
                      )}
                      {Boolean(property.leaseTerm) && (
                        <span className="px-2.5 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur text-[#556159] text-[12px] leading-[16px] font-semibold">
                          {displayValue(property.leaseTerm)}
                        </span>
                      )}
                    </div>
                    <button
                      aria-label="Save to favorites"
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#ffffff] text-[#8d4e26] flex items-center justify-center shadow-ambient-rest hover:scale-110 active:scale-95 transition-all"
                      type="button"
                    >
                      <Icon
                        name="favorite"
                        className="text-current"
                        size={20}
                        strokeWidth={2.2}
                      />
                    </button>
                    {Boolean(priceFormatted) && (
                      <div className="absolute bottom-3 left-3.5 px-3 py-1.5 rounded-xl bg-[#26332d]/90 backdrop-blur-sm text-[#ffffff]">
                        <span className="text-[28px] leading-[34px] font-bold tracking-[-0.02em] text-[#ffffff]">
                          {displayValue(property.currency, "$")}
                          {typeof property.price === "number"
                            ? property.price.toLocaleString("en-US")
                            : displayValue(property.price)}
                        </span>
                        <span className="text-[13px] leading-[20px] text-[#dee4dd]">
                          {" "}
                          / {displayValue(property.period, "month")}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[13px] leading-[20px] text-[#556159] mb-1">
                        <span>
                          {displayValue(property.propertyType || "Residential")}{" "}
                          • {displayValue(property.neighborhood || "Seattle")}
                        </span>
                        {Boolean(property.availabilityDate) && (
                          <span className="text-[#8d4e26] font-semibold">
                            {displayValue(property.availabilityDate)}
                          </span>
                        )}
                      </div>
                      <h3 className="text-[18px] leading-[24px] font-semibold text-[#111e19] group-hover:text-[#8d4e26] transition-colors">
                        {displayValue(property.title)}
                      </h3>
                      <p className="text-[13px] leading-[20px] text-[#556159] mt-1">
                        {displayValue(property.address || property.location)}
                      </p>

                      <div className="grid grid-cols-3 gap-2 my-4 py-2.5 px-3 bg-[#e8f7ee] rounded-xl border border-[#d8c2b7]/20 text-center">
                        <div>
                          <div className="text-[16px] leading-[22px] font-semibold text-[#111e19]">
                            {property.bedrooms !== undefined
                              ? `${property.bedrooms} Beds`
                              : "—"}
                          </div>
                          <div className="text-[11px] text-[#556159]">
                            {displayValue(
                              property.bedroomsDetail,
                              "Private layout",
                            )}
                          </div>
                        </div>
                        <div className="border-x border-[#d8c2b7]/30">
                          <div className="text-[16px] leading-[22px] font-semibold text-[#111e19]">
                            {property.bathrooms !== undefined
                              ? `${property.bathrooms} Baths`
                              : "—"}
                          </div>
                          <div className="text-[11px] text-[#556159]">
                            {displayValue(
                              property.bathroomsDetail,
                              "Full bath",
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-[16px] leading-[22px] font-semibold text-[#111e19]">
                            {property.area !== undefined ? property.area : "—"}
                          </div>
                          <div className="text-[11px] text-[#556159]">
                            {displayValue(property.areaUnit, "Sq Ft")}
                          </div>
                        </div>
                      </div>

                      {Array.isArray(property.amenitiesTags) &&
                        property.amenitiesTags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {property.amenitiesTags.map(
                              (tag: any, tIdx: number) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-1 rounded-md bg-[#d8e6db]/50 text-[#5b675f] text-[12px] font-medium flex items-center gap-1"
                                >
                                  {tag.icon && (
                                    <Icon
                                      name={displayValue(tag.icon, "home")}
                                      className="text-[#8d4e26]"
                                      size={14}
                                      strokeWidth={2.2}
                                    />
                                  )}
                                  {displayValue(tag.label || tag)}
                                </span>
                              ),
                            )}
                          </div>
                        )}
                    </div>

                    <div className="pt-3 border-t border-[#d8c2b7]/20 flex items-center justify-between">
                      {property.walkScore !== undefined && (
                        <span className="text-[13px] leading-[20px] text-[#556159] flex items-center gap-1">
                          <Icon
                            name="directions_walk"
                            className="text-emerald-600"
                            size={16}
                            strokeWidth={2.2}
                          />{" "}
                          Walk Score {property.walkScore}
                        </span>
                      )}
                      <a
                        className="inline-flex items-center gap-1 text-[#8d4e26] hover:text-[#5a2702] text-[14px] leading-[20px] font-semibold transition-colors ml-auto"
                        href="#contact-viewing"
                      >
                        <span>Book Viewing</span>
                        <Icon
                          name="arrow_forward"
                          className="text-current"
                          size={16}
                          strokeWidth={2.2}
                        />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffffff] border border-[#d8c2b7]/40 text-[#111e19] hover:border-[#8d4e26] text-[14px] leading-[20px] font-semibold shadow-ambient-rest hover:shadow-ambient-elevated transition-all"
              href="#map-experience"
            >
              <span>
                Explore All {properties.length} Seattle Listings on Interactive
                Map
              </span>
              <Icon
                name="map"
                className="text-[#8d4e26]"
                size={18}
                strokeWidth={2.2}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 5. Dynamic Amenities & Lifestyle Showcase ==================== */}
      {amenities.length > 0 && (
        <section className="py-10 px-6 bg-[#ffffff]" id="amenities">
          <div className="max-w-[1320px] mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-1.5 text-[12px] leading-[16px] font-bold text-[#8d4e26] uppercase tracking-wider mb-2">
                <Icon
                  name="eco"
                  className="text-[#8d4e26]"
                  size={16}
                  strokeWidth={2.2}
                />
                <span>Domestic Tranquility</span>
              </div>
              <h2 className="text-[36px] leading-[44px] font-semibold text-[#111e19] tracking-[-0.015em]">
                Designed around everyday rituals.
              </h2>
              <p className="text-[15px] leading-[24px] text-[#556159] mt-2">
                Every building in the Living residential collective is
                hand-vetted for noise attenuation, organic daylight ingress, and
                shared spaces that actually enrich your weekend routine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((item, aIdx) => (
                <div
                  key={aIdx}
                  className="bg-[#e8f7ee] p-6 rounded-2xl border border-[#d8c2b7]/20 flex flex-col justify-between group hover:border-[#d98c5f] transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#ffffff] flex items-center justify-center text-[#8d4e26] mb-5 shadow-sm group-hover:bg-[#d98c5f] group-hover:text-[#ffffff] transition-colors">
                      <Icon
                        name={displayValue(item.icon, "eco")}
                        className="text-current"
                        size={26}
                        strokeWidth={2.2}
                      />
                    </div>
                    <h3 className="text-[18px] leading-[24px] font-semibold text-[#111e19] mb-2">
                      {displayValue(item.title)}
                    </h3>
                    <p className="text-[13px] leading-[20px] text-[#556159] leading-relaxed">
                      {displayValue(item.description)}
                    </p>
                  </div>
                  {Boolean(item.filterCountText) && (
                    <div className="mt-6 pt-4 border-t border-[#d8c2b7]/20 flex items-center justify-between text-[13px] leading-[20px] text-[#8d4e26] font-semibold">
                      <span>{displayValue(item.filterCountText)}</span>
                      <Icon
                        name="chevron_right"
                        className="text-current"
                        size={18}
                        strokeWidth={2.2}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== 6. Neighborhood & Lifestyle Explorer ==================== */}
      {neighborhoods.length > 0 && (
        <section className="py-10 px-6 bg-[#e8f7ee]" id="neighborhoods">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[12px] leading-[16px] font-bold text-[#8d4e26] uppercase tracking-wider mb-2">
                  <Icon
                    name="explore"
                    className="text-[#8d4e26]"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span>Walkable Micro-Communities</span>
                </div>
                <h2 className="text-[36px] leading-[44px] font-semibold text-[#111e19] tracking-[-0.015em]">
                  Know your neighborhood before you sign.
                </h2>
                <p className="text-[15px] leading-[24px] text-[#556159] mt-1">
                  Real community data: artisan bakeries, tree canopy density,
                  and commute times.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] leading-[20px] text-[#556159]">
                  Explore Enclaves:
                </span>
                <span className="px-3 py-1 bg-[#ffffff] rounded-full text-[12px] leading-[16px] font-semibold text-[#8d4e26] border border-[#d8c2b7]/30">
                  {neighborhoods.length} Guides Active
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {neighborhoods.map((n, nIdx) => (
                <div
                  key={nIdx}
                  className="bg-[#ffffff] rounded-2xl overflow-hidden border border-[#d8c2b7]/30 shadow-ambient-rest hover:shadow-ambient-elevated transition-all"
                >
                  <div className="h-44 bg-[#e2f1e8] relative overflow-hidden">
                    <Image
                      alt={displayValue(n.name)}
                      className="object-cover"
                      src={String(
                        displayValue(
                          n.imageUrl,
                          placeholderNeighborhoods[0].imageUrl,
                        ),
                      )}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      unoptimized
                    />
                    {Boolean(n.subRegion) && (
                      <div className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-full bg-[#26332d]/80 backdrop-blur text-[#ffffff] text-[12px] leading-[16px] font-semibold">
                        {displayValue(n.subRegion)}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-[20px] leading-[28px] font-semibold text-[#111e19]">
                      {displayValue(n.name)}
                    </h3>
                    <p className="text-[13px] leading-[20px] text-[#556159] mt-1 mb-4">
                      {displayValue(n.description)}
                    </p>
                    <div className="space-y-2 text-[13px] leading-[20px] border-t border-[#d8c2b7]/20 pt-3">
                      {Boolean(n.walkScore) && (
                        <div className="flex justify-between">
                          <span className="text-[#556159] flex items-center gap-1">
                            <Icon
                              name="directions_walk"
                              className="text-emerald-600"
                              size={15}
                              strokeWidth={2.2}
                            />{" "}
                            Walk Score
                          </span>
                          <span className="font-bold text-[#111e19]">
                            {displayValue(n.walkScore)}
                          </span>
                        </div>
                      )}
                      {Boolean(n.diningSpotsCount) && (
                        <div className="flex justify-between">
                          <span className="text-[#556159] flex items-center gap-1">
                            <Icon
                              name="local_cafe"
                              className="text-[#8d4e26]"
                              size={15}
                              strokeWidth={2.2}
                            />{" "}
                            Coffee &amp; Dining
                          </span>
                          <span className="font-semibold text-[#111e19]">
                            {displayValue(n.diningSpotsCount)}
                          </span>
                        </div>
                      )}
                      {Boolean(n.avgRent) && (
                        <div className="flex justify-between">
                          <span className="text-[#556159] flex items-center gap-1">
                            <Icon
                              name="payments"
                              className="text-[#556159]"
                              size={15}
                              strokeWidth={2.2}
                            />{" "}
                            Avg Rent
                          </span>
                          <span className="font-bold text-[#8d4e26]">
                            {displayValue(n.avgRent)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================== 7. Core Map Experience ==================== */}
      <section className="py-10 px-6 bg-[#ffffff]" id="map-experience">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[12px] leading-[16px] font-bold text-[#8d4e26] uppercase tracking-wider mb-2">
                <Icon
                  name="pin_drop"
                  className="text-[#8d4e26]"
                  size={16}
                  strokeWidth={2.2}
                />
                <span>Spatial Map Explorer</span>
              </div>
              <h2 className="text-[36px] leading-[44px] font-semibold text-[#111e19] tracking-[-0.015em]">
                Browse neighborhoods by rental rate.
              </h2>
              <p className="text-[15px] leading-[24px] text-[#556159] mt-1">
                Interactive pins indicate verified monthly pricing and pet
                policy.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#e8f7ee] p-1.5 rounded-xl border border-[#d8c2b7]/30">
              <button
                className="px-3 py-1.5 rounded-lg bg-[#ffffff] text-[#8d4e26] text-[12px] leading-[16px] font-semibold shadow-sm flex items-center gap-1.5"
                type="button"
              >
                <Icon
                  name="layers"
                  className="text-current"
                  size={16}
                  strokeWidth={2.2}
                />{" "}
                Prices &amp; Availability
              </button>
              <button
                className="px-3 py-1.5 rounded-lg text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px] flex items-center gap-1.5"
                type="button"
              >
                <Icon
                  name="park"
                  className="text-current"
                  size={16}
                  strokeWidth={2.2}
                />{" "}
                Parks &amp; Greenways
              </button>
            </div>
          </div>

          <div className="relative w-full h-[480px] rounded-3xl overflow-hidden border border-[#d8c2b7]/30 shadow-ambient-rest bg-[#e2f1e8]">
            <Image
              alt="Residential map canvas"
              className="object-cover"
              src={mapImage}
              fill
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-[#26332d]/10 pointer-events-none" />

            {mapPins.map((pin, pIdx) => (
              <div
                key={pIdx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: pin.top || "50%", left: pin.left || "50%" }}
              >
                <div
                  className={`px-3 py-1.5 rounded-full font-bold text-[14px] leading-[20px] shadow-ambient-floating group-hover:bg-[#8d4e26] transition-all flex items-center gap-1.5 ring-2 ring-[#ffffff] ${
                    pin.isAvailable
                      ? "bg-[#26332d] text-[#ffffff]"
                      : "bg-[#d98c5f] text-[#ffffff]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${pin.isAvailable ? "bg-emerald-400" : "bg-[#ffdbc9]"}`}
                  />
                  <span>{displayValue(pin.label)}</span>
                </div>

                <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-[#ffffff] rounded-xl shadow-ambient-floating border border-[#d8c2b7]/30 z-20">
                  <div className="text-[12px] font-bold text-[#8d4e26] uppercase">
                    {displayValue(pin.category)}
                  </div>
                  <div className="text-[15px] leading-[24px] font-semibold text-[#111e19]">
                    {displayValue(pin.title)}
                  </div>
                  <div className="text-[12px] text-[#556159]">
                    {displayValue(pin.specs)}
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-5 right-5 bg-[#ffffff]/95 backdrop-blur-sm p-3 rounded-2xl shadow-ambient-floating border border-[#d8c2b7]/30 flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[13px] leading-[20px] text-[#556159] pr-3 border-r border-[#d8c2b7]/30">
                <span className="w-3 h-3 rounded-full bg-[#26332d]" /> Available
                <span className="w-3 h-3 rounded-full bg-[#d98c5f] ml-2" />{" "}
                Pending
              </div>
              <button
                className="p-1.5 rounded-lg text-[#556159] hover:text-[#111e19] hover:bg-[#e2f1e8]"
                type="button"
              >
                <Icon
                  name="add"
                  className="text-current"
                  size={20}
                  strokeWidth={2.2}
                />
              </button>
              <button
                className="p-1.5 rounded-lg text-[#556159] hover:text-[#111e19] hover:bg-[#e2f1e8]"
                type="button"
              >
                <Icon
                  name="remove"
                  className="text-current"
                  size={20}
                  strokeWidth={2.2}
                />
              </button>
              <button
                className="p-1.5 rounded-lg text-[#556159] hover:text-[#111e19] hover:bg-[#e2f1e8]"
                type="button"
              >
                <Icon
                  name="my_location"
                  className="text-current"
                  size={20}
                  strokeWidth={2.2}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 8. User Personalization: Saved Homes & Search Alerts ==================== */}
      <section className="py-10 px-6 bg-[#e8f7ee]" id="saved-homes">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-[#d8c2b7]/30 shadow-ambient-rest">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffdbc9] flex items-center justify-center text-[#8d4e26]">
                    <Icon
                      name="favorite"
                      className="text-current"
                      size={22}
                      strokeWidth={2.2}
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px] leading-[28px] font-semibold text-[#111e19]">
                      {savedHomes.length} Homes Saved in your Portfolio
                    </h3>
                    <p className="text-[13px] leading-[20px] text-[#556159]">
                      Easily compare move-in dates and share with roommates
                    </p>
                  </div>
                </div>
                <button
                  className="text-[#8d4e26] hover:text-[#5a2702] text-[14px] leading-[20px] font-semibold"
                  type="button"
                >
                  Share Tray
                </button>
              </div>

              <div className="space-y-3">
                {savedHomes.map((sh, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/20 hover:border-[#d98c5f] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg bg-[#e2f1e8] overflow-hidden flex-shrink-0 relative">
                        <Image
                          alt={displayValue(sh.title)}
                          className="object-cover"
                          src={String(
                            displayValue(
                              sh.imageUrl,
                              placeholderSavedHomes[0].imageUrl,
                            ),
                          )}
                          fill
                          sizes="56px"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-[16px] leading-[22px] font-semibold text-[#111e19]">
                          {displayValue(sh.title)}
                        </h4>
                        <div className="text-[13px] leading-[20px] text-[#556159]">
                          {displayValue(sh.specs)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[16px] leading-[22px] font-bold text-[#8d4e26]">
                        {displayValue(sh.price)}
                      </div>
                      <button
                        className="text-[12px] text-[#ba1a1a] hover:underline flex items-center gap-0.5 justify-end mt-0.5"
                        type="button"
                      >
                        <Icon
                          name="delete"
                          className="text-current"
                          size={13}
                          strokeWidth={2.2}
                        />{" "}
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#d8c2b7]/20">
                <div className="text-[12px] font-bold text-[#556159] uppercase tracking-wider mb-2">
                  Recently Viewed Homes
                </div>
                <div className="flex items-center gap-4 text-[13px] leading-[20px] text-[#556159] overflow-x-auto no-scrollbar">
                  <span className="hover:text-[#8d4e26] cursor-pointer underline decoration-dotted">
                    Queen Anne Hillside 2B ($3,150)
                  </span>
                  <span>•</span>
                  <span className="hover:text-[#8d4e26] cursor-pointer underline decoration-dotted">
                    Capitol Hill Garden Flat ($2,400)
                  </span>
                  <span>•</span>
                  <span className="hover:text-[#8d4e26] cursor-pointer underline decoration-dotted">
                    Wallingford Courtyard ($2,800)
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-[#d8c2b7]/30 shadow-ambient-rest flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e2f1e8] flex items-center justify-center text-[#8d4e26] mb-4">
                  <Icon
                    name="notifications_active"
                    className="text-current"
                    size={22}
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="text-[20px] leading-[28px] font-semibold text-[#111e19]">
                  Get Instant Rental Alerts
                </h3>
                <p className="text-[13px] leading-[20px] text-[#556159] mt-1 mb-6">
                  Prime Seattle rentals average 6 days on market. Receive
                  immediate notifications the moment a dog-friendly 2+ bedroom
                  matches your criteria.
                </p>
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-[12px] leading-[16px] font-semibold text-[#111e19] mb-1">
                      Your Email Address
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#111e19] placeholder-[#556159]/60 focus:border-[#d98c5f] focus:ring-1 focus:ring-[#d98c5f]"
                      placeholder="name@domain.com"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] leading-[16px] font-semibold text-[#111e19] mb-1">
                      Alert Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#d8c2b7]/30 bg-[#e8f7ee] cursor-pointer hover:border-[#8d4e26]">
                        <input
                          defaultChecked
                          className="text-[#8d4e26] focus:ring-[#d98c5f]"
                          name="freq"
                          type="radio"
                        />
                        <span className="text-[12px] leading-[16px] font-semibold text-[#111e19]">
                          Instant SMS / Email
                        </span>
                      </label>
                      <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#d8c2b7]/30 bg-[#e8f7ee] cursor-pointer hover:border-[#8d4e26]">
                        <input
                          className="text-[#8d4e26] focus:ring-[#d98c5f]"
                          name="freq"
                          type="radio"
                        />
                        <span className="text-[12px] leading-[16px] font-semibold text-[#111e19]">
                          Daily 9am Digest
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      defaultChecked
                      className="rounded text-[#8d4e26] focus:ring-[#d98c5f] mt-1"
                      id="dog-check"
                      type="checkbox"
                    />
                    <label
                      className="text-[13px] leading-[20px] text-[#556159]"
                      htmlFor="dog-check"
                    >
                      Include pet-approved policy filter ($1,500 – $4,500/mo
                      range).
                    </label>
                  </div>
                  <button
                    className="w-full py-3 rounded-xl bg-[#d98c5f] text-[#ffffff] text-[14px] leading-[20px] font-semibold hover:bg-[#8d4e26] shadow-ambient-rest transition-all duration-200"
                    type="submit"
                  >
                    Activate Custom Search Alert
                  </button>
                </form>
              </div>
              <div className="mt-4 text-[12px] text-[#556159] flex items-center gap-1.5">
                <Icon
                  name="verified_user"
                  className="text-emerald-600"
                  size={15}
                  strokeWidth={2.2}
                />
                <span>Zero spam. Unsubscribe in 1 click at any time.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 9. Schedule a Viewing / Contact Action Module ==================== */}
      <section className="py-10 px-6 bg-[#ffffff]" id="contact-viewing">
        <div className="max-w-[1320px] mx-auto">
          <div className="bg-gradient-to-br from-[#e8f7ee] to-[#e2f1e8] rounded-3xl p-8 sm:p-12 border border-[#d8c2b7]/30 shadow-ambient-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-1.5 text-[12px] leading-[16px] font-bold text-[#8d4e26] uppercase tracking-wider mb-2">
                  <Icon
                    name="calendar_month"
                    className="text-[#8d4e26]"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span>Resident Concierge</span>
                </div>
                <h2 className="text-[36px] leading-[44px] font-semibold text-[#111e19] leading-tight">
                  Schedule your calm, unhurried walkthrough.
                </h2>
                <p className="text-[15px] leading-[24px] text-[#556159] mt-3 mb-6">
                  Experience the natural acoustics, tap water pressure, and
                  peaceful terrace light firsthand. No high-pressure sales
                  pitches—just thoughtful host guidance.
                </p>

                <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#d8c2b7]/30 shadow-ambient-rest flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#ffdbc9]">
                    <Image
                      alt={displayValue(
                        data.conciergeName,
                        "Resident Concierge",
                      )}
                      className="object-cover"
                      src={conciergePhoto}
                      fill
                      sizes="56px"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="text-[16px] leading-[22px] font-semibold text-[#111e19]">
                      {displayValue(data.conciergeName, "Elena Vance")}
                    </div>
                    <div className="text-[13px] leading-[20px] text-[#556159]">
                      {displayValue(
                        data.conciergeRole,
                        "Living Seattle Concierge & Resident Guide",
                      )}
                    </div>
                    {Boolean(data.conciergeResponseTime) && (
                      <div className="flex items-center gap-2 mt-1 text-[12px] text-[#8d4e26] font-semibold">
                        <Icon
                          name="chat"
                          className="text-[#8d4e26]"
                          size={14}
                          strokeWidth={2.2}
                        />
                        <span>{displayValue(data.conciergeResponseTime)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 space-y-2.5 text-[13px] leading-[20px] text-[#556159]">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="check_circle"
                      className="text-emerald-600"
                      size={18}
                      strokeWidth={2.2}
                    />
                    <span>
                      Self-guided smart lock access or hosted tour available
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="check_circle"
                      className="text-emerald-600"
                      size={18}
                      strokeWidth={2.2}
                    />
                    <span>
                      Complimentary neighborhood field guide with local coffee
                      map
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#ffffff] p-6 sm:p-8 rounded-2xl border border-[#d8c2b7]/30 shadow-ambient-rest">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-5">
                    <label className="block text-[12px] leading-[16px] text-[#111e19] mb-2 font-semibold">
                      1. Choose Tour Experience
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="p-3 rounded-xl border-2 border-[#d98c5f] bg-[#e8f7ee] cursor-pointer flex items-center gap-2.5">
                        <input
                          defaultChecked
                          className="text-[#8d4e26] focus:ring-[#d98c5f]"
                          name="tour_type"
                          type="radio"
                        />
                        <div>
                          <div className="text-[16px] leading-[22px] font-semibold text-[#111e19]">
                            In-Person Tour
                          </div>
                          <div className="text-[12px] text-[#556159]">
                            Walk the physical spaces
                          </div>
                        </div>
                      </label>
                      <label className="p-3 rounded-xl border border-[#d8c2b7]/40 bg-[#e8f7ee] cursor-pointer flex items-center gap-2.5 hover:border-[#8d4e26]">
                        <input
                          className="text-[#8d4e26] focus:ring-[#d98c5f]"
                          name="tour_type"
                          type="radio"
                        />
                        <div>
                          <div className="text-[16px] leading-[22px] font-semibold text-[#111e19]">
                            Guided Video Tour
                          </div>
                          <div className="text-[12px] text-[#556159]">
                            Live FaceTime / Google Meet
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[12px] leading-[16px] text-[#111e19] mb-1 font-semibold">
                        Select Home
                      </label>
                      <select className="w-full px-3.5 py-2.5 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#111e19] text-[15px] leading-[24px] focus:border-[#8d4e26] focus:ring-1 focus:ring-[#8d4e26] cursor-pointer">
                        {properties.map((p, idx) => (
                          <option key={idx}>
                            {displayValue(p.title)} (
                            {formatPrice(
                              p.price,
                              displayValue(p.currency, "$"),
                              displayValue(p.period, "mo"),
                            )}
                            )
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] leading-[16px] text-[#111e19] mb-1 font-semibold">
                        Preferred Date
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#111e19] text-[15px] leading-[24px] focus:border-[#8d4e26] focus:ring-1 focus:ring-[#8d4e26]"
                        defaultValue="2025-03-20"
                        type="date"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-[12px] leading-[16px] text-[#111e19] mb-1.5 font-semibold">
                      Select Time Slot
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="px-3 py-1.5 rounded-lg bg-[#26332d] text-[#ffffff] text-[12px] leading-[16px] font-semibold"
                        type="button"
                      >
                        10:00 AM
                      </button>
                      <button
                        className="px-3 py-1.5 rounded-lg bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px]"
                        type="button"
                      >
                        11:30 AM
                      </button>
                      <button
                        className="px-3 py-1.5 rounded-lg bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px]"
                        type="button"
                      >
                        2:00 PM
                      </button>
                      <button
                        className="px-3 py-1.5 rounded-lg bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px]"
                        type="button"
                      >
                        4:30 PM
                      </button>
                      <button
                        className="px-3 py-1.5 rounded-lg bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#556159] hover:text-[#111e19] text-[12px] leading-[16px]"
                        type="button"
                      >
                        6:00 PM (Twilight)
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[12px] leading-[16px] text-[#111e19] mb-1 font-semibold">
                        Full Name
                      </label>
                      <input
                        className="w-full px-3.5 py-2 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#111e19] text-[15px] leading-[24px] focus:border-[#8d4e26]"
                        placeholder="Julian Myers"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] leading-[16px] text-[#111e19] mb-1 font-semibold">
                        Phone or SMS Number
                      </label>
                      <input
                        className="w-full px-3.5 py-2 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#111e19] text-[15px] leading-[24px] focus:border-[#8d4e26]"
                        placeholder="(206) 555-0192"
                        required
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[12px] leading-[16px] text-[#111e19] mb-1 font-semibold">
                      Notes / Questions (Optional)
                    </label>
                    <textarea
                      className="w-full px-3.5 py-2 rounded-xl bg-[#e8f7ee] border border-[#d8c2b7]/40 text-[#111e19] text-[15px] leading-[24px] focus:border-[#8d4e26]"
                      placeholder="Tell us if you are bringing a pet or have questions about parking..."
                      rows={2}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[12px] text-[#556159]">
                      Free cancellation anytime up to 2 hours prior.
                    </span>
                    <button
                      className="px-6 py-3 rounded-xl bg-[#d98c5f] hover:bg-[#8d4e26] text-[#ffffff] text-[14px] leading-[20px] font-bold shadow-ambient-rest transition-all duration-200 active:scale-95 flex items-center gap-2"
                      type="submit"
                    >
                      <Icon
                        name="calendar_today"
                        className="text-[#ffffff]"
                        size={18}
                        strokeWidth={2.2}
                      />
                      <span>Confirm Walkthrough Request</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 10. Footer ==================== */}
      <footer className="w-full bg-[#e8f7ee] border-t border-[#d8c2b7]/20">
        <div className="w-full py-10 px-6 max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <a
                className="text-[20px] leading-[28px] font-bold text-[#8d4e26] tracking-tight flex items-center gap-2 mb-3"
                href="#"
              >
                <span className="w-7 h-7 rounded-lg bg-[#d98c5f] text-[#ffffff] flex items-center justify-center font-bold text-[15px]">
                  L
                </span>
                <span>{displayValue(data.companyName, "Living")}</span>
              </a>
              <p className="text-[13px] leading-[20px] text-[#556159] mb-4 leading-relaxed">
                {displayValue(
                  data.companyTagline,
                  "Residential & Lifestyle Real Estate built for domestic calm. Transparent leasing, human neighborhood guides, and verified pet-welcoming homes.",
                )}
              </p>
              <div className="flex items-center gap-3 text-[#556159]">
                <a
                  aria-label="Social Link"
                  className="w-8 h-8 rounded-full bg-[#ffffff] flex items-center justify-center hover:text-[#8d4e26] transition-colors"
                  href="#"
                >
                  <Icon
                    name="share"
                    className="text-current"
                    size={18}
                    strokeWidth={2.2}
                  />
                </a>
                <a
                  aria-label="Contact Concierge"
                  className="w-8 h-8 rounded-full bg-[#ffffff] flex items-center justify-center hover:text-[#8d4e26] transition-colors"
                  href="#"
                >
                  <Icon
                    name="mail"
                    className="text-current"
                    size={18}
                    strokeWidth={2.2}
                  />
                </a>
                <a
                  aria-label="Phone"
                  className="w-8 h-8 rounded-full bg-[#ffffff] flex items-center justify-center hover:text-[#8d4e26] transition-colors"
                  href="#"
                >
                  <Icon
                    name="phone"
                    className="text-current"
                    size={18}
                    strokeWidth={2.2}
                  />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[18px] leading-[24px] font-semibold text-[#111e19] mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-[13px] leading-[20px]">
                <li>
                  <a
                    className="text-[#8d4e26] font-medium hover:underline"
                    href="#explore"
                  >
                    Explore Homes
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#rent-filters"
                  >
                    Renters Portal
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#neighborhoods"
                  >
                    Neighborhood Guides
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#amenities"
                  >
                    Amenities Catalog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] leading-[24px] font-semibold text-[#111e19] mb-3">
                Experience
              </h4>
              <ul className="space-y-2 text-[13px] leading-[20px]">
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#contact-viewing"
                  >
                    Book a Viewing
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#contact-viewing"
                  >
                    Resident Concierge
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#saved-homes"
                  >
                    Saved Searches
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#amenities"
                  >
                    Pet Policy Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] leading-[24px] font-semibold text-[#111e19] mb-3">
                Legal &amp; Calm
              </h4>
              <ul className="space-y-2 text-[13px] leading-[20px]">
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#"
                  >
                    Equal Housing Opportunity
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#556159] hover:text-[#8d4e26] transition-colors duration-200"
                    href="#"
                  >
                    Accessibility Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#d8c2b7]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] leading-[20px] text-[#556159]">
            <p>
              © {new Date().getFullYear()}{" "}
              {displayValue(data.companyName, "Living")} Residential &amp;
              Lifestyle Real Estate. Built for domestic calm.
            </p>
            <div className="flex items-center gap-4 text-[12px] leading-[16px] font-semibold">
              <span>Seattle • Portland • Vancouver</span>
              <span>•</span>
              <span className="text-[#8d4e26]">Domestic Comfort Standard</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ==================== Modal Sheet ==================== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-[#26332d]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#ffffff] max-w-md w-full rounded-2xl p-6 shadow-ambient-floating border border-[#d8c2b7]/30 relative">
            <button
              className="absolute top-4 right-4 text-[#556159] hover:text-[#111e19]"
              onClick={() => setModalOpen(false)}
              type="button"
            >
              <Icon
                name="close"
                className="text-current"
                size={22}
                strokeWidth={2.2}
              />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <Icon
                name="favorite"
                className="text-[#8d4e26]"
                size={22}
                strokeWidth={2.2}
              />
              <h3 className="text-[18px] leading-[24px] font-semibold text-[#111e19]">
                Saved Homes ({savedHomes.length})
              </h3>
            </div>
            <p className="text-[13px] leading-[20px] text-[#556159] mb-4">
              You have {savedHomes.length} residences bookmarked for immediate
              viewing this weekend.
            </p>
            <div className="space-y-2 mb-4">
              {savedHomes.map((sh, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#e8f7ee] text-[13px] leading-[20px] flex justify-between"
                >
                  <span className="font-medium text-[#111e19]">
                    {displayValue(sh.title)}
                  </span>
                  <span className="font-bold text-[#8d4e26]">
                    {displayValue(sh.price)}
                  </span>
                </div>
              ))}
            </div>
            <a
              className="block w-full text-center py-2.5 rounded-lg bg-[#d98c5f] text-[#ffffff] text-[14px] leading-[20px] font-semibold hover:bg-[#8d4e26]"
              href="#saved-homes"
              onClick={() => setModalOpen(false)}
            >
              Go to Saved Homes Tray
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
