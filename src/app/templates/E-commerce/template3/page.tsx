"use client";

import { useState } from "react";
import {
	ArrowDown,
	ArrowUpRight,
	CheckCircle2,
	CircleUserRound,
	Leaf,
	Mail,
	PackageCheck,
	Quote,
	ShieldCheck,
	ShoppingBag,
	Star,
	Wind,
} from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ToastNotification from "./components/ToastNotification";
import { categories, heroProduct, products, testimonials } from "./data";

const publicationLogos = [
	"VOGUE LIVING",
	"WIRED DESIGN",
	"WALLPAPER*",
	"HYPEBEAST",
	"FAST COMPANY",
	"MONOCLE",
	"DEZEEN",
];

export default function Template3Page() {
	const [cartCount, setCartCount] = useState(0);
	const [activeCategory, setActiveCategory] = useState("All Objects");
	const [toastMsg, setToastMsg] = useState("");
	const [isToastVisible, setIsToastVisible] = useState(false);

	const triggerToast = (message: string) => {
		setToastMsg(message);
		setIsToastVisible(true);
		window.setTimeout(() => setIsToastVisible(false), 3200);
	};

	const handleQuickAdd = (title: string) => {
		setCartCount((currentCount) => currentCount + 1);
		triggerToast(`Added ${title} to bag`);
	};

	const filteredProducts =
		activeCategory === "All Objects"
			? products
			: products.filter((product) => product.category === activeCategory);

	return (
		<div className="bg-[#fff7fb] text-[#1e1b1e] min-h-screen font-['Inter']">
			<Navbar cartCount={cartCount} />
			<ToastNotification isVisible={isToastVisible} message={toastMsg} />
			<main className="w-full pt-20 bg-[#fff7fb] min-h-screen flex flex-col font-['Inter'] text-[#1e1b1e]">
				<div className="relative w-full overflow-hidden">
					<div className="absolute -top-[8rem] left-1/4 w-[24rem] h-[24rem] bg-[#fdd0ea]/40 rounded-full blur-3xl pointer-events-none" />
					<div className="absolute top-[12rem] right-[2rem] w-[20rem] h-[20rem] bg-[#c4e7ff]/40 rounded-full blur-3xl pointer-events-none" />
					<div className="absolute top-[44rem] left-[8rem] w-[18rem] h-[18rem] bg-[#ffd8e7]/50 rounded-full blur-3xl pointer-events-none" />

					<section id="shop-all" className="relative max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem] pt-[2rem] pb-[4.5rem]">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] lg:gap-[3rem] items-center">
							<div className="lg:col-span-6 flex flex-col gap-[1rem]">
								<div className="inline-flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] rounded-full bg-[#ffd8ed]/70 text-[#2c1325] text-[12px] font-[600] shadow-sm w-fit">
									<span className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#a43073] animate-ping" />
									<span>✦ 2025 SPRING DROP IS LIVE</span>
								</div>
								<h1 className="font-['Plus_Jakarta_Sans'] text-[38px] lg:text-[56px] font-[700] text-[#1e1b1e] tracking-tight leading-[44px] lg:leading-[64px]">
									Objects for <span className="text-[#a43073] italic">elevated</span> everyday living.
								</h1>
								<p className="text-[18px] leading-[28px] text-[#544249] max-w-[36rem]">
									Curated tactile hardware, sensory desk sculptures, and limited edition studio essentials. Precision-engineered with anodized aluminum, acoustic wool, and frosted borosilicate.
								</p>
								<form
									className="p-[0.25rem] rounded-full bg-[#ffffff]/80 backdrop-blur-xl shadow-md flex items-center justify-between gap-[0.5rem] mt-[0.5rem] max-w-[36rem]"
									onSubmit={(event) => {
										event.preventDefault();
										triggerToast("VIP Access Confirmed. Check your inbox!");
									}}
								>
									<div className="flex items-center gap-[0.5rem] pl-[1rem] min-w-0">
										<Mail className="text-[#544249] shrink-0" size={20} />
										<input className="w-full min-w-0 bg-transparent text-[13px] text-[#1e1b1e] placeholder:text-[#87717a] focus:outline-none" placeholder="Enter your email for private drop access..." required type="email" />
									</div>
									<button className="px-[1.5rem] py-[0.75rem] rounded-full bg-[#a43073] hover:bg-[#85145a] text-[#ffffff] text-[14px] font-[600] transition-all shadow-md whitespace-nowrap" type="submit">
										Join Waitlist <ArrowUpRight className="inline" size={16} />
									</button>
								</form>
								<div className="flex items-center gap-[0.5rem] text-[13px] text-[#544249]">
									<div className="flex -space-x-[0.5rem]">
										{heroProduct.colorOptions.map((color) => <span className="w-[1.25rem] h-[1.25rem] rounded-full border border-[#ffffff]" key={color} style={{ backgroundColor: color }} />)}
									</div>
									<span><strong className="text-[#1e1b1e]">14,800+</strong> design enthusiasts enrolled</span>
								</div>
								<div className="grid grid-cols-3 gap-[1rem] pt-[1rem] max-w-[36rem]">
									{["0.05mm|CNC Tolerance", "100%|Recyclable Shell", "3-Year|Global Guarantee"].map((metric) => {
										const [value, label] = metric.split("|");
										return <div className="p-[0.75rem] rounded-[1rem] bg-[#f9f1f6]/70" key={label}><span className="block font-['Plus_Jakarta_Sans'] text-[20px] font-[600]">{value}</span><span className="text-[10px] uppercase tracking-[0.06em] text-[#544249]">{label}</span></div>;
									})}
								</div>
							</div>

							<div className="lg:col-span-6 relative">
								<div className="absolute -inset-[1rem] bg-gradient-to-tr from-[#fdd0ea]/50 via-[#ffd8e7]/40 to-[#c4e7ff]/30 rounded-[1.5rem] blur-2xl" />
								<div className="relative bg-[#ffffff]/80 backdrop-blur-2xl shadow-[0_24px_48px_-8px_rgba(30,27,30,0.08)] rounded-[2rem] p-[1rem] overflow-hidden">
									<div className="absolute top-[1rem] left-[1rem] z-10 flex flex-col gap-[0.25rem]">
										<span className="px-[1rem] py-[0.25rem] rounded-full bg-[#fff7fb]/90 text-[12px] text-[#1e1b1e] flex items-center gap-[0.25rem]"><Wind className="text-[#a43073]" size={16} /> Active Aroma: Hinoki & Bergamot</span>
										<span className="px-[1rem] py-[0.25rem] rounded-full bg-[#fff7fb]/90 text-[12px] text-[#1e1b1e]">360° Acoustic Vaporization</span>
									</div>
									<div className="relative aspect-square w-full rounded-[1rem] bg-gradient-to-b from-[#f9f1f6] to-[#f3ecf0] flex items-center justify-center overflow-hidden group">
										<img alt={heroProduct.title} className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-105" src={heroProduct.imageUrl} />
										<div className="absolute w-[11rem] h-[11rem] rounded-full bg-[#f472b6]/30 blur-2xl pointer-events-none" />
									</div>
									<div className="mt-[1rem] flex items-center justify-between gap-[1rem]">
										<div><h2 className="font-['Plus_Jakarta_Sans'] text-[20px] font-[600]">{heroProduct.title}</h2><p className="text-[13px] text-[#544249]">{heroProduct.description}</p></div>
										<div className="flex items-center gap-[0.5rem] bg-[#f9f1f6] px-[0.75rem] py-[0.25rem] rounded-full">
											{heroProduct.colorOptions.map((color, index) => <button aria-label={`Select ${color}`} className={`w-[1.25rem] h-[1.25rem] rounded-full ${index === 0 ? "ring-2 ring-[#a43073] ring-offset-1" : ""}`} key={color} onClick={() => triggerToast(`Selected color finish: ${color}`)} style={{ backgroundColor: color }} type="button" />)}
										</div>
									</div>
									<div className="mt-[0.75rem] pt-[0.75rem] border-t border-[#dac0c9] flex items-center justify-between"><span className="font-['Plus_Jakarta_Sans'] text-[28px] font-[600]">{heroProduct.price}</span><button className="px-[1.5rem] py-[0.5rem] rounded-full bg-[#eee6ea] hover:bg-[#a43073] hover:text-[#ffffff] text-[14px] font-[600] transition-all flex items-center gap-[0.5rem]" onClick={() => handleQuickAdd(heroProduct.title)} type="button"><ShoppingBag size={18} /> Add to Bag</button></div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<section className="w-full bg-[#f9f1f6] py-[1.5rem] overflow-hidden">
					<div className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem]"><p className="text-center text-[10px] text-[#544249] uppercase tracking-[0.15em] mb-[1rem]">Featured across global design & culture publications</p><div className="flex items-center justify-between flex-wrap gap-[1.5rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-300">{publicationLogos.map((logo) => <span className="font-['Plus_Jakarta_Sans'] text-[20px] font-[600] tracking-tight" key={logo}>{logo}</span>)}</div></div>
				</section>

				<section id="catalog" className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem] py-[4.5rem] w-full">
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-[1rem] mb-[3rem]"><div><span className="text-[12px] text-[#a43073] font-[600] uppercase tracking-[0.08em]">Catalog Archive</span><h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] font-[700]">Curated Studio Hardware</h2></div><div className="flex items-center gap-[0.5rem] flex-wrap">{categories.map((category) => <button className={`px-[1rem] py-[0.5rem] rounded-full text-[14px] font-[600] transition-colors ${activeCategory === category ? "bg-[#1e1b1e] text-[#fff7fb]" : "bg-[#eee6ea] text-[#544249] hover:bg-[#dac0c9]"}`} key={category} onClick={() => setActiveCategory(category)} type="button">{category}</button>)}</div></div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onQuickAdd={handleQuickAdd} />)}</div>
					<div className="mt-[3rem] text-center"><button className="px-[1.5rem] py-[0.75rem] rounded-full bg-[#ffffff] hover:bg-[#eee6ea] text-[14px] font-[600] shadow-sm inline-flex items-center gap-[0.5rem]" type="button">Load Full 2025 Lookbook (16 Objects) <ArrowDown size={18} /></button></div>
				</section>

				<section className="w-full bg-[#f9f1f6] py-[4.5rem]"><div className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem]"><div className="flex flex-col md:flex-row md:items-end justify-between gap-[1rem] mb-[3rem]"><div><span className="text-[12px] text-[#a43073] font-[600] uppercase tracking-[0.08em]">Living with Lumen</span><h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] font-[700]">Beloved by creators worldwide.</h2></div><div className="flex items-center gap-[0.25rem] text-[14px] text-[#544249]"><CheckCircle2 className="text-[#a43073]" size={20} /> 100% Verified Community Feedback</div></div>
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] items-stretch"><article className="lg:col-span-5 bg-[#ffffff] rounded-[2rem] p-[2rem] flex flex-col justify-between"><div><div className="flex items-center justify-between mb-[1.5rem]"><div className="flex items-center gap-[0.25rem] text-[#a43073]">{[1, 2, 3, 4, 5].map((star) => <Star fill="currentColor" key={star} size={18} />)}</div><span className="px-[0.75rem] py-[0.25rem] rounded-full bg-[#ffd8e7]/50 text-[10px] font-[600]">Verified Collector</span></div><p className="font-['Plus_Jakarta_Sans'] text-[28px] leading-[36px] font-[600]">“{testimonials.elenaReview.quote}”</p><p className="text-[15px] leading-[24px] text-[#544249] mt-[1rem]">{testimonials.elenaReview.detail}</p></div><div className="pt-[2rem] mt-[1rem] flex items-center justify-between gap-[1rem]"><div className="flex items-center gap-[0.75rem]"><div className="w-[3rem] h-[3rem] rounded-full bg-[#fdd0ea] flex items-center justify-center text-[#a43073] font-[600]">EL</div><div><h3 className="text-[14px] font-[600]">{testimonials.elenaReview.name}</h3><p className="text-[13px] text-[#544249]">{testimonials.elenaReview.role}</p></div></div><span className="text-[10px] text-[#87717a]">{testimonials.elenaReview.product}</span></div></article>
						<article className="lg:col-span-3 bg-[#ffffff] rounded-[2rem] p-[2rem] flex flex-col justify-between"><div><span className="text-[10px] uppercase tracking-[0.06em] text-[#544249]">Global Performance</span><div className="mt-[0.75rem] flex items-baseline gap-[0.5rem]"><span className="font-['Plus_Jakarta_Sans'] text-[56px] font-[700]">4.9</span><span className="text-[18px] text-[#544249]">/ 5.0</span></div><p className="text-[13px] text-[#544249]">Across 8,400+ verified customer orders worldwide</p><div className="flex flex-col gap-[1rem] mt-[2rem]">{[["Craftsmanship", testimonials.performanceMetrics.craftsmanship], ["Unboxing & Packaging", testimonials.performanceMetrics.packaging], ["Longevity", testimonials.performanceMetrics.longevity]].map(([label, value]) => <div key={label}><div className="flex justify-between text-[10px] font-[600] mb-[0.25rem]"><span>{label}</span><span>{value}</span></div><div className="w-full h-[0.5rem] rounded-full bg-[#eee6ea] overflow-hidden"><div className="h-full bg-[#a43073] rounded-full" style={{ width: value }} /></div></div>)}</div></div><span className="inline-flex items-center gap-[0.25rem] text-[12px] text-[#a43073] font-[600] mt-[1rem]"><ShieldCheck size={16} /> 30-day effortless in-studio trial</span></article>
						<article className="lg:col-span-4 bg-[#ffffff] rounded-[2rem] p-[2rem] flex flex-col justify-between"><div className="w-full aspect-square rounded-[1.5rem] bg-gradient-to-br from-[#fdd0ea] to-[#c4e7ff] flex items-center justify-center"><CircleUserRound className="text-[#a43073]" size={96} strokeWidth={1} /></div><div className="pt-[1rem]"><p className="text-[15px] leading-[24px] font-[600]">“{testimonials.mayaSpotlight.quote}”</p><div className="mt-[1rem] flex items-center justify-between"><div><h3 className="text-[14px] font-[600]">{testimonials.mayaSpotlight.name}</h3><p className="text-[13px] text-[#544249]">{testimonials.mayaSpotlight.role}</p></div><Quote className="text-[#a43073]" size={24} /></div></div></article></div>
				</div></section>

				<section className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem] py-[4.5rem] w-full"><div className="rounded-[2rem] bg-gradient-to-r from-[#ffd8e7]/40 via-[#ffffff] to-[#c4e7ff]/30 backdrop-blur-2xl p-[2rem] shadow-md"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]">{[[Leaf, "Carbon Neutral", "Every shipment 100% offset globally"], [PackageCheck, "Aerospace Grade", "6063-T6 CNC anodized aluminum"], [CheckCircle2, "Plastic-Free Packaging", "Molded mycelium and soy inks"], [ShieldCheck, "3-Year Guarantee", "Direct hardware replacement coverage"]].map(([Icon, title, copy]) => <div className="flex items-center gap-[1rem]" key={title as string}><div className="w-[3rem] h-[3rem] rounded-full bg-[#ffffff] shadow-sm flex items-center justify-center text-[#a43073]"><Icon aria-hidden="true" size={24} /></div><div><h3 className="text-[14px] font-[600]">{title as string}</h3><p className="text-[13px] text-[#544249]">{copy as string}</p></div></div>)}</div></div></section>
			</main>
			<Footer />
		</div>
	);
}
