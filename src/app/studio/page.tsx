'use client'
import StudioSidebar from '../../components/studio/StudioSidebar';
import TemplateCard from '../../components/studio/TemplateCard';
import { useState } from 'react';
import { categories, templates } from '../studioTemplatesData';

export default function StudioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  const filteredTemplates = selectedCategory
    ? templates.filter((t) => t.category === selectedCategory)
    : templates;

  return (
    <>
      <div className="ambient-bg animate-ambient-pulse bg-background" />

      <div className="flex flex-1 pt-xl mt-md max-w-[1440px] mx-auto w-full px-md md:px-lg flex-col md:flex-row gap-xl relative z-10">
        <StudioSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(name) =>
            setSelectedCategory(name === 'All Templates' ? null : name)
          }
        />

        <main className="flex-1 pb-xl">
          <div className="mb-lg flex justify-between items-end">
            <div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">
                Studio Collection
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                High-performance UI templates engineered for modern web applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.title} {...template} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}