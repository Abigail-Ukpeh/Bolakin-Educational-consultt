import { Link } from "react-router";
import { ChevronRight, MessageCircle, CheckCircle, Users, GraduationCap, FileText, Award } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { BLUE, GOLD, NAVY, WA_LINK } from "@/app/components/shared";
import img1 from "@/imports/WhatsApp_Image_2026-07-05_at_17.56.40__1_.jpeg";

const previewServices = [
  { icon: FileText, title: "Admission Processing", desc: "End-to-end university application support from document prep to acceptance letters.", path: "/services" },
  { icon: GraduationCap, title: "Visa Processing", desc: "Expert visa guidance with high approval rates — we prep every document you need.", path: "/services" },
  { icon: Award, title: "Scholarship Guidance", desc: "Up to 100% tuition discounts — we identify and apply for scholarships on your behalf.", path: "/services" },
];

const previewCountries = [
  { name: "Turkey", flag: "🇹🇷", blue: true },
  { name: "Cyprus", flag: "🇨🇾", blue: false },
  { name: "United Kingdom", flag: "🇬🇧", blue: true },
  { name: "Ireland", flag: "🇮🇪", blue: false },
  { name: "Canada", flag: "🇨🇦", blue: true },
  { name: "Georgia", flag: "🇬🇪", blue: false },
  { name: "Australia", flag: "🇦🇺", blue: true },
  { name: "Netherlands", flag: "🇳🇱", blue: false },
];

export function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ background: `linear-gradient(135deg, ${BLUE} 0%, #0A3578 50%, #061E4F 100%)` }}
      >
        {/* BG decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-12 right-0 opacity-10 w-96 h-48" viewBox="0 0 400 200" fill="white">
            <ellipse cx="200" cy="140" rx="180" ry="60" />
            <ellipse cx="160" cy="110" rx="100" ry="70" />
            <ellipse cx="260" cy="100" rx="90" ry="65" />
          </svg>
          <svg className="absolute bottom-32 left-10 opacity-5 w-48 h-24" viewBox="0 0 200 100" fill="white">
            <ellipse cx="100" cy="70" rx="90" ry="30" />
            <ellipse cx="80" cy="50" rx="50" ry="40" />
          </svg>
          <svg className="absolute inset-0 w-full h-full opacity-5">
            <path d="M 0 300 Q 400 100 800 400 Q 1200 600 1400 200" stroke="white" strokeWidth="2" strokeDasharray="10 15" fill="none" />
          </svg>
          <div className="absolute top-40 left-20 w-3 h-3 rounded-full opacity-40" style={{ background: GOLD }} />
          <div className="absolute top-60 left-1/4 w-2 h-2 rounded-full opacity-30" style={{ background: GOLD }} />
          <div className="absolute bottom-40 right-1/4 w-4 h-4 rounded-full opacity-25" style={{ background: GOLD }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-8 border"
              style={{ background: "rgba(245,166,35,0.15)", borderColor: "rgba(245,166,35,0.4)", color: GOLD, fontFamily: "Outfit, sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: GOLD }} />
              EDUCATIONAL CONSULTANT & TRAVEL AGENCY
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-white mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Your Trusted Partner for{" "}
              <span style={{ color: GOLD }}>Study, Travel</span> &amp; Work Abroad
            </h1>

            <p className="text-lg text-white/75 mb-3 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              Admission Processing · Visa Processing · Flight Ticketing · Accommodation
            </p>
            <p className="text-base font-bold mb-10 tracking-wide" style={{ color: GOLD, fontFamily: "Outfit, sans-serif" }}>
              "We Deliver As Promised!"
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-2xl"
                style={{ background: GOLD, color: NAVY, fontFamily: "Outfit, sans-serif" }}
              >
                Start Your Application
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 text-white transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.5)", fontFamily: "Outfit, sans-serif" }}
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#25D366" }} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "14+", label: "Countries" },
                { value: "329+", label: "Success Stories" },
                { value: "1,000+", label: "Followers Trust Us" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{stat.value}</div>
                  <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                <ImageWithFallback src={img1} alt="Countries Bolakin Edu-Consult processes to" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl shadow-xl" style={{ background: GOLD }}>
                <div className="text-xs font-bold text-center" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>✈️ 14+ Countries</div>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl shadow-xl bg-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" style={{ color: "#22C55E" }} />
                  <span className="text-xs font-bold" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>Visa Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────────────────── */}
      <section style={{ background: "#F4F7FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Users, value: "1,000+", label: "Followers Trust Us" },
              { icon: CheckCircle, value: "329+", label: "Success Stories Shared" },
              { icon: Award, value: "2 Offices", label: "Lagos & Abeokuta" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 py-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-1" style={{ background: "#EBF2FF" }}>
                  <item.icon className="w-6 h-6" style={{ color: BLUE }} />
                </div>
                <div className="text-2xl font-black" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{item.value}</div>
                <div className="text-sm" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
              WHAT WE DO
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
              From Admission to <span style={{ color: BLUE }}>Arrival</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
              From admission to arrival, we handle every step of your journey abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {previewServices.map((svc) => (
              <div
                key={svc.title}
                className="group p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ borderColor: "rgba(11,77,161,0.1)" }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ background: "#EBF2FF" }}>
                  <svc.icon className="w-7 h-7" style={{ color: BLUE }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
              style={{ color: BLUE, fontFamily: "Outfit, sans-serif" }}
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Countries Preview ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: "#F4F7FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
              GLOBAL REACH
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
              Where We <span style={{ color: BLUE }}>Take You</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
              We process applications to top destinations across Europe, North America, and beyond.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {previewCountries.map((c) => (
              <div
                key={c.name}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: c.blue ? BLUE : GOLD, color: c.blue ? "white" : NAVY, fontFamily: "Outfit, sans-serif" }}
              >
                <span className="text-base">{c.flag}</span>
                {c.name}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/countries"
              className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all"
              style={{ color: BLUE, fontFamily: "Outfit, sans-serif" }}
            >
              See All Countries <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: NAVY }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Ready to Begin Your <span style={{ color: GOLD }}>Journey?</span>
          </h2>
          <p className="text-white/70 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Join hundreds of Nigerian students who trusted Bolakin Edu-Consult with their journey abroad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90"
              style={{ background: GOLD, color: NAVY, fontFamily: "Outfit, sans-serif" }}
            >
              Get in Touch <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 text-white transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.4)", fontFamily: "Outfit, sans-serif" }}
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
