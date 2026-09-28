"use client";

import { useCallback, useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import type {
  ApexMotorsInventoryTemplateData,
  apexBodyStyle,
  apexBodyStyleOption,
  apexMileageRange,
  apexOption,
  apexSortOption,
  apexTrustPillar,
  apexVehicle,
} from "@/types/index";
import { placeholder } from "./data";
import CartFlyout, { type CartItem } from "./components/CartFlyout";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductDetailsModal from "./components/ProductDetailsModal";
import Reveal from "./components/Reveal";
import ToastNotification, { type ToastState } from "./components/ToastNotification";
import TrustSection from "./components/TrustSection";
import VehicleCard from "./components/VehicleCard";

interface Filters {
  make: string;
  model: string;
  budget: string;
  mileage: number;
}

function matchesFilters(vehicle: apexVehicle, filters: Filters): boolean {
  if (filters.make !== "all" && vehicle.vehicleMake !== filters.make) return false;
  if (filters.model !== "all" && vehicle.vehicleModelKey !== filters.model) return false;
  if (filters.budget !== "all" && vehicle.vehiclePrice > Number(filters.budget)) return false;
  if (vehicle.vehicleMileage > filters.mileage) return false;
  return true;
}

function matchesSearch(vehicle: apexVehicle, term: string): boolean {
  if (!term) return true;
  const haystack =
    `${vehicle.vehicleName} ${vehicle.vehicleMake} ${vehicle.vehicleModelKey} ${vehicle.vehicleVin} ${vehicle.vehicleStock} ${vehicle.vehicleExterior}`.toLowerCase();
  return haystack.includes(term);
}

/* -------------------------------------------------------------------------- */
/*  Derived inventory data                                                     */
/*                                                                             */
/*  Display-label lookups supply human-readable text only; option VALUES,       */
/*  membership and counts are all derived from the merged `vehicles` list.      */
/* -------------------------------------------------------------------------- */

const makeLabels: Record<string, string> = {
  bmw: "BMW",
  porsche: "Porsche",
  audi: "Audi",
  mercedes: "Mercedes-Benz",
  tesla: "Tesla",
  lexus: "Lexus",
};

const modelLabels: Record<string, string> = {
  m340i: "M340i / M3",
  macan: "Macan / Cayman",
  rs5: "RS5 / S4",
  c43: "AMG C43 / E53",
  models: "Model S / Model 3",
  lc500: "LC 500 / IS 500",
};

const bodyStyleLabels: Record<apexBodyStyle, string> = {
  sedan: "Sedans",
  coupe: "Coupes",
  suv: "Performance SUVs",
  electric: "EV & Hybrid",
};

const MILEAGE_STEP = 2500;

function countValues<K extends string>(values: K[]): Map<K, number> {
  const counts = new Map<K, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}

/** Unique makes present in the inventory, each labelled with its vehicle count. */
function getMakeOptions(items: apexVehicle[]): apexOption[] {
  const counts = countValues(items.map((item) => item.vehicleMake));
  return [
    { optionValue: "all", optionLabel: `All Makes (${counts.size})` },
    ...Array.from(counts, ([make, count]) => ({
      optionValue: make,
      optionLabel: `${makeLabels[make] ?? make} (${count})`,
    })),
  ];
}

/** Unique model keys present in the inventory. */
function getModelOptions(items: apexVehicle[]): apexOption[] {
  const modelKeys = Array.from(new Set(items.map((item) => item.vehicleModelKey)));
  return [
    { optionValue: "all", optionLabel: "All Models" },
    ...modelKeys.map((modelKey) => ({
      optionValue: modelKey,
      optionLabel: modelLabels[modelKey] ?? modelKey.toUpperCase(),
    })),
  ];
}

/** Body styles present in the inventory, ordered by `bodyStyleLabels`. */
function getBodyStyleOptions(items: apexVehicle[]): apexBodyStyleOption[] {
  const counts = countValues(items.map((item) => item.vehicleBodyStyle));
  const knownStyles = Object.keys(bodyStyleLabels) as apexBodyStyle[];
  const orderedStyles = [
    ...knownStyles.filter((style) => counts.has(style)),
    ...Array.from(counts.keys()).filter((style) => !knownStyles.includes(style)),
  ];
  return [
    { bodyStyleOptionId: "all", bodyStyleOptionLabel: `All Body Styles (${items.length})` },
    ...orderedStyles.map((style) => ({
      bodyStyleOptionId: style,
      bodyStyleOptionLabel: `${bodyStyleLabels[style] ?? style} (${counts.get(style) ?? 0})`,
    })),
  ];
}

/** Mileage slider bounds derived from the highest/lowest mileage in the inventory. */
function getMileageRange(items: apexVehicle[]): apexMileageRange {
  const defaultMax = MILEAGE_STEP * 10;
  if (items.length === 0) {
    return { min: 0, max: defaultMax, step: MILEAGE_STEP, defaultValue: defaultMax };
  }
  const mileages = items.map((item) => item.vehicleMileage);
  const min = Math.floor(Math.min(...mileages) / MILEAGE_STEP) * MILEAGE_STEP;
  const max = Math.ceil(Math.max(...mileages) / MILEAGE_STEP) * MILEAGE_STEP;
  return { min, max, step: MILEAGE_STEP, defaultValue: max };
}

/** Average mileage across the inventory, rounded to whole miles. */
function getAverageMileage(items: apexVehicle[]): number {
  if (items.length === 0) return 0;
  return Math.round(items.reduce((sum, item) => sum + item.vehicleMileage, 0) / items.length);
}

/* -------------------------------------------------------------------------- */
/*  Static template copy (not resolved from the caller)                       */
/* -------------------------------------------------------------------------- */

const heroSearchPlaceholder = "Search make, model, trim, or VIN...";
const heroFindLabel = "Find";
const sortOptions: apexSortOption[] = [
  { sortOptionValue: "featured", sortOptionLabel: "Featured Inventory" },
  { sortOptionValue: "price-asc", sortOptionLabel: "Price: Low to High" },
  { sortOptionValue: "price-desc", sortOptionLabel: "Price: High to Low" },
  { sortOptionValue: "mileage", sortOptionLabel: "Mileage: Lowest First" },
  { sortOptionValue: "newest", sortOptionLabel: "Newest Model Year" },
];
const defaultSort = "featured";
const defaultBodyStyle = "all";
const filterLabelMake = "Make";
const filterLabelModel = "Model";
const filterLabelBudget = "Max Budget";
const filterLabelMileage = "Mileage Cap";
const filterLabelClear = "Clear";
const filterLabelApply = "Apply";
const filterLabelSort = "Sort:";
const applyCountSuffix = "Vehicles";
const inventoryShowingPrefix = "Showing";
const inventorySeparator = "Zero processing markups";
const inventoryEmptyTitle = "No vehicles match your filters";
const inventoryEmptyBody = "Try widening your budget, mileage cap, or body style selection.";
const resetFiltersLabel = "Reset filters";
const cardStockPrefix = "Stock #";
const cardVinPrefix = "VIN:";
const cardDetailsLabel = "Details";
const cardSaveLabel = "Save vehicle";
const cardUnsaveLabel = "Remove from saved";
const cardAddToCartLabel = "Add {name} to cart";
const detailsFeaturesHeading = "Equipment Highlights";
const detailsSaveLabel = "Save";
const detailsSavedLabel = "Saved";
const detailsAddToCartLabel = "Add to Cart";
const cartTitle = "Your Cart";
const cartReservedLabel = "{count} vehicles reserved";
const cartEmptyTitle = "Your cart is empty";
const cartEmptyBody =
  "Add a certified vehicle to begin your reservation and lock in upfront pricing.";
const cartSubtotalLabel = "Subtotal";
const cartNote =
  "Excludes state registration, taxes, title and $150 documentation fee. Subject to prior sale and credit approval.";
const cartCheckoutLabel = "Proceed to Reservation";
const toastAddMessage = "Added to cart";
const toastSaveMessage = "Saved vehicle";
const toastUnsaveMessage = "Removed from saved";
const toastSaveDetail = "{name} added to your watchlist";
const toastFiltersAppliedMessage = "Filters applied";
const toastFiltersAppliedDetail = "{count} vehicles match your criteria";
const toastFiltersClearedMessage = "Filters cleared";
const toastFiltersClearedDetail = "Showing the full curated inventory";
const toastKeywordRequiredMessage = "Enter a keyword";
const toastKeywordRequiredDetail = "Search by make, model, trim or VIN";
const toastSearchAppliedMessage = "Search applied";
const toastSearchAppliedDetail = 'Filtering inventory for "{term}"';
const toastReservationMessage = "Reservation started";
const toastReservationDetail = "{count} vehicles held for 30 minutes";
const toastTestDriveMessage = "Test drive request";
const toastTestDriveDetail = "A client advisor will call you shortly";
const toastLoadMoreMessage = "Loading inventory";
const toastDurationMs = 2600;

export default function Template15Page({
  resolvedObject = {},
}: {
  resolvedObject?: Partial<ApexMotorsInventoryTemplateData>;
}) {
  // Fill anything the caller omitted from the placeholder, then derive inventory data.
  const merged = { ...placeholder, ...resolvedObject } as typeof placeholder;
  const inventoryTotal = merged.vehicles.length;
  const remainingVehicles = Math.max(inventoryTotal - merged.vehicles.length, 0);
  const data: ApexMotorsInventoryTemplateData = {
    ...merged,
    heroLiveFeed: `Live Inventory Feed • ${inventoryTotal} Vehicles Available Today`,
    quickStats: [
      {
        quickStatLabel: "Average Mileage",
        quickStatValue: `${getAverageMileage(merged.vehicles).toLocaleString("en-US")} mi`,
      },
      { quickStatLabel: "CPO Certification Rate", quickStatValue: "94.6%", quickStatHighlight: true },
      { quickStatLabel: "Starting APR from", quickStatValue: "4.89% Fixed" },
      { quickStatLabel: "Monroney Price Guarantee", quickStatValue: "$0 Add-ons" },
    ],
    makeOptions: getMakeOptions(merged.vehicles),
    modelOptions: getModelOptions(merged.vehicles),
    bodyStyleOptions: getBodyStyleOptions(merged.vehicles),
    mileageRange: getMileageRange(merged.vehicles),
    inventoryTotal,
    inventoryLoadMoreLabel: `Load More Vehicles (${remainingVehicles} Remaining)`,
    toastLoadMoreDetail: `Fetching the next ${remainingVehicles} vehicles…`,
  };
  const {
    heroLiveFeed,
    heroHeadline,
    heroSubheadline,
    quickStats,
    makeOptions,
    modelOptions,
    priceOptions,
    bodyStyleOptions,
    mileageRange,
    inventoryTotal: inventoryCount,
    inventoryLoadMoreLabel,
    toastLoadMoreDetail,
    vehicles,
    defaultSavedVehicleIds,
    trustOverline,
    trustTitle,
    trustBody,
    trustPillars,
  } = data;

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Draft filters (edited in the bar) vs. applied filters (drive the grid)
  const defaultFilters = useMemo<Filters>(
    () => ({
      make: "all",
      model: "all",
      budget: "all",
      mileage: mileageRange.defaultValue,
    }),
    [mileageRange.defaultValue],
  );

  const [draftFilters, setDraftFilters] = useState<Filters>(defaultFilters);
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [bodyStyle, setBodyStyle] = useState(defaultBodyStyle);
  const [sort, setSort] = useState(defaultSort);

  // Cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Details modal
  const [selectedVehicle, setSelectedVehicle] = useState<apexVehicle | null>(null);

  // Saved watchlist
  const [savedIds, setSavedIds] = useState<string[]>(defaultSavedVehicleIds);

  // Toasts
  const [toast, setToast] = useState<ToastState | null>(null);

  const showToast = useCallback((message: string, detail?: string) => {
    setToast({ id: Date.now(), message, detail });
  }, []);

  /* ----------------------------- Filtering ----------------------------- */

  const filteredVehicles = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    const list = vehicles.filter(
      (vehicle) =>
        matchesFilters(vehicle, filters) &&
        matchesSearch(vehicle, term) &&
        (bodyStyle === "all" || vehicle.vehicleBodyStyle === bodyStyle),
    );

    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.vehiclePrice - b.vehiclePrice);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.vehiclePrice - a.vehiclePrice);
        break;
      case "mileage":
        sorted.sort((a, b) => a.vehicleMileage - b.vehicleMileage);
        break;
      case "newest":
        sorted.sort((a, b) => b.vehicleYear - a.vehicleYear);
        break;
      default:
        break;
    }
    return sorted;
  }, [vehicles, filters, bodyStyle, sort, searchTerm]);

  const applyCount = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return vehicles.filter(
      (vehicle) =>
        matchesFilters(vehicle, draftFilters) &&
        matchesSearch(vehicle, term) &&
        (bodyStyle === "all" || vehicle.vehicleBodyStyle === bodyStyle),
    ).length;
  }, [vehicles, draftFilters, bodyStyle, searchTerm]);

  const hasPendingChanges =
    draftFilters.make !== filters.make ||
    draftFilters.model !== filters.model ||
    draftFilters.budget !== filters.budget ||
    draftFilters.mileage !== filters.mileage;

  /* ------------------------------- Cart -------------------------------- */

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.vehicle.vehiclePrice * item.qty, 0),
    [cartItems],
  );

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.qty, 0),
    [cartItems],
  );

  const addToCart = useCallback(
    (vehicle: apexVehicle) => {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.vehicle.vehicleId === vehicle.vehicleId);
        if (existing) {
          return prev.map((item) =>
            item.vehicle.vehicleId === vehicle.vehicleId ? { ...item, qty: item.qty + 1 } : item,
          );
        }
        return [...prev, { vehicle, qty: 1 }];
      });
      showToast(toastAddMessage, vehicle.vehicleName);
    },
    [showToast, toastAddMessage],
  );

  const removeFromCart = useCallback((vehicleId: string) => {
    setCartItems((prev) => prev.filter((item) => item.vehicle.vehicleId !== vehicleId));
  }, []);

  const incrementCartItem = useCallback((vehicleId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.vehicle.vehicleId === vehicleId ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }, []);

  const decrementCartItem = useCallback((vehicleId: string) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.vehicle.vehicleId !== vehicleId) return [item];
        if (item.qty <= 1) return [];
        return [{ ...item, qty: item.qty - 1 }];
      }),
    );
  }, []);

  /* ------------------------------ Saved -------------------------------- */

  const toggleSave = useCallback(
    (vehicle: apexVehicle) => {
      setSavedIds((prev) => {
        const isSaved = prev.includes(vehicle.vehicleId);
        showToast(
          isSaved ? toastUnsaveMessage : toastSaveMessage,
          isSaved
            ? vehicle.vehicleName
            : toastSaveDetail.replace("{name}", vehicle.vehicleName),
        );
        return isSaved
          ? prev.filter((id) => id !== vehicle.vehicleId)
          : [...prev, vehicle.vehicleId];
      });
    },
    [showToast, toastSaveMessage, toastUnsaveMessage, toastSaveDetail],
  );

  /* ---------------------------- Filter actions -------------------------- */

  const applyFilters = useCallback(() => {
    setFilters(draftFilters);
    showToast(
      toastFiltersAppliedMessage,
      toastFiltersAppliedDetail.replace("{count}", String(applyCount)),
    );
  }, [
    draftFilters,
    applyCount,
    showToast,
    toastFiltersAppliedMessage,
    toastFiltersAppliedDetail,
  ]);

  const clearFilters = useCallback(() => {
    setDraftFilters(defaultFilters);
    setFilters(defaultFilters);
    setBodyStyle(defaultBodyStyle);
    setSearchTerm("");
    showToast(toastFiltersClearedMessage, toastFiltersClearedDetail);
  }, [
    defaultFilters,
    defaultBodyStyle,
    showToast,
    toastFiltersClearedMessage,
    toastFiltersClearedDetail,
  ]);

  const handleFind = useCallback(() => {
    const term = searchTerm.trim();
    if (!term) {
      showToast(toastKeywordRequiredMessage, toastKeywordRequiredDetail);
      return;
    }
    showToast(toastSearchAppliedMessage, toastSearchAppliedDetail.replace("{term}", term));
  }, [
    searchTerm,
    showToast,
    toastKeywordRequiredMessage,
    toastKeywordRequiredDetail,
    toastSearchAppliedMessage,
    toastSearchAppliedDetail,
  ]);

  const handlePillarSelect = useCallback(
    (pillar: apexTrustPillar) => {
      showToast(pillar.trustPillarTitle, pillar.trustPillarCta);
    },
    [showToast],
  );

  const handleCheckout = useCallback(() => {
    if (cartItems.length === 0) return;
    setIsCartOpen(false);
    showToast(
      toastReservationMessage,
      toastReservationDetail.replace("{count}", String(cartCount)),
    );
  }, [cartItems.length, cartCount, showToast, toastReservationMessage, toastReservationDetail]);

  /* ------------------------------- Render ------------------------------- */

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
    />

    <div className="min-h-screen w-full bg-[#f8f9ff] font-['Manrope'] text-[15px] leading-[24px] tracking-[-0.005em] text-[#0b1c30] antialiased">
      <Navbar
        savedCount={savedIds.length}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onScheduleTestDrive={() => showToast(toastTestDriveMessage, toastTestDriveDetail)}
      />

      <main className="w-full bg-[#f8f9ff] pt-20 lg:pt-[120px]">
        <div className="flex w-full flex-col">
          <HeroSection
            liveFeed={heroLiveFeed}
            headline={heroHeadline}
            subheadline={heroSubheadline}
            searchPlaceholder={heroSearchPlaceholder}
            findLabel={heroFindLabel}
            quickStats={quickStats}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onFind={handleFind}
          />

          <FilterBar
            make={draftFilters.make}
            onMakeChange={(value) => setDraftFilters((prev) => ({ ...prev, make: value }))}
            model={draftFilters.model}
            onModelChange={(value) => setDraftFilters((prev) => ({ ...prev, model: value }))}
            budget={draftFilters.budget}
            onBudgetChange={(value) => setDraftFilters((prev) => ({ ...prev, budget: value }))}
            mileage={draftFilters.mileage}
            onMileageChange={(value) =>
              setDraftFilters((prev) => ({ ...prev, mileage: value }))
            }
            bodyStyle={bodyStyle}
            onBodyStyleChange={setBodyStyle}
            sort={sort}
            onSortChange={setSort}
            onApply={applyFilters}
            onClear={clearFilters}
            applyCount={applyCount}
            hasPendingChanges={hasPendingChanges}
            makeOptions={makeOptions}
            modelOptions={modelOptions}
            priceOptions={priceOptions}
            bodyStyleOptions={bodyStyleOptions}
            sortOptions={sortOptions}
            mileageRange={mileageRange}
            labelMake={filterLabelMake}
            labelModel={filterLabelModel}
            labelBudget={filterLabelBudget}
            labelMileage={filterLabelMileage}
            labelClear={filterLabelClear}
            labelApply={filterLabelApply}
            labelSort={filterLabelSort}
            applyCountSuffix={applyCountSuffix}
          />

          {/* Inventory grid */}
          <section className="w-full bg-[#f8f9ff] px-[1rem] py-[2rem] md:px-[2rem] md:py-[2.5rem]">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-[2.5rem]">
              {filteredVehicles.length > 0 ? (
                <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 xl:grid-cols-3">
                  {filteredVehicles.map((vehicle, index) => (
                    <Reveal
                      key={vehicle.vehicleId}
                      delay={Math.min(index, 5) * 80}
                      className="h-full"
                    >
                      <VehicleCard
                        vehicle={vehicle}
                        isSaved={savedIds.includes(vehicle.vehicleId)}
                        inCartQty={
                          cartItems.find((item) => item.vehicle.vehicleId === vehicle.vehicleId)
                            ?.qty ?? 0
                        }
                        stockPrefix={cardStockPrefix}
                        vinPrefix={cardVinPrefix}
                        detailsLabel={cardDetailsLabel}
                        saveLabel={cardSaveLabel}
                        unsaveLabel={cardUnsaveLabel}
                        addToCartLabel={cardAddToCartLabel}
                        onOpenDetails={setSelectedVehicle}
                        onAddToCart={addToCart}
                        onToggleSave={toggleSave}
                      />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 rounded-[0.5rem] border border-[#bfc7d2]/30 bg-[#ffffff] px-[1rem] py-[3rem] text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eff4ff] text-[#006194]">
                    <Search className="h-6 w-6" />
                  </span>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-[20px] leading-[26px] font-semibold text-[#0b1c30]">
                    {inventoryEmptyTitle}
                  </h2>
                  <p className="max-w-[420px] font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
                    {inventoryEmptyBody}
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-1 cursor-pointer rounded-[0.5rem] bg-[#006194] px-[1rem] py-2.5 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-white transition-all duration-200 hover:bg-[#007bb9] active:scale-95"
                  >
                    {resetFiltersLabel}
                  </button>
                </div>
              )}

              {/* Footnote + load more */}
              <Reveal delay={300} className="w-full">
                <div className="flex flex-col items-center justify-between gap-[1rem] pt-[1rem] sm:flex-row">
                  <div className="flex flex-wrap items-center justify-center gap-2 font-['Manrope'] text-[14px] leading-[20px] text-[#3f4850]">
                    <span>
                      {inventoryShowingPrefix}{" "}
                      <strong className="text-[#0b1c30]">{filteredVehicles.length}</strong>{" "}
                      of <strong className="text-[#0b1c30]">{inventoryCount}</strong>{" "}
                      curated vehicles
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#bfc7d2]" />
                    <span>{inventorySeparator}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => showToast(toastLoadMoreMessage, toastLoadMoreDetail)}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[0.5rem] bg-[#dce9ff] px-[2.5rem] py-3 font-['Plus_Jakarta_Sans'] text-[14px] leading-[18px] font-bold text-[#0b1c30] shadow-sm transition-all duration-200 hover:bg-[#d3e4fe] hover:shadow-md active:scale-95 sm:w-auto"
                  >
                    <span>{inventoryLoadMoreLabel}</span>
                    <ChevronDown className="h-[18px] w-[18px]" />
                  </button>
                </div>
              </Reveal>
            </div>
          </section>

          <TrustSection
            overline={trustOverline}
            title={trustTitle}
            body={trustBody}
            pillars={trustPillars}
            onPillarSelect={handlePillarSelect}
          />
        </div>
      </main>

      <Footer />

      <CartFlyout
        open={isCartOpen}
        items={cartItems}
        subtotal={subtotal}
        stockPrefix={cardStockPrefix}
        title={cartTitle}
        reservedLabel={cartReservedLabel}
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

      <ProductDetailsModal
        vehicle={selectedVehicle}
        isSaved={selectedVehicle ? savedIds.includes(selectedVehicle.vehicleId) : false}
        stockPrefix={cardStockPrefix}
        vinPrefix={cardVinPrefix}
        featuresHeading={detailsFeaturesHeading}
        saveLabel={detailsSaveLabel}
        savedLabel={detailsSavedLabel}
        addToCartLabel={detailsAddToCartLabel}
        onClose={() => setSelectedVehicle(null)}
        onAddToCart={addToCart}
        onToggleSave={toggleSave}
      />

      <ToastNotification
        toast={toast}
        onDismiss={() => setToast(null)}
        duration={toastDurationMs}
      />
      </div>
    </>
  );
}
// THE END : AHMAD MAZEN JOHA :)
