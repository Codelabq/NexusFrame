"use client";

/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";
import type { Vehicle } from "../types";
import { badgeIcons } from "./icons";

interface VehicleCardProps {
  vehicle: Vehicle;
  isSaved: boolean;
  inCartQty: number;
  stockPrefix: string;
  vinPrefix: string;
  detailsLabel: string;
  saveLabel: string;
  unsaveLabel: string;
  addToCartLabel: string;
  onOpenDetails: (vehicle: Vehicle) => void;
  onAddToCart: (vehicle: Vehicle) => void;
  onToggleSave: (vehicle: Vehicle) => void;
}

const formatCurrency = (value: number): string => `$${value.toLocaleString("en-US")}`;

export default function VehicleCard({
  vehicle,
  isSaved,
  inCartQty,
  stockPrefix,
  vinPrefix,
  detailsLabel,
  saveLabel,
  unsaveLabel,
  addToCartLabel,
  onOpenDetails,
  onAddToCart,
  onToggleSave,
}: VehicleCardProps) {
  const BadgeIcon = badgeIcons[vehicle.vehicleBadge.vehicleBadgeIcon];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[0.5rem] border border-[#bfc7d2]/20 bg-[#ffffff] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#006194]/50 hover:shadow-xl">
      {/* Image viewport */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpenDetails(vehicle)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpenDetails(vehicle);
          }
        }}
        aria-label={`View details for ${vehicle.vehicleName}`}
        className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-[#e5eeff]"
      >
        <img
          src={vehicle.vehicleImage}
          alt={vehicle.vehicleImageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Condition badge */}
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          <span
            className={`flex items-center gap-1 rounded-full px-2.5 py-1 font-['Plus_Jakarta_Sans'] text-[11px] leading-[14px] font-bold uppercase tracking-wider shadow-sm ${
              vehicle.vehicleBadge.vehicleBadgeTone === "primary"
                ? "bg-[#006194] text-white"
                : "bg-[#eff4ff]/90 text-[#0b1c30] backdrop-blur-md"
            }`}
          >
            <BadgeIcon
              className={`h-[13px] w-[13px] ${
                vehicle.vehicleBadge.vehicleBadgeTone === "primary" ? "" : "text-[#006194]"
              }`}
            />
            <span>{vehicle.vehicleBadge.vehicleBadgeText}</span>
          </span>
        </div>

        {/* Save toggle */}
        <button
          type="button"
          aria-label={isSaved ? unsaveLabel : saveLabel}
          onClick={(event) => {
            event.stopPropagation();
            onToggleSave(vehicle);
          }}
          className={`absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#eff4ff]/85 shadow-sm backdrop-blur-md transition-all duration-200 hover:text-[#ba1a1a] active:scale-90 ${
            isSaved ? "text-[#ba1a1a]" : "text-[#565e74]"
          }`}
        >
          <Heart
            className={`h-[18px] w-[18px] transition-transform duration-200 ${
              isSaved ? "scale-110 fill-current" : ""
            }`}
          />
        </button>

        <div className="absolute bottom-3 left-3">
          <span className="rounded-[0.25rem] bg-[#eff4ff]/90 px-2 py-0.5 font-['Manrope'] text-[11px] font-bold uppercase tracking-wider text-[#0b1c30] backdrop-blur-sm">
            {vehicle.vehicleFloorBadge}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between gap-[1rem] p-[1rem]">
        <div>
          <div className="mb-1 flex items-start justify-between gap-2">
            <h3 className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-semibold tracking-[-0.015em] text-[#0b1c30] transition-colors duration-200 group-hover:text-[#006194]">
              {vehicle.vehicleName}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
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

        {/* Spec mini-strip */}
        <div className="grid grid-cols-2 gap-1 rounded-[0.5rem] border border-[#bfc7d2]/15 bg-[#eff4ff] p-2 text-center font-['Manrope'] text-[12px] sm:grid-cols-4">
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

        {/* Price + actions */}
        <div className="flex items-end justify-between gap-[0.5rem] pt-[0.25rem]">
          <div>
            <div className="font-['Plus_Jakarta_Sans'] text-[24px] leading-[30px] font-bold tracking-[-0.02em] text-[#0b1c30]">
              {formatCurrency(vehicle.vehiclePrice)}
            </div>
            <div className="mt-1 font-['Manrope'] text-[13px] leading-[18px] text-[#565e74]">
              {vehicle.vehicleMonthly} • {vehicle.vehicleDownPayment}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onAddToCart(vehicle)}
              aria-label={addToCartLabel.replace("{name}", vehicle.vehicleName)}
              className="relative flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[0.5rem] border border-[#bfc7d2]/40 bg-[#ffffff] text-[#0b1c30] transition-all duration-200 hover:border-[#006194]/50 hover:bg-[#eff4ff] hover:text-[#006194] active:scale-95"
            >
              <ShoppingCart className="h-[18px] w-[18px]" />
              {inCartQty > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#006194] px-1 font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-white">
                  {inCartQty}
                </span>
              ) : null}
            </button>

            <button
              type="button"
              onClick={() => onOpenDetails(vehicle)}
              className="flex cursor-pointer items-center gap-1 rounded-[0.5rem] bg-[#0b1c30] px-[1rem] py-2.5 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-[#f8f9ff] transition-all duration-200 hover:bg-[#006194] hover:shadow-[0_4px_14px_rgba(0,97,148,0.2)] active:scale-95"
            >
              <span>{detailsLabel}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
