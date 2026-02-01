import Image from "next/image";

export default function HorseGraphic() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none select-none
        absolute left-[-220px] top-[-20px]
        w-[520px]
        sm:left-[-260px] sm:top-[-30px] sm:w-[620px]
        lg:left-[-320px] lg:top-[-40px] lg:w-[720px]
        opacity-[1]
        [mask-image:radial-gradient(closest-side_at_60%_45%,black,transparent_95%)]
      "
    >
      {/* local lift behind horse */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_55%_45%,rgba(111,243,255,0.14),transparent_62%)]
          blur-3xl opacity-70 mix-blend-screen
        "
      />

      <div className="relative horse-drift horse-breath">
        <Image
          src="/horse-head.png"
          alt=""
          width={1200}
          height={1200}
          priority
          className="h-auto w-full"
        />

        <span
          aria-hidden="true"
          className="
            absolute inset-0 horse-sheen
            bg-[radial-gradient(closest-side_at_50%_50%,rgba(111,243,255,0.16),transparent_65%)]
            blur-2xl opacity-40 mix-blend-screen
          "
        />
      </div>
    </div>
  );
}