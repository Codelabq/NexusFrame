import { CheckCircle2 } from "lucide-react";

interface ToastNotificationProps {
  message: string;
  isVisible: boolean;
}

export default function ToastNotification({ message, isVisible }: ToastNotificationProps) {
  return (
    <aside
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-[#1e1b1e] text-[#fff7fb] font-['Inter'] text-[14px] font-[600] shadow-xl flex items-center gap-2 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <CheckCircle2 aria-hidden="true" size={18} />
      <span>{message}</span>
    </aside>
  );
}
