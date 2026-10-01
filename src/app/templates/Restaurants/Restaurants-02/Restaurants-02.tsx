import PosWorkspace from "./components/PosWorkspace";
import type { Restaurants02Category, Restaurants02Product, Restaurants02TagFilter } from "./types";
import { Restaurants02placeHolder } from "./data";

const categoryLabels: Record<string, string> = {
  combos: "🔥 COMBOS",
  ramen: "🍜 RAMEN",
  sides: "🍗 SIDES",
  rice: "🍚 RICE BOWLS",
  dessert: "🍦 DESSERTS",
};

const tagLabels: Record<string, string> = {
  spicy: "🌶️ Spicy",
  chef: "⭐ Chef Pick",
  classic: "🎌 Classic",
};

function countValues<K extends string>(values: K[]): Map<K, number> {
  const counts = new Map<K, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}

/** Categories present in the catalog, plus the synthetic "all" and combo chips. */
function getCategories(items: Restaurants02Product[], allId: string, comboId: string): Restaurants02Category[] {
  const counts = countValues(items.map((item) => item.productCategory));
  const known = Object.keys(categoryLabels);
  return [
    { categoryId: allId, categoryLabel: `ALL (${items.length})` },
    ...[
      ...known.filter((id) => id === comboId || counts.has(id)),
      ...Array.from(counts.keys()).filter((id) => !known.includes(id)),
    ].map((id) => ({ categoryId: id, categoryLabel: categoryLabels[id] ?? id.toUpperCase() })),
  ];
}

/** Tag filters derived from the union of every product's tags. */
function getTagFilters(items: Restaurants02Product[]): Restaurants02TagFilter[] {
  const tags = Array.from(new Set(items.flatMap((item) => item.productTags)));
  return tags.map((tag) => ({
    tagFilterId: tag,
    tagFilterLabel: tagLabels[tag] ?? tag.toUpperCase(),
  }));
}

export default function Restaurants02({
  resolvedData = {},
}: {
  resolvedData?: Record<string, unknown>;
}) {
  // Static template copy (not resolved from the caller).
  const comboBatchId = "BATCH ID: #TK-COMBO-99";
  const comboCaptionLeft = "■ Shredded nori // wavy noodle #18";
  const comboCaptionRight = "Tokyo special";
  const comboSyncedBadge = "POS Synced";
  const comboCtaLabel = "Grab Combo";
  const allCategoryId = "all";
  const comboCategoryId = "combos";
  const inStockOnlyLabel = "In-stock only";
  const productCardPriceLabel = "Price / 税込";
  const productCardSoldOutOverlay = "Sold out at 18:42";
  const productCardAddLabel = "+";
  const cartTicketLabel = "Order Ticket #882";
  const cartTitle = "Cart Dock";
  const cartSummaryLabel = "items";
  const cartAutoConfirmLabel = "✓ Auto-confirm kitchen direct";
  const cartCheckoutLabel = "Proceed to Checkout →";
  const emptyLabel = "No items match the current POS filters.";
  const toastAddMessage = "{name} (+${price}) added to kitchen ticket";
  const toastComboMessage = "Shinjuku Midnight Combo (+$12.99) added to kitchen ticket";
  const toastCheckoutMessage = "Checkout opened for {count} item(s)";
  const toastCheckoutEmptyMessage = "Cart dock is empty — add a menu item first";
  const toastDurationMs = 2500;

  // Fill anything the caller omitted from the placeholder, then derive dynamic lists.
  const merged = { ...Restaurants02placeHolder, ...resolvedData } as typeof Restaurants02placeHolder;
  const data = {
    ...merged,
    comboBatchId,
    comboCaptionLeft,
    comboCaptionRight,
    comboSyncedBadge,
    comboCtaLabel,
    allCategoryId,
    comboCategoryId,
    inStockOnlyLabel,
    productCardPriceLabel,
    productCardSoldOutOverlay,
    productCardAddLabel,
    cartTicketLabel,
    cartTitle,
    cartSummaryLabel,
    cartAutoConfirmLabel,
    cartCheckoutLabel,
    emptyLabel,
    toastAddMessage,
    toastComboMessage,
    toastCheckoutMessage,
    toastCheckoutEmptyMessage,
    toastDurationMs,
    categories: getCategories(merged.products, allCategoryId, comboCategoryId),
    tagFilters: getTagFilters(merged.products),
  };

  return <PosWorkspace resolvedObject={data} />;
}
