export interface ShoeSize {
  size: string;
  stock: string;
  isSoldOut: boolean;
}

export const shoeSizes: ShoeSize[] = [
  { size: "US 07", stock: "08 LEFT", isSoldOut: false },
  { size: "US 08", stock: "12 LEFT", isSoldOut: false },
  { size: "US 09", stock: "04 LEFT", isSoldOut: false },
  { size: "US 10", stock: "18 LEFT", isSoldOut: false },
  { size: "US 11", stock: "21 LEFT", isSoldOut: false },
  { size: "US 12", stock: "14 LEFT", isSoldOut: false },
  { size: "US 13", stock: "SOLD", isSoldOut: true },
];

export interface HardwareSpec {
  label: string;
  value: string;
}

export const hardwareSpecs: HardwareSpec[] = [
  { label: "CHASSIS UPPER:", value: "100% BALLISTIC CORDURA NYLON" },
  { label: "EXOSKELETON:", value: "MOLDED CARBON COMPOSITE CAGE" },
  { label: "LUG MATRIX:", value: "OCTA-DIRECTIONAL VIBRAM COMPOUND" },
  { label: "ACCENT LINE:", value: "PHOTOLUMINESCENT VOLT PIGMENT" },
  { label: "TOTAL MASS:", value: "480 GRAMS (SINGLE SHOE // US 10)" },
  { label: "CONTAINMENT:", value: "VACUUM-SEALED MIL-SPEC FOIL SLEEVE" },
];

export interface RelatedProduct {
  id: string;
  name: string;
  specimen: string;
  priceUSD: number;
  priceETH: string;
  image: string;
  imageUrl: string;
  technicalBullets: string[];
}

export const relatedProducts: RelatedProduct[] = [
  {
    id: "slide-tch",
    name: "SLIDE-TCH [TACTICAL SLIDE]",
    specimen: "SPECIMEN 02",
    priceUSD: 220,
    priceETH: "0.08 ETH",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMxDwu6mnEXK3rCFFdlFM1EmHYSvrFypFO8VIbshqo32oNueZR6g0-DeQhsWGW86cpm7GHDZmJa812fmVLy4MvP7mOZK8jtRVwb5mUC6fJf_XUn1jMVDylchlnfPC2I5a4a2VWOCunyAP-ElQMoZxDZXVKSRx_pcqHaRcwn6q06ANIYn-RPywe4YJv7sAQw7VMoE1ASTEKVNWhhQ5ufB_NpSHIa61qf2OrdjaVdNhcuVjTalLXSQkFAA",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMxDwu6mnEXK3rCFFdlFM1EmHYSvrFypFO8VIbshqo32oNueZR6g0-DeQhsWGW86cpm7GHDZmJa812fmVLy4MvP7mOZK8jtRVwb5mUC6fJf_XUn1jMVDylchlnfPC2I5a4a2VWOCunyAP-ElQMoZxDZXVKSRx_pcqHaRcwn6q06ANIYn-RPywe4YJv7sAQw7VMoE1ASTEKVNWhhQ5ufB_NpSHIa61qf2OrdjaVdNhcuVjTalLXSQkFAA",
    technicalBullets: [
      "CHASSIS: CARBON COMPOSITE",
      "STRAP: INDUSTRIAL VOLT NYLON",
      "LUG: VIBRAM MEGAGRIP",
      "STATUS: LOW STOCK (14 UNITS)",
    ],
  },
  {
    id: "exokinetic-boot",
    name: "EXOKINETIC BOOT [HIGH-TOP]",
    specimen: "SPECIMEN 03",
    priceUSD: 540,
    priceETH: "0.20 ETH",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgj0nuC7hd5TFDRvRKNz4ZVh9vFTn3jf5kvK1cJz7f1IMhFZNNg9zW4GXU2_fEm8lE1Y1S93N3fzn_V3DlF7bFzaEPRhi03TFLtoYaspHPCsyYrk6V9V96hg-fMeoIY3bGdL-M_Bdet8KB_IFvVkcUlsdXM9CkjBi_m0cn8e8_rdGkKohhJ48xg3C0EUoXpTF7eYAGJ_vGKFw90rULvJaLBTOAAPETHvksjdQPunpfdrbJcHenYunQwQ",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgj0nuC7hd5TFDRvRKNz4ZVh9vFTn3jf5kvK1cJz7f1IMhFZNNg9zW4GXU2_fEm8lE1Y1S93N3fzn_V3DlF7bFzaEPRhi03TFLtoYaspHPCsyYrk6V9V96hg-fMeoIY3bGdL-M_Bdet8KB_IFvVkcUlsdXM9CkjBi_m0cn8e8_rdGkKohhJ48xg3C0EUoXpTF7eYAGJ_vGKFw90rULvJaLBTOAAPETHvksjdQPunpfdrbJcHenYunQwQ",
    technicalBullets: [
      "CHASSIS: BALLISTIC CORDURA",
      "HARNESS: VOLT TENSION COBRA",
      "SOLE: ARMORED 9-LUG",
      "STATUS: VAULT LOCKED [T-MINUS 48H]",
    ],
  },
  {
    id: "modular-chest-rig",
    name: "MODULAR CHEST RIG [SLING]",
    specimen: "SPECIMEN 04",
    priceUSD: 190,
    priceETH: "0.07 ETH",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGNrIOMfr4YCtPEp0je8vazYdeR4erKNNBw9-CfBQdJhtf9gPOzHa5-VJ7j3IQbYbf3B8-Xk1q8AVpMJGMiuj0unLhDNTMvYEKX5CDEq-XF9SaRq2-BLjA9wg0OYFHBho2HpGAkQ6nKdPc0U7l--tl11kL3u2IA0pAR0VUVMMc6qG1Htasr72E0jzy0WQ6acTnCDABYoRU2tIPB64GfjBZo3xANnZNFX1OgwykVMgBg-igL9lROHpjpA",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGNrIOMfr4YCtPEp0je8vazYdeR4erKNNBw9-CfBQdJhtf9gPOzHa5-VJ7j3IQbYbf3B8-Xk1q8AVpMJGMiuj0unLhDNTMvYEKX5CDEq-XF9SaRq2-BLjA9wg0OYFHBho2HpGAkQ6nKdPc0U7l--tl11kL3u2IA0pAR0VUVMMc6qG1Htasr72E0jzy0WQ6acTnCDABYoRU2tIPB64GfjBZo3xANnZNFX1OgwykVMgBg-igL9lROHpjpA",
    technicalBullets: [
      "MATERIAL: 1000D NYLON",
      "HARDWARE: AUSTRIALPIN COBRA",
      "ACCENTS: VOLT CORD LOCKS",
      "STATUS: 38 IN VAULT",
    ],
  },
];

export interface TelemetryRow {
  label: string;
  value: string;
}

export const systemDiagnostics: TelemetryRow[] = [
  { label: "NODE STATUS", value: "SYNCHRONIZED" },
  { label: "CONSENSUS", value: "POS_FINALITY" },
  { label: "SMART CONTRACT", value: "VERIFIED_ERC721" },
  { label: "CIRCUIT BREAKER", value: "ARMED" },
];

export const gasTelemetry: TelemetryRow[] = [
  { label: "BASE FEE", value: "18.42 GWEI" },
  { label: "PRIORITY TIP", value: "2.10 GWEI" },
  { label: "ALLOCATION POOL", value: "482 / 500 REMAIN" },
  { label: "PURGE RATE", value: "0.04/SEC" },
];

export const authenticityHash = "0x7F2A...C394";
