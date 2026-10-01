interface MarqueeTickerProps {
  message: string;
  reverse?: boolean;
}

export default function MarqueeTicker({ message, reverse = false }: MarqueeTickerProps) {
  return (
    <div className="overflow-hidden border-y-[2px] border-[#caf300] bg-[#caf300] py-[4px] font-['JetBrains_Mono'] text-[18px] font-[700] tracking-wider text-[#596c00]">
      <div className={reverse ? "animate-marquee-reverse flex w-max whitespace-nowrap" : "animate-marquee-forward flex w-max whitespace-nowrap"}>
        <span className="px-[32px]">{message.repeat(2)}</span>
        <span className="px-[32px]">{message.repeat(2)}</span>
      </div>
    </div>
  );
}
