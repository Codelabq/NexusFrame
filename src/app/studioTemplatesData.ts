
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
    id : "1",
    title: 'Executive SaaS KPI',
    description:
      'A comprehensive overview dashboard designed for C-level executives. Features modular bento grid layouts and advanced data visualization components.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0eT9l3PylDV1Bdb4_fnnwbsjeJ4f_tKUpWD-z5yUqyBqfvNvEdpTGCgMvE0ObQ-3LuSgMDZv9egp2FLN6Q9temdy4NMhJRtmX0238zoUBmdFn4mE40QmYRPyYrSmNcLlAoc3k7xx5dmKd7GS8zi3CWCH7dQfaOlbCFN2QON5lr6Brnx-xUvxRAAPDOX5uzVH871wiTsAyy94CaGqaa7F9Ipah6FKeJ64-C0HtDUwvz79l4AuHN8oMg',
    isPro: true,
    fullTemplateImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0eT9l3PylDV1Bdb4_fnnwbsjeJ4f_tKUpWD-z5yUqyBqfvNvEdpTGCgMvE0ObQ-3LuSgMDZv9egp2FLN6Q9temdy4NMhJRtmX0238zoUBmdFn4mE40QmYRPyYrSmNcLlAoc3k7xx5dmKd7GS8zi3CWCH7dQfaOlbCFN2QON5lr6Brnx-xUvxRAAPDOX5uzVH871wiTsAyy94CaGqaa7F9Ipah6FKeJ64-C0HtDUwvz79l4AuHN8oMg',
    category: 'SaaS Dashboards',
  },
  {
    id : "2",
    title: 'Aura Commerce',
    description:
      'Minimalist headless storefront architecture optimized for performance and conversion. Includes product galleries, cart slide-outs, and checkout flows.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHguPWQLlkrC6Vt2OBkCjGGSzYKX6Gz5CbQXMHibt1RyXwrTAAWCgZZtsXeQw6AqB5XV-AaCx8juUDTFKnd2LAghZn_45vgJdQ0KPLqgPhz3I8wgs2abY57y0FxBaFljI04T_r4W2d3x8xmuLzUl3D2HGdruam3PSLTN3FX_wUwBjuhEj04e1sFqG3peucCs_Y9Rqwj_mVWyMOTdaDpA8XEtFGa9BaNaJHt5bJnPIdbgjiIT34caGXlg',

    fullTemplateImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHguPWQLlkrC6Vt2OBkCjGGSzYKX6Gz5CbQXMHibt1RyXwrTAAWCgZZtsXeQw6AqB5XV-AaCx8juUDTFKnd2LAghZn_45vgJdQ0KPLqgPhz3I8wgs2abY57y0FxBaFljI04T_r4W2d3x8xmuLzUl3D2HGdruam3PSLTN3FX_wUwBjuhEj04e1sFqG3peucCs_Y9Rqwj_mVWyMOTdaDpA8XEtFGa9BaNaJHt5bJnPIdbgjiIT34caGXlg',
    category: 'E-Commerce',
  },
  {
    id : "3",
    title: 'DevDoc Hub',
    description:
      'Technical documentation template featuring advanced MDX rendering, interactive code snippets, and automated table of contents generation.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPPZcePZzZ639vitzG5pwXkpPGpeDNWAuQ1xptMXbUjSE0-H5LWus1Z6v8oGUgbR4XLDeVu_S4gtIw0OSGpG-wa2Gmz_r0NIeUHT8JJfoUPhQ27S1a8fcTG87HY6lBWINoHVDCadQqug_lRWhYkWH3HxNTbt8BoVQZ3wZ7QY5g1JIV13rjnnp29nEfsWsSqJQjPM4PXlhj12NqurioVFBea78m1UMadALtPxYb8qP9KuIGg5-LCaQ8rg',

    fullTemplateImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHguPWQLlkrC6Vt2OBkCjGGSzYKX6Gz5CbQXMHibt1RyXwrTAAWCgZZtsXeQw6AqB5XV-AaCx8juUDTFKnd2LAghZn_45vgJdQ0KPLqgPhz3I8wgs2abY57y0FxBaFljI04T_r4W2d3x8xmuLzUl3D2HGdruam3PSLTN3FX_wUwBjuhEj04e1sFqG3peucCs_Y9Rqwj_mVWyMOTdaDpA8XEtFGa9BaNaJHt5bJnPIdbgjiIT34caGXlg',
    category: 'SaaS Dashboards',
  },
  {
    id : "4",
    title: 'Velocity Agile',
    description:
      'Sprint tracking and project management template. Features drag-and-drop Kanban boards, sprint burndown charts, and team velocity metrics.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxN50ilBv6szqAxmTojCis6Ryay_QRYLUy0fPvzt55gZfs6zCPHpGfU4yzFozDIuRio2Aqmpy6hP9PX9Khc0uJblCy-YjZbrKxHCX6Ty3FR8jmg_3mmZqeiXUZC36v55uAupf6E4nuKZ4U8zSXlpS94c6D4WLa-EvmuZL5XJHeCamcnUbYjCO8gFFgVZXyIAYNmXh6pDQQXGWA2JkIKaNG8Zctoon062Hx5A59QXSfiocXSMjHv6s_HA',

    fullTemplateImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHguPWQLlkrC6Vt2OBkCjGGSzYKX6Gz5CbQXMHibt1RyXwrTAAWCgZZtsXeQw6AqB5XV-AaCx8juUDTFKnd2LAghZn_45vgJdQ0KPLqgPhz3I8wgs2abY57y0FxBaFljI04T_r4W2d3x8xmuLzUl3D2HGdruam3PSLTN3FX_wUwBjuhEj04e1sFqG3peucCs_Y9Rqwj_mVWyMOTdaDpA8XEtFGa9BaNaJHt5bJnPIdbgjiIT34caGXlg',
    category: 'Job Boards',
  },
];
