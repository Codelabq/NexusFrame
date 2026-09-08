'use client';
import { useState } from "react";
import Link from "next/link";
import TemplatePreviewModal from "./TemplatePreviewModal";
interface TemplateCardProps {
  id : string;
  title: string;
  description: string;
  image: string;
  isPro?: boolean;
  fullTemplateImage: string
}

export default function TemplateCard({
  id,
  title,
  description,
  image,
  isPro = false,
  fullTemplateImage
}: TemplateCardProps) {
  const [isOpen,setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  }
  return (
    <>
    <div className="deep-glass rounded-lg overflow-hidden flex flex-col group glow-hover animate-stagger-up stagger-item glass-panel">
      {/* Image container */}
      <div className="h-48 relative overflow-hidden bg-surface-container-lowest">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {isPro && (
          <div className="absolute top-sm right-sm bg-surface/80 backdrop-blur border border-outline-variant/30 rounded px-xs py-unit flex items-center gap-unit">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
            <span className="font-label-mono text-[10px] text-on-surface uppercase">Pro</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-md flex flex-col flex-1 relative overflow-hidden">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs group-hover:text-primary-fixed-dim transition-colors">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-1 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
     

        {/* Slide-up overlay */}
        <div className="absolute bottom-0 left-0 w-full p-md bg-glass-fill backdrop-blur-sm border-t border-stroke-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out flex gap-sm">
         <Link href={`/preview/${id}`} className="flex-1">
         <button className="flex-1 bg-electric-cyan text-on-primary-fixed hover:bg-primary-fixed font-label-mono text-sm px-sm py-xs rounded transition-colors duration-300 font-bold">
            Start
          </button>
         </Link>
          
          <button onClick={()=>{setIsOpen(true)}} className="flex-1 bg-transparent border border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10 font-label-mono text-sm px-sm py-xs rounded transition-colors duration-300">
            Preview
          </button>
        </div>
      </div>
    </div>
    {isOpen && (
      <TemplatePreviewModal
        isOpen={isOpen}
        title={title}
        description={description}
        onClose={onClose}
        imageSrc={fullTemplateImage}
        />)}
    </>
  );
}
