export const categories = [
  "All Objects",
  "Sensory & Light",
  "Desk Sculptures",
  "Tactile Hardware",
  "Limited Drops",
] as const;

export interface HeroProduct {
  title: string;
  description: string;
  price: string;
  colorOptions: string[];
  imageUrl: string;
}

export const heroProduct: HeroProduct = {
  title: "Lumen Horizon Diffuser",
  description: "Ultrasonic desk sculpture with dual mood lighting",
  price: "$145.00",
  colorOptions: ["#e4d5c7", "#f472b6", "#18181b"],
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCiWEFn1QmSX4qUdx5Qs08GhE_mw2CXPynf3D68CfxUEHMSRlgO-vMjsrcbNj1f3plVlXkRKGntysncNZjphgVJZDCkCbvp33IJe4dg7a01F1fqF9ctSfjDPon9fdEYSDWIL1UG745-AMQdXKm17OYN2DuJM3XRbk-zgAlyMn1RWWsK4e6ZFx-xp4fkVVPEEhlxM5nRFUTmTAv5AB6AJPDXEmw4STPToqQKhuMb1GjKV7QtEV7jCBVBRw",
};

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  reviewsCount: number;
  badgeText: string;
  primaryImage: string;
  colorSwatches: string[];
  sizes: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "lumen-horizon-diffuser",
    title: "Lumen Horizon Diffuser",
    description: "Aroma sculpting with soft diffused light halo",
    price: "$145",
    rating: 4.9,
    reviewsCount: 1240,
    badgeText: "Best Seller",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv-GnRnNGWu4Oh3p365jL5kczlks0rAtX0dL9rwX-gmRaqcuJgD31IiTDy_fJtsDOspnghOK4brOq-0ZakHd73AgFOUQ_XG6ILk9MlVe7c07kTUcCRpmReqNm_Tpb2yK7mMao3ousLn2Eh5suxXhODTlcNszJrRZk2EOr73A1atHtGoPAOhhTSLChxZY7pQcOXrr3gi07sn-kVhW69e2U6qWZwDdwgiE2fGNvuKt5X137TJS6uhv32ng",
    colorSwatches: ["#18181b", "#e4d5c7", "#d8b4e2"],
    sizes: ["Standard", "Grande"],
    category: "Sensory & Light",
  },
  {
    id: "mag-touch-keypad",
    title: "Mag-Touch Keypad",
    description: "Hot-swappable magnetic macro pad",
    price: "$190",
    rating: 5.0,
    reviewsCount: 412,
    badgeText: "New Drop",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdqj6RNBltCdEVtTCYahwNoKjm6PxZcKgwfFvYlXozn4RiMrfRnfpWEWN0d7Wnb6mmZFeAjRr1Bv9I0g87-7Dp_XHnhMywaIehtm-Zwb7TjleMC1i7aFXiezqEuCe_QeMpfRLNJ07AS6UfrNaXDsxSh8WbbxpwUU4HArIGeiyedvYcC7Ww8d5rzMjzSCdg1J-bCyae-7UyNu0su0-T0j2Bi0GGY265xINIRivg-WGC62H4lRkj6OuH0Q",
    colorSwatches: ["#f472b6", "#38bdf8", "#f5f5f4"],
    sizes: ["Linear", "Tactile"],
    category: "Tactile Hardware",
  },
  {
    id: "prism-monolith-speaker",
    title: "Prism Monolith Speaker",
    description: "Lossless spatial audio acoustic sculpture",
    price: "$320",
    rating: 4.8,
    reviewsCount: 89,
    badgeText: "Limited 100",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-37Ut1Z69sST6vfjGhY8AMIUwYH7q--PnofWRzOz3BXuesBf51qLS0iP46GVhNeO24MXEijMJStFf4zo0xIrQqk8TMfy1g7bBRzqtdEzEQja14G9oi2Rtfcxwb4PTsJqCmXov0Rysc6QB1mmYeyp3WNqdhvpa9EWLuHOt32eSrinjGR_WNElddnLlDtEPt4dmOS0KqUkBnT956XGAMcMwdx6v8dsiidDSM1Cx_u8j6f9y5yZx2hur_A",
    colorSwatches: ["#27272a", "#fbcfe8", "#cbd5e1"],
    sizes: ["Desktop", "Studio"],
    category: "Desk Sculptures",
  },
  {
    id: "aer-form-wrist-rest",
    title: "Aer-Form Wrist Rest",
    description: "Ultra-soft medical grade cooling silicone",
    price: "$65",
    rating: 4.9,
    reviewsCount: 650,
    badgeText: "Trending",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIw7KZdNFOXrsJoN6ohl6hjO2Xp056eH5RQkV9E1qGy2fsbTooZyhjUEDPyq_u9pNlVlmghTDeoH3puftWSXfeC3GNjzYrfx6WP-Id2DP7wrnmhsfoDk8DmwE8i2wdP-d-auaj_rM7fOUsm2gQQa2jkB7VdAavxusymHPrV9ELVufxt2OX9_HvAKeT9PFoNqpQztGclU_OivdzVtGLnDxr8gLZbKuOCwZbXea4ixIoC3LuDCY0Vosf6g",
    colorSwatches: ["#fed7aa", "#e0e7ff", "#fce7f3"],
    sizes: ["Compact", "Full"],
    category: "Tactile Hardware",
  },
  {
    id: "solarium-pour-over",
    title: "Solarium Ceramic Pour-Over",
    description: "Dual-wall heat retaining artisanal dripper",
    price: "$88",
    rating: 4.9,
    reviewsCount: 210,
    badgeText: "Staff Pick",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDg4Fz2a4DxUp2PhO5x-lA-Rh2ufQwPQheBMUtHdNT1Vvo6Gfr4OJWXuXcLJYK7wFy3ffYszs206qWNJRWDabqy6uzU6a-OoAlvlj23zn_O8dtrBBJdh9XfDC8CxhKjS0GzftmzKIP5x5IFcuIJWrWyURscCGa_SWtZ6zNoST8052S5cFLu590p6F5oqLBnhtjhaSD0FxsdeIgpHyHkjrM-M4U4-1cSnlip84LYfE0ZNBOa89RNI96AfA",
    colorSwatches: ["#fef08a", "#f43f5e", "#f3f4f6"],
    sizes: ["300ml", "600ml"],
    category: "Sensory & Light",
  },
  {
    id: "orbit-pen-stand",
    title: "Orbit Pen & Stand",
    description: "Balanced magnetic gravity docking pen",
    price: "$110",
    rating: 5.0,
    reviewsCount: 520,
    badgeText: "Back in Stock",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcWnpXKgUcCO2oKGCMa9IbFOc3JtLe4FAYAQXL7YllfUMpZQoT0_Lz_M3XtNUGJtzPmNQFb93iNYu_i6Vfdfwcq5oTlUOy-MjI0XJ4aOndGNvlJsmP3fi-FKlmYyb331Yr_gxhiCvqi5J_jFx7Rf2VDdY2v41BBIJNIAAd3ro5D9XdZS4v-cAuPZNabxtvRxj6QqzJZ3AJuX9kX0BGRKWSCuT9LzNiWFdkszelquAUpHc-qcGYxpG1UA",
    colorSwatches: ["#1e293b", "#a78bfa", "#fbcfe8"],
    sizes: ["0.5mm", "0.7mm"],
    category: "Tactile Hardware",
  },
  {
    id: "tactile-desk-mat",
    title: "Tactile Desk Mat",
    description: "High-density anti-fray micro-weave",
    price: "$54",
    rating: 4.7,
    reviewsCount: 890,
    badgeText: "Essential",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAemfoSgfKj345l7nzuxQtG8ximthz-NoeH8XcbGJ5WOhMBC1DdsB3GLZZxrUhdmT5spN9ZGzP0onnlqfG0l0dibfU2Tr0hy55uComm8pBmIIHJ16XfycH690NlQxWzF2es-N0jRbQOHDh6HdOAgg_QcUtMb6q2aOzp86Js3FrPGzhh-d1uDJBsWHsIAJOsN924I7BfXdNLlnrKwq8d-X1R8uB4VXqTmS3D8uHEanuvvOWENO6LNwwELQ",
    colorSwatches: ["#e2e8f0", "#f472b6", "#334155"],
    sizes: ["M (80x40)", "XL"],
    category: "Desk Sculptures",
  },
  {
    id: "luminescence-light-bar",
    title: "Luminescence Light Bar",
    description: "Circadian smart bar with wireless puck",
    price: "$215",
    rating: 4.9,
    reviewsCount: 340,
    badgeText: "Series 02",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPWLAL4BCvz_eH0Qiu6cVR2bqj81QKv6Osz3AQegZ4iIpyRP_zQU5UtdHQ1_NEPxyGZH_5jLZmDpgboO4Qksk6jv6ZAR8tdvFh4nHdsQlieqZEDGdq0v6Hkbd3nwffPpOhOyQw8gq01xze41oDRajDPXHnFDVmUyevxVY7wUe1IzdWCrTkqSqobDeg3kB-dTseJXudYlUBFatWuYK14GebTeCmkJ2Hyts3Ck6NCYjGssXAJrPmFgYS5A",
    colorSwatches: ["#0f172a", "#fecdd3", "#ffffff"],
    sizes: ["18-inch", "24-inch"],
    category: "Sensory & Light",
  },
];

export interface TestimonialsData {
  mayaSpotlight: {
    quote: string;
    name: string;
    role: string;
  };
  elenaReview: {
    quote: string;
    detail: string;
    name: string;
    role: string;
    product: string;
  };
  performanceMetrics: {
    craftsmanship: string;
    packaging: string;
    longevity: string;
  };
}

export const testimonials: TestimonialsData = {
  mayaSpotlight: {
    quote: "Tactile objects that feel like art pieces on your desk. Worth every single penny.",
    name: "Maya Chen",
    role: "Creative Director · San Francisco",
  },
  elenaReview: {
    quote: "The finish on the Horizon Diffuser is unparalleled. It completely redefined my studio atmosphere.",
    detail: "The gentle mist output along with the ambient ring creates an almost meditative ritual before I begin working every morning. The tactile aluminum weight feels incredible.",
    name: "Elena Lindqvist",
    role: "Architectural Designer · Stockholm",
    product: "Lumen Horizon #0482",
  },
  performanceMetrics: {
    craftsmanship: "99.4%",
    packaging: "98.8%",
    longevity: "99.1%",
  },
};

export const footerContent = {
  brand: "LUMEN GOODS",
  description:
    "Modern tactile everyday objects engineered for intentional living, balancing playful softness with precise minimalist forms.",
  status: "Global batch release live",
  sections: [
    {
      title: "Catalog",
      links: ["Editions & Drops", "Living & Objects", "Wear & Soft Goods", "Print & Archive"],
    },
    {
      title: "Care",
      links: ["Track Order", "Shipping & Returns", "Sustainability", "Contact Studio"],
    },
  ],
  newsletter: {
    title: "Stay in the Circle",
    description: "Private drop previews, design manifestos, and early catalog access directly to your inbox.",
    placeholder: "Your email address",
    action: "Join",
  },
  copyright: "© 2025 LUMEN Goods Co. All rights reserved. Crafted for beauty & clarity.",
  paymentMethods: ["VISA", "MASTERCARD", "APPLE PAY", "KLARNA"],
} as const;
