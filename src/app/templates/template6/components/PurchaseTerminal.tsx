"use client";

import { Check, Copy, Ruler, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { hardwareSpecs, shoeSizes } from "../data";
import BrutalistButton from "./BrutalistButton";

export default function PurchaseTerminal() {
  const [selectedSize, setSelectedSize] = useState("US 10");
  const [isQueued, setIsQueued] = useState(false);

  const handleMint = () => {
    setIsQueued(true);
    window.setTimeout(() => setIsQueued(false), 1800);
  };

  return (
    <section className="grid grid-cols-1 gap-[32px] px-[16px] py-[48px] md:px-[32px] lg:grid-cols-12">
      <div className="space-y-[32px] lg:col-span-7">
        <div className="flex flex-col gap-[8px] border-b-[1px] border-[#353535] pb-[16px]">
          <p className="text-[10px] font-[700] uppercase tracking-[0.12em] text-[#caf300]">[SYSTEM MINT CHECKOUT]</p>
          <div className="flex flex-wrap items-end justify-between gap-[16px]">
            <div>
              <h2 className="font-['Space_Grotesk'] text-[32px] font-[700] uppercase leading-none text-[#ffffff]">Our best editions</h2>
              <p className="mt-[8px] text-[10px] uppercase tracking-[0.1em] text-[#777777]">Select scale // footwear metric</p>
            </div>
            <div className="text-right"><span className="font-['Space_Grotesk'] text-[64px] font-[700] leading-none text-[#caf300]">$480 USD</span><span className="mt-[4px] block text-[9px] text-[#777777]">≈ 0.18 ETH (CALCULATED AT GAS: 18 GWEI)</span></div>
          </div>
        </div>

        <div>
          <div className="mb-[8px] flex items-center justify-between text-[10px] uppercase tracking-[0.1em] text-[#a0a0a0]"><span>Select size // US footwear metric</span><button type="button" className="flex items-center gap-[4px] text-[#caf300] underline"><Ruler className="h-[12px] w-[12px]" /> Inspection sizing charts</button></div>
          <div className="grid grid-cols-2 gap-[8px] sm:grid-cols-4 lg:grid-cols-7">
            {shoeSizes.map((size) => {
              const isSelected = selectedSize === size.size;
              return (
                <button
                  type="button"
                  key={size.size}
                  disabled={size.isSoldOut}
                  onClick={() => setSelectedSize(size.size)}
                  className={`flex flex-col border-[1px] p-[16px] text-left font-[700] transition-colors ${size.isSoldOut ? "cursor-not-allowed border-[#353535] bg-[#0e0e0e] text-[#ffb4ab] opacity-40" : isSelected ? "border-[2px] border-[#caf300] bg-[#caf300] text-[#596c00] shadow-[4px_4px_0px_0px_#ffffff]" : "border-[#353535] bg-[#0e0e0e] text-[#ffffff] hover:border-[#caf300]"}`}
                >
                  <span className="text-[16px]">{size.size}</span>
                  <span className="mt-[8px] text-[9px] uppercase tracking-[0.08em]">{size.stock}</span>
                  {isSelected && <Check className="mt-[8px] h-[16px] w-[16px]" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-y-[1px] border-[#353535] py-[16px] text-[10px] uppercase tracking-[0.1em] text-[#a0a0a0]">
          <div className="flex items-start gap-[8px]"><ShieldCheck className="h-[16px] w-[16px] shrink-0 text-[#caf300]" /><p>Immutable sale contract rules apply. Each minted specimen includes a unique cryptographic signature and physical asset registration.</p></div>
        </div>

        <BrutalistButton type="button" onClick={handleMint} className="w-full py-[16px] text-[16px]">
          {isQueued ? "ALLOCATION CONFIRMED // STANDBY" : "ENTER QUEUE // MINT SPECIMEN"}
        </BrutalistButton>
        <button type="button" className="flex w-full items-center justify-center gap-[8px] text-[10px] uppercase tracking-[0.12em] text-[#a0a0a0] underline hover:text-[#caf300]"><span className="h-[4px] w-[4px] bg-[#caf300]" /> Join secondary raffle waitlist (round 02)</button>
      </div>

      <div className="border-[2px] border-[#353535] bg-[#1b1b1b] p-[24px] lg:col-span-5">
        <div className="mb-[16px] flex items-center justify-between border-b-[1px] border-[#353535] pb-[8px]"><h3 className="text-[11px] font-[700] uppercase tracking-[0.12em] text-[#ffffff]">Material &amp; artifact metrics</h3><span className="text-[9px] text-[#caf300]">[MK_IV_DIAGNOSTIC]</span></div>
        <div className="flex flex-col">
          {hardwareSpecs.map((spec) => <div key={spec.label} className="flex justify-between gap-[16px] border-b-[1px] border-[#353535] py-[4px] text-[9px] uppercase hover:bg-[#1f1f1f]"><span className="text-[#c6c6c7]">{spec.label}</span><span className="text-right font-[700] text-[#ffffff]">{spec.value}</span></div>)}
        </div>

        <div className="mt-[24px] overflow-hidden border-[1px] border-[#353535] bg-[#0e0e0e] p-[8px]">
          <div className="mb-[8px] flex items-center justify-between text-[9px] uppercase text-[#caf300]"><span>Authenticity registration hash</span><span>NODE // TOKYO-09</span></div>
          <div className="bg-[#353535] py-[4px] text-[#ffffff] transition-colors hover:bg-[#caf300]" aria-label="Authenticity barcode">
            <svg viewBox="0 0 360 56" className="h-[56px] w-full" role="img" aria-label="Authenticity registration barcode">
              {[8, 14, 20, 28, 36, 44, 51, 60, 68, 74, 82, 91, 100, 108, 116, 124, 133, 140, 148, 156, 164, 174, 184, 192, 201, 208, 216, 224, 233, 242, 250, 258, 268, 276, 284, 294, 302, 312, 320, 330, 338].map((x, index) => <rect key={x} x={x} y={index % 3 === 0 ? 4 : 0} width={index % 4 === 0 ? 3 : 1} height={index % 3 === 0 ? 48 : 56} fill="currentColor" />)}
            </svg>
          </div>
          <div className="mt-[8px] flex items-center justify-between text-[9px] text-[#a0a0a0]"><span>SYS: 9948-MK4-VOLT-2025</span><button type="button" className="flex items-center gap-[4px] text-[#caf300] hover:text-[#ffffff]"><Copy className="h-[12px] w-[12px]" /> 150 / 150 CRYPTO-SECURED</button></div>
        </div>
      </div>
    </section>
  );
}
