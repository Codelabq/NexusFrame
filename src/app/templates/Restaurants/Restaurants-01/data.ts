import type { Restaurants01CellarPour, Restaurants01Dish } from "./types";

/** Raw template content. Derived fields (categories, dietaryFilters) are computed in `page.tsx`. */

const dishImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuC2uKAiwikleq6Cxsh1T5vhW9Whc4NNUL2mkngmTE4Irkt0KUM-_ltRV9umDXoiODht-iC7BtFhb_zzr69m8dHHjDAW9Z9tK0QmbEli0Xr5xglDZk1gy_DxuY-Am2i7sml_iFsYS_tlm88gkyelCpbx71ZHM2Ey3z9zT1NTc1xBHS0tSRsZC1CNBasOfc2Wdur4RsI4W940J3QhSUdy1j5zFX0LjUvI41MMdDznnDyvSAzA375cq5HY";

const base = {
  brandName: "Atelier & Hearth",

  headerEyebrow: "Daily harvest broadcast · West Village kitchen",
  headerTitle: "Carte du Jour & Specials",
  headerDescription: "Farm-to-table seasonal harvest updated daily at 3:00 PM. Hearth-cooked over white oak and applewood embers.",

  featuredImageUrl: dishImage,
  featuredBadge: "Chef's Choice · Limited 35 Portions Tonight",
  featuredEyebrow: "Harvest Special № 01",
  featuredPrice: "$24.00",
  featuredTitle: "Handmade Pugliese Burrata & Charred Heirloom Tomatoes",
  featuredDescription:
    "Hand-stretched daily by Casabianca Dairy in small batches. Paired with multi-colored heirloom tomatoes harvested this morning from Hudson Valley Organics, gently charred over white embers, toasted Sicilian pine nuts, 25-year aged Modena balsamic reduction, and fresh genovese basil leaf infusion.",
  featuredTags: ["Vegetarian", "Gluten-Free Optional", "Contains: Pine Nuts"],
  sommelierTitle: "Sommelier Pouring Suggestion",
  sommelierNote:
    "2022 Domaine de l'Horizon Blanc, Côtes Catalanes — crisp, saline, white peach notes (+ $16 glass)",
  featuredAddCtaLabel: "+ Add Burrata Special to Order",
  featuredDossierCtaLabel: "Farm Dossier",

  categorySections: [
    { categorySectionId: "starters", categorySectionIndex: "01", categorySectionTitle: "Starters & Small Plates", categorySectionNote: "Hearth-warmed plates to begin the table" },
    { categorySectionId: "mains", categorySectionIndex: "02", categorySectionTitle: "Mains & Hearth", categorySectionNote: "Slow-cooked over white oak and applewood embers" },
    { categorySectionId: "woodfired", categorySectionIndex: "03", categorySectionTitle: "Wood-Fired Sourdough", categorySectionNote: "Pulled from the 850°F brick oven" },
  ],

};

const dishes: Restaurants01Dish[] = [
    { dishId: "maitake", dishCategory: "starters", dishName: "Wood-Fired Wild Maitake", dishDescription: "Whipped black garlic ricotta, crispy shallot threads, Hudson thyme-infused mountain honey.", dishPrice: "$19.00", dishTags: ["V", "GF"], dishDietary: ["v", "gf"], dishProvenance: "Wood Oven No. 2", dishImageUrl: dishImage, dishImageAlt: "Wood-fired wild maitake mushrooms with ricotta" },
    { dishId: "octopus", dishCategory: "starters", dishName: "Hearth-Charred Spanish Octopus", dishDescription: "Fingerling potato confit, smoked pimentón de la Vera emulsion, Sicilian caperberries, charred lemon.", dishPrice: "$26.00", dishTags: ["GF", "DF"], dishDietary: ["gf", "df"], dishProvenance: "Galician Hook & Line", dishImageUrl: dishImage, dishImageAlt: "Hearth-charred Spanish octopus with potatoes" },
    { dishId: "kampachi", dishCategory: "starters", dishName: "Kampachi Crudo", dishDescription: "White shoyu aged in cherrywood, sea grapes, cold-pressed yuzu kosho vinaigrette, watermelon radish.", dishPrice: "$22.00", dishTags: ["GF", "DF"], dishDietary: ["gf", "df"], dishProvenance: "Kona Cold Storage", dishImageUrl: dishImage, dishImageAlt: "Kampachi crudo with sea grapes and radish" },
    { dishId: "rillettes", dishCategory: "starters", dishName: "Heritage Pork Rillettes", dishDescription: "Whole-grain Dijon, tiny French cornichons, toasted levain sourdough from our brick oven.", dishPrice: "$18.00", dishTags: ["Pork"], dishDietary: [], dishProvenance: "Berks County Pasture", dishImageUrl: dishImage, dishImageAlt: "Heritage pork rillettes with sourdough" },
    { dishId: "ribeye", dishCategory: "mains", dishName: "Dry-Aged Ribeye for Two (28oz)", dishDescription: "45-day dry-aged Holstein beef, rosemary bone marrow compound butter, blistered vine tomatoes, roasted shallot jus.", dishPrice: "$94.00", dishTags: ["GF", "Serves 2"], dishDietary: ["gf"], dishProvenance: "Kinderhook Farm, NY", dishImageUrl: dishImage, dishImageAlt: "Dry-aged ribeye steak with tomatoes" },
    { dishId: "salmon", dishCategory: "mains", dishName: "Cast-Iron Skuna Bay Salmon", dishDescription: "Charred sweet corn velouté, braised leeks, summer chive blossoms, crackling golden skin, lemon oil.", dishPrice: "$36.00", dishTags: ["GF"], dishDietary: ["gf"], dishProvenance: "Vancouver Island Catch", dishImageUrl: dishImage, dishImageAlt: "Cast-iron salmon with corn veloute" },
    { dishId: "cavatelli", dishCategory: "mains", dishName: "Handmade Cavatelli with Wild Boar Ragù", dishDescription: "12-hour slow-braised juniper ragù, 24-month Parmigiano Reggiano, delicate bitter cocoa dusting, bronze-die cut pasta.", dishPrice: "$31.00", dishTags: ["House Pasta"], dishDietary: [], dishProvenance: "Texas Wild Harvest", dishImageUrl: dishImage, dishImageAlt: "Handmade cavatelli with wild boar ragu" },
    { dishId: "risotto", dishCategory: "mains", dishName: "Roasted Honeynut Squash & Farro Risotto", dishDescription: "Brown butter sage reduction, toasted pepitas crunch, gorgonzola dolce fonduta, organic Emmer farro.", dishPrice: "$27.00", dishTags: ["V"], dishDietary: ["v"], dishProvenance: "Lancaster Grains", dishImageUrl: dishImage, dishImageAlt: "Honeynut squash and farro risotto" },
    { dishId: "pizza-morel", dishCategory: "woodfired", dishName: "Cacio e Pepe & Foraged Morel Pizza", dishDescription: "Fior di latte, fermented tellicherry pepper melange, sweet spring onion, aged Pecorino Romano Fulvi.", dishPrice: "$25.00", dishTags: ["V"], dishDietary: ["v"], dishProvenance: "Oven 850°F", dishImageUrl: dishImage, dishImageAlt: "Wood-fired cacio e pepe morel pizza" },
    { dishId: "pizza-nduja", dishCategory: "woodfired", dishName: "‘Nduja Calabrese & Wild Blossom Honey", dishDescription: "Spicy spreadable salami, smoked provolone, San Marzano reduction, habanero-infused field honey.", dishPrice: "$26.00", dishTags: ["Spicy"], dishDietary: [], dishProvenance: "Calabria Origin Pork", dishImageUrl: dishImage, dishImageAlt: "Nduja Calabrese wood-fired pizza" },
  ];

const cellarPours: Restaurants01CellarPour[] = [
    { cellarPourId: "bobinet", cellarPourType: "White / Pét-Nat", cellarPourName: "Domaine Bobinet ‘Poil de Lièvre’", cellarPourOrigin: "Saumur, Loire Valley, France · Chenin Blanc", cellarPourPrice: "$18 / $72", cellarPourNote: "Crisp golden apple, saline chalk minerality, vibrant acidity." },
    { cellarPourId: "costadila", cellarPourType: "Skin-Contact Orange", cellarPourName: "Costadilà ‘280 slm’ Macerato", cellarPourOrigin: "Veneto, Italy · Glera & Bianchetta Trevigiana", cellarPourPrice: "$19 / $76", cellarPourNote: "Dried apricot, volcanic flint, savory dried thyme finish." },
    { cellarPourId: "occhipinti", cellarPourType: "Chilled Red", cellarPourName: "Occhipinti ‘SP68’ Rosso", cellarPourOrigin: "Vittoria, Sicily · Frappato & Nero d’Avola", cellarPourPrice: "$17 / $68", cellarPourNote: "Pomegranate, blood orange zest, crushed wild oregano." },
  ];

export const Restaurants01placeHolder = {
  ...base,
  dishes,
  cellarPours,
};
