'use client';
import { CircleCheck,X } from "lucide-react";
interface TemplatePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description: string;
}

export default function TemplatePreviewModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  description,
}: TemplatePreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-md pt-[100px]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-surface-charcoal/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-6xl h-[90vh] deep-glass rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Full image */}
        <div className="lg:col-span-2 h-64 lg:h-full flex flex-col overflow-hidden bg-surface-container-lowest">
          {/* Browser bar */}
          <div className="h-8 shrink-0 flex items-center gap-xs px-sm bg-surface-container-low">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Scrollable image area */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <img
              src={imageSrc}
            
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Sidebar */}
        <div className="p-lg flex flex-col justify-between border-l border-stroke-cyan">
          {/* Top section */}
          <div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="mb-sm ml-auto flex items-center justify-center w-8 h-8 rounded bg-surface/80 backdrop-blur border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-electric-cyan transition-colors"
            >
              <span className="material-symbols-outlined text-sm"><X/></span>
            </button>

            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">
              {title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              {description}
            </p>

            {/* Feature list */}
            <ul className="space-y-xs">
              {['Responsive Layout', 'Dark Mode Ready', 'TypeScript Support', 'Tailwind CSS', 'Accessible Markup'].map(
                (feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-xs font-body-md text-body-md text-on-surface-variant stagger-item"
                  >
                    <span className="material-symbols-outlined text-electric-cyan text-sm">
                     <CircleCheck/>
                    </span>
                    {feature}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Bottom CTA */}
          <button className="w-full glow-hover bg-electric-cyan text-on-primary-fixed hover:bg-primary-fixed font-label-mono text-sm px-sm py-xs rounded transition-colors duration-300 font-bold mt-lg">
            Start Building
          </button>
        </div>
      </div>
    </div>
  );
}
