"use client";

import { ArrowRight, CheckCircle, Droplets, Heart, Lock, MessageCircle, Plus, ScanLine, Share2, Star, Thermometer, Volume2, X, Zap, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CartFlyout from "./components/CartFlyout";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDetailsModal from "./components/ProductDetailsModal";
import { arsenalProducts, bundles, kinetiqXPoints, standardBodyRollerPoints, ugcReviews, type ArsenalProduct } from "./data";

const heroImageUrl =
	"https://videos.pond5.com/vertical-screen-person-holds-compact-footage-303907492_main_xxl.mp4"
const hookBullets = [
	{ title: "3,200 RPM", text: "Kinetic deep micro-bursts", icon: CheckCircle },
	{ title: "14-Day Shift", text: "Visible contours guaranteed", icon: CheckCircle },
	{ title: "60-Day Trial", text: "Full refund if unsatisfied", icon: CheckCircle },
];

const productIcons: Record<string, LucideIcon> = {
	ScanLine,
	Zap,
	Thermometer,
	Droplets,
};

export default function Template5Page() {
	const [cartItems, setCartItems] = useState<ArsenalProduct[]>([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<ArsenalProduct | null>(null);
	const [selectedBundle, setSelectedBundle] = useState(1);
	const [selectedFinish, setSelectedFinish] = useState("obsidian");
	const [countdownSeconds, setCountdownSeconds] = useState(7 * 60 + 16);

	useEffect(() => {
		const countdown = window.setInterval(() => {
			setCountdownSeconds((seconds) => (seconds > 0 ? seconds - 1 : 7 * 60 + 16));
		}, 1000);

		return () => window.clearInterval(countdown);
	}, []);

	const addToCart = (product: ArsenalProduct) => {
		setCartItems((items) => [...items, product]);
		setSelectedProduct(null);
	};

	const handleAddToCart = (product: ArsenalProduct) => {
		addToCart(product);
	};

	const activeBundle = bundles[selectedBundle];
	const countdownMinutes = Math.floor(countdownSeconds / 60).toString().padStart(2, "0");
	const countdownRemainder = (countdownSeconds % 60).toString().padStart(2, "0");

	return (
		<>
			<Navbar cartItems={cartItems} onOpenCart={() => setIsCartOpen(true)} />

			<main className="relative min-h-screen w-full overflow-hidden bg-[#121318] pt-[64px] font-['Inter'] text-[#e3e1e9]">
				<div className="pointer-events-none absolute -left-[12rem] top-[12rem] h-[28rem] w-[28rem] rounded-[3rem] bg-[#4edea3]/10 blur-[140px]" />
				<div className="pointer-events-none absolute right-[-10rem] top-[28rem] h-[24rem] w-[24rem] rounded-[3rem] bg-[#4edea3]/10 blur-[140px]" />

				<section id="overview" className="relative mx-auto grid max-w-[72rem] grid-cols-1 gap-[3rem] px-[1rem] py-[3rem] lg:grid-cols-12">
					<div className="lg:col-span-7">
						<div className="mb-[1rem] flex flex-wrap gap-[0.5rem] font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.06em] text-[#4edea3]">
							<span className="rounded-[3rem] bg-[#064e3b] px-[0.75rem] py-[0.25rem]">TikTok viral sensation</span>
							<span className="rounded-[3rem] bg-[#1a1b21] px-[0.75rem] py-[0.25rem] text-[#bbcabf]">4.9+ · 18,490+ verified reviews</span>
						</div>

						<h1 className="font-['Montserrat'] text-[2.5rem] font-[900] leading-[1.05] tracking-[-0.03em] text-[#e3e1e9] md:text-[3.5rem]">
							TONE &amp; SCULPT
							<br />
							<span className="text-[#4edea3]">IN JUST 14 DAYS.</span>
						</h1>
						<p className="mt-[1rem] max-w-[38rem] font-['Inter'] text-[1rem] leading-[1.5] text-[#bbcabf] md:text-[1.125rem]">
							The high-frequency kinetic micro-percussion sculptor viral on FYP. Engineered to target fascia, ignite lymphatic drainage, and carve defined body contours.
						</p>

						<div className="relative mt-[1.5rem] aspect-[9/16] w-full max-w-[28rem] overflow-hidden rounded-[1.5rem] bg-[#0d0e13] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)]">
							<video
								src={heroImageUrl}
								className="h-full w-full object-cover"
							/>
							<div className="absolute left-[1rem] top-[1rem] flex items-center gap-[0.5rem] rounded-[3rem] bg-[#000000]/40 px-[0.75rem] py-[0.5rem] font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.06em] text-[#ffffff] backdrop-blur-md">
								<span className="h-2 w-2 animate-pulse rounded-full bg-[#4edea3]" />
								Live demo
							</div>
							<button
								type="button"
								aria-label="Toggle video sound"
								className="absolute right-[1rem] top-[1rem] flex h-11 w-11 items-center justify-center rounded-[3rem] bg-[#000000]/40 text-[#ffffff] backdrop-blur-md"
							>
								<Volume2 className="h-[18px] w-[18px]" />
							</button>
							<div className="absolute right-[1rem] top-1/2 flex -translate-y-1/2 flex-col gap-[0.75rem]">
								{[Heart, MessageCircle, Share2].map((Icon, index) => (
									<button
										type="button"
										key={index}
										aria-label={index === 0 ? "Like video" : index === 1 ? "Comment on video" : "Share video"}
										className="flex h-11 w-11 items-center justify-center rounded-[3rem] bg-[#000000]/40 text-[#ffffff] backdrop-blur-md"
									>
										<Icon className="h-[20px] w-[20px]" />
									</button>
								))}
							</div>
							<div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#0d0e13] to-transparent p-[1rem] pt-[4rem]">
								<p className="font-['Montserrat'] text-[1rem] font-[700] text-[#ffffff]">@chloe.glows</p>
								<p className="mt-[0.25rem] font-['Inter'] text-[0.75rem] text-[#e3e1e9]">
									“How I contoured my arms in 14 days ✨ No painful tools.”
								</p>
								<button
									type="button"
									onClick={() => setIsCartOpen(true)}
									className="mt-[0.75rem] rounded-[3rem] bg-[#4edea3] px-[1rem] py-[0.5rem] font-['Montserrat'] text-[0.75rem] font-[800] uppercase text-[#003824]"
								>
									Claim 50% off
								</button>
							</div>
						</div>

						<div className="mt-[1.5rem] grid grid-cols-1 gap-[0.75rem] sm:grid-cols-3">
							{hookBullets.map((bullet) => {
								const Icon = bullet.icon;
								return (
									<div key={bullet.title} className="flex gap-[0.5rem] rounded-[1.5rem] bg-[#1a1b21] p-[1rem]">
										<Icon className="h-[22px] w-[22px] shrink-0 text-[#4edea3]" />
										<div>
											<p className="font-['Montserrat'] text-[1.125rem] font-[700] text-[#e3e1e9]">{bullet.title}</p>
											<p className="mt-[0.25rem] font-['Inter'] text-[0.75rem] text-[#bbcabf]">{bullet.text}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<aside className="flex flex-col gap-[1rem] bg-[#1a1b21] p-[1.5rem] rounded-[1.5rem] shadow-2xl lg:col-span-5 lg:sticky lg:top-[6rem]">
						<div className="flex items-center justify-between rounded-[1.5rem] bg-[#0b513d]/60 p-[0.75rem] text-[#83c2a9]">
							<span className="font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.06em]">Flash sale expires</span>
							<span className="font-['Montserrat'] text-[1.125rem] font-[800]">{countdownMinutes}:{countdownRemainder}</span>
						</div>

						<div>
							<p className="font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[#4edea3]">KINETIQ.X Pro Edition</p>
							<h2 className="font-['Montserrat'] text-[1.75rem] font-[800] text-[#e3e1e9]">Percussive Sculptor</h2>
							<div className="mt-[0.5rem] flex items-center gap-[0.5rem]">
								<div className="flex text-[#4edea3]" aria-label="5 out of 5 stars">
									{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-[16px] w-[16px] fill-current" />)}
								</div>
								<span className="font-['Inter'] text-[0.75rem] text-[#bbcabf]">4.9 / 5.0 (2,419 verified)</span>
							</div>
						</div>

						<div>
							<p className="font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.06em] text-[#bbcabf]">Select finish: matte obsidian</p>
							<div className="mt-[0.5rem] flex gap-[0.75rem]">
								{[
									{ id: "obsidian", label: "Matte obsidian", color: "bg-[#0d0e13]" },
									{ id: "pearl", label: "Pearl white", color: "bg-[#e3e1e9]" },
									{ id: "mint", label: "Kinetic mint", color: "bg-[#95d3ba]" },
								].map((finish) => (
									<button
										type="button"
										key={finish.id}
										onClick={() => setSelectedFinish(finish.id)}
										aria-label={finish.label}
										className={`h-9 w-9 rounded-[3rem] ring-offset-[#1a1b21] ${finish.color} ${selectedFinish === finish.id ? "ring-2 ring-[#4edea3] ring-offset-2" : ""}`}
									/>
								))}
							</div>
						</div>

						<div>
							<p className="font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.06em] text-[#bbcabf]">Select bundle &amp; save</p>
							<div className="mt-[0.25rem] flex flex-col gap-[0.5rem]">
								{bundles.map((bundle, index) => {
									const isSelected = selectedBundle === index;
									return (
										<label className="relative mt-2 cursor-pointer" key={bundle.id}>
											<input className="sr-only" type="radio" name="bundle" checked={isSelected} onChange={() => setSelectedBundle(index)} />
											{bundle.isMostPopular && <span className="absolute -top-2.5 right-4 rounded-[3rem] bg-[#4edea3] px-[0.5rem] py-[0.25rem] font-['Inter'] text-[0.75rem] font-[800] uppercase text-[#003824]">Most popular · buy 1 get 1 free</span>}
											<div className={`flex justify-between rounded-[1.5rem] p-[0.75rem] transition-all ${isSelected ? "bg-[#10b981]/20 shadow-[0_0_24px_rgba(78,222,163,0.25)]" : "bg-[#1e1f25]"}`}>
												<div className="flex min-w-0 items-start gap-[0.75rem]">
													<span className="mt-[0.125rem] flex h-5 w-5 shrink-0 items-center justify-center rounded-[3rem] border border-[#86948a]">{isSelected && <span className="h-2.5 w-2.5 rounded-[3rem] bg-[#4edea3]" />}</span>
													<span><span className="block font-['Montserrat'] text-[1rem] font-[700] text-[#e3e1e9]">{bundle.title}</span><span className="mt-[0.125rem] block font-['Inter'] text-[0.75rem] text-[#bbcabf]">{bundle.description}</span></span>
												</div>
												<span className="shrink-0 font-['Montserrat'] text-[1rem] font-[800] text-[#e3e1e9]">${bundle.price}.00</span>
											</div>
										</label>
									);
								})}
							</div>
						</div>

						<div className="flex items-baseline justify-between border-t border-[#3c4a42] pt-[1rem]">
							<span className="font-['Inter'] text-[0.875rem] text-[#bbcabf]">Subtotal today:</span>
							<span className="font-['Montserrat'] text-[1.5rem] font-[800] text-[#4edea3]">${activeBundle.price}.00</span>
						</div>
						<button onClick={() => setIsCartOpen(true)} type="button" className="flex w-full items-center justify-center gap-[0.5rem] rounded-[3rem] bg-[#4edea3] px-[1.5rem] py-[1rem] font-['Montserrat'] text-[1.125rem] font-[800] uppercase text-[#003824] shadow-[0_12px_32px_-4px_rgba(78,222,163,0.5)]">
							<Lock className="h-[18px] w-[18px]" />
							Complete my order
							<ArrowRight className="h-[18px] w-[18px]" />
						</button>
					</aside>
				</section>

				<section id="arsenal" className="w-full bg-[#0d0e13]/80 px-[1rem] py-[3rem] lg:px-[2rem]">
					<div className="mx-auto max-w-[72rem] text-center">
						<p className="font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[#4edea3]">Engineered performance · kinetic lineup</p>
						<h2 className="mt-[0.5rem] font-['Montserrat'] text-[2.25rem] font-[800] text-[#e3e1e9]">The KINETIQ Recovery Arsenal</h2>
						<p className="mx-auto mt-[0.75rem] max-w-[42rem] font-['Inter'] text-[1rem] leading-[1.5] text-[#bbcabf]">High-frequency recovery, body sculpting, and fascia-release gear tuned for peak performance.</p>
					</div>

					<div className="mx-auto mt-[2rem] grid max-w-[72rem] grid-cols-1 gap-[1rem] sm:grid-cols-2 lg:grid-cols-4">
						{arsenalProducts.map((product) => {
							const ProductIcon = productIcons[product.iconName] ?? ScanLine;
							return (
								<article
									key={product.id}
									onClick={() => setSelectedProduct(product)}
									className="group relative flex cursor-pointer flex-col gap-[1rem] overflow-hidden rounded-[1.5rem] bg-[#1a1b21] p-[1rem] shadow-lg transition-all hover:scale-105"
								>
									<div className="flex justify-between gap-[0.5rem] font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.04em]">
										<span className="rounded-[3rem] bg-[#4edea3] px-[0.5rem] py-[0.25rem] text-[#003824]">{product.badgeText}</span>
										<span className="rounded-[3rem] bg-[#4edea3]/10 px-[0.5rem] py-[0.25rem] text-[#4edea3]">Save {Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
									</div>
									<div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#1e1f25] transition-colors group-hover:bg-[#292a2f]">
										<ProductIcon className="h-[80px] w-[80px] text-[#4edea3] opacity-80 transition-transform group-hover:scale-110" />
									</div>
									<div className="flex flex-1 flex-col">
										<p className="font-['Inter'] text-[0.75rem] text-[#bbcabf]">{product.description.split(" • ")[0]}</p>
										<div className="mt-[0.5rem] flex items-center gap-[0.25rem] text-[#4edea3]">
											{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-[14px] w-[14px] fill-current" />)}
											<span className="ml-[0.25rem] font-['Inter'] text-[0.75rem] text-[#bbcabf]">{product.rating} ({product.reviewsCount.toLocaleString()})</span>
										</div>
										<h3 className="mt-[0.5rem] font-['Montserrat'] text-[1.125rem] font-[700] text-[#e3e1e9]">{product.title}</h3>
										<p className="mt-[0.25rem] font-['Inter'] text-[0.75rem] leading-[1.5] text-[#bbcabf]">{product.description}</p>
										<div className="mt-auto flex items-end justify-between gap-[0.5rem] pt-[1rem]">
											<div><span className="font-['Montserrat'] text-[1.5rem] font-[800] text-[#e3e1e9]">${product.price}</span> <span className="font-['Inter'] text-[0.75rem] text-[#86948a] line-through">${product.originalPrice}</span></div>
											<span className="font-['Inter'] text-[0.75rem] font-[700] uppercase text-[#4edea3]">In stock</span>
										</div>
									</div>
									<button
										type="button"
										onClick={(event) => { event.stopPropagation(); handleAddToCart(product); }}
										className="flex w-full cursor-pointer items-center justify-center gap-[0.5rem] rounded-[3rem] bg-[#34343a] py-[0.5rem] font-['Montserrat'] text-[1.125rem] font-[800] uppercase text-[#e3e1e9] transition-all hover:bg-[#38393f]"
									>
										<Plus className="h-[18px] w-[18px] " />
										Quick Add · ${product.price}
									</button>
								</article>
							);
						})}
					</div>
				</section>

				<section id="reviews" className="w-full bg-[#0d0e13] px-[1rem] py-[3rem] lg:px-[2rem]">
					<div className="mx-auto flex max-w-[72rem] flex-col gap-[0.5rem]">
						<p className="font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[#4edea3]">Real results · no filter</p>
						<div className="flex flex-col justify-between gap-[1rem] md:flex-row md:items-end">
							<h2 className="font-['Montserrat'] text-[2.25rem] font-[800] text-[#e3e1e9]">Loved by 18,000+ creators</h2>
							<div className="flex gap-[1.5rem] font-['Montserrat'] text-[1.25rem] font-[800] text-[#4edea3]">
								<span>42M+ <small className="block font-['Inter'] text-[0.625rem] uppercase tracking-[0.06em] text-[#bbcabf]">Views on TikTok</small></span>
								<span>94.8% <small className="block font-['Inter'] text-[0.625rem] uppercase tracking-[0.06em] text-[#bbcabf]">Visible tone in 14d</small></span>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-[2rem] grid max-w-[72rem] grid-cols-1 gap-[1rem] md:grid-cols-3">
						{ugcReviews.map((review) => (
							<article key={review.id} className="flex flex-col gap-[1rem] rounded-[1.5rem] bg-[#1a1b21] p-[1.5rem]">
								<div className="flex items-start justify-between gap-[0.75rem]">
									<div className="flex min-w-0 items-center gap-[0.75rem]">
										<img src={review.avatarUrl} alt={`${review.handle} avatar`} className="h-[40px] w-[40px] rounded-full object-cover" />
										<div><p className="font-['Montserrat'] text-[1rem] font-[700] text-[#e3e1e9]">{review.handle}</p><p className="font-['Inter'] text-[0.75rem] text-[#4edea3]">{review.verifiedTag}</p></div>
									</div>
									<div className="flex shrink-0 text-[#4edea3]" aria-label="5 out of 5 stars">
										{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-[14px] w-[14px] fill-current" />)}
									</div>
								</div>
								<p className="font-['Inter'] text-[1rem] text-[#e3e1e9]">&quot;{review.quote}&quot;</p>
								<div className="flex items-center justify-between rounded-[1rem] bg-[#1e1f25] px-[0.75rem] py-[0.5rem] font-['Inter'] text-[0.75rem] text-[#bbcabf]"><span>Goal: {review.goal}</span><span className="font-[700] text-[#4edea3]">{review.result}</span></div>
							</article>
						))}
					</div>
				</section>

				<section id="comparison" className="w-full px-[1rem] py-[3rem] lg:px-[2rem]">
					<div className="mx-auto max-w-[72rem] text-center">
						<p className="font-['Inter'] text-[0.75rem] font-[700] uppercase tracking-[0.08em] text-[#4edea3]">Engineering comparison</p>
						<h2 className="mt-[0.5rem] font-['Montserrat'] text-[2.25rem] font-[800] text-[#e3e1e9]">The ordinary foam roller vs. KINETIQ.X</h2>
					</div>
					<div className="mx-auto mt-[2rem] grid max-w-[72rem] grid-cols-1 gap-[1rem] md:grid-cols-2">
						<div className="rounded-[1.5rem] bg-[#1a1b21] p-[1.5rem] opacity-70">
							<h3 className="font-['Montserrat'] text-[1.25rem] font-[700] text-[#bbcabf]">Standard Body Rollers &amp; Clones</h3>
							<ul className="mt-[1rem] flex flex-col gap-[0.75rem]">
								{standardBodyRollerPoints.map((point) => <li key={point} className="flex items-start gap-[0.5rem] font-['Inter'] text-[0.875rem] text-[#bbcabf]"><X className="h-[20px] w-[20px] shrink-0 text-[#ffb4ab]" />{point}</li>)}
							</ul>
						</div>
						<div className="relative overflow-hidden rounded-[1.5rem] bg-[#1e1f25] p-[1.5rem] shadow-xl">
							<span className="absolute right-0 top-0 rounded-bl-[1.5rem] bg-[#4edea3] px-[1rem] py-[0.25rem] font-['Montserrat'] text-[0.75rem] font-[800] uppercase text-[#003824]">Engineered better</span>
							<h3 className="font-['Montserrat'] text-[1.25rem] font-[700] text-[#4edea3]">KINETIQ.X Sculptor</h3>
							<ul className="mt-[1rem] flex flex-col gap-[0.75rem]">
								{kinetiqXPoints.map((point) => <li key={point} className="flex items-start gap-[0.5rem] font-['Inter'] text-[0.875rem] text-[#e3e1e9]"><CheckCircle className="h-[20px] w-[20px] shrink-0 text-[#4edea3]" />{point}</li>)}
							</ul>
						</div>
					</div>
				</section>
			</main>

			<Footer />
			<CartFlyout cartItems={cartItems} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
			<ProductDetailsModal
				product={selectedProduct}
				isOpen={selectedProduct !== null}
				onClose={() => setSelectedProduct(null)}
				onAddToCart={addToCart}
			/>
		</>
	);
}
