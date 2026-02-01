export default function SectionBridge() {
  return (
    <section
      className="
        relative
        min-h-[140px] sm:min-h-[170px] lg:min-h-[200px]
        flex items-center
      "
    >
      {/* subtle separators */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-px w-[92%] -translate-x-1/2 bg-white/10"
      />

      {/* tiny center ticks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white/12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-3 w-px -translate-x-1/2 bg-white/12"
      />

      {/* local atmosphere: one soft spotlight so it doesn't feel empty */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[-180px] h-[520px] w-[1100px] -translate-x-1/2 blur-3xl opacity-35"
          style={{
            background:
              "radial-gradient(circle_at_50%_65%, rgba(111,243,255,0.10), transparent 64%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* single statement (not a pipeline) */}
        <p className="text-center text-[10px] font-semibold tracking-[0.34em] text-white/45">
          FROM IDEA → ON-CHAIN EXECUTION, IN MINUTES
        </p>

        {/* “beam” divider */}
        <div className="relative mx-auto mt-8 max-w-4xl">
          {/* base hairline */}
          <div className="h-px w-full bg-white/10" />

          {/* center tick */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/12"
          />

          {/* soft beam glow */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-px w-[62%] -translate-x-1/2 opacity-60"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(111,243,255,0.28), transparent)",
              filter: "blur(0.2px)",
            }}
          />

          {/* inner brighter core (very subtle) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-px w-[38%] -translate-x-1/2 opacity-45"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(111,243,255,0.55), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}