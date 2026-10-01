import { Plus, Star } from "lucide-react";

interface ProductCardData {
  productId: string;
  productTitle: string;
  productListPrice?: string;
  productCurrentPrice: string;
  productDiscount?: string;
  productRating?: number;
  productReviewsCount?: number;
  productSalesVolume?: string;
  productDeliveryDate?: string;
  productBadgeText?: string;
  productPrimaryImage: string;
  productColorSwatches?: string[];
  productKeySpecs: string[];
}

interface ProductCardProps {
  product: ProductCardData;
  addToCartLabel: string;
  viewDetailsLabel: string;
  reviewsSuffix: string;
  listPriceLabel: string;
  freeDeliveryPrefix: string;
  dealBadge: string;
  onAddToCart: (product: ProductCardData) => void;
  onViewDetails: (product: ProductCardData) => void;
}

export default function ProductCard({
  product,
  addToCartLabel,
  viewDetailsLabel,
  reviewsSuffix,
  listPriceLabel,
  freeDeliveryPrefix,
  dealBadge,
  onAddToCart,
  onViewDetails,
}: ProductCardProps) {
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
        {product.productBadgeText && product.productBadgeText === dealBadge && (
          <span className="absolute top-[0.5rem] left-[0.5rem] z-10 bg-[#ba1a1a] text-[#ffffff] font-['Inter'] text-[12px] font-[700] px-[0.5rem] py-[0.25rem] rounded-[0.25rem]">
            {product.productBadgeText}
          </span>
        )}
        <img alt={product.productTitle} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" src={product.productPrimaryImage} />
      </div>
      <div className="md:col-span-6 space-y-[0.25rem]">
        <h2
          className="font-['Inter'] text-[16px] font-[600] text-[#141b2b] hover:text-[#2563eb] cursor-pointer"
          onClick={() => onViewDetails(product)}
        >
          {product.productTitle}
        </h2>
        <div className="flex flex-wrap items-center gap-[0.5rem]">
          {product.productRating !== undefined && (
            <div className="flex items-center gap-[0.125rem] text-[#fea619]" aria-label={`${product.productRating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star fill={star <= Math.round(product.productRating ?? 0) ? "currentColor" : "none"} key={star} size={16} />
              ))}
              <span className="font-['Inter'] text-[13px] text-[#141b2b] ml-[0.25rem]">{product.productRating}</span>
            </div>
          )}
          {product.productReviewsCount !== undefined && (
            <span className="font-['Inter'] text-[13px] text-[#2563eb]">({product.productReviewsCount.toLocaleString()} {reviewsSuffix})</span>
          )}
          {product.productSalesVolume && <span className="font-['Inter'] text-[11px] text-[#737686]">{product.productSalesVolume}</span>}
        </div>
        <ul className="pt-[0.5rem] text-[13px] text-[#434655] list-disc pl-[1rem]">
          {product.productKeySpecs.map((spec) => <li key={spec}>{spec}</li>)}
        </ul>
        {product.productDeliveryDate && (
          <p className="font-['Inter'] text-[13px] font-[600] text-[#2563eb] pt-[0.5rem]">{freeDeliveryPrefix} {product.productDeliveryDate}</p>
        )}
      </div>
      <div className="md:col-span-3 bg-[#f1f3ff] p-[1rem] rounded-[0.5rem] border border-[#d1d5db]">
        <div className="flex items-baseline gap-[0.5rem]">
          {product.productDiscount && (
            <span className="text-[12px] text-[#434655] bg-[#ba1a1a] text-[#ffffff] px-[0.25rem] py-[0.125rem] rounded-[0.125rem]">{product.productDiscount}</span>
          )}
          <span className="text-[28px] font-[700] text-[#141b2b]">{product.productCurrentPrice}</span>
        </div>
        {product.productListPrice && (
          <p className="font-['Inter'] text-[12px] text-[#737686]">{listPriceLabel} <span className="line-through">{product.productListPrice}</span></p>
        )}
        <button
          className="w-full bg-[#fea619] hover:bg-[#855300] text-[#141b2b] font-[600] py-[0.5rem] rounded-[0.25rem] flex items-center justify-center gap-2 mt-[1rem]"
          onClick={() => onAddToCart(product)}
          type="button"
        >
          <Plus aria-hidden="true" size={18} />
          {addToCartLabel}
        </button>
        <button className="w-full bg-[#dce2f7] hover:bg-[#c3c6d7] text-[#141b2b] font-['Inter'] text-[13px] font-[600] py-[0.5rem] rounded-[0.25rem] mt-[0.5rem]" onClick={() => onViewDetails(product)} type="button">
          {viewDetailsLabel}
        </button>
      </div>
    </article>
  );
}
