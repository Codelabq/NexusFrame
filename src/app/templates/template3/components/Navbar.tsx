"use client";

import { Search, ShoppingBag } from "lucide-react";

interface NavbarProps {
  cartCount: number;
}

const navLinks = ["Shop All", "Editions", "Objects", "Lookbook", "About"];

export default function Navbar({ cartCount }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#fff7fb]/70 backdrop-blur-2xl shadow-[0_4px_24px_-2px_rgba(244,114,182,0.08)]">
      <div className="h-20 max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem] flex items-center justify-between">
        <div className="flex items-center gap-[1rem] lg:gap-[2rem]">
          <a className="flex items-center gap-[0.5rem]" href="#shop-all">
            <span className="font-['Plus_Jakarta_Sans'] text-[20px] font-[600] text-[#1e1b1e] tracking-tight">
              LUMEN
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-[0.5rem]">
            {navLinks.map((link, index) => (
              <a
                className={`font-['Inter'] text-[14px] font-[600] px-[1rem] py-[0.5rem] rounded-full transition-all ${
                  index === 0
                    ? "text-[#79576c] bg-[#fdd0ea]"
                    : "text-[#544249] hover:text-[#1e1b1e] hover:bg-[#f3ecf0]"
                }`}
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                key={link}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-[0.75rem] sm:gap-[1rem]">
          <div className="relative hidden sm:flex items-center">
            <Search className="absolute left-[1rem] text-[#544249] w-5 h-5" aria-hidden="true" />
            <input
              className="h-[42px] pl-10 pr-[1rem] rounded-full bg-[#ffffff]/80 text-[#1e1b1e] font-['Inter'] text-[13px] placeholder:text-[#87717a] focus:outline-none focus:ring-2 focus:ring-[#f472b6] shadow-[0_2px_8px_rgba(244,114,182,0.06)] w-36 md:w-56"
              placeholder="Search catalog..."
              type="search"
            />
          </div>
          <button
            aria-label={`Cart with ${cartCount} items`}
            className="relative p-[0.5rem] rounded-full hover:bg-[#eee6ea] transition-colors flex items-center justify-center"
            type="button"
          >
            <ShoppingBag className="text-[#1e1b1e]" aria-hidden="true" size={24} />
            <span className="absolute -top-1 -right-1 bg-[#a43073] text-[#ffffff] font-['Inter'] text-[10px] font-[700] w-5 h-5 rounded-full flex items-center justify-center shadow-[0_2px_6px_rgba(164,48,115,0.35)]">
              {cartCount}
            </span>
          </button>
          <div className="flex items-center pl-[0.25rem]">
            <button aria-label="Open account" className="block rounded-full ring-2 ring-[#ffd8e7] hover:ring-[#f472b6] transition-all" type="button">
              <span className="w-8 h-8 rounded-full bg-[#fdd0ea] flex items-center justify-center font-['Inter'] text-[11px] font-[600] text-[#79576c]">
                LG
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
