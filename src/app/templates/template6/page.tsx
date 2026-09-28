import { ChevronDown, LockKeyhole, Radio } from "lucide-react";
import Crosshair from "./components/Crosshair";
import CatalogArchive from "./components/CatalogArchive";
import DiagnosticFooter from "./components/DiagnosticFooter";
import EnginePropsBar from "./components/EnginePropsBar";
import MarqueeTicker from "./components/MarqueeTicker";
import ProductCanvas from "./components/ProductCanvas";
import PurchaseTerminal from "./components/PurchaseTerminal";
import TerminalHeader from "./components/TerminalHeader";
import TerminalStyles from "./components/TerminalStyles";
import type { NVaultTerminalTemplateData } from "@/types/index";
import { placeholder } from "./data";

export default function Template6Page({
  resolvedObject = {},
}: {
  resolvedObject?: Partial<NVaultTerminalTemplateData>;
}) {
  // Static template copy (not resolved from the caller).
  const secureEnclaveLabel = "Secure enclave active";
  const nodeLine = "NODE: NYKEE-01 // ENCRYPTED ALLOCATION PIPELINE";
  const topBarText =
    "/// SYSTEM ONLINE /// DROP PROTOCOL INITIATED /// BLOCK #994102 /// ALL SALES FINAL";
  const latencyLabel = "LATENCY: 21MS";
  const marqueeMessage =
    "SYSTEM ONLINE /// DROP PROTOCOL INITIATED /// BLOCK #994102 /// ALL SALES FINAL   ";
  const marqueeMessageReverse =
    "/// 84 PAIRS REMAINING IN ALLOCATION QUEUE   /// HARD CAP ENFORCED: 1 PAIR PER CRYPTOGRAPHIC SIGNATURE   /// SOLD OUT OCCURS AT BLOCK CONCLUSION   ";
  const heroTitlePrefix = "SHO";
  const heroTitleSuffix = "VOLT-00";
  const heroRunLabel = "Verified specification run: CYBER-RUNNER MK.IV";
  const productImageAlt =
    "CYBER-RUNNER MK-IV futuristic sneaker suspended in a dark industrial vault";
  const canvasAnnotations = ["VOLT REACTIVE TENSION CORDS [P-01]", "PROTOTYPE 7-LUG SOLE // 480G"];
  const modelIdLabel = "MODEL ID:";
  const telemetryItems = [
    { telemetryItemLabel: "TIMESTAMP PROTOCOL", telemetryItemValue: "2025-04-12T08:00Z", telemetryItemIcon: "clock3" },
    { telemetryItemLabel: "HYPE HEADLINE", telemetryItemValue: "UNAUTHORIZED SPECIMEN // MK.IV", telemetryItemIcon: "radio" },
    { telemetryItemLabel: "ALLOCATION STATUS", telemetryItemValue: "84 / 150 REMAIN IN VAULT", telemetryItemIcon: "activity" },
    { telemetryItemLabel: "PHYSICAL ASSET", telemetryItemValue: "NFC TAG VERIFIED", telemetryItemIcon: "box" },
  ];
  const mintEyebrow = "[SYSTEM MINT CHECKOUT]";
  const sizeSelectorLabel = "Select size // US footwear metric";
  const sizingChartsLabel = "Inspection sizing charts";
  const defaultSize = "US 10";
  const contractNote =
    "Immutable sale contract rules apply. Each minted specimen includes a unique cryptographic signature and physical asset registration.";
  const mintCtaLabel = "ENTER QUEUE // MINT SPECIMEN";
  const mintQueuedLabel = "ALLOCATION CONFIRMED // STANDBY";
  const raffleLabel = "Join secondary raffle waitlist (round 02)";
  const specsHeading = "Material & artifact metrics";
  const specsTag = "[MK_IV_DIAGNOSTIC]";
  const hashHeading = "Authenticity registration hash";
  const hashNodeLabel = "NODE // TOKYO-09";
  const hashSysLabel = "SYS: 9948-MK4-VOLT-2025";
  const hashSecuredLabel = "150 / 150 CRYPTO-SECURED";
  const catalogEyebrow = "[CATALOG_ARCHIVE // LEVEL-02 ALLOCATION]";
  const catalogTitle = "More from us";
  const catalogTitleAccent = "// stylish";
  const catalogStatusText = "Status: 3 revealed // strict allocation protocol";
  const catalogHashText = "Hash block verified: 0x99482...EE01";
  const catalogQueueCtaLabel = "Enter queue";
  const catalogFooterNote = "Manufacturing dossier & air-restricted telemetry";
  const catalogExpandLabel = "[+ Expand system logs]";

  // Fill anything the caller omitted from the placeholder.
  const data = { ...placeholder, ...resolvedObject } as NVaultTerminalTemplateData;
  const {
    heroEyebrow,
    heroSubtitle,
    productImageUrl,
    canvasWatermark,
    modelId,
    mintTitle,
    mintSubtitle,
    mintPrice,
    mintPriceCrypto,
    shoeSizes,
    hardwareSpecs,
    relatedProducts,
  } = data;

  return (
    <>
      <TerminalStyles />
      <TerminalHeader topBarText={topBarText} latencyLabel={latencyLabel} />
      <Crosshair />
      <main className="relative flex min-h-screen w-full flex-col bg-[#131313] font-['JetBrains_Mono'] text-[#e2e2e2]">
        <div className="scanlines-overlay" />
        <div className="mt-[108px]">
          <MarqueeTicker message={marqueeMessage} />
          <div className="border-b-[1px] border-[#caf300] bg-[#131313] px-[32px] py-[8px] text-[9px] uppercase tracking-[0.12em] text-[#caf300]"><span className="mr-[8px] inline-block h-[7px] w-[7px] bg-[#caf300]" />{secureEnclaveLabel} <span className="ml-[16px] text-[#777777]">{nodeLine} <LockKeyhole className="inline h-[11px] w-[11px]" /></span></div>
          <MarqueeTicker message={marqueeMessageReverse} reverse />
        </div>

        <section className="relative grid w-full grid-cols-1 gap-0 overflow-hidden px-[32px] py-[64px] lg:grid-cols-12">
          <div className="flex min-h-[460px] flex-col justify-center border-[1px] border-[#353535] bg-[#0e0e0e] p-[32px] lg:col-span-6">
            <div className="flex items-center gap-[8px] text-[10px] uppercase tracking-[0.12em] text-[#caf300]"><Radio className="h-[14px] w-[14px]" /> {heroEyebrow}</div>
            <h1 className="mt-[16px] font-['Space_Grotesk'] text-[clamp(3rem,8vw,7rem)] font-[700] uppercase leading-[0.9] text-[#ffffff]">{heroTitlePrefix}<span className="text-[#caf300]">{"//"}</span>{heroTitleSuffix}</h1>
            <p className="mt-[20px] max-w-[520px] text-[11px] uppercase tracking-[0.12em] text-[#777777]">{heroSubtitle}</p>
            <div className="mt-[32px] flex items-center gap-[8px] text-[10px] uppercase text-[#a0a0a0]"><span className="h-[6px] w-[6px] animate-pulse bg-[#caf300]" /> {heroRunLabel}</div>
            <ChevronDown className="mt-[32px] h-[20px] w-[20px] animate-bounce text-[#caf300]" />
          </div>
          <ProductCanvas
            imageUrl={productImageUrl}
            imageAlt={productImageAlt}
            watermark={canvasWatermark}
            annotations={canvasAnnotations}
            modelIdLabel={modelIdLabel}
            modelId={modelId}
          />
          <EnginePropsBar items={telemetryItems} />
        </section>

        <PurchaseTerminal
          mintEyebrow={mintEyebrow}
          mintTitle={mintTitle}
          mintSubtitle={mintSubtitle}
          mintPrice={mintPrice}
          mintPriceCrypto={mintPriceCrypto}
          sizeSelectorLabel={sizeSelectorLabel}
          sizingChartsLabel={sizingChartsLabel}
          defaultSize={defaultSize}
          contractNote={contractNote}
          mintCtaLabel={mintCtaLabel}
          mintQueuedLabel={mintQueuedLabel}
          raffleLabel={raffleLabel}
          specsHeading={specsHeading}
          specsTag={specsTag}
          hashHeading={hashHeading}
          hashNodeLabel={hashNodeLabel}
          hashSysLabel={hashSysLabel}
          hashSecuredLabel={hashSecuredLabel}
          shoeSizes={shoeSizes}
          hardwareSpecs={hardwareSpecs}
        />
        <CatalogArchive
          catalogEyebrow={catalogEyebrow}
          catalogTitle={catalogTitle}
          catalogTitleAccent={catalogTitleAccent}
          catalogStatusText={catalogStatusText}
          catalogHashText={catalogHashText}
          catalogQueueCtaLabel={catalogQueueCtaLabel}
          catalogFooterNote={catalogFooterNote}
          catalogExpandLabel={catalogExpandLabel}
          relatedProducts={relatedProducts}
        />
      </main>
      <DiagnosticFooter />
    </>
  );
}
