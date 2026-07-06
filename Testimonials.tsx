import { Star, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { PageHero, BLUE, GOLD, NAVY, WA_LINK } from "@/app/components/shared";
import imgTestimonials from "@/imports/WhatsApp_Image_2026-07-05_at_17.56.37.jpeg";

const testimonials = [
  {
    name: "Kolade Blessing",
    role: "Now studying & working abroad",
    text: "Bolakin Edu-Consult made my journey to studying and working abroad completely stress-free. From admission to visa, everything was handled professionally.",
    rating: 5,
    initials: "KB",
    color: BLUE,
    country: "Abroad",
  },
  {
    name: "Ebube Samuel",
    role: "Placed in the UK",
    text: "I'm impressed! They offer opportunities in Canada, UK, Cyprus, Netherlands, Turkey, China, Malta, Dubai, and more. I'm definitely signing up.",
    rating: 5,
    initials: "ES",
    color: GOLD,
    country: "United Kingdom",
  },
  {
    name: "Adaeze Nwosu",
    role: "Student, Turkey",
    text: "The team at Bolakin Edu-Consult walked me through every single document. I had my visa approved on first attempt and my flight was booked within the week!",
    rating: 5,
    initials: "AN",
    color: BLUE,
    country: "Turkey",
  },
  {
    name: "Tunde Adebayo",
    role: "MSc Student, Cyprus",
    text: "From the moment I contacted them, the process was smooth. I got a 70% scholarship I wouldn't have known about without their guidance. Highly recommended.",
    rating: 5,
    initials: "TA",
    color: GOLD,
    country: "Cyprus",
  },
  {
    name: "Chidinma Okafor",
    role: "Student, Georgia",
    text: "I was sceptical at first but Bolakin delivered on every promise. My accommodation was sorted before I even arrived. Truly stress-free.",
    rating: 5,
    initials: "CO",
    color: BLUE,
    country: "Georgia",
  },
  {
    name: "Emeka Obi",
    role: "Postgraduate, Anglia Ruskin",
    text: "They helped me secure a £5,000 postgraduate scholarship I didn't know I was eligible for. The whole team is responsive, knowledgeable, and genuinely caring.",
    rating: 5,
    initials: "EO",
    color: GOLD,
    country: "United Kingdom",
  },
];

export function Testimonials() {
  return (
    <div>
      <PageHero
        label="STUDENT STORIES"
        title="What Our"
        accent="Students Say"
        subtitle="Real stories from students we've helped get abroad."
      />

      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative flex flex-col p-7 rounded-3xl border transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "rgba(11,77,161,0.1)" }}
              >
                {/* Bubble tail */}
                <div
                  className="absolute -bottom-3 left-8 w-5 h-5 rotate-45 rounded-sm"
                  style={{ background: "white", border: "1px solid rgba(11,77,161,0.1)", borderTop: "none", borderLeft: "none" }}
                />

                {/* Quote mark */}
                <div
                  className="text-5xl font-black leading-none mb-4 opacity-20"
                  style={{ color: BLUE, fontFamily: "Outfit, sans-serif" }}
                >
                  "
                </div>

                {/* Country pill */}
                <div
                  className="inline-flex self-start px-3 py-1 rounded-full text-xs font-bold mb-4"
                  style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}
                >
                  ✈️ {t.country}
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
                  {t.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: GOLD }} />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{ background: t.color, color: t.color === GOLD ? NAVY : "white", fontFamily: "Outfit, sans-serif" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature image */}
          <div className="mt-16 max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-xl border-2" style={{ borderColor: "rgba(11,77,161,0.1)" }}>
            <ImageWithFallback
              src={imgTestimonials}
              alt="Bolakin Edu-Consult student testimonials"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-14" style={{ background: "#F4F7FB" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { value: "329+", label: "Success Stories Shared" },
              { value: "1,000+", label: "Followers Who Trust Us" },
              { value: "5★", label: "Average Student Rating" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-3xl bg-white border" style={{ borderColor: "rgba(11,77,161,0.1)" }}>
                <div className="text-4xl font-black mb-2" style={{ color: BLUE, fontFamily: "Outfit, sans-serif" }}>{stat.value}</div>
                <div className="text-sm" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: NAVY }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
            Join Hundreds Who <span style={{ color: GOLD }}>Trusted Us</span>
          </h2>
          <p className="text-white/60 text-sm mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Join hundreds of students who trusted us with their journey abroad.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity"
            style={{ background: GOLD, color: NAVY, fontFamily: "Outfit, sans-serif" }}
          >
            Start My Journey <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
