"use client";

import { useCallback, useMemo, useState } from "react";
import { Gauge } from "lucide-react";
import type {
  EnterpriseChecklistItem,
  FilterGroup,
  FilterOption,
  Option,
  TechSheetRow,
  LaptopShops01Product
} from "./types";
import { LaptopShops01placeHolder } from "./data";
import CartFlyout, { type CartItem } from "./components/CartFlyout";
import CompareFlyout from "./components/CompareFlyout";
import EnterpriseBanner from "./components/EnterpriseBanner";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetailsModal from "./components/ProductDetailsModal";
import Reveal from "./components/Reveal";
import ToastNotification, { type ToastState } from "./components/ToastNotification";

function matchesPriceRange(price: number, range: string): boolean {
  switch (range) {
    case "under-1500":
      return price < 1500;
    case "1500-2500":
      return price >= 1500 && price < 2500;
    case "2500-4000":
      return price >= 2500 && price < 4000;
    case "4000-plus":
      return price >= 4000;
    default:
      return true;
  }
}

function matchesSearch(product: LaptopShops01Product, term: string): boolean {
  const haystack = [
    product.productCode,
    product.productTitle,
    product.productDescription,
    product.productBrand,
    product.productFormFactor,
    ...product.productSpecs.map((spec) => `${spec.productSpecLabel} ${spec.productSpecValue} ${spec.productSpecSub}`),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(term);
}

/* Price bands are configuration (thresholds), but only the bands containing a
   catalog product are exposed in the facet menu. */
const priceBands = [
  { value: "under-1500", label: "Under $1,500", short: "Price: < $1,500", test: (price: number) => price < 1500 },
  { value: "1500-2500", label: "$1,500 – $2,500", short: "Price: $1.5K–$2.5K", test: (price: number) => price >= 1500 && price < 2500 },
  { value: "2500-4000", label: "$2,500 – $4,000", short: "Price: $2.5K–$4K", test: (price: number) => price >= 2500 && price < 4000 },
  { value: "4000-plus", label: "$4,000+ Enterprise", short: "Price: $4K+", test: (price: number) => price >= 4000 },
];

function uniqueValues(values: string[]): string[] {
  return Array.from(new Set(values));
}

function facetOptions(present: string[], allLabel: string, allShort?: string): FilterOption[] {
  return [
    {
      filterOptionValue: "all",
      filterOptionLabel: allLabel,
      ...(allShort ? { filterOptionShort: allShort } : {}),
    },
    ...present.map((value) => ({
      filterOptionValue: value,
      filterOptionLabel: value.toUpperCase(),
    })),
  ];
}

/** Facet ribbon groups derived from the products catalog. */
function getTopFilterGroups(items: LaptopShops01Product[]): FilterGroup[] {
  const brandValues = uniqueValues(items.map((item) => item.productBrand));
  const formFactorValues = uniqueValues(items.map((item) => item.productFormFactor));
  const cpuValues = uniqueValues(items.map((item) => item.productCpuFamily));
  const ramValues = uniqueValues(items.map((item) => item.productRamKey));
  const priceValues = priceBands.filter((band) => items.some((item) => band.test(item.productPrice)));

  return [
    {
      filterGroupId: "brand",
      filterGroupLabel: "All Brands",
      filterGroupTone: "primary",
      filterGroupMenuWidthClass: "w-64",
      filterGroupOptions: facetOptions(brandValues, "All Brands"),
    },
    {
      filterGroupId: "formFactor",
      filterGroupLabel: "All Form Factors",
      filterGroupTone: "secondary",
      filterGroupMenuWidthClass: "w-56",
      filterGroupOptions: facetOptions(formFactorValues, "All Form Factors"),
    },
    {
      filterGroupId: "cpu",
      filterGroupLabel: "CPU Architecture",
      filterGroupTone: "tertiary",
      filterGroupMenuWidthClass: "w-64",
      filterGroupOptions: facetOptions(cpuValues, "All Architectures"),
    },
    {
      filterGroupId: "price",
      filterGroupLabel: "Price: All",
      filterGroupTone: "secondary",
      filterGroupMenuWidthClass: "w-60",
      filterGroupOptions: [
        {
          filterOptionValue: "all",
          filterOptionLabel: "All Price Ranges",
          filterOptionShort: "Price: All",
        },
        ...priceValues.map((band) => ({
          filterOptionValue: band.value,
          filterOptionLabel: band.label,
          filterOptionShort: band.short,
        })),
      ],
    },
    {
      filterGroupId: "ram",
      filterGroupLabel: "RAM: All Sizes",
      filterGroupTone: "tertiary",
      filterGroupMenuWidthClass: "w-56",
      filterGroupOptions: facetOptions(ramValues, "All RAM Sizes", "RAM: All Sizes"),
    },
  ];
}

/** GPU facet group derived from the products catalog. */
function getGpuFilterGroup(items: LaptopShops01Product[]): FilterGroup {
  const gpuValues = uniqueValues(items.map((item) => item.productGpuProfile));
  return {
    filterGroupId: "gpu",
    filterGroupLabel: "GPU Profile: All GPUs",
    filterGroupTone: "tertiary",
    filterGroupMenuWidthClass: "w-64",
    filterGroupOptions: facetOptions(gpuValues, "All GPUs", "GPU Profile: All GPUs"),
  };
}

/** Condition options derived from the products catalog. */
function getConditionOptions(items: LaptopShops01Product[]): Option[] {
  const conditionValues = uniqueValues(items.map((item) => item.productCondition));
  return [
    { optionValue: "all", optionLabel: "All Conditions" },
    ...conditionValues.map((value) => ({
      optionValue: value,
      optionLabel: value.toUpperCase(),
    })),
  ];
}

/* -------------------------------------------------------------------------- */
/*  Static template copy (not resolved from the caller)                       */
/* -------------------------------------------------------------------------- */

const conditionLabel = "Condition";
const sortLabel = "Sort:";
const sortOptions: Option[] = [
  { optionValue: "benchmark", optionLabel: "Benchmark Score (Desc)" },
  { optionValue: "price-asc", optionLabel: "Base Price: Low to High" },
  { optionValue: "price-desc", optionLabel: "Base Price: High to Low" },
  { optionValue: "lead-time", optionLabel: "Lead Time: Immediate First" },
];
const defaultSort = "benchmark";
const defaultFilters: Record<string, string> = { brand: "all", formFactor: "all", cpu: "all", price: "all", ram: "all", gpu: "all" };
const matchLabel = "CONFIGS MATCH";
const emptyTitle = "No configurations match these facets";
const emptyBody =
  "Widen the price band, drop a hardware facet, or reset the matrix to review the full catalog.";
const gridFootnote = "All systems hand-assembled, burn-in tested, and shipped from the Austin lab.";
const resetLabel = "Reset matrix";
const productCardCompareLabel = "+ Compare";
const productCardConfigureLabel = "Configure & View Specs";
const detailsHighlightsHeading = "Build Highlights";
const detailsTechSheet: TechSheetRow[] = [
  { detailsTechSheetLabel: "Chassis Dimensions" },
  { detailsTechSheetLabel: "Shipping Weight" },
  { detailsTechSheetLabel: "Power Delivery" },
  { detailsTechSheetLabel: "Warranty Coverage" },
];
const cartTitle = "Configuration Cart";
const cartStagedLabel = "staged";
const cartEmptyTitle = "No configurations staged";
const cartEmptyBody =
  "Add a workstation to this cart to lock in allocation and begin provisioning.";
const cartSubtotalLabel = "Subtotal";
const cartNote =
  "Excludes sales tax, freight, and provisioning fees. Built-to-order units are allocated on payment confirmation.";
const cartCheckoutLabel = "Submit Configuration Order";
const maxCompareItems = 4;
const compareTitle = "Configuration Compare";
const compareSelectedLabel = "selected";
const compareEmptyLabel =
  "Tick “+ Compare” on any configuration card to build a side-by-side matrix.";
const compareBenchmarkLabel = "Benchmark";
const compareClearLabel = "Clear matrix";
const compareNote = "Comparison is retained for this session only.";
const enterpriseOverline = "LAB & FLEET INFRASTRUCTURE";
const enterpriseTitle = "Enterprise & Lab Fleet Deployment";
const enterpriseBody =
  "Equip your engineering department with standardized hardware, zero-touch custom Linux or Windows OS imaging, centralized hardware asset tags, and dedicated SLA replacement within 4 hours.";
const enterpriseChecklist: EnterpriseChecklistItem[] = [
  { enterpriseChecklistLabel: "ISO 9001 Built", enterpriseChecklistTone: "tertiary" },
  { enterpriseChecklistLabel: "Net 30/60 Terms Available", enterpriseChecklistTone: "primary" },
  { enterpriseChecklistLabel: "Custom PXE Boot Scripting", enterpriseChecklistTone: "secondary" },
];
const enterprisePrimaryCtaLabel = "Request Enterprise Fleet Quote";
const enterpriseSecondaryCtaLabel = "Download Hardware Catalog PDF";
const enterpriseNote = "DEDICATED ACCOUNT REPS RESPOND WITHIN 60 MINUTES";
const toastAddMessage = "Staged in cart";
const toastResetMessage = "Matrix reset";
const toastResetDetail = "Showing the full configuration catalog";
const toastCompareFullMessage = "Compare matrix full";
const toastCompareFullDetail = "systems per matrix";
const toastCompareAddMessage = "Added to compare";
const toastCompareRemoveMessage = "Removed from compare";


export default function LaptopShops01({
  resolvedData = {},
}: {
  resolvedData?: Record<string, unknown>;
}) {
  // Fill anything the caller omitted from the placeholder, then derive dynamic facets.
  const merged = { ...LaptopShops01placeHolder, ...resolvedData } as typeof LaptopShops01placeHolder;
  const data = {
    ...merged,
    topFilterGroups: getTopFilterGroups(merged.products),
    gpuFilterGroup: getGpuFilterGroup(merged.products),
    conditionOptions: getConditionOptions(merged.products),
  };
  const {
    topFilterGroups,
    gpuFilterGroup,
    conditionOptions,
    products,
    detailsAddToCartLabel,
    detailsAddToCompareLabel,
    detailsInCompareLabel,
    detailsLeadTimeLabel,
  } = data;

  // Facets
  const [filters, setFilters] = useState<Record<string, string>>(defaultFilters);
  const [condition, setCondition] = useState("all");
  const [sort, setSort] = useState(defaultSort);
  const [searchTerm, setSearchTerm] = useState("");

  // Cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Compare
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Details
  const [selectedProduct, setSelectedProduct] = useState<LaptopShops01Product | null>(null);

  // Toasts
  const [toast, setToast] = useState<ToastState | null>(null);


  /* ------------------------------ Faceting ------------------------------ */

  const visibleProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    const list = products.filter((product) => {
      if (filters.brand !== "all" && product.productBrand !== filters.brand) return false;
      if (filters.formFactor !== "all" && product.productFormFactor !== filters.formFactor)
        return false;
      if (filters.cpu !== "all" && product.productCpuFamily !== filters.cpu) return false;
      if (filters.gpu !== "all" && product.productGpuProfile !== filters.gpu) return false;
      if (filters.ram !== "all" && product.productRamKey !== filters.ram) return false;
      if (!matchesPriceRange(product.productPrice, filters.price)) return false;
      if (condition !== "all" && product.productCondition !== condition) return false;
      if (term && !matchesSearch(product, term)) return false;
      return true;
    });

    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.productPrice - b.productPrice);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.productPrice - a.productPrice);
        break;
      case "lead-time":
        sorted.sort((a, b) => a.productLeadTimeDays - b.productLeadTimeDays);
        break;
      default:
        sorted.sort((a, b) => b.productBenchmark - a.productBenchmark);
        break;
    }
    return sorted;
  }, [filters, condition, sort, searchTerm, products]);

  const handleFilterChange = useCallback((groupId: string, value: string) => {
    setFilters((prev) => ({ ...prev, [groupId]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
    setCondition("all");
    setSearchTerm("");
  }, [defaultFilters, toastResetMessage, toastResetDetail]);

  /* -------------------------------- Cart -------------------------------- */

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.product.productPrice * item.qty, 0),
    [cartItems],
  );

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.qty, 0),
    [cartItems],
  );

  const addToCart = useCallback(
    (product: LaptopShops01Product) => {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.product.productId === product.productId);
        if (existing) {
          return prev.map((item) =>
            item.product.productId === product.productId ? { ...item, qty: item.qty + 1 } : item,
          );
        }
        return [...prev, { product, qty: 1 }];
      });

    },
    [toastAddMessage],
  );

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.productId !== productId));
  }, []);

  const incrementCartItem = useCallback((productId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.productId === productId ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }, []);

  const decrementCartItem = useCallback((productId: string) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.product.productId !== productId) return [item];
        if (item.qty <= 1) return [];
        return [{ ...item, qty: item.qty - 1 }];
      }),
    );
  }, []);

  const handleCheckout = useCallback(() => {
    if (cartItems.length === 0) return;
    setIsCartOpen(false);

  }, [cartItems.length, cartCount]);

  /* ------------------------------ Compare ------------------------------- */

  const compareProducts = useMemo(
    () =>
      compareIds
        .map((id) => products.find((product) => product.productId === id))
        .filter((product): product is LaptopShops01Product => Boolean(product)),
    [compareIds, products],
  );

  const toggleCompare = useCallback(
    (product: LaptopShops01Product) => {
      setCompareIds((prev) => {
        if (prev.includes(product.productId)) {

          return prev.filter((id) => id !== product.productId);
        }
        if (prev.length >= maxCompareItems) {

          return prev;
        }

        return [...prev, product.productId];
      });
    },
    [maxCompareItems, toastCompareRemoveMessage, toastCompareFullMessage, toastCompareFullDetail, toastCompareAddMessage],
  );

  const removeCompare = useCallback((productId: string) => {
    setCompareIds((prev) => prev.filter((id) => id !== productId));
  }, []);

  /* ------------------------------- Render ------------------------------- */

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
      />
      <div className="min-h-screen w-full bg-[#051424] font-['Inter'] text-[15px] leading-[24px] tracking-[-0.005em] text-[#d4e4fa] antialiased">
        <Navbar
          compareCount={compareIds.length}
          cartCount={cartCount}
          cartTotal={subtotal}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onCompareClick={() => {
            setIsCartOpen(false);
            setIsCompareOpen(true);
          }}
          onOpenCart={() => {
            setIsCompareOpen(false);
            setIsCartOpen(true);
          }}
        />

        <main className="min-h-screen w-full bg-[#051424] pt-20">
          <div className="flex w-full flex-col">
            <FilterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              sort={sort}
              onSortChange={setSort}
              condition={condition}
              onConditionChange={setCondition}
              matchCount={visibleProducts.length}
              topFilterGroups={topFilterGroups}
              gpuFilterGroup={gpuFilterGroup}
              conditionLabel={conditionLabel}
              conditionOptions={conditionOptions}
              sortLabel={sortLabel}
              sortOptions={sortOptions}
              matchLabel={matchLabel}
            />

            {/* Catalog grid */}
            <section className="w-full px-[1rem] py-[1.5rem] md:px-[1.5rem]">
              <div className="flex flex-col gap-[1.5rem]">
                {visibleProducts.length > 0 ? (
                  <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 xl:grid-cols-3">
                    {visibleProducts.map((product, index) => (
                      <Reveal key={product.productId} delay={Math.min(index, 5) * 80} className="h-full">
                        <ProductCard
                          product={product}
                          isCompared={compareIds.includes(product.productId)}
                          inCartQty={
                            cartItems.find((item) => item.product.productId === product.productId)?.qty ?? 0
                          }
                          compareLabel={productCardCompareLabel}
                          configureLabel={productCardConfigureLabel}
                          onToggleCompare={toggleCompare}
                          onAddToCart={addToCart}
                          onOpenDetails={setSelectedProduct}
                        />
                      </Reveal>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 rounded-[0.75rem] border border-[#3f4850]/50 bg-[#122131] px-[1rem] py-[3rem] text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0d1c2d]">
                      <Gauge className="h-6 w-6 text-[#93ccff]" />
                    </span>
                    <h2 className="font-['Inter'] text-[20px] font-semibold leading-[28px] tracking-[-0.015em] text-[#d4e4fa]">
                      {emptyTitle}
                    </h2>
                    <p className="max-w-[460px] font-['Inter'] text-[13px] leading-[20px] text-[#bfc7d2]">
                      {emptyBody}
                    </p>
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="mt-1 cursor-pointer rounded-[0.5rem] bg-[#93ccff] px-[1rem] py-2.5 font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-semibold text-[#003351] transition-all hover:bg-[#3198dc] hover:text-[#002c47] active:scale-95"
                    >
                      {resetLabel}
                    </button>
                  </div>
                )}

                {/* Footnote strip */}
                <div className="flex flex-col items-center justify-between gap-[0.75rem] pt-[0.5rem] font-['JetBrains_Mono'] text-[12px] leading-[16px] font-semibold text-[#bfc7d2] sm:flex-row">
                  <span>{gridFootnote}</span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00daf3]" />
                    {visibleProducts.length} {matchLabel}
                  </span>
                </div>
              </div>
            </section>

            <EnterpriseBanner
              overline={enterpriseOverline}
              title={enterpriseTitle}
              body={enterpriseBody}
              checklist={enterpriseChecklist}
              primaryCtaLabel={enterprisePrimaryCtaLabel}
              secondaryCtaLabel={enterpriseSecondaryCtaLabel}
              note={enterpriseNote}

            />
          </div>
        </main>

        <Footer />

        <CartFlyout
          open={isCartOpen}
          items={cartItems}
          subtotal={subtotal}
          title={cartTitle}
          stagedLabel={cartStagedLabel}
          emptyTitle={cartEmptyTitle}
          emptyBody={cartEmptyBody}
          subtotalLabel={cartSubtotalLabel}
          note={cartNote}
          checkoutLabel={cartCheckoutLabel}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onIncrement={incrementCartItem}
          onDecrement={decrementCartItem}
          onCheckout={handleCheckout}
        />

        <CompareFlyout
          open={isCompareOpen}
          products={compareProducts}
          title={compareTitle}
          selectedLabel={compareSelectedLabel}
          emptyLabel={compareEmptyLabel}
          benchmarkLabel={compareBenchmarkLabel}
          clearLabel={compareClearLabel}
          note={compareNote}
          onClose={() => setIsCompareOpen(false)}
          onRemove={removeCompare}

        />

        <ProductDetailsModal
          product={selectedProduct}
          isCompared={selectedProduct ? compareIds.includes(selectedProduct.productId) : false}
          highlightsHeading={detailsHighlightsHeading}
          techSheetLabels={detailsTechSheet.map((row) => row.detailsTechSheetLabel)}
          addToCartLabel={detailsAddToCartLabel}
          addToCompareLabel={detailsAddToCompareLabel}
          inCompareLabel={detailsInCompareLabel}
          leadTimeLabel={detailsLeadTimeLabel}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          onToggleCompare={toggleCompare}
        />

        <ToastNotification toast={toast} onDismiss={() => setToast(null)} />
      </div>
    </>

  );
}
