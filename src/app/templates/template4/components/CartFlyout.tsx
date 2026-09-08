import { ShoppingCart, X } from "lucide-react";
import type { Product } from "../data";

interface CartFlyoutProps {
  cartItems: Product[];
  isOpen: boolean;
  onClose: () => void;
}

function priceToNumber(price: string) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

export default function CartFlyout({ cartItems, isOpen, onClose }: CartFlyoutProps) {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, product) => sum + priceToNumber(product.currentPrice), 0);

  return (
    <div className="fixed inset-0 z-[60] bg-[#111827]/60 flex justify-end" onClick={onClose} role="presentation">
      <aside className="w-[320px] h-full bg-[#ffffff] shadow-xl p-[1.5rem] flex flex-col" onClick={(event) => event.stopPropagation()} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-[1rem]">
          <h2 className="font-['Inter'] text-[20px] font-[600] text-[#141b2b] flex items-center gap-[0.5rem]"><ShoppingCart size={20} /> Cart</h2>
          <button aria-label="Close cart" className="text-[#434655] hover:text-[#141b2b]" onClick={onClose} type="button"><X size={22} /></button>
        </div>
        <div className="flex-1 overflow-y-auto py-[1rem] space-y-[1rem]">
          {cartItems.length === 0 ? <p className="font-['Inter'] text-[14px] text-[#737686]">Your cart is empty.</p> : cartItems.map((product, index) => (
            <div className="flex items-start gap-[0.75rem]" key={`${product.id}-${index}`}>
              <img alt="" className="w-[4rem] h-[4rem] object-contain bg-[#f1f3ff] rounded-[0.25rem]" src={product.primaryImage} />
              <div className="min-w-0 flex-1"><p className="line-clamp-2 text-[14px] text-[#141b2b]">{product.title}</p><p className="font-['Inter'] text-[14px] font-[700] text-[#141b2b] mt-[0.25rem]">{product.currentPrice}</p></div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#e5e7eb] pt-[1rem]">
          <div className="flex items-center justify-between font-['Inter'] text-[16px] font-[600] text-[#141b2b]"><span>Total Price</span><span>${total.toFixed(2)}</span></div>
          <button className="w-full bg-[#fea619] hover:bg-[#855300] text-[#141b2b] font-['Inter'] text-[14px] font-[600] py-[0.75rem] rounded-[0.25rem] mt-[1rem]" disabled={cartItems.length === 0} type="button">Proceed to Checkout</button>
        </div>
      </aside>
    </div>
  );
}
