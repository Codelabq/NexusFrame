import { Search } from "lucide-react";
import type { nexusRole } from "../types";
import JobRow from "./JobRow";

type JobListProps = {
  roles: nexusRole[];
  columns: string[];
  emptyTitle: string;
  emptyBody: string;
  resetLabel: string;
  onSelectRole: (role: nexusRole) => void;
  onReset: () => void;
};

export default function JobList({ roles, columns, emptyTitle, emptyBody, resetLabel, onSelectRole, onReset }: JobListProps) { return <section className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:px-6 lg:px-6"><div className="overflow-hidden rounded-md border border-[#eeeeee] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"><div className="hidden grid-cols-12 bg-[#f3f3f3]/50 px-6 py-3 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-[0.06em] text-[#47464a] md:grid"><div className="col-span-5">{columns[0]}</div><div className="col-span-3">{columns[1]}</div><div className="col-span-3">{columns[2]}</div><div className="col-span-1 text-right">{columns[3]}</div></div>{roles.length > 0 ? roles.map((role) => <JobRow key={role.roleId} role={role} onSelect={onSelectRole} />) : <EmptyJobs title={emptyTitle} body={emptyBody} resetLabel={resetLabel} onReset={onReset} />}</div></section>; }
function EmptyJobs({ title, body, resetLabel, onReset }: { title: string; body: string; resetLabel: string; onReset: () => void }) { return <div className="flex flex-col items-center px-6 py-16 text-center"><Search className="mb-3 h-8 w-8 text-[#78767b]" /><h2 className="text-[18px] font-medium">{title}</h2><p className="mt-1 max-w-sm text-[13px] leading-5 text-[#47464a]">{body}</p><button type="button" onClick={onReset} className="mt-4 rounded bg-black px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#27272a]">{resetLabel}</button></div>; }
