// page.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GenerateSection from "../components/GenerateSection";
import SectionBridge from "../components/SectionBridge";
import LaunchSection from "../components/LaunchSection";
import StackedScrollCards from "../components/StackedScrollCards";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-ink">
      {/* This wrapper prevents horizontal scroll WITHOUT breaking sticky */}
      <div className="relative overflow-x-clip">
        {/* ===== BASE GRADIENT (document-anchored) ===== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0
            bg-[linear-gradient(180deg,var(--color-ink-2)_0%,var(--color-ink-3)_55%,var(--color-ink-2)_100%)]"
        />

        {/* ===== GLOW LAYERS (document-anchored) ===== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 glow-hue"
        >
          <div
            className="absolute left-[90%] top-[-240px]
              h-[1100px] w-[1100px] -translate-x-1/2 rounded-full
              bg-[radial-gradient(circle_at_50%_45%,rgba(111,243,255,0.38),transparent_62%)]
              blur-3xl opacity-100 glow-float-1"
          />

          <div
            className="glow-float-2 absolute left-1/2 top-[-320px]
              h-[900px] w-[1300px] rounded-full
              bg-[radial-gradient(circle_at_50%_55%,rgba(180,240,255,0.22),transparent_65%)]
              blur-3xl opacity-80"
          />

          <div
            className="absolute right-[-120px] top-[350px]
              h-[850px] w-[850px] rounded-full
              bg-[radial-gradient(circle_at_35%_35%,rgba(40,200,190,0.26),transparent_62%)]
              blur-3xl opacity-75 glow-drift-r"
          />

          <div
            className="glow-drift-l absolute left-[-280px] top-[160px]
              h-[800px] w-[800px] rounded-full
              bg-[radial-gradient(circle_at_60%_40%,rgba(120,140,255,0.32),transparent_65%)]
              blur-3xl opacity-70"
          />

          <div
            className="glow-breath absolute left-1/2 bottom-[-420px]
              h-[1200px] w-[1200px] rounded-full
              bg-[radial-gradient(circle_at_50%_35%,rgba(111,243,255,0.30),transparent_68%)]
              blur-3xl opacity-95"
          />

          <div
            className="glow-drift-r absolute right-[10%] bottom-[-360px]
              h-[900px] w-[900px] rounded-full
              bg-[radial-gradient(circle_at_50%_50%,rgba(160,140,255,0.12),transparent_70%)]
              blur-3xl opacity-60"
          />
        </div>

        {/* ===== GRID ===== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)]
            bg-[size:140px_140px]"
        />

        {/* ===== VIGNETTE ===== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0
            bg-[radial-gradient(1100px_1100px_at_50%_55%,transparent_45%,rgba(0,0,0,0.60)_100%)]"
        />

        {/* ===== CONTENT ===== */}
    {/* Navbar outside max-w container */}
        <div className="relative z-10">
          <Navbar />

          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <Hero />
            <SectionBridge />
            <GenerateSection />
            <LaunchSection />
            <StackedScrollCards />
            <div aria-hidden="true" className="h-[30vh]" />
          </div>
        </div>
      </div>
    </main>
  );
}