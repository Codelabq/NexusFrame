import Link from 'next/link';
import {House, LayoutTemplate} from 'lucide-react'

/**
 * Custom 404 — Not Found page.
 * Matches the NexusFrame dark glass aesthetic with electric-cyan accents.
 */
export default function NotFound() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-charcoal overflow-hidden">
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_var(--tw-gradient-stops))] from-electric-cyan/8 via-transparent to-transparent" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,220,230,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,220,230,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* 404 badge */}
      <div className="relative top-10 glass-panel px-md py-xs rounded-full border-electric-cyan/30 mb-xl flex items-center gap-sm">
        <span className="material-symbols-outlined text-electric-cyan text-xl">error</span>
        <span className="font-label-mono text-label-mono text-electric-cyan uppercase tracking-widest">
          404 — Page Not Found
        </span>
      </div>

      {/* Headline */}
      <h1 className="relative font-display-lg text-display-lg text-on-surface mb-md text-center leading-tight max-w-2xl">
        You&rsquo;ve drifted into{' '}
        <span className="text-electric-cyan text-glow">uncharted space.</span>
      </h1>

      {/* Subtitle */}
      <p className="relative font-body-lg text-body-lg text-on-surface-variant mb-xl text-center">
        This endpoint doesn&rsquo;t exist in our universe. Let&rsquo;s get you back on
        the grid.
      </p>

      {/* Actions */}
      <div className="relative flex flex-col sm:flex-row gap-sm">
        <Link
          href="/"
          className="glass-panel border-electric-cyan/30 px-md py-xs rounded font-label-mono text-label-mono text-electric-cyan hover:bg-electric-cyan/10 transition-all duration-300 btn-hover-effect flex items-center justify-center gap-xs"
        >
          <span className="material-symbols-outlined text-lg"><House/></span>
          Back to Home
        </Link>
        <Link
          href="/studio"
          className="bg-primary-container text-on-primary-container px-md py-xs rounded font-label-mono text-label-mono uppercase font-bold transition-all duration-300 btn-primary-glow btn-hover-effect flex items-center justify-center gap-xs whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-lg"><LayoutTemplate/></span>
          Open Studio
        </Link>
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-electric-cyan/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-secondary/5 blur-3xl animate-float-delayed" />
    </div>
  );
}
