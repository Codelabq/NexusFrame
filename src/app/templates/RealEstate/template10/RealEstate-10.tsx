"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  ArrowRight,
  BadgeCheck,
  Bath,
  Bell,
  Box,
  Building2,
  ChevronDown,
  CirclePlay,
  CircleUserRound,
  ConciergeBell,
  Download,
  DraftingCompass,
  Eye,
  GraduationCap,
  Heart,
  Images,
  Layers3,
  MapPin,
  Maximize,
  Minus,
  Play,
  Plus,
  Rotate3D,
  Search,
  SlidersHorizontal,
  TrainFront,
  Video,
  Waves,
} from "lucide-react";

type RealEstate10Props = {
  resolvedData?: Record<string, unknown>;
};

const lucideIconMap: Record<string, LucideIcon> = {
  favorite: Heart,
  compare_arrows: ArrowLeftRight,
  notifications: Bell,
  account_circle: CircleUserRound,
  verified: BadgeCheck,
  location_on: MapPin,
  search: Search,
  pool: Waves,
  hot_tub: Bath,
  visibility: Eye,
  concierge: ConciergeBell,
  domain_add: Building2,
  tune: SlidersHorizontal,
  school: GraduationCap,
  train: TrainFront,
  layers: Layers3,
  add: Plus,
  remove: Minus,
  expand_more: ChevronDown,
  water: Waves,
  photo_library: Images,
  view_in_ar: Box,
  play_circle: CirclePlay,
  architecture: DraftingCompass,
  file_download: Download,
  "360": Rotate3D,
  videocam: Video,
  play_arrow: Play,
  fullscreen: Maximize,
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

function numericPrice(value: unknown): number {
  if (typeof value === "number") return value;
  const text = String(value ?? "").replace(/[^0-9.m-]/gi, "");
  const amount = parseFloat(text);
  if (!Number.isFinite(amount)) return 0;
  return text.toLowerCase().endsWith("m") ? amount * 1_000_000 : amount;
}

const placeholderProperties = [
  {
    id: "prop-1",
    title: "The Bel-Air Promontory Estate",
    address: "10444 Bellagio Road, Bel-Air, CA",
    price: 12900000,
    currency: "$",
    pricePerSqFt: "$1,860 / sq.ft",
    bedrooms: 5,
    bathrooms: 7,
    area: 6935,
    yearBuilt: 2024,
    badge: "Exclusive Mandate",
    amenityHighlight: "Waterfront",
    photoCount: "1/38",
    has3d: true,
    has4k: true,
    amenitiesList: [
      "Infinity Edge Pool",
      "1,200-Bottle Cellar",
      "Private Motor Court",
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0XWdiXdQbbFUGn1Qt91It2alhKEl7GAlf1-eZEbYDdWtZJ2JD7p3IdixYcIlN-XTqo5Tzz21OlpGnAVI1byWvmeRXaaR1YI-M-9ueRV2nszya2c7K-Py14HrDSfdtC03S3d3HG_Ionw_Ka5KobO_-zoQ0jejLzASh63eXDYqDSGKXLWmv2qcV5koqYQii3pkNRXHhBPlgDgBmBZWQB14m2yS9XCMunpvMApiPLMRF28vW_1_J8ZOR",
  },
  {
    id: "prop-2",
    title: "The Central Park West Gallery Tower",
    address: "15 Central Park West #32B, New York, NY",
    price: 8450000,
    currency: "$",
    pricePerSqFt: "$2,140 / sq.ft",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3948,
    yearBuilt: 2023,
    badge: "Newly Completed",
    amenityHighlight: "Park Facing",
    photoCount: "1/44",
    has3d: true,
    amenitiesList: [
      "24/7 White Glove Doorman",
      "Private Dining Salon",
      "Spa & Lap Pool",
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEIHsGntv1TeabKZ5hhCIam_dSRn7-NPXwcBOfGdxaVJ8xPRtVVxL3noYHGpTQETkj3UV5vKTd9xL_oyv1spDPFpK0EbAUfSwviDsvXOIdweFVeZy5-n47QqPmhyixlwSurLsEwJD4BMgqrjem6CO3YsQjT8hvNpiQ04PYZWPms6p8U4kmLDPDuVsvwzGyDqKNLywCaoJKN962dglo8zU4agE4x6ErZ0ICwkX4PwztaQewwN8zMFo6",
  },
  {
    id: "prop-3",
    title: "The Palo Cristi Modernist Pavilion",
    address: "5810 E Palo Cristi Rd, Paradise Valley, AZ",
    price: 6250000,
    currency: "$",
    pricePerSqFt: "$2,400 / sq.ft",
    bedrooms: 4,
    bathrooms: 5,
    area: 5100,
    yearBuilt: 2025,
    badge: "Architectural Archive",
    photoCount: "1/26",
    hasCad: true,
    amenitiesList: [
      "Solar Smart Microgrid",
      "Guest Casita",
      "4-Car Gallery Garage",
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBB6s3xnCDQ6wNRmiga-MaftkrP0orpPOKq-mIkARbx_Lr4qQDfK6HNIZ5OysdNuLmxm7F_HqtA3RKYMKJtWOTRwZu8PtO3BrgLeq0WMKkahugTvwUzrtn9vICke100gS-8OSuYZJzFHkfwh7-TJSPetTDSve-0glRebE8QUWJ6-zP0_sIDxSp1VDONB2QGtkZYA5CSOAyfAkS_D6PWxEeJdaRD7WAucrLXjzMiVhCFADjIpzEkRVO2",
  },
];

const placeholderComparison = [
  {
    name: "The Bel-Air Promontory",
    location: "Bel-Air, CA",
    price: "$12,900,000",
    rate: "$1,860 / sq.ft",
    bedsBaths: "5 Beds • 7 Baths",
    area: "6,935 Sq.Ft (644 m²)",
    lot: "1.42 Acres Grounds",
    yearBuilt: "2024 (Brand New)",
    carryingCost: "$4,250 / mo",
    garage: "6-Car Gated Motor Court",
  },
  {
    name: "Central Park West Tower",
    location: "New York, NY",
    price: "$8,450,000",
    rate: "$2,140 / sq.ft",
    bedsBaths: "3 Beds • 3.5 Baths",
    area: "3,948 Sq.Ft (366 m²)",
    lot: "680 Sq.Ft Terrace",
    yearBuilt: "2023",
    carryingCost: "$7,820 / mo",
    garage: "2 Subterranean Valet Spots",
    isAccent: true,
  },
  {
    name: "Palo Cristi Pavilion",
    location: "Paradise Valley, AZ",
    price: "$6,250,000",
    rate: "$2,400 / sq.ft",
    bedsBaths: "4 Beds • 5 Baths",
    area: "5,100 Sq.Ft (473 m²)",
    lot: "2.10 Acres Desert Estate",
    yearBuilt: "2025 (Q1 Delivery)",
    carryingCost: "$1,180 / mo",
    garage: "4-Car Climate Controlled",
  },
];

const placeholderMapPins = [
  { id: 1, label: "$8,450,000", top: "28%", left: "34%", active: false },
  { id: 2, label: "$12,900,000", top: "42%", left: "48%", active: true },
  { id: 3, label: "$6,250,000", top: "65%", left: "62%", active: false },
  { id: 4, label: "$18,500,000", top: "22%", left: "78%", active: false },
];

const placeholderActivePin = {
  badge: "Exclusive Mandate",
  location: "Tribeca • Franklin Street",
  title: "The Triplex Sky Sanctuary",
  price: "$12,900,000",
  specs: "4 Beds • 5.5 Baths • 5,420 Sq.Ft",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC60XaSOu4KvD5Y91rG-iXmQWaBCBBzNSFGruY4ySXWKfjYnp8g-XBYnNaFUi5UL-9kyVVL2TqNP4O4DmRd3UnLx2UjkAjtBDB1-ka9ohIx1anSskqA5DSGklfymQ7eMpyT1bDmzhBfMFX77h-IWEf6-bXK9r0BqxCBkLFbCp8-m36RJ0Xk29c95iWqTd3byKqvz8fztNnHBBbd0PELT72uth3tF_0n1d8B3cnpj7ouTOSQYlhvgOIy",
};

const placeholderDevelopmentInventory = [
  {
    designation: "Residence 18-A",
    typology: "2-Bedroom Panoramic Bay Suite",
    area: "2,150 Sq.Ft",
    terrace: "320 Sq.Ft Loggia",
    price: "$3,850,000",
    status: "Available",
    statusVariant: "secondary",
  },
  {
    designation: "Residence 29-C",
    typology: "3-Bedroom Sky Terrace Residence",
    area: "3,680 Sq.Ft",
    terrace: "580 Sq.Ft Wraparound",
    price: "$6,900,000",
    status: "Reserved",
    statusVariant: "tertiary",
  },
  {
    designation: "Penthouse 41 (Crown)",
    typology: "4-Bedroom Duplex Sky Mansion",
    area: "6,840 Sq.Ft",
    terrace: "1,400 Sq.Ft Private Pool Deck",
    price: "$18,750,000",
    status: "Available",
    statusVariant: "secondary",
  },
];

const placeholderNeighborhoods = [
  {
    badge: "Manhattan, NY",
    name: "Tribeca Historic District",
    description:
      "The historic center of cast-iron architecture, renowned for cavernous floor plans, privacy, and Michelin-starred dining.",
    medianPrice: "$5,400,000",
    velocity: "+6.2% YoY",
    mobilityScore: "99 / 100",
    culinaryDensity: "14 Venues",
    linkText: "Explore 18 Active Tribeca Properties",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDb_hi8wTAnPqHowVYvr8Sv-dU65LdL3gzAH-n0oN8QVQT4um4iopKqMDnlfnhztU3qu9sdciO-82hHYEEnSyIhyh_mC9eo4rh-NcVckSQAV3Q3vfUlBcqKl5NDoei0X6DsRIkiW9qlI1T-UXAFXr84Mrijmy6h5sFvYOg57HwqJGmg4MepI4B6KyuEn_7E__gCRRWK1pQXhxNVEygg9pjTYntklEUbLOOkOenGoiMuPUuhgiTnDuAa",
  },
  {
    badge: "Los Angeles, CA",
    name: "Beverly Hills Gateway",
    description:
      "Secluded palm-fringed avenues offering massive residential acreage, premier private security patrols, and immediate hotel concierges.",
    medianPrice: "$9,850,000",
    velocity: "+4.8% YoY",
    mobilityScore: "1.25 Acres",
    culinaryDensity: "6 Campuses",
    linkText: "Explore 12 Active Beverly Hills Estates",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBC690VHRFsSJUjyR2mB7sTbnePoC30-_wiFNiwAQpe-qxPB_XL5exJkNc4136GG9pB2rwVkrE8whlfEcB539zH47U6w1e2Z3ng6um4PAOKG4WnpV4xA4y5WBnhM3oans__k8dIPLOVz3hW0vsSam5tWFltwD8SefzDXJTn_Hq-dbq50mF65MoGJHDxgb7grKhMNhbocXEK2eA12aKOHH229E83euBT12Cn-ibykiIlDWvZzmFN0KLE",
  },
  {
    badge: "Miami Beach, FL",
    name: "Biscayne Bay Enclaves",
    description:
      "Exclusive island redoubts featuring deepwater yacht moorings, tax-advantaged sovereign capital, and bespoke architectural pavilions.",
    medianPrice: "$14,200,000",
    velocity: "+11.4% YoY",
    mobilityScore: "Up to 130ft LOA",
    culinaryDensity: "Gated / 24-7 Guarded",
    linkText: "Explore 9 Active Miami Waterfronts",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWq9oguLnz-Dzs1n7q45YIoFXPM42pdbNUDcOHnCxDIXsj-VFOPfEwiDbTSIzQZr3WWLwyYx8j1t3A4MzyxuvMGv4KApDZnhcLUk6jf6apZu9BDTR9suf74LfX5qYa6tA5GCt-IKf043EbG-UNQttW2KxSESCIXePPtyvOLELo1VaQv_eQM1rt4qjsTdehPzE-BFMtnr0vI6PyTkMSrH7ejc5Zr4zrloGzVmogBiBssq58SGU9OIUN",
  },
];

const placeholderAdvisors = [
  {
    name: "Julian De Vance",
    role: "Managing Director • Tribeca & Soho",
    license: "CalDRE #01849201",
    bio: "Over $1.4B in residential career transactions. Specializing in off-market historic conversions and trophy penthouse acquisitions.",
    phone: "+1 (212) 890-4411",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC26zHl_fyhLcMnBttldXmsGthkc_e6EgyO2k8r0iXdTFr4VDio38nOSaGqTOUVpRk0OvfTR_CVW8bwF8I_LTN8EBy-ITpzmzYMERsELuCXlaNKc2uKa-5mG-fc3lKELN1yfYLVY8Xxf1Ii4yhc2NE-ox2R3z3WXf3naodxYTdURquqpvxv_4eqSN4AdK6gDHAa5XDPOLEIfvGh8nA5lDDnvog_pQ-wu6ZzdPvH7o-xsQ1VVD-p8gsu",
  },
  {
    name: "Eleanor Sterling",
    role: "Partner • West Coast Estates",
    license: "DRE #02194822",
    bio: "Advising high-net-worth family offices on compound acquisitions in Bel-Air, Beverly Hills, and Paradise Valley.",
    phone: "+1 (310) 554-9281",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaKpmZcPjb9b_qeP15M0pvWg3eTxbTkq28IJ8mAcSWPuMRJdMPmcxeLTrVbmwWLMyy5zsqPpyZPMxE_iDeV3Q9docl_0Zua4mXVG-KsMmOp_CdZSjKzTW4RAYWF7LbCixeX_vZ34hi1ZeOAR2_NBIzo6YXqRGDKbtTCmdb12NMmZdI3cq2l-FGc3BpqBxZIkpnikSmzmB0pxjTUkCKkMoZhF_ZGF-N-4m2LahXfGBS94eLQudPDIFP",
  },
  {
    name: "Marcus Montgomery",
    role: "Head of Waterfront & Yachting",
    license: "FL-BK #3299104",
    bio: "Pioneer in South Florida waterfront maritime easements, deepwater berths, and masterplanned gated island estates.",
    phone: "+1 (305) 714-3829",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA47NqUX7I5ESo2LQAPjo1yEEDX-kUGodcuS2bBpSEjU9tQnl_EWHJ9kyfMVqR9Wu6LF6PHOBbSloEQ5xZWXAJ_5G3duCYlg26nAppuOX2PWx61bJ453fsQO3O8g5gsPV3b8meOa_T7SGW0j7-eyFAOXC97FV6o5KgKllMSsvPZSk4jX3UcqXGakCtYNFdbdufDALUvEx_4z69YcxOrudNZPgZDeXjOYEu_WuSVZE3pWMIPIjTf0QPy",
  },
];

const placeholderArticles = [
  {
    category: "Capital Macro",
    readTime: "6 min read",
    title:
      "Sovereign Capital Trends: Allocations to Trophy Residential Portfolios in 2025",
    excerpt:
      "Analyzing the institutional shift toward ultra-prime domestic assets as inflation hedges and intergenerational wealth preservation mechanisms.",
    author: "By Julian De Vance",
    date: "Nov 18, 2025",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeTksL-WFGikr3cNTjf4k9yPdTC-4JBUC45dhkTozTrM-Frv40S-GNvg68Gt_m2H2AleVZAXtFmTEbWZ3eqrr2qGuIem8pc3zP1fk6Q3Nl1w6jeSe7kWZ81spwfpjisLguk_PLyFp5QPyIhq8MyaPE_UUvqUafCHuoax2TrbDkbQTi-WqnARSpxanGR8mwYDtzU3PvO4zcRidJk1nNzM8eo11xqOro1s3a4EwXJDxfH1p3V_nup6Hw",
  },
  {
    category: "Heritage Craft",
    readTime: "8 min read",
    title:
      "Restoring Historic Masonry: The Adaptive Reuse of Pre-War Cast-Iron Façades",
    excerpt:
      "Balancing landmark preservation criteria with contemporary thermal efficiency, seismic retrofits, and state-of-the-art acoustic envelopes.",
    author: "By Foster & Partners Studio",
    date: "Nov 04, 2025",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhkW9g_MWf4LqQy9ZZ3EwfE6Hd6ZJyjvh_iojLc2rqFj8kXqtm76KECZsKYq1ojE-pyYtyLg1aEvzumlFH6uUFkiAhf0-pm4239wCucntx3RDxasE8Fr9l0wOleRs3MScVEjoOYStec5xrJO83kcid0W9WxquPzRwzR6M1UBuUvxcDP4OnnNQkfSEtMlk2lyNtUTPMKtNi9Rb3qWNPRHLryiTz7iSOSzgzUjNU-MEsNvEFRe26tyod",
  },
  {
    category: "Quarterly Report",
    readTime: "12 min read",
    title: "Urban Luxury Yield Report Q4 2025: Flight to Super-Prime Quality",
    excerpt:
      "Comprehensive empirical breakdown of cap rates, leasing velocities, and off-market premiums across Manhattan, Miami, and Los Angeles.",
    author: "By CE Research Directorate",
    date: "Oct 29, 2025",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChm-a2lTyf6dS2IAXs8XqT9Dk_SD6BcXfXd85Z7s6JfbZt7459HYSxuILrf3hPS3Zorp-ii5xwixkESxfftYXW7ywlYy9OeBA_eCMBTf8Ie4AAt8ne7w3PwXo-ap2VJQcyEDMpOhP3uXnQGJEyfzkGlwzJHv3gaojK3fHWAaNValKIeXSM6gHnbIaRZYvxMUO3RKPD6OhcedLgC_3EW7v1tNllPK-L9iBHnfU3eX-xbK-nNjj6RU4P",
  },
];

const placeholderData: Record<string, unknown> = {
  companyName: "Complete Estate",
  companyTagline: "Portfolio Brokerage",
  companyInitials: "CE",
  searchLocationPlaceholder: "Tribeca, New York, NY",
  favoritesCount: 5,
  compareCount: 3,
  heroBadge: "Archived & Master Portfolio Q4 2025",
  heroTitle: "The Pinnacle of Living.",
  heroTitleHighlight: "Endless Architectural Possibilities.",
  heroDescription:
    "Explore premier residential estates, signature master developments, and data-driven portfolio intelligence crafted for distinguished collectors and capital stewards.",
  mapPins: placeholderMapPins,
  activePinSnapshot: placeholderActivePin,
  properties: placeholderProperties,
  comparisonProperties: placeholderComparison,
  developmentTitle: "The Grand Aurelia Residences & Tower",
  developmentDescription:
    "A monumental addition to the waterfront skyline, sculpted by Pritzker-laureate Foster & Partners. Ninety-six bespoke private residences anchored by private marina moorings and a private wellness pavilion.",
  developmentCompletion: "Q4 2026",
  developmentLevels: "42",
  developmentUnitsCount: "96",
  developmentPreSoldPercent: "82%",
  developmentImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDfi72Gl4sZIloWJ_GAD8HXpcn5UmxTfHYyl3Us2JII3cmbdqKFnR5QvGjLNgoEE7TTmQzcBl7pNhNE-1keG1C56a8seomANgIbkPMOm0MJBjzDhSHYNus5Y49-ikHC2XBS-L951TlXqx3QQzSB2j9NZAoj1D0kByV5UfYQ1HNIiAM7vkD9xypVHOBi5dDu0j4AE8y1db28Y_VQJiylSZLT1jqAa0pVRhvif1zLHDuL_lVE0Wgf3N8x",
  developmentCaption: "Architectural Concept Render • Foster & Partners Studio",
  developmentInventory: placeholderDevelopmentInventory,
  virtualTourTitle: "Villa Solstice: The Architecture of Light",
  virtualTourRuntime: "03:42",
  virtualTourAudio: "Dolby Atmos 5.1",
  virtualTourImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvQK4JXG9tpoL0QInorxsThf8MIfR5ZDxDimbPDmkUEDiS8TYovlmEuh43GSQcyHafL78vPbtR_qxBOyD0XoSbQZ0zw-TOMbLeg9eDPZUS07c5gBDGlWJFGfUxqzrZSchy0M-ZqWpgMx-lGzWDKFTlfSbbWE4AzOF7B2PLXELHeddJ5raZcgrbtnsvn-MScm5ZfVXwqPsg4GeI0nBDugo3Z2sTi7hrfy8ML7sHBcksRtHSH8T9Qh5A",
  neighborhoods: placeholderNeighborhoods,
  defaultPropertyPrice: 8500000,
  defaultDownPaymentPercent: 20,
  defaultInterestRate: "6.25%",
  advisors: placeholderAdvisors,
  articles: placeholderArticles,
  companyDescription:
    "The premier advisory brokerage dedicated to master developments, signature estates, and institutional private portfolio representation worldwide.",
  complianceDisclaimer:
    "© 2025 Complete Estate Master Portfolios LLC. All rights reserved. An Equal Housing Opportunity Brokerage. Licensing: CalDRE #01928374, NYRE #49281723. Financial services facilitated by Complete Financial Advisory NMLS #829104.",
};

function normalizeTemplateData(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return data && Object.keys(data).length > 0
    ? { ...placeholderData, ...data }
    : placeholderData;
}

export default function RealEstate10({ resolvedData }: RealEstate10Props) {
  const data = normalizeTemplateData(resolvedData);

  const initialPrice =
    typeof data.defaultPropertyPrice === "number"
      ? data.defaultPropertyPrice
      : 8500000;
  const initialDownPercent =
    typeof data.defaultDownPaymentPercent === "number"
      ? data.defaultDownPaymentPercent
      : 20;
  const initialRate = displayValue(data.defaultInterestRate, "6.25%");

  const [purchasePrice, setPurchasePrice] = useState<number>(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] =
    useState<number>(initialDownPercent);
  const [interestRate, setInterestRate] = useState<string>(initialRate);
  const [loanTerm, setLoanTerm] = useState<string>("30 Years Fixed");
  const [selectedMapPin, setSelectedMapPin] = useState<number>(2);

  // Derived financial computations
  const downPaymentAmount = (purchasePrice * downPaymentPercent) / 100;
  const loanAmount = Math.max(0, purchasePrice - downPaymentAmount);
  const rateNumeric = parseFloat(interestRate.replace("%", "")) / 100 || 0.0625;
  const monthlyRate = rateNumeric / 12;
  const numberOfPayments = loanTerm.includes("15")
    ? 180
    : loanTerm.includes("10/1")
      ? 120
      : loanTerm.includes("7/1")
        ? 84
        : 360;

  const monthlyPrincipalInterest =
    loanAmount > 0 && monthlyRate > 0
      ? loanTerm.includes("Interest-Only")
        ? loanAmount * monthlyRate
        : (loanAmount *
            (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : 0;

  const estimatedMonthlyTaxes = Math.round((purchasePrice * 0.0125) / 12);
  const estimatedInsurance = 1775;
  const estimatedHoa = 1328;
  const totalMonthly = Math.round(
    monthlyPrincipalInterest +
      estimatedMonthlyTaxes +
      estimatedInsurance +
      estimatedHoa,
  );

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

  const developmentInventory = (
    Array.isArray(data.developmentInventory) &&
    data.developmentInventory.length > 0
      ? data.developmentInventory
      : placeholderDevelopmentInventory
  ) as Record<string, any>[];

  const neighborhoods = (
    Array.isArray(data.neighborhoods) && data.neighborhoods.length > 0
      ? data.neighborhoods
      : placeholderNeighborhoods
  ) as Record<string, any>[];

  const advisors = (
    Array.isArray(data.advisors) && data.advisors.length > 0
      ? data.advisors
      : placeholderAdvisors
  ) as Record<string, any>[];

  const articles = (
    Array.isArray(data.articles) && data.articles.length > 0
      ? data.articles
      : placeholderArticles
  ) as Record<string, any>[];

  const activePinSnapshot = (
    data.activePinSnapshot && typeof data.activePinSnapshot === "object"
      ? data.activePinSnapshot
      : placeholderActivePin
  ) as Record<string, any>;

  const developmentImage = displayValue(
    data.developmentImage,
    placeholderData.developmentImage as string,
  );
  const virtualTourImage = displayValue(
    data.virtualTourImage,
    placeholderData.virtualTourImage as string,
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [listingMode, setListingMode] = useState("Buy");
  const [selectedTypology, setSelectedTypology] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("3");
  const [amenityFilters, setAmenityFilters] = useState<string[]>([]);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState("price-high");
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>([]);
  const [savedStateReady, setSavedStateReady] = useState(false);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [comparedPropertyIds, setComparedPropertyIds] = useState<string[]>(() =>
    properties
      .slice(0, comparisonProperties.length)
      .map((property, index) => String(property.id ?? index)),
  );
  const [mapStyle, setMapStyle] = useState("Carto-Architectural");
  const [mapZoom, setMapZoom] = useState(1);
  const [activeMapLayers, setActiveMapLayers] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const [inquirySubject, setInquirySubject] = useState("");
  const [mediaPlaying, setMediaPlaying] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem("realestate10-favorites");
        if (stored) {
          const parsed: unknown = JSON.parse(stored);
          setSavedPropertyIds(Array.isArray(parsed) ? parsed.map(String) : []);
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
        "realestate10-favorites",
        JSON.stringify(savedPropertyIds),
      );
    } catch {
      // Favorites remain available for this page session.
    }
  }, [savedPropertyIds, savedStateReady]);

  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3500);
  };

  const saveSearchAlert = () => {
    try {
      window.localStorage.setItem(
        "realestate10-search-alert",
        JSON.stringify({
          searchTerm,
          listingMode,
          selectedTypology,
          minimumPrice,
          maximumPrice,
          bedroomFilter,
          amenityFilters,
        }),
      );
      notify("Search alert saved on this device.");
    } catch {
      notify("This browser could not save the search alert.");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const requestInquiry = (subject = "") => {
    setInquirySubject(subject);
    scrollToSection("valuation");
  };

  const toggleFavorite = (propertyId: string) => {
    setSavedPropertyIds((current) =>
      current.includes(propertyId)
        ? current.filter((id) => id !== propertyId)
        : [...current, propertyId],
    );
  };

  const toggleComparison = (propertyId: string) => {
    setComparedPropertyIds((current) =>
      current.includes(propertyId)
        ? current.filter((id) => id !== propertyId)
        : [...current, propertyId],
    );
  };

  const visibleProperties = properties
    .filter((property, index) => {
      const propertyId = String(property.id ?? index);
      const searchableText = [
        property.title,
        property.address,
        property.badge,
        property.amenityHighlight,
        ...(Array.isArray(property.amenitiesList)
          ? property.amenitiesList
          : []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const queryTerms = searchTerm
        .toLowerCase()
        .split(/[\s,]+/)
        .filter(Boolean);
      const propertyMode = String(
        property.listingMode ?? property.transactionType ?? "",
      ).toLowerCase();
      const matchesMode =
        listingMode === "Buy"
          ? !propertyMode ||
            propertyMode.includes("buy") ||
            propertyMode.includes("sale")
          : listingMode === "Developments"
            ? Boolean(property.isDevelopment) ||
              /newly completed|development/i.test(
                `${propertyMode} ${property.badge ?? ""}`,
              )
            : listingMode === "Off-Market"
              ? /off.market|private mandate/i.test(
                  `${property.badge ?? ""} ${propertyMode}`,
                )
              : propertyMode.includes("rent");
      const matchesAmenities = amenityFilters.every((filter) => {
        const terms: Record<string, RegExp> = {
          Waterfront: /waterfront|water|bay|marina|yacht/i,
          "Private Pool": /pool|spa/i,
          "Skyline Views": /skyline|view|panorama|park facing/i,
          Concierge: /concierge|doorman|white glove/i,
          "New Construction": /newly completed|new construction|2024|2025/i,
        };
        return terms[filter]?.test(searchableText) ?? false;
      });

      return (
        queryTerms.every((term) => searchableText.includes(term)) &&
        matchesMode &&
        matchesAmenities &&
        (!showSavedOnly || savedPropertyIds.includes(propertyId)) &&
        (!selectedTypology ||
          searchableText.includes(selectedTypology.toLowerCase())) &&
        (!minimumPrice ||
          numericPrice(property.price) >= Number(minimumPrice)) &&
        (!maximumPrice ||
          numericPrice(property.price) <= Number(maximumPrice)) &&
        numericPrice(property.bedrooms) >= Number(bedroomFilter)
      );
    })
    .sort((first, second) =>
      sortOrder === "price-low"
        ? numericPrice(first.price) - numericPrice(second.price)
        : numericPrice(second.price) - numericPrice(first.price),
    );

  const comparisonRows = comparedPropertyIds
    .map((propertyId) => {
      const index = properties.findIndex(
        (property, propertyIndex) =>
          String(property.id ?? propertyIndex) === propertyId,
      );
      if (index < 0) return undefined;
      const property = properties[index];
      const fallback = comparisonProperties[index] ?? {};
      return {
        ...fallback,
        name: displayValue(property.title, fallback.name),
        location: displayValue(property.address, fallback.location),
        price:
          formatPrice(property.price, displayValue(property.currency, "$")) ||
          displayValue(fallback.price),
        rate: displayValue(property.pricePerSqFt, fallback.rate),
        bedsBaths: `${displayValue(property.bedrooms, "-")} Beds • ${displayValue(property.bathrooms, "-")} Baths`,
        area: displayValue(property.area, fallback.area),
        yearBuilt: displayValue(property.yearBuilt, fallback.yearBuilt),
      };
    })
    .filter(Boolean) as Record<string, any>[];

  const selectedPin =
    mapPins.find((pin) => pin.id === selectedMapPin) ?? mapPins[0];
  const pinPrice = numericPrice(selectedPin?.label);
  const selectedMapProperty =
    properties.find((property) => numericPrice(property.price) === pinPrice) ??
    properties[0];
  const tourVideoUrl =
    typeof data.virtualTourVideoUrl === "string"
      ? data.virtualTourVideoUrl
      : "";

  const downloadAmortizationSchedule = () => {
    const rows = [
      ["Month", "Payment", "Principal", "Interest", "Remaining Balance"],
    ];
    let balance = loanAmount;
    for (let month = 1; month <= numberOfPayments && balance > 0; month += 1) {
      const interest = balance * monthlyRate;
      const principal =
        loanTerm.includes("Interest-Only") && month < numberOfPayments
          ? 0
          : month === numberOfPayments
            ? balance
            : Math.min(
                balance,
                Math.max(0, monthlyPrincipalInterest - interest),
              );
      balance = Math.max(0, balance - principal);
      rows.push([
        String(month),
        (principal + interest).toFixed(2),
        principal.toFixed(2),
        interest.toFixed(2),
        balance.toFixed(2),
      ]);
    }
    const csv = rows
      .map((row) =>
        row.map((value) => `"${value.replace(/"/g, '""')}"`).join(","),
      )
      .join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "complete-estate-amortization.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const printSection = (sectionId: string) => {
    document.body.dataset.printTarget = sectionId;
    window.addEventListener(
      "afterprint",
      () => {
        delete document.body.dataset.printTarget;
      },
      { once: true },
    );
    window.print();
  };

  return (
    <div className="bg-[#f9f9fd] text-[#1a1c1f] antialiased selection:bg-[#0037b0] selection:text-white font-['Plus_Jakarta_Sans',sans-serif] text-[14px] leading-[22px] min-h-screen flex flex-col">
      {notice && (
        <div
          className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-lg bg-[#1a1c1f] px-4 py-3 text-[13px] text-white shadow-lg"
          role="status"
          aria-live="polite"
        >
          {notice}
        </div>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f3f3f7;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c4c5d7;
          border-radius: 4px;
        }
        @media print {
          body[data-print-target] * { visibility: hidden !important; }
          body[data-print-target="comparison-section"] [data-print-section="comparison-section"],
          body[data-print-target="comparison-section"] [data-print-section="comparison-section"] *,
          body[data-print-target="developments"] [data-print-section="developments"],
          body[data-print-target="developments"] [data-print-section="developments"] * { visibility: visible !important; }
          body[data-print-target="comparison-section"] [data-print-section="comparison-section"],
          body[data-print-target="developments"] [data-print-section="developments"] { position: absolute; inset: 0; width: 100%; padding: 1rem; }
          body[data-print-target] [data-print-section] button { display: none; }
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. TOP APP BAR                                                            */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#ffffff] border-b border-[#c4c5d7]/30 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between h-20 w-full">
          <div className="flex items-center gap-6">
            <a className="flex items-center gap-2 group" href="#hero">
              <span className="w-8 h-8 bg-[#1a1c1f] text-[#ffffff] flex items-center justify-center font-['EB_Garamond',serif] text-[18px] leading-[26px] rounded-lg shadow-sm group-hover:bg-[#0037b0] transition-colors">
                {displayValue(data.companyInitials, "CE")}
              </span>
              <div>
                <span className="font-['EB_Garamond',serif] text-[36px] leading-[44px] tracking-[-0.01em] font-medium text-[#1a1c1f] block leading-none">
                  {displayValue(data.companyName, "Complete Estate")}
                </span>
                <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase mt-0.5 block">
                  {displayValue(data.companyTagline, "Portfolio Brokerage")}
                </span>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-[#0037b0] font-semibold border-b-2 border-[#0037b0] pb-1 text-[14px] leading-[20px] transition-colors duration-150"
              href="#properties"
            >
              Properties
            </a>
            <a
              className="text-[#434655] font-medium hover:text-[#1a1c1f] transition-colors duration-150 text-[14px] leading-[20px]"
              href="#developments"
            >
              Developments
            </a>
            <a
              className="text-[#434655] font-medium hover:text-[#1a1c1f] transition-colors duration-150 text-[14px] leading-[20px]"
              href="#map-search"
            >
              Map &amp; Search
            </a>
            <a
              className="text-[#434655] font-medium hover:text-[#1a1c1f] transition-colors duration-150 text-[14px] leading-[20px]"
              href="#neighborhoods"
            >
              Neighborhoods
            </a>
            <a
              className="text-[#434655] font-medium hover:text-[#1a1c1f] transition-colors duration-150 text-[14px] leading-[20px]"
              href="#advisors"
            >
              Advisors
            </a>
            <a
              className="text-[#434655] font-medium hover:text-[#1a1c1f] transition-colors duration-150 text-[14px] leading-[20px]"
              href="#insights"
            >
              Insights
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1 border-r border-[#c4c5d7]/40 pr-3">
              <button
                aria-label="Favorites"
                className="relative p-2 text-[#434655] hover:text-[#0037b0] transition-colors"
                title="Saved Favorites"
                type="button"
                aria-pressed={showSavedOnly}
                onClick={() => {
                  setShowSavedOnly((current) => !current);
                  scrollToSection("properties");
                }}
              >
                <Icon name="favorite" className="text-current" size={20} />
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#0037b0] text-white text-[9px] font-bold flex items-center justify-center rounded-full leading-none">
                  {savedPropertyIds.length}
                </span>
              </button>
              <button
                aria-label="Compare Tray"
                className="relative p-2 text-[#434655] hover:text-[#0037b0] transition-colors"
                title="Compare Tray"
                type="button"
                onClick={() => scrollToSection("comparison-section")}
              >
                <Icon
                  name="compare_arrows"
                  className="text-current"
                  size={20}
                />
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#006a63] text-white text-[9px] font-bold flex items-center justify-center rounded-full leading-none">
                  {comparisonRows.length}
                </span>
              </button>
              <button
                aria-label="Alerts"
                className="relative p-2 text-[#434655] hover:text-[#0037b0] transition-colors"
                title="Saved Alerts"
                type="button"
                onClick={saveSearchAlert}
              >
                <Icon name="notifications" className="text-current" size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ba1a1a] rounded-full" />
              </button>
              <button
                aria-label="Account"
                className="p-2 text-[#434655] hover:text-[#0037b0] transition-colors"
                title="Private Account"
                type="button"
                onClick={() => requestInquiry("Private client advisory")}
              >
                <Icon
                  name="account_circle"
                  className="text-current"
                  size={20}
                />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                className="hidden xl:inline-flex items-center justify-center px-4 py-2 border border-[#1a1c1f] text-[#1a1c1f] hover:bg-[#1a1c1f] hover:text-white rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all duration-200"
                href="#valuation"
              >
                Request Valuation
              </a>
              <a
                className="inline-flex items-center justify-center px-4 py-2 bg-[#1d4ed8] hover:bg-[#0037b0] text-white rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all duration-200 shadow-sm active:scale-[0.99]"
                href="#valuation"
              >
                Book Viewing
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO & OMNICHANNEL SEARCH CONSOLE                                      */}
      {/* ========================================================================= */}
      <section
        className="relative bg-[#ffffff] border-b border-[#c4c5d7]/30 overflow-hidden"
        id="hero"
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-24 relative z-10">
          <div className="max-w-4xl mb-16">
            {Boolean(data.heroBadge) && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8e8ec] border border-[#c4c5d7]/40 rounded text-[#434655] text-[11px] leading-[14px] tracking-[0.08em] font-bold mb-4 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006a63]" />
                {displayValue(data.heroBadge)}
              </div>
            )}
            <h1 className="font-['EB_Garamond',serif] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] tracking-[-0.02em] font-normal text-[#1a1c1f] mb-4">
              {displayValue(data.heroTitle, "The Pinnacle of Living.")} <br />
              <span className="italic font-normal">
                {displayValue(
                  data.heroTitleHighlight,
                  "Endless Architectural Possibilities.",
                )}
              </span>
            </h1>
            <p className="font-['EB_Garamond',serif] text-[20px] leading-[32px] font-normal text-[#434655] max-w-2xl">
              {displayValue(
                data.heroDescription,
                "Explore premier residential estates, signature master developments, and data-driven portfolio intelligence crafted for distinguished collectors and capital stewards.",
              )}
            </p>
          </div>

          <div className="bg-[#ffffff] rounded-xl border border-[#c4c5d7]/40 shadow-xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 border-b border-[#c4c5d7]/30 pb-4 mb-6">
              <button
                className={`px-5 py-2 rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all ${listingMode === "Buy" ? "bg-[#1a1c1f] text-white" : "text-[#434655] hover:bg-[#ededf2]"}`}
                aria-pressed={listingMode === "Buy"}
                onClick={() => setListingMode("Buy")}
                type="button"
              >
                Buy
              </button>
              <button
                className={`px-5 py-2 rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all ${listingMode === "Rent" ? "bg-[#1a1c1f] text-white" : "text-[#434655] hover:bg-[#ededf2]"}`}
                aria-pressed={listingMode === "Rent"}
                onClick={() => setListingMode("Rent")}
                type="button"
              >
                Rent
              </button>
              <button
                className={`px-5 py-2 rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all ${listingMode === "Developments" ? "bg-[#1a1c1f] text-white" : "text-[#434655] hover:bg-[#ededf2]"}`}
                aria-pressed={listingMode === "Developments"}
                onClick={() => {
                  setListingMode("Developments");
                  scrollToSection("developments");
                }}
                type="button"
              >
                Developments
              </button>
              <button
                className={`px-5 py-2 rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all flex items-center gap-1.5 ${listingMode === "Off-Market" ? "bg-[#1a1c1f] text-white" : "text-[#434655] hover:bg-[#ededf2]"}`}
                aria-pressed={listingMode === "Off-Market"}
                onClick={() => setListingMode("Off-Market")}
                type="button"
              >
                <span className="w-2 h-2 rounded-full bg-[#594019]" />{" "}
                Off-Market
              </button>
              <div className="ml-auto hidden sm:flex items-center gap-2 text-[#747686] text-[11px] leading-[14px] tracking-[0.08em] font-bold">
                <Icon name="verified" className="text-current" size={16} />{" "}
                Verified MLS + Direct Developer Feed
              </div>
            </div>

            <form
              className="grid grid-cols-1 md:grid-cols-12 gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                scrollToSection("properties");
              }}
            >
              <div className="md:col-span-4">
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Location / Neighborhood
                </label>
                <div className="relative">
                  <Icon
                    name="location_on"
                    className="absolute left-3.5 top-3.5 text-[#747686]"
                    size={20}
                  />
                  <input
                    className="w-full h-12 pl-10 pr-4 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f] focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#0037b0]/10"
                    type="text"
                    placeholder={displayValue(
                      data.searchLocationPlaceholder,
                      "Search a city or address",
                    )}
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Typology
                </label>
                <select
                  className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f] focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#0037b0]/10 cursor-pointer"
                  value={selectedTypology}
                  onChange={(event) => setSelectedTypology(event.target.value)}
                >
                  <option value="">All Typologies</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="waterfront">Waterfront Estate</option>
                  <option value="brownstone">Historic Brownstone</option>
                  <option value="villa">Modernist Villa</option>
                </select>
              </div>

              <div className="md:col-span-3">
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Price Range
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f]"
                    type="number"
                    min="0"
                    placeholder="Min price"
                    value={minimumPrice}
                    onChange={(event) => setMinimumPrice(event.target.value)}
                  />
                  <span className="text-[#747686] text-[12px] leading-[16px] font-semibold">
                    -
                  </span>
                  <input
                    className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f]"
                    type="number"
                    min="0"
                    placeholder="Max price"
                    value={maximumPrice}
                    onChange={(event) => setMaximumPrice(event.target.value)}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Beds &amp; Baths
                </label>
                <select
                  className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f] cursor-pointer"
                  value={bedroomFilter}
                  onChange={(event) => setBedroomFilter(event.target.value)}
                >
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                  <option value="5">5+ Beds</option>
                  <option value="0">Any Configuration</option>
                </select>
              </div>

              <div className="md:col-span-1 flex items-end">
                <button
                  aria-label="Search properties"
                  className="w-full h-12 bg-[#1d4ed8] hover:bg-[#0037b0] text-white rounded flex items-center justify-center transition-all shadow-md"
                  type="submit"
                >
                  <Icon name="search" className="text-current" size={24} />
                </button>
              </div>
            </form>

            <div className="mt-4 pt-4 border-t border-[#c4c5d7]/30 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase mr-1">
                  Quick Amenities:
                </span>
                <button
                  className="px-3 py-1.5 rounded border border-[#c4c5d7]/60 bg-[#f3f3f7] hover:border-[#1a1c1f] text-[11px] leading-[14px] tracking-[0.08em] font-bold transition-all flex items-center gap-1.5"
                  type="button"
                  aria-pressed={amenityFilters.includes("Waterfront")}
                  onClick={() =>
                    setAmenityFilters((current) =>
                      current.includes("Waterfront")
                        ? current.filter((filter) => filter !== "Waterfront")
                        : [...current, "Waterfront"],
                    )
                  }
                >
                  <Icon name="pool" className="text-[#006a63]" size={16} />{" "}
                  Waterfront
                </button>
                <button
                  className="px-3 py-1.5 rounded border border-[#c4c5d7]/60 bg-[#f3f3f7] hover:border-[#1a1c1f] text-[11px] leading-[14px] tracking-[0.08em] font-bold transition-all flex items-center gap-1.5"
                  type="button"
                  aria-pressed={amenityFilters.includes("Private Pool")}
                  onClick={() =>
                    setAmenityFilters((current) =>
                      current.includes("Private Pool")
                        ? current.filter((filter) => filter !== "Private Pool")
                        : [...current, "Private Pool"],
                    )
                  }
                >
                  <Icon name="hot_tub" className="text-[#594019]" size={16} />{" "}
                  Private Pool
                </button>
                <button
                  className="px-3 py-1.5 rounded border border-[#c4c5d7]/60 bg-[#f3f3f7] hover:border-[#1a1c1f] text-[11px] leading-[14px] tracking-[0.08em] font-bold transition-all flex items-center gap-1.5"
                  type="button"
                  aria-pressed={amenityFilters.includes("Skyline Views")}
                  onClick={() =>
                    setAmenityFilters((current) =>
                      current.includes("Skyline Views")
                        ? current.filter((filter) => filter !== "Skyline Views")
                        : [...current, "Skyline Views"],
                    )
                  }
                >
                  <Icon name="visibility" className="text-current" size={16} />{" "}
                  Skyline Views
                </button>
                <button
                  className="px-3 py-1.5 rounded border border-[#c4c5d7]/60 bg-[#f3f3f7] hover:border-[#1a1c1f] text-[11px] leading-[14px] tracking-[0.08em] font-bold transition-all flex items-center gap-1.5"
                  type="button"
                  aria-pressed={amenityFilters.includes("Concierge")}
                  onClick={() =>
                    setAmenityFilters((current) =>
                      current.includes("Concierge")
                        ? current.filter((filter) => filter !== "Concierge")
                        : [...current, "Concierge"],
                    )
                  }
                >
                  <Icon name="concierge" className="text-current" size={16} />{" "}
                  24/7 Concierge
                </button>
                <button
                  className="px-3 py-1.5 rounded border border-[#c4c5d7]/60 bg-[#f3f3f7] hover:border-[#1a1c1f] text-[11px] leading-[14px] tracking-[0.08em] font-bold transition-all flex items-center gap-1.5"
                  type="button"
                  aria-pressed={amenityFilters.includes("New Construction")}
                  onClick={() =>
                    setAmenityFilters((current) =>
                      current.includes("New Construction")
                        ? current.filter(
                            (filter) => filter !== "New Construction",
                          )
                        : [...current, "New Construction"],
                    )
                  }
                >
                  <Icon name="domain_add" className="text-current" size={16} />{" "}
                  New Construction
                </button>
              </div>
              <button
                className="inline-flex items-center gap-1.5 text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#0037b0] hover:underline"
                type="button"
                aria-expanded={showMoreFilters}
                onClick={() => setShowMoreFilters((current) => !current)}
              >
                <Icon name="tune" className="text-current" size={18} /> More
                Filters (28)
              </button>
            </div>
            {showMoreFilters && (
              <div className="mt-4 border-t border-[#c4c5d7]/30 pt-4 flex flex-wrap items-center gap-3 text-[12px]">
                <span className="font-semibold text-[#434655]">
                  Active filters:{" "}
                  {amenityFilters.length +
                    (selectedTypology ? 1 : 0) +
                    (minimumPrice || maximumPrice ? 1 : 0)}
                </span>
                <button
                  className="font-semibold text-[#0037b0] hover:underline"
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTypology("");
                    setMinimumPrice("");
                    setMaximumPrice("");
                    setBedroomFilter("0");
                    setAmenityFilters([]);
                    setListingMode("Buy");
                    setShowSavedOnly(false);
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE MAP & GEOSPATIAL INTELLIGENCE (Feature Group B)            */}
      {/* ========================================================================= */}
      {mapPins.length > 0 && (
        <section
          className="bg-[#f3f3f7] py-24 border-b border-[#c4c5d7]/30"
          id="map-search"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#006a63] uppercase font-bold block mb-1">
                  Geospatial Intelligence
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[36px] leading-[44px] tracking-[-0.01em] font-medium text-[#1a1c1f]">
                  Interactive Prime Enclave Map
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <div className="inline-flex rounded border border-[#c4c5d7]/60 bg-[#ffffff] p-1">
                  <button
                    className={`px-3 py-1 text-[11px] leading-[14px] tracking-[0.08em] font-bold rounded ${mapStyle === "Carto-Architectural" ? "bg-[#1a1c1f] text-white" : "text-[#434655] hover:text-[#1a1c1f]"}`}
                    type="button"
                    aria-pressed={mapStyle === "Carto-Architectural"}
                    onClick={() => setMapStyle("Carto-Architectural")}
                  >
                    Carto-Architectural
                  </button>
                  <button
                    className={`px-3 py-1 text-[11px] leading-[14px] tracking-[0.08em] font-bold rounded ${mapStyle === "Satellite" ? "bg-[#1a1c1f] text-white" : "text-[#434655] hover:text-[#1a1c1f]"}`}
                    type="button"
                    aria-pressed={mapStyle === "Satellite"}
                    onClick={() => setMapStyle("Satellite")}
                  >
                    Satellite
                  </button>
                  <button
                    className={`px-3 py-1 text-[11px] leading-[14px] tracking-[0.08em] font-bold rounded ${mapStyle === "3D Topo" ? "bg-[#1a1c1f] text-white" : "text-[#434655] hover:text-[#1a1c1f]"}`}
                    type="button"
                    aria-pressed={mapStyle === "3D Topo"}
                    onClick={() => setMapStyle("3D Topo")}
                  >
                    3D Topo
                  </button>
                </div>
                <button
                  className="px-3 py-1.5 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#1a1c1f] flex items-center gap-1"
                  type="button"
                  aria-pressed={activeMapLayers.includes("schools")}
                  onClick={() =>
                    setActiveMapLayers((current) =>
                      current.includes("schools")
                        ? current.filter((layer) => layer !== "schools")
                        : [...current, "schools"],
                    )
                  }
                >
                  <Icon name="school" className="text-current" size={16} />{" "}
                  Schools
                </button>
                <button
                  className="px-3 py-1.5 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#1a1c1f] flex items-center gap-1"
                  type="button"
                  aria-pressed={activeMapLayers.includes("transit")}
                  onClick={() =>
                    setActiveMapLayers((current) =>
                      current.includes("transit")
                        ? current.filter((layer) => layer !== "transit")
                        : [...current, "transit"],
                    )
                  }
                >
                  <Icon name="train" className="text-current" size={16} />{" "}
                  Transit Hubs
                </button>
              </div>
            </div>

            <div className="relative w-full h-[580px] rounded-xl overflow-hidden border border-[#c4c5d7]/50 shadow-md bg-[#e8e8ec]">
              <div
                className="absolute inset-0 bg-[#e5e7eb] overflow-hidden"
                data-location="Manhattan, New York"
                style={{
                  transform: `scale(${mapZoom})`,
                  filter:
                    mapStyle === "Satellite"
                      ? "brightness(0.72) saturate(1.3) hue-rotate(155deg)"
                      : mapStyle === "3D Topo"
                        ? "contrast(1.2) saturate(0.7) drop-shadow(0 8px 8px #737686)"
                        : "none",
                }}
              >
                <svg
                  className="w-full h-full opacity-40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      height="40"
                      id="grid"
                      patternUnits="userSpaceOnUse"
                      width="40"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect fill="#f3f4f6" height="100%" width="100%" />
                  <rect fill="url(#grid)" height="100%" width="100%" />
                  <path
                    d="M 0,100 Q 300,240 450,600 L 0,600 Z"
                    fill="#99efe5"
                    opacity="0.45"
                  />
                  <line
                    stroke="#cbd5e1"
                    strokeWidth="8"
                    x1="0"
                    x2="1440"
                    y1="180"
                    y2="420"
                  />
                  <line
                    stroke="#cbd5e1"
                    strokeWidth="6"
                    x1="200"
                    x2="800"
                    y1="0"
                    y2="600"
                  />
                  <line
                    stroke="#cbd5e1"
                    strokeWidth="5"
                    x1="750"
                    x2="1200"
                    y1="0"
                    y2="600"
                  />
                </svg>
              </div>

              {mapPins.map((pin, idx) => {
                const isActive = selectedMapPin === pin.id;

                return (
                  <button
                    key={pin.id || idx}
                    className={`absolute z-20 group cursor-pointer border-0 bg-transparent p-0 text-left ${isActive ? "z-30" : ""}`}
                    style={{
                      top: pin.top,
                      left: pin.left,
                      transform: `scale(${mapZoom})`,
                      transformOrigin: "center",
                    }}
                    type="button"
                    aria-label={`Select map property ${displayValue(pin.label)}`}
                    aria-pressed={isActive}
                    onClick={() => setSelectedMapPin(pin.id)}
                  >
                    <div
                      className={`px-3 py-1.5 text-[12px] leading-[16px] tracking-[0.04em] font-semibold rounded shadow-lg border flex items-center gap-1.5 transition-all ${
                        isActive
                          ? "bg-[#1d4ed8] text-white border-2 border-white scale-105 shadow-xl"
                          : "bg-[#1a1c1f] text-[#ffffff] border-white/20 hover:bg-[#1d4ed8]"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${isActive ? "bg-white animate-pulse" : "bg-[#006a63]"}`}
                      />
                      {displayValue(pin.label)}
                    </div>

                    {isActive && activePinSnapshot && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-80 bg-[#ffffff] rounded-xl border border-[#c4c5d7]/50 shadow-2xl p-2 pointer-events-auto">
                        <div className="relative w-full h-36 rounded-lg overflow-hidden mb-2">
                          <Image
                            alt={displayValue(activePinSnapshot.title)}
                            className="object-cover"
                            src={String(
                              displayValue(
                                displayValue(
                                  selectedMapProperty?.imageUrl,
                                  activePinSnapshot.imageUrl,
                                ),
                                placeholderActivePin.imageUrl,
                              ),
                            )}
                            fill
                            sizes="320px"
                            unoptimized
                          />
                          {Boolean(activePinSnapshot.badge) && (
                            <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#1a1c1f]/80 backdrop-blur-sm text-white text-[11px] leading-[14px] tracking-[0.08em] font-bold rounded">
                              {displayValue(
                                selectedMapProperty?.badge,
                                displayValue(activePinSnapshot.badge),
                              )}
                            </div>
                          )}
                        </div>
                        <div className="px-1">
                          <div className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase">
                            {displayValue(
                              selectedMapProperty?.address,
                              displayValue(activePinSnapshot.location),
                            )}
                          </div>
                          <h4 className="text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                            {displayValue(
                              selectedMapProperty?.title,
                              displayValue(activePinSnapshot.title),
                            )}
                          </h4>
                          <div className="flex items-center justify-between mt-1 text-[14px] leading-[22px]">
                            <span className="text-[#0037b0] font-bold text-[18px] leading-[26px]">
                              {formatPrice(
                                selectedMapProperty?.price,
                                displayValue(
                                  selectedMapProperty?.currency,
                                  "$",
                                ),
                              ) || displayValue(activePinSnapshot.price)}
                            </span>
                            <span className="text-[#747686] text-[11px] leading-[14px] font-bold">
                              {selectedMapProperty
                                ? `${displayValue(selectedMapProperty.bedrooms, "-")} Beds • ${displayValue(selectedMapProperty.bathrooms, "-")} Baths • ${displayValue(selectedMapProperty.area, "-")} Sq.Ft`
                                : displayValue(activePinSnapshot.specs)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}

              <div className="absolute bottom-4 left-4 z-20 bg-[#ffffff]/90 backdrop-blur-md border border-[#c4c5d7]/40 rounded-lg p-2 shadow-md flex items-center gap-4 text-[14px] leading-[22px]">
                <div className="flex items-center gap-1 text-[#1a1c1f]">
                  <Icon name="layers" className="text-[#006a63]" size={18} />
                  <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold">
                    Overlays Active:
                  </span>
                </div>
                {activeMapLayers.includes("schools") && (
                  <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655]">
                    School zones active
                  </span>
                )}
                {activeMapLayers.includes("transit") && (
                  <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655]">
                    Transit hubs active
                  </span>
                )}
                {!activeMapLayers.length && (
                  <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655]">
                    No overlays selected
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1">
                <button
                  aria-label="Zoom in"
                  className="w-9 h-9 bg-[#ffffff] hover:bg-[#ededf2] border border-[#c4c5d7]/60 rounded shadow flex items-center justify-center text-[#1a1c1f]"
                  type="button"
                  onClick={() =>
                    setMapZoom((zoom) => Math.min(zoom + 0.2, 1.8))
                  }
                >
                  <Icon name="add" className="text-current" size={18} />
                </button>
                <button
                  aria-label="Zoom out"
                  className="w-9 h-9 bg-[#ffffff] hover:bg-[#ededf2] border border-[#c4c5d7]/60 rounded shadow flex items-center justify-center text-[#1a1c1f]"
                  type="button"
                  onClick={() =>
                    setMapZoom((zoom) => Math.max(zoom - 0.2, 0.8))
                  }
                >
                  <Icon name="remove" className="text-current" size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. FEATURED SIGNATURE PROPERTIES                                          */}
      {/* ========================================================================= */}
      <section
        className="py-24 bg-[#ffffff] border-b border-[#c4c5d7]/30"
        id="properties"
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#594019] uppercase font-bold block mb-1">
                Curated Master Offerings
              </span>
              <h2 className="font-['EB_Garamond',serif] text-[48px] leading-[56px] tracking-[-0.015em] font-normal text-[#1a1c1f] leading-tight">
                Signature Estate Portfolios
              </h2>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-[#747686] text-[11px] leading-[14px] tracking-[0.08em] font-bold">
                Showing {visibleProperties.length} Active Mandates
              </span>
              <button
                className="px-4 py-2 border border-[#c4c5d7]/60 rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#1a1c1f] hover:bg-[#f3f3f7] transition-colors flex items-center gap-2"
                type="button"
                aria-label={`Sort by ${sortOrder === "price-high" ? "lowest" : "highest"} price`}
                onClick={() =>
                  setSortOrder((current) =>
                    current === "price-high" ? "price-low" : "price-high",
                  )
                }
              >
                Sort by: Price{" "}
                {sortOrder === "price-high" ? "Descending" : "Ascending"}{" "}
                <Icon name="expand_more" className="text-current" size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProperties.map((prop, propertyIndex) => {
              const propertyId = String(prop.id ?? propertyIndex);
              const isSaved = savedPropertyIds.includes(propertyId);
              const isCompared = comparedPropertyIds.includes(propertyId);
              return (
                <div
                  key={propertyId}
                  className="bg-[#ffffff] border border-[#c4c5d7]/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#e8e8ec]">
                    <Image
                      alt={displayValue(prop.title)}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {Boolean(prop.badge) && (
                        <span className="px-2.5 py-1 bg-[#1a1c1f]/90 backdrop-blur-md text-white text-[11px] leading-[14px] tracking-[0.08em] font-bold rounded">
                          {displayValue(prop.badge)}
                        </span>
                      )}
                      {Boolean(prop.amenityHighlight) && (
                        <span className="px-2 py-1 bg-[#006a63]/90 backdrop-blur-md text-white text-[11px] leading-[14px] tracking-[0.08em] font-bold rounded flex items-center gap-1">
                          <Icon
                            name="water"
                            className="text-current"
                            size={12}
                          />{" "}
                          {displayValue(prop.amenityHighlight)}
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-white text-[11px] leading-[14px] tracking-[0.08em] font-bold">
                      <Icon
                        name="photo_library"
                        className="text-current"
                        size={14}
                      />{" "}
                      {displayValue(prop.photoCount, "1/24")}
                      {prop.has3d && (
                        <>
                          <span className="mx-1 opacity-40">|</span>
                          <Icon
                            name="view_in_ar"
                            className="text-current"
                            size={14}
                          />{" "}
                          3D
                        </>
                      )}
                      {prop.has4k && (
                        <>
                          <span className="mx-1 opacity-40">|</span>
                          <Icon
                            name="play_circle"
                            className="text-current"
                            size={14}
                          />{" "}
                          4K
                        </>
                      )}
                      {prop.hasCad && (
                        <>
                          <span className="mx-1 opacity-40">|</span>
                          <Icon
                            name="architecture"
                            className="text-current"
                            size={14}
                          />{" "}
                          CAD
                        </>
                      )}
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <button
                        aria-label="Favorite"
                        className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-colors shadow ${isSaved ? "bg-white text-[#ba1a1a]" : "bg-[#ffffff]/80 text-[#1a1c1f] hover:bg-white"}`}
                        aria-pressed={isSaved}
                        title={isSaved ? "Remove favorite" : "Save favorite"}
                        onClick={() => toggleFavorite(propertyId)}
                        type="button"
                      >
                        <Icon
                          name="favorite"
                          className="text-[#ba1a1a]"
                          size={18}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="text-[28px] leading-[36px] tracking-[-0.01em] font-semibold text-[#0037b0]">
                          {formatPrice(
                            prop.price,
                            displayValue(prop.currency, "$"),
                          )}
                        </h3>
                        {Boolean(prop.pricePerSqFt) && (
                          <span className="text-[#747686] text-[11px] leading-[14px] tracking-[0.08em] font-bold">
                            {displayValue(prop.pricePerSqFt)}
                          </span>
                        )}
                      </div>
                      <h4 className="text-[18px] leading-[26px] font-semibold text-[#1a1c1f] mb-1">
                        {displayValue(prop.title)}
                      </h4>
                      <p className="text-[#434655] text-[14px] leading-[22px] mb-4">
                        {displayValue(prop.address)}
                      </p>

                      <div className="grid grid-cols-4 py-2 border-y border-[#c4c5d7]/30 text-center mb-4 bg-[#f3f3f7]/50 rounded">
                        <div>
                          <span className="block text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                            {displayValue(prop.bedrooms)}
                          </span>
                          <span className="text-[#747686] text-[11px] leading-[14px] tracking-[0.08em] font-bold uppercase">
                            Beds
                          </span>
                        </div>
                        <div>
                          <span className="block text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                            {displayValue(prop.bathrooms)}
                          </span>
                          <span className="text-[#747686] text-[11px] leading-[14px] tracking-[0.08em] font-bold uppercase">
                            Baths
                          </span>
                        </div>
                        <div>
                          <span className="block text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                            {displayValue(prop.area)}
                          </span>
                          <span className="text-[#747686] text-[11px] leading-[14px] tracking-[0.08em] font-bold uppercase">
                            Sq.Ft
                          </span>
                        </div>
                        <div>
                          <span className="block text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                            {displayValue(prop.yearBuilt)}
                          </span>
                          <span className="text-[#747686] text-[11px] leading-[14px] tracking-[0.08em] font-bold uppercase">
                            Built
                          </span>
                        </div>
                      </div>

                      {Array.isArray(prop.amenitiesList) &&
                        prop.amenitiesList.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {prop.amenitiesList.map(
                              (amenity: any, aIdx: number) => (
                                <span
                                  key={aIdx}
                                  className="px-2 py-0.5 rounded bg-[#ededf2] text-[#434655] text-[11px] leading-[14px] tracking-[0.08em] font-bold"
                                >
                                  {displayValue(amenity)}
                                </span>
                              ),
                            )}
                          </div>
                        )}
                    </div>

                    <div className="pt-2 border-t border-[#c4c5d7]/20 flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          checked={isCompared}
                          onChange={() => toggleComparison(propertyId)}
                          className="w-4 h-4 rounded text-[#1d4ed8] focus:ring-[#0037b0]"
                          type="checkbox"
                        />
                        <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655]">
                          In Compare
                        </span>
                      </label>
                      <button
                        className="px-4 py-2 bg-[#1a1c1f] text-[#ffffff] hover:bg-[#1d4ed8] rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-colors"
                        type="button"
                        onClick={() => requestInquiry(displayValue(prop.title))}
                      >
                        Schedule Viewing
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {visibleProperties.length === 0 && (
            <div className="py-12 text-center text-[#747686]">
              No properties match these filters. Clear filters or change your
              search.
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SIDE-BY-SIDE PROPERTY COMPARISON MATRIX (Feature Group D)              */}
      {/* ========================================================================= */}
      {comparisonProperties.length > 0 && (
        <section
          className="py-24 bg-[#f3f3f7] border-b border-[#c4c5d7]/30"
          id="comparison-section"
          data-print-section="comparison-section"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#0037b0] uppercase font-bold block mb-1">
                  Analytical Valuation Tray
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[36px] leading-[44px] tracking-[-0.01em] font-medium text-[#1a1c1f]">
                  Active Property Comparison Matrix ({comparisonRows.length})
                </h2>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-3">
                <button
                  className="px-4 py-2 border border-[#1a1c1f] text-[#1a1c1f] hover:bg-[#1a1c1f] hover:text-white rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all flex items-center gap-2"
                  type="button"
                  onClick={() => printSection("comparison-section")}
                >
                  <Icon
                    name="file_download"
                    className="text-current"
                    size={18}
                  />{" "}
                  Download PDF Dossier
                </button>
                <button
                  className="px-4 py-2 text-[#747686] hover:text-[#1a1c1f] text-[12px] leading-[16px] tracking-[0.04em] font-semibold"
                  type="button"
                  onClick={() => setComparedPropertyIds([])}
                >
                  Clear Tray
                </button>
              </div>
            </div>

            {comparisonRows.length === 0 && (
              <p className="mb-4 rounded-lg bg-white px-4 py-3 text-[13px] text-[#434655]">
                No properties selected. Check “In Compare” on a listing to build
                the tray.
              </p>
            )}
            <div className="bg-[#ffffff] rounded-xl border border-[#c4c5d7]/40 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-[#c4c5d7]/40 bg-[#ffffff]">
                    <th className="p-6 w-1/4 text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#747686] uppercase">
                      Metrics &amp; Specifications
                    </th>
                    {comparisonRows.map((cp, idx) => (
                      <th
                        key={idx}
                        className={`p-6 w-1/4 ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        <div className="text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                          {displayValue(cp.name)}
                        </div>
                        <div className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686]">
                          {displayValue(cp.location)}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c4c5d7]/20 text-[14px] leading-[22px]">
                  <tr>
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Offering Price
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className={`p-4 font-bold text-[18px] leading-[26px] text-[#0037b0] ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        {displayValue(cp.price)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Rate / Gross Interior
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className={`p-4 ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        {displayValue(cp.rate)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Bedrooms &amp; Bathrooms
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className={`p-4 ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        {displayValue(cp.bedsBaths)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Gross Living Area
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className={`p-4 ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        {displayValue(cp.area)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Lot / Outdoor Extent
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className={`p-4 ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        {displayValue(cp.lot)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Year Built / Delivered
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className={`p-4 ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        {displayValue(cp.yearBuilt)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Est. Monthly HOA / Taxes
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className={`p-4 text-[#434655] ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        {displayValue(cp.carryingCost)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Garaged Accommodations
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td
                        key={idx}
                        className={`p-4 text-[#434655] ${cp.isAccent ? "bg-[#f3f3f7]/40" : ""}`}
                      >
                        {displayValue(cp.garage)}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-[#f3f3f7]/20">
                    <td className="p-4 text-[#747686] font-semibold text-[12px] leading-[16px]">
                      Dossier Action
                    </td>
                    {comparisonRows.map((cp, idx) => (
                      <td key={idx} className="p-4">
                        <button
                          className="w-full py-2 bg-[#0037b0] text-white rounded text-[11px] leading-[14px] tracking-[0.08em] font-bold hover:bg-[#0037b0]/90"
                          type="button"
                          onClick={() => requestInquiry(cp.name)}
                        >
                          Book Private Tour
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
      {/* 6. SIGNATURE DEVELOPMENTS & MASTERPLAN SHOWCASE (Feature Group I)         */}
      {/* ========================================================================= */}
      <section
        className="py-24 bg-[#ffffff] border-b border-[#c4c5d7]/30"
        id="developments"
        data-print-section="developments"
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8e8ec] rounded text-[#594019] text-[11px] leading-[14px] tracking-[0.08em] font-bold uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#594019]" /> Master
                Development Showcase
              </div>
              <h2 className="font-['EB_Garamond',serif] text-[48px] leading-[56px] tracking-[-0.015em] font-normal text-[#1a1c1f] mb-4">
                {displayValue(
                  data.developmentTitle,
                  "The Grand Aurelia Residences & Tower",
                )}
              </h2>
              <p className="font-['EB_Garamond',serif] text-[20px] leading-[32px] font-normal text-[#434655] mb-6">
                {displayValue(
                  data.developmentDescription,
                  "A monumental addition to the waterfront skyline, sculpted by Pritzker-laureate Foster & Partners. Ninety-six bespoke private residences anchored by private marina moorings and a private wellness pavilion.",
                )}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#f3f3f7] rounded-xl border border-[#c4c5d7]/40 mb-6">
                <div>
                  <span className="block text-[22px] leading-[30px] font-semibold text-[#1a1c1f]">
                    {displayValue(data.developmentCompletion, "Q4 2026")}
                  </span>
                  <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase">
                    Completion
                  </span>
                </div>
                <div>
                  <span className="block text-[22px] leading-[30px] font-semibold text-[#1a1c1f]">
                    {displayValue(data.developmentLevels, "42")}
                  </span>
                  <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase">
                    Tower Levels
                  </span>
                </div>
                <div>
                  <span className="block text-[22px] leading-[30px] font-semibold text-[#1a1c1f]">
                    {displayValue(data.developmentUnitsCount, "96")}
                  </span>
                  <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase">
                    Private Units
                  </span>
                </div>
                <div>
                  <span className="block text-[22px] leading-[30px] font-semibold text-[#1a1c1f]">
                    {displayValue(data.developmentPreSoldPercent, "82%")}
                  </span>
                  <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase">
                    Pre-Sold
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="px-6 py-3 bg-[#0037b0] text-white rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold hover:bg-[#0037b0]/90 transition-all shadow"
                  type="button"
                  onClick={() =>
                    requestInquiry(
                      displayValue(
                        data.developmentTitle,
                        "Developer prospectus",
                      ),
                    )
                  }
                >
                  Request Developer Prospectus
                </button>
                <button
                  className="px-6 py-3 border border-[#c4c5d7]/60 rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#1a1c1f] hover:bg-[#ededf2] transition-all flex items-center gap-2"
                  type="button"
                  onClick={() => printSection("developments")}
                >
                  <Icon name="download" className="text-current" size={18} />{" "}
                  CAD / Spec Sheet (PDF)
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#c4c5d7]/40 aspect-[4/3]">
                <Image
                  alt="Development rendering"
                  className="object-cover"
                  src={developmentImage}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute bottom-4 left-4 bg-[#1a1c1f]/90 backdrop-blur-md text-white px-4 py-2 rounded-lg text-[11px] leading-[14px] tracking-[0.08em] font-bold">
                  {displayValue(
                    data.developmentCaption,
                    "Architectural Concept Render • Foster & Partners Studio",
                  )}
                </div>
              </div>
            </div>
          </div>

          {developmentInventory.length > 0 && (
            <div className="bg-[#ffffff] border border-[#c4c5d7]/40 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-[#c4c5d7]/30 flex items-center justify-between">
                <h3 className="text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                  Available Unit Inventory &amp; Architectural Typologies
                </h3>
                <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686]">
                  Real-Time Allocation Status
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[14px] leading-[22px]">
                  <thead className="bg-[#f3f3f7] text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase border-b border-[#c4c5d7]/30">
                    <tr>
                      <th className="p-4">Unit Designation</th>
                      <th className="p-4">Typology</th>
                      <th className="p-4">Internal Area</th>
                      <th className="p-4">Outdoor Terrace</th>
                      <th className="p-4">Price Guide</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Floor Plan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#c4c5d7]/20">
                    {developmentInventory.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#f3f3f7]/40">
                        <td className="p-4 font-semibold text-[#1a1c1f]">
                          {displayValue(item.designation)}
                        </td>
                        <td className="p-4">{displayValue(item.typology)}</td>
                        <td className="p-4">{displayValue(item.area)}</td>
                        <td className="p-4">{displayValue(item.terrace)}</td>
                        <td className="p-4 font-bold text-[#0037b0]">
                          {displayValue(item.price)}
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2.5 py-1 rounded text-[11px] leading-[14px] font-semibold ${
                              item.statusVariant === "tertiary"
                                ? "bg-[#594019]/10 text-[#594019]"
                                : "bg-[#006a63]/10 text-[#006a63]"
                            }`}
                          >
                            {displayValue(item.status)}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            className="text-[#0037b0] hover:underline text-[11px] leading-[14px] font-bold flex items-center gap-1 justify-end ml-auto"
                            type="button"
                            onClick={() =>
                              notify(
                                `No floor plan file is attached for ${displayValue(item.designation)}.`,
                              )
                            }
                          >
                            <Icon
                              name="architecture"
                              className="text-current"
                              size={16}
                            />{" "}
                            View Plan
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. MEDIA EXPERIENCE & VIRTUAL WALKTHROUGH (Feature Group G)              */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#2f3034] text-[#f0f0f4]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#e5c18f] uppercase font-bold block mb-1">
                Immersive Media Engine
              </span>
              <h2 className="font-['EB_Garamond',serif] text-[48px] leading-[56px] tracking-[-0.015em] font-normal text-white">
                Cinematic Virtual Walkthrough &amp; Tours
              </h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <button
                className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-[12px] leading-[16px] tracking-[0.04em] font-semibold flex items-center gap-2"
                type="button"
                onClick={() => {
                  const url = data.virtualTour360Url;
                  if (typeof url === "string" && url)
                    window.open(url, "_blank", "noopener,noreferrer");
                  else notify("A 360-degree tour asset has not been attached.");
                }}
              >
                <Icon name="360" className="text-current" size={18} /> 360°
                Walkthrough
              </button>
              <button
                className="px-4 py-2 rounded bg-[#1d4ed8] text-white text-[12px] leading-[16px] tracking-[0.04em] font-semibold flex items-center gap-2"
                type="button"
                onClick={() => {
                  if (tourVideoUrl) setMediaPlaying(true);
                  else notify("A 4K video asset has not been attached.");
                }}
              >
                <Icon name="videocam" className="text-current" size={18} /> 4K
                Cinema Reel
              </button>
            </div>
          </div>

          <div
            className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group"
            id="virtual-tour"
          >
            <Image
              alt={displayValue(
                data.virtualTourTitle,
                "Virtual Walkthrough Reel",
              )}
              className="object-cover opacity-85 group-hover:scale-102 transition-transform duration-700"
              src={virtualTourImage}
              fill
              sizes="100vw"
              unoptimized
            />
            {mediaPlaying && tourVideoUrl && (
              <video
                id="virtual-tour-video"
                className="absolute inset-0 h-full w-full object-cover"
                src={tourVideoUrl}
                poster={virtualTourImage}
                controls
                autoPlay
                onEnded={() => setMediaPlaying(false)}
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Play virtual walkthrough"
                className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-[#1a1c1f] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
                type="button"
                onClick={() => {
                  if (tourVideoUrl) setMediaPlaying(true);
                  else
                    notify("A virtual-tour video asset has not been attached.");
                }}
              >
                <Icon
                  name="play_arrow"
                  className="ml-1 text-[#1d4ed8]"
                  size={40}
                />
              </button>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex items-center justify-between text-white">
              <div>
                <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold uppercase tracking-wider text-[#e5c18f]">
                  Featured Architectural Reel
                </span>
                <h3 className="text-[22px] leading-[30px] font-semibold">
                  {displayValue(
                    data.virtualTourTitle,
                    "Villa Solstice: The Architecture of Light",
                  )}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-[11px] leading-[14px] tracking-[0.08em] font-bold">
                <span>
                  Runtime: {displayValue(data.virtualTourRuntime, "03:42")}
                </span>
                <span>
                  Spatial Audio:{" "}
                  {displayValue(data.virtualTourAudio, "Dolby Atmos 5.1")}
                </span>
                <button
                  aria-label="Fullscreen"
                  className="p-2 hover:bg-white/20 rounded-lg"
                  type="button"
                  onClick={() => {
                    const video = document.getElementById("virtual-tour-video");
                    const target =
                      video ?? document.getElementById("virtual-tour");
                    target?.requestFullscreen?.();
                  }}
                >
                  <Icon name="fullscreen" className="text-current" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. NEIGHBORHOOD PROFILES & ENCLAVE ARCHIVES (Feature Group H)             */}
      {/* ========================================================================= */}
      {neighborhoods.length > 0 && (
        <section
          className="py-24 bg-[#ffffff] border-b border-[#c4c5d7]/30"
          id="neighborhoods"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="max-w-2xl mb-16">
              <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#006a63] uppercase font-bold block mb-1">
                Enclave Intelligence
              </span>
              <h2 className="font-['EB_Garamond',serif] text-[48px] leading-[56px] tracking-[-0.015em] font-normal text-[#1a1c1f]">
                Prime District Architectural Archives
              </h2>
              <p className="text-[16px] leading-[26px] text-[#434655] mt-2">
                Rigorous macro and micro market metrics, zoning codes, and
                lifestyle attributes across America’s most competitive enclaves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {neighborhoods.map((n, idx) => (
                <div
                  key={idx}
                  className="bg-[#f3f3f7] border border-[#c4c5d7]/40 rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-all"
                >
                  <div className="h-52 overflow-hidden relative">
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                    {Boolean(n.badge) && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1a1c1f] text-white text-[11px] leading-[14px] tracking-[0.08em] font-bold rounded">
                        {displayValue(n.badge)}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[28px] leading-[36px] tracking-[-0.01em] font-semibold text-[#1a1c1f] mb-2">
                        {displayValue(n.name)}
                      </h3>
                      <p className="text-[14px] leading-[22px] text-[#434655] mb-4">
                        {displayValue(n.description)}
                      </p>
                      <div className="space-y-2 py-2 border-t border-[#c4c5d7]/30 text-[14px] leading-[22px]">
                        <div className="flex justify-between">
                          <span className="text-[#747686]">
                            Median Sale Price
                          </span>
                          <span className="font-semibold text-[#1a1c1f]">
                            {displayValue(n.medianPrice)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#747686]">
                            Annual Price Velocity
                          </span>
                          <span className="font-semibold text-[#006a63]">
                            {displayValue(n.velocity)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#747686]">
                            Walk &amp; Transit Score
                          </span>
                          <span className="font-semibold text-[#1a1c1f]">
                            {displayValue(n.mobilityScore)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#747686]">
                            Michelin Stars Density
                          </span>
                          <span className="font-semibold text-[#1a1c1f]">
                            {displayValue(n.culinaryDensity)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      className="mt-4 text-[#0037b0] text-[12px] leading-[16px] tracking-[0.04em] font-semibold hover:underline flex items-center gap-1"
                      href="#properties"
                    >
                      {displayValue(n.linkText, "Explore Properties")}{" "}
                      <Icon
                        name="arrow_forward"
                        className="text-current"
                        size={16}
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 9. FINANCIAL TOOLS: MORTGAGE & AFFORDABILITY (Feature Group L)            */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#f3f3f7] border-b border-[#c4c5d7]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#0037b0] uppercase font-bold block mb-1">
              Capital Advisory &amp; Instruments
            </span>
            <h2 className="font-['EB_Garamond',serif] text-[48px] leading-[56px] tracking-[-0.015em] font-normal text-[#1a1c1f]">
              Interactive Portfolio Carrying Cost Calculator
            </h2>
            <p className="text-[16px] leading-[26px] text-[#434655] mt-2">
              Model debt structures, jumbo private mortgage interest rates, and
              real-time municipal tax obligations for prime domestic holdings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-[#ffffff] p-8 rounded-xl border border-[#c4c5d7]/40 shadow-sm space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#1a1c1f]">
                    Property Purchase Price
                  </label>
                  <span className="text-[18px] leading-[26px] font-bold text-[#0037b0]">
                    ${purchasePrice.toLocaleString("en-US")}
                  </span>
                </div>
                <input
                  className="w-full accent-[#1d4ed8] h-2 bg-[#e8e8ec] rounded-lg cursor-pointer"
                  max="30000000"
                  min="1000000"
                  step="250000"
                  type="range"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                />
                <div className="flex justify-between text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] mt-1">
                  <span>$1.0M</span>
                  <span>$15.0M</span>
                  <span>$30.0M+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#1a1c1f]">
                    Down Payment ({downPaymentPercent}%)
                  </label>
                  <span className="text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                    ${Math.round(downPaymentAmount).toLocaleString("en-US")}
                  </span>
                </div>
                <input
                  className="w-full accent-[#1d4ed8] h-2 bg-[#e8e8ec] rounded-lg cursor-pointer"
                  max="60"
                  min="10"
                  step="5"
                  type="range"
                  value={downPaymentPercent}
                  onChange={(e) =>
                    setDownPaymentPercent(Number(e.target.value))
                  }
                />
                <div className="flex justify-between text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] mt-1">
                  <span>10%</span>
                  <span>30%</span>
                  <span>50%+</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                    Interest Rate (Jumbo Fixed)
                  </label>
                  <input
                    className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f]"
                    type="text"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                    Loan Term
                  </label>
                  <select
                    className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f] cursor-pointer"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  >
                    <option>30 Years Fixed</option>
                    <option>15 Years Fixed</option>
                    <option>10/1 ARM Jumbo</option>
                    <option>Interest-Only 7/1</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-[#c4c5d7]/30 flex items-center justify-between text-[14px] leading-[22px] text-[#747686]">
                <span>
                  Facilitated by Complete Financial Advisory • NMLS #829104
                </span>
                <button
                  className="text-[#0037b0] hover:underline text-[12px] leading-[16px] tracking-[0.04em] font-semibold"
                  type="button"
                  onClick={downloadAmortizationSchedule}
                >
                  Download Amortization Schedule
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#ffffff] p-8 rounded-xl border border-[#c4c5d7]/40 shadow-sm">
              <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] uppercase block mb-1">
                Estimated Monthly Obligation
              </span>
              <div className="font-['EB_Garamond',serif] text-[48px] leading-[56px] text-[#1a1c1f] leading-none mb-4">
                ${totalMonthly.toLocaleString("en-US")}{" "}
                <span className="text-[12px] leading-[16px] text-[#747686] font-normal">
                  / month
                </span>
              </div>

              <div className="space-y-3 py-4 border-y border-[#c4c5d7]/30 text-[14px] leading-[22px]">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#1d4ed8]" />{" "}
                    Principal &amp; Interest
                  </span>
                  <span className="font-semibold text-[#1a1c1f]">
                    $
                    {Math.round(monthlyPrincipalInterest).toLocaleString(
                      "en-US",
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#006a63]" />{" "}
                    Property Taxes (1.25% Est.)
                  </span>
                  <span className="font-semibold text-[#1a1c1f]">
                    ${estimatedMonthlyTaxes.toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#594019]" /> Private
                    Hazard Insurance
                  </span>
                  <span className="font-semibold text-[#1a1c1f]">
                    ${estimatedInsurance.toLocaleString("en-US")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#747686]" /> HOA /
                    District Assessments
                  </span>
                  <span className="font-semibold text-[#1a1c1f]">
                    ${estimatedHoa.toLocaleString("en-US")}
                  </span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  className="w-full py-3 bg-[#1a1c1f] text-white hover:bg-[#1d4ed8] rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all shadow"
                  type="button"
                  onClick={() => requestInquiry("Private jumbo pre-approval")}
                >
                  Apply for Private Jumbo Pre-Approval
                </button>
                <p className="text-center text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686]">
                  *Estimates are for modeling purposes only. Rates subject to
                  underwriting approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. VALUATION & SELLER ADVISORY FLOW (Feature Group M & K)                */}
      {/* ========================================================================= */}
      <section
        className="py-24 bg-[#ffffff] border-b border-[#c4c5d7]/30"
        id="valuation"
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="bg-[#f3f3f7] rounded-2xl border border-[#c4c5d7]/50 p-12 overflow-hidden relative">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#594019] uppercase font-bold block mb-1">
                Confidential Asset Valuation
              </span>
              <h2 className="font-['EB_Garamond',serif] text-[48px] leading-[56px] tracking-[-0.015em] font-normal text-[#1a1c1f]">
                Request an Instant Property Valuation &amp; Advisory Dossier
              </h2>
              <p className="text-[16px] leading-[26px] text-[#434655] mt-2">
                Leverage proprietary private comps, institutional buyer appetite
                indices, and geospatial liquidity models to discover your
                holding&apos;s true market clearing price.
              </p>
            </div>

            <form
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              id="valuation-form"
              onSubmit={(event) => {
                event.preventDefault();
                notify(
                  "Request validated locally. Connect a brokerage endpoint to deliver it.",
                );
                event.currentTarget.reset();
                setInquirySubject("");
              }}
            >
              {inquirySubject && (
                <p className="md:col-span-3 rounded bg-white px-3 py-2 text-[12px]">
                  Request for: <strong>{inquirySubject}</strong>
                </p>
              )}
              <div>
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Property Street Address
                </label>
                <input
                  className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f]"
                  placeholder="e.g. 740 Park Avenue #12A"
                  type="text"
                  name="propertyAddress"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Property Typology
                </label>
                <select
                  className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f] cursor-pointer"
                  defaultValue="Penthouse / Upper Duplex"
                >
                  <option>Penthouse / Upper Duplex</option>
                  <option>Detached Single-Family Estate</option>
                  <option>Waterfront Compound</option>
                  <option>Historic Townhouse / Brownstone</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Estimated Gross Area (Sq.Ft)
                </label>
                <input
                  className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f]"
                  placeholder="e.g. 4,500"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Bedrooms &amp; Bathrooms
                </label>
                <input
                  className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f]"
                  placeholder="e.g. 4 Beds, 5 Baths"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Full Legal Name
                </label>
                <input
                  className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f]"
                  placeholder="e.g. Harrison Vance"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#434655] uppercase mb-1.5">
                  Confidential Contact (Email or Phone)
                </label>
                <input
                  className="w-full h-12 px-3 bg-[#ffffff] border border-[#c4c5d7]/60 rounded text-[14px] leading-[22px] text-[#1a1c1f]"
                  placeholder="e.g. h.vance@capital.com"
                  type="text"
                  name="contact"
                  required
                />
              </div>
              <div className="md:col-span-3 pt-2">
                <button
                  className="px-8 py-3.5 bg-[#1a1c1f] hover:bg-[#0037b0] text-white rounded text-[12px] leading-[16px] tracking-[0.04em] font-semibold transition-all shadow-md"
                  type="submit"
                >
                  Request Confidential Valuation Report
                </button>
                <span className="ml-4 text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686]">
                  Strict Non-Disclosure Guarantee • No Public Record Tracing
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. ADVISORY DIRECTORATE & LEAD ADVISORS (Feature Group E)                 */}
      {/* ========================================================================= */}
      {advisors.length > 0 && (
        <section
          className="py-24 bg-[#ffffff] border-b border-[#c4c5d7]/30"
          id="advisors"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#0037b0] uppercase font-bold block mb-1">
                  Advisory Directorate
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[48px] leading-[56px] tracking-[-0.015em] font-normal text-[#1a1c1f]">
                  Senior Capital &amp; Brokerage Partners
                </h2>
              </div>
              <a
                className="mt-4 md:mt-0 text-[#0037b0] hover:underline text-[12px] leading-[16px] tracking-[0.04em] font-semibold flex items-center gap-1"
                href="#advisors"
              >
                View All {advisors.length} Licensed Private Advisors{" "}
                <Icon name="arrow_forward" className="text-current" size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisors.map((adv, idx) => (
                <div
                  key={idx}
                  className="bg-[#ffffff] border border-[#c4c5d7]/40 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#e8e8ec] shrink-0">
                        <Image
                          alt={displayValue(adv.name)}
                          className="w-full h-full object-cover"
                          src={String(
                            displayValue(
                              adv.imageUrl,
                              placeholderAdvisors[0].imageUrl,
                            ),
                          )}
                          width={80}
                          height={80}
                          unoptimized
                        />
                      </div>
                      <div>
                        <h3 className="text-[18px] leading-[26px] font-semibold text-[#1a1c1f]">
                          {displayValue(adv.name)}
                        </h3>
                        <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] block">
                          {displayValue(adv.role)}
                        </span>
                        <span className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#006a63]">
                          {displayValue(adv.license)}
                        </span>
                      </div>
                    </div>
                    <p className="text-[14px] leading-[22px] text-[#434655] mb-4">
                      {displayValue(adv.bio)}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#c4c5d7]/30 flex items-center justify-between">
                    <a
                      className="text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] hover:text-[#0037b0]"
                      href={`tel:${String(adv.phone ?? "").replace(/[^+\d]/g, "")}`}
                    >
                      {displayValue(adv.phone)}
                    </a>
                    <button
                      className="px-3 py-1.5 border border-[#1a1c1f] rounded text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#1a1c1f] hover:bg-[#1a1c1f] hover:text-white transition-colors"
                      type="button"
                      onClick={() => requestInquiry(displayValue(adv.name))}
                    >
                      Schedule Private Call
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 12. MARKET INSIGHTS & JOURNAL ARTICLES (Feature Group J)                  */}
      {/* ========================================================================= */}
      {articles.length > 0 && (
        <section
          className="py-24 bg-[#f3f3f7] border-b border-[#c4c5d7]/30"
          id="insights"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <span className="text-[11px] leading-[14px] tracking-[0.08em] text-[#594019] uppercase font-bold block mb-1">
                  Market Journal
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[48px] leading-[56px] tracking-[-0.015em] font-normal text-[#1a1c1f]">
                  Intelligence &amp; Architectural Essays
                </h2>
              </div>
              <a
                className="mt-4 md:mt-0 text-[#0037b0] hover:underline text-[12px] leading-[16px] tracking-[0.04em] font-semibold flex items-center gap-1"
                href="#insights"
              >
                Access Complete Research Archive{" "}
                <Icon name="arrow_forward" className="text-current" size={16} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((art, idx) => (
                <article
                  key={idx}
                  className="bg-[#ffffff] border border-[#c4c5d7]/40 rounded-xl overflow-hidden shadow-sm flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      alt={displayValue(art.title)}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      src={String(
                        displayValue(
                          art.imageUrl,
                          placeholderArticles[0].imageUrl,
                        ),
                      )}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686] mb-2">
                        <span>{displayValue(art.category)}</span> •{" "}
                        <span>{displayValue(art.readTime)}</span>
                      </div>
                      <h3 className="text-[18px] leading-[26px] font-semibold text-[#1a1c1f] mb-2 group-hover:text-[#0037b0] transition-colors">
                        {displayValue(art.title)}
                      </h3>
                      <p className="text-[14px] leading-[22px] text-[#434655]">
                        {displayValue(art.excerpt)}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#c4c5d7]/30 mt-4 flex items-center justify-between text-[11px] leading-[14px] tracking-[0.08em] font-bold text-[#747686]">
                      <span>{displayValue(art.author)}</span>
                      <span>{displayValue(art.date)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 13. COMPLIANCE & GLOBAL FOOTER                                            */}
      {/* ========================================================================= */}
      <footer className="bg-[#f3f3f7] border-t border-[#c4c5d7]/30">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 py-24 flex flex-col gap-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-4">
              <a
                className="font-['EB_Garamond',serif] text-[36px] leading-[44px] tracking-[-0.01em] font-medium text-[#1a1c1f] block"
                href="#hero"
              >
                {displayValue(data.companyName, "Complete Estate")}
              </a>
              <p className="text-[#434655] text-[14px] leading-[22px]">
                {displayValue(
                  data.companyDescription,
                  "The premier advisory brokerage dedicated to master developments, signature estates, and institutional private portfolio representation worldwide.",
                )}
              </p>
              <div className="flex items-center gap-3 text-[#434655]">
                <span className="w-8 h-8 rounded border border-[#c4c5d7]/60 flex items-center justify-center font-bold text-[11px] leading-[14px]">
                  MLS
                </span>
                <span className="w-8 h-8 rounded border border-[#c4c5d7]/60 flex items-center justify-center font-bold text-[11px] leading-[14px]">
                  EHO
                </span>
                <span className="w-8 h-8 rounded border border-[#c4c5d7]/60 flex items-center justify-center font-bold text-[11px] leading-[14px]">
                  REBNY
                </span>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h4 className="text-[12px] leading-[16px] tracking-[0.04em] font-semibold uppercase tracking-wider text-[#1a1c1f]">
                  Portfolios
                </h4>
                <ul className="space-y-1.5">
                  <li>
                    <a
                      className="text-[#434655] hover:text-[#1a1c1f] text-[14px] leading-[22px] transition-colors duration-150"
                      href="#properties"
                    >
                      Exclusive Portfolios
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#434655] hover:text-[#1a1c1f] text-[14px] leading-[22px] transition-colors duration-150"
                      href="#developments"
                    >
                      Master Developments
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#434655] hover:text-[#1a1c1f] text-[14px] leading-[22px] transition-colors duration-150"
                      href="#neighborhoods"
                    >
                      Neighborhood Archives
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-[12px] leading-[16px] tracking-[0.04em] font-semibold uppercase tracking-wider text-[#1a1c1f]">
                  Advisory
                </h4>
                <ul className="space-y-1.5">
                  <li>
                    <a
                      className="text-[#434655] hover:text-[#1a1c1f] text-[14px] leading-[22px] transition-colors duration-150"
                      href="#advisors"
                    >
                      Financial Advisory
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#434655] hover:text-[#1a1c1f] text-[14px] leading-[22px] transition-colors duration-150"
                      href="#valuation"
                    >
                      Developer Partner Portal
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#434655] hover:text-[#1a1c1f] text-[14px] leading-[22px] transition-colors duration-150"
                      href="#advisors"
                    >
                      Concierge Client Services
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-[12px] leading-[16px] tracking-[0.04em] font-semibold uppercase tracking-wider text-[#1a1c1f]">
                  Compliance
                </h4>
                <ul className="space-y-1.5">
                  <li>
                    <a
                      className="text-[#434655] hover:text-[#1a1c1f] text-[14px] leading-[22px] transition-colors duration-150"
                      href="#hero"
                    >
                      Fair Housing Notice
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#434655] hover:text-[#1a1c1f] text-[14px] leading-[22px] transition-colors duration-150"
                      href="#hero"
                    >
                      Privacy Disclosures
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-[12px] leading-[16px] tracking-[0.04em] font-semibold uppercase tracking-wider text-[#1a1c1f]">
                  Global Desks
                </h4>
                <ul className="space-y-1 text-[#434655] text-[14px] leading-[22px]">
                  <li>New York • 767 Fifth Ave</li>
                  <li>Los Angeles • Rodeo Dr</li>
                  <li>Miami • Brickell Ave</li>
                  <li>London • Mayfair</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#c4c5d7]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[#747686] text-[14px] leading-[22px]">
            <p className="max-w-4xl text-[11px] leading-[14px] tracking-[0.08em] font-bold leading-relaxed">
              {displayValue(
                data.complianceDisclaimer,
                "© 2025 Complete Estate Master Portfolios LLC. All rights reserved. An Equal Housing Opportunity Brokerage. Licensing: CalDRE #01928374, NYRE #49281723. Financial services facilitated by Complete Financial Advisory NMLS #829104.",
              )}
            </p>
            <div className="flex items-center gap-4 shrink-0 text-[11px] leading-[14px] tracking-[0.08em] font-bold">
              <a className="hover:underline" href="#hero">
                Privacy Policy
              </a>
              <span>•</span>
              <a className="hover:underline" href="#hero">
                Terms of Service
              </a>
              <span>•</span>
              <a className="hover:underline" href="#hero">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
