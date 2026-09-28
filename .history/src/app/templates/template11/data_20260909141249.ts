export type Category = "architecture" | "philosophy" | "culture" | "cinema";

export type Article = {
  id: string;
  category: Category;
  categoryLabel: string;
  title: string;
  excerpt: string;
  byline: string;
  readTime: string;
  date: string;
  issue: string;
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  featured?: boolean;
};

export const categories: Array<{ id: string; label: string }> = [
  { id: "all", label: "All Folios (13)" },
  { id: "architecture", label: "Architecture (4)" },
  { id: "philosophy", label: "Philosophy (3)" },
  { id: "culture", label: "Culture (3)" },
  { id: "cinema", label: "Cinema (2)" },
];

export const leadArticle: Article = {
  id: "lead-01",
  category: "architecture",
  categoryLabel: "Architecture & Space",
  title: "The Architecture of Silence: Reclaiming Stillness in the Hyper-Dense Metropolis",
  excerpt: "An inquiry into spatial minimalism, acoustic isolation, and the metaphysical weight of modern urban sanctuaries. How contemporary brutalist restoration allows the fragmented consciousness to settle beneath raw timber and poured stone.",
  byline: "By Julian Vance",
  readTime: "16 min read",
  date: "Autumn Monograph",
  issue: "Issue Nº 142",
  imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  imageAlt: "Monolithic concrete brutalist chamber with a single figure seated in sunlight",
  caption: "Fig. 1.0 — Monolithic Concrete Chamber, Kyoto Prefecture. Archival Ref: GAZ-2024-88A",
  featured: true,
};

export const articles: Article[] = [
  {
    id: "art-01",
    category: "architecture",
    categoryLabel: "Architecture",
    title: "The Alpine Monasteries of Zumthor: Geometry Born from Mountain Granite",
    excerpt: "Exploring the thermal baths and cliffside sanctuaries where materiality dissolves into ritualistic calm, framing mist through sharp hand-chiseled apertures.",
    byline: "By Helena Lindqvist",
    readTime: "8 min read",
    date: "Oct 14, 2024",
    issue: "Issue 142.2",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Minimalist concrete staircase bathed in warm light",
  },
  {
    id: "art-02",
    category: "philosophy",
    categoryLabel: "Philosophy",
    title: "On the Metaphysics of Handwriting: Ink, Paper Grain, and Retained Memory",
    excerpt: "Why the cognitive drag of steel nibs dragging over heavy cotton stock preserves deliberate thought in an era of ephemeral algorithmic epigrams.",
    byline: "By Dr. Alistair Finch",
    readTime: "11 min read",
    date: "Oct 11, 2024",
    issue: "Issue 142.3",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Antique desk with inkwell, fountain pen, and handwritten manuscript",
  },
  {
    id: "art-03",
    category: "culture",
    categoryLabel: "Culture",
    title: "The Clay of Bizen: Kiln Ashes, Unvarnished Surfaces, and 800 Years of Fire",
    excerpt: "A documentary monograph into Okayama's ancient wood-firing ceramicists who allow scorched pine ash to dictate the narrative contour of vessels.",
    byline: "By Evelyn Morro",
    readTime: "14 min read",
    date: "Oct 08, 2024",
    issue: "Issue 142.4",
    imageUrl: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Raw ceramic vase on dark gallery pedestal",
  },
  {
    id: "art-04",
    category: "cinema",
    categoryLabel: "Cinema",
    title: "Sculpting the Ineffable: Tarkovsky and the Temporality of Moving Frames",
    excerpt: "Revisiting the seven-minute uncut panning shots of 'The Sacrifice' as metaphysical endurance tests against the accelerated cadence of consumer video.",
    byline: "By Soren Kjaer",
    readTime: "10 min read",
    date: "Oct 04, 2024",
    issue: "Issue 142.5",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Cinematic film still with misty landscape",
  },
  {
    id: "art-05",
    category: "architecture",
    categoryLabel: "Architecture",
    title: "Acoustic Ecology: Designing Vaults for Pure Auditory Reflection",
    excerpt: "How contemporary acoustic engineers in Oslo collaborate with timber conservators to craft spaces where whispered speech carries three hundred feet.",
    byline: "By Mia Cardone",
    readTime: "9 min read",
    date: "Sep 29, 2024",
    issue: "Issue 142.6",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Vast wooden library hall with parallel sunbeams",
  },
  {
    id: "art-06",
    category: "philosophy",
    categoryLabel: "Philosophy",
    title: "Chronometry and Consciousness: The Slowing of Interior Time",
    excerpt: "An analysis of non-linear subjective durations experienced in remote monasteries and deep-sea research stations without circadian cues.",
    byline: "By Thomas W. Ward",
    readTime: "15 min read",
    date: "Sep 25, 2024",
    issue: "Issue 142.7",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Intricate clockwork gears and pocket watch mechanism",
  },
];
