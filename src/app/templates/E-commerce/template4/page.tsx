"use client";

import { useState } from "react";
import CartFlyout from "./components/CartFlyout";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetailsModal from "./components/ProductDetailsModal";
import SidebarFilter from "./components/SidebarFilter";
import { products, type Product } from "./data";

export default function Template4Page() {
	const [cartItems, setCartItems] = useState<Product[]>([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const handleAddToCart = (product: Product) => {
		setCartItems([...cartItems, product]);
	};

	const handleViewDetails = (product: Product) => {
		setSelectedProduct(product);
	};

	return (
		<>
			<Navbar cartItems={cartItems} onOpenCart={() => setIsCartOpen(true)} />
			<main className="w-full pt-[140px] bg-[#f9f9ff] min-h-screen font-['Inter']">
				<div className="max-w-[1440px] mx-auto px-[1rem] py-[1.25rem]">
					<div className="flex items-start gap-[1.5rem]">
						<SidebarFilter />
						<div className="flex-1 space-y-[1rem]">
							{products.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
									onAddToCart={handleAddToCart}
									onViewDetails={handleViewDetails}
								/>
							))}
						</div>
					</div>
				</div>
			</main>
			<CartFlyout
				cartItems={cartItems}
				isOpen={isCartOpen}
				onClose={() => setIsCartOpen(false)}
			/>
			<ProductDetailsModal
				product={selectedProduct}
				isOpen={!!selectedProduct}
				onClose={() => setSelectedProduct(null)}
			/>
			<Footer />
		</>
	);
}
