import type { PosTemplateData, posProduct } from "@/types/index";

/** Raw template content. Derived fields (categories, tagFilters) are computed in `page.tsx`. */

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCWEn8f3qSlvL4Jt-JSB5AApJvn8qrdmtPbiDiG0AksV8fQK85Cf848cXels3uJQ4nY05TTriICarZoDkiNIsaKRzCqaJhhx-fQ0RcZrb5GOK9G12pkUYn2vyiOU9F9ejcvkmng6jtrkEEdX4QL_TG7ktgkrKd25rnQ88oSHG1Jjkp_ZtiKf14awgpPORdlCWyKFk2SK3bJpNOJ8-rXns9FzV1AsJht8ZZ85MNnTMGFZ5U-vaVrMYlHw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHdX_zRpFjXjXnQTRAS66Lh2Ve6V7hi_tIzCMN-r04RmEzDOx7YRp764iwQxG1vyr6z-74tXDL6XybOdXbUbWxWnYdn7SQJmArqiyAptgFky0LLH8EfNHqX_I5uzS0Pck-26OBNsP2welVBM_zxmjOlBTM5JJKgXiwsRcohWHdaQVqu59_yrT2AHL2DpHLS6dh1VdswpuaIScDbcNlGrYwKXPKACG9W0OOf3LUnTB7dOC2oD3YkuYkw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSOxVCmBSFGl-GZGlhhTrKMcIRIpvwpEoA0QJOO1710THSw0wM1Yar5A-pRmW_u1cq2x1_GWLWPRXFae1K7ksJNo5iDgvnKk1BlT2ekuOgm0NLQXTebPniClrILf4Nc2ZXD9Lf2Zy2phwF1ZxRKiGSy80JpsmgiJZV5fh_b1jNN70hney_hh_OnnB0AYGo8GVWv8hbG2LKCUY20_oG09eeIx41cTJ6Y7G2eJEyQcf-JKxxBFN6qvc09g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBYkMnKG-XRhQ45ep3_DkKUuktADOGKctSLIgfZEZ3G2pcLtLvBu0P8KF-hDom1OJ0iaETQmqmcS-bGXVHIWLvJcZoteKwP9vFa6VgyBfN2DJXLjlIbqUAiN7AStBheR_pnmoxJ_MZvSG5Z1syB3VvcMvCPO-hcQf9GMffbBPfRaivFnEJ290HfT3KPmuzpeNerXbw5lGARscJMNBzn2ocpia9WfT16rYNREvlzSj-fR7EEE1-TYhIKmQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLbrjZIDLRUoa9DZvZfzXZqkwfQj5D07OJjPmpsZgQJft8-AmWyj8XL5bbk9tk_L3aeNFqUuurSTcqgPrHRpFUFexSZlMBw9aMrS0818CIRQ0ZtjLUHVNT7TBQjlMX1uqPVCB6a5zw3eK5TxW-I6VR53sNfXkahBux7giVKXg4q9K8h4P-ZG4mbJTpKhy3JqGuzE-plPmKmkMFs6JfhS3_isZbtAlbzX-iTUgON1DiIYccTFaLLL8C1Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAs1sERyDAhbMeKGtvDaYkX2xVzlhDy6-MhdBHW_IyV3fB5V7X2GXaRWDO5RmQLbozpuOHzl0g2Ky5UZ3NEhC1UdQS2Kw_CUZHZgVNklmY75oDJwzv4IyqJcNCiD-ELqSe_HEnx0m3jIUKdGC-RiykVq2AkFRCWwyfFO-AZ99r73H-vuJH4K2w2D0JWXnvX035FXhaLYc5_tjz7uZtM-kKPvt70503p3iXqDVq6CraihP_krS3pauW-Ow",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPtogEGnDZMwlNzm06hqUG5DRHu2txEjPI8odwofsTsmrUAZDNW_KuAOA7whrgTXmh3nnoheJAoF_PM7JmJjklLfu07p3vb3es7qo-sJMrmbqMvbW2ELcgmpcfr-jlmJuvWgYBPe9uVVJ_F_IzoaHNVC3avBBXkNQ0GUJwPV3TKqTGdPFZe--ykOUU_tu6l0BpDufmPi1g8JUbT7Vyhy9jxv0isuFb6WBud2MVZ1aSP-77TlAevNuSMw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBHigwBs185YiR1AodFv2dTwzJ2vcU6dv3t_Dq9yt8DRfvSv8vIZOtVlBF4rXAeqGxRX174ZySmzROs2GVSmquBt6aY_gn8tCSBAa4AohGDr4VcumkpHTVq3Ve2zDbF16tgDFHnWRkWwZkSDYlY8nzvqVoET7m5qvjnSyW8TdW8eS2TvdRaTqTHLtCPrhhdB9jOgzsMcRwpmMhBq9zbIQyjYHWtaCL-bftmaK6QoyzbwDJaa9fiMDb8Og",
  "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=900",
];

const base: Omit<PosTemplateData, "categories" | "tagFilters" | "products"> = {
  comboBadge: "POS Deal of the Day",
  comboImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCCzOyZQjf7mKwufY1_B4UVRMr9CrNBBhoFEG5nxGNGyZPFP4ukcvUt3QL_mUQyp6bS1yeI8VuA2qrbfwwYX4wOAQlfSPCnngjiMXyVKKO6_Lw5Gxbmp0qTKjHNSRpy9WAR6awtrsHjc6erH1PXqRNf2HypCvs4c4kYPEM66ayvDqs0Eeg71QGcnSltDwzaYq59lHLHZ7fIz8N_CZ5OMyfBdUX1_Fyki-4KQhi7PJVW9ahXNk9a0BQ0Zg",
  comboImageAlt: "Shinjuku midnight ramen karaage combo",
  comboOverlayTitle: "Shinjuku Midnight Combo",
  comboExclusiveBadge: "Station exclusive",
  comboTitle: "Shinjuku Combo",
  comboSaveBadge: "Save 30%",
  comboPrice: "$12.99",
  comboOriginalPrice: "$18.50",
  comboFeatures: [
    "Rich 18-hr Pork Bone Broth",
    "Hand-pulled wavy noodles",
    "Double-fried garlic crunch chicken",
    "Chilled sparkling Yuzu Ramune",
  ],
  comboScarcityLabel: "⚡ Only 8 combos left in today's shift",
  comboCtaPrice: "+$12.99 🛒",
};

const products: posProduct[] = [
    { productId: "ramen-01", productName: "Tokyo Black Garlic Tonkotsu", productCategory: "ramen", productPrice: 14.5, productDescription: "Roasted black mayu garlic oil, 18-hour broth, thick house-cut noodles & melt-in-mouth pork chashu.", productTags: ["spicy", "chef"], productStock: "in", productBadge: "2X SPICY", productBadgeTone: "orange", productCode: "RECIPE #01", productImageUrl: images[0], productImageAlt: "Tokyo black garlic tonkotsu ramen" },
    { productId: "sides-08", productName: "Crispy Karaage Basket", productCategory: "sides", productPrice: 8.99, productDescription: "Sake & ginger marinated free-range thigh pieces fried in potato starch with Japanese spicy mayo dip.", productTags: ["chef", "classic"], productStock: "in", productBadge: "ONLY 4 LEFT", productBadgeTone: "orange", productCode: "SIDE #08", productImageUrl: images[1], productImageAlt: "Crispy Japanese karaage chicken basket" },
    { productId: "ramen-03", productName: "Wagyu Beef Tsukemen", productCategory: "ramen", productPrice: 16.25, productDescription: "Extra thick chilled artisanal noodles paired with an ultra-concentrated simmering A5 wagyu dipping gravy.", productTags: ["chef"], productStock: "in", productBadge: "HOT SELLER", productBadgeTone: "yellow", productCode: "DIP #03", productImageUrl: images[2], productImageAlt: "Wagyu beef tsukemen dipping noodles" },
    { productId: "ramen-05", productName: "Spicy Tantanmen", productCategory: "ramen", productPrice: 14.95, productDescription: "Creamy white sesame broth, infused Szechuan chili oil, crushed peanuts, bok choy, and wok pork mince.", productTags: ["spicy"], productStock: "in", productBadge: "3X SPICY", productBadgeTone: "red", productCode: "RAMEN #05", productImageUrl: images[3], productImageAlt: "Spicy tantanmen ramen" },
    { productId: "rice-02", productName: "Salmon Teriyaki Don", productCategory: "rice", productPrice: 13.75, productDescription: "Crispy skin grilled salmon over Koshihikari sushi rice, seasoned nori, pickled radishes, and sweet soy glaze.", productTags: ["classic"], productStock: "in", productBadge: "FRESH TODAY", productBadgeTone: "green", productCode: "BOWL #02", productImageUrl: images[4], productImageAlt: "Salmon teriyaki rice bowl" },
    { productId: "dessert-04", productName: "Matcha Soft Serve & Taiyaki", productCategory: "dessert", productPrice: 6.5, productDescription: "Authentic Kyoto Uji ceremonial matcha creamy soft serve served alongside a fresh-baked red bean waffle.", productTags: ["classic"], productStock: "in", productBadge: "DESSERT SPOTLIGHT", productBadgeTone: "yellow", productCode: "SWEET #04", productImageUrl: images[5], productImageAlt: "Matcha soft serve with taiyaki" },
    { productId: "ramen-09", productName: "Volcano Fire Noodles", productCategory: "ramen", productPrice: 15.5, productDescription: "Triple ghost pepper reduction, slow-simmered dashi tare, charred red chili pods, and thick spring noodles.", productTags: ["spicy"], productStock: "in", productBadge: "EXTREME SPICY 5X", productBadgeTone: "red", productCode: "FIRE #09", productImageUrl: images[6], productImageAlt: "Extreme spicy volcano fire noodles" },
    { productId: "sides-06", productName: "Takoyaki Balls (6 pcs)", productCategory: "sides", productPrice: 7.99, productDescription: "Crisp exterior, molten dashi batter filled with tender octopus chunks, Japanese mayo, and dancing bonito flakes.", productTags: ["classic", "chef"], productStock: "in", productBadge: "STREET CLASSIC", productBadgeTone: "yellow", productCode: "OSAKA #06", productImageUrl: images[7], productImageAlt: "Osaka takoyaki balls" },
    { productId: "ramen-10", productName: "Truffle Mushroom Mazesoba", productCategory: "ramen", productPrice: 15, productDescription: "Brothless umami noodles with black truffle butter, sauteed wild maitake mushrooms, and cured egg yolk.", productTags: ["chef"], productStock: "out", productBadge: "RESTOCK TOMORROW", productBadgeTone: "green", productCode: "SOLD OUT", productImageUrl: images[8], productImageAlt: "Truffle mushroom maz soba noodles" },
  ];

export const placeholder: Omit<PosTemplateData, "categories" | "tagFilters"> = {
  ...base,
  products,
};
