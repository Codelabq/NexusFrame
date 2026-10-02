"use client";

/* eslint-disable @next/next/no-img-element */
import { Scale, Search, ShoppingCart } from "lucide-react";

const brand = {
  name: "SILICON CRAFT",
  tagline: "PRECISION SYSTEMS",
};

const navLinks = [
  { label: "Custom Configurator", href: "#" },
  { label: "Workstations", href: "#" },
];

const searchPlaceholder = "Search SKU, architecture, or GPU...";

const formatCompactCurrency = (value: number): string =>
  `$${value.toLocaleString("en-US")}`;

interface NavbarProps {
  compareCount: number;
  cartCount: number;
  cartTotal: number;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onCompareClick: () => void;
  onOpenCart: () => void;
}

export default function Navbar({
  compareCount,
  cartCount,
  cartTotal,
  searchTerm,
  onSearchChange,
  onCompareClick,
  onOpenCart,
}: NavbarProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#010f1f]/90 shadow-[0_1px_8px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      <div className="flex h-20 w-full items-center justify-between gap-[1rem] px-[1rem] md:px-[1.5rem]">
        {/* Brand + search */}
        <div className="flex shrink-0 items-center gap-[1.5rem]">
          <div className="flex items-center gap-[0.75rem]">
            <div className="flex flex-col">
              <span className="font-['Inter'] text-[20px] font-semibold leading-none tracking-[-0.015em] text-[#d4e4fa]">
                {brand.name}
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] leading-tight tracking-widest text-[#7bd0ff]">
                {brand.tagline}
              </span>
            </div>
          </div>

          <div className="relative hidden w-72 items-center xl:flex">
            <Search className="pointer-events-none absolute left-[0.5rem] h-[18px] w-[18px] text-[#bfc7d2]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder={searchPlaceholder}
              aria-label="Search configurations"
              className="w-full rounded-[0.5rem] bg-[#0d1c2d] py-1.5 pl-9 pr-3 font-['JetBrains_Mono'] text-[13px] leading-[20px] tracking-[-0.01em] text-[#d4e4fa] transition-colors placeholder:text-[#89929b] focus:outline-none focus:ring-1 focus:ring-[#93ccff]/40"
            />
          </div>
        </div>

        {/* Primary nav */}
        <nav className="hidden items-center gap-[0.5rem] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-[0.5rem] px-[0.75rem] py-1.5 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#bfc7d2] transition-colors hover:bg-[#122131] hover:text-[#d4e4fa]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-[0.75rem]">
          <button
            type="button"
            onClick={onCompareClick}
            className="flex cursor-pointer items-center gap-[0.5rem] rounded-[0.5rem] bg-[#0d1c2d] px-[0.75rem] py-1.5 text-[#bfc7d2] transition-all hover:bg-[#122131] hover:text-[#d4e4fa]"
          >
            <Scale className="h-4 w-4 text-[#7bd0ff]" />
            <span className="font-['JetBrains_Mono'] text-[13px] leading-[20px] tracking-[-0.01em] font-medium">
              Compare: {compareCount} items
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Open cart"
            className="flex cursor-pointer items-center gap-[0.5rem] rounded-[0.5rem] bg-[#1c2b3c] px-[0.75rem] py-1.5 text-[#d4e4fa] transition-all hover:bg-[#2c3a4c]"
          >
            <ShoppingCart className="h-4 w-4 text-[#93ccff]" />
            <span className="font-['JetBrains_Mono'] text-[13px] leading-[20px] tracking-[-0.01em] font-medium text-[#93ccff]">
              Cart ({cartCount})
            </span>
            <span className="hidden font-['JetBrains_Mono'] text-[13px] leading-[20px] tracking-[-0.01em] font-semibold text-[#d4e4fa] sm:inline">
              {formatCompactCurrency(cartTotal)}
            </span>
          </button>

          <div className="flex items-center gap-[0.5rem] pl-[0.5rem]">
            <img
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2i3CtijmOBum7Xq249xMrawQ45U80AM79KNW3yBwoUKqvRTPF6GVULl8veYNFuu96BvezmR_M9RFcKU_l7Kw0-PA32YPvqneDMu0k4GrjhDxWmnCwVdW897R24KD28sToyh_deZfPOtrFnNMUERk3i587pHWhRkLT8rtK7LfNHYeSkrV8OMfDTTGsfP8wpCBvdTGhwvcEr-aguTQ-G8eXhl_EA5GSttFb34AJtKHcZuVJoo_7DFjpjQ"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-[#7bd0ff]/30"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
