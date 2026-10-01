import { BadgeCheck, Gauge, ScrollText, Zap, type LucideIcon } from "lucide-react";

/**
 * Maps the `vehicleBadgeIcon` names stored in `data.ts` to their Lucide
 * component, so the data file itself stays free of JSX/icon imports.
 */
export const badgeIcons: Record<string, LucideIcon> = {
  BadgeCheck,
  ScrollText,
  Zap,
  Gauge,
};
