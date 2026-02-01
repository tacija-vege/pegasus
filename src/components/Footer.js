"use client";

import { motion } from "framer-motion";

const YEAR = new Date().getFullYear();

const GITBOOK_BASE = "https://docs.pegasusosx.com/";

const GROUPS = [
  {
    title: "GET STARTED",
    links: [
      ["Getting Started", "/"],
      ["Agent Tokenization", "/get-started/agent-tokenization"],
      ["Agent Profile", "/get-started/agent-profile"],
      ["Roadmap", "/get-started/roadmap"],
      ["Tokenomics", "/get-started/tokenomics"],
    ],
  },
  {
    title: "PLATFORM FEATURES",
    links: [
      ["Features & Vision", "/platform-features/features-and-vision"],
      ["No-Code Agent Builder", "/platform-features/no-code-agent-builder"],
      ["Agent Marketplace", "/platform-features/agent-marketplace"],
      ["Use Cases", "/platform-features/use-cases"],
    ],
  },
  {
    title: "TECHNICAL FEATURES",
    links: [
      ["Technical Architecture", "/technical-features/technical-architecture"],
      ["Agent Economy & Incentives", "/technical-features/agent-economy-and-incentives"],
      ["Staking & Revenue Sharing", "/technical-features/staking-and-revenue-sharing"],
    ],
  },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[12px] text-white/55 hover:text-white/85 transition-colors"
    >
      {children}
    </a>
  );
}


function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.2-6.7L5.6 22H2.5l7.3-8.3L1 2h6.7l4.7 6.1L18.9 2Zm-1.2 18h1.7L6.6 3.9H4.8L17.7 20Z"
      />
    </svg>
  );
}

function IconTelegram(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M21.8 4.3c.3-1.3-1-2.3-2.2-1.8L2.9 9.1c-1.6.6-1.6 2.9.1 3.4l4.6 1.4 1.8 5.7c.5 1.6 2.6 1.9 3.6.6l2.7-3.4 5 3.7c1.2.9 3 .2 3.3-1.3l3-14.9ZM8.5 13.2l9.7-6.1c.4-.3.9.3.5.6l-8 7.5-.3 3.8-1.7-5.2c-.1-.3 0-.5.3-.6Z"
      />
    </svg>
  );
}

function IconGitBook(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M5.2 4.6c1.8-.8 4.7-1.3 6.8-1.4 2.1.1 5 .6 6.8 1.4.7.3 1.2 1 1.2 1.8v11.2c0 .7-.7 1.2-1.3.9-1.9-.9-4.7-1.4-6.7-1.5-2 .1-4.8.6-6.7 1.5-.6.3-1.3-.2-1.3-.9V6.4c0-.8.5-1.5 1.2-1.8Zm6.8.4c-1.8.1-4 .5-5.4 1v9.8c1.6-.6 3.7-1 5.4-1.1 1.7.1 3.8.5 5.4 1.1V6c-1.4-.5-3.6-.9-5.4-1Z"
      />
    </svg>
  );
}

function SocialIconButton({ label, href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        group inline-flex h-10 w-10 items-center justify-center
        rounded-lg border border-white/12 bg-white/5
        text-white/70 backdrop-blur-md
        hover:bg-white/8 hover:text-white/90
        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/50
      "
    >
      <span className="relative">
        <span className="absolute inset-0 rounded-full bg-cyan-glow/10 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {children}
      </span>
    </a>
  );
}

/* ---------- tiny ambient instrumentation ---------- */

function HudDots() {
  // static positions (deterministic, no RNG)
  const dots = [
    { left: "10%", top: "22%", s: 1.0, d: 0.0, o: 0.55 },
    { left: "18%", top: "66%", s: 0.9, d: 0.4, o: 0.35 },
    { left: "34%", top: "38%", s: 1.1, d: 0.9, o: 0.42 },
    { left: "52%", top: "24%", s: 0.85, d: 0.2, o: 0.30 },
    { left: "68%", top: "58%", s: 1.05, d: 1.1, o: 0.40 },
    { left: "82%", top: "30%", s: 0.95, d: 0.6, o: 0.34 },
    { left: "90%", top: "70%", s: 1.1, d: 1.4, o: 0.32 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p, i) => (
        <motion.span
          key={i}
          className="absolute inline-flex h-2.5 w-2.5"
          style={{ left: p.left, top: p.top, opacity: p.o }}
          animate={{ opacity: [p.o * 0.55, p.o, p.o * 0.55] }}
          transition={{
            duration: 3.8 + i * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.d,
          }}
        >
          <span
            className="absolute inset-0 rounded-full blur-[10px]"
            style={{ background: "rgba(111,243,255,0.20)" }}
          />
          <span
            className="relative m-auto h-1.5 w-1.5 rounded-full"
            style={{ background: "rgba(73,221,235,0.75)", transform: `scale(${p.s})` }}
          />
        </motion.span>
      ))}

      {/* faint diagonal instrumentation grain */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.10) 100%)",
          maskImage:
            "radial-gradient(closest-side at 50% 35%, black, transparent 70%)",
        }}
      />
    </div>
  );
}

function TopScan() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-[60%] -translate-x-1/2 opacity-0"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(111,243,255,0.35), transparent)",
        filter: "blur(6px)",
      }}
      animate={{ opacity: [0, 0.35, 0], x: ["-12%", "0%", "12%"] }}
      transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SocialPulse() {
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full blur-3xl"
      style={{
        background:
          "radial-gradient(circle_at_50%_50%, rgba(111,243,255,0.10), transparent 62%)",
      }}
      animate={{ opacity: [0.18, 0.36, 0.18] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ---------- Footer ---------- */

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* ===== top instrumentation line only (no box) ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white/12"
      />

      {/* NEW: subtle scan across the top line */}
      <TopScan />

      {/* ===== padded content ===== */}
      <div className="relative pt-14 pb-16 px-8 sm:px-12 lg:px-16">
        {/* NEW: ambient HUD dots behind */}
        <HudDots />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            {/* brand */}
            <div className="md:col-span-4">
              <p className="text-[10px] font-semibold tracking-[0.30em] text-white/55">
                PEGASUSOSX
              </p>

              <p className="mt-3 max-w-[42ch] text-xs leading-6 text-white/50">
                Docs, specs, and technical deep-dives — kept tight and readable.
              </p>

                <div className="relative mt-6 flex gap-2">
                <SocialPulse />

                <SocialIconButton label="Twitter / X" href="https://x.com/Pegasus_OSX">
                    <IconX className="h-[18px] w-[18px]" />
                </SocialIconButton>

                <SocialIconButton label="Telegram" href="https://t.me/PegasusOSX">
                    <IconTelegram className="h-[18px] w-[18px]" />
                </SocialIconButton>

                <SocialIconButton label="GitBook" href="https://docs.pegasusosx.com">
                    <IconGitBook className="h-[18px] w-[18px]" />
                </SocialIconButton>
                </div>
            </div>

            {/* link groups */}
            <div className="md:col-span-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {GROUPS.map((g) => (
                <div key={g.title}>
                  <p className="text-[10px] font-semibold tracking-[0.30em] text-white/45">
                    {g.title}
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    {g.links.map(([label, slug]) => (
                      <FooterLink key={label} href={GITBOOK_BASE + slug}>
                        {label}
                      </FooterLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom line */}
          <div className="mt-14 flex flex-col gap-2 sm:flex-row sm:justify-between text-[11px] text-white/40">
            <span>© {YEAR} pegasusosx. All rights reserved.</span>
            <span>Built to feel like instrumentation — not marketing.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}