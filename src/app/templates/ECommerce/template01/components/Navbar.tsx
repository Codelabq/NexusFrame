"use client";

import { Bitcoin, ShoppingBag } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onSearch?: (query: string) => void;
}

export default function Navbar({ cartCount }: NavbarProps) {

  const navLinks = [
    { label: "Storefront", href: "#", active: true },
    { label: "Digital Assets", href: "#" },
    { label: "Developer Tools", href: "#" },
    { label: "Gadgets", href: "#" },
    { label: "Community", href: "#" },
  ];

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

        </div>
        <div className="flex items-center gap-[0.75rem] shrink-0">

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
