"use client";

/* eslint-disable @next/next/no-img-element */
import { Scale, Trash2, X } from "lucide-react";
import type { LaptopShops01Product } from "../types";

const formatCurrency = (value: number): string =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

interface CompareFlyoutProps {
  open: boolean;
  products: LaptopShops01Product[];
  title: string;
  selectedLabel: string;
  emptyLabel: string;
  benchmarkLabel: string;
  clearLabel: string;
  note: string;
  onClose: () => void;
  onRemove: (productId: string) => void;

}

export default function CompareFlyout({
  open,
  products,
  title,
  selectedLabel,
  emptyLabel,
  benchmarkLabel,
  clearLabel,
  note,
  onClose,
  onRemove,

}: CompareFlyoutProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Compare configurations"
      className="fixed inset-0 z-[78] flex items-center justify-center overflow-y-auto p-[1rem]"
    >
      <div onClick={onClose} className="absolute inset-0 bg-[#000000]/70 backdrop-blur-sm" />

      <div className="relative z-10 my-auto w-full max-w-[960px] overflow-hidden rounded-[0.75rem] border border-[#3f4850]/60 bg-[#122131] p-[1.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.65)]">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7bd0ff]/10">
              <Scale className="h-[18px] w-[18px] text-[#7bd0ff]" />
            </span>
            <div className="flex flex-col">
              <span className="font-['Inter'] text-[18px] font-semibold leading-[24px] text-[#d4e4fa]">
                {title}
              </span>
              <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] text-[#bfc7d2]">
                {products.length} {products.length === 1 ? "system" : "systems"} {selectedLabel}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close compare"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#89929b] transition-colors hover:bg-[#1c2b3c] hover:text-[#d4e4fa]"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        {products.length === 0 ? (
          <p className="mt-[1.5rem] font-['Inter'] text-[14px] leading-[22px] text-[#bfc7d2]">
            {emptyLabel}
          </p>
        ) : (
          <div className="mt-[1.5rem] grid grid-cols-1 gap-[0.75rem] sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.productId}
                className="flex flex-col gap-[0.75rem] rounded-[0.5rem] border border-[#3f4850]/50 bg-[#0d1c2d] p-[0.75rem]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="font-['JetBrains_Mono'] text-[11px] leading-[15px] tracking-widest uppercase text-[#7bd0ff]">
                      {product.productCode}
                    </span>
                    <span className="font-['Inter'] text-[14px] font-medium leading-[20px] text-[#d4e4fa]">
                      {product.productTitle}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(product.productId)}
                    aria-label={`Remove ${product.productCode} from compare`}
                    className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-[#89929b] transition-colors hover:bg-[#ffb4ab]/10 hover:text-[#ffb4ab]"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="h-[96px] w-full overflow-hidden rounded-[0.5rem] bg-[#010f1f]">
                  <img
                    src={product.productImage}
                    alt={product.productImageAlt}
                    className="h-full w-full object-cover mix-blend-luminosity"
                  />
                </div>

                <dl className="flex flex-col gap-1">
                  {product.productSpecs.map((spec) => (
                    <div key={spec.productSpecLabel} className="flex items-baseline justify-between gap-2">
                      <dt className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#bfc7d2]">
                        {spec.productSpecLabel}
                      </dt>
                      <dd className="truncate font-['JetBrains_Mono'] text-[12px] font-semibold text-[#d4e4fa]">
                        {spec.productSpecValue}
                      </dd>
                    </div>
                  ))}
                  <div className="mt-1 flex items-baseline justify-between gap-2 border-t border-[#3f4850]/50 pt-1.5">
                    <dt className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#bfc7d2]">
                      {benchmarkLabel}
                    </dt>
                    <dd className="font-['JetBrains_Mono'] text-[12px] font-semibold text-[#7bd0ff]">
                      {product.productBenchmark.toLocaleString("en-US")}
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#3f4850]/50 pt-[0.75rem]">
                  <span className="font-['JetBrains_Mono'] text-[16px] font-semibold tracking-[-0.02em] text-[#d4e4fa]">
                    {formatCurrency(product.productPrice)}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[11px] leading-[15px] text-[#bfc7d2]">
                    {product.productLeadTimeDays <= 1 ? "24h" : `${product.productLeadTimeDays}d`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {products.length > 0 ? (
          <div className="mt-[1.5rem] flex items-center justify-between gap-3">
            <button
              type="button"

              className="cursor-pointer rounded-[0.5rem] bg-[#1c2b3c] px-[1rem] py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#d4e4fa] transition-colors hover:bg-[#2c3a4c] active:scale-95"
            >
              {clearLabel}
            </button>
            <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] text-[#bfc7d2]">
              {note}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
