import HorseGraphic from "./HorseGraphic";

function DotDivider() {
  return <span aria-hidden="true" className="mx-3 text-white/20">•</span>;
}

function HeroMeta() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-y-2 text-[10px] font-semibold tracking-[0.30em] text-white/45">
      <span className="text-white/55">PEGASUSOSX AGENT OS</span>
      <DotDivider />
      <span className="text-white/55">LIVE ON-CHAIN</span>
      <DotDivider />
      <span className="text-white/55">ALWAYS-ON EXECUTION</span>
    </div>
  );
}

function HeroSpecs() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 text-[10px] font-semibold tracking-[0.26em] text-white/55">
      <span className="text-white/60">INTEGRATIONS</span>{" "}
      <span className="text-white/80">100+</span>
      <DotDivider />
      <span className="text-white/60">OWNERSHIP</span>{" "}
      <span className="text-white/80">TOKENIZED</span>
      <DotDivider />
      <span className="text-white/60">UPTIME</span>{" "}
      <span className="text-white/80">24/7</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className ="scroll-mt-24 relative pb-10 pt-20 sm:pb-14 sm:pt-24 lg:pt-28">
      {/* Local hero atmosphere (keeps center feeling authored) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* spotlight behind headline */}
        <div
          className="absolute left-1/2 top-[-140px] h-[680px] w-[980px] -translate-x-1/2 blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle_at_50%_45%, rgba(111,243,255,0.10), transparent 62%)",
          }}
        />

        {/* faint local grid, masked so it doesn’t fight global grid */}
        <div
          className="absolute inset-x-0 top-0 h-[520px] opacity-[0.045]"
          style={{
            background:
              "linear-gradient(to_right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "180px 180px",
            maskImage:
              "radial-gradient(closest-side at 50% 42%, black, transparent 70%)",
          }}
        />
      </div>

      {/* Horse layer */}
      <div className="absolute inset-0 z-0">
        <HorseGraphic />
      </div>

      {/* Top instrument line (ties into your other sections) */}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="pt-8 sm:pt-10">
          <HeroMeta />

          <h1
            className="
              mt-6 text-white font-normal tracking-[-0.015em]
              text-[42px] leading-[1.12]
              sm:text-[68px] sm:leading-[1.06]
              lg:text-[92px] lg:leading-[1.02]
            "
          >
            <span className="block whitespace-nowrap text-white/80">
              Build Agents, Automate
            </span>

            <span className="relative mt-6 inline-block">
              {/* Highlight bar (slightly more “glass”) */}
              <span aria-hidden="true" className="absolute inset-0 bg-white/8" />

              {/* Corner brackets */}
              <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/55" />
              <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/55" />
              <span className="absolute left-0 bottom-0 h-3 w-3 border-l border-b border-white/55" />
              <span className="absolute right-0 bottom-0 h-3 w-3 border-r border-b border-white/55" />

              <span className="relative block px-8 py-2 -translate-y-[3px] text-white/80">
                Fast &amp; Dominant
              </span>
            </span>
          </h1>

        <p className="mx-auto mt-7 max-w-[56ch] text-center text-pretty text-white/55 text-xs leading-6 sm:text-sm">
          With PegasusOSX, you can create on-chain agents effortlessly, tapping
          into 100+ DeFi integrations and tokenized ownership for shared rewards.
        </p>

          <HeroSpecs />

        {/* CTA row (single primary) */}
          {/* Scroll cue (slightly more alive) */}
          <div className="mt-12 flex flex-col items-center">
            <span className="h-10 w-px bg-white/10" aria-hidden="true" />
            <span
              className="
                mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full
                border border-white/10 bg-white/5 text-white/40
                animate-bounce motion-reduce:animate-none
              "
              aria-hidden="true"
            >
              ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}