"use client";

import { useState } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ToastNotification from "./components/ToastNotification";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

interface Product {
  title: string;
  price: string;
  subtitle: string;
  category: string;
  primaryImage: string;
  hoverImage: string;
  badgeText?: string;
}

const products: Product[] = [
  {
    title: "No. 04 Sculpted Travertine Vessel",
    price: "$680",
    subtitle: "Honed Roman Travertine · Hand-Chiseled",
    category: "Sculptural Objects",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
    badgeText: "New",
  },
  {
    title: "L'Écrin Structured Calfskin Tote",
    price: "$1,450",
    subtitle: "Full-Grain French Calfskin · Raw Cut Edges",
    category: "Leathercraft",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0oc7FoHdW2BRYxhsuV7SYL1wIQ_z0ttBMlkm8yIfzqKRRVt38Yv0P5YR0PJebdyO8L5qoRak6JSXstHd_nW0ocPCEBOjVVhtSXHFCHJgbl7-sN3FCWZO6UUcMlOXY_eiOVXR0H8jRCKmwBThptVqaxZKWy_dOu7_vzd0w5obU-cKaAds4gKnaZPK51VW2zL6WG9wPDy-8Ldx5DF5BHzoOvbouj-YuVoSnGQk1meQ1Afpren7vkJSH",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqoizW-271-FT7zQ_siMMEH8RHprl2oUKg4fxJL_rYPvIWYx7mtOZBINpsJLNqQOGMja8GJuaKzVdrt2XH9tX_60tHdD2WyCifY9J5LsjPKONNRzSj7RmgSR4OJx9DOPvtXgC3H-9r7o9lhlthqcmXdM09dtmMZi4yiC63lxGxBtnZOD8pEs0aHwUE7JeqgqhGzZkDROUIGqAHvsJFK9Eh9bJDaD44zkSdVOGBGAjO4PFS3sIZX2J",
  },
  {
    title: "Brutalist Cast Bronze Candlestick",
    price: "$420",
    subtitle: "Solid Cast Bronze · Lost-Wax Casting Method",
    category: "Sculptural Objects",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD0MaTe8Tc5LyN3MJ5HzvtDZrfCxjBZE62opGqr1ALoacGUMA0SNtiiZfvU2f0ZniE4op-xrTsLUAZHG1n3781YqGBnoMyrmY78mYlFf4Y6lEXPyGV_hbNw8nrPEcHI_Lhm7k0ThWBXnoROqaWvEwtA4aH4loDjbHI6d8FA7R87TPArr6E2a2ZdsJqya-UzJUCGDsxfGPmpUfskYGl5Jb5n8uu-g5DUeFs05wJQjGy029zXbhnatqd",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBid91gwrpRdg0KLhZ7GmoELGlGrzakUaxesXm41x5rPJeJn2RLUT35R5WQ3cYCmvzt_ze794F4GhO-n9Kdl_VudCpUv7BDEvkz_MXCzZcf_jOVqU_bWT3XH61vCxDt2mIfJ8KDQ8zxe5wx1QeRmvTCe0lCk8TzG7MVFTgcMwDZ-M2_EmGWIVHXPu7ggHr4Pn-qeAvFF-sh2rLF69rcl5d6siJHQZNjrPtS3LUuFa6SJdmsuyHIbF2t",
    badgeText: "Limited",
  },
  {
    title: "Raw Silk Oversized Atelier Coat",
    price: "$1,280",
    subtitle: "100% Unbleached Tussah Silk · Horn Buttons",
    category: "Ready-to-Wear",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo6RouG3MliHxD3_sdc_t-MGkUtWqpoGj3DfXX017EEIR2QMHp4pStzLtWaSwY5Gvth1TcOUJC632k-RvgGP6blt_XtmubX6ENtjCOCCVnBZH89t_vDk_fAfzVWCxr63DFD2cQH5FagGDYiGKpR1-6M03_sUSgf7l7XLIk-ZhirbV5WYjscM6lWqv1-SoZodTLDknfNIY7S6fO0mSbOZeb0XSV2uM1G8DW-rwZl9WejUZ4YN41eRXg",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVskC8BHkcVZbXbP370X3yBwMrVEw3CodyJXxL2ZVStAjPN1TRsBHy_n4rfWsuF64ctJQtGCMxZbCXLcQzxGskORJyPjHQwZ3RHu7R8caf3PRkPWRVFWDzWOW1177jeevffnxJMtze9o8p5wSmc07L1xIPn_77sd4MV31_1m0kSxMbil5cxCR-7uwrULCfy-8fNiFVceCWawPagOFj1AhyrmkpxStWMTGq5Yyv927pKx76XGXRK0pG",
  },
  {
    title: "Obsidian & Smoked Glass Carafe",
    price: "$340",
    subtitle: "Mouth-Blown Charcoal Glass · Obsidian Stopper",
    category: "Sculptural Objects",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
 },
  {
    title: "Hand-Forged Iron Table Lamp",
    price: "$890",
    subtitle: "Blackened Iron · Linen Drum Shade",
    category: "Sculptural Objects",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
  },
  {
    title: "Vegetable-Tanned Leather Journal",
    price: "$195",
    subtitle: "Italian Vachetta Leather · Hand-Stitched",
    category: "Leathercraft",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
    badgeText: "Archive",
  },
  {
    title: "Merino Wool Cocoon Cardigan",
    price: "$580",
    subtitle: "100% Extra-Fine Merino · Unlined",
    category: "Ready-to-Wear",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
 },
  {
    title: "Carved White Marble Bookends",
    price: "$520",
    subtitle: "Carrara Marble · Polished Finish",
    category: "Sculptural Objects",
    primaryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe1H11RiXM_sYKme23A7VaGy66mIoHm4dkofpYbT9TQH1TD91hvQfL7U8dBu3TJGvviMAlS24ZCaUEZ64gbkdsFa3Sf6JA46DMoQPwU0514euoQmMxiXhtSOCLyVliZOfVtgBILbV0OIOJfhuo_w1DFWOhl024mfU8QQ29fEnqKpGEDrTgZXotn2P2RsOPswggd-p11HPaT-ovvmZ7SnaYrY-tet5I6H6ObFD2l1vBLiTnof4HnlbS",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdXivzsapgFLaF4ad3xIafkGCVcYOttJnTv4bOIITZa2k5zcgZfMyXxP7CaPRypFKBB6CsqwyPTu8nI_3ldpA5dJTl7U0Gri5gHwCv6ExuYOZK37QfdrkyAjTbcjsm1hUQlClE8g2o2Nwwe-PNQ2gAat8ZHKEosOMcD7Jx27V98EXFTAhmWLAy-yilcpZ6evQiOwqV5a2a0ESrhIgqU5-O-3ETIwHGEKLqHOUw32XCdm7AVRH2rth-",
  },
];

const categories = [
  "All Products",
  "Sculptural Objects",
  "Leathercraft",
  "Ready-to-Wear",
];

export default function Template2Page() {
  const [cartCount, setCartCount] = useState(0);
  const [toastMsg, setToastMsg] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Products");

  const handleQuickAdd = (title: string) => {
    setCartCount((prev) => prev + 1);
    setToastMsg(`${title} added to acquisition bag`);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className={`bg-[#ffffff] text-[#1a1c1c] min-h-screen ${inter.className} ${playfair.className}`}>
      <Navbar cartCount={cartCount} />
      <ToastNotification isVisible={isToastVisible} message={toastMsg} />
      <main className="w-full pt-[5rem]">
        <header className="w-full px-[1.25rem] lg:px-[4rem] pt-[4rem] pb-[2rem]">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-[2rem] gap-[1.5rem]">
            <div>
              <span className="font-['Inter'] text-[11px] tracking-[0.25em] uppercase text-[#5e5e5e] block mb-[0.5rem]">
                Curated Catalogue · 2025
              </span>
              <h1 className="font-['Playfair_Display'] text-[48px] leading-[56px] text-[#000000] tracking-tight font-normal">
                Editions & Artifacts
              </h1>
            </div>
            <p className="font-['Inter'] text-[12px] leading-[18px] text-[#5e5e5e] max-w-[20rem]">
              A collection of sculptural objects, leathercraft, and ready-to-wear pieces.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-[1.5rem] gap-y-[0.5rem] pt-[1.5rem] border-t border-[#eeeeee]">
            {categories.map((category) => (
              <button
                key={category}
                className={`pb-[0.25rem] font-['Inter'] text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "border-b border-[#000000] text-[#000000]"
                    : "border-transparent text-[#5e5e5e] hover:text-[#000000]"
                }`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </header>
        <section className="w-full px-[1.25rem] lg:px-[4rem] pb-[6rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[3rem] lg:gap-x-[4rem] gap-y-[4rem] lg:gap-y-[5rem]">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                price={product.price}
                subtitle={product.subtitle}
                category={product.category}
                primaryImage={product.primaryImage}
                hoverImage={product.hoverImage}
                badgeText={product.badgeText}
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
