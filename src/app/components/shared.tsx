// Brand constants shared across every page
export const BLUE = "#0B4DA1";
export const GOLD = "#F5A623";
export const NAVY = "#0A1A3A";

export const WA_LINK =
  "https://wa.me/2347019825460?text=Hi!%20I%27m%20interested%20in%20studying%2Ftraveling%20abroad%20with%20Bolakin%20Edu-Consult.%20Can%20you%20help%20me%3F";

// Logo pill mark
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
        <div
          className="absolute rounded-full"
          style={{ width: size * 0.75, height: size * 0.45, background: BLUE, top: 0, left: 0 }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: size * 0.75, height: size * 0.45, background: GOLD, bottom: 0, right: 0 }}
        />
      </div>
      <div className="leading-none">
        <div className="font-black tracking-wide text-[15px]" style={{ color: BLUE, fontFamily: "Outfit, sans-serif" }}>
          BOLAKIN
        </div>
        <div className="font-bold text-[11px] tracking-widest" style={{ color: GOLD, fontFamily: "Outfit, sans-serif" }}>
          EDU-CONSULT
        </div>
        <div className="text-[8px] font-medium" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
          we deliver as promised
        </div>
      </div>
    </div>
  );
}

// Gold pill section label
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4"
      style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}
    >
      {children}
    </div>
  );
}

// Page hero banner (reused on inner pages)
export function PageHero({ label, title, accent, subtitle }: { label: string; title: string; accent?: string; subtitle?: string }) {
  return (
    <section
      className="pt-32 pb-20 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #0A3578 100%)` }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 right-0 opacity-8 w-72 h-48" viewBox="0 0 400 200" fill="white">
          <ellipse cx="200" cy="140" rx="180" ry="60" />
          <ellipse cx="160" cy="110" rx="100" ry="70" />
          <ellipse cx="260" cy="100" rx="90" ry="65" />
        </svg>
        <svg className="absolute bottom-0 left-0 opacity-5 w-48 h-24" viewBox="0 0 200 100" fill="white">
          <ellipse cx="100" cy="70" rx="90" ry="30" />
          <ellipse cx="80" cy="50" rx="50" ry="40" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-5"
          style={{ background: "rgba(245,166,35,0.2)", color: GOLD, fontFamily: "Outfit, sans-serif" }}
        >
          {label}
        </div>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {title}{" "}
          {accent && <span style={{ color: GOLD }}>{accent}</span>}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/70 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" fill="none">
          <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
