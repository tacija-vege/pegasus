"use client";

import { useInView } from "../hooks/UseInView";

function CornerBrackets({ size = 10, inset = 0, opacity = 0.35 }) {
  const s = `${size}px`;
  const stroke = `rgba(255,255,255,${opacity})`;
  const common = "pointer-events-none absolute";

  return (
    <>
      <span
        aria-hidden="true"
        className={common}
        style={{
          left: inset,
          top: inset,
          width: s,
          height: s,
          borderLeft: `1px solid ${stroke}`,
          borderTop: `1px solid ${stroke}`,
        }}
      />
      <span
        aria-hidden="true"
        className={common}
        style={{
          right: inset,
          top: inset,
          width: s,
          height: s,
          borderRight: `1px solid ${stroke}`,
          borderTop: `1px solid ${stroke}`,
        }}
      />
      <span
        aria-hidden="true"
        className={common}
        style={{
          left: inset,
          bottom: inset,
          width: s,
          height: s,
          borderLeft: `1px solid ${stroke}`,
          borderBottom: `1px solid ${stroke}`,
        }}
      />
      <span
        aria-hidden="true"
        className={common}
        style={{
          right: inset,
          bottom: inset,
          width: s,
          height: s,
          borderRight: `1px solid ${stroke}`,
          borderBottom: `1px solid ${stroke}`,
        }}
      />
    </>
  );
}

/**
 * Hover behavior:
 * - ticks brighten + slightly increase opacity
 * - a subtle accent wash appears across the ruler
 */
function RulerTicks({ accent = "rgba(111,243,255,0.40)" }) {
  const ticks = Array.from({ length: 34 }, (_, i) => {
    const tall = i % 6 === 0;
    const mid = i % 3 === 0;
    const h = tall ? 16 : mid ? 12 : 8;

    // keep the same rhythm, just slightly toned for hover contrast
    const a = tall ? 0.34 : mid ? 0.26 : 0.18;

    return (
      <span
        key={i}
        aria-hidden="true"
        style={{ height: `${h}px`, opacity: a }}
        className="
          w-px bg-white/70
          transition-[opacity,filter] duration-300
          group-hover:opacity-[0.85]
          group-hover:brightness-125
        "
      />
    );
  });

  return (
    <div
      aria-hidden="true"
      className="absolute left-7 right-7 top-6 flex items-start justify-between"
    >
      {ticks}

      {/* accent wash on hover (super subtle) */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute left-0 right-0 top-0 h-px
          opacity-0 transition-opacity duration-300
          group-hover:opacity-60
        "
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />
    </div>
  );
}

function SectionRail() {
  return (
    <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center">
      <p className="text-[10px] font-semibold tracking-[0.32em] text-white/45">
        GENERATION PIPELINE
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <RailChip>Prompt</RailChip>
        <span aria-hidden="true" className="text-white/20">
          →
        </span>
        <RailChip>Compose</RailChip>
        <span aria-hidden="true" className="text-white/20">
          →
        </span>
        <RailChip>Deploy</RailChip>
      </div>

      {/* connector down into the grid */}
      <div className="relative mt-8 w-full max-w-2xl">
        <span aria-hidden="true" className="block h-px w-full bg-white/10" />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/12"
        />
      </div>
    </div>
  );
}

function RailChip({ children }) {
  return (
    <span
      className="
        inline-flex items-center justify-center rounded-md
        border border-white/14 bg-white/5 px-3 py-2
        text-[10px] font-semibold tracking-[0.26em] text-white/70
        backdrop-blur-md
      "
    >
      {String(children).toUpperCase()}
    </span>
  );
}

function FeatureCard({
  topTitle,
  topDesc,
  bottomTitle,
  accent = "rgba(111,243,255,0.35)",
  side = "left",
}) {
  const sideWash =
    side === "left"
      ? "linear-gradient(90deg, rgba(111,243,255,0.06), transparent 55%)"
      : "linear-gradient(270deg, rgba(111,243,255,0.06), transparent 55%)";

  return (
    <article
      className="
        group relative overflow-hidden
        border border-white/10
        bg-[#060b10]
        backdrop-blur-[3px]
        min-h-[420px]
        transition-transform duration-300 ease-out
        hover:-translate-y-1
        shadow-[0_18px_50px_rgba(0,0,0,0.40)]
      "
    >
      {/* inner hairline */}
      <div className="absolute inset-[1px] border border-white/7 pointer-events-none" />

      {/* top accent line */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      {/* subtle side wash so left/right panels feel different (not “4 identical cards”) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background: `${sideWash}, radial-gradient(900px 520px at 50% 18%, rgba(111,243,255,0.10), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.06), transparent 26%)`,
        }}
      />

      {/* hover sheen */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[520px]
          -translate-x-1/2 rotate-12
          bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]
          opacity-0 blur-2xl
          transition-opacity duration-500
          group-hover:opacity-60
        "
      />

      {/* ✅ ruler ticks now react on hover */}
      <RulerTicks accent={accent} />

      {/* very subtle brackets always present, stronger on hover */}
      <div className="absolute inset-4 opacity-35 transition-opacity duration-300 group-hover:opacity-60">
        <CornerBrackets size={12} inset={0} opacity={0.28} />
      </div>

      <div className="relative px-8 pb-9 pt-20">
        <h3 className="text-[26px] font-semibold tracking-[-0.02em] text-white/92">
          {topTitle}
        </h3>

        <p className="mt-3 max-w-[46ch] text-xs leading-6 text-white/60">
          {topDesc}
        </p>

        {/* ✅ divider + center tick + tiny accent dot on hover */}
        <div className="relative mt-14">
          <div className="h-px w-full bg-white/10" />

          {/* center tick */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/12"
          />

          {/* tiny accent dot */}
          <span
            aria-hidden="true"
            className="
              absolute left-1/2 top-0 h-[6px] w-[6px]
              -translate-x-1/2 -translate-y-1/2 rounded-full
              opacity-0 scale-90
              transition-[opacity,transform,filter] duration-300
              group-hover:opacity-100 group-hover:scale-100
            "
            style={{
              background: accent,
              boxShadow: `0 0 18px ${accent}`,
            }}
          />
        </div>

        <h4 className="mt-14 text-[34px] font-semibold tracking-[-0.02em] text-white/95">
          {bottomTitle}
        </h4>
      </div>
    </article>
  );
}

export default function GenerateSection() {
  const { ref, inView } = useInView({ threshold: 0.18 });

  return (
    <section id="generate" ref={ref} className="scroll-mt-24 relative pt-24 pb-32 sm:pt-28 sm:pb-40">
      {/* SECTION ATMOSPHERE — makes cards feel grounded */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* spotlight */}
        <div
          className="absolute left-1/2 top-[-120px] h-[700px] w-[1100px] -translate-x-1/2 blur-3xl opacity-55"
          style={{
            background:
              "radial-gradient(circle_at_50%_45%, rgba(111,243,255,0.10), transparent 62%)",
          }}
        />

        {/* micro-grid masked around this section */}
        <div
          className="absolute inset-x-0 top-0 h-[720px] opacity-[0.05]"
          style={{
            background:
              "linear-gradient(to_right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "180px 180px",
            maskImage:
              "radial-gradient(closest-side at 50% 40%, black, transparent 72%)",
          }}
        />
      </div>

      {/* instrument lines like your other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-px w-[92%] -translate-x-1/2 bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white/12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-3 w-px -translate-x-1/2 bg-white/12"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* heading */}
        <div
          className={[
            "mx-auto max-w-4xl text-center",
            "transition-all duration-700 ease-out",
            inView
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-6 blur-[2px]",
          ].join(" ")}
        >
          <p className="text-[10px] font-semibold tracking-[0.32em] text-white/45">
            AUTONOMOUS GENERATION
          </p>

          <h2
            className="
              mt-4 text-white/95 font-normal tracking-[-0.015em]
              text-[34px] leading-[1.12]
              sm:text-[46px] sm:leading-[1.08]
              lg:text-[56px] lg:leading-[1.05]
            "
          >
            <span className="block">Ask SEN to Generate</span>

            <span className="relative mt-5 inline-block">
              <span aria-hidden="true" className="absolute inset-0 bg-white/8" />
              <CornerBrackets size={12} inset={0} opacity={0.45} />
              <span className="relative block px-8 py-2 -translate-y-[3px]">
                Automations Effortlessly
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[60ch] text-pretty text-xs leading-6 text-white/55 sm:text-sm">
            Describe the workflow once—SEN composes agents, integrates protocols,
            and deploys executions with safe, repeatable defaults.
          </p>
        </div>

        <SectionRail />

        {/* cards */}
        <div
          className={[
            "mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2",
            "transition-all duration-700 ease-out delay-150",
            inView
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-6 blur-[2px]",
          ].join(" ")}
        >
          <FeatureCard
            topTitle="24/7 Agents"
            topDesc="Deploy autonomous crypto strategies that run non-stop—trading, monitoring, or seizing opportunities around the clock."
            bottomTitle="100+ DeFi Integrations"
            accent="rgba(111,243,255,0.40)"
            side="left"
          />
          <FeatureCard
            topTitle="Composability"
            topDesc="Connect agents to protocols, triggers, and wallets with modular building blocks designed for on-chain workflows."
            bottomTitle="Tokenized Ownership"
            accent="rgba(40,200,190,0.42)"
            side="right"
          />
          <FeatureCard
            topTitle="Monitoring"
            topDesc="Track positions, health metrics, and on-chain signals continuously with alerting and automated remediation."
            bottomTitle="Shared Rewards"
            accent="rgba(180,240,255,0.34)"
            side="left"
          />
          <FeatureCard
            topTitle="Execution"
            topDesc="Run transactions on schedule or conditionally with safe defaults, retries, and transparent on-chain logs."
            bottomTitle="Auditability"
            accent="rgba(160,140,255,0.30)"
            side="right"
          />
        </div>
      </div>
    </section>
  );
}