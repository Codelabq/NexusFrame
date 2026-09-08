
import {Rocket,Link} from 'lucide-react'
/**
 * Top hero section.
 *
 * Layout matches the original code.html:
 *   - WebGL shader canvas as a fixed background, behind the hero text
 *   - "Now in Public Beta" pill
 *   - Headline + subtitle
 *   - API input widget (link icon + input + "Generate Live UI" button)
 *
 * Uses the new Tailwind v4 design tokens defined in globals.css (@theme).
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full max-w-container-max mx-auto px-md py-xl flex flex-col items-center text-center min-h-[80vh] justify-center overflow-hidden"
    >
  

      {/* Beta pill */}
      <div className="glass-panel px-sm py-xs rounded-full inline-flex items-center gap-xs mb-md border-electric-cyan/30 animate-fade-in-up opacity-0">
        <span className="text-tertiary-fixed-dim text-lg leading-none">⚡</span>
        <span className="font-label-mono text-label-mono text-electric-cyan tracking-wide uppercase">
          Now in Public Beta • Instant API-to-UI Engine
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-display-lg text-display-lg text-on-surface max-w-[800px] mb-md leading-tight animate-fade-in-up opacity-0 delay-100">
        Bring your raw APIs to life in{" "}
        <span className="text-electric-cyan text-glow">seconds.</span>
      </h1>

      {/* Subtitle */}
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[700px] mb-xl animate-fade-in-up opacity-0 delay-200">
        Paste any REST or GraphQL endpoint. Nexus maps your schema directly
        into production-ready UI templates, dashboards, and live visual
        components.
      </p>

      {/* API Input Widget */}
      <div className="w-full max-w-[800px] glass-panel rounded-lg p-xs flex flex-col sm:flex-row items-center gap-xs sm:gap-0 sm:gap-xs mb-xl focus-within:border-electric-cyan focus-within:glass-panel-glow transition-all duration-300 animate-fade-in-up opacity-0 delay-300 shadow-xl">
        <div className="flex-grow flex items-center bg-surface-container-lowest rounded px-sm py-xs w-full transition-colors group">
          <span className="material-symbols-outlined text-outline-variant mr-xs group-focus-within:text-electric-cyan transition-colors">
            <Link/>
          </span>
          <input
            type="text"
            defaultValue="https://api.nexus.dev/v1/users"
            placeholder="Paste endpoint URL..."
            className="bg-transparent border-none w-full text-on-surface font-code-block text-code-block focus:ring-0 focus:outline-none p-0"
          />
        </div>
        <button
          type="button"
          className="bg-primary-container text-on-primary-container px-md py-xs rounded font-label-mono text-label-mono uppercase font-bold transition-all duration-300 btn-primary-glow btn-hover-effect whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-xs"
        >
          Generate Live UI
          <span className="material-symbols-outlined text-sm"><Rocket/></span>
        </button>
      </div>
    </section>
  );
}
