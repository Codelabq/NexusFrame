'use client'
import {MoveRight, CircleCheck, RefreshCcw} from "lucide-react";

export default function MappingEngine({isTyping}: {isTyping: boolean}) {
  return (
    <div className="glass-panel glass-panel-glow rounded-lg p-md flex flex-col justify-center space-y-md relative">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="relative z-10 space-y-sm">
       <div className={`flex items-center justify-between bg-surface-container-low p-xs rounded border transition-all duration-300 ${isTyping ? "border-electric-cyan shadow-sm shadow-electric-cyan/20" : "border-stroke-cyan"}`}>     <span className="text-xs font-label-mono text-on-surface-variant">Template Prop: <span className="text-on-surface">heroTitle</span></span>
         <span className="material-symbols-outlined text-secondary text-sm"><MoveRight/></span>
       
          <span className="text-xs font-label-mono text-on-surface-variant">API Path: <span className="text-secondary">user.profile.name</span></span>
        <span className={`material-symbols-outlined text-sm ${isTyping ? "text-electric-cyan animate-spin" : "text-secondary"}`}>
                {isTyping ? <RefreshCcw/> : <CircleCheck/>}
              </span>  </div>
        <div className="flex items-center justify-between gap-md bg-surface-container-low p-xs rounded border border-stroke-cyan">
          <span className="text-xs font-label-mono text-on-surface-variant">Template Prop: <span className="text-on-surface">subText</span></span>
          <span className="material-symbols-outlined text-secondary text-sm"><MoveRight/></span>
          <span className="text-xs font-label-mono text-on-surface-variant">API Path: <span className="text-secondary">user.profile.role</span></span>
         <span className={`material-symbols-outlined text-sm ${isTyping ? "text-electric-cyan animate-spin" : "text-secondary"}`}>
                {isTyping ? <RefreshCcw/> : <CircleCheck/>}
              </span>  </div>
      </div>
      <div className="text-center">
        <div className="inline-block px-sm py-1 rounded-full bg-secondary/10 border border-secondary/30 text-[10px] font-label-mono text-secondary uppercase tracking-widest">
          Mapping Engine Active
        </div>
      </div>
    </div>
  );
}
