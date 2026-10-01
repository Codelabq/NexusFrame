
interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  isPro?: boolean;
  fullTemplateImage: string;
  category: string;
}

export const categories = [
  { name: 'All Templates', count: 142, isActive: true },
  { name: 'E-Commerce', count: 38 },
  { name: 'SaaS Dashboards', count: 56 },
  { name: 'Job Boards', count: 12 },
  { name: 'Real Estate', count: 24 },
];

export const templates: Template[] = [
  {
    id : "RealEstate-01",
    title: 'Modern Realty',
    description:
      'A clean and modern real estate template focused on clear property presentation, straightforward navigation, and a balanced experience for general real estate businesses.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0eT9l3PylDV1Bdb4_fnnwbsjeJ4f_tKUpWD-z5yUqyBqfvNvEdpTGCgMvE0ObQ-3LuSgMDZv9egp2FLN6Q9temdy4NMhJRtmX0238zoUBmdFn4mE40QmYRPyYrSmNcLlAoc3k7xx5dmKd7GS8zi3CWCH7dQfaOlbCFN2QON5lr6Brnx-xUvxRAAPDOX5uzVH871wiTsAyy94CaGqaa7F9Ipah6FKeJ64-C0HtDUwvz79l4AuHN8oMg',
    isPro: true,
    fullTemplateImage: '/Templates Images/RealEstate/real-estate-01.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-02",
    title: 'Urban Search',
    description:
      'A search-focused real estate template designed around property discovery, advanced filtering, and efficient browsing for users looking for specific properties.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHguPWQLlkrC6Vt2OBkCjGGSzYKX6Gz5CbQXMHibt1RyXwrTAAWCgZZtsXeQw6AqB5XV-AaCx8juUDTFKnd2LAghZn_45vgJdQ0KPLqgPhz3I8wgs2abY57y0FxBaFljI04T_r4W2d3x8xmuLzUl3D2HGdruam3PSLTN3FX_wUwBjuhEj04e1sFqG3peucCs_Y9Rqwj_mVWyMOTdaDpA8XEtFGa9BaNaJHt5bJnPIdbgjiIT34caGXlg',

    fullTemplateImage:
      '/Templates Images/RealEstate/real-estate-02.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-03",
    title: 'Boutique Estate',
    description: "An elegant and refined template designed to showcase distinctive properties through spacious layouts, strong visual presentation, and a premium editorial feel.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPPZcePZzZ639vitzG5pwXkpPGpeDNWAuQ1xptMXbUjSE0-H5LWus1Z6v8oGUgbR4XLDeVu_S4gtIw0OSGpG-wa2Gmz_r0NIeUHT8JJfoUPhQ27S1a8fcTG87HY6lBWINoHVDCadQqug_lRWhYkWH3HxNTbt8BoVQZ3wZ7QY5g1JIV13rjnnp29nEfsWsSqJQjPM4PXlhj12NqurioVFBea78m1UMadALtPxYb8qP9KuIGg5-LCaQ8rg',

    fullTemplateImage:
      '/Templates Images/RealEstate/real-estate-03.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-04",
    title: 'Black Label',
    description:
      'A bold, sophisticated template designed for high-end real estate, combining a distinctive visual identity with immersive property presentation and a premium experience.',
    image:'/Templates Images/RealEstate/real-estate-04.png',
    fullTemplateImage: "/Templates Images/RealEstate/real-estate-03.png",
    category: 'Real Estate',
  },
  {
    id : "RealEstate-05",
    title: 'Living',
    description:
      'A lifestyle-oriented real estate template that emphasizes the experience of living in a property, highlighting amenities, surroundings, and neighborhood characteristics.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxN50ilBv6szqAxmTojCis6Ryay_QRYLUy0fPvzt55gZfs6zCPHpGfU4yzFozDIuRio2Aqmpy6hP9PX9Khc0uJblCy-YjZbrKxHCX6Ty3FR8jmg_3mmZqeiXUZC36v55uAupf6E4nuKZ4U8zSXlpS94c6D4WLa-EvmuZL5XJHeCamcnUbYjCO8gFFgVZXyIAYNmXh6pDQQXGWA2JkIKaNG8Zctoon062Hx5A59QXSfiocXSMjHv6s_HA',

    fullTemplateImage:
      '/Templates Images/RealEstate/real-estate-05.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-06",
    title: 'The Developer',
    description:
      'A project-focused template designed for real estate developers, presenting developments, available units, amenities, locations, and developer information in a structured experience.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxN50ilBv6szqAxmTojCis6Ryay_QRYLUy0fPvzt55gZfs6zCPHpGfU4yzFozDIuRio2Aqmpy6hP9PX9Khc0uJblCy-YjZbrKxHCX6Ty3FR8jmg_3mmZqeiXUZC36v55uAupf6E4nuKZ4U8zSXlpS94c6D4WLa-EvmuZL5XJHeCamcnUbYjCO8gFFgVZXyIAYNmXh6pDQQXGWA2JkIKaNG8Zctoon062Hx5A59QXSfiocXSMjHv6s_HA',

    fullTemplateImage:
      '/Templates Images/RealEstate/real-estate-06.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-07",
    title: 'Map Living',
    description:
      'A location-driven real estate template centered around map-based property discovery, geographic context, and exploring properties through their surrounding areas.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxN50ilBv6szqAxmTojCis6Ryay_QRYLUy0fPvzt55gZfs6zCPHpGfU4yzFozDIuRio2Aqmpy6hP9PX9Khc0uJblCy-YjZbrKxHCX6Ty3FR8jmg_3mmZqeiXUZC36v55uAupf6E4nuKZ4U8zSXlpS94c6D4WLa-EvmuZL5XJHeCamcnUbYjCO8gFFgVZXyIAYNmXh6pDQQXGWA2JkIKaNG8Zctoon062Hx5A59QXSfiocXSMjHv6s_HA',

    fullTemplateImage:
      '/Templates Images/RealEstate/real-estate-07.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-08",
    title: 'Estate Journal',
    description:
      'A content-oriented real estate template that combines property listings with articles, guides, and editorial content related to properties, locations, and the real estate market.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxN50ilBv6szqAxmTojCis6Ryay_QRYLUy0fPvzt55gZfs6zCPHpGfU4yzFozDIuRio2Aqmpy6hP9PX9Khc0uJblCy-YjZbrKxHCX6Ty3FR8jmg_3mmZqeiXUZC36v55uAupf6E4nuKZ4U8zSXlpS94c6D4WLa-EvmuZL5XJHeCamcnUbYjCO8gFFgVZXyIAYNmXh6pDQQXGWA2JkIKaNG8Zctoon062Hx5A59QXSfiocXSMjHv6s_HA',

    fullTemplateImage:
      '/Templates Images/RealEstate/real-estate-08.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-09",
    title: 'Estate Pro',
    description:
      'A comprehensive professional real estate template combining advanced property discovery, filtering, personalization, agents, amenities, media, and other interactive capabilities.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxN50ilBv6szqAxmTojCis6Ryay_QRYLUy0fPvzt55gZfs6zCPHpGfU4yzFozDIuRio2Aqmpy6hP9PX9Khc0uJblCy-YjZbrKxHCX6Ty3FR8jmg_3mmZqeiXUZC36v55uAupf6E4nuKZ4U8zSXlpS94c6D4WLa-EvmuZL5XJHeCamcnUbYjCO8gFFgVZXyIAYNmXh6pDQQXGWA2JkIKaNG8Zctoon062Hx5A59QXSfiocXSMjHv6s_HA',

    fullTemplateImage:
      '/Templates Images/RealEstate/real-estate-09.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-10",
    title: 'Complete Estate',
    description:
      'The most feature-rich template in the collection, combining the full range of available real estate capabilities into a comprehensive experience for advanced real estate platforms.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxN50ilBv6szqAxmTojCis6Ryay_QRYLUy0fPvzt55gZfs6zCPHpGfU4yzFozDIuRio2Aqmpy6hP9PX9Khc0uJblCy-YjZbrKxHCX6Ty3FR8jmg_3mmZqeiXUZC36v55uAupf6E4nuKZ4U8zSXlpS94c6D4WLa-EvmuZL5XJHeCamcnUbYjCO8gFFgVZXyIAYNmXh6pDQQXGWA2JkIKaNG8Zctoon062Hx5A59QXSfiocXSMjHv6s_HA',

    fullTemplateImage:
      '/Templates Images/RealEstate/real-estate-10.png',
    category: 'Real Estate',
  },
];
