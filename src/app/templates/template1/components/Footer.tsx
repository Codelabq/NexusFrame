import { BadgeCheck, Blocks, Code2, Share2 } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    marketplace: [
      { label: "Storefront", href: "#" },
      { label: "Digital Assets", href: "#" },
      { label: "Developer Tools", href: "#" },
      { label: "Gadgets", href: "#" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" },
    ],
    legal: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "License", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-[#0c0e14]/80 backdrop-blur-xl border-t border-[#ffffff]/10 mt-[4.5rem] pt-[6rem] pb-[4rem]">
      <div className="w-full px-[1.5rem] lg:px-[3rem] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[2rem] lg:gap-[4rem]">
          <div className="lg:col-span-4">
            <h3 className="font-['Inter'] text-[20px] leading-[28px] text-[#dbfcff] font-bold tracking-tight mb-[1rem]">
              NEXUS <span className="text-[#00f0ff] font-light">DIGITAL</span>
            </h3>
            <p className="font-['Inter'] text-[14px] leading-[22px] text-[#b9cacb] max-w-[20rem] mb-[1.5rem]">
              Next-generation digital asset marketplace powered by zero-knowledge proofs and quantum mesh delivery.
            </p>
            <form className="flex items-center gap-[0.5rem] max-w-[24rem] mb-[1.5rem]">
              <input
                className="flex-1 bg-[#1e1f26]/70 border border-[#ffffff]/10 rounded-[0.5rem] px-[0.75rem] py-[0.5rem] font-[monospace] text-[13px] text-[#e2e2eb] placeholder:text-[#b9cacb]/50 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]"
                placeholder="Join technical dispatch..."
                type="email"
              />
              <button
                className="bg-[#00f0ff] text-[#006970] font-['Inter'] text-[12px] px-[1rem] py-[0.5rem] rounded-[0.5rem] hover:shadow-[0_0_16px_rgba(0,240,255,0.4)] transition-all"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-[1rem]">
              <a className="text-[#b9cacb] hover:text-[#00f0ff] transition-colors" href="#">
                <Code2 aria-hidden="true" size={24} />
              </a>
              <a className="text-[#b9cacb] hover:text-[#00f0ff] transition-colors" href="#">
                <Share2 aria-hidden="true" size={24} />
              </a>
              <a className="text-[#b9cacb] hover:text-[#00f0ff] transition-colors" href="#">
                <Blocks aria-hidden="true" size={24} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase text-[#dbfcff] mb-[1.5rem] font-semibold">
              Marketplace
            </h4>
            <ul className="flex flex-col gap-[0.75rem]">
              {footerLinks.marketplace.map((link) => (
                <li key={link.label}>
                  <a
                    className="font-['Inter'] text-[14px] text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase text-[#dbfcff] mb-[1.5rem] font-semibold">
              Resources
            </h4>
            <ul className="flex flex-col gap-[0.75rem]">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    className="font-['Inter'] text-[14px] text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase text-[#dbfcff] mb-[1.5rem] font-semibold">
              Legal
            </h4>
            <ul className="flex flex-col gap-[0.75rem]">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    className="font-['Inter'] text-[14px] text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mt-[4rem] pt-[2rem] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-[1rem]">
          <p className="font-['monospace'] text-[11px] text-[#849495] tracking-[0.05em]">
            © 2025 NEXUS DIGITAL. Zero-Knowledge Protocol.
          </p>
          <div className="flex items-center gap-[0.5rem] font-['monospace'] text-[11px] text-[#6ffbbe]">
            <BadgeCheck aria-hidden="true" size={16} />
            <span>Zero-Gas Transactions Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
