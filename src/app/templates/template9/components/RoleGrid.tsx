import type { kromaRole } from "@/types/index";
import RoleCard from "./RoleCard";

interface RoleCardLabels {
  roleCardLabelPrefix: string;
  roleCardCompensationLabel: string;
  roleCardTimelineLabel: string;
  roleCardCtaLabel: string;
}

type RoleGridProps = {
  roles: kromaRole[];
  eyebrow: string;
  title: string;
  showingLabel: string;
  emptyLabel: string;
  roleCardLabels: RoleCardLabels;
  onApply: (role: kromaRole) => void;
};

export default function RoleGrid({ roles, eyebrow, title, showingLabel, emptyLabel, roleCardLabels, onApply }: RoleGridProps) { return <section className="mx-auto max-w-[1280px] px-6 py-14 sm:px-10 lg:px-16"><div className="mb-8 flex items-end justify-between gap-6"><div><p className="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.16em] text-[#ffb95f]">{eyebrow}</p><h2 className="mt-2 font-['Bebas_Neue'] text-[clamp(2rem,4vw,3.2rem)] tracking-[0.03em] text-[#f1f3ff]">{title}</h2></div><span className="hidden font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.14em] text-[#777985] sm:block">Showing {roles.length} {showingLabel}</span></div>{roles.length ? <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{roles.map((role) => <RoleCard key={role.roleId} role={role} labels={roleCardLabels} onApply={onApply} />)}</div> : <div className="border border-[#45464d] p-12 text-center font-['Space_Grotesk'] text-[12px] uppercase tracking-[0.12em] text-[#aeb0ba]">{emptyLabel}</div>}</section>; }
