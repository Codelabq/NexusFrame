import {
  Droplets,
  ScanLine,
  Thermometer,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ArsenalProduct } from "../data";

interface ProductDetailsModalProps {
  product: ArsenalProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ArsenalProduct) => void;
}

const productIcons: Record<string, LucideIcon> = {
  ScanLine,
  Zap,
  Thermometer,
  Droplets,
};

export default function ProductDetailsModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}: ProductDetailsModalProps) {
  if (!isOpen || !product) return null;

  const ProductIcon = productIcons[product.iconName] ?? ScanLine;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#121318]/80 p-[1rem] backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-[90vw] max-w-[600px] rounded-[1.5rem] border border-[#3c4a42] bg-[#1a1b21] p-[2rem]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-details-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-[1rem] top-[1rem] rounded-[3rem] p-[0.5rem] text-[#bbcabf] transition-colors hover:bg-[#34343a] hover:text-[#e3e1e9]"
        >
          <X className="h-[20px] w-[20px]" />
        </button>

        <ProductIcon className="mx-auto h-[120px] w-[120px] text-[#4edea3] opacity-80" />
        <p className="mt-[1.5rem] text-center font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[#4edea3]">
          {product.badgeText}
        </p>
        <h2
          id="product-details-title"
          className="mt-[0.5rem] text-center font-['Montserrat'] text-[24px] font-[800] text-[#e3e1e9]"
        >
          {product.title}
        </h2>
        <p className="mt-[1rem] text-center font-['Inter'] text-[16px] leading-[1.5] text-[#bbcabf]">
          {product.description}
        </p>
        <p className="mt-[1.5rem] text-center font-['Montserrat'] text-[32px] font-[800] text-[#4edea3]">
          ${product.price.toFixed(2)}
        </p>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-[1.5rem] w-full rounded-[3rem] bg-[#4edea3] py-[1rem] font-['Montserrat'] font-[800] uppercase text-[#003824] transition-transform hover:scale-[1.01]"
        >
          Add to Arsenal
        </button>
      </div>
    </div>
  );
}
