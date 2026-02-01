"use client";

import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const clamp = (n, a = 0, b = 1) => Math.max(a, Math.min(b, n));
const easeInOut = (t) => t * t * (3 - 2 * t);

/* ---------- Styling helpers copied from your reference cards ---------- */

function CornerBrackets({ size = 10, inset = 0, opacity = 0.55 }) {
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

/* -------------------------------------------------------------------- */

export default function StackedScrollCards() {
  const sectionRef = useRef(null);

  const cards = useMemo(
    () => [
      {
        title: "Ahead of the curve",
        desc: "Snipe or Launch a Token when Elon Musk mentions it",
        lines: [
          "Detect mentions in real time",
          "Auto-execute trades or launches",
          "Stay first, beat the market",
        ],
        right: "phone",
        image: "/card1.png",
        accent: "rgba(111,243,255,0.40)",
      },
      {
        title: "Dominate the market",
        desc: "Capture Market Trends the moment they appear—24/7",
        lines: [
          "Monitor markets around the clock",
          "React instantly to emerging signals",
          "Execute faster than the competition",
        ],
        right: "chart",
        image: "/card2.png",
        accent: "rgba(40,200,190,0.42)",
      },
      {
        title: "Become a visionary",
        desc: "Build and expand your agents as your needs grow",
        lines: [
          "Build once, scale infinitely",
          "Deploy agents in minutes",
          "Expand capabilities as you grow",
        ],
        right: "terminal",
        image: "/card3.png",
        accent: "rgba(160,140,255,0.30)",
      },
    ],
    []
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const introHold = 0.12;
  const outroHold = 0.25;
  const activeRange = 1 - introHold - outroHold;

  const vh = 450;

  const stepIndex = useTransform(scrollYProgress, (p) => {
    const pp = clamp(p, 0, 1);
    const u = clamp((pp - introHold) / activeRange, 0, 1);
    const t = easeInOut(u) * 2; // 0..2
    return t < 0.66 ? 0 : t < 1.33 ? 1 : 2;
  });

  const preludeOpacity = useTransform(scrollYProgress, (p) => {
    // Keep text readable (never "multiplies" down to grey)
    // Small fade as you move into the stack, but stays strong.
    return clamp(1 - p * 0.8, 0.92, 1);
  });

  const railsOpacity = useTransform(scrollYProgress, (p) => {
    const inFade = clamp((p - 0.03) / 0.12, 0, 1);
    const outFade = clamp((1 - p) / 0.18, 0, 1);
    return Math.min(inFade, outFade) * 0.9;
  });

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-24 relative mt-24"
      style={{ height: `${vh}vh` }}
      aria-label="Execution flow"
      id="stack"
    >
      {/* ✅ REMOVED: Section-local atmosphere (glow/grid) */}

      {/* Prelude / Handoff (sits before the sticky begins) */}
      <motion.div
        className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8"
        style={{ opacity: preludeOpacity }}
      >
        {/* top separator that visually continues from previous section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white/12"
        />

        {/* Match LaunchSection spacing */}
        <div className="pt-16 sm:pt-20">
          {/* Small label */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.30em] text-white/45">
              EXECUTION FLOW
            </p>
          </div>

          {/* Headline (match Launch sizes) */}
          <div className="mx-auto mt-4 max-w-4xl text-center">
            <h2
              className="
                text-white/80 font-normal tracking-[-0.015em]
                text-[34px] leading-[1.12]
                sm:text-[46px] sm:leading-[1.08]
                lg:text-[56px] lg:leading-[1.05]
              "
            >
              <span className="block">Scroll to step through how</span>

              <span className="block">
                an agent
                <span className="relative mx-2 inline-block">
                  <span aria-hidden="true" className="absolute inset-0 bg-white/8" />
                  <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/55" />
                  <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/55" />
                  <span className="absolute left-0 bottom-0 h-3 w-3 border-l border-b border-white/55" />
                  <span className="absolute right-0 bottom-0 h-3 w-3 border-r border-b border-white/55" />
                  <span className="relative block px-10 py-2 -translate-y-[3px]">
                    reacts
                  </span>
                </span>
                in real-time
              </span>
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-xs leading-6 text-white/55 sm:text-sm text-center">
            Each step is a single screen — triggers, validation, and execution —
            designed to feel like an instrument panel, not a carousel.
          </p>

          {/* hint line */}
          <div className="relative mx-auto mt-10 w-full max-w-2xl">
            <span aria-hidden="true" className="block h-px w-full bg-white/10" />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/12"
            />
          </div>
        </div>
      </motion.div>

      {/* Sticky scrollytelling */}
      <div className="sticky top-0 flex h-screen items-center">
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ opacity: railsOpacity }}
          >
            {/* left/right vertical rails */}
            <div className="absolute left-1 top-10 bottom-10 w-px bg-white/10" />
            <div className="absolute right-1 top-10 bottom-10 w-px bg-white/10" />

            {/* small ticks on rails */}
            <div className="absolute left-1 top-10 h-3 w-px bg-white/12" />
            <div className="absolute left-1 bottom-10 h-3 w-px bg-white/12" />
            <div className="absolute right-1 top-10 h-3 w-px bg-white/12" />
            <div className="absolute right-1 bottom-10 h-3 w-px bg-white/12" />

            {/* subtle crosshair behind deck */}
            <div className="absolute left-1/2 top-1/2 h-px w-[92%] -translate-x-1/2 bg-white/7" />
            <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px -translate-x-1/2 bg-white/7" />
          </motion.div>

          {/* progress dots (not a card) */}
          <motion.div
            className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 sm:block"
            style={{ opacity: railsOpacity }}
            aria-hidden="true"
          >
            <ProgressDots active={stepIndex} />
          </motion.div>

          <div className="relative h-[520px] sm:h-[560px]">
            {cards.map((c, i) => (
              <StepStackCard
                key={i}
                i={i}
                progress={scrollYProgress}
                introHold={introHold}
                outroHold={outroHold}
                activeRange={activeRange}
                title={c.title}
                desc={c.desc}
                lines={c.lines}
                right={c.right}
                image={c.image}
                accent={c.accent}
              />
            ))}
          </div>

          {/* Bottom separator hint */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 bottom-[-36px] h-px w-[92%] -translate-x-1/2 bg-white/10"
            style={{ opacity: railsOpacity }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 bottom-[-36px] h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/12"
            style={{ opacity: railsOpacity }}
          />
        </div>
      </div>
    </section>
  );
}

function ProgressDots({ active }) {
  const y = [-18, 0, 18];

  return (
    <div className="relative ml-2 flex flex-col items-center gap-3">
      {/* spine */}
      <div className="absolute left-1/2 top-[-22px] h-[64px] w-px -translate-x-1/2 bg-white/10" />
      {y.map((_, i) => (
        <motion.span
          key={i}
          className="relative inline-flex h-2.5 w-2.5"
          style={{
            opacity: useTransform(active, (a) => (a === i ? 1 : 0.45)),
            scale: useTransform(active, (a) => (a === i ? 1.15 : 1)),
          }}
        >
          <span className="absolute inset-0 rounded-full bg-cyan-glow/25 blur-[8px]" />
          <span className="relative m-auto h-2 w-2 rounded-full bg-cyan-soft/80" />
        </motion.span>
      ))}
    </div>
  );
}

function StepStackCard({
  i,
  progress,
  introHold,
  outroHold,
  activeRange,
  title,
  desc,
  lines,
  right,
  image,
  accent,
}) {
  const DECK_GAP = 20;
  const stackY = -60;

  // ✅ do not touch animation numbers
  const GAP_01 = 500;
  const GAP_12 = 20;

  const yPositions = [0, GAP_01, GAP_01 + GAP_12];
  const yUnstacked = yPositions[i];

  const t = useTransform(progress, (p) => {
    const pp = clamp(p, 0, 1);
    if (pp <= introHold) return 0;
    if (pp >= 1 - outroHold) return 2;
    const u = (pp - introHold) / activeRange;
    return easeInOut(u) * 2;
  });

  const y = useTransform(t, (T) => {
    if (T < 1) {
      const u = easeInOut(T);
      if (i === 0) return stackY + DECK_GAP * u;
      if (i === 1) return yUnstacked + (stackY - yUnstacked) * u;
      return yUnstacked;
    }

    const u = easeInOut(T - 1);

    const targetCard1 = stackY + DECK_GAP * 2;
    const targetCard2 = stackY + DECK_GAP * 1;
    const targetCard3 = stackY + DECK_GAP * 0;

    if (i === 0) {
      const from = stackY + DECK_GAP;
      return from + (targetCard1 - from) * u;
    }
    if (i === 1) {
      const from = stackY;
      return from + (targetCard2 - from) * u;
    }
    if (i === 2) {
      const from = yUnstacked;
      return from + (targetCard3 - from) * u;
    }

    return yUnstacked;
  });

  const scale = 1;
  const opacity = 1;

  const zIndex = useTransform(t, (T) => {
    if (T < 1) {
      if (i === 1) return 300;
      if (i === 0) return 200;
      return 100;
    }
    if (i === 2) return 300;
    if (i === 1) return 200;
    return 100;
  });

  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      style={{ y, scale, opacity, zIndex }}
    >
      <StackCard
        title={title}
        desc={desc}
        lines={lines}
        right={right}
        image={image}
        accent={accent}
      />
    </motion.div>
  );
}

function StackCard({
  title,
  desc,
  lines = [],
  right,
  image,
  accent = "rgba(111,243,255,0.35)",
}) {
  return (
    <article
      className="
        group relative overflow-hidden
        border border-white/12
        bg-[#060b10]
        shadow-[0_30px_90px_rgba(0,0,0,0.55)]
      "
    >
      <div className="absolute inset-[1px] border border-white/7 pointer-events-none" />

      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 520px at 50% 18%, rgba(111,243,255,0.10), transparent 58%), linear-gradient(180deg, rgba(255,255,255,0.06), transparent 24%)",
          opacity: 1,
        }}
      />

      <RulerTicks />

      <div className="relative grid min-h-[520px] grid-cols-1 items-center gap-10 px-10 py-14 sm:grid-cols-2 sm:px-14">
        <div>
          <h3 className="text-balance text-[28px] font-semibold tracking-[-0.02em] text-white/80 sm:text-[34px]">
            {title}
          </h3>

          <p className="mt-6 max-w-[46ch] text-sm leading-6 text-white/60">
            {desc}
          </p>

          {lines?.length ? (
            <div className="mt-6 max-w-[50ch] space-y-2">
              {lines.map((t, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-[3px] w-[3px] rounded-full bg-white/25"
                  />
                  <p className="text-sm leading-6 text-white/50">{t}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative flex items-center justify-center">
          <RightMock kind={right} src={image} />
        </div>
      </div>
    </article>
  );
}

/* ---------- Right mock: now renders your real images ---------- */

function RightMock({ kind, src }) {
  const frameClass =
    kind === "phone"
      ? "h-[420px] w-[260px] rounded-[36px]"
      : "h-[420px] w-[420px] rounded-[22px]";

  return (
    <div
      className={[
        "relative overflow-hidden",
        frameClass,
        // ✅ removed the border that causes the white outline
        "bg-white/5 backdrop-blur-md",
      ].join(" ")}
    >
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
        draggable="false"
      />

      {/* ✅ blend edges into the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(closest-side at 50% 50%, transparent 62%, rgba(6,11,16,0.55) 78%, rgba(6,11,16,0.92) 100%)",
        }}
      />

      {/* ✅ blur only the perimeter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 backdrop-blur-[7px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 60%, rgba(0,0,0,1) 84%)",
          maskImage:
            "radial-gradient(circle at center, transparent 60%, rgba(0,0,0,1) 84%)",
        }}
      />

      {/* existing lighting overlay (unchanged) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12), transparent 35%, rgba(0,0,0,0.20))",
        }}
      />
    </div>
  );
}