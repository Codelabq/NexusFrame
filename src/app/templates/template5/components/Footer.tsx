import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "Product", href: "#arsenal" },
  { label: "Specifications", href: "#comparison" },
  { label: "Community UGC", href: "#reviews" },
  { label: "Track Package", href: "#track-package" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0e13] px-[1rem] py-[3rem] text-[#bbcabf] lg:px-[2rem]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[2rem]">
        <div className="flex flex-col justify-between gap-[2rem] md:flex-row md:items-start">
          <div className="max-w-[22rem]">
            <Link
              href="#overview"
              className="font-['Montserrat'] text-[1.125rem] font-[700] uppercase text-[#e3e1e9]"
            >
              Kinetiq
            </Link>
            <p className="mt-[0.75rem] font-['Inter'] text-[0.875rem] leading-[1.5] text-[#86948a]">
              Engineered for immediate sensory impact. Hyper-responsive kinetic performance hardware.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-[1.5rem] gap-y-[0.75rem]" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-[0.25rem] font-['Inter'] text-[0.75rem] font-[600] uppercase tracking-[0.06em] text-[#bbcabf] transition-colors hover:text-[#4edea3]"
              >
                {link.label}
                <ArrowUpRight className="h-[12px] w-[12px] transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-[0.75rem] border-t border-[#3c4a42] pt-[1.5rem] font-['Inter'] text-[0.75rem] text-[#86948a] sm:flex-row sm:items-center">
          <p>© 2024 KINETIQ Direct Dynamics LLC. All rights reserved.</p>
          <p>Secured with 256-bit SSL Encryption</p>
        </div>
      </div>
    </footer>
  );
}
