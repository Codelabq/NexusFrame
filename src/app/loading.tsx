import {LayoutTemplate} from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-charcoal">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-cyan/5 via-transparent to-transparent" />

      {/* Logo mark */}
      <div className="relative mb-xl">
        <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center border-electric-cyan/30 animate-pulse">
         <LayoutTemplate className="text-electric-cyan text-3xl" />
            
        </div>
      </div>

      {/* Brand name */}
      <h2 className="font-display-lg text-headline-md text-electric-cyan mb-sm tracking-tight">
        NexusFrame
      </h2>

      {/* Progress bar */}
      <div className="w-64 h-1 rounded-full bg-surface-container-high overflow-hidden">
        <div
          className="h-full bg-electric-cyan rounded-full animate-progress"
          style={{
            animation: 'loadProgress 1.8s ease-in-out infinite',
          }}
        />
      </div>

      {/* Status text */}
      <p className="font-label-mono text-label-mono text-on-surface-variant mt-md tracking-wide">
        Initializing engine<span className="animate-dots">...</span>
      </p>

      <style>{`
        @keyframes loadProgress {
          0% { width: 0%; transform: translateX(0); }
          40% { width: 60%; transform: translateX(0); }
          60% { width: 60%; transform: translateX(80px); }
          80% { width: 100%; transform: translateX(160px); }
          100% { width: 100%; transform: translateX(160px); }
        }
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }
        .animate-dots::after {
          content: '';
          animation: dots 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
