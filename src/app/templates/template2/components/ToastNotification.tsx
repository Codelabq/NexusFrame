interface ToastNotificationProps {
  message: string;
  isVisible: boolean;
}

export default function ToastNotification({ message, isVisible }: ToastNotificationProps) {
  return (
    <aside
      className={`fixed bottom-[2.5rem] right-[4rem] z-50 bg-[#000000] text-[#ffffff] px-[1.5rem] py-[1rem] font-['Inter'] text-[11px] tracking-[0.15em] uppercase flex items-center gap-[1rem] shadow-xl transition-all duration-500 ease-out pointer-events-none ${
        !isVisible ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      }`}
      aria-live="polite"
    >
      <span className="material-symbols-outlined text-[16px]">check</span>
      <span>{message}</span>
    </aside>
  );
}
