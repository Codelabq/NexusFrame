const productImageUrl =
'https://banner2.cleanpng.com/20230429/xrr/transparent-space-boots-cool-boots-white-yellow-shoes-1711147140523.webp'
export default function ProductCanvas() {
  return (
    <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden border-[1px] border-[#353535] bg-[#1f1f1f] p-[16px] lg:col-span-6">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-['Space_Grotesk'] text-[140px] font-[700] tracking-wider text-[#353535]/40">
        MK-IV 00
      </div>

      <div className="pointer-events-none absolute right-[32px] top-[48px] z-20 hidden flex-col items-end sm:flex">
        <div className="border-[1px] border-[#ffffff] bg-[#131313] px-[4px] py-[2px] font-['JetBrains_Mono'] text-[10px] uppercase text-[#ffffff] shadow-[2px_2px_0px_0px_#caf300]">
          VOLT REACTIVE TENSION CORDS [P-01]
        </div>
        <div className="h-12 w-[1px] bg-[#caf300]" />
        <div className="h-[4px] w-[4px] animate-ping bg-[#caf300]" />
      </div>

      <div className="pointer-events-none absolute bottom-[48px] left-[32px] z-20 hidden flex-col items-start sm:flex">
        <div className="h-[4px] w-[4px] animate-ping bg-[#caf300]" />
        <div className="h-12 w-[1px] bg-[#caf300]" />
        <div className="border-[1px] border-[#caf300] bg-[#131313] px-[4px] py-[2px] font-['JetBrains_Mono'] text-[10px] uppercase text-[#ffffff] shadow-[2px_2px_0px_0px_#ffffff]">
          PROTOTYPE 7-LUG SOLE // 480G
        </div>
      </div>

      <div className="group relative z-10 w-full max-w-[500px] cursor-pointer">
        <div className="animate-[float-levitate_4.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-105">
          <img
            src={productImageUrl}
            alt="CYBER-RUNNER MK-IV futuristic sneaker suspended in a dark industrial vault"
            className="h-auto w-full object-contain contrast-125 transition-all duration-300"
          />
        </div>
        <div className="absolute -bottom-[16px] right-[16px] border-[1px] border-[#353535] bg-[#131313] px-[16px] py-[8px] font-['JetBrains_Mono'] text-[10px] text-[#e2e2e2] transition-colors group-hover:border-[#caf300] group-hover:text-[#caf300]">
          MODEL ID: <span className="font-[700] text-[#caf300]">VK-4099-ALPHA</span>
        </div>
      </div>
    </div>
  );
}
