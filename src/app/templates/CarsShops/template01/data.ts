import type { Content, Vehicle } from "./types";

/* -------------------------------------------------------------------------- */
/*  Primary source of truth                                                    */
/* -------------------------------------------------------------------------- */

const vehicles: Vehicle[] = [
  {
    vehicleId: "bmw-m340i",
    vehicleYear: 2023,
    vehicleName: "2023 BMW M340i xDrive Sedan",
    vehicleMake: "bmw",
    vehicleModelKey: "m340i",
    vehicleBodyStyle: "sedan",
    vehicleMileage: 18450,
    vehiclePrice: 44950,
    vehicleStock: "AP-9042",
    vehicleVin: "WBA5R7C09P...8921",
    vehicleImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlNAKMF4DtALltL9YVxT4rnzuDAtGWiv_PU0hoEFPPpzd0P9Z7XEd8wWToqyvhcD02ExPZhQkKFnJCpEZSFgXZZ8tcgnk-pkkFI0q43zPuaiLhlWGj9zo87WoaConbE9d8BNKQZMzwMu5qPufMPb3Chcs0Ln3xE0EXhj8tZfyR7XnGqxmg2gNdEgtgD0tvpt-4q8aFThaU0CVpHeZiM7arsq9QyHVN5kXIFPJjT7DV5N0ILdaN3c0y",
    vehicleImageAlt:
      "Mineral White Metallic 2023 BMW M340i xDrive sedan parked in a sleek modern architectural pavilion with dramatic low angle natural sunlight.",
    vehicleBadge: {
      vehicleBadgeText: "2023 • Certified Pre-Owned",
      vehicleBadgeIcon: "BadgeCheck",
      vehicleBadgeTone: "primary",
    },
    vehicleFloorBadge: "150-Pt Inspected • Showroom Floor",
    vehicleSpecs: [
      { vehicleSpecLabel: "Mileage", vehicleSpecValue: "18,450 mi" },
      { vehicleSpecLabel: "Engine", vehicleSpecValue: "3.0L Turbo I6" },
      { vehicleSpecLabel: "Gearbox", vehicleSpecValue: "8-Spd Sport" },
      { vehicleSpecLabel: "Drivetrain", vehicleSpecValue: "xDrive AWD" },
    ],
    vehicleMonthly: "Est. $685/mo",
    vehicleDownPayment: "$5,000 down",
    vehicleExterior: "Mineral White Metallic",
    vehicleDescription:
      "A 382-horsepower sport sedan with adaptive M suspension, variable sport steering and a factory CPE-certified service history. Fully reconditioned across 150 inspection points with zero reconditioning markup.",
    vehicleFeatures: [
      "M Sport Differential",
      "Adaptive M Suspension",
      "Harman Kardon Surround",
      "Heated Front Sport Seats",
      "Wireless Charging",
      "Professional Driver Assistance",
    ],
  },
  {
    vehicleId: "porsche-macan-gts",
    vehicleYear: 2022,
    vehicleName: "2022 Porsche Macan GTS AWD",
    vehicleMake: "porsche",
    vehicleModelKey: "macan",
    vehicleBodyStyle: "suv",
    vehicleMileage: 24120,
    vehiclePrice: 68400,
    vehicleStock: "AP-8841",
    vehicleVin: "WP1AA2A54N...3104",
    vehicleImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ-I4tiotodIpBS3mswfvH9y1bafKpO1ACoBOWVSHrRIvb5IZJj1ivZbdXhqIDGmBh5ozzaBCDkcqCRIx4OXsCf20GwsKQX233CBWiVnb1HLV2WFe7CbkSn9B1Sd37kjh4YtFkZaBNxvVJs-fPWvqlX88ZLPAlVZBKcG-Wu1LE38zkIq_d8HbKft-aD3JN6VB_ES0-hBmaEg27KhgI6pYaG7SsmMTANA0zMSvte0Ck0owrbhBp9I-c",
    vehicleImageAlt:
      "Chalk Gray 2022 Porsche Macan GTS compact performance luxury SUV angled on crisp clean concrete staging pavement with matte black wheels.",
    vehicleBadge: {
      vehicleBadgeText: "2022 • 1-Owner Clean CARFAX",
      vehicleBadgeIcon: "ScrollText",
      vehicleBadgeTone: "light",
    },
    vehicleFloorBadge: "150-Pt Inspected • Clean History",
    vehicleSpecs: [
      { vehicleSpecLabel: "Mileage", vehicleSpecValue: "24,120 mi" },
      { vehicleSpecLabel: "Engine", vehicleSpecValue: "2.9L Twin V6" },
      { vehicleSpecLabel: "Gearbox", vehicleSpecValue: "7-Spd PDK" },
      { vehicleSpecLabel: "Drivetrain", vehicleSpecValue: "Active AWD" },
    ],
    vehicleMonthly: "Est. $1,040/mo",
    vehicleDownPayment: "$7,500 down",
    vehicleExterior: "Chalk Gray",
    vehicleDescription:
      "Porsche's 434-horsepower GTS variant with adaptive air suspension, Sport Chrono package and PTV Plus torque vectoring. Single-owner CARFAX with complete Porsche Centre service records.",
    vehicleFeatures: [
      "Adaptive Air Suspension",
      "Sport Chrono Package",
      "PTV Plus Torque Vectoring",
      "Burmester 3D Sound",
      "Panoramic Roof",
      "Lane Change Assist",
    ],
  },
  {
    vehicleId: "audi-rs5-sportback",
    vehicleYear: 2023,
    vehicleName: "2023 Audi RS5 Sportback Quattro",
    vehicleMake: "audi",
    vehicleModelKey: "rs5",
    vehicleBodyStyle: "sedan",
    vehicleMileage: 12800,
    vehiclePrice: 59900,
    vehicleStock: "AP-7734",
    vehicleVin: "WUAENAF51P...6643",
    vehicleImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA92pWpteU_GU9vXdeQKP1a26tCvwpL_Ck-3ioKQtR0xq4Zxb01GgfmwH4zNElGFZYoYOqgZrKI8VndI9N-qPRGo1X651ovC9-LlKTmj4btul5ech0DdMnZa6SJd34KDGPUImqsK7rgCG8CR4cXE9rhzYiKMXoQcka77floFF1Dj9oH4QO_antpMAWd9PZN2e43FdiMcLOWdIBlMwsNfANv5CoR5aURFIKBRNlnnjVHZwa6BKtoZOiu",
    vehicleImageAlt:
      "Nardo Gray 2023 Audi RS5 Sportback Quattro in an architectural glass dealership showroom with bronze forged alloy wheels.",
    vehicleBadge: {
      vehicleBadgeText: "2023 • Certified Pre-Owned",
      vehicleBadgeIcon: "BadgeCheck",
      vehicleBadgeTone: "primary",
    },
    vehicleFloorBadge: "150-Pt Inspected • Austin Lot",
    vehicleSpecs: [
      { vehicleSpecLabel: "Mileage", vehicleSpecValue: "12,800 mi" },
      { vehicleSpecLabel: "Engine", vehicleSpecValue: "2.9L Bi-Turbo V6" },
      { vehicleSpecLabel: "Gearbox", vehicleSpecValue: "8-Spd Tiptronic" },
      { vehicleSpecLabel: "Drivetrain", vehicleSpecValue: "Quattro AWD" },
    ],
    vehicleMonthly: "Est. $910/mo",
    vehicleDownPayment: "$6,000 down",
    vehicleExterior: "Nardo Gray",
    vehicleDescription:
      "444-horsepower RS tweaked biturbo V6 with rear sport differential and RS sport suspension plus. Exceptionally low mileage, retained factory warranty coverage and immaculate paint correction.",
    vehicleFeatures: [
      "Rear Sport Differential",
      "RS Sport Suspension Plus",
      "Virtual Cockpit Plus",
      "Bang & Olufsen 3D Audio",
      "Carbon Inlays",
      "Matrix-Design LED Headlights",
    ],
  },
  {
    vehicleId: "mercedes-amg-c43",
    vehicleYear: 2024,
    vehicleName: "2024 Mercedes-AMG C43 4MATIC",
    vehicleMake: "mercedes",
    vehicleModelKey: "c43",
    vehicleBodyStyle: "sedan",
    vehicleMileage: 9400,
    vehiclePrice: 54250,
    vehicleStock: "AP-9208",
    vehicleVin: "W1K6G8GB2R...4890",
    vehicleImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6vF9p94MU6q_z_C4jnHyL0r2qlwMYSdXOe3wyqle8GMunuB1bmThXTiFWlSE3Uv_au1OrcXTuy2tKaRC8K7PHRAkptqf8Wtn_IBownQPY2CFzWcml78DMAJcRSoGTFUyJeklBLYUKAscUey5zv3QswE7_6pxExXiNJf3PkuhV5MJ7orSaL8w_wdd4MPWSnCxH3NFngYbw-5OBBMjhTVqNkOpujCDqIZHx8b1D3MDfqTGbE9tswGHh",
    vehicleImageAlt:
      "Obsidian Black Metallic 2024 Mercedes-AMG C43 4MATIC luxury performance sedan positioned on a clean paved track straightaway at golden hour.",
    vehicleBadge: {
      vehicleBadgeText: "2024 • Low Mileage Demo",
      vehicleBadgeIcon: "Zap",
      vehicleBadgeTone: "light",
    },
    vehicleFloorBadge: "150-Pt Inspected • Factory Warranty",
    vehicleSpecs: [
      { vehicleSpecLabel: "Mileage", vehicleSpecValue: "9,400 mi" },
      { vehicleSpecLabel: "Engine", vehicleSpecValue: "2.0L Turbo MHEV" },
      { vehicleSpecLabel: "Gearbox", vehicleSpecValue: "9-Spd SPEEDSHIFT" },
      { vehicleSpecLabel: "Drivetrain", vehicleSpecValue: "4MATIC+ AWD" },
    ],
    vehicleMonthly: "Est. $825/mo",
    vehicleDownPayment: "$5,500 down",
    vehicleExterior: "Obsidian Black Metallic",
    vehicleDescription:
      "Electrified 402-horsepower four-cylinder with an F1-derived turbo and rear-axle steering. Former executive demonstrator with remaining factory warranty and full digital service book.",
    vehicleFeatures: [
      "AMG Ride Control Suspension",
      "Rear-Axle Steering",
      "MBUX Augmented Navigation",
      "Burmester 3D Surround",
      "Panoramic Glass Roof",
      "Digital Light Headlamps",
    ],
  },
  {
    vehicleId: "tesla-model-s-plaid",
    vehicleYear: 2023,
    vehicleName: "2023 Tesla Model S Plaid AWD",
    vehicleMake: "tesla",
    vehicleModelKey: "models",
    vehicleBodyStyle: "electric",
    vehicleMileage: 15200,
    vehiclePrice: 72800,
    vehicleStock: "AP-8610",
    vehicleVin: "5YJSA1E63P...1150",
    vehicleImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKjZExQxeHjv5nge7G9nIjWO_ZpkbvfP1hyHh2gCry5adVs7BZEVIDXBGJupvgfBXl3bCZCQGaxkYhZ5LILNCyBRk9bIMy97KgOnhJN-DGjbwteKQlMjV08X9PhkuQNcsZ1UBWOlVzXsK-_iCEc2t4QR_1UOY6hPNtOHtLE8DNI0phK0F25ucPxdcz-rLqoKopbLjVvME4WvQZ9HRyeIxciIR78A3265ZpnZe_DC7cq1pKYgQSriI1",
    vehicleImageAlt:
      "Deep Blue Metallic 2023 Tesla Model S Plaid luxury electric sports sedan against minimalist concrete urban loft architecture.",
    vehicleBadge: {
      vehicleBadgeText: "2023 • Tri-Motor Plaid (1,020 HP)",
      vehicleBadgeIcon: "Gauge",
      vehicleBadgeTone: "primary",
    },
    vehicleFloorBadge: "Battery Health: 99.1% • FSD Enabled",
    vehicleSpecs: [
      { vehicleSpecLabel: "Mileage", vehicleSpecValue: "15,200 mi" },
      { vehicleSpecLabel: "Powertrain", vehicleSpecValue: "Tri-Motor EV" },
      { vehicleSpecLabel: "0-60 MPH", vehicleSpecValue: "1.99s" },
      { vehicleSpecLabel: "Drivetrain", vehicleSpecValue: "Tri-Motor AWD" },
    ],
    vehicleMonthly: "Est. $1,110/mo",
    vehicleDownPayment: "$8,000 down",
    vehicleExterior: "Deep Blue Metallic",
    vehicleDescription:
      "1,020-horsepower tri-motor Plaid with a verified 99.1% battery health report, Full Self-Driving transfer and active carbon fiber decklid spoiler. Fully charge-tested and OTA updated.",
    vehicleFeatures: [
      "Full Self-Driving Capability",
      "Tri-Motor AWD",
      "Carbon Fiber Decklid Spoiler",
      "22-Speaker Audio System",
      "Glass Roof",
      "20-Inch Arachnid Wheels",
    ],
  },
  {
    vehicleId: "lexus-lc500",
    vehicleYear: 2022,
    vehicleName: "2022 Lexus LC 500 V8 Coupe",
    vehicleMake: "lexus",
    vehicleModelKey: "lc500",
    vehicleBodyStyle: "coupe",
    vehicleMileage: 21600,
    vehiclePrice: 64500,
    vehicleStock: "AP-6512",
    vehicleVin: "JTHHP5AY4N...0911",
    vehicleImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9v71n-0X7szA-LI6agmN4IarnEL49XGuxDRb49OId7XgmZ3ENoKxPeo_Yqgn1tH3h-5Y-LrtrXpTNspQMZ6yObYVqomIIGZ9ufgc8qTU0n8K7Lbd6ICU7gQLnCTkI8KCztV0e0oNTh3H4ExpU5wbAvSz37ey-ZGufKl3uQnD-akud0fxwdrmVMYmbTFbVm7chA1mV9CRED2hwOTgLVeQnSZJSCwJtSbYMDaOe_bKyyhNA6HU1Z_yt",
    vehicleImageAlt:
      "Infrared Red 2022 Lexus LC 500 V8 luxury grand touring coupe captured in pristine scenic coastal highway cliff setting.",
    vehicleBadge: {
      vehicleBadgeText: "2022 • L/Certified Warranty",
      vehicleBadgeIcon: "BadgeCheck",
      vehicleBadgeTone: "light",
    },
    vehicleFloorBadge: "161-Point Inspection Passed",
    vehicleSpecs: [
      { vehicleSpecLabel: "Mileage", vehicleSpecValue: "21,600 mi" },
      { vehicleSpecLabel: "Engine", vehicleSpecValue: "5.0L Nat-Asp V8" },
      { vehicleSpecLabel: "Gearbox", vehicleSpecValue: "10-Spd Direct" },
      { vehicleSpecLabel: "Drivetrain", vehicleSpecValue: "Rear Wheel Drive" },
    ],
    vehicleMonthly: "Est. $980/mo",
    vehicleDownPayment: "$7,000 down",
    vehicleExterior: "Infrared",
    vehicleDescription:
      "Naturally aspirated 471-horsepower V8 grand tourer with a 10-speed Direct Shift gearbox and Torsen limited-slip differential. Covered by the L/Certified unlimited-mileage limited warranty.",
    vehicleFeatures: [
      "Torsen Limited-Slip Differential",
      "Adaptive Variable Suspension",
      "Mark Levinson 13-Speaker Audio",
      "Alcantara Headliner",
      "Heated & Ventilated Seats",
      "L/Certified Unlimited-Mileage Warranty",
    ],
  },
];



export const placeholder: Content = {
  heroHeadline: "Precision-Inspected Pre-Owned & Performance Vehicles",
  heroSubheadline:
    "Direct API feed synced every 15 minutes with wholesale certification and transparent upfront pricing. No dealer markups, no hidden reconditioning fees.",

  priceOptions: [
    { optionValue: "all", optionLabel: "No Max Limit" },
    { optionValue: "45000", optionLabel: "Under $45,000" },
    { optionValue: "60000", optionLabel: "Under $60,000" },
    { optionValue: "75000", optionLabel: "Under $75,000" },
    { optionValue: "90000", optionLabel: "Under $90,000" },
  ],

  vehicles,

  defaultSavedVehicleIds: ["bmw-m340i", "porsche-macan-gts", "audi-rs5-sportback"],

  trustOverline: "The Apex Commitment",
  trustTitle: "Institutional-Grade Standards for Independent Buyers",
  trustBody:
    "Every vehicle is acquired directly through manufacturer fleet channels or private enthusiast transfers, verified through multi-point technical inspection.",

  trustPillars: [
    {
      trustPillarId: "inspection",
      trustPillarTitle: "150-Point Rigorous Inspection",
      trustPillarDescription:
        "Every pre-owned vehicle undergoes extensive mechanical, safety, onboard diagnostic, and cosmetic verification by certified master technicians.",
      trustPillarCta: "Read Inspection Protocol",
    },
    {
      trustPillarId: "financing",
      trustPillarTitle: "Transparent Tier-1 Financing",
      trustPillarDescription:
        "Direct integration with 25+ prime lenders and federal credit unions. Competitive rates starting at 4.89% APR with zero dealer markup or upfront fees.",
      trustPillarCta: "Pre-Qualify in 2 Minutes",
    },
    {
      trustPillarId: "guarantee",
      trustPillarTitle: "7-Day / 500-Mile Guarantee",
      trustPillarDescription:
        "Take the vehicle home and test it under real conditions. If you are not completely satisfied, exchange it or receive a 100% full vehicle refund.",
      trustPillarCta: "View Guarantee Terms",
    },
    {
      trustPillarId: "delivery",
      trustPillarTitle: "Enclosed Home Delivery",
      trustPillarDescription:
        "Touchless doorstep transit anywhere in the continental United States with live GPS vehicle tracking and 100% digital contract finalization.",
      trustPillarCta: "Calculate Freight Fee",
    },
  ],
};
