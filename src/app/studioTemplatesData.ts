interface Template {
  id: string;
  title: string;
  description: string;
  isPro?: boolean;
  fullTemplateImage: string;
  category: string;
}


export const templates: Template[] = [
  {
    id: "ECommerce-01",
    title: 'Nexus Digital Assets',
    description:
      'A dark cyber-luxe digital asset marketplace. Features a live stat hero, spotlight drop card, category chips and a filterable grid of shader, AI model and audio engine modules.',
     fullTemplateImage: '/templateImages/E-commerce/template_1.png',
    category: 'E-Commerce',
  },
  {
    id: "ECommerce-02",
    title: "L'Atelier Épure",
    description:
      'A minimalist luxury atelier storefront. Editorial typography, discipline filter tabs, and hover-swap product cards for sculptural objects, leathercraft and ready-to-wear.',
    fullTemplateImage: '/templateImages/E-commerce/template_2.png',
    category: 'E-Commerce',
  },
  {
    id: "ECommerce-03",
    title: 'Lumen Goods',
    description:
      'A tactile lifestyle storefront in soft pastel tones. Hero product configurator with live swatches, publication logo strip, verified testimonials and a trust benefits band.',
     fullTemplateImage: '/templateImages/E-commerce/template_3.png',
    category: 'E-Commerce',
  },
  {
    id: "ECommerce-04",
    title: 'PrimeMart Marketplace',
    description:
      'A high-density marketplace storefront. Faceted sidebar filters, list-style product rows with rating and key specs, quantity cart flyout and a full product details modal.',
     fullTemplateImage: '/templateImages/E-commerce/template_4.png',
    category: 'E-Commerce',
  },
  {
    id: "ECommerce-05",
    title: 'Kinetiq Recovery Store',
    description:
      'A high-conversion single-product drop. Full-bleed video hero with hook bullets, flash-sale countdown, finish and bundle builder, telemetry metrics, UGC reviews and comparison grid.',
    fullTemplateImage: '/templateImages/E-commerce/template_5.png',
    category: 'E-Commerce',
  },
  {
    id: "ECommerce-06",
    title: 'N-Vault Drop Terminal',
    description:
      'A brutalist web3 drop terminal. System marquee tickers, annotated product canvas, telemetry bar, size and allocation queue purchase flow with authenticity hash verification.',
     fullTemplateImage: '/templateImages/E-commerce/template_6.png',
    category: 'E-Commerce',
  },
  {
    id: "JobBoards-01",
    title: 'NexusFrame Careers Board',
    description:
      'An engineering careers board. Command-palette search, department and location filter chips, stack highlight rail, job list with slide-out role detail and application drawer.',
    fullTemplateImage: '/templateImages/Job-Boards/template_7.png',
    category: 'Job Boards',
  },
  {
    id: "JobBoards-02",
    title: 'OmniCorp Requisitions Board',
    description:
      'An enterprise ATS requisitions board. Search and location panel, faceted filter sidebar, saved roles counter, paginated requisition list and details/apply dialog.',
    fullTemplateImage: '/templateImages/Job-Boards/template_8.png',
    category: 'Job Boards',
  },
  {
    id: "JobBoards-03",
    title: 'Kroma Creative Roster',
    description:
      'A cinematic creative-roster site. Live timecode hero with sound toggle, discipline filter bar with rates, and a dark portfolio grid of open roles with an application drawer.',
    fullTemplateImage: '/templateImages/Job-Boards/template_9.png',
    category: 'Job Boards',
  },
  {
    id: "JobBoards-04",
    title: 'Prism Observability Careers',
    description:
      'A dark observability careers page. Live throughput banner, metrics bar, live telemetry canvas, role cards with discipline tabs, lifestyle gallery and an engineering codex modal.',
     fullTemplateImage: '/templateImages/Job-Boards/template_10.png',
    category: 'Job Boards',
  },
  {
    id: "JobBoards-05",
    title: 'Gazette Editorial Journal',
    description:
      'A classical editorial journal. Acoustic reading mode, broadsheet lead monograph, category-filtered dispatch feed, broadside folio promotion and a monograph article modal.',
     fullTemplateImage: '/templateImages/Articles/template_11.png',
    category: 'Articles',
  },
  {
    id: "Restaurants-01",
    title: 'Atelier & Hearth Menu',
    description:
      'A farm-to-table restaurant menu. Live POS status header, dietary filters, course-indexed dish sections, a natural wine cellar list and a pickup reservation service bar.',
      fullTemplateImage: '/templateImages/Restaurants/template_12.png',
    category: 'Restaurants',
  },
  {
    id: "Restaurants-02",
    title: 'Tokyo Street Food POS',
    description:
      'A fast-casual point-of-sale terminal. Deal-of-the-day combo promo, category and tag filter strip, product grid with stock states, a fixed cart dock and kitchen ticket toasts.',
      fullTemplateImage: '/templateImages/Restaurants/template_13.png',
    category: 'Restaurants',
  },
  {
    id: "LaptopShops-01",
    title: 'Silicon Craft Workstation Store',
    description:
      'A technical workstation e-commerce build. Faceted mega-filter bar with mileage-style ranges, spec-led product cards, a side-by-side compare matrix, cart flyout and spec modal.',
    fullTemplateImage: '/templateImages/laptop-shops/template_14.png',
    category: 'Laptop shops',
  },
  {
    id: "CarsShops-01",
    title: 'Apex Motors Inventory',
    description:
      'A certified pre-owned vehicle inventory. Range-based faceting for budget and mileage, dense vehicle cards with specs, a reservation cart and a four-pillar trust section.',
    fullTemplateImage: '/templateImages/car-shops/template_15.png',
    category: 'Cars Shops',
  },{
    id : "RealEstate-01",
    title: 'Modern Realty',
    description:
      'A clean and modern real estate template focused on clear property presentation, straightforward navigation, and a balanced experience for general real estate businesses.',
      isPro: true,
    fullTemplateImage: '/templateImages/RealEstate/real-estate-01.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-02",
    title: 'Urban Search',
    description:
      'A search-focused real estate template designed around property discovery, advanced filtering, and efficient browsing for users looking for specific properties.',

    fullTemplateImage:
      '/templateImages/RealEstate/real-estate-02.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-03",
    title: 'Boutique Estate',
    description: "An elegant and refined template designed to showcase distinctive properties through spacious layouts, strong visual presentation, and a premium editorial feel.",
    fullTemplateImage:
      '/templateImages/RealEstate/real-estate-03.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-04",
    title: 'Black Label',
    description:
      'A bold, sophisticated template designed for high-end real estate, combining a distinctive visual identity with immersive property presentation and a premium experience.',
    fullTemplateImage: "/templateImages/RealEstate/real-estate-04.png",
    category: 'Real Estate',
  },
  {
    id : "RealEstate-05",
    title: 'Living',
    description:
      'A lifestyle-oriented real estate template that emphasizes the experience of living in a property, highlighting amenities, surroundings, and neighborhood characteristics.',

    fullTemplateImage:
      '/templateImages/RealEstate/real-estate-05.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-06",
    title: 'The Developer',
    description:
      'A project-focused template designed for real estate developers, presenting developments, available units, amenities, locations, and developer information in a structured experience.',
    fullTemplateImage:
      '/templateImages/RealEstate/real-estate-06.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-07",
    title: 'Map Living',
    description:
      'A location-driven real estate template centered around map-based property discovery, geographic context, and exploring properties through their surrounding areas.',

    fullTemplateImage:
      '/templateImages/RealEstate/real-estate-07.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-08",
    title: 'Estate Journal',
    description:
      'A content-oriented real estate template that combines property listings with articles, guides, and editorial content related to properties, locations, and the real estate market.',

    fullTemplateImage:
      '/templateImages/RealEstate/real-estate-08.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-09",
    title: 'Estate Pro',
    description:
      'A comprehensive professional real estate template combining advanced property discovery, filtering, personalization, agents, amenities, media, and other interactive capabilities.',

    fullTemplateImage:
      '/templateImages/RealEstate/real-estate-09.png',
    category: 'Real Estate',
  },
  {
    id : "RealEstate-10",
    title: 'Complete Estate',
    description:
      'The most feature-rich template in the collection, combining the full range of available real estate capabilities into a comprehensive experience for advanced real estate platforms.',

    fullTemplateImage:
      '/templateImages/RealEstate/real-estate-10.png',
    category: 'Real Estate',
  }
];
