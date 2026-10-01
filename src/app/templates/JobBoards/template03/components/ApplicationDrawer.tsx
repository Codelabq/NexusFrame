import { Check, X } from "lucide-react";

interface DrawerRole {
  roleId: string;
  roleTitle: string;
  roleCampaign: string;
  roleCompensation: string;
  roleTools: string[];
}

interface DrawerLabels {
  drawerEyebrow: string;
  drawerSuccessTitle: string;
  drawerSuccessBody: string;
  drawerCloseLabel: string;
  drawerNotesPlaceholder: string;
  drawerConsentLabel: string;
  drawerSubmitLabel: string;
  drawerFootnote: string;
  drawerFields: { drawerFieldLabel: string; drawerFieldName: string; drawerFieldType: string; drawerFieldPlaceholder: string }[];
}

type ApplicationDrawerProps = {
  role: DrawerRole;
  submitted: boolean;
  labels: DrawerLabels;
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function ApplicationDrawer({ role, submitted, labels, onClose, onSubmit }: ApplicationDrawerProps) {
  return <><button type="button" onClick={onClose} aria-label={labels.drawerCloseLabel} className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" /><aside role="dialog" aria-modal="true" aria-labelledby="application-title" className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[620px] flex-col border-l border-[#45464d] bg-[#131315] text-[#f1f3ff] shadow-[-20px_0_40px_rgba(0,0,0,.35)]"><header className="flex items-start justify-between gap-5 border-b border-[#45464d] p-6 sm:p-8"><div><p className="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.16em] text-[#ffb95f]">{labels.drawerEyebrow} {role.roleId}</p><h2 id="application-title" className="mt-2 font-['Bebas_Neue'] text-[clamp(2.6rem,7vw,4.5rem)] leading-[.86]">{role.roleTitle}</h2><p className="mt-3 font-['Space_Grotesk'] text-[11px] uppercase tracking-[0.1em] text-[#aeb0ba]">{role.roleCampaign} · {role.roleCompensation}</p></div><button type="button" onClick={onClose} aria-label={labels.drawerCloseLabel} className="shrink-0 border border-[#45464d] p-2 text-[#aeb0ba] transition-colors hover:border-[#ffb95f] hover:text-[#ffb95f]"><X className="h-5 w-5" /></button></header><div className="flex-1 overflow-y-auto p-6 sm:p-8">{submitted ? <div className="flex min-h-[360px] flex-col items-center justify-center text-center"><div className="flex h-14 w-14 items-center justify-center border border-[#ffb95f] text-[#ffb95f]"><Check className="h-7 w-7" /></div><h3 className="mt-6 font-['Bebas_Neue'] text-5xl">{labels.drawerSuccessTitle}</h3><p className="mt-3 max-w-sm font-['Space_Grotesk'] text-[13px] leading-6 text-[#aeb0ba]">{labels.drawerSuccessBody}</p><button type="button" onClick={onClose} className="mt-8 bg-[#f1f3ff] px-6 py-3 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.12em] text-[#111114] hover:bg-[#ffb95f]">{labels.drawerCloseLabel}</button></div> : <form onSubmit={onSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2">{labels.drawerFields.slice(0, 2).map((field) => <Field label={field.drawerFieldLabel} key={field.drawerFieldName}><input required name={field.drawerFieldName} type={field.drawerFieldType} placeholder={field.drawerFieldPlaceholder} /></Field>)}</div>{labels.drawerFields.slice(2, 3).map((field) => <Field label={field.drawerFieldLabel} key={field.drawerFieldName}><input required name={field.drawerFieldName} type={field.drawerFieldType} placeholder={field.drawerFieldPlaceholder} /></Field>)}<div className="grid gap-5 sm:grid-cols-2">{labels.drawerFields.slice(3, 5).map((field) => <Field label={field.drawerFieldLabel} key={field.drawerFieldName}><input required name={field.drawerFieldName} type={field.drawerFieldType} placeholder={field.drawerFieldPlaceholder || role.roleCompensation} /></Field>)}</div>{labels.drawerFields.slice(5, 6).map((field) => <Field label={field.drawerFieldLabel} key={field.drawerFieldName}><input name={field.drawerFieldName} placeholder={field.drawerFieldPlaceholder || role.roleTools.join(" / ")} /></Field>)}<Field label="Notes"><textarea name="notes" rows={4} placeholder={labels.drawerNotesPlaceholder} /></Field><label className="flex items-start gap-3 border border-[#45464d] p-3 font-['Space_Grotesk'] text-[11px] leading-5 text-[#aeb0ba]"><input required type="checkbox" className="mt-1 accent-[#ffb95f]" />{labels.drawerConsentLabel}</label><button type="submit" className="w-full bg-[#f1f3ff] px-5 py-3 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#111114] transition-colors hover:bg-[#ffb95f]">{labels.drawerSubmitLabel} <span className="ml-2">→</span></button><p className="text-center font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.12em] text-[#777985]">{labels.drawerFootnote}</p></form>}</div></aside></>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.14em] text-[#aeb0ba]"><span className="mb-2 block">{label}</span>{children}</label>; }
