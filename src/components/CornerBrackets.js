// src/components/ui/CornerBrackets.js
export default function CornerBrackets({ size = 12, inset = 0, opacity = 0.55 }) {
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
          borderTop: `1px solid ${stroke}`
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
          borderTop: `1px solid ${stroke}`
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
          borderBottom: `1px solid ${stroke}`
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
          borderBottom: `1px solid ${stroke}`
        }}
      />
    </>
  );
}