"use client";

import { useInView } from "../hooks/UseInView";

function RulerTicks() {
  const ticks = Array.from({ length: 34 }, (_, i) => {
    const tall = i % 6 === 0;
    const mid = i % 3 === 0;
    const h = tall ? 16 : mid ? 12 : 8;
    const a = tall ? 0.52 : mid ? 0.4 : 0.26;

    return (
      <span
        key={i}
        aria-hidden="true"
        style={{ height: `${h}px`, opacity: a }}
        className="w-px bg-white/70"
      />
    );
  });

  return (
    <div
      aria-hidden="true"
      className="absolute left-7 right-7 top-6 flex items-start justify-between"
    >
      {ticks}
    </div>
  );
}

function CornerBrackets({ size = 12, inset = 14, opacity = 0.35 }) {
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

function SpecRow() {
  return (
    <div className="mt-7 w-full max-w-xl">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        <SpecItem label="UPTIME" value="24/7" />
        <SpecItem label="TRIGGERS" value="ON-CHAIN" />
        <SpecItem label="SAFETY" value="GUARDRAILS" />
        <SpecItem label="INTEGRATIONS" value="100+" />
      </div>
    </div>
  );
}

function SpecItem({ label, value }) {
  return (
    <div className="relative overflow-hidden rounded-md border border-white/10 bg-white/4 px-3 py-3 backdrop-blur-md">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.05), transparent 55%)",
        }}
      />
      <div className="relative">
        <div className="text-[10px] font-semibold tracking-[0.26em] text-white/50">
          {label}
        </div>
        <div className="mt-1 text-[11px] font-semibold tracking-[0.18em] text-white/80">
          {value}
        </div>
      </div>
    </div>
  );
}

function AgentLogMock() {
  return (
    <div className="relative w-full max-w-[520px] overflow-hidden rounded-[18px] border border-white/12 bg-[#060b10] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
      {/* inner hairline */}
      <div className="pointer-events-none absolute inset-[1px] border border-white/7" />

      {/* top accent line */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(111,243,255,0.40), transparent)",
        }}
      />

      {/* lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 420px at 50% 10%, rgba(111,243,255,0.10), transparent 58%), linear-gradient(180deg, rgba(255,255,255,0.06), transparent 22%)",
          opacity: 1,
        }}
      />

      {/* header */}
      <div className="relative flex items-center justify-between px-6 pb-4 pt-5">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="relative inline-flex h-2.5 w-2.5"
          >
            <span className="absolute inset-0 rounded-full bg-cyan-glow/30 blur-[6px]" />
            <span className="relative m-auto h-2 w-2 rounded-full bg-cyan-soft/80" />
          </span>
          <span className="text-[11px] font-semibold tracking-[0.22em] text-white/75">
            AGENT EXECUTION LOG
          </span>
        </div>

        <span className="text-[10px] font-semibold tracking-[0.24em] text-white/45">
          LIVE
        </span>
      </div>

      <div className="relative px-6 pb-6">
        <div className="rounded-[14px] border border-white/10 bg-black/25 px-4 py-4">
          <LogLine dim>00:00:01</LogLine>
          <LogLine>
            <span className="text-white/55">Booting</span>{" "}
            <span className="text-white/80">Sentio Runner</span>{" "}
            <span className="text-white/40">v1.2</span>
          </LogLine>
          <LogLine>
            <Tag>Trigger</Tag>{" "}
            <span className="text-white/70">Price deviation</span>{" "}
            <span className="text-white/35">(ETH/USDC)</span>
          </LogLine>
          <LogLine>
            <Tag kind="ok">Guardrails</Tag>{" "}
            <span className="text-white/70">Checks passed</span>{" "}
            <span className="text-white/35">(slippage, allowlist)</span>
          </LogLine>
          <LogLine>
            <Tag kind="info">Execute</Tag>{" "}
            <span className="text-white/70">Routing swap</span>{" "}
            <span className="text-white/35">via best path</span>
          </LogLine>
          <LogLine>
            <Tag kind="ok">Result</Tag>{" "}
            <span className="text-white/70">Confirmed</span>{" "}
            <span className="text-white/35">tx: 0x9a…f2</span>
          </LogLine>

          <div className="mt-4 flex items-center justify-between rounded-md border border-white/10 bg-white/4 px-3 py-2">
            <span className="text-[10px] font-semibold tracking-[0.22em] text-white/55">
              STATUS
            </span>
            <span className="text-[10px] font-semibold tracking-[0.22em] text-white/75">
              RUNNING
            </span>
          </div>
        </div>

        {/* subtle scan sheen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 left-1/2 h-[240px] w-[520px] -translate-x-1/2 rotate-12 opacity-35 blur-2xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)",
          }}
        />
      </div>
    </div>
  );
}

function LogLine({ children, dim = false }) {
  return (
    <div
      className={[
        "flex items-center gap-3 py-1.5 text-[12px] leading-5",
        dim ? "text-white/30" : "text-white/65",
      ].join(" ")}
    >
      <span className="shrink-0 font-mono text-[11px] tracking-[0.06em] text-white/30">
        •
      </span>
      <div className="min-w-0 text-pretty">{children}</div>
    </div>
  );
}

function Tag({ children, kind = "base" }) {
  const styles =
    kind === "ok"
      ? "border-white/12 bg-white/6 text-white/70"
      : kind === "info"
      ? "border-white/12 bg-white/6 text-white/70"
      : "border-white/12 bg-white/6 text-white/70";

  return (
    <span
      className={[
        "inline-flex items-center justify-center rounded-md border px-2 py-1",
        "text-[10px] font-semibold tracking-[0.22em] backdrop-blur-md",
        styles,
      ].join(" ")}
    >
      {String(children).toUpperCase()}
    </span>
  );
}

export default function LaunchSection() {
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <section className="relative mt-20 pb-10 sm:mt-24 sm:pb-28">
      {/* localized glow + subtle spotlight so it doesn't feel "random" */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={[
            "absolute left-1/2 top-10 h-[760px] w-[760px] -translate-x-1/2 rounded-full blur-3xl",
            inView ? "opacity-90" : "opacity-0",
            "transition-opacity duration-700 ease-out",
          ].join(" ")}
          style={{
            background:
              "radial-gradient(circle_at_50%_40%, rgba(111,243,255,0.14), transparent 62%)",
          }}
        />
        <div
          className="absolute left-1/2 top-16 h-[520px] w-[920px] -translate-x-1/2 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle_at_50%_50%, rgba(40,200,190,0.10), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div ref={ref} className="relative mx-auto max-w-6xl">
          {/* Panel frame */}
          <div
            className={[
              "group relative overflow-hidden rounded-[22px]",
              "border border-white/12 bg-[#060b10]/70 backdrop-blur-md",
              "shadow-[0_30px_90px_rgba(0,0,0,0.55)]",
              "transition-[opacity,transform,filter] duration-700 ease-out will-change-transform",
              inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-[1px]",
            ].join(" ")}
          >
            {/* inner hairline */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-[1px] rounded-[21px] border border-white/7" />

            {/* top accent line */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-px opacity-60"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(111,243,255,0.38), transparent)",
              }}
            />

            {/* panel lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(1100px 520px at 50% 0%, rgba(111,243,255,0.08), transparent 62%), linear-gradient(180deg, rgba(255,255,255,0.06), transparent 22%)",
                opacity: 1,
              }}
            />

            {/* corner brackets on the module itself */}
            <CornerBrackets size={12} inset={16} opacity={0.28} />

            {/* ruler ticks */}
            <RulerTicks />

            <div className="relative px-6 pb-10 pt-20 sm:px-10 sm:pb-12">
              {/* Heading block (centered like your design) */}
              <div
                className={[
                  "mx-auto max-w-3xl text-center",
                  "transition-[opacity,transform,filter] duration-700 ease-out",
                  inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[1px]",
                ].join(" ")}
                style={{ transitionDelay: inView ? "80ms" : "0ms" }}
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
                    {/* lighter, more "glass" highlight */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-white/8"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 opacity-70"
                      style={{
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.16)",
                      }}
                    />
                    {/* brackets match hero */}
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

              {/* Split content */}
              <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
                {/* Left: copy / CTA / specs */}
                <div
                  className={[
                    "transition-[opacity,transform,filter] duration-700 ease-out",
                    inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[1px]",
                  ].join(" ")}
                  style={{ transitionDelay: inView ? "160ms" : "0ms" }}
                >
                  <p className="max-w-xl text-pretty text-xs leading-6 text-white/55 sm:text-sm">
                    Whether you’re tracking market trends or reacting to social
                    signals, Sentio helps you capitalize instantly—no downtime
                    needed.
                  </p>

                  <SpecRow />

                  <div className="mt-8 flex flex-wrap items-center gap-3">
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
                        border border-white/12 bg-white/4 px-6 py-3
                        text-xs font-semibold tracking-[0.14em] text-white/70
                        backdrop-blur-md hover:bg-white/8 hover:text-white/85
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/60
                        focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                      "
                    >
                      VIEW TEMPLATES
                    </button>
                  </div>
                </div>

                {/* Right: visual anchor */}
                <div
                  className={[
                    "flex justify-center md:justify-end",
                    "transition-[opacity,transform,filter] duration-700 ease-out",
                    inView ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[1px]",
                  ].join(" ")}
                  style={{ transitionDelay: inView ? "240ms" : "0ms" }}
                >
                  <AgentLogMock />
                </div>
              </div>

              {/* Bottom guide line (ties back into your SectionBridge language) */}
              <div
                className={[
                  "relative mt-12",
                  "transition-[opacity,transform] duration-700 ease-out",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                ].join(" ")}
                style={{ transitionDelay: inView ? "320ms" : "0ms" }}
              >
                <span aria-hidden="true" className="block h-px w-full bg-white/10" />
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/15"
                />
              </div>
            </div>

            {/* subtle hover sheen sweep to keep it alive */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[720px]
                -translate-x-1/2 rotate-12
                bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]
                opacity-0 blur-2xl transition-opacity duration-500
                group-hover:opacity-50
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}