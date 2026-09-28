"use client";

import { useState } from "react";
import CartFlyout from "./components/CartFlyout";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetailsModal from "./components/ProductDetailsModal";
import SidebarFilter from "./components/SidebarFilter";
import type { PrimeMartTemplateData, primeMartProduct } from "@/types/index";
import { placeholder } from "./data";

export default function Template4Page({
	resolvedObject = {},
}: {
	resolvedObject?: Partial<PrimeMartTemplateData>;
}) {
	// Static template copy (not resolved from the caller).
	const deliveryFilterTitle = "Prime Delivery";
	const deliveryFilterOption = "Prime / Next-Day Delivery";
	const productCardAddToCartLabel = "Add to Cart";
	const productCardViewDetailsLabel = "View Details";
	const productCardReviewsSuffix = "reviews";
	const productCardListPriceLabel = "List Price:";
	const productCardFreeDeliveryPrefix = "FREE delivery";
	const productCardDealBadge = "Lightning Deal";
	const detailsSpecsHeading = "Key specifications";
	const detailsRatingSuffix = "/ 5";
	const cartTitle = "Cart";
	const cartEmptyLabel = "Your cart is empty.";
	const cartTotalLabel = "Total Price";
	const cartCheckoutLabel = "Proceed to Checkout";

	// Fill anything the caller omitted from the placeholder.
	const data = { ...placeholder, ...resolvedObject } as PrimeMartTemplateData;
	const [cartItems, setCartItems] = useState<primeMartProduct[]>([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<primeMartProduct | null>(null);

	const { departments, brands, products } = data;

	const handleAddToCart = (product: primeMartProduct) => {
		setCartItems([...cartItems, product]);
	};

	const handleViewDetails = (product: primeMartProduct) => {
		setSelectedProduct(product);
	};

	return (
		<>
			<Navbar cartItems={cartItems} onOpenCart={() => setIsCartOpen(true)} />
			<main className="w-full pt-[140px] bg-[#f9f9ff] min-h-screen font-['Inter']">
				<div className="max-w-[1440px] mx-auto px-[1rem] py-[1.25rem]">
					<div className="flex items-start gap-[1.5rem]">
						<SidebarFilter
							departments={departments}
							brands={brands}
							deliveryFilterTitle={deliveryFilterTitle}
							deliveryFilterOption={deliveryFilterOption}
						/>
						<div className="flex-1 space-y-[1rem]">
							{products.map((product) => (
								<ProductCard
									key={product.productId}
									product={product}
									addToCartLabel={productCardAddToCartLabel}
									viewDetailsLabel={productCardViewDetailsLabel}
									reviewsSuffix={productCardReviewsSuffix}
									listPriceLabel={productCardListPriceLabel}
									freeDeliveryPrefix={productCardFreeDeliveryPrefix}
									dealBadge={productCardDealBadge}
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
				title={cartTitle}
				emptyLabel={cartEmptyLabel}
				totalLabel={cartTotalLabel}
				checkoutLabel={cartCheckoutLabel}
			/>
			<ProductDetailsModal
				product={selectedProduct}
				isOpen={!!selectedProduct}
				onClose={() => setSelectedProduct(null)}
				specsHeading={detailsSpecsHeading}
				ratingSuffix={detailsRatingSuffix}
			/>
			<Footer />
		</>
	);
}
