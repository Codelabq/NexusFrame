"use client";

import { useEffect, useMemo, useState } from "react";
import type { Restaurants02Category, Restaurants02Product, Restaurants02TagFilter } from "../types";
import CartDock from "./CartDock";
import ComboPromo from "./ComboPromo";
import FilterStrip from "./FilterStrip";
import PosFooter from "./PosFooter";
import PosHeader from "./PosHeader";
import ProductCard from "./ProductCard";

/** Dynamic content from `data.ts` plus static template copy. */
type PosWorkspaceProps = {
  comboBadge: string;
  comboImageUrl: string;
  comboImageAlt: string;
  comboOverlayTitle: string;
  comboExclusiveBadge: string;
  comboTitle: string;
  comboSaveBadge: string;
  comboPrice: string;
  comboOriginalPrice: string;
  comboFeatures: string[];
  comboScarcityLabel: string;
  comboCtaPrice: string;
  categories: Restaurants02Category[];
  tagFilters: Restaurants02TagFilter[];
  products: Restaurants02Product[];
  comboBatchId: string;
  comboCaptionLeft: string;
  comboCaptionRight: string;
  comboSyncedBadge: string;
  comboCtaLabel: string;
  allCategoryId: string;
  comboCategoryId: string;
  inStockOnlyLabel: string;
  productCardPriceLabel: string;
  productCardSoldOutOverlay: string;
  productCardAddLabel: string;
  cartTicketLabel: string;
  cartTitle: string;
  cartSummaryLabel: string;
  cartAutoConfirmLabel: string;
  cartCheckoutLabel: string;
  emptyLabel: string;
  toastAddMessage: string;
  toastComboMessage: string;
  toastCheckoutMessage: string;
  toastCheckoutEmptyMessage: string;
  toastDurationMs: number;
};

export default function PosWorkspace({ resolvedObject }: { resolvedObject: PosWorkspaceProps }) {
  const {
    comboBadge,
    comboBatchId,
    comboImageUrl,
    comboImageAlt,
    comboOverlayTitle,
    comboCaptionLeft,
    comboCaptionRight,
    comboExclusiveBadge,
    comboTitle,
    comboSaveBadge,
    comboPrice,
    comboOriginalPrice,
    comboSyncedBadge,
    comboFeatures,
    comboScarcityLabel,
    comboCtaLabel,
    comboCtaPrice,
    categories,
    allCategoryId,
    comboCategoryId,
    inStockOnlyLabel,
    tagFilters,
    products,
    productCardPriceLabel,
    productCardSoldOutOverlay,
    productCardAddLabel,
    cartTicketLabel,
    cartTitle,
    cartSummaryLabel,
    cartAutoConfirmLabel,
    cartCheckoutLabel,
    emptyLabel,
    toastAddMessage,
    toastComboMessage,
    toastCheckoutMessage,
    toastCheckoutEmptyMessage,
    toastDurationMs,
  } = resolvedObject;

  const [category, setCategory] = useState(allCategoryId);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [cart, setCart] = useState<{ product: Restaurants02Product; quantity: number }[]>([]);
  const [toast, setToast] = useState("");

  useEffect(() => { if (!toast) return; const timer = window.setTimeout(() => setToast(""), toastDurationMs); return () => window.clearTimeout(timer); }, [toast, toastDurationMs]);
  const visibleProducts = useMemo(() => products.filter((product) => (category === allCategoryId || category === comboCategoryId || product.productCategory === category) && (!inStockOnly || product.productStock === "in") && (activeTags.length === 0 || activeTags.some((tag) => product.productTags.includes(tag)))), [activeTags, category, inStockOnly, allCategoryId, comboCategoryId, products]);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.product.productPrice * item.quantity, 0);
  const addProduct = (product: Restaurants02Product) => { setCart((current) => { const existing = current.find((item) => item.product.productId === product.productId); return existing ? current.map((item) => item.product.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { product, quantity: 1 }]; }); setToast(toastAddMessage.replace("{name}", product.productName).replace("{price}", product.productPrice.toFixed(2))); };
  const addCombo = () => { setToast(toastComboMessage); };

  return <main className="min-h-screen bg-[#f9f9f9] font-['Work_Sans'] text-[#1b1b1b]"><PosHeader /><div className="mx-auto max-w-[1400px] px-4 py-5 lg:px-10"><ComboPromo badge={comboBadge} batchId={comboBatchId} imageUrl={comboImageUrl} imageAlt={comboImageAlt} overlayTitle={comboOverlayTitle} captionLeft={comboCaptionLeft} captionRight={comboCaptionRight} exclusiveBadge={comboExclusiveBadge} title={comboTitle} saveBadge={comboSaveBadge} price={comboPrice} originalPrice={comboOriginalPrice} syncedBadge={comboSyncedBadge} features={comboFeatures} scarcityLabel={comboScarcityLabel} ctaLabel={comboCtaLabel} ctaPrice={comboCtaPrice} onAdd={addCombo} /><FilterStrip categories={categories} allCategoryId={allCategoryId} tagFilters={tagFilters} inStockOnlyLabel={inStockOnlyLabel} activeCategory={category} inStockOnly={inStockOnly} activeTags={activeTags} onCategory={setCategory} onStock={() => setInStockOnly((value) => !value)} onTag={(tag) => setActiveTags((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag])} />{visibleProducts.length ? <section className="grid grid-cols-1 gap-4 pb-16 md:grid-cols-2 lg:grid-cols-3">{visibleProducts.map((product) => <ProductCard key={product.productId} product={product} priceLabel={productCardPriceLabel} soldOutOverlay={productCardSoldOutOverlay} addLabel={productCardAddLabel} onAdd={addProduct} />)}</section> : <div className="border-[3px] border-black bg-white p-16 text-center font-['Space_Grotesk'] font-bold uppercase shadow-[4px_4px_0_#1b1b1b]">{emptyLabel}</div>}</div>{toast && <div role="status" className="fixed right-4 top-20 z-50 border-[3px] border-black bg-[#76ff9e] px-4 py-3 font-['Space_Grotesk'] text-sm font-bold uppercase shadow-[4px_4px_0_#1b1b1b]">✓ Added to kitchen ticket<br /><span className="text-base">{toast}</span></div>}<CartDock count={count} total={total} ticketLabel={cartTicketLabel} title={cartTitle} summaryLabel={cartSummaryLabel} autoConfirmLabel={cartAutoConfirmLabel} checkoutLabel={cartCheckoutLabel} onCheckout={() => setToast(count ? toastCheckoutMessage.replace("{count}", String(count)) : toastCheckoutEmptyMessage)} /><PosFooter /></main>;
}
