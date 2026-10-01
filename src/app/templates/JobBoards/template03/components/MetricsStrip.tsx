interface MetricsStripProps {
  metrics: { metricValue: string; metricLabel: string }[];
}

export default function MetricsStrip({ metrics }: MetricsStripProps) { return <section className="border-y border-[#303136] bg-[#1b1b1e]"><div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 px-6 py-10 sm:px-10 md:grid-cols-4 lg:px-16">{metrics.map((metric) => <div key={metric.metricValue}><strong className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4.2rem)] leading-none tracking-[0.03em] text-[#f1f3ff]">{metric.metricValue}</strong><span className="mt-2 block max-w-[150px] font-['Space_Grotesk'] text-[8px] uppercase leading-4 tracking-[0.13em] text-[#777985]">{metric.metricLabel}</span></div>)}</div></section>; }
