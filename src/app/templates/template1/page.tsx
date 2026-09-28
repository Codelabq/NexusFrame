"use client";

import { useState } from "react";
import {
	CheckCircle2,
	ChevronDown,
	Cpu,
	Hash,
	Layers,
	Search,
	ShoppingCart,
	Star,
	Timer,
	type LucideIcon,
} from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import type { DigitalAssistantTemplateData, template1Product } from "@/types/index";
import { placeholder } from "./data";

const heroStatIcons: LucideIcon[] = [Layers, Star, Timer, CheckCircle2];
const heroStatColors = ["text-[#00f0ff]", "text-[#ddb7ff]", "text-[#6ffbbe]", "text-[#00dbe9]"];

export default function Template1Page({
	resolvedObject = {},
}: {
	resolvedObject?: Partial<DigitalAssistantTemplateData>;
}) {
	// Fill anything the caller omitted from the placeholder.
	const data = { ...placeholder, ...resolvedObject } as DigitalAssistantTemplateData;
	const [cartCount, setCartCount] = useState(0);
	const [activeCategory, setActiveCategory] = useState("all");

	const {
		heroTitle,
		heroDescription,
		heroStats,
		spotlight,
		products,
	} = data;

	// Static template copy (not resolved from the caller).
	const searchPlaceholder =
		"Search WebGL shaders, synthetic weights, HUD kits, or USDZ primitives...";
	const searchActionLabel = "Inspect";
	const catalogTitle = "Verified Technical Catalog";
	const catalogSubtitle =
		"Real-time indexed assets available with instant checksum-validated downloads.";
	const catalogSortLabel = "Sort by:";
	const catalogSortOptions = [
		"Trending Velocity",
		"Price: Low to High",
		"Price: High to Low",
		"Latest Ingest",
	];
	const catalogDefaultSort = "Trending Velocity";
	const catalogLoadMoreLabel = "Stream Next 24 Cybernetic Units";
	const catalogCountPrefix = "Viewing";
	const catalogCountLabel = "verified indexed modules";
	const catalogCountTotal = "2,410";
	const productCardCtaLabel = "Acquire";

	if (!products) return null;
	const derivedCategories: Set<string> = new Set(
		products.map((product: template1Product): string => product.productCategory),
	);
	const categories: string[] = ["All Items", ...derivedCategories];

	const handleQuickAdd = () => {
		setCartCount((currentCount) => currentCount + 1);
	};

	const filteredProducts =
		activeCategory === "all" || activeCategory === "All Items"
			? products
			: products.filter((product) => product.productCategory === activeCategory);

	return (
		<div className="bg-[#111319] text-[#e2e2eb] min-h-screen relative overflow-hidden font-['Inter']">
			<div className="pointer-events-none absolute -top-[10rem] left-1/4 w-[46.875rem] h-[34.375rem] rounded-full bg-gradient-to-tr from-[#00f0ff]/15 via-[#6f00be]/10 to-transparent blur-[140px] -z-0" />
			<div className="pointer-events-none absolute top-[42.5rem] -right-[12rem] w-[37.5rem] h-[37.5rem] rounded-full bg-gradient-to-bl from-[#ddb7ff]/15 via-[#00f0ff]/5 to-transparent blur-[140px] -z-0" />
			<div className="pointer-events-none absolute top-[100rem] -left-[8rem] w-[40.625rem] h-[31.25rem] rounded-full bg-gradient-to-r from-[#00f0ff]/10 via-[#6ffbbe]/5 to-transparent blur-[140px] -z-0" />

			<Navbar cartCount={cartCount} />

			<main className="w-full pt-[5rem] relative z-[1]">
				<section className="relative w-full max-w-[1440px] mx-auto px-[1rem] lg:px-[3rem] pt-[3rem] pb-[2rem]">
					<div className="flex flex-col items-start max-w-[64rem] gap-[1rem]">

						<h1 className="text-[36px] sm:text-[56px] font-[700] text-[#dbfcff] leading-[44px] sm:leading-[64px] tracking-[-0.03em]">
							{heroTitle}
							<br className="hidden sm:inline" />

						</h1>
						<p className="font-['Inter'] text-[18px] leading-[28px] text-[#b9cacb] max-w-[42rem]">
							{heroDescription}
						</p>

						<div className="grid grid-cols-2 sm:grid-cols-4 gap-[0.75rem] w-full pt-[0.5rem]">
							{heroStats.map((stat, index) => {
								const Icon = heroStatIcons[index] ?? Layers;
								const color = heroStatColors[index] ?? heroStatColors[0];
								return (
									<div className="flex items-center gap-[0.5rem] p-[0.75rem] rounded-[0.75rem] bg-[#1e1f26]/70 shadow-sm backdrop-blur-md" key={stat.heroStatLabel}>
										<Icon aria-hidden="true" className={color} size={24} />
										<div className="flex flex-col">
											<span className="font-['Inter'] text-[20px] leading-[28px] text-[#e2e2eb] font-[700]">{stat.heroStatValue}</span>
											<span className="font-['Inter'] text-[12px] leading-[16px] text-[#b9cacb]">{stat.heroStatLabel}</span>
										</div>
									</div>
								);
							})}
						</div>

						<div className="w-full flex flex-col gap-[1rem] pt-[0.5rem]">
							<div className="relative w-full flex items-center shadow-lg">
								<Search aria-hidden="true" className="absolute left-[1rem] text-[#00f0ff] pointer-events-none" size={24} />
								<input
									className="w-full bg-[#191b22]/95 backdrop-blur-2xl rounded-[0.75rem] pl-[3.5rem] pr-[8rem] py-[1rem] font-[monospace] text-[16px] text-[#e2e2eb] placeholder:text-[#b9cacb]/60 border border-[#ffffff]/10 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_24px_rgba(0,240,255,0.3)]"
									placeholder={searchPlaceholder}
									type="search"
								/>
								<button className="absolute right-[0.75rem] bg-[#00f0ff] text-[#006970] font-['Inter'] text-[12px] px-[1rem] py-[0.625rem] rounded-[0.5rem] flex items-center gap-[0.25rem] font-[600]" type="button">
									<span>{searchActionLabel}</span>
									<Cpu aria-hidden="true" size={18} />
								</button>
							</div>
							<div className="flex items-center gap-[0.5rem] overflow-x-auto pb-[0.25rem] pt-[0.25rem]">
								{categories.map((category) => {
									const isActive = (category === "All Items" && activeCategory === "all") || activeCategory === category;
									return (
										<button
											className={`px-[1rem] py-[0.5rem] rounded-full font-['Inter'] text-[12px] uppercase tracking-wider font-[600] transition-all shrink-0 ${
												isActive
													? "bg-[#00f0ff] text-[#006970] shadow-[0_0_16px_rgba(0,240,255,0.4)]"
													: "bg-[#282a30]/70 text-[#b9cacb] hover:text-[#e2e2eb]"
											}`}
											key={category}
											onClick={() => setActiveCategory(category === "All Items" ? "all" : category)}
											type="button"
										>
											{category}
										</button>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				<section className="w-full max-w-[1440px] mx-auto px-[1rem] lg:px-[3rem] pb-[3rem]">
					<div className="relative overflow-hidden bg-[#191b22] shadow-xl rounded-[1rem] p-[2rem]">
						<div className="absolute inset-0 bg-gradient-to-r from-[#111319] via-[#191b22]/95 to-transparent pointer-events-none" />
						<div className="relative z-[1] grid grid-cols-1 lg:grid-cols-12 gap-[2rem] items-center">
							<div className="lg:col-span-7 flex flex-col gap-[1rem]">
								<div className="flex items-center gap-[0.5rem]">
									<span className="px-[0.5rem] py-[0.125rem] rounded-[0.25rem] bg-[#6f00be] text-[#f0dbff] font-[monospace] text-[11px] font-[700] uppercase tracking-wider">{spotlight.badgeText}</span>
									<span className="text-[#849495] text-[12px]">•</span>
									<span className="font-[monospace] text-[13px] text-[#00dbe9]">{spotlight.subtitle}</span>
								</div>
								<h2 className="font-['Inter'] text-[32px] leading-[40px] text-[#dbfcff] font-[600] tracking-[-0.02em]">{spotlight.title}</h2>
								<p className="font-['Inter'] text-[16px] leading-[24px] text-[#b9cacb] max-w-[36rem]">{spotlight.description}</p>
								<div className="flex flex-wrap items-center gap-[1.5rem] pt-[0.5rem]">
									<div className="flex items-center gap-[0.5rem] bg-[#282a30]/80 px-[1rem] py-[0.5rem] rounded-[0.75rem]">
										<Timer aria-hidden="true" className="text-[#00f0ff]" size={20} />
										<div className="flex flex-col">
											<span className="font-[monospace] text-[13px] text-[#00f0ff] font-[700]">08h : 41m : 05s</span>
											<span className="font-['Inter'] text-[10px] text-[#b9cacb] uppercase tracking-wider">Release Closes</span>
										</div>
									</div>
									<div className="flex items-baseline gap-[0.5rem]">
										<span className="font-['Inter'] text-[24px] leading-[32px] text-[#e2e2eb] font-[700]">{spotlight.price}</span>
									</div>
									<button className="bg-[#00f0ff] text-[#006970] font-['Inter'] text-[12px] px-[1.5rem] py-[0.75rem] rounded-[0.75rem] hover:shadow-[0_0_24px_rgba(0,240,255,0.6)] transition-all flex items-center gap-[0.5rem] font-[700]" onClick={handleQuickAdd} type="button">
										<ShoppingCart aria-hidden="true" size={18} />
										<span>Claim Mint Slot</span>
									</button>
								</div>
							</div>
							<div className="lg:col-span-5 relative w-full h-[17.5rem] lg:h-[21.25rem] rounded-[0.75rem] overflow-hidden shadow-2xl">
								<img alt={spotlight.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src={spotlight.imageUrl} />
								<div className="absolute inset-0 bg-gradient-to-t from-[#111319]/90 via-transparent to-transparent flex flex-col justify-end p-[1rem]">
									<div className="flex items-center justify-between text-[#e2e2eb] font-[monospace] text-[13px]">
										<span className="flex items-center gap-[0.25rem]"><Hash aria-hidden="true" className="text-[#6ffbbe]" size={16} />{spotlight.imageLabel}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full max-w-[1440px] mx-auto px-[1rem] lg:px-[3rem] pb-[4.5rem]">
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[1rem] pb-[1.5rem]">
						<div>
							<div className="flex items-center gap-[0.5rem]">
								<Layers aria-hidden="true" className="text-[#00f0ff]" size={20} />
								<h2 className="font-['Inter'] text-[24px] leading-[32px] text-[#dbfcff] font-[600]">{catalogTitle}</h2>
							</div>
							<p className="font-['Inter'] text-[14px] leading-[20px] text-[#b9cacb]">{catalogSubtitle}</p>
						</div>
						<label className="flex items-center gap-[0.5rem] font-['Inter'] text-[12px] text-[#b9cacb] uppercase tracking-wider">
							{catalogSortLabel}
							<span className="relative flex items-center">
								<select className="appearance-none bg-[#282a30] font-[monospace] text-[13px] text-[#e2e2eb] rounded-[0.5rem] px-[0.75rem] py-[0.375rem] pr-[2rem] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]" defaultValue={catalogDefaultSort}>
									{catalogSortOptions.map((option) => (
										<option key={option}>{option}</option>
									))}
								</select>
								<ChevronDown aria-hidden="true" className="absolute right-[0.5rem] pointer-events-none text-[#b9cacb]" size={14} />
							</span>
						</label>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.5rem]">
						{filteredProducts.map((product) => (
							<ProductCard key={product.productId} product={product} ctaLabel={productCardCtaLabel} onQuickAdd={handleQuickAdd} />
						))}
					</div>
					<div className="flex flex-col items-center justify-center pt-[3rem] gap-[0.75rem]">
						<button className="px-[3rem] py-[0.75rem] rounded-[0.75rem] bg-[#282a30] text-[#e2e2eb] hover:bg-[#33343b] transition-all flex items-center gap-[0.5rem] font-['Inter'] text-[12px] uppercase tracking-wider font-[600]" type="button">
							<span>{catalogLoadMoreLabel}</span>
						</button>
						<span className="font-[monospace] text-[12px] text-[#849495]">{catalogCountPrefix} {filteredProducts.length} of {catalogCountTotal} {catalogCountLabel}</span>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
