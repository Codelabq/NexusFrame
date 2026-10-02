"use client";

import { Bookmark, Search, Share2, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { articles, categories, leadArticle, type Category, type Article } from "../data";

export default function GazetteWorkspace() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [acousticMode, setAcousticMode] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.byline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSave = (id: string) => {
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    setToastMessage(savedIds.includes(id) ? "Removed from saved folios" : "Saved to folio archive");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const triggerShare = (title: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setToastMessage(`Copied link to clipboard: "${title.slice(0, 30)}..."`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <main className={`min-h-screen font-['Plus_Jakarta_Sans'] transition-colors duration-500 ${acousticMode ? "bg-[#171514] text-[#e6e2de]" : "bg-[#f9f9f9] text-[#1a1c1c]"}`}>
      {/* Top Editorial Ticker */}
      <header className={`border-b text-[11px] font-mono tracking-widest uppercase px-6 py-2 flex flex-wrap items-center justify-between gap-4 ${acousticMode ? "border-[#2d2926] bg-[#1c1917] text-[#a8a29e]" : "border-[#dac1b7] bg-[#f3f3f3] text-[#54433c]"}`}>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 bg-[#78350f] inline-block" /> Dispatch Telemetry</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Autumn Equinox Cycle · Monograph Series Folio Nº 142</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setAcousticMode(!acousticMode)}
            className="flex items-center gap-2 hover:opacity-75 transition-opacity cursor-pointer"
          >
            <span>Acoustic Reading Mode</span>
            {acousticMode ? <Volume2 className="h-3.5 w-3.5 text-[#d97706]" /> : <VolumeX className="h-3.5 w-3.5" />}
          </button>
          <span>·</span>
          <span>Sync: 390 OK | 0.14s</span>
        </div>
      </header>

      {/* Main Gazette Header */}
      <section className={`border-b py-8 px-6 text-center ${acousticMode ? "border-[#2d2926] bg-[#141210]" : "border-[#dac1b7] bg-white"}`}>
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-[#78350f]" />
            <span className="font-['EB_Garamond'] text-xs uppercase tracking-[0.2em] font-medium">Vol. XLIV</span>
          </div>

          <h1 className="font-['EB_Garamond'] text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] font-normal">
            GAZETTE<span className="text-[#78350f]">.</span>
          </h1>

          <div className="flex items-center gap-4 text-xs font-mono uppercase">
            <span>Autumnal Folio</span>
            <a href="#dispatches" className="bg-[#78350f] text-white px-4 py-2 hover:bg-[#592100] transition-colors">
              Dispatch
            </a>
          </div>
        </div>
      </section>

      {/* Hero Lead Story Section (Asymmetrical Broadsheet) */}
      <section className="max-w-[1360px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#dac1b7]/60 pb-16">
          {/* Left Column: Lead Monograph Image */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-[#78350f] font-semibold">
              <span className="h-1 w-4 bg-[#78350f]" /> Lead Monograph
            </div>
            <div className="overflow-hidden bg-[#e5e5e4] aspect-[3/2] border border-[#dac1b7]">
              <img
                src={leadArticle.imageUrl}
                alt={leadArticle.imageAlt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
              />
            </div>
            <p className="font-mono text-[11px] text-[#87736a]">{leadArticle.caption}</p>
          </div>

          {/* Right Column: Lead Monograph Story */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#87736a]">
                <span>{leadArticle.issue}</span>
                <span>{leadArticle.date}</span>
              </div>

              <h2 className="font-['EB_Garamond'] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-normal">
                {leadArticle.title}
              </h2>

              <div className="flex items-center gap-3 text-xs font-mono text-[#87736a] pt-1">
                <span>{leadArticle.byline}</span>
                <span>·</span>
                <span>{leadArticle.readTime}</span>
                <span>·</span>
                <span>Philosophy & Space</span>
              </div>

              <p className="text-[15px] leading-relaxed pt-2 opacity-90">
                {leadArticle.excerpt}
              </p>

              <blockquote className="border-l-2 border-[#78350f] pl-4 my-6 italic font-['EB_Garamond'] text-xl text-[#78350f]">
                &ldquo;Silence is not the mere absence of decibels, but the tactile presence of intentional void.&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#dac1b7]/40">
              <button
                type="button"
                onClick={() => setSelectedArticle(leadArticle)}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold hover:text-[#78350f] transition-colors cursor-pointer"
              >
                <span>Read Full Feature</span>
                <span>→</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => toggleSave(leadArticle.id)}
                  aria-label="Bookmark article"
                  className={`p-2 border transition-colors ${savedIds.includes(leadArticle.id) ? "bg-[#78350f] text-white border-[#78350f]" : "border-[#dac1b7] hover:border-[#292524]"}`}
                >
                  <Bookmark className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => triggerShare(leadArticle.title)}
                  aria-label="Share article"
                  className="p-2 border border-[#dac1b7] hover:border-[#292524] transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <span className="font-mono text-[11px] text-[#87736a] ml-1">Ed. 142.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatches & Critical Inquiries Feed */}
      <section id="dispatches" className="max-w-[1360px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[#dac1b7] pb-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#78350f] font-semibold mb-1">Broadsheet Chronicle</p>
            <h2 className="font-['EB_Garamond'] text-3xl sm:text-4xl font-normal">Dispatches & Critical Inquiries</h2>
          </div>

          {/* Category Filter Bar */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 font-mono text-[11px] uppercase tracking-wider">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#292524] text-[#f9f9f9]"
                    : "bg-[#f3f3f3] text-[#54433c] hover:bg-[#e7e5e4]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="group flex flex-col justify-between border border-[#dac1b7] bg-white p-5 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#87736a] mb-3">
                  <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 bg-[#78350f]" /> {article.categoryLabel}</span>
                  <span>{article.readTime}</span>
                </div>

                <div className="overflow-hidden aspect-[4/3] bg-[#e5e5e4] mb-4 border border-[#dac1b7]">
                  <img
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] uppercase text-[#87736a] mb-2">
                  <span>{article.byline}</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-['EB_Garamond'] text-2xl leading-snug font-normal group-hover:text-[#78350f] transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-xs leading-relaxed text-[#54433c] line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#dac1b7]/40 font-mono text-[11px] uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="font-bold hover:text-[#78350f] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Dispatch</span>
                  <span>→</span>
                </button>
                <span className="text-[#87736a]">{article.issue}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Broadside Promotion Callout */}
      <section className={`border-y border-[#dac1b7] py-16 px-6 text-center my-16 ${acousticMode ? "bg-[#1c1917]" : "bg-[#f3f3f3]"}`}>
        <div className="max-w-[720px] mx-auto space-y-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#78350f] font-semibold">Gazette Editions & Cold-Press Folios</p>
          <h2 className="font-['EB_Garamond'] text-4xl sm:text-5xl font-normal">The Physical Broadside: Folio 142</h2>
          <p className="text-sm leading-relaxed opacity-90 mx-auto">
            Bound in Japanese thread-sewn bindings on 140gsm unbleached Munken Pure stock. Limited edition of 1,200 numbered copies worldwide, accompanied by archival hand-pulled copperplate prints.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setToastMessage("Added Folio 142 to acquisitions cart")}
              className="bg-[#292524] text-[#f9f9f9] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#78350f] transition-colors cursor-pointer"
            >
              Acquire Physical Folio — $38
            </button>
            <button
              type="button"
              onClick={() => setToastMessage("Opening colophon specifications...")}
              className="border border-[#292524] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#292524] hover:text-white transition-colors cursor-pointer"
            >
              Colophon Specifications
            </button>
          </div>
        </div>
      </section>

      {/* Footer Journal Section */}
      <footer className={`border-t border-[#dac1b7] pt-16 pb-12 px-6 ${acousticMode ? "bg-[#141210]" : "bg-white"}`}>
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#dac1b7]/60">
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-['EB_Garamond'] text-2xl font-normal">The Gazette Journal</h2>
            <p className="text-xs leading-relaxed opacity-80">
              A curated broadsheet devoted to classical critical commentary, material architecture, and tactile literary monographs. Published triannually in print and continuous digital dispatch.
            </p>
            <div className="pt-2">
              {newsletterSubscribed ? (
                <p className="font-mono text-xs text-[#78350f] font-semibold">Thank you for subscribing to the Gazette dispatch.</p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail) setNewsletterSubscribed(true);
                  }}
                  className="flex max-w-sm border border-[#dac1b7]"
                >
                  <input
                    required
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your correspondence email"
                    className="w-full bg-transparent px-3 py-2 text-xs outline-none font-mono placeholder:text-[#87736a]"
                  />
                  <button
                    type="submit"
                    className="bg-[#292524] text-white px-4 py-2 font-mono text-[11px] uppercase tracking-wider hover:bg-[#78350f] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Enroll
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h3 className="font-bold uppercase tracking-widest text-[#78350f] text-[11px]">Departments</h3>
            <ul className="space-y-1.5 opacity-80">
              <li className="hover:text-[#78350f] cursor-pointer">Dispatches</li>
              <li className="hover:text-[#78350f] cursor-pointer">Cultural Reviews</li>
              <li className="hover:text-[#78350f] cursor-pointer">Spatial Studies</li>
              <li className="hover:text-[#78350f] cursor-pointer">Longform Essays</li>
              <li className="hover:text-[#78350f] cursor-pointer">The Anthology</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <h3 className="font-bold uppercase tracking-widest text-[#78350f] text-[11px]">Folio & Press</h3>
            <ul className="space-y-1.5 opacity-80">
              <li className="hover:text-[#78350f] cursor-pointer">Print Editions</li>
              <li className="hover:text-[#78350f] cursor-pointer">Colophon</li>
              <li className="hover:text-[#78350f] cursor-pointer">Archival Index</li>
              <li className="hover:text-[#78350f] cursor-pointer">Manuscript Submissions</li>
              <li className="hover:text-[#78350f] cursor-pointer">Institutional Access</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <h3 className="font-bold uppercase tracking-widest text-[#78350f] text-[11px]">Colophon</h3>
            <p className="text-[11px] leading-relaxed opacity-75">
              Typeset in EB Garamond & Plus Jakarta Sans. Printed on archival stock by Gazette Press.
            </p>
          </div>
        </div>

        <div className="max-w-[1360px] mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] opacity-70">
          <span>© 2026 GAZETTE MONOGRAPHS & CRITIQUE. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Dispatch</span>
            <span className="hover:underline cursor-pointer">Syndication</span>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {toastMessage && (
        <div role="status" className="fixed bottom-6 right-6 z-50 bg-[#292524] text-[#f9f9f9] px-4 py-3 font-mono text-xs shadow-lg border border-[#dac1b7]">
          {toastMessage}
        </div>
      )}

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white text-[#1a1c1c] p-8 sm:p-12 shadow-2xl border border-[#dac1b7]">
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute right-6 top-6 font-mono text-xs uppercase tracking-widest text-[#87736a] hover:text-[#1a1c1c] cursor-pointer"
            >
              [Close X]
            </button>

            <span className="font-mono text-[11px] uppercase tracking-widest text-[#78350f] font-semibold">
              {selectedArticle.categoryLabel} · {selectedArticle.issue}
            </span>
            <h2 className="font-['EB_Garamond'] text-3xl sm:text-4xl mt-2 mb-4 leading-tight">
              {selectedArticle.title}
            </h2>
            <div className="flex items-center gap-3 font-mono text-xs text-[#87736a] mb-6 pb-4 border-b border-[#dac1b7]">
              <span>{selectedArticle.byline}</span>
              <span>·</span>
              <span>{selectedArticle.date}</span>
              <span>·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="aspect-[16/9] overflow-hidden mb-6 border border-[#dac1b7]">
              <img src={selectedArticle.imageUrl} alt={selectedArticle.imageAlt} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-[#292524]">
              <p className="font-['EB_Garamond'] text-xl leading-relaxed italic text-[#78350f] mb-4">
                &ldquo;{selectedArticle.excerpt}&rdquo;
              </p>
              <p>
                In an era dominated by hyper-accelerated digital streams, the physical and tactile dimensions of spatial architecture offer a necessary counterweight. By returning to unadorned tectonic volumes, we allow the human sensorium to recalibrate against acoustic noise and visual saturation.
              </p>
              <p>
                The monograph explores how light carves through monolithic masonry over diurnal cycles, creating inhabited shadows that foster contemplation. This synthesis of material honesty and temporal restraint forms the cornerstone of our contemporary spatial inquiry.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#dac1b7] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="bg-[#292524] text-white px-6 py-2.5 font-mono text-xs uppercase tracking-widest hover:bg-[#78350f] transition-colors cursor-pointer"
              >
                Close Monograph
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
