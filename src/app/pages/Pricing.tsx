import { CheckCircle, ChevronRight, Award } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { PageHero, BLUE, GOLD, NAVY, WA_LINK } from "@/app/components/shared";
import imgTurkey from "@/imports/WhatsApp_Image_2026-07-05_at_17.56.38.jpeg";
import imgCyprus from "@/imports/WhatsApp_Image_2026-07-05_at_17.56.39.jpeg";
import imgGeorgia from "@/imports/WhatsApp_Image_2026-07-05_at_17.56.37__1_.jpeg";
import imgStaffordshire from "@/imports/WhatsApp_Image_2026-07-05_at_17.56.34.jpeg";
import imgAston from "@/imports/WhatsApp_Image_2026-07-05_at_17.56.33__1_.jpeg";
import imgAnglia from "@/imports/WhatsApp_Image_2026-07-05_at_17.56.33.jpeg";

const packages = [
  {
    country: "Turkey",
    flag: "🇹🇷",
    image: imgTurkey,
    tuition: "$3,500/year",
    deposit: "$1,000 TD",
    discount: "50% Scholarship",
    popular: true,
    note: "Offer ends August 31st",
    perks: [
      "Free Application",
      "50% Tuition Discount",
      "$3,500 tuition per year (Dollars)",
      "TD starts from $1,000",
      "Offer ends August 31st",
    ],
    waMsg: "Hi! I want to apply to Turkey with Bolakin Edu-Consult.",
  },
  {
    country: "Cyprus",
    flag: "🇨🇾",
    image: imgCyprus,
    tuition: "€3,500–€5,500/year",
    deposit: "€1,000 TD",
    discount: "50–100% Scholarship",
    popular: false,
    note: "September & January intakes",
    perks: [
      "Free Application",
      "50–100% Tuition Discount",
      "€3,500–€5,500 per year (Euros)",
      "TD starts from €1,000",
      "September and January intakes",
    ],
    waMsg: "Hi! I want to apply to Cyprus with Bolakin Edu-Consult.",
  },
  {
    country: "Georgia",
    flag: "🇬🇪",
    image: imgGeorgia,
    tuition: "$3,500–$7,000/year",
    deposit: "$1,000",
    discount: "Scholarship Available",
    popular: false,
    note: "Business Admin to Medicine",
    perks: [
      "Free Application",
      "$1,000 deposit to apply",
      "$3,500–$7,000 tuition per year",
      "Programmes from Business to Medicine",
      "Travel without stress",
    ],
    waMsg: "Hi! I want to apply to Georgia with Bolakin Edu-Consult.",
  },
  {
    country: "UK — Staffordshire University",
    flag: "🇬🇧",
    image: imgStaffordshire,
    tuition: "From £16,500",
    deposit: "£1,000",
    discount: "£3,000 GBP Scholarship",
    popular: false,
    note: "Pre-CAS interview required",
    perks: [
      "£3,000 scholarship (UG/PG)",
      "Pay £1,000 to book Pre-CAS interview",
      "Balance of £5,500 after clearing interview",
      "Nigerian HND / 3rd class accepted",
      "WAEC/NECO English accepted",
    ],
    waMsg: "Hi! I want to apply to Staffordshire University with Bolakin Edu-Consult.",
  },
  {
    country: "UK — Aston University London",
    flag: "🇬🇧",
    image: imgAston,
    tuition: "From £16,500 (after scholarship)",
    deposit: "Deposit deadline applies",
    discount: "£7,500 Automatic Scholarship",
    popular: false,
    note: "September 2025 Intake",
    perks: [
      "£7,500 automatic scholarship off all programmes",
      "Tuition from £16,500 after scholarship",
      "MSc Business Analytics, Computer Science, AI & more",
      "Offer turnaround: 3–4 working days",
      "Deposit deadline: 30 July 2025",
    ],
    waMsg: "Hi! I want to apply to Aston University London with Bolakin Edu-Consult.",
  },
  {
    country: "UK — Anglia Ruskin University",
    flag: "🇬🇧",
    image: imgAnglia,
    tuition: "From £12,000",
    deposit: "Varies",
    discount: "Up to £7,000 Scholarship",
    popular: false,
    note: "2-year course options",
    perks: [
      "Fees from £12,000",
      "Up to £5,000 postgraduate scholarship",
      "Up to £7,000 undergraduate scholarship",
      "Simple entry requirements (50–55% minimum)",
      "2-year course options available",
    ],
    waMsg: "Hi! I want to apply to Anglia Ruskin University with Bolakin Edu-Consult.",
  },
];

function PricingCard({ pkg }: { pkg: typeof packages[0] }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        borderColor: pkg.popular ? GOLD : "rgba(11,77,161,0.1)",
        borderWidth: pkg.popular ? 3 : 1,
      }}
    >
      {pkg.popular && (
        <div
          className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-black"
          style={{ background: GOLD, color: NAVY, fontFamily: "Outfit, sans-serif" }}
        >
          ★ Most Popular
        </div>
      )}

      {/* Image */}
      <div className="h-44 bg-gray-100 overflow-hidden relative">
        <ImageWithFallback src={pkg.image} alt={`Study in ${pkg.country}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,26,58,0.65) 0%, transparent 55%)" }} />
        <div className="absolute bottom-3 left-4 text-white">
          <div className="text-2xl mb-0.5">{pkg.flag}</div>
          <div className="text-sm font-black leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>{pkg.country}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Discount badge */}
        <div
          className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold mb-4"
          style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}
        >
          {pkg.discount}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <div className="text-xs font-medium mb-1" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>Tuition</div>
            <div className="text-sm font-black" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{pkg.tuition}</div>
          </div>
          <div>
            <div className="text-xs font-medium mb-1" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>Deposit</div>
            <div className="text-sm font-bold" style={{ color: BLUE, fontFamily: "Outfit, sans-serif" }}>{pkg.deposit}</div>
          </div>
        </div>

        <ul className="flex flex-col gap-2 mb-6 flex-1">
          {pkg.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-xs" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
              <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#22C55E" }} />
              {perk}
            </li>
          ))}
        </ul>

        {pkg.note && (
          <div className="text-xs mb-4 px-3 py-2 rounded-2xl" style={{ background: "#FFF3D9", color: "#9A6A00", fontFamily: "Inter, sans-serif" }}>
            ℹ️ {pkg.note}
          </div>
        )}

        <a
          href={`https://wa.me/2347019825460?text=${encodeURIComponent(pkg.waMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full text-center py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
          style={{ background: pkg.popular ? GOLD : BLUE, color: pkg.popular ? NAVY : "white", fontFamily: "Outfit, sans-serif" }}
        >
          Apply Now <ChevronRight className="w-4 h-4 inline ml-1" />
        </a>
      </div>
    </div>
  );
}

// Comparison table
const compareRows = [
  { label: "Tuition", turkey: "$3,500/yr", cyprus: "€3,500–€5,500/yr", georgia: "$3,500–$7,000/yr", uk: "From £12,000/yr" },
  { label: "Deposit (TD)", turkey: "$1,000", cyprus: "€1,000", georgia: "$1,000", uk: "From £1,000" },
  { label: "Scholarship", turkey: "50% off", cyprus: "50–100% off", georgia: "Available", uk: "£3,000–£7,500" },
  { label: "Free Application", turkey: "✓", cyprus: "✓", georgia: "✓", uk: "✓" },
  { label: "Intake", turkey: "Rolling", cyprus: "Sept / Jan", georgia: "Rolling", uk: "Sept / Jan" },
];

export function Pricing() {
  return (
    <div>
      <PageHero
        label="STUDY ABROAD PACKAGES"
        title="Transparent"
        accent="Pricing"
        subtitle="Real scholarships, low deposits, no surprises."
      />

      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <PricingCard key={pkg.country} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20" style={{ background: "#F4F7FB" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
              COMPARE PACKAGES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
              Side-by-Side <span style={{ color: BLUE }}>Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border" style={{ borderColor: "rgba(11,77,161,0.1)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: BLUE }}>
                  <th className="text-left px-5 py-4 text-white font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Feature</th>
                  {["Turkey 🇹🇷", "Cyprus 🇨🇾", "Georgia 🇬🇪", "UK 🇬🇧"].map((h) => (
                    <th key={h} className="px-4 py-4 text-white font-black text-center" style={{ fontFamily: "Outfit, sans-serif" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? "white" : "#F4F7FB" }}>
                    <td className="px-5 py-4 font-bold" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{row.label}</td>
                    {[row.turkey, row.cyprus, row.georgia, row.uk].map((val, j) => (
                      <td key={j} className="px-4 py-4 text-center" style={{ color: val === "✓" ? "#22C55E" : "#5A6A8A", fontFamily: "Inter, sans-serif", fontWeight: val === "✓" ? 700 : 400 }}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partner note */}
      <section className="py-14" style={{ background: NAVY }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6" style={{ color: GOLD }} />
            <p className="font-black text-lg text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              Automatic scholarships up to £7,500 available on select UK programmes.
            </p>
          </div>
          <p className="text-white/60 text-sm mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Our university partners — Staffordshire, Aston, and Anglia Ruskin — offer these to all nationalities including Nigerians.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity"
            style={{ background: GOLD, color: NAVY, fontFamily: "Outfit, sans-serif" }}
          >
            Start My Application <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
