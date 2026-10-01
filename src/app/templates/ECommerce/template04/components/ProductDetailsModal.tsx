import { X } from "lucide-react";

interface ProductDetailsData {
  productTitle: string;
  productBadgeText?: string;
  productRating?: number;
  productReviewsCount?: number;
  productCurrentPrice: string;
  productListPrice?: string;
  productDiscount?: string;
  productDeliveryDate?: string;
  productPrimaryImage: string;
  productKeySpecs: string[];
}

interface ProductDetailsModalProps {
  product: ProductDetailsData | null;
  isOpen: boolean;
  onClose: () => void;
  specsHeading?: string;
  ratingSuffix?: string;
}

export default function ProductDetailsModal({ product, isOpen, onClose, specsHeading, ratingSuffix }: ProductDetailsModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-[#111827]/60 flex items-center justify-center backdrop-blur-sm p-[1rem]" onClick={onClose} role="presentation">
      <div className="bg-[#ffffff] w-[90vw] max-w-[800px] p-[2rem] rounded-[0.5rem] relative flex flex-col md:flex-row gap-[2rem] max-h-[90vh] overflow-y-auto" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="product-details-title">
        <button aria-label="Close product details" className="absolute top-[1rem] right-[1rem] text-[#434655] hover:text-[#141b2b] p-[0.25rem]" onClick={onClose} type="button">
          <X size={22} />
        </button>
        <div className="w-full md:w-1/2 bg-[#f1f3ff] rounded-[0.5rem] flex items-center justify-center p-[1rem] min-h-[16rem]">
          <img alt={product.productTitle} className="w-full h-full max-h-[24rem] object-contain" src={product.productPrimaryImage} />
        </div>
        <div className="w-full md:w-1/2 pt-[1rem]">
          {product.productBadgeText && (
            <span className="font-['Inter'] text-[12px] text-[#ba1a1a] font-[700] uppercase">{product.productBadgeText}</span>
          )}
          <h2 id="product-details-title" className="font-['Inter'] text-[22px] leading-[28px] font-[600] text-[#141b2b] mt-[0.5rem]">{product.productTitle}</h2>
          {(product.productRating !== undefined || product.productReviewsCount !== undefined) && (
            <div className="flex items-center gap-[0.5rem] text-[#fea619] mt-[0.75rem]">
              {product.productRating !== undefined && (
                <span className="font-['Inter'] text-[14px] font-[600]">{product.productRating} {ratingSuffix}</span>
              )}
              {product.productReviewsCount !== undefined && (
                <span className="font-['Inter'] text-[13px] text-[#434655]">({product.productReviewsCount.toLocaleString()} reviews)</span>
              )}
            </div>
          )}
          <div className="flex items-baseline gap-[0.75rem] mt-[1rem]"><span className="text-[28px] font-[700] text-[#141b2b]">{product.productCurrentPrice}</span>{product.productListPrice && <span className="font-['Inter'] text-[13px] text-[#737686] line-through">{product.productListPrice}</span>}{product.productDiscount && <span className="font-['Inter'] text-[13px] text-[#ba1a1a] font-[600]">{product.productDiscount}</span>}</div>
          {specsHeading && (
            <>
              <h3 className="font-['Inter'] text-[14px] font-[600] text-[#141b2b] mt-[1.5rem]">{specsHeading}</h3>
              <ul className="list-disc pl-[1rem] mt-[0.5rem] space-y-[0.25rem] text-[13px] text-[#434655]">{product.productKeySpecs.map((spec) => <li key={spec}>{spec}</li>)}</ul>
            </>
          )}
          {product.productDeliveryDate && (
            <p className="font-['Inter'] text-[13px] text-[#2563eb] font-[600] mt-[1rem]">FREE delivery {product.productDeliveryDate}</p>
          )}
        </div>
      </div>
    </div>
  );
}
