export default function ConfiguratorHeader() {
  return (
    <header className="border-b border-[#1f242d] bg-[#0c0e12] px-4 py-3 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-[#2d3442] bg-[#12151b] text-[#38bdf8] text-xl">⚙</div>
          <div>
            <div className="font-['Inter'] text-lg font-semibold leading-none">Precision Workstation Configurator</div>
            <div className="font-['Inter'] text-[11px] text-[#64748b]">Modular hardware assembly · Telemetry validated</div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-1 font-['Inter'] text-[11px] font-medium">
          {["WORKSTATIONS", "COMPONENTS", "BENCHMARKS", "SUPPORT"].map((item, index) => (
            <button key={item} type="button" className={`border border-[#2d3442] bg-[#1e232f] px-3 py-2 text-[#f8fafc] hover:border-[#38bdf8] hover:bg-[#282f3f] ${index === 0 ? "border-[#0284c7]" : ""}`}>
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}