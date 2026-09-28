"use client";

import { useState } from "react";
import {
  Bot,
  Minus,
  MessageSquare,
  X,
  ArrowUp,
} from "lucide-react";

export default function ChatbotPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      {/* Launcher button */}
      <button
        type="button"
        aria-label={isOpen ? "Close Nexus Assistant" : "Open Nexus Assistant"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-tr from-[#54ddfc] via-[#8ed5ff] to-[#c0c1ff] text-[#001e2c] font-['JetBrains_Mono'] text-[13px] font-semibold shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8),0_0_24px_rgba(56,189,248,0.45)] hover:brightness-110 active:scale-95 transition-all"
      >
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/30 pointer-events-none" />
        {isOpen ? <X size={18} /> : <MessageSquare size={18} />}
        <span className="hidden sm:inline">
          {isOpen ? "Close" : "Nexus Assistant"}
        </span>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[440px] max-w-[calc(100vw-3rem)] h-[620px] max-h-[calc(100vh-8rem)] rounded-[0.5rem] bg-[#191c22]/90 backdrop-blur-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(56,189,248,0.2)] border border-[#3e484f]/40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="h-14 px-3 bg-[#1d2026] flex items-center justify-between shrink-0 border-b border-[#3e484f]/30">
            <div className="flex items-center gap-2">
              <div className="relative p-[1.5px] rounded-[0.25rem] bg-gradient-to-tr from-[#54ddfc] via-[#8ed5ff] to-[#c0c1ff]">
                <div className="w-8 h-8 rounded-[7px] bg-[#0b0e14] flex items-center justify-center">
                  <Bot size={20} className="text-[#8ed5ff]" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-['Geist'] text-[15px] text-[#e1e2eb] font-semibold leading-none">
                    Nexus Assistant
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5 rounded bg-[#32353b] text-[#8ed5ff] font-medium border border-[#8ed5ff]/20">
                    v2.4
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#bdc8d1]">
                  Grounded in NexusFrame Docs
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                title="Minimize"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded flex items-center justify-center text-[#87929a] hover:text-[#e1e2eb] hover:bg-[#32353b] transition-colors"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 [&::-webkit-scrollbar]:hidden">
            {/* User message */}
            <div className="flex justify-end pl-8">
              <div className="bg-[#32353b] px-3 py-2.5 rounded-[0.5rem] rounded-tr-none text-[#e1e2eb] shadow-md border border-[#3e484f]/30">
                <p className="font-['JetBrains_Mono'] text-[12px] leading-relaxed">
                  I&apos;m having trouble pulling the variant price inside my
                  nested line items loop. What is the correct dot path?
                </p>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#87929a] mt-1 block text-right">
                  10:42 AM
                </span>
              </div>
            </div>

            {/* Assistant message */}
            <div className="flex flex-col gap-2 pr-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#38bdf8] flex items-center justify-center shadow-sm">
                  <Bot size={13} className="text-[#004965]" />
                </div>
                <span className="font-['Geist'] text-[12px] font-semibold text-[#8ed5ff]">
                  Nexus Copilot
                </span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#87929a]">
                  Model v3
                </span>
              </div>

              <div className="bg-[#1d2026] p-3 rounded-[0.5rem] rounded-tl-none flex flex-col gap-2.5 shadow-md border border-[#3e484f]/30">
                <p className="font-['JetBrains_Mono'] text-[12px] text-[#e1e2eb] leading-relaxed">
                  In NexusFrame, nested arrays inherit the root scope unless
                  prefixed with relative notation. To pull the item price
                  directly inside an iterative template block:
                </p>






              </div>
            </div>
          </div>

          {/* Composer */}
          <div className="p-2 bg-[#1d2026] shrink-0 flex flex-col gap-2 border-t border-[#3e484f]/30">
            <div className="relative bg-[#0b0e14] rounded-[0.25rem] p-2 flex flex-col gap-2 shadow-inner border border-[#3e484f]/30">
              <textarea
                rows={2}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Ask about paths, schemas, or templates... (⌘K)"
                className="w-full bg-transparent text-[#e1e2eb] placeholder:text-[#87929a] font-['JetBrains_Mono'] text-[12px] focus:outline-none resize-none leading-relaxed [&::-webkit-scrollbar]:hidden"
              />
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#87929a]">
                    {value.length} / 4,000
                  </span>
                  <button
                    type="button"
                    aria-label="Send message"
                    className="w-7 h-7 rounded-[0.25rem] bg-gradient-to-r from-[#38bdf8] to-[#54ddfc] text-[#004965] flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.4)] hover:brightness-110 active:scale-95 transition-all"
                  >
                    <ArrowUp size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
