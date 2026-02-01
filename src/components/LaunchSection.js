"use client";

import { useInView } from "../hooks/UseInView";
import LaunchHorseWatermark from "./LaunchHorseWatermark";

function DotDivider() {
  return <span aria-hidden="true" className="mx-3 text-white/20">•</span>;
}

function SpecInline() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 text-[10px] font-semibold tracking-[0.26em] text-white/55 sm:justify-start">
      <span className="text-white/60">UPTIME</span>{" "}
      <span className="text-white/80">24/7</span>
      <DotDivider />
      <span className="text-white/60">TRIGGERS</span>{" "}
      <span className="text-white/80">ON-CHAIN</span>
      <DotDivider />
      <span className="text-white/60">SAFETY</span>{" "}
      <span className="text-white/80">GUARDED</span>
      <DotDivider />
      <span className="text-white/60">INTEGRATIONS</span>{" "}
      <span className="text-white/80">100+</span>
    </div>
  );
}

function TargetHUD() {
  return (
    <div className="w-full">
      {/* square radar box */}
      <div className="relative mx-auto w-full max-w-[420px] aspect-square">
        {/* local glow behind HUD */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full blur-3xl opacity-70"
          style={{
            background:
              "radial-gradient(circle_at_50%_50%, rgba(111,243,255,0.14), transparent 62%)",
          }}
        />

        {/* concentric rings */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-[92%] w-[92%] rounded-full border border-white/10" />
          <div className="absolute h-[68%] w-[68%] rounded-full border border-white/12" />
          <div className="absolute h-[42%] w-[42%] rounded-full border border-white/12" />
        </div>

        {/* crosshair (perfect square bounds) */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10"
        />

        {/* center tick */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/5"
        />

        {/* nodes */}
        <Node style={{ left: "22%", top: "34%" }} />
        <Node style={{ left: "66%", top: "26%" }} />
        <Node style={{ left: "72%", top: "62%" }} />
        <Node style={{ left: "38%", top: "70%" }} />

        {/* subtle diagonal sheen */}
        <div
          aria-hidden="true"
          className="
            absolute -top-16 left-1/2 h-[220px] w-[560px]
            -translate-x-1/2 rotate-12
            bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]
            opacity-30 blur-2xl
          "
        />
      </div>

      {/* status bar (separate so it can't distort the circle) */}
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-[420px]">
          <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/4 px-4 py-3 backdrop-blur-md">
            <span className="text-[10px] font-semibold tracking-[0.26em] text-white/55">
              STATUS
            </span>
            <span className="text-[10px] font-semibold tracking-[0.26em] text-white/80">
              RUNNING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Node({ style }) {
  return (
    <span
      aria-hidden="true"
      style={style}
      className="absolute inline-flex h-2.5 w-2.5"
    >
      <span className="absolute inset-0 rounded-full bg-cyan-glow/35 blur-[8px]" />
      <span className="relative m-auto h-2 w-2 rounded-full bg-cyan-soft/80" />
    </span>
  );
}

export default function LaunchSection() {
  const { ref, inView } = useInView({ threshold: 0.22 });

  return (
    <section id="launch" className="scroll-mt-24 relative mt-24 pb-8 sm:mt-28 sm:pb-16">
      {/* localized backdrop modulation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-12 h-[820px] w-[1100px] -translate-x-1/2 blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle_at_50%_40%, rgba(40,200,190,0.10), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            background:
              "linear-gradient(to_right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to_bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div ref={ref} className="relative">
          {/* watermark horse (subtle) */}
          <LaunchHorseWatermark />

          {/* Top instrumentation line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white/12"
          />

          <div className="pt-16 sm:pt-20">
            {/* Small label */}
            <div
              className={[
                "mx-auto max-w-3xl text-center",
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[1px]",
              ].join(" ")}
            >
              <p className="text-[11px] font-semibold tracking-[0.30em] text-white/45">
                ALWAYS-ON EXECUTION
              </p>
            </div>

            {/* Headline */}
            <div
              className={[
                "mx-auto mt-4 max-w-4xl text-center",
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[1px]",
              ].join(" ")}
              style={{ transitionDelay: inView ? "60ms" : "0ms" }}
            >
              <h2
                className="
                  text-white/95 font-normal tracking-[-0.015em]
                  text-[34px] leading-[1.12]
                  sm:text-[46px] sm:leading-[1.08]
                  lg:text-[56px] lg:leading-[1.05]
                "
              >
                <span className="block">Launch &amp; Run 24/7</span>

                <span className="relative mt-5 inline-block">
                  {/* softer highlight (glass label) */}
                  <span aria-hidden="true" className="absolute inset-0 bg-white/8" />
                  <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/55" />
                  <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/55" />
                  <span className="absolute left-0 bottom-0 h-3 w-3 border-l border-b border-white/55" />
                  <span className="absolute right-0 bottom-0 h-3 w-3 border-r border-b border-white/55" />

                  <span className="relative block px-10 py-2 -translate-y-[3px]">
                    Automations with Ease
                  </span>
                </span>
              </h2>
            </div>

            {/* Split */}
            <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
              {/* Left */}
              <div
                className={[
                  "text-center md:text-left",
                  "transition-all duration-700 ease-out",
                  inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[1px]",
                ].join(" ")}
                style={{ transitionDelay: inView ? "140ms" : "0ms" }}
              >
                <p className="mx-auto max-w-xl text-pretty text-xs leading-6 text-white/55 sm:text-sm md:mx-0">
                  Whether you’re tracking market trends or reacting to social
                  signals, Sentio helps you capitalize instantly—no downtime
                  needed.
                </p>

                <SpecInline />

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <button
                    type="button"
                    className="
                      inline-flex items-center justify-center rounded-md
                      border border-white/18 bg-white/7 px-6 py-3
                      text-xs font-semibold tracking-[0.14em] text-white/85
                      backdrop-blur-md hover:bg-white/12
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/60
                      focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                    "
                  >
                    START AUTOMATING NOW
                  </button>

                  <button
                    type="button"
                    className="
                      inline-flex items-center justify-center rounded-md
                      border border-white/12 bg-transparent px-6 py-3
                      text-xs font-semibold tracking-[0.14em] text-white/65
                      hover:text-white/85
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/60
                      focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                    "
                  >
                    VIEW TEMPLATES →
                  </button>
                </div>
              </div>

              {/* Right: HUD */}
              <div
                className={[
                  "transition-all duration-700 ease-out",
                  inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[1px]",
                ].join(" ")}
                style={{ transitionDelay: inView ? "220ms" : "0ms" }}
              >
                <TargetHUD />
              </div>
            </div>

            {/* Bottom instrumentation line */}
            <div
              className={[
                "relative mt-14",
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
              style={{ transitionDelay: inView ? "300ms" : "0ms" }}
            >
              <span aria-hidden="true" className="block h-px w-full bg-white/10" />
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}