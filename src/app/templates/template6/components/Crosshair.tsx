"use client";
import {PlusIcon} from "lucide-react";
import { useEffect, useState } from "react";

interface PointerPosition {
  x: number;
  y: number;
}

export default function Crosshair() {
  const [position, setPosition] = useState<PointerPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-8 w-8 border border-[#caf300] bg-[#131313]/30"
      style={{ left: position.x, top: position.y, transform: "translate(-50%, -50%)" }}
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#caf300]/80" />
      <PlusIcon color="yellow" style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}/>
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#caf300]/80" />
      <span className="absolute left-[calc(100%+8px)] top-[-6px] whitespace-nowrap font-['JetBrains_Mono'] text-[9px] text-[#caf300]">
        X:{position.x.toString().padStart(4, "0")} Y:{position.y.toString().padStart(4, "0")}
      </span>
    </div>
  );
}
