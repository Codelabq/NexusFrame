export type MenuCategory = "starters" | "mains" | "woodfired";
export type DietaryTag = "v" | "gf" | "df";

export type Dish = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: string;
  tags: string[];
  dietary: DietaryTag[];
  provenance: string;
  imageUrl: string;
  imageAlt: string;
};

export type CellarPour = {
  id: string;
  type: string;
  name: string;
  origin: string;
  price: string;
  note: string;
};

export const heroImageUrl = "https://lh3.googleusercontent.com/aida/AEtjO1UDcXwchCPIXuKg2xsg99LrTxkNmT3SpZxNRcKLiMxynF6Is45K-lcnkd0Rng6qn9JDECPB4JpcgkReQ74k_hXGClcn97JVFSFj86EQO_04aPzjEmQubSk-K5pJ718zlpngE0mr7Xzowvv9fLRtL5KM2YhFWgALlcl8FLF82ZSyDK2FQhsA2vZcRXW6UnELKJzFBaepRCMm9NZE939QwL69uaMYscpdsO8aZQS-nJ2aAj6J59KGMtwAO4A";

const dishImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2uKAiwikleq6Cxsh1T5vhW9Whc4NNUL2mkngmTE4Irkt0KUM-_ltRV9umDXoiODht-iC7BtFhb_zzr69m8dHHjDAW9Z9tK0QmbEli0Xr5xglDZk1gy_DxuY-Am2i7sml_iFsYS_tlm88gkyelCpbx71ZHM2Ey3z9zT1NTc1xBHS0tSRsZC1CNBasOfc2Wdur4RsI4W940J3QhSUdy1j5zFX0LjUvI41MMdDznnDyvSAzA375cq5HY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_j565oDLhFQqYuWQbtyizKJQsDsCUxvnfNP4AHifWC2L_Wcl4XT8AEqjb4YhSDVK3IW2nznv-fGPDiLw_vNiq53SmxSuJqM3aebyQ5jVBHQR4eBL-wMtVhcVbbkBhlEsuG2NJaQZz_lmKwQmptGKJa8HURbVkJrgfj2_zXQtifA3Sv6ROKahj4oNH198g0rTqxNUmw7y1vZfVEWAxT47PThYsFincJjwGOFfa8b9yOkknppv5JqZ_",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKTb8Gvlno2Smaa3wbE6piKUS-PSdu60Fvaf03Cip20CeYA9ymtJtuakcJS0WX7C2BFz44OT2VeEDP-s2o190u9qe0-0mq80OWgx-2F75oknzRLtiZhGsawvLvqtCglr4JuP1y2ZvbftfUryjichzQDmUrIWElLh-btYzGA5HsPkU-7KbbNtUR8Yo_w-PF26ld0z62l9udBKwPc5HU_5_mVppYMC87g6atdjyoSxHWAN70tFWrBjjX8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCyjnUZAGwwmXds7JHmpZeMwHzYCSSxgHVTpqO0GpiCog7p0hX_SVwmX1J7LFAj1XCTH7CClV2BmQwqunh6XeuMgNG22WWKnOgRgFTZOZbiMk8GAthp4SjX292-z10TrKiGIhWGtuNA9c0IUy7HQtskoSzN0MsooPha0ewX5WhzBZ9WqG4sb5iRp_rBBhcz2_Ye0jqEmTHBIzJ6MR4qcf8xj9I3kyicmEgD93uu5rBdOCdsu7Dg82kg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBvZFspADUZ9xb5XDng1sX8Iescf1c6sJZmBHBPL0ZIZqoO2YFBo6e3mxhPEQoxCRYwxry7vxRMyjg_mxjoMNa-p5K0ujzsm-pfSuuLNMkWy6uJHeL3rJSPBTI0OvrRMKlvSW9MOMcbHlFF8dg093D2Qz_2svuoyccv-43miMKUZX-VyhmXLIrEpGebMnmFPmX7HxcG1H21De8jXqdouzvEbYt7lMh4Z678hAfQejLwcTKFoQ928yEV",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDeqGufRk1ITHfglCfxBfVx2fDQAppGhtP35o845LnU2T-r8f4_QTxFY-6x_jx00mI6QyuAFjwKwLBT83ZqckPZtLrhDhMY4hd2OkeNOySzJQFqXn1vjt1Iw6AR7lw-ndC_YBP_7CfuUbyvWIxA6vGpQCgEPtGqtcsrsowl3l8FctqjnwYA5V2lxpb-Rm1q52KECN6gRIlKKupeQcL8VM7uce0fhhv_KETMEWjikH6OxpawSXsVLtsg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCx96LGyrvCdEGq6LPNkaGoDgYszWLPY-kpJov83Lutumum8chOQ1r3qib6AhUp9sO9gwZ2s43SrQD7SSFm5Y0nVE9lHYMGiO-d1Qeu8POmmXpyCAMOa3uz6W8pzBSMovfQfD24Ms8EIW5LBhyC2e7bqfhU-xf0PPaDRccpWn0apBD6fmNNGD7ydigb7F_DWI7nCDYu8Q38uXOwnrd-RxamH4e8Pyyjzh6J-lojAR3W33F7ZVeLSO8I",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCwU7NLjojh8-B9t4t5DgEJfRf6UUURkDHuDkC_jmSvmI5VLLT-q0qmIrjF2glBtPeEUQ3CXQQ1MGNQyBZY-_KXajSBiW63FHfjhvaDCMYjUcWMUL7ORvnLZAJXMJ0Uk9HVHsXLFryvVhI4vnMK4v7C8vSL3LsH8pV9bVgAd0xA2ffNFL760QFr2gkZhJOt99nI3ltBuqO3Junm1seBbGm9wKTP7JF5SExTdBn6ji9hm7pD6y5nzjww",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDBs0wi-mU-KKpkv545ozxNa7akLo71VHPbeih-vbonYOqFTIWwChbuQ1txEqkOvLfpBvBoVqyZRCcweTPpNd-Pm_-OwswmN0bolY1zdU4UgKbtU8teQTit_GUVdJRxDgM2cZL_fa4PtNSloz1eHRMCQ6pQknS6vVdFH-y45WEBHnJPEcwWK2lh_ANYMR7Iyea0DxmPAhWPPW6Xfbbzl94E17V7wRApSn034Li15llzNC3YuqHuGZ2d",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnc5tS811sdz9qFLj_vMbzTnTw5m3ygTGSQnNNx8etVeGdX2NoUnZFCxJyqVZWopWPv3bkVeMD-VLfIhd7zx-vVfaRhInAWOEEFTmC7bxv4aMk0yMhxZBHr9yikKD5UgKAmv3LaleQoE0CVPuz5pdK4Onfyjb347RENg8UAgaPux7x7Bcq4jDbMrzWlVg5DWJV-jI5deEwWR6eqUBIZMBiyl6hWZ_9avDHEjb-4B7A0iTzni3hL3Kz",
];

export const dishes: Dish[] = [
  { id: "maitake", category: "starters", name: "Wood-Fired Wild Maitake", description: "Whipped black garlic ricotta, crispy shallot threads, Hudson thyme-infused mountain honey.", price: "$19.00", tags: ["V", "GF"], dietary: ["v", "gf"], provenance: "Wood Oven No. 2", imageUrl: dishImages[0], imageAlt: "Wood-fired wild maitake mushrooms with ricotta" },
  { id: "octopus", category: "starters", name: "Hearth-Charred Spanish Octopus", description: "Fingerling potato confit, smoked pimentón de la Vera emulsion, Sicilian caperberries, charred lemon.", price: "$26.00", tags: ["GF", "DF"], dietary: ["gf", "df"], provenance: "Galician Hook & Line", imageUrl: dishImages[1], imageAlt: "Hearth-charred Spanish octopus with potatoes" },
  { id: "kampachi", category: "starters", name: "Kampachi Crudo", description: "White shoyu aged in cherrywood, sea grapes, cold-pressed yuzu kosho vinaigrette, watermelon radish.", price: "$22.00", tags: ["GF", "DF"], dietary: ["gf", "df"], provenance: "Kona Cold Storage", imageUrl: dishImages[2], imageAlt: "Kampachi crudo with sea grapes and radish" },
  { id: "rillettes", category: "starters", name: "Heritage Pork Rillettes", description: "Whole-grain Dijon, tiny French cornichons, toasted levain sourdough from our brick oven.", price: "$18.00", tags: ["Pork"], dietary: [], provenance: "Berks County Pasture", imageUrl: dishImages[3], imageAlt: "Heritage pork rillettes with sourdough" },
  { id: "ribeye", category: "mains", name: "Dry-Aged Ribeye for Two (28oz)", description: "45-day dry-aged Holstein beef, rosemary bone marrow compound butter, blistered vine tomatoes, roasted shallot jus.", price: "$94.00", tags: ["GF", "Serves 2"], dietary: ["gf"], provenance: "Kinderhook Farm, NY", imageUrl: dishImages[4], imageAlt: "Dry-aged ribeye steak with tomatoes" },
  { id: "salmon", category: "mains", name: "Cast-Iron Skuna Bay Salmon", description: "Charred sweet corn velouté, braised leeks, summer chive blossoms, crackling golden skin, lemon oil.", price: "$36.00", tags: ["GF"], dietary: ["gf"], provenance: "Vancouver Island Catch", imageUrl: dishImages[5], imageAlt: "Cast-iron salmon with corn veloute" },
  { id: "cavatelli", category: "mains", name: "Handmade Cavatelli with Wild Boar Ragù", description: "12-hour slow-braised juniper ragù, 24-month Parmigiano Reggiano, delicate bitter cocoa dusting, bronze-die cut pasta.", price: "$31.00", tags: ["House Pasta"], dietary: [], provenance: "Texas Wild Harvest", imageUrl: dishImages[6], imageAlt: "Handmade cavatelli with wild boar ragu" },
  { id: "risotto", category: "mains", name: "Roasted Honeynut Squash & Farro Risotto", description: "Brown butter sage reduction, toasted pepitas crunch, gorgonzola dolce fonduta, organic Emmer farro.", price: "$27.00", tags: ["V"], dietary: ["v"], provenance: "Lancaster Grains", imageUrl: dishImages[7], imageAlt: "Honeynut squash and farro risotto" },
  { id: "pizza-morel", category: "woodfired", name: "Cacio e Pepe & Foraged Morel Pizza", description: "Fior di latte, fermented tellicherry pepper melange, sweet spring onion, aged Pecorino Romano Fulvi.", price: "$25.00", tags: ["V"], dietary: ["v"], provenance: "Oven 850°F", imageUrl: dishImages[8], imageAlt: "Wood-fired cacio e pepe morel pizza" },
  { id: "pizza-nduja", category: "woodfired", name: "‘Nduja Calabrese & Wild Blossom Honey", description: "Spicy spreadable salami, smoked provolone, San Marzano reduction, habanero-infused field honey.", price: "$26.00", tags: ["Spicy"], dietary: [], provenance: "Calabria Origin Pork", imageUrl: dishImages[9], imageAlt: "Nduja Calabrese wood-fired pizza" },
];

export const cellarPours: CellarPour[] = [
  { id: "bobinet", type: "White / Pét-Nat", name: "Domaine Bobinet ‘Poil de Lièvre’", origin: "Saumur, Loire Valley, France · Chenin Blanc", price: "$18 / $72", note: "Crisp golden apple, saline chalk minerality, vibrant acidity." },
  { id: "costadila", type: "Skin-Contact Orange", name: "Costadilà ‘280 slm’ Macerato", origin: "Veneto, Italy · Glera & Bianchetta Trevigiana", price: "$19 / $76", note: "Dried apricot, volcanic flint, savory dried thyme finish." },
  { id: "occhipinti", type: "Chilled Red", name: "Occhipinti ‘SP68’ Rosso", origin: "Vittoria, Sicily · Frappato & Nero d’Avola", price: "$17 / $68", note: "Pomegranate, blood orange zest, crushed wild oregano." },
];

export const categorySections = [
  { id: "starters", index: "01", title: "Primi & Piccoli — Starters", note: "Designed for communal sharing before hearth mains" },
  { id: "mains", index: "02", title: "Secondi dal Fuoco — Hearth & Mains", note: "Cooked slow over live ember woodbeds" },
  { id: "woodfired", index: "03", title: "Lievito Madre — Wood-Fired Sourdough", note: "Fermented 72 hours, stone-milled regional wheat" },
];
