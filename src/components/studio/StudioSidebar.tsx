'use client';

import { useState } from 'react';
import { ArrowBigDown } from 'lucide-react';


interface StudioSidebarProps {
  categories: string[] ;
  selectedCategory: string | null;
  onSelectCategory: (name: string) => void;
  countCategories : (cat:string) => string
}

const frameworks = ['React', 'Next.js'];

export default function StudioSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  countCategories
}: StudioSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeCategory = selectedCategory ?? 'All Templates';
 console.log(categories)
  return (
    <>
      {/* Desktop sidebar — hidden on mobile */}
      <aside className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-32 deep-glass rounded-lg p-md glass-panel glass-panel-glow">
          <h3 className="font-label-mono text-label-mono text-outline uppercase tracking-wider mb-sm">
            Categories
          </h3>
          <ul className="space-y-unit">
            <li>
              <a
                className={`flex items-center justify-between px-sm py-xs rounded font-body-md text-body-md border-l-2 transition-colors ${
                  activeCategory === 'All Templates'
                    ? 'text-primary-fixed-dim bg-primary-fixed-dim/10 border-electric-cyan'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high hover:border-outline-variant border-transparent'
                }`}
                href="#"
                 onClick={() => onSelectCategory('All Templates')}
              >
                <span>All Templates</span>
                <span className="font-label-mono text-xs opacity-70">{countCategories('All Templates')}</span>
              </a>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <a
                  className={`flex items-center justify-between px-sm py-xs rounded font-body-md text-body-md border-l-2 transition-colors ${
                    activeCategory === category
                      ? 'text-primary-fixed-dim bg-primary-fixed-dim/10 border-electric-cyan'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high hover:border-outline-variant border-transparent'
                  }`}
                  href="#"
                  onClick={() => onSelectCategory(category)}
                >
                  <span>{category}</span>
                  <span className="font-label-mono text-xs opacity-70">{countCategories(category)}</span>
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-label-mono text-label-mono text-outline uppercase tracking-wider mt-lg mb-sm">
            Frameworks
          </h3>
          <div className="flex flex-wrap gap-xs">
            {frameworks.map((framework) => (
              <span
                key={framework}
                className="px-xs py-unit border border-outline-variant/30 rounded text-on-surface-variant font-label-mono text-xs hover:border-electric-cyan hover:text-electric-cyan cursor-pointer transition-colors"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile dropdown — visible on small screens */}
      <div className="block md:hidden w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="deep-glass rounded-lg p-md w-full flex items-center justify-between glass-panel glass-panel-glow cursor-pointer"
        >
          <div className="flex items-center gap-xs">
            <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Categories
            </span>
            {activeCategory && activeCategory !== 'All Templates' && (
              <span className="text-primary-fixed-dim font-label-mono text-xs">
                {activeCategory}
              </span>
            )}
          </div>
          <span
            className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <ArrowBigDown />
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-xs' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="deep-glass rounded-lg p-md glass-panel glass-panel-glow">
            <ul className="space-y-unit">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    className={`flex items-center justify-between px-sm py-xs rounded font-body-md text-body-md border-l-2 transition-colors ${
                      activeCategory === category
                        ? 'text-primary-fixed-dim bg-primary-fixed-dim/10 border-electric-cyan'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high hover:border-outline-variant border-transparent'
                    }`}
                    href="#"
                    onClick={() => {
                      onSelectCategory(category);
                      setIsOpen(false);
                    }}
                  >
                    <span>{category}</span>
                    <span className="font-label-mono text-xs opacity-70">{countCategories(category)}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-label-mono text-label-mono text-outline uppercase tracking-wider mt-lg mb-sm">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-xs">
              {frameworks.map((framework) => (
                <span
                  key={framework}
                  className="px-xs py-unit border border-outline-variant/30 rounded text-on-surface-variant font-label-mono text-xs hover:border-electric-cyan hover:text-electric-cyan cursor-pointer transition-colors"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
