type DisciplineFilterBarProps = {
  disciplines: { disciplineId: string; disciplineLabel: string }[];
  counts: Record<string, number>;
  active: string;
  immediateShootsLabel: string;
  immediateShootsCount: string;
  avgDayRateLabel: string;
  avgDayRateValue: string;
  onChange: (discipline: string) => void;
};

export default function DisciplineFilterBar({ disciplines, counts, active, immediateShootsLabel, immediateShootsCount, avgDayRateLabel, avgDayRateValue, onChange }: DisciplineFilterBarProps) { return <section className="sticky top-0 z-20 border-b border-[#303136] bg-[#171719] text-white"><div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 overflow-x-auto px-6 py-4 sm:px-10 lg:px-16"><div className="flex shrink-0 gap-1">{disciplines.map((discipline) => <button type="button" key={discipline.disciplineId} onClick={() => onChange(discipline.disciplineId)} className={`whitespace-nowrap px-3 py-2 font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.11em] transition-colors ${active === discipline.disciplineId ? "bg-[#f1f3ff] text-[#101014]" : "text-[#aeb0ba] hover:bg-[#292a2e] hover:text-white"}`}>{discipline.disciplineLabel} ({counts[discipline.disciplineId] ?? 0})</button>)}</div><div className="hidden shrink-0 gap-6 font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.14em] text-[#aeb0ba] md:flex"><span><b className="text-[#ffb95f]">{immediateShootsCount}</b> {immediateShootsLabel}</span><span>{avgDayRateLabel} <b className="text-white">{avgDayRateValue}</b></span></div></div></section>; }
