"use client";

import { Heart, ShoppingCart, User } from "lucide-react";

const brand = {
  name: "APEX",
  nameAccent: "MOTORS",
  tagline: "CPO & Performance",
};

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Inventory (148)", href: "#", active: true },
  { label: "Certified Pre-Owned", href: "#" },
  { label: "Financing & Leasing", href: "#" },
  { label: "Sell / Trade", href: "#" },
  { label: "About Us", href: "#" },
];

interface NavbarProps {
  savedCount: number;
  cartCount: number;
  onOpenCart: () => void;
  onScheduleTestDrive: () => void;
}

export default function Navbar({
  savedCount,
  cartCount,
  onOpenCart,
  onScheduleTestDrive,
}: NavbarProps) {
  return (
    <header className="fixed top-0 z-50 w-full shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Utility strip (desktop only) */}
      <div className="hidden h-10 w-full bg-[#d3e4fe]/60 backdrop-blur-md lg:block" />

      <div className="w-full border-b border-[#bfc7d2]/20 bg-[#f8f9ff]/90 backdrop-blur-xl">
        <div className="flex h-20 w-full items-center justify-between gap-[1rem] px-[1rem] md:px-[2rem]">
          {/* Brand + primary nav */}
          <div className="flex items-center gap-[1rem] xl:gap-[2.5rem]">
            <a
              href="#"
              className="flex items-center gap-3 transition-transform duration-200 active:scale-95"
            >
              <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-[0.5rem] bg-[#0F172A] shadow-sm">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 36 36">
                  <path d="M9 25L18 10L27 25H21.5L18 18.5L14.5 25H9Z" fill="#0284C7" />
                  <path d="M14 27L18 20L22 27H14Z" fill="#38BDF8" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] text-[20px] font-extrabold leading-none tracking-[-0.015em] text-[#0b1c30]">
                  {brand.name}
                  <span className="font-extrabold text-[#006194]">{brand.nameAccent}</span>
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[9px] leading-tight font-bold uppercase tracking-widest text-[#006194]">
                  {brand.tagline}
                </span>
              </div>
            </a>

            <nav className="hidden items-center gap-[0.25rem] xl:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={`rounded-[0.5rem] px-[0.5rem] py-[0.25rem] font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] tracking-[0.01em] font-bold transition-all duration-200 ${
                    link.active
                      ? "bg-[#dce9ff] text-[#0b1c30]"
                      : "text-[#3f4850] hover:bg-[#e5eeff] hover:text-[#0b1c30]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-[0.5rem] sm:gap-[1rem]">
            <a
              href="#"
              className="relative flex items-center gap-[0.25rem] rounded-[0.5rem] px-[0.5rem] py-[0.25rem] text-[#3f4850] transition-all duration-200 hover:bg-[#e5eeff] hover:text-[#0b1c30] active:scale-95"
            >
              <Heart className="h-5 w-5 fill-current text-[#ba1a1a]" />
              <span className="hidden font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold sm:inline">
                Saved
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ba1a1a] font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-white">
                {savedCount}
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Open cart"
              className="relative flex cursor-pointer items-center gap-[0.25rem] rounded-[0.5rem] px-[0.5rem] py-[0.25rem] text-[#3f4850] transition-all duration-200 hover:bg-[#e5eeff] hover:text-[#0b1c30] active:scale-95"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold sm:inline">
                Cart
              </span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#006194] font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              onClick={onScheduleTestDrive}
              className="hidden cursor-pointer whitespace-nowrap rounded-[0.5rem] bg-[#006194] px-[1rem] py-[0.5rem] font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-white transition-all duration-200 hover:bg-[#007bb9] hover:shadow-[0_4px_14px_rgba(0,97,148,0.25)] active:scale-95 md:inline-flex"
            >
              Schedule Test Drive
            </button>

            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#006194] shadow-sm transition-all hover:bg-[#007bb9] active:scale-95">
              <User className="h-[18px] w-[18px] text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
