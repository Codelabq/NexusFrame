import type { omniCardLabels, omniRequisition } from "@/types/index";
import RequisitionCard from "./RequisitionCard";

type RequisitionListProps = {
  requisitions: omniRequisition[];
  savedIds: string[];
  emptyTitle: string;
  emptyBody: string;
  cardLabels: omniCardLabels;
  onSave: (id: string) => void;
  onShare: (requisition: omniRequisition) => void;
  onDetails: (requisition: omniRequisition) => void;
  onApply: (requisition: omniRequisition) => void;
};

export default function RequisitionList({ requisitions, savedIds, emptyTitle, emptyBody, cardLabels, onSave, onShare, onDetails, onApply }: RequisitionListProps) { return <div className="flex flex-col gap-4">{requisitions.length > 0 ? requisitions.map((requisition) => <RequisitionCard key={requisition.requisitionId} requisition={requisition} saved={savedIds.includes(requisition.requisitionId)} cardLabels={cardLabels} onSave={() => onSave(requisition.requisitionId)} onShare={() => onShare(requisition)} onDetails={() => onDetails(requisition)} onApply={() => onApply(requisition)} />) : <div className="rounded-lg border border-[#c4c5d7] bg-white px-6 py-16 text-center"><SearchIcon /><h2 className="mt-3 text-[18px] font-bold text-[#0b1c30]">{emptyTitle}</h2><p className="mt-1 text-[13px] text-[#434655]">{emptyBody}</p></div>}</div>; }
function SearchIcon() { return <svg className="mx-auto h-8 w-8 text-[#747686]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>; }
