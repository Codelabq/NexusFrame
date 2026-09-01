import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-lg px-md flex flex-col md:flex-row justify-around items-center gap-md  mx-auto border-t border-stroke-cyan relative z-10">
      <div className="font-headline-sm text-headline-sm font-bold text-electric-cyan">Nexus</div>
      <div className="flex flex-wrap justify-center gap-sm md:gap-md">
        <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Documentation</Link>
        <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">GitHub</Link>
        <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Status</Link>
        <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy</Link>
        <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms</Link>
      </div>
      <div className="font-body-md text-body-md text-on-surface-variant text-sm"> 2024 Nexus Engineering. All rights reserved.</div>
    </footer>
  );
}