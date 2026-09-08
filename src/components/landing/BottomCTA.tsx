import {Rocket,Link} from 'lucide-react'

export default function BottomCTA() {
  return (
    <section className="w-full max-w-container-max mx-auto px-md py-xl flex flex-col items-center text-center relative z-10">
      <h2 className="font-display-lg text-headline-md text-on-surface mb-md">Ready to build?</h2>

      {/* API Input Widget */}
      <div className="w-full max-w-[800px] glass-panel rounded-lg p-xs flex flex-col sm:flex-row items-center gap-xs sm:gap-0 sm:gap-xs focus-within:border-electric-cyan focus-within:glass-panel-glow transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan/10">
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
