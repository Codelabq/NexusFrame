import { CheckCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  cartItems: unknown[];
  onOpenCart: () => void;
}

const navLinks = [
  { label: "Overview", href: "#overview", isActive: true },
  { label: "Performance Specs", href: "#arsenal" },
  { label: "Reviews & UGC", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];


export default function Navbar({ cartItems, onOpenCart }: NavbarProps) {
  return (
    <header className="relative z-30 w-full mt-18">
      <aside className="flex w-full items-center justify-center gap-[0.5rem] overflow-hidden bg-[#0d0e13] px-[1rem] py-[0.5rem]">
        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#4edea3]" />
        <span className="truncate font-['Montserrat'] text-[12px] font-[800] uppercase tracking-[0.08em] text-[#4edea3]">
          Flash sale: 50% off unlocked from TikTok · 14 min left · free express shipping
        </span>
      </aside>

      <div className="h-[64px] w-full bg-[#0d0e13]/85 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-[1rem] px-[1rem] lg:px-[2rem]">
          <div className="flex min-w-0 items-center gap-[0.75rem]">
            <Link
              href="#overview"
              className="shrink-0 font-['Montserrat'] text-[1.125rem] font-[700] uppercase text-[#e3e1e9]"
            >
              Kinetiq
            </Link>
            <span className="hidden items-center gap-[0.25rem] rounded-[3rem] bg-[#34343a] px-[0.75rem] py-[0.25rem] font-['Inter'] text-[0.75rem] font-[600] text-[#bbcabf] sm:flex">
              <CheckCircle className="h-[14px] w-[14px] text-[#4edea3]" />
              TikTok Partner
            </span>
          </div>

          <nav className="hidden items-center gap-[0.25rem] rounded-[3rem] bg-[#1a1b21] px-[0.5rem] py-[0.25rem] lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  link.isActive
                    ? "rounded-[3rem] bg-[#10b981] px-[1rem] py-[0.5rem] font-['Inter'] text-[0.75rem] font-[800] text-[#00422b]"
                    : "rounded-[3rem] px-[1rem] py-[0.5rem] font-['Inter'] text-[0.75rem] text-[#bbcabf] transition-colors hover:text-[#e3e1e9]"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open cart with ${cartItems.length} item${cartItems.length === 1 ? "" : "s"}`}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[3rem] bg-[#1e1f25] text-[#bbcabf] transition-colors hover:text-[#e3e1e9]"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute -right-[0.25rem] -top-[0.25rem] flex h-4 w-4 items-center justify-center rounded-[3rem] bg-[#4edea3] font-['Montserrat'] text-[0.75rem] font-[800] text-[#003824]">
              {cartItems.length}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
