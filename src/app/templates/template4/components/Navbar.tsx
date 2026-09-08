"use client";

import {
	Globe,
	Menu,
	X,
	Search,
	ShoppingCart,
	User,
	ChevronDown,
	MapPin,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "../data";

interface NavbarProps {
	cartItems: Product[];
	onOpenCart: () => void;
}

const utilityLinks = [
	{ label: "Registry", href: "#" },
	{ label: "Today's Deals", href: "#" },
	{ label: "Customer Service", href: "#" },
	{ label: "Gift Cards", href: "#" },
	{ label: "Sell", href: "#" },
];

const categoryLinks = [
	{ label: "Consumer Electronics", href: "#" },
	{ label: "Computers & Tablets", href: "#" },
	{ label: "Smart Home", href: "#" },
	{ label: "TV & Home Theater", href: "#" },
	{ label: "Audio", href: "#", isActive: true },
	{ label: "PC Gaming", href: "#" },
	{ label: "Weekly Ad", href: "#" },
	{ label: "Outlet Deals", href: "#" },
];

export default function Navbar({ cartItems, onOpenCart }: NavbarProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
			{/* Row 1: Top Bar */}
			<div className="bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
					{/* Left: Location */}
					<button className="flex items-center gap-1.5 text-sm text-slate-700 hover:text-blue-600 transition-colors">
						<MapPin size={14} className="text-blue-600" />
						<span className="font-semibold">Deliver to Seattle 98101</span>
					</button>

					{/* Right: Utility Links */}
					<nav className="hidden md:flex items-center gap-4 text-sm text-slate-700">
						{utilityLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className="hover:text-blue-600 hover:underline transition-colors"
							>
								{link.label}
							</Link>
						))}
						<button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
							<Globe size={14} />
							<span>EN / USD</span>
						</button>
					</nav>
				</div>
			</div>

			{/* Row 2: Main Navigation */}
			<div className="bg-slate-50 border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-4 lg:gap-6">
					{/* Mobile Menu Trigger */}
					<button
						aria-expanded={isMobileMenuOpen}
						aria-label="Open navigation menu"
						className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
						onClick={() => setIsMobileMenuOpen(true)}
						type="button"
					>
						<Menu size={22} />
					</button>

					{/* Logo */}
					<Link
						className="shrink-0 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
						href="#"
					>
						<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
						
						</div>
						<span className="text-xl font-bold tracking-tight">PrimeMart</span>
					</Link>

					{/* Search Bar */}
					<div className="order-last lg:order-0 basis-full lg:basis-auto flex-1 lg:mx-6">
						<div className="flex border border-gray-300 rounded-md overflow-hidden">
							<button className="flex items-center gap-1 px-3 bg-blue-50/50 text-sm text-slate-700 hover:bg-blue-100 transition-colors whitespace-nowrap">
								<span>All Departments</span>
								<ChevronDown size={14} />
							</button>
							<input
								className="flex-1 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
								placeholder="Search millions of products, tech specs, deals..."
								type="search"
							/>
							<button className="bg-amber-400 hover:bg-amber-500 px-4 flex items-center justify-center transition-colors">
								<Search size={20} className="text-slate-800" />
							</button>
						</div>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-5">
						{/* Returns & Orders */}
						<Link
							className="hidden sm:flex flex-col text-sm text-slate-700 hover:text-blue-600 transition-colors"
							href="#"
						>
							<span className="text-xs text-slate-500">Returns</span>
							<span className="font-bold">&amp; Orders</span>
						</Link>

						{/* Account & Lists */}
						<button className="hidden sm:flex flex-col items-start text-sm text-slate-700 hover:text-blue-600 transition-colors group">
							<span className="text-xs text-slate-500">Hello, Sign In</span>
							<span className="font-bold flex items-center">
								Account &amp; Lists
								<ChevronDown size={14} className="ml-0.5 group-hover:translate-y-0.5 transition-transform" />
							</span>
						</button>

						{/* Cart */}
						<button
							className="relative flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors"
							onClick={onOpenCart}
						>
							<div className="relative">
								<ShoppingCart size={28} />
								<span className="absolute -top-1 -right-1.5 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
									{cartItems.length}
								</span>
							</div>
							<span className="hidden sm:inline font-bold text-sm">Cart</span>
						</button>

						{/* Profile */}
						<button className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
							<User size={18} className="text-white" />
						</button>
					</div>
				</div>
			</div>

			{/* Row 3: Category Navigation */}
			<div className="hidden lg:block bg-white border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 py-2.5">
					<nav className="flex items-center gap-6">
						<button className="flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
							<Menu size={18} />
							<span>All</span>
						</button>
						{categoryLinks.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className={`text-sm font-medium whitespace-nowrap transition-colors relative ${
									link.isActive
										? "text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full"
										: "text-slate-700 hover:text-blue-600"
								}`}
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>

			{/* Mobile Navigation Drawer */}
			{isMobileMenuOpen && (
				<div className="lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
					<button
						aria-label="Close navigation menu"
						className="fixed inset-0 bg-slate-900/40 cursor-default"
						onClick={closeMobileMenu}
						type="button"
					/>
					<aside className="fixed top-0 right-0 bottom-0 w-[min(86vw,22rem)] overflow-y-auto bg-white shadow-2xl">
						<div className="flex items-center justify-between border-b border-gray-200 bg-blue-600 px-5 py-4 text-white">
							<span className="text-lg font-bold">PrimeMart</span>
							<button
								aria-label="Close navigation menu"
								className="rounded p-1 hover:bg-blue-700 transition-colors"
								onClick={closeMobileMenu}
								type="button"
							>
								<X size={22} />
							</button>
						</div>

						<nav className="px-5 py-5" aria-label="Mobile navigation links">
							<div className="mb-6">
								<p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Quick links</p>
								<div className="space-y-1">
									{utilityLinks.map((link) => (
										<Link
											key={link.label}
											href={link.href}
											onClick={closeMobileMenu}
											className="block rounded px-3 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>

							<div>
								<p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Shop by category</p>
								<div className="space-y-1">
									{categoryLinks.map((link) => (
										<Link
											key={link.label}
											href={link.href}
											onClick={closeMobileMenu}
											className={`block rounded px-3 py-2.5 text-sm transition-colors ${
												link.isActive
													? "bg-blue-50 font-semibold text-blue-600"
													: "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
											}`}
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>

							<button className="mt-6 flex w-full items-center gap-2 border-t border-gray-200 px-3 pt-5 text-sm text-slate-700 hover:text-blue-600 transition-colors" type="button">
								<Globe size={16} />
								<span>EN / USD</span>
							</button>
						</nav>
					</aside>
				</div>
			)}
		</header>
	);
}
