"use client";

import { useEffect, useMemo, useState } from "react";
import type { AtelierHearthRestaurantMenuTemplateData, atelierCellarPour, atelierDish } from "@/types/index";
import CellarSection from "./CellarSection";
import FeaturedSpecial from "./FeaturedSpecial";
import MenuCategoryNav from "./MenuCategoryNav";
import MenuSection from "./MenuSection";
import RestaurantFooter from "./RestaurantFooter";
import RestaurantHeader from "./RestaurantHeader";
import ServiceBar from "./ServiceBar";

/** Dynamic content from `data.ts` plus static template copy. */
type MenuWorkspaceProps = AtelierHearthRestaurantMenuTemplateData & {
  posStatusLabel: string;
  serviceHoursLabel: string;
  allCategoryId: string;
  cellarCategoryId: string;
  dietaryLabel: string;
  featuredImageAlt: string;
  courseIndexLabel: string;
  cellarEyebrow: string;
  cellarTitle: string;
  cellarDescription: string;
  cellarAddCtaLabel: string;
  partnersLabel: string;
  partnersList: string;
  serviceOpenLabel: string;
  servicePickupNote: string;
  serviceItemsSelectedSuffix: string;
  serviceReserveLabel: string;
  servicePickupCtaLabel: string;
  toastAddDishMessage: string;
  toastAddPourMessage: string;
  toastFeaturedAddMessage: string;
  toastDossierMessage: string;
  toastPickupEmptyMessage: string;
  toastPickupMessage: string;
  toastReserveMessage: string;
  toastDurationMs: number;
};

export default function MenuWorkspace({ resolvedObject }: { resolvedObject: MenuWorkspaceProps }) {
  const {
    headerEyebrow,
    headerTitle,
    headerDescription,
    posStatusLabel,
    serviceHoursLabel,
    categories,
    allCategoryId,
    cellarCategoryId,
    dietaryLabel,
    dietaryFilters,
    featuredImageUrl,
    featuredImageAlt,
    featuredBadge,
    featuredEyebrow,
    featuredPrice,
    featuredTitle,
    featuredDescription,
    featuredTags,
    sommelierTitle,
    sommelierNote,
    featuredAddCtaLabel,
    featuredDossierCtaLabel,
    categorySections,
    courseIndexLabel,
    dishes,
    cellarEyebrow,
    cellarTitle,
    cellarDescription,
    cellarAddCtaLabel,
    cellarPours,
    partnersLabel,
    partnersList,
    serviceOpenLabel,
    servicePickupNote,
    serviceItemsSelectedSuffix,
    serviceReserveLabel,
    servicePickupCtaLabel,
    toastAddDishMessage,
    toastAddPourMessage,
    toastFeaturedAddMessage,
    toastDossierMessage,
    toastPickupEmptyMessage,
    toastPickupMessage,
    toastReserveMessage,
    toastDurationMs,
  } = resolvedObject;

  const [activeCategory, setActiveCategory] = useState(allCategoryId);
  const [activeDiet, setActiveDiet] = useState<string | null>(null);
  const [orderCount, setOrderCount] = useState(0);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), toastDurationMs);
    return () => window.clearTimeout(timeout);
  }, [toast, toastDurationMs]);

  const visibleDishes = useMemo(() => dishes.filter((dish) => (!activeDiet || dish.dishDietary.includes(activeDiet))), [activeDiet, dishes]);
  const notify = (message: string, increment = false) => { if (increment) setOrderCount((count) => count + 1); setToast(message); };
  const addDish = (dish: atelierDish) => notify(toastAddDishMessage.replace("{name}", dish.dishName), true);
  const addPour = (pour: atelierCellarPour) => notify(toastAddPourMessage.replace("{name}", pour.cellarPourName), true);
  const categoryDishes = (category: string) => visibleDishes.filter((dish) => dish.dishCategory === category);

  return <main className="min-h-screen bg-[#fef9f2] text-[#1d1b18]">
    <RestaurantHeader headerEyebrow={headerEyebrow} headerTitle={headerTitle} headerDescription={headerDescription} posStatusLabel={posStatusLabel} serviceHoursLabel={serviceHoursLabel} />
    <MenuCategoryNav categories={categories} allCategoryId={allCategoryId} dietaryLabel={dietaryLabel} dietaryFilters={dietaryFilters} activeCategory={activeCategory} activeDiet={activeDiet} onCategoryChange={setActiveCategory} onDietChange={(diet) => setActiveDiet((current) => current === diet ? null : diet)} />
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-5 py-10 lg:px-16 lg:py-14">
      <FeaturedSpecial imageUrl={featuredImageUrl} imageAlt={featuredImageAlt} badge={featuredBadge} eyebrow={featuredEyebrow} price={featuredPrice} title={featuredTitle} description={featuredDescription} tags={featuredTags} sommelierTitle={sommelierTitle} sommelierNote={sommelierNote} addCtaLabel={featuredAddCtaLabel} dossierCtaLabel={featuredDossierCtaLabel} onAdd={() => notify(toastFeaturedAddMessage, true)} onDossier={() => notify(toastDossierMessage)} />{categorySections.map((section) => activeCategory === allCategoryId || activeCategory === section.categorySectionId ? <MenuSection key={section.categorySectionId} title={section.categorySectionTitle} index={section.categorySectionIndex} note={section.categorySectionNote} courseIndexLabel={courseIndexLabel} dishes={categoryDishes(section.categorySectionId)} onAdd={addDish} /> : null)}{(activeCategory === allCategoryId || activeCategory === cellarCategoryId) && cellarPours && cellarPours.length > 0 && <CellarSection pours={cellarPours} eyebrow={cellarEyebrow} title={cellarTitle} description={cellarDescription} addCtaLabel={cellarAddCtaLabel} onAdd={addPour} />}<div className="flex flex-col items-center justify-between gap-3 border-t border-[#d9c2b5]/40 py-4 font-['Hanken_Grotesk'] text-[10px] uppercase tracking-[0.1em] text-[#655548] sm:flex-row"><span className="text-[#8a4509]">{partnersLabel}</span><span>{partnersList}</span></div></div>{toast && <div role="status" className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 border border-[#877368]/40 bg-[#32302c] px-4 py-3 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.13em] text-[#f5f0ea]">{toast}</div>}<ServiceBar orderCount={orderCount} serviceOpenLabel={serviceOpenLabel} servicePickupNote={servicePickupNote} serviceItemsSelectedSuffix={serviceItemsSelectedSuffix} serviceReserveLabel={serviceReserveLabel} servicePickupCtaLabel={servicePickupCtaLabel} onPickup={() => notify(orderCount ? toastPickupMessage.replace("{count}", String(orderCount)) : toastPickupEmptyMessage)} onReserve={() => notify(toastReserveMessage)} /><RestaurantFooter /></main>;
}
