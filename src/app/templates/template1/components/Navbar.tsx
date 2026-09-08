"use client";

import { Bitcoin, Search, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  cartCount: number;
  onSearch?: (query: string) => void;
}

export default function Navbar({ cartCount, onSearch }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "Storefront", href: "#", active: true },
    { label: "Digital Assets", href: "#" },
    { label: "Developer Tools", href: "#" },
    { label: "Gadgets", href: "#" },
    { label: "Community", href: "#" },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111319]/70 backdrop-blur-xl border-b border-[#ffffff]/10">
      <div className="h-[5rem] max-w-[1440px] mx-auto px-[1rem] lg:px-[3rem] flex items-center justify-between">
        <div className="flex items-center gap-[1.5rem] shrink-0">
          <a className="flex items-center gap-[0.75rem] group" data-path="storefront" href="#">
            <span className="font-['Inter'] text-[20px] leading-[28px] uppercase tracking-wider text-[#e2e2eb] group-hover:text-[#00f0ff] transition-colors font-semibold">
              NEXUS <span className="text-[#00f0ff] font-light">DIGITAL</span>
            </span>
          </a>
          <nav className="hidden xl:flex items-center gap-[1rem] ml-[0.75rem]" data-active-classes="text-[#00f0ff] font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`font-['Inter'] text-[14px] leading-[20px] transition-colors ${
                  link.active
                    ? "text-[#00f0ff] font-semibold"
                    : "text-[#b9cacb] hover:text-[#e2e2eb]"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative flex items-center w-full">
            <Search aria-hidden="true" className="absolute left-[0.75rem] text-[#b9cacb] pointer-events-none" size={20} />
            <input
              className="w-full bg-[#1e1f26]/60 backdrop-blur-md rounded-lg pl-10 pr-14 py-[0.5rem] font-['monospace'] text-[13px] text-[#e2e2eb] placeholder:text-[#b9cacb]/60 border border-white/10 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
              placeholder="Search cybernetics, tools, manifests..."
              type="text"
              value={searchQuery}
              onChange={handleSearch}
            />
           
          </div>
        </div>
        <div className="flex items-center gap-[0.75rem] shrink-0">
          <div className="relative hidden sm:flex items-center bg-[#1e1f26]/80 border border-white/10 rounded-lg px-[0.5rem] py-[0.25rem] text-[#b9cacb] hover:border-white/20 transition-colors">
            <Bitcoin aria-hidden="true" className="text-[#00dbe9] mr-[0.25rem]" size={18} />
            <select className="bg-transparent font-['monospace'] text-[12px] text-[#e2e2eb] focus:outline-none cursor-pointer pr-[0.75rem]">
              <option className="bg-[#1e1f26] text-[#e2e2eb]" value="ETH">ETH / Mainnet</option>
              <option className="bg-[#1e1f26] text-[#e2e2eb]" value="SOL">SOL / Network</option>
              <option className="bg-[#1e1f26] text-[#e2e2eb]" value="USD">USD / Vault</option>
            </select>
          </div>
          <a
            className="relative flex items-center justify-center p-[0.5rem] rounded-[0.5rem] bg-[#1e1f26]/60 border border-[#ffffff]/10 hover:border-[#00f0ff]/40 text-[#e2e2eb] hover:text-[#00f0ff] transition-all"
            data-path="cart"
            href="#"
          >
            <ShoppingBag aria-hidden="true" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center px-1.5 py-0.5 rounded-full bg-[#00f0ff] text-[#006970] font-[monospace] text-[10px] font-[700] shadow-[0_0_8px_rgba(0,240,255,0.6)]">
                {cartCount}
              </span>
            )}
          </a>
          <div className="h-[1.5rem] w-px bg-[#ffffff]/10 mx-[0.25rem] hidden sm:block" />
          <a
            className="flex items-center gap-[0.5rem] p-[0.25rem] rounded-full border border-white/10 hover:border-[#00f0ff] transition-all"
            data-path="user-profile"
            href="#"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnbREiXe1Uys6KcGkI-BP77N9jwwzC0MYsRnBwuMYCUEJyuAYAzJZXGWtj9KHuACHrHtw7jqm8xs4saE8Zc3Kbn_BTuIZ0NwB7e4j543O9lLpK9JgkVHyfyKFXbSXzh34PlBnRfF5LmvvDvjfi8xfcisPcs9-1P4HKHlcjUWni0CT6bZwN-xc77ljikOCISawNQPQk60oHj9xj7pCJAeIl2Ucz-Q-Hg2_qilHCe4noe-_FJH1D0EiGhw"
            />
            <span className="hidden lg:inline-block font-['Inter'] text-[12px] text-[#e2e2eb] pr-[0.75rem]">
              Operator
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
