"use client";

import { ArrowDown, ArrowUpRight, Compass, Globe, Shield, Terminal, Zap, UploadCloud, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { disciplines, lifestyleImages, metrics, roles, type Discipline, type Role } from "../data";
import ApplicationModal from "./ApplicationModal";
import EngineeringCodexModal from "./EngineeringCodexModal";
import RoleCard from "./RoleCard";
import TelemetryCanvas from "./TelemetryCanvas";

export default function PrismWorkspace() {
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [showCodexModal, setShowCodexModal] = useState(false);
  const [dropzoneFile, setDropzoneFile] = useState("");
  const [dropzoneSubmitted, setDropzoneSubmitted] = useState(false);

  const filteredRoles = roles.filter((role) => {
    const matchesDiscipline = activeDiscipline === "all" || role.discipline === activeDiscipline;
    const matchesQuery =
      !searchQuery ||
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDiscipline && matchesQuery;
  });

  return (
    <main className="relative min-h-screen bg-[#090d16] text-[#dfe2ee] font-sans selection:bg-violet-500 selection:text-white overflow-x-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Banner / Throughput indicator */}
      <div className="relative z-20 border-b border-white/10 bg-[#0f131c]/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span className="font-mono text-xs text-gray-300">LIVE HEADCOUNT PIPELINE · Q2 2025</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-1.5 shadow-inner">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
              <Zap className="h-3.5 w-3.5" />
            </div>
            <div className="text-xs">
              <span className="text-gray-400 font-mono">Throughput Load </span>
              <span className="font-bold text-white font-mono">14.2B events/sec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Engineer the next frontier of <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">real-time cloud</span> observability.
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              We are scaling Prism’s distributed streaming telemetry engine across 40+ global regions. Join an autonomous, remote-first engineering cohort pioneering sub-millisecond query latency.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#open-roles-feed"
                className="flex items-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all shadow-xl shadow-violet-600/25 group"
              >
                <span>Explore Open Roles</span>
                <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => setShowCodexModal(true)}
                className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all backdrop-blur-md"
              >
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span>Read Engineering Codex</span>
              </button>
            </div>

            {/* Foundation pillars */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest">Foundation</span>
                <span className="text-sm font-bold text-white mt-0.5 block">100% Rust / eBPF</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest">Cadence</span>
                <span className="text-sm font-bold text-white mt-0.5 block">Async First</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-gray-400 uppercase tracking-widest">Offsites</span>
                <span className="text-sm font-bold text-white mt-0.5 block">Bi-Annual Global</span>
              </div>
            </div>
          </div>

          {/* Right column: 3D Telemetry Canvas */}
          <div className="lg:col-span-5 relative h-[420px] rounded-3xl border border-violet-500/20 bg-gradient-to-b from-[#141822]/80 to-[#0a0d16]/90 p-6 shadow-2xl overflow-hidden flex items-center justify-center">
            <TelemetryCanvas />
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1.5 font-mono text-[11px] text-cyan-400 shadow-lg">
              <Globe className="h-3.5 w-3.5" />
              <span>Global Availability <strong className="text-white">99.999% SLA</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="relative z-10 border-y border-white/10 bg-[#0f131c]/60 backdrop-blur-md py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{m.value}</span>
                {m.sub && <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">{m.sub}</span>}
              </div>
              <p className="text-xs font-semibold text-gray-200">{m.label}</p>
              <p className="text-[11px] text-gray-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles & Engineering Primitives Feed */}
      <section id="open-roles-feed" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Compass className="h-4 w-4" /> Autonomous Squads
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Active Openings & Engineering Primitives
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              High ownership, transparent compensation bands, and foundational equity packages. Filter by domain below.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, tech, stack..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-gray-400 outline-none focus:border-violet-500 transition-colors"
            />
          </div>
        </div>

        {/* Discipline Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {disciplines.map((d) => (
            <button
              type="button"
              key={d.id}
              onClick={() => setActiveDiscipline(d.id as Discipline)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all whitespace-nowrap ${
                activeDiscipline === d.id
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        {filteredRoles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoles.map((role) => (
              <RoleCard key={role.id} role={role} onApply={(r) => setSelectedRole(r)} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <p className="text-sm text-gray-400">No active openings found matching your search criteria.</p>
          </div>
        )}
      </section>

      {/* Engineering Lifestyle Section */}
      <section className="relative z-10 border-t border-white/10 bg-[#0f131c]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">Engineering Lifestyle</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Work where you thrive, meet where you celebrate.
            </h2>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Autonomous execution with full calendar ownership, async pull request reviews, and twice-yearly engineering summits in Lisbon, Tokyo, and Boulder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifestyleImages.map((img) => (
              <div key={img.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[16/10]">
                <img src={img.url} alt={img.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-white">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drop Resume / Open Submissions Section */}
      <section className="relative z-10 border-t border-white/10 bg-[#0c101a] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Open Telemetry Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Don&apos;t see your specific role? Drop your resume.
          </h2>
          <p className="text-sm text-gray-300 mt-3 max-w-xl mx-auto leading-relaxed">
            We are perpetually seeking exceptional engineers, technical designers, and distributed systems builders. Share your GitHub, portfolio, or CV — our founders review open submissions weekly.
          </p>

          <div className="mt-10 rounded-2xl border border-violet-500/30 bg-[#141822]/90 p-8 text-left shadow-2xl backdrop-blur-md">
            {dropzoneSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Open Application Dispatched</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  Your general application has been successfully ingested into Prism&apos;s candidate registry. Founders review submissions every Monday.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDropzoneSubmitted(true);
                }}
                className="space-y-5"
              >
                <label className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 p-8 text-center cursor-pointer hover:bg-white/10 transition-colors">
                  <UploadCloud className="h-8 w-8 text-violet-400 mb-3" />
                  <span className="text-sm font-semibold text-white">
                    {dropzoneFile ? dropzoneFile : "Drag & drop your PDF / CV or click to browse"}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">Supported formats: PDF, DOCX (Max 15MB)</span>
                  <input
                    required
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) setDropzoneFile(f.name);
                    }}
                    className="sr-only"
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Full Legal Name</label>
                    <input
                      required
                      defaultValue="Linus Torvalds"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors"
                      placeholder="Linus Torvalds"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Email or GitHub / Personal URL</label>
                    <input
                      required
                      defaultValue="github.com/torvalds"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors"
                      placeholder="github.com/username or email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Area of Highest Mastery</label>
                  <select className="w-full rounded-xl border border-white/10 bg-[#181c24] px-4 py-2.5 text-xs text-white outline-none focus:border-violet-500 transition-colors cursor-pointer">
                    <option>Distributed Systems, Kernel & eBPF</option>
                    <option>Real-Time Telemetry & Storage Engines</option>
                    <option>Frontend Grafana / WebGL Canvas Workbenches</option>
                    <option>AI Foundational Time-Series Models</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 py-3.5 text-xs font-semibold text-white transition-all shadow-xl shadow-violet-600/25 flex items-center justify-center gap-2 group"
                >
                  <span>Submit Open Application</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-2 font-mono text-[11px] text-gray-400">
                  <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-cyan-400" /> Direct founder review</span>
                  <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-violet-400" /> 48-hour response guarantee</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> 100% confidential submission</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedRole && <ApplicationModal role={selectedRole} onClose={() => setSelectedRole(null)} />}
      {showCodexModal && <EngineeringCodexModal onClose={() => setShowCodexModal(false)} />}
    </main>
  );
}
