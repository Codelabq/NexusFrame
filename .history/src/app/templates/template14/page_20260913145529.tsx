import ConfiguratorHeader from './components/ConfiguratorHeader';
import FilterBar from './components/FilterBar';
import TelemetryInspector from './components/TelemetryInspector';
import WorkstationCard from './components/WorkstationCard';
import { workstations } from './data';

export default function Template14Page() {
  return (
    <>
      <ConfiguratorHeader />
      <div className="w-full bg-surface-container-lowest px-gutter-lg py-2 flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-spec-code text-label-sm">
        <div className="flex items-center gap-space-sm flex-wrap">
          <div className="flex items-center gap-1.5 bg-primary/10 px-2 py-0.5 rounded border-0 text-primary font-semibold tracking-wide">
            <span className="material-symbols-outlined text-xs text-primary">bolt</span>
            <span className="">SPRING COMPUTE EVENT: UP TO $400 OFF TITAN WORKSTATIONS</span>
          </div>
          <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded text-[10px] uppercase tracking-wider font-semibold">
            LIMITED ALLOCATION
          </span>
        </div>
        <div className="hidden xl:flex items-center gap-space-md font-spec-code text-on-surface-variant">
          <span className="flex items-center gap-1 text-tertiary font-medium">
            <span className="material-symbols-outlined text-xs">check_circle</span> FREE NEXT-DAY PRIORITY FREIGHT
          </span>
          <span className="text-outline-variant">•</span>
          <span className="flex items-center gap-1 text-secondary font-medium">
            <span className="material-symbols-outlined text-xs">verified_user</span> ZERO THERMAL THROTTLING GUARANTEE
          </span>
          <span className="text-outline-variant">•</span>
          <span className="flex items-center gap-1 text-on-surface font-medium">
            <span className="material-symbols-outlined text-xs">undo</span> 30-DAY NO-RISK BENCHMARK RETURN
          </span>
        </div>
        <div className="flex items-center gap-space-sm ml-auto sm:ml-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-on-surface font-medium">SHIPS SAME DAY IN <span className="text-primary font-semibold">3H 42M</span></span>
          </div>
          <span className="hidden md:inline text-outline-variant">|</span>
          <div className="hidden md:flex items-center gap-1">
            <span className="text-on-surface-variant">CODE:</span>
            <span className="bg-surface-container px-1.5 py-0.5 rounded text-secondary font-semibold">TITAN2025</span>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-spec-code text-label-sm">
            SHARE<span className="material-symbols-outlined text-sm">share</span>
          </a>
        </div>
      </div>
      <FilterBar />
      <TelemetryInspector />
      <main className="w-full px-gutter-lg py-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg">
          {workstations.map((workstation) => (
            <WorkstationCard key={workstation.id} workstation={workstation} />
          ))}
        </div>
      </main>
    </>
  );
}