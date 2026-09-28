'use client'
import StudioSidebar from '../../components/studio/StudioSidebar';
import TemplateCard from '../../components/studio/TemplateCard';
import { useState } from 'react';
import { templates } from '../studioTemplatesData';


export default function StudioPage() {
  const [selectedCategory, setSelectedCategory] = useState<null | string>('All Templates');
  const categories : string[] = [...new Set(templates.map((temp) => temp.category))]
  const countCategories = (cat: string) => {
    if(cat === 'All Templates') {return templates.length.toString()}else{
      const count = [...templates.map(temp => temp.category).filter(category => category === cat)].length
      return count.toString()
    }
  }
  const filteredTemplates = selectedCategory !== 'All Templates'
    ? templates.filter((t) => t.category === selectedCategory)
    : templates;

  return (
    <>
      <div className="ambient-bg animate-ambient-pulse bg-background" />

      <div className="flex flex-1 pt-xl mt-md max-w-[1440px] mx-auto w-full px-md md:px-lg flex-col md:flex-row gap-xl relative z-10">
        <StudioSidebar
          categories={categories}
          countCategories= {countCategories}
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
