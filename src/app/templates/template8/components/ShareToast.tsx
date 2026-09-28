import { Check, X } from "lucide-react";

export default function ShareToast({ message, onClose }: { message: string; onClose: () => void }) { 
    return (<div role="status" className="fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-lg border border-[#747686]/30 bg-[#213145] px-4 py-3 text-[13px] text-white shadow-lg">
        <Check className="h-4 w-4 text-[#86efac]" />
        <span>{message}</span>
        <button type="button" onClick={onClose} aria-label="Close notification" className="ml-2 text-white/70 hover:text-white">
        <X className="h-4 w-4" />
        </button>
        </div>) }