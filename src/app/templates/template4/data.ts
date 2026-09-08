export const departments = [
  "Noise Cancelling Headphones",
  "Over-Ear Headphones",
  "On-Ear Headphones",
  "Earbuds & In-Ear",
  "Headphone Amps & DACs",
] as const;

export const brands = [
  "Sony",
  "Bose",
  "Apple",
  "Sennheiser",
  "Anker Soundcore",
  "JBL",
  "Audio-Technica",
] as const;

export const priceRanges = [
  "Under $50",
  "$50 to $100",
  "$100 to $200",
  "$200 to $300",
  "$300 & Above",
] as const;

export interface Product {
  id: string;
  title: string;
  listPrice: string;
  currentPrice: string;
  discount: string;
  rating: number;
  reviewsCount: number;
  salesVolume: string;
  deliveryDate: string;
  badgeText: string;
  primaryImage: string;
  colorSwatches: string[];
  keySpecs: [string, string, string, string];
}

export const products: Product[] = [
  {
    id: "sony-wh-1000xm5",
    title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones with Auto NC Optimizer, 30hr Battery Life, Crystal Clear Hands-Free Calling",
    listPrice: "$399.99",
    currentPrice: "$298.00",
    discount: "-25%",
    rating: 4.8,
    reviewsCount: 24518,
    salesVolume: "10K+ bought in past month",
    deliveryDate: "Tomorrow, Oct 24",
    badgeText: "#1 Best Seller",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAz6UM0lkVtJ34Zgo3L0q0PDPklNU2ssEE3xCeIOT6tsboxSo-L-nGMGgY38XtaPdtl7hsfVgaWxM3W5iapm4RBW5ibRYlofxgJhaJ0GjZ2gle8Ku11dAA3frOZobvrq2lTp96hzN6rx724XVQvpIF-MY3g8_AhrRef6V_BpTyYjFTLSY4NQsa2NQrvloSr6CJV-yAetEHCQhQYUffDw1RHocK226-CKVnqcjf5YMo0CvpirN2Hj_nIkQ",
    colorSwatches: ["#000000", "#cbd5e1", "#172554"],
    keySpecs: [
      "Two processors & 8 microphones for unprecedented ANC",
      "Up to 30-hour battery life with quick charging",
      "Multipoint connection allows switching between two devices",
      "Intuitive touch controls for pause, skip, and volume",
    ],
  },
  {
    id: "bose-quietcomfort-ultra",
    title: "Bose QuietComfort Ultra Wireless Noise Cancelling Headphones with Spatial Audio, World-Class Quiet & CustomTune Technology",
    listPrice: "$429.00",
    currentPrice: "$379.00",
    discount: "-12%",
    rating: 4.7,
    reviewsCount: 14210,
    salesVolume: "8K+ bought in past month",
    deliveryDate: "Tomorrow, Oct 24",
    badgeText: "Overall Pick",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClu2MHewQLR2EjFOJCy_79wyqEOkQn0GNKP--4takzG89aITzxLx1pITb_zupXoX4hpDRxgrP8eDf-w6z773Ug7wE8NR9kE-m5hcqYR0bnKhKbOIV1wOUH0i8UAkeseOGAtsSn8Mt3gnEl9Qxh_XZNQIWE9qygDVCrvI3tSr73A5zOPkEKX0HvbHwypZhKxpzB4R9e-e01QnR76CrI12FdIZ2sS8D-mTNgtSIzT2Sy23kZoySvI7ouSw",
    colorSwatches: ["#f5f5f4", "#000000", "#fef3c7"],
    keySpecs: [
      "Revolutionary Bose Immersive Audio with spatial soundstage",
      "CustomTune sound calibration automatically tailors audio",
      "24 hours of continuous playback",
      "Quiet, Aware, and Immersion modes with Wind Block",
    ],
  },
  {
    id: "apple-airpods-max",
    title: "Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos",
    listPrice: "$549.00",
    currentPrice: "$479.00",
    discount: "-13%",
    rating: 4.6,
    reviewsCount: 19832,
    salesVolume: "5K+ bought in past month",
    deliveryDate: "Friday, Oct 25",
    badgeText: "Premium Pick",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDHAN-21e0Q0FEmV8m1l3O5-VhZ17gVWVN4B-r6OSMCBDwVIYKhLNSQPjcA86SBGeiiDRlgTp0Q_ibxl-2K1GSoJz_91P28AFrBNR9b3UTf3G2hUSxtE7AOTkfbYl_QkmOFJhxbnfcP1FELDoSkkzrEmi7QPcN7j-Z8nW7wUC6MiYyybGcjKHfJFN5-Qahx5q5C7YkFWCXZj1g2nHx2jdsc0ao65Q572XGD2yRpWVviiV8UHaCY0TM9A",
    colorSwatches: ["#44403c", "#cbd5e1", "#7dd3fc", "#f9a8d4"],
    keySpecs: [
      "Apple-designed dynamic driver delivers high-fidelity sound",
      "Computational audio combines acoustic design with H1 chips",
      "Knit-mesh canopy and memory foam ear cushions",
      "20 hours of listening with Active Noise Cancellation",
    ],
  },
  {
    id: "anker-soundcore-life-q30",
    title: "Anker Soundcore Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Audio, 40H Playtime, Custom EQ App",
    listPrice: "$79.99",
    currentPrice: "$59.99",
    discount: "-25%",
    rating: 4.6,
    reviewsCount: 58914,
    salesVolume: "15K+ bought in past month",
    deliveryDate: "Tomorrow, Oct 24",
    badgeText: "Lightning Deal",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAstKFzcT6d1bfghUQ990IS0mEIU8Q7S0co435tyuI4asfBYSN06eARZe6dA45FRcvrRKTBNDKD8gkDB7idPHss9rtPOXN-Ti9i5qTq93kz_k1knR3lUu2zY4Qdv50svvMFq_zxt6QMKdX9Y3s3Q-n8Vg4edM6Eeocy8vw5DnGVDzBZBfKS5G4cMvhsARxyRbK-FrA-ZmUKzY5IA3goz2dZ7X966GKyDxgTMZgw5njI5EyHyEggWlpmKg",
    colorSwatches: ["#171717", "#1e3a8a", "#ffe4e6"],
    keySpecs: [
      "Top-Rated Budget ANC with dual noise-detecting microphones",
      "40-hour playtime in ANC mode and 60 hours standard",
      "Transport, Outdoor, and Indoor cancellation profiles",
      "NFC Fast Pairing and Soundcore custom equalizer app",
    ],
  },
  {
    id: "sennheiser-momentum-4",
    title: "Sennheiser Momentum 4 Wireless Bluetooth Headphones with Adaptive Noise Cancellation, 60-Hour Battery Life, Audiophile 42mm Transducer System",
    listPrice: "$379.95",
    currentPrice: "$269.95",
    discount: "-31%",
    rating: 4.7,
    reviewsCount: 8340,
    salesVolume: "3K+ bought in past month",
    deliveryDate: "Tomorrow, Oct 24",
    badgeText: "Audiophile Pick",
    primaryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDQ4AM_3PCPp4-jS1DjIiczvsxYAxdkc_3NG_XzSORR4ai7GapMP-DgU-WmD-CY09GDma8J8K5frvqvXZBDpC98hFo6OqZEKS4n7mNnp0blBTfQuTgXaAzZNrI4CAtlMhGCOmWXPUdny-sxz5fdV_y-wl2_0XaFrMxS9qV09LK91wLFYWmzUBVPX-3osAIDAC9HfBPH-XsDkym7PPaU6TubgJ55ebpG5U8CLEm2evId7nx9h86nksjJw",
    colorSwatches: ["#171717", "#e4e4e7", "#451a03"],
    keySpecs: [
      "Industry-leading 60-hour battery life on a single charge",
      "Audiophile-inspired 42mm transducer system",
      "Adaptive Noise Cancellation with adjustable Transparency",
      "Smart Pause stops music when headphones are removed",
    ],
  },
];
