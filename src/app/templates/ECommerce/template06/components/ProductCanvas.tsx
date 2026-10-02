interface ProductCanvasProps {
  imageUrl: string;
  imageAlt: string;
  watermark?: string;
  annotations?: string[];
  modelIdLabel?: string;
  modelId?: string;
}

export default function ProductCanvas({
  imageUrl,
  imageAlt,
  watermark,
  annotations = [],
  modelIdLabel,
  modelId,
}: ProductCanvasProps) {
  const topAnnotation = annotations[0];
  const bottomAnnotation = annotations[1];

  return (
    <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden border-[1px] border-[#353535] bg-[#1f1f1f] p-[16px] lg:col-span-6">
      {watermark && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-['Space_Grotesk'] text-[140px] font-[700] tracking-wider text-[#353535]/40">
          {watermark}
        </div>
      )}

      {topAnnotation && (
        <div className="pointer-events-none absolute right-[32px] top-[48px] z-20 hidden flex-col items-end sm:flex">
          <div className="border-[1px] border-[#ffffff] bg-[#131313] px-[4px] py-[2px] font-['JetBrains_Mono'] text-[10px] uppercase text-[#ffffff] shadow-[2px_2px_0px_0px_#caf300]">
            {topAnnotation}
          </div>
          <div className="h-12 w-[1px] bg-[#caf300]" />
          <div className="h-[4px] w-[4px] animate-ping bg-[#caf300]" />
        </div>
      )}

      {bottomAnnotation && (
        <div className="pointer-events-none absolute bottom-[48px] left-[32px] z-20 hidden flex-col items-start sm:flex">
          <div className="h-[4px] w-[4px] animate-ping bg-[#caf300]" />
          <div className="h-12 w-[1px] bg-[#caf300]" />
          <div className="border-[1px] border-[#caf300] bg-[#131313] px-[4px] py-[2px] font-['JetBrains_Mono'] text-[10px] uppercase text-[#ffffff] shadow-[2px_2px_0px_0px_#ffffff]">
            {bottomAnnotation}
          </div>
        </div>
      )}

      <div className="group relative z-10 w-full max-w-[500px] cursor-pointer">
        <div className="animate-[float-levitate_4.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-105">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-auto w-full object-contain contrast-125 transition-all duration-300"
          />
        </div>
        {(modelIdLabel || modelId) && (
          <div className="absolute -bottom-[16px] right-[16px] border-[1px] border-[#353535] bg-[#131313] px-[16px] py-[8px] font-['JetBrains_Mono'] text-[10px] text-[#e2e2e2] transition-colors group-hover:border-[#caf300] group-hover:text-[#caf300]">
            {modelIdLabel} {modelId && <span className="font-[700] text-[#caf300]">{modelId}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
