export type Discipline = "3d-motion" | "cinematography" | "editorial-vfx" | "art-direction";

export type RosterRole = {
  id: string;
  discipline: Discipline;
  title: string;
  campaign: string;
  status: string;
  compensation: string;
  timeline: string;
  requirement: string;
  deliverable: string;
  tools: string[];
  imageUrl: string;
  imageAlt: string;
};

export const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBHtvGL-FMfWT92w0IhR9thkiq8WJmbXt6MWdQ9nzE0BK-sWi0hbHXZJ53H4kmp3h41adaxWqhDYeW7BgwczP3z22S73iuYVYnn4r3rucVrbdOnwovSQw05iQycadGbJCUf1LJ8u7ZdlZugRvoWhfzq9keBfYCX43M5zcTAAVdFpmjQPDnjJEYXSpc7vmeh9AF-lwv_P3ZN76bSgnsChvkKg1MLEvQxAUbzPTAfwFmkvGsi0R-MN7QqQg";

const imageA = "https://lh3.googleusercontent.com/aida-public/AB6AXuBQOHpQjPh_xBteLGkv-M5SGdGpZCwBU3CDW4Zrn_XTlo8aAS4RabZswE3SiTRtuHNCZM_d1LfRC243MT4V3D_FrN8V3MRa8pOO97DtUM1Bf0LNKUb3XbWhk32j4BPaz4yYeTvwgW6FkzgXP84cvN-pd52Mtm3ejFPO8HcQ6MWEKiSmT18Vj-w4kWx6hr1yNlxOY4cCRGPb8fTofgxITd2D3TXVZVanqcYeYwqzVl8apbIUlhAwCttJSw";
const imageB = "https://lh3.googleusercontent.com/aida-public/AB6AXuAV6XHjyHFwP7PbSm1METZhboDOQGxk3u6UA6zapyvCy8hkRr-XQVNrzwIzW0suBKmOj1EwC7c04e7-rNCuz6Nn7yCxgyIQufEPzC8_KPjU5-rnbcE_AFiIWFTZz7qG67vZCHlnv8QD11VxXGKcHUSm_2l9e5JBBS2y4XBiSsDXiSjZ0qyL33fRs1ZWc8ATnCJ1fntD6tRfe_PyswWnEFLREywGNOeMlGIy6J7mLkMliuje7K1v10kw";
const imageC = "https://lh3.googleusercontent.com/aida-public/AB6AXuCVMrVk-_2j3Ow3zYD-kyu7iMUGmYbvTplxyQa56XxLkBwhqv-9R_OvxLMA5nXHFiNyeiQfLk1iWaX0hXwAqE4sIZtoL24MFEA59bPbufbWPlzF0OFJHRisrexEk6j3bZ5gNCnqtI5T9zi0un6BJncb3iR4vf2bX46Whn_CApgvS3k7EwWD3IJ4uhWBy_UR4mVRs8ayRS7u5r1vNlBubqOqgPBh4OrRTUOJXBzsKeQdezsS1KI9IQFPfw";
const imageD = "https://lh3.googleusercontent.com/aida-public/AB6AXuC6L-jwEHBdBhd-uUKO3qSErIlbBoQXdBJFWk6Jn61fNhFQvGcYhLifUWfVfz6wzIarA5NJXrkTLiQEIRSFtViNEPzDyMbGSFAZ1MdvTlmLfbvtNAIIQlwXYMJBDvayfJjePx7LrwtVePh824Xm4fc0yIo-C2d9dV46BlVnTBJfyWMJ7pd_4E0Khxbji2mRHbsJG01cftcgnqs0AW399YGXDwdfFYdr_60V01cxT3fibThWfUJFHTeRMg";

export const roles: RosterRole[] = [
  { id: "role-01", discipline: "3d-motion", title: "Lead 3D Motion Designer", campaign: "Meta Global Brand Campaign", status: "Immediate Booking", compensation: "$1,100 - $1,350 / day", timeline: "Five-week remote sprint", requirement: "3D social broadcast package", deliverable: "3D social broadcast package", tools: ["Cinema 4D", "Octane / Redshift", "After Effects", "Houdini Basics"], imageUrl: imageA, imageAlt: "Abstract 3D motion design workstation" },
  { id: "role-02", discipline: "cinematography", title: "Director of Photography", campaign: "Luxury Apparel FW25", status: "Shoot: May 12-16", compensation: "$2,400 / day (Union / Non-Union)", timeline: "ARRI 35 + Anamorphic", requirement: "Alexa Mini LF / Cooke Anamorphic", deliverable: "Fashion editorial film", tools: ["Alexa Mini LF", "Cooke Anamorphic", "Fashion Editorial"], imageUrl: heroImageUrl, imageAlt: "Cinematographer on a fashion set" },
  { id: "role-03", discipline: "editorial-vfx", title: "Automotive Colorist & Finisher", campaign: "EV Global Launch Spot", status: "Remote Suite", compensation: "$1,200 / day", timeline: "Calibrated Barco / Flanders", requirement: "Color-managed finishing workflow", deliverable: "HDR master and social cutdowns", tools: ["DaVinci Resolve", "ACES", "HDR10+", "Dolby Vision"], imageUrl: imageB, imageAlt: "Color grading suite with automotive footage" },
  { id: "role-04", discipline: "editorial-vfx", title: "Lead VFX & Flame Artist", campaign: "Sci-Fi Streaming Teaser", status: "8-week shoot + post", compensation: "$1,450 / day", timeline: "Compositing lead", requirement: "Flame and Nuke pipeline", deliverable: "Hero VFX shots and cleanup", tools: ["Autodesk Flame", "Nuke Studio", "Beauty Retouch", "De-noise Pipeline"], imageUrl: imageC, imageAlt: "VFX artist working on a cinematic shot" },
  { id: "role-05", discipline: "art-direction", title: "Commercial Video Director", campaign: "High-Growth DTC Ad Blitz", status: "Director Revision Cut", compensation: "$28,000 campaign flat", timeline: "Three main spots", requirement: "Talent casting and treatment", deliverable: "3 main spots + 18 cutdowns", tools: ["Treatment Architecture", "Talent Casting", "Sound Design"], imageUrl: imageD, imageAlt: "Commercial video director on set" },
  { id: "role-06", discipline: "3d-motion", title: "Houdini FX Simulation Artist", campaign: "Sonic Branding Teaser", status: "Retainer / Sprints", compensation: "$1,250 / day", timeline: "Four-week remote pass", requirement: "Procedural simulation pipeline", deliverable: "Fluid and particle simulations", tools: ["SideFX Houdini", "Solaris / USD", "Redshift GPU Farm"], imageUrl: imageA, imageAlt: "Houdini simulation artwork on a production monitor" },
  { id: "role-07", discipline: "editorial-vfx", title: "Senior Sound Designer & Mixer", campaign: "Commercial Sound Design", status: "8-month retainer", compensation: "$950 / day", timeline: "EBU R128 / CALM Act", requirement: "Broadcast loudness compliance", deliverable: "Stereo and Atmos mixes", tools: ["Pro Tools Ultimate", "Ableton Live", "Dolby Atmos"], imageUrl: imageC, imageAlt: "Sound designer mixing audio in a dark studio" },
  { id: "role-08", discipline: "3d-motion", title: "Creative Technologist & AI Specialist", campaign: "Innovation Lab // KROMA-X", status: "Experimental Tier", compensation: "$1,300 / day", timeline: "Generative latent workflows", requirement: "Diffusion plus live-action ingest", deliverable: "Creative technology prototypes", tools: ["ComfyUI", "Unreal Engine 5.4", "ControlNet", "Python / PyTorch"], imageUrl: imageD, imageAlt: "Creative technologist working with generative visual tools" },
];

export const disciplines = [
  { id: "all", label: "All Disciplines" },
  { id: "3d-motion", label: "3D & Motion" },
  { id: "cinematography", label: "Cinematography & Lighting" },
  { id: "editorial-vfx", label: "Editorial & VFX" },
  { id: "art-direction", label: "Art & Creative Direction" },
] as const;

export const metrics = [
  { value: "98.4%", label: "Creative Retention" },
  { value: "48 HRS", label: "Avg Reel Review & Contract Turnaround" },
  { value: "14 CANNES", label: "Lions & D&AD Awards (2024-25)" },
  { value: "$12.4M", label: "Total Disbursed to Roster Talent" },
];