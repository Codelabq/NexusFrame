import type { KromaRosterTemplateData } from "@/types/index";

/** Raw template content. Derived fields (disciplines) are computed in `page.tsx`. */

const imageA = "https://lh3.googleusercontent.com/aida-public/AB6AXuBQOHpQjPh_xBteLGkv-M5SGdGpZCwBU3CDW4Zrn_XTlo8aAS4RabZswE3SiTRtuHNCZM_d1LfRC243MT4V3D_FrN8V3MRa8pOO97DtUM1Bf0LNKUb3XbWhk32j4BPaz4yYeTvwgW6FkzgXP84cvN-pd52Mtm3ejFPO8HcQ6MWEKiSmT18Vj-w4kWx6hr1yNlxOY4cCRGPb8fTofgxITd2D3TXVZVanqcYeYwqzVl8apbIUlhAwCttJSw";
const imageB = "https://lh3.googleusercontent.com/aida-public/AB6AXuAV6XHjyHFwP7PbSm1METZhboDOQGxk3u6UA6zapyvCy8hkRr-XQVNrzwIzW0suBKmOj1EwC7c04e7-rNCuz6Nn7yCxgyIQufEPzC8_KPjU5-rnbcE_AFiIWFTZz7qG67vZCHlnv8QD11VxXGKcHUSm_2l9e5JBBS2y4XBiSsDXiSjZ0qyL33fRs1ZWc8ATnCJ1fntD6tRfe_PyswWnEFLREywGNOeMlGIy6J7mLkMliuje7K1v10kw";
const imageC = "https://lh3.googleusercontent.com/aida-public/AB6AXuCVMrVk-_2j3Ow3zYD-kyu7iMUGmYbvTplxyQa56XxLkBwhqv-9R_OvxLMA5nXHFiNyeiQfLk1iWaX0hXwAqE4sIZtoL24MFEA59bPbufbWPlzF0OFJHRisrexEk6j3bZ5gNCnqtI5T9zi0un6BJncb3iR4vf2bX46Whn_CApgvS3k7EwWD3IJ4uhWBy_UR4mVRs8ayRS7u5r1vNlBubqOqgPBh4OrRTUOJXBzsKeQdezsS1KI9IQFPfw";
const imageD = "https://lh3.googleusercontent.com/aida-public/AB6AXuC6L-jwEHBdBhd-uUKO3qSErIlbBoQXdBJFWk6Jn61fNhFQvGcYhLifUWfVfz6wzIarA5NJXrkTLiQEIRSFtViNEPzDyMbGSFAZ1MdvTlmLfbvtNAIIQlwXYMJBDvayfJjePx7LrwtVePh824Xm4fc0yIo-C2d9dV46BlVnTBJfyWMJ7pd_4E0Khxbji2mRHbsJG01cftcgnqs0AW399YGXDwdfFYdr_60V01cxT3fibThWfUJFHTeRMg";

export const placeholder: KromaRosterTemplateData = {
  brandName: "KROMA",

  heroImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBHtvGL-FMfWT92w0IhR9thkiq8WJmbXt6MWdQ9nzE0BK-sWi0hbHXZJ53H4kmp3h41adaxWqhDYeW7BgwczP3z22S73iuYVYnn4r3rucVrbdOnwovSQw05iQycadGbJCUf1LJ8u7ZdlZugRvoWhfzq9keBfYCX43M5zcTAAVdFpmjQPDnjJEYXSpc7vmeh9AF-lwv_P3ZN76bSgnsChvkKg1MLEvQxAUbzPTAfwFmkvGsi0R-MN7QqQg",
  heroTitle: "Join the roster",
  heroDescription:
    "Project pipeline Q2/Q3 // 8 roles open for commercial creatives, directors, VFX & 3D artists. Scale motion libraries, virtual productions, and global broadcast campaigns alongside our LA & Berlin soundstage units.",

  metrics: [
   { metricValue: "98.4%", metricLabel: "Creative Retention" },
   { metricValue: "48 HRS", metricLabel: "Avg Reel Review & Contract Turnaround" },
   { metricValue: "14 CANNES", metricLabel: "Lions & D&AD Awards (2024-25)" },
   { metricValue: "$12.4M", metricLabel: "Total Disbursed to Roster Talent" },
  ],

  drawerLabels: {
    drawerFields: [
      { drawerFieldLabel: "Full name", drawerFieldName: "name", drawerFieldType: "text", drawerFieldPlaceholder: "Ava Morgan" },
      { drawerFieldLabel: "Email", drawerFieldName: "email", drawerFieldType: "email", drawerFieldPlaceholder: "ava@studio.com" },
      { drawerFieldLabel: "Showreel URL", drawerFieldName: "reel", drawerFieldType: "url", drawerFieldPlaceholder: "https://vimeo.com/..." },
      { drawerFieldLabel: "Day rate / project rate", drawerFieldName: "rate", drawerFieldType: "text", drawerFieldPlaceholder: "" },
      { drawerFieldLabel: "Availability", drawerFieldName: "availability", drawerFieldType: "text", drawerFieldPlaceholder: "Available from June 03" },
      { drawerFieldLabel: "Primary toolchain", drawerFieldName: "toolchain", drawerFieldType: "text", drawerFieldPlaceholder: "" },
    ],
  },

  roles: [
    { roleId: "role-01", roleDiscipline: "3d-motion", roleTitle: "Lead 3D Motion Designer", roleCampaign: "Meta Global Brand Campaign", roleStatus: "Immediate Booking", roleCompensation: "$1,100 - $1,350 / day", roleTimeline: "Five-week remote sprint", roleRequirement: "3D social broadcast package", roleDeliverable: "3D social broadcast package", roleTools: ["Cinema 4D", "Octane / Redshift", "After Effects", "Houdini Basics"], roleImageUrl: imageA, roleImageAlt: "Abstract 3D motion design workstation" },
    { roleId: "role-02", roleDiscipline: "cinematography", roleTitle: "Director of Photography", roleCampaign: "Luxury Apparel FW25", roleStatus: "Shoot: May 12-16", roleCompensation: "$2,400 / day (Union / Non-Union)", roleTimeline: "ARRI 35 + Anamorphic", roleRequirement: "Alexa Mini LF / Cooke Anamorphic", roleDeliverable: "Fashion editorial film", roleTools: ["Alexa Mini LF", "Cooke Anamorphic", "Fashion Editorial"], roleImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHtvGL-FMfWT92w0IhR9thkiq8WJmbXt6MWdQ9nzE0BK-sWi0hbHXZJ53H4kmp3h41adaxWqhDYeW7BgwczP3z22S73iuYVYnn4r3rucVrbdOnwovSQw05iQycadGbJCUf1LJ8u7ZdlZugRvoWhfzq9keBfYCX43M5zcTAAVdFpmjQPDnjJEYXSpc7vmeh9AF-lwv_P3ZN76bSgnsChvkKg1MLEvQxAUbzPTAfwFmkvGsi0R-MN7QqQg", roleImageAlt: "Cinematographer on a fashion set" },
    { roleId: "role-03", roleDiscipline: "editorial-vfx", roleTitle: "Automotive Colorist & Finisher", roleCampaign: "EV Global Launch Spot", roleStatus: "Remote Suite", roleCompensation: "$1,200 / day", roleTimeline: "Calibrated Barco / Flanders", roleRequirement: "Color-managed finishing workflow", roleDeliverable: "HDR master and social cutdowns", roleTools: ["DaVinci Resolve", "ACES", "HDR10+", "Dolby Vision"], roleImageUrl: imageB, roleImageAlt: "Color grading suite with automotive footage" },
    { roleId: "role-04", roleDiscipline: "editorial-vfx", roleTitle: "Lead VFX & Flame Artist", roleCampaign: "Sci-Fi Streaming Teaser", roleStatus: "8-week shoot + post", roleCompensation: "$1,450 / day", roleTimeline: "Compositing lead", roleRequirement: "Flame and Nuke pipeline", roleDeliverable: "Hero VFX shots and cleanup", roleTools: ["Autodesk Flame", "Nuke Studio", "Beauty Retouch", "De-noise Pipeline"], roleImageUrl: imageC, roleImageAlt: "VFX artist working on a cinematic shot" },
    { roleId: "role-05", roleDiscipline: "art-direction", roleTitle: "Commercial Video Director", roleCampaign: "High-Growth DTC Ad Blitz", roleStatus: "Director Revision Cut", roleCompensation: "$28,000 campaign flat", roleTimeline: "Three main spots", roleRequirement: "Talent casting and treatment", roleDeliverable: "3 main spots + 18 cutdowns", roleTools: ["Treatment Architecture", "Talent Casting", "Sound Design"], roleImageUrl: imageD, roleImageAlt: "Commercial video director on set" },
    { roleId: "role-06", roleDiscipline: "3d-motion", roleTitle: "Houdini FX Simulation Artist", roleCampaign: "Sonic Branding Teaser", roleStatus: "Retainer / Sprints", roleCompensation: "$1,250 / day", roleTimeline: "Four-week remote pass", roleRequirement: "Procedural simulation pipeline", roleDeliverable: "Fluid and particle simulations", roleTools: ["SideFX Houdini", "Solaris / USD", "Redshift GPU Farm"], roleImageUrl: imageA, roleImageAlt: "Houdini simulation artwork on a production monitor" },
    { roleId: "role-07", roleDiscipline: "editorial-vfx", roleTitle: "Senior Sound Designer & Mixer", roleCampaign: "Commercial Sound Design", roleStatus: "8-month retainer", roleCompensation: "$950 / day", roleTimeline: "EBU R128 / CALM Act", roleRequirement: "Broadcast loudness compliance", roleDeliverable: "Stereo and Atmos mixes", roleTools: ["Pro Tools Ultimate", "Ableton Live", "Dolby Atmos"], roleImageUrl: imageC, roleImageAlt: "Sound designer mixing audio in a dark studio" },
    { roleId: "role-08", roleDiscipline: "3d-motion", roleTitle: "Creative Technologist & AI Specialist", roleCampaign: "Innovation Lab // KROMA-X", roleStatus: "Experimental Tier", roleCompensation: "$1,300 / day", roleTimeline: "Generative latent workflows", roleRequirement: "Diffusion plus live-action ingest", roleDeliverable: "Creative technology prototypes", roleTools: ["ComfyUI", "Unreal Engine 5.4", "ControlNet", "Python / PyTorch"], roleImageUrl: imageD, roleImageAlt: "Creative technologist working with generative visual tools" },
  ],
};
