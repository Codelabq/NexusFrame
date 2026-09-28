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
	type LucideIcon,
} from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ToastNotification from "./components/ToastNotification";
import type { LumenGoodsTemplateData, lumenCategory, lumenProduct } from "@/types/index";
import { placeholder } from "./data";

/** Categories derived from the union of every product's category, plus the "all" label. */
function getCategories(allCategoryLabel: string, items: lumenProduct[]): lumenCategory[] {
	return [
		{ categoryLabel: allCategoryLabel },
		...[...new Set(items.map((item) => item.productCategory))].map((categoryLabel) => ({
			categoryLabel,
		})),
	];
}

const trustIcons: Record<string, LucideIcon> = {
	leaf: Leaf,
	packageCheck: PackageCheck,
	checkCircle2: CheckCircle2,
	shieldCheck: ShieldCheck,
};

export default function Template3Page({
	resolvedObject = {},
}: {
	resolvedObject?: Partial<LumenGoodsTemplateData>;
}) {
	// Static template copy (not resolved from the caller).
	const heroBadgeText = "✦ 2025 SPRING DROP IS LIVE";
	const heroTitleAccent = "elevated";
	const heroEmailPlaceholder = "Enter your email for private drop access...";
	const heroCtaLabel = "Join Waitlist";
	const heroSocialProofCount = "14,800+";
	const heroSocialProofLabel = "design enthusiasts enrolled";
	const heroProductColorOptions = ["#e4d5c7", "#f472b6", "#18181b"];
	const heroProductAromaLabel = "Active Aroma: Hinoki & Bergamot";
	const heroProductFeatureLabel = "360° Acoustic Vaporization";
	const heroProductCtaLabel = "Add to Bag";
	const catalogEyebrow = "Catalog Archive";
	const allCategoryLabel = "All Objects";
	const defaultCategory = allCategoryLabel;
	const testimonialVerifiedLabel = "100% Verified Community Feedback";
	const testimonialVerifiedBadge = "Verified Collector";
	const testimonialPerformanceLabel = "Global Performance";
	const testimonialPerformanceScore = "4.9";
	const testimonialPerformanceMax = "/ 5.0";
	const testimonialPerformanceCaption =
		"Across 8,400+ verified customer orders worldwide";
	const testimonialTrialNote = "30-day effortless in-studio trial";
	const productCardQuickAddLabel = "Quick add";
	const toastAddMessage = "Added {title} to bag";
	const toastWaitlistMessage = "VIP Access Confirmed. Check your inbox!";
	const toastColorMessage = "Selected color finish: {color}";
	const toastDurationMs = 3200;

	// Fill anything the caller omitted from the placeholder, then derive dynamic lists.
	const merged = { ...placeholder, ...resolvedObject } as typeof placeholder;
	const data: LumenGoodsTemplateData = {
		...merged,
		categories: getCategories(allCategoryLabel, merged.products),
		catalogLoadMoreLabel: `Load Full 2025 Lookbook (${merged.products.length} Objects)`,
	};
	const [cartCount, setCartCount] = useState(0);
	const [toastMsg, setToastMsg] = useState("");
	const [isToastVisible, setIsToastVisible] = useState(false);

	const {
		heroTitle,
		heroDescription,
		heroMetrics,
		heroProduct,
		publicationSectionLabel,
		publicationLogos,
		catalogTitle,
		catalogLoadMoreLabel,
		categories,
		testimonialEyebrow,
		testimonialTitle,
		featuredReview,
		spotlightTestimonial,
		performanceMetrics,
		trustItems,
		products,
	} = data;

	const [activeCategory, setActiveCategory] = useState(defaultCategory);

	const triggerToast = (message: string) => {
		setToastMsg(message);
		setIsToastVisible(true);
		window.setTimeout(() => setIsToastVisible(false), toastDurationMs);
	};

	const handleQuickAdd = (title: string) => {
		setCartCount((currentCount) => currentCount + 1);
		triggerToast(toastAddMessage.replace("{title}", title));
	};

	const filteredProducts =
		activeCategory === defaultCategory
			? products
			: products.filter((product) => product.productCategory === activeCategory);

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
									<span>{heroBadgeText}</span>
								</div>
								<h1 className="font-['Plus_Jakarta_Sans'] text-[38px] lg:text-[56px] font-[700] text-[#1e1b1e] tracking-tight leading-[44px] lg:leading-[64px]">
									{heroTitle.split(heroTitleAccent)[0]}
									<span className="text-[#a43073] italic">{heroTitleAccent}</span>
									{heroTitle.split(heroTitleAccent)[1]}
								</h1>
								<p className="text-[18px] leading-[28px] text-[#544249] max-w-[36rem]">
									{heroDescription}
								</p>
								<form
									className="p-[0.25rem] rounded-full bg-[#ffffff]/80 backdrop-blur-xl shadow-md flex items-center justify-between gap-[0.5rem] mt-[0.5rem] max-w-[36rem]"
									onSubmit={(event) => {
										event.preventDefault();
										triggerToast(toastWaitlistMessage);
									}}
								>
									<div className="flex items-center gap-[0.5rem] pl-[1rem] min-w-0">
										<Mail className="text-[#544249] shrink-0" size={20} />
										<input className="w-full min-w-0 bg-transparent text-[13px] text-[#1e1b1e] placeholder:text-[#87717a] focus:outline-none" placeholder={heroEmailPlaceholder} required type="email" />
									</div>
									<button className="px-[1.5rem] py-[0.75rem] rounded-full bg-[#a43073] hover:bg-[#85145a] text-[#ffffff] text-[14px] font-[600] transition-all shadow-md whitespace-nowrap" type="submit">
										{heroCtaLabel} <ArrowUpRight className="inline" size={16} />
									</button>
								</form>
								<div className="flex items-center gap-[0.5rem] text-[13px] text-[#544249]">
									<div className="flex -space-x-[0.5rem]">
										{heroProductColorOptions.map((color) => <span className="w-[1.25rem] h-[1.25rem] rounded-full border border-[#ffffff]" key={color} style={{ backgroundColor: color }} />)}
									</div>
									<span><strong className="text-[#1e1b1e]">{heroSocialProofCount}</strong> {heroSocialProofLabel}</span>
								</div>
								<div className="grid grid-cols-3 gap-[1rem] pt-[1rem] max-w-[36rem]">
									{heroMetrics.map((metric) => (
										<div className="p-[0.75rem] rounded-[1rem] bg-[#f9f1f6]/70" key={metric.heroMetricLabel}><span className="block font-['Plus_Jakarta_Sans'] text-[20px] font-[600]">{metric.heroMetricValue}</span><span className="text-[10px] uppercase tracking-[0.06em] text-[#544249]">{metric.heroMetricLabel}</span></div>
									))}
								</div>
							</div>

							<div className="lg:col-span-6 relative">
								<div className="absolute -inset-[1rem] bg-gradient-to-tr from-[#fdd0ea]/50 via-[#ffd8e7]/40 to-[#c4e7ff]/30 rounded-[1.5rem] blur-2xl" />
								<div className="relative bg-[#ffffff]/80 backdrop-blur-2xl shadow-[0_24px_48px_-8px_rgba(30,27,30,0.08)] rounded-[2rem] p-[1rem] overflow-hidden">
									<div className="absolute top-[1rem] left-[1rem] z-10 flex flex-col gap-[0.25rem]">
										<span className="px-[1rem] py-[0.25rem] rounded-full bg-[#fff7fb]/90 text-[12px] text-[#1e1b1e] flex items-center gap-[0.25rem]"><Wind className="text-[#a43073]" size={16} /> {heroProductAromaLabel}</span>
										<span className="px-[1rem] py-[0.25rem] rounded-full bg-[#fff7fb]/90 text-[12px] text-[#1e1b1e]">{heroProductFeatureLabel}</span>
									</div>
									<div className="relative aspect-square w-full rounded-[1rem] bg-gradient-to-b from-[#f9f1f6] to-[#f3ecf0] flex items-center justify-center overflow-hidden group">
										<img alt={heroProduct.title} className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-105" src={heroProduct.imageUrl} />
										<div className="absolute w-[11rem] h-[11rem] rounded-full bg-[#f472b6]/30 blur-2xl pointer-events-none" />
									</div>
									<div className="mt-[1rem] flex items-center justify-between gap-[1rem]">
										<div><h2 className="font-['Plus_Jakarta_Sans'] text-[20px] font-[600]">{heroProduct.title}</h2><p className="text-[13px] text-[#544249]">{heroProduct.description}</p></div>
										<div className="flex items-center gap-[0.5rem] bg-[#f9f1f6] px-[0.75rem] py-[0.25rem] rounded-full">
											{heroProductColorOptions.map((color, index) => <button aria-label={`Select ${color}`} className={`w-[1.25rem] h-[1.25rem] rounded-full ${index === 0 ? "ring-2 ring-[#a43073] ring-offset-1" : ""}`} key={color} onClick={() => triggerToast(toastColorMessage.replace("{color}", color))} style={{ backgroundColor: color }} type="button" />)}
										</div>
									</div>
									<div className="mt-[0.75rem] pt-[0.75rem] border-t border-[#dac0c9] flex items-center justify-between"><span className="font-['Plus_Jakarta_Sans'] text-[28px] font-[600]">{heroProduct.price}</span><button className="px-[1.5rem] py-[0.5rem] rounded-full bg-[#eee6ea] hover:bg-[#a43073] hover:text-[#ffffff] text-[14px] font-[600] transition-all flex items-center gap-[0.5rem]" onClick={() => handleQuickAdd(heroProduct.title)} type="button"><ShoppingBag size={18} /> {heroProductCtaLabel}</button></div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<section className="w-full bg-[#f9f1f6] py-[1.5rem] overflow-hidden">
					<div className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem]"><p className="text-center text-[10px] text-[#544249] uppercase tracking-[0.15em] mb-[1rem]">{publicationSectionLabel}</p><div className="flex items-center justify-between flex-wrap gap-[1.5rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-300">{publicationLogos.map((logo) => <span className="font-['Plus_Jakarta_Sans'] text-[20px] font-[600] tracking-tight" key={logo.publicationLogoName}>{logo.publicationLogoName}</span>)}</div></div>
				</section>

				<section id="catalog" className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem] py-[4.5rem] w-full">
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-[1rem] mb-[3rem]"><div><span className="text-[12px] text-[#a43073] font-[600] uppercase tracking-[0.08em]">{catalogEyebrow}</span><h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] font-[700]">{catalogTitle}</h2></div><div className="flex items-center gap-[0.5rem] flex-wrap">{categories.map((category) => <button className={`px-[1rem] py-[0.5rem] rounded-full text-[14px] font-[600] transition-colors ${activeCategory === category.categoryLabel ? "bg-[#1e1b1e] text-[#fff7fb]" : "bg-[#eee6ea] text-[#544249] hover:bg-[#dac0c9]"}`} key={category.categoryLabel} onClick={() => setActiveCategory(category.categoryLabel)} type="button">{category.categoryLabel}</button>)}</div></div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">{filteredProducts.map((product) => <ProductCard key={product.productId} product={product} quickAddLabel={productCardQuickAddLabel} onQuickAdd={handleQuickAdd} />)}</div>
					<div className="mt-[3rem] text-center"><button className="px-[1.5rem] py-[0.75rem] rounded-full bg-[#ffffff] hover:bg-[#eee6ea] text-[14px] font-[600] shadow-sm inline-flex items-center gap-[0.5rem]" type="button">{catalogLoadMoreLabel} <ArrowDown size={18} /></button></div>
				</section>

				<section className="w-full bg-[#f9f1f6] py-[4.5rem]"><div className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem]"><div className="flex flex-col md:flex-row md:items-end justify-between gap-[1rem] mb-[3rem]"><div><span className="text-[12px] text-[#a43073] font-[600] uppercase tracking-[0.08em]">{testimonialEyebrow}</span><h2 className="font-['Plus_Jakarta_Sans'] text-[40px] leading-[48px] font-[700]">{testimonialTitle}</h2></div><div className="flex items-center gap-[0.25rem] text-[14px] text-[#544249]"><CheckCircle2 className="text-[#a43073]" size={20} /> {testimonialVerifiedLabel}</div></div>
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-[1.5rem] items-stretch"><article className="lg:col-span-5 bg-[#ffffff] rounded-[2rem] p-[2rem] flex flex-col justify-between"><div><div className="flex items-center justify-between mb-[1.5rem]"><div className="flex items-center gap-[0.25rem] text-[#a43073]">{[1, 2, 3, 4, 5].map((star) => <Star fill="currentColor" key={star} size={18} />)}</div><span className="px-[0.75rem] py-[0.25rem] rounded-full bg-[#ffd8e7]/50 text-[10px] font-[600]">{testimonialVerifiedBadge}</span></div><p className="font-['Plus_Jakarta_Sans'] text-[28px] leading-[36px] font-[600]">“{featuredReview.quote}”</p><p className="text-[15px] leading-[24px] text-[#544249] mt-[1rem]">{featuredReview.detail}</p></div><div className="pt-[2rem] mt-[1rem] flex items-center justify-between gap-[1rem]"><div className="flex items-center gap-[0.75rem]"><div className="w-[3rem] h-[3rem] rounded-full bg-[#fdd0ea] flex items-center justify-center text-[#a43073] font-[600]">EL</div><div><h3 className="text-[14px] font-[600]">{featuredReview.name}</h3><p className="text-[13px] text-[#544249]">{featuredReview.role}</p></div></div><span className="text-[10px] text-[#87717a]">{featuredReview.product}</span></div></article>
						<article className="lg:col-span-3 bg-[#ffffff] rounded-[2rem] p-[2rem] flex flex-col justify-between"><div><span className="text-[10px] uppercase tracking-[0.06em] text-[#544249]">{testimonialPerformanceLabel}</span><div className="mt-[0.75rem] flex items-baseline gap-[0.5rem]"><span className="font-['Plus_Jakarta_Sans'] text-[56px] font-[700]">{testimonialPerformanceScore}</span><span className="text-[18px] text-[#544249]">{testimonialPerformanceMax}</span></div><p className="text-[13px] text-[#544249]">{testimonialPerformanceCaption}</p><div className="flex flex-col gap-[1rem] mt-[2rem]">{performanceMetrics.map((metric) => <div key={metric.performanceMetricLabel}><div className="flex justify-between text-[10px] font-[600] mb-[0.25rem]"><span>{metric.performanceMetricLabel}</span><span>{metric.performanceMetricValue}</span></div><div className="w-full h-[0.5rem] rounded-full bg-[#eee6ea] overflow-hidden"><div className="h-full bg-[#a43073] rounded-full" style={{ width: metric.performanceMetricValue }} /></div></div>)}</div></div><span className="inline-flex items-center gap-[0.25rem] text-[12px] text-[#a43073] font-[600] mt-[1rem]"><ShieldCheck size={16} /> {testimonialTrialNote}</span></article>
						<article className="lg:col-span-4 bg-[#ffffff] rounded-[2rem] p-[2rem] flex flex-col justify-between"><div className="w-full aspect-square rounded-[1.5rem] bg-gradient-to-br from-[#fdd0ea] to-[#c4e7ff] flex items-center justify-center"><CircleUserRound className="text-[#a43073]" size={96} strokeWidth={1} /></div><div className="pt-[1rem]"><p className="text-[15px] leading-[24px] font-[600]">“{spotlightTestimonial.quote}”</p><div className="mt-[1rem] flex items-center justify-between"><div><h3 className="text-[14px] font-[600]">{spotlightTestimonial.name}</h3><p className="text-[13px] text-[#544249]">{spotlightTestimonial.role}</p></div><Quote className="text-[#a43073]" size={24} /></div></div></article></div>
				</div></section>

				<section className="max-w-[80rem] mx-auto px-[1rem] md:px-[1.5rem] lg:px-[2rem] py-[4.5rem] w-full"><div className="rounded-[2rem] bg-gradient-to-r from-[#ffd8e7]/40 via-[#ffffff] to-[#c4e7ff]/30 backdrop-blur-2xl p-[2rem] shadow-md"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]">{trustItems.map((item) => { const Icon = trustIcons[item.trustItemIcon] ?? Leaf; return <div className="flex items-center gap-[1rem]" key={item.trustItemTitle}><div className="w-[3rem] h-[3rem] rounded-full bg-[#ffffff] shadow-sm flex items-center justify-center text-[#a43073]"><Icon aria-hidden="true" size={24} /></div><div><h3 className="text-[14px] font-[600]">{item.trustItemTitle}</h3><p className="text-[13px] text-[#544249]">{item.trustItemCopy}</p></div></div>; })}</div></div></section>
			</main>
			<Footer />
		</div>
	);
}
