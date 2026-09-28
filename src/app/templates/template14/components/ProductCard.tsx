"use client";

/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Cpu, Gauge, HardDrive, Ruler, ShoppingCart, Zap } from "lucide-react";
import type { siliconCraftProduct } from "@/types/index";
import { toneTextClass } from "./tones";
import type { Tone } from "./types";

const glowClasses: Record<string, string> = {
  primary: "bg-[radial-gradient(ellipse_at_center,rgba(147,204,255,0.1),transparent_70%)]",
  secondary: "bg-[radial-gradient(ellipse_at_center,rgba(123,208,255,0.1),transparent_70%)]",
  tertiarySoft: "bg-[radial-gradient(ellipse_at_center,rgba(0,218,243,0.15),transparent_70%)]",
  tertiaryStrong: "bg-[radial-gradient(ellipse_at_center,rgba(0,218,243,0.2),transparent_70%)]",
  primaryContainer:
    "bg-[radial-gradient(ellipse_at_center,rgba(49,152,220,0.2),transparent_70%)]",
  secondaryContainer:
    "bg-[radial-gradient(ellipse_at_center,rgba(0,166,224,0.15),transparent_70%)]",
};

const specIcons = [Cpu, Gauge, Ruler, HardDrive];

const formatCurrency = (value: number): string =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

interface ProductCardProps {
  product: siliconCraftProduct;
  isCompared: boolean;
  inCartQty: number;
  compareLabel: string;
  configureLabel: string;
  onToggleCompare: (product: siliconCraftProduct) => void;
  onAddToCart: (product: siliconCraftProduct) => void;
  onOpenDetails: (product: siliconCraftProduct) => void;
}

export default function ProductCard({
  product,
  isCompared,
  inCartQty,
  compareLabel,
  configureLabel,
  onToggleCompare,
  onAddToCart,
  onOpenDetails,
}: ProductCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[0.75rem] bg-[#122131] shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Visual container */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpenDetails(product)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpenDetails(product);
          }
        }}
        aria-label={`View specifications for ${product.productCode}`}
        className="relative flex h-64 w-full cursor-pointer items-center justify-center overflow-hidden bg-[#010f1f]"
      >
        <div
          className={`absolute inset-0 opacity-70 transition-transform duration-500 group-hover:scale-110 ${glowClasses[product.productGlow] ?? glowClasses.primary}`}
        />
        <img
          src={product.productImage}
          alt={product.productImageAlt}
          className="h-full w-full object-cover mix-blend-luminosity transition-all duration-300 hover:mix-blend-normal"
        />

        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#010f1f]/90 px-2.5 py-1 shadow-sm backdrop-blur-md">
          {product.productStatusKind === "in-stock" ? (
            <span className="h-2 w-2 rounded-full bg-[#34d399]" />
          ) : (
            <Zap className="h-3 w-3 text-[#00daf3]" />
          )}
          <span
            className={`font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold ${
              product.productStatusKind === "in-stock" ? "text-[#34d399]" : "text-[#00daf3]"
            }`}
          >
            {product.productStatusLabel}
          </span>
        </div>

        <div
          className={`absolute right-3 top-3 rounded-[0.25rem] bg-[#1c2b3c]/80 px-2 py-0.5 font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold ${toneTextClass(
            product.productMetricTone as Tone,
          )}`}
        >
          {product.productMetricLabel}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between gap-[1rem] p-[1rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <div className="flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-widest uppercase text-[#7bd0ff]">
              {product.productCode}
            </span>
            <span className="rounded-[0.25rem] bg-[#1c2b3c] px-2 py-0.5 font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#bfc7d2]">
              {product.productRev}
            </span>
          </div>
          <h3 className="font-['Inter'] text-[20px] font-semibold leading-tight tracking-[-0.015em] text-[#d4e4fa]">
            {product.productTitle}
          </h3>
          <p className="font-['Inter'] text-[13px] leading-[20px] text-[#bfc7d2]">
            {product.productDescription}
          </p>
        </div>

        {/* Hardware spec matrix */}
        <div className="grid grid-cols-2 gap-[0.5rem] font-['JetBrains_Mono'] text-[13px] leading-[20px]">
          {product.productSpecs.map((spec, index) => {
            const SpecIcon = specIcons[index] ?? Cpu;
            return (
              <div key={spec.productSpecLabel} className="flex flex-col rounded-[0.5rem] bg-[#0d1c2d] p-2">
                <span className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#bfc7d2]">
                  <SpecIcon className={`h-3 w-3 ${toneTextClass(spec.productSpecTone as Tone)}`} />
                  {spec.productSpecLabel}
                </span>
                <span className="mt-0.5 truncate text-xs font-semibold text-[#d4e4fa]">
                  {spec.productSpecValue}
                </span>
                <span className="text-[10px] text-[#bfc7d2]">{spec.productSpecSub}</span>
              </div>
            );
          })}
        </div>

        {/* Price + actions */}
        <div className="flex flex-col gap-[0.75rem] rounded-[0.5rem] bg-[#0d1c2d]/50 p-[0.75rem] pt-[0.5rem]">
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex flex-wrap items-baseline">
              <span className="font-['JetBrains_Mono'] text-[20px] font-semibold tracking-[-0.02em] text-[#d4e4fa]">
                {formatCurrency(product.productPrice)}
              </span>
              <span className="ml-1.5 font-['JetBrains_Mono'] text-[12px] leading-[16px] text-[#bfc7d2]">
                {product.productMonthly}
              </span>
            </div>

            <label className="flex cursor-pointer select-none items-center gap-1.5 font-['JetBrains_Mono'] text-[12px] leading-[16px] text-[#bfc7d2] transition-colors hover:text-[#d4e4fa]">
              <input
                type="checkbox"
                checked={isCompared}
                onChange={() => onToggleCompare(product)}
                className="h-3.5 w-3.5 cursor-pointer rounded-[0.25rem] border-0 bg-[#1c2b3c] accent-[#93ccff]"
              />
              <span>{compareLabel}</span>
            </label>
          </div>

          <div className="flex items-center gap-[0.5rem]">
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              aria-label={`Add ${product.productCode} to cart`}
              className="relative flex h-[38px] w-[38px] shrink-0 cursor-pointer items-center justify-center rounded-[0.5rem] border border-[#3f4850]/60 bg-[#010f1f] text-[#d4e4fa] transition-all hover:border-[#93ccff]/50 hover:bg-[#1c2b3c] hover:text-[#93ccff] active:scale-95"
            >
              <ShoppingCart className="h-[18px] w-[18px]" />
              {inCartQty > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#93ccff] px-1 font-['JetBrains_Mono'] text-[10px] font-semibold text-[#003351]">
                  {inCartQty}
                </span>
              ) : null}
            </button>

            <button
              type="button"
              onClick={() => onOpenDetails(product)}
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] bg-[#93ccff] px-[1rem] py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#003351] shadow-sm transition-all hover:bg-[#3198dc] hover:text-[#002c47] active:scale-95"
            >
              <span>{configureLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
