import {Search, User, ShoppingBag, Heart } from 'lucide-react'

interface NavbarProps {
  cartCount: number;
}

export default function Navbar({ cartCount }: NavbarProps) {
  const navLinks = [
    { label: "Editions", href: "#", active: true },
    { label: "Objects", href: "#" },
    { label: "Apparel", href: "#" },
    { label: "Archive", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff]/90 backdrop-blur-md">
      <div className="w-full bg-[#ffffff] py-[0.25rem] text-center border-b border-[#eeeeee]">
        <p className="font-['Inter'] text-[11px] tracking-[0.2em] uppercase text-[#444748]">
          Complimentary global delivery on archival curation orders
        </p>
      </div>
      <div className="h-[5rem] w-full px-[1.25rem] lg:px-[4rem] flex items-center justify-between">
        <div className="flex items-center gap-[1.5rem]">
          <span className="font-['Playfair_Display'] text-[22px] leading-[30px] text-[#000000] tracking-tight hidden sm:inline-block">
            L&apos;ATELIER ÉPURE
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-[2.5rem]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`font-['Inter'] text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                link.active
                  ? "underline underline-offset-8 decoration-1 decoration-[#000000] text-[#000000]"
                  : "text-[#444748] hover:text-[#000000]"
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-[1.5rem]">
          <button className="text-[#444748] hover:text-[#000000] transition-colors duration-300 flex items-center gap-[0.25rem]">
            <span className="material-symbols-outlined text-[20px]">  <Search/></span>
            <span className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase hidden xl:inline">
            
            </span>
          </button>
          <a
            className="text-[#444748] hover:text-[#000000] transition-colors duration-300 flex items-center gap-[0.25rem]"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]"> <Heart/></span>
            <span className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase hidden xl:inline">
             
            </span>
          </a>
          <a
            className="text-[#444748] hover:text-[#000000] transition-colors duration-300 flex items-center gap-[0.25rem]"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]"> <ShoppingBag/> </span>
            <span className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase">
              Bag ({cartCount})
            </span>
          </a>
          <div className="w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#ffffff] text-[18px]"> <User/></span>
          </div>
        </div>
      </div>
    </header>
  );
}
