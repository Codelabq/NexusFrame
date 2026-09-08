export interface BundleOption {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  isMostPopular?: boolean;
}

export const bundles: BundleOption[] = [
  {
    id: "single-sculptor",
    title: "Single Sculptor",
    description: "Starter Device + 1 KINETIQ Node",
    price: 69,
    originalPrice: 138,
  },
  {
    id: "duo-sculptor",
    title: "Duo Sculptor Pack",
    description: "2 Devices + 4 KINETIQ Heads",
    price: 99,
    originalPrice: 240,
    isMostPopular: true,
  },
  {
    id: "vip-studio",
    title: "VIP Studio Pro Kit",
    description: "Device + Travel Case + 6 Nodes + Serum",
    price: 129,
    originalPrice: 318,
  },
];

export interface ArsenalProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badgeText: string;
  iconName: string;
}

export const arsenalProducts: ArsenalProduct[] = [
  {
    id: "kinetiq-x-pro",
    title: "KINETIQ.X Pro Sculptor",
    description: "3,200 RPM Micro-Strokes • 4 Kinetic Nodes • Deep Fascia Targeting",
    price: 69,
    originalPrice: 138,
    rating: 4.9,
    reviewsCount: 2419,
    badgeText: "VIRAL TIKTOK #1",
    iconName: "ScanLine",
  },
  {
    id: "kinetiq-pulse-mini",
    title: "KINETIQ Pulse Mini",
    description: "Whisper-Glide Motor • Daily Commute Size • Premium Travel Case",
    price: 49,
    originalPrice: 89,
    rating: 4.8,
    reviewsCount: 1120,
    badgeText: "POCKET EDITION",
    iconName: "Zap",
  },
  {
    id: "thermal-node-duo",
    title: "KINETIQ Thermal Node Duo",
    description: "Rapid Contrast Warming • Ceramic Conduction • USB-C Fast Charge",
    price: 79,
    originalPrice: 149,
    rating: 4.9,
    reviewsCount: 870,
    badgeText: "HEAT & CRYO TECH",
    iconName: "Thermometer",
  },
  {
    id: "fascia-release-oil",
    title: "Fascia Release Oil & Serum Kit",
    description: "Non-Greasy High-Glide Matrix • Arnica Infusion • Zero Residue",
    price: 29,
    originalPrice: 45,
    rating: 4.9,
    reviewsCount: 3400,
    badgeText: "ACTIVATOR FORMULA",
    iconName: "Droplets",
  },
];

export interface UGCReview {
  id: string;
  handle: string;
  avatarUrl: string;
  quote: string;
  verifiedTag: string;
  goal: string;
  result: string;
}

export const ugcReviews: UGCReview[] = [
  {
    id: "chloe-glows",
    handle: "@chloe.glows",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-TKYfbyu9q5ry5fW5_8d-CWkRDeK-L8N2ZOQPQw_E_7ae6Jij8LQPW7rr8WwITQwwg6iblpwlXDyfLiZE4M-ue2I62hv3My2XhNkyZYs8q6Z072MArxx_KiRKGuf1JCzAzXNZljjXDlFIGgxITFfDUjfLGIe2cIw5NIL_DAT-bC4INzo8kxQ8LCCAl_jtAcTZyJBxhfyctQBlKpl5AHKct6IG2K6ccc7CKLiLaaONoQuVFyM8RSTaA",
    quote:
      "Literally replaced my $300 lymphatic drainage appointments. Ten minutes a night while watching Netflix and my arms look snatched. I was skeptical but the 14-day timeline is real.",
    verifiedTag: "Verified Purchaser",
    goal: "Arm & Thigh Tone",
    result: "14 Days Result",
  },
  {
    id: "marcus-fit",
    handle: "@marcus_fit",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-ivVysc0MdgmPC0PaxsVuzHycAGNOl9hpfcnYO7BWst8wz6TmQ6WDmCQHBP_Qdtdx-csikBeYM7E7Oe_qDJZrhmp4y8krnYvLY6D4nDqCZY7uHPwx83keq2xJ4bpmdXNREpRuJ5kGIANPHH2WmWT5FoRX3p-j-pkpFtYvQM37I3aPghzJdxCWAz9zaMfuHJxjFfVC184RUc1zjbuG0q2KjyWbRjhOc2NldWrw20vv5BJNl4FllBkzrw",
    quote:
      "Most percussive devices are either too weak or feel like a jackhammer on your bones. KINETIQ hits the sweet spot with 3,200 RPM micro-strokes. Recovery is twice as fast.",
    verifiedTag: "Verified Athlete",
    goal: "Muscle Definition",
    result: "10 Days Result",
  },
  {
    id: "sarah-wellness",
    handle: "@sarah_wellness",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVudJrc1FbRGay-ugsrL-4jf0LoEHuOON6Xa9cUDbZgX4Xo2xOCTaeb8vRfQ20q-FdkhEYVS165aiP9fxOlie_vQpYxoSMlsQJb5jSQmWAYW20KucfneDBpq8tuAwP44e3ARB-U6xHpAmf1NTR7efXy_T3mQSn8MeQhknhL59jNtcXd3VAEQ5nIS3K_cp2G7-79SfaD2X_VfmY4OfU0-1E1BkkzRkn8g5Li2Az3hTcmkA3SFR4xSlvEA",
    quote:
      "Bought the Duo Pack so my sister wouldn't steal mine. The battery lasts for almost two weeks of daily use. Best purchase I've made from TikTok this entire year.",
    verifiedTag: "Verified Purchaser",
    goal: "Post-Workout Relief",
    result: "Verified Duo Buyer",
  },
];

export const standardBodyRollerPoints: string[] = [
  "Superficial surface rubbing with zero deep tissue impact",
  "Bulky, loud motors exceeding 75dB",
  "Fragile plastic components prone to motor stall",
  "No money-back guarantee or lengthy return hurdles",
];

export const kinetiqXPoints: string[] = [
  "Micro-percussion penetrates 12mm deep into target fascia",
  "Whisper-Glide acoustic dampening under 38dB operation",
  "Aerospace-grade alloy armature with 40lb stall force",
  "60-Day Love It Or Free Money-Back Guarantee",
];
