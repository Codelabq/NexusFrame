"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { CheckCircle2, Heart, ShoppingCart, X } from "lucide-react";
import type { Vehicle } from "../types";
import { badgeIcons } from "./icons";

interface ProductDetailsModalProps {
  vehicle: Vehicle | null;
  isSaved: boolean;
  stockPrefix: string;
  vinPrefix: string;
  featuresHeading: string;
  saveLabel: string;
  savedLabel: string;
  addToCartLabel: string;
  onClose: () => void;
  onAddToCart: (vehicle: Vehicle) => void;
  onToggleSave: (vehicle: Vehicle) => void;
}

const formatCurrency = (value: number): string => `$${value.toLocaleString("en-US")}`;

export default function ProductDetailsModal({
  vehicle,
  isSaved,
  stockPrefix,
  vinPrefix,
  featuresHeading,
  saveLabel,
  savedLabel,
  addToCartLabel,
  onClose,
  onAddToCart,
  onToggleSave,
}: ProductDetailsModalProps) {
  useEffect(() => {
    if (!vehicle) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const BadgeIcon = badgeIcons[vehicle.vehicleBadge.vehicleBadgeIcon];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={vehicle.vehicleName}
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto p-[1rem]"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0b1c30]/50 backdrop-blur-sm"
      />

      <div className="relative z-10 my-auto w-full max-w-[960px] overflow-hidden rounded-[0.75rem] border border-[#bfc7d2]/30 bg-[#ffffff] shadow-[0_24px_60px_rgba(11,28,48,0.35)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#ffffff]/90 text-[#0b1c30] shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-[#eff4ff] active:scale-90"
        >
          <X className="h-[18px] w-[18px]" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Visual */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e5eeff] lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <img
              src={vehicle.vehicleImage}
              alt={vehicle.vehicleImageAlt}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            <div className="absolute left-3 top-3">
              <span
                className={`flex items-center gap-1 rounded-full px-2.5 py-1 font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-wider shadow-sm ${
                  vehicle.vehicleBadge.vehicleBadgeTone === "primary"
                    ? "bg-[#006194] text-white"
                    : "bg-[#eff4ff]/90 text-[#0b1c30] backdrop-blur-md"
                }`}
              >
                <BadgeIcon className="h-[13px] w-[13px]" />
                <span>{vehicle.vehicleBadge.vehicleBadgeText}</span>
              </span>
            </div>
            <div className="absolute bottom-3 left-3">
              <span className="rounded-[0.25rem] bg-[#eff4ff]/90 px-2 py-0.5 font-['Manrope'] text-[11px] font-bold uppercase tracking-wider text-[#0b1c30] backdrop-blur-sm">
                {vehicle.vehicleFloorBadge}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-[1rem] p-[1.5rem]">
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-widest text-[#006194]">
                {vehicle.vehicleExterior} • {vehicle.vehicleYear}
              </span>
              <h2 className="mt-1 font-['Plus_Jakarta_Sans'] text-[24px] leading-[30px] font-bold tracking-[-0.02em] text-[#0b1c30] md:text-[28px] md:leading-[34px]">
                {vehicle.vehicleName}
              </h2>
              <div className="mt-1 flex flex-wrap items-center gap-2 font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
                <span>
                  {stockPrefix}
                  {vehicle.vehicleStock}
                </span>
                <span className="text-[#bfc7d2]">•</span>
                <span>
                  {vinPrefix} {vehicle.vehicleVin}
                </span>
              </div>
            </div>

            <p className="font-['Manrope'] text-[15px] leading-[24px] tracking-[-0.005em] text-[#3f4850]">
              {vehicle.vehicleDescription}
            </p>

            <div className="grid grid-cols-2 gap-2 rounded-[0.5rem] border border-[#bfc7d2]/15 bg-[#eff4ff] p-3 text-center font-['Manrope'] text-[12px] sm:grid-cols-4">
              {vehicle.vehicleSpecs.map((spec) => (
                <div key={spec.vehicleSpecLabel} className="flex flex-col items-center">
                  <span className="text-[10px] uppercase text-[#565e74]">
                    {spec.vehicleSpecLabel}
                  </span>
                  <span className="w-full truncate px-1 font-bold text-[#0b1c30]">
                    {spec.vehicleSpecValue}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold uppercase tracking-wider text-[#565e74]">
                {featuresHeading}
              </h3>
              <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {vehicle.vehicleFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#006194]" />
                    <span className="font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-col gap-[0.75rem] border-t border-[#bfc7d2]/30 pt-[1rem]">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] text-[28px] leading-[34px] font-bold tracking-[-0.02em] text-[#0b1c30]">
                    {formatCurrency(vehicle.vehiclePrice)}
                  </div>
                  <div className="mt-0.5 font-['Manrope'] text-[13px] leading-[18px] text-[#565e74]">
                    {vehicle.vehicleMonthly} • {vehicle.vehicleDownPayment}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onToggleSave(vehicle)}
                  className={`flex cursor-pointer items-center gap-2 rounded-[0.5rem] border px-[0.75rem] py-2.5 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold transition-all duration-200 active:scale-95 ${
                    isSaved
                      ? "border-[#ba1a1a]/40 bg-[#ba1a1a]/10 text-[#ba1a1a]"
                      : "border-[#bfc7d2]/40 bg-[#ffffff] text-[#0b1c30] hover:bg-[#eff4ff]"
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
                  <span>{isSaved ? savedLabel : saveLabel}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => onAddToCart(vehicle)}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] bg-[#006194] px-[1rem] py-3 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#007bb9] hover:shadow-[0_4px_14px_rgba(0,97,148,0.2)] active:scale-95"
              >
                <ShoppingCart className="h-[18px] w-[18px]" />
                <span>{addToCartLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
