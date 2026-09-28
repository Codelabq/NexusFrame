"use client";

import { useEffect, useMemo, useState } from "react";
import { roles } from "../data";
import ApplicationDrawer from "./ApplicationDrawer";
import CinematicHero from "./CinematicHero";
import DisciplineFilterBar from "./DisciplineFilterBar";
import MetricsStrip from "./MetricsStrip";
import RoleGrid from "./RoleGrid";

export default function KromaRoster() {
  const [discipline, setDiscipline] = useState("all");
  const [soundActive, setSoundActive] = useState(false);
  const [frame, setFrame] = useState(0);
  const [selectedRole, setSelectedRole] = useState<(typeof roles)[number] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { const timer = window.setInterval(() => setFrame((current) => (current + 1) % (24 * 60 * 60)), 1000 / 24); return () => window.clearInterval(timer); }, []);
  useEffect(() => { if (!selectedRole) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedRole(null); }; window.addEventListener("keydown", onKeyDown); document.body.style.overflow = "hidden"; return () => { window.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; }; }, [selectedRole]);

  const visibleRoles = useMemo(() => discipline === "all" ? roles : roles.filter((role) => role.discipline === discipline), [discipline]);
  const totalFrames = 24 * 60 * 60;
  const hours = Math.floor(frame / (24 * 60 * 60));
  const minutes = Math.floor((frame % (24 * 60 * 60)) / (24 * 60));
  const seconds = Math.floor((frame % (24 * 60)) / 24);
  const currentFrame = frame % 24;
  const timecode = [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":") + ":" + String(currentFrame).padStart(2, "0");

  return <main className="bg-[#0a0a0c] text-[#f1f3ff]"><CinematicHero soundActive={soundActive} timecode={timecode} progress={(frame / totalFrames) * 100} onSoundToggle={() => setSoundActive((active) => !active)} /><DisciplineFilterBar active={discipline} onChange={setDiscipline} /><RoleGrid roles={visibleRoles} onApply={(role) => { setSubmitted(false); setSelectedRole(role); }} /><MetricsStrip />{selectedRole && <ApplicationDrawer role={selectedRole} submitted={submitted} onClose={() => setSelectedRole(null)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} />}</main>;
}