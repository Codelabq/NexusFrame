"use client";

import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

export interface ToastState {
  id: number;
  message: string;
  detail?: string;
}

interface ToastNotificationProps {
  toast: ToastState | null;
  onDismiss: () => void;
  duration?: number;
}

export default function ToastNotification({
  toast,
  onDismiss,
  duration = 2600,
}: ToastNotificationProps) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [toast, duration, onDismiss]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-[1rem] right-[1rem] left-[1rem] sm:left-auto z-[70] pointer-events-none flex justify-center sm:justify-end">
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-auto w-full sm:w-auto sm:min-w-[320px] max-w-[420px] flex items-start gap-[0.75rem] rounded-[0.5rem] border border-[#bfc7d2]/40 bg-[#ffffff]/95 backdrop-blur-xl px-[1rem] py-[0.75rem] shadow-[0_12px_32px_rgba(11,28,48,0.18)]"
      >
        <span className="mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#006194]/10 text-[#006194]">
          <CheckCircle2 className="h-4 w-4" />
        </span>
        <div className="flex flex-1 flex-col">
          <span className="font-['Plus_Jakarta_Sans'] text-[13px] leading-[18px] font-bold text-[#0b1c30]">
            {toast.message}
          </span>
          {toast.detail ? (
            <span className="font-['Manrope'] text-[13px] leading-[18px] text-[#3f4850]">
              {toast.detail}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={onDismiss}
          className="flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-[#707881] transition-colors duration-200 hover:bg-[#eff4ff] hover:text-[#0b1c30]"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
