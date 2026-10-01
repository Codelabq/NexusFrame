"use client";

import {
  ChevronRight,
  CreditCard,
  RotateCcw,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import type { TrustPillar } from "../types";

interface TrustSectionProps {
  overline?: string;
  title?: string;
  body?: string;
  pillars?: TrustPillar[];
  onPillarSelect: (pillar: TrustPillar) => void;
}

const pillarIcons: Record<string, LucideIcon> = {
  inspection: ShieldCheck,
  financing: CreditCard,
  guarantee: RotateCcw,
  delivery: Truck,
};

export default function TrustSection({
  overline,
  title,
  body,
  pillars,
  onPillarSelect,
}: TrustSectionProps) {
  return (
    <section className="w-full border-t border-[#bfc7d2]/15 bg-[#ffffff] px-[1rem] py-[2rem] md:px-[2rem] md:py-[2.5rem]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[1.5rem]">
        {(overline || title || body) && (
          <Reveal delay={60} className="flex max-w-2xl flex-col gap-1">
            {overline && (
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-widest text-[#006194]">
                {overline}
              </span>
            )}
            {title && (
              <h2 className="font-['Plus_Jakarta_Sans'] text-[26px] leading-[32px] font-extrabold tracking-[-0.025em] text-[#0b1c30] md:text-[36px] md:leading-[42px]">
                {title}
              </h2>
            )}
            {body && (
              <p className="font-['Manrope'] text-[15px] leading-[24px] tracking-[-0.005em] text-[#3f4850]">
                {body}
              </p>
            )}
          </Reveal>
        )}

        {pillars && pillars.length > 0 && (
          <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[pillar.trustPillarId] ?? ShieldCheck;
              return (
                <Reveal key={pillar.trustPillarId} delay={140 + index * 80}>
                  <button
                    type="button"
                    onClick={() => onPillarSelect(pillar)}
                    className="group flex h-full w-full cursor-pointer flex-col justify-between gap-[1rem] rounded-[0.5rem] border border-[#bfc7d2]/25 bg-[#eff4ff] p-[1.5rem] text-left transition-all duration-300 hover:border-[#006194]/50 hover:bg-[#ffffff] hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-[0.5rem]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[0.5rem] bg-[#006194]/10 text-[#006194] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#006194] group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-semibold tracking-[-0.015em] text-[#0b1c30] transition-colors group-hover:text-[#006194]">
                        {pillar.trustPillarTitle}
                      </h3>
                      <p className="font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
                        {pillar.trustPillarDescription}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 font-['Manrope'] text-[14px] leading-[20px] font-bold text-[#006194] group-hover:underline">
                      <span>{pillar.trustPillarCta}</span>
                      <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
