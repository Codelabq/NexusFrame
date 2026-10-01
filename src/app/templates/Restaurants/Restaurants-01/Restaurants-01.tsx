import MenuWorkspace from "./components/MenuWorkspace";
import type { Restaurants01Category, Restaurants01CellarPour, Restaurants01DietaryFilter, Restaurants01Dish } from "./types";
import { Restaurants01placeHolder } from "./data";

const categoryLabels: Record<string, string> = {
  starters: "Starters & Small Plates",
  mains: "Mains & Hearth",
  woodfired: "Wood-Fired Sourdough",
  cellar: "Natural Wine & Cider",
};

const dietaryLabels: Record<string, string> = {
  v: "Vegetarian",
  gf: "Gluten-Free",
  df: "Dairy-Free",
};

function countValues<K extends string>(values: K[]): Map<K, number> {
  const counts = new Map<K, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}

/** Categories present across the dish + cellar collections, plus "all". */
function getCategories(
  dishes: Restaurants01Dish[],
  pours: Restaurants01CellarPour[],
  allId: string,
  cellarId: string,
): Restaurants01Category[] {
  const counts = countValues(dishes.map((dish) => dish.dishCategory));
  const known = Object.keys(categoryLabels);
  const ordered = [
    ...known.filter((id) => counts.has(id) || (id === cellarId && pours.length > 0)),
    ...Array.from(counts.keys()).filter((id) => !known.includes(id)),
  ];
  const labelFor = (id: string) => {
    const count = id === cellarId ? pours.length : counts.get(id) ?? 0;
    return `${categoryLabels[id] ?? id} (${count})`;
  };
  return [
    { categoryId: allId, categoryLabel: `All Plates (${dishes.length + pours.length})` },
    ...ordered.map((id) => ({ categoryId: id, categoryLabel: labelFor(id) })),
  ];
}

/** Dietary filters derived from the union of every dish's dietary flags. */
function getDietaryFilters(dishes: Restaurants01Dish[]): Restaurants01DietaryFilter[] {
  const diets = Array.from(new Set(dishes.flatMap((dish) => dish.dishDietary)));
  return diets.map((diet) => ({
    dietaryFilterId: diet,
    dietaryFilterLabel: dietaryLabels[diet] ?? diet.toUpperCase(),
  }));
}

export default function Restaurants01({
  resolvedData = {},
}: {
  resolvedData?: Record<string, unknown>;
}) {
  // Static template copy (not resolved from the caller).
  const posStatusLabel = "POS Live: Toast / Square Sync";
  const serviceHoursLabel = "Service: 5:00 PM – 10:30 PM";
  const allCategoryId = "all";
  const cellarCategoryId = "cellar";
  const dietaryLabel = "Dietary:";
  const featuredImageAlt = "Handmade Pugliese Burrata with Charred Heirloom Tomatoes";
  const courseIndexLabel = "Course Index";
  const cellarEyebrow = "Vin Naturel & Terroir";
  const cellarTitle = "Curated Cellar Pours";
  const cellarDescription =
    "Unfined, unfiltered bottles from independent European vignerons practicing biodynamic farming.";
  const cellarAddCtaLabel = "Add Glass to Check";
  const partnersLabel = "Tonight's organic partners:";
  const partnersList =
    "Hudson Valley Organics · Casabianca Dairy · Kinderhook Meats · Farmer Ground Flour";
  const serviceOpenLabel = "Kitchen Open";
  const servicePickupNote = "— Next Available Pickup in 20–25 mins";
  const serviceItemsSelectedSuffix = "selected";
  const serviceReserveLabel = "Reserve a Table";
  const servicePickupCtaLabel = "Order for Pickup";
  const toastAddDishMessage = "{name} added to your tasting order";
  const toastAddPourMessage = "{name} added to tasting check";
  const toastFeaturedAddMessage = "Handmade Burrata added to your tasting order";
  const toastDossierMessage = "Viewing farm dossier: Hudson Valley Organics";
  const toastPickupEmptyMessage = "Order drawer opened: select items from the menu";
  const toastPickupMessage = "Pickup order opened with {count} selected item(s)";
  const toastReserveMessage = "Reservation request opened for Atelier & Hearth";
  const toastDurationMs = 2800;

  // Fill anything the caller omitted from the placeholder, then derive dynamic lists.
  const merged = { ...Restaurants01placeHolder, ...resolvedData } as typeof Restaurants01placeHolder;
  const data = {
    ...merged,
    posStatusLabel,
    serviceHoursLabel,
    allCategoryId,
    cellarCategoryId,
    dietaryLabel,
    featuredImageAlt,
    courseIndexLabel,
    cellarEyebrow,
    cellarTitle,
    cellarDescription,
    cellarAddCtaLabel,
    partnersLabel,
    partnersList,
    serviceOpenLabel,
    servicePickupNote,
    serviceItemsSelectedSuffix,
    serviceReserveLabel,
    servicePickupCtaLabel,
    toastAddDishMessage,
    toastAddPourMessage,
    toastFeaturedAddMessage,
    toastDossierMessage,
    toastPickupEmptyMessage,
    toastPickupMessage,
    toastReserveMessage,
    toastDurationMs,
    categories: getCategories(merged.dishes, merged.cellarPours ?? [], allCategoryId, cellarCategoryId),
    dietaryFilters: getDietaryFilters(merged.dishes),
  };

  return <MenuWorkspace resolvedObject={data} />;
}
