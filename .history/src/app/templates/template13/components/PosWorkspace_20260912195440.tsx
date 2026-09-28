"use client";

import { useEffect, useMemo, useState } from "react";
import { products, type Product } from "../data";
import CartDock from "./CartDock";
import ComboPromo from "./ComboPromo";
import FilterStrip from "./FilterStrip";
import PosFooter from "./PosFooter";
import PosHeader from "./PosHeader";
import ProductCard from "./ProductCard";

export default function PosWorkspace() {
  const [category, setCategory] = useState("all");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [toast, setToast] = useState("");

  useEffect(() => { if (!toast) return; const timer = window.setTimeout(() => setToast(""), 2500); return () => window.clearTimeout(timer); }, [toast]);
  const visibleProducts = useMemo(() => products.filter((product) => (category === "all" || category === "combos" || product.category === category) && (!inStockOnly || product.stock === "in") && (activeTags.length === 0 || activeTags.some((tag) => product.tags.includes(tag)))), [activeTags, category, inStockOnly]);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const addProduct = (product: Product) => { setCart((current) => { const existing = current.find((item) => item.product.id === product.id); return existing ? current.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { product, quantity: 1 }]; }); setToast(`${product.name} (+$${product.price.toFixed(2)}) added to kitchen ticket`); };
  const addCombo = () => { setToast("Shinjuku Midnight Combo (+$12.99) added to kitchen ticket"); };

  return <main className="min-h-screen bg-[#f9f9f9] font-['Work_Sans'] text-[#1b1b1b]"><PosHeader /><div className="mx-auto max-w-[1400px] px-4 py-5 lg:px-10"><ComboPromo onAdd={addCombo} /><FilterStrip activeCategory={category} inStockOnly={inStockOnly} activeTags={activeTags} onCategory={setCategory} onStock={() => setInStockOnly((value) => !value)} onTag={(tag) => setActiveTags((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag])} />{visibleProducts.length ? <section className="grid grid-cols-1 gap-4 pb-16 md:grid-cols-2 lg:grid-cols-3">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={addProduct} />)}</section> : <div className="border-[3px] border-black bg-white p-16 text-center font-['Space_Grotesk'] font-bold uppercase shadow-[4px_4px_0_#1b1b1b]">No items match the current POS filters.</div>}</div>{toast && <div role="status" className="fixed right-4 top-20 z-50 border-[3px] border-black bg-[#76ff9e] px-4 py-3 font-['Space_Grotesk'] text-sm font-bold uppercase shadow-[4px_4px_0_#1b1b1b]">✓ Added to kitchen ticket<br /><span className="text-base">{toast}</span></div>}<CartDock count={count} total={total} onCheckout={() => setToast(count ? `Checkout opened for ${count} item${count === 1 ? "" : "s"}` : "Cart dock is empty — add a menu item first")} /><PosFooter /></main>;
}
