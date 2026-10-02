"use client";

import { Check, Copy, Ruler, ShieldCheck } from "lucide-react";
import { useState } from "react";
import BrutalistButton from "./BrutalistButton";

interface ShoeSize {
  shoeSizeLabel: string;
  shoeSizeStock: string;
  shoeSizeSoldOut: boolean;
}

interface HardwareSpec {
  hardwareSpecLabel: string;
  hardwareSpecValue: string;
}

interface PurchaseTerminalProps {
  mintEyebrow?: string;
  mintTitle: string;
  mintSubtitle: string;
  mintPrice: string;
  mintPriceCrypto?: string;
  sizeSelectorLabel?: string;
  sizingChartsLabel?: string;
  defaultSize?: string;
  contractNote?: string;
  mintCtaLabel?: string;
  mintQueuedLabel?: string;
  raffleLabel?: string;
  specsHeading?: string;
  specsTag?: string;
  hashHeading?: string;
  hashNodeLabel?: string;
  hashSysLabel?: string;
  hashSecuredLabel?: string;
  shoeSizes: ShoeSize[];
  hardwareSpecs: HardwareSpec[];
}

export default function PurchaseTerminal({
  mintEyebrow,
  mintTitle,
  mintSubtitle,
  mintPrice,
  mintPriceCrypto,
  sizeSelectorLabel,
  sizingChartsLabel,
  defaultSize,
  contractNote,
  mintCtaLabel,
  mintQueuedLabel,
  raffleLabel,
  specsHeading,
  specsTag,
  hashHeading,
  hashNodeLabel,
  hashSysLabel,
  hashSecuredLabel,
  shoeSizes,
  hardwareSpecs,
}: PurchaseTerminalProps) {
  const [selectedSize, setSelectedSize] = useState(defaultSize ?? "");
  const [isQueued, setIsQueued] = useState(false);

  const handleMint = () => {
    setIsQueued(true);
    window.setTimeout(() => setIsQueued(false), 1800);
  };

  return (
    <section className="grid grid-cols-1 gap-[32px] px-[16px] py-[48px] md:px-[32px] lg:grid-cols-12">
      <div className="space-y-[32px] lg:col-span-7">
        <div className="flex flex-col gap-[8px] border-b-[1px] border-[#353535] pb-[16px]">
          {mintEyebrow && (
            <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#caf300]">{mintEyebrow}</p>
          )}
          <div className="flex flex-wrap items-end justify-between gap-[16px]">
            <div>
              <h2 className="font-['Space_Grotesk'] text-[32px] font-[700] uppercase leading-none text-[#ffffff]">{mintTitle}</h2>
              <p className="mt-[8px] text-[10px] uppercase tracking-[0.1em] text-[#777777]">{mintSubtitle}</p>
            </div>
            <div className="text-right"><span className="font-['Space_Grotesk'] text-[64px] font-[700] leading-none text-[#caf300]">{mintPrice}</span>{mintPriceCrypto && <span className="mt-[4px] block text-[9px] text-[#777777]">{mintPriceCrypto}</span>}</div>
          </div>
        </div>

        <div>
          {(sizeSelectorLabel || sizingChartsLabel) && (
            <div className="mb-[8px] flex items-center justify-between text-[10px] uppercase tracking-[0.1em] text-[#a0a0a0]"><span>{sizeSelectorLabel}</span>{sizingChartsLabel && (
              <button type="button" className="flex items-center gap-[4px] text-[#caf300] underline"><Ruler className="h-[12px] w-[12px]" /> {sizingChartsLabel}</button>
            )}</div>
          )}
          <div className="grid grid-cols-2 gap-[8px] sm:grid-cols-4 lg:grid-cols-7">
            {shoeSizes.map((size) => {
              const isSelected = selectedSize === size.shoeSizeLabel;
              return (
                <button
                  type="button"
                  key={size.shoeSizeLabel}
                  disabled={size.shoeSizeSoldOut}
                  onClick={() => setSelectedSize(size.shoeSizeLabel)}
                  className={`flex flex-col border-[1px] p-[16px] text-left font-[700] transition-colors ${size.shoeSizeSoldOut ? "cursor-not-allowed border-[#353535] bg-[#0e0e0e] text-[#ffb4ab] opacity-40" : isSelected ? "border-[2px] border-[#caf300] bg-[#caf300] text-[#596c00] shadow-[4px_4px_0px_0px_#ffffff]" : "border-[#353535] bg-[#0e0e0e] text-[#ffffff] hover:border-[#caf300]"}`}
                >
                  <span className="text-[16px]">{size.shoeSizeLabel}</span>
                  <span className="mt-[8px] text-[9px] uppercase tracking-[0.08em]">{size.shoeSizeStock}</span>
                  {isSelected && <Check className="mt-[8px] h-[16px] w-[16px]" />}
                </button>
              );
            })}
          </div>
        </div>

        {contractNote && (
          <div className="border-y-[1px] border-[#353535] py-[16px] text-[10px] uppercase tracking-[0.1em] text-[#a0a0a0]">
            <div className="flex items-start gap-[8px]"><ShieldCheck className="h-[16px] w-[16px] shrink-0 text-[#caf300]" /><p>{contractNote}</p></div>
          </div>
        )}

        <BrutalistButton type="button" onClick={handleMint} className="w-full py-[16px] text-[16px]">
          {isQueued ? mintQueuedLabel : mintCtaLabel}
        </BrutalistButton>
        {raffleLabel && (
          <button type="button" className="flex w-full items-center justify-center gap-[8px] text-[10px] uppercase tracking-[0.12em] text-[#a0a0a0] underline hover:text-[#caf300]"><span className="h-[4px] w-[4px] bg-[#caf300]" /> {raffleLabel}</button>
        )}
      </div>

      <div className="border-[2px] border-[#353535] bg-[#1b1b1b] p-[24px] lg:col-span-5">
        <div className="mb-[16px] flex items-center justify-between border-b-[1px] border-[#353535] pb-[8px]">{specsHeading && <h3 className="text-[11px] font-[700] uppercase tracking-[0.12em] text-[#ffffff]">{specsHeading}</h3>}{specsTag && <span className="text-[9px] text-[#caf300]">{specsTag}</span>}</div>
        <div className="flex flex-col">
          {hardwareSpecs.map((spec) => <div key={spec.hardwareSpecLabel} className="flex justify-between gap-[16px] border-b-[1px] border-[#353535] py-[4px] text-[9px] uppercase hover:bg-[#1f1f1f]"><span className="text-[#c6c6c7]">{spec.hardwareSpecLabel}</span><span className="text-right font-[700] text-[#ffffff]">{spec.hardwareSpecValue}</span></div>)}
        </div>

        <div className="mt-[24px] overflow-hidden border-[1px] border-[#353535] bg-[#0e0e0e] p-[8px]">
          <div className="mb-[8px] flex items-center justify-between text-[9px] uppercase text-[#caf300]">{hashHeading && <span>{hashHeading}</span>}{hashNodeLabel && <span>{hashNodeLabel}</span>}</div>
          <div className="bg-[#353535] py-[4px] text-[#ffffff] transition-colors hover:bg-[#caf300]" aria-label="Authenticity barcode">
            <svg viewBox="0 0 360 56" className="h-[56px] w-full" role="img" aria-label="Authenticity registration barcode">
              {[8, 14, 20, 28, 36, 44, 51, 60, 68, 74, 82, 91, 100, 108, 116, 124, 133, 140, 148, 156, 164, 174, 184, 192, 201, 208, 216, 224, 233, 242, 250, 258, 268, 276, 284, 294, 302, 312, 320, 330, 338].map((x, index) => <rect key={x} x={x} y={index % 3 === 0 ? 4 : 0} width={index % 4 === 0 ? 3 : 1} height={index % 3 === 0 ? 48 : 56} fill="currentColor" />)}
            </svg>
          </div>
          <div className="mt-[8px] flex items-center justify-between text-[9px] text-[#a0a0a0]">{hashSysLabel && <span>{hashSysLabel}</span>}{hashSecuredLabel && (
            <button type="button" className="flex items-center gap-[4px] text-[#caf300] hover:text-[#ffffff]"><Copy className="h-[12px] w-[12px]" /> {hashSecuredLabel}</button>
          )}</div>
        </div>
      </div>
    </section>
  );
}
