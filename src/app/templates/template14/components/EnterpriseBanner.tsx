"use client";

import { ArrowRight, Building2, CheckCircle2, Download } from "lucide-react";
import type { siliconCraftEnterpriseChecklistItem } from "@/types/index";
import { toneTextClass } from "./tones";
import type { Tone } from "./types";

interface EnterpriseBannerProps {
  overline: string;
  title: string;
  body: string;
  checklist: siliconCraftEnterpriseChecklistItem[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  note: string;

}

export default function EnterpriseBanner({
  overline,
  title,
  body,
  checklist,
  primaryCtaLabel,
  secondaryCtaLabel,
  note,

}: EnterpriseBannerProps) {
  return (
    <section className="w-full px-[1rem] pb-[3rem] md:px-[1.5rem]">
      <div className="relative overflow-hidden rounded-[1rem] bg-[#122131] p-[2rem] shadow-xl">
        {/* Ambient decorative backdrop */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#93ccff]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#00daf3]/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-[2rem] xl:flex-row xl:items-center">
          {/* Statement */}
          <div className="flex max-w-2xl flex-col gap-[0.75rem]">
            <div className="flex items-center gap-[0.5rem] font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold text-[#7bd0ff]">
              <Building2 className="h-4 w-4 text-[#7bd0ff]" />
              <span className="uppercase tracking-widest">{overline}</span>
            </div>

            <h2 className="font-['Inter'] text-[28px] font-semibold leading-[36px] tracking-[-0.02em] text-[#d4e4fa] md:text-[36px] md:leading-[44px] md:tracking-[-0.025em]">
              {title}
            </h2>

            <p className="font-['Inter'] text-[18px] leading-[28px] tracking-[-0.01em] text-[#bfc7d2]">
              {body}
            </p>

            <div className="flex flex-wrap items-center gap-[1rem] pt-[0.5rem] font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold text-[#d4e4fa]">
              {checklist.map((item) => (
                <div key={item.enterpriseChecklistLabel} className="flex items-center gap-1.5">
                  <CheckCircle2 className={`h-4 w-4 ${toneTextClass(item.enterpriseChecklistTone as Tone)}`} />
                  <span>{item.enterpriseChecklistLabel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procurement actions */}
          <div className="flex w-full shrink-0 flex-col items-stretch gap-[0.75rem] sm:flex-row sm:items-center xl:w-auto xl:flex-col xl:items-end">
            <button
              type="button"

              className="flex cursor-pointer items-center justify-center gap-[0.5rem] rounded-[0.5rem] bg-[#93ccff] px-[1.5rem] py-3 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#003351] shadow-md transition-all hover:bg-[#3198dc] hover:text-[#002c47] active:scale-95"
            >
              <span>{primaryCtaLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"

              className="flex cursor-pointer items-center justify-center gap-[0.5rem] rounded-[0.5rem] bg-[#1c2b3c] px-[1.5rem] py-3 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#d4e4fa] transition-colors hover:bg-[#2c3a4c] active:scale-95"
            >
              <Download className="h-4 w-4 text-[#7bd0ff]" />
              <span>{secondaryCtaLabel}</span>
            </button>

            <div className="pt-1 text-center font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold text-[#bfc7d2]/80 xl:text-right">
              {note}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
