import { Plus, Star } from "lucide-react";
import type { Product } from "../data";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-[1rem] bg-[#ffffff] p-[1rem] rounded-[0.5rem] border border-[#e5e7eb] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07)] transition-all">
      <div
        className="md:col-span-3 cursor-pointer relative bg-[#f1f3ff] aspect-square rounded-[0.5rem] flex items-center justify-center p-[0.5rem]"
        onClick={() => onViewDetails(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") onViewDetails(product);
        }}
      >
        {product.badgeText === "Lightning Deal" && (
          <span className="absolute top-[0.5rem] left-[0.5rem] z-10 bg-[#ba1a1a] text-[#ffffff] font-['Inter'] text-[12px] font-[700] px-[0.5rem] py-[0.25rem] rounded-[0.25rem]">
            {product.badgeText}
          </span>
        )}
        <img alt={product.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" src={product.primaryImage} />
      </div>
      <div className="md:col-span-6 space-y-[0.25rem]">
        <h2
          className="font-['Inter'] text-[16px] font-[600] text-[#141b2b] hover:text-[#2563eb] cursor-pointer"
          onClick={() => onViewDetails(product)}
        >
          {product.title}
        </h2>
        <div className="flex flex-wrap items-center gap-[0.5rem]">
          <div className="flex items-center gap-[0.125rem] text-[#fea619]" aria-label={`${product.rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star fill={star <= Math.round(product.rating) ? "currentColor" : "none"} key={star} size={16} />
            ))}
            <span className="font-['Inter'] text-[13px] text-[#141b2b] ml-[0.25rem]">{product.rating}</span>
          </div>
          <span className="font-['Inter'] text-[13px] text-[#2563eb]">({product.reviewsCount.toLocaleString()} reviews)</span>
          <span className="font-['Inter'] text-[11px] text-[#737686]">{product.salesVolume}</span>
        </div>
        <ul className="pt-[0.5rem] text-[13px] text-[#434655] list-disc pl-[1rem]">
          {product.keySpecs.map((spec) => <li key={spec}>{spec}</li>)}
        </ul>
        <p className="font-['Inter'] text-[13px] font-[600] text-[#2563eb] pt-[0.5rem]">FREE delivery {product.deliveryDate}</p>
      </div>
      <div className="md:col-span-3 bg-[#f1f3ff] p-[1rem] rounded-[0.5rem] border border-[#d1d5db]">
        <div className="flex items-baseline gap-[0.5rem]">
          <span className="text-[12px] text-[#434655] bg-[#ba1a1a] text-[#ffffff] px-[0.25rem] py-[0.125rem] rounded-[0.125rem]">{product.discount}</span>
          <span className="text-[28px] font-[700] text-[#141b2b]">{product.currentPrice}</span>
        </div>
        <p className="font-['Inter'] text-[12px] text-[#737686]">List Price: <span className="line-through">{product.listPrice}</span></p>
        <button
          className="w-full bg-[#fea619] hover:bg-[#855300] text-[#141b2b] font-[600] py-[0.5rem] rounded-[0.25rem] flex items-center justify-center gap-2 mt-[1rem]"
          onClick={() => onAddToCart(product)}
          type="button"
        >
          <Plus aria-hidden="true" size={18} />
          Add to Cart
        </button>
        <button className="w-full bg-[#dce2f7] hover:bg-[#c3c6d7] text-[#141b2b] font-['Inter'] text-[13px] font-[600] py-[0.5rem] rounded-[0.25rem] mt-[0.5rem]" onClick={() => onViewDetails(product)} type="button">
          View Details
        </button>
      </div>
    </article>
  );
}
