"use client";

import { ArrowRight } from "lucide-react";
import type { Role } from "../data";

export default function RoleCard({ role, onApply }: { role: Role; onApply: (role: Role) => void }) {
  const isPriority = role.badgeType === "priority";

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141822]/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-600/5">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="font-mono text-[11px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
            {role.team} · {role.reqId}
          </span>
          {role.badge && (
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                isPriority
                  ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                  : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
              }`}
            >
              {role.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors mb-3">
          {role.title}
        </h3>

        <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed mb-4">
          {role.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {role.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-gray-300 border border-white/5"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between border-t border-white/10 pt-4 mb-4 text-xs">
          <span className="text-gray-400">{role.location}</span>
          <span className="font-semibold text-white font-mono">{role.compensation}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onApply(role)}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-md shadow-violet-600/20"
          >
            <span>Quick Apply</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
        {role.statusText && (
          <p className="mt-2 text-[10px] text-gray-400 text-center font-mono">{role.statusText}</p>
        )}
      </div>
    </article>
  );
}
