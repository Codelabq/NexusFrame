import { ArrowRight, ShoppingBag, X } from "lucide-react";
import type { ArsenalProduct } from "../data";

interface CartFlyoutProps {
  cartItems: ArsenalProduct[];
  isOpen: boolean;
  onClose: () => void;
}

export default function CartFlyout({ cartItems, isOpen, onClose }: CartFlyoutProps) {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, product) => sum + product.price, 0);

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end bg-[#121318]/80 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <aside
        className="flex h-full w-[360px] max-w-[calc(100vw-1rem)] flex-col bg-[#1a1b21] p-[1.5rem] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-[#3c4a42] pb-[1rem]">
          <div className="flex items-center gap-[0.5rem]">
            <ShoppingBag className="h-[20px] w-[20px] text-[#4edea3]" />
            <h2 className="font-['Montserrat'] text-[1.125rem] font-[700] uppercase text-[#e3e1e9]">
              Your Arsenal
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-[3rem] p-[0.5rem] text-[#bbcabf] transition-colors hover:bg-[#34343a] hover:text-[#e3e1e9]"
          >
            <X className="h-[20px] w-[20px]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-[1.5rem]">
          {cartItems.length === 0 ? (
            <p className="font-['Inter'] text-[1rem] text-[#bbcabf]">Your arsenal is empty</p>
          ) : (
            <div className="flex flex-col gap-[1rem]">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-start justify-between gap-[1rem] border-b border-[#3c4a42] pb-[1rem]"
                >
                  <div className="min-w-0">
                    <p className="font-['Montserrat'] text-[1rem] font-[700] text-[#e3e1e9]">
                      {product.title}
                    </p>
                    <p className="mt-[0.25rem] font-['Inter'] text-[0.75rem] text-[#86948a]">
                      {product.badgeText}
                    </p>
                  </div>
                  <p className="shrink-0 font-['Inter'] text-[1rem] font-[800] text-[#4edea3]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#3c4a42] pt-[1rem]">
          <div className="mb-[1rem] flex items-center justify-between font-['Inter'] text-[0.875rem] text-[#bbcabf]">
            <span>Subtotal</span>
            <span className="font-[800] text-[#e3e1e9]">${total.toFixed(2)}</span>
          </div>
          <button
            type="button"
            disabled={cartItems.length === 0}
            className="flex w-full items-center justify-center gap-[0.5rem] rounded-[3rem] bg-[#4edea3] py-[1rem] font-['Montserrat'] font-[800] uppercase tracking-[0.01em] text-[#003824] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Secure Checkout
            <ArrowRight className="h-[18px] w-[18px]" />
          </button>
        </div>
      </aside>
    </div>
  );
}
