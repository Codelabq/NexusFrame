"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import {
  Bot,
  Minus,
  MessageSquare,
  X,
  ArrowUp,
} from "lucide-react";

// Marker for silent, navigation-triggered messages. The user never sees the
// bubble containing this text — only the AI's resulting welcome reply.
const SYSTEM_EVENT_PREFIX = "[SYSTEM EVENT]";

export default function ChatbotPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [hasUnread, setHasUnread] = useState(false);
  const pathname = usePathname();

  let step: "landing" | "studio" | "preview" | "unknown" = "unknown";
  if (pathname === "/") step = "landing";
  else if (pathname === "/studio") step = "studio";
  else if (pathname === "/preview") step = "preview";

  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "submitted" || status === "streaming";
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastStepRef = useRef<string | null>(null);
  const lastSeenIdRef = useRef<string | null>(null);

  // --- Auto-scroll ---
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading,isOpen]);

  // --- Proactive per-page welcome message ---
  // Fires once on first mount (the page the user lands on first) and again
  // every time `step` actually changes (real navigation, not re-renders).
  useEffect(() => {
    if (step === "unknown") return;
    if (lastStepRef.current === step) return;
    lastStepRef.current = step;

    sendMessage(
      {
        text: `${SYSTEM_EVENT_PREFIX} The user just arrived on the "${step}" page. Greet them in one short, friendly sentence and briefly mention what they can do here.`,
      },
      { body: { step } },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  // --- Unread indicator when a message arrives while the panel is closed ---
  const visibleMessages = messages.filter((m) => {
    const text = m.parts.find((p) => p.type === "text")?.text ?? "";
    return !text.startsWith(SYSTEM_EVENT_PREFIX);
  });

  useEffect(() => {
      const last = visibleMessages[visibleMessages.length - 1];

      if (isOpen) {
       // Mark whatever is currently visible as "seen" the moment the panel opens.
       lastSeenIdRef.current = last?.id ?? null;
      setHasUnread(false);
      return;
    }
      if (
           last &&
           last.role === "assistant" &&
           !isLoading &&
           last.id !== lastSeenIdRef.current
         ) {
      setHasUnread(true);
    }
  }),[visibleMessages.length, isLoading, isOpen]
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim() || isLoading) return;
    sendMessage({ text: value }, { body: { step } });
    setValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <>
      {/* Launcher button */}
      <button
        type="button"
        aria-label={isOpen ? "Close Nexus Assistant" : "Open Nexus Assistant"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-tr from-[#54ddfc] via-[#8ed5ff] to-[#c0c1ff] text-[#001e2c] font-['JetBrains_Mono'] text-[13px] font-semibold shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8),0_0_24px_rgba(56,189,248,0.45)] hover:brightness-110 active:scale-95 transition-all"
      >
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/30 pointer-events-none" />
        {isOpen ? <X size={18} /> : <MessageSquare size={18} />}
        <span className="hidden sm:inline">
          {isOpen ? "Close" : "Nexus Assistant"}
        </span>
        {!isOpen && hasUnread && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full ring-2 ring-[#191c22] animate-pulse" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[440px] max-w-[calc(100vw-3rem)] h-[620px] max-h-[calc(100vh-8rem)] rounded-[0.5rem] bg-[#191c22]/90 backdrop-blur-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(56,189,248,0.2)] border border-[#3e484f]/40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="h-14 px-3 bg-[#1d2026] flex items-center justify-between shrink-0 border-b border-[#3e484f]/30">
            <div className="flex items-center gap-2">
              <div className="relative p-[1.5px] rounded-[0.25rem] bg-gradient-to-tr from-[#54ddfc] via-[#8ed5ff] to-[#c0c1ff]">
                <div className="w-8 h-8 rounded-[7px] bg-[#0b0e14] flex items-center justify-center">
                  <Bot size={20} className="text-[#8ed5ff]" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-['Geist'] text-[15px] text-[#e1e2eb] font-semibold leading-none">
                    Nexus Assistant
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5 rounded bg-[#32353b] text-[#8ed5ff] font-medium border border-[#8ed5ff]/20">
                    v2.4
                  </span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#bdc8d1]">
                  Grounded in NexusFrame Docs
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                title="Minimize"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded flex items-center justify-center text-[#87929a] hover:text-[#e1e2eb] hover:bg-[#32353b] transition-colors"
              >
                <Minus size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-3 flex flex-col gap-3 [&::-webkit-scrollbar]:hidden"
          >
            {visibleMessages.map((message) => {
              const text = message.parts
                .filter((p) => p.type === "text")
                .map((p) => (p as { text: string }).text)
                .join("");
              const isUser = message.role === "user";

              if (isUser) {
                return (
                  <div key={message.id} className="flex justify-end pl-8">
                    <div className="bg-[#32353b] px-3 py-2.5 rounded-[0.5rem] rounded-tr-none text-[#e1e2eb] shadow-md border border-[#3e484f]/30">
                      <p className="font-['JetBrains_Mono'] text-[12px] leading-relaxed whitespace-pre-wrap">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <div key={message.id} className="flex flex-col gap-2 pr-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#38bdf8] flex items-center justify-center shadow-sm">
                      <Bot size={13} className="text-[#004965]" />
                    </div>
                    <span className="font-['Geist'] text-[12px] font-semibold text-[#8ed5ff]">
                      Nexus Copilot
                    </span>
                  </div>
                  <div className="bg-[#1d2026] p-3 rounded-[0.5rem] rounded-tl-none flex flex-col gap-2.5 shadow-md border border-[#3e484f]/30">
                    <p className="font-['JetBrains_Mono'] text-[12px] text-[#e1e2eb] leading-relaxed whitespace-pre-wrap">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex flex-col gap-2 pr-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#38bdf8] flex items-center justify-center shadow-sm">
                    <Bot size={13} className="text-[#004965]" />
                  </div>
                  <span className="font-['Geist'] text-[12px] font-semibold text-[#8ed5ff]">
                    Nexus Copilot
                  </span>
                </div>
                <div className="bg-[#1d2026] px-3 py-2.5 rounded-[0.5rem] rounded-tl-none flex items-center gap-1 w-fit shadow-md border border-[#3e484f]/30">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8ed5ff] [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8ed5ff] [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8ed5ff]" />
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={handleSubmit}
            className="p-2 bg-[#1d2026] shrink-0 flex flex-col gap-2 border-t border-[#3e484f]/30"
          >
            <div className="relative bg-[#0b0e14] rounded-[0.25rem] p-2 flex flex-col gap-2 shadow-inner border border-[#3e484f]/30">
              <textarea
                rows={2}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about paths, schemas, or templates... (⌘K)"
                className="w-full bg-transparent text-[#e1e2eb] placeholder:text-[#87929a] font-['JetBrains_Mono'] text-[12px] focus:outline-none resize-none leading-relaxed [&::-webkit-scrollbar]:hidden"
              />
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#87929a]">
                    {value.length} / 4,000
                  </span>
                  <button
                    type="submit"
                    disabled={isLoading || !value.trim()}
                    aria-label="Send message"
                    className="w-7 h-7 rounded-[0.25rem] bg-gradient-to-r from-[#38bdf8] to-[#54ddfc] text-[#004965] flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.4)] hover:brightness-110 active:scale-95 transition-all disabled:opacity-40"
                  >
                    <ArrowUp size={16} />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
