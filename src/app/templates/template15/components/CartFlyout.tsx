"use client";

/* eslint-disable @next/next/no-img-element */
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import type { apexVehicle } from "@/types/index";

export interface CartItem {
  vehicle: apexVehicle;
  qty: number;
}

interface CartFlyoutProps {
  open: boolean;
  items: CartItem[];
  subtotal: number;
  stockPrefix: string;
  title: string;
  reservedLabel: string;
  emptyTitle: string;
  emptyBody: string;
  subtotalLabel: string;
  note: string;
  checkoutLabel: string;
  onClose: () => void;
  onRemove: (vehicleId: string) => void;
  onIncrement: (vehicleId: string) => void;
  onDecrement: (vehicleId: string) => void;
  onCheckout: () => void;
}

const formatCurrency = (value: number): string => `$${value.toLocaleString("en-US")}`;

export default function CartFlyout({
  open,
  items,
  subtotal,
  stockPrefix,
  title,
  reservedLabel,
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
  const itemCount = items.reduce((total, item) => total + item.qty, 0);

  return (
    <div
      className={`fixed inset-0 z-[75] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-[#0b1c30]/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col border-l border-[#bfc7d2]/30 bg-[#ffffff] shadow-[0_0_40px_rgba(11,28,48,0.25)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-[#bfc7d2]/25 px-[1.25rem] py-[1rem]">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#006194]/10 text-[#006194]">
              <ShoppingCart className="h-[18px] w-[18px]" />
            </span>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] text-[16px] leading-[22px] font-bold text-[#0b1c30]">
                {title}
              </span>
              <span className="font-['Manrope'] text-[13px] leading-[18px] text-[#565e74]">
                {reservedLabel.replace("{count}", String(itemCount))}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#707881] transition-colors duration-200 hover:bg-[#eff4ff] hover:text-[#0b1c30]"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-[1.25rem] py-[1rem]">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eff4ff] text-[#006194]">
                <ShoppingCart className="h-6 w-6" />
              </span>
              <p className="font-['Plus_Jakarta_Sans'] text-[16px] leading-[22px] font-bold text-[#0b1c30]">
                {emptyTitle}
              </p>
              <p className="max-w-[260px] font-['Manrope'] text-[13px] leading-[18px] text-[#565e74]">
                {emptyBody}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-[0.75rem]">
              {items.map((item) => (
                <li
                  key={item.vehicle.vehicleId}
                  className="flex gap-3 rounded-[0.5rem] border border-[#bfc7d2]/25 bg-[#eff4ff]/60 p-[0.75rem]"
                >
                  <div className="h-[72px] w-[96px] flex-shrink-0 overflow-hidden rounded-[0.5rem] bg-[#e5eeff]">
                    <img
                      src={item.vehicle.vehicleImage}
                      alt={item.vehicle.vehicleImageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-[#0b1c30]">
                        {item.vehicle.vehicleName}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemove(item.vehicle.vehicleId)}
                        aria-label={`Remove ${item.vehicle.vehicleName}`}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-[#707881] transition-colors duration-200 hover:bg-[#ba1a1a]/10 hover:text-[#ba1a1a]"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-['Manrope'] text-[12px] leading-[16px] text-[#565e74]">
                      {stockPrefix}
                      {item.vehicle.vehicleStock}
                    </span>

                    <div className="mt-auto flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 rounded-[0.5rem] border border-[#bfc7d2]/40 bg-[#ffffff]">
                        <button
                          type="button"
                          onClick={() => onDecrement(item.vehicle.vehicleId)}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-l-[0.5rem] text-[#0b1c30] transition-colors duration-200 hover:bg-[#eff4ff]"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-6 text-center font-['Manrope'] text-[13px] font-bold text-[#0b1c30]">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onIncrement(item.vehicle.vehicleId)}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-r-[0.5rem] text-[#0b1c30] transition-colors duration-200 hover:bg-[#eff4ff]"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-['Plus_Jakarta_Sans'] text-[15px] leading-[20px] font-bold text-[#0b1c30]">
                        {formatCurrency(item.vehicle.vehiclePrice * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-[0.75rem] border-t border-[#bfc7d2]/25 px-[1.25rem] py-[1rem]">
          <div className="flex items-center justify-between">
            <span className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold uppercase tracking-wider text-[#565e74]">
              {subtotalLabel}
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[24px] leading-[30px] font-bold tracking-[-0.02em] text-[#0b1c30]">
              {formatCurrency(subtotal)}
            </span>
          </div>
          <p className="font-['Manrope'] text-[12px] leading-[16px] text-[#565e74]">{note}</p>
          <button
            type="button"
            onClick={onCheckout}
            disabled={items.length === 0}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] bg-[#006194] px-[1rem] py-3 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#007bb9] hover:shadow-[0_4px_14px_rgba(0,97,148,0.2)] active:scale-95 disabled:cursor-not-allowed disabled:bg-[#bfc7d2] disabled:text-[#565e74] disabled:shadow-none"
          >
            {checkoutLabel}
          </button>
        </div>
      </aside>
    </div>
  );
}
