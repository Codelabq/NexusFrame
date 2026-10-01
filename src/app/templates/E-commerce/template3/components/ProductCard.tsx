import { Plus, Star } from "lucide-react";
import type { Product } from "../data";

interface ProductCardProps {
  product: Product;
  onQuickAdd: (title: string) => void;
}

export default function ProductCard({ product, onQuickAdd }: ProductCardProps) {
  return (
    <div className="group relative rounded-[1.5rem] bg-[#ffffff] p-[1rem] shadow-[0_4px_20px_-2px_rgba(244,114,182,0.08)] hover:shadow-[0_12px_32px_-4px_rgba(244,114,182,0.14)] transition-all duration-300 flex flex-col justify-between">
      <div className="relative aspect-square w-full rounded-[1rem] bg-[#f9f1f6] overflow-hidden mb-[1rem] flex items-center justify-center">
        <span className="absolute top-[0.75rem] left-[0.75rem] z-10 px-[0.75rem] py-[0.25rem] rounded-full bg-[#ffd8e7] text-[#3d0026] font-['Inter'] text-[10px] font-[700] tracking-[0.06em] uppercase">
          {product.badgeText}
        </span>
        <img
          alt={product.title}
          className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
          src={product.primaryImage}
        />
        <button
          aria-label={`Quick add ${product.title}`}
          className="absolute bottom-[0.75rem] right-[0.75rem] w-10 h-10 rounded-full bg-[#fff7fb]/90 backdrop-blur-md text-[#1e1b1e] hover:bg-[#a43073] hover:text-[#ffffff] shadow-md flex items-center justify-center transition-all duration-200 active:scale-90"
          onClick={() => onQuickAdd(product.title)}
          type="button"
        >
          <Plus aria-hidden="true" size={20} />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-[0.5rem] mb-[0.5rem]">
          <div className="flex items-center gap-[0.25rem] font-['Inter'] text-[12px] text-[#a43073]">
            <Star aria-hidden="true" fill="currentColor" size={14} />
            <span>{product.rating}</span>
            <span className="text-[#87717a]">({product.reviewsCount})</span>
          </div>
          <div className="flex items-center gap-[0.25rem]">
            {product.colorSwatches.map((color) => (
              <span
                aria-label={`Color ${color}`}
                className="w-[0.875rem] h-[0.875rem] rounded-full shadow-sm"
                key={color}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] font-[600] text-[#1e1b1e] group-hover:text-[#a43073] transition-colors">
          {product.title}
        </h3>
        <p className="font-['Inter'] text-[13px] leading-[18px] text-[#544249] mt-[0.25rem]">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-[0.5rem] mt-[1rem] pt-[0.75rem] border-t border-[#dac0c9]">
          <span className="font-['Plus_Jakarta_Sans'] text-[28px] font-[600] text-[#1e1b1e]">
            {product.price}
          </span>
          <div className="flex flex-wrap justify-end gap-[0.25rem]">
            {product.sizes.map((size) => (
              <span
                className="px-[0.5rem] py-[0.125rem] rounded-full bg-[#eee6ea] font-['Inter'] text-[10px] font-[600] text-[#544249]"
                key={size}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
