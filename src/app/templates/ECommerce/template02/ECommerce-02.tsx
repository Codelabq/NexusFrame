"use client";

import { useState } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ToastNotification from "./components/ToastNotification";
import type {
  ECommerce02Data,
  ECommerce02Category,
  ECommerce02Product,
} from "./types";
import { ECommerce02placeHolder } from "./data";

/** Categories derived from the union of every product's category, plus the "all" label. */
function getCategories(
  allCategoryLabel: string,
  items: ECommerce02Product[],
): ECommerce02Category[] {
  return [
    { categoryLabel: allCategoryLabel },
    ...[...new Set(items.map((item) => item.productCategory))].map((categoryLabel) => ({
      categoryLabel,
    })),
  ];
}

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function ECommerce02({
  resolvedData = {},
}: {
  resolvedData?: Record<string, unknown>;
}) {
  // Static template copy (not resolved from the caller).
  const allCategoryLabel = "All Products";
  const defaultCategory = allCategoryLabel;
  const productCardCtaLabel = "Quick Add";
  const toastAddMessage = "{title} added to acquisition bag";
  const toastDurationMs = 3000;

  // Fill anything the caller omitted from the placeholder, then derive dynamic lists.
  const merged = { ...ECommerce02placeHolder, ...resolvedData } as typeof ECommerce02placeHolder;
  const data: ECommerce02Data = {
    ...merged,
    categories: getCategories(allCategoryLabel, merged.products),
  };
  const [cartCount, setCartCount] = useState(0);
  const [toastMsg, setToastMsg] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const { heroTitle, heroDescription, categories, products } = data;

  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const handleQuickAdd = (title: string) => {
    setCartCount((prev) => prev + 1);
    setToastMsg(toastAddMessage.replace("{title}", title));
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, toastDurationMs);
  };

  const filteredProducts =
    activeCategory === defaultCategory
      ? products
      : products.filter((p) => p.productCategory === activeCategory);

  return (
    <div className={`bg-[#ffffff] text-[#1a1c1c] min-h-screen ${inter.className} ${playfair.className}`}>
      <Navbar cartCount={cartCount} />
      <ToastNotification isVisible={isToastVisible} message={toastMsg} />
      <main className="w-full pt-[5rem]">
        <header className="w-full px-[1.25rem] lg:px-[4rem] pt-[4rem] pb-[2rem]">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-[2rem] gap-[1.5rem]">
            <div>
              				<span className="font-['Inter'] text-[11px] tracking-[0.25em] uppercase text-[#5e5e5e] block mb-[0.5rem]">
              					Curated Catalogue · 2025
              				</span>
              <h1 className="font-['Playfair_Display'] text-[48px] leading-[56px] text-[#000000] tracking-tight font-normal">
                {heroTitle}
              </h1>
            </div>
            <p className="font-['Inter'] text-[12px] leading-[18px] text-[#5e5e5e] max-w-[20rem]">
              {heroDescription}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-[1.5rem] gap-y-[0.5rem] pt-[1.5rem] border-t border-[#eeeeee]">
            {categories.map((category) => (
              <button
                key={category.categoryLabel}
                className={`pb-[0.25rem] font-['Inter'] text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === category.categoryLabel
                    ? "border-b border-[#000000] text-[#000000]"
                    : "border-transparent text-[#5e5e5e] hover:text-[#000000]"
                }`}
                onClick={() => setActiveCategory(category.categoryLabel)}
                type="button"
              >
                {category.categoryLabel}
              </button>
            ))}
          </div>
        </header>
        <section className="w-full px-[1.25rem] lg:px-[4rem] pb-[6rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[3rem] lg:gap-x-[4rem] gap-y-[4rem] lg:gap-y-[5rem]">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.productTitle}
                product={product}
                ctaLabel={productCardCtaLabel}
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
