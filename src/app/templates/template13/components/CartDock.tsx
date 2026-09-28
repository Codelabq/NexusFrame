interface CartDockProps {
  count: number;
  total: number;
  ticketLabel: string;
  title: string;
  summaryLabel: string;
  autoConfirmLabel: string;
  checkoutLabel: string;
  onCheckout: () => void;
}

export default function CartDock({ count, total, ticketLabel, title, summaryLabel, autoConfirmLabel, checkoutLabel, onCheckout }: CartDockProps) { return <aside className="fixed bottom-0 left-0 right-0 z-40 border-t-[3px] border-black bg-[#ffe600] px-4 py-2 shadow-[6px_0_0_#1b1b1b]"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-2 sm:flex-row sm:items-center"><div className="flex items-center justify-between gap-3"><span className="border border-black bg-black px-2 py-1 font-['Space_Grotesk'] text-[10px] font-bold uppercase text-[#ffe600]">{ticketLabel}</span><span className="font-['Space_Grotesk'] text-lg font-bold uppercase">{title}</span><span className="border border-black bg-white px-2 py-1 font-['Work_Sans'] text-[12px] font-bold">{count} {summaryLabel} · ${total.toFixed(2)}</span></div><div className="flex items-center gap-2"><span className="hidden border-2 border-black bg-white px-2 py-2 font-['Space_Grotesk'] text-[10px] font-bold uppercase lg:inline">{autoConfirmLabel}</span><button type="button" onClick={onCheckout} className="flex flex-1 items-center justify-center gap-2 border-[3px] border-black bg-black px-4 py-2 font-['Space_Grotesk'] text-sm font-bold uppercase text-[#ffe600] hover:bg-[#ff5500]">{checkoutLabel}</button></div></div></aside>; }
