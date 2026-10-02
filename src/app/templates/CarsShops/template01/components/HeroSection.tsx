"use client";

import { ArrowRight, Search } from "lucide-react";
import Reveal from "./Reveal";
import type { QuickStat } from "../types";

interface HeroSectionProps {
  liveFeed: string;
  headline: string;
  subheadline: string;
  searchPlaceholder: string;
  findLabel: string;
  quickStats: QuickStat[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFind: () => void;
}

export default function HeroSection({
  liveFeed,
  headline,
  subheadline,
  searchPlaceholder,
  findLabel,
  quickStats,
  searchTerm,
  onSearchChange,
  onFind,
}: HeroSectionProps) {
  return (
    <section className="w-full border-b border-[#bfc7d2]/15 bg-[#ffffff] px-[1rem] py-[2rem] md:px-[2rem] md:py-[2.5rem]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[1.5rem]">
        {/* Live sync indicator */}
        <Reveal delay={60} className="flex flex-wrap items-center justify-between gap-[0.5rem]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006194]/20 bg-[#dce9ff] px-3.5 py-1.5 shadow-sm transition-all hover:bg-[#cce5ff]/50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#006194] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#006194]" />
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-wider text-[#006194]">
              {liveFeed}
            </span>
          </div>
        </Reveal>

        {/* Headline + search */}
        <Reveal
          delay={140}
          className="grid grid-cols-1 items-end gap-[1.5rem] lg:grid-cols-12"
        >
          <div className="flex flex-col gap-[0.25rem] lg:col-span-8">
            <h1 className="font-['Plus_Jakarta_Sans'] text-[32px] leading-[38px] font-extrabold tracking-[-0.025em] text-[#0b1c30] md:text-[48px] md:leading-[52px] md:tracking-[-0.03em]">
              {headline}
            </h1>
            <p className="max-w-3xl font-['Manrope'] text-[16px] leading-[26px] tracking-[-0.01em] text-[#3f4850] md:text-[18px] md:leading-[28px]">
              {subheadline}
            </p>
          </div>

          <div className="w-full lg:col-span-4">
            <div className="flex items-center rounded-[0.5rem] border border-[#bfc7d2]/30 bg-[#eff4ff] p-1.5 shadow-sm transition-all duration-200 focus-within:border-[#006194] focus-within:ring-2 focus-within:ring-[#006194]/20">
              <div className="flex items-center pl-3 pr-2 text-[#3f4850]">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") onFind();
                }}
                placeholder={searchPlaceholder}
                aria-label="Search inventory"
                className="w-full bg-transparent px-1 py-2 font-['Manrope'] text-[15px] leading-[24px] text-[#0b1c30] placeholder:text-[#707881] focus:outline-none"
              />
              <button
                type="button"
                onClick={onFind}
                className="flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-[0.5rem] bg-[#006194] px-4 py-2.5 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#007bb9] hover:shadow-[0_4px_14px_rgba(0,97,148,0.2)] active:scale-95"
              >
                <span>{findLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Quick stats */}
        <Reveal
          delay={220}
          className="grid grid-cols-2 gap-[0.5rem] pt-[0.25rem] md:grid-cols-4"
        >
          {quickStats.map((stat) => (
            <div
              key={stat.quickStatLabel}
              className="flex flex-col rounded-[0.5rem] border border-[#bfc7d2]/20 bg-[#eff4ff] p-[0.5rem] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#006194]/30 hover:bg-[#e5eeff]"
            >
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-wider text-[#565e74]">
                {stat.quickStatLabel}
              </span>
              <span
                className={`mt-0.5 font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-semibold tracking-[-0.015em] ${
                  stat.quickStatHighlight ? "text-[#006194]" : "text-[#0b1c30]"
                }`}
              >
                {stat.quickStatValue}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
