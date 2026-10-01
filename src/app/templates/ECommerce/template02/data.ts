import type { ECommerce02Data } from "./types";

/** Raw template content. Derived fields (categories) are computed in `page.tsx`. */
export const ECommerce02placeHolder: Omit<ECommerce02Data, "categories"> = {
  brandName: "L'ATELIER ÉPURE",

  heroTitle: "Editions & Artifacts",
  heroDescription:
    "A collection of sculptural objects, leathercraft, and ready-to-wear pieces.",


  products: [
    {
      productTitle: "No. 04 Sculpted Travertine Vessel",
      productPrice: "$680",
      productSubtitle: "Honed Roman Travertine · Hand-Chiseled",
      productCategory: "Sculptural Objects",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
      productBadgeText: "New",
    },
    {
      productTitle: "L'Écrin Structured Calfskin Tote",
      productPrice: "$1,450",
      productSubtitle: "Full-Grain French Calfskin · Raw Cut Edges",
      productCategory: "Leathercraft",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB0oc7FoHdW2BRYxhsuV7SYL1wIQ_z0ttBMlkm8yIfzqKRRVt38Yv0P5YR0PJebdyO8L5qoRak6JSXstHd_nW0ocPCEBOjVVhtSXHFCHJgbl7-sN3FCWZO6UUcMlOXY_eiOVXR0H8jRCKmwBThptVqaxZKWy_dOu7_vzd0w5obU-cKaAds4gKnaZPK51VW2zL6WG9wPDy-8Ldx5DF5BHzoOvbouj-YuVoSnGQk1meQ1Afpren7vkJSH",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqoizW-271-FT7zQ_siMMEH8RHprl2oUKg4fxJL_rYPvIWYx7mtOZBINpsJLNqQOGMja8GJuaKzVdrt2XH9tX_60tHdD2WyCifY9J5LsjPKONNRzSj7RmgSR4OJx9DOPvtXgC3H-9r7o9lhlthqcmXdM09dtmMZi4yiC63lxGxBtnZOD8pEs0aHwUE7JeqgqhGzZkDROUIGqAHvsJFK9Eh9bJDaD44zkSdVOGBGAjO4PFS3sIZX2J",
    },
    {
      productTitle: "Brutalist Cast Bronze Candlestick",
      productPrice: "$420",
      productSubtitle: "Solid Cast Bronze · Lost-Wax Casting Method",
      productCategory: "Sculptural Objects",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDD0MaTe8Tc5LyN3MJ5HzvtDZrfCxjBZE62opGqr1ALoacGUMA0SNtiiZfvU2f0ZniE4op-xrTsLUAZHG1n3781YqGBnoMyrmY78mYlFf4Y6lEXPyGV_hbNw8nrPEcHI_Lhm7k0ThWBXnoROqaWvEwtA4aH4loDjbHI6d8FA7R87TPArr6E2a2ZdsJqya-UzJUCGDsxfGPmpUfskYGl5Jb5n8uu-g5DUeFs05wJQjGy029zXbhnatqd",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBid91gwrpRdg0KLhZ7GmoELGlGrzakUaxesXm41x5rPJeJn2RLUT35R5WQ3cYCmvzt_ze794F4GhO-n9Kdl_VudCpUv7BDEvkz_MXCzZcf_jOVqU_bWT3XH61vCxDt2mIfJ8KDQ8zxe5wx1QeRmvTCe0lCk8TzG7MVFTgcMwDZ-M2_EmGWIVHXPu7ggHr4Pn-qeAvFF-sh2rLF69rcl5d6siJHQZNjrPtS3LUuFa6SJdmsuyHIbF2t",
      productBadgeText: "Limited",
    },
    {
      productTitle: "Raw Silk Oversized Atelier Coat",
      productPrice: "$1,280",
      productSubtitle: "100% Unbleached Tussah Silk · Horn Buttons",
      productCategory: "Ready-to-Wear",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBo6RouG3MliHxD3_sdc_t-MGkUtWqpoGj3DfXX017EEIR2QMHp4pStzLtWaSwY5Gvth1TcOUJC632k-RvgGP6blt_XtmubX6ENtjCOCCVnBZH89t_vDk_fAfzVWCxr63DFD2cQH5FagGDYiGKpR1-6M03_sUSgf7l7XLIk-ZhirbV5WYjscM6lWqv1-SoZodTLDknfNIY7S6fO0mSbOZeb0XSV2uM1G8DW-rwZl9WejUZ4YN41eRXg",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVskC8BHkcVZbXbP370X3yBwMrVEw3CodyJXxL2ZVStAjPN1TRsBHy_n4rfWsuF64ctJQtGCMxZbCXLcQzxGskORJyPjHQwZ3RHu7R8caf3PRkPWRVFWDzWOW1177jeevffnxJMtze9o8p5wSmc07L1xIPn_77sd4MV31_1m0kSxMbil5cxCR-7uwrULCfy-8fNiFVceCWawPagOFj1AhyrmkpxStWMTGq5Yyv927pKx76XGXRK0pG",
    },
    {
      productTitle: "Obsidian & Smoked Glass Carafe",
      productPrice: "$340",
      productSubtitle: "Mouth-Blown Charcoal Glass · Obsidian Stopper",
      productCategory: "Sculptural Objects",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
    },
    {
      productTitle: "Hand-Forged Iron Table Lamp",
      productPrice: "$890",
      productSubtitle: "Blackened Iron · Linen Drum Shade",
      productCategory: "Sculptural Objects",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
    },
    {
      productTitle: "Vegetable-Tanned Leather Journal",
      productPrice: "$195",
      productSubtitle: "Italian Vachetta Leather · Hand-Stitched",
      productCategory: "Leathercraft",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
      productBadgeText: "Archive",
    },
    {
      productTitle: "Merino Wool Cocoon Cardigan",
      productPrice: "$580",
      productSubtitle: "100% Extra-Fine Merino · Unlined",
      productCategory: "Ready-to-Wear",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
    },
    {
      productTitle: "Carved White Marble Bookends",
      productPrice: "$520",
      productSubtitle: "Carrara Marble · Polished Finish",
      productCategory: "Sculptural Objects",
      productPrimaryImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
      productHoverImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
    },
  ],
};
