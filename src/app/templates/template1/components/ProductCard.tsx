"use client";

import { Brain, Code2, Cpu, ShoppingCart, Star, UserRound, Volume2 } from "lucide-react";
import { Product } from "../data";

interface ProductCardProps {
  product: Product;
  onQuickAdd: (title: string) => void;
}

export default function ProductCard({ product, onQuickAdd }: ProductCardProps) {
  const badgeClasses =
    product.category === "AI Models"
      ? "bg-[#ddb7ff] text-[#490080] shadow-[0_0_12px_rgba(221,183,255,0.5)]"
      : product.category === "Audio Engines"
        ? "bg-[#6ffbbe] text-[#002113] shadow-[0_0_12px_rgba(111,251,190,0.4)]"
        : "bg-[#00f0ff] text-[#006970] shadow-[0_0_12px_rgba(0,240,255,0.5)]";

  const EngineIcon = product.category === "Audio Engines"
    ? Volume2
    : product.category === "AI Models"
      ? Brain
      : product.category === "Cyber UI Kits"
        ? Code2
        : Cpu;

  return (
    <div className="group relative flex flex-col rounded-[1rem] bg-[#191b22]/75 backdrop-blur-xl shadow-xl p-[0.75rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,240,255,0.3)]">
      <div className="pointer-events-none absolute inset-0 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#00f0ff]/10 via-transparent to-transparent" />
      <div className="relative w-full h-[13rem] rounded-[0.75rem] overflow-hidden bg-[#1e1f26]">
        <img
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.imageUrl}
        />
        {product.badgeText && (
          <span className={`absolute top-[0.5rem] left-[0.5rem] px-[0.5rem] py-[0.25rem] rounded-full ${badgeClasses} font-['Inter'] text-[11px] font-[700] tracking-[0.05em] uppercase`}>
            {product.badgeText}
          </span>
        )}
        <div className="absolute bottom-[0.5rem] right-[0.5rem] bg-[#0c0e14]/80 backdrop-blur-md px-[0.5rem] py-[0.125rem] rounded-[0.25rem] font-[monospace] text-[11px] text-[#6ffbbe] flex items-center gap-[0.25rem]">
          <EngineIcon aria-hidden="true" size={14} strokeWidth={1.75} />
          <span>{product.engine}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[0.5rem] mt-[1rem]">
        <div className="flex items-start justify-between gap-[0.5rem]">
          <h3 className="font-['Inter'] text-[20px] font-[600] text-[#e2e2eb] group-hover:text-[#00f0ff] transition-colors flex-1">
            {product.title}
          </h3>
          <div className="flex items-center gap-[0.25rem] shrink-0">
            <Star aria-hidden="true" className="text-[#6ffbbe]" fill="currentColor" size={16} />
            <span className="font-[monospace] text-[12px] text-[#e2e2eb] font-[500]">
              {product.rating}
            </span>
          </div>
        </div>
        <p className="font-['Inter'] text-[14px] leading-[20px] text-[#b9cacb] line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-[0.5rem]">
          <div className="flex flex-col">
            <span className="font-['Inter'] text-[14px] text-[#dbfcff] font-[700]">
              {product.priceType === "ETH" ? `${product.price} ETH` : `$${product.price}`}
            </span>
            <span className="font-['Inter'] text-[11px] text-[#849495]">
              {product.reviewsCount} reviews
            </span>
          </div>
          <button
            className="bg-[#00f0ff] text-[#006970] font-['Inter'] text-[12px] px-[1rem] py-[0.5rem] rounded-[0.5rem] hover:shadow-[0_0_16px_rgba(0,240,255,0.5)] transition-all flex items-center gap-[0.25rem] font-[600]"
            onClick={() => onQuickAdd(product.title)}
            type="button"
          >
            <ShoppingCart aria-hidden="true" size={18} />
            <span>Acquire</span>
          </button>
        </div>
        <div className="flex items-center gap-[0.5rem] pt-[0.5rem] border-t border-[#33343b]">
          <UserRound aria-hidden="true" className="text-[#849495]" size={16} />
          <span className="font-[monospace] text-[11px] text-[#b9cacb]">{product.author}</span>
        </div>
      </div>
    </div>
  );
}
