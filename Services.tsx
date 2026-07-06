import { useState } from "react";
import { ChevronDown, FileText, GraduationCap, Plane, Home, Award, Users, ChevronRight } from "lucide-react";
import { PageHero, BLUE, GOLD, NAVY, WA_LINK } from "@/app/components/shared";

const services = [
  {
    icon: FileText,
    title: "Admission Processing",
    tagline: "Your path to acceptance — handled end-to-end.",
    description:
      "We guide you through university selection and handle your application from start to finish, maximising your chances of admission. Whether it's undergraduate, postgraduate, or professional programmes, we know the requirements inside out.",
    steps: [
      "Choose the right country and university for your goals and budget",
      "Gather and organise all required academic documents",
      "Write a compelling personal statement and cover letter",
      "Submit your application and track its progress",
      "Receive and process your offer letter",
    ],
  },
  {
    icon: GraduationCap,
    title: "Visa Processing",
    tagline: "Expert documentation that gets approved.",
    description:
      "Our team prepares and reviews your visa documentation to give you the strongest possible application. We stay current with embassy requirements so nothing gets missed.",
    steps: [
      "Full visa consultation and eligibility check",
      "Document checklist preparation and review",
      "Filling and submission of visa application forms",
      "Interview preparation where required",
      "Follow-up with embassy on application status",
    ],
  },
  {
    icon: Plane,
    title: "Flight Ticketing",
    tagline: "Fly stress-free once your visa is approved.",
    description:
      "We arrange your flights so you can travel with zero stress once your visa is approved. We find the most convenient and affordable routes and handle all bookings on your behalf.",
    steps: [
      "Search for best-value flights on your preferred dates",
      "Book confirmed return or one-way ticket",
      "Send e-ticket and travel itinerary to you",
      "Assist with check-in requirements and luggage guidance",
      "24/7 support on travel day",
    ],
  },
  {
    icon: Home,
    title: "Accommodation Support",
    tagline: "Safe, affordable housing — ready before you land.",
    description:
      "We help you secure safe, affordable housing before you land in your new country. From university halls to private student housing, we guide you through the options available in your destination city.",
    steps: [
      "Understand your accommodation preferences and budget",
      "Research university-managed and private options",
      "Apply and secure housing ahead of arrival",
      "Confirm contracts and make deposit arrangements",
      "Provide arrival guide with address and local tips",
    ],
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    tagline: "Up to 100% tuition discount — don't leave money on the table.",
    description:
      "We match you with scholarship opportunities and help you apply for discounts of up to 100% on tuition. Our partner institutions offer automatic scholarships that many students don't even know exist.",
    steps: [
      "Identify scholarships for your chosen country and course",
      "Check eligibility and prepare supporting documents",
      "Write scholarship application letters",
      "Submit application alongside or ahead of university admission",
      "Confirm scholarship award and advise on next steps",
    ],
  },
  {
    icon: Users,
    title: "Private Consultation",
    tagline: "One-on-one guidance — your journey, your plan.",
    description:
      "One-on-one sessions to help you decide the right country, course, and pathway for your goals. Whether you're just starting to explore or ready to apply, we tailor every recommendation to your specific situation.",
    steps: [
      "Understand your academic background and career goals",
      "Map out country options that match your budget and timeline",
      "Compare university choices and programme structures",
      "Build a realistic application and travel timeline",
      "Answer all questions before you commit to a path",
    ],
  },
];

function ServiceCard({ svc }: { svc: typeof services[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-3xl border overflow-hidden transition-all duration-300"
      style={{ borderColor: open ? BLUE : "rgba(11,77,161,0.1)", borderWidth: open ? 2 : 1 }}
    >
      <button
        className="w-full text-left p-7 flex items-start gap-5 transition-colors hover:bg-blue-50/30"
        onClick={() => setOpen(!open)}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
          style={{ background: open ? BLUE : "#EBF2FF" }}
        >
          <svc.icon className="w-7 h-7" style={{ color: open ? "white" : BLUE }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-black mb-1" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{svc.title}</h3>
          <p className="text-sm" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>{svc.tagline}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 mt-1 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          style={{ color: BLUE }}
        />
      </button>

      {open && (
        <div className="px-7 pb-7 border-t" style={{ borderColor: "rgba(11,77,161,0.1)" }}>
          <p className="text-sm leading-relaxed mt-5 mb-6" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
            {svc.description}
          </p>
          <div className="mb-6">
            <div className="text-xs font-black tracking-widest uppercase mb-3" style={{ color: BLUE, fontFamily: "Outfit, sans-serif" }}>
              How It Works
            </div>
            <ol className="space-y-2.5">
              {svc.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                    style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <a
            href={`https://wa.me/2347019825460?text=Hi!%20I%27d%20like%20to%20get%20started%20with%20${encodeURIComponent(svc.title)}%20from%20Bolakin%20Edu-Consult.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:opacity-90"
            style={{ background: GOLD, color: NAVY, fontFamily: "Outfit, sans-serif" }}
          >
            Get Started — {svc.title}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}

export function Services() {
  return (
    <div>
      <PageHero
        label="WHAT WE OFFER"
        title="Our"
        accent="Services"
        subtitle="Everything you need to study, travel, and work abroad — handled by one trusted team."
      />

      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {services.map((svc) => (
              <ServiceCard key={svc.title} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: "#F4F7FB" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
            Not Sure Where to Start?
          </h2>
          <p className="text-sm mb-8" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
            Book a free private consultation and we'll map out the best path for your goals.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:opacity-90 shadow-lg"
            style={{ background: BLUE, color: "white", fontFamily: "Outfit, sans-serif" }}
          >
            Book Free Consultation <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
