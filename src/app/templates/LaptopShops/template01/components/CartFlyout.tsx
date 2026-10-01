"use client";

/* eslint-disable @next/next/no-img-element */
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import type { LaptopShops01Product } from "../types";

const formatCurrency = (value: number): string =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export interface CartItem {
  product: LaptopShops01Product;
  qty: number;
}

interface CartFlyoutProps {
  open: boolean;
  items: CartItem[];
  subtotal: number;
  title: string;
  stagedLabel: string;
  emptyTitle: string;
  emptyBody: string;
  subtotalLabel: string;
  note: string;
  checkoutLabel: string;
  onClose: () => void;
  onRemove: (productId: string) => void;
  onIncrement: (productId: string) => void;
  onDecrement: (productId: string) => void;
  onCheckout: () => void;
}

export default function CartFlyout({
  open,
  items,
  subtotal,
  title,
  stagedLabel,
  emptyTitle,
  emptyBody,
  subtotalLabel,
  note,
  checkoutLabel,
  onClose,
  onRemove,
  onIncrement,
  onDecrement,
  onCheckout,
}: CartFlyoutProps) {
  const unitCount = items.reduce((total, item) => total + item.qty, 0);

  return (
    <div
      className={`fixed inset-0 z-[75] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-[#000000]/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col border-l border-[#3f4850]/60 bg-[#010f1f] shadow-[0_0_50px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-[#3f4850]/50 px-[1.25rem] py-[1rem]">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#93ccff]/10">
              <ShoppingCart className="h-[18px] w-[18px] text-[#93ccff]" />
            </span>
            <div className="flex flex-col">
              <span className="font-['Inter'] text-[16px] font-semibold leading-[22px] text-[#d4e4fa]">
                {title}
              </span>
              <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] text-[#bfc7d2]">
                {unitCount} {unitCount === 1 ? "system" : "systems"} {stagedLabel}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#89929b] transition-colors hover:bg-[#1c2b3c] hover:text-[#d4e4fa]"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-[1.25rem] py-[1rem]">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#122131] text-[#93ccff]">
                <ShoppingCart className="h-6 w-6" />
              </span>
              <p className="font-['Inter'] text-[16px] font-semibold leading-[22px] text-[#d4e4fa]">
                {emptyTitle}
              </p>
              <p className="max-w-[280px] font-['Inter'] text-[13px] leading-[20px] text-[#bfc7d2]">
                {emptyBody}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-[0.75rem]">
              {items.map((item) => (
                <li
                  key={item.product.productId}
                  className="flex gap-3 rounded-[0.5rem] border border-[#3f4850]/50 bg-[#122131] p-[0.75rem]"
                >
                  <div className="h-[72px] w-[96px] flex-shrink-0 overflow-hidden rounded-[0.5rem] bg-[#010f1f]">
                    <img
                      src={item.product.productImage}
                      alt={item.product.productImageAlt}
                      className="h-full w-full object-cover mix-blend-luminosity"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="font-['JetBrains_Mono'] text-[11px] leading-[15px] tracking-widest uppercase text-[#7bd0ff]">
                          {item.product.productCode}
                        </span>
                        <span className="font-['Inter'] text-[14px] font-medium leading-[20px] text-[#d4e4fa]">
                          {item.product.productTitle}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.product.productId)}
                        aria-label={`Remove ${item.product.productCode}`}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-[#89929b] transition-colors hover:bg-[#ffb4ab]/10 hover:text-[#ffb4ab]"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 rounded-[0.5rem] border border-[#3f4850]/60 bg-[#010f1f]">
                        <button
                          type="button"
                          onClick={() => onDecrement(item.product.productId)}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-l-[0.5rem] text-[#d4e4fa] transition-colors hover:bg-[#1c2b3c]"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-6 text-center font-['JetBrains_Mono'] text-[13px] font-semibold text-[#d4e4fa]">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onIncrement(item.product.productId)}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-r-[0.5rem] text-[#d4e4fa] transition-colors hover:bg-[#1c2b3c]"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-['JetBrains_Mono'] text-[15px] font-semibold text-[#d4e4fa]">
                        {formatCurrency(item.product.productPrice * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-[0.75rem] border-t border-[#3f4850]/50 px-[1.25rem] py-[1rem]">
          <div className="flex items-center justify-between">
            <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] tracking-[0.04em] font-semibold uppercase tracking-wider text-[#bfc7d2]">
              {subtotalLabel}
            </span>
            <span className="font-['JetBrains_Mono'] text-[24px] font-semibold tracking-[-0.02em] text-[#d4e4fa]">
              {formatCurrency(subtotal)}
            </span>
          </div>
          <p className="font-['Inter'] text-[12px] leading-[18px] text-[#bfc7d2]">
            {note}
          </p>
          <button
            type="button"
            onClick={onCheckout}
            disabled={items.length === 0}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] bg-[#93ccff] px-[1rem] py-3 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#003351] shadow-sm transition-all hover:bg-[#3198dc] hover:text-[#002c47] active:scale-95 disabled:cursor-not-allowed disabled:bg-[#3f4850] disabled:text-[#89929b]"
          >
            {checkoutLabel}
          </button>
        </div>
      </aside>
    </div>
  );
}
