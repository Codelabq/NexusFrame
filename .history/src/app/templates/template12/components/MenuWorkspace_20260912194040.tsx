"use client";

import { useEffect, useMemo, useState } from "react";
import { categorySections, cellarPours, dishes, type CellarPour, type Dish } from "../data";
import CellarSection from "./CellarSection";
import FeaturedSpecial from "./FeaturedSpecial";
import MenuCategoryNav from "./MenuCategoryNav";
import MenuSection from "./MenuSection";
import RestaurantFooter from "./RestaurantFooter";
import RestaurantHeader from "./RestaurantHeader";
import ServiceBar from "./ServiceBar";

export default function MenuWorkspace() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDiet, setActiveDiet] = useState<string | null>(null);
  const [orderCount, setOrderCount] = useState(0);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const visibleDishes = useMemo(() => dishes.filter((dish) => (!activeDiet || dish.dietary.includes(activeDiet as Dish["dietary"][number]))), [activeDiet]);
  const notify = (message: string, increment = false) => { if (increment) setOrderCount((count) => count + 1); setToast(message); };
  const addDish = (dish: Dish) => notify(`${dish.name} added to your tasting order`, true);
  const addPour = (pour: CellarPour) => notify(`${pour.name} added to tasting check`, true);
  const categoryDishes = (category: string) => visibleDishes.filter((dish) => dish.category === category);

  return <main className="min-h-screen bg-[#fef9f2] text-[#1d1b18]"><RestaurantHeader /><MenuCategoryNav activeCategory={activeCategory} activeDiet={activeDiet} onCategoryChange={setActiveCategory} onDietChange={(diet) => setActiveDiet((current) => current === diet ? null : diet)} /><div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-5 py-10 lg:px-16 lg:py-14"><FeaturedSpecial onAdd={() => notify("Handmade Burrata added to your tasting order", true)} onDossier={() => notify("Viewing farm dossier: Hudson Valley Organics")} />{categorySections.map((section) => activeCategory === "all" || activeCategory === section.id ? <MenuSection key={section.id} title={section.title} index={section.index} note={section.note} dishes={categoryDishes(section.id)} onAdd={addDish} /> : null)}{(activeCategory === "all" || activeCategory === "cellar") && <CellarSection pours={cellarPours} onAdd={addPour} />}<div className="flex flex-col items-center justify-between gap-3 border-t border-[#d9c2b5]/40 py-4 font-['Hanken_Grotesk'] text-[10px] uppercase tracking-[0.1em] text-[#655548] sm:flex-row"><span className="text-[#8a4509]">Tonight&apos;s organic partners:</span><span>Hudson Valley Organics · Casabianca Dairy · Kinderhook Meats · Farmer Ground Flour</span></div></div>{toast && <div role="status" className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 border border-[#877368]/40 bg-[#32302c] px-4 py-3 font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.13em] text-[#f5f0ea]">{toast}</div>}<ServiceBar orderCount={orderCount} onPickup={() => notify(orderCount ? `Pickup order opened with ${orderCount} selected item${orderCount === 1 ? "" : "s"}` : "Order drawer opened: select items from the menu")} onReserve={() => notify("Reservation request opened for Atelier & Hearth")} /><RestaurantFooter /></main>;
}
