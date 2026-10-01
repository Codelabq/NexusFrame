"use client";

import { useEffect } from "react";
import { X, Zap } from "lucide-react";

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
    <div className="pointer-events-none fixed bottom-[1rem] left-[1rem] right-[1rem] z-[70] flex justify-center sm:left-auto sm:justify-end">
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-auto flex w-full max-w-[440px] items-start gap-[0.75rem] rounded-[0.5rem] border border-[#3f4850]/60 bg-[#1c2b3c]/95 px-[1rem] py-[0.75rem] shadow-[0_18px_44px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:w-auto sm:min-w-[320px]"
      >
        <span className="mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#93ccff]/10">
          <Zap className="h-3.5 w-3.5 text-[#93ccff]" />
        </span>
        <div className="flex flex-1 flex-col">
          <span className="font-['Inter'] text-[14px] leading-[20px] tracking-[0.01em] font-medium text-[#d4e4fa]">
            {toast.message}
          </span>
          {toast.detail ? (
            <span className="font-['JetBrains_Mono'] text-[12px] leading-[16px] text-[#bfc7d2]">
              {toast.detail}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-[#89929b] transition-colors duration-200 hover:bg-[#273647] hover:text-[#d4e4fa]"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
