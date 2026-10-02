"use client";

import {
  BadgeCheck,
  RotateCcw,
  ScrollText,
  Unlock,
  type LucideIcon,
} from "lucide-react";

const brand = {
  name: "APEX",
  nameAccent: "MOTORS",
  tagline: "CPO & Performance",
};

interface FooterLink {
  label: string;
  href: string;
}

interface FooterAssurance {
  icon: LucideIcon;
  text: string;
}

const footer = {
  blurb:
    "Curated performance, executive luxury, and factory-backed certified pre-owned vehicles engineered for uncompromising drivers.",
  contact: {
    showroom: "Austin Flagship Showroom",
    address: "742 Motor Mile Parkway",
    city: "Austin, TX 78704",
    phone: "(512) 890-2400",
  },
  columns: [
    {
      title: "Showroom Hours",
      variant: "list" as const,
      items: [
        "Mon - Fri: 8:30 AM - 8:00 PM",
        "Saturday: 9:00 AM - 7:00 PM",
        "Sunday: Closed (Private Bookings)",
        "Service Dept: Mon - Fri 7:00 AM",
      ],
    },
    {
      title: "Vehicle Categories",
      variant: "links" as const,
      links: [
        { label: "Sedans & Coupes", href: "#" },
        { label: "Performance & Track", href: "#" },
        { label: "Luxury SUVs", href: "#" },
        { label: "Electric & Hybrid Fleet", href: "#" },
        { label: "Light-Duty Trucks", href: "#" },
      ] as FooterLink[],
    },
    {
      title: "Buyer Assurance",
      variant: "assurance" as const,
      items: [
        { icon: BadgeCheck, text: "150-Point Technical Inspection" },
        { icon: ScrollText, text: "CarFax Advantage Official Partner" },
        { icon: RotateCcw, text: "7-Day / 500-Mile Money-Back Guarantee" },
        { icon: Unlock, text: "Transparent Monroney Pricing" },
      ] as FooterAssurance[],
    },
    {
      title: "Customer Portals",
      variant: "links" as const,
      links: [
        { label: "Online Pre-Approval", href: "#" },
        { label: "Instant Trade Offer", href: "#" },
        { label: "VIP Test Drive Booking", href: "#" },
        { label: "Saved Vehicle Watchlist", href: "#" },
      ] as FooterLink[],
    },
  ],
  compliance:
    "Compliance & Disclosure: All vehicle specifications, pricing, and promotional terms are subject to prior sale and credit approval. Prices exclude state registration, taxes, title, and dealer documentation fees ($150). Certified warranty terms reflect manufacturer-backed or Apex Certified 12-month / 12,000-mile limited comprehensive coverage. CarFax reports provided complimentary for all listed VINs.",
  copyright: "© 2025 Apex Motors Group Inc. Austin TX Dealer License #TX-98442-D.",
  legalLinks: ["Privacy Policy", "Terms of Service", "Accessibility Statement"],
};

const columnTitleClass =
  "mb-[1rem] font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold uppercase tracking-wider text-[#0b1c30]";

const linkClass =
  "font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850] transition-colors hover:text-[#006194]";

const listItemClass = "font-['Manrope'] text-[14px] leading-[20px] text-[#3f4850]";

export default function Footer() {
  return (
    <footer className="mt-[2.5rem] w-full border-t border-[#bfc7d2]/20 bg-[#eff4ff]">
      <div className="w-full px-[1rem] py-[2.5rem] md:px-[2rem]">
        <div className="mb-[2.5rem] grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + contact */}
          <div>
            <div className="mb-[0.5rem] flex items-center gap-3">
              <div className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-[0.5rem] bg-[#0F172A] shadow-sm">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 36 36">
                  <path d="M9 25L18 10L27 25H21.5L18 18.5L14.5 25H9Z" fill="#0284C7" />
                  <path d="M14 27L18 20L22 27H14Z" fill="#38BDF8" />
                </svg>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-extrabold tracking-[-0.015em] text-[#0b1c30]">
                {brand.name}
                <span className="text-[#006194]">{brand.nameAccent}</span>
              </span>
            </div>

            <p className="mb-[1rem] font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
              {footer.blurb}
            </p>

            <div className="flex flex-col gap-[0.25rem] font-['Manrope'] text-[14px] leading-[20px] text-[#3f4850]">
              <div>{footer.contact.showroom}</div>
              <div>{footer.contact.address}</div>
              <div>{footer.contact.city}</div>
              <div className="mt-[0.25rem] font-bold text-[#0b1c30]">
                {footer.contact.phone}
              </div>
            </div>
          </div>

          {/* Remaining columns */}
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className={columnTitleClass}>{column.title}</h3>

              {column.variant === "list" ? (
                <ul className="flex flex-col gap-[0.25rem]">
                  {column.items.map((item) => (
                    <li key={item} className={listItemClass}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {column.variant === "links" ? (
                <ul className="flex flex-col gap-[0.25rem]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}

              {column.variant === "assurance" ? (
                <ul className="flex flex-col gap-[0.5rem]">
                  {column.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.text} className="flex items-start gap-[0.25rem]">
                        <Icon className="mt-[1px] h-[18px] w-[18px] flex-shrink-0 text-[#006194]" />
                        <span className="font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {/* Compliance */}
        <div className="rounded-[0.5rem] bg-[#dce9ff]/40 p-[1rem] pt-[1.5rem]">
          <p className="mb-[0.5rem] font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
            {footer.compliance}
          </p>
          <div className="flex flex-col items-center justify-between gap-[0.5rem] font-['Manrope'] text-[14px] leading-[20px] text-[#3f4850] sm:flex-row">
            <div>{footer.copyright}</div>
            <div className="flex items-center gap-[1rem]">
              {footer.legalLinks.map((label) => (
                <span
                  key={label}
                  className="cursor-pointer transition-colors hover:text-[#0b1c30]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
