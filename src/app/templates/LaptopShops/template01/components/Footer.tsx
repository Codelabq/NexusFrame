"use client";

import { BadgeCheck, RotateCcw, ScrollText, Unlock } from "lucide-react";

const columnTitleClass =
  "mb-[1rem] font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold uppercase tracking-wider text-[#0b1c30]";

const linkClass =
  "font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850] transition-colors hover:text-[#006194]";

const listItemClass = "font-['Manrope'] text-[14px] leading-[20px] text-[#3f4850]";

const footer = {
  syncLabel: "WAREHOUSE INVENTORY: SYNCED",
  blurb:
    "Silicon Craft designs, provisions, and optimizes ultra-dense compute nodes, industrial engineering workstations, and mission-critical hardware arrays.",
  badge: "ISO 9001:2015 CERTIFIED FACILITY",
  columns: [
    {
      title: "Hardware Warranty",
      variant: "links" as const,
      links: [
        { label: "3-Year Zero-Tolerance RMA", href: "#" },
        { label: "Advance Component Replacement", href: "#" },
        { label: "Thermal & Overclock Coverage", href: "#" },
        { label: "On-Site Enterprise SLA", href: "#" },
      ],
    },
    {
      title: "Technical Spec Sheets",
      variant: "links" as const,
      links: [
        { label: "PCIe 5.0 Clearance Matrices", href: "#" },
        { label: "TDP & Power Distribution Sheets", href: "#" },
        { label: "ECC Memory Validation Logs", href: "#" },
        { label: "Cooling Pressure Drop Models", href: "#" },
      ],
    },
    {
      title: "Architecture & Telemetry",
      variant: "links" as const,
      links: [
        { label: "BIOS Firmware Releases", href: "#" },
        { label: "Silicon Binning Diagnostics", href: "#" },
        { label: "Sub-Zero Testing Reports", href: "#" },
        { label: "System Status & Outages", href: "#" },
      ],
    },
  ],
  copyright:
    "© 2025 SILICON CRAFT PRECISION COMPUTING LABS INC. ALL ARCHITECTURAL SCHEMATICS RESERVED.",
  telemetry: [
    "SYS CLK: 100.00 MHz REF",
    "LATENCY: 0.12ms LOCAL",
    "SECURITY: TPM 2.0 ENFORCED",
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#010f1f] text-[#bfc7d2]">
      <div className="w-full px-[1rem] py-[3rem] md:px-[1.5rem]">
        <div className="grid grid-cols-1 gap-[2rem] md:grid-cols-4">
          {/* Identity */}
          <div className="flex flex-col gap-[0.75rem]">
            <div className="flex items-center gap-[0.25rem]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#00daf3]" />
              <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold tracking-wider text-[#00daf3]">
                {footer.syncLabel}
              </span>
            </div>

            <p className="font-['Inter'] text-[13px] leading-[20px] text-[#bfc7d2]">
              {footer.blurb}
            </p>

            <div className="inline-flex items-center gap-[0.5rem] rounded-[0.25rem] bg-[#0d1c2d] px-[0.75rem] py-1 font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold text-[#bfc7d2]">
              <BadgeCheck className="h-4 w-4 text-[#7bd0ff]" />
              <span>{footer.badge}</span>
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-[0.5rem]">
              <h4 className={columnTitleClass}>{column.title}</h4>
              <ul className="flex flex-col gap-[0.25rem] font-['Inter'] text-[13px] leading-[20px]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Telemetry strip */}
        <div className="mt-[2rem] flex flex-col items-center justify-between gap-[1rem] pt-[1.5rem] font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold text-[#bfc7d2]/70 md:flex-row">
          <div>{footer.copyright}</div>
          <div className="flex flex-wrap items-center justify-center gap-[1.5rem]">
            {footer.telemetry.map((entry) => (
              <span key={entry}>{entry}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
