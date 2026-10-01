"use client";

import { Activity } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";

const navigationLinks = [
  { label: "DROP TERMINAL", active: true },
  { label: "TELEMETRY ARCHIVE", active: false },
  { label: "PROOF MATRIX", active: false },
  { label: "PURGE QUEUE", active: false },
];

export default function TerminalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b-[2px] border-[#ffffff] bg-[#131313]">
      <div className="flex items-center justify-between bg-[#caf300] px-[32px] py-[4px] text-[10px] font-[500] tracking-[0.12em] text-[#596c00]">
        <span className="truncate">{"/// SYSTEM ONLINE /// DROP PROTOCOL INITIATED /// BLOCK #994102 /// ALL SALES FINAL"}</span>
        <span className="hidden shrink-0 items-center gap-[8px] md:flex"><Activity className="h-[12px] w-[12px]" /> LATENCY: 21MS</span>
      </div>
      <Navbar links={navigationLinks} isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen((open) => !open)} />
    </header>
  );
}
