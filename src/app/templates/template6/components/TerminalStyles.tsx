'use client';

export default function TerminalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@600;700&display=swap');

      @keyframes marquee-forward {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }

      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }

      @keyframes float-levitate {
        0%, 100% { transform: translateY(0px) rotate(0deg); filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.9)) drop-shadow(0 0 15px rgba(202, 243, 0, 0.25)); }
        50% { transform: translateY(-14px) rotate(-1.5deg); filter: drop-shadow(0 32px 48px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 35px rgba(202, 243, 0, 0.65)); }
      }

      .animate-marquee-forward {
        animation: marquee-forward 18s linear infinite;
      }

      .animate-marquee-reverse {
        animation: marquee-reverse 22s linear infinite;
      }

      .scanlines-overlay {
        position: fixed;
        inset: 0;
        z-index: 9990;
        pointer-events: none;
        opacity: 0.75;
        background: linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(0, 0, 0, 0.35) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02));
        background-size: 100% 4px, 6px 100%;
      }
    `}</style>
  );
}
