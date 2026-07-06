import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { PageHero, BLUE, GOLD, NAVY, WA_LINK } from "@/app/components/shared";

const allCountries = [
  {
    name: "Turkey",
    flag: "🇹🇷",
    blue: false,
    highlight: true,
    detail: "$3,500/year tuition, Travel Deposit from $1,000, 50% scholarship discount. Offer ends August 31st.",
    tuition: "$3,500/year",
    deposit: "$1,000 TD",
    scholarship: "50% Discount",
  },
  {
    name: "Cyprus",
    flag: "🇨🇾",
    blue: true,
    highlight: true,
    detail: "€3,500–€5,500/year, Travel Deposit from €1,000, 50–100% scholarship on tuition. Apply for free.",
    tuition: "€3,500–€5,500/year",
    deposit: "€1,000 TD",
    scholarship: "50–100% Discount",
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    blue: false,
    highlight: true,
    detail: "$3,500–$7,000/year tuition across programmes from Business Administration to Medicine. Just $1,000 deposit to apply.",
    tuition: "$3,500–$7,000/year",
    deposit: "$1,000",
    scholarship: "Scholarship Available",
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    blue: true,
    highlight: true,
    detail: "Pre-Master's and Master's pathways via OnCampus Ireland with progression to National College of Ireland. September and January intakes available.",
    tuition: "From €13,330 (net)",
    deposit: "Varies",
    scholarship: "Up to €5,000",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    blue: false,
    highlight: false,
    detail: "Staffordshire, Aston, and Anglia Ruskin University pathways available with automatic scholarships up to £7,500.",
    tuition: "From £12,000",
    deposit: "From £1,000",
    scholarship: "Up to £7,500",
  },
  {
    name: "France",
    flag: "🇫🇷",
    blue: true,
    highlight: false,
    detail: "Study in France with Bolakin Edu-Consult. Contact us for current programmes and tuition rates.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    blue: false,
    highlight: false,
    detail: "Canada study pathways across top provinces. Contact us for programme availability.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
  {
    name: "Poland",
    flag: "🇵🇱",
    blue: true,
    highlight: false,
    detail: "Affordable European education in Poland. Contact us for current options.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    blue: false,
    highlight: false,
    detail: "US study pathways available. Contact us for programme details and scholarship information.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
  {
    name: "Malta",
    flag: "🇲🇹",
    blue: true,
    highlight: false,
    detail: "Study in Malta — English-speaking European island. Contact us for programmes.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    blue: false,
    highlight: false,
    detail: "Netherlands study pathways available for eligible students. Contact us for details.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
  {
    name: "Dubai",
    flag: "🇦🇪",
    blue: true,
    highlight: false,
    detail: "Dubai education and work pathways. Contact us for current availability.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    blue: false,
    highlight: false,
    detail: "Switzerland pathways available. Contact us for programme and eligibility details.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    blue: true,
    highlight: false,
    detail: "Australia study pathways available. Contact us for current intakes and requirements.",
    tuition: "Contact Us",
    deposit: "Varies",
    scholarship: "Available",
  },
];

function CountryCard({ country }: { country: typeof allCountries[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-3xl border overflow-hidden transition-all duration-300"
      style={{ borderColor: open ? BLUE : "rgba(11,77,161,0.1)", borderWidth: open ? 2 : 1 }}
    >
      <button
        className="w-full text-left p-5 flex items-center gap-4 hover:bg-blue-50/20 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-3xl">{country.flag}</span>
        <div className="flex-1">
          <div className="font-black text-base" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{country.name}</div>
          {country.highlight && (
            <div className="text-xs mt-0.5 font-medium" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
              {country.tuition}
            </div>
          )}
        </div>
        {country.highlight && (
          <div
            className="hidden sm:flex px-3 py-1 rounded-full text-xs font-bold"
            style={{ background: country.blue ? "#EBF2FF" : "#FFF3D9", color: country.blue ? BLUE : "#9A6A00", fontFamily: "Outfit, sans-serif" }}
          >
            {country.scholarship}
          </div>
        )}
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          style={{ color: BLUE }}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 border-t" style={{ borderColor: "rgba(11,77,161,0.1)" }}>
          <p className="text-sm leading-relaxed mt-4 mb-4" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
            {country.detail}
          </p>
          {country.highlight && (
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: "Tuition", value: country.tuition },
                { label: "Deposit", value: country.deposit },
                { label: "Scholarship", value: country.scholarship },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-2xl text-center" style={{ background: "#F4F7FB" }}>
                  <div className="text-xs font-medium mb-1" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>{item.label}</div>
                  <div className="text-sm font-black" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{item.value}</div>
                </div>
              ))}
            </div>
          )}
          <a
            href={`https://wa.me/2347019825460?text=Hi!%20I%27m%20interested%20in%20studying%20in%20${encodeURIComponent(country.name)}%20with%20Bolakin%20Edu-Consult.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:opacity-90"
            style={{ background: BLUE, color: "white", fontFamily: "Outfit, sans-serif" }}
          >
            Apply to {country.name} <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}

export function Countries() {
  return (
    <div>
      <PageHero
        label="GLOBAL REACH"
        title="Countries We"
        accent="Process To"
        subtitle="Apply for free to top study destinations with tailored scholarship packages."
      />

      {/* Pill tags strip */}
      <section className="py-12" style={{ background: "#F4F7FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {allCountries.map((c) => (
              <div
                key={c.name}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: c.blue ? BLUE : GOLD, color: c.blue ? "white" : NAVY, fontFamily: "Outfit, sans-serif" }}
              >
                <span className="text-base">{c.flag}</span>
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable cards */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
              Click Any Country to See <span style={{ color: BLUE }}>Details</span>
            </h2>
            <p className="text-sm" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
              Tuition ranges, travel deposit requirements, and scholarship availability for each destination.
            </p>
          </div>

          <div className="space-y-3">
            {allCountries.map((c) => (
              <CountryCard key={c.name} country={c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: NAVY }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Don't See Your Country? <span style={{ color: GOLD }}>Ask Us.</span>
          </h2>
          <p className="text-sm text-white/70 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            We're constantly adding new destinations. Reach out and we'll let you know what's available.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90"
            style={{ background: GOLD, color: NAVY, fontFamily: "Outfit, sans-serif" }}
          >
            Chat With Us <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
