"use client";

import { useEffect, useMemo, useState } from "react";
import type {
	JobBoards03Data,
	kromaDiscipline,
	kromaDrawerField,
	kromaRole,
	kromaRoleCardLabels,
} from "../types";
import ApplicationDrawer from "./ApplicationDrawer";
import CinematicHero from "./CinematicHero";
import DisciplineFilterBar from "./DisciplineFilterBar";
import MetricsStrip from "./MetricsStrip";
import RoleGrid from "./RoleGrid";

/** Unified props: dynamic content from `data.ts` plus static template copy. */
type KromaRosterProps = JobBoards03Data & {
	disciplines: kromaDiscipline[];
	heroImageAlt: string;
	heroStatusLeft: string;
	heroTickerItems: string[];
	heroCodeLabel: string;
	heroSoundOnLabel: string;
	heroSoundOffLabel: string;
	heroFpsBadge: string;
	heroRatioBadge: string;
	heroTimecodeLabel: string;
	allDisciplineId: string;
	immediateShootsLabel: string;
	immediateShootsCount: string;
	avgDayRateLabel: string;
	avgDayRateValue: string;
	gridEyebrow: string;
	gridTitle: string;
	gridShowingLabel: string;
	gridEmptyLabel: string;
	roleCardLabels: kromaRoleCardLabels;
	drawerLabels: {
		drawerEyebrow: string;
		drawerSuccessTitle: string;
		drawerSuccessBody: string;
		drawerCloseLabel: string;
		drawerNotesPlaceholder: string;
		drawerConsentLabel: string;
		drawerSubmitLabel: string;
		drawerFootnote: string;
		drawerFields: kromaDrawerField[];
	};
};

export default function KromaRoster({
	resolvedObject,
}: {
	resolvedObject: KromaRosterProps;
}) {
	const {
		heroImageUrl,
		heroImageAlt,
		heroStatusLeft,
		heroTickerItems,
		heroCodeLabel,
		heroTitle,
		heroDescription,
		heroSoundOnLabel,
		heroSoundOffLabel,
		heroFpsBadge,
		heroRatioBadge,
		heroTimecodeLabel,
		disciplines,
		allDisciplineId,
		immediateShootsLabel,
		immediateShootsCount,
		avgDayRateLabel,
		avgDayRateValue,
		gridEyebrow,
		gridTitle,
		gridShowingLabel,
		gridEmptyLabel,
		roles,
		roleCardLabels,
		metrics,
		drawerLabels,
	} = resolvedObject;

	const [discipline, setDiscipline] = useState(allDisciplineId);
	const [soundActive, setSoundActive] = useState(false);
	const [frame, setFrame] = useState(0);
	const [selectedRole, setSelectedRole] = useState<kromaRole | null>(null);
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => { const timer = window.setInterval(() => setFrame((current) => (current + 1) % (24 * 60 * 60)), 1000 / 24); return () => window.clearInterval(timer); }, []);
	useEffect(() => { if (!selectedRole) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedRole(null); }; window.addEventListener("keydown", onKeyDown); document.body.style.overflow = "hidden"; return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; }; }, [selectedRole]);

	const visibleRoles = useMemo(() => discipline === allDisciplineId ? roles : roles.filter((role) => role.roleDiscipline === discipline), [discipline, allDisciplineId, roles]);

	const disciplineCounts = useMemo(() => {
		const counts: Record<string, number> = {};
		disciplines.forEach((item) => {
			counts[item.disciplineId] = item.disciplineId === allDisciplineId ? roles.length : roles.filter((role) => role.roleDiscipline === item.disciplineId).length;
		});
		return counts;
	}, [disciplines, allDisciplineId, roles]);

	const totalFrames = 24 * 60 * 60;
	const hours = Math.floor(frame / (24 * 60 * 60));
	const minutes = Math.floor((frame % (24 * 60 * 60)) / (24 * 60));
	const seconds = Math.floor((frame % (24 * 60)) / 24);
	const currentFrame = frame % 24;
	const timecode = [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":") + ":" + String(currentFrame).padStart(2, "0");

	return <main className="bg-[#0a0a0c] text-[#f1f3ff]"><CinematicHero imageUrl={heroImageUrl} imageAlt={heroImageAlt} statusLeft={heroStatusLeft} tickerItems={heroTickerItems} codeLabel={heroCodeLabel} title={heroTitle} description={heroDescription} soundOnLabel={heroSoundOnLabel} soundOffLabel={heroSoundOffLabel} fpsBadge={heroFpsBadge} ratioBadge={heroRatioBadge} timecodeLabel={heroTimecodeLabel} soundActive={soundActive} timecode={timecode} progress={(frame / totalFrames) * 100} onSoundToggle={() => setSoundActive((active) => !active)} /><DisciplineFilterBar disciplines={disciplines} counts={disciplineCounts} active={discipline} immediateShootsLabel={immediateShootsLabel} immediateShootsCount={immediateShootsCount} avgDayRateLabel={avgDayRateLabel} avgDayRateValue={avgDayRateValue} onChange={setDiscipline} /><RoleGrid roles={visibleRoles} eyebrow={gridEyebrow} title={gridTitle} showingLabel={gridShowingLabel} emptyLabel={gridEmptyLabel} roleCardLabels={roleCardLabels} onApply={(role) => { setSubmitted(false); setSelectedRole(role); }} /><MetricsStrip metrics={metrics} />{selectedRole && <ApplicationDrawer role={selectedRole} submitted={submitted} labels={drawerLabels} onClose={() => setSelectedRole(null)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} />}</main>;
}
