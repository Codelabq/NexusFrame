"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { CheckCircle2, Cpu, Gauge, HardDrive, Ruler, Scale, ShoppingCart, X } from "lucide-react";
import type { LaptopShops01Product } from "../types";
import { toneTextClass } from "./tones";
import type { Tone } from "../types";

const glowClasses: Record<string, string> = {
  primary: "bg-[radial-gradient(ellipse_at_center,rgba(147,204,255,0.12),transparent_70%)]",
  secondary: "bg-[radial-gradient(ellipse_at_center,rgba(123,208,255,0.12),transparent_70%)]",
  tertiarySoft: "bg-[radial-gradient(ellipse_at_center,rgba(0,218,243,0.16),transparent_70%)]",
  tertiaryStrong: "bg-[radial-gradient(ellipse_at_center,rgba(0,218,243,0.2),transparent_70%)]",
  primaryContainer:
    "bg-[radial-gradient(ellipse_at_center,rgba(49,152,220,0.2),transparent_70%)]",
  secondaryContainer:
    "bg-[radial-gradient(ellipse_at_center,rgba(0,166,224,0.16),transparent_70%)]",
};

const specIcons = [Cpu, Gauge, Ruler, HardDrive];

const formatCurrency = (value: number): string =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

interface ProductDetailsModalProps {
  product: LaptopShops01Product | null;
  isCompared: boolean;
  highlightsHeading: string;
  techSheetLabels: string[];
  addToCartLabel: string;
  addToCompareLabel: string;
  inCompareLabel: string;
  leadTimeLabel: string;
  onClose: () => void;
  onAddToCart: (product: LaptopShops01Product) => void;
  onToggleCompare: (product: LaptopShops01Product) => void;
}

export default function ProductDetailsModal({
  product,
  isCompared,
  highlightsHeading,
  techSheetLabels,
  addToCartLabel,
  addToCompareLabel,
  inCompareLabel,
  leadTimeLabel,
  onClose,
  onAddToCart,
  onToggleCompare,
}: ProductDetailsModalProps) {
  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const techSheet = [
    { label: techSheetLabels[0], value: product.productDimensions },
    { label: techSheetLabels[1], value: product.productWeight },
    { label: techSheetLabels[2], value: product.productPower },
    { label: techSheetLabels[3], value: product.productWarranty },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={product.productCode}
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto p-[1rem]"
    >
      <div onClick={onClose} className="absolute inset-0 bg-[#000000]/70 backdrop-blur-sm" />

      <div className="relative z-10 my-auto w-full max-w-[980px] overflow-hidden rounded-[0.75rem] border border-[#3f4850]/60 bg-[#122131] shadow-[0_30px_70px_rgba(0,0,0,0.65)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close configuration details"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#010f1f]/90 text-[#d4e4fa] shadow-sm backdrop-blur-md transition-all hover:bg-[#1c2b3c] active:scale-90"
        >
          <X className="h-[18px] w-[18px]" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Visual */}
          <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-[#010f1f] lg:col-span-5 lg:h-full lg:min-h-[460px]">
            <div className={`absolute inset-0 opacity-80 ${glowClasses[product.productGlow] ?? glowClasses.primary}`} />
            <img
              src={product.productImage}
              alt={product.productImageAlt}
              className="h-full w-full object-cover mix-blend-luminosity"
            />
            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#010f1f]/90 px-2.5 py-1 shadow-sm backdrop-blur-md">
              <span
                className={`font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold ${
                  product.productStatusKind === "in-stock" ? "text-[#34d399]" : "text-[#00daf3]"
                }`}
              >
                {product.productStatusLabel}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-[1rem] p-[1.5rem] lg:col-span-7">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-widest uppercase text-[#7bd0ff]">
                  {product.productCode}
                </span>
                <span className="rounded-[0.25rem] bg-[#1c2b3c] px-2 py-0.5 font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold text-[#bfc7d2]">
                  {product.productRev}
                </span>
                <span
                  className={`rounded-[0.25rem] bg-[#1c2b3c]/70 px-2 py-0.5 font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold ${toneTextClass(
                    product.productMetricTone as Tone,
                  )}`}
                >
                  {product.productMetricLabel}
                </span>
              </div>
              <h2 className="font-['Inter'] text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[#d4e4fa] md:text-[28px]">
                {product.productTitle}
              </h2>
              <p className="font-['Inter'] text-[15px] leading-[24px] tracking-[-0.005em] text-[#bfc7d2]">
                {product.productLongDescription}
              </p>
            </div>

            {/* Spec matrix */}
            <div className="grid grid-cols-2 gap-[0.5rem] font-['JetBrains_Mono'] text-[13px] leading-[20px]">
              {product.productSpecs.map((spec, index) => {
                const SpecIcon = specIcons[index] ?? Cpu;
                return (
                  <div
                    key={spec.productSpecLabel}
                    className="flex flex-col rounded-[0.5rem] bg-[#0d1c2d] p-2.5"
                  >
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

            {/* Highlights */}
            <div className="flex flex-col gap-[0.5rem]">
              <h3 className="font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold uppercase tracking-widest text-[#bfc7d2]">
                {highlightsHeading}
              </h3>
              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {product.productHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-[2px] h-4 w-4 flex-shrink-0 text-[#93ccff]" />
                    <span className="font-['Inter'] text-[13px] leading-[20px] text-[#bfc7d2]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech sheet */}
            <div className="grid grid-cols-1 gap-1 rounded-[0.5rem] bg-[#0d1c2d] p-[0.75rem] sm:grid-cols-2">
              {techSheet.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-2">
                  <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] text-[#bfc7d2]">
                    {row.label}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold text-[#d4e4fa]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price + actions */}
            <div className="mt-auto flex flex-col gap-[0.75rem] border-t border-[#3f4850]/50 pt-[1rem]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex flex-wrap items-baseline">
                  <span className="font-['JetBrains_Mono'] text-[28px] font-semibold tracking-[-0.02em] text-[#d4e4fa]">
                    {formatCurrency(product.productPrice)}
                  </span>
                  <span className="ml-1.5 font-['JetBrains_Mono'] text-[13px] leading-[20px] text-[#bfc7d2]">
                    {product.productMonthly}
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] text-[#89929b]">
                  {product.productLeadTimeDays <= 1 ? `${leadTimeLabel} 24h` : `${leadTimeLabel} ${product.productLeadTimeDays} days`}
                </span>
              </div>

              <div className="flex flex-col gap-[0.5rem] sm:flex-row">
                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] bg-[#93ccff] px-[1rem] py-2.5 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#003351] shadow-sm transition-all hover:bg-[#3198dc] hover:text-[#002c47] active:scale-95"
                >
                  <ShoppingCart className="h-[18px] w-[18px]" />
                  <span>{addToCartLabel}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onToggleCompare(product)}
                  className={`flex cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] border px-[1rem] py-2.5 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-medium transition-all active:scale-95 ${
                    isCompared
                      ? "border-[#93ccff]/50 bg-[#93ccff]/10 text-[#93ccff]"
                      : "border-[#3f4850]/60 bg-[#1c2b3c] text-[#d4e4fa] hover:bg-[#273647]"
                  }`}
                >
                  <Scale className="h-4 w-4" />
                  <span>{isCompared ? inCompareLabel : addToCompareLabel}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
