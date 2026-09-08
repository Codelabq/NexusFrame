export default function Footer() {
  const footerLinks = {
    shop: [
      { label: "Editions", href: "#" },
      { label: "Objects", href: "#" },
      { label: "Apparel", href: "#" },
      { label: "Archive", href: "#" },
    ],
    information: [
      { label: "About", href: "#" },
      { label: "Delivery", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact", href: "#" },
    ],
    connect: [
      { label: "Instagram", href: "#" },
      { label: "Journal", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-[#ffffff] pt-[6rem] pb-[4rem]">
      <div className="w-full px-[1.25rem] lg:px-[4rem] grid grid-cols-1 lg:grid-cols-12 gap-[4rem]">
        <div className="lg:col-span-4">
          <h3 className="font-['Playfair_Display'] text-[22px] leading-[30px] text-[#000000] tracking-tight mb-[1.5rem]">
            L&apos;ATELIER ÉPURE
          </h3>
          <p className="font-['Inter'] text-[14px] leading-[22px] text-[#5e5e5e] max-w-[20rem] mb-[2rem]">
            A curated collection of sculptural objects, leathercraft, and ready-to-wear pieces.
          </p>
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase text-[#444748]">
              Newsletter
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-[#444748]/30 py-[0.5rem] font-['Inter'] text-[12px] text-[#1a1c1c] placeholder:text-[#5e5e5e] focus:outline-none focus:border-[#000000] transition-colors duration-300"
              placeholder="Enter your email"
              type="email"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <h4 className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase text-[#000000] mb-[1.5rem]">
            Shop
          </h4>
          <ul className="flex flex-col gap-[0.75rem]">
            {footerLinks.shop.map((link) => (
              <li key={link.label}>
                <a
                  className="font-['Inter'] text-[12px] text-[#5e5e5e] hover:text-[#000000] transition-colors duration-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h4 className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase text-[#000000] mb-[1.5rem]">
            Information
          </h4>
          <ul className="flex flex-col gap-[0.75rem]">
            {footerLinks.information.map((link) => (
              <li key={link.label}>
                <a
                  className="font-['Inter'] text-[12px] text-[#5e5e5e] hover:text-[#000000] transition-colors duration-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h4 className="font-['Inter'] text-[11px] tracking-[0.15em] uppercase text-[#000000] mb-[1.5rem]">
            Connect
          </h4>
          <ul className="flex flex-col gap-[0.75rem]">
            {footerLinks.connect.map((link) => (
              <li key={link.label}>
                <a
                  className="font-['Inter'] text-[12px] text-[#5e5e5e] hover:text-[#000000] transition-colors duration-300"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full px-[1.25rem] lg:px-[4rem] mt-[4rem] pt-[2rem] border-t border-[#eeeeee]">
        <p className="font-['Inter'] text-[11px] text-[#5e5e5e] tracking-[0.05em]">
          © 2025 L&apos;ATELIER ÉPURE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
