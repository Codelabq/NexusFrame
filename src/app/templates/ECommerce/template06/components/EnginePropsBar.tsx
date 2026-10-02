import { Activity, Box, Clock3, Radio, type LucideIcon } from "lucide-react";

interface TelemetryItem {
  telemetryItemLabel: string;
  telemetryItemValue: string;
  telemetryItemIcon?: string;
}

interface EnginePropsBarProps {
  items: TelemetryItem[];
}

const telemetryIcons: Record<string, LucideIcon> = {
  clock3: Clock3,
  radio: Radio,
  activity: Activity,
  box: Box,
};

export default function EnginePropsBar({ items }: EnginePropsBarProps) {
  return (
    <div className="relative z-10 grid w-full grid-cols-1 items-center gap-[16px] border-x-[1px] border-b-[2px] border-[#353535] bg-[#2a2a2a] p-[16px] md:grid-cols-4">
      {items.map((item) => {
        const Icon = telemetryIcons[item.telemetryItemIcon ?? ""] ?? Activity;
        return (
          <div key={item.telemetryItemLabel} className="flex items-start gap-[8px] border-b-[1px] border-[#353535] pb-[8px] last:border-b-0 last:pb-0 md:border-b-0 md:pb-0 md:first:border-r-[1px] md:first:border-[#353535] md:last:border-r-0">
            <Icon className="mt-[2px] h-[14px] w-[14px] shrink-0 text-[#caf300]" />
            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-[0.1em] text-[#a0a0a0]">{item.telemetryItemLabel}</p>
              <p className="mt-[4px] truncate text-[10px] font-[700] uppercase text-[#e2e2e2]">{item.telemetryItemValue}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
