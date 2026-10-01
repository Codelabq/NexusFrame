"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Compass,
  House,
  MapPin,
  Pin,
  Search,
} from "lucide-react";

type RealEstate03Props = {
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
  currency = "$",
  listingType?: unknown,
): string {
  if (price === undefined || price === null || price === "") return "";
  const num = typeof price === "number" ? price : parseFloat(String(price));
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
    badge: "Exclusive Listing",
    location: "Beacon Hill, Boston",
    price: 5200000,
    currency: "$",
    title: "The Mount Vernon Townhouse",
    description:
      "Constructed in 1842 by architect Asher Benjamin, meticulously preserved with four restored Rumford fireplaces, quarter-sawn white oak parquetry, and an intimate walled brick carriage courtyard.",
    bedrooms: 5,
    bathrooms: 4.5,
    area: 5420,
    areaUnit: "Sq Ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0WwnvD119rdQaiHqUaoxVataxs3MKcPBEFULkXGk518eIZTjZdoEInGDUA2MfZNgW4uUKLkKYkS44pD5hkDphUCXmJ11xgcXpSOWCbQ4RM2MuDnTPoNhX4ake5PXN285BsspD11R-LfazuEl_AGIZn1jMq7VGMCQU_s3oMWL8Al3EeEA9gk-aH5C8wgRzGvFDhrZtU8vS4JL1KVfSfTMYzhZbM_9jUSifoD0eesDeXurfRLjd4iQY",
  },
  {
    id: "prop-2",
    badge: "Private Commission",
    location: "Carmel Highlands, California",
    price: 8950000,
    currency: "$",
    title: "The Ridgecrest Monolith",
    description:
      "An iconic concrete and glass pavilion cantilevered 200 feet over the Pacific headlands. Off-grid geothermal heating, private sea-cove staircase, and bespoke millwork by master joiners.",
    bedrooms: 4,
    bathrooms: 5,
    area: 4850,
    areaUnit: "Sq Ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzniXfAyvl9j5qgveTXLpTyKnInJY9XNFE5X6joSRiOYJP2qJhHrqkSkOZK-FJvLbXa84KsiyN4e0S401ayjJ4ISFIBgqnSQcy4p59X2M5SGGa3FSBgCbny39WUJmv1_UO2ym_e1owyu1plQblzDx5NQxgtIq0GeJB7Nd-VlfbIApDBDW3_e41Dgca8y4qZaz8kmMtEqBz9iRuvbWeypjl53F154u2kA3kLuaoKCk_BTtn5i2L8eYB",
  },
  {
    id: "prop-3",
    badge: "Off-Market Placement",
    location: "West Village, New York",
    price: 6750000,
    currency: "$",
    title: "The Jane Street Atelier",
    description:
      "A full-floor historic industrial loft reimagined by Studio Giancarlo Valle with Calacatta marble hearth and custom unlacquered steel French casements.",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3600,
    areaUnit: "Sq Ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBm-bS4M1G56JNQq7gv5fF0cpi_wZqw3Nje81-NJoYEeYAj8_zYmPz9k3Sv5Nv3Cl34o3ADecxW6lH2MTOo_97_UdS_6GdPwuvQqQz9vcdzCvTBu194hTfyfkPLCiATg8gUZ2Pbre2wuDcP4iOitVNw3DAy4RNG47OWQKQEOQvYwI9noZ_dA8maG36iMY9-AGvx5EPCWW-Cuzkus1bwG4iPi3vr4-k4Bif9tQWqZykK-6-H3Bgp_F97",
  },
  {
    id: "prop-4",
    badge: "Exclusive Listing",
    location: "Mercer Island, Seattle",
    price: 3450000,
    currency: "$",
    title: "The Moss & Cedar Pavilions",
    description:
      "Conceived in 1964 by Paul Kirk FAIA. Fully restored envelope featuring radiant hydronic basalt floors and private 120-foot Lake Washington shoreline deepwater moorage.",
    bedrooms: 4,
    bathrooms: 3,
    area: 3890,
    areaUnit: "Sq Ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5jQP8Y0SSzKwf0LN7y7IgE0L2J1dOjOxFVhP1C4zwZHxyqv7V-nahJErEyvaFuy5_trie6bu2_ZpTK6rScQHZ7uSZ5jcfvNjhO9eiYLvEde_LxZT6LhBXkKSGtxABRJxX1L31cGF4G6qthJqGe_JWfKkcmBgyHpVKLj5O6q2AX-dC_lKrpUcChP-yct321lABxVvQEgNMaG07zjxX6-pqRJ6fijupwWKBQ7CLUpuFAjtaocPuemQG",
  },
  {
    id: "prop-5",
    badge: "Private Commission",
    location: "Pacific Heights, San Francisco",
    price: 12400000,
    currency: "$",
    title: "The Broadway Bel-Air Villa",
    description:
      "Constructed in 1916 by Willis Polk. Features soaring formal salons, private elevator access to all four levels, temperature-controlled 1,200-bottle wine cellar, and rooftop terrace.",
    bedrooms: 6,
    bathrooms: 7,
    area: 7100,
    areaUnit: "Sq Ft",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHXe5j70Wv4SPM7MxxlkSbVN2XVDf-WrSytVlxcU2gad8gMVc_PXCXZpw54lMmCzAVVYbSKLyUM5_xpRv1HD3iza1vOls_uCDV_clQonjeH1yezjNSh1GF4w2PKxLFMHGpCgQOpiulGb3b3uKZtKeimc5jozU5UK1ztjn0_Qj8v3JKzJtfk6bHOUNsm1NXgKj-EgNuuVQRv_S_KBkFq8qVRuxYrArVXnYULrUNWaqc59EPslUqzJsd",
  },
];

const placeholderEnclaves = [
  {
    name: "Beacon Hill",
    holdings: "6 Holdings",
    region: "Boston, Massachusetts • Historic Gaslamp District",
    description:
      "Characterized by Federal period brick facades, English ivy walled gardens, and strict architectural commission oversight.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLAxsVxKunBg5Cb2ornNwPEIDVXKzl5xMlE8lkFv9Kjoy9VTnfZEMXHhMOydK3Vlr3yPj4sDD7umtHIi578_JT_C1pqiiVUVWnw8JuCNH38vKNjlDG6Vb-WSfKobzGZ3N6rSdL_56J5srwNrWvZ_t-qzFvr9DeYTXxS8vPionjj5yaARFFUOK-Vvl_T9nYI6IFiuKhKPDi9Is6Z7s9EXyG9J6ZVjH3x4cgxc7ZOkxP5FqpkywI-jsy",
  },
  {
    name: "West Village",
    holdings: "8 Holdings",
    region: "New York, New York • Historic Maritime Grid",
    description:
      "Bohemian architectural legacy preserved in romantic low-rise brownstones and light-drenched industrial cast-iron ateliers.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyCi0eO9pW5MDdVvKrlJVTQLG41-VAIHCnV8konOJ9rEN9SWEYfTgWKfR4-rl6aGGfFqb9tLvHxbYSGyn8JJzezZnWGBgXO3u38W8I5zMREcRj_KK5vxoXI8j8RS12DP_luJ-B14vlM2yAClCVIMj9anf4Sj3cQ-kCMtfvFhjPmutHkO4M7v9NF6sBGNChAe3OMtyiIJSDd989hH9kP6EDK3Ai65EuP0v6ITklul8FNULSMeD5XzNY",
  },
  {
    name: "Pacific Heights",
    holdings: "5 Holdings",
    region: "San Francisco, California • Ridge Top Estates",
    description:
      "Unrivaled bay panoramas, Gilded Age craftsmanship, and dignified family estates elevated above the marine fog line.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCls7L5OuWDn2-2Bt9ZQ33jv2EgLaUlWcmGJOVG2dsOROfSOalGdkqUcqL9tQdQn5sasxosqINDCjviPDOu-BfWcHMxZJ2mKfGIAcN3XzZzHlx5FvIrbn7hJP6pXFEgFgiUIXCK2pYWlRdDhOLPQbRBOYqsH_8va-qhhX5mMNKS-EIsPg8ijtYoZyfMnW8e5GDYHGlqB26MVbthKWriFwqThK9ZSBnLB7regGEiWHczLlY6A_pDpvZ0",
  },
  {
    name: "Mercer Island",
    holdings: "5 Holdings",
    region: "Seattle, Washington • Lakefront Sanctuary",
    description:
      "Private evergreen sanctuaries pairing Paul Kirk and Roland Terry mid-century modernism with pristine freshwater moorage.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJs2vRgO0zZitcDNK4LOAicwechQlEITwg-ShI--EAPbUNodoX9kl1YX__S4yTfIzz08q08dEDL96gIR9wlu1OS6X8cPlERXw09VWpK7E44QDid8OeZKbzhzxOyiRLU_6d8OqxHT6L_igkCyNJvpqJsu-w1s5THYZqhIFk5tSs3a_mgk7Ai9DJtV9Dko4VjwCWO2u03lciTLlJrWUNDxWuNmJk6sqXi355xgNKXkuEurwwFNH3x-bp",
  },
];

const placeholderAdvisors = [
  {
    name: "Helene Stone",
    role: "Founding Partner & Private Wealth Lead",
    bio: "Former director of acquisitions at Sotheby's International Realty. Specializes in generational family trusts, heritage estates, and cross-border capital placement.",
    activeHoldings: "4 Residences",
    email: "h.stone@aureliastone.com",
    phone: "+1 (212) 840-1920",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHfUEdArWJuzWeTzLF3xzvaKlNNz8Hr1jRZ5LtBRoaR8urgrtgg42C6-J9FKygLIqWS6Qsgn5X5603fKNrpB4GOv5Vk9YwmEIQQzQoA0VC8lncWj_KZIfUNGwhANfu0J1FqZMGKXHzNV35sVadY1gL75rdBkjHjk81h48-CGLedb1l3HaKtFoT5ZTVGIwhaBu6D6xMNFlGfMfxNe_atNkAsXza9KIt9MUKTJDppaNqyw6kYwja-3kq",
  },
  {
    name: "Julian Aurelia, AIA",
    role: "Founding Partner & Head of Provenance",
    bio: "Trained at Columbia GSAPP. Over twenty years auditing architectural integrity and leading historic preservation campaigns for landmark residential structures.",
    activeHoldings: "5 Residences",
    email: "j.aurelia@aureliastone.com",
    phone: "+1 (617) 542-8811",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXdIp8WJcR2NYDkw62mQyZ56yNngGdQ5Dbeg7UAHHwYjE-6WEqcYVoSdQ-7mxzwDCYSkztNIXQq8irc2C81be-zmua0ejKphbazNGNC7dClatBItikiX6ZZ6ox4mrEnB01zi_6XdNpO2b07i2yGiho3b7aHzD-iUm1jjDV6nl0whmQyvmBQr45MO5eTANWuLXHZwcrQty1bU0FKuGZgoaKBml_uOJ5JwSJfFSoGTQqv1VGKq7JNY8f",
  },
  {
    name: "Clara Sterling",
    role: "Director, West Coast & Coastal Modernism",
    bio: "Specializing in Pacific mid-century post-and-beam masterworks and modern oceanfront sanctuaries across Carmel, Big Sur, and Mercer Island.",
    activeHoldings: "3 Residences",
    email: "c.sterling@aureliastone.com",
    phone: "+1 (415) 392-7740",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAu6SMelpFBXRx1r9h86fzw1qrtiuqzpPgvMQ4jGTMJ4jAVXxEs_BQNF31yG9c91DhoQA_3RThN5fuJi2omp59KWylHYvNDRtzpV2wsqWZe_c43Lx23mB6XJ8sSlA0fjRJPSoxvEeTj8QnkR_nrJxtmJb00VRtEh2pS7mzEwcPZ5k89148iThY1jV9floPmCb6MhwYpwl504zV3z6IpgKcLAyw75SnsUws5rOdkpDQyWayeajx3O1HM",
  },
];

const placeholderJournal = [
  {
    category: "Essay • Architectural Theory",
    date: "October 14, 2024",
    readTime: "8 Min Read",
    title:
      "The Revival of Mid-Century Post & Beam: Why Structural Honesty Endures",
    excerpt:
      "In an era dominated by superficial veneers and speculative development, we explore why true architectural connoisseurs are gravitating back to the visible joinery, cantilevered timber, and spatial clarity pioneered in the Pacific Northwest during the 1960s.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMZnF1lhKxjy7kURWiPp6VM3vRUrw5bE8HyC0VRkogMbyMJdau4OQvonXtFQbbRj6qrEl0gBKcb8YcCrW6yvuf0SKF4ZbxshLphOdNiG0EzOKxMQGw6M4zfeLoqlND0qh66s72RLitZrkIF_APhHB9smTkkcI1MWy20Pu9vRZ0EcIedpsGygXFcaRh37Q8ghQXRamp5HNkPSN2Blxavxx3eqEaoTyxY0Ye8U7PEC3lubfOjtNZDIuw",
    featured: true,
  },
  {
    category: "Spatial Acoustics",
    date: "September 28, 2024",
    readTime: "5 min",
    title: "Lighting and Scale: The Architecture of Serenity",
    excerpt:
      "How calculated clerestory apertures and limestone surface roughness modulate residential tranquility and acoustic dampening.",
    featured: false,
  },
  {
    category: "Market Insights",
    date: "August 15, 2024",
    readTime: "7 min",
    title: "Quarterly Market Perspectives: The Flight to Provenance",
    excerpt:
      "Analyzing private sales data across Manhattan, Boston, and San Francisco: why verified historical pedigree outperforms speculative luxury new-builds by 34%.",
    featured: false,
  },
];

const placeholderPillars = [
  {
    num: "01. Archival Provenance",
    text: "Every residence admitted to our monograph undergoes rigorous historical provenance research, construction audits, and environmental assessment before being introduced to our private syndicate.",
  },
  {
    num: "02. Discretion & Quiet Capital",
    text: "We reject high-density open portals and mass-market public display. More than half of our assignments transact quietly between verified principals without ever surfacing on transactional marketplaces.",
  },
  {
    num: "03. Architectural Integrity",
    text: "We champion buildings designed by canonical masters and progressive contemporary icons alike—focusing on proportion, light quality, and enduring materiality over transient speculative trends.",
  },
];

const placeholderMapPins = [
  {
    title: "Beacon Hill Cluster",
    ref: "Ref. AS-0814 • $5,200,000",
    sub: "Mount Vernon Historic Corridor",
    position: "top-left",
  },
  {
    title: "Off-Market Sanctuary #4",
    ref: "$8,950,000",
    sub: "Pacific Headlands Monolith",
    position: "center",
  },
  {
    title: "West Village Atelier",
    ref: "Ref. AS-0992 • $6,750,000",
    sub: "Jane & Greenwich Intersection",
    position: "bottom-right",
  },
];

const placeholderData: Record<string, unknown> = {
  companyName: "AURELIA & STONE",
  folioEdition: "Folio No. XXIV — Autumn Edition",
  folioSubtitle: "Private Advisory & Architecture",
  portfolioValuation: "$482,000,000",
  portfolioHoldingsNote:
    "24 private holdings discreetly placed across North American historic and modernist corridors.",
  heroTitle: "Architecture as Living Art.",
  heroItalicTitle: "Curated Residences",
  heroDescription:
    "We represent domestic environments constructed with uncompromising craftsmanship, provenance, and tactile permanence. Transcending conventional brokerage, Aurelia & Stone operates as a private curatorial house for discerning architectural custodians.",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA7DDsmK2lnVMk7KwXEPLZXZwuMuHTEI2AK7e7yzmxpgT5Kxl5MX_c9CGT66_e6DqO_TpeNivGoMpRpRyQ9nzNd8EyE0tPLw4_2EIPguDhNLYSNdZ9oF-A1Jf2rvvHYPeYIK4YMzv80Xuwp77rkyBIB6Ky1YS8jsZkK9EkcVlSolIucfkc-SHiE_ptjAe3fH-Am7JqnG7Eb6J1DqjNi-iBSIirCOil68cGnFZ2AdXuhg2Mkh2v0CSXx",
  heroFeaturedTitle: "The Glass Pavilion, Big Sur",
  heroFeaturedDescription:
    "Designed by Olson Kundig Associates. Raw cast concrete, unlacquered bronze hardware, and framed panoramic horizon vistas.",
  heroFeaturedPrice: "$18,500,000",
  manifestoChapter: "Chapter I — Our Agency Ethos",
  manifestoTitle: "We do not sell properties. We transfer stewardship.",
  manifestoText:
    "Established in 2012 by architectural historian Julian Aurelia and private equity advisor Helene Stone, our firm exists at the intersection of architectural heritage, private wealth stewardship, and archival representation.",
  retentionRate: "98.4%",
  offMarketRate: "64% of Annual Volume",
  foundersImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBRuFaa13QumjNLiDpnIRsbIhKSLaUsJbX20lRQm4wqTeZlyz7b7HPRNXuL7Un-aUeFszOSTthB0BzneCtuded1rBdLLZ-paXBA_wveRp2IUb46dV23MLqwvMwAGOadSNSObn73LNdIa7GniPFGeoT5LmOM7qO6eBn5okgSk4h7pKmGbN1bX093KWrZHbqDuw0PE4OqGqU-EkbM-l9b--UVID3vwBJwJPZ8oKa7nyG67w8NLG4KnDXF",
  foundersCaption:
    "Julian Aurelia and Helene Stone at the Mayfair Study, 2024.",
  pillars: placeholderPillars,
  properties: placeholderProperties,
  enclaves: placeholderEnclaves,
  mapImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3XZo2XP8wq7l1D-cfRJRzNPGoiWZuAgLUSpNyjhfjI6pKqpq6FMGImUGg3uW1JXsVhIPiIbQqIuW8X_r--9LAB4KwHe3--b8iFCqv1Y87t0EqJTlh0iXWl0QyAZxJV-gAjEMY-cJ7RUAQxsqHbreieV26sudhAulVZUB024-ewT4WiynUixNerMHAH1GNd0u0L9C7hsl8bJNHCoggU7oXaTCrtTb5CNIQHsOZYqdkzoKaVtWsynlG",
  mapPins: placeholderMapPins,
  advisorsTitle: "Distinguished Partners & Architectural Historians",
  advisorsSubtitle:
    "Our advisors do not operate on high-volume commercial targets. Each principal retains a deliberate maximum of five concurrent properties to provide deep historical context and uncompromised personal counsel.",
  advisors: placeholderAdvisors,
  journalArticles: placeholderJournal,
  atelierBoston: "42 Arlington Street, Boston, MA 02116",
  atelierNewYork: "112 Mercer Street, New York, NY 10012",
  atelierSanFrancisco: "2400 Pacific Avenue, San Francisco, CA 94115",
};

const lucideIconMap = {
  bookmark: Bookmark,
  location_on: MapPin,
  explore: Compass,
  arrow_forward: ArrowRight,
  north_east: ArrowUpRight,
  home: House,
  push_pin: MapPin,
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

export default function RealEstate03({
  resolvedData,
}: RealEstate03Props) {
  const data = normalizeTemplateData(resolvedData);

  const properties = (
    Array.isArray(data.properties) && data.properties.length > 0
      ? data.properties
      : placeholderProperties
  ) as Record<string, any>[];

  const enclaves = (
    Array.isArray(data.enclaves) && data.enclaves.length > 0
      ? data.enclaves
      : placeholderEnclaves
  ) as Record<string, any>[];

  const advisors = (
    Array.isArray(data.advisors) && data.advisors.length > 0
      ? data.advisors
      : placeholderAdvisors
  ) as Record<string, any>[];

  const journalArticles = (
    Array.isArray(data.journalArticles) && data.journalArticles.length > 0
      ? data.journalArticles
      : placeholderJournal
  ) as Record<string, any>[];

  const pillars = (
    Array.isArray(data.pillars) && data.pillars.length > 0
      ? data.pillars
      : placeholderPillars
  ) as Record<string, any>[];

  const heroImage = displayValue(
    data.heroImage,
    placeholderData.heroImage as string,
  );
  const foundersImage = displayValue(
    data.foundersImage,
    placeholderData.foundersImage as string,
  );
  const mapImage = displayValue(
    data.mapImage,
    placeholderData.mapImage as string,
  );

  const featuredArticle =
    journalArticles.find((a) => a.featured) || journalArticles[0];
  const secondaryArticles = journalArticles.filter(
    (a) => a !== featuredArticle,
  );

  return (
    <div className="bg-[#fdf9f2] text-[#1c1c18] antialiased font-['Manrope',sans-serif] text-[1rem] leading-[1.6] selection:bg-[#e1c297] selection:text-[#1c1c18]">
      <style>{``}</style>

      {/* ========================================================================= */}
      {/* 1. TOP NAVIGATION BAR */}
      {/* ========================================================================= */}
      <header className="w-full bg-[#fdf9f2] border-b border-[#c7c7bf] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 w-full">
          <a
            className="font-['EB_Garamond',serif] text-[2rem] leading-[1.25] tracking-wider text-[#020302] uppercase transition-colors duration-200"
            href="#"
          >
            {displayValue(data.companyName, "AURELIA & STONE")}
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            <a
              className="text-[#020302] border-b border-[#020302] pb-1 text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase transition-colors duration-200"
              href="#properties"
            >
              Properties
            </a>
            <a
              className="text-[#464741] hover:text-[#020302] transition-colors duration-200 pb-1 text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase"
              href="#neighborhoods"
            >
              Neighborhoods
            </a>
            <a
              className="text-[#464741] hover:text-[#020302] transition-colors duration-200 pb-1 text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase"
              href="#agency"
            >
              Agency &amp; Advisors
            </a>
            <a
              className="text-[#464741] hover:text-[#020302] transition-colors duration-200 pb-1 text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase"
              href="#journal"
            >
              Journal
            </a>
            <a
              className="text-[#464741] hover:text-[#020302] transition-colors duration-200 pb-1 text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase"
              href="#inquiry"
            >
              Private Inquiries
            </a>
          </nav>

          <div className="flex items-center space-x-5">
            <button
              aria-label="Saved Residences"
              className="text-[#464741] hover:text-[#020302] transition-colors duration-200 p-1"
              title="Saved Residences"
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
              className="hidden sm:inline-block text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase text-[#464741] hover:text-[#020302] transition-colors duration-200"
              href="#client-portal"
            >
              Client Portal
            </a>
            <a
              className="bg-[#1d1d1b] text-[#ffffff] text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase px-5 py-3 hover:bg-[#464741] transition-colors duration-200"
              href="#inquiry"
            >
              Request Dossier
            </a>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. EDITORIAL HERO SECTION & PROPERTY SEARCH */}
      {/* ========================================================================= */}
      <section className="relative bg-[#fdf9f2] pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between border-b border-[#c7c7bf] pb-2 mb-7">
            <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase text-[#725b37]">
              {displayValue(
                data.folioEdition,
                "Folio No. XXIV — Autumn Edition",
              )}
            </span>
            <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741]">
              {displayValue(
                data.folioSubtitle,
                "Private Advisory & Architecture",
              )}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-8">
              <h1 className="font-['EB_Garamond',serif] text-[4rem] leading-[1.1] text-[#020302] tracking-[-0.02em] mb-4">
                {displayValue(data.heroTitle, "Architecture as Living Art.")}
                <br />
                <span className="italic font-normal text-[#725b37]">
                  {displayValue(data.heroItalicTitle, "Curated Residences")}
                </span>{" "}
                of Distinction.
              </h1>
              <p className="text-[1.125rem] leading-[1.65] text-[#464741] max-w-2xl">
                {displayValue(
                  data.heroDescription,
                  "We represent domestic environments constructed with uncompromising craftsmanship, provenance, and tactile permanence. Transcending conventional brokerage, Aurelia & Stone operates as a private curatorial house for discerning architectural custodians.",
                )}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end lg:pl-4 pt-4 lg:pt-0">
              <div className="p-4 bg-[#f7f3ec] border-l-2 border-[#725b37]">
                <p className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] mb-1 uppercase">
                  Current Portfolio Valuations
                </p>
                <p className="font-['EB_Garamond',serif] text-[1.5rem] leading-[1.3] text-[#020302] mb-1">
                  {displayValue(data.portfolioValuation, "$482,000,000")}
                </p>
                <p className="text-[0.875rem] leading-[1.5] text-[#464741]">
                  {displayValue(
                    data.portfolioHoldingsNote,
                    "24 private holdings discreetly placed across North American historic and modernist corridors.",
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full mb-12">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#f1ede6] relative">
              <Image
                alt="Modernist architectural residence"
                className="object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                src={heroImage}
                fill
                sizes="100vw"
                unoptimized
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 right-12 bg-[#fdf9f2] p-7 border border-[#c7c7bf]">
              <div className="flex items-center space-x-2 text-[#725b37] mb-2">
                <Icon
                  name="location_on"
                  className="text-[#725b37]"
                  size={14}
                  strokeWidth={2.2}
                />
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
                  {displayValue(
                    data.heroFeaturedTitle,
                    "The Glass Pavilion, Big Sur",
                  )}
                </span>
              </div>
              <p className="text-[0.875rem] leading-[1.5] text-[#464741] mb-3">
                {displayValue(
                  data.heroFeaturedDescription,
                  "Designed by Olson Kundig Associates. Raw cast concrete, unlacquered bronze hardware, and framed panoramic horizon vistas.",
                )}
              </p>
              <div className="flex justify-between items-center text-[#020302] pt-2 border-t border-[#c7c7bf]">
                <span className="font-['EB_Garamond',serif] text-[1.5rem] leading-[1.3]">
                  {displayValue(data.heroFeaturedPrice, "$18,500,000")}
                </span>
                <a
                  className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase underline underline-offset-4 hover:text-[#725b37]"
                  href="#inquiry"
                >
                  View Private Plate
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#f7f3ec] p-7 border border-[#c7c7bf]">
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 items-end">
              <div className="flex flex-col">
                <label
                  className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                  htmlFor="search-location"
                >
                  Primary Enclave / City
                </label>
                <div className="relative flex items-center border-b border-[#c7c7bf] focus-within:border-[#020302] pb-2">
                  <input
                    className="w-full bg-transparent border-0 p-0 text-[1rem] leading-[1.6] text-[#020302] placeholder-[#777771] focus:ring-0 focus:outline-none"
                    id="search-location"
                    placeholder="e.g. West Village, Beacon Hill"
                    type="text"
                  />
                  <Icon
                    name="explore"
                    className="text-[#777771] ml-2"
                    size={20}
                    strokeWidth={2.2}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                  htmlFor="search-type"
                >
                  Architectural Archetype
                </label>
                <div className="relative border-b border-[#c7c7bf] focus-within:border-[#020302] pb-2">
                  <select
                    className="w-full bg-transparent border-0 p-0 text-[1rem] leading-[1.6] text-[#020302] focus:ring-0 focus:outline-none cursor-pointer"
                    id="search-type"
                    defaultValue=""
                  >
                    <option value="">All Architectural Typologies</option>
                    <option value="historic">
                      Historic Brownstone &amp; Townhouse
                    </option>
                    <option value="modernist">
                      Modernist Glass &amp; Concrete Pavilion
                    </option>
                    <option value="coastal">
                      Coastal Sanctuary &amp; Compound
                    </option>
                    <option value="penthouse">
                      Full-Floor Penthouse Residence
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                  htmlFor="search-range"
                >
                  Capital Bracket
                </label>
                <div className="relative border-b border-[#c7c7bf] focus-within:border-[#020302] pb-2">
                  <select
                    className="w-full bg-transparent border-0 p-0 text-[1rem] leading-[1.6] text-[#020302] focus:ring-0 focus:outline-none cursor-pointer"
                    id="search-range"
                    defaultValue=""
                  >
                    <option value="">Any Capital Allocation</option>
                    <option value="tier1">$2,500,000 — $5,000,000</option>
                    <option value="tier2">$5,000,000 — $10,000,000</option>
                    <option value="tier3">$10,000,000 — $25,000,000</option>
                    <option value="tier4">$25,000,000+</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  className="w-full bg-[#1d1d1b] text-[#ffffff] text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase py-3 px-6 hover:bg-[#464741] transition-colors duration-200 flex items-center justify-center space-x-2"
                  type="button"
                >
                  <span>Filter Monograph</span>
                  <Icon
                    name="arrow_forward"
                    className="text-[#ffffff]"
                    size={18}
                    strokeWidth={2.2}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. AGENCY PROFILE & MANIFESTO SECTION */}
      {/* ========================================================================= */}
      <section
        className="py-32 bg-[#fdf9f2] border-t border-[#c7c7bf]"
        id="agency"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block mb-2">
                {displayValue(
                  data.manifestoChapter,
                  "Chapter I — Our Agency Ethos",
                )}
              </span>
              <h2 className="font-['EB_Garamond',serif] text-[2.75rem] leading-[1.2] tracking-[-0.015em] text-[#020302] mb-4">
                {displayValue(
                  data.manifestoTitle,
                  "We do not sell properties. We transfer stewardship.",
                )}
              </h2>
              <div className="w-16 h-[1px] bg-[#725b37] mb-4" />
              <p className="text-[1rem] leading-[1.6] text-[#464741] mb-4">
                {displayValue(
                  data.manifestoText,
                  "Established in 2012 by architectural historian Julian Aurelia and private equity advisor Helene Stone, our firm exists at the intersection of architectural heritage, private wealth stewardship, and archival representation.",
                )}
              </p>
              <div className="border-y border-[#c7c7bf] py-2 mt-4 space-y-2">
                <div className="flex justify-between items-center text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
                  <span className="text-[#464741]">
                    Advisory Retention Rate
                  </span>
                  <span className="text-[#020302]">
                    {displayValue(data.retentionRate, "98.4%")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
                  <span className="text-[#464741]">
                    Private Off-Market Placements
                  </span>
                  <span className="text-[#020302]">
                    {displayValue(data.offMarketRate, "64% of Annual Volume")}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="aspect-[4/5] bg-[#f1ede6] overflow-hidden border border-[#c7c7bf] relative">
                <Image
                  alt="Founding Partners"
                  className="object-cover grayscale-[30%]"
                  src={foundersImage}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <p className="text-[0.875rem] leading-[1.5] text-[#464741] mt-3 italic text-center">
                {displayValue(
                  data.foundersCaption,
                  "Julian Aurelia and Helene Stone at the Mayfair Study, 2024.",
                )}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-7">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={idx > 0 ? "pt-4 border-t border-[#c7c7bf]" : ""}
                >
                  <span className="font-['EB_Garamond',serif] text-[1.5rem] leading-[1.3] text-[#020302] block mb-1">
                    {displayValue(pillar.num)}
                  </span>
                  <p className="text-[0.875rem] leading-[1.5] text-[#464741] leading-relaxed">
                    {displayValue(pillar.text)}
                  </p>
                </div>
              ))}
              <div className="pt-4">
                <a
                  className="inline-flex items-center space-x-2 text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] uppercase hover:text-[#725b37] pb-1 border-b border-[#020302]"
                  href="#inquiry"
                >
                  <span>Read The Full Monograph Manifesto</span>
                  <Icon
                    name="north_east"
                    className="text-current"
                    size={16}
                    strokeWidth={2.2}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED PROPERTIES GRID (Asymmetric Editorial Cadence) */}
      {/* ========================================================================= */}
      <section
        className="py-32 bg-[#fdf9f2] border-t border-[#c7c7bf]"
        id="properties"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block mb-2">
                Curated Folio
              </span>
              <h2 className="font-['EB_Garamond',serif] text-[2.75rem] leading-[1.2] tracking-[-0.015em] text-[#020302]">
                The Current Portfolio
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 md:mt-0 border-b border-[#c7c7bf] pb-2">
              <button
                className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] border-b-2 border-[#020302] pb-2 uppercase"
                type="button"
              >
                All Collections
              </button>
              <button
                className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] hover:text-[#020302] transition-colors pb-2 uppercase"
                type="button"
              >
                Historic &amp; Restored
              </button>
              <button
                className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] hover:text-[#020302] transition-colors pb-2 uppercase"
                type="button"
              >
                Modernist Coastal
              </button>
              <button
                className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] hover:text-[#020302] transition-colors pb-2 uppercase"
                type="button"
              >
                Penthouse Sanctuaries
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20">
            {properties.map((property, index) => {
              const imageSrc =
                displayValue(property.imageUrl) ||
                (Array.isArray(property.images) && property.images[0]) ||
                placeholderProperties[0].imageUrl;

              const priceText = formatPrice(
                property.price,
                displayValue(property.currency, "$"),
                property.listingType,
              );

              // 7-col for 1st item, 5-col for 2nd item, 4-col for subsequent items
              const colSpanClass =
                index === 0
                  ? "md:col-span-7"
                  : index === 1
                    ? "md:col-span-5"
                    : "md:col-span-4";

              const aspectClass =
                index === 0
                  ? "aspect-[4/3]"
                  : index === 1
                    ? "aspect-[3/4]"
                    : "aspect-[4/5]";

              const titleSizeClass =
                index === 0 || index === 1
                  ? "font-['EB_Garamond',serif] text-[2rem] leading-[1.25]"
                  : "font-['EB_Garamond',serif] text-[1.5rem] leading-[1.3]";

              return (
                <article
                  key={property.id || index}
                  className={`${colSpanClass} flex flex-col group`}
                >
                  <div
                    className={`relative ${aspectClass} w-full overflow-hidden bg-[#f1ede6] mb-4`}
                  >
                    {Boolean(property.badge) && (
                      <div className="absolute top-4 left-4 z-10 bg-[#f7f3ec] px-3 py-1 text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] border border-[#c7c7bf] uppercase">
                        {displayValue(property.badge)}
                      </div>
                    )}
                    <Image
                      alt={displayValue(property.title, "Estate")}
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      src={String(imageSrc)}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>

                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase">
                      {displayValue(
                        property.location || property.city || property.address,
                      )}
                    </span>
                    <span className="font-['EB_Garamond',serif] text-[1.5rem] leading-[1.3] text-[#020302] font-medium">
                      {priceText}
                    </span>
                  </div>

                  <h3
                    className={`${titleSizeClass} text-[#020302] mb-2 group-hover:text-[#725b37] transition-colors`}
                  >
                    {displayValue(property.title)}
                  </h3>

                  {Boolean(property.description) && (
                    <p className="text-[0.875rem] leading-[1.5] text-[#464741] mb-2">
                      {displayValue(property.description)}
                    </p>
                  )}

                  <div className="flex items-center space-x-4 pt-1 border-t border-[#c7c7bf] text-[#464741] text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
                    {property.bedrooms !== undefined && (
                      <span>{displayValue(property.bedrooms)} Bedrooms</span>
                    )}
                    {property.bedrooms !== undefined &&
                      property.bathrooms !== undefined && (
                        <span className="text-[#c7c7bf]">•</span>
                      )}
                    {property.bathrooms !== undefined && (
                      <span>{displayValue(property.bathrooms)} Bathrooms</span>
                    )}
                    {property.area !== undefined && (
                      <>
                        <span className="text-[#c7c7bf]">•</span>
                        <span>
                          {displayValue(property.area)}{" "}
                          {displayValue(property.areaUnit, "Sq Ft")}
                        </span>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-20">
            <a
              className="inline-block border border-[#020302] text-[#020302] text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase px-8 py-4 hover:bg-[#020302] hover:text-[#ffffff] transition-colors duration-200"
              href="#inquiry"
            >
              Request The Complete Monograph (24 Holdings)
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LOCATIONS & NEIGHBORHOODS (Enclaves We Represent) */}
      {/* ========================================================================= */}
      {enclaves.length > 0 && (
        <section
          className="py-32 bg-[#fdf9f2] border-t border-[#c7c7bf]"
          id="neighborhoods"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
              <div className="lg:col-span-8">
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block mb-2">
                  Curated Territories
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[2.75rem] leading-[1.2] tracking-[-0.015em] text-[#020302]">
                  The Enclaves We Represent
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-[1rem] leading-[1.6] text-[#464741]">
                  Our advisory footprint is intentionally restricted to
                  micro-neighborhoods defined by architectural discipline, civic
                  preservation, and enduring cultural value.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {enclaves.map((enclave, idx) => (
                <div
                  key={idx}
                  className="group border-b border-[#c7c7bf] pb-4 flex flex-col justify-between"
                >
                  <div className="aspect-[3/2] w-full overflow-hidden bg-[#f1ede6] mb-2 relative">
                    <Image
                      alt={displayValue(enclave.name)}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      src={String(enclave.imageUrl)}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-['EB_Garamond',serif] text-[1.5rem] leading-[1.3] text-[#020302] group-hover:text-[#725b37] transition-colors">
                        {displayValue(enclave.name)}
                      </h3>
                      {Boolean(enclave.holdings) && (
                        <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37]">
                          {displayValue(enclave.holdings)}
                        </span>
                      )}
                    </div>
                    {Boolean(enclave.region) && (
                      <p className="text-[0.875rem] leading-[1.5] text-[#464741] mb-1">
                        {displayValue(enclave.region)}
                      </p>
                    )}
                    {Boolean(enclave.description) && (
                      <p className="text-[0.875rem] leading-[1.5] text-[#464741] line-clamp-2">
                        {displayValue(enclave.description)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. CORE MAP PRESENTATION (Editorial Cartographic Plate) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#f7f3ec] border-t border-[#c7c7bf]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div>
              <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block mb-1">
                Cartographic Overview
              </span>
              <h3 className="font-['EB_Garamond',serif] text-[2rem] leading-[1.25] text-[#020302]">
                Private Residence Mapping
              </h3>
            </div>
            <p className="text-[0.875rem] leading-[1.5] text-[#464741] mt-2 sm:mt-0">
              GPS coordinates available under formal non-disclosure agreement.
            </p>
          </div>

          <div className="relative w-full h-[480px] bg-[#f1ede6] border border-[#c7c7bf] overflow-hidden">
            <Image
              alt="Cartographic map plate"
              className="object-cover opacity-70"
              src={mapImage}
              fill
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 p-8 pointer-events-none flex flex-col justify-between">
              <div className="pointer-events-auto bg-[#fdf9f2]/95 backdrop-blur-sm border border-[#c7c7bf] p-3">
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block">
                  Beacon Hill Cluster
                </span>
                <p className="text-[0.875rem] leading-[1.5] text-[#020302] font-medium">
                  Ref. AS-0814 • $5,200,000
                </p>
                <p className="text-[11px] leading-[1.4] text-[#464741]">
                  Mount Vernon Historic Corridor
                </p>
              </div>

              <div className="pointer-events-auto self-center bg-[#020302] text-[#fdf9f2] px-4 py-2 flex items-center space-x-2">
                <Pin />
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
                  Off-Market Sanctuary #4
                </span>
                <span className="text-xs text-[#c7c7bf]">|</span>
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#fedeb1]">
                  $8,950,000
                </span>
              </div>

              <div className="pointer-events-auto self-end bg-[#fdf9f2]/95 backdrop-blur-sm border border-[#c7c7bf] p-3">
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block">
                  West Village Atelier
                </span>
                <p className="text-[0.875rem] leading-[1.5] text-[#020302] font-medium">
                  Ref. AS-0992 • $6,750,000
                </p>
                <p className="text-[11px] leading-[1.4] text-[#464741]">
                  Jane &amp; Greenwich Intersection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. AGENTS & AGENCY ADVISORY TEAM (Feature Group E) */}
      {/* ========================================================================= */}
      {advisors.length > 0 && (
        <section
          className="py-32 bg-[#fdf9f2] border-t border-[#c7c7bf]"
          id="advisors"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block mb-2">
                Private Advisory Guild
              </span>
              <h2 className="font-['EB_Garamond',serif] text-[2.75rem] leading-[1.2] tracking-[-0.015em] text-[#020302] mb-2">
                {displayValue(
                  data.advisorsTitle,
                  "Distinguished Partners & Architectural Historians",
                )}
              </h2>
              <p className="text-[1rem] leading-[1.6] text-[#464741]">
                {displayValue(
                  data.advisorsSubtitle,
                  "Our advisors do not operate on high-volume commercial targets. Each principal retains a deliberate maximum of five concurrent properties to provide deep historical context and uncompromised personal counsel.",
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisors.map((advisor, idx) => (
                <div
                  key={idx}
                  className="flex flex-col bg-[#fdf9f2] border border-[#c7c7bf] p-4"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-[#f1ede6] mb-4 relative">
                    <Image
                      alt={displayValue(advisor.name)}
                      className="object-cover"
                      src={String(advisor.imageUrl)}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="border-b border-[#c7c7bf] pb-3 mb-3">
                    <h3 className="font-['EB_Garamond',serif] text-[1.5rem] leading-[1.3] text-[#020302]">
                      {displayValue(advisor.name)}
                    </h3>
                    <p className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase">
                      {displayValue(advisor.role)}
                    </p>
                  </div>
                  <p className="text-[0.875rem] leading-[1.5] text-[#464741] mb-4">
                    {displayValue(advisor.bio)}
                  </p>
                  <div className="mt-auto pt-3 border-t border-[#c7c7bf] space-y-1 text-[0.875rem] leading-[1.5] text-[#464741]">
                    {Boolean(advisor.activeHoldings) && (
                      <div className="flex justify-between">
                        <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
                          Active Holdings:
                        </span>
                        <span className="text-[#020302] font-medium">
                          {displayValue(advisor.activeHoldings)}
                        </span>
                      </div>
                    )}
                    {Boolean(advisor.email) && (
                      <div className="flex justify-between">
                        <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
                          Direct Inquiries:
                        </span>
                        <a
                          className="text-[#020302] underline hover:text-[#725b37]"
                          href={`mailto:${displayValue(advisor.email)}`}
                        >
                          {displayValue(advisor.email)}
                        </a>
                      </div>
                    )}
                    {Boolean(advisor.phone) && (
                      <div className="flex justify-between">
                        <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
                          Advisory Line:
                        </span>
                        <span className="text-[#020302]">
                          {displayValue(advisor.phone)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 8. CONTENT & JOURNAL SECTION (Feature Group J) */}
      {/* ========================================================================= */}
      {journalArticles.length > 0 && (
        <section
          className="py-32 bg-[#fdf9f2] border-t border-[#c7c7bf]"
          id="journal"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#c7c7bf] pb-2">
              <div>
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block mb-2">
                  The Monograph Journal
                </span>
                <h2 className="font-['EB_Garamond',serif] text-[2.75rem] leading-[1.2] tracking-[-0.015em] text-[#020302]">
                  Essays, Criticism &amp; Dialogue
                </h2>
              </div>
              <a
                className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] underline underline-offset-4 hover:text-[#725b37] mt-4 md:mt-0 uppercase"
                href="#journal-archive"
              >
                Explore All Folio Volumes
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {featuredArticle && (
                <article className="lg:col-span-7 flex flex-col group">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#f1ede6] mb-4 relative">
                    <Image
                      alt={displayValue(featuredArticle.title)}
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      src={String(featuredArticle.imageUrl)}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase">
                      {displayValue(featuredArticle.category)}
                    </span>
                    <span className="text-[#c7c7bf]">•</span>
                    <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741]">
                      {displayValue(featuredArticle.date)}
                    </span>
                    <span className="text-[#c7c7bf]">•</span>
                    <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741]">
                      {displayValue(featuredArticle.readTime)}
                    </span>
                  </div>
                  <h3 className="font-['EB_Garamond',serif] text-[2rem] leading-[1.25] text-[#020302] mb-1 group-hover:text-[#725b37] transition-colors">
                    {displayValue(featuredArticle.title)}
                  </h3>
                  <p className="text-[1rem] leading-[1.6] text-[#464741] mb-2">
                    {displayValue(featuredArticle.excerpt)}
                  </p>
                  <div className="flex items-center space-x-2 text-[#020302] text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase group-hover:underline">
                    <span>Read Complete Essay</span>
                    <Icon
                      name="arrow_forward"
                      className="text-current"
                      size={16}
                      strokeWidth={2.2}
                    />
                  </div>
                </article>
              )}

              <div className="lg:col-span-5 flex flex-col justify-between space-y-7">
                {secondaryArticles.map((article, idx) => (
                  <article
                    key={idx}
                    className="border-b border-[#c7c7bf] pb-7 group"
                  >
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase">
                        {displayValue(article.category)}
                      </span>
                      <span className="text-[#c7c7bf]">•</span>
                      <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741]">
                        {displayValue(article.date)}
                      </span>
                    </div>
                    <h4 className="font-['EB_Garamond',serif] text-[1.5rem] leading-[1.3] text-[#020302] mb-2 group-hover:text-[#725b37] transition-colors">
                      {displayValue(article.title)}
                    </h4>
                    <p className="text-[0.875rem] leading-[1.5] text-[#464741] mb-3">
                      {displayValue(article.excerpt)}
                    </p>
                    <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] underline underline-offset-4 uppercase">
                      Read Story ({displayValue(article.readTime)})
                    </span>
                  </article>
                ))}

                <div className="p-4 bg-[#f7f3ec] border border-[#c7c7bf]">
                  <p className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase mb-1">
                    Monograph Print Edition
                  </p>
                  <p className="text-[0.875rem] leading-[1.5] text-[#020302] mb-3">
                    Request a complimentary cloth-bound copy of our annual
                    architectural volume, delivered in discreet packaging.
                  </p>
                  <a
                    className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] underline hover:text-[#725b37] uppercase inline-flex items-center gap-2"
                    href="#inquiry"
                  >
                    <span>Request Print Edition</span>
                    <Icon
                      name="arrow_forward"
                      className="text-current"
                      size={14}
                      strokeWidth={2.2}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 9. LEAD GENERATION & PRIVATE ADVISORY INQUIRY (Feature Group K) */}
      {/* ========================================================================= */}
      <section
        className="py-32 bg-[#fdf9f2] border-t border-[#c7c7bf]"
        id="inquiry"
      >
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase block mb-2">
              Confidential Counsel
            </span>
            <h2 className="font-['EB_Garamond',serif] text-[2.75rem] leading-[1.2] tracking-[-0.015em] text-[#020302] mb-1">
              Begin Confidential Dialogue
            </h2>
            <div className="w-12 h-[1px] bg-[#725b37] mx-auto mb-2" />
            <p className="text-[1rem] leading-[1.6] text-[#464741] mx-auto">
              Whether you are evaluating the acquisition of an architectural
              landmark or seeking discreet representation for a private
              residence, our principals respond with complete confidentiality.
            </p>
          </div>

          <form
            className="space-y-7 bg-[#fdf9f2] p-12 border border-[#c7c7bf]"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Your confidential inquiry has been submitted. A principal partner will contact you directly within 24 hours.",
              );
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="flex flex-col">
                <label
                  className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                  htmlFor="lead-fullname"
                >
                  Full Legal Name *
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-[#c7c7bf] focus:border-[#020302] px-0 py-2 text-[1rem] leading-[1.6] text-[#020302] placeholder-[#777771] focus:ring-0"
                  id="lead-fullname"
                  placeholder="e.g. Eleanor Vance"
                  required
                  type="text"
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                  htmlFor="lead-email"
                >
                  Confidential Email *
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-[#c7c7bf] focus:border-[#020302] px-0 py-2 text-[1rem] leading-[1.6] text-[#020302] placeholder-[#777771] focus:ring-0"
                  id="lead-email"
                  placeholder="e.g. e.vance@familyoffice.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="flex flex-col">
                <label
                  className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                  htmlFor="lead-telephone"
                >
                  Telephone / Signal Direct
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-[#c7c7bf] focus:border-[#020302] px-0 py-2 text-[1rem] leading-[1.6] text-[#020302] placeholder-[#777771] focus:ring-0"
                  id="lead-telephone"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                  htmlFor="lead-interest"
                >
                  Primary Nature of Inquiry *
                </label>
                <select
                  className="w-full bg-transparent border-0 border-b border-[#c7c7bf] focus:border-[#020302] px-0 py-2 text-[1rem] leading-[1.6] text-[#020302] focus:ring-0 cursor-pointer"
                  id="lead-interest"
                  required
                  defaultValue=""
                >
                  <option value="">Select Advisory Pathway</option>
                  <option value="acquisition">
                    Private Acquisition (Dossier Access)
                  </option>
                  <option value="disposition">
                    Discreet Property Disposition / Sale
                  </option>
                  <option value="valuation">
                    Bespoke Architectural Appraisal
                  </option>
                  <option value="curatorial">
                    Off-Market Advisory Portfolio
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label
                className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                htmlFor="lead-advisor"
              >
                Requested Principal Partner
              </label>
              <select
                className="w-full bg-transparent border-0 border-b border-[#c7c7bf] focus:border-[#020302] px-0 py-2 text-[1rem] leading-[1.6] text-[#020302] focus:ring-0 cursor-pointer"
                id="lead-advisor"
                defaultValue="any"
              >
                <option value="any">First Available Partner</option>
                <option value="stone">
                  Helene Stone (Private Wealth &amp; Trusts)
                </option>
                <option value="aurelia">
                  Julian Aurelia, AIA (Historic Provenance)
                </option>
                <option value="sterling">
                  Clara Sterling (Coastal Modernism)
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#464741] uppercase mb-2"
                htmlFor="lead-notes"
              >
                Confidential Notes &amp; Specific Requirements
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-[#c7c7bf] focus:border-[#020302] px-0 py-2 text-[1rem] leading-[1.6] text-[#020302] placeholder-[#777771] focus:ring-0"
                id="lead-notes"
                placeholder="Detail any geographical parameters, architectural styles, target acquisition timeframes, or privacy stipulations..."
                rows={4}
              />
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <input
                className="mt-1 rounded-none border-[#c7c7bf] text-[#020302] focus:ring-0"
                id="lead-privacy"
                required
                type="checkbox"
              />
              <label
                className="text-[0.875rem] leading-[1.5] text-[#464741]"
                htmlFor="lead-privacy"
              >
                I confirm this inquiry requires strict professional discretion.
                Aurelia &amp; Stone adheres to institutional non-disclosure
                standards.
              </label>
            </div>

            <div className="pt-4 text-center">
              <button
                className="bg-[#1d1d1b] text-[#ffffff] text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase px-10 py-4 hover:bg-[#464741] transition-colors duration-200"
                type="submit"
              >
                Begin Confidential Dialogue
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FOOTER */}
      {/* ========================================================================= */}
      <footer className="w-full bg-[#f7f3ec] border-t border-[#c7c7bf]">
        <div className="w-full px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
            <div className="md:col-span-5">
              <a
                className="font-['EB_Garamond',serif] text-[2rem] leading-[1.25] tracking-wide text-[#020302] uppercase block mb-1"
                href="#"
              >
                {displayValue(data.companyName, "AURELIA & STONE")}
              </a>
              <p className="text-[0.875rem] leading-[1.5] text-[#464741] mb-4">
                A private curatorial real estate monograph presenting domestic
                architecture as lasting works of fine art. Discretion assured.
              </p>
              <div className="space-y-1 text-[0.875rem] leading-[1.5] text-[#464741]">
                <p>
                  <strong>Primary Atelier:</strong>{" "}
                  {displayValue(
                    data.atelierBoston,
                    "42 Arlington Street, Boston, MA 02116",
                  )}
                </p>
                <p>
                  <strong>New York Bureau:</strong>{" "}
                  {displayValue(
                    data.atelierNewYork,
                    "112 Mercer Street, New York, NY 10012",
                  )}
                </p>
                <p>
                  <strong>San Francisco Salon:</strong>{" "}
                  {displayValue(
                    data.atelierSanFrancisco,
                    "2400 Pacific Avenue, San Francisco, CA 94115",
                  )}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
              <div>
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] uppercase block mb-3">
                  Portfolio
                </span>
                <ul className="space-y-2 text-[0.875rem] leading-[1.5]">
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#properties"
                    >
                      Historic &amp; Restored
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#properties"
                    >
                      Modernist Coastal
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#properties"
                    >
                      Penthouse Sanctuaries
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#inquiry"
                    >
                      Off-Market Archive
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] uppercase block mb-3">
                  Advisory
                </span>
                <ul className="space-y-2 text-[0.875rem] leading-[1.5]">
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#agency"
                    >
                      The Monograph Manifesto
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#inquiry"
                    >
                      Private Advisory Dossier
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#neighborhoods"
                    >
                      Neighborhood Index
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#inquiry"
                    >
                      Bespoke Valuation
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#inquiry"
                    >
                      Acquisitions &amp; Sales
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#020302] uppercase block mb-3">
                  Publications
                </span>
                <ul className="space-y-2 text-[0.875rem] leading-[1.5]">
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#journal"
                    >
                      Journal &amp; Essays
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#journal"
                    >
                      Press &amp; Publications
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#legal"
                    >
                      Legal Disclosures
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#464741] hover:text-[#020302] transition-colors"
                      href="#privacy"
                    >
                      Privacy Statement
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#c7c7bf] pt-4 mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#464741] space-y-2 sm:space-y-0">
              <p className="flex items-center space-x-2">
                <Icon
                  name="home"
                  className="text-current"
                  size={16}
                  strokeWidth={2.2}
                />
                <span>
                  Equal Housing Opportunity. Aurelia &amp; Stone strongly
                  supports the principles of fair and open housing.
                </span>
              </p>
              <p className="text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold text-[#725b37] uppercase">
                MEMBER: PRIVATE ADVISORY SYNDICATE
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#c7c7bf]/60 flex flex-col sm:flex-row justify-between items-center text-xs text-[#464741]">
            <p>
              © {new Date().getFullYear()} Aurelia &amp; Stone Real Estate
              Monograph. All architecture and private residences presented as
              curated works of art. Discretion assured.
            </p>
            <div className="flex space-x-6 mt-2 sm:mt-0 text-[0.75rem] leading-[1.2] tracking-[0.12em] font-semibold uppercase">
              <a className="hover:text-[#020302]" href="#privacy">
                Privacy
              </a>
              <a className="hover:text-[#020302]" href="#terms">
                Terms of Representation
              </a>
              <a className="hover:text-[#020302]" href="#top">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
