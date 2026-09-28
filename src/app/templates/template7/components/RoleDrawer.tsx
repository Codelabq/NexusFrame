import { Check, X } from "lucide-react";
import ApplicationForm from "./ApplicationForm";
import SectionLabel from "./SectionLabel";

interface RoleDrawerRole {
  roleTitle: string;
  roleDeptLabel: string;
  roleLocationLabel: string;
  roleCompensation: string;
  roleDescription: string;
  roleDeliverables: string[];
  roleSkills: string[];
}

interface RoleDrawerProps {
  role: RoleDrawerRole;
  onClose: () => void;
  overviewLabel: string;
  deliverablesLabel: string;
  skillsLabel: string;
  applyHeading: string;
  applySubtext: string;
  responseBadge: string;
  applicationFields: { applicationFieldLabel: string; applicationFieldPlaceholder: string; applicationFieldName: string; applicationFieldType: string }[];
  applicationUploadLabel: string;
  applicationUploadErrorType: string;
  applicationUploadErrorSize: string;
  applicationSubmitLabel: string;
  applicationSuccessMessage: string;
}

export default function RoleDrawer({ role, onClose, overviewLabel, deliverablesLabel, skillsLabel, applyHeading, applySubtext, responseBadge, applicationFields, applicationUploadLabel, applicationUploadErrorType, applicationUploadErrorSize, applicationSubmitLabel, applicationSuccessMessage }: RoleDrawerProps) { return <><style>{`@keyframes template7-slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }`}</style><button type="button" aria-label="Close job details" onClick={onClose} className="fixed inset-0 z-40 cursor-default bg-[#09090b]/20 backdrop-blur-[2px]" /><aside role="dialog" aria-modal="true" aria-labelledby="role-drawer-title" className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[580px] flex-col border-l border-[#e5e5e5] bg-white shadow-[-8px_0_24px_-16px_rgba(0,0,0,0.3)]" style={{ animation: "template7-slide-in 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}><header className="flex items-start justify-between gap-4 border-b border-[#eeeeee] bg-white p-6"><div className="min-w-0"><div className="mb-2 flex flex-wrap gap-1.5"><span className="rounded-full bg-[#e8e8e8] px-2.5 py-0.5 font-['JetBrains_Mono'] text-[10px] uppercase text-[#1a1c1c]">{role.roleDeptLabel}</span><span className="rounded-full bg-[#f3f3f3] px-2.5 py-0.5 font-['JetBrains_Mono'] text-[10px] uppercase text-[#47464a]">{role.roleLocationLabel}</span></div><h2 id="role-drawer-title" className="text-[21px] font-medium leading-7 tracking-[-0.02em]">{role.roleTitle}</h2><p className="mt-1 font-['JetBrains_Mono'] text-[11px] text-[#47464a]">{role.roleCompensation}</p></div><button type="button" onClick={onClose} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3f3f3] transition-colors hover:bg-[#e8e8e8]" aria-label="Close job details"><X className="h-4 w-4" /></button></header><div className="flex-1 space-y-8 overflow-y-auto p-6"><section><SectionLabel>{overviewLabel}</SectionLabel><p className="text-[13px] leading-6 text-[#1a1c1c]">{role.roleDescription}</p></section><section><SectionLabel>{deliverablesLabel}</SectionLabel><ul className="space-y-3">{role.roleDeliverables.map((item) => <li key={item} className="flex gap-2 text-[13px] leading-5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#78767b]" />{item}</li>)}</ul></section><section><SectionLabel>{skillsLabel}</SectionLabel><div className="flex flex-wrap gap-1.5">{role.roleSkills.map((skill) => <span key={skill} className="rounded bg-[#f3f3f3] px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-[#47464a]">{skill}</span>)}</div></section><section className="rounded-md bg-[#f3f3f3] p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="text-[15px] font-medium">{applyHeading}</h3><p className="mt-1 text-[12px] text-[#47464a]">{applySubtext}</p></div><span className="shrink-0 rounded bg-[#e2e2e2] px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] text-[#47464a]">{responseBadge}</span></div><ApplicationForm fields={applicationFields} uploadLabel={applicationUploadLabel} errorType={applicationUploadErrorType} errorSize={applicationUploadErrorSize} submitLabel={applicationSubmitLabel} successMessage={applicationSuccessMessage} /></section></div></aside></>; }
