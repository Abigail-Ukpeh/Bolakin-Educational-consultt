import { useState } from "react";
import { Phone, MapPin, Instagram, Facebook, MessageCircle, ChevronRight, CheckCircle, Send } from "lucide-react";
import { PageHero, BLUE, GOLD, NAVY, WA_LINK } from "@/app/components/shared";

const countries = [
  "Select Country of Interest", "Turkey", "Cyprus", "Georgia", "United Kingdom", "Ireland",
  "France", "Canada", "Poland", "United States", "Malta", "Netherlands", "Dubai",
  "Switzerland", "Australia", "Not Sure Yet",
];

type FormState = { name: string; email: string; phone: string; country: string; message: string };
const EMPTY: FormState = { name: "", email: "", phone: "", country: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.country || form.country === "Select Country of Interest") e.country = "Please select a country";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // Build WhatsApp message
    const waText = `Hi! I'd like to enquire about studying abroad with Bolakin Edu-Consult.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry of Interest: ${form.country}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/2347019825460?text=${encodeURIComponent(waText)}`, "_blank");
    setSubmitted(true);
    setForm(EMPTY);
    setErrors({});
  };

  const field = (id: keyof FormState, label: string, type = "text", placeholder = "") => (
    <div>
      <label className="block text-sm font-bold mb-2" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{label}</label>
      <input
        type={type}
        value={form[id]}
        onChange={(e) => { setForm((f) => ({ ...f, [id]: e.target.value })); setErrors((er) => ({ ...er, [id]: undefined })); }}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-2xl border outline-none text-sm transition-all focus:border-blue-500"
        style={{
          borderColor: errors[id] ? "#EF4444" : "rgba(11,77,161,0.15)",
          background: "#F4F7FB",
          color: NAVY,
          fontFamily: "Inter, sans-serif",
        }}
      />
      {errors[id] && <p className="mt-1 text-xs text-red-500" style={{ fontFamily: "Inter, sans-serif" }}>{errors[id]}</p>}
    </div>
  );

  return (
    <div>
      <PageHero
        label="GET IN TOUCH"
        title="Let's Get You"
        accent="Started"
        subtitle="Reach out today — we deliver as promised."
      />

      <section className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
                SEND US A MESSAGE
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>
                Fill the Form &amp; We'll <span style={{ color: BLUE }}>Respond Fast</span>
              </h2>

              {submitted ? (
                <div className="p-8 rounded-3xl text-center" style={{ background: "#EBF2FF" }}>
                  <CheckCircle className="w-14 h-14 mx-auto mb-4" style={{ color: BLUE }} />
                  <h3 className="text-xl font-black mb-2" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>Message Sent!</h3>
                  <p className="text-sm mb-6" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>
                    Your enquiry has been sent to our WhatsApp. We'll get back to you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full font-bold text-sm"
                    style={{ background: BLUE, color: "white", fontFamily: "Outfit, sans-serif" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {field("name", "Full Name", "text", "e.g. Adaeze Nwosu")}
                    {field("email", "Email Address", "email", "you@example.com")}
                  </div>
                  {field("phone", "Phone Number", "tel", "+234 800 000 0000")}

                  {/* Country dropdown */}
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>Country of Interest</label>
                    <select
                      value={form.country}
                      onChange={(e) => { setForm((f) => ({ ...f, country: e.target.value })); setErrors((er) => ({ ...er, country: undefined })); }}
                      className="w-full px-4 py-3 rounded-2xl border outline-none text-sm transition-all focus:border-blue-500"
                      style={{
                        borderColor: errors.country ? "#EF4444" : "rgba(11,77,161,0.15)",
                        background: "#F4F7FB",
                        color: form.country && form.country !== "Select Country of Interest" ? NAVY : "#5A6A8A",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {countries.map((c) => (
                        <option key={c} value={c === "Select Country of Interest" ? "" : c}>{c}</option>
                      ))}
                    </select>
                    {errors.country && <p className="mt-1 text-xs text-red-500" style={{ fontFamily: "Inter, sans-serif" }}>{errors.country}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold mb-2" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => { setForm((f) => ({ ...f, message: e.target.value })); setErrors((er) => ({ ...er, message: undefined })); }}
                      placeholder="Tell us about your study goals, timeline, and any questions you have..."
                      className="w-full px-4 py-3 rounded-2xl border outline-none text-sm transition-all focus:border-blue-500 resize-none"
                      style={{
                        borderColor: errors.message ? "#EF4444" : "rgba(11,77,161,0.15)",
                        background: "#F4F7FB",
                        color: NAVY,
                        fontFamily: "Inter, sans-serif",
                      }}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500" style={{ fontFamily: "Inter, sans-serif" }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base transition-all hover:opacity-90"
                    style={{ background: BLUE, color: "white", fontFamily: "Outfit, sans-serif" }}
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-6" style={{ background: "#EBF2FF", color: BLUE, fontFamily: "Outfit, sans-serif" }}>
                  CONTACT INFORMATION
                </div>
                <div className="space-y-4">
                  {["0906 439 1093", "0816 090 0787", "+234 701 982 5460"].map((num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 p-4 rounded-2xl border transition-all hover:border-blue-300 hover:shadow-md"
                      style={{ borderColor: "rgba(11,77,161,0.1)" }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EBF2FF" }}>
                        <Phone className="w-5 h-5" style={{ color: BLUE }} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>Call or WhatsApp</div>
                        <div className="font-bold text-sm" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{num}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Offices */}
              <div>
                <h3 className="text-sm font-black tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "Outfit, sans-serif" }}>Our Offices</h3>
                <div className="space-y-4">
                  {[
                    { city: "Lagos", address: "No 8, Akinsetan Street, Badore Ajah, Lagos" },
                    { city: "Abeokuta", address: "Shop 17, Mosque New Complex, 5 Somorin Street, opposite Araromi Street, Abeokuta 110121, Ogun State" },
                  ].map((o) => (
                    <div key={o.city} className="flex gap-3 p-4 rounded-2xl border" style={{ borderColor: "rgba(11,77,161,0.1)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EBF2FF" }}>
                        <MapPin className="w-5 h-5" style={{ color: BLUE }} />
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-0.5" style={{ color: NAVY, fontFamily: "Outfit, sans-serif" }}>{o.city}</div>
                        <div className="text-xs leading-relaxed" style={{ color: "#5A6A8A", fontFamily: "Inter, sans-serif" }}>{o.address}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-sm font-black tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "Outfit, sans-serif" }}>Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://instagram.com/bolakineduconsult_" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-bold transition-all hover:shadow-md"
                    style={{ borderColor: "rgba(11,77,161,0.15)", color: NAVY, fontFamily: "Outfit, sans-serif" }}>
                    <Instagram className="w-4 h-4" style={{ color: BLUE }} /> @bolakineduconsult_
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-bold transition-all hover:shadow-md"
                    style={{ borderColor: "rgba(11,77,161,0.15)", color: NAVY, fontFamily: "Outfit, sans-serif" }}>
                    <Facebook className="w-4 h-4" style={{ color: BLUE }} /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA banner */}
      <section className="py-14" style={{ background: "#F4F7FB" }}>
        <div
          className="max-w-3xl mx-auto mx-4 sm:mx-auto px-8 py-10 rounded-3xl flex flex-col sm:flex-row items-center gap-6"
          style={{ background: `linear-gradient(135deg, #1A7A2E 0%, #25D366 100%)` }}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
              Prefer to Chat?
            </h3>
            <p className="text-white/80 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              Message us directly on WhatsApp for instant answers.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm flex-shrink-0 hover:opacity-90 transition-opacity"
            style={{ background: "white", color: "#1A7A2E", fontFamily: "Outfit, sans-serif" }}
          >
            Chat Now <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
