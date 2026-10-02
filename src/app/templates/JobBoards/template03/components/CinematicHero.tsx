import { Pause, Play } from "lucide-react";

type CinematicHeroProps = {
  imageUrl: string;
  imageAlt: string;
  statusLeft: string;
  tickerItems: string[];
  codeLabel: string;
  title: string;
  description: string;
  soundOnLabel: string;
  soundOffLabel: string;
  fpsBadge: string;
  ratioBadge: string;
  timecodeLabel: string;
  soundActive: boolean;
  timecode: string;
  progress: number;
  onSoundToggle: () => void;
};

export default function CinematicHero({ imageUrl, imageAlt, statusLeft, tickerItems, codeLabel, title, description, soundOnLabel, soundOffLabel, fpsBadge, ratioBadge, timecodeLabel, soundActive, timecode, progress, onSoundToggle }: CinematicHeroProps) { return <section className="relative isolate min-h-[560px] overflow-hidden border-b border-[#42434b] bg-[#0a0a0c] text-white sm:min-h-[620px]"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(90deg, rgba(7,7,9,.92) 0%, rgba(7,7,9,.7) 43%, rgba(7,7,9,.38) 100%), linear-gradient(0deg, rgba(7,7,9,.95) 0%, transparent 55%), url(${imageUrl})` }} role="img" aria-label={imageAlt} /><div className="absolute inset-x-6 top-16 flex items-center justify-between font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.16em] text-[#aeb3c9] sm:inset-x-10 sm:top-20"><span className="border-l-2 border-[#ffb95f] pl-2">{statusLeft}</span><span className="hidden gap-6 sm:flex">{tickerItems.map((item, index) => <span className={index === tickerItems.length - 1 ? "text-[#ffb95f]" : ""} key={item}>{item}</span>)}</span></div><div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1280px] flex-col justify-end px-6 pb-16 sm:min-h-[620px] sm:px-10 lg:px-16"><div className="max-w-[680px]"><p className="mb-3 font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.18em] text-[#ffb95f]">{codeLabel}</p><h1 className="font-['Bebas_Neue'] text-[clamp(4.5rem,12vw,9rem)] leading-[.78] tracking-[.01em] text-[#f1f3ff]">{title}</h1><p className="mt-7 max-w-[600px] font-['Space_Grotesk'] text-[13px] leading-6 text-[#c6c9d7] sm:text-[15px]">{description}</p></div><div className="mt-14 flex flex-wrap items-end justify-between gap-8 border-t border-[#60616a]/60 pt-4 font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.14em] text-[#c6c9d7]"><div className="flex flex-wrap gap-2"><button type="button" onClick={onSoundToggle} className={`flex items-center gap-2 border px-3 py-2 transition-colors ${soundActive ? "border-[#ffb95f] text-[#ffb95f]" : "border-[#60616a] hover:border-[#c6c9d7]"}`} aria-pressed={soundActive}>{soundActive ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />} {soundActive ? soundOnLabel : soundOffLabel}</button><span className="border border-[#60616a] px-3 py-2">{fpsBadge}</span><span className="border border-[#60616a] px-3 py-2">{ratioBadge}</span></div><div className="w-full max-w-[260px] sm:w-[260px]"><div className="mb-2 flex justify-between"><span>{timecodeLabel}</span><span className="text-white">{timecode}</span></div><div className="h-1 bg-[#4c4d54]"><div className="h-full bg-[#ffb95f] transition-[width] duration-75" style={{ width: `${progress}%` }} /></div></div></div></div></section>; }
