import { MapPin, CheckCircle, Users, Award, GraduationCap, Plane } from "lucide-react";
import { PageHero, BLUE, GOLD, NAVY } from "@/app/components/shared";

const trustPoints = [
  "Verified partnerships with top universities in the UK, Ireland, Europe, and beyond",
  "Transparent pricing — no hidden fees",
  "Free application support and scholarship guidance",
  "Dedicated WhatsApp support from application to arrival",
];

const teamMembers = [
  { initials: "BE", name: "Bolakin Edu-Consult Team", role: "Admissions & Visa Specialists", color: BLUE },
  { initials: "LA", name: "Lagos Office Team", role: "Student Support & Counselling", color: GOLD },
  { initials: "AO", name: "Abeokuta Office Team", role: "Applications & Documentation", color: BLUE },
];

export function About() {
  return (
    <div>
      <PageHero
        label="OUR STORY"
        title="About Bolakin"
        accent="Edu-Consult"
        subtitle="We deliver as promised."
      />

      {/* ── Our Story ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
                WHO WE ARE
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
                Primed to Bring Quality <span style={{ color: BLUE }}>Services</span> to Our Students
              </h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
                  Bolakin Edu-Consult is an educational consultant and travel agency helping Nigerian students access quality education and opportunities abroad. From admission processing to visa applications, flight ticketing, and accommodation, we handle every step of the journey — so you don't have to navigate it alone.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
                  Our services range from Admission Processing, Visa Processing, Flight Ticketing, Accommodation to Private Consultation — helping our students decide on various choices that match their goals and budget.
                </p>
              </div>
            </div>

            {/* Visual stat card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, value: "329+", label: "Students Placed", bg: BLUE },
                { icon: Plane, value: "14+", label: "Countries", bg: GOLD },
                { icon: Award, value: "100%", label: "Transparent Pricing", bg: GOLD },
                { icon: Users, value: "2", label: "Office Locations", bg: BLUE },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-3xl text-center"
                  style={{ background: stat.bg, color: stat.bg === GOLD ? NAVY : "white" }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                  <div className="text-3xl font-black mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{stat.value}</div>
                  <div className="text-xs font-medium opacity-80" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#F4F7FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border" style={{ background: "white", borderColor: "rgba(11,77,161,0.1)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#EBF2FF" }}>
                <GraduationCap className="w-6 h-6" style={{ color: BLUE }} />
              </div>
              <h3 className="text-xl font-black mb-4" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>Our Mission</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
                To make studying, working, and living abroad accessible and stress-free for every Nigerian student, through honest guidance and hands-on support at every stage of the journey.
              </p>
            </div>
            <div className="p-8 rounded-3xl" style={{ background: BLUE }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(255,255,255,0.2)" }}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-black mb-4 text-white" style={{ fontFamily: "Outfit, sans-serif" }}>Our Vision</h3>
              <p className="text-sm leading-relaxed text-white/75" style={{ fontFamily: "Inter, sans-serif" }}>
                To become Nigeria's most trusted educational consultant, known for delivering on every promise — from admission letters to landing in a new country and thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
              TRUST POINTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
              Why Choose <span style={{ color: BLUE }}>Us?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {trustPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-3xl border transition-all hover:shadow-lg"
                style={{ borderColor: "rgba(11,77,161,0.1)" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#EBF2FF" }}>
                  <CheckCircle className="w-4 h-4" style={{ color: BLUE }} />
                </div>
                <p className="text-sm leading-relaxed font-medium" style={{ color: NAVY, fontFamily: "Inter, sans-serif" }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#F4F7FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
              OUR TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
              Dedicated <span style={{ color: BLUE }}>Experts</span> Behind Your Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center p-8 rounded-3xl bg-white border" style={{ borderColor: "rgba(11,77,161,0.1)" }}>
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4"
                  style={{ background: member.color, color: member.color === GOLD ? NAVY : "white", fontFamily: "Outfit, sans-serif" }}
                >
                  {member.initials}
                </div>
                <div className="font-bold text-base mb-1" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{member.name}</div>
                <div className="text-xs" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offices ───────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
              FIND US
            </div>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
              Our <span style={{ color: BLUE }}>Office Locations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                city: "Lagos Office",
                address: "No 8, Akinsetan Street, Badore Ajah, Lagos",
                tag: "Head Office",
                color: BLUE,
              },
              {
                city: "Abeokuta Office",
                address: "Shop 17, Mosque New Complex, 5 Somorin Street, opposite Araromi Street, Abeokuta 110121, Ogun State",
                tag: "Branch Office",
                color: GOLD,
              },
            ].map((office) => (
              <div key={office.city} className="rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(11,77,161,0.1)" }}>
                {/* Map placeholder */}
                <div
                  className="h-48 flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${office.color}15, ${office.color}30)` }}
                >
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2" style={{ color: office.color }} />
                    <div className="text-sm font-bold" style={{ color: office.color, fontFamily: "Outfit, sans-serif" }}>
                      {office.city}
                    </div>
                  </div>
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: office.color, color: office.color === GOLD ? NAVY : "white", fontFamily: "Outfit, sans-serif" }}
                  >
                    {office.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-lg mb-2" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{office.city}</h3>
                  <p className="text-sm leading-relaxed flex items-start gap-2" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                    {office.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
