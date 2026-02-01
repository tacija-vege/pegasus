"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HORSE_SRC = "/horse-head.png"; // put the image in /public/horse-head.png

function clsx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- horse mark used in navbar logo ---------- */

function HorseLogoMark() {
  return (
    <span
      aria-hidden="true"
      className="relative inline-flex h-10 w-10 sm:h-11 sm:w-11"
    >
      {/* main horse (sharp, no glow, no shadow) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${HORSE_SRC})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.65,
        }}
      />

      {/* VERY subtle edge fade only (same as menu horse) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${HORSE_SRC})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          filter: "blur(3px)",
          opacity: 0.35,
          WebkitMaskImage:
            "radial-gradient(closest-side at 50% 50%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(closest-side at 50% 50%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        }}
      />
    </span>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <HorseLogoMark />
      <span className="text-xs font-semibold tracking-[0.28em] text-white/85">
        PEGASUSOSX
      </span>
    </div>
  );
}

/* ---------- tiny icons (inline SVG, no deps) ---------- */

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

/* ---------- menu header horse (bigger + edge-only soften, no tile border) ---------- */

function MenuHorseMark() {
  return (
    <motion.div
      className="relative h-14 w-14" // bigger, fills vertically
      animate={{ y: [0, -1.1, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* main horse (sharp, no glow, no stretch) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${HORSE_SRC})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.65,
        }}
      />

      {/* VERY subtle edge fade only (so it blends, not sticker) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${HORSE_SRC})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          filter: "blur(3px)",
          opacity: 0.35,
          WebkitMaskImage:
            "radial-gradient(closest-side at 50% 50%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(closest-side at 50% 50%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        }}
      />
    </motion.div>
  );
}

/* ---------- menu item component ---------- */

function MenuItem({ label, id, meta, onPick }) {
  const isPlaceholder = id?.startsWith("todo-");

  return (
    <button
      type="button"
      role="menuitem"
      onClick={() => onPick(id)}
      className={clsx(
        "group relative flex w-full items-center justify-between rounded-xl px-4 py-3 text-left",
        "border border-transparent hover:border-white/10 hover:bg-white/5",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/45"
      )}
    >
      <span className="flex min-w-0 flex-col gap-1">
        <span className="text-[11px] font-semibold tracking-[0.24em] text-white/80 group-hover:text-white/95">
          {label}
        </span>
        <span className="text-[11px] text-white/40">
          {meta ?? (isPlaceholder ? "Coming soon" : "Jump to section")}
        </span>
      </span>

      <span className="ml-4 text-white/25 transition-colors group-hover:text-white/50">
        ↘
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 h-2 w-2 border-r border-t border-white/10 opacity-0 transition-opacity group-hover:opacity-100"
      />
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const items = useMemo(
    () => [
      { label: "HOME", id: "top", meta: "Hero & overview" },
      { label: "GENERATE", id: "generate", meta: "Ask SEN to build" },
      { label: "LAUNCH", id: "launch", meta: "Run 24/7 execution" },
      { label: "STACK", id: "stack", meta: "Scroll flow demo" },

      { label: "FEATURES", id: "todo-features", meta: "Coming soon" },
      { label: "TEMPLATES", id: "todo-templates", meta: "Coming soon" },
      { label: "FAQ", id: "todo-faq", meta: "Coming soon" },
      { label: "ROADMAP", id: "todo-roadmap", meta: "Coming soon" },
    ],
    []
  );

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeMenu();
    }
    function onPointerDown(e) {
      if (!open) return;
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) closeMenu();
    }
    function onScroll() {
      if (open) closeMenu();
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  function onPick(id) {
    closeMenu();
    if (!id) return;
    if (id.startsWith("todo-")) return;
    scrollToId(id);
  }

  const left = items.slice(0, 4);
  const right = items.slice(4, 8);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative">
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(180deg,rgba(5,11,18,0.78),rgba(5,11,18,0.40),rgba(5,11,18,0.00))]
            backdrop-blur-md
          "
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 bottom-0 h-px w-[92%] -translate-x-1/2 bg-white/10"
        />

        <nav
          aria-label="Primary"
          className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8"
        >
          <div className="flex h-[68px] items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToId("top")}
              className="
                rounded
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/60
                focus-visible:ring-offset-2 focus-visible:ring-offset-ink
              "
              aria-label="Go to top"
            >
              <LogoMark />
            </button>

            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="nav-menu"
                className="
                  inline-flex items-center gap-3 rounded-md
                  border border-white/12 bg-white/5 px-4 py-2
                  text-[11px] font-semibold tracking-[0.22em] text-white/80
                  backdrop-blur-md
                  hover:bg-white/8 hover:text-white/90
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/60
                  focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    relative inline-flex h-4 w-4 items-center justify-center
                    rounded-sm border border-white/12 bg-white/5
                  "
                >
                  <span className="absolute h-px w-[10px] bg-white/60" />
                  <span className="absolute h-px w-[10px] translate-y-[4px] bg-white/40" />
                  <span className="absolute h-px w-[10px] -translate-y-[4px] bg-white/40" />
                </span>

                <span>MENU</span>

                <span
                  aria-hidden="true"
                  className={clsx(
                    "ml-1 text-white/50 transition-transform duration-200",
                    open ? "rotate-180" : "rotate-0"
                  )}
                >
                  ▾
                </span>
              </button>

              <AnimatePresence>
                {open && (
                  <>
                    <motion.button
                      type="button"
                      aria-label="Close menu"
                      className="fixed inset-0 z-[49] cursor-default bg-black/30 sm:bg-black/20"
                      onClick={closeMenu}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />

                    <motion.div
                      id="nav-menu"
                      role="menu"
                      aria-label="Site sections"
                      className="
                        absolute left-1/2 z-[50] mt-3
                        w-[92vw] max-w-[640px] -translate-x-1/2
                      "
                      initial={{ opacity: 0, y: -10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.985 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      <div
                        className="
                          relative overflow-hidden rounded-2xl
                          border border-white/12 bg-[#060b10]
                          shadow-[0_40px_120px_rgba(0,0,0,0.70)]
                        "
                      >
                        <div className="pointer-events-none absolute inset-[1px] rounded-[15px] border border-white/7" />

                        <div
                          aria-hidden="true"
                          className="absolute left-0 right-0 top-0 h-px opacity-70"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(111,243,255,0.38), transparent)",
                          }}
                        />

                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-95"
                          style={{
                            background:
                              "radial-gradient(900px 420px at 50% 0%, rgba(111,243,255,0.12), transparent 58%), radial-gradient(700px 300px at 20% 40%, rgba(160,140,255,0.06), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.06), transparent 30%)",
                          }}
                        />

                        <div className="relative px-4 pb-4 pt-4 sm:px-5">
                          <div className="flex items-center justify-between">
                            <MenuHorseMark />

                            <button
                              type="button"
                              onClick={closeMenu}
                              className="
                                inline-flex h-10 w-10 items-center justify-center
                                rounded-xl border border-white/12 bg-white/5
                                text-white/55 hover:text-white/90 hover:bg-white/8
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/50
                              "
                              aria-label="Close menu"
                            >
                              <span className="text-[16px] leading-none">✕</span>
                            </button>
                          </div>

                          <div aria-hidden="true" className="relative mt-3">
                            <div className="h-px w-full bg-white/10" />
                            <motion.span
                              className="absolute left-1/2 top-0 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                              style={{
                                background: "rgba(111,243,255,0.55)",
                                boxShadow: "0 0 14px rgba(111,243,255,0.35)",
                              }}
                              animate={{ opacity: [0.35, 1, 0.35] }}
                              transition={{
                                duration: 2.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                        </div>

                        <div className="relative px-3 pb-3 sm:px-4 sm:pb-4">
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                            <div className="space-y-2">
                              {left.map((it) => (
                                <MenuItem
                                  key={it.id}
                                  label={it.label}
                                  id={it.id}
                                  meta={it.meta}
                                  onPick={onPick}
                                />
                              ))}
                            </div>

                            <div className="space-y-2">
                              {right.map((it) => (
                                <MenuItem
                                  key={it.id}
                                  label={it.label}
                                  id={it.id}
                                  meta={it.meta}
                                  onPick={onPick}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-md">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <p className="text-[10px] font-semibold tracking-[0.30em] text-white/45">
                                  SOCIAL
                                </p>
                                <p className="mt-1 text-[11px] text-white/50">
                                  Follow updates & docs.
                                </p>
                              </div>

                              <div className="flex items-center gap-2">
                                <SocialIconButton
                                  label="Twitter / X"
                                  href="https://twitter.com/"
                                >
                                  <IconX className="h-[18px] w-[18px]" />
                                </SocialIconButton>

                                <SocialIconButton
                                  label="Telegram"
                                  href="https://t.me/"
                                >
                                  <IconTelegram className="h-[18px] w-[18px]" />
                                </SocialIconButton>

                                <SocialIconButton
                                  label="GitBook"
                                  href="https://www.gitbook.com/"
                                >
                                  <IconGitBook className="h-[18px] w-[18px]" />
                                </SocialIconButton>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Right: View Docs (kept) */}
            <button
              type="button"
              onClick={() => scrollToId("docs")}
              className="
                inline-flex items-center gap-2 rounded-md
                border border-white/14 bg-white/5 px-4 py-2
                text-[11px] font-semibold tracking-[0.22em] text-white/80
                backdrop-blur-md
                hover:bg-white/8 hover:text-white/90
                focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow/60
                focus-visible:ring-offset-2 focus-visible:ring-offset-ink
              "
              aria-label="View docs"
            >
              <span>VIEW DOCS</span>
              <span aria-hidden="true" className="text-white/50">
                ↘
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}